import{dA as I,k as A,cD as c,dB as v,dC as D,dD as y,dE as S,dF as M,dG as h}from"./index-37OKbUsN.js";import{u as g,c as b,i as w,f as z}from"./PointCloudWorkerUtil-s6mqXxLq.js";import"./PointCloudUniqueValueRenderer-OQ2ZWacI.js";import"./I3SBinaryReader-rqygaYJR.js";class O{transform(t){const a=this._transform(t),e=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&e.push(a.pointIdFilterMap.buffer);for(const r of a.attributes)"buffer"in r.values&&I(r.values.buffer)&&r.values.buffer!==a.rgb.buffer&&e.push(r.values.buffer);return Promise.resolve({result:a,transferList:e})}_transform(t){const a=g(t.schema,t.geometryBuffer);let e=a.length/3,r=null;const s=new Array,i=b(t.primaryAttributeData,a,e);t.primaryAttributeData!=null&&i&&s.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:i});const o=b(t.modulationAttributeData,a,e);t.modulationAttributeData!=null&&o&&s.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:o});let f=w(t.rendererInfo,i,o,e);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const n=t.filterAttributesData.filter(A).map(l=>{const d=b(l,a,e),p={attributeInfo:l.attributeInfo,values:d};return s.push(p),p});r=new Uint32Array(e),e=z(a,f,r,t.filterInfo,n)}for(const n of t.userAttributesData){const l=b(n,a,e);s.push({attributeInfo:n.attributeInfo,values:l})}3*e<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*e))),this._applyElevationOffsetInPlace(a,e,t.elevationOffset);const u=this._transformCoordinates(a,e,t.obb,c.fromJSON(t.inSR),c.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:f,attributes:s,pointIdFilterMap:r}}_transformCoordinates(t,a,e,r,s){if(!v(t,r,0,t,s,0,a))throw new Error("Can't reproject");const i=D(e.center[0],e.center[1],e.center[2]),o=h(),f=h();y(m,e.quaternion);const u=new Float32Array(3*a);for(let n=0;n<a;n++)o[0]=t[3*n]-i[0],o[1]=t[3*n+1]-i[1],o[2]=t[3*n+2]-i[2],S(f,o,m),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(f[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(f[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(f[2])),u[3*n]=o[0],u[3*n+1]=o[1],u[3*n+2]=o[2];return u}_applyElevationOffsetInPlace(t,a,e){if(e!==0)for(let r=0;r<a;r++)t[3*r+2]+=e}}const m=M();function $(){return new O}export{$ as default};