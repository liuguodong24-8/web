import{h as B,w as D,ar as I,r as N,q as n,X as i,o as s,O as d,P as r,_ as p,k as W,V as f,U as u,z as e,m as v,l as y,p as _,$ as K,aa as c,a8 as b,W as P}from"./vue-99362bf9.js";import{v as T}from"./index-a6f6b7ce.js";import{F as V}from"./index-4085c0db.js";import{b as w}from"./validate-e7ebbfab.js";const U={class:"title"},M=B({__name:"popupForm",setup(E){const m=D(),t=I("baTable"),{t:a}=T(),C=N({update_time:[w({name:"date",title:a("message.update_time")})],create_time:[w({name:"date",title:a("message.create_time")})]});return(R,o)=>{const k=n("el-form"),x=n("el-scrollbar"),g=n("el-button"),S=n("el-dialog"),h=i("drag"),z=i("zoom"),F=i("loading"),$=i("blur");return s(),d(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:r(()=>[p((s(),W("div",U,[f(u(e(t).form.operate?e(a)(e(t).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[z,".ba-operate-dialog"]])]),footer:r(()=>[v("div",{style:y("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[_(g,{onClick:o[6]||(o[6]=l=>e(t).toggleForm())},{default:r(()=>[f(u(e(a)("Cancel")),1)]),_:1}),p((s(),d(g,{loading:e(t).form.submitLoading,onClick:o[7]||(o[7]=l=>e(t).onSubmit(m.value)),type:"primary"},{default:r(()=>[f(u(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[$]])],4)]),default:r(()=>[p((s(),d(x,{class:"ba-table-form-scrollbar"},{default:r(()=>[v("div",{class:K(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:y("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?P("",!0):(s(),d(k,{key:0,ref_key:"formRef",ref:m,onSubmit:o[4]||(o[4]=c(()=>{},["prevent"])),onKeyup:o[5]||(o[5]=b(l=>e(t).onSubmit(m.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:C},{default:r(()=>[_(V,{label:e(a)("message.mes_important"),type:"radio",modelValue:e(t).form.items.mes_important,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).form.items.mes_important=l),prop:"mes_important",data:{content:{0:e(a)("message.mes_important 0"),1:e(a)("message.mes_important 1")}},placeholder:e(a)("Please select field",{field:e(a)("message.mes_important")})},null,8,["label","modelValue","data","placeholder"]),_(V,{label:e(a)("message.mes_content"),type:"textarea",modelValue:e(t).form.items.mes_content,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).form.items.mes_content=l),prop:"mes_content","input-attr":{rows:3},onKeyup:[o[2]||(o[2]=b(c(()=>{},["stop"]),["enter"])),o[3]||(o[3]=b(c(l=>e(t).onSubmit(m.value),["ctrl"]),["enter"]))],placeholder:e(a)("Please input field",{field:e(a)("message.mes_content")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[F,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
