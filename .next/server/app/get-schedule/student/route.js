"use strict";(()=>{var e={};e.id=556,e.ids=[556],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},8805:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>v,originalPathname:()=>b,requestAsyncStorage:()=>h,routeModule:()=>g,serverHooks:()=>P,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>_});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(5655);var s=r(3323),n=r(4647),o=r(2509),u=r(9664),i=r(3734),c=r(9577),d=r(5952);let l=d.ZP.object({week:d.ZP.string(),year:d.ZP.string()}).merge(c.I);async function GET(e){let t=(0,u.K)(e);try{let e=l.parse(t),r=await (0,i.MP)(e);if("No data"===r)return(0,o.bZ)(r);if(null===r)return(0,o.le)();return(0,o.Nk)(r)}catch{return(0,o.fZ)()}}let p=s.AppRouteRouteModule,g=new p({definition:{kind:n.x.APP_ROUTE,page:"/get-schedule/student/route",pathname:"/get-schedule/student",filename:"route",bundlePath:"app/get-schedule/student/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-schedule/student/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:m,serverHooks:P,headerHooks:v,staticGenerationBailout:_}=g,b="/get-schedule/student/route"},9664:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},9577:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(5952);let s=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[303,952,933],()=>__webpack_exec__(8805));module.exports=r})();