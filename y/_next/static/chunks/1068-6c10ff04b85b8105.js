(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1068], {
		55422: function(e, t, _) {
			"use strict";
			var n = _(67597),
				a = _(648),
				o = _(90409),
				s = _(86795);
			t.Z = function(e, t) {
				var _ = (0, a.v9)(o.$Z);
				return(0, n.useMemo)((function() {
					return !(0, s.Fy)(t) || _.includes("p".concat(e, "-").concat(t.replace("code_", "")))
				}), [_, e, t])
			}
		},
		1068: function(e, t, _) {
			"use strict";
			_.d(t, {
				Z: function() {
					return v
				}
			});
			var n = _(57611),
				a = (_(67597), _(9134)),
				o = _.n(a),
				s = _(648),
				i = _(38567),
				r = _.n(i),
				f = _(11299),
				c = _.n(f),
				l = _(26920),
				d = function(e) {
					var t, _, a = e.word,
						o = e.children,
						s = e.shouldShowWordByWordTransliteration,
						i = e.shouldShowWordByWordTranslation;
					return(0, n.jsxs)("div", {
						className: c().plainVerseWordContainer,
						children: [o, i && (0, n.jsx)(l.Z, {
							className: c().plainVerseWbwText,
							text: null === a || void 0 === a || null === (t = a.translation) || void 0 === t ? void 0 : t.text
						}), s && (0, n.jsx)(l.Z, {
							className: c().plainVerseWbwText,
							text: null === a || void 0 === a || null === (_ = a.transliteration) || void 0 === _ ? void 0 : _.text
						})]
					}, a.location)
				},
				x = _(55422),
				u = _(46250),
				h = _(58347),
				p = _(2474),
				z = _(35529),
				T = _(86795),
				m = _(8754);
			var v = function(e) {
				var t, _, a, i = e.words,
					f = e.shouldShowWordByWordTranslation,
					c = void 0 !== f && f,
					l = e.shouldShowWordByWordTransliteration,
					v = void 0 !== l && l,
					V = (0, s.v9)(z.Pt, s.wU),
					k = V.quranFont,
					w = V.quranTextFontScale,
					b = V.mushafLines,
					q = (0, T.Fy)(k),
					W = (0, x.Z)(i[0].pageNumber, k);
				return(0, n.jsx)("div", {
					className: o()(r().verseTextContainer, r().tafsirOrTranslationMode, (t = {}, _ = r()[(0, T.bZ)(k, w, b)], a = k !== m.fr.Tajweed, _ in t ? Object.defineProperty(t, _, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[_] = a, t)),
					children: (0, n.jsx)("div", {
						className: o()(r().verseText, r().verseTextWrap),
						translate: "no",
						children: null === i || void 0 === i ? void 0 : i.map((function(e) {
							return q ? (0, n.jsx)(d, {
								word: e,
								shouldShowWordByWordTranslation: c,
								shouldShowWordByWordTransliteration: v,
								children: (0, n.jsx)(u.Z, {
									font: k,
									qpcUthmaniHafs: e.qpcUthmaniHafs,
									pageNumber: e.pageNumber,
									textCodeV1: e.codeV1,
									textCodeV2: e.codeV2,
									isFontLoaded: W
								})
							}, e.location) : k === m.fr.Tajweed ? (0, n.jsx)(d, {
								word: e,
								shouldShowWordByWordTranslation: c,
								shouldShowWordByWordTransliteration: v,
								children: (0, n.jsx)(h.Z, {
									path: e.text,
									alt: e.textUthmani
								}, e.location)
							}, e.location) : (0, n.jsx)(d, {
								word: e,
								shouldShowWordByWordTranslation: c,
								shouldShowWordByWordTransliteration: v,
								children: (0, n.jsx)(p.Z, {
									font: k,
									text: e.text,
									charType: e.charTypeName
								})
							}, e.location)
						}))
					})
				})
			}
		},
		26920: function(e, t, _) {
			"use strict";
			var n = _(57611),
				a = (_(67597), _(9134)),
				o = _.n(a),
				s = _(648),
				i = _(50921),
				r = _.n(i),
				f = _(35529),
				c = {
					1: r().xs,
					2: r().sm,
					3: r().md,
					4: r().lg,
					5: r().xl,
					6: r().xxl
				};
			t.Z = function(e) {
				var t = e.text,
					_ = e.className,
					a = (0, s.v9)(f.KV, s.wU);
				return(0, n.jsx)("p", {
					className: o()(r().word, _, c[a]),
					children: t
				})
			}
		},
		46250: function(e, t, _) {
			"use strict";
			var n = _(57611),
				a = (_(67597), _(9134)),
				o = _.n(a),
				s = _(648),
				i = _(49346),
				r = _.n(i),
				f = _(35529),
				c = _(86795),
				l = _(8754);

			function d(e, t, _) {
				return t in e ? Object.defineProperty(e, t, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = _, e
			}
			var x = function(e, t, _, n, a) {
				return a ? n === l.fr.MadaniV1 ? t : _ : e
			};
			t.Z = function(e) {
				var t, _ = e.qpcUthmaniHafs,
					a = e.textCodeV1,
					i = e.textCodeV2,
					u = e.pageNumber,
					h = e.font,
					p = e.isFontLoaded,
					z = (0, s.v9)(f.Pt, s.wU),
					T = z.quranTextFontScale,
					m = z.mushafLines;
				return(0, n.jsx)("span", function(e) {
					for(var t = 1; t < arguments.length; t++) {
						var _ = null != arguments[t] ? arguments[t] : {},
							n = Object.keys(_);
						"function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(_).filter((function(e) {
							return Object.getOwnPropertyDescriptor(_, e).enumerable
						})))), n.forEach((function(t) {
							d(e, t, _[t])
						}))
					}
					return e
				}({
					dangerouslySetInnerHTML: {
						__html: x(_, a, i, h, p)
					},
					"data-font-scale": T,
					"data-font": h,
					className: o()(r().styledWord, (t = {}, d(t, r().fallbackText, !p), d(t, r()[(0, c.bZ)(l.v3, T, m, !0)], !p), t))
				}, p && {
					style: {
						fontFamily: "p".concat(u, "-").concat(h.replace("code_", ""))
					}
				}))
			}
		},
		58347: function(e, t, _) {
			"use strict";
			var n = _(57611),
				a = (_(67597), _(9134)),
				o = _.n(a),
				s = _(648),
				i = _(73762),
				r = _.n(i),
				f = _(35529),
				c = _(47453),
				l = {
					1: r().xs,
					2: r().sm,
					3: r().md,
					4: r().lg,
					5: r().xl,
					6: r().xl2,
					7: r().xl3,
					8: r().xl4,
					9: r().xl5,
					10: r().xl6
				};
			t.Z = function(e) {
				var t = e.path,
					_ = e.alt,
					a = (0, s.v9)(f.Pt).quranTextFontScale;
				return(0, n.jsx)("span", {
					className: o()(r().imageContainer, l[a]),
					children: (0, n.jsx)("img", {
						src: "".concat((0, c.Kr)("images/".concat(t))),
						alt: _
					})
				})
			}
		},
		2474: function(e, t, _) {
			"use strict";
			var n = _(57611),
				a = (_(67597), _(9134)),
				o = _.n(a),
				s = _(57028),
				i = _(35672),
				r = _.n(i),
				f = _(61584);

			function c(e, t, _) {
				return t in e ? Object.defineProperty(e, t, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = _, e
			}
			var l = "UthmanicHafs",
				d = "IndoPak",
				x = (0, s.decamelizeKeys)({
					qpcUthmaniHafs: l,
					textIndopak: d
				});
			t.Z = function(e) {
				var t, _ = e.text,
					a = e.font,
					s = e.charType;
				return(0, n.jsx)("span", {
					className: o()(r().word, (t = {}, c(t, r().UthmanicHafs, s === f.H.End || !x[a] || x[a] === l), c(t, r().IndoPak, x[a] === d), t)),
					children: _
				})
			}
		},
		47453: function(e, t, _) {
			"use strict";
			_.d(t, {
				Kr: function() {
					return n
				}
			});
			var n = function(e) {
				return "".concat("https://static.qurancdn.com", "/").concat(e, "?v=").concat("1")
			}
		},
		86795: function(e, t, _) {
			"use strict";
			_.d(t, {
				AX: function() {
					return r
				},
				Fy: function() {
					return i
				},
				bZ: function() {
					return l
				},
				nA: function() {
					return f
				},
				oj: function() {
					return d
				},
				r$: function() {
					return c
				}
			});
			var n = _(57065),
				a = _.n(n),
				o = _(8754),
				s = [o.fr.MadaniV1, o.fr.MadaniV2],
				i = function(e) {
					return s.includes(e)
				},
				r = function(e) {
					var t = e[0].pageNumber,
						_ = e[e.length - 1].pageNumber;
					return a()(t, _ + 1)
				},
				f = function(e, t) {
					var _ = String(t).padStart(3, "0");
					if(e) {
						var n = "/fonts/quran/hafs/v1/woff2/p".concat(t, ".woff2"),
							a = "/fonts/quran/hafs/v1/woff/p".concat(t, ".woff"),
							o = "/fonts/quran/hafs/v1/ttf/p".concat(t, ".ttf");
						return "local(QCF_P".concat(_, "), url('").concat(n, "') format('woff2'), url('").concat(a, "') format('woff'), url('").concat(o, "') format('truetype')")
					}
					var s = "/fonts/quran/hafs/v2/woff2/p".concat(t, ".woff2"),
						i = "/fonts/quran/hafs/v2/woff/p".concat(t, ".woff"),
						r = "/fonts/quran/hafs/v2/ttf/p".concat(t, ".ttf");
					return "local(QCF2".concat(_, "), url('").concat(s, "') format('woff2'), url('").concat(i, "') format('woff'), url('").concat(r, "') format('truetype')")
				},
				c = function(e, t) {
					return "p".concat(t, e ? "-v1" : "-v2")
				},
				l = function(e, t, _) {
					var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return e === o.fr.IndoPak ? "".concat(e, "_").concat(_, "-font-size-").concat(t) : n ? "fallback_".concat(e, "-font-size-").concat(t) : "".concat(e, "-font-size-").concat(t)
				},
				d = function(e, t, _) {
					var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return e === o.fr.IndoPak ? "".concat(e, "_").concat(_, "-line-width-").concat(t) : n ? "fallback_".concat(e, "-line-width-").concat(t) : "".concat(e, "-line-width-").concat(t)
				}
		},
		61584: function(e, t, _) {
			"use strict";
			var n;
			_.d(t, {
					H: function() {
						return n
					}
				}),
				function(e) {
					e.Word = "word", e.End = "end", e.Pause = "pause", e.Sajdah = "sajdah", e.RubElHizb = "rub-el-hizb"
				}(n || (n = {}))
		},
		11299: function(e) {
			e.exports = {
				plainVerseWordContainer: "PlainVerseTextWord_plainVerseWordContainer__2pyxx",
				plainVerseWbwText: "PlainVerseTextWord_plainVerseWbwText__DTrKx"
			}
		},
		38567: function(e) {
			e.exports = {
				verseText: "VerseText_verseText__Fk0Fi",
				verseTextContainer: "VerseText_verseTextContainer__hOUD0",
				chapterHeaderContainer: "VerseText_chapterHeaderContainer__SaizB",
				largeQuranTextLayoutContainer: "VerseText_largeQuranTextLayoutContainer__Fv3ec",
				largeQuranTextLayout: "VerseText_largeQuranTextLayout__JsyGS",
				verseTextCenterAlign: "VerseText_verseTextCenterAlign__Tz7Y4",
				verseTextSpaceBetween: "VerseText_verseTextSpaceBetween__syJcK",
				verseTextWrap: "VerseText_verseTextWrap__gOX9U",
				"code_v1-font-size-1": "VerseText_code_v1-font-size-1__9Rt0g",
				"code_v1-font-size-2": "VerseText_code_v1-font-size-2__VQjoR",
				"code_v1-font-size-3": "VerseText_code_v1-font-size-3__3x2lH",
				"code_v1-font-size-4": "VerseText_code_v1-font-size-4__LhpwQ",
				"code_v1-font-size-5": "VerseText_code_v1-font-size-5___K_MX",
				"code_v1-font-size-6": "VerseText_code_v1-font-size-6__SJ4l4",
				"code_v1-font-size-7": "VerseText_code_v1-font-size-7__c7wGl",
				"code_v1-font-size-8": "VerseText_code_v1-font-size-8__Rg__I",
				"code_v1-font-size-9": "VerseText_code_v1-font-size-9__QD8Sb",
				"code_v1-font-size-10": "VerseText_code_v1-font-size-10__r28R3",
				"code_v2-font-size-1": "VerseText_code_v2-font-size-1__F3Otn",
				"code_v2-font-size-2": "VerseText_code_v2-font-size-2__5pseo",
				"code_v2-font-size-3": "VerseText_code_v2-font-size-3__Lhu_B",
				"code_v2-font-size-4": "VerseText_code_v2-font-size-4__i8Qln",
				"code_v2-font-size-5": "VerseText_code_v2-font-size-5__paFu0",
				"code_v2-font-size-6": "VerseText_code_v2-font-size-6__0ofuY",
				"code_v2-font-size-7": "VerseText_code_v2-font-size-7__qY63H",
				"code_v2-font-size-8": "VerseText_code_v2-font-size-8__Jas77",
				"code_v2-font-size-9": "VerseText_code_v2-font-size-9__zKbDl",
				"code_v2-font-size-10": "VerseText_code_v2-font-size-10__RdYo_",
				"text_indopak_15_lines-font-size-1": "VerseText_text_indopak_15_lines-font-size-1__MpqYL",
				"text_indopak_15_lines-font-size-2": "VerseText_text_indopak_15_lines-font-size-2___O1LY",
				"text_indopak_15_lines-font-size-3": "VerseText_text_indopak_15_lines-font-size-3__va0v9",
				"text_indopak_15_lines-font-size-4": "VerseText_text_indopak_15_lines-font-size-4__lnUQq",
				"text_indopak_15_lines-font-size-5": "VerseText_text_indopak_15_lines-font-size-5__XOzo1",
				"text_indopak_15_lines-font-size-6": "VerseText_text_indopak_15_lines-font-size-6__gB6zb",
				"text_indopak_15_lines-font-size-7": "VerseText_text_indopak_15_lines-font-size-7__FekJW",
				"text_indopak_15_lines-font-size-8": "VerseText_text_indopak_15_lines-font-size-8__loZsT",
				"text_indopak_15_lines-font-size-9": "VerseText_text_indopak_15_lines-font-size-9__VmlCu",
				"text_indopak_15_lines-font-size-10": "VerseText_text_indopak_15_lines-font-size-10__O1PJG",
				"text_indopak_16_lines-font-size-1": "VerseText_text_indopak_16_lines-font-size-1__4ucyv",
				"text_indopak_16_lines-font-size-2": "VerseText_text_indopak_16_lines-font-size-2__3yXno",
				"text_indopak_16_lines-font-size-3": "VerseText_text_indopak_16_lines-font-size-3__G_OaF",
				"text_indopak_16_lines-font-size-4": "VerseText_text_indopak_16_lines-font-size-4__f3_iJ",
				"text_indopak_16_lines-font-size-5": "VerseText_text_indopak_16_lines-font-size-5__oUIOq",
				"text_indopak_16_lines-font-size-6": "VerseText_text_indopak_16_lines-font-size-6__FA5AG",
				"text_indopak_16_lines-font-size-7": "VerseText_text_indopak_16_lines-font-size-7__JFk0u",
				"text_indopak_16_lines-font-size-8": "VerseText_text_indopak_16_lines-font-size-8__Fni_s",
				"text_indopak_16_lines-font-size-9": "VerseText_text_indopak_16_lines-font-size-9__zXsnb",
				"text_indopak_16_lines-font-size-10": "VerseText_text_indopak_16_lines-font-size-10__I7RIN",
				"qpc_uthmani_hafs-font-size-1": "VerseText_qpc_uthmani_hafs-font-size-1__dcYI8",
				"qpc_uthmani_hafs-font-size-2": "VerseText_qpc_uthmani_hafs-font-size-2__BIcpt",
				"qpc_uthmani_hafs-font-size-3": "VerseText_qpc_uthmani_hafs-font-size-3___0I2d",
				"qpc_uthmani_hafs-font-size-4": "VerseText_qpc_uthmani_hafs-font-size-4__uAhrM",
				"qpc_uthmani_hafs-font-size-5": "VerseText_qpc_uthmani_hafs-font-size-5__qDztZ",
				"qpc_uthmani_hafs-font-size-6": "VerseText_qpc_uthmani_hafs-font-size-6__njx2U",
				"qpc_uthmani_hafs-font-size-7": "VerseText_qpc_uthmani_hafs-font-size-7__wJ6wZ",
				"qpc_uthmani_hafs-font-size-8": "VerseText_qpc_uthmani_hafs-font-size-8__E18cl",
				"qpc_uthmani_hafs-font-size-9": "VerseText_qpc_uthmani_hafs-font-size-9__9xc_5",
				"qpc_uthmani_hafs-font-size-10": "VerseText_qpc_uthmani_hafs-font-size-10__9KVZ2",
				"fallback_qpc_uthmani_hafs-font-size-1": "VerseText_fallback_qpc_uthmani_hafs-font-size-1__tEYKA",
				"fallback_qpc_uthmani_hafs-font-size-2": "VerseText_fallback_qpc_uthmani_hafs-font-size-2__WOpbV",
				"fallback_qpc_uthmani_hafs-font-size-3": "VerseText_fallback_qpc_uthmani_hafs-font-size-3__qTu4q",
				"fallback_qpc_uthmani_hafs-font-size-4": "VerseText_fallback_qpc_uthmani_hafs-font-size-4__vxCgd",
				"fallback_qpc_uthmani_hafs-font-size-5": "VerseText_fallback_qpc_uthmani_hafs-font-size-5__pBmKt",
				"fallback_qpc_uthmani_hafs-font-size-6": "VerseText_fallback_qpc_uthmani_hafs-font-size-6__Om3YR",
				"fallback_qpc_uthmani_hafs-font-size-7": "VerseText_fallback_qpc_uthmani_hafs-font-size-7__LqHcg",
				"fallback_qpc_uthmani_hafs-font-size-8": "VerseText_fallback_qpc_uthmani_hafs-font-size-8__H_0LM",
				"fallback_qpc_uthmani_hafs-font-size-9": "VerseText_fallback_qpc_uthmani_hafs-font-size-9__Uz0iX",
				"fallback_qpc_uthmani_hafs-font-size-10": "VerseText_fallback_qpc_uthmani_hafs-font-size-10__Eq184",
				"tajweed-font-size-1": "VerseText_tajweed-font-size-1__wW3aY",
				"tajweed-font-size-2": "VerseText_tajweed-font-size-2__HbkYL",
				"tajweed-font-size-3": "VerseText_tajweed-font-size-3__y6f3z",
				"tajweed-font-size-4": "VerseText_tajweed-font-size-4__Qocn9",
				"tajweed-font-size-5": "VerseText_tajweed-font-size-5__NbAoD",
				"tajweed-font-size-6": "VerseText_tajweed-font-size-6__EWfpu",
				"tajweed-font-size-7": "VerseText_tajweed-font-size-7__zvBX_",
				"tajweed-font-size-8": "VerseText_tajweed-font-size-8__FAAIf",
				"tajweed-font-size-9": "VerseText_tajweed-font-size-9__7nw_V",
				"tajweed-font-size-10": "VerseText_tajweed-font-size-10__cZt_J",
				highlighted: "VerseText_highlighted__MSh4M",
				tafsirOrTranslationMode: "VerseText_tafsirOrTranslationMode____xIz"
			}
		},
		50921: function(e) {
			e.exports = {
				word: "InlineWordByWord_word__RguXH",
				xs: "InlineWordByWord_xs__m6Asd",
				sm: "InlineWordByWord_sm__j5xJp",
				md: "InlineWordByWord_md__VTFxL",
				lg: "InlineWordByWord_lg__0T__M",
				xl: "InlineWordByWord_xl__NAWHF",
				xxl: "InlineWordByWord_xxl__MZerA"
			}
		},
		49346: function(e) {
			e.exports = {
				"fallback_qpc_uthmani_hafs-font-size-1": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-1__2KKwl",
				"fallback_qpc_uthmani_hafs-font-size-2": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-2__MD0bo",
				"fallback_qpc_uthmani_hafs-font-size-3": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-3__7jYJ0",
				"fallback_qpc_uthmani_hafs-font-size-4": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-4__sH673",
				"fallback_qpc_uthmani_hafs-font-size-5": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-5__hbPXS",
				"fallback_qpc_uthmani_hafs-font-size-6": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-6__GkHoA",
				"fallback_qpc_uthmani_hafs-font-size-7": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-7__jXA0B",
				"fallback_qpc_uthmani_hafs-font-size-8": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-8__EuX_N",
				"fallback_qpc_uthmani_hafs-font-size-9": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-9__lTWFh",
				"fallback_qpc_uthmani_hafs-font-size-10": "GlyphWord_fallback_qpc_uthmani_hafs-font-size-10__q6iVZ",
				styledWord: "GlyphWord_styledWord__OfEEG",
				fallbackText: "GlyphWord_fallbackText__R32Ms"
			}
		},
		73762: function(e) {
			e.exports = {
				imageContainer: "TajweedWordImage_imageContainer__BW9U2",
				xs: "TajweedWordImage_xs__z56PS",
				sm: "TajweedWordImage_sm__m8zZy",
				md: "TajweedWordImage_md__Fo9Wj",
				lg: "TajweedWordImage_lg__Ke7uV",
				xl: "TajweedWordImage_xl__toP3N",
				xl2: "TajweedWordImage_xl2__U2skV",
				xl3: "TajweedWordImage_xl3__Pivm8",
				xl4: "TajweedWordImage_xl4__dclGF",
				xl5: "TajweedWordImage_xl5__xH4Is",
				xl6: "TajweedWordImage_xl6__VCEAA"
			}
		},
		35672: function(e) {
			e.exports = {
				word: "TextWord_word__mvLd7",
				UthmanicHafs: "TextWord_UthmanicHafs__9DRAC",
				IndoPak: "TextWord_IndoPak__Vois6"
			}
		}
	}
]);