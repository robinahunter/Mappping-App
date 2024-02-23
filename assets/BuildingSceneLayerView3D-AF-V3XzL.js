import{bo as Q,s as A,bp as P,e as n,y as a,c as _,fK as O,fJ as G,kM as B,g as L,P as F,aX as y,aA as m,cw as E,a2 as b,cx as N,n as v,au as x,cL as U,cM as W,Y as V,b$ as k,Z as S,av as $,ap as H,l3 as T,eB as j,aU as z,c7 as D,a3 as X}from"./index-KGxt2Bab.js";import"./BuildingGroupSublayer-9DJmPGIQ.js";import{x as Y}from"./WhereClause-bMoP1YJE.js";import"./BuildingComponentSublayer-M8Esx6Jt.js";import{E as J,c as K,a as Z}from"./I3SMeshView3D-SRQx-7ZF.js";import{L as I,d as ee,l as te,o as re}from"./I3SQueryFeatureStore-VgmCA2bs.js";import{e as ie,u as se,m as le}from"./I3SUtil-iSArGWtW.js";import{t as ne}from"./DefinitionExpressionSceneLayerView-lse_Iz7Q.js";import{u as ae,n as oe,p as M}from"./popupUtils-GPiFHK8X.js";import{n as ue}from"./LayerView3D-TVMfFCF_.js";import{u as de}from"./LayerView-v-vwrmrf.js";import"./TimeOnly-xUrEqmfV.js";import"./capabilities-yfO3Q9SI.js";import"./I3SIndexInfo-xAn6mHjT.js";import"./I3SLayerDefinitions-TZVFpFjF.js";import"./I3SOverrides-Ckra-0xi.js";import"./I3SNode-s42fIvVx.js";import"./I3SBinaryReader-vRzDbX_E.js";import"./ReactiveSet-QUEAMZQn.js";import"./meshFeatureSet-2xo9WHbe.js";import"./External-2lPflHIi.js";import"./FeatureLayerView3D-nqRLn_03.js";import"./FeatureLayerViewBase3D-fFGZXd_V.js";import"./HeatmapDensity.glsl-LZYi-jFl.js";import"./dehydratedFeatureComparison-2EjkTxHl.js";import"./queryForSymbologySnapping-wwE10Le9.js";import"./elevationInfoUtils-ZZi1A5Au.js";import"./hash-SS5GKVPY.js";import"./Graphics3DObjectStates-1n5DHYLB.js";import"./optimizedFeatureQueryEngineAdapter--dTWAj15.js";import"./PooledRBush-X3f0oRFi.js";import"./quickselect-C4XyHxTa.js";import"./floorFilterUtils-zOdaZIyV.js";import"./QueryEngine-qtZW_sYI.js";import"./json-v6EOeNTY.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-dJ8gF4Eb.js";import"./utils-_LgW2q6w.js";import"./generateRendererUtils-sKPapiKU.js";import"./FeatureStore-HJhErQgf.js";import"./BoundsStore-pgAkNlBo.js";import"./projectExtentUtils-_DsLJ4B8.js";import"./query-ygzhHe-Q.js";import"./pbfQueryUtils-p7FAkbWu.js";import"./pbf-QEFp7Ej2.js";import"./EventedSet-SAR_JwpZ.js";import"./RefreshableLayerView-q0xp1KK9.js";import"./SceneModification-epdR6Mh-.js";import"./persistable-BvTTHBhe.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-FptJNnWz.js";import"./SceneLayerWorker-TQubD_dy.js";const R=(e,t)=>{let r=class extends Q(A(P.EventedMixin(e))){constructor(i){super(i),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){var i;return!!((i=this.sublayer)!=null&&i.visible)}set visible(i){this._overrideIfSome("visible",i)}get fullOpacity(){var s,l;const i=u=>u??1;return i((s=this.sublayer)==null?void 0:s.opacity)*i((l=this.parent)==null?void 0:l.fullOpacity)}canResume(){var i,s;return!((i=this.parent)!=null&&i.suspended)&&((s=this.view)==null?void 0:s.ready)&&this.visible||!1}isUpdating(){return!1}};return n([a()],r.prototype,"sublayer",void 0),n([a()],r.prototype,"parent",void 0),n([a({readOnly:!0})],r.prototype,"suspended",null),n([a({type:Boolean,readOnly:!0})],r.prototype,"updating",null),n([a()],r.prototype,"view",void 0),n([a()],r.prototype,"visible",null),n([a()],r.prototype,"fullOpacity",null),r=n([_("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var p;(function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"})(p||(p={}));const q=.15,pe=.5*q;function he(e){switch(e.filterMode.type){case"solid":return{mode:p.Solid};case"wire-frame":return{mode:p.WireFrame,edgeMaterial:O(e.filterMode.edges,{})};case"x-ray":return{mode:p.XRay}}}function C(e,t){if(t==null)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case p.Solid:return;case p.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case p.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=q,e.colorMixMode=G.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=ye(e.edgeMaterial))}}function ye(e){return e==null?null:(g.lastMaterial!==e&&(g.cachedMaterial=ce(e),g.lastMaterial=e),g.cachedMaterial)}function ce(e){const t=B(e.color);return t[3]*=pe,{...e,color:t}}const g={cachedMaterial:null,lastMaterial:null};class f extends L{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(t){throw new Error("Not implemented")}queryFeatures(t,r){throw new Error("Not implemented")}queryObjectIds(t,r){throw new Error("Not implemented")}queryFeatureCount(t,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(t,r){throw new Error("Not implemented")}highlight(t){throw new Error("Not implemented")}}n([a()],f.prototype,"sublayer",void 0),n([a()],f.prototype,"availableFields",null),n([a()],f.prototype,"filter",null);let o=class extends ne(J(R(f))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){var e,t;return this.sublayer.popupEnabled&&ae(this.sublayer,(t=(e=this.layerView)==null?void 0:e.view.popup)==null?void 0:t.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add(()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields],()=>this._updateRequiredFields()),this._updatingHandles.add(()=>this.sublayer.renderer,t=>this._rendererChange(t),F);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this._filter!=null?this._filter.sortedObjectIds:null,e),this._updatingHandles.add(()=>this._filter!=null?this._filter.parsedWhereClause:null,e),this._updatingHandles.add(()=>[this._filter!=null?this._filter.parsedGeometry:null,this.filter!=null?this.filter.spatialRelationship:null],()=>this._geometryFilterChange()),this._updatingHandles.add(()=>this.parsedFilterExpressions,()=>this._updateSymbologyOverride(),F),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return this.sublayer.modelName!=="Overview"&&this.layerView?this.layerView.filterExpressions.map(([e,t])=>{let r;try{r=Y.create(e,this.sublayer.fieldsIndex)}catch(l){return y.getLogger(this).error("Failed to parse filterExpression: "+l),null}if(!r.isStandardized)return y.getLogger(this).error("filterExpression is using non standard function"),null;const i=[],s=r.fieldNames;return ie(s,this.sublayer.fields,{missingFields:i}),i.length>0?(y.getLogger(this).error(`filterExpression references unknown fields: ${i.join(", ")}`),null):[r,t]}).filter(e=>e!=null):[]}get filter(){return this._filter!=null?this._filter.viewFilter:null}set filter(e){e!=null&&I.checkSupport(e)?this._filter!=null?this._filter.viewFilter=e:this._filter=new I({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),addSqlFilter:(t,r)=>this.addSqlFilter(t,r,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||this._filter!=null&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return C(r,s)}catch(l){this.logError(l)}return C(r,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return m(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce((e,[t])=>e.concat(t.fieldNames),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...E(t,i),...r]}return m(t,r)}_createLayerGraphic(e){const t=new b(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(!(t!=null&&t.clientGraphics)||t.clientGraphics.length===0)return[];const i=[],s=[],l=this.sublayer.associatedLayer!=null?await this.sublayer.associatedLayer.load():this.sublayer,u=E(this.sublayer.fieldsIndex,await oe(l,M(this.sublayer,t))),c=new Set;for(const h of t.clientGraphics)N(u,h,c)?s.push(h):i.push(h);return s.length===0?i:(this.sublayer.associatedLayer!=null&&await this.sublayer.associatedLayer.load().catch(()=>y.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes.")),this.whenGraphicAttributes(s,Array.from(c)).catch(()=>s).then(h=>i.concat(h)))}async _updateRequiredFields(){const e=m(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?M(t,e)?void 0:new v("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new v("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this._filter!=null&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new x(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(r=>{if(!(r!=null&&r.features))return r;const i=this.sublayer,s=i.layer;for(const l of r.features)l.layer=s,l.sourceLayer=i;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine==null&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=K(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new ee({layerView:this,priority:U.FEATURE_QUERY_ENGINE,spatialIndex:new te({featureAdapter:new re({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(t,r)=>this._forAllFeatures((i,s,l)=>t({id:i,index:s,meta:l}),r,Z.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:se(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():x.from(e))}};n([a()],o.prototype,"i3slayer",null),n([a()],o.prototype,"layerView",void 0),n([a()],o.prototype,"lodFactor",null),n([a({readOnly:!0})],o.prototype,"parsedFilterExpressions",null),n([a({type:W})],o.prototype,"filter",null),n([a()],o.prototype,"_filter",void 0),n([a({type:[String],readOnly:!0})],o.prototype,"filterExpressionFields",null),n([a({type:[String],readOnly:!0})],o.prototype,"requiredFields",void 0),n([a({type:[String],readOnly:!0})],o.prototype,"availableFields",null),o=n([_("esri.views.3d.layers.BuildingComponentSublayerView3D")],o);const ge=o;class w extends de{constructor(t){super(t),this.layer=null,this.sublayerViews=null}highlight(t){throw new Error("Not implemented")}}n([a()],w.prototype,"layer",void 0),n([a()],w.prototype,"sublayerViews",void 0);const fe=R(L);let d=class extends ue(w){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new V,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){var i;const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(s=>s.id===e):null,r=t!=null?(i=t.filterBlocks)==null?void 0:i.find(s=>s.filterMode.type==="solid"):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(r=>r.id===e):null;return t!=null&&t.filterBlocks?t.filterBlocks.toArray().map(r=>[r.filterExpression??"",he(r)]):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce((r,i)=>r+i.updatingProgress,0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some(e=>e.updating)}initialize(){le(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach(e=>e.destroy()),this.sublayerViews=null),this._abortController=k(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach(s=>{if(!s.isEmpty)if(s.type==="building-group"){const l=new fe({sublayer:s,view:i,parent:t});this._initializeSubLayerViews(s.sublayers,l)}else s.geometryType==="mesh"&&(this._loadingComponents++,s.load({signal:this._abortController.signal}).then(()=>{const l=new ge({sublayer:s,layerView:r,view:i,parent:t});this.sublayerViews.push(l);const u=this._pendingWhenSublayerViews.get(s);if(u){for(const c of u)c.resolve(l);this._pendingWhenSublayerViews.delete(s)}this.addHandles([S(()=>l.updating,()=>this.notifyChange("updating"),$),S(()=>l.updatingProgress,()=>this.notifyChange("updatingProgressValue"),$)])}).catch(l=>{H(l)||y.getLogger(this).error(`Error while creating view for sublayer ${s.id}
Layer: ${this.layer.url}
`,l)}).then(()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")}))})}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,t){if(!(t!=null&&t.clientGraphics)||t.clientGraphics.length===0)return[];const r=T(t.clientGraphics,s=>s.sourceLayer),i=[];for(const[s,l]of r){const u=this._findComponent(s);u!=null&&i.push(u.fetchPopupFeatures(e,{...t,clientGraphics:l}))}return(await j(i)).flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return t==null?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(t!=null)return t;const r=this._pendingWhenSublayerViews.get(e),i=z();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find(t=>e===t.sublayer)}highlight(e){e instanceof b?e=[e]:e instanceof V&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof b){const r=e,i=new Map;for(const s of r){let l=i.get(s.sourceLayer);l==null&&(l=[],i.set(s.sourceLayer,l)),l.push(s)}this.sublayerViews.forEach(s=>{const l=i.get(s.sublayer);l&&t.push(s.highlight(l))})}return D(t)}get usedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.usedMemory,0)}get unloadedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.unloadedMemory,0)}};n([a()],d.prototype,"sublayerViews",void 0),n([a({readOnly:!0})],d.prototype,"filterExpression",null),n([a({readOnly:!0})],d.prototype,"filterExpressions",null),n([a(X)],d.prototype,"updatingProgress",void 0),n([a({readOnly:!0,dependsOn:[]})],d.prototype,"updatingProgressValue",null),d=n([_("esri.views.3d.layers.BuildingSceneLayerView3D")],d);const gt=d;export{gt as default};