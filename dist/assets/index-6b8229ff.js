import{d as i,b as c,T as m,a as p}from"./index-165813b5.js";import{v as u,a1 as b}from"./index-a6f6b7ce.js";import{_}from"./popupForm.vue_vue_type_script_setup_true_lang-6b92ab5e.js";import{h as f,w as h,am as g,E as y,q as k,o as n,k as w,z as t,O as E,W as q,p as o}from"./vue-99362bf9.js";import"./index-e9f3c4e4.js";import"./index-4085c0db.js";import"./validate-e7ebbfab.js";const T={class:"default-main ba-table-box"},R=f({name:"grade",__name:"index",setup(v){const{t:e}=u(),l=h(),s=i(["edit","delete"]),a=new c(new b("/admin/Grade/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("grade.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("grade.grade_code"),prop:"grade_code",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("grade.grade_name"),prop:"grade_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("grade.update_time"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("grade.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("Operate"),align:"center",width:100,render:"buttons",buttons:s,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{}});return g("baTable",a),y(()=>{var r;a.table.ref=l.value,a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})}),(r,N)=>{const d=k("el-alert");return n(),w("div",T,[t(a).table.remark?(n(),E(d,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),o(m,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("grade.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(p,{ref_key:"tableRef",ref:l},null,512),o(_)])}}});export{R as default};
