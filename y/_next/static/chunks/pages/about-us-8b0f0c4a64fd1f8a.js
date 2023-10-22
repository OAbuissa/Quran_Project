(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8552],{67385:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(67597),i=t(61395),a=/<(\w+)>(.*?)<\/\1>|<(\w+)\/>/,o=/(?:\r\n|\r|\n)/g;function c(e){if(!e.length)return[];var n=e.slice(0,4),t=n[0],r=n[1],i=n[2];return[[t||i,r||"",n[3]]].concat(c(e.slice(4,e.length)))}function s(e,n){void 0===n&&(n=[]);var t=e.replace(o,"").split(a);if(1===t.length)return e;var i=[],l=t.shift();return l&&i.push(l),c(t).forEach((function(e,t){var a=e[0],o=e[1],c=e[2],l=n[a]||r.createElement(r.Fragment,null);i.push((0,r.cloneElement)(l,{key:t},o?s(o,n):l.props.children)),c&&i.push(c)})),i}function l(e){var n=e.i18nKey,t=e.values,a=e.components,o=e.fallback,c=e.defaultTrans,l=e.ns,u=(0,i.Z)(l),f=u.t,h=u.lang;return(0,r.useMemo)((function(){var e=f(n,t,{fallback:o,default:c});return a&&0!==a.length?s(e,a):e}),[n,t,a,h])}},90660:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return t(87982)}])},44406:function(e,n,t){"use strict";var r=t(57611),i=(t(67597),t(41801)),a=t(98366);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}n.Z=function(e){var n=e.url,t=e.image,o=e.imageAlt,l=e.imageHeight,u=e.imageWidth,f=e.openGraph,h=e.description,g=s(e,["url","image","imageAlt","imageHeight","imageWidth","openGraph","description"]),d=c({},f&&{openGraph:f},n&&{url:n},t&&{images:[{url:t,width:u,height:l,alt:o}]}),p=c({},g,h&&{description:(0,a.aS)(h,150)});return(0,r.jsx)(i.PB,c({},p,{openGraph:d}))}},5331:function(e,n,t){"use strict";var r=t(57611),i=t(18299),a=t.n(i);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:a().container,children:n})}},87982:function(e,n,t){"use strict";t.r(n);var r=t(57611),i=t(67385),a=t(61395),o=t(26913),c=t.n(o),s=t(139),l=t.n(s),u=t(44406),f=t(5331),h=t(22367),g=t(60178),d=t(76005),p=t(76332),m=t(9515),b="/about-us";n.default=function(){var e=(0,a.Z)("about"),n=e.t,t=e.lang;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{title:n("common:about"),url:(0,m.Z2)(t,b),languageAlternates:(0,p.qc)(b)}),(0,r.jsx)(f.Z,{children:(0,r.jsxs)("div",{className:l().contentPage,children:[(0,r.jsx)("h1",{children:n("common:about")}),(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{i18nKey:"about:main-description",components:[(0,r.jsx)(h.Z,{href:"https://tarteel.ai",isNewTab:!0,onClick:function(){(0,g.Io)("about_us_page")}},0)]})}),(0,r.jsx)("p",{className:l().heading,children:n("credits.title")}),(0,r.jsx)("p",{children:n("credits.desc")}),(0,r.jsxs)("ul",{className:l().list,children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{i18nKey:"about:credits.tanzil",components:[(0,r.jsx)("a",{target:"_blank",href:"https://tanzil.net/",rel:"noreferrer"},0)]})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{i18nKey:"about:credits.quran-complex",components:[(0,r.jsx)("a",{target:"_blank",href:"https://qurancomplex.gov.sa/",rel:"noreferrer"},0)]})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{i18nKey:"about:credits.quran-align",components:[(0,r.jsx)("a",{target:"_blank",href:"https://github.com/cpfair/quran-align",rel:"noreferrer"},0)]})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{i18nKey:"about:credits.quran-enc",components:[(0,r.jsx)("a",{target:"_blank",href:"https://quranenc.com/en/home",rel:"noreferrer"},0)]})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{i18nKey:"about:credits.zekr",components:[(0,r.jsx)("a",{target:"_blank",href:"https://zekr.org",rel:"noreferrer"},0)]})}),(0,r.jsxs)("li",{children:[(0,r.jsx)(i.Z,{i18nKey:"about:credits.lokalize",components:[(0,r.jsx)("a",{target:"_blank",href:"https://lokalise.com/",rel:"noreferrer"},0)]}),(0,r.jsx)("div",{className:l().image,children:(0,r.jsx)(c(),{src:"/images/lokalize.png",layout:"fixed",width:300,height:70,placeholder:"blur",blurDataURL:(0,d.y)(300,70),alt:"Lokalise"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(i.Z,{i18nKey:"about:credits.vercel",components:[(0,r.jsx)("a",{target:"_blank",href:"https://vercel.com/?utm_source=quran-pro&utm_campaign=oss",rel:"noreferrer"},0)]}),(0,r.jsx)(h.Z,{href:"https://vercel.com/?utm_source=quran-pro&utm_campaign=oss",isNewTab:!0,children:(0,r.jsx)("div",{className:l().image,children:(0,r.jsx)(c(),{src:"/images/powered-by-vercel.svg",layout:"fixed",width:150,height:70,placeholder:"blur",blurDataURL:(0,d.y)(300,70),alt:"Vercel"})})})]})]})]})})]})}},76005:function(e,n,t){"use strict";t.d(n,{y:function(){return c}});var r="#f7f7f7",i="#d1d1d1",a=function(e){return window.btoa(e)},o=function(e,n,t,r){return'\n  <svg width="'.concat(e,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n      <linearGradient id="g">\n        <stop stop-color="').concat(t,'" offset="20%" />\n        <stop stop-color="').concat(r,'" offset="50%" />\n        <stop stop-color="').concat(t,'" offset="70%" />\n      </linearGradient>\n    </defs>\n    <rect width="').concat(e,'" height="').concat(n,'" fill="').concat(t,'" />\n    <rect id="r" width="').concat(e,'" height="').concat(n,'" fill="url(#g)" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1.2s" repeatCount="indefinite"  />\n  </svg>')},c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i;return"data:image/svg+xml;base64,".concat(a(o(n,e,t,c)))}},98366:function(e,n,t){"use strict";t.d(n,{Nl:function(){return a},aS:function(){return r},ox:function(){return i}});var r=function(e,n){for(var t=e.split("",n),r="",i=0;i<t.length;i+=1){var a=t[i];if(r.length===n-1){r="".concat(r).concat(a,"...");break}r="".concat(r).concat(a)}return r},i=function(e){return e.replace(/(<([^>]+)>)/gi,"")},a=function(e){if(!e)return"";var n=e.split("-");return 1===n.length?n[0]:n[n.length-1]}},18299:function(e){e.exports={container:"PageContainer_container__1TUET",fullWidth:"PageContainer_fullWidth__RU5GM"}},139:function(e){e.exports={contentPage:"contentPage_contentPage__GtoGM",heading:"contentPage_heading__COCGv",image:"contentPage_image__Vgw2Y",list:"contentPage_list__yuDCq",underline:"contentPage_underline__1hrK7",subListItem:"contentPage_subListItem__jozHS"}}},function(e){e.O(0,[6913,9774,2888,179],(function(){return n=90660,e(e.s=n);var n}));var n=e.O();_N_E=n}]);