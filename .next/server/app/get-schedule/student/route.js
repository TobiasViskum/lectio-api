"use strict";(()=>{var e={};e.id=556,e.ids=[556],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},5279:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>_,requestAsyncStorage:()=>h,routeModule:()=>g,serverHooks:()=>P,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var s=r(4412),n=r(8776),o=r(9242),u=r(8380),i=r(7185),c=r(3776),d=r(7722);let l=d.ZP.object({week:d.ZP.string(),year:d.ZP.string()}).merge(c.I);async function GET(e){let t=(0,u.K)(e);try{let e=l.parse(t),r=await (0,i.MP)(e);if("Not authenticated"===r)return(0,o.W1)();if("No data"===r)return(0,o.bZ)();if(null===r)return(0,o.le)();return(0,o.Nk)(r)}catch{return(0,o.fZ)()}}let p=s.AppRouteRouteModule,g=new p({definition:{kind:n.x.APP_ROUTE,page:"/get-schedule/student/route",pathname:"/get-schedule/student",filename:"route",bundlePath:"app/get-schedule/student/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-schedule/student/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:m,serverHooks:P,headerHooks:f,staticGenerationBailout:v}=g,_="/get-schedule/student/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(7722);let s=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,933,185],()=>__webpack_exec__(5279));module.exports=r})();