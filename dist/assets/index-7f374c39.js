import{d as p,b as m,T as f,a as u}from"./index-7f28922b.js";import{t as b,a1 as y}from"./index-ff2ea991.js";import{_}from"./popupForm.vue_vue_type_script_setup_true_lang-44cb0126.js";import{_ as h}from"./scanQrCode.vue_vue_type_script_setup_true_lang-e6a63494.js";import g from"./index-33919a76.js";import{h as w,w as v,ap as k,E,q as T,o as i,k as B,z as n,O as x,W as z,p as r}from"./vue-5df46ab8.js";import"./index-8020abbe.js";import"./index-4fdfed13.js";import"./validate-358b5494.js";import"./qrcode.vue.esm-b276e88c.js";const F={class:"default-main ba-table-box"},O=w({name:"activity",__name:"index",setup(A){const{t:a}=b(),l=v();let s=p(["edit"]),c=[{render:"tipButton",name:"info",title:"活动二维码",text:"",type:"primary",icon:"fa fa-qrcode",class:"table-row-info",disabledTip:!1,click:(e,o)=>{t.form.operate="Qrcode",console.log("row.id"),console.log(e.id),t.toggleForm("Qrcode",[e.id])},display:(e,o)=>!0,disabled:(e,o)=>!1,attr:{}},{render:"tipButton",name:"ScanList",title:"签到清单",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-info",disabledTip:!1,click:(e,o)=>{t.form.operate="ScanList",console.log("row.id"),console.log(e.id),t.toggleForm("ScanList",[e.id])},display:(e,o)=>!0,disabled:(e,o)=>!1,attr:{}}];const t=new m(new y("/admin/Activity/"),{pk:"id",column:[{label:a("activity.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:a("activity.act_name"),prop:"act_name",align:"center",operatorPlaceholder:a("Fuzzy query"),operator:"LIKE",sortable:!1},{label:a("activity.act_cont"),prop:"act_cont",align:"center",operatorPlaceholder:a("Fuzzy query"),operator:"LIKE"},{label:a("操作人"),prop:"operator",align:"center",operatorPlaceholder:a("Fuzzy query"),operator:"LIKE"},{label:a("activity.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("activity.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:a("Operate"),align:"center",width:120,render:"buttons",buttons:c.concat(s),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{}});return k("baTable",t),E(()=>{var e;t.table.ref=l.value,t.mount(),(e=t.getIndex())==null||e.then(()=>{t.initSort(),t.dragSort()})}),(e,o)=>{const d=T("el-alert");return i(),B("div",F,[n(t).table.remark?(i(),x(d,{key:0,class:"ba-table-alert",title:n(t).table.remark,type:"info","show-icon":""},null,8,["title"])):z("",!0),r(f,{buttons:["refresh","add","comSearch"]}),r(u,{ref_key:"tableRef",ref:l},null,512),r(_),r(h,{ref:"popupQrcode"},null,512),r(g)])}}});export{O as default};
