(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{JDLn:function(e,t,a){e.exports={toolbar:"antd-pro\\components\\-footer-toolbar\\index-toolbar",left:"antd-pro\\components\\-footer-toolbar\\index-left",right:"antd-pro\\components\\-footer-toolbar\\index-right"}},WnAZ:function(e,t,a){"use strict";var l=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("pVnL")),u=r(a("QILm")),d=r(a("lwsE")),o=r(a("W8MJ")),i=r(a("a1gu")),f=r(a("Nsbk")),c=r(a("7W2i")),s=l(a("q1tI")),m=r(a("17x9")),p=r(a("TSYQ")),v=r(a("JDLn")),h=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,i.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(r))),a.state={width:void 0},a.resizeFooterToolbar=function(){var e=document.querySelector(".ant-layout-sider");if(null!=e){var t=a.context.isMobile,l=t?null:"calc(100% - ".concat(e.style.width,")"),r=a.state.width;r!==l&&a.setState({width:l})}},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar),this.resizeFooterToolbar()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,l=e.extra,r=(0,u.default)(e,["children","className","extra"]),d=this.state.width;return s.default.createElement("div",(0,n.default)({className:(0,p.default)(a,v.default.toolbar),style:{width:d}},r),s.default.createElement("div",{className:v.default.left},l),s.default.createElement("div",{className:v.default.right},t))}}]),t}(s.Component);t.default=h,h.contextTypes={isMobile:m.default.bool}},YgtR:function(e,t,a){"use strict";var l=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var n=r(a("2/Rp"));a("g9YV");var u=r(a("wCAj"));a("P2fV");var d=r(a("NJEC"));a("/zsF");var o=r(a("PArb"));a("5NDa");var i=r(a("5rEg"));a("miYZ");var f=r(a("tsqr")),c=r(a("MVZn")),s=r(a("lwsE")),m=r(a("W8MJ")),p=r(a("a1gu")),v=r(a("Nsbk")),h=r(a("7W2i")),E=l(a("q1tI")),g=r(a("Y+p1")),y=r(a("Zpge")),k=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,p.default)(this,(0,v.default)(t).call(this,e)),a.index=0,a.cacheOriginData={},a.toggleEditable=function(e,t){e.preventDefault();var l=a.state.data,r=l.map(function(e){return(0,c.default)({},e)}),n=a.getRowByKey(t,r);n&&(n.editable||(a.cacheOriginData[t]=(0,c.default)({},n)),n.editable=!n.editable,a.setState({data:r}))},a.newMember=function(){var e=a.state.data,t=e.map(function(e){return(0,c.default)({},e)});t.push({key:"NEW_TEMP_ID_".concat(a.index),workId:"",name:"",department:"",editable:!0,isNew:!0}),a.index+=1,a.setState({data:t})},a.state={data:e.value,loading:!1,value:e.value},a}return(0,h.default)(t,e),(0,m.default)(t,[{key:"getRowByKey",value:function(e,t){var a=this.state.data;return(t||a).filter(function(t){return t.key===e})[0]}},{key:"remove",value:function(e){var t=this.state.data,a=this.props.onChange,l=t.filter(function(t){return t.key!==e});this.setState({data:l}),a(l)}},{key:"handleKeyPress",value:function(e,t){"Enter"===e.key&&this.saveRow(e,t)}},{key:"handleFieldChange",value:function(e,t,a){var l=this.state.data,r=l.map(function(e){return(0,c.default)({},e)}),n=this.getRowByKey(a,r);n&&(n[t]=e.target.value,this.setState({data:r}))}},{key:"saveRow",value:function(e,t){var a=this;e.persist(),this.setState({loading:!0}),setTimeout(function(){if(a.clickedCancel)a.clickedCancel=!1;else{var l=a.getRowByKey(t)||{};if(!l.workId||!l.name||!l.department)return f.default.error("\u8bf7\u586b\u5199\u5b8c\u6574\u6210\u5458\u4fe1\u606f\u3002"),e.target.focus(),void a.setState({loading:!1});delete l.isNew,a.toggleEditable(e,t);var r=a.state.data,n=a.props.onChange;n(r),a.setState({loading:!1})}},500)}},{key:"cancel",value:function(e,t){this.clickedCancel=!0,e.preventDefault();var a=this.state.data,l=a.map(function(e){return(0,c.default)({},e)}),r=this.getRowByKey(t,l);this.cacheOriginData[t]&&(Object.assign(r,this.cacheOriginData[t]),delete this.cacheOriginData[t]),r.editable=!1,this.setState({data:l}),this.clickedCancel=!1}},{key:"render",value:function(){var e=this,t=[{title:"\u6210\u5458\u59d3\u540d",dataIndex:"name",key:"name",width:"20%",render:function(t,a){return a.editable?E.default.createElement(i.default,{value:t,autoFocus:!0,onChange:function(t){return e.handleFieldChange(t,"name",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u6210\u5458\u59d3\u540d"}):t}},{title:"\u5de5\u53f7",dataIndex:"workId",key:"workId",width:"20%",render:function(t,a){return a.editable?E.default.createElement(i.default,{value:t,onChange:function(t){return e.handleFieldChange(t,"workId",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u5de5\u53f7"}):t}},{title:"\u6240\u5c5e\u90e8\u95e8",dataIndex:"department",key:"department",width:"40%",render:function(t,a){return a.editable?E.default.createElement(i.default,{value:t,onChange:function(t){return e.handleFieldChange(t,"department",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u6240\u5c5e\u90e8\u95e8"}):t}},{title:"\u64cd\u4f5c",key:"action",render:function(t,a){var l=e.state.loading;return a.editable&&l?null:a.editable?a.isNew?E.default.createElement("span",null,E.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u6dfb\u52a0"),E.default.createElement(o.default,{type:"vertical"}),E.default.createElement(d.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},E.default.createElement("a",null,"\u5220\u9664"))):E.default.createElement("span",null,E.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u4fdd\u5b58"),E.default.createElement(o.default,{type:"vertical"}),E.default.createElement("a",{onClick:function(t){return e.cancel(t,a.key)}},"\u53d6\u6d88")):E.default.createElement("span",null,E.default.createElement("a",{onClick:function(t){return e.toggleEditable(t,a.key)}},"\u7f16\u8f91"),E.default.createElement(o.default,{type:"vertical"}),E.default.createElement(d.default,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},E.default.createElement("a",null,"\u5220\u9664")))}}],a=this.state,l=a.loading,r=a.data;return E.default.createElement(E.Fragment,null,E.default.createElement(u.default,{loading:l,columns:t,dataSource:r,pagination:!1,rowClassName:function(e){return e.editable?y.default.editable:""}}),E.default.createElement(n.default,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember,icon:"plus"},"\u65b0\u589e\u6210\u5458"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,g.default)(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(E.PureComponent),w=k;t.default=w},erBf:function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var n=l(a("2/Rp"));a("Xi6J");var u=l(a("kl6h"));a("IzEo");var d=l(a("bx4M"));a("14J3");var o=l(a("BMrR"));a("jCWc");var i=l(a("kPKH"));a("5NDa");var f=l(a("5rEg"));a("Q9mQ");var c=l(a("diRs"));a("Pwec");var s=l(a("CtXQ")),m=l(a("lwsE")),p=l(a("W8MJ")),v=l(a("a1gu")),h=l(a("Nsbk")),E=l(a("7W2i"));a("y8nQ");var g=l(a("Vl3Y"));a("iQDF");var y=l(a("+eQT"));a("OaEy");var k,w,b,I,C=l(a("2fM7")),N=r(a("q1tI")),x=a("MuoO"),R=l(a("WnAZ")),q=l(a("zHco")),P=l(a("YgtR")),F=l(a("Zpge")),M=C.default.Option,S=y.default.RangePicker,D={name:"\u4ed3\u5e93\u540d",url:"\u4ed3\u5e93\u57df\u540d",owner:"\u4ed3\u5e93\u7ba1\u7406\u5458",approver:"\u5ba1\u6279\u4eba",dateRange:"\u751f\u6548\u65e5\u671f",type:"\u4ed3\u5e93\u7c7b\u578b",name2:"\u4efb\u52a1\u540d",url2:"\u4efb\u52a1\u63cf\u8ff0",owner2:"\u6267\u884c\u4eba",approver2:"\u8d23\u4efb\u4eba",dateRange2:"\u751f\u6548\u65e5\u671f",type2:"\u4efb\u52a1\u7c7b\u578b"},T=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],L=(k=(0,x.connect)(function(e){var t=e.loading;return{submitting:t.effects["form/submitAdvancedForm"]}}),w=g.default.create(),k(b=w((I=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,v.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(r))),a.state={width:"100%"},a.getErrorInfo=function(){var e=a.props.form.getFieldsError,t=e(),l=Object.keys(t).filter(function(e){return t[e]}).length;if(!t||0===l)return null;var r=function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)},n=Object.keys(t).map(function(e){return t[e]?N.default.createElement("li",{key:e,className:F.default.errorListItem,onClick:function(){return r(e)}},N.default.createElement(s.default,{type:"cross-circle-o",className:F.default.errorIcon}),N.default.createElement("div",{className:F.default.errorMessage},t[e][0]),N.default.createElement("div",{className:F.default.errorField},D[e])):null});return N.default.createElement("span",{className:F.default.errorIcon},N.default.createElement(c.default,{title:"\u8868\u5355\u6821\u9a8c\u4fe1\u606f",content:n,overlayClassName:F.default.errorPopover,trigger:"click",getPopupContainer:function(e){return e.parentNode}},N.default.createElement(s.default,{type:"exclamation-circle"})),l)},a.resizeFooterToolbar=function(){requestAnimationFrame(function(){var e=document.querySelectorAll(".ant-layout-sider")[0];if(e){var t="calc(100% - ".concat(e.style.width,")"),l=a.state.width;l!==t&&a.setState({width:t})}})},a.validate=function(){var e=a.props,t=e.form.validateFieldsAndScroll,l=e.dispatch;t(function(e,t){e||l({type:"form/submitAdvancedForm",payload:t})})},a}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.submitting,l=this.state.width;return N.default.createElement(q.default,{title:"\u9ad8\u7ea7\u8868\u5355",content:"\u9ad8\u7ea7\u8868\u5355\u5e38\u89c1\u4e8e\u4e00\u6b21\u6027\u8f93\u5165\u548c\u63d0\u4ea4\u5927\u6279\u91cf\u6570\u636e\u7684\u573a\u666f\u3002",wrapperClassName:F.default.advancedForm},N.default.createElement(d.default,{title:"\u4ed3\u5e93\u7ba1\u7406",className:F.default.card,bordered:!1},N.default.createElement(g.default,{layout:"vertical",hideRequiredMark:!0},N.default.createElement(o.default,{gutter:16},N.default.createElement(i.default,{lg:6,md:12,sm:24},N.default.createElement(g.default.Item,{label:D.name},t("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"}]})(N.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"})))),N.default.createElement(i.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},N.default.createElement(g.default.Item,{label:D.url},t("url",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(N.default.createElement(f.default,{style:{width:"100%"},addonBefore:"http://",addonAfter:".com",placeholder:"\u8bf7\u8f93\u5165"})))),N.default.createElement(i.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},N.default.createElement(g.default.Item,{label:D.owner},t("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},N.default.createElement(M,{value:"xiao"},"\u4ed8\u6653\u6653"),N.default.createElement(M,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),N.default.createElement(o.default,{gutter:16},N.default.createElement(i.default,{lg:6,md:12,sm:24},N.default.createElement(g.default.Item,{label:D.approver},t("approver",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},N.default.createElement(M,{value:"xiao"},"\u4ed8\u6653\u6653"),N.default.createElement(M,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),N.default.createElement(i.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},N.default.createElement(g.default.Item,{label:D.dateRange},t("dateRange",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f"}]})(N.default.createElement(S,{placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"],style:{width:"100%"}})))),N.default.createElement(i.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},N.default.createElement(g.default.Item,{label:D.type},t("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},N.default.createElement(M,{value:"private"},"\u79c1\u5bc6"),N.default.createElement(M,{value:"public"},"\u516c\u5f00")))))))),N.default.createElement(d.default,{title:"\u4efb\u52a1\u7ba1\u7406",className:F.default.card,bordered:!1},N.default.createElement(g.default,{layout:"vertical",hideRequiredMark:!0},N.default.createElement(o.default,{gutter:16},N.default.createElement(i.default,{lg:6,md:12,sm:24},N.default.createElement(g.default.Item,{label:D.name2},t("name2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(N.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165"})))),N.default.createElement(i.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},N.default.createElement(g.default.Item,{label:D.url2},t("url2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(N.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165"})))),N.default.createElement(i.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},N.default.createElement(g.default.Item,{label:D.owner2},t("owner2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},N.default.createElement(M,{value:"xiao"},"\u4ed8\u6653\u6653"),N.default.createElement(M,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),N.default.createElement(o.default,{gutter:16},N.default.createElement(i.default,{lg:6,md:12,sm:24},N.default.createElement(g.default.Item,{label:D.approver2},t("approver2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},N.default.createElement(M,{value:"xiao"},"\u4ed8\u6653\u6653"),N.default.createElement(M,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),N.default.createElement(i.default,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},N.default.createElement(g.default.Item,{label:D.dateRange2},t("dateRange2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(N.default.createElement(u.default,{placeholder:"\u63d0\u9192\u65f6\u95f4",style:{width:"100%"},getPopupContainer:function(e){return e.parentNode}})))),N.default.createElement(i.default,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},N.default.createElement(g.default.Item,{label:D.type2},t("type2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(N.default.createElement(C.default,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},N.default.createElement(M,{value:"private"},"\u79c1\u5bc6"),N.default.createElement(M,{value:"public"},"\u516c\u5f00")))))))),N.default.createElement(d.default,{title:"\u6210\u5458\u7ba1\u7406",bordered:!1},t("members",{initialValue:T})(N.default.createElement(P.default,null))),N.default.createElement(R.default,{style:{width:l}},this.getErrorInfo(),N.default.createElement(n.default,{type:"primary",onClick:this.validate,loading:a},"\u63d0\u4ea4")))}}]),t}(N.PureComponent),b=I))||b)||b),z=L;t.default=z}}]);