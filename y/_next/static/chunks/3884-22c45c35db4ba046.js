(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3884],{15273:function(e,t,n){"use strict";var r,i=n(67597);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}t.Z=function(e){return i.createElement("svg",a({viewBox:"0 0 24 24",width:18,height:18,stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",style:{color:"currentcolor"}},e),r||(r=i.createElement("path",{d:"m6 9 6 6 6-6"})))}},77107:function(e,t,n){"use strict";var r,i=n(67597);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}t.Z=function(e){return i.createElement("svg",a({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=i.createElement("path",{d:"M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8V2.75Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})))}},29412:function(e,t,n){"use strict";var r=n(57611),i=n(67597),a=n(62103),o=n(19121),s=n(9454),l=n(54111),c=function(e){var t=e.queryKey,n=e.render,i=e.initialData,c=e.loading,u=void 0===c?function(){return(0,r.jsx)(s.Z,{})}:c,f=e.fetcher,d=void 0===f?l._i:f,m=(0,a.Z)(t,(function(){return d(t).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}),{fallbackData:i}),_=m.data,v=m.error,h=m.isValidating,g=m.mutate;if(h)return u();return v?(0,r.jsx)(o.Z,{onRetryClicked:function(){g()},error:v}):n(_)};t.Z=(0,i.memo)(c)},19121:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r,i=n(57611),a=n(67597),o=n(61395),s=n(43563),l=n.n(s),c=n(85754);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=function(e){return a.createElement("svg",u({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65 2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85 3.437.85.85 4.185.85 7.5c0 3.315 2.587 6.65 6.65 6.65 1.944 0 3.562-.77 4.714-1.942a6.77 6.77 0 0 0 1.428-2.167.5.5 0 1 0-.925-.38 5.77 5.77 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643-3.44 0-5.65-2.815-5.65-5.65Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})))},d=n(54111),m=function(e){var t=e.onRetryClicked,n=e.error,r=(0,o.Z)("common").t;return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsx)("p",{className:l().text,children:n.message!==d.yH?r("error.general"):r("error.offline")}),(0,i.jsx)(c.ZP,{prefix:(0,i.jsx)(f,{}),size:c.qE.Small,type:c.L$.Secondary,onClick:t,children:r("retry")})]})}},81517:function(e,t,n){"use strict";var r=n(57611),i=n(67597),a=n(61395),o=n(17955),s=n.n(o),l=n(22471),c=n(76332),u=n(16129),f=n(38521);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.selectedChapterId,n=e.selectedVerseNumber,o=e.onChapterIdChange,d=e.onVerseNumberChange,_=(0,a.Z)().lang,v=(0,i.useContext)(f.Z),h=(0,u.qB)(v,t),g=(0,i.useMemo)((function(){return Object.entries(v).map((function(e){var t=m(e,2),n=t[0];return{label:t[1].transliteratedName,value:n}}))}),[v]),b=(0,i.useMemo)((function(){return h.map((function(e){var t=(0,u.tR)(e).toString();return{label:(0,c.rQ)(Number(t),_),value:t}}))}),[_,h]);return(0,r.jsxs)("div",{className:s().surahAndAyahSelectionContainer,children:[(0,r.jsx)(l.Z,{size:l.h.Small,id:"surah-selection",name:"surah-selection",options:g,onChange:o,value:t}),(0,r.jsx)("div",{className:s().selectionItem,children:(0,r.jsx)(l.Z,{className:s().ayahSelection,size:l.h.Small,id:"ayah-selection",name:"ayah-selection",options:b,onChange:d,value:n})})]})}},63884:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r=n(57611),i=n(67597),a=n(9134),o=n.n(a),s=n(61395),l=n(648),c=n(62103),u=n(38608),f=n(17955),d=n.n(f),m=n(85754),_=n(22471),v=n(72893),h=n(75785),g=n(76332);var b=function(e){var t=e.selectedTafsirIdOrSlug,n=e.onTafsirSelected,i=e.selectedLanguage,a=e.onSelectLanguage,s=e.languageOptions,l=e.data,c=e.isLoading;return l?(0,r.jsx)(h.Z,{isLoading:c,children:(0,r.jsxs)("div",{className:d().tafsirSelectionContainer,children:[(0,r.jsx)(_.Z,{className:d().languageSelection,size:_.h.Small,id:"lang-selection",name:"lang-selection",options:s.map((function(e){return{label:(0,g.Dl)(e),value:e}})),onChange:a,value:i}),l.tafsirs.filter((function(e){return e.languageName===i||t===e.slug||Number(t)===e.id})).map((function(e){var i,a,s,l=t===e.slug||Number(t)===e.id;return(0,r.jsx)(m.ZP,{onClick:function(){return n(e.id,e.slug)},size:m.qE.Small,className:o()(d().tafsirSelectionItem,(i={},a=d().tafsirItemSelected,s=l,a in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,i)),children:e.translatedName.name},e.id)}))]})}):(0,r.jsx)(v.Z,{className:o()(d().tafsirSkeletonItem,d().tafsirSelectionSkeleton)})},p=n(81517),S=n(62001),y=n(13178),x=n.n(y),j=function(e){var t=e.children;return(0,r.jsx)("div",{className:x().tafsirMessage,children:t})},w=function(e){var t=e.from,n=e.to,i=(0,s.Z)("common").t;return(0,r.jsx)(j,{children:i("tafsir.group-message",{from:t,to:n})})},C=n(78383),N=n(14680),T=n.n(N),Z=n(77940),k=n(96612),I=n(35529),V=n(60178),O=n(3669),A={1:T().xs,2:T().sm,3:T().md,4:T().lg,5:T().xl},L=function(e){var t=e.direction,n=e.languageCode,i=e.text,a=(0,l.v9)(I.Pt),o=(0,k.Z)(),s=o.actions.onSettingsChange,c=o.isLoading,u=a.tafsirFontScale,f=function(e,t,n,r){s(e,t,n,r,O.Z.QURAN_READER_STYLES)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{dir:t,className:T().counter,children:(0,r.jsx)(h.Z,{isLoading:c,children:(0,r.jsx)(Z.Z,{count:u,onDecrement:u===I.P0?null:function(){var e=u-1;(0,V.Q8)("tafsir_font_scale",u,e),f("tafsirFontScale",e,(0,I.fT)(),(0,I.$U)())},onIncrement:u===I.Jf?null:function(){var e=u+1;(0,V.Q8)("tafsir_font_scale",u,e),f("tafsirFontScale",e,(0,I.$U)(),(0,I.fT)())}})})}),(0,r.jsx)("div",{className:A[u],dir:t,lang:n,dangerouslySetInnerHTML:{__html:i}})]})},P=n(29412),E=n(55455),z=n(71304),R=n(52266),M=n(9515),B=n(33015),F=n.n(B),q=n(16129),D=n(54111),G=n(38521);function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var U=function(e){var t=e.initialChapterId,n=e.initialVerseNumber,a=e.initialTafsirIdOrSlug,f=e.render,m=e.scrollToTop,_=e.shouldRender,v=(0,l.v9)(I.Pt,l.wU),h=(0,s.Z)("common"),y=h.lang,x=h.t,N=(0,l.v9)(z.OW),T=N.selectedTafsirs,Z=(0,i.useContext)(G.Z),A=(0,k.Z)(),B=A.actions.onSettingsChange,W=A.isLoading,U=(0,i.useState)(t),$=U[0],J=U[1],Y=(0,i.useState)(n),H=Y[0],K=Y[1],X=(0,i.useState)(""),ee=X[0],te=X[1],ne=(0,q.u)(Number($),Number(H)),re=(0,i.useState)(a||(null===T||void 0===T?void 0:T[0])),ie=re[0],ae=re[1];(0,i.useEffect)((function(){a&&((0,V.Kz)("tafsir_url_access"),ae(a))}),[a]);var oe=(0,i.useCallback)((function(e,t){(0,V.u8)("tafsir",e),ae(t),(0,M._V)((0,M.I8)(Number($),Number(H),t),y),B("selectedTafsirs",[t],(0,z.ZY)({tafsirs:[t],locale:y}),(0,z.ZY)({tafsirs:N.selectedTafsirs,locale:y}),O.Z.TAFSIRS)}),[y,B,$,H,N]),se=(0,c.Z)(_?(0,R.A9)(y):null,D._i).data;(0,i.useEffect)((function(){se&&te((function(e){return e||function(e,t){var n=null===e||void 0===e?void 0:e.tafsirs.find((function(e){return e.slug===t||e.id===Number(t)}));return null===n||void 0===n?void 0:n.languageName}(se,ie)}))}),[oe,ie,se]);var le=se?function(e){return F()(e.map((function(e){return e.languageName})))}(se.tafsirs):[],ce=(0,i.useCallback)((function(e){if(!e||!e.tafsir)return(0,r.jsx)(C.Z,{});var t=e.tafsir,n=t.verses,i=t.text,a=t.languageId,o=(0,g.j2)(a),s=Q((0,q.cI)(n),2),l=s[0],c=s[1],f=Q((0,q.bV)(c),2),_=f[0],v=f[1],h=!(0,q.kC)(Z,_,Number(v)),b=1!==(0,q.tR)(l);return(0,r.jsxs)("div",{children:[!i&&(0,r.jsx)(j,{children:x("tafsir.no-text",{tafsirName:e.tafsir.translatedName.name})}),Object.values(n).length>1&&!!i&&(0,r.jsx)(w,{from:l,to:c}),(0,r.jsx)("div",{className:d().verseTextContainer,children:(0,r.jsx)(u.Z,{verses:Object.values(n)})}),(0,r.jsx)("div",{className:d().separatorContainer,children:(0,r.jsx)(E.Z,{})}),!!i&&(0,r.jsx)(L,{direction:o.direction,languageCode:o.code,text:i}),(0,r.jsx)(S.Z,{hasNextVerseGroup:h,hasPrevVerseGroup:b,onNextButtonClicked:function(){(0,V.MY)("tafsir_next_verse"),m();var e=String(Number((0,q.tR)(c))+1);(0,M._V)((0,M.I8)(Number($),Number(e),ie),y),K(e)},onPreviousButtonClicked:function(){var e=String(Number((0,q.tR)(l))-1);(0,V.MY)("tafsir_prev_verse"),m(),(0,M._V)((0,M.I8)(Number($),Number(e),ie),y),K(e)}})]})}),[Z,y,m,$,ie,x]);return f({surahAndAyahSelection:(0,r.jsx)(p.Z,{selectedChapterId:$,selectedVerseNumber:H,onChapterIdChange:function(e){(0,V.u8)("tafsir_chapter_id",e),(0,M._V)((0,M.I8)(Number(e),Number(1),ie),y),J(e.toString()),K("1")},onVerseNumberChange:function(e){(0,V.u8)("tafsir_verse_number",e),K(e),(0,M._V)((0,M.I8)(Number($),Number(e),ie),y)}}),languageAndTafsirSelection:(0,r.jsx)(b,{selectedTafsirIdOrSlug:ie,selectedLanguage:ee,onTafsirSelected:oe,onSelectLanguage:function(e){if((0,V.Q8)("tafsir_locale",ee,e),te(e),se){var t=(a=e,null===(i=se)||void 0===i?void 0:i.tafsirs.find((function(e){return e.languageName===a})));if(t){var n=t.id,r=t.slug;oe(n,r)}}var i,a},languageOptions:le,data:se,isLoading:W}),body:(0,r.jsx)("div",{className:o()(d().tafsirContainer,d()["tafsir-font-size-".concat(v.tafsirFontScale)]),children:(0,r.jsx)(P.Z,{loading:C.Z,queryKey:(0,R.Wy)(ie,ne,{lang:y,quranFont:v.quranFont,mushafLines:v.mushafLines}),render:ce})})})}},62001:function(e,t,n){"use strict";var r=n(57611),i=n(61395),a=n(70354),o=n.n(a),s=n(85754);t.Z=function(e){var t=e.hasNextVerseGroup,n=e.hasPrevVerseGroup,a=e.onNextButtonClicked,l=e.onPreviousButtonClicked,c=(0,i.Z)("common").t;return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)("div",{children:n&&(0,r.jsx)(s.ZP,{type:s.L$.Secondary,onClick:l,children:c("previous-ayah")})}),(0,r.jsx)("div",{children:t&&(0,r.jsx)(s.ZP,{type:s.L$.Secondary,onClick:a,children:c("next-ayah")})})]})}},78383:function(e,t,n){"use strict";var r=n(57611),i=n(9134),a=n.n(i),o=n(57065),s=n.n(o),l=n(17955),c=n.n(l),u=n(72893);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{className:(c().tafsirSkeletonItem,c().ayahSekletonItem)}),s()(1,15).map((function(e){var t;return(0,r.jsx)(u.Z,{className:a()(c().tafsirSkeletonItem,(t={},f(t,c().tafsirSkeletonItem1,e%1===0),f(t,c().tafsirSkeletonItem2,e%2===0),f(t,c().tafsirSkeletonItem3,e%3===0),t))},e)}))]})}},38608:function(e,t,n){"use strict";var r=n(57611),i=n(67597),a=n(648),o=n(1068),s=n(60522),l=n(35529),c=n(16129);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.verses,n=(0,a.v9)(l.Pt,a.wU).quranFont,f=(0,i.useMemo)((function(){return Object.values(t).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},e,{pageNumber:e.words[0].pageNumber})}))}),[t]);(0,s.Z)(n,f);var d=(0,i.useMemo)((function(){return t.map((function(e){return(0,c.LQ)(e)})).flat()}),[t]);return(0,r.jsx)(o.Z,{words:d})}},77940:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r,i=n(57611),a=n(67597),o=n(61395),s=n(79872),l=n.n(s),c=n(85754);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=function(e){return a.createElement("svg",u({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M2.25 7.5a.5.5 0 0 1 .5-.5h9.5a.5.5 0 0 1 0 1h-9.5a.5.5 0 0 1-.5-.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})))},d=n(77107),m=n(76332),_=function(e){var t=e.count,n=e.onIncrement,r=e.onDecrement,s=(0,o.Z)("common"),u=s.t,_=s.lang,v=(0,a.useMemo)((function(){return(0,m.rQ)(Number(t),_)}),[t,_]);return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsx)(c.ZP,{tooltip:u("counter.decrease"),shape:c.jL.Circle,variant:c.Wu.Ghost,isDisabled:!r,onClick:r,ariaLabel:u("counter.decrease"),children:(0,i.jsx)(f,{})}),(0,i.jsx)("span",{className:l().count,children:v}),(0,i.jsx)(c.ZP,{tooltip:u("counter.increase"),variant:c.Wu.Ghost,shape:c.jL.Circle,isDisabled:!n,onClick:n,ariaLabel:u("counter.increase"),children:(0,i.jsx)(d.Z,{})})]})}},22471:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var r,i=n(57611),a=n(67597),o=n(9134),s=n.n(o),l=n(66413),c=n.n(l),u=n(15273);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}!function(e){e.Small="small",e.Medium="medium",e.Large="large"}(r||(r={}));t.Z=function(e){var t,n,o=e.name,l=e.id,m=e.onChange,_=e.options,v=e.value,h=e.disabled,g=void 0!==h&&h,b=e.required,p=void 0!==b&&b,S=e.size,y=void 0===S?r.Medium:S,x=e.placeholder,j=void 0===x?"Select an option":x,w=e.defaultStyle,C=void 0===w||w,N=e.className,T=e.withBackground,Z=void 0===T||T,k=(0,a.useCallback)((function(e){m&&m(e.target.value)}),[m]);return(0,i.jsxs)("div",{className:s()(c().container,(t={},f(t,c().defaultStyledContainer,C),f(t,N,N),f(t,c().disabledContainer,g),f(t,c().smallContainer,y===r.Small),f(t,c().mediumContainer,y===r.Medium),f(t,c().largeContainer,y===r.Large),f(t,c().withBackground,Z),t)),children:[(0,i.jsxs)("select",d({className:s()(c().select,(n={},f(n,c().defaultStyledSelect,C),f(n,c().disabledSelect,g),n)),name:o,id:l,onChange:k,disabled:g,required:p},v?{value:v}:{defaultValue:""},{children:[(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:j}),_.map((function(e){return(0,i.jsx)("option",{value:e.value,disabled:e.disabled||!1,children:e.label},e.value)}))]})),(0,i.jsx)("div",{className:s()(c().arrow,f({},c().disabledArrow,g)),children:(0,i.jsx)(u.Z,{})})]})}},60522:function(e,t,n){"use strict";var r=n(67597),i=n(648),a=n(90409),o=n(3592),s=n(86795),l=n(8754);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e,t){var n=(0,r.useRef)([]),c=(0,i.I0)(),f=(0,s.Fy)(e),d=(0,i.v9)(a.$Z),m=(0,r.useCallback)((function(e){c((0,a.wC)(e))}),[c]);(0,r.useEffect)((function(){f&&t.length>0&&(0,s.AX)(t).forEach((function(t){var r=e===l.fr.MadaniV1,i=(0,s.r$)(r,t),a=new FontFace(i,(0,s.nA)(r,t));n.current.includes(i)||d.includes(i)||(n.current=u(n.current).concat([i]),a.display="block",document.fonts.add(a),a.load().then((function(){m(i)})).finally((function(){n.current=(0,o.sj)(i,n.current)})))}))}),[e,t,d,f,n,m])}},43563:function(e){e.exports={container:"Error_container__1m9XV",text:"Error_text__yg4kD"}},70354:function(e){e.exports={container:"TafsirEndOfScrollingActions_container__tcWLj"}},13178:function(e){e.exports={tafsirMessage:"TafsirMessage_tafsirMessage__Gr_S9"}},14680:function(e){e.exports={counter:"TafsirText_counter__xlNaF",xs:"TafsirText_xs__P5Qjv",sm:"TafsirText_sm__BbfQ0",md:"TafsirText_md__mJWtv",lg:"TafsirText_lg__t_oGB",xl:"TafsirText_xl__3hmwr"}},17955:function(e){e.exports={container:"TafsirView_container__R9G7I",tafsirName:"TafsirView_tafsirName__QPOiO",tafsirContainer:"TafsirView_tafsirContainer__g2rhW",rtl:"TafsirView_rtl__8pRLP",surahAndAyahSelectionContainer:"TafsirView_surahAndAyahSelectionContainer__W96nf",tafsirSelectionContainer:"TafsirView_tafsirSelectionContainer__QSkE3",tafsirSelectionItem:"TafsirView_tafsirSelectionItem__GTJvw",tafsirItemSelected:"TafsirView_tafsirItemSelected__SXceL",separatorContainer:"TafsirView_separatorContainer__diS8n",verseTextContainer:"TafsirView_verseTextContainer__A7tZ_",selectionItem:"TafsirView_selectionItem__FJdhi",ayahSelection:"TafsirView_ayahSelection__jWULb",tafsirSkeletonItem:"TafsirView_tafsirSkeletonItem__q5sNk",ayahSekletonItem:"TafsirView_ayahSekletonItem__B_nJN",tafsirSkeletonItem1:"TafsirView_tafsirSkeletonItem1__nLGRk",tafsirSkeletonItem2:"TafsirView_tafsirSkeletonItem2__aaEJy",tafsirSkeletonItem3:"TafsirView_tafsirSkeletonItem3__NqYKV",tafsirSelectionSkeleton:"TafsirView_tafsirSelectionSkeleton__3oq7k",languageSelection:"TafsirView_languageSelection__8EFqZ","tafsir-font-size-1":"TafsirView_tafsir-font-size-1__sLRnq","tafsir-font-size-2":"TafsirView_tafsir-font-size-2__JLiR2","tafsir-font-size-3":"TafsirView_tafsir-font-size-3__K0LBa","tafsir-font-size-4":"TafsirView_tafsir-font-size-4__KrD1k","tafsir-font-size-5":"TafsirView_tafsir-font-size-5__ri_Mr","tafsir-font-size-6":"TafsirView_tafsir-font-size-6__FvBko","tafsir-font-size-7":"TafsirView_tafsir-font-size-7__oS0XU","tafsir-font-size-8":"TafsirView_tafsir-font-size-8__1U_43","tafsir-font-size-9":"TafsirView_tafsir-font-size-9__6VJC2","tafsir-font-size-10":"TafsirView_tafsir-font-size-10__zRYWI"}},79872:function(e){e.exports={container:"Counter_container__WfR1A",count:"Counter_count__Q6LdA"}},66413:function(e){e.exports={container:"Select_container___DCC_",withBackground:"Select_withBackground__rpdEL",defaultStyledContainer:"Select_defaultStyledContainer__b32Mm",smallContainer:"Select_smallContainer__L2Lff",mediumContainer:"Select_mediumContainer__MF_Vq",largeContainer:"Select_largeContainer___qGs0",disabledContainer:"Select_disabledContainer__gi7YD",arrow:"Select_arrow__WAbAk",disabledArrow:"Select_disabledArrow__V4nEO",select:"Select_select__BnH2G",defaultStyledSelect:"Select_defaultStyledSelect__LmeKj",disabledSelect:"Select_disabledSelect___R3Jd"}}}]);