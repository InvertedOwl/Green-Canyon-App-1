"use strict";(self["webpackChunkGC_App2"]=self["webpackChunkGC_App2"]||[]).push([[74],{4074:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,o,s,p=10*-u,v=0;const f=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{p=(0,n.u)(e),k(e)},L=e=>{p=(0,n.u)(e),C(e)},w=e=>{if(2===e.button)return;const t=(0,n.u)(e)-u;p<t&&k(e)},E=e=>{const t=(0,n.u)(e)-u;p<t&&C(e)},b=()=>{s&&clearTimeout(s),s=void 0,t&&(y(!1),t=void 0)},k=e=>{t||T(i(e),e)},C=e=>{T(void 0,e)},T=(e,o)=>{if(e&&e===t)return;s&&clearTimeout(s),s=void 0;const{x:i,y:r}=(0,n.p)(o);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(c)||g(t,i,r),y(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e)),e.classList.remove(c);const o=()=>{g(e,i,r),s=void 0};a(e)?o():s=setTimeout(o,d)}t=e},g=(e,t,n)=>{if(v=Date.now(),e.classList.add(c),!f)return;const s=r(e);null!==s&&(R(),o=s.addRipple(t,n))},R=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},y=e=>{R();const o=t;if(!o)return;const n=l-Date.now()+v;if(e&&n>0&&!a(o)){const e=setTimeout((()=>{o.classList.remove(c),h.delete(o)}),l);h.set(o,e)}else o.classList.remove(c)},G=document;G.addEventListener("ionGestureCaptured",b),G.addEventListener("touchstart",m,!0),G.addEventListener("touchcancel",L,!0),G.addEventListener("touchend",L,!0),G.addEventListener("pointercancel",b,!0),G.addEventListener("mousedown",w,!0),G.addEventListener("mouseup",E,!0)},i=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=74-legacy.9694b97b.js.map