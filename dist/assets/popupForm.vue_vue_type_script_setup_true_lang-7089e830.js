import{h as B,w as D,ar as I,r as N,q as s,X as d,o as i,O as m,P as r,_ as u,k as U,V as f,U as c,z as e,m as V,l as h,p,$ as W,a8 as b,a9 as y,W as K}from"./vue-7c431e9b.js";import{v as P}from"./index-764fcd0d.js";import{F as _}from"./index-4e8a24f3.js";import{b as v}from"./validate-6a14e75e.js";const R={class:"title"},M=B({__name:"popupForm",setup(T){const n=D(),t=I("baTable"),{t:l}=P(),w=N({content:[v({name:"editorRequired",title:l("todayinhistory.content")})],update_time:[v({name:"date",title:l("todayinhistory.update_time")})],create_time:[v({name:"date",title:l("todayinhistory.create_time")})]});return(q,o)=>{const C=s("el-form"),k=s("el-scrollbar"),g=s("el-button"),x=s("el-dialog"),S=d("drag"),z=d("zoom"),F=d("loading"),$=d("blur");return i(),m(x,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:r(()=>[u((i(),U("div",R,[f(c(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[S,[".ba-operate-dialog",".el-dialog__header"]],[z,".ba-operate-dialog"]])]),footer:r(()=>[V("div",{style:h("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[p(g,{onClick:o[7]||(o[7]=a=>e(t).toggleForm())},{default:r(()=>[f(c(e(l)("Cancel")),1)]),_:1}),u((i(),m(g,{loading:e(t).form.submitLoading,onClick:o[8]||(o[8]=a=>e(t).onSubmit(n.value)),type:"primary"},{default:r(()=>[f(c(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[$]])],4)]),default:r(()=>[u((i(),m(k,{class:"ba-table-form-scrollbar"},{default:r(()=>[V("div",{class:W(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:h("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?K("",!0):(i(),m(C,{key:0,ref_key:"formRef",ref:n,onSubmit:o[5]||(o[5]=b(()=>{},["prevent"])),onKeyup:o[6]||(o[6]=y(a=>e(t).onSubmit(n.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:w},{default:r(()=>[p(_,{label:e(l)("todayinhistory.title"),type:"string",modelValue:e(t).form.items.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).form.items.title=a),prop:"title",placeholder:e(l)("Please input field",{field:e(l)("todayinhistory.title")})},null,8,["label","modelValue","placeholder"]),p(_,{label:e(l)("todayinhistory.content"),type:"editor",modelValue:e(t).form.items.content,"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).form.items.content=a),prop:"content",onKeyup:[o[2]||(o[2]=y(b(()=>{},["stop"]),["enter"])),o[3]||(o[3]=y(b(a=>e(t).onSubmit(n.value),["ctrl"]),["enter"]))],placeholder:e(l)("Please input field",{field:e(l)("todayinhistory.content")})},null,8,["label","modelValue","placeholder"]),p(_,{label:e(l)("todayinhistory.picture"),type:"image",modelValue:e(t).form.items.picture,"onUpdate:modelValue":o[4]||(o[4]=a=>e(t).form.items.picture=a),prop:"picture"},null,8,["label","modelValue"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[F,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{M as _};
