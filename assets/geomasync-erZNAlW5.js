import{a5 as fn,L as W,eE as d,b6 as j,b4 as R,b3 as O,j as x,b5 as B,eF as H,B as K,h$ as ln,br as on}from"./index-boln7qu7.js";import{Z as o,n as h,Q as V,K as Q,X,d as k,a as s,r as u,q as A,b as F,i as L,H as J,A as w,a9 as G,aa as q,ab as z,c as b,B as dn,ac as wn,ad as hn,E as Y,N as M,y as C,ae as mn,af as T}from"./arcadeUtils-RohHxdoV.js";import{c as P,r as D,a as y}from"./TimeOnly-VzLXeNOU.js";import{l as _}from"./portalUtils-2ktQ1F6S.js";import{A as yn,h as pn,S as gn,m as vn,x as Pn,p as In,O as An,g as Fn,R as bn,D as Nn,b as Rn,E as xn,k as Sn,y as On,w as jn,W as $,K as nn,F as Z,M as E,d as Dn,C as en,U as rn,B as Ln,L as Jn,P as Mn,v as Cn,H as tn,N as an,J as Tn,j as Zn,T as Un,V as kn}from"./geometryEngineAsync-y-A8iaq-.js";import"./number-tvhN4ARF.js";import"./hash-SS5GKVPY.js";async function sn(t,e,r){var a,i;if(!((a=fn)==null?void 0:a.findCredential(t.restUrl)))return null;if(t.loadStatus==="loaded"&&e===""&&((i=t.user)!=null&&i.sourceJSON)&&r===!1)return t.user.sourceJSON;const l={responseType:"json",query:{f:"json"}};if(r&&(l.query.returnUserLicenseTypeExtensions=!0),e===""){const f=await W(t.restUrl+"/community/self",l);if(f.data){const m=f.data;if(m!=null&&m.username)return m}return null}const n=await W(t.restUrl+"/community/users/"+e,l);if(n.data){const f=n.data;return f.error?null:f}return null}function un(t){return ln.indexOf("4.")===0?x.fromExtent(t):new x({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function I(t,e,r){if(h(t,2,2,e,r),!(t[0]instanceof d&&t[1]instanceof d)){if(!(t[0]instanceof d&&t[1]===null)){if(!(t[1]instanceof d&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new s(e,u.InvalidParameter,r)}}}}async function cn(t,e){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return 0;let r=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(r=mn(t.spatialReference)/on(t.spatialReference));let c=0;if(t.type==="polyline")for(const n of t.paths)for(let a=1;a<n.length;a++)c+=T(n[a],n[a-1],r);else if(t.type==="polygon")for(const n of t.rings){for(let a=1;a<n.length;a++)c+=T(n[a],n[a-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=T(n[0],n[n.length-1],r))}else t.type==="extent"&&(c+=2*T([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],r),c+=2*T([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],r),c*=2,c+=4*Math.abs(w(t.zmax,0)*r-w(t.zmin,0)*r));const l=new R({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,c]]});return Z(l,e)}function Vn(t){t.mode==="async"&&(t.functions.disjoint=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]===null||n[1]===null||yn(n[0],n[1])))},t.functions.intersects=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&pn(n[0],n[1])))},t.functions.touches=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&gn(n[0],n[1])))},t.functions.crosses=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},t.functions.within=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},t.functions.contains=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},t.functions.overlaps=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},t.functions.equals=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(h(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?Fn(n[0],n[1]):(V(n[0])&&V(n[1])||!!(Q(n[0])&&Q(n[1])||X(n[0])&&X(n[1])))&&n[0].equals(n[1]))))},t.functions.relate=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return bn(n[0],n[1],k(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new s(e,u.InvalidParameter,r)})},t.functions.intersection=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]===null||n[1]===null?null:Nn(n[0],n[1])))},t.functions.union=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{const a=[];if((n=o(n)).length===0)throw new s(e,u.WrongNumberOfParameters,r);if(n.length===1)if(A(n[0])){const i=o(n[0]);for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new s(e,u.InvalidParameter,r);a.push(i[f])}}else{if(!F(n[0])){if(n[0]instanceof d)return L(P(n[0]),e.spatialReference);if(n[0]===null)return null;throw new s(e,u.InvalidParameter,r)}{const i=o(n[0].toArray());for(let f=0;f<i.length;f++)if(i[f]!==null){if(!(i[f]instanceof d))throw new s(e,u.InvalidParameter,r);a.push(i[f])}}}else for(let i=0;i<n.length;i++)if(n[i]!==null){if(!(n[i]instanceof d))throw new s(e,u.InvalidParameter,r);a.push(n[i])}return a.length===0?null:Rn(a)})},t.functions.difference=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:xn(n[0],n[1])))},t.functions.symmetricdifference=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>(I(n=o(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):Sn(n[0],n[1])))},t.functions.clip=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof j)&&n[1]!==null)throw new s(e,u.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[1]===null?null:On(n[0],n[1])})},t.functions.cut=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[1]instanceof R)&&n[1]!==null)throw new s(e,u.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[1]===null?[P(n[0])]:jn(n[0],n[1])})},t.functions.area=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumArea(D(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=G(n[0],e.spatialReference);return a===null?0:$(a,D(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return $(n[0],D(w(n[1],-1)))})},t.functions.areageodetic=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumArea(D(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=G(n[0],e.spatialReference);return a===null?0:nn(a,D(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return nn(n[0],D(w(n[1],-1)))})},t.functions.length=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumLength(y(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=q(n[0],e.spatialReference);return a===null?0:Z(a,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return Z(n[0],y(w(n[1],-1)))})},t.functions.length3d=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const a=q(n[0],e.spatialReference);return a===null?0:a.hasZ===!0?cn(a,y(w(n[1],-1))):Z(a,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return n[0].hasZ===!0?cn(n[0],y(w(n[1],-1))):Z(n[0],y(w(n[1],-1)))})},t.functions.lengthgeodetic=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(h(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(J(n[0])){const a=await n[0].sumLength(y(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,u.Cancelled,r);return a}if(A(n[0])||F(n[0])){const a=q(n[0],e.spatialReference);return a===null?0:E(a,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return E(n[0],y(w(n[1],-1)))})},t.functions.distance=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);let a=n[0];(A(n[0])||F(n[0]))&&(a=z(n[0],e.spatialReference));let i=n[1];if((A(n[1])||F(n[1]))&&(i=z(n[1],e.spatialReference)),!(a instanceof d))throw new s(e,u.InvalidParameter,r);if(!(i instanceof d))throw new s(e,u.InvalidParameter,r);return Dn(a,i,y(w(n[2],-1)))})},t.functions.distancegeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);const a=n[0],i=n[1];if(!(a instanceof O))throw new s(e,u.InvalidParameter,r);if(!(i instanceof O))throw new s(e,u.InvalidParameter,r);const f=new R({paths:[],spatialReference:a.spatialReference});return f.addPath([a,i]),E(f,y(w(n[2],-1)))})},t.functions.densify=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);if(a<=0)throw new s(e,u.InvalidParameter,r);return n[0]instanceof x||n[0]instanceof R?en(n[0],a,y(w(n[2],-1))):n[0]instanceof j?en(un(n[0]),a,y(w(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);if(a<=0)throw new s(e,u.InvalidParameter,r);return n[0]instanceof x||n[0]instanceof R?rn(n[0],a,y(w(n[2],-1))):n[0]instanceof j?rn(un(n[0]),a,y(w(n[2],-1))):n[0]})},t.functions.generalize=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);return Ln(n[0],a,dn(w(n[2],!0)),y(w(n[3],-1)))})},t.functions.buffer=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);return a===0?P(n[0]):Jn(n[0],a,y(w(n[2],-1)))})},t.functions.buffergeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);return a===0?P(n[0]):Mn(n[0],a,y(w(n[2],-1)))})},t.functions.offset=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof x||n[0]instanceof R))throw new s(e,u.InvalidParameter,r);const a=b(n[1]);if(isNaN(a))throw new s(e,u.InvalidParameter,r);const i=b(w(n[4],10));if(isNaN(i))throw new s(e,u.InvalidParameter,r);const f=b(w(n[5],0));if(isNaN(f))throw new s(e,u.InvalidParameter,r);return Cn(n[0],a,y(w(n[2],-1)),k(w(n[3],"round")).toLowerCase(),i,f)})},t.functions.rotate=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),h(n,2,3,e,r);let a=n[0];if(a===null)return null;if(!(a instanceof d))throw new s(e,u.InvalidParameter,r);a instanceof j&&(a=x.fromExtent(a));const i=b(n[1]);if(isNaN(i))throw new s(e,u.InvalidParameter,r);const f=w(n[2],null);if(f===null)return tn(a,i);if(f instanceof O)return tn(a,i,f);throw new s(e,u.InvalidParameter,r)})},t.functions.centroid=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;let a=n[0];if((A(n[0])||F(n[0]))&&(a=z(n[0],e.spatialReference)),a===null)return null;if(!(a instanceof d))throw new s(e,u.InvalidParameter,r);return a instanceof O?L(P(n[0]),e.spatialReference):a instanceof x?a.centroid:a instanceof R?wn(a):a instanceof B?hn(a):a instanceof j?a.center:null})},t.functions.multiparttosinglepart=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{n=o(n),h(n,1,1,e,r);const a=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);if(n[0]instanceof O)return[L(P(n[0]),e.spatialReference)];if(n[0]instanceof j)return[L(P(n[0]),e.spatialReference)];const i=await an(n[0]);if(i instanceof x){const f=[],m=[];for(let p=0;p<i.rings.length;p++)if(i.isClockwise(i.rings[p])){const g=H({rings:[i.rings[p]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(g)}else m.push({ring:i.rings[p],pt:i.getPoint(p,0)});for(let p=0;p<m.length;p++)for(let g=0;g<f.length;g++)if(f[g].contains(m[p].pt)){f[g].addRing(m[p].ring);break}return f}if(i instanceof R){const f=[];for(let m=0;m<i.paths.length;m++){const p=H({paths:[i.paths[m]],hasZ:i.hasZ===!0,hazM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});f.push(p)}return f}if(n[0]instanceof B){const f=L(P(n[0]),e.spatialReference);for(let m=0;m<f.points.length;m++)a.push(f.getPoint(m));return a}return null})},t.functions.issimple=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return Tn(n[0])})},t.functions.simplify=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return an(n[0])})},t.functions.convexhull=function(e,r){return t.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),h(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,u.InvalidParameter,r);return Zn(n[0])})},t.functions.getuser=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{var m,p;h(n,0,2,e,r);let a=w(n[1],""),i=a===!0;if(a=a===!0||a===!1?"":k(a),n.length===0||n[0]instanceof Y){let g=null;g=(m=e.services)!=null&&m.portal?e.services.portal:K.getDefault(),n.length>0&&(g=_(n[0],g));const S=await sn(g,a,i);if(S){const N=JSON.parse(JSON.stringify(S));for(const v of["lastLogin","created","modified"])N[v]!==void 0&&N[v]!==null&&(N[v]=new Date(N[v]));return M.convertObjectToArcadeDictionary(N,C(e))}return null}let f=null;if(J(n[0])&&(f=n[0]),f){if(i=!1,a)return null;await f.load();const g=await f.getOwningSystemUrl();if(!g){if(!a){const v=await f.getIdentityUser();return v?M.convertObjectToArcadeDictionary({username:v},C(e)):null}return null}let S=null;S=(p=e.services)!=null&&p.portal?e.services.portal:K.getDefault(),S=_(new Y(g),S);const N=await sn(S,a,i);if(N){const v=JSON.parse(JSON.stringify(N));for(const U of["lastLogin","created","modified"])v[U]!==void 0&&v[U]!==null&&(v[U]=new Date(v[U]));return M.convertObjectToArcadeDictionary(v,C(e))}return null}throw new s(e,u.InvalidParameter,r)})}),t.functions.nearestcoordinate=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,u.InvalidParameter,r);if(!(n[1]instanceof O||n[1]===null))throw new s(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const a=await Un(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(e),!1,!0)})},t.functions.nearestvertex=function(e,r){return t.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,u.InvalidParameter,r);if(!(n[1]instanceof O||n[1]===null))throw new s(e,u.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const a=await kn(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(e),!1,!0)})}}export{Vn as registerFunctions};