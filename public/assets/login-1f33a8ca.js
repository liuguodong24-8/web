import{o as f,k as P,h as ie,N as ne,a0 as se,w as B,r as z,E as de,ac as ue,q as s,p as a,P as t,z as l,a8 as W,O as v,V as p,U as c,W as h,m as A,a1 as ce,a2 as me}from"./vue-99362bf9.js";import{H as fe,F as pe}from"./footer-bac1cb4f.js";import{_ as H,v as ge,b as _e,u as be,a as we,t as ve,h as he,z as E,A as ye,B as Ve,C as M,D as K}from"./index-a6f6b7ce.js";import{b as m,v as Ce}from"./validate-e7ebbfab.js";import{c as I}from"./index-0ecb7b69.js";import"./darkSwitch-96b1df78.js";import"./router-a223bf12.js";import"./useDark-0e743517.js";function Pe(){return new Promise(b=>b(!1))}const ke={},Re={class:"login-footer-buried-point"};function Fe(b,k){return f(),P("div",Re)}const ze=H(ke,[["render",Fe]]),Ie=b=>(ce("data-v-47245dfc"),b=b(),me(),b),Se={class:"login"},Te={key:0,class:"login-box"},xe=Ie(()=>A("div",{class:"login-title"}," 登录智学通 ",-1)),Le={key:4,class:"form-footer"},Ue={class:"retrieve-password-form"},qe=ie({__name:"login",setup(b){let k;const{t:r}=ge(),S=ne(),j=se(),O=_e();be();const G=we(),y=B(),V=B(),e=z({form:{tab:"login",email:"",mobile:"",username:"",password:"",captcha:"",keep:!1,captchaId:ve(),captchaInfo:"",registerType:"email"},formLoading:!1,showRetrievePasswordDialog:!1,retrievePasswordForm:{type:"email",account:"",captcha:"",password:""},dialogWidth:36,accountVerificationType:[],codeSendCountdown:0,submitRetrieveLoading:!1,sendCaptchaLoading:!1,to:S.query.to}),J=z({email:[m({name:"required",title:r("user.login.email")}),m({name:"email",title:r("user.login.email")})],username:[m({name:"required",title:r("user.login.User name")}),{validator:(i,o,d)=>{if(e.form.tab=="register")return Ce(i,o,d);d()},trigger:"blur"}],password:[m({name:"required",title:r("user.login.password")}),m({name:"password"})],mobile:[m({name:"required",title:r("user.login.mobile")}),m({name:"mobile"})],captcha:[m({name:"required",title:r("user.login.Verification Code")})]}),Q=z({account:[m({name:"required",title:r("user.login.Account name")})],captcha:[m({name:"required",title:r("user.login.Verification Code")})],password:[m({name:"required",title:r("user.login.password")}),m({name:"password"})]}),T=()=>{let i=document.documentElement.clientWidth,o=36;i<=790?o=92:i<=910?o=56:i<=1260&&(o=46),e.dialogWidth=o},x=()=>{var i;(i=y.value)==null||i.validate(o=>{o&&(e.form.tab=="login"?I(e.form.captchaId,d=>L(d)):L())})},L=(i="")=>{e.formLoading=!0,e.form.captchaInfo=i,E("post",e.form).then(o=>{if(O.dataFill(o.data.userInfo),e.to)return location.href=e.to;j.push({path:o.data.routePath})}).finally(()=>{e.formLoading=!1})},U=()=>{V.value&&V.value.validate(i=>{i&&(e.submitRetrieveLoading=!0,ye(e.retrievePasswordForm).then(o=>{e.submitRetrieveLoading=!1,o.code==1&&(e.showRetrievePasswordDialog=!1,R(),Ve(V.value))}).catch(()=>{e.submitRetrieveLoading=!1}))})},X=()=>{e.codeSendCountdown>0||y.value.validateField([e.form.registerType,"username","password"]).then(i=>{i&&I(e.form.captchaId,o=>Y(o))})},Y=i=>{e.sendCaptchaLoading=!0,(e.form.registerType=="email"?M:K)(e.form[e.form.registerType],"user_register",{captchaInfo:i,captchaId:e.form.captchaId}).then(d=>{d.code==1&&D(60)}).finally(()=>{e.sendCaptchaLoading=!1})},Z=()=>{e.codeSendCountdown>0||V.value.validateField("account").then(i=>{i&&I(e.form.captchaId,o=>ee(o))})},ee=i=>{e.sendCaptchaLoading=!0,(e.retrievePasswordForm.type=="email"?M:K)(e.retrievePasswordForm.account,"user_retrieve_pwd",{captchaInfo:i,captchaId:e.form.captchaId}).then(d=>{d.code==1&&D(60)}).finally(()=>{e.sendCaptchaLoading=!1})},q=(i=void 0,o)=>{e.form.tab=o,o=="register"&&(e.form.username=""),i&&i.clearValidate()},D=i=>{e.codeSendCountdown=i,k=window.setInterval(()=>{e.codeSendCountdown--,e.codeSendCountdown<=0&&R()},1e3)},R=()=>{e.codeSendCountdown=0,clearInterval(k)};return de(async()=>{await Pe()||(T(),he(window,"resize",T),E("get").then(i=>{e.accountVerificationType=i.data.accountVerificationType,e.retrievePasswordForm.type=i.data.accountVerificationType.length>0?i.data.accountVerificationType[0]:""}),S.query.type=="register"&&(e.form.tab="register"))}),ue(()=>{e.codeSendCountdown=0,R()}),(i,o)=>{const d=s("el-radio"),$=s("el-radio-group"),u=s("el-form-item"),g=s("Icon"),_=s("el-input"),C=s("el-col"),w=s("el-button"),F=s("el-row"),oe=s("el-checkbox"),N=s("el-form"),ae=s("el-alert"),re=s("el-main"),te=s("el-container"),le=s("el-dialog");return f(),P("div",Se,[a(te,{class:"is-vertical"},{default:t(()=>[a(fe),a(re,{class:"frontend-footer-brother"},{default:t(()=>[a(F,{justify:"center"},{default:t(()=>[a(C,{span:16,xs:24},{default:t(()=>[l(G).state.open?(f(),P("div",Te,[xe,a(N,{ref_key:"formRef",ref:y,onKeyup:W(x,["enter"]),rules:J,model:e.form},{default:t(()=>[e.form.tab=="register"?(f(),v(u,{key:0},{default:t(()=>[a($,{size:"large",modelValue:e.form.registerType,"onUpdate:modelValue":o[0]||(o[0]=n=>e.form.registerType=n)},{default:t(()=>[a(d,{class:"register-verification-radio",label:"email",disabled:!e.accountVerificationType.includes("email"),border:""},{default:t(()=>[p(c(l(r)("user.login.Via email")+l(r)("user.login.register")),1)]),_:1},8,["disabled"]),a(d,{class:"register-verification-radio",label:"mobile",disabled:!e.accountVerificationType.includes("mobile"),border:""},{default:t(()=>[p(c(l(r)("user.login.Via mobile number")+l(r)("user.login.register")),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})):h("",!0),a(u,{prop:"username"},{default:t(()=>[a(_,{modelValue:e.form.username,"onUpdate:modelValue":o[1]||(o[1]=n=>e.form.username=n),placeholder:e.form.tab=="register"?l(r)("Please input field",{field:l(r)("user.login.User name")}):l(r)("Please input field",{field:l(r)("user.login.account")}),clearable:!0,size:"large"},{prefix:t(()=>[a(g,{name:"fa fa-user",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(u,{prop:"password"},{default:t(()=>[a(_,{modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=n=>e.form.password=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.password")}),type:"password","show-password":"",size:"large"},{prefix:t(()=>[a(g,{name:"fa fa-unlock-alt",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e.form.tab=="register"&&e.form.registerType=="mobile"?(f(),v(u,{key:1,prop:"mobile"},{default:t(()=>[a(_,{modelValue:e.form.mobile,"onUpdate:modelValue":o[3]||(o[3]=n=>e.form.mobile=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.mobile")}),clearable:!0,size:"large"},{prefix:t(()=>[a(g,{name:"fa fa-tablet",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1})):h("",!0),e.form.tab=="register"&&e.form.registerType=="email"?(f(),v(u,{key:2,prop:"email"},{default:t(()=>[a(_,{modelValue:e.form.email,"onUpdate:modelValue":o[4]||(o[4]=n=>e.form.email=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.email")}),clearable:!0,size:"large"},{prefix:t(()=>[a(g,{name:"fa fa-envelope",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1})):h("",!0),e.form.tab=="register"?(f(),v(u,{key:3,prop:"captcha"},{default:t(()=>[a(F,{class:"w100"},{default:t(()=>[a(C,{span:16},{default:t(()=>[a(_,{size:"large",modelValue:e.form.captcha,"onUpdate:modelValue":o[5]||(o[5]=n=>e.form.captcha=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.Verification Code")}),autocomplete:"off"},{prefix:t(()=>[a(g,{name:"fa fa-ellipsis-h",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(C,{class:"captcha-box",span:8},{default:t(()=>[a(w,{size:"large",onClick:X,loading:e.sendCaptchaLoading,disabled:!(e.codeSendCountdown<=0),type:"primary"},{default:t(()=>[p(c(e.codeSendCountdown<=0?l(r)("user.login.send"):e.codeSendCountdown+l(r)("user.login.seconds")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})):h("",!0),e.form.tab!="register"?(f(),P("div",Le,[a(oe,{modelValue:e.form.keep,"onUpdate:modelValue":o[6]||(o[6]=n=>e.form.keep=n),label:l(r)("user.login.Remember me"),size:"default"},null,8,["modelValue","label"]),e.accountVerificationType.length>0?(f(),P("div",{key:0,onClick:o[7]||(o[7]=n=>e.showRetrievePasswordDialog=!0),class:"forgot-password"},c(l(r)("user.login.Forgot your password?")),1)):h("",!0)])):h("",!0),a(u,{class:"form-buttons"},{default:t(()=>[a(w,{class:"login-btn",onClick:x,loading:e.formLoading,round:"",type:"primary",size:"large"},{default:t(()=>[p(c(l(r)("user.login."+e.form.tab)),1)]),_:1},8,["loading"]),e.form.tab=="register"?(f(),v(w,{key:0,onClick:o[8]||(o[8]=n=>q(y.value,"login")),round:"",plain:"",type:"info",size:"large"},{default:t(()=>[p(c(l(r)("user.login.Back to login")),1)]),_:1})):(f(),v(w,{key:1,onClick:o[9]||(o[9]=n=>q(y.value,"register")),round:"",plain:"",type:"info",size:"large"},{default:t(()=>[p(c(l(r)("user.login.No account yet? Click Register")),1)]),_:1}))]),_:1}),a(ze)]),_:1},8,["onKeyup","rules","model"])])):(f(),v(ae,{key:1,center:!0,title:i.$t("Member center disabled"),type:"error"},null,8,["title"]))]),_:1})]),_:1})]),_:1}),a(pe)]),_:1}),a(le,{"close-on-click-modal":!1,"close-on-press-escape":!1,modelValue:e.showRetrievePasswordDialog,"onUpdate:modelValue":o[17]||(o[17]=n=>e.showRetrievePasswordDialog=n),title:l(r)("user.login.Retrieve password"),width:e.dialogWidth+"%",draggable:!0},{default:t(()=>[A("div",Ue,[a(N,{ref_key:"retrieveFormRef",ref:V,onKeyup:o[16]||(o[16]=W(n=>U(),["enter"])),rules:Q,model:e.retrievePasswordForm,"label-width":100},{default:t(()=>[a(u,{label:l(r)("user.login.Retrieval method")},{default:t(()=>[a($,{modelValue:e.retrievePasswordForm.type,"onUpdate:modelValue":o[10]||(o[10]=n=>e.retrievePasswordForm.type=n)},{default:t(()=>[a(d,{label:"email",disabled:!e.accountVerificationType.includes("email"),border:""},{default:t(()=>[p(c(l(r)("user.login.Via email")),1)]),_:1},8,["disabled"]),a(d,{label:"mobile",disabled:!e.accountVerificationType.includes("mobile"),border:""},{default:t(()=>[p(c(l(r)("user.login.Via mobile number")),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{prop:"account",label:e.retrievePasswordForm.type=="email"?l(r)("user.login.email"):l(r)("user.login.mobile")},{default:t(()=>[a(_,{modelValue:e.retrievePasswordForm.account,"onUpdate:modelValue":o[11]||(o[11]=n=>e.retrievePasswordForm.account=n),placeholder:l(r)("Please input field",{field:e.retrievePasswordForm.type=="email"?l(r)("user.login.email"):l(r)("user.login.mobile")}),clearable:!0},{prefix:t(()=>[a(g,{name:"fa fa-user",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(u,{prop:"captcha",label:l(r)("user.login.Verification Code")},{default:t(()=>[a(F,{class:"w100"},{default:t(()=>[a(C,{span:16},{default:t(()=>[a(_,{modelValue:e.retrievePasswordForm.captcha,"onUpdate:modelValue":o[12]||(o[12]=n=>e.retrievePasswordForm.captcha=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.Verification Code")}),autocomplete:"off"},{prefix:t(()=>[a(g,{name:"fa fa-ellipsis-h",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(C,{class:"captcha-box",span:8},{default:t(()=>[a(w,{onClick:Z,loading:e.sendCaptchaLoading,disabled:!(e.codeSendCountdown<=0),type:"primary"},{default:t(()=>[p(c(e.codeSendCountdown<=0?l(r)("user.login.send"):e.codeSendCountdown+l(r)("user.login.seconds")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["label"]),a(u,{prop:"password",label:l(r)("user.login.New password")},{default:t(()=>[a(_,{modelValue:e.retrievePasswordForm.password,"onUpdate:modelValue":o[13]||(o[13]=n=>e.retrievePasswordForm.password=n),placeholder:l(r)("Please input field",{field:l(r)("user.login.New password")}),"show-password":""},{prefix:t(()=>[a(g,{name:"fa fa-unlock-alt",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(u,null,{default:t(()=>[a(w,{onClick:o[14]||(o[14]=n=>e.showRetrievePasswordDialog=!1)},{default:t(()=>[p(c(l(r)("Cancel")),1)]),_:1}),a(w,{loading:e.submitRetrieveLoading,onClick:o[15]||(o[15]=n=>U()),type:"primary"},{default:t(()=>[p(c(l(r)("user.login.second")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["modelValue","title","width"])])}}});const Ae=H(qe,[["__scopeId","data-v-47245dfc"]]);export{Ae as default};