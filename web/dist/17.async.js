(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"Xfa+":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),s=r(a("d6i3")),u=a("YLDS"),l={namespace:"gameprops",state:{data:{list:[],pagination:{}},propsDetail:[],gameList:[],gamePropsList:[],userAllList:{list:[],pagination:{}},propByParams:[]},effects:{propsList:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.getGamePropsList,r);case 4:return p=e.sent,e.next=7,l({type:"allList",allListData:p});case 7:case"end":return e.stop()}},e)}),propsDetail:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.getGamePropsDetail,r);case 4:return p=e.sent,e.next=7,l({type:"gamePropsDetail",detail:p});case 7:case"end":return e.stop()}},e)}),propsDetailReturn:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.getGamePropsDetail,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),cpPropsDetail:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,a.put,e.next=4,n(u.getCpPropsDetail,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),cpPropsDetailById:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.getGamePropsDetailById,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),getPropsByGame:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.getPropsByGame,r);case 4:return p=e.sent,e.next=7,l({type:"gamePropsByGame",gamePropsList:p});case 7:case"end":return e.stop()}},e)}),getAllGameList:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.getAllGameList,r);case 4:return p=e.sent,e.next=7,l({type:"gameAllGameList",gameList:p});case 7:case"end":return e.stop()}},e)}),getAllPropsByParams:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.getAllPropsByParams,r);case 4:return p=e.sent,e.next=7,l({type:"propsByParams",propByParams:p});case 7:case"end":return e.stop()}},e)}),getAllPropsByParamsReturn:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.getAllPropsByParams,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),getAllUser:s.default.mark(function e(t,a){var r,n,l,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,l=a.put,e.next=4,n(u.queryUserMgr,r);case 4:return p=e.sent,e.next=7,l({type:"gameUserAll",userAll:p});case 7:case"end":return e.stop()}},e)}),createproplocal:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.CreatePropLocal,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),editproplocal:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.EditPropLocal,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),propcreatelistremote:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.PropCreateListRemote,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),getBalanceAll:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.getBalanceAll,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)}),sendlistremote:s.default.mark(function e(t,a){var r,n,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,e.next=4,n(u.sendListRemote,r);case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}},e)})},reducers:{allList:function(e,t){var a=t.allListData;return(0,n.default)({},e,{data:a})},gamePropsDetail:function(e,t){var a=t.detail;return(0,n.default)({},e,{propsDetail:a})},gamePropsByGame:function(e,t){var a=t.gamePropsList;return(0,n.default)({},e,{gamePropsList:a})},gameAllGameList:function(e,t){var a=t.gameList;return(0,n.default)({},e,{gameList:a})},propsByParams:function(e,t){var a=t.propByParams;return(0,n.default)({},e,{propByParams:a})},gameUserAll:function(e,t){var a=t.userAll;return(0,n.default)({},e,{userAllList:a})}}};t.default=l}}]);