import{s as o}from"./store-28b20c36.js";import f from"./installConflict-25101e85.js";import g from"./commonDone-01ced846.js";import C from"./uploadInstall-55633105.js";import k from"./confirmFileConflict-c09ca704.js";import{h as y,q as a,X as v,o as t,k as i,p as c,P as s,z as e,_ as x,W as l,O as n}from"./vue-7c431e9b.js";import{_ as D}from"./index-764fcd0d.js";import"./index-7d2e71e2.js";import"./index-4e8a24f3.js";import"./index-5273c60c.js";import"./index-4c4c8153.js";const h=["element-loading-text"],I=y({__name:"commonDialog",setup(V){return(r,m)=>{const d=a("el-scrollbar"),p=a("el-dialog"),_=v("loading");return t(),i("div",null,[c(p,{"close-on-press-escape":e(o).common.quickClose,title:e(o).common.dialogTitle,"close-on-click-modal":e(o).common.quickClose,modelValue:e(o).dialog.common,"onUpdate:modelValue":m[0]||(m[0]=u=>e(o).dialog.common=u),class:"common-dialog"},{default:s(()=>[c(d,{height:500},{default:s(()=>[e(o).common.type=="loading"?x((t(),i("div",{"element-loading-text":e(o).common.loadingTitle?r.$t("module.stateTitle "+e(o).common.loadingTitle):"",key:e(o).common.loadingComponentKey,class:"common-loading"},null,8,h)),[[_,!0]]):l("",!0),e(o).common.type=="InstallConflict"?(t(),n(f,{key:1})):l("",!0),e(o).common.type=="disableConfirmConflict"?(t(),n(k,{key:2})):l("",!0),e(o).common.type=="done"?(t(),n(g,{key:3})):l("",!0),e(o).common.type=="uploadInstall"?(t(),n(C,{key:4})):l("",!0)]),_:1})]),_:1},8,["close-on-press-escape","title","close-on-click-modal","modelValue"])])}}});const O=D(I,[["__scopeId","data-v-e271020e"]]);export{O as default};
