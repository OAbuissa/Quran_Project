"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5643],{15643:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(57611),i=n(85503),u=n.n(i),a=n(67597),o=n(9134),c=n.n(o),s=n(19418),l=n(61395),f=n(15129),d=n(648),h=n(22367),v=n(88901),m=n.n(v),p=n(42098),b=n(11086),y=n(24354),x=n(63026),g=n(97595),j=n(16129),w=n(54111),S=n(38521);function N(e,t,n,r,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,i)}var k=["ayatul-kursi","\u0622\u06cc\u062a \u0627\u0644\u06a9\u0631\u0633\u06cc"],I=function(e){var t=(0,f.useRouter)().query,n=t.chapterId,r=t.juzId,i=t.pageId,u=t.hizbId,o=t.rubId,c=(0,a.useState)([]),s=c[0],l=c[1],d=(0,a.useContext)(S.Z);return(0,a.useEffect)((function(){var t;(t=m().mark((function t(){var a,c,s;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=20;break}if(a=n,!(0,g.hP)(a)){t.next=6;break}l([(0,y.XK)(a)]),t.next=18;break;case 6:if(!(0,g.CG)(d,a)){t.next=10;break}l([(0,j.Tc)(a).toString()]),t.next=18;break;case 10:if(!k.includes(a.toLowerCase())){t.next=14;break}l(["2"]),t.next=18;break;case 14:return t.next=16,(0,w.U0)(a,e);case 16:(c=t.sent)&&l([c.toString()]);case 18:t.next=49;break;case 20:if(!i){t.next=27;break}return t.next=23,(0,p.op)((0,y.XK)(i));case 23:s=t.sent,l(s),t.next=49;break;case 27:if(!r){t.next=35;break}return t.t0=l,t.next=31,(0,p.it)((0,y.XK)(r));case 31:t.t1=t.sent,(0,t.t0)(t.t1),t.next=49;break;case 35:if(!u){t.next=43;break}return t.t2=l,t.next=39,(0,b.Ub)((0,y.XK)(u));case 39:t.t3=t.sent,(0,t.t2)(t.t3),t.next=49;break;case 43:if(!o){t.next=49;break}return t.t4=l,t.next=47,(0,x.hL)((0,y.XK)(o));case 47:t.t5=t.sent,(0,t.t4)(t.t5);case 49:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var u=t.apply(e,n);function a(e){N(u,r,i,a,o,"next",e)}function o(e){N(u,r,i,a,o,"throw",e)}a(void 0)}))})()}),[i,r,u,o,e,n,d]),s},O=n(91094),C=n(57535),P=n(7304),Z=n(53683),A=n(60178),E=n(76332),L=n(9515),z=n(30145);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,u=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(c){o=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(){var e=(0,l.Z)("common"),t=e.t,n=e.lang,i=(0,d.v9)(C.eQ),o=(0,d.v9)(P.kW),v=(0,f.useRouter)(),m=(0,a.useContext)(S.Z),p=I(n),b=p&&p.length>0?p[0]:null,y=(0,a.useState)(b),x=y[0],g=y[1];(0,a.useEffect)((function(){g(i.chapterId)}),[i]),(0,a.useEffect)((function(){g(b)}),[b]);var j=(0,a.useState)(""),w=j[0],N=j[1],k=(0,a.useMemo)((function(){return o?Object.entries(m).map((function(e){var t=M(e,2),r=t[0];return Q({},t[1],{id:r,localizedId:(0,E.rQ)(Number(z.Z.indexOf(Number(r))+1),n)})})).sort((function(e,t){return z.Z.indexOf(Number(e.id))-z.Z.indexOf(Number(t.id))})):Object.entries(m).map((function(e){var t=M(e,2),r=t[0];return Q({},t[1],{id:r,localizedId:(0,E.rQ)(Number(r),n)})}))}),[o,m,n]),K=w?function(e,t){var n=new s.Z(e,{threshold:.3,keys:["id","localizedId","transliteratedName"]}).search(t).map((function(e){return e.item}));return n.length?(0,A.tL)(t,Z.Z.SidebarNavigationChaptersList):(0,A.Dy)(t,Z.Z.SidebarNavigationChaptersList),n}(k,w):k,R=M((0,O.Oz)(O.lT),2),T=R[0],U=R[1];(0,a.useEffect)((function(){T()}),[x,T]);return(0,r.jsxs)("div",{className:u().surahListContainer,children:[(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=K[0];t&&v.push((0,L.qm)(t.id))},children:(0,r.jsx)("input",{className:u().searchInput,value:w,onChange:function(e){return N(e.target.value)},placeholder:t("sidebar.search-surah")})}),(0,r.jsx)("div",{className:u().listContainer,children:(0,r.jsx)("div",{className:u().list,children:K.map((function(e){return(0,r.jsx)(h.Z,{href:(0,L.qm)(e.id),shouldPrefetch:!1,children:(0,r.jsxs)("div",{ref:e.id.toString()===x?U:null,className:c()(u().listItem,D({},u().selectedItem,e.id.toString()===x)),children:[(0,r.jsx)("span",{className:u().chapterNumber,children:e.localizedId}),(0,r.jsx)("span",{children:e.transliteratedName})]})},e.id)}))})})]})};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,u=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(c){o=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=a.memo((function(e){var t,n,i,o=e.verseKey,s=(0,l.Z)().lang,f=(0,d.v9)((0,C.jM)(o)),v=(0,j.tR)(o),m=(0,E.rQ)(v,s),p=U((0,O.Oz)(O.lT),2),b=p[0],y=p[1];return(0,a.useEffect)((function(){f&&b()}),[b,f]),(0,r.jsx)(h.Z,{href:(0,L.P6)(o),isShallow:!0,shouldPrefetch:!1,children:(0,r.jsx)("div",{ref:y,className:c()(u().listItem,(t={},n=u().selectedItem,i=f,n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t)),children:m})},o)})),q=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],i=(0,l.Z)("common"),o=i.t,c=i.lang,s=(0,d.v9)(C.eQ),h=(0,f.useRouter)(),v=(0,a.useContext)(S.Z),m=I(c),p=m&&m.length>0?m[0]:null,b=(0,a.useState)(p),y=b[0],x=b[1];(0,a.useEffect)((function(){x(s.chapterId)}),[s]),(0,a.useEffect)((function(){n(""),x(p)}),[p]);var g=(0,a.useMemo)((function(){return y?(0,j.qB)(v,y):[]}),[v,y]).filter((function(e){var n=(0,j.tR)(e);return(0,E.rQ)(n,c).toString().startsWith(t)||n.toString().startsWith(t)}));(0,a.useEffect)((function(){g.length?(0,A.tL)(t,Z.Z.SidebarNavigationVersesList):(0,A.Dy)(t,Z.Z.SidebarNavigationVersesList)}),[t,g]);return(0,r.jsxs)("div",{className:u().verseListContainer,children:[(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=g[0];t&&h.push((0,L.P6)(t),void 0,{shallow:!0})},children:(0,r.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)},className:u().searchInput,placeholder:o("verse")})}),(0,r.jsx)("div",{className:u().listContainer,children:(0,r.jsx)("div",{className:u().list,children:g.map((function(e){return(0,r.jsx)(X,{verseKey:e},e)}))})})]})},_=function(){return(0,r.jsxs)("div",{className:u().surahBodyContainer,children:[(0,r.jsx)(R,{}),(0,r.jsx)(q,{})]})}},11086:function(e,t,n){n.d(t,{Ub:function(){return c},dn:function(){return a},pN:function(){return o}});var r=n(88901),i=n.n(r);n(76332);function u(e,t,n,r,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,i)}var a=function(e){return 1===e},o=function(e){return 60===e},c=function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){n.e(2488).then(n.t.bind(n,72488,19)).then((function(n){e(n.default[t])}))})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){u(a,r,i,o,c,"next",e)}function c(e){u(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()},63026:function(e,t,n){n.d(t,{Al:function(){return a},hL:function(){return c},wD:function(){return o}});var r=n(88901),i=n.n(r);n(76332);function u(e,t,n,r,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,i)}var a=function(e){return 1===e},o=function(e){return 240===e},c=function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){n.e(8858).then(n.t.bind(n,8858,19)).then((function(n){e(n.default[t])}))})));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){u(a,r,i,o,c,"next",e)}function c(e){u(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()}}]);