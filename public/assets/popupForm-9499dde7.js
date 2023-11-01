import{h as B,w as C,ar as W,r as x,F as $,q as d,X as c,o as u,O as f,P as s,_ as h,k as j,V as b,U as y,z as e,m as V,l as w,p as m,$ as q,a8 as G,W as L}from"./vue-99362bf9.js";import{c as H,v as O,t as K,_ as X}from"./index-a6f6b7ce.js";import{F as R}from"./index-4085c0db.js";import{b as J}from"./validate-e7ebbfab.js";import"./index-165813b5.js";import"./index-e9f3c4e4.js";function M(){return H({url:"/admin/auth.Rule/index",method:"get"})}const Q={class:"title"},Y=B({__name:"popupForm",setup(Z,{expose:F}){const _=C(),g=C(),t=W("baTable"),{t:l}=O(),a=x({treeKey:K(),defaultCheckedKeys:[],menuRules:[]}),S=x({name:[J({name:"required",title:l("auth.group.Group name")})],auth:[{required:!0,validator:(n,o,r)=>v().length<=0?r(new Error(l("Please select field",{field:l("auth.group.jurisdiction")}))):r()}],pid:[{validator:(n,o,r)=>o&&parseInt(o)==parseInt(t.form.items.id)?r(new Error(l("auth.group.The parent group cannot be the group itself"))):r(),trigger:"blur"}]});M().then(n=>{a.menuRules=n.data.list});const v=()=>g.value.getCheckedKeys().concat(g.value.getHalfCheckedKeys()),I=(n,o)=>{if(o.isLeaf)return"";let r=!0;for(const p in o.childNodes)o.childNodes[p].isLeaf||(r=!1);return r?"penultimate-node":""};return F({getCheckeds:v}),$(()=>t.form.items.rules,()=>{if(t.form.items.rules&&t.form.items.rules.length)if(t.form.items.rules.includes("*")){let n=[];for(const o in a.menuRules)n.push(a.menuRules[o].id);a.defaultCheckedKeys=n}else a.defaultCheckedKeys=t.form.items.rules;else a.defaultCheckedKeys=[];a.treeKey=K()}),(n,o)=>{const r=d("el-input"),p=d("el-form-item"),N=d("el-tree"),z=d("el-form"),D=d("el-scrollbar"),k=d("el-button"),E=d("el-dialog"),P=c("drag"),T=c("zoom"),U=c("loading"),A=c("blur");return u(),f(E,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,"destroy-on-close":!0},{header:s(()=>[h((u(),j("div",Q,[b(y(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[P,[".ba-operate-dialog",".el-dialog__header"]],[T,".ba-operate-dialog"]])]),footer:s(()=>[V("div",{style:w("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[m(k,{onClick:o[4]||(o[4]=i=>e(t).toggleForm(""))},{default:s(()=>[b(y(e(l)("Cancel")),1)]),_:1}),h((u(),f(k,{loading:e(t).form.submitLoading,onClick:o[5]||(o[5]=i=>e(t).onSubmit(_.value)),type:"primary"},{default:s(()=>[b(y(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[A]])],4)]),default:s(()=>[h((u(),f(D,{class:"ba-table-form-scrollbar"},{default:s(()=>[V("div",{class:q(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:w("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?L("",!0):(u(),f(z,{key:0,ref_key:"formRef",ref:_,onKeyup:o[3]||(o[3]=G(i=>e(t).onSubmit(_.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:S},{default:s(()=>[m(R,{label:e(l)("auth.group.Parent group"),modelValue:e(t).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).form.items.pid=i),type:"remoteSelect",prop:"pid","input-attr":{params:{isTree:!0},field:"name","remote-url":e(t).api.actionUrl.get("index"),placeholder:e(l)("Click select")}},null,8,["label","modelValue","input-attr"]),m(p,{prop:"name",label:e(l)("auth.group.Group name")},{default:s(()=>[m(r,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).form.items.name=i),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.group.Group name")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),m(p,{prop:"auth",label:e(l)("auth.group.jurisdiction")},{default:s(()=>[(u(),f(N,{ref_key:"treeRef",ref:g,key:a.treeKey,"default-checked-keys":a.defaultCheckedKeys,"default-expand-all":!0,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title",class:I},data:a.menuRules},null,8,["default-checked-keys","props","data"]))]),_:1},8,["label"]),m(R,{label:e(l)("State"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[2]||(o[2]=i=>e(t).form.items.status=i),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[U,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const se=X(Y,[["__scopeId","data-v-700a7135"]]);export{se as default};
