import{b as _,T as f,a as v}from"./index-165813b5.js";import{v as y,a1 as h}from"./index-a6f6b7ce.js";import{h as g,ar as k,w as i,am as S,q as s,o as n,O as c,P as T,m as C,z as t,W as N,p as d}from"./vue-99362bf9.js";const q={class:"default-main ba-table-box"},E=g({name:"activityscan",__name:"index",setup(w){const{t:e}=y(),l=k("baTable"),o=i(0),m=()=>{var r;o.value=parseFloat(JSON.parse(JSON.stringify(l.form.operateIds)).shift()),console.log("id.value"),console.log(o.value),a.table.filter={activity_id:o.value},a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})},p=i(),a=new _(new h("/admin/Activityscan/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("activity.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("activity.act_name"),prop:"activity.act_name",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:e("activity.dev__user_name"),prop:"dev.user_name",align:"center",operatorPlaceholder:e("Fuzzy query"),render:"tags",operator:"LIKE"},{label:e("activity.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"}],dblClickNotEditColumn:[void 0],filter:{activity_id:o.value}},{defaultItems:{}});return S("baTable",a),(r,x)=>{const u=s("el-alert"),b=s("el-dialog");return n(),c(b,{class:"ba-operate-dialog",onOpen:m,"close-on-click-modal":!1,"model-value":["ScanList"].includes(t(l).form.operate),onClose:t(l).toggleForm},{default:T(()=>[C("div",q,[t(a).table.remark?(n(),c(u,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):N("",!0),d(f,{buttons:["refresh","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("activityscan.quick Search Fields")})},null,8,["quick-search-placeholder"]),d(v,{ref_key:"tableRef",ref:p},null,512)])]),_:1},8,["model-value","onClose"])}}});export{E as _};
