(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{310:function(t,e,r){"use strict";var n=r(10),o=r(124);n({target:"String",proto:!0,forced:r(125)("sub")},{sub:function(){return o(this,"sub","","")}})},323:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=r(21),c=(r(310),r(14),r(9),r(25),r(17),r(64),r(75));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/exhibition/exhibition_list.do");case 2:r=e.sent,t.$store.commit("setExhibitionList",r);case 4:case"end":return e.stop()}}),e)})))()},computed:f(f({},Object(c.c)({exhibitionList:function(t){return t.exhibitionList}})),{},{detailSub:function(){return this.detail.sub&&this.detail.sub.split("\n").join("<br />")}}),data:function(){return{}},methods:{professorLabel:function(t){return"".concat(t," 교수")||!1},handleModal:function(t){var e=t.idx;this.$store.commit("toggleModal",{type:"exhibition",status:!0,idx:e}),this.$router.replace("?exhibition_idx=".concat(e))}}},d=r(63),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"exhibition-list"},[r("h2",[t._v("졸업연구작품 목록")]),t._v(" "),r("div",{staticClass:"exhibition-list__contents"},t._l(t.exhibitionList,(function(e,n){return r("div",{key:n,staticClass:"content",on:{click:function(r){return t.handleModal(e)}}},[r("div",{staticClass:"box"},[r("img",{attrs:{src:e.thumbnail,alt:""}})]),t._v(" "),r("h3",{domProps:{innerHTML:t._s(t.detailSub)}}),t._v(" "),r("h4",[t._v(t._s(e.member)+" |"),r("br"),t._v(" "+t._s(t.professorLabel(e.professor)))])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);