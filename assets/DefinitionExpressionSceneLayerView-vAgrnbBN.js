import{e as o,y as a,c as d,aX as t}from"./index-Ozl5EVlb.js";import{x as l}from"./WhereClause-Jsp2zsIM.js";import{e as f}from"./I3SUtil-i_HtE4tE.js";const x="updating";function g(s){return s==="updating"?null:s}function c(s){return s==="updating"}const y=s=>{let n=class extends s{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.getLogger(this).error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var r;if(!((r=this.i3slayer)!=null&&r.definitionExpression))return null;try{const e=l.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return t.getLogger(this).error("definitionExpression is using non standard function"),null;const i=[],p=e.fieldNames;return f(p,this.i3slayer.fields,{missingFields:i}),i.length>0?(t.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return t.getLogger(this).error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return o([a()],n.prototype,"i3slayer",void 0),o([a({readOnly:!0})],n.prototype,"parsedDefinitionExpression",null),o([a({readOnly:!0})],n.prototype,"definitionExpressionFields",null),n=o([d("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],n),n};export{g as a,x as n,y as t,c as u};