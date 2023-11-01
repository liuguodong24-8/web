import{s as e,l as j,u as J,g as K,n as oo}from"./store-5066c730.js";import{m as r,c as eo,f as so,a as C,g as to,h as no,d as E,b as lo,l as ao}from"./index-0010bc87.js";import{v as io,$ as A,_ as co}from"./index-a6f6b7ce.js";import ro from"./buy-84bd7fca.js";import _o from"./pay-00b999af.js";import{h as uo,q as c,X as B,o as n,k as _,p as m,P as a,_ as b,O as u,z as o,m as s,Z as w,Y as L,W as g,U as t,V as I,i as mo,ai as go}from"./vue-99362bf9.js";const fo={class:"goods-info"},po={class:"goods-images"},Io={class:"goods-basic"},vo={class:"goods-basic-title"},ho={class:"goods-tag"},bo={class:"basic-item"},yo={class:"basic-item-title"},ko={class:"basic-item-price"},wo={class:"basic-item"},Lo={class:"basic-item-title"},No={class:"basic-item-content"},To={class:"basic-item"},Do={class:"basic-item-title"},Co={class:"basic-item-content"},Ao={key:0,class:"basic-item"},So={class:"basic-item-title"},Eo={class:"basic-item-content"},Bo={class:"basic-item"},Vo={class:"basic-item-title"},qo={class:"basic-item-content"},Po={class:"basic-item"},Uo={class:"basic-item-title"},xo={class:"basic-item-content"},$o={key:1},Mo={key:1,class:"basic-item"},Wo={class:"basic-item-title"},Ho={class:"basic-item-content"},zo={class:"basic-buttons"},Fo={class:"basic-button-dropdown-span"},Oo={class:"demo-item-title"},Go={class:"demo-image"},Qo=["src"],Ro={key:0,class:"goods-developer"},Yo={class:"developer-header"},Xo={class:"developer-name"},Zo={class:"developer-nickname"},jo={class:"developer-group"},Jo={key:0,class:"developer-contact"},Ko={class:"developer-info-title"},oe={class:"contact-item"},ee=["href"],se={class:"developer-recommend"},te={class:"developer-info-title"},ne={key:0,class:"recommend-goods"},de=["onClick"],le={class:"recommend-goods-title"},ae={key:1,class:"data-empty"},ie=["innerHTML"],ce={class:"goods-version"},re={key:0,class:"version-timeline"},_e={class:"version-card-header"},ue={class:"version-short-describe"},me=["innerHTML"],ge={key:1,class:"empty-update-log"},fe=uo({__name:"goodsInfo",setup(pe){const v={InstallNow:[r.UNINSTALLED,r.WAIT_INSTALL],continueInstallation:[r.CONFLICT_PENDING,r.DEPENDENT_WAIT_INSTALL],alreadyInstalled:[r.INSTALLED],stateSwitch:[r.INSTALLED,r.CONFLICT_PENDING,r.DEPENDENT_WAIT_INSTALL,r.DISABLE],updateButton:[r.WAIT_INSTALL,r.INSTALLED,r.DISABLE],buy:[r.UNINSTALLED]},{t:l}=io(),V=(f,i)=>{!i||!f||window.open(f)},q=()=>{e.goodsInfo.enable?no(e.goodsInfo.uid):(e.common.disableParams={uid:e.goodsInfo.uid,state:0},E())},P=f=>{e.loading.common=!0,j(f).then(()=>{lo(),e.dialog.goodsInfo=!1}).finally(()=>{e.loading.common=!1})},U=(f,i)=>{const k=J();if(!k.token){e.dialog.baAccount=!0;return}e.loading.common=!0,K(f).then(N=>{N.data.state==r.DISABLE?oo(f,i).then(()=>{C(f,i)}).catch(T=>{ao(T)}):go.confirm(l("module.You need to disable this module before updating Do you want to disable it now?"),l("Reminder"),{confirmButtonText:l("module.Disable and update"),cancelButtonText:l("Cancel"),type:"warning"}).then(()=>{e.common.disableParams={uid:f,state:0,update:1,order:i,token:k.token},E()}).catch(()=>{})}).finally(()=>{e.loading.common=!1})};return(f,i)=>{const k=c("el-image"),N=c("el-carousel-item"),T=c("el-carousel"),x=c("el-tag"),$=c("el-link"),M=c("el-switch"),S=c("Icon"),h=c("el-button"),W=c("el-popover"),H=c("el-dropdown-item"),z=c("el-dropdown-menu"),F=c("el-dropdown"),O=c("el-avatar"),G=c("el-card"),Q=c("el-timeline-item"),R=c("el-timeline"),Y=c("el-scrollbar"),X=c("el-dialog"),y=B("blur"),D=B("loading");return n(),_("div",null,[m(X,{modelValue:o(e).dialog.goodsInfo,"onUpdate:modelValue":i[5]||(i[5]=d=>o(e).dialog.goodsInfo=d),class:"goods-info-dialog",title:o(l)("module.detailed information"),width:"60%"},{default:a(()=>[b((n(),u(Y,{key:o(e).goodsInfo.uid,height:500},{default:a(()=>[s("div",fo,[s("div",po,[o(e).goodsInfo.images?(n(),u(T,{key:0,height:"300","indicator-position":"outside"},{default:a(()=>[(n(!0),_(w,null,L(o(e).goodsInfo.images,(d,p)=>(n(),u(N,{class:"goods-image-item",key:p},{default:a(()=>[m(k,{fit:"contain","preview-src-list":o(e).goodsInfo.images,"preview-teleported":!0,src:d},null,8,["preview-src-list","src"])]),_:2},1024))),128))]),_:1})):g("",!0)]),s("div",Io,[s("h4",vo,t(o(e).goodsInfo.title),1),s("div",ho,[(n(!0),_(w,null,L(o(e).goodsInfo.tags,(d,p)=>(n(),u(x,{key:p,type:d.type},{default:a(()=>[I(t(d.name),1)]),_:2},1032,["type"]))),128))]),s("div",bo,[s("div",yo,t(o(l)("module.Price")),1),s("div",ko,t(typeof o(e).goodsInfo.currency_select<"u"?o(eo)(o(e).goodsInfo.present_price,o(e).goodsInfo.currency_select):"-"),1)]),s("div",wo,[s("div",Lo,t(o(l)("module.Last updated")),1),s("div",No,t(o(e).goodsInfo.updatetime?o(A)(o(e).goodsInfo.updatetime):"-"),1)]),s("div",To,[s("div",Do,t(o(l)("module.Published on")),1),s("div",Co,t(o(e).goodsInfo.createtime?o(A)(o(e).goodsInfo.createtime):"-"),1)]),v.stateSwitch.includes(o(e).goodsInfo.state)?g("",!0):(n(),_("div",Ao,[s("div",So,t(o(l)("module.amount of downloads")),1),s("div",Eo,t(o(e).goodsInfo.downloads?o(e).goodsInfo.downloads:"-"),1)])),s("div",Bo,[s("div",Vo,t(o(l)("module.Module classification")),1),s("div",qo,t(o(e).goodsInfo.category?o(e).goodsInfo.category.name:"-"),1)]),s("div",Po,[s("div",Uo,t(o(l)("module.Developer Homepage")),1),s("div",xo,[o(e).goodsInfo.author_url?(n(),u($,{key:0,type:"primary",class:"developer-homepage",target:"_blank",href:o(e).goodsInfo.author_url},{default:a(()=>[I(t(o(l)("module.Click to access")),1)]),_:1},8,["href"])):(n(),_("span",$o,"-"))])]),v.stateSwitch.includes(o(e).goodsInfo.state)?(n(),_("div",Mo,[s("div",Wo,t(o(l)("module.Module status")),1),s("div",Ho,[m(M,{onChange:q,loading:o(e).loading.common,disabled:o(e).loading.common,modelValue:o(e).goodsInfo.enable,"onUpdate:modelValue":i[0]||(i[0]=d=>o(e).goodsInfo.enable=d)},null,8,["loading","disabled","modelValue"])])])):g("",!0),s("div",zo,[(!o(e).goodsInfo.purchased||v.InstallNow.includes(o(e).goodsInfo.state))&&o(e).goodsInfo.demo&&o(e).goodsInfo.demo.length>0?(n(),u(F,{key:0},{dropdown:a(()=>[m(z,null,{default:a(()=>[(n(!0),_(w,null,L(o(e).goodsInfo.demo,(d,p)=>(n(),u(H,{key:p,onClick:Z=>V(d.link,!d.image),class:"basic-button-dropdown-item"},{default:a(()=>[m(W,{placement:"right",title:o(l)("module.Code scanning Preview"),trigger:"hover",disabled:!d.image,width:174},{reference:a(()=>[s("div",Oo,[m(S,{name:d.icon,size:"14",color:"var(--el-color-primary)"},null,8,["name"]),I(t(d.title),1)])]),default:a(()=>[s("div",Go,[s("img",{src:d.image,alt:""},null,8,Qo)])]),_:2},1032,["title","disabled"])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:a(()=>[m(h,{class:"basic-button-demo",type:"primary"},{default:a(()=>[s("span",Fo,t(o(l)("module.View demo")),1),m(S,{color:"#ffffff",size:"16",name:"el-icon-ArrowDown"})]),_:1})]),_:1})):g("",!0),!o(e).goodsInfo.purchased&&v.buy.includes(o(e).goodsInfo.state)&&o(e).goodsInfo.type=="online"?b((n(),u(h,{key:1,onClick:o(so),class:"basic-button-item",type:"danger"},{default:a(()=>[I(t(o(l)("module.Buy now")),1)]),_:1},8,["onClick"])),[[y]]):g("",!0),o(e).goodsInfo.state==o(r).UNINSTALLED&&o(e).goodsInfo.purchased||o(e).goodsInfo.state==o(r).WAIT_INSTALL?b((n(),u(h,{key:2,onClick:i[1]||(i[1]=d=>o(C)(o(e).goodsInfo.uid,o(e).goodsInfo.purchased)),loading:o(e).loading.common,class:"basic-button-item",type:"success"},{default:a(()=>[I(t(o(l)("module.Install now")),1)]),_:1},8,["loading"])),[[y]]):g("",!0),v.continueInstallation.includes(o(e).goodsInfo.state)?b((n(),u(h,{key:3,onClick:i[2]||(i[2]=d=>o(C)(o(e).goodsInfo.uid,o(e).goodsInfo.purchased)),loading:o(e).loading.common,class:"basic-button-item",type:"success"},{default:a(()=>[I(t(o(l)("module.continue installation")),1)]),_:1},8,["loading"])),[[y]]):g("",!0),v.alreadyInstalled.includes(o(e).goodsInfo.state)?b((n(),u(h,{key:4,disabled:!0,class:"basic-button-item"},{default:a(()=>[I(t(o(l)("module.installed"))+" v"+t(o(e).goodsInfo.version),1)]),_:1})),[[y]]):g("",!0),o(e).goodsInfo.type=="local"&&!v.alreadyInstalled.includes(o(e).goodsInfo.state)?b((n(),u(h,{key:5,disabled:!0,class:"basic-button-item"},{default:a(()=>[I(t(o(l)("module.Local module"))+" v"+t(o(e).goodsInfo.version),1)]),_:1})),[[y]]):g("",!0),o(e).goodsInfo.new_version&&v.updateButton.includes(o(e).goodsInfo.state)?b((n(),u(h,{key:6,onClick:i[3]||(i[3]=d=>U(o(e).goodsInfo.uid,o(e).goodsInfo.purchased)),class:"basic-button-item",type:"success"},{default:a(()=>[I(t(o(l)("module.to update")),1)]),_:1})),[[D,o(e).loading.common],[y]]):g("",!0),v.stateSwitch.includes(o(e).goodsInfo.state)?b((n(),u(h,{key:7,onClick:i[4]||(i[4]=d=>P(o(e).goodsInfo.uid)),class:"basic-button-item",type:"danger"},{default:a(()=>[I(t(o(l)("module.uninstall")),1)]),_:1})),[[D,o(e).loading.common],[y]]):g("",!0)])]),o(mo)(o(e).goodsInfo.developer)?g("",!0):(n(),_("div",Ro,[s("div",Yo,[m(O,{size:60,src:o(e).goodsInfo.developer.avatar},null,8,["src"]),s("div",Xo,[s("h3",Zo,t(o(e).goodsInfo.developer.nickname),1),s("div",jo,t(o(e).goodsInfo.developer.group?o(e).goodsInfo.developer.group:"-"),1)])]),o(e).goodsInfo.qq?(n(),_("div",Jo,[s("h4",Ko,t(o(l)("module.Contact developer")),1),s("div",oe,[s("a",{rel:"noopener noreferrer",target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin="+o(e).goodsInfo.qq+"&site=qq&menu=yes"},[s("span",null,"QQ："+t(o(e).goodsInfo.qq),1)],8,ee)])])):g("",!0),s("div",se,[s("h4",te,t(o(l)("module.Other works of developers")),1),o(e).goodsInfo.developer.goods.length>0?(n(),_("div",ne,[(n(!0),_(w,null,L(o(e).goodsInfo.developer.goods,(d,p)=>(n(),_("div",{key:p,onClick:Z=>o(to)(d.uid),class:"recommend-goods-item"},[m(k,{fit:"contain",class:"recommend-goods-logo",src:d.logo},null,8,["src"]),s("div",le,t(d.title),1)],8,de))),128))])):(n(),_("div",ae,t(o(l)("module.There are no more works")),1))])]))]),s("div",{class:"goods-detail ba-markdown",innerHTML:o(e).goodsInfo.detail_editor},null,8,ie),s("div",ce,[s("h1",null,t(o(l)("module.Update Log")),1),o(e).goodsInfo.version_log?(n(),_("div",re,[m(R,null,{default:a(()=>[(n(!0),_(w,null,L(o(e).goodsInfo.version_log,(d,p)=>(n(),u(Q,{key:p,timestamp:o(A)(d.createtime),placement:"top",color:p==0?"var(--el-color-success)":""},{default:a(()=>[m(G,{class:"version-card",shadow:"hover"},{header:a(()=>[s("div",_e,[s("h2",null,t(d.title),1),s("span",ue,t(d.short_describe),1)])]),default:a(()=>[s("div",{class:"version-detail ba-markdown",innerHTML:d.describe?d.describe:o(l)("module.No detailed update log")},null,8,me)]),_:2},1024)]),_:2},1032,["timestamp","color"]))),128))]),_:1})])):(n(),_("div",ge,t(f.$t("module.No detailed update log")),1))])]),_:1})),[[D,o(e).loading.goodsInfo]])]),_:1},8,["modelValue","title"]),m(ro),m(_o)])}}});const we=co(fe,[["__scopeId","data-v-7d196024"]]);export{we as default};
