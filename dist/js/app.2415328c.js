(function(t){function e(e){for(var r,o,u=e[0],c=e[1],l=e[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"250e":function(t,e,n){"use strict";var r=n("b803"),a=n.n(r);a.a},"387d":function(t,e,n){"use strict";var r=n("5516"),a=n.n(r);a.a},5516:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v(" "+t._s(t.title)+" ")]),n("MainCard")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-card"}},[n("h3",[t._v(" "+t._s(t.title)+" ")]),n("hr"),n("MainData")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-data"}},[t._l(t.values,(function(e){return[n("div",{key:e,staticClass:"mini-card"},[t._l(e,(function(e,r){return[n("h3",{key:e,staticClass:"mini-card-title"},[t._v(" "+t._s(r)+" ")]),n("h2",{key:e,staticClass:"mini-card-value"},[t._v(" "+t._s(e)+" ")])]}))],2)]}))],2)},l=[],s=(n("d3b7"),n("ddb0"),n("bc3a")),d={name:"Dati",data:function(){return{values:[]}},mounted:function(){var t=this;s.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json").then((function(e){t.values[0]={Infetti:e.data[0].totale_positivi},t.values[1]={Guariti:e.data[0].dimessi_guariti},t.values[2]={Deceduti:e.data[0].deceduti},console.log(t.values)}))}},f=d,p=(n("250e"),n("2877")),v=Object(p["a"])(f,c,l,!1,null,"bfa15c58",null),b=v.exports,h={name:"MainCard",data:function(){return{title:"Dati giornalieri"}},components:{MainData:b}},m=h,_=(n("de52"),Object(p["a"])(m,o,u,!1,null,"0695fd6c",null)),y=_.exports,g={name:"App",data:function(){return{title:"Covid-19"}},components:{MainCard:y}},O=g,j=(n("387d"),Object(p["a"])(O,a,i,!1,null,"3b41b472",null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},6904:function(t,e,n){},b803:function(t,e,n){},de52:function(t,e,n){"use strict";var r=n("6904"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2415328c.js.map