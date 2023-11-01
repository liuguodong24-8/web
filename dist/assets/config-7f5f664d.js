import{h as F,r as I,q as c,X as S,o as d,k as f,p as n,P as i,z as t,a8 as h,_ as p,O as A,V as U,U as q,i as x,Z as O,Y as P,W as M}from"./vue-9888607f.js";import{g as K,t as G,_ as T}from"./index-d68ba36c.js";import{F as m}from"./index-d87f9e8e.js";import"./index-4f33ef6e.js";import"./index-5b09613c.js";function N(g){return K({url:"/admin/sms.Config/getConfigKey",method:"get",params:{name:g}})}function B(g,a,u=""){return K({url:"/admin/sms.Config/saveConfig",method:"post",params:{type:g,name:u},data:a},{showSuccessMessage:!0})}const k={class:"default-main"},z=F({__name:"config",setup(g){const{t:a,te:u}=G(),e=I({collapseActiveName:["base","gateway"],base:{loading:!1,timeout:0,strategy:"",gateways:[]},gateway:{name:"",loading:!1,submitLoading:!1},gatewayConfig:{}}),y=()=>{e.base.loading=!0,B("base",e.base).finally(()=>{e.base.loading=!1})},b=()=>{e.gateway.submitLoading=!0,B("gateway",e.gatewayConfig,e.gateway.name).finally(()=>{e.gateway.submitLoading=!1})},L=()=>{e.gateway.loading=!0,N(e.gateway.name).then(r=>{e.gatewayConfig=r.data.config}).finally(()=>{e.gateway.loading=!1})},w={aliyun:a("sms.config.aliyun"),qcloud:a("sms.config.qcloud"),qiniu:a("sms.config.qiniu"),yunpian:a("sms.config.yunpian")};return(()=>{e.base.loading=!0,N("base").then(r=>{e.base.timeout=r.data.timeout,e.base.gateways=r.data.gateways,e.base.strategy=r.data.strategy=="Overtrue\\EasySms\\Strategies\\OrderStrategy"?"order":"random"}).finally(()=>{e.base.loading=!1})})(),(r,o)=>{const v=c("el-button"),_=c("el-form"),C=c("el-collapse-item"),$=c("el-collapse"),V=S("blur"),D=S("loading");return d(),f("div",k,[n($,{class:"collapse",modelValue:e.collapseActiveName,"onUpdate:modelValue":o[8]||(o[8]=l=>e.collapseActiveName=l)},{default:i(()=>[n(C,{class:"collapse-item",title:t(a)("sms.config.Basic SMS configuration"),name:"base"},{default:i(()=>[n(_,{onKeyup:o[4]||(o[4]=h(l=>y(),["enter"])),model:e.base,"label-position":"top","label-width":200},{default:i(()=>[n(m,{type:"number",label:t(a)("sms.config.Send timeout (seconds)"),modelValue:e.base.timeout,"onUpdate:modelValue":o[0]||(o[0]=l=>e.base.timeout=l),modelModifiers:{number:!0}},null,8,["label","modelValue"]),n(m,{type:"radio",label:t(a)("sms.config.Send Policy"),modelValue:e.base.strategy,"onUpdate:modelValue":o[1]||(o[1]=l=>e.base.strategy=l),modelModifiers:{number:!0},data:{content:{order:t(a)("sms.config.Sequential service provider sends"),random:t(a)("sms.config.Sent with the service provider")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"]),n(m,{type:"selects",label:t(a)("sms.config.Available service providers"),modelValue:e.base.gateways,"onUpdate:modelValue":o[2]||(o[2]=l=>e.base.gateways=l),modelModifiers:{number:!0},placeholder:t(a)("sms.config.The selected service provider needs to configure information at the bottom of this page (required)"),data:{content:w,childrenAttr:{border:!0}}},null,8,["label","modelValue","placeholder","data"]),p((d(),A(v,{loading:e.base.loading,onClick:o[3]||(o[3]=l=>y()),type:"primary"},{default:i(()=>[U(q(t(a)("Save")),1)]),_:1},8,["loading"])),[[V]])]),_:1},8,["model"])]),_:1},8,["title"]),n(C,{class:"collapse-item",title:t(a)("sms.config.Service Provider Configuration"),name:"gateway"},{default:i(()=>[n(_,{onKeyup:o[7]||(o[7]=h(l=>b(),["enter"])),model:e.gatewayConfig,"label-position":"top","label-width":200},{default:i(()=>[n(m,{type:"select",label:t(a)("sms.config.Service provider"),modelValue:e.gateway.name,"onUpdate:modelValue":o[5]||(o[5]=l=>e.gateway.name=l),modelModifiers:{number:!0},placeholder:t(a)("sms.config.Select a service provider to start configuration"),data:{content:w,childrenAttr:{border:!0}},"input-attr":{onChange:L}},null,8,["label","modelValue","placeholder","data","input-attr"]),p((d(),f("div",null,[!t(x)(e.gatewayConfig)&&!e.gateway.loading?(d(!0),f(O,{key:0},P(e.gatewayConfig,(l,s)=>(d(),f("div",{key:s},[n(m,{type:"string",label:t(u)("sms.config."+e.gateway.name+"/"+s)?t(a)("sms.config."+e.gateway.name+"/"+s):t(a)("sms.config.common/"+s),modelValue:e.gatewayConfig[s],"onUpdate:modelValue":E=>e.gatewayConfig[s]=E,placeholder:t(u)("sms.config."+e.gateway.name+"/placeholder/"+s)?t(a)("sms.config."+e.gateway.name+"/placeholder/"+s):""},null,8,["label","modelValue","onUpdate:modelValue","placeholder"])]))),128)):M("",!0)])),[[D,e.gateway.loading]]),t(x)(e.gatewayConfig)?M("",!0):p((d(),A(v,{key:0,loading:e.gateway.submitLoading,onClick:o[6]||(o[6]=l=>b()),type:"primary"},{default:i(()=>[U(q(t(a)("Save")),1)]),_:1},8,["loading"])),[[V]])]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["modelValue"])])}}});const J=T(z,[["__scopeId","data-v-bafe28a2"]]);export{J as default};
