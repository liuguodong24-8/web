import{d as s,b as c,T as i,a as d}from"./index-cfb50cde.js";import{t as u,a1 as m}from"./index-a32a01c5.js";import{_ as b}from"./popupForm.vue_vue_type_script_setup_true_lang-243d01a8.js";import{_ as y}from"./scanQrCode.vue_vue_type_script_setup_true_lang-979070c6.js";import _ from"./index-abcc8423.js";import{h as f,w as h,ap as z,E as g,q as E,o as l,k as I,z as n,O as q,W as F,p as a}from"./vue-9888607f.js";import"./index-280d7cc1.js";import"./index-7c3dd670.js";import"./validate-1cd91476.js";import"./qrcode.vue.esm-ab222b08.js";const K={class:"default-main ba-table-box"},M=f({name:"activity",__name:"index",setup(L){const{t:e}=u(),t=h();s(["edit"]);const r=new c(new m("/admin/ActivityDetail/"),{pk:"id",column:[{label:e("id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("学生名字"),prop:"user_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("参加次数"),prop:"count",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE"},{label:e("学段名"),prop:"period.phase_name",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:e("年级名"),prop:"grade.grade_name",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:e("班级名"),prop:"class_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("dev.in_year"),prop:"in_year",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("学校名"),prop:"school_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("班主任手机号"),prop:"teacher_mobile",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("班主任"),prop:"teacher_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("监护人"),prop:"guardian_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("监护人手机"),prop:"guardian_mobile",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:"设备号",prop:"device_id",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:"mac地址",prop:"mac_id",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:"状态",prop:"device_status",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE",replaceValue:{0:"正常",1:"遗失",2:"损坏"}},{label:e("更新时间"),prop:"update_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"}],dblClickNotEditColumn:[void 0]},{defaultItems:{}});return z("baTable",r),g(()=>{var o;r.table.ref=t.value,r.mount(),(o=r.getIndex())==null||o.then(()=>{r.initSort(),r.dragSort()})}),(o,P)=>{const p=E("el-alert");return l(),I("div",K,[n(r).table.remark?(l(),q(p,{key:0,class:"ba-table-alert",title:n(r).table.remark,type:"info","show-icon":""},null,8,["title"])):F("",!0),a(i,{buttons:["refresh","add","comSearch"]}),a(d,{ref_key:"tableRef",ref:t},null,512),a(b),a(y,{ref:"popupQrcode"},null,512),a(_)])}}});export{M as default};