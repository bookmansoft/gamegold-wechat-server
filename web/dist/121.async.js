(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{vYBQ:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("+L6B");var u=l(a("2/Rp")),d=l(a("jehZ")),f=l(a("2Taf")),s=l(a("vZ4D")),o=l(a("l4Ni")),c=l(a("ujKo")),i=l(a("MhPg"));a("5NDa");var p=l(a("5rEg"));a("iQDF");var m=l(a("+eQT"));a("OaEy");var h=l(a("2fM7"));a("y8nQ");var g,v,b,y,E=l(a("Vl3Y")),w=r(a("q1tI")),k=a("MuoO"),C=(a("LLXN"),l(a("usdK"))),M=l(a("zHco")),D=(l(a("2MAO")),E.default.Item),T=(h.default.Option,m.default.RangePicker,p.default.TextArea),q=(g=(0,k.connect)(function(e){var t=e.loading;return{submitting:t.effects["walletpay/add"]}}),v=E.default.create(),g(b=v((y=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(e){var t=a.props,l=t.dispatch,r=t.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,t){e||(console.log(t),l({type:"walletpay/add",payload:t}).then(function(e){if(console.log(e),null==e)C.default.push("/wallet/walletpayerror");else{var t=e.hash;C.default.push("/wallet/walletpaysuccess?id=".concat(t))}}))})},a.handleCancel=function(){history.back()},a}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props.submitting,a=this.props.form,l=a.getFieldDecorator,r=(a.getFieldValue,{labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}}),f={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return w.default.createElement(M.default,{title:"\u94b1\u5305\u7ba1\u7406",content:""},w.default.createElement(n.default,{bordered:!1},w.default.createElement(E.default,{onSubmit:this.handleSubmit,hideRequiredMark:!1,style:{marginTop:8}},w.default.createElement("br",null),w.default.createElement("h2",null,w.default.createElement("b",null,"\u8f6c\u51fa")),w.default.createElement("br",null),w.default.createElement(D,(0,d.default)({},r,{label:"\u63a5\u6536\u4eba\u5730\u5740"}),l("address",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63a5\u6536\u4eba\u6e38\u620f\u91d1\u5730\u5740"}]})(w.default.createElement(p.default,{placeholder:"\u8bf7\u8f93\u5165\u63a5\u6536\u4eba\u6e38\u620f\u91d1\u5730\u5740"}))),w.default.createElement(D,(0,d.default)({},r,{label:"\u53d1\u9001\u91d1\u989dKg:"}),l("value",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53d1\u9001\u91d1\u989d(\u5355\u4f4dKg)"}]})(w.default.createElement(p.default,{placeholder:"\u8bf7\u8f93\u5165\u53d1\u9001\u91d1\u989d(\u5355\u4f4dKg)"}))),w.default.createElement(D,(0,d.default)({},r,{label:"\u53d1\u9001\u8bf4\u660e"}),l("gameDesc",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u53d1\u9001\u8bf4\u660e"}]})(w.default.createElement(T,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u53d1\u9001\u8bf4\u660e",rows:4}))),w.default.createElement(D,(0,d.default)({},f,{style:{marginTop:32}}),w.default.createElement(u.default,{type:"primary",htmlType:"submit",loading:t},"\u786e\u8ba4\u53d1\u9001"),w.default.createElement(u.default,{style:{marginLeft:8},onClick:function(){return e.handleCancel()}},"\u53d6\u6d88")))))}}]),t}(w.PureComponent),b=y))||b)||b),x=q;t.default=x}}]);