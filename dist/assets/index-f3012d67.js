import{b as m,d as b,T as f,a as y}from"./index-5273c60c.js";import{c as h,v as g,a1 as _}from"./index-764fcd0d.js";import k from"./popupForm-a9f20a01.js";import{h as R,w as s,r as E,am as w,E as z,q as I,o as i,k as q,z as t,O as L,W as v,p as c}from"./vue-7c431e9b.js";import"./index-4c4c8153.js";import"./index-4e8a24f3.js";import"./validate-6a14e75e.js";const d="/admin/security.DataRecycle/";function D(){return h({url:d+"add",method:"get"})}const F={class:"default-main ba-table-box"},O=R({name:"security/dataRecycle",__name:"index",setup(T){const{t:e}=g(),n=s(),p=s(),a=new m(new _(d),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("security.dataRecycle.Rule name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.controller"),prop:"controller",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.Data table primary key"),prop:"primary_key",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:100},{label:e("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("security.dataRecycle.Deleting monitoring")}},{label:e("Update time"),prop:"update_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Operate"),align:"center",width:"130",render:"buttons",buttons:b(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}},{toggleForm:({operate:l})=>{(l=="Add"||l=="Edit")&&(a.form.loading=!0,D().then(o=>{r.tableList=o.data.tables,r.controllerList=o.data.controllers,a.form.loading=!1}))}}),r=E({tableList:{},controllerList:{}});return w("baTable",a),z(()=>{a.table.ref=n.value,a.mount(),a.getIndex()}),(l,o)=>{const u=I("el-alert");return i(),q("div",F,[t(a).table.remark?(i(),L(u,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):v("",!0),c(f,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("security.dataRecycle.Rule name")})},null,8,["quick-search-placeholder"]),c(y,{ref_key:"tableRef",ref:n},null,512),c(k,{ref_key:"formRef",ref:p,"form-data":r},null,8,["form-data"])])}}});export{O as default};