import{u as B,s as o}from"./store-28b20c36.js";import{s as N,c as P,o as y,a as U}from"./index-7d2e71e2.js";import{v as $,_ as A}from"./index-764fcd0d.js";import{h as I,q as f,X as v,o as a,k as r,p as g,P as u,_ as c,z as e,i as O,m as s,U as n,V as d,Z as k,O as _,W as b}from"./vue-7c431e9b.js";const z={key:0,class:"order-info"},D={class:"order-info-item"},E={class:"order-info-item"},M={class:"order-info-item"},W={class:"order-info-item"},q={key:0,class:"order-price"},F={key:1,class:"order-price"},S={class:"order-footer"},T={class:"order-agreement"},X={href:"https://doc.buildadmin.com/guide/other/appendix/templateAgreement.html",target:"_blank",rel:"noopener noreferrer"},Z={class:"order-info-buttons"},j=I({__name:"buy",setup(G){const{t}=$(),h=B();return(H,l)=>{const V=f("el-alert"),x=f("el-checkbox"),m=f("el-button"),C=f("el-dialog"),p=v("blur"),w=v("loading");return a(),r("div",null,[g(C,{modelValue:e(o).dialog.buy,"onUpdate:modelValue":l[6]||(l[6]=i=>e(o).dialog.buy=i),class:"buy-dialog",title:e(t)("module.Confirm order info"),top:"20vh",width:"28%"},{default:u(()=>[c((a(),r("div",null,[g(V,{title:e(t)("module.Module installation warning"),type:"error",center:!0,closable:!1},null,8,["title"]),e(O)(e(o).buy.info)?b("",!0):(a(),r("div",z,[s("div",D,n(e(t)("module.Order title"))+"："+n(e(o).buy.info.title),1),s("div",E,n(e(t)("module.Order No"))+"："+n(e(o).buy.info.sn),1),s("div",M,n(e(t)("module.Purchase user"))+"："+n(e(N)(e(h))),1),s("div",W,[d(n(e(t)("module.Order price"))+"： ",1),e(o).buy.info.purchased?(a(),r("span",F,n(e(t)("module.Purchased, can be installed directly")),1)):(a(),r("span",q,n(e(P)(e(o).buy.info.amount,e(o).buy.info.pay.money?1:0)),1))]),s("div",S,[s("div",T,[g(x,{modelValue:e(o).buy.agreement,"onUpdate:modelValue":l[0]||(l[0]=i=>e(o).buy.agreement=i),size:"small",label:""},null,8,["modelValue"]),s("span",null,[d(n(e(t)("module.Understand and agree"))+"《 ",1),s("a",X,n(e(t)("module.Module purchase and use agreement")),1),d(" 》 ")])]),s("div",Z,[e(o).buy.info.purchased?c((a(),_(m,{key:1,loading:e(o).loading.common,onClick:l[5]||(l[5]=i=>e(U)(e(o).buy.info.uid,e(o).buy.info.id)),type:"warning"},{default:u(()=>[d(n(e(t)("module.Install now")),1)]),_:1},8,["loading"])),[[p]]):(a(),r(k,{key:0},[e(o).buy.info.pay.score?c((a(),_(m,{key:0,loading:e(o).loading.common,onClick:l[1]||(l[1]=i=>e(y)("score")),type:"warning"},{default:u(()=>[d(n(e(t)("module.Point payment")),1)]),_:1},8,["loading"])),[[p]]):b("",!0),e(o).buy.info.pay.money?(a(),r(k,{key:1},[c((a(),_(m,{loading:e(o).loading.common,onClick:l[2]||(l[2]=i=>e(y)("balance")),type:"warning"},{default:u(()=>[d(n(e(t)("module.Balance payment")),1)]),_:1},8,["loading"])),[[p]]),c((a(),_(m,{loading:e(o).loading.common,onClick:l[3]||(l[3]=i=>e(y)("wx")),type:"success"},{default:u(()=>[d(n(e(t)("module.Wechat payment")),1)]),_:1},8,["loading"])),[[p]]),c((a(),_(m,{loading:e(o).loading.common,onClick:l[4]||(l[4]=i=>e(y)("zfb")),type:"primary"},{default:u(()=>[d(n(e(t)("module.Alipay payment")),1)]),_:1},8,["loading"])),[[p]])],64)):b("",!0)],64))])])]))])),[[w,e(o).loading.buy]])]),_:1},8,["modelValue","title"])])}}});const R=A(j,[["__scopeId","data-v-314ecbc7"]]);export{R as default};
