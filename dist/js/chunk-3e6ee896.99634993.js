(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e6ee896"],{"15b0":function(t,e,i){"use strict";i("be84")},5952:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list row"},[i("div",{staticClass:"col-md-6"},[i("h4",[t._v("TextEditors List")]),i("ul",{staticClass:"list-group"},t._l(t.textEditors,(function(e,n){return i("li",{key:n,staticClass:"list-group-item",class:{active:n==t.currentIndex},on:{click:function(i){return t.setActiveTextEditor(e,n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)]),i("div",{staticClass:"col-md-6"},[t.currentTextEditor?i("div",[i("h4",[t._v("TextEditor")]),i("div",[t._m(0),t._v(" "+t._s(t.currentTextEditor.title)+" ")]),i("div",[t._m(1),t._v(" "+t._s(t.currentTextEditor.text)+" ")]),i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/texts/"+t.currentTextEditor.id}},[t._v("Edit")])],1):i("div",[i("br"),i("p",[t._v("Please click on a TextEditor...")])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Title:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Text:")])])}],s=i("6cd2"),o={name:"textEditors-list",data:function(){return{textEditors:[],currentTextEditor:null,currentIndex:-1,title:""}},methods:{retrieveTextEditors:function(){var t=this;s["a"].getAll().then((function(e){t.textEditors=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveTextEditors(),this.currentTextEditor=null,this.currentIndex=-1},setActiveTextEditor:function(t,e){this.currentTextEditor=t,this.currentIndex=e},removeAllTextEditors:function(){var t=this;s["a"].deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},searchTitle:function(){var t=this;s["a"].findByTitle(this.title).then((function(e){t.textEditors=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveTextEditors()}},c=o,l=(i("15b0"),i("2877")),a=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=a.exports},be84:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3e6ee896.99634993.js.map