"use strict";(()=>{var e={};e.id=154,e.ids=[154],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9491:e=>{e.exports=require("assert")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},8849:e=>{e.exports=require("node:http")},2286:e=>{e.exports=require("node:https")},1041:e=>{e.exports=require("node:url")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},5477:e=>{e.exports=require("punycode")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},5034:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},1715:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>q,originalPathname:()=>v,requestAsyncStorage:()=>h,routeModule:()=>l,serverHooks:()=>g,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>m});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var s=r(4412),o=r(8776),i=r(9242),u=r(8380),n=r(6967);async function getIsAuthenticated({username:e,password:t,schoolCode:r}){let a=await (0,n.w)({username:e,password:t,schoolCode:r,page:"front"});return"Not authenticated"===a?{isAuthenticated:!1}:"No data"===a||"Invalid school"===a||null===a?a:{isAuthenticated:!0}}var p=r(3776);let c=p.I;async function GET(e){let t=(0,u.K)(e);try{let e=c.parse(t),r=await getIsAuthenticated(e);if(null===r)return(0,i.le)();if("Invalid school"===r)return(0,i.Dy)();if("No data"!==r)return(0,i.Nk)(r);(0,i.bZ)()}catch{return(0,i.fZ)()}}let d=s.AppRouteRouteModule,l=new d({definition:{kind:o.x.APP_ROUTE,page:"/get-is-authenticated/route",pathname:"/get-is-authenticated",filename:"route",bundlePath:"app/get-is-authenticated/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-is-authenticated/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:x,serverHooks:g,headerHooks:q,staticGenerationBailout:m}=l,v="/get-is-authenticated/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(7722);let s=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[212,722,616],()=>__webpack_exec__(1715));module.exports=r})();