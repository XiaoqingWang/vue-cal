(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["isolated-test-view"],{"978b":function(t,e,l){},"97d1":function(t,e,l){"use strict";var c=l("978b"),s=l.n(c);s.a},eb03:function(t,e,l){"use strict";l.r(e);var c=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-btn",{on:{click:function(e){t.selectedDate=new Date}}},[t._v("Select today")]),l("v-btn",{on:{click:function(e){t.splitDays[1].hide=!t.splitDays[1].hide}}},[t._v("Toggle Doctor 2")]),l("p",[t._v(t._s(t.splitDays))]),l("vue-cal",{staticClass:"vuecal--blue-theme",staticStyle:{"min-height":"400px","max-height":"65vh"},attrs:{"selected-date":t.selectedDate,"events-on-month-view":"","default-view":"month",events:t.events,"editable-events":"","split-days":t.splitDays,"sticky-split-labels":"","time-from":600,"time-to":1140},on:{"cell-focus":function(e){return t.log("cell-focus",e)},"cell-click":function(e){return t.log("cell-click",e)},"cell-dblclick":function(e){return t.log("cell-dblclick",e)},"cell-contextmenu":function(e){return t.log("cell-contextmenu",e)}}})],1)},s=[],n=(l("0d03"),l("fa5c")),o=new Date,i={components:{VueCal:n["a"]},data:function(){return{selectedDate:o,splitDays:[{id:"split 1",class:"doctor1",label:"Doctor 1",hide:!1},{id:"split 2",class:"doctor2",label:"Doctor 2",hide:!1},{id:"split 3",class:"doctor3",label:"Doctor 3",hide:!1}],events:[{startDate:o.subtractHours(6),endDate:o.subtractHours(4),title:"Event 1",split:"split 1"},{startDate:o.subtractHours(3),endDate:o.subtractHours(1),title:"Event 2",split:"split 3"}]}},methods:{log:function(){for(var t=arguments.length,e=new Array(t),l=0;l<t;l++)e[l]=arguments[l];console.log(e)}}},a=i,r=(l("97d1"),l("2877")),u=Object(r["a"])(a,c,s,!1,null,null,null);e["default"]=u.exports}}]);