import{b as k,d as _,T as y,a as x}from"./index-4f33ef6e.js";import{t as w,q as C,a1 as I,V as T}from"./index-d68ba36c.js";import v from"./popupForm-0344931a.js";import{h as A,w as b,ay as q,ap as D,E as G,q as O,o as i,k as B,z as n,O as f,W as g,p as u}from"./vue-9888607f.js";import"./index-5b09613c.js";import"./index-d87f9e8e.js";import"./validate-905cfe5c.js";const E={class:"default-main ba-table-box"},M=A({name:"auth/group",__name:"index",setup(L){const d=b(),c=b(),{t}=w(),h=C(),e=new k(new I("/admin/auth.Group/"),{expandAll:!0,dblClickNotEditColumn:[void 0],column:[{type:"selection",align:"center"},{label:t("auth.group.Group name"),prop:"name",align:"left",width:"200"},{label:t("auth.group.jurisdiction"),prop:"rules",align:"center"},{label:t("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:t("Disable"),1:t("Enable")}},{label:t("Update time"),prop:"update_time",align:"center",width:"160",render:"datetime"},{label:t("Create time"),prop:"create_time",align:"center",width:"160",render:"datetime"},{label:t("Operate"),align:"center",width:"130",render:"buttons",buttons:_(["edit","delete"])}]},{defaultItems:{status:"1"}},{onSubmit:({formEl:a,operate:l,items:r})=>{var r=q(r);r.rules=d.value.getCheckeds();for(const o in r)r[o]===null&&delete r[o];l=l.replace(l[0],l[0].toLowerCase());let m=()=>{e.form.submitLoading=!0,e.api.postData(l,r).then(o=>{var p;e.onTableHeaderAction("refresh",{}),e.form.submitLoading=!1,(p=e.form.operateIds)==null||p.shift(),e.form.operateIds.length>0?e.toggleForm("Edit",e.form.operateIds):e.toggleForm(),e.runAfter("onSubmit",{res:o})}).catch(()=>{e.form.submitLoading=!1})};return a?(e.form.ref=a,a.validate(o=>{o&&m()})):m(),!1},onTableDblclick:({row:a})=>e.table.extend.adminGroup.indexOf(a.id)===-1},{getIndex:({res:a})=>{e.table.extend.adminGroup=a.data.group;let l=T(e.table.column,"render","buttons");e.table.column[l].buttons.forEach(s=>{s.display=r=>a.data.group.indexOf(r.id)===-1})}});return D("baTable",e),G(()=>{e.table.ref=c.value,e.mount(),e.getIndex()}),(a,l)=>{const s=O("el-alert");return i(),B("div",E,[n(h).super?g("",!0):(i(),f(s,{key:0,class:"ba-table-alert",title:n(t)("auth.group.Manage subordinate role groups here"),type:"info","show-icon":""},null,8,["title"])),n(e).table.remark?(i(),f(s,{key:1,class:"ba-table-alert",title:n(e).table.remark,type:"info","show-icon":""},null,8,["title"])):g("",!0),u(y,{buttons:["refresh","add","edit","delete","unfold","quickSearch","columnDisplay"],"quick-search-placeholder":n(t)("Quick search placeholder",{fields:n(t)("auth.group.GroupName")})},null,8,["quick-search-placeholder"]),u(x,{ref_key:"tableRef",ref:c,pagination:!1},null,512),u(v,{ref_key:"formRef",ref:d},null,512)])}}});export{M as default};
