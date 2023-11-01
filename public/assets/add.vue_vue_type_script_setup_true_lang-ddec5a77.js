import{h as Ae,r as _,o as d,k as Pe,O as p,z as n,W as g,a8 as M,aa as N,w as Me,q as A,X as z,P as y,_ as Te,V as B,U as O,m as Ee,l as De,p as b}from"./vue-99362bf9.js";import{F as m}from"./index-4085c0db.js";import{c as Ie,b as h}from"./validate-e7ebbfab.js";import{c as q,i as Ue,v as _e}from"./index-a6f6b7ce.js";import{i as P}from"./index-165813b5.js";const k="/admin/routine.Config/",S=new Map([["index",k+"index"],["add",k+"add"],["edit",k+"edit"],["del",k+"del"],["sendTestMail",k+"sendTestMail"]]);function We(){return q({url:S.get("index"),method:"get"})}function qe(f,c){return q({url:S.get(f),method:"post",data:c},{showSuccessMessage:!0})}function Fe(f){return q({url:S.get("del"),method:"DELETE",params:{ids:f}},{showSuccessMessage:!0})}function Le(f,c){return q({url:S.get("sendTestMail"),method:"POST",data:Object.assign({},f,{testMail:c})},{showSuccessMessage:!0})}const Se=Ae({__name:"createData",props:{dataTitle:{default:Ue.global.t("utils.Var")},modelValue:{default:()=>({name:"",title:"",type:"",tip:"",rule:[],extend:"",dict:"",inputExtend:""})},options:{},excludeInputTypes:{default:()=>[]},excludeValidatorRule:{default:()=>[]}},emits:["update:modelValue"],setup(f,{emit:c}){var i,C,T,w,E,D,I,U,r,R,W,F,L,$,G,j,X,H,J,Q,Y,Z,ee,te,le,ae,oe,ie,ne,ue,de,re;const t=f,{t:l}=Ue.global,V=["radio","checkbox","select","selects"],e=_({name:{show:((C=(i=t.options)==null?void 0:i.name)==null?void 0:C.show)!==!1,value:t.modelValue.name,title:((w=(T=t.options)==null?void 0:T.name)==null?void 0:w.title)??t.dataTitle+l("utils.Name")},title:{show:((D=(E=t.options)==null?void 0:E.title)==null?void 0:D.show)!==!1,value:t.modelValue.title,title:((U=(I=t.options)==null?void 0:I.title)==null?void 0:U.title)??t.dataTitle+l("utils.Title")},type:{show:((R=(r=t.options)==null?void 0:r.type)==null?void 0:R.show)!==!1,value:t.modelValue.type,title:((F=(W=t.options)==null?void 0:W.type)==null?void 0:F.title)??t.dataTitle+l("utils.type")},tip:{show:(($=(L=t.options)==null?void 0:L.tip)==null?void 0:$.show)!==!1,value:t.modelValue.tip,title:((j=(G=t.options)==null?void 0:G.tip)==null?void 0:j.title)??l("utils.Tip")},rule:{show:((H=(X=t.options)==null?void 0:X.rule)==null?void 0:H.show)!==!1,value:t.modelValue.rule,title:((Q=(J=t.options)==null?void 0:J.rule)==null?void 0:Q.title)??l("utils.Rule")},extend:{show:((Z=(Y=t.options)==null?void 0:Y.extend)==null?void 0:Z.show)!==!1,value:t.modelValue.extend,title:((te=(ee=t.options)==null?void 0:ee.extend)==null?void 0:te.title)??"FormItem "+l("utils.Extend")},dict:{show:((ae=(le=t.options)==null?void 0:le.dict)==null?void 0:ae.show)!==!1,value:t.modelValue.dict,title:((ie=(oe=t.options)==null?void 0:oe.dict)==null?void 0:ie.title)??l("utils.Dict")},inputExtend:{show:((ue=(ne=t.options)==null?void 0:ne.inputExtend)==null?void 0:ue.show)!==!1,value:t.modelValue.inputExtend,title:((re=(de=t.options)==null?void 0:de.inputExtend)==null?void 0:re.title)??"Input "+l("utils.Extend")}}),v=_({validators:{},inputTypes:{}}),u=()=>{c("update:modelValue",{name:e.name.value??"",title:e.title.value??"",type:e.type.value??"",tip:e.tip.value??"",rule:e.rule.value??[],extend:e.extend.value??"",dict:V.includes(e.type.value??"")?e.dict.value??"":"",inputExtend:e.inputExtend.value??""})};return(()=>{let K={};for(const s in P)t.excludeInputTypes.includes(P[s])||(K[P[s]]=P[s]);v.inputTypes=K;let a={};for(const s in Ie)t.excludeValidatorRule.includes(s)||(a[s]=Ie[s]);v.validators=a,u()})(),(K,a)=>{var s,se,pe,me,fe,ce,ge,ye,Ve,ve,be,he,xe,we,ke,Ce;return d(),Pe("div",null,[e.name.show?(d(),p(m,{key:0,label:e.name.title,type:"string",modelValue:e.name.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.name.value=o),placeholder:n(l)("Please input field",{field:e.name.title}),"input-attr":{onChange:u,...(se=(s=t.options)==null?void 0:s.name)==null?void 0:se.inputAttr},prop:"name"},null,8,["label","modelValue","placeholder","input-attr"])):g("",!0),e.title.show?(d(),p(m,{key:1,label:e.title.title,type:"string",modelValue:e.title.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.title.value=o),placeholder:n(l)("Please input field",{field:e.title.title}),"input-attr":{onChange:u,...(me=(pe=t.options)==null?void 0:pe.title)==null?void 0:me.inputAttr},prop:"title"},null,8,["label","modelValue","placeholder","input-attr"])):g("",!0),e.type.show?(d(),p(m,{key:2,label:e.type.title,type:"select",modelValue:e.type.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.type.value=o),data:{content:v.inputTypes},placeholder:n(l)("Please select field",{field:e.type.title}),"input-attr":{onChange:u,...(ce=(fe=t.options)==null?void 0:fe.type)==null?void 0:ce.inputAttr},prop:"type"},null,8,["label","modelValue","data","placeholder","input-attr"])):g("",!0),e.dict.show&&V.includes(e.type.value)?(d(),p(m,{key:3,label:e.dict.title,type:"textarea",modelValue:e.dict.value,"onUpdate:modelValue":a[3]||(a[3]=o=>e.dict.value=o),"input-attr":{rows:3,placeholder:n(l)("utils.One line at a time, without quotation marks, for example: key1=value1"),onChange:u,...(ye=(ge=t.options)==null?void 0:ge.dict)==null?void 0:ye.inputAttr},prop:"dict",onKeyup:a[4]||(a[4]=M(N(()=>{},["stop"]),["enter"]))},null,8,["label","modelValue","input-attr"])):g("",!0),e.tip.show?(d(),p(m,{key:4,label:e.tip.title,type:"string",modelValue:e.tip.value,"onUpdate:modelValue":a[5]||(a[5]=o=>e.tip.value=o),placeholder:n(l)("Please input field",{field:e.tip.title}),"input-attr":{onChange:u,...(ve=(Ve=t.options)==null?void 0:Ve.tip)==null?void 0:ve.inputAttr},prop:"tip"},null,8,["label","modelValue","placeholder","input-attr"])):g("",!0),e.rule.show?(d(),p(m,{key:5,label:e.rule.title,type:"selects",modelValue:e.rule.value,"onUpdate:modelValue":a[6]||(a[6]=o=>e.rule.value=o),data:{content:v.validators},placeholder:n(l)("Please select field",{field:e.rule.title}),"input-attr":{onChange:u,...(he=(be=t.options)==null?void 0:be.rule)==null?void 0:he.inputAttr},prop:"rule"},null,8,["label","modelValue","data","placeholder","input-attr"])):g("",!0),e.extend.show?(d(),p(m,{key:6,label:e.extend.title,type:"textarea",modelValue:e.extend.value,"onUpdate:modelValue":a[7]||(a[7]=o=>e.extend.value=o),"input-attr":{onChange:u,placeholder:n(l)("utils.One attribute per line without quotation marks(formitem)"),...(we=(xe=t.options)==null?void 0:xe.extend)==null?void 0:we.inputAttr},prop:"extend",onKeyup:a[8]||(a[8]=M(N(()=>{},["stop"]),["enter"]))},null,8,["label","modelValue","input-attr"])):g("",!0),e.inputExtend.show?(d(),p(m,{key:7,label:e.inputExtend.title,type:"textarea",modelValue:e.inputExtend.value,"onUpdate:modelValue":a[9]||(a[9]=o=>e.inputExtend.value=o),"input-attr":{onChange:u,placeholder:n(l)("utils.Extended properties of Input, one line without quotation marks, such as: size=large"),...(Ce=(ke=t.options)==null?void 0:ke.inputExtend)==null?void 0:Ce.inputAttr},prop:"inputExtend",onKeyup:a[10]||(a[10]=M(N(()=>{},["stop"]),["enter"]))},null,8,["label","modelValue","input-attr"])):g("",!0)])}}}),Ke={class:"title"},$e=Ae({__name:"add",props:{modelValue:{type:Boolean,default:!1},configGroup:{default:()=>({})}},emits:["update:modelValue"],setup(f,{emit:c}){const t=()=>{c("update:modelValue",!1)},{t:l}=_e(),V=Me(),e=_({inputTypes:{},labelWidth:180,submitLoading:!1,addConfig:{group:"",weigh:0,content:""},formItemData:{dict:`key1=value1
key2=value2`}}),v=_({group:[h({name:"required",trigger:"change",message:l("Please select field",{field:l("routine.config.Variable grouping")})})],name:[h({name:"required",title:l("routine.config.Variable name")}),h({name:"varName",message:l("Please enter the correct field",{field:l("routine.config.Variable name")})})],title:[h({name:"required",title:l("routine.config.Variable title")})],type:[h({name:"required",trigger:"change",message:l("Please select field",{field:l("routine.config.Variable type")})})],weigh:[h({name:"integer",title:l("routine.config.number")})]}),u=()=>{V.value&&V.value.validate(x=>{x&&(e.addConfig.content=e.formItemData.dict,delete e.formItemData.dict,qe("add",{...e.addConfig,...e.formItemData}).then(()=>{c("update:modelValue",!1)}))})};return(x,i)=>{const C=A("el-form"),T=A("el-scrollbar"),w=A("el-button"),E=A("el-dialog"),D=z("drag"),I=z("zoom"),U=z("blur");return d(),p(E,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":x.modelValue,onClose:t},{header:y(()=>[Te((d(),Pe("div",Ke,[B(O(n(l)("routine.config.Add configuration item")),1)])),[[D,[".ba-operate-dialog",".el-dialog__header"]],[I,".ba-operate-dialog"]])]),footer:y(()=>[Ee("div",{style:De("width: calc(100% - "+e.labelWidth/1.8+"px)")},[b(w,{onClick:t},{default:y(()=>[B(O(n(l)("Cancel")),1)]),_:1}),Te((d(),p(w,{loading:e.submitLoading,onClick:i[4]||(i[4]=r=>u()),type:"primary"},{default:y(()=>[B(O(n(l)("Add")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:y(()=>[b(T,{class:"ba-table-form-scrollbar"},{default:y(()=>[Ee("div",{class:"ba-operate-form ba-add-form",style:De("width: calc(100% - "+e.labelWidth/2+"px)")},[b(C,{ref_key:"formRef",ref:V,onKeyup:i[3]||(i[3]=M(r=>u(),["enter"])),rules:v,model:{...e.addConfig,...e.formItemData},"label-position":"right","label-width":160},{default:y(()=>[b(m,{label:n(l)("routine.config.Variable grouping"),type:"select",modelValue:e.addConfig.group,"onUpdate:modelValue":i[0]||(i[0]=r=>e.addConfig.group=r),prop:"group",data:{content:x.configGroup}},null,8,["label","modelValue","data"]),b(Se,{modelValue:e.formItemData,"onUpdate:modelValue":i[1]||(i[1]=r=>e.formItemData=r)},null,8,["modelValue"]),b(m,{label:n(l)("Weigh"),type:"number",modelValue:e.addConfig.weigh,"onUpdate:modelValue":i[2]||(i[2]=r=>e.addConfig.weigh=r),modelModifiers:{number:!0},prop:"weigh"},null,8,["label","modelValue"])]),_:1},8,["rules","model"])],4)]),_:1})]),_:1},8,["model-value"])}}});export{$e as _,Le as a,Fe as d,We as i,qe as p};
