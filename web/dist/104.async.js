(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{d11c:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),s=n(t("d6i3")),u=t("YLDS"),c={namespace:"userlist",state:{data:{list:[],pagination:{}}},effects:{fetch:s.default.mark(function e(a,t){var n,r,c,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(u.queryUserMgr,n);case 4:return d=e.sent,e.next=7,c({type:"save",payload:d});case 7:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,r.default)({},e,{data:a.payload})}}};a.default=c}}]);