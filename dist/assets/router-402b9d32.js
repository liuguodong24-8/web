import{h as L,i as u,b as D,r as a,j as l,k as I,l as P,u as T,a as O,m as b,n as e}from"./index-a32a01c5.js";import{J as v,a3 as R,a4 as w,a5 as V,a6 as h,i as f}from"./vue-9888607f.js";const M=function(i="shade",_){const n=document.querySelector(".layout-container"),o=document.createElement("div");o.setAttribute("class","ba-layout-shade "+i),n.appendChild(o),L(o,"click",()=>k(_))},k=function(i=()=>{}){const _=document.querySelector(".ba-layout-shade");_&&_.remove(),i()},g=async i=>{try{const _=await a.push(i);R(_,w.aborted)?v({message:u.global.t("utils.Navigation failed, navigation guard intercepted!"),type:"error"}):R(_,w.duplicated)&&v({message:u.global.t("utils.Navigation failed, it is at the navigation target position!"),type:"warning"})}catch(_){v({message:u.global.t("utils.Navigation failed, invalid route!"),type:"error"}),console.error(_)}},y=i=>{var t,r;const _=[];a.getRoutes().forEach(s=>{s.path&&_.push(s.path)});let o=!1;for(const s in i){if(((t=i[s].meta)==null?void 0:t.menu_type)=="tab"&&_.indexOf(i[s].path)!==-1)return i[s];if(i[s].children&&((r=i[s].children)!=null&&r.length)&&(o=y(i[s].children),o))return o}return o},S=i=>{var n;switch((n=i.meta)==null?void 0:n.menu_type){case"iframe":case"tab":g({path:i.path});break;case"link":window.open(i.path,"_blank");break;default:v({message:u.global.t("utils.Navigation failed, the menu type is unrecognized!"),type:"error"});break}const _=D();_.layout.shrink&&k(()=>{_.setLayout("menuCollapse",!0)})},B=(i,_)=>{const n=T(),o=O(),t=Object.assign({"/src/views/frontend/index.vue":()=>e(()=>import("./index-2a50d41b.js"),["assets/index-2a50d41b.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/footer-625659f4.js","assets/logo-b67ce0cf.js","assets/index-d503d151.js","assets/darkSwitch-5c58b523.js"]),"/src/views/frontend/user/account/balance.vue":()=>e(()=>import("./balance-2e198331.js"),["assets/balance-2e198331.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/frontend/user/account/changePassword.vue":()=>e(()=>import("./changePassword-e333a195.js"),["assets/changePassword-e333a195.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"]),"/src/views/frontend/user/account/integral.vue":()=>e(()=>import("./integral-a8653f85.js"),["assets/integral-a8653f85.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/frontend/user/account/overview.vue":()=>e(()=>import("./overview-fd7ef7b3.js"),["assets/overview-fd7ef7b3.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/echarts-02f2616f.js"]),"/src/views/frontend/user/account/profile.vue":()=>e(()=>import("./profile-b6d9eabd.js"),["assets/profile-b6d9eabd.js","assets/vue-9888607f.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js","assets/index-01f070f2.js"]),"/src/views/frontend/user/login.vue":()=>e(()=>import("./login-cf2366d3.js"),["assets/login-cf2366d3.js","assets/vue-9888607f.js","assets/footer-625659f4.js","assets/logo-b67ce0cf.js","assets/index-a32a01c5.js","assets/index-d503d151.js","assets/darkSwitch-5c58b523.js","assets/validate-1cd91476.js","assets/index-01f070f2.js"])});if(i.length&&(p(t,i,"",!0),o.mergeAuthNode(m(i,"/")),n.setHeadNav(d(i,"/",["nav"])),o.mergeNavUserMenus(d(i,"/",["nav_user_menu"]))),_.length&&f(o.state.viewRoutes)){p(t,_,b.name);const r="/"+b.name+"/";o.mergeAuthNode(m(_,r)),o.mergeNavUserMenus(d(_,"/",["nav_user_menu"])),o.setShowHeadline(_.length>1),o.setViewRoutes(d(_,r))}},j=i=>{p(Object.assign({"/src/views/backend/activity/index.vue":()=>e(()=>import("./index-ad09ffa8.js"),["assets/index-ad09ffa8.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c4814ef.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js","assets/scanQrCode.vue_vue_type_script_setup_true_lang-52edef60.js","assets/qrcode.vue.esm-ab222b08.js","assets/index-abcc8423.js"]),"/src/views/backend/activity/popupForm.vue":()=>e(()=>import("./popupForm-c538eebd.js"),["assets/popupForm-c538eebd.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c4814ef.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/activity/scanQrCode.vue":()=>e(()=>import("./scanQrCode-bb7c68e1.js"),["assets/scanQrCode-bb7c68e1.js","assets/scanQrCode.vue_vue_type_script_setup_true_lang-52edef60.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/qrcode.vue.esm-ab222b08.js"]),"/src/views/backend/activityDetail/index.vue":()=>e(()=>import("./index-c4d08a4d.js"),["assets/index-c4d08a4d.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-243d01a8.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js","assets/scanQrCode.vue_vue_type_script_setup_true_lang-979070c6.js","assets/qrcode.vue.esm-ab222b08.js","assets/index-abcc8423.js"]),"/src/views/backend/activityDetail/popupForm.vue":()=>e(()=>import("./popupForm-856e754e.js"),["assets/popupForm-856e754e.js","assets/popupForm.vue_vue_type_script_setup_true_lang-243d01a8.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/activityDetail/scanQrCode.vue":()=>e(()=>import("./scanQrCode-3a4840fc.js"),["assets/scanQrCode-3a4840fc.js","assets/scanQrCode.vue_vue_type_script_setup_true_lang-979070c6.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/qrcode.vue.esm-ab222b08.js"]),"/src/views/backend/activityscan/index.vue":()=>e(()=>import("./index-abcc8423.js"),["assets/index-abcc8423.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js"]),"/src/views/backend/addltn/index.vue":()=>e(()=>import("./index-61998cd0.js"),["assets/index-61998cd0.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-8f06ac5c.js","assets/index-7c3dd670.js"]),"/src/views/backend/addltn/popupForm.vue":()=>e(()=>import("./popupForm-87b87c06.js"),["assets/popupForm-87b87c06.js","assets/popupForm.vue_vue_type_script_setup_true_lang-8f06ac5c.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"]),"/src/views/backend/auth/admin/index.vue":()=>e(()=>import("./index-65512ce8.js"),["assets/index-65512ce8.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-0bba60c5.js","assets/validate-1cd91476.js","assets/index-7c3dd670.js"]),"/src/views/backend/auth/admin/popupForm.vue":()=>e(()=>import("./popupForm-0bba60c5.js"),["assets/popupForm-0bba60c5.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"]),"/src/views/backend/auth/adminLog/index.vue":()=>e(()=>import("./index-419ef635.js"),["assets/index-419ef635.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/info-cb656c63.js"]),"/src/views/backend/auth/adminLog/info.vue":()=>e(()=>import("./info-cb656c63.js"),["assets/info-cb656c63.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/backend/auth/group/index.vue":()=>e(()=>import("./index-41d65231.js"),["assets/index-41d65231.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-17bd6547.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/auth/group/popupForm.vue":()=>e(()=>import("./popupForm-17bd6547.js"),["assets/popupForm-17bd6547.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/auth/rule/index.vue":()=>e(()=>import("./index-2af75b6b.js"),["assets/index-2af75b6b.js","assets/popupForm.vue_vue_type_script_setup_true_lang-af6d6b9a.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/auth/rule/popupForm.vue":()=>e(()=>import("./popupForm-fc7c302d.js"),["assets/popupForm-fc7c302d.js","assets/popupForm.vue_vue_type_script_setup_true_lang-af6d6b9a.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/crud/design.vue":()=>e(()=>import("./design-75cfd55f.js"),["assets/design-75cfd55f.js","assets/vue-9888607f.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/index-7c3dd670.js","assets/crud-d7d1b48e.js","assets/validate-1cd91476.js"]),"/src/views/backend/crud/index.vue":()=>e(()=>import("./index-8d47133c.js"),["assets/index-8d47133c.js","assets/start-717c36f3.js","assets/vue-9888607f.js","assets/crud-d7d1b48e.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/index-7c3dd670.js","assets/log.vue_vue_type_style_index_0_lang-c43b11c8.js","assets/design-75cfd55f.js"]),"/src/views/backend/crud/log.vue":()=>e(()=>import("./log-241e1497.js"),["assets/log-241e1497.js","assets/log.vue_vue_type_style_index_0_lang-c43b11c8.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/crud-d7d1b48e.js","assets/validate-1cd91476.js"]),"/src/views/backend/crud/start.vue":()=>e(()=>import("./start-717c36f3.js"),["assets/start-717c36f3.js","assets/vue-9888607f.js","assets/crud-d7d1b48e.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/index-7c3dd670.js","assets/log.vue_vue_type_style_index_0_lang-c43b11c8.js"]),"/src/views/backend/dashboard.vue":()=>e(()=>import("./dashboard-cdc48155.js"),["assets/dashboard-cdc48155.js","assets/echarts-02f2616f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/backend/dev/index.vue":()=>e(()=>import("./index-c7642e3a.js"),["assets/index-c7642e3a.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e68fccc3.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js","assets/popupFormUp.vue_vue_type_script_setup_true_lang-229ab7fe.js"]),"/src/views/backend/dev/popupForm.vue":()=>e(()=>import("./popupForm-8c354bfe.js"),["assets/popupForm-8c354bfe.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e68fccc3.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/dev/popupFormUp.vue":()=>e(()=>import("./popupFormUp-d6559a09.js"),["assets/popupFormUp-d6559a09.js","assets/popupFormUp.vue_vue_type_script_setup_true_lang-229ab7fe.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/devlist/index.vue":()=>e(()=>import("./index-78879474.js"),["assets/index-78879474.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-6f5da306.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/devlist/popupForm.vue":()=>e(()=>import("./popupForm-c40f83f3.js"),["assets/popupForm-c40f83f3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-6f5da306.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/devtime/index.vue":()=>e(()=>import("./index-7e121c90.js"),["assets/index-7e121c90.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c74510c.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/devtime/popupForm.vue":()=>e(()=>import("./popupForm-c3db9213.js"),["assets/popupForm-c3db9213.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4c74510c.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/grade/index.vue":()=>e(()=>import("./index-0d6091ad.js"),["assets/index-0d6091ad.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4b04ccc3.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/grade/popupForm.vue":()=>e(()=>import("./popupForm-8fc1094f.js"),["assets/popupForm-8fc1094f.js","assets/popupForm.vue_vue_type_script_setup_true_lang-4b04ccc3.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/login.vue":()=>e(()=>import("./login-84ff1a82.js"),["assets/login-84ff1a82.js","assets/vue-9888607f.js","assets/logo-b67ce0cf.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-77e77f07.js","assets/index-d503d151.js","assets/index-01f070f2.js"]),"/src/views/backend/message/index.vue":()=>e(()=>import("./index-be4932e5.js"),["assets/index-be4932e5.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_style_index_0_lang-45ffa165.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js","assets/index-b85783fc.js"]),"/src/views/backend/message/popupForm.vue":()=>e(()=>import("./popupForm-48917b32.js"),["assets/popupForm-48917b32.js","assets/popupForm.vue_vue_type_style_index_0_lang-45ffa165.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/messagesendlist/index.vue":()=>e(()=>import("./index-b85783fc.js"),["assets/index-b85783fc.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js"]),"/src/views/backend/module/components/baAccount.vue":()=>e(()=>import("./baAccount-da4f234a.js"),["assets/baAccount-da4f234a.js","assets/vue-9888607f.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js","assets/store-cacf776f.js"]),"/src/views/backend/module/components/buy.vue":()=>e(()=>import("./buy-88e74355.js"),["assets/buy-88e74355.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/commonDialog.vue":()=>e(()=>import("./commonDialog-50de0898.js"),["assets/commonDialog-50de0898.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/installConflict-070f778b.js","assets/index-252efc6a.js","assets/commonDone-9657fc4b.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/uploadInstall-76bf80d1.js","assets/confirmFileConflict-b3a0debf.js"]),"/src/views/backend/module/components/commonDone.vue":()=>e(()=>import("./commonDone-9657fc4b.js"),["assets/commonDone-9657fc4b.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"]),"/src/views/backend/module/components/confirmFileConflict.vue":()=>e(()=>import("./confirmFileConflict-b3a0debf.js"),["assets/confirmFileConflict-b3a0debf.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/goodsInfo.vue":()=>e(()=>import("./goodsInfo-07503e41.js"),["assets/goodsInfo-07503e41.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js","assets/buy-88e74355.js","assets/pay-5ff6208b.js"]),"/src/views/backend/module/components/installConflict.vue":()=>e(()=>import("./installConflict-070f778b.js"),["assets/installConflict-070f778b.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/pay.vue":()=>e(()=>import("./pay-5ff6208b.js"),["assets/pay-5ff6208b.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/tableHeader.vue":()=>e(()=>import("./tableHeader-62730825.js"),["assets/tableHeader-62730825.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/tabs.vue":()=>e(()=>import("./tabs-7d058886.js"),["assets/tabs-7d058886.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/components/uploadInstall.vue":()=>e(()=>import("./uploadInstall-76bf80d1.js"),["assets/uploadInstall-76bf80d1.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/store-cacf776f.js","assets/index-252efc6a.js"]),"/src/views/backend/module/index.vue":()=>e(()=>import("./index-81ff4eb0.js"),["assets/index-81ff4eb0.js","assets/store-cacf776f.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-252efc6a.js","assets/tableHeader-62730825.js","assets/baAccount-da4f234a.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js","assets/tabs-7d058886.js","assets/goodsInfo-07503e41.js","assets/buy-88e74355.js","assets/pay-5ff6208b.js","assets/commonDialog-50de0898.js","assets/installConflict-070f778b.js","assets/commonDone-9657fc4b.js","assets/uploadInstall-76bf80d1.js","assets/confirmFileConflict-b3a0debf.js"]),"/src/views/backend/period/index.vue":()=>e(()=>import("./index-e3fa40d4.js"),["assets/index-e3fa40d4.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-b47c51d5.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/period/popupForm.vue":()=>e(()=>import("./popupForm-87e955b7.js"),["assets/popupForm-87e955b7.js","assets/popupForm.vue_vue_type_script_setup_true_lang-b47c51d5.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/routine/adminInfo.vue":()=>e(()=>import("./adminInfo-a61de9b2.js"),["assets/adminInfo-a61de9b2.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js"]),"/src/views/backend/routine/attachment/index.vue":()=>e(()=>import("./index-a18c09e9.js"),["assets/index-a18c09e9.js","assets/popupForm-7021df60.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/index-cfb50cde.js"]),"/src/views/backend/routine/attachment/popupForm.vue":()=>e(()=>import("./popupForm-7021df60.js"),["assets/popupForm-7021df60.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js"]),"/src/views/backend/routine/config/add.vue":()=>e(()=>import("./add-4d6854e7.js"),["assets/add-4d6854e7.js","assets/add.vue_vue_type_script_setup_true_lang-19713687.js","assets/vue-9888607f.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/routine/config/index.vue":()=>e(()=>import("./index-10676850.js"),["assets/index-10676850.js","assets/vue-9888607f.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/index-280d7cc1.js","assets/add.vue_vue_type_script_setup_true_lang-19713687.js","assets/validate-1cd91476.js"]),"/src/views/backend/security/dataRecycle/index.vue":()=>e(()=>import("./index-59417039.js"),["assets/index-59417039.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-bf241429.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/security/dataRecycle/popupForm.vue":()=>e(()=>import("./popupForm-bf241429.js"),["assets/popupForm-bf241429.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/security/dataRecycleLog/index.vue":()=>e(()=>import("./index-e2c2f6f7.js"),["assets/index-e2c2f6f7.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/info-54fad6a0.js"]),"/src/views/backend/security/dataRecycleLog/info.vue":()=>e(()=>import("./info-54fad6a0.js").then(t=>t.a),["assets/info-54fad6a0.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/backend/security/sensitiveData/index.vue":()=>e(()=>import("./index-dbe7283f.js"),["assets/index-dbe7283f.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-8d8b848d.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/security/sensitiveData/popupForm.vue":()=>e(()=>import("./popupForm-8d8b848d.js"),["assets/popupForm-8d8b848d.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/security/sensitiveDataLog/index.vue":()=>e(()=>import("./index-abf36ce6.js"),["assets/index-abf36ce6.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/info-58c809a0.js"]),"/src/views/backend/security/sensitiveDataLog/info.vue":()=>e(()=>import("./info-58c809a0.js").then(t=>t.a),["assets/info-58c809a0.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"]),"/src/views/backend/sms/config.vue":()=>e(()=>import("./config-ff6882ad.js"),["assets/config-ff6882ad.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"]),"/src/views/backend/sms/template/index.vue":()=>e(()=>import("./index-eedf5a0a.js"),["assets/index-eedf5a0a.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-a8cd3504.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/sms/template/popupForm.vue":()=>e(()=>import("./popupForm-4cfe6e55.js"),["assets/popupForm-4cfe6e55.js","assets/popupForm.vue_vue_type_script_setup_true_lang-a8cd3504.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/sms/variable/index.vue":()=>e(()=>import("./index-db633716.js"),["assets/index-db633716.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-d3621c94.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/sms/variable/popupForm.vue":()=>e(()=>import("./popupForm-c680e7a3.js"),["assets/popupForm-c680e7a3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-d3621c94.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/software/index.vue":()=>e(()=>import("./index-313f0279.js"),["assets/index-313f0279.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-f758f3a4.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/software/popupForm.vue":()=>e(()=>import("./popupForm-682ff639.js"),["assets/popupForm-682ff639.js","assets/popupForm.vue_vue_type_script_setup_true_lang-f758f3a4.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/sos/index.vue":()=>e(()=>import("./index-02a1b572.js"),["assets/index-02a1b572.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js"]),"/src/views/backend/sos/popupForm.vue":()=>e(()=>import("./popupForm-ce0684c5.js"),["assets/popupForm-ce0684c5.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/teacherbind/index.vue":()=>e(()=>import("./index-929a704c.js"),["assets/index-929a704c.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-80176721.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/teacherbind/popupForm.vue":()=>e(()=>import("./popupForm-030191fd.js"),["assets/popupForm-030191fd.js","assets/popupForm.vue_vue_type_script_setup_true_lang-80176721.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/todayinhistory/index.vue":()=>e(()=>import("./index-cba43f25.js"),["assets/index-cba43f25.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm.vue_vue_type_script_setup_true_lang-bbc2e460.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/todayinhistory/popupForm.vue":()=>e(()=>import("./popupForm-9d3f6486.js"),["assets/popupForm-9d3f6486.js","assets/popupForm.vue_vue_type_script_setup_true_lang-bbc2e460.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/group/index.vue":()=>e(()=>import("./index-42751669.js"),["assets/index-42751669.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-39830065.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/group/popupForm.vue":()=>e(()=>import("./popupForm-39830065.js"),["assets/popupForm-39830065.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/moneyLog/index.vue":()=>e(()=>import("./index-d1c5e4c6.js"),["assets/index-d1c5e4c6.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-06e027f3.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/moneyLog/popupForm.vue":()=>e(()=>import("./popupForm-06e027f3.js").then(t=>t.p),["assets/popupForm-06e027f3.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/rule/index.vue":()=>e(()=>import("./index-b76b2224.js"),["assets/index-b76b2224.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-d6ec4ea8.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/rule/popupForm.vue":()=>e(()=>import("./popupForm-d6ec4ea8.js"),["assets/popupForm-d6ec4ea8.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/scoreLog/index.vue":()=>e(()=>import("./index-aab381cc.js"),["assets/index-aab381cc.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-f04d262e.js","assets/index-7c3dd670.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/scoreLog/popupForm.vue":()=>e(()=>import("./popupForm-f04d262e.js").then(t=>t.p),["assets/popupForm-f04d262e.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js","assets/validate-1cd91476.js"]),"/src/views/backend/user/user/index.vue":()=>e(()=>import("./index-4d2206ae.js"),["assets/index-4d2206ae.js","assets/index-cfb50cde.js","assets/index-a32a01c5.js","assets/vue-9888607f.js","assets/index-280d7cc1.js","assets/popupForm-f06eff7e.js","assets/validate-1cd91476.js","assets/index-7c3dd670.js"]),"/src/views/backend/user/user/popupForm.vue":()=>e(()=>import("./popupForm-f06eff7e.js"),["assets/popupForm-f06eff7e.js","assets/vue-9888607f.js","assets/index-a32a01c5.js","assets/validate-1cd91476.js","assets/index-7c3dd670.js","assets/index-cfb50cde.js","assets/index-280d7cc1.js"])}),i,l.name);const n="/"+l.name+"/",o=I();o.setTabsViewRoutes(d(i,n)),o.fillAuthNode(m(i,n))},d=(i,_="/",n=["menu","menu_dir"])=>{const o=[];for(const t in i){if(i[t].extend=="add_rules_only"||!n.includes(i[t].type)||i[t].type=="menu_dir"&&i[t].children&&!i[t].children.length||["route","menu","nav_user_menu","nav"].includes(i[t].type)&&(i[t].menu_type=="tab"&&!i[t].component||["link","iframe"].includes(i[t].menu_type)&&!i[t].url))continue;const r=["link","iframe"].includes(i[t].menu_type)?i[t].url:_+i[t].path;let s=[];i[t].children&&i[t].children.length>0&&(s=d(i[t].children,_,n)),o.push({path:r,name:i[t].name,component:i[t].component,meta:{id:i[t].id,title:i[t].title,icon:i[t].icon,keepalive:i[t].keepalive,menu_type:i[t].menu_type,type:i[t].type},children:s})}return o},m=(i,_="/")=>{const n=new Map([]);return A(i,n,_,_),n},A=(i,_,n="/",o="/")=>{const t=[];for(const r in i)i[r].type=="button"&&t.push(n+i[r].name),i[r].children&&i[r].children.length>0&&A(i[r].children,_,n,n+i[r].name);t&&t.length>0&&_.set(o,t)},p=(i,_,n,o=!1)=>{for(const t in _)_[t].extend!="add_menu_only"&&((_[t].menu_type=="tab"&&i[_[t].component]||_[t].menu_type=="iframe")&&x(i,_[t],n,o),_[t].children&&_[t].children.length>0&&p(i,_[t].children,n,o))},x=(i,_,n,o)=>{let t="",r;if(_.menu_type=="iframe"?(t=(P()?"/admin":"/user")+"/iframe/"+encodeURIComponent(_.url),r=()=>e(()=>import("./iframe-590d246c.js"),["assets/iframe-590d246c.js","assets/layout-05f5fbc5.js","assets/index-a32a01c5.js","assets/vue-9888607f.js"])):(t=n?_.path:"/"+_.path,r=i[_.component]),_.menu_type=="tab"&&o){const c=F(_.name);if(c.length){for(const E in c)if(a.hasRoute(c[E])){n=c[E];break}}}const s={path:t,name:_.name,component:r,meta:{title:_.title,extend:_.extend,icon:_.icon,keepalive:_.keepalive,menu_type:_.menu_type,type:_.type,url:_.url,addtab:!0}};n?a.addRoute(n,s):a.addRoute(s)},F=i=>{const _=V(i.split("/")),n=[],o=[];for(const t in _)n.push(_[t]),parseInt(t)!=_.length-1&&o.push(n.join("/"));return h(o)};export{j as a,k as c,y as g,B as h,S as o,g as r,M as s};
