(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"2mOV":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M")),r=l(a("jehZ"));a("+L6B");var u=l(a("2/Rp"));a("jCWc");var o=l(a("kPKH"));a("14J3");var f=l(a("BMrR")),i=l(a("2Taf")),s=l(a("vZ4D")),p=l(a("l4Ni")),c=l(a("ujKo")),m=l(a("MhPg"));a("5NDa");var g=l(a("5rEg"));a("iQDF");var h=l(a("+eQT"));a("OaEy");var y=l(a("2fM7"));a("y8nQ");var E,v,b,k,_=l(a("Vl3Y")),C=n(a("q1tI")),w=a("MuoO"),I=(a("LLXN"),l(a("usdK"))),T=(l(a("wd/R")),l(a("zHco"))),W=(l(a("KNhs")),_.default.Item),x=y.default.Option,B=(h.default.RangePicker,g.default.TextArea),M=(E=(0,w.connect)(function(e){var t=e.fundingapply,a=e.loading;return{fundingapply:t,loading:a.models.fundingapply,submitting:a.effects["fundingapply/add"]}}),v=_.default.create(),E(b=v((k=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,p.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n))),a.state={stock_num:1,stock_amount:1,develop_text:""},a.handleCreate=function(e,t){var l=a.props,n=l.dispatch;l.form;console.log(e,t),n({type:"fundingapply/add",payload:{data:e,state:t}}).then(function(e){console.log(e),0===e.code?I.default.push("/funding/fundingapplysuccess"):I.default.push("/funding/fundingapplyerror")})},a.renderImg=function(e){if(e&&e.length){var t=e.map(function(e,t){return C.default.createElement("img",{width:120,src:e,key:t})});return t}},a.handleCpidChange=function(e){var t=a.props,l=t.dispatch;t.form;l({type:"fundingapply/fetch",payload:{id:e}})},a.handleStockNumChange=function(e){a.state.stock_num=parseInt(e.target.value)},a.handleStockAmountChange=function(e){a.state.stock_amount=1e5*parseInt(e.target.value)},a.handleDevelopTextChange=function(e){console.log(e.target.value),a.state.develop_text=e.target.value},a.renderOptions=function(){return null!=a.props.fundingapply.cp_list?a.props.fundingapply.cp_list.map(function(e){return C.default.createElement(x,{key:e.id,value:e.id}," ",e.cp_text)}):""},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"fundingapply/fetchCp"})}},{key:"render",value:function(){var e=this,t=(this.props.submitting,this.props),a=t.fundingapply,l=a.data,n=(a.stock_amount,a.stock_num,t.form),i=n.getFieldDecorator,s=(n.getFieldValue,{wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}});return C.default.createElement(T.default,{title:"\u4f17\u7b79\u7533\u8bf7",content:""},C.default.createElement(_.default,{onSubmit:this.handleSubmit,hideRequiredMark:!1,style:{marginTop:8}},C.default.createElement(d.default,{bordered:!1},C.default.createElement(f.default,null,C.default.createElement("br",null),C.default.createElement("h3",null,C.default.createElement("b",null,"\u4f17\u7b79\u76ee\u6807")),C.default.createElement("br",null)),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:3},C.default.createElement("div",{align:"right",style:{fontWeight:"bold",marginTop:5}},"\u9009\u62e9\u53d1\u884c\u6e38\u620f:")),C.default.createElement(o.default,{span:5},C.default.createElement(W,null,i("cpid",{rules:[{required:!0}]})(C.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%",display:"block"},onChange:this.handleCpidChange},C.default.createElement(x,{value:"-1"},"\u8bf7\u9009\u62e9"),this.renderOptions()))))),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:3},C.default.createElement("div",{align:"right",style:{fontWeight:"bold",marginTop:5}},"\u53d1\u884c\u51ed\u8bc1\u6570\u91cf:")),C.default.createElement(o.default,{span:5},C.default.createElement(W,null,i("stock_num",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53d1\u884c\u51ed\u8bc1\u6570\u91cf"}]})(C.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165",style:{width:"100%"},onChange:this.handleStockNumChange})))),C.default.createElement(o.default,{span:8},C.default.createElement("div",{align:"left",style:{fontWeight:"bold",marginTop:5}},"\u4efd\uff08\u5355\u6b21\u53d1\u884c\u6570\u91cf\u4e0d\u5f97\u9ad8\u4e8e100\u4e07\u4efd\uff09"))),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:3},C.default.createElement("div",{align:"right",style:{fontWeight:"bold",marginTop:5}},"\u53d1\u884c\u4ef7(\u6e38\u620f\u91d1):")),C.default.createElement(o.default,{span:5},C.default.createElement(W,null,i("stock_amount",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53d1\u884c\u4ef7(\u6e38\u620f\u91d1)"}]})(C.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165",style:{width:"100%"},onChange:this.handleStockAmountChange})))),C.default.createElement(o.default,{span:8},C.default.createElement("div",{align:"left",style:{fontWeight:"bold",marginTop:5}},"\u5343\u514b/\u4efd\uff08\u9996\u6b21\u53d1\u884c\u5355\u4ef7\u4e0d\u5f97\u9ad8\u4e8e50\u5343\u514b\uff09"))),C.default.createElement("br",null),C.default.createElement("h2",null,C.default.createElement("b",null,"\u57fa\u672c\u4fe1\u606f\u9884\u89c8")),C.default.createElement("br",null),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u6e38\u620f\u540d\u79f0\uff1a",l.cp_text)),C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u6e38\u620f\u7c7b\u578b\uff1a",l.cp_type)),C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u5f00\u53d1\u8005\uff1a",l.develop_name))),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u53d1\u884c\u51ed\u8bc1\u603b\u6570(\u4efd)\uff1a",this.state.stock_num)),C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u53d1\u884c\u4ef7(\u5343\u514b/\u4efd)\uff1a",parseInt(this.state.stock_amount/100)/1e3)),C.default.createElement(o.default,{span:8},C.default.createElement("div",{style:{fontWeight:"bold"}},"\u4f17\u7b79\u603b\u91d1\u989d\uff1a",parseInt(this.state.stock_amount/100)/1e3*parseInt(this.state.stock_num)))),C.default.createElement(f.default,{gutter:16,style:{marginBottom:16}},C.default.createElement(o.default,{span:3},C.default.createElement("div",{align:"right",style:{fontWeight:"bold",marginTop:5}},"\u5f00\u53d1\u56e2\u961f\u4ecb\u7ecd:")),C.default.createElement(o.default,{span:13},C.default.createElement(W,null,i("develop_text",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5f00\u53d1\u56e2\u961f\u4ecb\u7ecd"}]})(C.default.createElement(B,{placeholder:"\u8bf7\u8f93\u5165",style:{width:"100%"},onChange:this.handleDevelopTextChange}))))),C.default.createElement(W,(0,r.default)({},s,{style:{marginTop:32}}),C.default.createElement(u.default,{type:"primary",onClick:function(){return e.handleCreate(e.props.fundingapply.data,e.state)}},"\u63d0\u4ea4")))))}}]),t}(C.PureComponent),b=k))||b)||b),D=M;t.default=D},KNhs:function(e,t,a){e.exports={card:"antd-pro\\pages\\-funding\\style-card",heading:"antd-pro\\pages\\-funding\\style-heading",steps:"antd-pro\\pages\\-funding\\style-steps",errorIcon:"antd-pro\\pages\\-funding\\style-errorIcon",errorPopover:"antd-pro\\pages\\-funding\\style-errorPopover",errorListItem:"antd-pro\\pages\\-funding\\style-errorListItem",errorField:"antd-pro\\pages\\-funding\\style-errorField",editable:"antd-pro\\pages\\-funding\\style-editable",advancedForm:"antd-pro\\pages\\-funding\\style-advancedForm",optional:"antd-pro\\pages\\-funding\\style-optional"}}}]);