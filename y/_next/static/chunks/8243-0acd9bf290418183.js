"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8243,6455],{68458:function(e,n,t){t.d(n,{Eh:function(){return Y},VY:function(){return W},fC:function(){return z},h_:function(){return B},xz:function(){return K}});var r=t(57384),o=t(67597),a=t(48081),u=t(18209),l=t(367),s=t(57161),c=t(35336),i=t(97548),d=t(32848),f=t(91663),p=t(84523),v=t(92763),m=t(44756),h=t(58225),g=t(73598),E=t(78440),C=t(43329);const P="Popover",[w,_]=(0,l.b)(P,[f.D7]),b=(0,f.D7)(),[O,R]=w(P),x=e=>{const{__scopePopover:n,children:t,open:r,defaultOpen:a,onOpenChange:u,modal:l=!1}=e,s=b(n),c=(0,o.useRef)(null),[i,p]=(0,o.useState)(!1),[v=!1,m]=(0,g.T)({prop:r,defaultProp:a,onChange:u});return(0,o.createElement)(f.fC,s,(0,o.createElement)(O,{scope:n,contentId:(0,d.M)(),triggerRef:c,open:v,onOpenChange:m,onOpenToggle:(0,o.useCallback)((()=>m((e=>!e))),[m]),hasCustomAnchor:i,onCustomAnchorAdd:(0,o.useCallback)((()=>p(!0)),[]),onCustomAnchorRemove:(0,o.useCallback)((()=>p(!1)),[]),modal:l},t))},y="PopoverTrigger",F=(0,o.forwardRef)(((e,n)=>{const{__scopePopover:t,...l}=e,s=R(y,t),c=b(t),i=(0,u.e)(n,s.triggerRef),d=(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":S(s.open)},l,{ref:i,onClick:(0,a.M)(e.onClick,s.onOpenToggle)}));return s.hasCustomAnchor?d:(0,o.createElement)(f.ee,(0,r.Z)({asChild:!0},c),d)})),Z="PopoverPortal",[D,A]=w(Z,{forceMount:void 0}),k=e=>{const{__scopePopover:n,forceMount:t,children:r,container:a}=e,u=R(Z,n);return(0,o.createElement)(D,{scope:n,forceMount:t},(0,o.createElement)(v.z,{present:t||u.open},(0,o.createElement)(p.h,{asChild:!0,container:a},r)))},M="PopoverContent",I=(0,o.forwardRef)(((e,n)=>{const t=A(M,e.__scopePopover),{forceMount:a=t.forceMount,...u}=e,l=R(M,e.__scopePopover);return(0,o.createElement)(v.z,{present:a||l.open},l.modal?(0,o.createElement)(N,(0,r.Z)({},u,{ref:n})):(0,o.createElement)(V,(0,r.Z)({},u,{ref:n})))})),N=(0,o.forwardRef)(((e,n)=>{const t=R(M,e.__scopePopover),l=(0,o.useRef)(null),s=(0,u.e)(n,l),c=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{const e=l.current;if(e)return(0,E.R)(e)}),[]),(0,o.createElement)(C.Z,{as:h.g7,allowPinchZoom:!0},(0,o.createElement)(T,(0,r.Z)({},e,{ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,(e=>{var n;e.preventDefault(),c.current||null===(n=t.triggerRef.current)||void 0===n||n.focus()})),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,(e=>{const n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;c.current=r}),{checkForDefaultPrevented:!1}),onFocusOutside:(0,a.M)(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1})})))})),V=(0,o.forwardRef)(((e,n)=>{const t=R(M,e.__scopePopover),a=(0,o.useRef)(!1);return(0,o.createElement)(T,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var r,o;(null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,n),n.defaultPrevented)||(a.current||null===(o=t.triggerRef.current)||void 0===o||o.focus(),n.preventDefault());a.current=!1},onInteractOutside:n=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,n),n.defaultPrevented||(a.current=!0);const u=n.target;(null===(o=t.triggerRef.current)||void 0===o?void 0:o.contains(u))&&n.preventDefault()}}))})),T=(0,o.forwardRef)(((e,n)=>{const{__scopePopover:t,trapFocus:a,onOpenAutoFocus:u,onCloseAutoFocus:l,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:v,onFocusOutside:m,onInteractOutside:h,...g}=e,E=R(M,t),C=b(t);return(0,c.EW)(),(0,o.createElement)(i.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:u,onUnmountAutoFocus:l},(0,o.createElement)(s.XB,{asChild:!0,disableOutsidePointerEvents:d,onInteractOutside:h,onEscapeKeyDown:p,onPointerDownOutside:v,onFocusOutside:m,onDismiss:()=>E.onOpenChange(!1)},(0,o.createElement)(f.VY,(0,r.Z)({"data-state":S(E.open),role:"dialog",id:E.contentId},C,g,{ref:n,style:{...g.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)"}}))))})),$=(0,o.forwardRef)(((e,n)=>{const{__scopePopover:t,...a}=e,u=b(t);return(0,o.createElement)(f.Eh,(0,r.Z)({},u,a,{ref:n}))}));function S(e){return e?"open":"closed"}const z=x,K=F,B=k,W=I,Y=$},78091:function(e,n,t){t.d(n,{z$:function(){return F},fC:function(){return y}});var r=t(57384),o=t(67597),a=t(367),u=(t(72934),t(18209));const l=(0,o.forwardRef)(((e,n)=>{const{children:t,...a}=e,u=o.Children.toArray(t),l=u.find(i);if(l){const e=l.props.children,t=u.map((n=>n===l?o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null:n));return(0,o.createElement)(s,(0,r.Z)({},a,{ref:n}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,t):null)}return(0,o.createElement)(s,(0,r.Z)({},a,{ref:n}),t)}));l.displayName="Slot";const s=(0,o.forwardRef)(((e,n)=>{const{children:t,...r}=e;return(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{...d(r,t.props),ref:(0,u.F)(n,t.ref)}):o.Children.count(t)>1?o.Children.only(null):null}));s.displayName="SlotClone";const c=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function i(e){return(0,o.isValidElement)(e)&&e.type===c}function d(e,n){const t={...n};for(const r in n){const o=e[r],a=n[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...e)=>{a(...e),o(...e)}:o&&(t[r]=o):"style"===r?t[r]={...o,...a}:"className"===r&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...e,...t}}const f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((e,n)=>{const t=(0,o.forwardRef)(((e,t)=>{const{asChild:a,...u}=e,s=a?l:n;return(0,o.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,o.createElement)(s,(0,r.Z)({},u,{ref:t}))}));return t.displayName=`Primitive.${n}`,{...e,[n]:t}}),{});const p="Progress",v=100,[m,h]=(0,a.b)(p),[g,E]=m(p),C=(0,o.forwardRef)(((e,n)=>{const{__scopeProgress:t,value:a,max:u,getValueLabel:l=_,...s}=e,c=R(u)?u:v,i=x(a,c)?a:null,d=O(i)?l(i,c):void 0;return(0,o.createElement)(g,{scope:t,value:i,max:c},(0,o.createElement)(f.div,(0,r.Z)({"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":O(i)?i:void 0,"aria-valuetext":d,role:"progressbar","data-state":b(i,c),"data-value":null!==i&&void 0!==i?i:void 0,"data-max":c},s,{ref:n})))}));C.propTypes={max(e,n,t){const r=e[n],o=String(r);return r&&!R(r)?new Error(function(e,n){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`}(o,t)):null},value(e,n,t){const r=e[n],o=String(r),a=R(e.max)?e.max:v;return null==r||x(r,a)?null:new Error(function(e,n){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${n}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`}(o,t))}};const P="ProgressIndicator",w=(0,o.forwardRef)(((e,n)=>{var t;const{__scopeProgress:a,...u}=e,l=E(P,a);return(0,o.createElement)(f.div,(0,r.Z)({"data-state":b(l.value,l.max),"data-value":null!==(t=l.value)&&void 0!==t?t:void 0,"data-max":l.max},u,{ref:n}))}));function _(e,n){return`${Math.round(e/n*100)}%`}function b(e,n){return null==e?"indeterminate":e===n?"complete":"loading"}function O(e){return"number"===typeof e}function R(e){return O(e)&&!isNaN(e)&&e>0}function x(e,n){return O(e)&&!isNaN(e)&&e<=n&&e>=0}const y=C,F=w},67385:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67597),o=t(61395),a=/<(\w+)>(.*?)<\/\1>|<(\w+)\/>/,u=/(?:\r\n|\r|\n)/g;function l(e){if(!e.length)return[];var n=e.slice(0,4),t=n[0],r=n[1],o=n[2];return[[t||o,r||"",n[3]]].concat(l(e.slice(4,e.length)))}function s(e,n){void 0===n&&(n=[]);var t=e.replace(u,"").split(a);if(1===t.length)return e;var o=[],c=t.shift();return c&&o.push(c),l(t).forEach((function(e,t){var a=e[0],u=e[1],l=e[2],c=n[a]||r.createElement(r.Fragment,null);o.push((0,r.cloneElement)(c,{key:t},u?s(u,n):c.props.children)),l&&o.push(l)})),o}function c(e){var n=e.i18nKey,t=e.values,a=e.components,u=e.fallback,l=e.defaultTrans,c=e.ns,i=(0,o.Z)(c),d=i.t,f=i.lang;return(0,r.useMemo)((function(){var e=d(n,t,{fallback:u,default:l});return a&&0!==a.length?s(e,a):e}),[n,t,a,f])}}}]);