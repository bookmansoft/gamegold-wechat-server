(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{cXM5:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE"));a("miYZ");var c=r(a("tsqr")),s=r(a("d6i3")),u=a("7DNP"),o=a("dCQc"),l=a("YLDS"),p={namespace:"walletstep",state:{rememberWord:"",checkRememberWord:"",data:{}},effects:{submitStepForm:s.default.mark(function e(t,a){var r,n,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,e.next=4,n(o.fakeSubmitForm,r);case 4:return e.next=6,c({type:"saveStepFormData",payload:r});case 6:return e.next=8,c(u.routerRedux.push("/wallet/step-form/result"));case 8:case"end":return e.stop()}},e)}),submitAdvancedForm:s.default.mark(function e(t,a){var r,n,u;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(o.fakeSubmitForm,r);case 4:return u=e.sent,c.default.success("\u63d0\u4ea4\u6210\u529f"),e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}),fetch:s.default.mark(function e(t,a){var r,n,c,u,o,p,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,e.prev=2,console.log("walletstep fetch"),e.next=6,n(l.getKeyMaster,r);case 6:if(u=e.sent,console.log(u),!u.data||!u.data.mnemonic){e.next=14;break}return o=u.data.mnemonic.phrase,p=o.split(" "),d=p[0]+p[1]+p[2]+p[3]+p[4]+p[5]+p[6]+p[7]+p[8]+p[9]+p[10]+p[11],e.next=14,c({type:"save",payload:{rememberWord:d,checkRememberWord:""}});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](2),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[2,16]])})},reducers:{save:function(e,t){var a=t.payload;return(0,n.default)({},e,a)},appendText:function(e,t){var a=t.payload;return console.log(a.theText),e.checkRememberWord=e.checkRememberWord+a.theText,(0,n.default)({},e,{step:(0,n.default)({},e.step,a)})},saveStepFormData:function(e,t){var a=t.payload;return(0,n.default)({},e,{step:(0,n.default)({},e.step,a)})}}};t.default=p}}]);