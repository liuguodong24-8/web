import{b,d as h,T as g,a as _}from"./index-165813b5.js";import k from"./popupForm-e3329244.js";import{v,a1 as w}from"./index-a6f6b7ce.js";import{h as y,w as d,av as C,am as I,E as T,q as E,o as p,k as N,z as s,O as R,W as q,p as n}from"./vue-99362bf9.js";import"./index-e9f3c4e4.js";import"./index-4085c0db.js";import"./validate-e7ebbfab.js";const x={class:"default-main ba-table-box"},O=y({name:"user/group",__name:"index",setup(A){const{t}=v(),i=d(),c=d(),e=new b(new w("/admin/user.Group/"),{column:[{type:"selection",align:"center",operator:!1},{label:t("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:t("Id"),width:70},{label:t("user.group.Group name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:t("Fuzzy query")},{label:t("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:t("Disable"),1:t("Enable")}},{label:t("Update time"),prop:"update_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:t("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:t("Operate"),align:"center",width:"130",render:"buttons",buttons:h(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"1"}},{onSubmit:({formEl:l,operate:r,items:a})=>{var a=C(a);a.rules=c.value.getCheckeds();for(const o in a)a[o]===null&&delete a[o];r=r.replace(r[0],r[0].toLowerCase());let m=()=>{e.form.submitLoading=!0,e.api.postData(r,a).then(o=>{var u;e.onTableHeaderAction("refresh",{}),e.form.submitLoading=!1,(u=e.form.operateIds)==null||u.shift(),e.form.operateIds.length>0?e.toggleForm("Edit",e.form.operateIds):e.toggleForm(),e.runAfter("onSubmit",{res:o})}).catch(()=>{e.form.submitLoading=!1})};return l?(e.form.ref=l,l.validate(o=>{o&&m()})):m(),!1}});return I("baTable",e),T(()=>{e.table.ref=i.value,e.mount(),e.getIndex()}),(l,r)=>{const f=E("el-alert");return p(),N("div",x,[s(e).table.remark?(p(),R(f,{key:0,class:"ba-table-alert",title:s(e).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),n(g,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":s(t)("Quick search placeholder",{fields:s(t)("user.group.GroupName")})},null,8,["quick-search-placeholder"]),n(_,{ref_key:"tableRef",ref:i},null,512),n(k,{ref_key:"formRef",ref:c},null,512)])}}});export{O as default};
