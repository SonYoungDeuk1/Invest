(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10,11,13,15,16,18],{299:function(e,t,n){"use strict";n.r(t);n(4),n(3),n(1),n(5),n(2),n(6);var r=n(0),o=(n(15),n(75)),c=n(307);n(308);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},data:function(){return{swiperOptions:{slidesPerView:3,direction:"horizontal",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({exhibitionList:function(e){return e.exhibitionList.slice(0,3)}}))},v=d,w=n(63),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ranking-swiper"},[n("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:e.swiperOptions}},[e._l(e.exhibitionList,(function(e){return[n("swiper-slide",{key:e.thumbnail},[n("div",{staticClass:"content"},[n("img",{staticClass:"thumbnail",attrs:{src:e.thumbnail}})])])]})),e._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)}),[],!1,null,null,null);t.default=component.exports},300:function(e,t,n){"use strict";n.r(t);n(4),n(3),n(1),n(5),n(2),n(6);var r=n(40),o=n(21),c=n(0),l=(n(64),n(11),n(75));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={computed:v(v({},Object(l.c)({login:function(e){return e.modal.login}})),{},{visible:function(){return this.login.show}}),data:function(){return{user_id:"",user_pw:""}},methods:{loginRequest:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="user_id=".concat(e.user_id,"&user_pw=").concat(e.user_pw),t.next=4,e.$axios.$get("/user/login_ok.do?".concat(n));case 4:if(o=t.sent,"object"===Object(r.a)(o)){t.next=10;break}return alert("아이디와 비밀번호가 일치하지 않습니다."),e.resetForm(),t.abrupt("return");case 10:c=o.idx,localStorage.setItem("user_idx",c),e.$store.commit("toggleModal",{type:"login",status:!1}),e.resetForm(),e.$store.dispatch("REFRESH_USER_DATA"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),alert("정보가 일치하지 않습니다.");case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},closeModal:function(){this.$store.commit("toggleModal",{type:"login",status:!1}),this.resetForm()},resetForm:function(){this.user_id="",this.user_pw=""}}},f=n(63),component=Object(f.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("b-modal",{attrs:{visible:e.visible,centered:"","modal-class":"login-modal","no-close-on-backdrop":!0}},[n("h3",[e._v("로그인")]),e._v(" "),n("div",{staticClass:"input-wrap"},[n("span",[e._v("아이디")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_id,expression:"user_id"}],attrs:{type:"text",inputmode:"tel",placeholder:"'-'를 제외한 휴대폰 번호"},domProps:{value:e.user_id},on:{input:function(t){t.target.composing||(e.user_id=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-wrap"},[n("span",[e._v("비밀번호")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pw,expression:"user_pw"}],attrs:{type:"password",placeholder:"비밀번호"},domProps:{value:e.user_pw},on:{input:function(t){t.target.composing||(e.user_pw=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"button-wrap"},[n("button",{staticClass:"close-btn",on:{click:e.closeModal}},[e._v("닫기")]),e._v(" "),n("button",{staticClass:"login-btn",on:{click:e.loginRequest}},[e._v("로그인")])])])],1)}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,n){e.exports=n.p+"img/invest-img.3cdbacb.png"},302:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAABHNCSVQICAgIfAhkiAAAA55JREFUaEPtme110zAUhvEE0A26Ac0EpBNAJyCZgDIBYQJgAsIEtBPgTkA7AWEC2gnC++RIObKqL9uy4Ud1jk5PLFl+H+neqyu1eTZh2e/3XzX8SrVVvWia5n6qzzVTDSyIjcb+4IzfCuR8qu9NAiKIpQT/CIh+L5jPU8BUBxHECwn9pcrfUFkI5rY2zBQgrAQrEis7NQBT1V+qggT8Apgb1Vce1ZVALmquSjUQQZxJ2E9P3I0EL9WGX7zz2qr6SxUQ4xdAnDpiH/htTUh98IuXHkw1f6kF8l0C33gi2Teu7DOBAAnMc6cfv89r+MtoEAm8lJhPHsQXieN5p6gvsEC7Zau+67H+Mgok4hd3Eoa/BIve2arhrde41js8H1wGg0gQkYiPYzK24BdnErVLgLC/tKquvxCKV6oEh0FhuRjEzD7il6q+P1jdHb9IwLBiwLj+YrvznHrdZ+OMgphI9NoIR7w78yGNQb9IwLACJJWpwuoARdBgtXaxzh0QYy7MNsKjdh4Y7I53+ppFxF9SYIAABVzHDBtjMmSpMXOJDfzbDEhWu83MbLTZJJh28vx9JjcsUFhCCwgJ3mnuDdN+7YivnviZvQZroAIX8qGQ1BNA9gkITIZlJDfi76zFWIuF8vM1V8sCkFAeVG3HrUke8alDPndwdnXA1ohQbqma1I0FihzWjkHGgoQ2Kb5dtC+MFZl735gY5xx02sLmS6Q8+Oox/EaSOuI4SV11x86Jt+1mPwPC3w46k+zvIziWf9be6Vn1E10PkNCJ85HZP9rZNQMrfcTfcW+1KovSj9fqJy32Oskd8pu0oLFTgilKJDpUSbdLISMTGs2sU7lWq4/6sXuWSBaJUGQSZNbB7DiXNALjpw2TRrKSCBVa1WQabwYFxk0V7jUrJ6Um0rdfZE/LTl72PBJaZoFk3+sL4IRb36SLzLlIkJ+PzQzCPgZcsjyB5GZoaLtW3zetpxXpTKbJdf44Dx9ks27yNnTyg+9NtiKBqHXI/6uqdwb770BMNs0ZhyMr2TM5UjaL1nsb9XX/0/VR7/FsXNTqsyKO+JW+GrqF2ek5h7go1D8DKRAfm8kg1KwgUnapas2mz/1XFsqY4iymlTNXt53rI/wCWP9OoHScyXwkJwDx+AFXSMeU24TxpZnxPndWs4IExaeIBQaMramLuGogmIX/v0E09hYfA8tArUuuZEuTRi7xCKltyGxyttan3YFiAvneJnYqdMf9C0gWzHZLpvPUAAAAAElFTkSuQmCC"},303:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAaCAYAAABctMd+AAAABHNCSVQICAgIfAhkiAAAAe9JREFUSEvFlsFNwzAUhsmNG3QDmIB2AswEtBPQCm4cgAlIJwAkbkgQJqBMQDlxpExAmYB2gvD90XNIqZtEqIUnPSWOf39+frZfG61VWJqmTST7uMP1LhvhQ/wxiiK9By0qYwM+pf+iRDOhL2aCq5BmIRzwwCLWuHs8sYjV1gq6+IFBB0zQ+TlBEF6IeMqANgOVgjlD5/ioIDbwM3SXRdEc3HL8aqK9RWAPsQmeaCtF0ud7EILHiM6VCoRaeqUxgVKmFPUZo/GZheBKwa5FofdKK0T/DNyVwbU85bCBUO+VBnwT0Sc+YUxjVfApcE30P2nRhqxsQ3VBXvD1OptKvq/RHeO6E03SMg6mxTbmjs62CbShnZJLdET/jWlv0R0Wdz8/ioC36NBl0FNR6CI5Eyc85W/W3uHZNS/yekwgXWZFuG6WBgngdAytDMS0dTRDpiDUL/MFLr/VGRyIasIJ/oErb/n5tnKgNDn1GciX3MTnGJ0m0UHQ2G0xIsvzOx90Pltl9XlB9PlnWEMaut1ZERO8S0ObOHN1q0Chflha4QM+At4S3Nftmc34DdxS7MtHBvdLqSyvdSac4dFINYhllP7k1QFb5AlPld+eIl823J+a/t/AWYaru/QKnU6f/DvyJYGLmAyu/ya+UC1rjjGg+AsX3PXz930mCgAAAABJRU5ErkJggg=="},304:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAABHNCSVQICAgIfAhkiAAAAZdJREFUSEutlYFRwzAMResNYALKBJQNygSUCegGsAHHBHQDygYwAbBB2KBMAEwQ/utJObWN7ULjO13i2NKzrG8njQ5sbds2CtHKLlJK36Vw6UDWSDBANKBF4JCwKnBI2IdoZ6UMh4QdC/RWAu4NU2mOFOhSNpZNZPR5x0YSR7I5WWAVpgAzg8wLYnoRi3kIhkX0ArMwgzz4yvX8lD3LVlaXlQC877QcsBemyQtFuLEoT3ouFZjV7t22gfI/34HZIUVVZDL/KySuRrGW6l/LftihDVgYRMbT2o1QSnMLRKymg2lwLudHy2gSQRpDfShxKnMlRhb1O/UPfSDGImyl/omMK2ddHzkR/M4gxXohffOJW7fOyB19gmf1rsFpD4Q9JwiLaKIK/W60c5YFdZkFUVzp41iG5GlAUOYiV79wEQNi0fhsZNRlZhL9skmcI9RDuy9BPECA+eJ6QevMbMte3dmgSB5wtQVYNqOY2a06vm2crVksao0mmP8wsxlFmN8W/zpbVgYu4uJf2reRi5PCciVVHWqZlsZ/AfFM4CKxhjCeAAAAAElFTkSuQmCC"},305:function(e,t,n){"use strict";n.r(t);n(4),n(3),n(1),n(5),n(2),n(6);var r=n(0),o=(n(22),n(299)),c=n(300),l=n(75);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:{RankingSwiper:o.default,LoginModal:c.default},computed:v(v(v({},Object(l.c)({userInfo:function(e){return e.userInfo},exhibitionList:function(e){return e.exhibitionList}})),Object(l.b)({isLoggedIn:"isLoggedIn"})),{},{userMoney:function(){try{return this.userInfo.data.money.toLocaleString()}catch(e){return""}},userName:function(){return this.userInfo.data.name||""}}),data:function(){return{stickyHeader:!1,showHeader:!1}},methods:{handleLogout:function(){this.$store.dispatch("LOGOUT")},openLoginModal:function(){this.$store.commit("toggleModal",{type:"login",status:!0})},handleScroll:function(e){window.scrollY>745?this.stickyHeader=!0:this.stickyHeader=!1}},mounted:function(){this.showHeader=!0,window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},f=n(63),component=Object(f.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[{sticky:e.stickyHeader},"global-header"]},[r("nav",{staticClass:"global-header__nav"},[r("div",{staticClass:"title"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:"https://cphoto.asiae.co.kr/listimglink/6/2021011508011027451_1610665270.gif"}}),e._v(" "),r("div",[r("span",[e._v("한국기술교육대학교")]),e._v(" "),r("span",[e._v("2021 아이디어 옥션마켓")])])])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"user"},[e.isLoggedIn?[r("div",{staticClass:"user-menu pc"},[r("span",{staticClass:"remain-point"},[r("img",{attrs:{src:n(301),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.userMoney)+" 포인트")])]),e._v(" "),r("b-dropdown",{attrs:{right:"",text:e.userName}},[r("b-dropdown-item",[r("NuxtLink",{attrs:{to:"my-invest"}},[r("img",{attrs:{src:n(302),alt:""}}),e._v("\n                내 투자내역\n              ")])],1),e._v(" "),r("b-dropdown-item",[r("NuxtLink",{attrs:{to:"change-info"}},[r("img",{attrs:{src:n(303),alt:""}}),e._v("\n                개인정보 수정\n              ")])],1),e._v(" "),r("b-dropdown-divider"),e._v(" "),r("b-dropdown-item",{on:{click:e.handleLogout}},[r("img",{attrs:{src:n(304),alt:""}}),e._v("\n              로그아웃\n            ")])],1)],1),e._v(" "),r("div",{staticClass:"user-menu mobile"},[r("b-dropdown",{attrs:{right:""}},[r("b-dropdown-item",[r("span",{staticClass:"remain-point"},[r("img",{attrs:{src:n(301),alt:""}}),e._v(" "),r("span",[e._v(e._s(e.userMoney)+" 포인트")])])]),e._v(" "),r("b-dropdown-item",[r("NuxtLink",{attrs:{to:"my-invest"}},[r("img",{attrs:{src:n(302),alt:""}}),e._v("\n                내 투자내역\n              ")])],1),e._v(" "),r("b-dropdown-item",[r("NuxtLink",{attrs:{to:"change-info"}},[r("img",{attrs:{src:n(303),alt:""}}),e._v("\n                개인정보 수정\n              ")])],1),e._v(" "),r("b-dropdown-divider"),e._v(" "),r("b-dropdown-item",{on:{click:e.handleLogout}},[r("img",{attrs:{src:n(304),alt:""}}),e._v("\n              로그아웃\n            ")])],1)],1)]:[r("button",{staticClass:"login-button",on:{click:e.openLoginModal}},[e._v("\n          로그인\n        ")])]],2)]),e._v(" "),e._m(0),e._v(" "),r("LoginModal")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sub-nav"},[n("span",[e._v("졸업연구작품 목록")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{LoginModal:n(300).default})},306:function(e,t,n){"use strict";n.r(t);n(22);var r={components:{RankingSwiper:n(299).default},props:{hideSwiper:{type:Boolean,default:!1},title:{type:String}},data:function(){return{selectedMenu:"exhibition"}},created:function(){var e=this.$route.name;this.selectedMenu="guest"==e?"guestbook":"exhibition"}},o=n(63),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["global-main",{"hide-swiper":e.hideSwiper}]},[n("div",{staticClass:"gnb-image"},[n("div",{staticClass:"floating-menus"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMenu,expression:"selectedMenu"}],attrs:{type:"radio",name:"floating-menus",id:"exhibition",value:"exhibition"},domProps:{checked:e._q(e.selectedMenu,"exhibition")},on:{change:function(t){e.selectedMenu="exhibition"}}}),e._v(" "),n("label",{attrs:{for:"exhibition"},on:{click:function(t){return e.$router.push("/")}}},[e._v("작품")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMenu,expression:"selectedMenu"}],attrs:{type:"radio",name:"floating-menus",id:"guestbook",value:"guestbook"},domProps:{checked:e._q(e.selectedMenu,"guestbook")},on:{change:function(t){e.selectedMenu="guestbook"}}}),e._v(" "),n("label",{attrs:{for:"guestbook"},on:{click:function(t){return e.$router.push("/guest")}}},[e._v("방명록")])]),e._v(" "),e.title?n("div",{staticClass:"title underline"},[e._v("\n      "+e._s(e.title)+"\n    ")]):n("div",{staticClass:"title"},[e._v("\n      지금 인기있는 작품\n    ")]),e._v(" "),n("RankingSwiper"),e._v(" "),e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},309:function(e,t,n){"use strict";n.r(t);var r={props:["currentPage"]},o=n(63),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bread-crumb"},[n("span",[e._v("HOME")]),e._v(" "),n("span",[e._v(">")]),e._v(" "),n("span",[e._v("마이페이지")]),e._v(" "),n("span",[e._v(">")]),e._v(" "),n("span",[e._v(e._s(e.currentPage))])])}),[],!1,null,null,null);t.default=component.exports},319:function(e,t,n){"use strict";n.r(t);n(4),n(3),n(1),n(5),n(2),n(6);var r=n(21),o=n(0),c=(n(64),n(11),n(75));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{user_pw_old:"",user_pw_new:"",user_pw_new_check:""}},computed:d(d({},Object(c.c)({userInfo:function(e){return e.userInfo}})),{},{user_id:function(){return this.userInfo.data.idx}}),methods:{handleChangePassword:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.user_pw_old&&e.user_pw_new&&e.user_pw_new_check){t.next=4;break}return alert("값을 입력해주세요"),t.abrupt("return");case 4:if(e.user_pw_new===e.user_pw_new_check){t.next=9;break}return alert("신규 비밀번호가 서로 다릅니다. 다시 확인해주세요"),e.user_pw_new="",e.user_pw_new_check="",t.abrupt("return");case 9:return n="user_id=".concat(e.user_id,"&user_pw=").concat(e.user_pw_new,"&user_pw_old=").concat(e.user_pw_old),t.next=12,e.$axios.$get("/user/update_user_pw.do?".concat(n));case 12:t.sent,alert("정상 변경 되었습니다."),e.$router.push("/"),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(0);case 19:case"end":return t.stop()}}),t,null,[[0,17]])})))()},handleCancel:function(){this.resetForm()},resetForm:function(){this.user_pw_old="",this.user_pw_new="",this.user_pw_new_check=""}}},w=n(63),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-page"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"password"}},[e._v("기존 비밀번호")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pw_old,expression:"user_pw_old"}],attrs:{type:"password",id:"password",placeholder:"기존 비밀번호를 입력해주세요"},domProps:{value:e.user_pw_old},on:{input:function(t){t.target.composing||(e.user_pw_old=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"password"}},[e._v("신규 비밀번호")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pw_new,expression:"user_pw_new"}],attrs:{type:"password",id:"password",placeholder:"신규 비밀번호를 입력해주세요"},domProps:{value:e.user_pw_new},on:{input:function(t){t.target.composing||(e.user_pw_new=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pw_new_check,expression:"user_pw_new_check"}],attrs:{type:"password",id:"password",placeholder:"신규 비밀번호를 한 번 더 입력해주세요"},domProps:{value:e.user_pw_new_check},on:{input:function(t){t.target.composing||(e.user_pw_new_check=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"change-pw"},[n("button",{staticClass:"cancel",on:{click:e.handleCancel}},[e._v("취소")]),e._v(" "),n("button",{on:{click:e.handleChangePassword}},[e._v("변경 완료")])])])}),[],!1,null,null,null);t.default=component.exports},345:function(e,t,n){"use strict";n.r(t);var r=n(305),o=n(306),c=n(309),l=n(319),d={components:{GlobalHeader:r.default,GlobalMain:o.default,BreadCrumb:c.default,MyPage:l.default}},v=n(63),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-page-container"},[n("GlobalHeader"),e._v(" "),n("GlobalMain",{attrs:{hideSwiper:!0,title:"마이 페이지"}}),e._v(" "),n("BreadCrumb",{attrs:{currentPage:"개인정보 수정"}}),e._v(" "),n("MyPage")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MyPage:n(319).default})}}]);