(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"5LMy":function(e,t,a){e.exports={headerList:"antd-pro\\pages\\-game-mgr\\-game-view-headerList",tabsCard:"antd-pro\\pages\\-game-mgr\\-game-view-tabsCard",noData:"antd-pro\\pages\\-game-mgr\\-game-view-noData",heading:"antd-pro\\pages\\-game-mgr\\-game-view-heading",stepDescription:"antd-pro\\pages\\-game-mgr\\-game-view-stepDescription",textSecondary:"antd-pro\\pages\\-game-mgr\\-game-view-textSecondary"}},FVJQ:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("+L6B");var i=l(a("2/Rp"));a("/zsF");var d=l(a("PArb"));a("14J3");var u=l(a("BMrR"));a("jCWc");var o=l(a("kPKH")),s=l(a("SQvw"));a("Q9mQ");l(a("diRs"));a("2qtc");var m=l(a("kLXV"));a("5NDa");var c=l(a("5rEg")),f=l(a("2Taf")),p=l(a("vZ4D")),g=l(a("l4Ni")),h=l(a("ujKo")),v=l(a("MhPg"));a("FJo9");var E=l(a("L41K"));a("y8nQ");var y,b,w,x,D,k,C=l(a("Vl3Y")),S=n(a("q1tI")),_=a("MuoO"),B=l(a("fqkP")),M=l(a("UjoV")),R=l(a("wd/R")),L=(l(a("TSYQ")),l(a("+kNj")),l(a("zHco"))),Y=(l(a("5LMy")),C.default.Item),z=(E.default.Step,C.default.create()(function(e){function t(){return(0,f.default)(this,t),(0,g.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,l=e.onCreate,n=e.form,r=n.getFieldDecorator;return S.default.createElement(m.default,{visible:t,title:"\u53d1\u5e03\u66f4\u65b0",okText:"\u63d0\u4ea4",onCancel:a,onOk:l},S.default.createElement(C.default,{layout:"vertical"},S.default.createElement(Y,{label:"\u66f4\u65b0\u7248\u672c"},r("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7248\u672c\u53f7!"}]})(S.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u7248\u672c\u53f7!"}))),S.default.createElement(Y,{label:"\u66f4\u65b0\u5185\u5bb9"},r("description",{rules:[{required:!0,max:300,message:"\u8bf7\u8f93\u5165\u66f4\u65b0\u5185\u5bb9\uff0c\u4e0d\u8d85\u8fc7300\u5b57!"}]})(S.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u66f4\u65b0\u5185\u5bb9\uff0c\u4e0d\u8d85\u8fc7300\u5b57!",type:"textarea"})))))}}]),t}(S.default.Component))),F=function(){return window.innerWidth||document.documentElement.clientWidth},q=(S.default.createElement("div",{style:{width:160}},"\u5ba1\u6838\u7ec6\u8282\u5185\u5bb9"),y=(0,_.connect)(function(e){var t=e.gamelist,a=e.loading;return{gamelist:t,loading:a.models.gamelist}}),b=(0,M.default)(),w=(0,B.default)(200),y((k=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,g.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.renderImg=function(e){if(e&&e.length){var t=e.map(function(e,t){return S.default.createElement("div",null,S.default.createElement("img",{width:300,src:e,key:t}),S.default.createElement("br",null))});return t}},a.state={visible:!1,operationkey:"tab1",stepDirection:"horizontal"},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields(function(t,l){t||(console.log("\u6b64\u5904\u6536\u5230\u8868\u5355\u6570\u636e: ",l),e.resetFields(),a.setState({visible:!1}))})},a.saveFormRef=function(e){a.formRef=e},a.handleBack=function(){history.back()},a.onOperationTabChange=function(e){a.setState({operationkey:e})},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;console.log(this.props.location.query.id),e({type:"gamelist/getGameRecord",payload:{id:this.props.location.query.id}}),this.setStepDirection(),window.addEventListener("resize",this.setStepDirection,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setStepDirection),this.setStepDirection.cancel()}},{key:"setStepDirection",value:function(){var e=this.state.stepDirection,t=F();"vertical"!==e&&t<=576?this.setState({stepDirection:"vertical"}):"horizontal"!==e&&t>576&&this.setState({stepDirection:"horizontal"})}},{key:"render",value:function(){var e=this.state,t=(e.stepDirection,e.operationkey,this.props),a=t.gamelist.gameRecord;t.loading;return S.default.createElement(L.default,{title:a.cp_name,action:null,content:null,extraContent:null,tabList:null},S.default.createElement(r.default,{style:null,bordered:!1},S.default.createElement(u.default,{style:{marginBottom:16}},S.default.createElement(o.default,{sm:24,xs:24},S.default.createElement("h3",null,S.default.createElement("b",null,"\u57fa\u672c\u4fe1\u606f")))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:8,xs:12},"\u6e38\u620f\u7c7b\u578b\uff1a",a.cp_type),S.default.createElement(o.default,{sm:8,xs:12},"\u5f00\u53d1\u8005\uff1a",a.develop_name),S.default.createElement(o.default,{sm:8,xs:12},"\u53d1\u5e03\u65f6\u95f4\uff1a",(0,R.default)(1e3*a.publish_time).format("YYYY-MM-DD HH:mm:ss"))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:8,xs:12},"\u6e38\u620f\u72b6\u6001\uff1a","0"==a.cp_state?"\u672a\u4e0a\u7ebf":"\u6b63\u5e38\u8fd0\u8425"),S.default.createElement(o.default,{sm:8,xs:12},"\u542f\u7528\u9080\u8bf7\u5956\u52b1\uff1a",0==parseInt(a.invite_share)?"\u5426":"\u662f"),S.default.createElement(o.default,{sm:8,xs:12},0!=parseInt(a.invite_share)&&"\u9080\u8bf7\u5956\u52b1\uff1a".concat(a.invite_share,"%"))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:24,xs:24},"URL\u5730\u5740\uff1a",a.cp_url)),S.default.createElement(d.default,{style:{margin:"20px 0"}}),S.default.createElement(u.default,{style:{marginBottom:16}},S.default.createElement(o.default,{sm:24,xs:24},S.default.createElement("h3",null,S.default.createElement("b",null,"\u7248\u672c\u4fe1\u606f")))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:8,xs:12},"\u5f53\u524d\u7248\u672c\uff1a",a.cp_version),S.default.createElement(o.default,{sm:8,xs:12},"\u66f4\u65b0\u65f6\u95f4\uff1a",(0,R.default)(1e3*a.update_time).format("YYYY-MM-DD HH:mm:ss"))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:24,xs:24},"\u66f4\u65b0\u5185\u5bb9\uff1a",a.cp_desc)),S.default.createElement(d.default,{style:{margin:"20px 0"}}),S.default.createElement(u.default,{style:{marginBottom:16}},S.default.createElement(o.default,{sm:24,xs:24},S.default.createElement("h3",null,S.default.createElement("b",null,"\u7d20\u6750\u4fe1\u606f")))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:24,xs:24},"\u6e38\u620f\u56fe\u6807\uff1a",S.default.createElement("img",{width:120,src:a.icon_url}))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:24,xs:24},"\u5c01\u9762\u56fe\u7247\uff1a",S.default.createElement("img",{width:300,src:a.face_url}))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:24,xs:24},"\u6e38\u620f\u622a\u56fe\uff1a",this.renderImg(a.pic_urls))),S.default.createElement(u.default,{style:{marginBottom:32}},S.default.createElement(o.default,{sm:4,xs:8},S.default.createElement(i.default,{type:"primary",onClick:this.handleBack},"\u8fd4\u56de\u6e38\u620f\u5217\u8868")))),S.default.createElement(z,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}))}}]),t}(S.Component),D=k,(0,s.default)(D.prototype,"setStepDirection",[b,w],Object.getOwnPropertyDescriptor(D.prototype,"setStepDirection"),D.prototype),x=D))||x),I=q;t.default=I}}]);