import{r as p}from"./index.DhYZZe0J.js";var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=p,c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,u){var e,o={},s=null,f=null;u!==void 0&&(s=""+u),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)m.call(r,e)&&!y.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:c,type:t,key:s,ref:f,props:o,_owner:x.current}}n.Fragment=a;n.jsx=i;n.jsxs=i;_.exports=n;var d=_.exports;function E(){const[t,r]=p.useState(0);return d.jsxs("button",{onClick:()=>r(t+1),children:["Count: ",t]})}export{E as default};
