import{b as d,T as p,a as c}from"./index-4f33ef6e.js";import{t as f,a1 as b}from"./index-d68ba36c.js";import{_ as u}from"./popupForm.vue_vue_type_style_index_0_lang-6c967a10.js";import g from"./index-4e82beb3.js";import{p as _}from"./index-5b09613c.js";import{h as y,w as h,ap as w,E as k,q as R,o as l,k as T,z as n,O as v,W as x,p as o}from"./vue-9888607f.js";import"./index-d87f9e8e.js";import"./validate-905cfe5c.js";const M={class:"default-main ba-table-box"},S=y({name:"message",__name:"index",setup(B){const{t:a}=f(),s=h(),i=[{render:"tipButton",name:"ReadyList",title:"推送清单",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-info",disabledTip:!1,click:(e,r)=>{t.form.operate="ReadyList",console.log("row.id"),console.log(e.id),t.toggleForm("ReadyList",[e.id])},display:(e,r)=>!0,disabled:(e,r)=>!1,attr:{}},{render:"tipButton",name:"ReadyList",title:"推送",text:"",type:"primary",icon:"fa fa-envelope",class:"table-row-info",disabledTip:!1,click:(e,r)=>{t.form.operate="ReadyList",console.log("row.id"),console.log(e.id),t.toggleForm("ReadyList",[e.id])},display:(e,r)=>!0,disabled:(e,r)=>!1,attr:{}}],t=new d(new b("/admin/Message/"),{pk:"id",column:[{label:a("message.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:a("message.mes_important"),prop:"mes_important",align:"center",render:"tag",custom:{0:"info",1:"danger"},operator:"eq",sortable:!1,replaceValue:{0:a("message.mes_important 0"),1:a("message.mes_important 1")}},{label:a("message.image_url"),prop:"image_url",align:"center",renderFormatter:_,render:"image",operator:!1},{label:a("message.mes_content"),prop:"mes_content",align:"center",operator:!1},{label:a("message.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("message.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("Operate"),align:"center",width:100,render:"buttons",buttons:i,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{mes_important:null}});return w("baTable",t),k(()=>{var e;t.table.ref=s.value,t.mount(),(e=t.getIndex())==null||e.then(()=>{t.initSort(),t.dragSort()})}),(e,r)=>{const m=R("el-alert");return l(),T("div",M,[n(t).table.remark?(l(),v(m,{key:0,class:"ba-table-alert",title:n(t).table.remark,type:"info","show-icon":""},null,8,["title"])):x("",!0),o(p,{buttons:["refresh","add","comSearch"]}),o(c,{ref_key:"tableRef",ref:s},null,512),o(u),o(g)])}}});export{S as default};