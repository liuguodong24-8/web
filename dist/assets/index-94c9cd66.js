import{d,b as s,T as u,a as m}from"./index-4f33ef6e.js";import{t as h,a1 as b,ae as f}from"./index-d68ba36c.js";import g from"./info-c6a2439c.js";import{h as y,aE as L,ap as _,ay as w,q as k,o as p,k as z,z as o,O as I,W as T,p as n}from"./vue-9888607f.js";import"./index-5b09613c.js";const E={class:"default-main ba-table-box"},F=y({name:"auth/adminLog",__name:"index",setup(q){const{t:e}=h();let l=[{render:"tipButton",name:"info",title:"Info",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-edit",disabledTip:!1,click:t=>{i(t)}}];l=L(l,d(["delete"]));const a=new s(new b("/admin/auth.AdminLog/"),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("auth.adminLog.admin_id"),prop:"admin_id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("auth.adminLog.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:160},{label:e("auth.adminLog.title"),prop:"title",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{show:!1,label:e("auth.adminLog.data"),prop:"data",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0},{label:e("auth.adminLog.url"),prop:"url",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0,render:"url"},{label:e("auth.adminLog.ip"),prop:"ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("auth.adminLog.useragent"),prop:"useragent",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Operate"),align:"center",width:"100",render:"buttons",buttons:l,operator:!1}],dblClickNotEditColumn:[void 0]},{},{onTableDblclick:({row:t})=>(i(t),!1)});a.mount(),a.getIndex(),_("baTable",a);const i=t=>{if(!t)return;let r=w(t);r.data=r.data?[{label:"点击展开",children:f(JSON.parse(r.data))}]:[],a.form.extend.info=r,a.form.operate="Info"};return(t,r)=>{const c=k("el-alert");return p(),z("div",E,[o(a).table.remark?(p(),I(c,{key:0,class:"ba-table-alert",title:o(a).table.remark,type:"info","show-icon":""},null,8,["title"])):T("",!0),n(u,{buttons:["refresh","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("Quick search placeholder",{fields:o(e)("auth.adminLog.title")})},null,8,["quick-search-placeholder"]),n(m),n(g)])}}});export{F as default};