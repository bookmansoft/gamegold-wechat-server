(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"F+pL":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),u=r(t("d6i3")),s=(t("7DNP"),t("YLDS")),d={namespace:"game",state:{step:{},data:{}},effects:{fetch:u.default.mark(function e(a,t){var r,n,d,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,d=t.put,e.next=4,n(s.getGameFromUrl,r);case 4:return p=e.sent,e.next=7,d({type:"save",payload:p});case 7:case"end":return e.stop()}},e)}),add:u.default.mark(function e(a,t){var r,n,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,e.next=4,n(s.addGameMgr,r);case 4:return d=e.sent,e.abrupt("return",d);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,n.default)({},e,{data:a.payload})},saveStepFormData:function(e,a){var t=a.payload;return(0,n.default)({},e,{step:(0,n.default)({},e.step,t)})}}};a.default=d}}]);