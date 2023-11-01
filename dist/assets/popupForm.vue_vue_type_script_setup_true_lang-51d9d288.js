import{h as z,w as F,ar as B,r as D,q as s,X as n,o as i,O as m,P as r,_ as p,k as I,V as u,U as _,z as e,m as v,l as g,p as d,$ as N,aa as U,a8 as W,W as $}from"./vue-99362bf9.js";import{v as P}from"./index-a6f6b7ce.js";import{F as c}from"./index-4085c0db.js";import{b as T}from"./validate-e7ebbfab.js";const E={class:"title"},M=z({__name:"popupForm",setup(K){const f=F(),o=B("baTable"),{t:a}=P(),w=D({create_time:[T({name:"date",title:a("software.create_time")})]});return(R,l)=>{const V=s("el-form"),y=s("el-scrollbar"),b=s("el-button"),C=s("el-dialog"),h=n("drag"),k=n("zoom"),x=n("loading"),S=n("blur");return i(),m(C,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:r(()=>[p((i(),I("div",E,[u(_(e(o).form.operate?e(a)(e(o).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[k,".ba-operate-dialog"]])]),footer:r(()=>[v("div",{style:g("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[d(b,{onClick:l[5]||(l[5]=t=>e(o).toggleForm())},{default:r(()=>[u(_(e(a)("Cancel")),1)]),_:1}),p((i(),m(b,{loading:e(o).form.submitLoading,onClick:l[6]||(l[6]=t=>e(o).onSubmit(f.value)),type:"primary"},{default:r(()=>[u(_(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[S]])],4)]),default:r(()=>[p((i(),m(y,{class:"ba-table-form-scrollbar"},{default:r(()=>[v("div",{class:N(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:g("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?$("",!0):(i(),m(V,{key:0,ref_key:"formRef",ref:f,onSubmit:l[3]||(l[3]=U(()=>{},["prevent"])),onKeyup:l[4]||(l[4]=W(t=>e(o).onSubmit(f.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:w},{default:r(()=>[d(c,{label:e(a)("software.version_code"),type:"string",modelValue:e(o).form.items.version_code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(o).form.items.version_code=t),prop:"version_code",placeholder:e(a)("Please input field",{field:e(a)("software.version_code")})},null,8,["label","modelValue","placeholder"]),d(c,{label:e(a)("software.version_name"),type:"string",modelValue:e(o).form.items.version_name,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).form.items.version_name=t),prop:"version_name",placeholder:e(a)("Please input field",{field:e(a)("software.version_name")})},null,8,["label","modelValue","placeholder"]),d(c,{label:e(a)("software.file_url"),type:"file",modelValue:e(o).form.items.file_url,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).form.items.file_url=t),prop:"file_url"},null,8,["label","modelValue"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[x,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
