import{Z as h,av as w,n as r,b_ as d,u as _,b$ as c,c0 as V,_ as u,e as a,y as n,c as p}from"./index-NBh4ShcJ.js";import{n as A}from"./LayerView3D-76UhkUF7.js";import{u as v}from"./LayerView-y69BVbjY.js";const o="analysis-view-handles";let i=class extends A(v){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const y=await this._loadAnalysisModule();this._analysisModule=y,e=y}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),V(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-s0ZY-0yQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LineOfSightAnalysisView3D-s0ZY-0yQ.js","assets/index-NBh4ShcJ.js","assets/index-qdhqX69Y.css","assets/LineVisualElement-edxtM5UX.js","assets/LineOfSightAnalysisTarget-qxAhYPFN.js","assets/persistable-jBEWIXpO.js","assets/multiOriginJSONSupportUtils-R5XHSAtL.js","assets/resourceExtension-mNki7AGC.js","assets/elevationInfoUtils-hOpxlzgq.js","assets/ShadedColorMaterial.glsl-wYbrT0a3.js","assets/Laserlines.glsl-B8yZDze1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}