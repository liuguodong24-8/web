import{b as f,T as b,a as g}from"./index-165813b5.js";import{v as h,a0 as y,a1 as _}from"./index-a6f6b7ce.js";import{s as k,e as T,k as w}from"./crud-a8a75049.js";import{h as x,r as C,w as v,am as B,E as D,F as V,n as I,q,o as R,k as E,p as r,P as A,z as o}from"./vue-99362bf9.js";const P=x({__name:"log",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:l}){const u=d,s=C({ready:!1}),{t:e}=h(),c=v(),i=[{render:"confirmButton",name:"copy",title:"crud.crud.copy",text:"",type:"primary",icon:"fa fa-copy",class:"table-row-copy",popconfirm:{confirmButtonText:e("Confirm"),cancelButtonText:e("Cancel"),confirmButtonType:"primary",title:e("crud.crud.Start CRUD design with this record?"),width:"220px"},disabledTip:!1,click:t=>{k.startData.logId=t[a.table.pk],T("log"),l("update:modelValue",!1)}},{render:"confirmButton",name:"del",title:"Delete",text:"",type:"danger",icon:"fa fa-trash",class:"table-row-delete",popconfirm:{confirmButtonText:e("crud.crud.Delete Code"),cancelButtonText:e("Cancel"),confirmButtonType:"danger",title:e("crud.crud.Are you sure to delete the generated CRUD code?"),width:"248px"},disabledTip:!1,click:t=>{w(t[a.table.pk]).then(()=>{a.onTableHeaderAction("refresh",{})})},display:t=>t.status!="delete"&&y("delete")}],a=new f(new _("/admin/crud.Log/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("crud.log.id"),prop:"id",align:"center",width:70,operator:"=",operatorPlaceholder:e("Id"),sortable:"custom"},{label:e("crud.log.table_name"),prop:"table_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("crud.log.status"),prop:"status",align:"center",render:"tag",sortable:!1,replaceValue:{delete:e("crud.log.status delete"),success:e("crud.log.status success"),error:e("crud.log.status error"),start:e("crud.log.status start")},custom:{delete:"danger",success:"success",error:"warning",start:""}},{label:e("crud.log.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("Operate"),align:"center",width:100,render:"buttons",buttons:i,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"start"}});B("baTable",a);const p=()=>{var t;(t=a.getIndex())==null||t.then(()=>{s.ready=!0})};return D(()=>{a.table.ref=c.value,a.mount()}),V(()=>u.modelValue,t=>{t&&!s.ready&&I(()=>{p()})}),(t,n)=>{const m=q("el-dialog");return R(),E("div",null,[r(m,{onClose:n[0]||(n[0]=F=>l("update:modelValue",!1)),width:"60%","model-value":t.modelValue,class:"ba-crud-log-dialog",title:o(e)("crud.crud.CRUD record"),"append-to-body":!0,"destroy-on-close":!0},{default:A(()=>[r(b,{buttons:["refresh","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("Quick search placeholder",{fields:o(e)("crud.log.quick Search Fields")})},null,8,["quick-search-placeholder"]),r(g,{ref_key:"tableRef",ref:c},null,512)]),_:1},8,["model-value","title"])])}}});export{P as _};
