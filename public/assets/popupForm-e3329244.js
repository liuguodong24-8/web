import{h as $,w as C,ar as j,r as x,F as q,q as i,X as p,o as f,O as c,P as r,_ as g,k as A,V as h,U as v,z as e,m as w,l as K,p as u,$ as G,aa as L,a8 as T}from"./vue-99362bf9.js";import{c as W,v as H,t as R,_ as M}from"./index-a6f6b7ce.js";import{F as O}from"./index-4085c0db.js";import{b as X}from"./validate-e7ebbfab.js";import"./index-165813b5.js";import"./index-e9f3c4e4.js";function J(){return W({url:"/admin/user.Rule/index",method:"get"})}const Q={class:"title"},Y=$({__name:"popupForm",setup(Z,{expose:V}){const _=C(),b=C(),t=j("baTable"),{t:l}=H(),a=x({treeKey:R(),defaultCheckedKeys:[],menuRules:[]}),F=x({name:[X({name:"required",title:l("user.group.Group name")})],auth:[{required:!0,validator:(s,o,n)=>y().length<=0?n(new Error(l("Please select field",{field:l("user.group.jurisdiction")}))):n()}]});J().then(s=>{a.menuRules=s.data.list});const y=()=>b.value.getCheckedKeys().concat(b.value.getHalfCheckedKeys()),S=(s,o)=>{if(o.isLeaf)return"";let n=!0;for(const m in o.childNodes)o.childNodes[m].isLeaf||(n=!1);return n?"penultimate-node":""};return V({getCheckeds:y}),q(()=>t.form.items.rules,()=>{if(t.form.items.rules&&t.form.items.rules.length)if(t.form.items.rules.includes("*")){let s=[];for(const o in a.menuRules)s.push(a.menuRules[o].id);a.defaultCheckedKeys=s}else a.defaultCheckedKeys=t.form.items.rules;else a.defaultCheckedKeys=[];a.treeKey=R()}),(s,o)=>{const n=i("el-input"),m=i("el-form-item"),N=i("el-tree"),z=i("el-form"),D=i("el-scrollbar"),k=i("el-button"),I=i("el-dialog"),B=p("drag"),E=p("zoom"),P=p("loading"),U=p("blur");return f(),c(I,{class:"ba-operate-dialog",top:"10vh","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,"destroy-on-close":!0},{header:r(()=>[g((f(),A("div",Q,[h(v(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[B,[".ba-operate-dialog",".el-dialog__header"]],[E,".ba-operate-dialog"]])]),footer:r(()=>[w("div",{style:K("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[u(k,{onClick:o[4]||(o[4]=d=>e(t).toggleForm(""))},{default:r(()=>[h(v(e(l)("Cancel")),1)]),_:1}),g((f(),c(k,{loading:e(t).form.submitLoading,onClick:o[5]||(o[5]=d=>e(t).onSubmit(_.value)),type:"primary"},{default:r(()=>[h(v(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:r(()=>[g((f(),c(D,{class:"ba-table-form-scrollbar"},{default:r(()=>[w("div",{class:G(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:K("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[u(z,{ref_key:"formRef",ref:_,onSubmit:o[2]||(o[2]=L(()=>{},["prevent"])),onKeyup:o[3]||(o[3]=T(d=>e(t).onSubmit(_.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:F},{default:r(()=>[u(m,{prop:"name",label:e(l)("user.group.Group name")},{default:r(()=>[u(n,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[0]||(o[0]=d=>e(t).form.items.name=d),type:"string",placeholder:e(l)("Please input field",{field:e(l)("user.group.Group name")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(m,{prop:"auth",label:e(l)("user.group.jurisdiction")},{default:r(()=>[(f(),c(N,{ref_key:"treeRef",ref:b,key:a.treeKey,"default-checked-keys":a.defaultCheckedKeys,"default-expand-all":!0,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title",class:S},data:a.menuRules},null,8,["default-checked-keys","props","data"]))]),_:1},8,["label"]),u(O,{label:e(l)("State"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[1]||(o[1]=d=>e(t).form.items.status=d),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"])],6)]),_:1})),[[P,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const se=M(Y,[["__scopeId","data-v-2558b86a"]]);export{se as default};
