"use strict";(()=>{var e={};e.id=369,e.ids=[369],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},957:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>P,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>_,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var s=r(4412),o=r(8776),n=r(9242),u=r(8380),i=r(7185),c=r(3776),p=r(7722);let l=p.ZP.object({type:p.ZP.enum(["all","newest","unread","deleted","personal"])}).merge(c.I);async function GET(e){let t=(0,u.K)(e);try{let e=l.parse(t),r=await (0,i._U)(e);if("Not authenticated"===r)return(0,n.W1)();if("No data"===r)return(0,n.bZ)();if(null===r)return(0,n.le)();return(0,n.Nk)(r)}catch{return(0,n.fZ)()}}let d=s.AppRouteRouteModule,g=new d({definition:{kind:o.x.APP_ROUTE,page:"/get-messages/route",pathname:"/get-messages",filename:"route",bundlePath:"app/get-messages/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-messages/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:h,serverHooks:_,headerHooks:f,staticGenerationBailout:v}=g,P="/get-messages/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(7722);let s=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,933,185],()=>__webpack_exec__(957));module.exports=r})();