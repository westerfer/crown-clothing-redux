(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[8],{110:function(e,c,t){},130:function(e,c,t){},140:function(e,c,t){"use strict";t.r(c);var n=t(3),s=(t(1),t(26)),a=t(17),r=t(33),i=t(31),l=(t(110),Object(s.b)(null,(function(e){return{clearItem:function(c){return e(Object(i.c)(c))},addItem:function(c){return e(Object(i.a)(c))},removeItem:function(c){return e(Object(i.d)(c))}}}))((function(e){var c=e.cartItem,t=e.clearItem,s=e.addItem,a=e.removeItem,r=c.name,i=c.imageUrl,l=c.price,o=c.quantity;return Object(n.jsxs)("div",{className:"checkout-item",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{alt:"item",src:i})}),Object(n.jsx)("span",{className:"name",children:r}),Object(n.jsxs)("span",{className:"quantity",children:[Object(n.jsx)("div",{className:"arrow",onClick:function(){return a(c)},children:"\u276e"}),Object(n.jsx)("span",{className:"value",children:o}),Object(n.jsx)("div",{className:"arrow",onClick:function(){return s(c)},children:"\u276f"})]}),Object(n.jsxs)("span",{className:"price",children:["$",l]}),Object(n.jsx)("div",{className:"remove-button",onClick:function(){return t(c)},children:"\u2716"})]})}))),o=t(111),j=t.n(o),d=t(112),b=t.n(d),m=function(e){var c=e.price,t=100*c;return Object(n.jsx)(j.a,{label:"Pay Now",name:"Crown Clothing",shippingAddress:!0,billingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(c),amount:t,panelLabel:"Pay Now",token:function(e){b()({url:"payment",method:"post",data:{amount:t,token:e}}).then((function(e){alert("Payment Successful")})).catch((function(e){console.log("Payment Error: ",JSON.parse(e)),alert("There was an issue with your payment. ")}))},stripeKey:"pk_test_51I6gikF8UizeRnAkUP3Xd7kIodq4dIVpuV7wKpRNcFrvpwJrxS3x3J4HzL50myX0AF2a9n2AxAhQKwT5hRy7fmFW00LGrcmMLn"})},h=(t(130),Object(a.b)({cartItems:r.b,total:r.d}));c.default=Object(s.b)(h)((function(e){var c=e.cartItems,t=e.total;return Object(n.jsxs)("div",{className:"checkout-page",children:[Object(n.jsxs)("div",{className:"checkout-header",children:[Object(n.jsx)("div",{className:"header-block",children:Object(n.jsx)("span",{children:"Product"})}),Object(n.jsx)("div",{className:"header-block",children:Object(n.jsx)("span",{children:"Description"})}),Object(n.jsx)("div",{className:"header-block",children:Object(n.jsx)("span",{children:"Quantity"})}),Object(n.jsx)("div",{className:"header-block",children:Object(n.jsx)("span",{children:"Price"})}),Object(n.jsx)("div",{className:"header-block",children:Object(n.jsx)("span",{children:"Remove"})})]}),c.map((function(e){return Object(n.jsx)(l,{cartItem:e},e.id)})),Object(n.jsx)("div",{className:"total",children:Object(n.jsxs)("span",{children:["Total: $",t]})}),Object(n.jsxs)("div",{className:"test-warning",children:["*Use the following test credit card for payments*",Object(n.jsx)("br",{}),"CC #: 4242 4242 4242 4242",Object(n.jsx)("br",{}),"Expiration Date: 01/25",Object(n.jsx)("br",{}),"CCV: 123"]}),Object(n.jsx)(m,{price:t})]})}))}}]);
//# sourceMappingURL=8.120ebfc9.chunk.js.map