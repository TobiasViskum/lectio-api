"use strict";(()=>{var e={};e.id=917,e.ids=[917],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8018:e=>{e.exports=require("puppeteer")},4089:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>h,originalPathname:()=>v,requestAsyncStorage:()=>g,routeModule:()=>p,serverHooks:()=>w,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>_});var a={};r.r(a),r.d(a,{GET:()=>GET}),r(9836);var n=r(4412),s=r(8776),i=r(9242),o=r(8380),l=r(3231);async function getStudentByCredentials({username:e,password:t,schoolCode:r}){let a=await (0,l.w)({username:e,password:t,schoolCode:r,targetPage:`https://www.lectio.dk/lectio/${r}/DokumentOversigt.aspx?folderid=S53701992282__`});if("Error"===a)return null;if("Not authenticated"===a)return a;try{let e=await a.$eval("img#s_m_HeaderContent_picctrlthumbimage",e=>[e.src,"&fullsize=1"].join("")||""),t=await a.$eval("div#s_m_HeaderContent_MainTitle > span.ls-hidden-smallscreen",e=>{let t="",r="",a=e.innerHTML,n=a.match(/Eleven ([a-z0-9 ]+), /i),s=a.match(/Eleven [a-z0-9 ]+, ([a-z0-9-]+) /i);return n&&(t=n[1]),s&&(r=s[1]),{name:t,studentClass:r}});await a.goto(e);let r="",n=await a.$("img");return n&&(r=await n.screenshot({encoding:"base64"})),await a.browser().close(),{name:t.name,studentClass:t.studentClass,img:r}}catch(e){return console.log(e),await a.browser().close(),null}}var u=r(3776);let c=u.I;async function GET(e){let t=(0,o.K)(e);try{let e=c.parse(t),r=await getStudentByCredentials(e);if("Not authenticated"===r)return(0,i.W1)();if(null===r)return(0,i.le)();return(0,i.Nk)(r)}catch{return(0,i.fZ)()}}let d=n.AppRouteRouteModule,p=new d({definition:{kind:s.x.APP_ROUTE,page:"/get-student/by-credentials/route",pathname:"/get-student/by-credentials",filename:"route",bundlePath:"app/get-student/by-credentials/route"},resolvedPagePath:"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-student/by-credentials/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:m,serverHooks:w,headerHooks:h,staticGenerationBailout:_}=p,v="/get-student/by-credentials/route"},8380:(e,t,r)=>{r.d(t,{K:()=>getSearchParamsObject});function getSearchParamsObject(e){let t=new URLSearchParams(e.nextUrl.search),r={};for(let[e,a]of t)r[e]=a;return r}},3776:(e,t,r)=>{r.d(t,{I:()=>n});var a=r(7722);let n=a.z.object({username:a.z.string(),password:a.z.string(),schoolCode:a.z.string()})}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[765,722,933],()=>__webpack_exec__(4089));module.exports=r})();