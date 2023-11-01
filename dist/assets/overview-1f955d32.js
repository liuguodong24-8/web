import{t as B,c as z,a8 as G,h as N,f as A,a9 as R,$ as U,_ as V}from"./index-9606f8b9.js";import{h as D,a0 as E,w as F,r as L,aB as S,E as q,ao as M,q as d,X as O,o as k,k as P,p as t,P as a,m as r,U as l,_ as T,O as X,z as o,V as i,n as j}from"./vue-9888607f.js";import{i as H}from"./echarts-02f2616f.js";const J={class:"user-views"},K={class:"card-header"},Q={class:"overview-userinfo"},W={class:"user-avatar"},Y=["src"],Z={class:"user-avatar-icons"},x={class:"user-data"},ee={class:"welcome-words"},te=D({__name:"overview",setup(ae){const{t:p}=B(),v=E(),c=z(),_=F(),n=L({days:[],score:[],money:[],charts:[]}),b=()=>{const e=H(_.value),s={grid:{top:10,right:0,bottom:20,left:50},xAxis:{data:n.days},yAxis:{},legend:{data:[p("Integral"),p("Balance")]},series:[{name:p("Integral"),data:n.score,type:"line",smooth:!0,show:!1,color:"#f56c6c",emphasis:{label:{show:!0}},areaStyle:{}},{name:p("Balance"),data:n.money,type:"line",smooth:!0,show:!1,color:"#409eff",emphasis:{label:{show:!0}},areaStyle:{opacity:.4}}]};e.setOption(s),n.charts.push(e)},f=()=>{j(()=>{for(const e in n.charts)n.charts[e].resize()})};return S(()=>{f()}),q(()=>{G().then(e=>{n.days=e.data.days,n.score=e.data.score,n.money=e.data.money,b()}),N(window,"resize",f)}),M(()=>{for(const e in n.charts)n.charts[e].dispose()}),(e,s)=>{const C=d("el-button"),h=d("Icon"),w=d("el-tooltip"),u=d("el-col"),y=d("el-link"),g=d("el-row"),$=d("el-card"),I=O("blur");return k(),P("div",J,[t($,{class:"user-views-card",shadow:"hover"},{header:a(()=>[r("div",K,[r("span",null,l(e.$t("user.account.overview.Account information")),1),T((k(),X(C,{onClick:s[0]||(s[0]=m=>o(v).push({name:"account/profile"})),type:"info",plain:""},{default:a(()=>[i(l(e.$t("user.account.overview.personal data")),1)]),_:1})),[[I]])])]),default:a(()=>[r("div",Q,[r("div",W,[r("img",{src:o(A)(o(c).avatar),alt:""},null,8,Y),r("div",Z,[r("div",{onClick:s[1]||(s[1]=m=>o(v).push({name:"account/profile"})),class:"avatar-icon-item"},[t(w,{effect:"light",placement:"right",content:(o(c).mobile?e.$t("user.account.overview.Filled in"):e.$t("user.account.overview.Not filled in"))+e.$t("user.account.overview.mobile")},{default:a(()=>[t(h,{name:"fa fa-tablet",size:"16",color:o(c).mobile?"var(--el-color-primary)":"var(--el-text-color-secondary)"},null,8,["color"])]),_:1},8,["content"])]),r("div",{onClick:s[2]||(s[2]=m=>o(v).push({name:"account/profile"})),class:"avatar-icon-item"},[t(w,{effect:"light",placement:"right",content:(o(c).email?e.$t("user.account.overview.Filled in"):e.$t("user.account.overview.Not filled in"))+e.$t("user.account.overview.email")},{default:a(()=>[t(h,{name:"fa fa-envelope-square",size:"14",color:o(c).email?"var(--el-color-primary)":"var(--el-text-color-secondary)"},null,8,["color"])]),_:1},8,["content"])])])]),r("div",x,[r("div",ee,l(o(c).nickname+e.$t("utils.comma")+o(R)()),1),t(g,{class:"data-item"},{default:a(()=>[t(u,{span:4},{default:a(()=>[i(l(e.$t("Integral")),1)]),_:1}),t(u,{span:8},{default:a(()=>[t(y,{onClick:s[3]||(s[3]=m=>o(v).push({name:"account/integral"})),type:"primary"},{default:a(()=>[i(l(o(c).score),1)]),_:1})]),_:1}),t(u,{span:4},{default:a(()=>[i(l(e.$t("Balance")),1)]),_:1}),t(u,{span:8},{default:a(()=>[t(y,{onClick:s[4]||(s[4]=m=>o(v).push({name:"account/balance"})),type:"primary"},{default:a(()=>[i(l(o(c).money),1)]),_:1})]),_:1})]),_:1}),t(g,{class:"data-item"},{default:a(()=>[t(u,{class:"lastlogin title",span:4},{default:a(()=>[i(l(e.$t("user.account.overview.Last login")),1)]),_:1}),t(u,{class:"lastlogin value",span:8},{default:a(()=>[i(l(o(U)(o(c).last_login_time)),1)]),_:1}),t(u,{class:"lastip",span:4},{default:a(()=>[i(l(e.$t("user.account.overview.Last login IP")),1)]),_:1}),t(u,{class:"lastip",span:8},{default:a(()=>[i(l(o(c).last_login_ip),1)]),_:1})]),_:1})])])]),_:1}),t($,{class:"user-views-card",shadow:"hover",header:e.$t("user.account.overview.Growth statistics")},{default:a(()=>[r("div",{class:"account-growth",ref_key:"accountGrowthChartRef",ref:_},null,512)]),_:1},8,["header"])])}}});const re=V(te,[["__scopeId","data-v-ceccd0d9"]]);export{re as default};