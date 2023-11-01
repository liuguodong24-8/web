import{h as R,w as W,ar as $,r as x,q as y,X as g,o as s,O as u,P as n,_ as v,k as C,V as D,U as F,z as e,m as h,l as S,p,$ as E,a9 as K,Z as j,Y as A,W as O,a1 as X,a2 as Y}from"./vue-7c431e9b.js";import{v as Z,_ as G}from"./index-764fcd0d.js";import{F as d}from"./index-4e8a24f3.js";import{b}from"./validate-6a14e75e.js";import"./index-5273c60c.js";import"./index-4c4c8153.js";const w=_=>(X("data-v-c5a7f5b3"),_=_(),Y(),_),H={class:"title"},J=w(()=>h("hr",{class:"form-hr"},null,-1)),M=w(()=>h("hr",{class:"form-hr"},null,-1)),Q=R({__name:"popupForm",setup(_,{expose:U}){const V=W(),t=$("baTable"),{t:a}=Z(),r=x({dataFields:[]}),I=x({name:[b({name:"required",title:a("security.sensitiveData.Rule name")})],controller:[b({name:"required",trigger:"change",message:a("Please select field",{field:a("security.sensitiveData.controller")})})],data_table:[b({name:"required",trigger:"change",message:a("Please select field",{field:a("security.sensitiveData.data sheet")})})],primary_key:[b({name:"required",trigger:"change",title:a("security.sensitiveData.Data table primary key")})],data_fields:[b({name:"required",message:a("Please select field",{field:a("security.sensitiveData.Sensitive fields")})})]}),q=i=>{let l=[];for(const m in i){let f=!1;for(const c in r.dataFields)r.dataFields[c].name==i[m]&&(f=r.dataFields[c]);l[m]=f||{name:i[m],value:t.form.extend.fieldList[i[m]]??""}}r.dataFields=l};return U({getDataFields:()=>r.dataFields,setDataFields:i=>{r.dataFields=i}}),(i,l)=>{const m=y("el-form"),f=y("el-scrollbar"),c=y("el-button"),L=y("el-dialog"),T=g("drag"),z=g("zoom"),k=g("loading"),P=g("blur");return s(),u(L,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm},{header:n(()=>[v((s(),C("div",H,[D(F(e(t).form.operate?e(a)(e(t).form.operate):""),1)])),[[T,[".ba-operate-dialog",".el-dialog__header"]],[z,".ba-operate-dialog"]])]),footer:n(()=>[h("div",{style:S("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[p(c,{onClick:l[7]||(l[7]=o=>e(t).toggleForm(""))},{default:n(()=>[D(F(e(a)("Cancel")),1)]),_:1}),v((s(),u(c,{loading:e(t).form.submitLoading,onClick:l[8]||(l[8]=o=>e(t).onSubmit(V.value)),type:"primary"},{default:n(()=>[D(F(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[P]])],4)]),default:n(()=>[v((s(),u(f,{class:"ba-table-form-scrollbar"},{default:n(()=>[h("div",{class:E(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:S("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?O("",!0):(s(),u(m,{key:0,ref_key:"formRef",ref:V,onKeyup:l[6]||(l[6]=K(o=>e(t).onSubmit(V.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:I},{default:n(()=>[p(d,{label:e(a)("security.sensitiveData.Rule name"),type:"string",modelValue:e(t).form.items.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(t).form.items.name=o),prop:"name",placeholder:e(a)("security.sensitiveData.The rule name helps to identify the modified data later")},null,8,["label","modelValue","placeholder"]),p(d,{label:e(a)("security.sensitiveData.controller"),type:"select",modelValue:e(t).form.items.controller,"onUpdate:modelValue":l[1]||(l[1]=o=>e(t).form.items.controller=o),prop:"controller",data:{content:e(t).form.extend.controllerList},placeholder:e(a)("security.sensitiveData.The data listening mechanism will monitor the modification operations under this controller")},null,8,["label","modelValue","data","placeholder"]),p(d,{label:e(a)("security.sensitiveData.Corresponding data sheet"),type:"select",modelValue:e(t).form.items.data_table,"onUpdate:modelValue":l[2]||(l[2]=o=>e(t).form.items.data_table=o),prop:"data_table",data:{content:e(t).form.extend.tableList},"input-attr":{onChange:e(t).onTableChange}},null,8,["label","modelValue","data","input-attr"]),p(d,{label:e(a)("security.sensitiveData.Data table primary key"),type:"string",modelValue:e(t).form.items.primary_key,"onUpdate:modelValue":l[3]||(l[3]=o=>e(t).form.items.primary_key=o),prop:"primary_key"},null,8,["label","modelValue"]),J,v((s(),u(d,{label:e(a)("security.sensitiveData.Sensitive fields"),type:"selects",modelValue:e(t).form.items.data_fields,"onUpdate:modelValue":l[4]||(l[4]=o=>e(t).form.items.data_fields=o),key:e(t).form.extend.fieldSelectKey,prop:"data_fields",data:{content:e(t).form.extend.fieldSelect},"input-attr":{onChange:q}},null,8,["label","modelValue","data","input-attr"])),[[k,e(t).form.extend.fieldLoading]]),(s(!0),C(j,null,A(r.dataFields,(o,B)=>(s(),u(d,{key:B,label:o.name,type:"string",modelValue:o.value,"onUpdate:modelValue":N=>o.value=N,placeholder:e(a)("security.sensitiveData.Filling in field notes helps you quickly identify fields later")},null,8,["label","modelValue","onUpdate:modelValue","placeholder"]))),128)),M,p(d,{label:e(a)("State"),type:"radio",modelValue:e(t).form.items.status,"onUpdate:modelValue":l[5]||(l[5]=o=>e(t).form.items.status=o),prop:"status",data:{content:{0:e(a)("Disable"),1:e(a)("Enable")}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[k,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ne=G(Q,[["__scopeId","data-v-c5a7f5b3"]]);export{ne as default};
