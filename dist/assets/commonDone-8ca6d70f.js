import{s as n,j as E}from"./store-65095ffe.js";import{m as d,b as A}from"./index-a0b93d4a.js";import{t as C,I as L,J as w,_ as N}from"./index-d68ba36c.js";import{F as B}from"./index-d87f9e8e.js";import{h as V,r as M,q as f,X as y,o as s,k as l,m as a,z as e,U as o,_ as S,W as c,V as i,p as g,P as D,O as P,al as W}from"./vue-9888607f.js";import"./index-4f33ef6e.js";import"./index-5b09613c.js";const j={class:"install-done"},U={class:"install-done-title"},z={key:0},F={key:1},O={key:2},R={key:3},q={class:"install-tis-box"},J={key:0,class:"depend-box"},X={key:0,class:"depend-loading"},G={class:"depend-tis"},H={key:0},K={class:"color-red"},Q={key:0},Y={key:1},Z={key:1,class:"color-green"},$={key:2,class:"exec-fail color-red"},ee={key:1,class:"depend-tis"},te={key:2},oe={key:0,class:"install-tis-box text-align-center"},ne={class:"install-tis"},se={class:"dependency-installation-fail-tips"},le={class:"install-tis-box"},ae={class:"install-tis"},de={class:"install-tis-box"},ie={class:"install-form"},ce=V({__name:"commonDone",setup(me){const{t}=C(),m=L(),u=M({rebuild:0}),r=()=>{m.toggle(!0)},b=()=>{n.dialog.common=!1,u.rebuild==1&&(m.toggle(!0),m.addTaskPM("web-build",!1,"",_=>{_==w.Success&&m.toggle(!1)}))},k=()=>{W.confirm(t("module.Is the command that failed on the WEB terminal executed manually or in other ways successfully?"),t("Reminder"),{confirmButtonText:t("module.yes"),cancelButtonText:t("Cancel"),type:"warning"}).then(()=>{n.loading.common=!0,E(n.common.uid).then(()=>{A(),n.loading.common=!1,n.common.dependInstallState="success"})})};return(_,p)=>{const I=f("el-link"),v=f("el-button"),h=y("loading"),x=y("blur");return s(),l("div",j,[a("div",U,[e(n).common.moduleState==e(d).INSTALLED?(s(),l("span",z,o(e(t)("module.Congratulations, module installation is complete")),1)):e(n).common.moduleState==e(d).DISABLE?(s(),l("span",F,o(e(t)("module.Module is disabled")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",O,o(e(t)("module.Congratulations, the code of the module is ready")),1)):(s(),l("span",R,o(e(t)("module.Unknown state")),1))]),a("div",q,[e(n).common.dependInstallState!="none"?(s(),l("div",J,[e(n).common.dependInstallState=="executing"?S((s(),l("div",X,null,512)),[[h,!0]]):c("",!0),a("div",G,[e(n).common.dependInstallState=="executing"?(s(),l("div",H,[a("span",K,o(e(t)("module.Do not refresh the page!")),1),e(n).common.moduleState==e(d).DISABLE?(s(),l("span",Q,o(e(t)("module.New adjustment of dependency detected")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",Y,o(e(t)("module.This module adds new dependencies")),1)):c("",!0),i("， "),a("span",null,o(e(t)("module.The built-in terminal of the system is automatically installing these dependencies, please wait~")),1),a("span",{class:"span-a",onClick:r},o(e(t)("module.View progress")),1)])):c("",!0),e(n).common.dependInstallState=="success"?(s(),l("div",Z,o(e(t)("module.Dependency installation completed~")),1)):c("",!0),e(n).common.dependInstallState=="fail"?(s(),l("div",$,[i(o(e(t)("module.Dependency installation fail 1"))+" ",1),a("span",{class:"span-a",onClick:r},o(e(t)("module.Dependency installation fail 2")),1),i(" "+o(e(t)("module.Dependency installation fail 3"))+" ",1),g(I,{target:"_blank",type:"primary",href:"https://wonderful-code.gitee.io/guide/install/manualOperation.html"},{default:D(()=>[i(o(e(t)("module.Dependency installation fail 4")),1)]),_:1})])):c("",!0)])])):e(n).common.moduleState==e(d).INSTALLED?(s(),l("div",ee,o(e(t)("module.This module does not add new dependencies")),1)):(s(),l("div",te,o(e(t)("module.There is no adjustment for system dependency")),1))]),e(n).common.dependInstallState=="fail"?(s(),l("div",oe,[a("div",ne,[i(o(e(t)("module.Dependency installation fail 5"))+" ",1),a("span",{class:"span-a",onClick:k},o(e(t)("module.Dependency installation fail 6")),1),i(" "+o(e(t)("module.Dependency installation fail 7"))+" ",1),a("span",se,o(e(t)("module.dependency-installation-fail-tips")),1)])])):c("",!0),a("div",le,[a("div",ae,o(e(t)("module.please"))+o(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 1"))+" "+o(e(t)("module.Manually clean up the system and browser cache, and refresh the page")),1)]),a("div",de,[a("div",ie,[g(B,{label:(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 2"))+e(t)("module.Automatically execute reissue command?"),modelValue:u.rebuild,"onUpdate:modelValue":p[0]||(p[0]=T=>u.rebuild=T),type:"radio",data:{content:{0:e(t)("module.no"),1:e(t)("module.yes")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])])]),S((s(),P(v,{class:"install-done-button",disabled:!(e(n).common.dependInstallState!="executing"||e(n).common.moduleState==e(d).INSTALLED),size:"large",type:"primary",onClick:b},{default:D(()=>[i(o(e(n).common.moduleState==e(d).DISABLE?e(t)("Complete"):e(t)("module.End of installation")),1)]),_:1},8,["disabled"])),[[x],[h,e(n).loading.common]])])}}});const Se=N(ce,[["__scopeId","data-v-a72df8a1"]]);export{Se as default};
