import{bB as v}from"./index-zn_PrNsw.js";class N{constructor(i,t){this.id=i,this.mbs=t,this.renderMbs=v(0,0,0,-1),this.elevationRangeMin=NaN,this.elevationRangeMax=NaN}invalidateElevationRange(){this.elevationRangeMin=NaN}}var d,a,s,h,c;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(d||(d={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(a||(a={}));class U extends N{constructor(i,t,n,o,r,l,u,m,f,C){super(i,n),this.index=t,this.childCount=o,this.level=r,this.resources=l,this.version=u,this.lodMetric=m,this.maxError=f,this.numFeatures=C,this.failed=!1,this.cacheState=s.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=a.NotChecked}}(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(s||(s={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(h||(h={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(c||(c={}));class k{constructor(i,t,n,o){this.nodeHasLOD=i,this.isChosen=t,this.lodLevel=n,this.version=o}}export{h as a,k as d,U as h,N as i,a as n,s as o,c as s,d as t};