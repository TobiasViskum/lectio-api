"use strict";(()=>{var e={};e.id=776,e.ids=[776],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},162:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>P,requestAsyncStorage:()=>h,routeModule:()=>g,serverHooks:()=>m,staticGenerationAsyncStorage:()=>b,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var i=r(4412),n=r(8776),s=r(9242),o=r(8380),u=r(9503),c=r(3776),l=r(7722);let p=l.ZP.object({initials:l.ZP.string()}).merge(c.I);async function GET(e){let t=(0,o.K)(e);try{let e=p.parse(t),r=await (0,u.BY)(e);if("Not authenticated"===r)return(0,s.W1)();if("No data"===r)return(0,s.bZ)(r);if(null===r)return(0,s.le)();return(0,s.Nk)(r)}catch{return(0,s.fZ)()}}let d=i.AppRouteRouteModule,g=new d({definition:{kind:n.x.APP_ROUTE,page:"/get-teacher/by-initials/route",pathname:"/get-teacher/by-initials",filename:"route",bundlePath:"app/get-teacher/by-initials/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-teacher/by-initials/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:b,serverHooks:m,headerHooks:f,staticGenerationBailout:v}=g,P="/get-teacher/by-initials/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>i});var a=r(7722);let i=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,698,503],()=>__webpack_exec__(162));module.exports=r})();