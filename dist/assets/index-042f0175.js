import{d,b as c,T as m,a as p}from"./index-5273c60c.js";import{v as u,a1 as b}from"./index-764fcd0d.js";import{_ as h}from"./popupForm.vue_vue_type_script_setup_true_lang-7089e830.js";import{h as y,w as f,am as _,E as k,q as g,o as i,k as w,z as a,O as T,W as E,p as r}from"./vue-7c431e9b.js";import"./index-4c4c8153.js";import"./index-4e8a24f3.js";import"./validate-6a14e75e.js";const q={class:"default-main ba-table-box"},F=y({name:"todayinhistory",__name:"index",setup(v){const{t:e}=u(),l=f(),n=d(["edit","delete"]),t=new c(new b("/admin/Todayinhistory/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("todayinhistory.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("todayinhistory.title"),prop:"title",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("todayinhistory.picture"),prop:"picture",align:"center",render:"image",operator:!1},{label:e("todayinhistory.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("todayinhistory.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("Operate"),align:"center",width:100,render:"buttons",buttons:n,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{}});return _("baTable",t),k(()=>{var o;t.table.ref=l.value,t.mount(),(o=t.getIndex())==null||o.then(()=>{t.initSort(),t.dragSort()})}),(o,N)=>{const s=g("el-alert");return i(),w("div",q,[a(t).table.remark?(i(),T(s,{key:0,class:"ba-table-alert",title:a(t).table.remark,type:"info","show-icon":""},null,8,["title"])):E("",!0),r(m,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("Quick search placeholder",{fields:a(e)("todayinhistory.quick Search Fields")})},null,8,["quick-search-placeholder"]),r(p,{ref_key:"tableRef",ref:l},null,512),r(h)])}}});export{F as default};
