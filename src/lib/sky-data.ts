export type RealmId =
  | "isle"
  | "prairie"
  | "forest"
  | "valley"
  | "wasteland"
  | "vault";

export type Currency = "candle" | "heart" | "ac";

export type ExchangeNode = {
  id: string;
  label: string;
  currency: Currency;
  cost: number;
  /** キャンドル3本でハート1個を入手 */
  grantsHeart?: boolean;
  t2?: boolean;
};

export type Stage = {
  id: string;
  label: string;
  t2?: boolean;
  nodes: ExchangeNode[];
};

export type Spirit = {
  id: string;
  name: string;
  realm: RealmId;
  stages: Stage[];
};

export type ElderGift = {
  id: string;
  realm: RealmId;
  name: string;
  ac: number;
};

export const REALMS: { id: RealmId; name: string; short: string }[] = [
  { id: "isle", name: "孤島", short: "孤島" },
  { id: "prairie", name: "草原", short: "草原" },
  { id: "forest", name: "雨林", short: "雨林" },
  { id: "valley", name: "峡谷", short: "峡谷" },
  { id: "wasteland", name: "捨てられた地", short: "捨て地" },
  { id: "vault", name: "書庫", short: "書庫" },
];

export const CURRENCY_LABEL: Record<Currency, string> = {
  candle: "キャンドル",
  heart: "ハート",
  ac: "星キャンドル",
};

type Flag = "heart" | "t2";
type RawNode = [suffix: string, label: string, currency: Currency, cost: number, flag?: Flag];
type RawStage = [suffix: string, label: string, nodes: RawNode[], t2?: boolean];

function build(id: string, name: string, realm: RealmId, raw: RawStage[]): Spirit {
  return {
    id,
    name,
    realm,
    stages: raw.map(([suffix, label, nodes, t2]) => ({
      id: `${id}__${suffix}`,
      label,
      t2,
      nodes: nodes.map(([ns, nlabel, currency, cost, flag]) => ({
        id: `${id}__${suffix}__${ns}`,
        label: nlabel,
        currency,
        cost,
        grantsHeart: flag === "heart" || undefined,
        t2: t2 || flag === "t2" || undefined,
      })),
    })),
  };
}

