(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"B+Dq":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var o=r(a("BMrR"));a("+L6B");var l=r(a("2/Rp"));a("jCWc");var u=r(a("kPKH"));a("5NDa");var i=r(a("5rEg")),s=r(a("jehZ")),d=r(a("Y/ft")),c=r(a("2Taf")),f=r(a("vZ4D")),p=r(a("l4Ni")),m=r(a("ujKo")),g=r(a("MhPg"));a("y8nQ");var h=r(a("Vl3Y")),v=n(a("q1tI")),b=r(a("BGR+")),y=r(a("JAxp")),E=r(a("dQek")),C=r(a("s+z6")),x=h.default.Item,M=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,r=e.rules,o={rules:r||n.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),r=(a.defaultValue,a.rules,a.name),c=a.getCaptchaButtonText,f=a.getCaptchaSecondText,p=(a.updateActive,a.type),m=(0,d.default)(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),g=this.getFormItemOptions(this.props),h=m||{};if("Captcha"===p){var E=(0,b.default)(h,["onGetCaptcha","countDown"]);return v.default.createElement(x,null,v.default.createElement(o.default,{gutter:8},v.default.createElement(u.default,{span:16},t(r,g)(v.default.createElement(i.default,(0,s.default)({},n,E)))),v.default.createElement(u.default,{span:8},v.default.createElement(l.default,{disabled:e,className:y.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(f):c))))}return v.default.createElement(x,null,t(r,g)(v.default.createElement(i.default,(0,s.default)({},n,h))))}}]),t}(v.Component);M.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var w={};Object.keys(E.default).forEach(function(e){var t=E.default[e];w[e]=function(a){return v.default.createElement(C.default.Consumer,null,function(n){return v.default.createElement(M,(0,s.default)({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var k=w;t.default=k},JAxp:function(e,t,a){e.exports={login:"antd-pro\\components\\-login\\index-login",icon:"antd-pro\\components\\-login\\index-icon",other:"antd-pro\\components\\-login\\index-other",register:"antd-pro\\components\\-login\\index-register",prefixIcon:"antd-pro\\components\\-login\\index-prefixIcon",submit:"antd-pro\\components\\-login\\index-submit"}},"M+k9":function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("pVnL")),l=r(a("lwsE")),u=r(a("W8MJ")),i=r(a("a1gu")),s=r(a("Nsbk")),d=r(a("7W2i"));a("Znn+");var c=r(a("ZTPi")),f=n(a("q1tI")),p=r(a("s+z6")),m=c.default.TabPane,g=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),h=function(e){function t(e){var a;return(0,l.default)(this,t),a=(0,i.default)(this,(0,s.default)(t).call(this,e)),a.uniqueId=g("login-tab-"),a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return f.default.createElement(m,this.props,e)}}]),t}(f.Component),v=function(e){return f.default.createElement(p.default.Consumer,null,function(t){return f.default.createElement(h,(0,o.default)({tabUtil:t.tabUtil},e))})};v.typeName="LoginTab";var b=v;t.default=b},QBZU:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var o=r(a("Vl3Y"));a("Znn+");var l=r(a("ZTPi")),u=r(a("RIqP")),i=r(a("lwsE")),s=r(a("W8MJ")),d=r(a("a1gu")),c=r(a("Nsbk")),f=r(a("7W2i")),p=n(a("q1tI")),m=(r(a("17x9")),r(a("TSYQ"))),g=r(a("B+Dq")),h=r(a("M+k9")),v=r(a("Yrmy")),b=r(a("JAxp")),y=r(a("s+z6")),E=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,d.default)(this,(0,c.default)(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:[].concat((0,u.default)(e),[t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:t,updateActive:function(e){var t=a.state,n=t.type,r=t.active;r[n]?r[n].push(e):r[n]=[e],a.setState({active:r})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=t.type,o=a.props,l=o.form,u=o.onSubmit,i=n[r];l.validateFields(i,{force:!0},function(e,t){u(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,i=n.tabs,s=[],d=[];return p.default.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?s.push(e):d.push(e))}),p.default.createElement(y.default.Provider,{value:this.getContext()},p.default.createElement("div",{className:(0,m.default)(t,b.default.login)},p.default.createElement(o.default,{onSubmit:this.handleSubmit},i.length?p.default.createElement(p.default.Fragment,null,p.default.createElement(l.default,{animated:!1,className:b.default.tabs,activeKey:r,onChange:this.onSwitch},s),d):(0,u.default)(a))))}}]),t}(p.Component);E.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},E.Tab=h.default,E.Submit=v.default,Object.keys(g.default).forEach(function(e){E[e]=g.default[e]});var C=o.default.create()(E);t.default=C},Y5yc:function(e,t,a){"use strict";var n=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var o=n(a("2/Rp"));a("OaEy");var l=n(a("2fM7"));a("sRBo");var u=n(a("kaz8"));a("miYZ");var i=n(a("tsqr"));a("fOrg");var s=n(a("+KLJ")),d=n(a("p0pE")),c=n(a("2Taf")),f=n(a("vZ4D")),p=n(a("l4Ni")),m=n(a("ujKo")),g=n(a("MhPg"));a("5NDa");var h,v,b,y=n(a("5rEg")),E=r(a("q1tI")),C=a("MuoO"),x=a("LLXN"),M=n(a("wY1l")),w=(n(a("3a4m")),n(a("QBZU"))),k=n(a("w2qy")),S=n(a("p46w")),N=w.default.Tab,P=w.default.UserName,T=w.default.Password,q=w.default.Mobile,I=w.default.Captcha,L=(w.default.Submit,y.default.Group),A=(h=(0,C.connect)(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),h((b=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r))),a.state={type:"account",prefix:"86",openid:"",token:"",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,r){if(n)t(n);else{var o=a.props.dispatch,l=a.state.prefix;o({type:"login/login",payload:(0,d.default)({},r,{prefix:l,type:"captcha"})}).then(e).catch(t)}})})},a.handleSubmit=function(e,t){var n=a.loginForm;if(!e){var r=a.props.dispatch,o=a.state,l=o.prefix,u=o.type;r({type:"login/login",payload:(0,d.default)({},t,{prefix:l,type:u})}).then(function(){n.resetFields()})}},a.changeAutoLogin=function(e){sessionStorage.setItem("autoLogin",e.target.checked),a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return E.default.createElement(s.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a.handleUserName=function(e){a.setState({openid:e.target.value})},a.changePrefix=function(e){a.setState({prefix:e})},a.resetPassword=function(){var e=a.state.openid;if(e){i.default.info("\u5bc6\u7801\u5df2\u91cd\u7f6e, \u65b0\u7684\u5bc6\u7801\u5df2\u53d1\u81f3\u90ae\u7bb1, \u656c\u8bf7\u67e5\u6536");var t=a.props.dispatch;t({type:"login/resetPassword",payload:{openid:e}})}else i.default.error("\u8bf7\u8f93\u5165\u6709\u6548\u90ae\u4ef6\u5730\u5740\u4f5c\u4e3a\u7528\u6237\u540d")},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=S.default.get("openid"),t=S.default.get("token"),a=this.props.dispatch;e&&t?(sessionStorage.setItem("autoLogin",!0),this.setState({autoLogin:!0,openid:e,token:t}),a({type:"login/login",payload:{type:"cookie",openid:e,token:t}})):sessionStorage.setItem("autoLogin",!1)}},{key:"render",value:function(){var e=this,t=this.props,a=t.login,n=t.submitting,r=this.state,i=r.type,s=r.autoLogin;return E.default.createElement("div",{className:k.default.main},E.default.createElement(w.default,{defaultActiveKey:i,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},E.default.createElement(N,{key:"account",tab:(0,x.formatMessage)({id:"app.login.tab-login-credentials"})},"error"===a.status&&"account"===a.type&&!n&&this.renderMessage((0,x.formatMessage)({id:"app.login.message-invalid-credentials"})),E.default.createElement(P,{name:"userName",onChange:this.handleUserName,placeholder:"".concat((0,x.formatMessage)({id:"app.login.userName"}),": "),rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.userName.required"})}]}),E.default.createElement(T,{name:"password",placeholder:"".concat((0,x.formatMessage)({id:"app.login.password"}),": "),rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.password.required"})}],onPressEnter:function(){return e.loginForm.validateFields(e.handleSubmit)}}),E.default.createElement("div",null,E.default.createElement(u.default,{checked:s,onChange:this.changeAutoLogin},E.default.createElement(x.FormattedMessage,{id:"app.login.remember-me"})),E.default.createElement("a",{style:{float:"right"},onClick:this.resetPassword,href:"javascript:;"},E.default.createElement(x.FormattedMessage,{id:"app.login.forgot-password"})))),E.default.createElement(N,{key:"mobile",tab:(0,x.formatMessage)({id:"app.login.tab-login-mobile"})},"error"===a.status&&"mobile"===a.type&&!n&&this.renderMessage((0,x.formatMessage)({id:"app.login.message-invalid-verification-code"})),E.default.createElement(L,{compact:!0},E.default.createElement(l.default,{size:"large",value:this.state.prefix,onChange:this.changePrefix,style:{width:"20%"}},E.default.createElement(Option,{value:"86"},"+86"),E.default.createElement(Option,{value:"87"},"+87")),E.default.createElement(q,{name:"mobile",style:{width:"100%"},placeholder:(0,x.formatMessage)({id:"form.phone-number.placeholder"}),rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.phone-number.required"})},{pattern:/^1\d{10}$/,message:(0,x.formatMessage)({id:"validation.phone-number.wrong-format"})}]})),E.default.createElement(I,{name:"captcha",placeholder:(0,x.formatMessage)({id:"form.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:(0,x.formatMessage)({id:"form.get-captcha"}),getCaptchaSecondText:(0,x.formatMessage)({id:"form.captcha.second"}),rules:[{required:!0,message:(0,x.formatMessage)({id:"validation.verification-code.required"})}]}),E.default.createElement("div",null,E.default.createElement(u.default,{checked:s,onChange:this.changeAutoLogin},E.default.createElement(x.FormattedMessage,{id:"app.login.remember-me"})))),E.default.createElement("div",{className:k.default.other},E.default.createElement(o.default,{size:"large",loading:n,className:k.default.submit,type:"primary",htmlType:"submit"},E.default.createElement(x.FormattedMessage,{id:"app.login.login"})),E.default.createElement(M.default,{className:k.default.register,to:"/user/register"},E.default.createElement(x.FormattedMessage,{id:"app.login.signup"})))))}}]),t}(E.Component),v=b))||v),D=A;t.default=D},Yrmy:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp")),o=n(a("pVnL")),l=n(a("QILm"));a("y8nQ");var u=n(a("Vl3Y")),i=n(a("q1tI")),s=n(a("TSYQ")),d=n(a("JAxp")),c=u.default.Item,f=function(e){var t=e.className,a=(0,l.default)(e,["className"]),n=(0,s.default)(d.default.submit,t);return i.default.createElement(c,null,i.default.createElement(r.default,(0,o.default)({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},p=f;t.default=p},dQek:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=n(a("CtXQ")),o=n(a("q1tI")),l=n(a("JAxp")),u={UserName:{props:{size:"large",prefix:o.default.createElement(r.default,{type:"user",className:l.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:o.default.createElement(r.default,{type:"lock",className:l.default.prefixIcon}),type:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:o.default.createElement(r.default,{type:"mobile",className:l.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{11}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:o.default.createElement(r.default,{type:"mail",className:l.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=u},"s+z6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),r=(0,n.createContext)(),o=r;t.default=o},w2qy:function(e,t,a){e.exports={main:"antd-pro\\pages\\-user\\-login-main",icon:"antd-pro\\pages\\-user\\-login-icon",submit:"antd-pro\\pages\\-user\\-login-submit",other:"antd-pro\\pages\\-user\\-login-other",register:"antd-pro\\pages\\-user\\-login-register"}}}]);