(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{299:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),o=(r(76),r(75)),c=r(307);r(308);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},data:function(){return{swiperOptions:{slidesPerView:3,direction:"horizontal",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:w(w({},Object(o.c)({exhibitionList:function(t){return t.exhibitionList}})),{},{sortedExhibitionList:function(){return JSON.parse(JSON.stringify(this.exhibitionList)).sort((function(a,b){return a.in_rank-b.in_rank}))}})},f=r(63),component=Object(f.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ranking-swiper"},[r("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},[t._l(t.sortedExhibitionList,(function(t){return[r("swiper-slide",{key:t.thumbnail},[r("div",{staticClass:"content"},[r("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}})])])]})),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);