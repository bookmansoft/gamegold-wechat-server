(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{WN3O:function(e,t,a){e.exports={standardList:"antd-pro\\pages\\-list\\-basic-list-standardList",headerInfo:"antd-pro\\pages\\-list\\-basic-list-headerInfo",listContent:"antd-pro\\pages\\-list\\-basic-list-listContent",listContentItem:"antd-pro\\pages\\-list\\-basic-list-listContentItem",extraContentSearch:"antd-pro\\pages\\-list\\-basic-list-extraContentSearch",listCard:"antd-pro\\pages\\-list\\-basic-list-listCard",standardListForm:"antd-pro\\pages\\-list\\-basic-list-standardListForm",formResult:"antd-pro\\pages\\-list\\-basic-list-formResult"}},w9uU:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var r=l(a("VXEj"));a("Telt");var d=l(a("Tckk"));a("IzEo");var u=l(a("bx4M"));a("14J3");var i=l(a("BMrR"));a("jCWc");var s=l(a("kPKH"));a("iQDF");var o=l(a("+eQT")),c=l(a("jehZ"));a("+L6B");var f=l(a("2/Rp"));a("qVdP");var m=l(a("jsC+"));a("Pwec");var p=l(a("CtXQ"));a("lUTK");var E=l(a("BvKs"));a("MXD1");var v=l(a("CFYs"));a("2qtc");var h=l(a("kLXV")),b=l(a("p0pE")),y=l(a("2Taf")),g=l(a("vZ4D")),w=l(a("l4Ni")),C=l(a("ujKo")),k=l(a("MhPg"));a("5NDa");var M=l(a("5rEg"));a("OaEy");var x=l(a("2fM7"));a("7Kak");var D=l(a("9yH6"));a("y8nQ");var S,I,N,L,T=l(a("Vl3Y")),O=n(a("q1tI")),Y=a("i8i4"),B=l(a("wd/R")),V=a("MuoO"),A=l(a("zHco")),q=l(a("ALo4")),F=l(a("WN3O")),H=T.default.Item,j=D.default.Button,z=D.default.Group,K=x.default.Option,P=M.default.Search,R=M.default.TextArea,Q=(S=(0,V.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),I=T.default.create(),S(N=I((L=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,w.default)(this,(e=(0,C.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.current,d=r?r.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,b.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,k.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,b=this.state,y=b.visible,g=b.done,w=b.current,C=void 0===w?{}:w,k=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},D=g?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},S=function(e){var t=e.title,a=e.value,l=e.bordered;return O.default.createElement("div",{className:F.default.headerInfo},O.default.createElement("span",null,t),O.default.createElement("p",null,a),l&&O.default.createElement("em",null))},I=O.default.createElement("div",{className:F.default.extraContent},O.default.createElement(z,{defaultValue:"all"},O.default.createElement(j,{value:"all"},"\u5168\u90e8"),O.default.createElement(j,{value:"progress"},"\u8fdb\u884c\u4e2d"),O.default.createElement(j,{value:"waiting"},"\u7b49\u5f85\u4e2d")),O.default.createElement(P,{className:F.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),N={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},L=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,r=t.status;return O.default.createElement("div",{className:F.default.listContent},O.default.createElement("div",{className:F.default.listContentItem},O.default.createElement("span",null,"Owner"),O.default.createElement("p",null,a)),O.default.createElement("div",{className:F.default.listContentItem},O.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),O.default.createElement("p",null,(0,B.default)(l).format("YYYY-MM-DD HH:mm"))),O.default.createElement("div",{className:F.default.listContentItem},O.default.createElement(v.default,{percent:n,status:r,strokeWidth:6,style:{width:180}})))},V=function(e){return O.default.createElement(m.default,{overlay:O.default.createElement(E.default,{onClick:function(t){var a=t.key;return k(a,e.current)}},O.default.createElement(E.default.Item,{key:"edit"},"\u7f16\u8f91"),O.default.createElement(E.default.Item,{key:"delete"},"\u5220\u9664"))},O.default.createElement("a",null,"\u66f4\u591a ",O.default.createElement(p.default,{type:"down"})))},Q=function(){return g?O.default.createElement(q.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:O.default.createElement(f.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:F.default.formResult}):O.default.createElement(T.default,{onSubmit:e.handleSubmit},O.default.createElement(H,(0,c.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(O.default.createElement(M.default,{placeholder:"\u8bf7\u8f93\u5165"}))),O.default.createElement(H,(0,c.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,B.default)(C.createdAt):null})(O.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),O.default.createElement(H,(0,c.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(O.default.createElement(x.default,{placeholder:"\u8bf7\u9009\u62e9"},O.default.createElement(K,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),O.default.createElement(K,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),O.default.createElement(H,(0,c.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(O.default.createElement(R,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return O.default.createElement(A.default,null,O.default.createElement("div",{className:F.default.standardList},O.default.createElement(u.default,{bordered:!1},O.default.createElement(i.default,null,O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),O.default.createElement(u.default,{className:F.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:I},O.default.createElement(f.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,Y.findDOMNode)(t)}},"\u6dfb\u52a0"),O.default.createElement(r.default,{size:"large",rowKey:"id",loading:l,pagination:N,dataSource:a,renderItem:function(t){return O.default.createElement(r.default.Item,{actions:[O.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),O.default.createElement(V,{current:t})]},O.default.createElement(r.default.Item.Meta,{avatar:O.default.createElement(d.default,{src:t.logo,shape:"square",size:"large"}),title:O.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),O.default.createElement(L,{data:t}))}}))),O.default.createElement(h.default,(0,c.default)({title:g?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:F.default.standardListForm,width:640,bodyStyle:g?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:y},D),Q()))}}]),t}(O.PureComponent),N=L))||N)||N),X=Q;t.default=X}}]);