"use strict";(self["webpackChunkweb_ui"]=self["webpackChunkweb_ui"]||[]).push([[783],{6618:function(e,t,a){a.d(t,{BL:function(){return l},Lh:function(){return s},_5:function(){return o},pb:function(){return n},sT:function(){return u}});var i=a(196);function n(e){return i.ZP.get("/plugins/data-migration/migration/list",{params:e})}function l(e){return i.ZP.post(`/plugins/data-migration/migration/start/${e}`)}function u(e){return i.ZP.post(`/plugins/data-migration/migration/finish/${e}`)}function o(e){return i.ZP["delete"](`/plugins/data-migration/migration/${e}`)}function s(){return i.ZP.get("/plugins/data-migration/migration/list/createUsers")}},3744:function(e,t){t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[i,n]of t)a[i]=n;return a}},8783:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var i=a(821),n=a(5784),l=a(6618),u=a(7484),o=a.n(u);const s={class:"list-container"},c={class:"search-con"},d={class:"btn-con"},r={class:"table-con"};var m={__name:"index",setup(e){const t=(0,i.iH)(!0),a=(0,i.iH)(!1),u=(0,i.qj)({taskName:void 0,createUser:void 0,execStatus:void 0,execStartTime:void 0,finishEndTime:void 0}),m=(0,i.iH)([]),p=(0,i.qj)({pageNum:1,pageSize:10}),w=(0,i.qj)({total:0,current:1,pageSize:10}),f=(0,i.iH)([]),g=(0,i.iH)([]),h=(0,i.qj)({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),x=e=>{const t={0:"未启动",1:"迁移中",2:"已完成"};return t[e]},k=()=>{t.value=!0,(0,l.pb)({taskName:u.taskName,createUser:u.createUser,execStatus:u.execStatus,execStartTime:u.execStartTime,finishEndTime:u.finishEndTime,...p}).then((e=>{t.value=!1,f.value=e.rows.map((e=>({...e,disabled:0!==e.execStatus}))),w.total=e.total})).catch((()=>{t.value=!1}))},W=()=>{u.taskName=void 0,u.createUser=void 0,u.execStatus=void 0,u.execStartTime=void 0,u.finishEndTime=void 0,k()},_=e=>{p.pageNum=e,w.current=e,k()},v=e=>{if(1===e.execStatus||2===e.execStatus){const t=e.finishTime?o()(e.finishTime).diff(o()(e.execTime),"seconds"):o()().diff(o()(e.execTime),"seconds"),a=parseInt(t/3600),i=parseInt((t-3600*a)/60);return`${a?a+"小时":""} ${i?i+"分钟":""}`}return""},y=()=>{window.$wujie?.props.methods.jump({name:"Static-pluginData-migrationTaskConfig"})},S=async e=>{try{a.value=!0,await(0,l.BL)(e.id),n.Z.success("Start success"),a.value=!1}catch(t){a.value=!1}k()},U=async e=>{await(0,l.sT)(e.id),n.Z.success("Stop success"),k()},T=async e=>{await(0,l._5)(e.id),n.Z.success("Delete success"),k()},C=async()=>{g.value.length?(await(0,l._5)(g.value.join(",")),n.Z.success("Delete success")):n.Z.error("Please select at least one piece of data")},b=()=>{(0,l.Lh)().then((e=>{m.value=e.data}))},j=e=>{0===e.execStatus?window.$wujie?.props.methods.jump({name:"Static-pluginData-migrationTaskConfig",query:{id:e.id}}):window.$wujie?.props.methods.jump({name:"Static-pluginData-migrationTaskDetail",query:{id:e.id}})};return(0,i.bv)((()=>{k(),b(),window.$wujie?.bus.$on("data-migration-update",(()=>{k()}))})),(e,n)=>{const l=(0,i.up)("a-input"),o=(0,i.up)("a-form-item"),p=(0,i.up)("a-option"),b=(0,i.up)("a-select"),V=(0,i.up)("a-date-picker"),Z=(0,i.up)("icon-search"),N=(0,i.up)("a-button"),$=(0,i.up)("icon-sync"),q=(0,i.up)("a-form"),z=(0,i.up)("icon-plus"),P=(0,i.up)("icon-delete"),D=(0,i.up)("a-space"),E=(0,i.up)("a-table-column"),H=(0,i.up)("a-progress"),K=(0,i.up)("icon-edit"),L=(0,i.up)("icon-pause"),I=(0,i.up)("icon-play-arrow"),O=(0,i.up)("a-popconfirm"),B=(0,i.up)("a-table");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",c,[(0,i.Wm)(q,{model:u,layout:"inline"},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{field:"taskName",style:{"margin-left":"-17px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{modelValue:u.taskName,"onUpdate:modelValue":n[0]||(n[0]=e=>u.taskName=e),"allow-clear":"",placeholder:"请输入任务名称",style:{width:"200px"},onChange:k},null,8,["modelValue"])])),_:1}),(0,i.Wm)(o,{field:"createUser",style:{"margin-left":"-17px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{modelValue:u.createUser,"onUpdate:modelValue":n[1]||(n[1]=e=>u.createUser=e),placeholder:"请选择用户","allow-clear":"",style:{width:"150px"},onChange:k},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.value,(e=>((0,i.wg)(),(0,i.j4)(p,{key:e,value:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(e),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(o,{field:"execStatus",style:{"margin-left":"-17px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{modelValue:u.execStatus,"onUpdate:modelValue":n[2]||(n[2]=e=>u.execStatus=e),placeholder:"请选择状态","allow-clear":"",style:{width:"150px"},onChange:k},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{value:0},{default:(0,i.w5)((()=>[(0,i.Uk)("未启动")])),_:1}),(0,i.Wm)(p,{value:1},{default:(0,i.w5)((()=>[(0,i.Uk)("迁移中")])),_:1}),(0,i.Wm)(p,{value:2},{default:(0,i.w5)((()=>[(0,i.Uk)("已完成")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(o,{field:"execStartTime",style:{"margin-left":"-17px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{modelValue:u.execStartTime,"onUpdate:modelValue":n[3]||(n[3]=e=>u.execStartTime=e),placeholder:"请选择执行时间",style:{width:"150px"},onChange:k},null,8,["modelValue"])])),_:1}),(0,i.Wm)(o,{field:"finishEndTime",style:{"margin-left":"-17px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{modelValue:u.finishEndTime,"onUpdate:modelValue":n[4]||(n[4]=e=>u.finishEndTime=e),placeholder:"请选择完成时间",style:{width:"150px"},onChange:k},null,8,["modelValue"])])),_:1}),(0,i.Wm)(o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{type:"outline",onClick:k},{icon:(0,i.w5)((()=>[(0,i.Wm)(Z)])),default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1}),(0,i.Wm)(N,{style:{"margin-left":"10px"},onClick:W},{icon:(0,i.w5)((()=>[(0,i.Wm)($)])),default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),(0,i._)("div",d,[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{type:"primary",onClick:y},{icon:(0,i.w5)((()=>[(0,i.Wm)(z)])),default:(0,i.w5)((()=>[(0,i.Uk)("创建数据迁移任务")])),_:1}),(0,i.Wm)(N,{status:"success",onClick:k},{icon:(0,i.w5)((()=>[(0,i.Wm)($)])),default:(0,i.w5)((()=>[(0,i.Uk)("刷新")])),_:1}),(0,i.Wm)(N,{status:"warning",onClick:C},{icon:(0,i.w5)((()=>[(0,i.Wm)(P)])),default:(0,i.w5)((()=>[(0,i.Uk)("批量删除")])),_:1})])),_:1})]),(0,i._)("div",r,[(0,i.Wm)(B,{loading:t.value,"row-key":"id",data:f.value,"row-selection":h,selectedKeys:g.value,"onUpdate:selectedKeys":n[5]||(n[5]=e=>g.value=e),bordered:!1,stripe:"",pagination:w,onPageChange:_},{columns:(0,i.w5)((()=>[(0,i.Wm)(E,{title:"任务名称","data-index":"taskName",width:150,fixed:"left"}),(0,i.Wm)(E,{title:"创建人","data-index":"createUser",width:100}),(0,i.Wm)(E,{title:"执行状态","data-index":"execStatus",width:120},{cell:(0,i.w5)((({record:e})=>[(0,i.Uk)((0,i.zw)(x(e.execStatus)),1)])),_:1}),(0,i.Wm)(E,{title:"进度","data-index":"execProgress",width:150},{cell:(0,i.w5)((({record:e})=>[(0,i.Wm)(H,{percent:2===e.execStatus?1:e.execProgress||0},null,8,["percent"])])),_:1}),(0,i.Wm)(E,{title:"已执行时长",width:150},{cell:(0,i.w5)((({record:e})=>[(0,i.Uk)((0,i.zw)(v(e)),1)])),_:1}),(0,i.Wm)(E,{title:"任务创建时间","data-index":"createTime",width:200}),(0,i.Wm)(E,{title:"执行开始时间","data-index":"execTime",width:200}),(0,i.Wm)(E,{title:"任务完成时间","data-index":"finishTime",width:200}),(0,i.Wm)(E,{title:"操作",align:"center",width:240,fixed:"right"},{cell:(0,i.w5)((({record:e})=>[(0,i.Wm)(N,{size:"mini",type:"text",onClick:t=>j(e)},{icon:(0,i.w5)((()=>[(0,i.Wm)(K)])),default:(0,i.w5)((()=>[(0,i.Uk)("详情")])),_:2},1032,["onClick"]),1===e.execStatus?((0,i.wg)(),(0,i.j4)(N,{key:0,size:"mini",type:"text",onClick:t=>U(e)},{icon:(0,i.w5)((()=>[(0,i.Wm)(L)])),default:(0,i.w5)((()=>[(0,i.Uk)("结束迁移")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),0===e.execStatus?((0,i.wg)(),(0,i.j4)(N,{key:1,loading:a.value,size:"mini",type:"text",onClick:t=>S(e)},{icon:(0,i.w5)((()=>[(0,i.Wm)(I)])),default:(0,i.w5)((()=>[(0,i.Uk)("启动")])),_:2},1032,["loading","onClick"])):(0,i.kq)("",!0),0===e.execStatus?((0,i.wg)(),(0,i.j4)(O,{key:2,content:"你确认删除此任务吗？",onOk:t=>T(e)},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{size:"mini",type:"text"},{icon:(0,i.w5)((()=>[(0,i.Wm)(P)])),default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:1})])),_:2},1032,["onOk"])):(0,i.kq)("",!0)])),_:1})])),_:1},8,["loading","data","row-selection","selectedKeys","pagination"])])])}}},p=a(3744);const w=(0,p.Z)(m,[["__scopeId","data-v-4eb552ae"]]);var f=w}}]);
//# sourceMappingURL=783.f4096ef3.js.map