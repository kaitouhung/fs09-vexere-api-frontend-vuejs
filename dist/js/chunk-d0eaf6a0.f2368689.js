(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0eaf6a0"],{"0498":function(t,s,a){"use strict";var n=a("9841"),i=a.n(n);i.a},"1cec":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[t.loading?a("div",[a("Loader")],1):a("div",[a("h3",[t._v("Stations")]),a("div",{staticClass:"row"},t._l(t.stations,(function(t){return a("StationItem",{key:t._id,attrs:{station:t}})})),1)])])},i=[],e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.station.name))]),a("router-link",{staticClass:"btn btn-info",attrs:{to:"/stations/"+t.station._id}},[t._v("Detail")])],1)])])},o=[],c={props:["station"]},r=c,l=a("2877"),u=Object(l["a"])(r,e,o,!1,null,null,null),d=u.exports,f=a("ae8e"),v={components:{StationItem:d,Loader:f["a"]},created:function(){this.$store.dispatch("fetchListStations")},computed:{loading:function(){return this.$store.state.stations.loading},stations:function(){return this.$store.state.stations.data}}},p=v,_=Object(l["a"])(p,n,i,!1,null,null,null);s["default"]=_.exports},9841:function(t,s,a){},ae8e:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"loader"})},i=[],e={},o=e,c=(a("0498"),a("2877")),r=Object(c["a"])(o,n,i,!1,null,null,null);s["a"]=r.exports}}]);
//# sourceMappingURL=chunk-d0eaf6a0.f2368689.js.map