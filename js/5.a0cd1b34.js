(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"555a":function(e,t,a){e.exports=a.p+"img/icon.366396ba.png"},"5fcc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:" q-mt-lg"},[a("div",{staticClass:"row"},e._l(e.shortcuts,(function(t,s){return a("div",{key:s,staticClass:"col-12 col-sm-4 q-pa-sm"},[a("q-card",{staticClass:"ext-center"},[a("q-card-section",[a("div",{staticClass:"text-secondary"},[e._v("\n                            "+e._s(parseInt(t.count).toLocaleString())+"\n                        ")])]),a("q-separator",{attrs:{horizontal:"",inset:""}}),a("q-card-section",[a("div",{staticClass:"text-h4 text-grey"},[e._v("\n                        "+e._s(t.title)+"\n                        ")])])],1)],1)})),0),a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-editor",{attrs:{"min-height":"10rem",placeholder:"About George..."},model:{value:e.about,callback:function(t){e.about=t},expression:"about"}}),a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("pre",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.about))])])],1),a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{domProps:{innerHTML:e._s(e.about)}})],1)],1),a("Repos"),a("Media"),a("Test")],1)])},l=[],i=a("ded3"),r=a.n(i),o=a("733a"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-layout-padding q-mx-auto q-gutter-sm",staticStyle:{"max-width":"1000px",width:"100%","min-height":"100vh"}},[e._m(0),a("div",{staticClass:"row flex-center"},[a("q-item",{staticClass:"q-my-sm bg-blue-grey-6 shadow-1",staticStyle:{"border-radius":"30px"},attrs:{tag:"label",dark:!e.darkbg}},[a("q-item-section",[a("q-item-label",[e._v("Dark background (audio)")])],1),a("q-item-section",{attrs:{side:""}},[a("q-toggle",{attrs:{color:"blue-grey-2",dark:e.darkbg},model:{value:e.darkbg,callback:function(t){e.darkbg=t},expression:"darkbg"}})],1)],1),a("q-card",{staticClass:"q-mx-auto",staticStyle:{"max-width":"90vw",width:"100%"}},[a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"row flex-center q-gutter-sm"},[a("q-toggle",{attrs:{label:"Dense"},model:{value:e.dense,callback:function(t){e.dense=t},expression:"dense"}}),a("q-toggle",{attrs:{label:"Dark"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}}),a("q-toggle",{attrs:{label:"Radius"},model:{value:e.radius,callback:function(t){e.radius=t},expression:"radius"}}),a("q-toggle",{attrs:{label:"Muted"},model:{value:e.muted,callback:function(t){e.muted=t},expression:"muted"}}),a("q-toggle",{attrs:{label:"Plays Inline"},model:{value:e.playsinline,callback:function(t){e.playsinline=t},expression:"playsinline"}}),a("q-toggle",{attrs:{label:"Loop"},model:{value:e.loop,callback:function(t){e.loop=t},expression:"loop"}})],1),a("div",{staticClass:"row flex-center q-gutter-sm"},[a("q-toggle",{attrs:{label:"Big Play Button",disable:!e.videoType},model:{value:e.bigPlay,callback:function(t){e.bigPlay=t},expression:"bigPlay"}}),a("q-toggle",{attrs:{label:"Overlay",disable:!e.videoType},model:{value:e.overlay,callback:function(t){e.overlay=t},expression:"overlay"}}),a("q-toggle",{attrs:{label:"Mobile Mode",disable:!e.videoType},model:{value:e.mobileMode,callback:function(t){e.mobileMode=t},expression:"mobileMode"}})],1),a("div",{staticClass:"row flex-center q-gutter-sm"},[a("q-toggle",{attrs:{label:"Video"},model:{value:e.videoType,callback:function(t){e.videoType=t},expression:"videoType"}}),a("q-btn",{attrs:{label:"Next Video",disable:!e.videoType},on:{click:e.nextVideo}}),a("q-toggle",{attrs:{label:"Autoplay"},model:{value:e.autoplay,callback:function(t){e.autoplay=t},expression:"autoplay"}})],1)])],1)],1),a("div",{staticClass:"row flex-center",staticStyle:{"min-height":"2rem"}},[a("div",{staticStyle:{overflow:"hidden"}},[a("transition",{attrs:{name:"q-transition--scale"}},[a("q-media-player",{key:!0===e.videoType?"video":"audio",attrs:{type:!0===e.videoType?"video":"audio",dense:e.dense,dark:e.dark,"background-color":!0===e.darkbg?"black":"white","mobile-mode":e.mobileMode,muted:e.muted,playsinline:e.playsinline,loop:e.loop,radius:e.radius?"1rem":0,autoplay:e.autoplay,"show-big-play-button":e.bigPlay,sources:this.sources,poster:this.poster,tracks:this.tracks,"track-language":"English"},on:{ended:e.onEnded},scopedSlots:e._u([e.overlay?{key:"overlay",fn:function(){return[a("div",[a("img",{staticStyle:{width:"30vw","max-width":"50px",opacity:"0.25"},attrs:{src:"quasar-logo.png"}})])]},proxy:!0}:null],null,!0)})],1)],1)]),e._m(1)])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row flex-center"},[a("p",[e._v("This page is intended to test multiple scenarios of QMediaPlayer.")]),a("p",[e._v("Music courtesy of "),a("a",{attrs:{href:"https://freemusicarchive.org/music/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_Upbeat_Party",target:"blank"}},[e._v("Free Music Archive")])]),a("p",{staticStyle:{"text-align":"center"}},[e._v("Videos and subtitles courtesy of "),a("a",{attrs:{href:"https://mango.blender.org/download/",target:"blank"}},[e._v("Blender Organization")]),e._v(".")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("p",[e._v("QMediaPlayer "),a("a",{attrs:{href:"https://github.com/quasarframework/quasar-ui-qmediaplayer",target:"_blank"}},[e._v("home page")]),e._v(".")]),a("p",[e._v("Demo project's "),a("a",{attrs:{href:"https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/master/demo",target:"_blank"}},[e._v("home page")]),e._v(".")])])}],c=(a("a434"),a("ddb0"),{name:"PageIndex",data(){return{darkbg:!0,dark:!1,dense:!1,videoType:!0,mobileMode:!1,muted:!1,playsinline:!1,loop:!1,autoplay:!1,bigPlay:!0,radius:!1,overlay:!1,videoIndex:0,sources:[],tracks:[],poster:"",audio:{sources:[{src:"https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3",type:"audio/mp3"}]},video:[{label:"Tears of Steel",poster:"media/TearsOfSteel/TearsOfSteel.jpeg",sources:[{src:"http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov",type:"video/mp4"}],tracks:[{src:"media/TearsOfSteel/TOS-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"media/TearsOfSteel/TOS-de.vtt",kind:"subtitles",srclang:"de",label:"German"},{src:"media/TearsOfSteel/TOS-es.vtt",kind:"subtitles",srclang:"es",label:"Spanish"},{src:"media/TearsOfSteel/TOS-fr-Goofy.vtt",kind:"subtitles",srclang:"fr",label:"French"},{src:"media/TearsOfSteel/TOS-it.vtt",kind:"subtitles",srclang:"it",label:"Italian"},{src:"media/TearsOfSteel/TOS-nl.vtt",kind:"subtitles",srclang:"nl",label:"Dutch"}]},{label:"Sintel",poster:"media/sintel/sintel-poster2.jpeg",sources:[{src:"http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",type:"video/mp4"}],tracks:[{src:"media/sintel/sintel-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"media/sintel/sintel-de.vtt",kind:"subtitles",srclang:"de",label:"Deutsch"},{src:"media/sintel/sintel-es.vtt",kind:"subtitles",srclang:"es",label:"Español"},{src:"media/sintel/sintel-fr.vtt",kind:"subtitles",srclang:"fr",label:"Français"},{src:"media/sintel/sintel-it.vtt",kind:"subtitles",srclang:"it",label:"Italiano"},{src:"media/sintel/sintel-nl.vtt",kind:"subtitles",srclang:"nl",label:"Nederlands"},{src:"media/sintel/sintel-pt.vtt",kind:"subtitles",srclang:"pt",label:"Português"},{src:"media/sintel/sintel-pl.vtt",kind:"subtitles",srclang:"pl",label:"Polski"},{src:"media/sintel/sintel-ru.vtt",kind:"subtitles",srclang:"ru",label:"Russian"}]}]}},created(){this.setSource()},mounted(){},computed:{},watch:{videoType(e){this.setSource()}},methods:{setSource(){this.videoType?(this.sources.splice(0,this.sources.length,...this.video[this.videoIndex].sources),this.tracks.splice(0,this.tracks.length,...this.video[this.videoIndex].tracks),this.poster=this.video[this.videoIndex].poster):(this.sources.splice(0,this.sources.length,...this.audio.sources),this.tracks.splice(0,this.tracks.length),this.poster="")},onEnded(){this.videoType&&this.nextVideo()},nextVideo(){0===this.videoIndex?this.videoIndex=1:this.videoIndex=0,this.setSource()}}}),u=c,p=a("2877"),m=a("4d5a"),g=a("66e5"),b=a("4074"),v=a("0170"),h=a("9564"),f=a("f09f"),y=a("a370"),k=a("9c40"),q=a("bd08"),_=a("eebe"),x=a.n(_),w=Object(p["a"])(u,n,d,!1,null,null,null),S=w.exports;x()(w,"components",{QLayout:m["a"],QItem:g["a"],QItemSection:b["a"],QItemLabel:v["a"],QToggle:h["a"],QCard:f["a"],QCardSection:y["a"],QBtn:k["a"],QTr:q["a"]});var C=a("90d5"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-toggle",{attrs:{label:"Disable highlighting"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),a("q-toggle",{attrs:{label:"Disable line numbers"},model:{value:e.model2,callback:function(t){e.model2=t},expression:"model2"}}),a("q-markdown",{attrs:{"no-highlight":e.model,"no-line-numbers":e.model2}},[e._v('\n    Indented code\n\nInline `code`\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n```js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n    ')])],1)},Q=[],O={data(){return{model:!1,model2:!1}}},I=O,j=Object(p["a"])(I,T,Q,!1,null,null,null),D=j.exports;x()(j,"components",{QToggle:h["a"]});var P=a("2f62"),A={name:"dashboard",components:{Repos:o["a"],Media:S,Test:C["a"],Markdown:D},computed:r()({},Object(P["c"])("repos",["github_repos"])),data(){return{shortcuts:[{title:"Received Messages",count:"100000"},{title:"Blog Post",count:"400"},{title:"Portfolio",count:"8900"}],about:""}},mounted(){},methods:{}},M=A,E=a("9989"),L=a("eb85"),$=a("d66b"),B=Object(p["a"])(M,s,l,!1,null,null,null);t["default"]=B.exports;x()(B,"components",{QPage:E["a"],QCard:f["a"],QCardSection:y["a"],QSeparator:L["a"],QEditor:$["a"]})},"733a":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-table",{staticStyle:{width:"100%"},attrs:{grid:e.$q.screen.xs,title:"Git Repos",data:e.repos,columns:e.columns,"row-key":"name",filter:e.filter},scopedSlots:e._u([{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"Name",attrs:{props:t}},[e._v("\n          "+e._s(t.row.name)+"\n        ")]),a("q-td",{key:"Description",attrs:{props:t}},[e._v(" \n            "+e._s(t.row.description)+" \n        ")]),a("q-td",{key:"Language",attrs:{props:t}},[a("q-badge",{attrs:{color:"secondary"}},[e._v("\n            "+e._s(t.row.language)+"\n          ")])],1),a("q-td",{key:"CreatedAt",attrs:{props:t}},[e._v(" \n            "+e._s(new Date(t.row.createdAt).toDateString())+" \n        ")]),a("q-td",{key:"ID",attrs:{props:t}},[a("q-btn",{attrs:{round:"",outline:"",color:"secondary",icon:"add"},on:{click:function(a){return e.add_to_repo(t.row.id)}}})],1)],1)]}},{key:"top-right",fn:function(){return[a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0}])}),a("Dialog",{ref:"display_dialog",attrs:{from:"github",type:"Add From Github"}})],1)},l=[],i=(a("e01a"),a("ded3")),r=a.n(i),o=a("d581"),n=a("2f62"),d={components:{Dialog:o["a"]},computed:r()({},Object(n["c"])("repos",["github_repos"])),data(){return{filter:"",columns:[{name:"Name",required:!0,label:"Name",align:"left",field:e=>e.name,format:e=>""+e,sortable:!0},{name:"Description",align:"left",label:"Description",field:"description"},{name:"Language",label:"Language",field:"language"},{name:"CreatedAt",label:"Created At",field:"createdAt",sortable:!0},{name:"ID",label:"Add",field:"id"}],repos:[]}},mounted(){this.github_repos.forEach(e=>{this.repos.push({id:e.id,name:e.name,description:e.description,language:e.language,createdAt:e.created_at})})},methods:r()(r()({},Object(n["b"])("repos",["load_github_repos"])),{},{add_to_repo:function(e){const t=this;t.$refs.display_dialog.open(e)}})},c=d,u=a("2877"),p=a("eaac"),m=a("bd08"),g=a("db86"),b=a("58a81"),v=a("9c40"),h=a("27f9"),f=a("0016"),y=a("eebe"),k=a.n(y),q=Object(u["a"])(c,s,l,!1,null,null,null);t["a"]=q.exports;k()(q,"components",{QTable:p["a"],QTr:m["a"],QTd:g["a"],QBadge:b["a"],QBtn:v["a"],QInput:h["a"],QIcon:f["a"]})},"90d5":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"max-width":"100%",width:"100%","min-height":"10vh"}},[s("q-media-player",{attrs:{type:"video",sources:e.sources,poster:e.poster,"mobile-mode":"",radius:"0.5rem"},scopedSlots:e._u([{key:"overlay",fn:function(){return[s("div",[s("img",{staticStyle:{width:"10vw","max-width":"50px",opacity:"0.25"},attrs:{src:a("555a")}})])]},proxy:!0}])})],1)},l=[],i={props:["videoSrc"],data(){return{poster:"media/TearsOfSteel/TearsOfSteel.jpeg",sources:[{src:"http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",type:"video/mp4"}]}}},r=i,o=a("2877"),n=Object(o["a"])(r,s,l,!1,null,null,null);t["a"]=n.exports},d581:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-dialog",{attrs:{"full-width":""},model:{value:e.fullWidth,callback:function(t){e.fullWidth=t},expression:"fullWidth"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v(e._s(e.type)+" Project")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"q-pa-md"},[a("q-carousel",{attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}}),a("q-carousel-slide",{attrs:{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}}),a("q-carousel-slide",{attrs:{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}}),a("q-carousel-slide",{attrs:{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"}})],1)],1),a("div",{staticClass:"row justify-between"},[a("q-btn",{staticClass:" ",attrs:{rounded:"",outline:"",color:"secondary",label:" Image",icon:"add"}}),a("q-btn",{attrs:{rounded:"",outline:"",color:"negative",label:" Image",icon:"remove"}})],1)]),a("div",{staticClass:"col-12 col-md-4 "},[e._v("\n                      Description\n                      "),a("div",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{label:"Name","label-color":"grey",outlined:"",filled:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{label:"Description",autogrow:"","label-color":"grey",outlined:"",filled:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),a("q-select",{attrs:{filled:"",multiple:"",options:["JavaScript","Vue","Quasar","Html","Css"],"use-chips":"","use-input":"",label:"Language"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}}),a("q-input",{attrs:{label:"Github Link","label-color":"grey",outlined:"",filled:""},model:{value:e.githubLink,callback:function(t){e.githubLink=t},expression:"githubLink"}}),a("q-input",{attrs:{label:"Created At","label-color":"grey",outlined:"",filled:""},model:{value:e.createdAt,callback:function(t){e.createdAt=t},expression:"createdAt"}})],1)])])]),a("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary",rounded:"",label:"Edit"==e.type?"Update":"Add"}})],1)],1)],1)],1)},l=[],i=(a("e01a"),a("ded3")),r=a.n(i),o=a("2f62"),n={props:["type","from"],computed:r()(r()({},Object(o["c"])("repos",["github_repos"])),Object(o["c"])("repos",["current_repos"])),data(){return{fullWidth:!1,slide:1,name:"",language:null,description:"",githubLink:"",createdAt:""}},methods:{open(e){const t=this;t.fullWidth=!t.fullWidth;var a={};"github"==t.from?(a=t.github_repos.find(t=>t.id==e),t.name=a.name,t.description=a.description,t.language=a.language,t.githubLink=a.html_url,t.createdAt=a.created_at):"current"==t.from&&(a=t.current_repos.find(t=>t.id==e)),console.log(a)}}},d=n,c=a("2877"),u=a("24e8"),p=a("f09f"),m=a("a370"),g=a("880c"),b=a("62cd"),v=a("9c40"),h=a("27f9"),f=a("ddd8"),y=a("4b7e"),k=a("7f67"),q=a("eebe"),_=a.n(q),x=Object(c["a"])(d,s,l,!1,null,null,null);t["a"]=x.exports;_()(x,"components",{QDialog:u["a"],QCard:p["a"],QCardSection:m["a"],QCarousel:g["a"],QCarouselSlide:b["a"],QBtn:v["a"],QInput:h["a"],QSelect:f["a"],QCardActions:y["a"]}),_()(x,"directives",{ClosePopup:k["a"]})}}]);