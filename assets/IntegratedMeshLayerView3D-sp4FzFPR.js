import{a1 as n,P as p,a2 as m,e as i,y as o,a3 as l,c as d}from"./index-QfIYWlOJ.js";import{E as c}from"./I3SMeshView3D-Wdd-59It.js";import{n as u}from"./LayerView3D-CQmlL39Q.js";import{u as h}from"./LayerView-lfSLt6R7.js";import"./I3SOverrides-qF9dGyjl.js";import"./I3SNode-1FdlCxNf.js";import"./I3SUtil-pfTiydvW.js";import"./I3SBinaryReader-xpNrEi8H.js";import"./ReactiveSet-FnDO0Ks6.js";import"./meshFeatureSet-WMUSBAAn.js";import"./External-Q2JVl6_V.js";import"./FeatureLayerView3D-Blp_Xxyr.js";import"./FeatureLayerViewBase3D-Y-D0VCiR.js";import"./HeatmapDensity.glsl-r4nMdzSm.js";import"./dehydratedFeatureComparison-2EMQ8qlE.js";import"./queryForSymbologySnapping-x0ZWxN98.js";import"./elevationInfoUtils-l5E8Yuaz.js";import"./hash-SS5GKVPY.js";import"./Graphics3DObjectStates-6TSIB9zc.js";import"./optimizedFeatureQueryEngineAdapter-jMqGlx3g.js";import"./PooledRBush-qDVY6Ejd.js";import"./quickselect-m8Ppu5vy.js";import"./popupUtils-tEHmXo4m.js";import"./floorFilterUtils-zOdaZIyV.js";import"./QueryEngine-yyKpr5fM.js";import"./WhereClause-gBhwOvLP.js";import"./TimeOnly-KeNqfA9T.js";import"./json-v6EOeNTY.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-3TifzrD6.js";import"./utils-NbTr234h.js";import"./generateRendererUtils-ZDlwf39X.js";import"./FeatureStore-19YUC8D4.js";import"./BoundsStore-7AuUddWX.js";import"./projectExtentUtils-qUqHa1Go.js";import"./query-Y82TM2C9.js";import"./pbfQueryUtils-4ax30Fxv.js";import"./pbf-rXaEXl2K.js";import"./EventedSet-yZ_nmPRX.js";import"./RefreshableLayerView-dCg3fgUG.js";import"./SceneModification-HqsQ--wM.js";import"./persistable-uqQo-qny.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-VAXox7nS.js";import"./SceneLayerWorker-d4b0L6R1.js";const g=.2;let r=class extends c(u(h)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,e,a,s;return((s=(a=(e=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:e.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new m;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(l)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([d("esri.views.3d.layers.SceneLayerView3D")],r);const pt=r;export{pt as default};