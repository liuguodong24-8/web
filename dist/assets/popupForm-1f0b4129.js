import{h as D,w as E,ar as $,r as B,F as N,q as d,X as b,o as s,O as p,P as m,_ as c,k as T,V as _,U as V,z as e,m as w,l as P,p as r,$ as W,a8 as h,aa as k,W as K}from"./vue-99362bf9.js";import{q as R,v as j,_ as G}from"./index-a6f6b7ce.js";import{b as u,r as L}from"./validate-e7ebbfab.js";import{F as i}from"./index-4085c0db.js";import"./index-165813b5.js";import"./index-e9f3c4e4.js";const M={class:"title"},O=D({__name:"popupForm",setup(X){const x=R(),f=E(),a=$("baTable"),{t:l}=j(),v=B({username:[u({name:"required",title:l("auth.admin.username")}),u({name:"account"})],nickname:[u({name:"required",title:l("auth.admin.nickname")})],group_arr:[u({name:"required",message:l("Please select field",{field:l("auth.admin.grouping")})})],email:[u({name:"email",message:l("Please enter the correct field",{field:l("auth.admin.mailbox")})})],mobile:[u({name:"mobile",message:l("Please enter the correct field",{field:l("auth.admin.mobile")})})],password:[{validator:(g,o,n)=>{if(a.form.operate=="Add"){if(!o)return n(new Error(l("Please input field",{field:l("auth.admin.Password")})))}else if(!o)return n();return L(o)?n():n(new Error(l("validate.Please enter the correct password")))},trigger:"blur"}]});return N(()=>a.form.operate,g=>{v.password[0].required=g=="Add"}),(g,o)=>{const n=d("el-input"),C=d("el-form-item"),U=d("el-form"),S=d("el-scrollbar"),y=d("el-button"),A=d("el-dialog"),F=b("drag"),I=b("zoom"),q=b("loading"),z=b("blur");return s(),p(A,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(a).form.operate),onClose:e(a).toggleForm,"destroy-on-close":!0},{header:m(()=>[c((s(),T("div",M,[_(V(e(a).form.operate?e(l)(e(a).form.operate):""),1)])),[[F,[".ba-operate-dialog",".el-dialog__header"]],[I,".ba-operate-dialog"]])]),footer:m(()=>[w("div",{style:P("width: calc(100% - "+e(a).form.labelWidth/1.8+"px)")},[r(y,{onClick:o[12]||(o[12]=t=>e(a).toggleForm(""))},{default:m(()=>[_(V(e(l)("Cancel")),1)]),_:1}),c((s(),p(y,{loading:e(a).form.submitLoading,onClick:o[13]||(o[13]=t=>e(a).onSubmit(f.value)),type:"primary"},{default:m(()=>[_(V(e(a).form.operateIds&&e(a).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:m(()=>[c((s(),p(S,{class:"ba-table-form-scrollbar"},{default:m(()=>[w("div",{class:W(["ba-operate-form","ba-"+e(a).form.operate+"-form"]),style:P("width: calc(100% - "+e(a).form.labelWidth/2+"px)")},[e(a).form.loading?K("",!0):(s(),p(U,{key:0,ref_key:"formRef",ref:f,onKeyup:o[11]||(o[11]=h(t=>e(a).onSubmit(f.value),["enter"])),model:e(a).form.items,"label-position":"right","label-width":e(a).form.labelWidth+"px",rules:v},{default:m(()=>[r(i,{label:e(l)("auth.admin.username"),modelValue:e(a).form.items.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e(a).form.items.username=t),type:"string",prop:"username",placeholder:e(l)("auth.admin.Administrator login")},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.nickname"),modelValue:e(a).form.items.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).form.items.nickname=t),type:"string",prop:"nickname",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.nickname")})},null,8,["label","modelValue","placeholder"]),(s(),p(i,{label:e(l)("auth.admin.grouping"),modelValue:e(a).form.items.group_arr,"onUpdate:modelValue":o[2]||(o[2]=t=>e(a).form.items.group_arr=t),prop:"group_arr",type:"remoteSelect",key:"group-"+e(a).form.items.id,"input-attr":{multiple:!0,params:{isTree:!0,absoluteAuth:e(x).id==e(a).form.items.id?0:1},field:"name","remote-url":"/admin/auth.Group/index",placeholder:e(l)("Click select")}},null,8,["label","modelValue","input-attr"])),r(i,{label:e(l)("auth.admin.head portrait"),type:"image",modelValue:e(a).form.items.avatar,"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).form.items.avatar=t)},null,8,["label","modelValue"]),r(i,{label:e(l)("auth.admin.mailbox"),prop:"email",modelValue:e(a).form.items.email,"onUpdate:modelValue":o[4]||(o[4]=t=>e(a).form.items.email=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mailbox")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.mobile"),prop:"mobile",modelValue:e(a).form.items.mobile,"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).form.items.mobile=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mobile")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.Password"),prop:"password",modelValue:e(a).form.items.password,"onUpdate:modelValue":o[6]||(o[6]=t=>e(a).form.items.password=t),type:"password",placeholder:e(a).form.operate=="Add"?e(l)("Please input field",{field:e(l)("auth.admin.Password")}):e(l)("auth.admin.Please leave blank if not modified")},null,8,["label","modelValue","placeholder"]),r(C,{prop:"motto",label:e(l)("auth.admin.Personal signature")},{default:m(()=>[r(n,{onKeyup:[o[7]||(o[7]=h(k(()=>{},["stop"]),["enter"])),o[8]||(o[8]=h(k(t=>e(a).onSubmit(f.value),["ctrl"]),["enter"]))],modelValue:e(a).form.items.motto,"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).form.items.motto=t),type:"textarea",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(i,{label:e(l)("State"),modelValue:e(a).form.items.status,"onUpdate:modelValue":o[10]||(o[10]=t=>e(a).form.items.status=t),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[q,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ae=G(O,[["__scopeId","data-v-89858466"]]);export{ae as default};
