import{h as Oe,ab as Je,a0 as We,w as Fe,r as ve,E as Ye,ay as U,J as I,n as Se,aF as Ce,q as F,X as oe,o as s,k as b,m as u,p as n,P as c,z as r,O as g,V,U as h,W as P,_ as N,Z as S,Y as w,ai as Qe,$ as Xe,ac as G,i as z,l as Ve,a8 as Ze,am as ke,al as el,a1 as ll,a2 as tl}from"./vue-9888607f.js";import{S as we,B as _e}from"./index-4f33ef6e.js";import{F as p}from"./index-d87f9e8e.js";import{t as al,F as ol,V as il,af as Pe,_ as rl}from"./index-d68ba36c.js";import{f as R,s as k,d as Ne,t as T,g as dl,a as ie,b as nl,c as sl,e as De,h as cl,p as ml,i as ul}from"./crud-3858db9b.js";import{b as E,a as fl}from"./validate-905cfe5c.js";import"./index-5b09613c.js";const pl=A=>(ll("data-v-615cc261"),A=A(),tl(),A),bl={class:"default-main"},gl={class:"header-config-box"},yl={class:"header"},hl={class:"header-item-box"},Fl={class:"header-right"},vl={key:0,class:"header-senior-config-box"},Sl={class:"header-senior-config-form"},Cl={class:"default-sort-field-box"},Vl=["onClick","data-id"],kl={class:"design-field"},wl={class:"design-field"},_l={class:"design-field-right"},Pl={key:0,class:"design-field-empty"},Nl={class:"field-config ba-scroll-style"},Dl={key:0,class:"design-field-empty"},Tl={class:"field-inline"},Ll={class:"field-inline"},Ul={class:"field-inline"},xl={class:"block-help"},Il={class:"confirm-generate-dialog-body"},Rl=pl(()=>u("br",null,null,-1)),El={class:"confirm-generate-dialog-footer"},Al={class:"design-timeline-box"},Bl={class:"design-change-tips"},Ml={class:"confirm-generate-dialog-footer"},Kl=Oe({__name:"design",setup(A){Je(t=>({"871b67f6":e.error.tableName?"70px":"60px","7b6bc962":e.draggingField?"1px dashed var(--el-color-primary)":e.fields.length?"none":"1px dashed var(--el-border-color)"}));const{t:o}=al(),Te=We(),re=Fe(),j=Fe(),B=ol();let de=1;const e=ve({loading:{init:!1,generate:!1,remoteSelect:!1},table:{name:"",comment:"",quickSearchField:[],defaultSortField:"",formFields:[],columnFields:[],defaultSortType:"desc",generateRelativePath:"",isCommonModel:0,modelFile:"",controllerFile:"",validateFile:"",webViewsDir:"",designChange:[],rebuild:"No"},fields:[],activateField:-1,fieldCollapseName:["common","base","senior"],remoteSelectPre:{show:!1,index:-1,dbList:[],fieldList:[],modelFileList:[],controllerFileList:[],loading:!1,hideDelField:!1,form:{table:"",pk:"",label:"",joinField:[],modelFile:"",controllerFile:""}},showHeaderSeniorConfig:!1,confirmGenerate:{show:!1,table:!1,controller:!1},draggingField:!1,fieldBackup:{},showDesignChangeLog:!1,error:{tableName:"",fieldName:null,fieldNameDuplication:null}}),Le=t=>{e.activateField=t},Ue=()=>{const t=U(e.fields[e.activateField]);for(const l in t.table)t.table[l]=t.table[l].value;for(const l in t.form)t.form[l]=t.form[l].value;e.fields[e.activateField]=M(t)},q=(t,l)=>{e.fieldBackup=U(t),e.fieldBackup.index=l},H=async(t,l)=>{let i=0;for(;e.fieldBackup.index!=l;)if(i++,await new Promise(f=>setTimeout(f,300)),i>3)throw new Error(o("crud.crud.If the data is abnormal, repeat the previous step"));const d=e.fieldBackup.name;for(const f in T)for(const v in e.table[T[f]])e.table[T[f]][v]==d&&(e.table[T[f]][v]=t);e.table.defaultSortField&&e.table.defaultSortField==d&&(e.table.defaultSortField=t),x({type:"change-field-name",index:e.activateField,oldName:d,newName:t}),ne("ElMessage"),se("ElMessage")},ne=t=>{e.error.fieldName&&(e.error.fieldName.close(),e.error.fieldName=null);for(const l in e.fields)if(!fl(e.fields[l].name)){let i=o("crud.crud.Field name is invalid It starts with a letter or underscore and cannot contain any character other than letters, digits, or underscores",{field:e.fields[l].name});return t=="ElMessage"?e.error.fieldName=ke({message:i,type:"error",duration:0}):I({type:"error",message:i}),!1}return!0},se=t=>{e.error.fieldNameDuplication&&(e.error.fieldNameDuplication.close(),e.error.fieldNameDuplication=null);for(const l in e.fields){let i=0;for(const d in e.fields)if(e.fields[l].name==e.fields[d].name&&i++,i>1){let f=o("crud.crud.Field name duplication",{field:e.fields[l].name});return t=="ElMessage"?e.error.fieldNameDuplication=ke({message:f,type:"error",duration:0}):I({type:"error",message:f}),!1}}return!0},_=()=>{x({type:"change-field-attr",index:e.activateField,oldName:e.fields[e.activateField].name,newName:""})},ce=t=>{if(e.fields[t]){e.activateField=-1,e.fields[t].name==e.table.defaultSortField&&(e.table.defaultSortField=""),x({type:"del-field",oldName:e.fields[t].name,newName:""});for(const l in T){const i=e.table[T[l]].findIndex(d=>d==e.fields[t].name);i!=-1&&e.table[T[l]].splice(i,1)}e.fields.splice(t,1)}},me=(t,l=!1)=>{e.remoteSelectPre.show=!0,e.remoteSelectPre.loading=!0,e.remoteSelectPre.index=t,e.remoteSelectPre.hideDelField=l,dl().then(i=>{e.remoteSelectPre.dbList=i.data.dbs,e.fields[t]&&e.fields[t].form["remote-table"].value&&(e.remoteSelectPre.form.table=e.fields[t].form["remote-table"].value,e.remoteSelectPre.form.pk=e.fields[t].form["remote-pk"].value,e.remoteSelectPre.form.label=e.fields[t].form["remote-field"].value,e.remoteSelectPre.form.controllerFile=e.fields[t].form["remote-controller"].value,e.remoteSelectPre.form.modelFile=e.fields[t].form["remote-model"].value,e.remoteSelectPre.form.joinField=e.fields[t].form["relation-fields"].value.split(","),Pe(e.fields[t].form["remote-table"].value).then(d=>{const f={};for(const v in d.data.fieldList)f[v]=(v?v+" - ":"")+d.data.fieldList[v];e.remoteSelectPre.fieldList=f}),(z(e.remoteSelectPre.modelFileList)||z(e.remoteSelectPre.controllerFileList))&&ie(e.fields[t].form["remote-table"].value).then(d=>{e.remoteSelectPre.modelFileList=d.data.modelFileList,e.remoteSelectPre.controllerFileList=d.data.controllerFileList}))}).finally(()=>{e.remoteSelectPre.loading=!1})},xe=(t,l)=>{if(["remoteSelect","remoteSelects"].includes(l.designType))return me(t)},O=()=>{e.confirmGenerate.show=!1},J=()=>{e.loading.generate=!0;const t=U(e.fields);for(const l in t){for(const i in t[l].table)t[l].table[i]=t[l].table[i].value;for(const i in t[l].form)t[l].form[i]=t[l].form[i].value}nl({type:k.type,table:e.table,fields:t}).then(()=>{setTimeout(()=>{Te.go(0)},1e3)}).finally(()=>{e.loading.generate=!1,O()})},Ie=()=>{if(!ne("ElNotification")||!se("ElNotification"))return;let t="";if(e.fields.findIndex(i=>i.primaryKey)===-1&&(t=o("crud.crud.Please design the primary key field!")),e.table.name||(t=o("crud.crud.Please enter the data table name!")),e.error.tableName&&(t=o("crud.crud.Please enter the correct table name!")),t){I({type:"error",message:t});return}e.loading.generate=!0,sl({table:e.table.name,controllerFile:e.table.controllerFile}).then(()=>{J()}).catch(i=>{e.loading.generate=!1,i.code==-1?(e.confirmGenerate.table=i.data.table,e.confirmGenerate.controller=i.data.controller,ue()||e.confirmGenerate.controller?e.confirmGenerate.show=!0:J()):I({type:"error",message:i.msg})})},ue=()=>e.confirmGenerate.table&&(k.type=="create"||e.table.rebuild=="Yes"),Re=()=>{if(!e.table.name&&!e.table.comment&&!e.fields.length)return De("start");el.confirm(o("crud.crud.It is irreversible to give up the design Are you sure you want to give up?"),o("Reminder"),{confirmButtonText:o("crud.crud.give up"),cancelButtonText:o("Cancel"),type:"warning"}).then(()=>{De("start")}).catch(()=>{})},M=t=>{const l=U(Ne[t.designType]);for(const i in t.form)l.form[i]&&(l.form[i].value=t.form[i]),i=="image-multi"&&t.form[i]&&(l.table.render=cl("render","images"));for(const i in t.table)l.table[i]&&(l.table[i].value=t.table[i]);return t.form=l.form,t.table=l.table,t},fe=t=>{if(_(),["enum","set"].includes(e.fields[e.activateField].type)){if(!t){e.fields[e.activateField].dataType=`${e.fields[e.activateField].type}()`;return}t=t.replaceAll("：",":"),t=t.replaceAll("，",",");let l=t.split(":");l[1]&&(l=l[1].split(","),l=l.map(i=>{if(!i)return"";let d=i.split("=");return d[0]&&d[1]?`'${d[0]}'`:""}).filter(i=>i!=""),e.fields[e.activateField].dataType=`${e.fields[e.activateField].type}(${l.join(",")})`)}},Ee=()=>{if(W(),!!["db","sql","log"].includes(k.type)){if(e.loading.init=!0,k.type=="log"){ml(parseInt(k.startData.logId)).then(t=>{e.table=t.data.table,W(),t.data.table.empty&&(e.table.rebuild="Yes"),e.table.isCommonModel=parseInt(t.data.table.isCommonModel);const l=t.data.fields;for(const i in l){const d=M(U(l[i]));e.fields.push(d)}}).finally(()=>{e.loading.init=!1});return}ul(k.type,k.startData.db,k.startData.sql).then(t=>{let l=[];for(const i in t.data.columns){const d=M(t.data.columns[i]);["id","update_time","create_time","updatetime","createtime"].includes(d.name)||e.table.formFields.push(d.name),["textarea","file","files","editor","password","array"].includes(d.designType)||e.table.columnFields.push(d.name),d.designType=="pk"&&(e.table.defaultSortField=d.name,e.table.quickSearchField.push(d.name)),d.designType=="weigh"&&(e.table.defaultSortField=d.name),l.push(d)}e.fields=l,e.table.comment=t.data.comment,t.data.empty&&(e.table.rebuild="Yes"),k.type=="db"&&k.startData.db&&(e.table.name=k.startData.db,K(k.startData.db))}).finally(()=>{e.loading.init=!1})}};Ye(()=>{Ee();const t=we.create(re.value,{group:"design-field",animation:200,filter:".design-field-empty",onAdd:l=>{var f,v;const i=(v=(f=l.originalEvent)==null?void 0:f.dataTransfer)==null?void 0:v.getData("name"),d=R[i];if(d&&d[l.oldIndex]){const y=M(U(d[l.oldIndex]));if(y.primaryKey==!0){if(e.fields.find(X=>X.primaryKey))return I({type:"error",message:o("crud.crud.There can only be one primary key field")}),l.item.remove();e.table.defaultSortField=y.name,e.table.quickSearchField.push(y.name)}y.designType=="weigh"&&(e.table.defaultSortField=y.name),il(e.fields,"name",y.name)&&(y.name=y.name+de,de++),e.fields.splice(l.newIndex,0,y),x({type:"add-field",index:l.newIndex,newName:y.name,oldName:"",after:l.newIndex===0?"FIRST FIELD":e.fields[l.newIndex-1].name}),["remoteSelect","remoteSelects"].includes(y.designType)&&me(l.newIndex,!0),y.formBuildExclude||e.table.formFields.push(y.name),y.tableBuildExclude||e.table.columnFields.push(y.name)}l.item.remove(),Se(()=>{t.sort(Ce(e.fields.length).map(y=>y.toString()))})},onEnd:l=>{const i=e.fields[l.oldIndex];e.fields.splice(l.oldIndex,1),e.fields.splice(l.newIndex,0,i),x({type:"change-field-order",index:l.newIndex,newName:"",oldName:i.name,after:l.newIndex===0?"FIRST FIELD":e.fields[l.newIndex-1].name}),Se(()=>{t.sort(Ce(e.fields.length).map(d=>d.toString()))})}});B.value.forEach((l,i)=>{we.create(l,{sort:!1,group:{name:"design-field",pull:"clone",put:!1},animation:200,setData:d=>{d.setData("name",Object.keys(R)[i])},onStart:()=>{e.draggingField=!0},onEnd:()=>{e.draggingField=!1}})})});const Ae=t=>{if(!t)return e.error.tableName="";/^[a-z_][a-z0-9_]*$/.test(t)?(e.error.tableName="",K(t)):e.error.tableName=o("crud.crud.Use lower case underlined for table names"),W()},W=()=>{e.table.rebuild="No",e.table.designChange=[]},K=t=>{t&&ie(t,e.table.isCommonModel).then(l=>{e.table.modelFile=l.data.modelFile,e.table.controllerFile=l.data.controllerFile,e.table.validateFile=l.data.validateFile,e.table.webViewsDir=l.data.webViewsDir,e.table.generateRelativePath=t.replaceAll("/","\\")})},Be=()=>{K(e.table.generateRelativePath)},Me=t=>{t&&(Y(),e.remoteSelectPre.form.table=t,e.loading.remoteSelect=!0,Pe(t).then(l=>{e.remoteSelectPre.form.pk=l.data.pk;const i=["name","title","username","nickname"];for(const f in l.data.fieldList)if(i.includes(f)){e.remoteSelectPre.form.label=f,e.remoteSelectPre.form.joinField.push(f);break}const d={};for(const f in l.data.fieldList)d[f]=(f?f+" - ":"")+l.data.fieldList[f];e.remoteSelectPre.fieldList=d}).finally(()=>{e.loading.remoteSelect=!1}),ie(t).then(l=>{e.remoteSelectPre.modelFileList=l.data.modelFileList,e.remoteSelectPre.controllerFileList=l.data.controllerFileList,Object.keys(l.data.modelFileList).includes(l.data.modelFile)&&(e.remoteSelectPre.form.modelFile=l.data.modelFile),Object.keys(l.data.controllerFileList).includes(l.data.controllerFile)&&(e.remoteSelectPre.form.controllerFile=l.data.controllerFile)}))},pe=()=>{const t=()=>{if(e.fields[e.remoteSelectPre.index].name=="remote_select"){q(e.fields[e.remoteSelectPre.index],e.remoteSelectPre.index);const l=e.remoteSelectPre.form.table+(e.fields[e.remoteSelectPre.index].designType=="remoteSelect"?"_id":"_ids");e.fields[e.remoteSelectPre.index].name=l,H(l,e.remoteSelectPre.index)}e.fields[e.remoteSelectPre.index].form["remote-table"].value=e.remoteSelectPre.form.table,e.fields[e.remoteSelectPre.index].form["remote-pk"].value=e.remoteSelectPre.form.pk,e.fields[e.remoteSelectPre.index].form["remote-field"].value=e.remoteSelectPre.form.label,e.fields[e.remoteSelectPre.index].form["remote-controller"].value=e.remoteSelectPre.form.controllerFile,e.fields[e.remoteSelectPre.index].form["remote-model"].value=e.remoteSelectPre.form.modelFile,e.fields[e.remoteSelectPre.index].form["relation-fields"].value=e.fields[e.remoteSelectPre.index].designType=="remoteSelect"?e.remoteSelectPre.form.joinField.join(","):e.remoteSelectPre.form.label,e.remoteSelectPre.index=-1,e.remoteSelectPre.show=!1,Y()};j.value&&j.value.validate(l=>{l&&t()})},be=()=>{e.remoteSelectPre.show=!1,Y(),e.remoteSelectPre.index!==-1&&e.remoteSelectPre.hideDelField&&ce(e.remoteSelectPre.index)},Y=()=>{for(const t in e.remoteSelectPre.form)t=="joinField"?e.remoteSelectPre.form[t]=[]:e.remoteSelectPre.form[t]=""},Ke=ve({table:[E({name:"required",title:o("crud.crud.remote-table")})],pk:[E({name:"required",title:o("crud.crud.Drop down value field")})],label:[E({name:"required",title:o("crud.crud.Drop down label field")})],joinField:[E({name:"required",title:o("crud.crud.Fields displayed in the table")})],controllerFile:[E({name:"required",title:o("crud.crud.Controller position")})]}),x=t=>{if(k.type=="create")return;let l=!0;if(t.type=="change-field-name"){for(const i in e.table.designChange)e.table.designChange[i].type=="change-field-attr"&&t.oldName==e.table.designChange[i].oldName&&(e.table.designChange[i].oldName=t.newName),e.table.designChange[i].type=="change-field-order"&&t.oldName==e.table.designChange[i].oldName&&(e.table.designChange[i].oldName=t.newName),e.table.designChange[i].after==t.oldName&&(e.table.designChange[i].after=t.newName);for(const i in e.table.designChange){if(e.table.designChange[i].type=="add-field"&&e.table.designChange[i].newName==t.oldName){e.table.designChange[i].newName=t.newName,l=!1;break}if(e.table.designChange[i].type=="change-field-name"&&e.table.designChange[i].newName==t.oldName){t.oldName=e.table.designChange[i].oldName,e.table.designChange[i]=t,e.table.designChange[i].newName==e.table.designChange[i].oldName&&e.table.designChange.splice(i,1),l=!1;break}}}else if(t.type=="del-field"){let i=!1;e.table.designChange=e.table.designChange.filter(d=>{i=d.type=="add-field"&&d.newName==t.oldName;const f=d.type=="change-field-name"&&d.newName==t.oldName,v=d.type=="change-field-attr"&&d.oldName==t.oldName,y=d.type=="change-field-order"&&d.oldName==t.oldName;return f&&(t.oldName=d.oldName),!i&&!f&&!v&&!y}),i&&(l=!1);for(const d in e.table.designChange)if(e.table.designChange[d].type=="del-field"&&e.table.designChange[d].oldName==t.oldName){l=!1;break}}else if(t.type=="change-field-attr")for(const i in e.table.designChange){if(e.table.designChange[i].type=="change-field-attr"&&e.table.designChange[i].oldName==t.oldName){l=!1;break}if(e.table.designChange[i].type=="add-field"&&e.table.designChange[i].newName==t.oldName){l=!1;break}}else if(t.type=="change-field-order")for(const i in e.table.designChange){if(e.table.designChange[i].type=="add-field"&&e.table.designChange[i].newName==t.oldName){e.table.designChange[i].after=t.after,l=!1;break}if(e.table.designChange[i].type=="change-field-order"&&e.table.designChange[i].oldName==t.oldName){e.table.designChange[i]=t,l=!1;break}}t.sync=!0,l&&e.table.designChange.push(t)},$e=t=>{switch(t.type){case"add-field":return o("crud.crud.Add field")+" "+t.newName;case"change-field-attr":return o("crud.crud.Modify field properties")+" "+t.oldName;case"change-field-name":return o("crud.crud.Modify field name")+" "+t.oldName+" => "+t.newName;case"del-field":return o("crud.crud.Delete field")+" "+t.oldName;case"change-field-order":return o("crud.crud.Modify field order")+" "+t.oldName+" => "+(t.after=="FIRST FIELD"?o("crud.crud.First field"):t.after+" "+o("crud.crud.After"));default:return o("Unknown")}},Ge=t=>{let l="";switch(t){case"change-field-name":l="warning";break;case"del-field":l="danger";break;case"add-field":l="primary";break;case"change-field-attr":l="success";break;case"change-field-order":l="info";break;default:l="success";break}return l};return(t,l)=>{const i=F("el-link"),d=F("el-button"),f=F("el-row"),v=F("el-option"),y=F("el-select"),D=F("el-form-item"),Q=F("el-checkbox"),X=F("el-input"),Z=F("Icon"),ee=F("el-collapse-item"),ze=F("el-collapse"),le=F("el-col"),$=F("el-divider"),ge=F("el-form"),ye=F("el-scrollbar"),te=F("el-dialog"),he=F("el-alert"),je=F("el-timeline-item"),qe=F("el-timeline"),L=oe("blur"),ae=oe("loading"),He=oe("drag");return s(),b("div",bl,[u("div",gl,[n(f,{class:"header-box"},{default:c(()=>[u("div",yl,[u("div",hl,[n(p,{class:"mr-20 table-name-item",label:r(o)("crud.log.table_name"),modelValue:e.table.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.table.name=a),type:"string",placeholder:r(o)("crud.crud.Name of the data table"),"input-attr":{onChange:Ae},error:e.error.tableName},null,8,["label","modelValue","placeholder","input-attr","error"]),n(p,{class:"table-comment-item",label:r(o)("crud.crud.Data Table Notes"),modelValue:e.table.comment,"onUpdate:modelValue":l[1]||(l[1]=a=>e.table.comment=a),type:"string",placeholder:r(o)("crud.crud.For example: `user table` will be generated into `user management`")},null,8,["label","modelValue","placeholder"])]),u("div",Fl,[e.table.designChange.length?(s(),g(i,{key:0,onClick:l[2]||(l[2]=a=>e.showDesignChangeLog=!0),class:"design-change-log",type:"danger"},{default:c(()=>[V(h(r(o)("crud.crud.Table design change")),1)]),_:1})):P("",!0),N((s(),g(d,{type:"primary",loading:e.loading.generate,onClick:Ie},{default:c(()=>[V(h(r(o)("crud.crud.Generate CRUD code")),1)]),_:1},8,["loading"])),[[L]]),N((s(),g(d,{onClick:Re,type:"danger"},{default:c(()=>[V(h(r(o)("crud.crud.give up")),1)]),_:1})),[[L]])])])]),_:1}),n(Qe,{name:e.showHeaderSeniorConfig?"el-zoom-in-top":"el-zoom-in-bottom"},{default:c(()=>[e.showHeaderSeniorConfig?(s(),b("div",vl,[u("div",Sl,[n(D,{"label-width":140,label:r(o)("crud.crud.Table Quick Search Fields")},{default:c(()=>[n(y,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.quickSearchField,"onUpdate:modelValue":l[3]||(l[3]=a=>e.table.quickSearchField=a),placement:"bottom"},{default:c(()=>[(s(!0),b(S,null,w(e.fields,(a,m)=>(s(),g(v,{key:m,label:a.name+(a.title?"-"+a.title:""),value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),u("div",Cl,[n(D,{"label-width":140,class:"default-sort-field",label:r(o)("crud.crud.Table Default Sort Fields")},{default:c(()=>[n(y,{clearable:!0,modelValue:e.table.defaultSortField,"onUpdate:modelValue":l[4]||(l[4]=a=>e.table.defaultSortField=a),placement:"bottom"},{default:c(()=>[(s(!0),b(S,null,w(e.fields,(a,m)=>(s(),g(v,{key:m,label:a.name+(a.title?"-"+a.title:""),value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(p,{class:"default-sort-field-type",label:r(o)("crud.crud.sort order"),modelValue:e.table.defaultSortType,"onUpdate:modelValue":l[5]||(l[5]=a=>e.table.defaultSortType=a),type:"select",data:{content:{desc:r(o)("crud.crud.sort order desc"),asc:r(o)("crud.crud.sort order asc")}}},null,8,["label","modelValue","data"])]),n(D,{"label-width":140,label:r(o)("crud.crud.Fields as Table Columns")},{default:c(()=>[n(y,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.columnFields,"onUpdate:modelValue":l[6]||(l[6]=a=>e.table.columnFields=a),placement:"bottom"},{default:c(()=>[(s(!0),b(S,null,w(e.fields,(a,m)=>(s(),g(v,{key:m,label:a.name+(a.title?"-"+a.title:""),value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(D,{"label-width":140,label:r(o)("crud.crud.Fields as form items")},{default:c(()=>[n(y,{clearable:!0,multiple:!0,class:"w100",modelValue:e.table.formFields,"onUpdate:modelValue":l[7]||(l[7]=a=>e.table.formFields=a),placement:"bottom"},{default:c(()=>[(s(!0),b(S,null,w(e.fields,(a,m)=>(s(),g(v,{key:m,label:a.name+(a.title?"-"+a.title:""),value:a.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(p,{label:r(o)("crud.crud.The relative path to the generated code"),modelValue:e.table.generateRelativePath,"onUpdate:modelValue":l[8]||(l[8]=a=>e.table.generateRelativePath=a),type:"string",attr:{labelWidth:140,blockHelp:r(o)("crud.crud.For quick combination code generation location, please fill in the relative path")},"input-attr":{onChange:K}},null,8,["label","modelValue","attr","input-attr"]),n(p,{label:r(o)("crud.crud.Generated Controller Location"),modelValue:e.table.controllerFile,"onUpdate:modelValue":l[9]||(l[9]=a=>e.table.controllerFile=a),type:"string",attr:{labelWidth:140}},null,8,["label","modelValue"]),n(D,{label:r(o)("crud.crud.Generated Data Model Location"),"label-width":140},{default:c(()=>[n(X,{modelValue:e.table.modelFile,"onUpdate:modelValue":l[11]||(l[11]=a=>e.table.modelFile=a),type:"string"},{append:c(()=>[n(Q,{onChange:Be,modelValue:e.table.isCommonModel,"onUpdate:modelValue":l[10]||(l[10]=a=>e.table.isCommonModel=a),label:r(o)("crud.crud.Common model"),size:"small","true-label":1,"false-label":0},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(p,{label:r(o)("crud.crud.Generated Validator Location"),modelValue:e.table.validateFile,"onUpdate:modelValue":l[12]||(l[12]=a=>e.table.validateFile=a),type:"string",attr:{labelWidth:140}},null,8,["label","modelValue"]),n(p,{label:r(o)("crud.crud.WEB end view directory"),modelValue:e.table.webViewsDir,"onUpdate:modelValue":l[13]||(l[13]=a=>e.table.webViewsDir=a),type:"string",attr:{labelWidth:140}},null,8,["label","modelValue"])])])):P("",!0)]),_:1},8,["name"]),u("div",{onClick:l[14]||(l[14]=a=>e.showHeaderSeniorConfig=!e.showHeaderSeniorConfig),class:"header-senior-config"},[u("span",null,h(r(o)("crud.crud.Advanced Configuration")),1),n(Z,{class:"senior-config-arrow-icon",size:"14",color:"var(--el-text-color-primary)",name:e.showHeaderSeniorConfig?"el-icon-ArrowUp":"el-icon-ArrowDown"},null,8,["name"])])]),N((s(),g(f,{class:"fields-box",gutter:20},{default:c(()=>[n(le,{xs:24,span:6},{default:c(()=>[n(ze,{class:"field-collapse",modelValue:e.fieldCollapseName,"onUpdate:modelValue":l[15]||(l[15]=a=>e.fieldCollapseName=a)},{default:c(()=>[n(ee,{title:r(o)("crud.crud.Common Fields"),name:"common"},{default:c(()=>[u("div",{class:"field-box",ref:r(B).set},[(s(!0),b(S,null,w(r(R).common,(a,m)=>(s(),b("div",{key:m,class:"field-item"},[u("span",null,h(a.title),1)]))),128))],512)]),_:1},8,["title"]),n(ee,{title:r(o)("crud.crud.Base Fields"),name:"base"},{default:c(()=>[u("div",{class:"field-box",ref:r(B).set},[(s(!0),b(S,null,w(r(R).base,(a,m)=>(s(),b("div",{key:m,class:"field-item"},[u("span",null,h(a.title),1)]))),128))],512)]),_:1},8,["title"]),n(ee,{title:r(o)("crud.crud.Advanced Fields"),name:"senior"},{default:c(()=>[u("div",{class:"field-box",ref:r(B).set},[(s(!0),b(S,null,w(r(R).senior,(a,m)=>(s(),b("div",{key:m,class:"field-item"},[u("span",null,h(a.title),1)]))),128))],512)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),n(le,{xs:24,span:12},{default:c(()=>[u("div",{ref_key:"designWindowRef",ref:re,class:"design-window ba-scroll-style"},[(s(!0),b(S,null,w(e.fields,(a,m)=>(s(),b("div",{key:m,class:Xe([m===e.activateField?"activate":"","design-field-box"]),onClick:C=>Le(m),"data-id":m},[u("div",kl,[u("span",null,h(r(o)("crud.crud.Field Name"))+"：",1),n(_e,{onPointerdown:l[16]||(l[16]=G(()=>{},["stop"])),class:"design-field-name-input",modelValue:a.name,"onUpdate:modelValue":C=>a.name=C,type:"string",attr:{size:"small",onFocus:()=>q(a,m),onChange:C=>H(C,m)}},null,8,["modelValue","onUpdate:modelValue","attr"])]),u("div",wl,[u("span",null,h(r(o)("crud.crud.field comment"))+"：",1),n(_e,{onPointerdown:l[17]||(l[17]=G(()=>{},["stop"])),class:"design-field-name-comment",modelValue:a.comment,"onUpdate:modelValue":C=>a.comment=C,type:"string",attr:{size:"small",onChange:fe}},null,8,["modelValue","onUpdate:modelValue","attr"])]),u("div",_l,[["remoteSelect","remoteSelects"].includes(a.designType)?N((s(),g(d,{key:0,onClick:G(C=>xe(m,a),["stop"]),type:"primary",size:"small",circle:""},{default:c(()=>[n(Z,{color:"var(--el-color-white)",size:"15",name:"fa fa-pencil icon"})]),_:2},1032,["onClick"])),[[L]]):P("",!0),N((s(),g(d,{onClick:G(C=>ce(m),["stop"]),type:"danger",size:"small",circle:""},{default:c(()=>[n(Z,{color:"var(--el-color-white)",size:"15",name:"fa fa-trash"})]),_:2},1032,["onClick"])),[[L]])])],10,Vl))),128)),!e.fields.length&&!e.draggingField?(s(),b("div",Pl,h(r(o)("crud.crud.Drag the left element here to start designing CRUD")),1)):P("",!0)],512)]),_:1}),n(le,{xs:24,span:6},{default:c(()=>[u("div",Nl,[e.activateField===-1?(s(),b("div",Dl,h(r(o)("crud.crud.Please select a field from the left first")),1)):(s(),b("div",{key:"activate-field-"+e.activateField},[n(ge,{"label-position":"top"},{default:c(()=>[n($,{"content-position":"left"},{default:c(()=>[V(h(r(o)("crud.crud.Common")),1)]),_:1}),n(D,{label:r(o)("crud.crud.generate")},{default:c(()=>[n(y,{onChange:Ue,class:"w100",modelValue:e.fields[e.activateField].designType,"onUpdate:modelValue":l[18]||(l[18]=a=>e.fields[e.activateField].designType=a),placement:"bottom"},{default:c(()=>[(s(!0),b(S,null,w(r(Ne),(a,m)=>(s(),g(v,{key:m,label:a.name,value:m},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(p,{label:r(o)("crud.crud.Field comments (CRUD dictionary)"),type:"textarea","input-attr":{rows:2,onChange:fe},placeholder:r(o)("crud.crud.The field comment will be used as the CRUD dictionary, and will be identified as the field title before the colon, and as the data dictionary after the colon"),modelValue:e.fields[e.activateField].comment,"onUpdate:modelValue":l[19]||(l[19]=a=>e.fields[e.activateField].comment=a)},null,8,["label","input-attr","placeholder","modelValue"]),n($,{"content-position":"left"},{default:c(()=>[V(h(r(o)("crud.crud.Field Properties")),1)]),_:1}),n(p,{label:r(o)("crud.crud.Field Name"),type:"string",modelValue:e.fields[e.activateField].name,"onUpdate:modelValue":l[20]||(l[20]=a=>e.fields[e.activateField].name=a),"input-attr":{onFocus:()=>q(e.fields[e.activateField],e.activateField),onChange:a=>H(a,e.activateField)}},null,8,["label","modelValue","input-attr"]),e.fields[e.activateField].dataType?(s(),g(p,{key:0,label:r(o)("crud.crud.Field Type"),"input-attr":{onChange:_},type:"textarea",modelValue:e.fields[e.activateField].dataType,"onUpdate:modelValue":l[21]||(l[21]=a=>e.fields[e.activateField].dataType=a)},null,8,["label","input-attr","modelValue"])):(s(),b(S,{key:1},[n(p,{label:r(o)("crud.crud.Field Type"),"input-attr":{onChange:_},type:"string",modelValue:e.fields[e.activateField].type,"onUpdate:modelValue":l[22]||(l[22]=a=>e.fields[e.activateField].type=a)},null,8,["label","input-attr","modelValue"]),u("div",Tl,[n(p,{label:r(o)("crud.crud.length"),type:"number",modelValue:e.fields[e.activateField].length,"onUpdate:modelValue":l[23]||(l[23]=a=>e.fields[e.activateField].length=a),modelModifiers:{number:!0},"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"]),n(p,{label:r(o)("crud.crud.decimal point"),type:"number",modelValue:e.fields[e.activateField].precision,"onUpdate:modelValue":l[24]||(l[24]=a=>e.fields[e.activateField].precision=a),modelModifiers:{number:!0},"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"])])],64)),n(p,{label:r(o)("crud.crud.Field Defaults"),placeholder:r(o)("crud.crud.You can directly enter null, 0, empty string"),type:"string",modelValue:e.fields[e.activateField].default,"onUpdate:modelValue":l[25]||(l[25]=a=>e.fields[e.activateField].default=a),"input-attr":{onChange:_}},null,8,["label","placeholder","modelValue","input-attr"]),u("div",Ll,[n(p,{class:"form-item-position-right",label:r(o)("crud.state.Primary key"),type:"switch",modelValue:e.fields[e.activateField].primaryKey,"onUpdate:modelValue":l[26]||(l[26]=a=>e.fields[e.activateField].primaryKey=a),"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"]),n(p,{class:"form-item-position-right",label:r(o)("crud.crud.Auto increment"),type:"switch",modelValue:e.fields[e.activateField].autoIncrement,"onUpdate:modelValue":l[27]||(l[27]=a=>e.fields[e.activateField].autoIncrement=a),"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"])]),u("div",Ul,[n(p,{class:"form-item-position-right",label:r(o)("crud.crud.Unsigned"),type:"switch",modelValue:e.fields[e.activateField].unsigned,"onUpdate:modelValue":l[28]||(l[28]=a=>e.fields[e.activateField].unsigned=a),"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"]),n(p,{class:"form-item-position-right",label:r(o)("crud.crud.Allow NULL"),type:"switch",modelValue:e.fields[e.activateField].null,"onUpdate:modelValue":l[29]||(l[29]=a=>e.fields[e.activateField].null=a),"input-attr":{onChange:_}},null,8,["label","modelValue","input-attr"])]),r(z)(e.fields[e.activateField].table)?P("",!0):(s(),b(S,{key:2},[n($,{"content-position":"left"},{default:c(()=>[V(h(r(o)("crud.crud.Field Table Properties")),1)]),_:1}),(s(!0),b(S,null,w(e.fields[e.activateField].table,(a,m)=>(s(),g(p,{key:m,label:t.$t("crud.crud."+m),type:a.type,modelValue:e.fields[e.activateField].table[m].value,"onUpdate:modelValue":C=>e.fields[e.activateField].table[m].value=C,placeholder:e.fields[e.activateField].table[m].placeholder??"",data:{content:e.fields[e.activateField].table[m].options??{}},"input-attr":e.fields[e.activateField].table[m].attr??{}},null,8,["label","type","modelValue","onUpdate:modelValue","placeholder","data","input-attr"]))),128))],64)),r(z)(e.fields[e.activateField].form)?P("",!0):(s(),b(S,{key:3},[n($,{"content-position":"left"},{default:c(()=>[V(h(r(o)("crud.crud.Field Form Properties")),1)]),_:1}),(s(!0),b(S,null,w(e.fields[e.activateField].form,(a,m)=>(s(),g(p,{key:m,label:t.$t("crud.crud."+m),type:a.type,modelValue:e.fields[e.activateField].form[m].value,"onUpdate:modelValue":C=>e.fields[e.activateField].form[m].value=C,placeholder:e.fields[e.activateField].form[m].placeholder??"",data:{content:e.fields[e.activateField].form[m].options??{}},"input-attr":e.fields[e.activateField].form[m].attr??{}},null,8,["label","type","modelValue","onUpdate:modelValue","placeholder","data","input-attr"]))),128))],64))]),_:1})]))])]),_:1})]),_:1})),[[ae,e.loading.init]]),n(te,{onClose:be,class:"ba-operate-dialog","model-value":e.remoteSelectPre.show,title:r(o)("crud.crud.Remote drop-down association information"),"close-on-click-modal":!1,"destroy-on-close":!0,onKeyup:Ze(pe,["enter"])},{footer:c(()=>[u("div",{style:Ve("width: calc(100% - 88px)")},[n(d,{onClick:be},{default:c(()=>[V(h(t.$t("Cancel")),1)]),_:1}),N((s(),g(d,{onClick:pe,type:"primary"},{default:c(()=>[V(h(t.$t("Save")),1)]),_:1})),[[L]])],4)]),default:c(()=>[n(ye,{"max-height":"60vh"},{default:c(()=>[u("div",{class:"ba-operate-form",style:Ve("width: calc(100% - 80px)")},[e.remoteSelectPre.index!=-1&&e.fields[e.remoteSelectPre.index]?N((s(),g(ge,{key:0,ref_key:"formRef",ref:j,model:e.remoteSelectPre.form,rules:Ke,"label-position":"right","label-width":"160px"},{default:c(()=>[(s(),g(p,{prop:"table",type:"select",label:r(o)("crud.crud.Associated Data Table"),modelValue:e.remoteSelectPre.form.table,"onUpdate:modelValue":l[30]||(l[30]=a=>e.remoteSelectPre.form.table=a),key:JSON.stringify(e.remoteSelectPre.dbList),data:{content:e.remoteSelectPre.dbList},"input-attr":{onChange:Me}},null,8,["label","modelValue","data","input-attr"])),N((s(),b("div",null,[(s(),g(p,{prop:"pk",type:"select",label:r(o)("crud.crud.Drop down value field"),modelValue:e.remoteSelectPre.form.pk,"onUpdate:modelValue":l[31]||(l[31]=a=>e.remoteSelectPre.form.pk=a),placeholder:r(o)("crud.crud.Please select the value field of the select component"),key:"select-value"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])),(s(),g(p,{prop:"label",type:"select",label:r(o)("crud.crud.Drop down label field"),modelValue:e.remoteSelectPre.form.label,"onUpdate:modelValue":l[32]||(l[32]=a=>e.remoteSelectPre.form.label=a),placeholder:r(o)("crud.crud.Please select the label field of the select component"),key:"select-label"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])),e.fields[e.remoteSelectPre.index].designType=="remoteSelect"?(s(),g(p,{prop:"joinField",type:"selects",label:r(o)("crud.crud.Fields displayed in the table"),modelValue:e.remoteSelectPre.form.joinField,"onUpdate:modelValue":l[33]||(l[33]=a=>e.remoteSelectPre.form.joinField=a),placeholder:r(o)("crud.crud.Please select the fields displayed in the table"),key:"join-field"+JSON.stringify(e.remoteSelectPre.fieldList),data:{content:e.remoteSelectPre.fieldList}},null,8,["label","modelValue","placeholder","data"])):P("",!0),(s(),g(p,{prop:"controllerFile",type:"select",label:r(o)("crud.crud.Controller position"),modelValue:e.remoteSelectPre.form.controllerFile,"onUpdate:modelValue":l[34]||(l[34]=a=>e.remoteSelectPre.form.controllerFile=a),placeholder:r(o)("crud.crud.Please select the controller of the data table"),key:"controller-file"+JSON.stringify(e.remoteSelectPre.controllerFileList),data:{content:e.remoteSelectPre.controllerFileList},attr:{blockHelp:r(o)("crud.crud.The remote pull-down will request the corresponding controller to obtain data, so it is recommended that you create the CRUD of the associated table")}},null,8,["label","modelValue","placeholder","data","attr"])),(s(),g(p,{type:"select",label:r(o)("crud.crud.Data Model Location"),modelValue:e.remoteSelectPre.form.modelFile,"onUpdate:modelValue":l[35]||(l[35]=a=>e.remoteSelectPre.form.modelFile=a),placeholder:r(o)("crud.crud.Please select the data model location of the data table"),key:"model-file"+JSON.stringify(e.remoteSelectPre.modelFileList),data:{content:e.remoteSelectPre.modelFileList},attr:{blockHelp:r(o)("crud.crud.If it is left blank, the model of the associated table will be generated automatically If the table already has a model, it is recommended to select it to avoid repeated generation")}},null,8,["label","modelValue","placeholder","data","attr"])),n(D,{label:r(o)("Reminder")},{default:c(()=>[u("div",xl,h(r(o)("crud.crud.Design remote select tips")),1)]),_:1},8,["label"])])),[[ae,e.loading.remoteSelect]])]),_:1},8,["model","rules"])),[[ae,e.remoteSelectPre.loading]]):P("",!0)],4)]),_:1})]),_:1},8,["model-value","title","onKeyup"]),n(te,{onClose:O,class:"ba-operate-dialog confirm-generate-dialog","model-value":e.confirmGenerate.show,title:r(o)("crud.crud.Confirm CRUD code generation")},{footer:c(()=>[u("div",El,[n(d,{onClick:O},{default:c(()=>[V(h(t.$t("Cancel")),1)]),_:1}),N((s(),g(d,{loading:e.loading.generate,onClick:J,type:"primary"},{default:c(()=>[V(h(r(o)("crud.crud.Continue building")),1)]),_:1},8,["loading"])),[[L]])])]),default:c(()=>[u("div",Il,[e.confirmGenerate.controller?(s(),g(he,{key:0,title:r(o)("crud.crud.The controller already exists Continuing to generate will automatically overwrite the existing code!"),center:"",type:"error"},null,8,["title"])):P("",!0),Rl,ue()?(s(),g(he,{key:1,title:r(o)("crud.crud.The data table already exists Continuing to generate will automatically delete the original table and create a new one!"),center:"",type:"error"},null,8,["title"])):P("",!0)])]),_:1},8,["model-value","title"]),n(te,{class:"ba-operate-dialog design-change-log-dialog",width:"20%",modelValue:e.showDesignChangeLog,"onUpdate:modelValue":l[38]||(l[38]=a=>e.showDesignChangeLog=a)},{header:c(()=>[N((s(),b("div",null,[V(h(r(o)("crud.crud.Data table design changes preview")),1)])),[[He,[".design-change-log-dialog",".el-dialog__header"]]])]),footer:c(()=>[u("div",Ml,[n(d,{onClick:l[37]||(l[37]=a=>e.showDesignChangeLog=!1)},{default:c(()=>[V(h(r(o)("Confirm")),1)]),_:1})])]),default:c(()=>[n(ye,{"max-height":"400px"},{default:c(()=>[n(qe,{class:"design-change-log-timeline"},{default:c(()=>[(s(!0),b(S,null,w(e.table.designChange,(a,m)=>(s(),g(je,{key:m,type:Ge(a.type),hollow:!0,"hide-timestamp":!0},{default:c(()=>[u("div",Al,[n(Q,{modelValue:a.sync,"onUpdate:modelValue":C=>a.sync=C,label:$e(a),size:"small"},null,8,["modelValue","onUpdate:modelValue","label"])])]),_:2},1032,["type"]))),128))]),_:1}),u("span",Bl,h(r(o)("crud.crud.designChangeTips")),1),n(p,{label:r(o)("crud.crud.tableReBuild"),class:"rebuild-form-item",modelValue:e.table.rebuild,"onUpdate:modelValue":l[36]||(l[36]=a=>e.table.rebuild=a),type:"radio",data:{content:{No:r(o)("crud.crud.No"),Yes:r(o)("crud.crud.Yes")},childrenAttr:{border:!0}},attr:{blockHelp:r(o)("crud.crud.tableReBuildBlockHelp")}},null,8,["label","modelValue","data","attr"])]),_:1})]),_:1},8,["modelValue"])])}}});const Jl=rl(Kl,[["__scopeId","data-v-615cc261"]]);export{Jl as default};
