import{G as E,H as b,I,B as O,J as Y,K as q,L as B,M as C,N as T,z as $,O as j,P as z,Q as L,R as w,F as P,D as F,c as p,S as G,U as J,V as K,W as Q,X as U,Y as X,y as Z,a as x,q as rr,e as tr,h as S,s as er}from"./BrrLgHdD.js";import{b as ar}from"./DduFB2aB.js";const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}let A=!1;function ir(){A||(A=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function V(r){var t=I,a=O;E(null),b(null);try{return r()}finally{E(t),b(a)}}function lr(r,t,a,i=a){r.addEventListener(t,()=>V(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i(!0)}:r.__on_r=()=>i(!0),ir()}const k=new Set,N=new Set;function or(r,t,a,i={}){function n(e){if(i.capture||y.call(t,e),!e.cancelBubble)return V(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?C(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function _r(r,t,a,i,n){var e={capture:i,passive:n},u=or(r,t,a,e);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(r,u,e)})}function dr(r){for(var t=0;t<r.length;t++)k.add(r[t]);for(var a of N)a(r)}function y(r){var D;var t=this,a=t.ownerDocument,i=r.type,n=((D=r.composedPath)==null?void 0:D.call(r))||[],e=n[0]||r.target,u=0,d=r.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=n.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=n[u]||r.target,e!==t){Y(r,"currentTarget",{configurable:!0,get(){return e||a}});var m=I,f=O;E(null),b(null);try{for(var s,o=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var _=e["__"+i];if(_!=null&&(!e.disabled||r.target===e))if(q(_)){var[M,...W]=_;M.apply(e,[r,...W])}else _.call(e,r)}catch(g){s?o.push(g):s=g}if(r.cancelBubble||c===t||c===null)break;e=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=t,delete r.currentTarget,E(m),b(f)}}}function hr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function ur(r,t){return H(r,t)}function vr(r,t){T(),t.intro=t.intro??!1;const a=t.target,i=S,n=p;try{for(var e=$(a);e&&(e.nodeType!==8||e.data!==j);)e=z(e);if(!e)throw L;w(!0),P(e),F();const u=H(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==G)throw J(),L;return w(!1),u}catch(u){if(u===L)return t.recover===!1&&K(),T(),Q(a),w(!1),ur(r,t);throw u}finally{w(i),P(n)}}const v=new Map;function H(r,{target:t,anchor:a,props:i={},events:n,context:e,intro:u=!0}){T();var d=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=sr(o);t.addEventListener(o,y,{passive:c});var _=v.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),v.set(o,1)):v.set(o,_+1)}}};l(U(k)),N.add(l);var h=void 0,m=X(()=>{var f=a??t.appendChild(Z());return x(()=>{if(e){rr({});var s=tr;s.c=e}n&&(i.$$events=n),S&&ar(f,null),h=r(f,i)||{},S&&(O.nodes_end=p),e&&er()}),()=>{var c;for(var s of d){t.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}N.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(h,m),h}let R=new WeakMap;function pr(r,t){const a=R.get(r);return a?(R.delete(r),a(t)):Promise.resolve()}export{ir as a,dr as d,_r as e,vr as h,lr as l,ur as m,hr as s,pr as u};
