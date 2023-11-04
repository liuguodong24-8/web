import{h as F,w as P,au as U,r as B,q as n,X as m,o as i,O as s,P as d,_,k as D,V as f,U as u,z as e,m as h,l as g,p as r,$ as I,ac as N,a8 as W,W as $}from"./vue-5df46ab8.js";import{t as A}from"./index-ff2ea991.js";import{F as p}from"./index-4fdfed13.js";import{b as v}from"./validate-358b5494.js";const T={class:"title"},M=F({__name:"popupForm",setup(E){const c=P(),l=U("baTable"),{t}=A(),V=B({update_time:[v({name:"date",title:t("teacherbind.update_time")})],create_time:[v({name:"date",title:t("teacherbind.create_time")})]});return(K,a)=>{const y=n("el-form"),k=n("el-scrollbar"),b=n("el-button"),w=n("el-dialog"),x=m("drag"),C=m("zoom"),S=m("loading"),z=m("blur");return i(),s(w,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:d(()=>[_((i(),D("div",T,[f(u(e(l).form.operate?e(t)(e(l).form.operate):""),1)])),[[x,[".ba-operate-dialog",".el-dialog__header"]],[C,".ba-operate-dialog"]])]),footer:d(()=>[h("div",{style:g("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(b,{onClick:a[6]||(a[6]=o=>e(l).toggleForm())},{default:d(()=>[f(u(e(t)("Cancel")),1)]),_:1}),_((i(),s(b,{loading:e(l).form.submitLoading,onClick:a[7]||(a[7]=o=>e(l).onSubmit(c.value)),type:"primary"},{default:d(()=>[f(u(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:d(()=>[_((i(),s(k,{class:"ba-table-form-scrollbar"},{default:d(()=>[h("div",{class:I(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:g("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?$("",!0):(i(),s(y,{key:0,ref_key:"formRef",ref:c,onSubmit:a[4]||(a[4]=N(()=>{},["prevent"])),onKeyup:a[5]||(a[5]=W(o=>e(l).onSubmit(c.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:V},{default:d(()=>[r(p,{label:e(t)("teacherbind.admin_id"),type:"remoteSelect",modelValue:e(l).form.items.admin_id,"onUpdate:modelValue":a[0]||(a[0]=o=>e(l).form.items.admin_id=o),prop:"admin_id","input-attr":{pk:"sccd_admin.id",field:"nickname","remote-url":"/admin/auth.Admin/index"},placeholder:e(t)("Please select field",{field:e(t)("teacherbind.admin_id")})},null,8,["label","modelValue","input-attr","placeholder"]),r(p,{label:e(t)("teacherbind.addltn_id"),type:"remoteSelect",modelValue:e(l).form.items.addltn_id,"onUpdate:modelValue":a[1]||(a[1]=o=>e(l).form.items.addltn_id=o),prop:"addltn_id","input-attr":{pk:"sccd_addltn.id",field:"addr","remote-url":"/admin/Addltn/index"},placeholder:e(t)("Please select field",{field:e(t)("teacherbind.addltn_id")})},null,8,["label","modelValue","input-attr","placeholder"]),r(p,{label:e(t)("teacherbind.bind_class"),type:"string",modelValue:e(l).form.items.bind_class,"onUpdate:modelValue":a[2]||(a[2]=o=>e(l).form.items.bind_class=o),prop:"bind_class",placeholder:e(t)("Please input field",{field:e(t)("teacherbind.bind_class")})},null,8,["label","modelValue","placeholder"]),r(p,{label:e(t)("teacherbind.teacher_id_card_no"),type:"string",modelValue:e(l).form.items.teacher_id_card_no,"onUpdate:modelValue":a[3]||(a[3]=o=>e(l).form.items.teacher_id_card_no=o),prop:"teacher_id_card_no",placeholder:e(t)("Please input field",{field:e(t)("teacherbind.teacher_id_card_no")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[S,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};