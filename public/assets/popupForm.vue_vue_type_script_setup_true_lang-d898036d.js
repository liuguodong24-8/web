import{h as B,w as D,ar as I,r as N,q as m,X as s,o as i,O as d,P as r,_ as p,k as W,V as c,U as f,z as e,m as g,l as y,p as u,$ as K,aa as _,a8 as b,W as P}from"./vue-99362bf9.js";import{v as T}from"./index-a6f6b7ce.js";import{F as V}from"./index-4085c0db.js";import{b as w}from"./validate-e7ebbfab.js";const U={class:"title"},M=B({__name:"popupForm",setup(E){const n=D(),t=I("baTable"),{t:a}=T(),C=N({update_time:[w({name:"date",title:a("activity.update_time")})],create_time:[w({name:"date",title:a("activity.create_time")})]});return(R,o)=>{const k=m("el-form"),x=m("el-scrollbar"),v=m("el-button"),S=m("el-dialog"),h=s("drag"),z=s("zoom"),F=s("loading"),$=s("blur");return i(),d(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:r(()=>[p((i(),W("div",U,[c(f(e(t).form.operate?e(a)(e(t).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[z,".ba-operate-dialog"]])]),footer:r(()=>[g("div",{style:y("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[u(v,{onClick:o[6]||(o[6]=l=>e(t).toggleForm())},{default:r(()=>[c(f(e(a)("Cancel")),1)]),_:1}),p((i(),d(v,{loading:e(t).form.submitLoading,onClick:o[7]||(o[7]=l=>e(t).onSubmit(n.value)),type:"primary"},{default:r(()=>[c(f(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[$]])],4)]),default:r(()=>[p((i(),d(x,{class:"ba-table-form-scrollbar"},{default:r(()=>[g("div",{class:K(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:y("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?P("",!0):(i(),d(k,{key:0,ref_key:"formRef",ref:n,onSubmit:o[4]||(o[4]=_(()=>{},["prevent"])),onKeyup:o[5]||(o[5]=b(l=>e(t).onSubmit(n.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:C},{default:r(()=>[u(V,{label:e(a)("activity.act_name"),type:"string",modelValue:e(t).form.items.act_name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).form.items.act_name=l),prop:"act_name",placeholder:e(a)("Please input field",{field:e(a)("activity.act_name")})},null,8,["label","modelValue","placeholder"]),u(V,{label:e(a)("activity.act_cont"),type:"textarea",modelValue:e(t).form.items.act_cont,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).form.items.act_cont=l),prop:"act_cont","input-attr":{rows:3},onKeyup:[o[2]||(o[2]=b(_(()=>{},["stop"]),["enter"])),o[3]||(o[3]=b(_(l=>e(t).onSubmit(n.value),["ctrl"]),["enter"]))],placeholder:e(a)("Please input field",{field:e(a)("activity.act_cont")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[F,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
