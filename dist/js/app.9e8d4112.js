(function(t){function e(e){for(var a,s,u=e[0],l=e[1],o=e[2],d=0,f=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,u=1;u<i.length;u++){var l=i[u];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"2bd7":function(t,e,i){},3020:function(t,e,i){},"524d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",[t._v(t._s(t.title))]),i("DailyCard"),i("SummaryCard"),i("RegionsCard")],1)},r=[],s=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"daily-card"}},[i("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.incr_values,(function(e,a){return[i("div",{key:e,staticClass:"mini-card"},[i("h2",{staticClass:"mini-card-value",class:a},[t._v(" +"+t._s(t._f("formatNumber")(e))+" ")]),i("h4",{staticClass:"mini-card-title",class:a},[t._v(" "+t._s(a)+" ")])])]}))],2)}),u=[],l=i("bc3a"),o=i.n(l),c={name:"DailyCard",data:function(){return{title:"Dati di oggi",incr_values:{infetti:null,guariti:null,deceduti:null}}},mounted:function(){var t=this;o.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){var i=e.data[e.data.length-1],a=e.data[e.data.length-2];t.incr_values.infetti=i.nuovi_positivi,t.incr_values.guariti=i.dimessi_guariti-a.dimessi_guariti,t.incr_values.deceduti=i.deceduti-a.deceduti}))}},d=c,f=(i("bd28"),i("2877")),v=Object(f["a"])(d,s,u,!1,null,"5b8e2c4d",null),m=v.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"summary-card"}},[i("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.values,(function(e,a){return[i("div",{key:e,staticClass:"mini-card"},[i("h2",{staticClass:"mini-card-value",class:a},[t._v(" "+t._s(t._f("formatNumber")(e))+" ")]),i("h4",{staticClass:"mini-card-title",class:a},[t._v(" "+t._s(a)+" ")])])]}))],2)},_=[],h=(i("d3b7"),i("ddb0"),{name:"SummaryCard",data:function(){return{title:"Dati complessivi",values:{infetti:null,guariti:null,deceduti:null,isolati:null,ospedalizzati:null,gravi:null,tamponi:null}}},mounted:function(){var t=this;o.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){var i=e.data[e.data.length-1];t.values.infetti=i.totale_positivi,t.values.guariti=i.dimessi_guariti,t.values.deceduti=i.deceduti,t.values.isolati=i.isolamento_domiciliare,t.values.ospedalizzati=i.totale_ospedalizzati,t.values.gravi=i.terapia_intensiva,t.values.tamponi=i.tamponi}))}}),g=h,b=(i("a54d"),Object(f["a"])(g,p,_,!1,null,"66abda9c",null)),y=b.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"regions-card"}},[i("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.regions_values,(function(e){return[i("div",{key:e.name,staticClass:"mini-card"},[i("h4",{staticClass:"mini-card-title"},[t._v(" "+t._s(e.name)+" ")]),i("h2",{staticClass:"mini-card-value infetti"},[t._v(" "+t._s(t._f("formatNumber")(e.infetti))+" ")]),i("h2",{staticClass:"mini-card-value guariti"},[t._v(" "+t._s(t._f("formatNumber")(e.guariti))+" ")]),i("h2",{staticClass:"mini-card-value deceduti"},[t._v(" "+t._s(t._f("formatNumber")(e.deceduti))+" ")])])]}))],2)},j=[],O={name:"RegionsCard",data:function(){return{title:"Dati per regione",regions_values:[]}},mounted:function(){var t=this;o.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json").then((function(e){for(var i=1;i<22;i++){var a={name:e.data[e.data.length-i].denominazione_regione,infetti:e.data[e.data.length-i].totale_positivi,guariti:e.data[e.data.length-i].dimessi_guariti,deceduti:e.data[e.data.length-i].deceduti};t.regions_values.push(a),t.regions_values.sort(t.reverse_sort)}}))},methods:{reverse_sort:function(t,e){return t.infetti>e.infetti?-1:t.infetti<e.infetti?1:0}}},w=O,x=(i("6c45"),Object(f["a"])(w,C,j,!1,null,"afe543b0",null)),z=x.exports,D={name:"App",data:function(){return{title:"Covid-19"}},components:{DailyCard:m,SummaryCard:y,RegionsCard:z}},S=i("6612");a["a"].filter("formatNumber",(function(t){return S(t).format("0,0")}));var P=D,k=(i("ac1a"),Object(f["a"])(P,n,r,!1,null,"59840b4b",null)),N=k.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"6c45":function(t,e,i){"use strict";var a=i("524d"),n=i.n(a);n.a},a54d:function(t,e,i){"use strict";var a=i("3020"),n=i.n(a);n.a},ac1a:function(t,e,i){"use strict";var a=i("f457"),n=i.n(a);n.a},bd28:function(t,e,i){"use strict";var a=i("2bd7"),n=i.n(a);n.a},f457:function(t,e,i){}});
//# sourceMappingURL=app.9e8d4112.js.map