import{e as r,y as i,c as o,n as s}from"./index-3T8NnAdH.js";import{_ as m}from"./FeatureLayerViewBase3D-zIG0tPqJ.js";import"./HeatmapDensity.glsl-PQYkyDLe.js";import"./dehydratedFeatureComparison-TL8HUJB8.js";import"./queryForSymbologySnapping-5Rdc2L2o.js";import"./elevationInfoUtils-WwYDl0RG.js";import"./hash-SS5GKVPY.js";import"./Graphics3DObjectStates-HsNjVCdK.js";import"./optimizedFeatureQueryEngineAdapter-tByZWg6M.js";import"./PooledRBush-yvWXTK5L.js";import"./quickselect-X97ywmUd.js";import"./popupUtils-yFlrYs8w.js";import"./floorFilterUtils-zOdaZIyV.js";import"./QueryEngine-QXCYjOy3.js";import"./WhereClause-rvxfqIBA.js";import"./TimeOnly-9DDBccWC.js";import"./json-v6EOeNTY.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-qIGSl3HI.js";import"./utils-6esXKgtb.js";import"./generateRendererUtils-OiKFgbvL.js";import"./FeatureStore-gS43Cdgh.js";import"./BoundsStore-DSYVvWPu.js";import"./projectExtentUtils-q079KP9N.js";import"./LayerView3D-oCVojPzq.js";import"./query-V4m9SKOV.js";import"./pbfQueryUtils-Nxn0EGYJ.js";import"./pbf-Io4d7WfJ.js";import"./EventedSet-z8mxXDQ8.js";import"./LayerView-Z1CfWGJB.js";import"./RefreshableLayerView-7b4Yeyyw.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const B=t;export{B as default};