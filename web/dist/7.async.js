(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{JD4K:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),d=a("YLDS"),c={namespace:"fundingauditview",state:{data:{}},effects:{fetch:u.default.mark(function e(t,a){var n,r,c,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,console.log("getFundingView model\uff1a"+n.id),e.next=5,r(d.getFundingView,n);case 5:if(i=e.sent,0!=i.code){e.next=9;break}return e.next=9,c({type:"save",payload:i.data});case 9:case"end":return e.stop()}},e)}),audit:u.default.mark(function e(t,a){var n,r,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(d.auditFunding,n.state);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,r.default)({},e,{data:t.payload})}}};t.default=c}}]);