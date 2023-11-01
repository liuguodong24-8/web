import{b as y,T as g,a as k}from"./index-5273c60c.js";import{u as I,a as L,P as w}from"./popupForm-2347331c.js";import{v,a1 as E}from"./index-764fcd0d.js";import{h as N,w as q,N as C,r as T,am as U,aD as x,F as z,q as u,X as D,o as n,k as P,z as o,O as m,W as i,p as l,P as p,i as R,_ as S,m as A,U as B}from"./vue-7c431e9b.js";import"./index-4c4c8153.js";import"./index-4e8a24f3.js";import"./validate-6a14e75e.js";const F={class:"default-main ba-table-box"},G={class:"table-header-operate-text"},J=N({name:"user/moneyLog",__name:"index",setup(K){const{t:e}=v(),d=q(),b=C().query.user_id??"",t=T({userInfo:{}}),r=new y(new E(I),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("user.moneyLog.User ID"),prop:"user_id",align:"center",width:70},{label:e("user.moneyLog.User name"),prop:"user.username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.User nickname"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.Change balance"),prop:"money",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.Before change"),prop:"before",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.After change"),prop:"after",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.remarks"),prop:"memo",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160}],dblClickNotEditColumn:["all"]},{defaultItems:{user_id:b,memo:""}},{},{onSubmit:()=>{s(r.comSearch.form.user_id)}});r.mount(),r.getIndex(),U("baTable",r);const s=a=>{a&&x(a)>0?L(a).then(c=>{t.userInfo=c.data.user}):t.userInfo={}};return s(r.comSearch.form.user_id),z(()=>r.comSearch.form.user_id,a=>{r.form.defaultItems.user_id=a,s(a)}),(a,c)=>{const f=u("el-alert"),h=u("el-button"),_=D("blur");return n(),P("div",F,[o(r).table.remark?(n(),m(f,{key:0,class:"ba-table-alert",title:o(r).table.remark,type:"info","show-icon":""},null,8,["title"])):i("",!0),l(g,{buttons:["refresh","add","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("Quick search placeholder",{fields:o(e)("user.moneyLog.User name")+"/"+o(e)("user.moneyLog.User nickname")})},{default:p(()=>[o(R)(t.userInfo)?i("",!0):S((n(),m(h,{key:0,class:"table-header-operate"},{default:p(()=>[A("span",G,B(t.userInfo.username+"(ID:"+t.userInfo.id+") "+o(e)("user.moneyLog.balance")+":"+t.userInfo.money),1)]),_:1})),[[_]])]),_:1},8,["quick-search-placeholder"]),l(k,{ref_key:"tableRef",ref:d},null,512),l(w)])}}});export{J as default};
