(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0814":function(t,e,n){},1452:function(t,e,n){},"23c69":function(t,e,n){"use strict";var r=n("8e39"),a=n.n(r);a.a},"2ae7":function(t,e,n){"use strict";var r=n("9e25"),a=n.n(r);a.a},"3a7b":function(t,e,n){},"50e8":function(t,e,n){"use strict";var r=n("d01f"),a=n.n(r);a.a},5166:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("AppNavigation")],1),n("section",[n("keep-alive",[n("router-view",{key:t.$route.fullPath,on:{"open-modal":t.toggleModal}})],1),t.showModal?n("AppModal",{on:{"close-modal":t.toggleModal}}):t._e()],1),n("footer",[n("AppFooter")],1)])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("ul",[t._l(t.links,(function(e,r){return n("li",{key:r},[n("router-link",{attrs:{to:e.url}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon,transform:e.transform,size:"2x"}}),n("br"),n("span",[t._v(t._s(e.text))])],1)],1)})),n("li",[n("AppSearch")],1)],2)])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("button",[n("font-awesome-icon",{staticClass:"icon-search",attrs:{icon:"search",transform:"shrink-6",size:"2x"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",maxlength:"20",placeholder:"Search movie or TV show..."},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}})])},u=[],l={name:"AppSearch",data:function(){return{query:"",lastQuery:null}},methods:{search:function(){this.query.length>=2&&this.query!=this.lastQuery&&(this.lastQuery=this.query,this.$router.push("/search?q="+this.query))}}},h=l,f=(n("9a88"),n("2877")),p=Object(f["a"])(h,c,u,!1,null,"4eb5ee1d",null),m=p.exports,v={name:"AppNavigation",components:{AppSearch:m},data:function(){return{links:[{url:"/tops",text:"Tops",icon:"star",transform:"shrink-7"},{url:"/movies",text:"Movies",icon:"film",transform:"shrink-6"},{url:"/tv-shows",text:"TV",icon:"tv",transform:"shrink-8"}]}}},d=v,g=(n("e3b0"),Object(f["a"])(d,i,o,!1,null,"0b2094d0",null)),A=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("ul",[n("li",[t._v("✔ Created with Vue.js")]),n("li",[t._v("\n      Data from\n      "),n("a",{attrs:{href:"https://www.themoviedb.org/documentation/api"}},[t._v("The Movie DB")])]),n("li",[n("a",{attrs:{href:"https://github.com/ozoono/vue-movies"}},[t._v("Repo on github")])]),n("li",[t._v("\n      © by\n      "),n("a",{attrs:{href:"https://github.com/ozoono/"}},[t._v("ozoono")])])])])}],_=(n("b791"),{}),w=Object(f["a"])(_,b,y,!1,null,"29bc77b0",null),O=w.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"overlay",on:{click:t.closeModal}}),n("div",{staticClass:"modal_content"},[n("div",{staticClass:"item_content clearfix"},[t.showItemInfo?[n("aside",{staticClass:"poster"},[n("figure",[n("img",{attrs:{src:t.urlImg}})]),n("ScoreIndicator",{attrs:{score:t.itemInfo.vote_average,size:"82","stroke-width":"5","stroke-color":"#ff6633"}}),n("i",[t._v("Vote Average")])],1),n("section",{staticClass:"info"},[n("h1",[t._v(t._s(t.itemInfo.title))]),n("p",[t._v(t._s(t.itemInfo.overview))]),n("h2",{staticClass:"label"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon,size:"1x"}}),t._v(" \n              "+t._s(t.dateLabel))],1),n("p",[t._v(t._s(this.date))]),n("h2",{staticClass:"label"},[t._v("Genres")]),n("ul",t._l(t.genres,(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0),n("h2",{staticClass:"label"},[t._v("CAST")]),n("p",[t._v(t._s(t.itemInfo.cast))]),n("h2",{staticClass:"label"},[t._v("Website")]),null!=t.itemInfo.homepage?n("p",{staticClass:"web"},[n("a",{attrs:{href:t.itemInfo.homepage}},[t._v(t._s(t.itemInfo.homepage))])]):t._e()])]:[t._v("Loading ...")]],2),n("button",{staticClass:"close_modal",attrs:{title:"Close"},on:{click:t.closeModal}},[n("font-awesome-icon",{attrs:{icon:"times",transform:"shrink-6",size:"1x"}})],1)])])},k=[],x=(n("8e6e"),n("7f7f"),n("ac6a"),n("456d"),n("bd86")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display"},[n("div",{staticClass:"circle"},[n("svg",{staticClass:"circle__svg",attrs:{width:t.size,height:t.size}},[n("circle",{staticClass:"circle__progress circle__progress--path",style:t.strokePathStyles,attrs:{cx:t.center,cy:t.center,r:t.radius}}),n("circle",{staticClass:"circle__progress circle__progress--fill",style:t.strokeFillStyles,attrs:{cx:t.center,cy:t.center,r:t.radius}})]),n("div",{staticClass:"percent"},[n("span",{staticClass:"percent__int"},[t._v(t._s(t.valueInt))]),n("span",{staticClass:"percent__dec"},[t._v(t._s(t.valueDec))])])])])},j=[],C=(n("c5f6"),n("28a5"),n("768b")),D={name:"ScoreIndicator",props:["score","size","strokeWidth","strokeColor"],data:function(){return{strokeDasharray:0,strokeDashoffset:0,transitionDuration:0,valueInt:"0.",valueDec:"00"}},computed:{center:function(){return Math.floor(this.size/2)},radius:function(){return this.center-this.strokeWidth},strokePathStyles:function(){return{stroke:this.strokeColor,"stroke-width":this.strokeWidth}},strokeFillStyles:function(){return{stroke:this.strokeColor,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDasharray,"stroke-dashoffset":this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.transitionDuration,"ms ease")}}},created:function(){this.animateCircle(),this.animateValue()},methods:{animateCircle:function(){var t=this,e=2*Math.PI*this.radius,n=parseFloat(this.score),r=e*((10-n)/10);this.strokeDasharray=e,this.strokeDashoffset=e,this.transitionDuration=900,setTimeout((function(){return t.strokeDashoffset=r}),100)},animateValue:function(){var t=String(this.score).split("."),e=Object(C["a"])(t,2),n=e[0],r=e[1],a=[Number(n),Number(r)];n=a[0],r=a[1],r<10&&(r*=10);var s=r>0?".":"";this.increaseValue(n,"int",s),r>0?this.increaseValue(r,"dec"):this.valueDec=""},increaseValue:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=this.transitionDuration/t,s=0,i=setInterval((function(){s===t&&window.clearInterval(i),"int"==e?n.valueInt=s+r:n.valueDec=s,s++}),a)}}},P=D,T=(n("e189"),Object(f["a"])(P,M,j,!1,null,"6afa82ce",null)),E=T.exports,S=n("2f62"),N=n("5a0c"),R=n.n(N);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(x["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z={name:"Modal",components:{ScoreIndicator:E},computed:V({},Object(S["c"])(["type","itemInfo"]),{},Object(S["b"])(["imgPath"]),{showItemInfo:function(){return!!Object.keys(this.itemInfo).length},urlImg:function(){return null!=this.itemInfo.poster_path?"".concat(this.imgPath).concat(this.itemInfo.poster_path):n("d810")},genres:function(){return this.itemInfo.genres.map((function(t){return t.name.toUpperCase()}))},date:function(){return this.itemInfo.year?R()(this.itemInfo.year).format("MMM D, YYYY"):""},dateLabel:function(){return"movie"==this.itemInfo.type?"Release date":"First air date"},icon:function(){return"movie"==this.itemInfo.type?"film":"tv"}}),methods:{closeModal:function(){this.$emit("close-modal")}}},q=z,X=(n("2ae7"),Object(f["a"])(q,I,k,!1,null,"caf785fc",null)),$=X.exports,U={name:"app",components:{AppNavigation:A,AppFooter:O,AppModal:$},data:function(){return{showModal:!1}},created:function(){this.loadInitialData()},methods:{loadInitialData:function(){try{this.$store.dispatch("getInitialData")}catch(t){this.error="Error: configuration not loaded"}},toggleModal:function(){this.showModal=!this.showModal}}},J=U,F=(n("5c0b"),Object(f["a"])(J,a,s,!1,null,null,null)),W=F.exports,Q=(n("5df3"),n("96cf"),n("3b8d")),H=n("bc3a"),Z=n.n(H),G="5fd51bf2e1f0d2c7ef0470a0e4788414",K=Z.a.create({baseURL:"https://api.themoviedb.org/3/"}),Y="en-US",B="false",tt={getConfiguration:function(){return K.get("configuration?api_key=".concat(G))},search:function(t,e){var n="search/multi?api_key=".concat(G,"&language=").concat(Y,"&query=").concat(t,"&page=").concat(e,"&include_adult=").concat(B);return K.get(n)},getItemInfo:function(t,e){var n="".concat(e,"/").concat(t,"?api_key=").concat(G,"&language=").concat(Y);return K.get(n)},getCast:function(t,e){var n="".concat(e,"/").concat(t,"/credits?api_key=").concat(G,"&language=").concat(Y);return K.get(n)},getTop:function(t){var e="".concat(t,"/top_rated?api_key=").concat(G,"&language=").concat(Y,"&page=1");return K.get(e)},getMoviesUpcoming:function(t){var e="movie/upcoming?api_key=".concat(G,"&language=").concat(Y,"&page=").concat(t);return K.get(e)},getMoviesLatest:function(t){var e="movie/latest?api_key=".concat(G,"&language=").concat(Y,"&page=").concat(t);return K.get(e)},getTvShowsOnAir:function(t){var e="tv/on_the_air?api_key=".concat(G,"&language=").concat(Y,"&page=").concat(t);return K.get(e)}};r["a"].use(S["a"]);var et=new S["a"].Store({state:{baseUrl:"",itemInfo:{}},getters:{imgPath:function(t){return"".concat(t.baseUrl,"w370_and_h556_bestv2")}},mutations:{LOAD_CONF:function(t,e){t.baseUrl=e},RESET_ITEM:function(t){r["a"].set(t,"itemInfo",{})},LOAD_ITEM:function(t,e){var n=e.type,a=e.info,s=e.cast,i={type:n,title:"movie"==n?a.title:a.name,year:"movie"==n?a.release_date:a.first_air_date,overview:a.overview,homepage:a.homepage,genres:a.genres,poster_path:a.poster_path,backdrop_path:a.backdrop_path,vote_average:a.vote_average,cast:s.map((function(t){return t.name})).slice(0,6).join(", ")};r["a"].set(t,"itemInfo",i)}},actions:{getInitialData:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,tt.getConfiguration();case 3:r=t.sent,n("LOAD_CONF",r.data.images.secure_base_url);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getItem:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s,i,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=n.id,s=n.type,r("RESET_ITEM"),t.next=5,Promise.all([tt.getItemInfo(a,s),tt.getCast(a,s)]);case 5:i=t.sent,o=Object(C["a"])(i,2),c=o[0],u=o[1],r("LOAD_ITEM",{type:s,info:c.data,cast:u.data.cast});case 10:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}}),nt=n("8c4f"),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"film",size:"1x"}}),t._v(" \n    Top 10 rated Movies\n  ")],1),n("ItemList",{attrs:{results:t.resultsMovie,type:"movie"},on:{"item-clicked":t.viewDetailInfo}}),n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"tv",transform:"shrink-3",size:"1x"}}),t._v(" \n      Top 10 rated TV shows\n    ")],1),n("ItemList",{attrs:{results:t.resultsTv,type:"tv"},on:{"item-clicked":t.viewDetailInfo}})],1)},at=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.results,(function(e,r){return n("ItemCard",t._g({key:r,attrs:{item:e,type:t.type}},t.$listeners))})),1)},it=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"card"},[n("div",[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.viewDetail(e)}}},[n("figure",[n("img",{attrs:{src:t.urlImg}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showIcon,expression:"showIcon"}],staticClass:"icon-container"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon,size:"1x"}})],1),n("span",{staticClass:"card-title"},[t._v(t._s(t.title))])])])])},ct=[];function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(n,!0).forEach((function(e){Object(x["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ht={name:"ItemCard",props:{item:Object,type:String},computed:lt({},Object(S["b"])(["imgPath"]),{urlImg:function(){return null!=this.item.poster_path?"".concat(this.imgPath).concat(this.item.poster_path):n("d810")},mediaType:function(){return"multi"==this.type?this.item.media_type:this.type},title:function(){return"movie"==this.mediaType?this.item.title:this.item.name},showIcon:function(){return"multi"==this.type},icon:function(){return"movie"==this.mediaType?"film":"tv"}}),methods:{viewDetail:function(){this.$emit("item-clicked",this.item.id,this.mediaType)}}},ft=ht,pt=(n("50e8"),Object(f["a"])(ft,ot,ct,!1,null,"42fecef6",null)),mt=pt.exports,vt={name:"ItemList",components:{ItemCard:mt},props:{results:Array,type:String}},dt=vt,gt=(n("8b50"),Object(f["a"])(dt,st,it,!1,null,"6c9a651e",null)),At=gt.exports,bt={methods:{viewDetailInfo:function(t,e){try{this.$store.dispatch("getItem",{id:t,type:e}),this.$emit("open-modal")}catch(n){this.error=n}}}},yt={name:"TopsView",mixins:[bt],components:{ItemList:At},data:function(){return{numItems:10,resultsMovie:[],resultsTv:[],loading:!0}},created:function(){this.fetchTops()},methods:{fetchTops:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([tt.getTop("movie"),tt.getTop("tv")]);case 3:e=t.sent,n=Object(C["a"])(e,2),r=n[0],a=n[1],this.resultsMovie=r.data.results.slice(0,this.numItems),this.resultsTv=a.data.results.slice(0,this.numItems),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[0,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}()}},_t=yt,wt=Object(f["a"])(_t,rt,at,!1,null,"6e95fa32",null),Ot=wt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"message"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}]},[t._v(t._s(t.message))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showResults,expression:"showResults"}]},[t._v("\n      Results found for\n      "),n("span",{staticClass:"query"},[t._v(t._s(t.query))]),t._v("\n      : "+t._s(t.totalResults)+"\n    ")])]),n("ItemList",{attrs:{results:t.results,type:"multi"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},kt=[],xt=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loadMore,expression:"loadMore"}],staticClass:"more-container"},[t.loading?n("span",[t._v("Loading...")]):n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.viewMoreData(e)}}},[n("span",[t._v("Load more results")])])])])}),Mt=[],jt={name:"ItemListMore",props:["loading","loadMore"],methods:{viewMoreData:function(){this.$emit("view-more")}}},Ct=jt,Dt=(n("23c69"),Object(f["a"])(Ct,xt,Mt,!1,null,"8be937b6",null)),Pt=Dt.exports,Tt={name:"SearchView",mixins:[bt],components:{ItemList:At,ItemListMore:Pt},data:function(){return{query:this.$route.query.q,page:1,searching:!1,loading:!1,error:"",results:[],totalResults:null,totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showResults:function(){return!this.searching&&null!=this.totalResults},showMessage:function(){return!(!this.searching&&""==this.error)},message:function(){return this.searching?"Searching...":this.error}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"INIT"==e?(this.page=1,this.searching=!0,this.results=[]):(this.page++,this.loading=!0),t.prev=1,t.next=4,tt.search(this.query,this.page);case 4:n=t.sent,this.results=this.results.concat(n.data.results),this.totalResults=n.data.total_results,this.totalPages=n.data.total_pages,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),"MORE"==e&&this.page--,this.error=t.t0;case 14:return t.prev=14,this.searching=!1,this.loading=!1,t.finish(14);case 18:case"end":return t.stop()}}),t,this,[[1,10,14,18]])})));function e(e){return t.apply(this,arguments)}return e}()}},Et=Tt,St=(n("c764"),Object(f["a"])(Et,It,kt,!1,null,"d153cfce",null)),Nt=St.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"film",size:"1x"}}),t._v(" \n      Upcoming Movies\n    ")],1),n("ItemList",{attrs:{results:t.results,type:"movie"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},Lt=[],Vt={name:"MoviesView",mixins:[bt],components:{ItemList:At,ItemListMore:Pt},data:function(){return{page:1,loading:!1,error:"",results:[],totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showMessage:function(){return!(!this.searching&&""==this.error)}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"INIT"==e?this.page=1:(this.page++,this.loading=!0),t.prev=1,t.next=4,tt.getMoviesUpcoming(this.page);case 4:n=t.sent,this.results=this.results.concat(n.data.results),this.totalPages=n.data.total_pages,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),"MORE"==e&&this.page--,this.error=t.t0;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,9,13,16]])})));function e(e){return t.apply(this,arguments)}return e}()}},zt=Vt,qt=Object(f["a"])(zt,Rt,Lt,!1,null,"50cf78c9",null),Xt=qt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[n("font-awesome-icon",{attrs:{icon:"tv",transform:"shrink-3",size:"1x"}}),t._v(" \n      TV Shows On Air\n    ")],1),n("ItemList",{attrs:{results:t.results,type:"tv"},on:{"item-clicked":t.viewDetailInfo}}),n("ItemListMore",{attrs:{loading:t.loading,loadMore:t.loadMore},on:{"view-more":function(e){return t.fetchData("MORE")}}})],1)},Ut=[],Jt={name:"TvShowsView",mixins:[bt],components:{ItemList:At,ItemListMore:Pt},data:function(){return{page:1,loading:!1,error:"",results:[],totalPages:null}},computed:{loadMore:function(){return this.totalPages>this.page},showMessage:function(){return!(!this.searching&&""==this.error)}},created:function(){this.fetchData("INIT")},methods:{fetchData:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"INIT"==e?this.page=1:(this.page++,this.loading=!0),t.prev=1,t.next=4,tt.getTvShowsOnAir(this.page);case 4:n=t.sent,this.results=this.results.concat(n.data.results),this.totalPages=n.data.total_pages,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),"MORE"==e&&this.page--,this.error=t.t0;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,9,13,16]])})));function e(e){return t.apply(this,arguments)}return e}()}},Ft=Jt,Wt=Object(f["a"])(Ft,$t,Ut,!1,null,"3f9f0736",null),Qt=Wt.exports;r["a"].use(nt["a"]);var Ht=new nt["a"]({mode:"history",routes:[{path:"/",redirect:{name:"tops"}},{path:"/tops",name:"tops",component:Ot},{path:"/search",name:"search",component:Nt},{path:"/movies",name:"movies",component:Xt},{path:"/tv-shows",name:"tv-shows",component:Qt},{path:"/*",redirect:{name:"tops"}}]}),Zt=n("ecee"),Gt=n("c074"),Kt=n("ad3d");Zt["c"].add(Gt["a"],Gt["e"],Gt["b"],Gt["d"],Gt["c"]),r["a"].component("font-awesome-icon",Kt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Ht,store:et,render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"8b50":function(t,e,n){"use strict";var r=n("1452"),a=n.n(r);a.a},"8e39":function(t,e,n){},"9a88":function(t,e,n){"use strict";var r=n("0814"),a=n.n(r);a.a},"9e25":function(t,e,n){},abf6:function(t,e,n){},afe5:function(t,e,n){},b791:function(t,e,n){"use strict";var r=n("3a7b"),a=n.n(r);a.a},c764:function(t,e,n){"use strict";var r=n("abf6"),a=n.n(r);a.a},d01f:function(t,e,n){},d810:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAIsBAMAAAAdZj8gAAAAG1BMVEW9vb3////FxcXm5ube3t7V1dXNzc329vbu7u6rJmYyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADfElEQVR4nO3WQU8bRxgG4KkB28ecmqsFUd0jwiThiJRFydEqccNxUxqbo+UmkCNqEsLP7szs7BpRpEgVVi/Pg1i+WX+7++4yOxACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/Sm0xORvHn+e2LuH12ezgKp5Oo7qVt2Jsc/pb79mJT7ziE/tGXOpSW7oNnqdgeNYMwKzviAQepYVLV7Z69eNj+IyXvX87f/hXC8Gb3/O/Q+7j74SbM5+/m81H8YD4Pi/mH18ep7328YG8Zwu0fvxyNSks+wZv48SCV4zIIVQgXzcm3v8ZNPMXLuuxZxHPWj5X8OoSt45AucZaK5gLlgybCt1xc5uTD2LFzXVqy1TI0x52WwZ3kg3Fziv6y7Ll4pNRt8t4yhxlOh/VDyfPlLi5y8rNQbmXRHX9Tem/K4E7yi3TCVK82lDwsh9Ncbh8/lPw8F1vTlPxbu7NNvj3Nz7qZSs1gnfxkZ7+pN/fM80QNT3qXDyWvctFbpXCrVP90J/kgfuWWdNfdoCRcxq9UxxvYTPKt43GuV2FxsE7+aTb7PV+23MKrmDw92OaFbJOfh/jLSG/ncNQOuuT9/fA8ds7eHrZ7FrPZrH685P2j0CYPr2+65B+r6iQsJkdfQ5N8UD+U/EV6oCHO53E36JJv1em1XVSvvoza5FVVTR8r+dOrz9N18rA4Dndny2L+56ok718/lHyZD4uBq27QJR/k1rS2bOwNzTM3zvP43VuFe/P8rL3m85j7Sdtdku/E38ynUN6AMuiSv6uq19Ncn24seV4Omwda3U/eLJWxGO8uQ55M43Xy4cls9ib+vEntZdAl/zqbvb3O9XhjyfNy2KyJr+4n39lvi4Nls860N1duIk2e0+1pN2iT5yexKmvoppLnOTIepfL5/eTNSpj/mC5zTzehyn3m9XCwHrTJt/fzXab6cGPJw6KO/8GEnTrs/Guel/U87V6mptTbJU+zp5/+/k/Wgzb5sOmL9d715pL3vt9+rkPvZdqW5E+vrq7KJC3X3IoRf/38vVs421cj3k3/5/UgJn8fj73Mxw3qWH8re/J2+Yjps91mO/pRX++HHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//gEo2cMjAP0YFwAAAABJRU5ErkJggg=="},e189:function(t,e,n){"use strict";var r=n("5166"),a=n.n(r);a.a},e332:function(t,e,n){},e3b0:function(t,e,n){"use strict";var r=n("afe5"),a=n.n(r);a.a}});
//# sourceMappingURL=app.9c302332.js.map