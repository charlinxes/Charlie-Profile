(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(t,e,r){"use strict";var c=r(6),o=r(69).find,_=r(130),n="find",l=!0;n in[]&&Array(1).find((function(){l=!1})),c({target:"Array",proto:!0,forced:l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),_(n)},248:function(t,e,r){"use strict";r.r(e);r(246),r(15),r(44);var c={name:"ProjectTemp",props:{projectName:{type:String,required:!0}},computed:{projectObject:function(){var t=this;return this.$store.state.projectArray.find((function(e){return e.name===t.projectName}))}}},o=r(16),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project__box"},[r("div",{staticClass:"project__edge-float"}),t._v(" "),r("ul",{staticClass:"project__list"},[r("li",{staticClass:"project__item"},[r("h3",{staticClass:"project__heading"},[t._v(t._s(t.projectObject.description))])]),t._v(" "),r("li",{staticClass:"project__item project__item--normalbreak"},[t._v("專案名稱："+t._s(t.projectObject.name))]),t._v(" "),r("li",{staticClass:"project__item"},[t._v("Github 網址："),r("a",{attrs:{href:t.projectObject.url}},[t._v(t._s(t.projectObject.url))])]),t._v(" "),r("li",{staticClass:"project__item"},[t._v("專案網址："),r("a",{attrs:{href:t.projectObject.homepage}},[t._v(t._s(t.projectObject.homepage))])]),t._v(" "),r("li",{staticClass:"project__item"},[t._v("專案主題：\n      "),t._l(t.projectObject.topics,(function(e,c){return r("span",{key:c,staticClass:"badge"},[t._v(t._s(e))])}))],2),t._v(" "),r("li",{staticClass:"project__item"},[t._v("專案描述："),t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);