import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Flame, d as Check, i as Star, l as Download, o as Plus, r as Trash2, s as Heart, t as Upload, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C40306NS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REALMS = [
	{
		id: "isle",
		name: "孤島",
		short: "孤島"
	},
	{
		id: "prairie",
		name: "草原",
		short: "草原"
	},
	{
		id: "forest",
		name: "雨林",
		short: "雨林"
	},
	{
		id: "valley",
		name: "峡谷",
		short: "峡谷"
	},
	{
		id: "wasteland",
		name: "捨てられた地",
		short: "捨て地"
	},
	{
		id: "vault",
		name: "書庫",
		short: "書庫"
	}
];
var CURRENCY_LABEL = {
	candle: "キャンドル",
	heart: "ハート",
	ac: "星キャンドル"
};
function build(id, name, realm, raw) {
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
				grantsHeart: flag === "heart" || void 0,
				t2: t2 || flag === "t2" || void 0
			}))
		}))
	};
}
var SPIRITS = [
	build("pointing_candlemaker", "指差すキャンドル職人", "isle", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"fit",
					"衣装",
					"heart",
					4
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("ushering_stargazer", "先導する星読み", "isle", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"fit",
					"衣装",
					"heart",
					4
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("rejecting_voyager", "固辞する航行者", "isle", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"fit",
					"衣装",
					"heart",
					4
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("applauding_bellmaker", "賞賛する鐘の造り手", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					3
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					3
				],
				[
					"fit",
					"衣装",
					"heart",
					3
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("bird_whisperer", "鳥の語り部", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"call",
					"ボイス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				6
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("butterfly_charmer", "蝶々使い", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"acc",
					"小物",
					"heart",
					3
				],
				[
					"fit",
					"衣装",
					"heart",
					4
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				3
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				9
			]],
			true
		]
	]),
	build("ceremonial_worshiper", "儀式の崇拝者", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("exhausted_dock_worker", "疲れた港の労働者", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"fit",
					"衣装",
					"heart",
					3
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("laughing_light_catcher", "笑う光の捕り手", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"fit",
					"衣装",
					"heart",
					5
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("slumbering_shipwright", "眠る船大工", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"fit",
					"衣装",
					"heart",
					3
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("waving_bellmaker", "手を振る鐘の造り手", "prairie", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					1
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					2
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					2
				],
				[
					"acc",
					"小物",
					"heart",
					2
				],
				[
					"fit",
					"衣装",
					"heart",
					5
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[
				[
					"lv5",
					"感情表現 Lv5",
					"candle",
					3
				],
				[
					"lv6",
					"感情表現 Lv6",
					"candle",
					3
				],
				[
					"wing2",
					"T2 翼バフ",
					"ac",
					6
				]
			],
			true
		]
	]),
	build("apologetic_lumberjack", "謝る木こり", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					3
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					3
				],
				[
					"fit",
					"衣装",
					"heart",
					8
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("blushing_prospector", "赤面する探鉱者", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"fit",
					"衣装",
					"heart",
					8
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("dismayed_hunter", "落胆した狩人", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"cape",
					"ケープ",
					"heart",
					30
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				9
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				90
			]],
			true
		]
	]),
	build("hide_n_seek_pioneer", "かくれんぼの開拓者", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"cape",
					"ケープ",
					"heart",
					17
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				6
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				15
			]],
			true
		]
	]),
	build("pouty_porter", "ふくれっ面の運搬者", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"acc",
					"小物",
					"heart",
					3
				],
				[
					"cape",
					"ケープ",
					"heart",
					20
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				6
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				60
			]],
			true
		]
	]),
	build("shivering_trailblazer", "震える道開拓者", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					2
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					3
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					3
				],
				[
					"fit",
					"衣装",
					"heart",
					7
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("tearful_light_miner", "涙の光の鉱夫", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"fit",
					"衣装",
					"heart",
					3
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[
				[
					"lv5",
					"感情表現 Lv5",
					"candle",
					5
				],
				[
					"lv6",
					"感情表現 Lv6",
					"candle",
					5
				],
				[
					"wing2",
					"T2 翼バフ",
					"ac",
					3
				]
			],
			true
		]
	]),
	build("whale_whisperer", "クジラの語り部", "forest", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"call",
					"ボイス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				2
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("backflipping_champion", "宙返りするチャンピオン", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"fit",
					"衣装",
					"heart",
					10
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("bowing_medalist", "お辞儀するメダリスト", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"fit",
					"衣装",
					"heart",
					10
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("cheerful_spectator", "陽気な観客", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"fit",
					"衣装",
					"heart",
					10
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("confident_sightseer", "自信満々の観光客", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"stance",
					"スタンス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				7
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("handstanding_thrillseeker", "逆立ちするスリル好き", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					4
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					4
				],
				[
					"cape",
					"ケープ",
					"heart",
					40
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				9
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				120
			]],
			true
		]
	]),
	build("manta_whisperer", "マンタの語り部", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"call",
					"ボイス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				3
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("proud_victor", "誇らしい勝者", "valley", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"stance",
					"スタンス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"cape",
				"ケープ",
				"heart",
				40
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				9
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				30
			]],
			true
		]
	]),
	build("courageous_soldier", "勇敢な兵士", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"stance",
					"スタンス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				19
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				6
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				45
			]],
			true
		]
	]),
	build("fainting_warrior", "気絶する戦士", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					4
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"cape",
					"ケープ",
					"heart",
					15
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("frightened_refugee", "怯えた難民", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					4
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				1
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"fit",
					"衣装",
					"heart",
					8
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("lookout_scout", "見張り番の斥候", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					5
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"fit",
					"衣装",
					"heart",
					15
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("saluting_captain", "敬礼する船長", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					4
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					5
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"cape",
					"ケープ",
					"heart",
					20
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("stealthy_survivor", "ステルスの生存者", "wasteland", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"stance",
					"スタンス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				4
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"cape",
				"ケープ",
				"heart",
				55
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				12
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				150
			]],
			true
		]
	]),
	build("levitating_adept", "浮遊する達人", "vault", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					5
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					7
				],
				[
					"fit",
					"衣装",
					"heart",
					15
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("meditating_monastic", "瞑想する修道士", "vault", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					10
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					7
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					10
				],
				[
					"acc",
					"小物",
					"heart",
					10
				],
				[
					"cape",
					"ケープ",
					"heart",
					30
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		]
	]),
	build("memory_whisperer", "記憶の語り部", "vault", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"call",
					"ボイス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				4
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"cape",
				"ケープ",
				"heart",
				53
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				12
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				150
			]],
			true
		]
	]),
	build("polite_scholar", "礼儀正しい学者", "vault", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"stance",
					"スタンス",
					"candle",
					0
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				2
			]]
		],
		[
			"s3",
			"段階3 上位",
			[[
				"fit",
				"衣装",
				"heart",
				17
			], [
				"b5",
				"祝福",
				"candle",
				5
			]]
		]
	]),
	build("praying_acolyte", "祈る侍祭", "vault", [
		[
			"s1",
			"段階1 基盤",
			[
				[
					"emote",
					"感情表現",
					"candle",
					0
				],
				[
					"lv2",
					"感情表現 Lv2",
					"candle",
					3
				],
				[
					"b1",
					"祝福",
					"candle",
					1
				],
				[
					"heart",
					"ハート獲得",
					"candle",
					3,
					"heart"
				]
			]
		],
		[
			"s2",
			"段階2 翼",
			[[
				"wing",
				"翼バフ",
				"ac",
				3
			]]
		],
		[
			"s3",
			"段階3 上位",
			[
				[
					"lv3",
					"感情表現 Lv3",
					"candle",
					5
				],
				[
					"lv4",
					"感情表現 Lv4",
					"candle",
					7
				],
				[
					"acc",
					"小物",
					"heart",
					5
				],
				[
					"cape",
					"ケープ",
					"heart",
					25
				],
				[
					"b5",
					"祝福",
					"candle",
					5
				]
			]
		],
		[
			"s4",
			"段階4 Tier2",
			[[
				"wing2",
				"T2 翼バフ",
				"ac",
				9
			], [
				"cape2",
				"T2 ケープ",
				"heart",
				75
			]],
			true
		]
	])
];
var ELDERS = [
	{
		id: "elder_isle_hair",
		realm: "isle",
		name: "孤島の大精霊・髪型",
		ac: 4
	},
	{
		id: "elder_isle_face",
		realm: "isle",
		name: "孤島の大精霊・フェイスアクセ",
		ac: 125
	},
	{
		id: "elder_prairie_hair",
		realm: "prairie",
		name: "草原の大精霊・髪型",
		ac: 3
	},
	{
		id: "elder_prairie_face",
		realm: "prairie",
		name: "草原の大精霊・フェイスアクセ",
		ac: 75
	},
	{
		id: "elder_forest_hair",
		realm: "forest",
		name: "雨林の大精霊・髪型",
		ac: 6
	},
	{
		id: "elder_forest_face",
		realm: "forest",
		name: "雨林の大精霊・フェイスアクセ",
		ac: 250
	},
	{
		id: "elder_valley_hair1",
		realm: "valley",
		name: "峡谷の大精霊・髪型①",
		ac: 6
	},
	{
		id: "elder_valley_hair2",
		realm: "valley",
		name: "峡谷の大精霊・髪型②",
		ac: 5
	},
	{
		id: "elder_valley_face1",
		realm: "valley",
		name: "峡谷の大精霊・フェイスアクセ①",
		ac: 150
	},
	{
		id: "elder_valley_face2",
		realm: "valley",
		name: "峡谷の大精霊・フェイスアクセ②",
		ac: 150
	},
	{
		id: "elder_wasteland_hair",
		realm: "wasteland",
		name: "捨て地の大精霊・髪型",
		ac: 6
	},
	{
		id: "elder_vault_hair",
		realm: "vault",
		name: "書庫の大精霊・髪型",
		ac: 5
	}
];
var SEASON_PRESETS = [
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
	"その他"
];
function emptyCost() {
	return {
		candle: 0,
		heart: 0,
		ac: 0
	};
}
function addCost(a, b) {
	return {
		candle: a.candle + b.candle,
		heart: a.heart + b.heart,
		ac: a.ac + b.ac
	};
}
function visibleStages(spirit, includeT2) {
	return spirit.stages.filter((s) => includeT2 || !s.t2);
}
function visibleNodes(spirit, includeT2) {
	return visibleStages(spirit, includeT2).flatMap((s) => s.nodes);
}
function costOfNodes(nodes) {
	return nodes.reduce((acc, n) => {
		if (n.cost <= 0) return acc;
		if (n.currency === "candle") acc.candle += n.cost;
		else if (n.currency === "heart") acc.heart += n.cost;
		else acc.ac += n.cost;
		return acc;
	}, emptyCost());
}
var useProgress = create()(persist((set, get) => ({
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
		set({ nodes: {
			...get().nodes,
			[spiritId]: [...cur]
		} });
	},
	setStage: (spiritId, stage, done) => {
		const cur = new Set(get().nodes[spiritId] ?? []);
		for (const n of stage.nodes) if (done) cur.add(n.id);
		else cur.delete(n.id);
		set({ nodes: {
			...get().nodes,
			[spiritId]: [...cur]
		} });
	},
	setSpiritAll: (spirit, done, includeT2) => {
		const cur = new Set(get().nodes[spirit.id] ?? []);
		const list = visibleNodes(spirit, includeT2);
		for (const n of list) if (done) cur.add(n.id);
		else cur.delete(n.id);
		set({ nodes: {
			...get().nodes,
			[spirit.id]: [...cur]
		} });
	},
	toggleElder: (id) => {
		set({ elders: {
			...get().elders,
			[id]: !get().elders[id]
		} });
	},
	addSeasonal: (s) => set({ seasonal: [...get().seasonal, s] }),
	updateSeasonal: (id, patch) => set({ seasonal: get().seasonal.map((s) => s.id === id ? {
		...s,
		...patch
	} : s) }),
	removeSeasonal: (id) => {
		const { [id]: _, ...rest } = get().nodes;
		set({
			seasonal: get().seasonal.filter((s) => s.id !== id),
			nodes: rest
		});
	},
	addSeasonalNode: (spiritId, node, stageId) => {
		set({ seasonal: get().seasonal.map((s) => {
			if (s.id !== spiritId) return s;
			const sid = stageId ?? s.stages[0]?.id;
			if (!sid) {
				const st = {
					id: `${s.id}__s1`,
					label: "段階1",
					nodes: [node]
				};
				return {
					...s,
					stages: [st]
				};
			}
			return {
				...s,
				stages: s.stages.map((st) => st.id === sid ? {
					...st,
					nodes: [...st.nodes, node]
				} : st)
			};
		}) });
	},
	removeSeasonalNode: (spiritId, nodeId) => {
		set({ seasonal: get().seasonal.map((s) => s.id !== spiritId ? s : {
			...s,
			stages: s.stages.map((st) => ({
				...st,
				nodes: st.nodes.filter((n) => n.id !== nodeId)
			}))
		}) });
	},
	importState: (data) => set({
		nodes: data.nodes ?? get().nodes,
		elders: data.elders ?? get().elders,
		seasonal: data.seasonal ?? get().seasonal,
		includeT2: data.includeT2 ?? get().includeT2
	}),
	resetAll: () => set({
		nodes: {},
		elders: {},
		seasonal: []
	})
}), {
	name: "sky-spirit-tracker-v3",
	skipHydration: true,
	onRehydrateStorage: () => () => {
		useProgress.setState({ hydrated: true });
	},
	partialize: (s) => ({
		includeT2: s.includeT2,
		nodes: s.nodes,
		elders: s.elders,
		seasonal: s.seasonal
	})
}));
function isNodeDone(nodes, spiritId, nodeId) {
	return (nodes[spiritId] ?? []).includes(nodeId);
}
function remainingForSpirit(spirit, completed, includeT2) {
	const done = new Set(completed);
	return costOfNodes(visibleNodes(spirit, includeT2).filter((n) => !done.has(n.id)));
}
function progressOfSpirit(spirit, completed, includeT2) {
	const payable = visibleNodes(spirit, includeT2).filter((n) => n.cost > 0 || n.label.length > 0);
	const doneSet = new Set(completed);
	return {
		done: payable.filter((n) => doneSet.has(n.id)).length,
		total: payable.length
	};
}
function remainingRegular(nodes, includeT2) {
	return SPIRITS.reduce((acc, s) => addCost(acc, remainingForSpirit(s, nodes[s.id] ?? [], includeT2)), emptyCost());
}
function remainingElders(elders) {
	return ELDERS.reduce((sum, e) => sum + (elders[e.id] ? 0 : e.ac), 0);
}
function remainingSeasonal(seasonal, nodes, includeT2) {
	return seasonal.reduce((acc, s) => {
		return addCost(acc, costOfNodes(visibleNodes(s, includeT2).filter((n) => !(nodes[s.id] ?? []).includes(n.id))));
	}, emptyCost());
}
function newSeasonalId() {
	return `seasonal_${Date.now().toString(36)}`;
}
function makeSeasonalNode(spiritId, label, currency, cost) {
	return {
		id: `${spiritId}__n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
		label,
		currency,
		cost
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			outline: "border border-border bg-transparent hover:bg-muted",
			destructive: "bg-danger text-danger-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var EMPTY_IDS = [];
function CostBits({ cost, compact }) {
	const items = [
		{
			key: "candle",
			icon: Flame,
			cls: "text-candle"
		},
		{
			key: "heart",
			icon: Heart,
			cls: "text-heart"
		},
		{
			key: "ac",
			icon: Star,
			cls: "text-ac"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center tabular", compact ? "gap-2" : "gap-3"),
		children: items.map(({ key, icon: Icon, cls }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("inline-flex items-center gap-1", cls),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: compact ? "size-3.5" : "size-4",
				strokeWidth: 1.75
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: compact ? "text-xs" : "text-sm font-medium",
				children: cost[key]
			})]
		}, key))
	});
}
function NodeRow({ spiritId, node }) {
	const done = useProgress((s) => isNodeDone(s.nodes, spiritId, node.id));
	const toggle = useProgress((s) => s.toggleNode);
	const free = node.cost === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => toggle(spiritId, node.id),
		className: cn("flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-left transition-colors duration-[var(--motion-quick)]", done ? "bg-muted/60 text-fg-muted" : "hover:bg-muted/80"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex size-5 shrink-0 items-center justify-center rounded-sm border", done ? "border-success bg-success text-bg" : "border-border"),
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-3.5",
					strokeWidth: 2.5
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex-1 text-sm", done && "line-through"),
				children: node.label
			}),
			node.grantsHeart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-heart",
				children: "入手 +1"
			}) : null,
			free ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-fg-subtle",
				children: "無料"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("inline-flex items-center gap-1 text-sm tabular", node.currency === "candle" && "text-candle", node.currency === "heart" && "text-heart", node.currency === "ac" && "text-ac"),
				children: [
					node.currency === "candle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5" }),
					node.currency === "heart" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5" }),
					node.currency === "ac" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5" }),
					node.cost
				]
			})
		]
	});
}
function StageBlock({ spirit, stage }) {
	const completed = useProgress((s) => s.nodes[spirit.id] ?? EMPTY_IDS);
	const setStage = useProgress((s) => s.setStage);
	const doneSet = new Set(completed);
	const allDone = stage.nodes.every((n) => doneSet.has(n.id));
	const leftover = costOfNodes(stage.nodes.filter((n) => !doneSet.has(n.id)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-elevated/50 p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-center justify-between gap-2 px-2 py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-fg-muted",
				children: stage.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [!allDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBits, {
					cost: leftover,
					compact: true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-success",
					children: "完了"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-8 rounded-md px-2 text-xs text-fg-muted hover:bg-muted hover:text-fg",
					onClick: () => setStage(spirit.id, stage, !allDone),
					children: allDone ? "解除" : "この段階を完了"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col",
			children: stage.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeRow, {
				spiritId: spirit.id,
				node: n
			}, n.id))
		})]
	});
}
function SpiritCard({ spirit }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const includeT2 = useProgress((s) => s.includeT2);
	const completed = useProgress((s) => s.nodes[spirit.id] ?? EMPTY_IDS);
	const setSpiritAll = useProgress((s) => s.setSpiritAll);
	const stages = visibleStages(spirit, includeT2);
	const prog = progressOfSpirit(spirit, completed, includeT2);
	const remain = remainingForSpirit(spirit, completed, includeT2);
	const allDone = prog.total > 0 && prog.done === prog.total;
	const pct = prog.total ? Math.round(prog.done / prog.total * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "flex w-full items-center gap-3 px-4 py-3 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex size-9 shrink-0 items-center justify-center rounded-md border text-xs tabular", allDone ? "border-success text-success" : "border-border text-fg-muted"),
					children: pct
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-medium",
						children: spirit.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-xs text-fg-muted",
						children: [
							prog.done,
							"/",
							prog.total,
							" 項目"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBits, {
					cost: remain,
					compact: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 text-fg-subtle transition-transform duration-[var(--motion-fast)]", open && "rotate-180") })
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 border-t border-border px-3 pb-3 pt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-8 rounded-md px-2 text-xs text-fg-muted hover:bg-muted hover:text-fg",
					onClick: () => setSpiritAll(spirit, !allDone, includeT2),
					children: allDone ? "この精霊を未完了に" : "表示中の全段階を完了"
				})
			}), stages.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBlock, {
				spirit,
				stage: st
			}, st.id))]
		}) : null]
	});
}
function SummaryStrip() {
	const includeT2 = useProgress((s) => s.includeT2);
	const nodes = useProgress((s) => s.nodes);
	const elders = useProgress((s) => s.elders);
	const seasonal = useProgress((s) => s.seasonal);
	const regular = remainingRegular(nodes, includeT2);
	const elderAc = remainingElders(elders);
	const season = remainingSeasonal(seasonal, nodes, includeT2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-fg-muted",
					children: "恒常 残り"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBits, { cost: regular })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-fg-muted",
					children: "大精霊 残り"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 inline-flex items-center gap-1 text-ac",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-medium tabular",
						children: elderAc
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-fg-muted",
					children: "季節 残り"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBits, { cost: season })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-fg-muted",
					children: "星キャンドル合計"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg font-medium tabular text-ac",
					children: regular.ac + elderAc + season.ac
				})]
			})
		]
	});
}
function RegularPanel() {
	const includeT2 = useProgress((s) => s.includeT2);
	const setIncludeT2 = useProgress((s) => s.setIncludeT2);
	const nodes = useProgress((s) => s.nodes);
	const [hideDone, setHideDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex overflow-hidden rounded-full border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("h-10 px-3 text-sm", !includeT2 ? "bg-primary text-primary-foreground" : "text-fg-muted"),
					onClick: () => setIncludeT2(false),
					children: "星座100%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("h-10 px-3 text-sm", includeT2 ? "bg-primary text-primary-foreground" : "text-fg-muted"),
					onClick: () => setIncludeT2(true),
					children: "全交換・T2込"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("h-10 rounded-full border px-3 text-sm", hideDone ? "border-primary text-fg" : "border-border text-fg-muted"),
				onClick: () => setHideDone((v) => !v),
				children: "未完了のみ"
			})]
		}), REALMS.map((realm) => {
			const list = SPIRITS.filter((s) => s.realm === realm.id).filter((s) => {
				if (!hideDone) return true;
				const p = progressOfSpirit(s, nodes[s.id] ?? [], includeT2);
				return p.done < p.total;
			});
			if (list.length === 0) return null;
			const remain = list.reduce((acc, s) => {
				const r = remainingForSpirit(s, nodes[s.id] ?? [], includeT2);
				acc.candle += r.candle;
				acc.heart += r.heart;
				acc.ac += r.ac;
				return acc;
			}, {
				candle: 0,
				heart: 0,
				ac: 0
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-2 px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: realm.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostBits, {
						cost: remain,
						compact: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpiritCard, { spirit: s }, s.id))
				})]
			}, realm.id);
		})]
	});
}
function EldersPanel() {
	const elders = useProgress((s) => s.elders);
	const toggle = useProgress((s) => s.toggleElder);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-fg-muted",
			children: "星座100%のあと、原罪をクリアして天空で大精霊と交換します。項目ごとに記録できます。"
		}), REALMS.map((realm) => {
			const list = ELDERS.filter((e) => e.realm === realm.id);
			if (!list.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl border border-border bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "border-b border-border px-4 py-3 font-display text-lg",
					children: realm.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2",
					children: list.map((e) => {
						const done = !!elders[e.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(e.id),
							className: cn("flex min-h-12 w-full items-center gap-3 rounded-md px-3 text-left", done && "text-fg-muted"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-5 items-center justify-center rounded-sm border", done ? "border-success bg-success text-bg" : "border-border"),
									children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex-1 text-sm", done && "line-through"),
									children: e.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-ac tabular",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5" }), e.ac]
								})
							]
						}, e.id);
					})
				})]
			}, realm.id);
		})]
	});
}
function SeasonalPanel() {
	const seasonal = useProgress((s) => s.seasonal);
	const add = useProgress((s) => s.addSeasonal);
	const remove = useProgress((s) => s.removeSeasonal);
	const addNode = useProgress((s) => s.addSeasonalNode);
	const removeNode = useProgress((s) => s.removeSeasonalNode);
	const [name, setName] = (0, import_react.useState)("");
	const [season, setSeason] = (0, import_react.useState)(SEASON_PRESETS[0]);
	const [nlabel, setNlabel] = (0, import_react.useState)("");
	const [ncur, setNcur] = (0, import_react.useState)("candle");
	const [ncost, setNcost] = (0, import_react.useState)("1");
	const [target, setTarget] = (0, import_react.useState)("");
	function onAddSpirit() {
		if (!name.trim()) return;
		const id = newSeasonalId();
		const s = {
			id,
			name: name.trim(),
			season,
			stages: [{
				id: `${id}__s1`,
				label: "段階1",
				nodes: []
			}]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "再訪精霊はコストが変わるため、段階（ノード）を自分で追加してチェックします。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium",
					children: "精霊を追加"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-2 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "精霊名",
							className: "h-11 rounded-md border border-border bg-bg px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: season,
							onChange: (e) => setSeason(e.target.value),
							className: "h-11 rounded-md border border-border bg-bg px-3 text-sm",
							children: SEASON_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: onAddSpirit,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "追加"]
						})
					]
				})]
			}),
			seasonal.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-fg-muted",
				children: "まだ季節精霊はありません。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: seasonal.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-surface p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2 px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-muted",
								children: s.season
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "size-11 text-fg-subtle hover:text-danger",
								"aria-label": "削除",
								onClick: () => remove(s.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-1",
							children: s.stages.flatMap((st) => st.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeRow, {
										spiritId: s.id,
										node: n
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "size-11 text-fg-subtle hover:text-danger",
									"aria-label": "項目を削除",
									onClick: () => removeNode(s.id, n.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
								})]
							}, n.id)))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-2 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: target === s.id ? nlabel : "",
									onChange: (e) => {
										setTarget(s.id);
										setNlabel(e.target.value);
									},
									onFocus: () => setTarget(s.id),
									placeholder: "項目名（例: ケープ）",
									className: "h-11 rounded-md border border-border bg-bg px-3 text-sm sm:col-span-2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: target === s.id ? ncur : "candle",
									onChange: (e) => {
										setTarget(s.id);
										setNcur(e.target.value);
									},
									className: "h-11 rounded-md border border-border bg-bg px-3 text-sm",
									children: Object.keys(CURRENCY_LABEL).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: CURRENCY_LABEL[c]
									}, c))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: target === s.id ? ncost : "1",
										onChange: (e) => {
											setTarget(s.id);
											setNcost(e.target.value);
										},
										inputMode: "numeric",
										className: "h-11 w-full rounded-md border border-border bg-bg px-3 text-sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										onClick: onAddNode,
										"aria-label": "項目追加",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})]
								})
							]
						})
					]
				}, s.id))
			})
		]
	});
}
function DataPanel() {
	const nodes = useProgress((s) => s.nodes);
	const elders = useProgress((s) => s.elders);
	const seasonal = useProgress((s) => s.seasonal);
	const includeT2 = useProgress((s) => s.includeT2);
	const importState = useProgress((s) => s.importState);
	const resetAll = useProgress((s) => s.resetAll);
	function exportJson() {
		const blob = new Blob([JSON.stringify({
			nodes,
			elders,
			seasonal,
			includeT2
		}, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `sky-tracker-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
	}
	function onImport(file) {
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const data = JSON.parse(String(reader.result));
				importState(data);
			} catch {}
		};
		reader.readAsText(file);
	}
	const preview = (0, import_react.useMemo)(() => JSON.stringify({
		nodes,
		elders,
		seasonal,
		includeT2
	}, null, 2), [
		nodes,
		elders,
		seasonal,
		includeT2
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: exportJson,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "書き出し"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "hidden",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) onImport(f);
								e.target.value = "";
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border bg-secondary px-4 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "読み込み"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "destructive",
						onClick: () => {
							if (window.confirm("すべての交換記録を消しますか？")) resetAll();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "リセット"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg-muted",
				children: "記録はこの端末のブラウザに保存されます。書き出したJSONを保管すれば別端末でも復元できます。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "max-h-80 overflow-auto rounded-xl border border-border bg-surface p-3 text-xs text-fg-muted",
				children: preview
			})
		]
	});
}
var TABS = [
	{
		id: "regular",
		label: "恒常精霊"
	},
	{
		id: "elders",
		label: "大精霊"
	},
	{
		id: "seasonal",
		label: "季節精霊"
	},
	{
		id: "data",
		label: "データ"
	}
];
function TrackerApp() {
	const hydrated = useProgress((s) => s.hydrated);
	const setHydrated = useProgress((s) => s.setHydrated);
	const [tab, setTab] = (0, import_react.useState)("regular");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const finish = () => {
			if (!cancelled) setHydrated();
		};
		Promise.resolve(useProgress.persist.rehydrate()).then(finish, finish);
		return () => {
			cancelled = true;
		};
	}, [setHydrated]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16 text-center text-fg-muted",
		children: "読み込み中…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-fg-subtle",
						children: "SKY CHILDREN OF THE LIGHT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-1 text-3xl font-medium tracking-tight",
						children: "精霊交換帳"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted",
						children: "友情ツリーを段階ごとに記録し、残りキャンドル・ハート・星キャンドルを集計します。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "sticky top-0 z-10 -mx-4 mt-6 mb-4 bg-bg/90 px-4 py-2 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 overflow-x-auto",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(t.id),
						className: cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === t.id ? "bg-primary text-primary-foreground" : "text-fg-muted hover:bg-muted"),
						children: t.label
					}, t.id))
				})
			}),
			tab === "regular" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegularPanel, {}),
			tab === "elders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EldersPanel, {}),
			tab === "seasonal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonalPanel, {}),
			tab === "data" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataPanel, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-svh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackerApp, {})
	});
}
//#endregion
export { Home as component };
