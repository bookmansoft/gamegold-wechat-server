(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{w7Fx:function(e,t,a){"use strict";var l=a("g09b"),u=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("/zsF");var d=l(a("PArb"));a("+L6B");var n=l(a("2/Rp"));a("jCWc");var m=l(a("kPKH")),f=l(a("jehZ"));a("14J3");var c=l(a("BMrR")),s=l(a("2Taf")),i=l(a("vZ4D")),o=l(a("l4Ni")),E=l(a("ujKo")),p=l(a("MhPg"));a("5NDa");var v=l(a("5rEg"));a("iQDF");var g=l(a("+eQT"));a("OaEy");var h=l(a("2fM7"));a("y8nQ");var y,b,x,_,w=l(a("Vl3Y")),B=u(a("q1tI")),k=a("MuoO"),C=(a("LLXN"),l(a("3a4m"))),M=l(a("wd/R")),D=l(a("zHco")),R=(l(a("s3ev")),w.default.Item),F=h.default.Option,P=(g.default.RangePicker,v.default.TextArea,y=(0,k.connect)(function(e){var t=e.gamelist,a=e.loading;return{gamelist:t,loading:a.models.gamelist,submitting:a.effects["gamelist/addGame"]}}),b=w.default.create(),y(x=b((_=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,u=new Array(l),r=0;r<l;r++)u[r]=arguments[r];return a=(0,o.default)(this,(e=(0,E.default)(t)).call.apply(e,[this].concat(u))),a.handleCreate=function(e){var t=a.props,l=t.dispatch;t.form;l({type:"gamelist/addGame",payload:e}).then(function(e){console.log("addGame",e),0===e.code?C.default.push("/gamemgr/gameaddsuccess"):C.default.push("/gamemgr/gameadderror?code=".concat(e.code,"&message=").concat(e.message))})},a.renderImg=function(e){if(e&&e.length){var t=e.map(function(e,t){return B.default.createElement("img",{width:120,src:e,key:t})});return t}},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,u=t.form;e.preventDefault(),u.validateFieldsAndScroll(function(e,t){e||l({type:"gamelist/fetchGame",payload:t})})},a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch}},{key:"render",value:function(){var e=this,t=this.props.submitting,a=this.props,l=a.gamelist.record,u=a.form,s=u.getFieldDecorator,i=u.getFieldValue,o={labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:15}}},E={labelCol:{xs:{span:12},sm:{span:8}},wrapperCol:{xs:{span:12},sm:{span:16}}},p={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return B.default.createElement(D.default,{title:"\u6dfb\u52a0\u65b0\u6e38\u620f",content:""},B.default.createElement(w.default,{onSubmit:this.handleSubmit,hideRequiredMark:!1,style:{marginTop:8}},B.default.createElement(r.default,{bordered:!1},B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement("br",null),B.default.createElement("h2",null,B.default.createElement("b",null,"\u53d1\u5e03\u6e38\u620f")),B.default.createElement("br",null)),B.default.createElement(c.default,null,B.default.createElement(R,(0,f.default)({},o,{label:"\u6e38\u620f\u540d\u79f0"}),s("cp_name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6e38\u620f\u540d\u79f0"}]})(B.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165"}))),B.default.createElement(R,(0,f.default)({},o,{label:"\u6e38\u620f\u6570\u636e\u63a5\u53e3\u5730\u5740"}),s("cp_url",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6e38\u620fURL\u94fe\u63a5"}]})(B.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165"})))),B.default.createElement(c.default,null,B.default.createElement(m.default,{span:8},B.default.createElement(R,(0,f.default)({},E,{label:"\u4f7f\u7528\u9080\u8bf7\u5956\u52b1"}),s("use_invite_share",{initialValue:"1",rules:[{required:!0}]})(B.default.createElement(h.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"60px",display:"block"}},B.default.createElement(F,{value:"1"},"\u662f"),B.default.createElement(F,{value:"0"},"\u5426"))))),B.default.createElement(m.default,{span:8},B.default.createElement(R,(0,f.default)({},E,{label:"\u9080\u8bf7\u5956\u52b1\u6bd4\u4f8b"}),s("invite_share",{initialValue:"15"})(B.default.createElement(h.default,{placeholder:"\u9080\u8bf7\u5956\u52b1\u6bd4\u4f8b",style:{width:"100px"},disabled:"0"===i("use_invite_share")},B.default.createElement(F,{value:"1"},"1%"),B.default.createElement(F,{value:"2"},"2%"),B.default.createElement(F,{value:"3"},"3%"),B.default.createElement(F,{value:"4"},"4%"),B.default.createElement(F,{value:"5"},"5%"),B.default.createElement(F,{value:"6"},"6%"),B.default.createElement(F,{value:"7"},"7%"),B.default.createElement(F,{value:"8"},"8%"),B.default.createElement(F,{value:"9"},"9%"),B.default.createElement(F,{value:"10"},"10%"),B.default.createElement(F,{value:"11"},"11%"),B.default.createElement(F,{value:"12"},"12%"),B.default.createElement(F,{value:"13"},"13%"),B.default.createElement(F,{value:"14"},"14%"),B.default.createElement(F,{value:"15"},"15%"),B.default.createElement(F,{value:"16"},"16%"),B.default.createElement(F,{value:"17"},"17%"),B.default.createElement(F,{value:"18"},"18%"),B.default.createElement(F,{value:"19"},"19%"),B.default.createElement(F,{value:"20"},"20%"),B.default.createElement(F,{value:"21"},"21%"),B.default.createElement(F,{value:"22"},"22%"),B.default.createElement(F,{value:"23"},"23%"),B.default.createElement(F,{value:"24"},"24%"),B.default.createElement(F,{value:"25"},"25%"),B.default.createElement(F,{value:"26"},"26%"),B.default.createElement(F,{value:"27"},"27%"),B.default.createElement(F,{value:"28"},"28%"),B.default.createElement(F,{value:"29"},"29%"),B.default.createElement(F,{value:"30"},"30%"))))),B.default.createElement(m.default,{md:4},B.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:t},"\u9a8c\u8bc1"))),B.default.createElement("br",null),B.default.createElement("h2",null,B.default.createElement("b",null,"\u57fa\u672c\u4fe1\u606f\u9884\u89c8")),B.default.createElement("br",null),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:8,xs:12},"\u6e38\u620f\u540d\u79f0\uff1a",l.cp_text),B.default.createElement(m.default,{sm:8,xs:12},"\u6e38\u620f\u7b80\u79f0\uff1a",l.cp_name)),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:8,xs:12},"\u6e38\u620f\u7c7b\u578b\uff1a",l.cp_type),B.default.createElement(m.default,{sm:8,xs:12},"\u5f00\u53d1\u8005\uff1a",l.develop_name),B.default.createElement(m.default,{sm:8,xs:12},"\u53d1\u5e03\u65f6\u95f4\uff1a",!!l.publish_time&&(0,M.default)(1e3*l.publish_time).format("YYYY-MM-DD HH:mm:ss"))),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:24,xs:24},"URL\u5730\u5740\uff1a",l.cp_url)),B.default.createElement(d.default,{style:{margin:"20px 0"}}),B.default.createElement(c.default,{style:{marginBottom:16}},B.default.createElement(m.default,{sm:24,xs:24},B.default.createElement("h3",null,B.default.createElement("b",null,"\u7248\u672c\u4fe1\u606f")))),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:8,xs:12},"\u5f53\u524d\u7248\u672c\uff1a",l.cp_version),B.default.createElement(m.default,{sm:8,xs:12},"\u66f4\u65b0\u65f6\u95f4\uff1a",l.publish_time)),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:24,xs:24},"\u66f4\u65b0\u5185\u5bb9\uff1a",l.cp_desc)),B.default.createElement(d.default,{style:{margin:"20px 0"}}),B.default.createElement(c.default,{style:{marginBottom:16}},B.default.createElement(m.default,{sm:24,xs:24},B.default.createElement("h3",null,B.default.createElement("b",null,"\u7d20\u6750\u4fe1\u606f")))),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:24,xs:24},"\u6e38\u620f\u56fe\u6807\uff1a",B.default.createElement("img",{width:120,src:l.icon_url}))),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:24,xs:24},"\u5c01\u9762\u56fe\u7247\uff1a",B.default.createElement("img",{width:120,src:l.face_url}))),B.default.createElement(c.default,{style:{marginBottom:32}},B.default.createElement(m.default,{sm:24,xs:24},"\u6e38\u620f\u622a\u56fe\uff1a",this.renderImg(l.pic_urls))),B.default.createElement(R,(0,f.default)({},p,{style:{marginTop:32}}),B.default.createElement(n.default,{type:"primary",onClick:function(){return e.handleCreate(l)}},"\u63d0\u4ea4")))))}}]),t}(B.PureComponent),x=_))||x)||x),T=P;t.default=T}}]);