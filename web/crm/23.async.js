(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"0Fdr":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a("p0pE")),n=r(a("d6i3")),s=(a("dCQc"),a("34ay")),d=a("HZnN"),c=a("YLDS"),o={namespace:"register",state:{status:void 0},effects:{authcode:n.default.mark(function e(t,a){var r,u,s,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,s=a.put,e.next=4,u(c.RegisterAuthCode,r);case 4:return d=e.sent,e.next=7,s({type:"authcodeHandle",payload:d});case 7:case"end":return e.stop()}},e)}),submit:n.default.mark(function e(t,a){var r,u,s,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=a.call,s=a.put,e.next=4,u(c.RegisterSubmit,r);case 4:return d=e.sent,e.next=7,s({type:"registerHandle",payload:d});case 7:case"end":return e.stop()}},e)})},reducers:{authcodeHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},registerHandle:function(e,t){var a=t.payload;return(0,s.setAuthority)(a.currentAuthority),(0,d.reloadAuthorized)(),(0,u.default)({},e,{status:a.status})}}};t.default=o}}]);