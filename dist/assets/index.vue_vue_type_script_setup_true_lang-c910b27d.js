import{b as _,T as b,a as f}from"./index-5273c60c.js";import{v as h,a1 as k}from"./index-764fcd0d.js";import{h as v,ar as y,w as r,am as S,q as n,o as i,O as m,P as T,m as q,z as s,W as C,p as c}from"./vue-7c431e9b.js";const N={class:"default-main ba-table-box"},V=v({__name:"index",setup(w){const{t:e}=h(),l=y("baTable"),t=r(0),d=()=>{var o;t.value=parseFloat(JSON.parse(JSON.stringify(l.form.operateIds)).shift()),console.log("id.value"),console.log(t.value),a.table.filter={message_id:t.value},a.mount(),(o=a.getIndex())==null||o.then(()=>{a.initSort(),a.dragSort()})},p=r(),a=new _(new k("/admin/Messagesendlist/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("message.messagesendlist.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("message.mes_important"),prop:"message.mes_important",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{0:e("message.message__mes_important 0"),1:e("message.message__mes_important 1")}},{label:e("message.messagesendlist.dev__user_name"),prop:"dev.user_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE"},{label:e("message.messagesendlist.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("message.messagesendlist.msg_status"),prop:"msg_status",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{0:e("message.messagesendlist.msg_status 0"),1:e("message.messagesendlist.msg_status 1")}}],dblClickNotEditColumn:[void 0],filter:{message_id:t.value}},{defaultItems:{}});return S("baTable",a),(o,x)=>{const g=n("el-alert"),u=n("el-dialog");return i(),m(u,{class:"ba-operate-dialog",onOpen:d,"close-on-click-modal":!1,"model-value":["ReadyList"].includes(s(l).form.operate),onClose:s(l).toggleForm},{default:T(()=>[q("div",N,[s(a).table.remark?(i(),m(g,{key:0,class:"ba-table-alert",title:s(a).table.remark,type:"info","show-icon":""},null,8,["title"])):C("",!0),c(b,{buttons:["refresh","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":s(e)("Quick search placeholder",{fields:s(e)("message.messagesendlist.quick Search Fields")})},null,8,["quick-search-placeholder"]),c(f,{ref_key:"tableRef",ref:p},null,512)])]),_:1},8,["model-value","onClose"])}}});export{V as _};
