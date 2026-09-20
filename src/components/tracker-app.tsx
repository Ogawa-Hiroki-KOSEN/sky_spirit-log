import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Download,
  Flame,
  Heart,
  Plus,
  RotateCcw,
  Star,
  Trash2,
  Upload,
} from "lucide-react";
import {
  CURRENCY_LABEL,
  ELDERS,
  REALMS,
  SEASON_PRESETS,
  SPIRITS,
  type Cost,
  type Currency,
  type ExchangeNode,
  type Spirit,
  type Stage,
  costOfNodes,
  visibleStages,
} from "@/lib/sky-data";
import {
  isNodeDone,
  makeSeasonalNode,
  newSeasonalId,
  progressOfSpirit,
  remainingElders,
  remainingForSpirit,
  remainingRegular,
  remainingSeasonal,
  useProgress,
  type SeasonalSpirit,
} from "@/lib/progress-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tab = "regular" | "elders" | "seasonal" | "data";

const EMPTY_IDS: string[] = [];

function CostBits({ cost, compact }: { cost: Cost; compact?: boolean }) {
  const items: { key: keyof Cost; icon: typeof Flame; cls: string }[] = [
    { key: "candle", icon: Flame, cls: "text-candle" },
    { key: "heart", icon: Heart, cls: "text-heart" },
    { key: "ac", icon: Star, cls: "text-ac" },
  ];
  return (
    <span className={cn("inline-flex items-center tabular", compact ? "gap-2" : "gap-3")}>
      {items.map(({ key, icon: Icon, cls }) => (
        <span key={key} className={cn("inline-flex items-center gap-1", cls)}>
          <Icon className={compact ? "size-3.5" : "size-4"} strokeWidth={1.75} />
          <span className={compact ? "text-xs" : "text-sm font-medium"}>{cost[key]}</span>
        </span>
      ))}
    </span>
  );
}

function NodeRow({
  spiritId,
  node,
}: {
  spiritId: string;
  node: ExchangeNode;
}) {
  const done = useProgress((s) => isNodeDone(s.nodes, spiritId, node.id));
  const toggle = useProgress((s) => s.toggleNode);
  const free = node.cost === 0;
  return (
    <button
      type="button"
      onClick={() => toggle(spiritId, node.id)}
      className={cn(
        "flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left transition-colors duration-[var(--motion-quick)]",
        done ? "bg-muted/60 text-fg-muted" : "hover:bg-muted/80",
      )}
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-sm border",
          done ? "border-success bg-success text-bg" : "border-border",
        )}
      >
        {done ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
      </span>
      <span className={cn("flex-1 text-sm", done && "line-through")}>{node.label}</span>
      {node.grantsHeart ? (
        <span className="text-xs text-heart">入手 +1</span>
      ) : null}
      {free ? (
        <span className="text-xs text-fg-subtle">無料</span>
      ) : (
        <span
          className={cn(
            "inline-flex items-center gap-1 text-sm tabular",
            node.currency === "candle" && "text-candle",
            node.currency === "heart" && "text-heart",
            node.currency === "ac" && "text-ac",
          )}
        >
          {node.currency === "candle" && <Flame className="size-3.5" />}
          {node.currency === "heart" && <Heart className="size-3.5" />}
          {node.currency === "ac" && <Star className="size-3.5" />}
          {node.cost}
        </span>
      )}
    </button>
  );
}

function StageBlock({ spirit, stage }: { spirit: Spirit; stage: Stage }) {
  const completed = useProgress((s) => s.nodes[spirit.id] ?? EMPTY_IDS);
  const setStage = useProgress((s) => s.setStage);
  const doneSet = new Set(completed);
  const allDone = stage.nodes.every((n) => doneSet.has(n.id));
  const leftover = costOfNodes(stage.nodes.filter((n) => !doneSet.has(n.id)));
  return (
    <div className="rounded-md border border-border bg-elevated/50 p-2">
      <div className="mb-1 flex items-center justify-between gap-2 px-2 py-1">
        <p className="text-xs font-medium tracking-wide text-fg-muted">{stage.label}</p>
        <div className="flex items-center gap-2">
          {!allDone ? <CostBits cost={leftover} compact /> : (
            <span className="text-xs text-success">完了</span>
          )}
          <button
            type="button"
            className="h-8 rounded-md px-2 text-xs text-fg-muted hover:bg-muted hover:text-fg"
            onClick={() => setStage(spirit.id, stage, !allDone)}
          >
            {allDone ? "解除" : "この段階を完了"}
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {stage.nodes.map((n) => (
          <NodeRow key={n.id} spiritId={spirit.id} node={n} />
        ))}
      </div>
    </div>
  );
}

