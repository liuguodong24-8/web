import{d as p,b as c,T as d,a as m}from"./index-165813b5.js";import u from"./popupForm-1f0b4129.js";import{v as b,q as h,a1 as g}from"./index-a6f6b7ce.js";import{h as f,am as _,q as k,o as n,k as y,z as t,O as I,W as q,p as r}from"./vue-99362bf9.js";import"./index-e9f3c4e4.js";import"./validate-e7ebbfab.js";import"./index-4085c0db.js";const z={class:"default-main ba-table-box"},F=f({name:"auth/admin",__name:"index",setup(E){const{t:e}=b(),i=h(),o=p(["edit","delete"]);o[1].display=l=>l.id!=i.id;const a=new c(new g("/admin/auth.Admin/"),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("auth.admin.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.nickname"),prop:"nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.grouping"),prop:"group_name_arr",align:"center",operator:!1,render:"tags"},{label:e("auth.admin.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:e("auth.admin.mailbox"),prop:"email",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.mobile"),prop:"mobile",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.Last login"),prop:"last_login_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("Enable")}},{label:e("Operate"),align:"center",width:"100",render:"buttons",buttons:o,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}});return _("baTable",a),a.mount(),a.getIndex(),(l,w)=>{const s=k("el-alert");return n(),y("div",z,[t(a).table.remark?(n(),I(s,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),r(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("auth.admin.username")+"/"+t(e)("auth.admin.nickname")})},null,8,["quick-search-placeholder"]),r(m),r(u)])}}});export{F as default};
