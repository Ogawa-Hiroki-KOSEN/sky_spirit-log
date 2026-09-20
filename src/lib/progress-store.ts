import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  type Cost,
  type Currency,
  type ExchangeNode,
  type Spirit,
  type Stage,
  ELDERS,
  SPIRITS,
  addCost,
  costOfNodes,
  emptyCost,
  visibleNodes,
} from "./sky-data";

export type SeasonalSpirit = {
  id: string;
  name: string;
  season: string;
  stages: Stage[];
};

export type ProgressState = {
  hydrated: boolean;
  includeT2: boolean;
  /** spiritId -> completed node ids */
  nodes: Record<string, string[]>;
  elders: Record<string, boolean>;
  seasonal: SeasonalSpirit[];
  setHydrated: () => void;
  setIncludeT2: (v: boolean) => void;
  toggleNode: (spiritId: string, nodeId: string) => void;
  setStage: (spiritId: string, stage: Stage, done: boolean) => void;
  setSpiritAll: (spirit: Spirit, done: boolean, includeT2: boolean) => void;
  toggleElder: (id: string) => void;
  addSeasonal: (s: SeasonalSpirit) => void;
  updateSeasonal: (id: string, patch: Partial<SeasonalSpirit>) => void;
  removeSeasonal: (id: string) => void;
  addSeasonalNode: (spiritId: string, node: ExchangeNode, stageId?: string) => void;
  removeSeasonalNode: (spiritId: string, nodeId: string) => void;
  importState: (data: Partial<Pick<ProgressState, "nodes" | "elders" | "seasonal" | "includeT2">>) => void;
  resetAll: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      includeT2: false,
      nodes: {},
      elders: {},
      seasonal: [],
      setHydrated: () => set({ hydrated: true }),
      setIncludeT2: (includeT2) => set({ includeT2 }),
      toggleNode: (spiritId, nodeId) => {
        const cur = new Set(get().nodes[spiritId] ?? []);
        if (cur.has(nodeId)) cur.delete(nodeId);
        else cur.add(nodeId);
        set({ nodes: { ...get().nodes, [spiritId]: [...cur] } });
      },
      setStage: (spiritId, stage, done) => {
        const cur = new Set(get().nodes[spiritId] ?? []);
        for (const n of stage.nodes) {
          if (done) cur.add(n.id);
          else cur.delete(n.id);
        }
        set({ nodes: { ...get().nodes, [spiritId]: [...cur] } });
      },
      setSpiritAll: (spirit, done, includeT2) => {
        const cur = new Set(get().nodes[spirit.id] ?? []);
        const list = visibleNodes(spirit, includeT2);
        for (const n of list) {
          if (done) cur.add(n.id);
          else cur.delete(n.id);
        }
        set({ nodes: { ...get().nodes, [spirit.id]: [...cur] } });
      },
      toggleElder: (id) => {
        set({ elders: { ...get().elders, [id]: !get().elders[id] } });
      },
      addSeasonal: (s) => set({ seasonal: [...get().seasonal, s] }),
      updateSeasonal: (id, patch) =>
        set({
          seasonal: get().seasonal.map((s) => (s.id === id ? { ...s, ...patch } : s)),
        }),
      removeSeasonal: (id) => {
        const { [id]: _, ...rest } = get().nodes;
        set({ seasonal: get().seasonal.filter((s) => s.id !== id), nodes: rest });
      },
      addSeasonalNode: (spiritId, node, stageId) => {
        set({
          seasonal: get().seasonal.map((s) => {
            if (s.id !== spiritId) return s;
            const sid = stageId ?? s.stages[0]?.id;
            if (!sid) {
              const st: Stage = { id: `${s.id}__s1`, label: "段階1", nodes: [node] };
              return { ...s, stages: [st] };
            }
            return {
              ...s,
              stages: s.stages.map((st) =>
                st.id === sid ? { ...st, nodes: [...st.nodes, node] } : st,
              ),
            };
          }),
        });
      },
      removeSeasonalNode: (spiritId, nodeId) => {
        set({
          seasonal: get().seasonal.map((s) =>
            s.id !== spiritId
              ? s
              : {
                  ...s,
                  stages: s.stages.map((st) => ({
                    ...st,
                    nodes: st.nodes.filter((n) => n.id !== nodeId),
                  })),
                },
          ),
        });
      },
      importState: (data) =>
        set({
          nodes: data.nodes ?? get().nodes,
          elders: data.elders ?? get().elders,
          seasonal: data.seasonal ?? get().seasonal,
          includeT2: data.includeT2 ?? get().includeT2,
        }),
      resetAll: () => set({ nodes: {}, elders: {}, seasonal: [] }),
    }),
    {
      name: "sky-spirit-tracker-v3",
      skipHydration: true,
      onRehydrateStorage: () => () => {
        useProgress.setState({ hydrated: true });
      },
      partialize: (s) => ({
        includeT2: s.includeT2,
        nodes: s.nodes,
        elders: s.elders,
        seasonal: s.seasonal,
      }),
    },
  ),
);

export function isNodeDone(nodes: Record<string, string[]>, spiritId: string, nodeId: string) {
  return (nodes[spiritId] ?? []).includes(nodeId);
}

export function remainingForSpirit(
  spirit: { stages: Stage[] },
  completed: string[],
  includeT2: boolean,
): Cost {
  const done = new Set(completed);
  const leftover = visibleNodes(spirit, includeT2).filter((n) => !done.has(n.id));
  return costOfNodes(leftover);
}

export function progressOfSpirit(
  spirit: { stages: Stage[] },
  completed: string[],
  includeT2: boolean,
): { done: number; total: number } {
  const list = visibleNodes(spirit, includeT2);
  const payable = list.filter((n) => n.cost > 0 || n.label.length > 0);
  const doneSet = new Set(completed);
  return {
    done: payable.filter((n) => doneSet.has(n.id)).length,
    total: payable.length,
  };
}

export function remainingRegular(nodes: Record<string, string[]>, includeT2: boolean): Cost {
  return SPIRITS.reduce(
    (acc, s) => addCost(acc, remainingForSpirit(s, nodes[s.id] ?? [], includeT2)),
    emptyCost(),
  );
}

export function remainingElders(elders: Record<string, boolean>): number {
  return ELDERS.reduce((sum, e) => sum + (elders[e.id] ? 0 : e.ac), 0);
}

export function remainingSeasonal(
  seasonal: SeasonalSpirit[],
  nodes: Record<string, string[]>,
  includeT2: boolean,
): Cost {
  return seasonal.reduce((acc, s) => {
    const leftover = visibleNodes(s, includeT2).filter(
      (n) => !(nodes[s.id] ?? []).includes(n.id),
    );
    return addCost(acc, costOfNodes(leftover));
  }, emptyCost());
}

export function newSeasonalId() {
  return `seasonal_${Date.now().toString(36)}`;
}

export function makeSeasonalNode(
  spiritId: string,
  label: string,
  currency: Currency,
  cost: number,
): ExchangeNode {
  return {
    id: `${spiritId}__n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
    label,
    currency,
    cost,
  };
}
