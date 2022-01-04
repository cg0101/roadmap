import{r as c,o as s,c as m,a as r,F as h,b as _,t as f,d as g,n as w,w as x,v as M,e as T,f as k,g as B,h as v,i as V,j as D,k as O,l as I,m as S}from"./vendor.6901681b.js";const F=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}};F();var C=(e,i)=>{const l=e.__vccOpts||e;for(const[d,t]of i)l[d]=t;return l},R="roadmapTimeLines1.0";const L={name:"HelloWorld",props:{msg:String},data(){var e=[];return window.localStorage.getItem(R)&&(e=JSON.parse(window.localStorage.getItem(R))),{count:0,timeNodes:this.buildTimeNodes(),rows:new Array(40),draftRoadmapTimeline:this.getDraftRoadmaoTimeline(),roadmapTimeLines:e,dialogVisiableOfdraftRoadmapTimelineTextInput:!1}},computed:{draftRoadmapTimeLineStyle:function(){return this.buildRoadmapTimelineStyle(this.draftRoadmapTimeline)}},methods:{buildRoadmapTimelineBdStyle(e){let i="#222";return e.property.backgroundColor&&e.property.backgroundColor!=="#fff"&&(i="#fff"),{"background-color":e.property.backgroundColor?e.property.backgroundColor:"#fff",color:i}},randomBackgroundColor(e){let i=["#295BE6","#2CBC63","#12B2E6","#774EE0","#AF4FD3","#E16AC0","#EB4962","#F1763A","#EAC00B"];e.property.backgroundColor=i[parseInt(Math.random()*i.length)],this.cache(),console.log(e.property.backgroundColor)},onClickBtnRemoveOfRoadmapTimeline(e){this.roadmapTimeLines.splice(e,1),this.cache()},onClickBtnShare(){alert("\u5F00\u53D1\u4E2D")},buildRoadmapTimelineStyle(e){return{left:e.property.left+"px",top:e.property.top+"px",width:e.property.width+"px"}},getDraftRoadmaoTimeline(){return{isBuilding:!1,isFinish:!1,property:{width:0,left:0,top:0,text:"",backgroundColor:"#fff",initialOffsetX:0,initialLeft:0,initialTop:0,initialScreenX:0}}},onMouseMoveForCaledarView(e){if(this.draftRoadmapTimeline.isBuilding){let l=e.screenX-this.draftRoadmapTimeline.property.initialScreenX,d=l<0?0:l;this.draftRoadmapTimeline.property.width=d,d<=60?this.draftRoadmapTimeline.property.dayCount=1:this.draftRoadmapTimeline.property.dayCount=1+Math.floor((d-60)/60)}},onMouseDownForRoadmapRowsItem(e){if(this.draftRoadmapTimeline.isBuilding){this.onMouseUpForRoadmapRowsItem(e);return}this.draftRoadmapTimeline.isBuilding||(this.draftRoadmapTimeline.isFinish=!1,this.draftRoadmapTimeline.isBuilding=!0,this.draftRoadmapTimeline.property.initialOffsetX=e.offsetX,this.draftRoadmapTimeline.property.initialLeft=e.currentTarget.getBoundingClientRect().x+this.$refs.caledarView.scrollLeft,this.draftRoadmapTimeline.property.initialTop=e.currentTarget.getBoundingClientRect().y-60,this.draftRoadmapTimeline.property.initialScreenX=e.screenX,this.draftRoadmapTimeline.property.left=this.draftRoadmapTimeline.property.initialLeft,this.draftRoadmapTimeline.property.top=this.draftRoadmapTimeline.property.initialTop)},onMouseUpForRoadmapRowsItem(){this.draftRoadmapTimeline.isBuilding&&(this.dialogVisiableOfdraftRoadmapTimelineTextInput=!0,this.$nextTick(()=>{this.$refs.draftRoadmapTimelineTextInput.focus()}))},onDialogCloseChangeRoadmapTimelineTextInput(){this.dialogVisiableOfdraftRoadmapTimelineTextInput=!1,this.newDraftRoadmaoTimeline()},createRoadmapTimeline(){this.dialogVisiableOfdraftRoadmapTimelineTextInput=!1,this.draftRoadmapTimeline.isBuilding=!1,this.draftRoadmapTimeline.isFinish=!0,this.draftRoadmapTimeline.property.width=this.draftRoadmapTimeline.property.dayCount*60,this.roadmapTimeLines.push({property:{backgroundColor:this.draftRoadmapTimeline.property.backgroundColor,left:this.draftRoadmapTimeline.property.left,top:this.draftRoadmapTimeline.property.top,width:this.draftRoadmapTimeline.property.width,text:this.draftRoadmapTimeline.property.text}}),this.newDraftRoadmaoTimeline(),this.cache()},cache(){window.localStorage.setItem(R,JSON.stringify(this.roadmapTimeLines))},newDraftRoadmaoTimeline(){this.draftRoadmapTimeline=this.getDraftRoadmaoTimeline()},buildTimeNodes(){const e=moment(new Date).subtract(1,"months"),i=moment(new Date).add(4,"months"),l=moment.range(e,i);return Array.from(l.by("day",{excludeEnd:!0})).map(a=>{let n=moment(a),u={name:n.format("YYYY-MM-DD"),whatDayOfWeek:n.format("dd").substring(0,1),whatDayOfMonth:n.format("D")};return n.format("D")==="1"&&(u.whatMonthOfYear=n.format("MMM")),u})}},mounted(){this.$nextTick(()=>{this.$refs.caledarView.style.height=document.documentElement.clientHeigh-132+"px";let e=30;this.$refs.caledarView.scrollLeft=60*e})}},E={class:""},A=r("div",{class:"navbar"},[r("h3",null,"Z Roadmap")],-1),N={class:"caledar-view__item"},X={class:"caledar-view__item__head-wrap"},Y={class:"caledar-view__item__MMM"},U={key:0},K={class:"caledar-view__item__head"},W={class:"caledar-view__item__head__dd"},z=["data-name"],j={class:"caledar-view__item__roadmap"},H={class:"caledar-view__item__roadmap__rows"},J={class:"roadmap__timeline__bd building"},P=["onClick"],q=["onClick"];function Z(e,i,l,d,t,a){const n=c("el-input"),u=c("el-dialog");return s(),m("div",E,[A,r("div",{class:"caledar-view",ref:"caledarView",onMousemove:i[2]||(i[2]=(...o)=>a.onMouseMoveForCaledarView&&a.onMouseMoveForCaledarView(...o))},[(s(!0),m(h,null,_(t.timeNodes,o=>(s(),m("div",N,[r("div",X,[r("div",Y,[o.whatMonthOfYear?(s(),m("span",U,f(o.whatMonthOfYear),1)):g("",!0)]),r("div",K,[r("div",W,f(o.whatDayOfWeek),1),r("div",{class:"caledar-view__item__head__D","data-name":o.name},[r("em",null,f(o.whatDayOfMonth),1)],8,z)])]),r("div",j,[r("ul",H,[(s(!0),m(h,null,_(t.rows,y=>(s(),m("li",{onMouseup:i[0]||(i[0]=(...p)=>a.onMouseUpForRoadmapRowsItem&&a.onMouseUpForRoadmapRowsItem(...p)),onMousedown:i[1]||(i[1]=(...p)=>a.onMouseDownForRoadmapRowsItem&&a.onMouseDownForRoadmapRowsItem(...p)),class:w([{building:t.draftRoadmapTimeline.isBuilding},"caledar-view__item__roadmap__rows__item"])},null,34))),256))])])]))),256)),x(r("div",{class:w(["roadmap__timeline",{building:t.draftRoadmapTimeline.isBuilding}]),style:T(a.draftRoadmapTimeLineStyle)},[r("div",J,f(t.draftRoadmapTimeline.property.dayCount),1)],6),[[M,t.draftRoadmapTimeline.isBuilding]]),t.roadmapTimeLines.length?(s(!0),m(h,{key:0},_(t.roadmapTimeLines,(o,y)=>(s(),m("div",{class:"roadmap__timeline",style:T(this.buildRoadmapTimelineStyle(o))},[r("div",{class:"roadmap__timeline__bd finish",style:T(a.buildRoadmapTimelineBdStyle(o)),onClick:p=>a.randomBackgroundColor(o)},[k(f(o.property.text)+" ",1),r("i",{class:"el-icon-close roadmap__timeline__bd__btn-remove",onClick:B(p=>a.onClickBtnRemoveOfRoadmapTimeline(y),["stop"])},null,8,q)],12,P)],4))),256)):g("",!0)],544),v(u,{width:"50%","custom-class":"draft-roadmap-time-line-dialog",title:"",modelValue:t.dialogVisiableOfdraftRoadmapTimelineTextInput,"onUpdate:modelValue":i[5]||(i[5]=o=>t.dialogVisiableOfdraftRoadmapTimelineTextInput=o),onClose:a.onDialogCloseChangeRoadmapTimelineTextInput},{default:V(()=>[v(n,{size:"medium",modelValue:t.draftRoadmapTimeline.property.text,"onUpdate:modelValue":i[3]||(i[3]=o=>t.draftRoadmapTimeline.property.text=o),ref:"draftRoadmapTimelineTextInput",placeholder:"Task name",onKeyup:i[4]||(i[4]=D(o=>a.createRoadmapTimeline(),["enter"]))},null,8,["modelValue"])]),_:1},8,["modelValue","onClose"])])}var G=C(L,[["render",Z]]);const Q={name:"App",components:{CalendarView:G}};function $(e,i,l,d,t,a){const n=c("CalendarView");return s(),O(n)}var ee=C(Q,[["render",$]]);window["moment-range"].extendMoment(moment);var b=I(ee);b.use(S);b.mount("#app");