export const SPIRITS: Spirit[] = [
  build("pointing_candlemaker", "指差すキャンドル職人", "isle", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["fit", "衣装", "heart", 4],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("ushering_stargazer", "先導する星読み", "isle", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["fit", "衣装", "heart", 4],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("rejecting_voyager", "固辞する航行者", "isle", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["fit", "衣装", "heart", 4],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),

  build("applauding_bellmaker", "賞賛する鐘の造り手", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 3],
      ["lv4", "感情表現 Lv4", "candle", 3],
      ["fit", "衣装", "heart", 3],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("bird_whisperer", "鳥の語り部", "prairie", [
    ["s1", "段階1 基盤", [
      ["call", "ボイス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 6],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("butterfly_charmer", "蝶々使い", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["acc", "小物", "heart", 3],
      ["fit", "衣装", "heart", 4],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 3],
      ["cape2", "T2 ケープ", "heart", 9],
    ], true],
  ]),
  build("ceremonial_worshiper", "儀式の崇拝者", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [["b5", "祝福", "candle", 5]]],
  ]),
  build("exhausted_dock_worker", "疲れた港の労働者", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["fit", "衣装", "heart", 3],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("laughing_light_catcher", "笑う光の捕り手", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["acc", "小物", "heart", 5],
      ["fit", "衣装", "heart", 5],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("slumbering_shipwright", "眠る船大工", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["fit", "衣装", "heart", 3],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("waving_bellmaker", "手を振る鐘の造り手", "prairie", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 1],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 2],
      ["lv4", "感情表現 Lv4", "candle", 2],
      ["acc", "小物", "heart", 2],
      ["fit", "衣装", "heart", 5],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["lv5", "感情表現 Lv5", "candle", 3],
      ["lv6", "感情表現 Lv6", "candle", 3],
      ["wing2", "T2 翼バフ", "ac", 6],
    ], true],
  ]),

  build("apologetic_lumberjack", "謝る木こり", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 3],
      ["lv4", "感情表現 Lv4", "candle", 3],
      ["fit", "衣装", "heart", 8],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("blushing_prospector", "赤面する探鉱者", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["fit", "衣装", "heart", 8],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("dismayed_hunter", "落胆した狩人", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["acc", "小物", "heart", 5],
      ["cape", "ケープ", "heart", 30],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 9],
      ["cape2", "T2 ケープ", "heart", 90],
    ], true],
  ]),
  build("hide_n_seek_pioneer", "かくれんぼの開拓者", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["acc", "小物", "heart", 5],
      ["cape", "ケープ", "heart", 17],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 6],
      ["cape2", "T2 ケープ", "heart", 15],
    ], true],
  ]),
  build("pouty_porter", "ふくれっ面の運搬者", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["acc", "小物", "heart", 3],
      ["cape", "ケープ", "heart", 20],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 6],
      ["cape2", "T2 ケープ", "heart", 60],
    ], true],
  ]),
  build("shivering_trailblazer", "震える道開拓者", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 2],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 3],
      ["lv4", "感情表現 Lv4", "candle", 3],
      ["fit", "衣装", "heart", 7],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("tearful_light_miner", "涙の光の鉱夫", "forest", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["fit", "衣装", "heart", 3],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["lv5", "感情表現 Lv5", "candle", 5],
      ["lv6", "感情表現 Lv6", "candle", 5],
      ["wing2", "T2 翼バフ", "ac", 3],
    ], true],
  ]),
  build("whale_whisperer", "クジラの語り部", "forest", [
    ["s1", "段階1 基盤", [
      ["call", "ボイス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 2],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),

  build("backflipping_champion", "宙返りするチャンピオン", "valley", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["fit", "衣装", "heart", 10],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("bowing_medalist", "お辞儀するメダリスト", "valley", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["fit", "衣装", "heart", 10],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("cheerful_spectator", "陽気な観客", "valley", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["acc", "小物", "heart", 5],
      ["fit", "衣装", "heart", 10],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("confident_sightseer", "自信満々の観光客", "valley", [
    ["s1", "段階1 基盤", [
      ["stance", "スタンス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 7],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("handstanding_thrillseeker", "逆立ちするスリル好き", "valley", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 4],
      ["lv4", "感情表現 Lv4", "candle", 4],
      ["cape", "ケープ", "heart", 40],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 9],
      ["cape2", "T2 ケープ", "heart", 120],
    ], true],
  ]),
  build("manta_whisperer", "マンタの語り部", "valley", [
    ["s1", "段階1 基盤", [
      ["call", "ボイス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 3],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("proud_victor", "誇らしい勝者", "valley", [
    ["s1", "段階1 基盤", [
      ["stance", "スタンス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["cape", "ケープ", "heart", 40],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 9],
      ["cape2", "T2 ケープ", "heart", 30],
    ], true],
  ]),

  build("courageous_soldier", "勇敢な兵士", "wasteland", [
    ["s1", "段階1 基盤", [
      ["stance", "スタンス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 19],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 6],
      ["cape2", "T2 ケープ", "heart", 45],
    ], true],
  ]),
  build("fainting_warrior", "気絶する戦士", "wasteland", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 4],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["acc", "小物", "heart", 5],
      ["cape", "ケープ", "heart", 15],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("frightened_refugee", "怯えた難民", "wasteland", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 4],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 1]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["fit", "衣装", "heart", 8],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("lookout_scout", "見張り番の斥候", "wasteland", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 5],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["fit", "衣装", "heart", 15],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("saluting_captain", "敬礼する船長", "wasteland", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 4],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 5],
      ["acc", "小物", "heart", 5],
      ["cape", "ケープ", "heart", 20],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("stealthy_survivor", "ステルスの生存者", "wasteland", [
    ["s1", "段階1 基盤", [
      ["stance", "スタンス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 4]]],
    ["s3", "段階3 上位", [
      ["cape", "ケープ", "heart", 55],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 12],
      ["cape2", "T2 ケープ", "heart", 150],
    ], true],
  ]),

  build("levitating_adept", "浮遊する達人", "vault", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 5],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 7],
      ["fit", "衣装", "heart", 15],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("meditating_monastic", "瞑想する修道士", "vault", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 10],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 7],
      ["lv4", "感情表現 Lv4", "candle", 10],
      ["acc", "小物", "heart", 10],
      ["cape", "ケープ", "heart", 30],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("memory_whisperer", "記憶の語り部", "vault", [
    ["s1", "段階1 基盤", [
      ["call", "ボイス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 4]]],
    ["s3", "段階3 上位", [
      ["cape", "ケープ", "heart", 53],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 12],
      ["cape2", "T2 ケープ", "heart", 150],
    ], true],
  ]),
  build("polite_scholar", "礼儀正しい学者", "vault", [
    ["s1", "段階1 基盤", [
      ["stance", "スタンス", "candle", 0],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 2]]],
    ["s3", "段階3 上位", [
      ["fit", "衣装", "heart", 17],
      ["b5", "祝福", "candle", 5],
    ]],
  ]),
  build("praying_acolyte", "祈る侍祭", "vault", [
    ["s1", "段階1 基盤", [
      ["emote", "感情表現", "candle", 0],
      ["lv2", "感情表現 Lv2", "candle", 3],
      ["b1", "祝福", "candle", 1],
      ["heart", "ハート獲得", "candle", 3, "heart"],
    ]],
    ["s2", "段階2 翼", [["wing", "翼バフ", "ac", 3]]],
    ["s3", "段階3 上位", [
      ["lv3", "感情表現 Lv3", "candle", 5],
      ["lv4", "感情表現 Lv4", "candle", 7],
      ["acc", "小物", "heart", 5],
      ["cape", "ケープ", "heart", 25],
      ["b5", "祝福", "candle", 5],
    ]],
    ["s4", "段階4 Tier2", [
      ["wing2", "T2 翼バフ", "ac", 9],
      ["cape2", "T2 ケープ", "heart", 75],
    ], true],
  ]),
];

export const ELDERS: ElderGift[] = [
  { id: "elder_isle_hair", realm: "isle", name: "孤島の大精霊・髪型", ac: 4 },
  { id: "elder_isle_face", realm: "isle", name: "孤島の大精霊・フェイスアクセ", ac: 125 },
  { id: "elder_prairie_hair", realm: "prairie", name: "草原の大精霊・髪型", ac: 3 },
  { id: "elder_prairie_face", realm: "prairie", name: "草原の大精霊・フェイスアクセ", ac: 75 },
  { id: "elder_forest_hair", realm: "forest", name: "雨林の大精霊・髪型", ac: 6 },
  { id: "elder_forest_face", realm: "forest", name: "雨林の大精霊・フェイスアクセ", ac: 250 },
  { id: "elder_valley_hair1", realm: "valley", name: "峡谷の大精霊・髪型①", ac: 6 },
  { id: "elder_valley_hair2", realm: "valley", name: "峡谷の大精霊・髪型②", ac: 5 },
  { id: "elder_valley_face1", realm: "valley", name: "峡谷の大精霊・フェイスアクセ①", ac: 150 },
  { id: "elder_valley_face2", realm: "valley", name: "峡谷の大精霊・フェイスアクセ②", ac: 150 },
  { id: "elder_wasteland_hair", realm: "wasteland", name: "捨て地の大精霊・髪型", ac: 6 },
  { id: "elder_vault_hair", realm: "vault", name: "書庫の大精霊・髪型", ac: 5 },
];

export const SEASON_PRESETS = [
  "感謝",
  "光の探求者",
  "想いを編む",
  "リズム",
  "魔法",
  "楽園",
  "預言者",
  "夢かなう",
  "大樹に集う",
  "星の王子さま",
  "羽ばたく",
  "深淵",
  "表現者たち",
  "砕ける闇",
  "AURORA",
  "追慕",
  "ならい",
  "瞬き",
  "復古",
  "渡り",
  "その他",
];

export type Cost = { candle: number; heart: number; ac: number };

export function emptyCost(): Cost {
  return { candle: 0, heart: 0, ac: 0 };
}

export function addCost(a: Cost, b: Cost): Cost {
  return { candle: a.candle + b.candle, heart: a.heart + b.heart, ac: a.ac + b.ac };
}

export function visibleStages(spirit: { stages: Stage[] }, includeT2: boolean): Stage[] {
  return spirit.stages.filter((s) => includeT2 || !s.t2);
}

export function visibleNodes(spirit: { stages: Stage[] }, includeT2: boolean): ExchangeNode[] {
  return visibleStages(spirit, includeT2).flatMap((s) => s.nodes);
}

export function costOfNodes(nodes: ExchangeNode[]): Cost {
  return nodes.reduce<Cost>((acc, n) => {
    if (n.cost <= 0) return acc;
    if (n.currency === "candle") acc.candle += n.cost;
    else if (n.currency === "heart") acc.heart += n.cost;
    else acc.ac += n.cost;
    return acc;
  }, emptyCost());
}

export function spiritById(id: string): Spirit | undefined {
  return SPIRITS.find((s) => s.id === id);
}

export function realmName(id: RealmId): string {
  return REALMS.find((r) => r.id === id)?.name ?? id;
}
