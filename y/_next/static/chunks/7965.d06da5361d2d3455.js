(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7965],{68414:function(t,n,r){"use strict";var e,i=r(67597);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},o.apply(this,arguments)}n.Z=function(t){return i.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e||(e=i.createElement("path",{d:"M5 20h4.571V4H5v16Zm9.143-16v16h4.571V4h-4.571Z",fill:"currentColor"})))}},71714:function(t,n,r){"use strict";var e,i=r(67597);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},o.apply(this,arguments)}n.Z=function(t){return i.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e||(e=i.createElement("path",{d:"M4 2v20.364l16-10.182L4 2Z",fill:"currentColor"})))}},17965:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var e=r(57611),i=r(67597),o=r(21594),a=r(61395),u=r(9454),c=r(68580),l=r(38353),s=r(52690),d=r.n(s),f=r(35090),v=r(22367),h=r(60178),p=r(75830);function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function _(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,i,o=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(o.push(e.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(t){var n=t.radioActor,r=_((0,f.L)(n),1)[0],i=(0,p.Z)(r.context),o=(0,a.Z)("radio").t;return(0,e.jsxs)("div",{className:d().stationInfo,children:[(0,e.jsx)("span",{className:d().stationTitle,children:i.title})," ",(0,e.jsxs)(v.Z,{onClick:function(){(0,h.MY)("homepage_change_radio")},href:"/radio",className:d().editStationButton,children:["(",o("change"),")"]})]})},x=r(85754),g=r(68414),I=r(71714),b=r(96941),j=r(91660),w=function(){var t=(0,a.Z)("radio").t,n=(0,i.useContext)(j.c),r=(0,o.v)(n,(function(t){return t.matches("VISIBLE.AUDIO_PLAYER_INITIATED.PLAYING")})),s=(0,o.v)(n,(function(t){return!!t.context.radioActor})),f=(0,o.v)(n,b.xU),v=n.getSnapshot().context.radioActor;return(0,e.jsx)("div",{className:d().container,children:(0,e.jsxs)("div",{className:d().playRadioSection,children:[r&&s?(0,e.jsx)(x.ZP,{prefix:f?(0,e.jsx)(u.Z,{}):(0,e.jsx)(g.Z,{}),onClick:function(){n.send("TOGGLE")},className:d().playPauseButton,children:t("pause-radio")}):(0,e.jsx)(x.ZP,{prefix:(0,e.jsx)(I.Z,{}),className:d().playPauseButton,onClick:function(){if(s)n.send("TOGGLE");else{var t=(0,c.u)();(0,h.Kz)("play_radio_clicked",{stationId:t,type:l.T.Curated}),n.send({type:"PLAY_RADIO",stationId:Number(t),stationType:l.T.Curated})}},shouldFlipOnRTL:!1,children:t("play-radio")}),v&&(0,e.jsx)(m,{radioActor:v})]})})}},75830:function(t,n,r){"use strict";var e=r(61395),i=r(62103),o=r(68580),a=r(38353),u=r(52266),c=r(54111);n.Z=function(t){var n=(0,e.Z)("radio"),r=n.t,l=n.lang,s=t,d=(0,i.Z)(s.type===a.T.Reciter?(0,u.Sn)(s.id,l):null,(function(){return(0,c.zm)(s.id,l)})).data;return s.type===a.T.Curated?function(){var t=o.Z[s.id];return{title:r("curated-station.".concat(t.title)),description:r("curated-station.".concat(t.description))}}():function(){var t,n,r=null===d||void 0===d?void 0:d.reciter;return{title:null===r||void 0===r||null===(t=r.translatedName)||void 0===t?void 0:t.name,description:null===r||void 0===r||null===(n=r.style)||void 0===n?void 0:n.name}}()}},96941:function(t,n,r){"use strict";r.d(n,{BP:function(){return a},XL:function(){return l},eU:function(){return s},iX:function(){return o},sI:function(){return c},xU:function(){return u}});var e=r(40670),i=r(16129),o=function(t){return t.context.reciterId===e.YS.id},a=function(t){var n;return null===(n=t.context.audioData)||void 0===n?void 0:n.reciterId},u=function(t){return t.hasTag("loading")},c=function(t,n){var r=function(t){return t.matches("VISIBLE.AUDIO_PLAYER_INITIATED.PLAYING")}(t),e=t.context.surah;return r&&e===n},l=function(t,n){var r=u(t),e=t.context.surah;return r&&e===n},s=function(t,n){var r=t.context,e=r.surah,o=r.ayahNumber;return u(t)&&(0,i.u)(e,o)===n}},52690:function(t){t.exports={reflectionCta:"PlayRadioButton_reflectionCta__gtf6M",container:"PlayRadioButton_container___GD_P",playRadioSection:"PlayRadioButton_playRadioSection__0qUwH",stationTitle:"PlayRadioButton_stationTitle__QI0ui",editStationButton:"PlayRadioButton_editStationButton__Esi_Y",playPauseButton:"PlayRadioButton_playPauseButton__sHEjM"}}}]);