import{e as i,y as o,c1 as a,c as p}from"./index-zn_PrNsw.js";import{N as m}from"./DynamicLayerView3D-mEi9egqz.js";import{m as n}from"./ExportImageParameters-lvyvurVp.js";import{G as l}from"./MapServiceLayerViewHelper-9tJ0Mr1F.js";import{r as h}from"./drapedUtils-G3XKHG3z.js";import"./LayerView3D-wvlle9OY.js";import"./projectExtentUtils-1nM2a04p.js";import"./ImageMaterial.glsl-jZW-dDWK.js";import"./LayerView-o-9M3t23.js";import"./RefreshableLayerView-w98wbw7-.js";import"./floorFilterUtils-zOdaZIyV.js";import"./sublayerUtils-1Np4JrsF.js";import"./popupUtils-K_O1QLm4.js";const u=t=>{let e=class extends t{initialize(){this.exportImageParameters=new n({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var r;return((r=this.view)==null?void 0:r.floors)??null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}};return i([o()],e.prototype,"exportImageParameters",void 0),i([o({readOnly:!0})],e.prototype,"floors",null),i([o({readOnly:!0})],e.prototype,"exportImageVersion",null),i([o()],e.prototype,"layer",void 0),i([o()],e.prototype,"suspended",void 0),i([o(a)],e.prototype,"timeExtent",void 0),e=i([p("esri.views.layers.MapImageLayerView")],e),e};let s=class extends u(m){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new l({createFetchPopupFeaturesQueryGeometry:(t,e)=>h(t,e,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};s=i([p("esri.views.3d.layers.MapImageLayerView3D")],s);const E=s;export{E as default};