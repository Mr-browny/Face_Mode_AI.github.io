(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{a825:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"text-right "},[t("div",[t("q-btn",{staticClass:"text-grey",attrs:{to:{name:"dashboard"},flat:""}},[e._v("Admin ")]),e._v("\n            |\n            "),t("span",[e._v(" Messages ")])],1)]),t("div",{staticClass:" q-mt-lg"},[t("Messages")],1)])},l=[],s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"row items-center q-gutter-sm q-mb-md"},[t("q-toggle",{attrs:{label:"Fill with data"},model:{value:e.hasData,callback:function(a){e.hasData=a},expression:"hasData"}}),t("q-toggle",{attrs:{label:"Hide no data"},model:{value:e.hideNoData,callback:function(a){e.hideNoData=a},expression:"hideNoData"}}),t("q-toggle",{attrs:{label:"Hide bottom layer"},model:{value:e.hideBottom,callback:function(a){e.hideBottom=a},expression:"hideBottom"}}),t("q-toggle",{attrs:{label:"Hide pagination"},model:{value:e.hidePagination,callback:function(a){e.hidePagination=a},expression:"hidePagination"}}),t("q-toggle",{attrs:{label:"Hide selected rows banner"},model:{value:e.hideSelectedBanner,callback:function(a){e.hideSelectedBanner=a},expression:"hideSelectedBanner"}})],1),t("q-table",{attrs:{title:"Contacts",data:e.records,columns:e.columns,filter:e.filter,"row-key":"name",selection:"multiple",selected:e.selected,"hide-bottom":e.hideBottom,"hide-selected-banner":e.hideSelectedBanner,"hide-no-data":e.hideNoData,"hide-pagination":e.hidePagination},on:{"row-click":e.revealMsg,"update:selected":function(a){e.selected=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0}])})],1)},i=[];const o=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37},{name:"Eclair",calories:262,fat:16,carbs:23},{name:"Cupcake",calories:305,fat:3.7,carbs:67},{name:"Gingerbread",calories:356,fat:16,carbs:49},{name:"Jelly bean",calories:375,fat:0,carbs:94},{name:"Lollipop",calories:392,fat:.2,carbs:98},{name:"Honeycomb",calories:408,fat:3.2,carbs:87},{name:"Donut",calories:452,fat:25,carbs:51},{name:"KitKat",calories:518,fat:26,carbs:65}];var r={data(){return{filter:"",hasData:!0,hideBottom:!1,hideSelectedBanner:!1,hideNoData:!1,hidePagination:!1,selected:[o[1]],columns:[{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:e=>e.name,format:e=>""+e,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"}]}},computed:{records(){return!0===this.hasData?o:[]}},methods:{revealMsg(e,a){this.$router.push({name:"singleMessage",params:{messageId:"123"}})}}},c=r,d=t("2877"),m=t("9564"),u=t("eaac"),b=t("27f9"),g=t("0016"),h=t("eebe"),f=t.n(h),p=Object(d["a"])(c,s,i,!1,null,null,null),v=p.exports;f()(p,"components",{QToggle:m["a"],QTable:u["a"],QInput:b["a"],QIcon:g["a"]});var q={name:"message",components:{Messages:v},data(){return{}}},k=q,w=t("9989"),x=t("9c40"),D=Object(d["a"])(k,n,l,!1,null,null,null);a["default"]=D.exports;f()(D,"components",{QPage:w["a"],QBtn:x["a"]})}}]);