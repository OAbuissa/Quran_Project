(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{8810:function(e){e.exports=function(e,n,i,t){for(var a=-1,r=null==e?0:e.length;++a<r;){var o=e[a];n(t,o,i(o),e)}return t}},72342:function(e,n,i){var t=i(74726);e.exports=function(e,n,i,a){return t(e,(function(e,t,r){n(a,e,i(e),r)})),a}},74726:function(e,n,i){var t=i(36962),a=i(12582)(t);e.exports=a},1833:function(e,n,i){var t=i(8810),a=i(72342),r=i(63244),o=i(87874);e.exports=function(e,n){return function(i,l){var _=o(i)?t:a,d=n?n():{};return _(i,e,r(l,2),d)}}},12582:function(e,n,i){var t=i(68714);e.exports=function(e,n){return function(i,a){if(null==i)return i;if(!t(i))return e(i,a);for(var r=i.length,o=n?r:-1,l=Object(i);(n?o--:++o<r)&&!1!==a(l[o],o,l););return i}}},85378:function(e,n,i){var t=i(44197),a=i(1833),r=Object.prototype.hasOwnProperty,o=a((function(e,n,i){r.call(e,i)?e[i].push(n):t(e,i,[n])}));e.exports=o},54178:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return Ee}});var t=i(57611),a=i(67597),r=i(9134),o=i.n(r),l=i(61395),_=i(33770),d=i(47189),u=i(648),c=i(39682),s=i(15129),h=i(16642),f=i(52266),w=i(16129),p=i(54111),g=i(8754),m=i(81444);function v(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var b=function(e,n,i){var t=(0,w.tR)(i[n].from),a=(0,w.tR)(i[n].to),r=100*((0,w.tR)(e)-t+1)/(a-t+1);return r<=33.3?m.Z.Start:r<=66.6?m.Z.Center:m.Z.End},x=function(e,n,i,t,r,o,l,_,d,u){var c=(0,s.useRouter)().query,w=c.startingVerse,m=c.chapterId,x=(0,a.useRef)(!0);(0,a.useEffect)((function(){x.current=!0}),[_,d,w]),(0,a.useEffect)((function(){if(!u&&n.current&&Object.keys(o).length&&e===g.Qi.Chapter&&w){var a=Number(w);if(Number.isInteger(a)&&a>0){var _=l?i.verses[0].pageNumber:Number(Object.keys(o)[0]),d=r.find((function(e){return e.verseNumber===a}));if(d&&!0===x.current&&o[d.pageNumber]){var c=d.pageNumber-_;n.current.scrollToIndex({index:c,align:b("".concat(m,":").concat(a),d.pageNumber,o)}),x.current=!1}else(0,p._i)((0,f.Wq)(function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),t.forEach((function(n){v(e,n,i[n])}))}return e}({filters:"".concat(m,":").concat(a),fields:"page_number"},(0,h.$P)(t.quranFont,t.mushafLines)))).then((function(e){if(e.verses.length&&!0===x.current){var i=e.verses[0].pageNumber-_;o[e.verses[0].pageNumber]&&(n.current.scrollToIndex({index:i,align:b("".concat(m,":").concat(a),e.verses[0].pageNumber,o)}),x.current=!1)}}))}}}),[m,i.verses,u,l,o,e,t.mushafLines,t.quranFont,w,r,n])},y=i(62103),k=i(85378),R=i.n(k);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function V(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=function(e){var n=[];return e.forEach((function(e){n=V(n).concat(V((0,w.LQ)(e,!0)))})),R()(n,(function(e){return"Page".concat(e.pageNumber,"-Line").concat(e.lineNumber)}))},P=i(21594),N=i(9747),O=i(76007),I=i.n(O),S=i(24894),C=i(71292),T=i(91094),A=i(16401),L=i(86128),Z=i(91660);function W(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function E(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var t,a,r=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(t=i.next()).done)&&(r.push(t.value),!n||r.length!==n);o=!0);}catch(_){l=!0,a=_}finally{try{o||null==i.return||i.return()}finally{if(l)throw a}}return r}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return W(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return W(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(e){var n=e.lineKey,i=e.words,r=e.isBigTextLayout,l=e.pageIndex,_=e.lineIndex,d=(0,a.useContext)(Z.c),c=(0,P.v)(d,(function(e){var n=e.context,t=n.surah,a=n.ayahNumber;return i.map((function(e){return e.verseKey})).includes("".concat(t,":").concat(a))})),s=F((0,T.ZP)(T.nv),2),h=s[0],f=s[1],p=(0,u.v9)(A.Mj,u.wU),g=(0,u.v9)(L.eB,u.wU),m=g.showWordByWordTranslation,v=g.showWordByWordTransliteration;(0,a.useEffect)((function(){c&&p&&h()}),[c,h,p]);var b,x,y=(0,w.TO)(i[0].location),k="1"===y[1]&&"1"===y[2],R=m||v;return(0,t.jsxs)("div",{ref:f,id:n,className:o()(I().container,(b={},E(b,I().highlighted,c),E(b,I().mobileInline,r),b)),children:[k&&(0,t.jsx)(S.Z,{chapterId:y[0],pageNumber:i[0].pageNumber,hizbNumber:i[0].hizbNumber}),(0,t.jsx)("div",{className:o()(I().line,(x={},E(x,I().mobileInline,r),E(x,I().fixedWidth,!R),x)),children:(0,t.jsx)(C.Z,{words:i,isReadingMode:!0,isHighlighted:c,shouldShowH1ForSEO:0===l&&0===_})})]})},D=function(e,n){return e.lineKey===n.lineKey&&e.isBigTextLayout===n.isBigTextLayout&&!(0,N.RG)(e.quranReaderStyles,n.quranReaderStyles,e.words,n.words)},M=(0,a.memo)(B,D),K=i(85598),Q=i.n(K),U=i(70238),H=i.n(U),X=i(22367),G=i(76332),z=i(9515),J=function(e){var n=e.page,i=(0,l.Z)("quran-reader").lang,a=(0,z.GK)(n);return(0,t.jsx)("div",{className:H().pageText,children:(0,t.jsx)(X.Z,{href:a,shouldPassHref:!0,shouldPrefetch:!1,children:(0,t.jsx)("p",{className:H().pageLink,children:(0,G.rQ)(n,i)})})})},Y=i(55422),$=i(86795);function ee(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var ne=function(e){var n,i=e.verses,r=e.pageNumber,l=e.quranReaderStyles,_=e.pageIndex,d=(0,a.useMemo)((function(){return i&&i.length?q(i):{}}),[i]),c=l.quranTextFontScale,s=l.quranFont,h=l.mushafLines,f=(0,u.v9)(L.eB,u.wU),w=f.showWordByWordTranslation,p=f.showWordByWordTransliteration,m=w||p||c>3||s===g.fr.Tajweed,v=(0,Y.Z)(r,s);return(0,t.jsxs)("div",{id:"page-".concat(r),className:o()(Q().container,(n={},ee(n,Q().mobileCenterText,m),ee(n,Q()[(0,$.oj)(g.v3,c,h,!0)],!v),n)),children:[Object.keys(d).map((function(e,n){return(0,t.jsx)(M,{pageIndex:_,lineIndex:n,lineKey:e,words:d[e],isBigTextLayout:m,quranReaderStyles:l},e)})),(0,t.jsx)(J,{page:r})]})},ie=i(57065),te=i.n(ie),ae=i(294),re=i.n(ae),oe=i(38567),le=i.n(oe),_e=i(72893),de=i(35529),ue=i(89270);var ce=function(){var e=(0,u.v9)(de.Pt,u.wU),n=e.quranFont,i=e.quranTextFontScale,a=e.mushafLines,r=(0,u.v9)(L.eB,u.wU),l=r.showWordByWordTranslation,_=r.showWordByWordTransliteration,d=(0,ue.Nl)(n,a),c=l||_;return(0,t.jsx)("div",{className:re().skeletonContainer,children:te()(d).map((function(e){return(0,t.jsx)(_e.Z,{className:o()(re().skeleton,le()[(0,$.bZ)(n,i,a)],(r={},l=re().fixedWidth,_=!c,l in r?Object.defineProperty(r,l,{value:_,enumerable:!0,configurable:!0,writable:!0}):r[l]=_,r))},e);var r,l,_}))})},se=i(77992),he=i(49873);function fe(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function we(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),t.forEach((function(n){fe(e,n,i[n])}))}return e}var pe=function(e,n){var i=we({},n[e]);return delete i.firstVerseKey,delete i.lastVerseKey,i},ge=function(e){var n=e.pagesVersesRange,i=e.quranReaderStyles,r=e.reciterId,o=e.lang,l=e.wordByWordLocale,_=e.pageIndex,d=e.setMushafPageToVersesMap,u=e.initialData,c=(0,a.useMemo)((function(){return function(e,n){return Number(Object.keys(n)[0])+e}(_,n)}),[_,n]),s=(0,a.useMemo)((function(){return 0===_?function(e,n){return n.map((function(n){return we({},n,{words:n.words.filter((function(n){return n.pageNumber===e}))})}))}(c,u.verses):u.verses}),[u.verses,_,c]),h=(0,he.Z)(),f=0===_&&h,w=(0,y.Z)((0,se.oA)({pageNumber:c,pageVersesRange:pe(c,n),quranReaderStyles:i,reciter:r,locale:o,wordByWordLocale:l}),se.f3,{fallbackData:f?s:null,revalidateOnMount:!f}),p=w.data,g=w.isValidating;return(0,a.useEffect)((function(){p&&d((function(e){return we({},e,fe({},c,p))}))}),[c,d,p]),!p||g?(0,t.jsx)(ce,{}):(0,t.jsx)(ne,{verses:p,pageNumber:Number(c),quranReaderStyles:i,pageIndex:_},"page-".concat(c))},me=i(98505),ve=i.n(me),be=i(85754),xe=i(66951),ye=i(38533),ke=i(75183);var Re=function(e){var n,i,r,_=e.scrollToNextPage,d=e.scrollToPreviousPage,u=(0,l.Z)("quran-reader").t,c=(0,a.useContext)(Z.c),s=(0,P.v)(c,(function(e){return e.matches("HIDDEN")}));return(0,t.jsxs)("div",{className:o()(ve().buttonsContainer,(n={},i=ve().audioPlayerOpen,r=!s,i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n)),children:[(0,t.jsx)(be.ZP,{size:be.qE.Small,className:ve().prevButton,onClick:d,shouldFlipOnRTL:!1,tooltip:(0,t.jsxs)(t.Fragment,{children:[u("prev-page")," ",(0,t.jsx)(xe.Z,{invertColors:!0,keyboardKey:"\u2b06"})]}),tooltipContentSide:ye.iw.LEFT,children:(0,t.jsx)(ke.Z,{})}),(0,t.jsx)(be.ZP,{size:be.qE.Small,onClick:_,tooltip:(0,t.jsxs)(t.Fragment,{children:[u("next-page")," ",(0,t.jsx)(xe.Z,{invertColors:!0,keyboardKey:"\u2b07"})]}),tooltipContentSide:ye.iw.LEFT,children:(0,t.jsx)(ke.Z,{})})]})},je=i(65911),Ve=i.n(je),qe=function(e,n,i,t,a){var r=(0,y.Z)((0,f.I$)((0,se.MD)(e,n,(0,h.$P)(t.quranFont,t.mushafLines).mushaf,i)),p._i,{fallbackData:i.pagesLookup,revalidateOnMount:!a}),o=r.data,l=r.error,_=r.isValidating;return{pagesCount:o.totalPage,pagesVersesRange:o.pages,lookupRange:o.lookupRange,hasError:!!l,isLoading:_}},Pe=i(41718),Ne=i(1776),Oe=i(9454),Ie=i(7206),Se=i(40983),Ce=i(60522),Te=i(57535),Ae=i(60178),Le=i(31948),Ze=i(96467);var We=(0,_.default)((function(){return Promise.all([i.e(6065),i.e(1992),i.e(7621),i.e(6603)]).then(i.bind(i,19803))}),{loadableGenerated:{webpack:function(){return[19803]}},ssr:!1,loading:function(){return(0,t.jsx)(Oe.Z,{})}}),Ee=function(e){var n,i,r,_=e.quranReaderStyles,s=e.quranReaderDataType,h=e.initialData,f=e.resourceId,w=(0,a.useState)((n={},i=h.verses[0].pageNumber,r=h.verses,i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n)),p=w[0],g=w[1],m=(0,l.Z)("quran-reader").lang,v=(0,u.v9)(de.i9),b=(0,u.v9)(Te.E9,u.wU),y=(0,a.useMemo)((function(){return Object.values(p).flat()}),[p]),k=(0,Se.Z)(Ze.Z.Reciter),R=k.value,j=k.isQueryParamDifferent,V=(0,Ie.Z)(Ze.Z.WBW_LOCALE),q=V.value,P=V.isQueryParamDifferent,N=_.quranFont,O=_.mushafLines,I=_.quranTextFontScale;(0,Ce.Z)(N,y);var S=qe(f,s,h,_,v),C=S.pagesCount,T=S.hasError,A=S.pagesVersesRange,L=S.isLoading,Z=(0,a.useMemo)((function(){return function(e,n){return Number(e)-Number(Object.keys(n)[0])}(Number(b),A)}),[b,A]),W=(0,a.useRef)(null);x(s,W,h,_,y,A,v,N,O,L);var E=(0,a.useCallback)((function(){W.current.scrollToIndex({index:Z-1,align:"start",offset:-35})}),[Z]),F=(0,a.useCallback)((function(){W.current.scrollToIndex({index:Z+1,align:"start",offset:25})}),[Z]),B=(0,a.useCallback)((function(){(0,Ae.MY)("reading_view_prev_page_button"),E()}),[E]),D=(0,a.useCallback)((function(){(0,Ae.MY)("reading_view_next_page_button"),F()}),[F]),M=I<=5,K=(0,a.useCallback)((function(e){e.preventDefault(),E()}),[E]),Q=(0,a.useCallback)((function(e){e.preventDefault(),F()}),[F]);(0,d.y1)("Up",K,{enabled:M},[E]),(0,d.y1)("Down",Q,{enabled:M},[F]);return T?(0,t.jsx)(Le.default,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ne.Z,{translationsQueryParamDifferent:!1,reciterQueryParamDifferent:j,wordByWordLocaleQueryParamDifferent:P}),(0,t.jsx)("div",{onCopy:function(e){return(0,Pe.Z)(e,y,N)},className:o()(Ve().container,Ve()[(0,$.oj)(N,I,O)]),children:L?(0,t.jsx)("div",{className:Ve().virtuosoScroller,children:(0,t.jsx)(ce,{})}):(0,t.jsx)(c.OO,{ref:W,useWindowScroll:!0,increaseViewportBy:1200,className:Ve().virtuosoScroller,initialItemCount:1,totalCount:C+1,itemContent:function(e){if(e===C){var n=p[b],i=null===n||void 0===n?void 0:n[n.length-1];return i?(0,t.jsx)(We,{quranReaderDataType:s,lastVerse:i,initialData:h}):null}return(0,t.jsx)(ge,{pagesVersesRange:A,quranReaderStyles:_,reciterId:R,lang:m,wordByWordLocale:q,pageIndex:e,setMushafPageToVersesMap:g,initialData:h})}})}),M&&(0,t.jsx)(Re,{scrollToNextPage:D,scrollToPreviousPage:B})]})}},89270:function(e,n,i){"use strict";i.d(n,{Nl:function(){return f},ff:function(){return u},h$:function(){return c},p6:function(){return h}});var t=i(76332),a=i(8754);function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _,d=(o(_={},a.RA.Indopak,604),o(_,a.RA.KFGQPCHAFS,604),o(_,a.RA.QCFV1,604),o(_,a.RA.QCFV2,604),o(_,a.RA.UthmaniHafs,604),o(_,a.RA.Indopak16Lines,548),o(_,a.RA.Indopak15Lines,610),_),u=function(e){return 1===e},c=function(e,n,i){return e===s(n,i)},s=function(e,n){return e&&n?e===a.fr.IndoPak?n===a.AN.SixteenLines?d[a.RA.Indopak16Lines]:d[a.RA.Indopak15Lines]:d[a.ru[e]]:604},h=function(e,n,i){return l(Array(s(n,i))).map((function(n,i){var a=i+1;return{value:a,label:(0,t.rQ)(a,e)}}))},f=function(e,n){return e!==a.fr.IndoPak||e===a.fr.IndoPak&&n===a.AN.FifteenLines?15:16}},76007:function(e){e.exports={line:"Line_line__3jPyY",container:"Line_container__CApVP",mobileInline:"Line_mobileInline__jEjq9",fixedWidth:"Line_fixedWidth__AHk9W"}},85598:function(e){e.exports={"fallback_qpc_uthmani_hafs-line-width-1":"Page_fallback_qpc_uthmani_hafs-line-width-1__X9dUi","fallback_qpc_uthmani_hafs-line-width-2":"Page_fallback_qpc_uthmani_hafs-line-width-2__prdZQ","fallback_qpc_uthmani_hafs-line-width-3":"Page_fallback_qpc_uthmani_hafs-line-width-3__CpdkI","fallback_qpc_uthmani_hafs-line-width-4":"Page_fallback_qpc_uthmani_hafs-line-width-4__bpdKT","fallback_qpc_uthmani_hafs-line-width-5":"Page_fallback_qpc_uthmani_hafs-line-width-5__r0dhC","fallback_qpc_uthmani_hafs-line-width-6":"Page_fallback_qpc_uthmani_hafs-line-width-6__hNehk","fallback_qpc_uthmani_hafs-line-width-7":"Page_fallback_qpc_uthmani_hafs-line-width-7__W627r","fallback_qpc_uthmani_hafs-line-width-8":"Page_fallback_qpc_uthmani_hafs-line-width-8__obMGX","fallback_qpc_uthmani_hafs-line-width-9":"Page_fallback_qpc_uthmani_hafs-line-width-9__uE3Np","fallback_qpc_uthmani_hafs-line-width-10":"Page_fallback_qpc_uthmani_hafs-line-width-10__g_Coa",container:"Page_container__hkXnW",mobileCenterText:"Page_mobileCenterText__WB1en"}},70238:function(e){e.exports={pageText:"PageFooter_pageText__YdcIS",pageLink:"PageFooter_pageLink__YT3wq"}},98505:function(e){e.exports={buttonsContainer:"PageNavigationButtons_buttonsContainer__fomTO",prevButton:"PageNavigationButtons_prevButton__OOwCQ",audioPlayerOpen:"PageNavigationButtons_audioPlayerOpen__sIOdL"}},65911:function(e){e.exports={"code_v1-line-width-1":"ReadingView_code_v1-line-width-1__u_hC8","code_v1-line-width-2":"ReadingView_code_v1-line-width-2__Hf8MJ","code_v1-line-width-3":"ReadingView_code_v1-line-width-3__C3GX9","code_v1-line-width-4":"ReadingView_code_v1-line-width-4__JF_zd","code_v1-line-width-5":"ReadingView_code_v1-line-width-5__6kO9e","code_v1-line-width-6":"ReadingView_code_v1-line-width-6__Xmg9T","code_v1-line-width-7":"ReadingView_code_v1-line-width-7__5DID0","code_v1-line-width-8":"ReadingView_code_v1-line-width-8__QSPjI","code_v1-line-width-9":"ReadingView_code_v1-line-width-9__g4KUg","code_v1-line-width-10":"ReadingView_code_v1-line-width-10__EbYvu","code_v2-line-width-1":"ReadingView_code_v2-line-width-1__LKGTJ","code_v2-line-width-2":"ReadingView_code_v2-line-width-2__XxvSm","code_v2-line-width-3":"ReadingView_code_v2-line-width-3__boomP","code_v2-line-width-4":"ReadingView_code_v2-line-width-4__jii3F","code_v2-line-width-5":"ReadingView_code_v2-line-width-5__yh418","code_v2-line-width-6":"ReadingView_code_v2-line-width-6__PmlQ_","code_v2-line-width-7":"ReadingView_code_v2-line-width-7__L3zwX","code_v2-line-width-8":"ReadingView_code_v2-line-width-8__fodHn","code_v2-line-width-9":"ReadingView_code_v2-line-width-9__R51Sk","code_v2-line-width-10":"ReadingView_code_v2-line-width-10__aRnmF","text_indopak_15_lines-line-width-1":"ReadingView_text_indopak_15_lines-line-width-1__HIvVb","text_indopak_15_lines-line-width-2":"ReadingView_text_indopak_15_lines-line-width-2__COw_J","text_indopak_15_lines-line-width-3":"ReadingView_text_indopak_15_lines-line-width-3__x0I0x","text_indopak_15_lines-line-width-4":"ReadingView_text_indopak_15_lines-line-width-4__oxtcz","text_indopak_15_lines-line-width-5":"ReadingView_text_indopak_15_lines-line-width-5__CIg5C","text_indopak_15_lines-line-width-6":"ReadingView_text_indopak_15_lines-line-width-6__e8_Zq","text_indopak_15_lines-line-width-7":"ReadingView_text_indopak_15_lines-line-width-7__R1c56","text_indopak_15_lines-line-width-8":"ReadingView_text_indopak_15_lines-line-width-8__f1hhH","text_indopak_15_lines-line-width-9":"ReadingView_text_indopak_15_lines-line-width-9__e_Fhh","text_indopak_15_lines-line-width-10":"ReadingView_text_indopak_15_lines-line-width-10__av8qG","text_indopak_16_lines-line-width-1":"ReadingView_text_indopak_16_lines-line-width-1__wEGW4","text_indopak_16_lines-line-width-2":"ReadingView_text_indopak_16_lines-line-width-2__AeVXj","text_indopak_16_lines-line-width-3":"ReadingView_text_indopak_16_lines-line-width-3__UEeqd","text_indopak_16_lines-line-width-4":"ReadingView_text_indopak_16_lines-line-width-4__2Nw2u","text_indopak_16_lines-line-width-5":"ReadingView_text_indopak_16_lines-line-width-5__r2tKN","text_indopak_16_lines-line-width-6":"ReadingView_text_indopak_16_lines-line-width-6__ybw6l","text_indopak_16_lines-line-width-7":"ReadingView_text_indopak_16_lines-line-width-7____CTX","text_indopak_16_lines-line-width-8":"ReadingView_text_indopak_16_lines-line-width-8__ymIE0","text_indopak_16_lines-line-width-9":"ReadingView_text_indopak_16_lines-line-width-9__MKM2y","text_indopak_16_lines-line-width-10":"ReadingView_text_indopak_16_lines-line-width-10__XhBAV","qpc_uthmani_hafs-line-width-1":"ReadingView_qpc_uthmani_hafs-line-width-1__1ArHr","qpc_uthmani_hafs-line-width-2":"ReadingView_qpc_uthmani_hafs-line-width-2__I6rKn","qpc_uthmani_hafs-line-width-3":"ReadingView_qpc_uthmani_hafs-line-width-3__jIQg8","qpc_uthmani_hafs-line-width-4":"ReadingView_qpc_uthmani_hafs-line-width-4__RXw5a","qpc_uthmani_hafs-line-width-5":"ReadingView_qpc_uthmani_hafs-line-width-5__eO8Fo","qpc_uthmani_hafs-line-width-6":"ReadingView_qpc_uthmani_hafs-line-width-6__TbgkW","qpc_uthmani_hafs-line-width-7":"ReadingView_qpc_uthmani_hafs-line-width-7__RoJmi","qpc_uthmani_hafs-line-width-8":"ReadingView_qpc_uthmani_hafs-line-width-8__m_AJa","qpc_uthmani_hafs-line-width-9":"ReadingView_qpc_uthmani_hafs-line-width-9___DGtD","qpc_uthmani_hafs-line-width-10":"ReadingView_qpc_uthmani_hafs-line-width-10__uNVi7","tajweed-line-width-1":"ReadingView_tajweed-line-width-1__XzcHo","tajweed-line-width-2":"ReadingView_tajweed-line-width-2__qI_3N","tajweed-line-width-3":"ReadingView_tajweed-line-width-3__iPATb","tajweed-line-width-4":"ReadingView_tajweed-line-width-4___gTZv","tajweed-line-width-5":"ReadingView_tajweed-line-width-5__8creJ","tajweed-line-width-6":"ReadingView_tajweed-line-width-6__mqO8v","tajweed-line-width-7":"ReadingView_tajweed-line-width-7__p1Oi4","tajweed-line-width-8":"ReadingView_tajweed-line-width-8__js74h","tajweed-line-width-9":"ReadingView_tajweed-line-width-9__gjjDU","tajweed-line-width-10":"ReadingView_tajweed-line-width-10__xBOUh",container:"ReadingView_container__99RFM",virtuosoScroller:"ReadingView_virtuosoScroller__Y3HA6"}},294:function(e){e.exports={skeletonContainer:"ReadingViewSkeleton_skeletonContainer__h5Sb2",skeleton:"ReadingViewSkeleton_skeleton__hw8ZE",fixedWidth:"ReadingViewSkeleton_fixedWidth__fIRzb"}}}]);