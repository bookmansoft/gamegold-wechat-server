(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"+LeE":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("MVZn")),r=n(a("o0o1")),u=a("dCQc"),c={namespace:"monitor",state:{tags:[]},effects:{fetchTags:r.default.mark(function e(t,a){var n,s,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,s=a.put,e.next=3,n(u.queryTags);case 3:return c=e.sent,e.next=6,s({type:"saveTags",payload:c.list});case 6:case"end":return e.stop()}},e)})},reducers:{saveTags:function(e,t){return(0,s.default)({},e,{tags:t.payload})}}};t.default=c}}]);