function SpiritCard({ spirit }: { spirit: Spirit }) {
  const [open, setOpen] = useState(false);
  const includeT2 = useProgress((s) => s.includeT2);
  const completed = useProgress((s) => s.nodes[spirit.id] ?? EMPTY_IDS);
  const setSpiritAll = useProgress((s) => s.setSpiritAll);
  const stages = visibleStages(spirit, includeT2);
  const prog = progressOfSpirit(spirit, completed, includeT2);
  const remain = remainingForSpirit(spirit, completed, includeT2);
  const allDone = prog.total > 0 && prog.done === prog.total;
  const pct = prog.total ? Math.round((prog.done / prog.total) * 100) : 0;

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-md border text-xs tabular",
            allDone ? "border-success text-success" : "border-border text-fg-muted",
          )}
        >
          {pct}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium">{spirit.name}</span>
          <span className="mt-0.5 block text-xs text-fg-muted">
            {prog.done}/{prog.total} 項目
          </span>
        </span>
        <CostBits cost={remain} compact />
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-fg-subtle transition-transform duration-[var(--motion-fast)]",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="space-y-2 border-t border-border px-3 pb-3 pt-2">
          <div className="flex justify-end">
            <button
              type="button"
              className="h-8 rounded-md px-2 text-xs text-fg-muted hover:bg-muted hover:text-fg"
              onClick={() => setSpiritAll(spirit, !allDone, includeT2)}
            >
              {allDone ? "この精霊を未完了に" : "表示中の全段階を完了"}
            </button>
          </div>
          {stages.map((st) => (
            <StageBlock key={st.id} spirit={spirit} stage={st} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

function SummaryStrip() {
  const includeT2 = useProgress((s) => s.includeT2);
  const nodes = useProgress((s) => s.nodes);
  const elders = useProgress((s) => s.elders);
  const seasonal = useProgress((s) => s.seasonal);
  const regular = remainingRegular(nodes, includeT2);
  const elderAc = remainingElders(elders);
  const season = remainingSeasonal(seasonal, nodes, includeT2);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-xs text-fg-muted">恒常 残り</p>
        <div className="mt-2">
          <CostBits cost={regular} />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-xs text-fg-muted">大精霊 残り</p>
        <p className="mt-2 inline-flex items-center gap-1 text-ac">
          <Star className="size-4" />
          <span className="text-lg font-medium tabular">{elderAc}</span>
        </p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-xs text-fg-muted">季節 残り</p>
        <div className="mt-2">
          <CostBits cost={season} />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-xs text-fg-muted">星キャンドル合計</p>
        <p className="mt-2 text-lg font-medium tabular text-ac">
          {regular.ac + elderAc + season.ac}
        </p>
      </div>
    </div>
  );
}

function RegularPanel() {
  const includeT2 = useProgress((s) => s.includeT2);
  const setIncludeT2 = useProgress((s) => s.setIncludeT2);
  const nodes = useProgress((s) => s.nodes);
  const [hideDone, setHideDone] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex overflow-hidden rounded-full border border-border">
          <button
            type="button"
            className={cn("h-10 px-3 text-sm", !includeT2 ? "bg-primary text-primary-foreground" : "text-fg-muted")}
            onClick={() => setIncludeT2(false)}
          >
            星座100%
          </button>
          <button
            type="button"
            className={cn("h-10 px-3 text-sm", includeT2 ? "bg-primary text-primary-foreground" : "text-fg-muted")}
            onClick={() => setIncludeT2(true)}
          >
            全交換・T2込
          </button>
        </div>
        <button
          type="button"
          className={cn(
            "h-10 rounded-full border px-3 text-sm",
            hideDone ? "border-primary text-fg" : "border-border text-fg-muted",
          )}
          onClick={() => setHideDone((v) => !v)}
        >
          未完了のみ
        </button>
      </div>
      {REALMS.map((realm) => {
        const list = SPIRITS.filter((s) => s.realm === realm.id).filter((s) => {
          if (!hideDone) return true;
          const p = progressOfSpirit(s, nodes[s.id] ?? [], includeT2);
          return p.done < p.total;
        });
        if (list.length === 0) return null;
        const remain = list.reduce(
          (acc, s) => {
            const r = remainingForSpirit(s, nodes[s.id] ?? [], includeT2);
            acc.candle += r.candle;
            acc.heart += r.heart;
            acc.ac += r.ac;
            return acc;
          },
          { candle: 0, heart: 0, ac: 0 },
        );
        return (
          <section key={realm.id} className="space-y-2">
            <div className="flex items-end justify-between gap-2 px-1">
              <h2 className="font-display text-xl">{realm.name}</h2>
              <CostBits cost={remain} compact />
            </div>
            <div className="space-y-2">
              {list.map((s) => (
                <SpiritCard key={s.id} spirit={s} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function EldersPanel() {
  const elders = useProgress((s) => s.elders);
  const toggle = useProgress((s) => s.toggleElder);
  return (
    <div className="space-y-4">
      <p className="text-sm text-fg-muted">
        星座100%のあと、原罪をクリアして天空で大精霊と交換します。項目ごとに記録できます。
      </p>
      {REALMS.map((realm) => {
        const list = ELDERS.filter((e) => e.realm === realm.id);
        if (!list.length) return null;
        return (
          <section key={realm.id} className="overflow-hidden rounded-xl border border-border bg-surface">
            <h2 className="border-b border-border px-4 py-3 font-display text-lg">{realm.name}</h2>
            <div className="p-2">
              {list.map((e) => {
                const done = !!elders[e.id];
                return (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => toggle(e.id)}
                    className={cn(
                      "flex min-h-12 w-full items-center gap-3 rounded-md px-3 text-left",
                      done && "text-fg-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 items-center justify-center rounded-sm border",
                        done ? "border-success bg-success text-bg" : "border-border",
                      )}
                    >
                      {done ? <Check className="size-3.5" /> : null}
                    </span>
                    <span className={cn("flex-1 text-sm", done && "line-through")}>{e.name}</span>
                    <span className="inline-flex items-center gap-1 text-ac tabular">
                      <Star className="size-3.5" />
                      {e.ac}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function SeasonalPanel() {
  const seasonal = useProgress((s) => s.seasonal);
  const add = useProgress((s) => s.addSeasonal);
  const remove = useProgress((s) => s.removeSeasonal);
  const addNode = useProgress((s) => s.addSeasonalNode);
  const removeNode = useProgress((s) => s.removeSeasonalNode);
  const [name, setName] = useState("");
  const [season, setSeason] = useState(SEASON_PRESETS[0]);
  const [nlabel, setNlabel] = useState("");
  const [ncur, setNcur] = useState<Currency>("candle");
  const [ncost, setNcost] = useState("1");
  const [target, setTarget] = useState<string>("");

  function onAddSpirit() {
    if (!name.trim()) return;
    const id = newSeasonalId();
    const s: SeasonalSpirit = {
      id,
      name: name.trim(),
      season,
      stages: [{ id: `${id}__s1`, label: "段階1", nodes: [] }],
    };
    add(s);
    setTarget(id);
    setName("");
  }

  function onAddNode() {
    if (!target || !nlabel.trim()) return;
    const cost = Number(ncost) || 0;
    addNode(target, makeSeasonalNode(target, nlabel.trim(), ncur, cost));
    setNlabel("");
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-fg-muted">
        再訪精霊はコストが変わるため、段階（ノード）を自分で追加してチェックします。
      </p>
      <div className="rounded-xl border border-border bg-surface p-4">
        <h2 className="font-medium">精霊を追加</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="精霊名"
            className="h-11 rounded-md border border-border bg-bg px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="h-11 rounded-md border border-border bg-bg px-3 text-sm"
          >
            {SEASON_PRESETS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <Button onClick={onAddSpirit}>
            <Plus className="size-4" />
            追加
          </Button>
        </div>
      </div>

      {seasonal.length === 0 ? (
        <p className="py-8 text-center text-sm text-fg-muted">まだ季節精霊はありません。</p>
      ) : (
        <div className="space-y-3">
          {seasonal.map((s) => (
            <article key={s.id} className="rounded-xl border border-border bg-surface p-3">
              <div className="flex items-start justify-between gap-2 px-1">
                <div>
                  <h3 className="font-medium">{s.name}</h3>
                  <p className="text-xs text-fg-muted">{s.season}</p>
                </div>
                <button
                  type="button"
                  className="size-11 text-fg-subtle hover:text-danger"
                  aria-label="削除"
                  onClick={() => remove(s.id)}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="mt-2 space-y-1">
                {s.stages.flatMap((st) =>
                  st.nodes.map((n) => (
                    <div key={n.id} className="flex items-center gap-1">
                      <div className="flex-1">
                        <NodeRow spiritId={s.id} node={n} />
                      </div>
                      <button
                        type="button"
                        className="size-11 text-fg-subtle hover:text-danger"
                        aria-label="項目を削除"
                        onClick={() => removeNode(s.id, n.id)}
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  )),
                )}
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                <input
                  value={target === s.id ? nlabel : ""}
                  onChange={(e) => {
                    setTarget(s.id);
                    setNlabel(e.target.value);
                  }}
                  onFocus={() => setTarget(s.id)}
                  placeholder="項目名（例: ケープ）"
                  className="h-11 rounded-md border border-border bg-bg px-3 text-sm sm:col-span-2"
                />
                <select
                  value={target === s.id ? ncur : "candle"}
                  onChange={(e) => {
                    setTarget(s.id);
                    setNcur(e.target.value as Currency);
                  }}
                  className="h-11 rounded-md border border-border bg-bg px-3 text-sm"
                >
                  {(Object.keys(CURRENCY_LABEL) as Currency[]).map((c) => (
                    <option key={c} value={c}>
                      {CURRENCY_LABEL[c]}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <input
                    value={target === s.id ? ncost : "1"}
                    onChange={(e) => {
                      setTarget(s.id);
                      setNcost(e.target.value);
                    }}
                    inputMode="numeric"
                    className="h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
                  />
                  <Button size="icon" onClick={onAddNode} aria-label="項目追加">
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function DataPanel() {
  const nodes = useProgress((s) => s.nodes);
  const elders = useProgress((s) => s.elders);
  const seasonal = useProgress((s) => s.seasonal);
  const includeT2 = useProgress((s) => s.includeT2);
  const importState = useProgress((s) => s.importState);
  const resetAll = useProgress((s) => s.resetAll);

  function exportJson() {
    const blob = new Blob(
      [JSON.stringify({ nodes, elders, seasonal, includeT2 }, null, 2)],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `sky-tracker-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  }

  function onImport(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        importState(data);
      } catch {
        /* ignore */
      }
    };
    reader.readAsText(file);
  }

  const preview = useMemo(
    () => JSON.stringify({ nodes, elders, seasonal, includeT2 }, null, 2),
    [nodes, elders, seasonal, includeT2],
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={exportJson}>
          <Download className="size-4" />
          書き出し
        </Button>
        <label className="inline-flex">
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onImport(f);
              e.target.value = "";
            }}
          />
          <span className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-secondary px-4 text-sm font-medium">
            <Upload className="size-4" />
            読み込み
          </span>
        </label>
        <Button
          variant="destructive"
          onClick={() => {
            if (window.confirm("すべての交換記録を消しますか？")) resetAll();
          }}
        >
          <RotateCcw className="size-4" />
          リセット
        </Button>
      </div>
      <p className="text-sm text-fg-muted">
        記録はこの端末のブラウザに保存されます。書き出したJSONを保管すれば別端末でも復元できます。
      </p>
      <pre className="max-h-80 overflow-auto rounded-xl border border-border bg-surface p-3 text-xs text-fg-muted">
        {preview}
      </pre>
    </div>
  );
}

const TABS: { id: Tab; label: string }[] = [
  { id: "regular", label: "恒常精霊" },
  { id: "elders", label: "大精霊" },
  { id: "seasonal", label: "季節精霊" },
  { id: "data", label: "データ" },
];

export function TrackerApp() {
  const hydrated = useProgress((s) => s.hydrated);
  const setHydrated = useProgress((s) => s.setHydrated);
  const [tab, setTab] = useState<Tab>("regular");

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setHydrated();
    };
    void Promise.resolve(useProgress.persist.rehydrate()).then(finish, finish);
    return () => {
      cancelled = true;
    };
  }, [setHydrated]);

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-fg-muted">
        読み込み中…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8">
      <header className="mb-6">
        <p className="text-xs tracking-[0.2em] text-fg-subtle">SKY CHILDREN OF THE LIGHT</p>
        <h1 className="font-display mt-1 text-3xl font-medium tracking-tight">精霊交換帳</h1>
        <p className="mt-2 text-sm text-fg-muted">
          友情ツリーを段階ごとに記録し、残りキャンドル・ハート・星キャンドルを集計します。
        </p>
      </header>
      <SummaryStrip />
      <nav className="sticky top-0 z-10 -mx-4 mt-6 mb-4 bg-bg/90 px-4 py-2 backdrop-blur-sm">
        <div className="flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-sm",
                tab === t.id ? "bg-primary text-primary-foreground" : "text-fg-muted hover:bg-muted",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>
      {tab === "regular" && <RegularPanel />}
      {tab === "elders" && <EldersPanel />}
      {tab === "seasonal" && <SeasonalPanel />}
      {tab === "data" && <DataPanel />}
    </div>
  );
}
