(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3619],{29412:function(e,n,r){"use strict";var t=r(57611),i=r(67597),a=r(62103),o=r(19121),c=r(9454),l=r(54111),u=function(e){var n=e.queryKey,r=e.render,i=e.initialData,u=e.loading,s=void 0===u?function(){return(0,t.jsx)(c.Z,{})}:u,d=e.fetcher,f=void 0===d?l._i:d,m=(0,a.Z)(n,(function(){return f(n).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}),{fallbackData:i}),p=m.data,_=m.error,b=m.isValidating,v=m.mutate;if(b)return s();return _?(0,t.jsx)(o.Z,{onRetryClicked:function(){v()},error:_}):r(p)};n.Z=(0,i.memo)(u)},19121:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t,i=r(57611),a=r(67597),o=r(61395),c=r(43563),l=r.n(c),u=r(85754);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}var d=function(e){return a.createElement("svg",s({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t||(t=a.createElement("path",{d:"M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65 2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85 3.437.85.85 4.185.85 7.5c0 3.315 2.587 6.65 6.65 6.65 1.944 0 3.562-.77 4.714-1.942a6.77 6.77 0 0 0 1.428-2.167.5.5 0 1 0-.925-.38 5.77 5.77 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643-3.44 0-5.65-2.815-5.65-5.65Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})))},f=r(54111),m=function(e){var n=e.onRetryClicked,r=e.error,t=(0,o.Z)("common").t;return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsx)("p",{className:l().text,children:r.message!==f.yH?t("error.general"):t("error.offline")}),(0,i.jsx)(u.ZP,{prefix:(0,i.jsx)(d,{}),size:u.qE.Small,type:u.L$.Secondary,onClick:n,children:t("retry")})]})}},23619:function(e,n,r){"use strict";r.r(n),r.d(n,{filterReciters:function(){return O}});var t=r(57611),i=r(67597),a=r(21594),o=r(19418),c=r(61395),l=r(15129),u=r(57449),s=r.n(u),d=r(29412),f=r(81432),m=r(68484),p=r(75785),_=r(96612),b=r(42366),v=r(53683),h=r(52266),y=r(60178),x=r(91660),g=r(3669),j=r(96467),O=function(e,n){var r=new o.Z(e,{keys:["name","languageName","translatedName.name","qirat.name","style.name"],threshold:.3}).search(n).map((function(e){return e.item}));return r.length||(0,y.Dy)(n,v.Z.TranslationSettingsDrawer),r};n.default=function(){var e=(0,c.Z)("common"),n=e.lang,r=e.t,o=(0,_.Z)(),u=o.isLoading,v=o.actions.onXstateSettingsChange,C=(0,l.useRouter)(),I=(0,i.useState)(""),w=I[0],S=I[1],N=(0,i.useContext)(x.c),Z=(0,a.v)(N,(function(e){return e.context.reciterId}));return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:s().searchInputContainer,children:(0,t.jsx)(p.Z,{isLoading:u,children:(0,t.jsx)(f.ZP,{prefix:(0,t.jsx)(b.Z,{}),id:"translations-search",value:w,onChange:S,placeholder:r("settings.search-reciter"),fixedWidth:!1,containerClassName:s().input})})}),(0,t.jsx)(d.Z,{queryKey:(0,h.jL)(n),render:function(e){var n=w?O(e.reciters,w):e.reciters;return(0,t.jsx)(m.Z.Root,{label:"reciter",orientation:m.E.Vertical,value:Z.toString(),onChange:function(n){return function(e,n){if(e){var r=n.find((function(n){return n.id===Number(e)}));(0,y.u8)("selected_reciter",r.id),C.query[j.Z.Reciter]=String(r.id),C.push(C,void 0,{shallow:!0});var t=Z;v("reciter",r.id,(function(){return N.send({type:"CHANGE_RECITER",reciterId:Number(e)})}),(function(){return N.send({type:"CHANGE_RECITER",reciterId:t})}),g.Z.AUDIO)}}(n,e.reciters)},children:n.sort((function(e,n){return e.name+e.id>n.name+n.id?1:-1})).map((function(e){var n=e.id.toString();return(0,t.jsxs)("div",{className:s().reciter,children:[(0,t.jsx)(m.Z.Item,{value:n,id:n}),(0,t.jsxs)("label",{htmlFor:n,className:s().reciterLabel,children:[e.translatedName.name,"Murattal"!==e.style.name&&(0,t.jsx)("span",{className:s().recitationStyle,children:e.style.name})]})]},n)}))})}})]})}},81432:function(e,n,r){"use strict";r.d(n,{Jf:function(){return a},fz:function(){return t}});var t,i,a,o=r(57611),c=r(67597),l=r(9134),u=r.n(l),s=r(85754),d=r(36743),f=r.n(d),m=r(43172);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function _(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}!function(e){e.Small="small",e.Medium="medium",e.Large="large"}(t||(t={})),function(e){e.Error="error",e.Warning="warning",e.Success="success"}(i||(i={})),function(e){e.Default="default",e.Main="main"}(a||(a={}));n.ZP=function(e){var n=e.id,r=e.name,l=e.label,d=e.placeholder,b=e.size,v=void 0===b?t.Medium:b,h=e.fixedWidth,y=void 0===h||h,x=e.disabled,g=void 0!==x&&x,j=e.clearable,O=void 0!==j&&j,C=e.type,I=e.variant,w=e.prefix,S=e.suffix,N=e.onClearClicked,Z=e.onChange,E=e.value,R=void 0===E?"":E,P=e.shouldFlipOnRTL,k=void 0===P||P,q=e.containerClassName,L=e.htmlType,W=e.isRequired,D=e.inputRef,B=(0,c.useState)(R),T=B[0],F=B[1];(0,c.useEffect)((function(){F(R)}),[R]);var V,z;return(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)("p",{className:f().label,children:l}),(0,o.jsxs)("div",{className:u()(f().container,q,(V={},p(V,f().smallContainer,v===t.Small),p(V,f().mediumContainer,v===t.Medium),p(V,f().largeContainer,v===t.Large),p(V,f().fixedWidth,y),p(V,f().disabled,g),p(V,f().error,C===i.Error),p(V,f().success,C===i.Success),p(V,f().warning,C===i.Warning),p(V,f().main,I===a.Main),V)),children:[w&&(0,o.jsx)("div",{className:u()(f().prefix,f().prefixSuffixContainer),children:w}),(0,o.jsx)("input",_({className:u()(f().input,(z={},p(z,f().error,C===i.Error),p(z,f().success,C===i.Success),p(z,f().warning,C===i.Warning),p(z,f().rtlInput,k),z)),type:L,required:W,dir:"auto",id:n,ref:D,disabled:g,onChange:function(e){var n=e.target.value;F(n),Z&&Z(n)},value:T},d&&{placeholder:d},r&&{name:r})),O?(0,o.jsx)(o.Fragment,{children:T&&(0,o.jsx)("div",{className:f().clearContainer,children:(0,o.jsx)(s.ZP,{shape:s.jL.Circle,variant:s.Wu.Ghost,size:s.qE.Small,onClick:N,children:(0,o.jsx)(m.Z,{})})})}):(0,o.jsx)(o.Fragment,{children:S&&(0,o.jsx)("div",{className:u()(f().suffix,f().prefixSuffixContainer),children:S})})]})]})}},68484:function(e,n,r){"use strict";r.d(n,{E:function(){return p.j},Z:function(){return h}});var t=r(57611),i=(r(67597),r(9134)),a=r.n(i),o=r(90359),c=r(27335),l=r.n(c);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=function(e){var n=e.className,r=e.indicatorClassName,i=s(e,["className","indicatorClassName"]);return(0,t.jsx)(o.ck,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({className:a()(l().radioItem,n)},i,{children:(0,t.jsx)(o.z$,{className:a()(l().indicator,r)})}))},f=r(28861),m=r.n(f),p=r(73818);function _(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var v=function(e){var n=e.items,r=e.disabled,i=void 0!==r&&r,o=b(e,["items","disabled"]);return(0,t.jsx)(p.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){_(e,n,r[n])}))}return e}({},o,{children:n.map((function(e){var n=!0===i||!0===e.disabled;return(0,t.jsxs)("div",{className:m().radioItemContainer,children:[(0,t.jsx)(d,{value:e.value,id:e.id,disabled:n,required:e.required||!1}),(0,t.jsx)("label",{htmlFor:e.id,className:a()(m().label,_({},m().disabled,n)),children:e.label})]},e.id)}))}))};v.Root=p.Z,v.Item=d;var h=v},73818:function(e,n,r){"use strict";r.d(n,{j:function(){return t}});var t,i=r(57611),a=(r(67597),r(90359)),o=r(9134),c=r.n(o),l=r(58910),u=r.n(l),s=r(59641);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}!function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(t||(t={}));n.Z=function(e){var n=e.className,r=e.label,o=e.orientation,l=void 0===o?t.Vertical:o,f=e.onChange,m=e.defaultValue,p=e.value,_=e.name,b=e.required,v=e.children,h=(0,s.Z)();return(0,i.jsx)(a.fC,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}({className:c()(u().container,n),dir:h,"aria-label":r,orientation:l},f&&{onValueChange:f},m&&{defaultValue:m},p&&{value:p},_&&{name:_},b&&{required:b},{children:v}))}},96467:function(e,n){"use strict";var r;!function(e){e.Translations="translations",e.Reciter="reciter",e.WBW_LOCALE="wbw_locale"}(r||(r={})),n.Z=r},43563:function(e){e.exports={container:"Error_container__1m9XV",text:"Error_text__yg4kD"}},57449:function(e){e.exports={reciter:"ReciterSelectionBody_reciter__UiTm4",reciterLabel:"ReciterSelectionBody_reciterLabel__IjlJw",recitationStyle:"ReciterSelectionBody_recitationStyle__vWjKD",searchInputContainer:"ReciterSelectionBody_searchInputContainer__YIeoq",input:"ReciterSelectionBody_input___SxR_"}},36743:function(e){e.exports={container:"Input_container__5BNOH",fixedWidth:"Input_fixedWidth__MZoNx",disabled:"Input_disabled__AFA4l",error:"Input_error__cfc8q",success:"Input_success__qb_Ue",warning:"Input_warning__KwRSJ",main:"Input_main__K4bVL",input:"Input_input__za7E9",rtlInput:"Input_rtlInput__8Yg1Q",smallContainer:"Input_smallContainer__bxyYT",mediumContainer:"Input_mediumContainer__jEOpT",largeContainer:"Input_largeContainer__yafZ8",label:"Input_label__loZWW",clearContainer:"Input_clearContainer__3LxT4",prefixSuffixContainer:"Input_prefixSuffixContainer__n84F6",prefix:"Input_prefix__jYhnp",suffix:"Input_suffix__v_BvR"}},27335:function(e){e.exports={indicator:"Item_indicator__x6BoJ",radioItem:"Item_radioItem__DEP6h"}},28861:function(e){e.exports={radioItemContainer:"RadioGroup_radioItemContainer__Zpb6v",label:"RadioGroup_label__h0v1C",disabled:"RadioGroup_disabled__aU243"}},58910:function(e){e.exports={container:"Root_container__FbYRt"}}}]);