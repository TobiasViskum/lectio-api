"use strict";(()=>{var e={};e.id=550,e.ids=[550],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},3981:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>_,requestAsyncStorage:()=>g,routeModule:()=>h,serverHooks:()=>P,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var s=r(4412),o=r(8776),n=r(9242),u=r(8380),c=r(9503),i=r(3776),l=r(7722);let d=l.ZP.object({week:l.ZP.string(),year:l.ZP.string(),teacherId:l.ZP.string()}).merge(i.I);async function GET(e){let t=(0,u.K)(e);try{let e=d.parse(t),r=await (0,c.MP)(e);if("Not authenticated"===r)return(0,n.W1)();if("No data"===r)return(0,n.bZ)(r);if(null===r)return(0,n.le)();return(0,n.Nk)(r)}catch{return(0,n.fZ)()}}let p=s.AppRouteRouteModule,h=new p({definition:{kind:o.x.APP_ROUTE,page:"/get-schedule/teacher/route",pathname:"/get-schedule/teacher",filename:"route",bundlePath:"app/get-schedule/teacher/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-schedule/teacher/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:m,serverHooks:P,headerHooks:f,staticGenerationBailout:v}=h,_="/get-schedule/teacher/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(7722);let s=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,698,503],()=>__webpack_exec__(3981));module.exports=r})();