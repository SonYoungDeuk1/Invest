(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{310:function(t,e,n){t.exports=n.p+"img/exhibition-modal-gnb.baf33c8.png"},311:function(t,e,n){t.exports=n.p+"img/gnb-count.9f47c9b.png"},341:function(t,e,n){"use strict";n.r(e);n(3),n(5),n(2),n(6);var r=n(0),o=n(21),c=(n(20),n(33),n(312),n(14),n(9),n(25),n(123),n(4),n(1),n(64),n(75)),l=n(313);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.store,e.next=3,n.$post("/exhibition/exhibition_list.do");case 3:o=e.sent,r.commit("setExhibitionList",o);case 5:case"end":return e.stop()}}),e)})))()},computed:d(d(d({},Object(c.c)({exhibition:function(t){return t.modal.exhibition},user_idx:function(t){return t.userInfo.data.idx},userInfo:function(t){return t.userInfo},exhibitionList:function(t){return t.exhibitionList}})),Object(c.b)({isLoggedIn:"isLoggedIn"})),{},{exhibitionIdx:function(){var t="number"==typeof this.detail.idx&&this.detail.idx.toString();return 1===t.length?"0"+t:t},detailSub:function(){return this.detail.sub&&this.detail.sub.split("\n").join("<br />")},player:function(){return this.$refs.youtube.player},professorLabel:function(){return this.detail.professor?" | ".concat(this.detail.professor," 교수"):""},loginUserInvestExhibition:function(){var t=this.userInfo.investList;if("string"==typeof t)return{};var e=this.exhibition.idx;return t.find((function(t){return t.exhibition_idx===e}))||{}},isLoginUserInvestThisExhibition:function(){return!!Object.keys(this.loginUserInvestExhibition).length}}),created:function(){var t=this.$route.query.exhibition_idx,e=this.exhibitionList.filter((function(e){return e.idx==+t}));this.detail=e[0]},data:function(){return{detail:{},investMoney:""}},methods:{getIdFromUrl:l.getIdFromUrl,playVideo:function(){this.player.playVideo()},playing:function(){console.log("o/ we are watching!!!")},resetData:function(){this.detail={},this.investMoney=""}},components:{Youtube:l.Youtube}},v=n(63),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"exhibition-detail"},[r("div",{staticClass:"container"},[r("Youtube",{ref:"youtube",attrs:{"video-id":t.getIdFromUrl(t.detail.url)},on:{playing:t.playing}}),t._v(" "),r("div",{staticClass:"gnb-img"},[r("img",{attrs:{src:n(310)}}),t._v(" "),r("img",{staticClass:"gnb-count",attrs:{src:n(311)}}),t._v(" "),r("span",[t._v(t._s(t.exhibitionIdx))])]),t._v(" "),r("h3",{domProps:{innerHTML:t._s(t.detailSub)}}),t._v(" "),r("h4",[r("span",{staticClass:"pro"},[t._v("지도교수")]),t._v(" "),r("span",{staticClass:"name"},[t._v(t._s(t.detail.professor))]),t._v(" "),r("span",{staticClass:"pro"},[t._v("팀원")]),t._v(" "),r("span",{staticClass:"name"},[t._v(t._s(t.detail.member))])]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.detail.comment)}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);