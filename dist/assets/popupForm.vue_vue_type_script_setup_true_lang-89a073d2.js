import{h as z,w as F,au as U,r as B,q as m,X as d,o as i,O as f,P as r,_,k as D,V as c,U as b,z as e,m as g,l as w,p as n,$ as I,ac as N,a8 as P,W}from"./vue-9888607f.js";import{t as $}from"./index-d68ba36c.js";import{F as p}from"./index-d87f9e8e.js";import{b as s}from"./validate-905cfe5c.js";const T={class:"title"},L=z({__name:"popupForm",setup(E){const u=F(),o=U("baTable"),{t}=$(),y=B({type:[s({name:"required",title:t("software.type"),message:"请选择软件类别"})],version_code:[s({name:"required",title:t("software.version_code"),message:"请填写版本编码"}),s({name:"integer",title:t("software.version_code"),message:"请填写版本编码"})],version_name:[s({name:"required",title:t("software.version_name"),message:"请填写版本号"})],file_url:[s({name:"required",title:t("software.file_url"),message:"请上传软件包"})],create_time:[s({name:"date",title:t("software.create_time")})]});return(K,l)=>{const V=m("el-form"),C=m("el-scrollbar"),v=m("el-button"),h=m("el-dialog"),k=d("drag"),x=d("zoom"),S=d("loading"),q=d("blur");return i(),f(h,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:r(()=>[_((i(),D("div",T,[c(b(e(o).form.operate?e(t)(e(o).form.operate):""),1)])),[[k,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:r(()=>[g("div",{style:w("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[n(v,{onClick:l[6]||(l[6]=a=>e(o).toggleForm())},{default:r(()=>[c(b(e(t)("Cancel")),1)]),_:1}),_((i(),f(v,{loading:e(o).form.submitLoading,onClick:l[7]||(l[7]=a=>e(o).onSubmit(u.value)),type:"primary"},{default:r(()=>[c(b(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[q]])],4)]),default:r(()=>[_((i(),f(C,{class:"ba-table-form-scrollbar"},{default:r(()=>[g("div",{class:I(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:w("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?W("",!0):(i(),f(V,{key:0,ref_key:"formRef",ref:u,onSubmit:l[4]||(l[4]=N(()=>{},["prevent"])),onKeyup:l[5]||(l[5]=P(a=>e(o).onSubmit(u.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:y},{default:r(()=>[n(p,{label:e(t)("software.type"),type:"radio",modelValue:e(o).form.items.type,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).form.items.type=a),prop:"type",data:{content:{1:e(t)("software.type 1"),2:e(t)("software.type 2"),3:e(t)("software.type 3"),4:e(t)("software.type 4")}},placeholder:e(t)("Please select field",{field:e(t)("software.type")})},null,8,["label","modelValue","data","placeholder"]),n(p,{label:e(t)("software.version_code"),type:"number",prop:"version_code","input-attr":{step:1},modelValue:e(o).form.items.version_code,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).form.items.version_code=a),modelModifiers:{number:!0},placeholder:e(t)("Please input field",{field:e(t)("software.version_code")})},null,8,["label","modelValue","placeholder"]),n(p,{label:e(t)("software.version_name"),type:"string",modelValue:e(o).form.items.version_name,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).form.items.version_name=a),prop:"version_name",placeholder:e(t)("Please input field",{field:e(t)("software.version_name")})},null,8,["label","modelValue","placeholder"]),n(p,{label:e(t)("software.file_url"),type:"file",modelValue:e(o).form.items.file_url,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).form.items.file_url=a),prop:"file_url"},null,8,["label","modelValue"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[S,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{L as _};
