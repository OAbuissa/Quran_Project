(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9486],{33539:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/surah/[chapterId]/info",function(){return t(65592)}])},44406:function(e,n,t){"use strict";var r=t(57611),a=(t(67597),t(41801)),o=t(98366);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.Z=function(e){var n=e.url,t=e.image,i=e.imageAlt,l=e.imageHeight,u=e.imageWidth,f=e.openGraph,d=e.description,h=s(e,["url","image","imageAlt","imageHeight","imageWidth","openGraph","description"]),p=c({},f&&{openGraph:f},n&&{url:n},t&&{images:[{url:t,width:u,height:l,alt:i}]}),g=c({},h,d&&{description:(0,o.aS)(d,150)});return(0,r.jsx)(a.PB,c({},g,{openGraph:p}))}},34876:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(57611),a=(t(67597),t(61395)),o=t(26913),i=t.n(o),c=t(49439),s=t.n(c),l=t(85754),u=t(21899),f=t(60178),d=t(76005),h=t(76332),p=t(9515),g=function(e){var n=e.chapter,t=e.chapterInfo,o=(0,a.Z)(),c=o.t,g=o.lang;return(0,r.jsx)("div",{className:s().container,children:(0,r.jsxs)("div",{className:s().infoBody,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:s().backContainer,children:(0,r.jsx)(l.ZP,{variant:l.Wu.Ghost,href:(0,p.qm)(t.chapterId),className:s().backIcon,prefix:(0,r.jsx)(u.Z,{}),size:l.qE.Small,onClick:function(){(0,f.MY)("chapter_info_go_back")},children:c("surah-info:go-to-surah")})}),(0,r.jsx)("div",{className:s().imageContainer,children:(0,r.jsx)(i(),{src:"/images/".concat(n.revelationPlace,".jpg"),layout:"fill",placeholder:"blur",blurDataURL:(0,d.y)(200,200),alt:c("surah-info:".concat(n.revelationPlace))})})]}),(0,r.jsxs)("div",{className:s().infoTextContainer,children:[(0,r.jsxs)("div",{className:s().headerContainer,children:[(0,r.jsxs)("div",{className:s().surahName,children:[c("common:surah")," ",n.transliteratedName]}),(0,r.jsxs)("div",{className:s().detailsContainer,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:s().detailHeader,children:c("common:ayahs")}),(0,r.jsx)("p",{children:(0,h.rQ)(n.versesCount,g)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:s().detailHeader,children:c("surah-info:revelation-place")}),(0,r.jsx)("p",{children:c("surah-info:".concat(n.revelationPlace))})]})]})]}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t.text},className:s().textBody})]})]})})},m=t(44406),_=t(41982),v=t(31948),x=function(e){var n=e.hasError,t=e.chapterInfoResponse,o=e.chapterResponse,i=(0,a.Z)("common"),c=i.t,s=i.lang;if(n)return(0,r.jsx)(v.default,{statusCode:500});var l=(0,p.Zm)(o.chapter.slug);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{title:"".concat(c("surah")," ").concat(o.chapter.transliteratedName," - ").concat((0,h.rQ)(1,s),"-").concat((0,h.rQ)(o.chapter.versesCount,s)),image:(0,_.oJ)({chapterId:t.chapterInfo.id,locale:s}),imageWidth:1200,imageHeight:630,canonical:(0,p.Z2)(s,l),languageAlternates:(0,h.qc)(l),description:t.chapterInfo.shortText}),(0,r.jsx)(g,{chapter:o.chapter,chapterInfo:t.chapterInfo})]})}},31948:function(e,n,t){"use strict";t.r(n);var r=t(57611),a=t(61395),o=t(15129),i=t(38230),c=t.n(i),s=t(85754),l=t(22367);n.default=function(e){e.statusCode;var n=(0,a.Z)("error").t,t=(0,o.useRouter)();return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("h1",{className:c().title,children:n("title")}),(0,r.jsx)("div",{className:c().goBack,children:(0,r.jsx)(s.ZP,{onClick:function(){document&&document.referrer?t.back():t.push("/")},children:n("go-back")})}),(0,r.jsxs)("p",{className:c().reportBug,children:[n("if-persist")," ",(0,r.jsx)(l.Z,{href:"https://feedback.quran.com/",variant:l.r.Highlight,children:n("report-cta")})]})]})}},65592:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var r=t(57611),a=t(34876);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=!0;n.default=function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},e))}},76005:function(e,n,t){"use strict";t.d(n,{y:function(){return c}});var r="#f7f7f7",a="#d1d1d1",o=function(e){return window.btoa(e)},i=function(e,n,t,r){return'\n  <svg width="'.concat(e,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n      <linearGradient id="g">\n        <stop stop-color="').concat(t,'" offset="20%" />\n        <stop stop-color="').concat(r,'" offset="50%" />\n        <stop stop-color="').concat(t,'" offset="70%" />\n      </linearGradient>\n    </defs>\n    <rect width="').concat(e,'" height="').concat(n,'" fill="').concat(t,'" />\n    <rect id="r" width="').concat(e,'" height="').concat(n,'" fill="url(#g)" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1.2s" repeatCount="indefinite"  />\n  </svg>')},c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;return"data:image/svg+xml;base64,".concat(o(i(n,e,t,c)))}},98366:function(e,n,t){"use strict";t.d(n,{Nl:function(){return o},aS:function(){return r},ox:function(){return a}});var r=function(e,n){for(var t=e.split("",n),r="",a=0;a<t.length;a+=1){var o=t[a];if(r.length===n-1){r="".concat(r).concat(o,"...");break}r="".concat(r).concat(o)}return r},a=function(e){return e.replace(/(<([^>]+)>)/gi,"")},o=function(e){if(!e)return"";var n=e.split("-");return 1===n.length?n[0]:n[n.length-1]}},49439:function(e){e.exports={container:"Info_container__F5EE7",infoBody:"Info_infoBody__5p7Nu",backContainer:"Info_backContainer__6CVP7",backIcon:"Info_backIcon__ywZyE",imageContainer:"Info_imageContainer__48mv2",textBody:"Info_textBody__Tx5BZ",infoTextContainer:"Info_infoTextContainer__N2E46",headerContainer:"Info_headerContainer__Gt5qK",surahName:"Info_surahName__X8hE6",detailsContainer:"Info_detailsContainer__YGVEI",detailHeader:"Info_detailHeader__IXEu1"}},38230:function(e){e.exports={container:"_error_container__vJFnH",title:"_error_title__oLWAK",goBack:"_error_goBack__U4WNd",reportBug:"_error_reportBug__tsKmR"}}},function(e){e.O(0,[6913,9774,2888,179],(function(){return n=33539,e(e.s=n);var n}));var n=e.O();_N_E=n}]);