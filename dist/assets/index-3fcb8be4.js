import{h as z,w as L,r as O,E as R,q as p,X as j,o as r,k as _,_ as J,O as f,P as u,p as m,a8 as y,Z as V,Y as E,aa as w,m as K,U as h,z as g,W as b,V as S,J as Q,ai as W}from"./vue-99362bf9.js";import{F as C}from"./index-4085c0db.js";import{_ as X,i as Y,p as Z,d as H,a as ee}from"./add.vue_vue_type_script_setup_true_lang-ddec5a77.js";import{r as te}from"./router-a223bf12.js";import{b as oe}from"./validate-e7ebbfab.js";import{v as ne,u as ae,t as A,_ as re}from"./index-a6f6b7ce.js";import"./index-165813b5.js";import"./index-e9f3c4e4.js";const le={class:"default-main"},ie={class:"config-form-item"},se={class:"config-form-item-name"},de={class:"del-config-form-item"},ue={key:0,class:"send-test-mail"},ce=["onClick"],fe=z({name:"routine/config",__name:"index",setup(pe){const{t:l}=ne(),T=ae(),$=L(),e=O({loading:!0,config:[],remark:"",configGroup:{},activeTab:"",showAddForm:!1,rules:{},form:{},quickEntrance:{},formKey:A()}),D=()=>{Y().then(i=>{e.config=i.data.list,e.remark=i.data.remark,e.configGroup=i.data.configGroup,e.quickEntrance=i.data.quickEntrance,e.loading=!1;for(const a in e.configGroup){e.activeTab=a;break}let o={},n={};for(const a in e.config)for(const s in e.config[a].list){if(e.config[a].list[s].rule){let k=e.config[a].list[s].rule.split(","),x=[];k.forEach(B=>{x.push(oe({name:B,title:e.config[a].list[s].title}))}),n=Object.assign(n,{[e.config[a].list[s].name]:x})}o[e.config[a].list[s].name]=e.config[a].list[s].type=="number"?parseFloat(e.config[a].list[s].value):e.config[a].list[s].value}e.form=o,e.rules=n,e.formKey=A()}).catch(()=>{e.loading=!1})},I=i=>{if(i=="add_config")return e.showAddForm=!0,!1},v=()=>{$.value&&$.value.validate(i=>{if(i){const o={};for(const n in e.config)if(n==e.activeTab)for(const a in e.config[n].list)o[e.config[n].list[a].name]=e.form[e.config[n].list[a].name]??"";Z("edit",o).then(()=>{for(const n in T.$state)o[n]&&T.$state[n]!=o[n]&&(T.$state[n]=o[n])})}})},M=i=>{H([i.id]).then(()=>{D()})},q=()=>{if(!e.form.smtp_server||!e.form.smtp_port||!e.form.smtp_user||!e.form.smtp_pass||!e.form.smtp_sender_mail)return Q({type:"error",message:l("routine.config.Please enter the correct mail configuration")}),!1;W.prompt(l("routine.config.Please enter the recipient email address"),l("routine.config.Test mail sending"),{confirmButtonText:l("routine.config.send out"),cancelButtonText:l("Cancel"),inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:l("routine.config.Please enter the correct email address"),beforeClose:(i,o,n)=>{i==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText=l("routine.config.Sending"),ee(e.form,o.inputValue).then(a=>{n()}).catch(a=>{n()})):n()}})};return R(()=>{D()}),(i,o)=>{const n=p("Icon"),a=p("el-popconfirm"),s=p("el-button"),k=p("el-tab-pane"),x=p("el-tabs"),B=p("el-form"),F=p("el-col"),N=p("el-card"),P=p("el-row"),G=j("loading");return r(),_("div",le,[J((r(),f(P,{gutter:20},{default:u(()=>[m(F,{class:"xs-mb-20",xs:24,sm:16},{default:u(()=>[e.loading?b("",!0):(r(),f(B,{ref_key:"formRef",ref:$,onKeyup:o[7]||(o[7]=y(d=>v(),["enter"])),model:e.form,rules:e.rules,"label-position":"top",key:e.formKey},{default:u(()=>[m(x,{modelValue:e.activeTab,"onUpdate:modelValue":o[6]||(o[6]=d=>e.activeTab=d),type:"border-card","before-leave":I},{default:u(()=>[(r(!0),_(V,null,E(e.config,(d,U)=>(r(),f(k,{class:"config-tab-pane",key:U,name:U,label:d.title},{default:u(()=>[(r(!0),_(V,null,E(d.list,(t,me)=>(r(),_("div",ie,[t.group==e.activeTab?(r(),_(V,{key:0},[t.type=="number"?(r(),f(C,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,modelModifiers:{number:!0},attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip},key:"number-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="editor"?(r(),f(C,{label:t.title,type:t.type,onKeyup:[o[0]||(o[0]=y(w(()=>{},["stop"]),["enter"])),o[1]||(o[1]=y(w(c=>v(),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,style:{zIndex:99},...t.input_extend},data:{tip:t.tip},key:"editor-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="textarea"?(r(),f(C,{label:t.title,type:t.type,onKeyup:[o[2]||(o[2]=y(w(()=>{},["stop"]),["enter"])),o[3]||(o[3]=y(w(c=>v(),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,rows:3,...t.input_extend},data:{tip:t.tip},key:"textarea-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):(r(),f(C,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":c=>e.form[t.name]=c,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip,content:t.content?t.content:{}},key:"other-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])),K("div",se,"$"+h(t.name),1),K("div",de,[t.allow_del?(r(),f(a,{key:0,onConfirm:c=>M(t),confirmButtonText:g(l)("Delete"),title:g(l)("routine.config.Are you sure to delete the configuration item?")},{reference:u(()=>[m(n,{class:"close-icon",size:"15",name:"el-icon-Close"})]),_:2},1032,["onConfirm","confirmButtonText","title"])):b("",!0)])],64)):b("",!0)]))),256)),d.name=="mail"?(r(),_("div",ue,[m(s,{onClick:o[4]||(o[4]=t=>q())},{default:u(()=>[S(h(g(l)("routine.config.Test mail sending")),1)]),_:1})])):b("",!0),m(s,{type:"primary",onClick:o[5]||(o[5]=t=>v())},{default:u(()=>[S(h(g(l)("Save")),1)]),_:1})]),_:2},1032,["name","label"]))),128)),m(k,{name:"add_config",class:"config-tab-pane config-tab-pane-add",label:g(l)("routine.config.Add configuration item")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model","rules"]))]),_:1}),m(F,{xs:24,sm:8},{default:u(()=>[m(N,{header:g(l)("routine.config.Quick configuration entry")},{default:u(()=>[(r(!0),_(V,null,E(e.quickEntrance,d=>(r(),f(s,{class:"config_quick_entrance"},{default:u(()=>[K("div",{onClick:U=>g(te)(d.value)},h(d.key),9,ce)]),_:2},1024))),256))]),_:1},8,["header"])]),_:1})]),_:1})),[[G,e.loading]]),e.loading?b("",!0):(r(),f(X,{key:0,modelValue:e.showAddForm,"onUpdate:modelValue":o[8]||(o[8]=d=>e.showAddForm=d),"config-group":e.configGroup},null,8,["modelValue","config-group"]))])}}});const we=re(fe,[["__scopeId","data-v-ffd696aa"]]);export{we as default};
