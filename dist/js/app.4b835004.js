(function(t){function e(e){for(var i,s,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"080e":function(t,e,a){},"13f5":function(t,e,a){t.exports=a.p+"img/instagram-logo.64cde9f3.svg"},"1a43":function(t,e,a){"use strict";var i=a("9166"),n=a.n(i);n.a},"1e89":function(t,e,a){"use strict";var i=a("080e"),n=a.n(i);n.a},"2ba4":function(t,e,a){"use strict";var i=a("9707"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v(t._s(t.title))]),a("h3",[t._v(t._s(t.fase))]),a("DailyCard"),a("SummaryCard"),a("RegionsCard"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"credits"}},[i("h4",[t._v(" Powered by Daniel Curcione ")]),i("a",{attrs:{href:"https://www.linkedin.com/in/danielcurcione/"}},[i("img",{attrs:{src:a("be3b")}})]),i("a",{attrs:{href:"https://www.gitlab.com/daniel.curcione"}},[i("img",{attrs:{src:a("9190")}})]),i("a",{attrs:{href:"https://www.facebook.com/daniel.curcione.1"}},[i("img",{attrs:{src:a("56ef3")}})]),i("a",{attrs:{href:"https://www.instagram.com/daniel_curcione/"}},[i("img",{attrs:{src:a("13f5")}})])])}],s=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"daily-card"}},[a("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+": "+t._s(t._f("formatDate")(t.update.date[2]))+" alle "+t._s(t.update.time[0])+":"+t._s(t.update.time[1])+" ")]),t._l(t.incr_values,(function(e,i){return[a("div",{key:e,staticClass:"mini-card"},[a("h2",{staticClass:"mini-card-value",class:i},[t._v(" +"+t._s(t._f("formatNumber")(e))+" ")]),a("h4",{staticClass:"mini-card-title",class:i},[t._v(" "+t._s(i)+" ")])])]}))],2)}),o=[],u=(a("ac1f"),a("1276"),a("bc3a")),c=a.n(u),l={name:"DailyCard",data:function(){return{title:"Aggiornamento",update:{date:[],time:[]},incr_values:{infetti:null,guariti:null,deceduti:null}}},mounted:function(){var t=this;c.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){var a=e.data[e.data.length-1],i=e.data[e.data.length-2];t.incr_values.infetti=a.nuovi_positivi,t.incr_values.guariti=a.dimessi_guariti-i.dimessi_guariti,t.incr_values.deceduti=a.deceduti-i.deceduti,t.update.date=t.split_info(a.data)[0].split("-"),t.update.time=t.split_info(a.data)[1].split(":")}))},methods:{split_info:function(t){return t.split("T")}}},d=l,f=(a("1e89"),a("2877")),m=Object(f["a"])(d,s,o,!1,null,"05c89ad8",null),p=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"summary-card"}},[a("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.values,(function(e,i){return[a("div",{key:e,staticClass:"mini-card"},[a("h2",{staticClass:"mini-card-value",class:i},[t._v(" "+t._s(t._f("formatNumber")(e))+" ")]),a("h4",{staticClass:"mini-card-title",class:i},[t._v(" "+t._s(i)+" ")])])]}))],2)},_=[],g=(a("d3b7"),a("ddb0"),{name:"SummaryCard",data:function(){return{title:"Dati complessivi",values:{infetti:null,guariti:null,deceduti:null,isolati:null,ospedalizzati:null,gravi:null,tamponi:null}}},mounted:function(){var t=this;c.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json").then((function(e){var a=e.data[e.data.length-1];t.values.infetti=a.totale_positivi,t.values.guariti=a.dimessi_guariti,t.values.deceduti=a.deceduti,t.values.isolati=a.isolamento_domiciliare,t.values.ospedalizzati=a.totale_ospedalizzati,t.values.gravi=a.terapia_intensiva,t.values.tamponi=a.tamponi}))}}),h=g,b=(a("ac90"),Object(f["a"])(h,v,_,!1,null,"4c0a7b00",null)),y=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"regions-card"}},[a("h3",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._l(t.regions_values,(function(e){return[a("div",{key:e.name,staticClass:"mini-card"},[a("h4",{staticClass:"mini-card-title"},[t._v(" "+t._s(e.name)+" ")]),a("h2",{staticClass:"mini-card-value infetti"},[t._v(" "+t._s(t._f("formatNumber")(e.infetti))+" ")]),a("h2",{staticClass:"mini-card-value guariti"},[t._v(" "+t._s(t._f("formatNumber")(e.guariti))+" ")]),a("h2",{staticClass:"mini-card-value deceduti"},[t._v(" "+t._s(t._f("formatNumber")(e.deceduti))+" ")])])]}))],2)},C=[],j={name:"RegionsCard",data:function(){return{title:"Dati per regione",regions_values:[]}},mounted:function(){var t=this;c.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json").then((function(e){for(var a=1;a<22;a++){var i={name:e.data[e.data.length-a].denominazione_regione,infetti:e.data[e.data.length-a].totale_positivi,guariti:e.data[e.data.length-a].dimessi_guariti,deceduti:e.data[e.data.length-a].deceduti};t.regions_values.push(i),t.regions_values.sort(t.reverse_sort)}}))},methods:{reverse_sort:function(t,e){return t.infetti>e.infetti?-1:t.infetti<e.infetti?1:0}}},O=j,x=(a("2ba4"),Object(f["a"])(O,w,C,!1,null,"81a0ef6c",null)),D=x.exports,k={name:"App",data:function(){return{title:"Covid-19 Italia",fase:"FASE 2"}},components:{DailyCard:p,SummaryCard:y,RegionsCard:D}},z=a("6612");i["a"].filter("formatNumber",(function(t){return z(t).format("0,0")})),i["a"].filter("formatDate",(function(t){var e=(new Date).getDate();return t==e?"oggi":"ieri"}));var S=k,P=(a("1a43"),Object(f["a"])(S,n,r,!1,null,"109dae42",null)),E=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)}}).$mount("#app")},"56ef3":function(t,e,a){t.exports=a.p+"img/facebook-logo.3dafd534.svg"},9166:function(t,e,a){},9190:function(t,e,a){t.exports=a.p+"img/gitlab-logo.789a9d01.svg"},9707:function(t,e,a){},ac90:function(t,e,a){"use strict";var i=a("c0b0"),n=a.n(i);n.a},be3b:function(t,e,a){t.exports=a.p+"img/linkedin-logo.5b2c999a.svg"},c0b0:function(t,e,a){}});
//# sourceMappingURL=app.4b835004.js.map