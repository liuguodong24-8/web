import{h as z,w as F,au as B,r as I,q as i,X as n,o as r,O as s,P as d,_ as f,k as N,V as u,U as _,z as e,m as g,l as v,p as m,$ as P,ac as U,a8 as W,W as $}from"./vue-9888607f.js";import{t as D}from"./index-a32a01c5.js";import{F as c}from"./index-7c3dd670.js";const T={class:"title"},A=z({__name:"popupForm",setup(E){const p=F(),l=B("baTable"),{t:a}=D(),V=I({});return(K,o)=>{const y=i("el-form"),h=i("el-scrollbar"),b=i("el-button"),w=i("el-dialog"),C=n("drag"),k=n("zoom"),x=n("loading"),S=n("blur");return r(),s(w,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:d(()=>[f((r(),N("div",T,[u(_(e(l).form.operate?e(a)(e(l).form.operate):""),1)])),[[C,[".ba-operate-dialog",".el-dialog__header"]],[k,".ba-operate-dialog"]])]),footer:d(()=>[g("div",{style:v("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[m(b,{onClick:o[5]||(o[5]=t=>e(l).toggleForm())},{default:d(()=>[u(_(e(a)("Cancel")),1)]),_:1}),f((r(),s(b,{loading:e(l).form.submitLoading,onClick:o[6]||(o[6]=t=>e(l).onSubmit(p.value)),type:"primary"},{default:d(()=>[u(_(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[S]])],4)]),default:d(()=>[f((r(),s(h,{class:"ba-table-form-scrollbar"},{default:d(()=>[g("div",{class:P(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:v("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?$("",!0):(r(),s(y,{key:0,ref_key:"formRef",ref:p,onSubmit:o[3]||(o[3]=U(()=>{},["prevent"])),onKeyup:o[4]||(o[4]=W(t=>e(l).onSubmit(p.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:V},{default:d(()=>[m(c,{label:e(a)("addltn.addr"),type:"string",modelValue:e(l).form.items.addr,"onUpdate:modelValue":o[0]||(o[0]=t=>e(l).form.items.addr=t),prop:"addr",placeholder:e(a)("Please input field",{field:e(a)("addltn.addr")})},null,8,["label","modelValue","placeholder"]),m(c,{label:e(a)("addltn.addr_ltn"),type:"string",modelValue:e(l).form.items.addr_ltn,"onUpdate:modelValue":o[1]||(o[1]=t=>e(l).form.items.addr_ltn=t),prop:"addr_ltn",placeholder:e(a)("Please input field",{field:e(a)("addltn.addr_ltn")})},null,8,["label","modelValue","placeholder"]),m(c,{label:e(a)("addltn.add_id"),type:"string",modelValue:e(l).form.items.add_id,"onUpdate:modelValue":o[2]||(o[2]=t=>e(l).form.items.add_id=t),prop:"add_id",placeholder:e(a)("Please input field",{field:e(a)("addltn.add_id")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[x,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};