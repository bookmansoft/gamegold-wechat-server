(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"4Zif":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("2qtc");var d=l(a("kLXV")),i=l(a("jehZ"));a("14J3");var u=l(a("BMrR"));a("+L6B");var s=l(a("2/Rp"));a("jCWc");var o=l(a("kPKH"));a("5NDa");var c=l(a("5rEg")),f=l(a("p0pE")),m=l(a("2Taf")),p=l(a("vZ4D")),h=l(a("l4Ni")),g=l(a("ujKo")),b=l(a("MhPg"));a("OaEy");var v=l(a("2fM7"));a("y8nQ");var y,E,k,F,O=l(a("Vl3Y")),_=(a("LLXN"),n(a("q1tI"))),w=a("MuoO"),S=l(a("wd/R")),C=l(a("i9A2")),L=l(a("zHco")),V=l(a("G6Gq")),x=O.default.Item,D=v.default.Option,I=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},M=(y=(0,w.connect)(function(e){var t=e.gamelist,a=e.loading;return{gamelist:t,loading:a.models.gamelist}}),E=O.default.create(),y(k=E((F=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,h.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(n))),a.state={modalVisible:!1,updateModalVisible:!1,expandForm:!1,selectedRows:[],formValues:{},stepFormValues:{},purchase:{loading:!1,visible:!1},current:{}},a.handleOrder=function(e,t){console.log(t),a.setState({current:t,purchase:{visible:!0}})},a.handleStandardTableChange=function(e,t,l){var n=a.props.dispatch,r=a.state.formValues,d=Object.keys(t).reduce(function(e,a){var l=(0,f.default)({},e);return l[a]=I(t[a]),l},{}),i=(0,f.default)({currentPage:e.current,pageSize:e.pageSize},r,d);l.field&&(i.sorter="".concat(l.field,"_").concat(l.order)),n({type:"gamelist/fetch",payload:i})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.dispatch;t.resetFields(),a.setState({formValues:{}}),l({type:"gamelist/fetch",payload:{}})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form;n.validateFields(function(e,t){if(!e){var n=(0,f.default)({},t,{updatedAt:t.updatedAt&&t.updatedAt.valueOf()});a.setState({formValues:n}),l({type:"gamelist/fetch",payload:n})}})},a.handleView=function(e,t){a.props.history.push("./gameview?id="+t.id)},a.renderOptions=function(){var e=a.props.gamelist.cp_type_list;return null!=e?e.map(function(e){return _.default.createElement(D,{key:e.id,value:e.cp_type_id}," ",e.cp_type_id)}):""},a.columns=[{title:"\u6d41\u6c34\u53f7",dataIndex:"id"},{title:"\u6e38\u620fID",dataIndex:"cp_id"},{title:"\u6e38\u620f\u5168\u540d",dataIndex:"cp_text"},{title:"\u6e38\u620f\u7c7b\u578b",dataIndex:"cp_type"},{title:"\u6e38\u620f\u72b6\u6001",dataIndex:"cp_state",render:function(e){return _.default.createElement("span",null,"0"==e?"\u672a\u4e0a\u7ebf":"\u6b63\u5e38\u8fd0\u8425")}},{title:"\u6dfb\u52a0\u65f6\u95f4",dataIndex:"publish_time",render:function(e){return _.default.createElement("span",null,(0,S.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",render:function(e,t){return _.default.createElement(_.Fragment,null,_.default.createElement("a",{onClick:function(){return a.handleView(!0,t)}},"\u8be6\u60c5"),"\xa0 | \xa0",_.default.createElement("a",{onClick:function(){return a.handleOrder(!0,t)}},"\u6d88\u8d39"))}}],a}return(0,b.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"gamelist/fetch"}),e({type:"gamelist/fetchCpType"})}},{key:"handleOk",value:function(e){var t=this,a=this.props,l=a.dispatch,n=a.form;e.preventDefault(),this.setState({purchase:{loading:!0,visible:!0}}),n.validateFieldsAndScroll(function(e,a){e?(n.resetFields(),t.setState({purchase:{visible:!1,loading:!1}})):t.props.dispatch({type:"gamelist/payOrder",payload:{cid:t.state.current.cp_id,amount:1e5*a["amount"]}}).then(function(e){l({type:"gamelist/fetch"}),n.resetFields(),t.setState({purchase:{visible:!1,loading:!1}})}).catch(function(e){n.resetFields(),t.setState({purchase:{visible:!1,loading:!1}})})})}},{key:"handleCancel",value:function(){this.setState({purchase:{visible:!1}})}},{key:"renderForm",value:function(){var e=this.props.form.getFieldDecorator;return _.default.createElement(O.default,{onSubmit:this.handleSearch,layout:"inline"},_.default.createElement(u.default,{gutter:{md:16,lg:24,xl:48}},_.default.createElement(o.default,{md:6,sm:9},_.default.createElement(x,{label:"\u6e38\u620f\u5168\u540d\uff1a"},e("cp_text")(_.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165"})))),_.default.createElement(o.default,{md:6,sm:9},_.default.createElement(x,{label:"\u6e38\u620fID\uff1a"},e("cp_id")(_.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165"})))),_.default.createElement(o.default,{md:6,sm:9},_.default.createElement(x,{label:"\u6e38\u620f\u7c7b\u578b\uff1a"},e("cp_type")(_.default.createElement(v.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},_.default.createElement(D,{value:""},"\u5168\u90e8"),this.renderOptions())))),_.default.createElement(o.default,{md:6,sm:9},_.default.createElement("span",{className:V.default.submitButtons},_.default.createElement(s.default,{type:"primary",htmlType:"submit"},"\u641c\u7d22"),_.default.createElement(s.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this,t=this.props,a=t.gamelist.data,l=t.loading,n=t.form.getFieldDecorator,u=this.state,s=u.selectedRows,o=(u.modalVisible,u.updateModalVisible,u.stepFormValues,function(t){return t=t||{},_.default.createElement(O.default,{onSubmit:e.handleOk.bind(e)},_.default.createElement(x,(0,i.default)({label:"\u6d88\u8d39\u91d1\u989d"},e.formLayout),n("amount",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u6d88\u8d39\u91d1\u989d"}],initialValue:0})(_.default.createElement(c.default,{addonAfter:"\u5343\u514b",style:{width:"50%"}}))),_.default.createElement(x,(0,i.default)({label:"\u5f52\u5c5e\u6e38\u620f"},e.formLayout),"".concat(t.cp_id)))});return _.default.createElement(L.default,{title:"\u6e38\u620f\u5217\u8868"},_.default.createElement(d.default,{ref:"modal",width:800,destroyOnClose:!0,onCancel:this.handleCancel.bind(this),visible:this.state.purchase.visible,title:"\u6e38\u620f\u6d88\u8d39",footer:[_.default.createElement("button",{key:"back",className:"ant-btn ant-btn-primary",onClick:this.handleCancel.bind(this)},"\u8fd4 \u56de"),_.default.createElement("button",{key:"submit",className:"ant-btn ant-btn-primary "+(this.state.purchase.loading?"ant-btn-loading":""),onClick:this.handleOk.bind(this)},"\u63d0 \u4ea4")]},o(this.state.current)),_.default.createElement(r.default,{bordered:!1},_.default.createElement("div",{className:V.default.tableList},_.default.createElement("div",{className:V.default.tableListForm},this.renderForm()),_.default.createElement("div",{className:V.default.tableListOperator}),_.default.createElement(C.default,{selectedRows:s,loading:l,data:a,columns:this.columns,onSelectRow:null,onChange:this.handleStandardTableChange}))))}}]),t}(_.PureComponent),k=F))||k)||k),N=M;t.default=N},G6Gq:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-game-mgr\\-game-list-tableList",tableListOperator:"antd-pro\\pages\\-game-mgr\\-game-list-tableListOperator",tableListForm:"antd-pro\\pages\\-game-mgr\\-game-list-tableListForm",submitButtons:"antd-pro\\pages\\-game-mgr\\-game-list-submitButtons"}}}]);