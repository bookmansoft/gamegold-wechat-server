(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"8RbO":function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),u=n(t("d6i3")),s=t("YLDS"),c={namespace:"walletlog",state:{data:{}},effects:{fetch:u.default.mark(function e(a,t){var n,r,c,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(s.getWalletLog,n);case 4:return d=e.sent,e.next=7,c({type:"save",payload:d});case 7:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,r.default)({},e,{data:a.payload})}}};a.default=c}}]);