"use strict";(()=>{var e={};e.id=595,e.ids=[595],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},6671:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>x,originalPathname:()=>h,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>_,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>b});var s={};r.r(s),r.d(s,{GET:()=>GET}),r(9836);var o=r(4412),a=r(8776),n=r(9242),i=r(8380),u=r(6075),p=r(3776),l=r(7722);let c=l.ZP.object({href:l.ZP.string()}).merge(p.I);async function GET(e){let t=(0,i.K)(e);try{let e=c.parse(t),r=await (0,u.bi)(e);if(null===r)return(0,n.le)();return(0,n.Nk)(r)}catch{return(0,n.fZ)()}}let d=o.AppRouteRouteModule,g=new d({definition:{kind:a.x.APP_ROUTE,page:"/get-lesson/route",pathname:"/get-lesson",filename:"route",bundlePath:"app/get-lesson/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-lesson/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:m,staticGenerationAsyncStorage:v,serverHooks:_,headerHooks:x,staticGenerationBailout:b}=g,h="/get-lesson/route"},3776:(e,t,r)=>{r.d(t,{I:()=>o});var s=r(7722);let o=s.z.object({username:s.z.string(),password:s.z.string(),schoolCode:s.z.string()})}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,610],()=>__webpack_exec__(6671));module.exports=r})();