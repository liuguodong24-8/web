import{h as F,w as B,au as D,r as I,q as s,X as d,o as i,O as m,P as l,_ as p,k as N,V as f,U as c,z as e,m as b,l as g,p as _,$ as W,ac as $,a8 as P,W as T}from"./vue-9888607f.js";import{t as U}from"./index-d68ba36c.js";import{F as v}from"./index-d87f9e8e.js";import{b as h}from"./validate-905cfe5c.js";const E={class:"title"},M=F({__name:"popupForm",setup(K){const n=B(),o=D("baTable"),{t:a}=U(),y=I({update_time:[h({name:"date",title:a("period.update_time")})],create_time:[h({name:"date",title:a("period.create_time")})]});return(R,t)=>{const V=s("el-form"),w=s("el-scrollbar"),u=s("el-button"),C=s("el-dialog"),k=d("drag"),x=d("zoom"),S=d("loading"),z=d("blur");return i(),m(C,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:l(()=>[p((i(),N("div",E,[f(c(e(o).form.operate?e(a)(e(o).form.operate):""),1)])),[[k,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:l(()=>[b("div",{style:g("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[_(u,{onClick:t[4]||(t[4]=r=>e(o).toggleForm())},{default:l(()=>[f(c(e(a)("Cancel")),1)]),_:1}),p((i(),m(u,{loading:e(o).form.submitLoading,onClick:t[5]||(t[5]=r=>e(o).onSubmit(n.value)),type:"primary"},{default:l(()=>[f(c(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:l(()=>[p((i(),m(w,{class:"ba-table-form-scrollbar"},{default:l(()=>[b("div",{class:W(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:g("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?T("",!0):(i(),m(V,{key:0,ref_key:"formRef",ref:n,onSubmit:t[2]||(t[2]=$(()=>{},["prevent"])),onKeyup:t[3]||(t[3]=P(r=>e(o).onSubmit(n.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:y},{default:l(()=>[_(v,{label:e(a)("period.phase_code"),type:"string",modelValue:e(o).form.items.phase_code,"onUpdate:modelValue":t[0]||(t[0]=r=>e(o).form.items.phase_code=r),prop:"phase_code",placeholder:e(a)("Please input field",{field:e(a)("period.phase_code")})},null,8,["label","modelValue","placeholder"]),_(v,{label:e(a)("period.phase_name"),type:"string",modelValue:e(o).form.items.phase_name,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).form.items.phase_name=r),prop:"phase_name",placeholder:e(a)("Please input field",{field:e(a)("period.phase_name")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[S,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
