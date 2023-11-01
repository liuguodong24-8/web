import{h as v,w as b,r as V,q as w,o as y,k as C,p as t,P as l,m as S,a8 as N,z as a,V as f,U as c}from"./vue-99362bf9.js";import{v as $,b as I,B as L,a6 as U,_ as k}from"./index-a6f6b7ce.js";import{b as u}from"./validate-e7ebbfab.js";import{F as i}from"./index-4085c0db.js";import"./index-165813b5.js";import"./index-e9f3c4e4.js";const q={class:"user-views"},x={class:"change-password"},B=v({__name:"changePassword",setup(R){const{t:s}=$(),P=I(),m=b(),e=V({formSubmitLoading:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[u({name:"required",title:s("user.account.changePassword.Old password")})],newPassword:[u({name:"required",title:s("user.account.changePassword.New password")}),u({name:"password"})],confirmPassword:[u({name:"required",title:s("user.account.changePassword.Confirm new password")}),u({name:"password"}),{validator:(d,o,n)=>{(e.form.newPassword||e.form.confirmPassword)&&(e.form.newPassword==e.form.confirmPassword?n():n(new Error(s("user.account.changePassword.The duplicate password does not match the new password")))),n()},trigger:"blur"}]}}),p=()=>{m.value&&m.value.validate(d=>{d&&(e.formSubmitLoading=!0,U(e.form).then(o=>{e.formSubmitLoading=!1,o.code==1&&P.logout()}).catch(()=>{e.formSubmitLoading=!1}))})};return(d,o)=>{const n=w("el-button"),_=w("el-form-item"),g=w("el-form"),h=w("el-card");return y(),C("div",q,[t(h,{class:"user-views-card",shadow:"hover",header:a(s)("user.account.changePassword.Change Password")},{default:l(()=>[S("div",x,[t(g,{model:e.form,rules:e.rules,"label-position":"top",ref_key:"formRef",ref:m,onKeyup:o[5]||(o[5]=N(r=>p(),["enter"]))},{default:l(()=>[t(i,{label:a(s)("user.account.changePassword.Old password"),type:"password",modelValue:e.form.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.oldPassword=r),prop:"oldPassword","input-attr":{"show-password":!0},placeholder:a(s)("user.account.changePassword.Please enter your current password")},null,8,["label","modelValue","placeholder"]),t(i,{label:a(s)("user.account.changePassword.New password"),type:"password",modelValue:e.form.newPassword,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.newPassword=r),prop:"newPassword","input-attr":{"show-password":!0},placeholder:a(s)("Please input field",{field:a(s)("user.account.changePassword.New password")})},null,8,["label","modelValue","placeholder"]),t(i,{label:a(s)("user.account.changePassword.Confirm new password"),type:"password",modelValue:e.form.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form.confirmPassword=r),prop:"confirmPassword","input-attr":{"show-password":!0},placeholder:a(s)("Please input field",{field:a(s)("user.account.changePassword.Confirm new password")})},null,8,["label","modelValue","placeholder"]),t(_,{class:"submit-buttons"},{default:l(()=>[t(n,{onClick:o[3]||(o[3]=r=>a(L)(m.value))},{default:l(()=>[f(c(d.$t("Reset")),1)]),_:1}),t(n,{type:"primary",loading:e.formSubmitLoading,onClick:o[4]||(o[4]=r=>p())},{default:l(()=>[f(c(d.$t("Save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["header"])])}}});const z=k(B,[["__scopeId","data-v-8a0f6fd7"]]);export{z as default};
