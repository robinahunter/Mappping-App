import{aR as m,eq as n,b6 as p}from"./index-boln7qu7.js";import{d as i}from"./queryTopFeatures-oM67ZiwJ.js";import"./query-4zWAB3qb.js";import"./pbfQueryUtils-WrEAGdcz.js";import"./pbf-2MCZpeQ7.js";async function d(o,a,r){const e=m(o),t=await i(e,n.from(a),{...r});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{d as executeForTopExtents};