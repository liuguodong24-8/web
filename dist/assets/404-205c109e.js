import{h as v,a0 as h,w as f,E as g,af as k,q as b,o as $,k as w,m as e,U as t,V as c,p as l,P as p,a1 as C,a2 as B}from"./vue-9888607f.js";import{_ as I}from"./index-d68ba36c.js";const y="/assets/qr-de3b60c2.png",_=o=>(C("data-v-1e5abc9c"),o=o(),B(),o),M={class:"page"},S={class:"container"},V=_(()=>e("div",{class:"font-h1"},":(",-1)),q={class:"tip"},N={class:"complete"},R={class:"percentage"},T={class:"details"},x=_(()=>e("div",{class:"qr-image"},[e("img",{src:y,alt:"QR Code"})],-1)),E={class:"stopcode"},U={class:"stopcode-text"},D={class:"stopcode-text"},P=v({__name:"404",setup(o){const u=h(),a=f(0);var n=null;function m(){a.value+=Math.floor(Math.random()*50),a.value>=100?(a.value=100,u.back()):i()}function i(){n=setTimeout(m,Math.random()*(1e3-500)+500)}return g(()=>{i()}),k(()=>{clearTimeout(n)}),(s,r)=>{const d=b("router-link");return $(),w("div",M,[e("div",S,[V,e("div",q,t(s.$t("404.problems tip")),1),e("div",N,[c(t(s.$t("Complete"))+" ",1),e("span",R,t(a.value),1),c("% ")]),e("div",T,[x,e("div",E,[e("div",U,t(s.$t("404.We will automatically return to the previous page when we are finished")),1),e("div",D,[l(d,{class:"stopcode-a",to:""},{default:p(()=>[e("span",{onClick:r[0]||(r[0]=Q=>s.$router.back())},t(s.$t("404.Back to previous page")),1)]),_:1}),l(d,{class:"stopcode-a",to:"/"},{default:p(()=>[c(t(s.$t("404.Return to home page")),1)]),_:1})])])])])])}}});const z=I(P,[["__scopeId","data-v-1e5abc9c"]]);export{z as default};
