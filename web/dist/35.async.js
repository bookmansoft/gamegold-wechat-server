(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"4ItM":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("p0pE")),o=n(a("d6i3")),s=a("YLDS"),r={namespace:"stockview",state:{data:{}},effects:{fetch:o.default.mark(function e(t,a){var n,c,r,d;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,r=a.put,console.log("stockview model\uff1a"+n.id),e.next=5,c(s.getStockView,n);case 5:return d=e.sent,e.next=8,r({type:"save",payload:d});case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,c.default)({},e,{data:t.payload})}}};t.default=r}}]);