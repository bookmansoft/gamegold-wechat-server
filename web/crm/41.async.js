(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{GsTM:function(e,t,r){"use strict";var n=r("TqRt"),a=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("IzEo");var u=n(r("bx4M"));r("T2oS");var i=n(r("W9HT"));r("+L6B");var l,o,d,c=n(r("2/Rp")),f=n(r("lwsE")),s=n(r("W8MJ")),g=n(r("a1gu")),p=n(r("Nsbk")),E=n(r("7W2i")),y=a(r("q1tI")),v=r("MuoO"),h=n(r("uUKN")),w=(l=(0,v.connect)(function(e){return{isloading:e.error.isloading}}),l((d=function(e){function t(){var e,r;(0,f.default)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return r=(0,g.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(a))),r.state={isloading:!1},r.triggerError=function(e){r.setState({isloading:!0});var t=r.props.dispatch;t({type:"error/query",payload:{code:e}})},r}return(0,E.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.state.isloading;return y.default.createElement(u.default,null,y.default.createElement(i.default,{spinning:t,wrapperClassName:h.default.trigger},y.default.createElement(c.default,{type:"danger",onClick:function(){return e.triggerError(401)}},"\u89e6\u53d1401"),y.default.createElement(c.default,{type:"danger",onClick:function(){return e.triggerError(403)}},"\u89e6\u53d1403"),y.default.createElement(c.default,{type:"danger",onClick:function(){return e.triggerError(500)}},"\u89e6\u53d1500"),y.default.createElement(c.default,{type:"danger",onClick:function(){return e.triggerError(404)}},"\u89e6\u53d1404")))}}]),t}(y.PureComponent),o=d))||o),k=w;t.default=k},uUKN:function(e,t,r){e.exports={trigger:"antd-pro\\pages\\-exception\\style-trigger"}}}]);