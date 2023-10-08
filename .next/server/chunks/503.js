"use strict";exports.id=503,exports.ids=[503],exports.modules={9503:(e,t,r)=>{r.d(t,{pl:()=>getAllSchools,we:()=>getAllTeachers,Oh:()=>getAssignments,bi:()=>getClassInformation,_U:()=>getMessages,MP:()=>getSchedule,Ku:()=>getSchool,BY:()=>getTeacherByInitials});var i=r(8018),a=r.n(i);async function getAuthenticatedPage({username:e,password:t,schoolCode:r,targetPage:i}){let l=await a().launch({headless:"new",args:["--no-sandbox"]}),n=await l.newPage();try{await n.goto(`https://www.lectio.dk/lectio/${r}/login.aspx`),await n.type("#username",e),await n.type("#password",t),await Promise.all([n.click("#m_Content_submitbtn2"),n.waitForNavigation()]);try{let e=await n.$eval("div#MainTitle",e=>e.textContent);if(console.log(e),e)return await n.browser().close(),"Not authenticated";return await n.goto(i,{waitUntil:"domcontentloaded"}),n}catch{return await n.goto(i,{waitUntil:"domcontentloaded"}),n}}catch{return await n.browser().close(),"Error"}}async function getAssignments({username:e,password:t,schoolCode:r}){let i=await getAuthenticatedPage({username:e,password:t,targetPage:`https://www.lectio.dk/lectio/${r}/OpgaverElev.aspx`,schoolCode:r});if("Error"===i)return null;if("Not authenticated"===i)return i;try{await Promise.all([i.click("#s_m_Content_Content_CurrentExerciseFilterCB"),i.waitForNavigation()]);let e=await i.$$eval("#s_m_Content_Content_ExerciseGV > tbody > tr:not(:first-child)",e=>e.map(e=>{function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}let t=e.children[1].children[0].innerHTML,r=["https://lectio.dk",e.children[2].children[0].getAttribute("href")].join("");return{href:r,week:e.children[0].children[0].innerHTML,class:t.split(" ")[0],subject:function(e){let t=e.toLowerCase().trimStart();if(t.includes("fy \xf8v"))return"Fysik\xf8velse";if(t.includes("ke \xf8v"))return"Kemi\xf8velse";if(/ mc|-mc|mc-|mc /.test(t)){let e=capitalizeFirstLetter(t.replace(/mc [0-9]+/i,"").trimStart());return`${e} (Masterclass)`}if(/ mk|-mk|mk-|mk /.test(t)){let e=capitalizeFirstLetter(t.replace(/mk [0-9]+/i,"").trimStart());return`${e} (Marselianerklub)`}return/ fy|-fy|fy-/.test(t)?"Fysik":/ ke|-ke|ke-/.test(t)?"Kemi":/ hi|-hi|hi-/.test(t)?"Historie":/ en|-en|en-/.test(t)?"Engelsk":/ da|-da|da-/.test(t)?"Dansk":/ if|-if|if-/.test(t)?"Informatik":/ ma|-ma|ma-/.test(t)?"Matematik":/ id|-id|id-/.test(t)?"Idr\xe6t":/ sa|-sa|sa-/.test(t)?"Samfundsfag":/ ty|-ty|ty-/.test(t)?"Tysk":/ bt|-bt|bt-/.test(t)?"Bioteknologi":/ la|-la|la-/.test(t)?"Latin":/ ap alm|-ap alm|ap alm-/.test(t)?"Almen sprogforst\xe5else":/ de|-de|de-/.test(t)?"Design":/ mu|-mu|mu-/.test(t)?"Musik":/ bi|-bi|bi-/.test(t)?"Biologi":/ ol|-ol|ol-/.test(t)?"Oldtidskundskab":/ as|-as|as-/.test(t)?"Astronomi":/ bk|-bk|bk-/.test(t)?"Billedkunst":/ bro|-bro|bro-/.test(t)?"Brobygning":/ eø|-eø|eø-/.test(t)?"Erhvervs\xf8konomi":/ fi|-fi|fi-/.test(t)?"Filosofi":/ fr|-fr|fr-/.test(t)?"Fransk":/ me|-me|me-/.test(t)?"Mediefag":/ ng|-ng|ng-/.test(t)?"Naturgeografi":/ ps|-ps|ps-/.test(t)?"Psykologi":/ re|-re|re-/.test(t)?"Religion":/ skr|-skr|skr-/.test(t)?"Skriftlige opgaver":/ sp|-sp|sp-/.test(t)?"Spansk":""}(t),title:e.children[2].children[0].innerHTML,dueTo:e.children[3].innerHTML,assignmentLength:e.children[4].innerHTML,status:e.children[5].children[0]?e.children[5].children[0].innerHTML:e.children[5].innerHTML,absence:e.children[6].innerHTML.replace("&nbsp;",""),awaiter:e.children[7].innerHTML,assignmentDescription:e.children[8].innerHTML,grade:e.children[9].innerHTML,gradeNote:e.children[10].innerHTML}}));if(await i.browser().close(),0===e.length)return"No data";return e}catch{return await i.browser().close(),null}}async function getSchedule({username:e,password:t,week:r,year:i,schoolCode:a,teacherId:l}){let n=`https://www.lectio.dk/lectio/${a}/SkemaNy.aspx?week=${r.toString()+i.toString()}`;l&&(n=`https://www.lectio.dk/lectio/${a}/SkemaNy.aspx?week=${r+i}&laererid=${l}`);let s=await getAuthenticatedPage({username:e,password:t,targetPage:n,schoolCode:a});if("Error"===s)return null;if("Not authenticated"===s)return s;try{let e=await s.$$eval(".s2skemabrikcontainer.lec-context-menu-instance",async e=>e.map((e,t)=>{let r=Array.from(e.querySelectorAll("a[data-additionalinfo]")),i=r.map(e=>{let t=e.getAttribute("href"),r=e.getAttribute("data-additionalinfo"),i=r.includes("\xc6ndret!")?"changed":r.includes("Aflyst!")?"cancelled":"normal";function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function getTitle(){let e=r.split("\n"),t=e[0];return((e[0].includes("Aflyst!")||e[0].includes("\xc6ndret!"))&&(t=e[1]),t.includes("Aflyst!")||t.includes("\xc6ndret!")||/[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+$/i.test(t))?"":t}return{href:["https://lectio.dk",t].join(""),status:i,time:function(){let e=/[0-9]+\/[0-9]+-[0-9]+ [0-9]+:[0-9]+ til [0-9]+:[0-9]+/i,t=r.search(e),i=r.match(e);if(-1!==t&&i){let i=r.match(e)[0].length,a=r.substring(t,t+i),l=a.split(" "),n=l[0],s=l[1],o=l[3];return{date:n,startTime:s,endTime:o}}return{date:"",startTime:"",endTime:""}}(),teachers:function(){let e=/Lærer(e)?: ([a-zæøå ()-]+(, [a-zæøå ()-]+)*)/i,t=r.search(e),i=r.match(e);if(-1!==t&&i){let e=i[0].length,a=r.includes("L\xe6rere:")?8:7,l=r.substring(t+a,t+e);if(l.includes("(")&&l.includes(")")){let e=l.split(" (");return[{name:e[0],initials:e[1].replace(")","")}]}{let e=l.split(", "),t=[];return e.forEach(e=>{t.push({name:"",initials:e})}),t}}return[{name:"",initials:""}]}(),classroom:function(){let e=/Lokale(r)?: ([a-z0-9]+ - [a-z0-9]+(, [a-z0-9]+ - [a-z0-9]+)*)/i,t=r.search(e),i=r.match(e);if(-1!==t&&i){let e=i[0].length,a=r.includes("Lokaler:")?9:8,l=r.substring(t+a,t+e);return l}return""}(),classes:function(){let e=/Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i,t=r.search(e),i=r.match(e);if(-1!==t&&i){let e=i[0].length,a=r.substring(t+6,t+e).replace("Alle 1. G.","1G").replace("Alle 2. G.","2G").replace("Alle 3. G.","3G").replace("Alle 4. G.","4G").replace(" Udl\xe5n af lokaler","");return a.includes(",")?a.replace(/(?<=\S) \S*?,/g,"").split(" "):a.replace(/ .*/,"").split(" ")}return[""]}(),subjects:function(){if("Lektiecaf\xe9"===getTitle())return[""];let e=/Hold: ([a-zæøå0-9. ()-]+(, [a-zæøå0-9. ()-]+)*)/i,t=r.search(e),i=r.match(e);if(-1!==t&&i){let e=i[0].length,a=r.substring(t+6,t+e),l=function(e){let t=e.toLowerCase().trimStart();if(t.includes("fy \xf8v"))return"Fysik\xf8velse";if(t.includes("ke \xf8v"))return"Kemi\xf8velse";if(/ mc|-mc|mc-|mc /.test(t)){let e=capitalizeFirstLetter(t.replace(/mc [0-9]+/i,"").trimStart());return`${e} (Masterclass)`}if(/ mk|-mk|mk-|mk /.test(t)){let e=capitalizeFirstLetter(t.replace(/mk [0-9]+/i,"").trimStart());return`${e} (Marselianerklub)`}return/ fy|-fy|fy-/.test(t)?"Fysik":/ ke|-ke|ke-/.test(t)?"Kemi":/ hi|-hi|hi-/.test(t)?"Historie":/ en|-en|en-/.test(t)?"Engelsk":/ da|-da|da-/.test(t)?"Dansk":/ if|-if|if-/.test(t)?"Informatik":/ ma|-ma|ma-/.test(t)?"Matematik":/ id|-id|id-/.test(t)?"Idr\xe6t":/ sa|-sa|sa-/.test(t)?"Samfundsfag":/ ty|-ty|ty-/.test(t)?"Tysk":/ bt|-bt|bt-/.test(t)?"Bioteknologi":/ la|-la|la-/.test(t)?"Latin":/ ap alm|-ap alm|ap alm-/.test(t)?"Almen sprogforst\xe5else":/ de|-de|de-/.test(t)?"Design":/ mu|-mu|mu-/.test(t)?"Musik":/ bi|-bi|bi-/.test(t)?"Biologi":/ ol|-ol|ol-/.test(t)?"Oldtidskundskab":/ as|-as|as-/.test(t)?"Astronomi":/ bk|-bk|bk-/.test(t)?"Billedkunst":/ bro|-bro|bro-/.test(t)?"Brobygning":/ eø|-eø|eø-/.test(t)?"Erhvervs\xf8konomi":/ fi|-fi|fi-/.test(t)?"Filosofi":/ fr|-fr|fr-/.test(t)?"Fransk":/ me|-me|me-/.test(t)?"Mediefag":/ ng|-ng|ng-/.test(t)?"Naturgeografi":/ ps|-ps|ps-/.test(t)?"Psykologi":/ re|-re|re-/.test(t)?"Religion":/ skr|-skr|skr-/.test(t)?"Skriftlige opgaver":/ sp|-sp|sp-/.test(t)?"Spansk":""}(a);return[l]}return[""]}(),title:getTitle()}});return{lessons:i,notes:[""]}}));if(await s.browser().close(),0===e.length)return"No data";for(let t of e)t.lessons.sort((e,t)=>Number(e.time.startTime.substring(0,2))-Number(t.time.startTime.substring(0,2)));return e}catch(e){return await s.browser().close(),null}}async function getAllTeachers({username:e,password:t,schoolCode:r}){let i=await getAuthenticatedPage({username:e,password:t,targetPage:`https://www.lectio.dk/lectio/${r}/FindSkema.aspx?type=laerer`,schoolCode:r});if("Error"===i)return null;if("Not authenticated"===i)return i;try{let e=await i.$$eval("[data-lectiocontextcard]",e=>e.map(e=>{let t=e.innerHTML.split(" (")[0],r=e.innerHTML.split(" (")[1].replace(")",""),i=["https://lectio.dk",e.getAttribute("href")].join(""),a=i.split("laererid=")[1];return{name:t,initials:r,teacherId:a,href:i,img:""}}));if(await i.browser().close(),0===e.length)return"No data";return e}catch{return await i.browser().close(),null}}async function getTeacherByInitials({username:e,password:t,initials:r,schoolCode:i}){try{let a=await getAllTeachers({username:e,password:t,schoolCode:i});if("Not authenticated"===a||null===a||"No data"===a)return a;let l=a.find(e=>e.initials===r);if(l){if(""!==l.img)return l;{let r=l.teacherId,a=await getAuthenticatedPage({username:e,password:t,schoolCode:i,targetPage:`https://www.lectio.dk/lectio/${i}/DokumentOversigt.aspx?laererid=${r}&folderid=T${r}__5`});if("Error"===a)return null;if("Not authenticated"===a)return a;let n=await a.$eval("#s_m_HeaderContent_picctrlthumbimage",e=>e.getAttribute("src"));return await a.browser().close(),l.img=["https://lectio.dk",n].join(""),l}}return"No data"}catch(e){return null}}async function getClassInformation({username:e,password:t,href:r,schoolCode:i}){let a=await getAuthenticatedPage({username:e,password:t,targetPage:r,schoolCode:i});if("Error"===a)return null;if("Not authenticated"===a)return a;try{let getSubjectTheme=async()=>{let e={theme:"",href:""};try{return e=await a.$eval('[title="Tilknyttet forl\xf8b"]',e=>{let t=e.textContent?e.textContent.trimStart():"",r=e.getAttribute("href")?["https://lectio.dk",e.getAttribute("href")].join(""):"";return{theme:t,href:r}})}catch{return e}},getNote=async()=>{let e="";try{return e=await a.$eval("#s_m_Content_Content_tocAndToolbar_ActNoteTB_tb",e=>e.textContent?e.textContent:"")}catch{return e}},getHomeworkOtherPresentation=async()=>{let e=await a.$$eval("h1.ls-paper-section-heading",e=>{let t={homework:[],other:[],presentation:""};return e.forEach(e=>{let r=e.parentElement,i=[],a="",l=e.textContent;if("Lektier"===l||"\xd8vrigt indhold"===l){let getHomework=e=>{let t=e?e.nextElementSibling:null;if(t){if(t.children[1]&&"H1"===t.children[1].tagName)return;if(t.id.includes("ACH")){let e={titleHref:"",title:"",description:[]},r=Array.from(t.children[0].children);r.forEach((t,r)=>{if("H1"===t.tagName&&0===r){let r=t.textContent?.trimStart();e.title=r;let i=t.children[0];if(i){let t=i.getAttribute("href");t&&(t.includes("https://")?e.titleHref=t:e.titleHref=["https://lectio.dk",t].join(""))}}else{let r=document.createElement("div");r.innerHTML=t.innerHTML;let i=r.getElementsByTagName("*");for(let e=0;e<i.length;e++){let t=i[e],r=t.attributes;for(let e=r.length-1;e>=0;e--){let i=r[e].name;"href"!==i&&"target"!==i&&t.removeAttribute(i)}"BR"!==t.tagName&&t.setAttribute("className","")}e.description.push(r.innerHTML),r.remove()}}),i.push(e),getHomework(t)}else"ls-hr-solid"===t.classList[0]&&getHomework(t)}};getHomework(r)}else if("Pr\xe6sentation"===l){let e=r?r.nextElementSibling:null;if(e){let t=e.children[1].children[1].children[0],r=document.createElement("div");r.innerHTML=t.innerHTML;let i=r.getElementsByTagName("*");for(let e=0;e<i.length;e++){let t=i[e],r=t.attributes;for(let e=r.length-1;e>=0;e--){let i=r[e].name;"href"!==i&&"target"!==i&&t.removeAttribute(i)}"BR"!==t.tagName&&t.setAttribute("className",""),"&nbsp;"===t.innerHTML.trimStart().trimEnd()&&t.remove()}a=r.innerHTML,r.remove()}}"Lektier"===l?t.homework=i:"\xd8vrigt indhold"===l?t.other=i:"Pr\xe6sentation"===l&&(t.presentation=a)}),t});return e},[e,t,r]=await Promise.all([getSubjectTheme(),getNote(),getHomeworkOtherPresentation()]);return await a.browser().close(),{subjectTheme:e,note:t,homework:r.homework,other:r.other,presentation:r.presentation}}catch(e){return await a.browser().close(),null}}async function getMessages({username:e,password:t,type:r,schoolCode:i}){let a={personal:`https://www.lectio.dk/lectio/${i}/beskeder2.aspx?type=&selectedfolderid=-10`,all:`https://www.lectio.dk/lectio/${i}/beskeder2.aspx?type=&selectedfolderid=-30`,deleted:`https://www.lectio.dk/lectio/${i}/beskeder2.aspx?type=&selectedfolderid=-60`,newest:`https://www.lectio.dk/lectio/${i}/beskeder2.aspx?type=&selectedfolderid=-70`,unread:`https://www.lectio.dk/lectio/${i}/beskeder2.aspx?type=&selectedfolderid=-40`},l=a[r],n=await getAuthenticatedPage({username:e,password:t,targetPage:l,schoolCode:i});if("Error"===n)return null;if("Not authenticated"===n)return n;try{"all"===r&&(await Promise.all([n.click('div[lec-node-id="-30"] > div[lec-role="ltv-sublist"] > div:first-child > div > a'),n.waitForNavigation()]),await Promise.all([n.click('td[colspan="9"] > table > tbody > tr > td:last-child > a'),n.waitForNavigation()]));let e="No data";try{e=await n.$$eval("#s_m_Content_Content_threadGV_ctl00 > tbody > tr:not([class])",e=>{let t=Array.from(document.querySelectorAll('div[lec-node-id="-20"] > div[lec-role="ltv-sublist"] > div > div > a > div')),r=t.map(e=>e.innerHTML);return e.map(e=>{let t=e.children[3].children[0].children[0].textContent,i=e.children[4].children[0].getAttribute("title"),a=e.children[5].children[0].getAttribute("title"),l=e.children[6].children[0].getAttribute("title"),n=e.children[7].textContent.replace("ma","Mandag").replace("ti","Tirsdag").replace("on","Onsdag").replace("to","Torsdag").replace("fr","Fredag").replace("l\xf8","L\xf8rdag").replace("s\xf8","S\xf8ndag");return l=function(){let e=l.replaceAll("\n",", ").replace("1. G. elev","1.G elever").replace("2. G. elev","2.G elever").replace("3. G. elev","3.G elever").replace("4. G. elev","4.G elever").replace("Alle L\xe6rere","Alle l\xe6rere").replace("STX e","STX elever").replace("G-elev","-elever").replace("-eleve,","-elever,").replace("td-ele,","td-elever,"),t=e.match(/Alle [a-zæøå]+-lære/i);if(t){let r=t[0],i=r.indexOf("-");"s"!==r[i-1]&&(r=r.replace("-","s")),r=(r=r.split("l\xe6re")[0]+"l\xe6rere").slice(0,5)+r.charAt(5).toLowerCase()+r.slice(6),e=e.replace(t[0],r)}return e.split(", ").forEach(t=>{let i=r.find(e=>e.includes(t));i&&(e=e.replace(t,i))}),e}(),{title:t,latestSender:i,sender:a,receivers:l,latestChange:n}})})}catch{}if(await n.browser().close(),0===e.length)return"No data";return e}catch{return await n.browser().close(),null}}var l=r(892);async function getAllSchools(){let e=await (0,l.C)({targetPage:"https://www.lectio.dk/lectio/login_list.aspx"}),t=[];try{t=await e.$$eval("#schoolsdiv > div > a",e=>e.map(e=>({schoolCode:e.href.match(/[0-9]+/)[0],name:e.text})))}catch{return await e.browser().close(),null}return(await e.browser().close(),0===t.length)?"No data":t=t.filter(e=>"Vis alle skoler"!==e.name)}async function getSchool({schoolCode:e}){let t=await getAllSchools();if("No data"===t)return"No data";if(null===t)return null;let r=t.find(t=>t.schoolCode===e);return void 0===r?null:r}}};