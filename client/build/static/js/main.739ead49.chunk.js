(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{11:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION"}},18:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return O}));var r=n(11),c=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},a=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},i=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},u=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},s=function(){return{type:r.a.SIGN_OUT_SUCCESS}},o=function(){return{type:r.a.SIGN_OUT_SUCCESS}},l=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},d=function(){return{type:r.a.CHECK_USER_SESSION}},b=function(e){return{type:r.a.SIGN_UP_START,payload:e}},p=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},O=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return p}));var r=n(5),c=n.n(r),a=n(7),i=n(45),u=n(34),s=(n(90),n(77),function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,u,s,o,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=b.doc("users/".concat(t.uid)),i=b.collection("users"),e.next=6,r.get();case 6:return u=e.sent,e.next=9,i.get();case 9:if(s=e.sent,console.log({collectionSnapShot:s}),u.exists){e.next=22;break}return o=t.displayName,l=t.email,d=new Date,e.prev=14,e.next=17,r.set(Object(a.a)({displayName:o,email:l,createdAt:d},n));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(14),console.log("error creating user",e.t0.message);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e,null,[[14,19]])})));return function(t,n){return e.apply(this,arguments)}}()),o=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},l=function(){return new Promise((function(e,t){var n=d.onAuthStateChanged((function(t){n(),e(t)}),t)}))};u.a.initializeApp({apiKey:"AIzaSyAB1bdW7dSV1diVSOTrLaVFuliyO4hNpaM",authDomain:"crwn-db-ac8c4.firebaseapp.com",projectId:"crwn-db-ac8c4",storageBucket:"crwn-db-ac8c4.appspot.com",messagingSenderId:"614915554013",appId:"1:614915554013:web:b8c5eb77a57fb2e4af3934"});var d=u.a.auth(),b=u.a.firestore(),p=new u.a.auth.GoogleAuthProvider;p.setCustomParameters({prompt:"select_account"});u.a},24:function(e,t,n){"use strict";t.a={CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",ADD_ITEM:"ADD_ITEM",TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"}},27:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},31:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(24),c=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},a=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},s=function(){return{type:r.a.CLEAR_CART}}},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(17),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartItems})),i=Object(r.a)([c],(function(e){return e.hidden})),u=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),s=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(17),c=Object(r.a)([function(e){return e.user}],(function(e,t){return e.currentUser}))},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(27),c=(n(19),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),a=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},50:function(e,t,n){"use strict";var r=n(7),c=n(38),a=n(3);n(1),n(82);t.a=function(e){var t=e.children,n=(e.isGoogleSignIn,e.inverted),i=Object(c.a)(e,["children","isGoogleSignIn","inverted"]);return Object(a.jsx)("button",Object(r.a)(Object(r.a)({className:"".concat(n?"inverted":""," custom-button")},i),{},{children:t}))}},51:function(e,t,n){"use strict";var r=n(7),c=n(38),a=n(3);n(1),n(87);t.a=function(e){return function(t){var n=t.isLoading,i=Object(c.a)(t,["isLoading"]);return n?Object(a.jsx)("div",{className:"SpinnerOverlay",children:Object(a.jsx)("div",{className:"SpinnerContainer"})}):Object(a.jsx)(e,Object(r.a)({},i))}}},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(1),a=n.n(c),i=n(39),u=n.n(i),s=n(28),o=n(26),l=n(55),d=n(20),b=(n(73),n(37)),p=n(56),O=n.n(p),f=n(7),j=n(11),h={currentUser:null,error:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.a.SIGN_IN_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload,error:null});case j.a.SIGN_OUT_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:null,error:null});case j.a.SIGN_IN_FAILURE:case j.a.SIGN_OUT_FAILURE:case j.a.SIGN_UP_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{error:t.payload});default:return e}},m=n(24),E=n(60),_=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(E.a)(e),[Object(f.a)(Object(f.a)({},t),{},{quantity:1})])},x=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e}))},v={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case m.a.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:_(e.cartItems,t.payload)});case m.a.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case m.a.CLEAR_ITEM_FROM_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case m.a.CLEAR_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:[]});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},y=n(27),T={collections:null,isFetching:!1,errorMessage:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a.FETCH_COLLECTIONS_START:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0});case y.a.FETCH_COLLECTIONS_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,collections:t.payload});case y.a.FETCH_COLLECTIONS_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},w={key:"root",storage:O.a,whitelist:["cart"]},U=Object(d.c)({user:S,cart:I,directory:g,shop:N}),R=Object(b.a)(w,U),A=n(61),k=n(5),L=n.n(k),G=n(8),F=n(19),M=n(46),H=L.a.mark(z),P=L.a.mark(V),D=L.a.mark(q);function z(){var e,t,n;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=F.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(G.b)(F.b,t);case 7:return n=r.sent,r.next=10,Object(G.c)(Object(M.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(G.c)(Object(M.a)(r.t0.message));case 16:case"end":return r.stop()}}),H,null,[[0,12]])}function V(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(y.a.FETCH_COLLECTIONS_START,z);case 2:case"end":return e.stop()}}),P)}function q(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(V)]);case 2:case"end":return e.stop()}}),D)}var B=n(18),W=L.a.mark(ie),K=L.a.mark(ue),J=L.a.mark(se),X=L.a.mark(oe),Q=L.a.mark(le),Y=L.a.mark(de),$=L.a.mark(be),Z=L.a.mark(pe),ee=L.a.mark(Oe),te=L.a.mark(fe),ne=L.a.mark(je),re=L.a.mark(he),ce=L.a.mark(Se),ae=L.a.mark(me);function ie(e,t){var n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(G.b)(F.c,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(G.c)(Object(B.b)(Object(f.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(G.c)(Object(B.a)(c.t0));case 15:case"end":return c.stop()}}),W,null,[[0,11]])}function ue(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(F.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,ie(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(G.c)(Object(B.a)(t.t0));case 14:case"end":return t.stop()}}),K,null,[[0,10]])}function se(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.signOut();case 3:return e.next=5,Object(G.c)(Object(B.e)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(G.c)(Object(B.c)(e.t0));case 11:case"end":return e.stop()}}),J,null,[[0,7]])}function oe(e){var t,n,r,c,a,i;return L.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,u.prev=1,u.next=4,F.a.createUserWithEmailAndPassword(n,r);case 4:return a=u.sent,i=a.user,u.next=8,Object(G.c)(Object(B.h)({user:i,additionalData:{displayName:c}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(G.c)(Object(B.f)(u.t0));case 14:case"end":return u.stop()}}),X,null,[[1,10]])}function le(e){var t,n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,ie(n,r);case 3:case"end":return c.stop()}}),Q)}function de(){var e,t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.signInWithPopup(F.f);case 3:return e=n.sent,t=e.user,n.next=7,ie(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(G.c)(Object(B.a)(n.t0));case 13:case"end":return n.stop()}}),Y,null,[[0,9]])}function be(e){var t,n,r,c,a;return L.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,F.a.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,ie(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(G.c)(Object(B.a)(i.t0));case 14:case"end":return i.stop()}}),$,null,[[1,10]])}function pe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.GOOGLE_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),Z)}function Oe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.EMAIL_SIGN_IN_START,be);case 2:case"end":return e.stop()}}),ee)}function fe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.CHECK_USER_SESSION,ue);case 2:case"end":return e.stop()}}),te)}function je(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.SIGN_OUT_START,se);case 2:case"end":return e.stop()}}),ne)}function he(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.SIGN_UP_START,oe);case 2:case"end":return e.stop()}}),re)}function Se(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.SIGN_UP_SUCCESS,le);case 2:case"end":return e.stop()}}),ce)}function me(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(pe),Object(G.b)(Oe),Object(G.b)(fe),Object(G.b)(je),Object(G.b)(he),Object(G.b)(Se)]);case 2:case"end":return e.stop()}}),ae)}var Ee=n(31),_e=L.a.mark(Ie),xe=L.a.mark(Ce),ve=L.a.mark(ge);function Ie(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)(Object(Ee.b)());case 2:case"end":return e.stop()}}),_e)}function Ce(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.a.SIGN_OUT_SUCCESS,Ie);case 2:case"end":return e.stop()}}),xe)}function ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Ce)]);case 2:case"end":return e.stop()}}),ve)}var ye=L.a.mark(Te);function Te(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(q),Object(G.b)(me),Object(G.b)(ge)]);case 2:case"end":return e.stop()}}),ye)}var Ne=Object(A.a)(),we=[Ne];var Ue=Object(d.e)(R,d.a.apply(void 0,we));Ne.run(Te);var Re=Object(b.b)(Ue),Ae=(b.b,n(79),n(80),n(13)),ke=n(17);function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ge(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Fe=c.createElement("desc",null,"Created with Sketch."),Me=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function He(e,t){var n=e.title,r=e.titleId,a=Ge(e,["title","titleId"]);return c.createElement("svg",Le({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,Fe,Me)}var Pe=c.forwardRef(He),De=(n.p,n(33));function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var qe=c.createElement("g",null),Be=c.createElement("g",null),We=c.createElement("g",null),Ke=c.createElement("g",null),Je=c.createElement("g",null),Xe=c.createElement("g",null),Qe=c.createElement("g",null),Ye=c.createElement("g",null),$e=c.createElement("g",null),Ze=c.createElement("g",null),et=c.createElement("g",null),tt=c.createElement("g",null),nt=c.createElement("g",null),rt=c.createElement("g",null),ct=c.createElement("g",null);function at(e,t){var n=e.title,r=e.titleId,a=Ve(e,["title","titleId"]);return c.createElement("svg",ze({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),qe,Be,We,Ke,Je,Xe,Qe,Ye,$e,Ze,et,tt,nt,rt,ct)}var it=c.forwardRef(at),ut=(n.p,n(81),Object(ke.b)({itemCount:De.c})),st=Object(o.b)(ut,(function(e){return{toggleCartHidden:function(){return e(Object(Ee.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(it,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),ot=n(50),lt=(n(83),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," x $",c]})]})]})}),dt=Object(c.memo)(lt),bt=(n(84),Object(ke.b)({cartItems:De.b})),pt=Object(Ae.g)(Object(o.b)(bt)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(dt,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(r.jsx)(ot.a,{onClick:function(){n.push("/checkout"),c(Object(Ee.e)())},children:"Checkout"})]})}))),Ot=n(42),ft=(n(86),Object(ke.b)({currentUser:Ot.a,hidden:De.a})),jt=Object(o.b)(ft,(function(e){return{SignOutStart:function(){return e(Object(B.d)())}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.SignOutStart;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(s.b,{className:"logo-container",to:"/",children:Object(r.jsx)(Pe,{})}),Object(r.jsxs)("div",{className:"options",children:[t?Object(r.jsxs)("p",{className:"option",children:[" Hi ",t.displayName]}):null,Object(r.jsx)(s.b,{to:"/shop",className:"option",children:"Shop"}),Object(r.jsx)(s.b,{to:"/contact",className:"option",children:"Contact"}),t?Object(r.jsx)("div",{onClick:c,className:"option",children:"SIGN OUT"}):Object(r.jsx)(s.b,{to:"/auth",className:"option",children:"Sign In"}),Object(r.jsx)(st,{})]}),n?null:Object(r.jsx)(pt,{})]})})),ht=n(51),St=n(57),mt=n(58),Et=n(62),_t=n(59),xt=(n(88),function(e){Object(Et.a)(n,e);var t=Object(_t.a)(n);function n(){var e;return Object(St.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(mt.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?Object(r.jsxs)("div",{className:"ErrorImageOverlay",children:[Object(r.jsx)("div",{className:"ErrorImageContainer"}),Object(r.jsx)("h1",{className:"ErrorImageText",children:"Sorry, this page is broken"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(a.a.Component)),vt=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,139))})),It=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,136))})),Ct=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,137))})),gt=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,138))})),yt=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,140))})),Tt=Object(ke.b)({currentUser:Ot.a}),Nt=Object(o.b)(Tt,(function(e){return{checkUserSession:function(){return e(Object(B.i)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)(jt,{}),Object(r.jsx)(Ae.d,{children:Object(r.jsx)(xt,{children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)(ht.a,{}),children:[Object(r.jsx)(Ae.b,{exact:!0,path:"/",component:vt}),Object(r.jsx)(Ae.b,{path:"/shop",component:Ct}),Object(r.jsx)(Ae.b,{exact:!0,path:"/contact",component:It}),Object(r.jsx)(Ae.b,{exact:!0,path:"/checkout",component:yt}),Object(r.jsx)(Ae.b,{exact:!0,path:"/auth",render:function(){return n?Object(r.jsx)(Ae.a,{to:"/"}):Object(r.jsx)(gt,{})}})]})})})]})}));u.a.render(Object(r.jsx)(o.a,{store:Ue,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(l.a,{persistor:Re,children:Object(r.jsx)(Nt,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.739ead49.chunk.js.map