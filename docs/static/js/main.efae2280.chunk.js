(this["webpackJsonprea-test"]=this["webpackJsonprea-test"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(1),r=a.n(n),c=a(4),d=a.n(c),s=(a(11),{results:[{price:"$726,500",agency:{brandingColors:{primary:"#ffe512"},logo:"https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"},id:"1",mainImage:"https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"},{price:"$560,520",agency:{brandingColors:{primary:"#fcfa3b"},logo:"https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"},id:"2",mainImage:"https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"},{price:"$826,500",agency:{brandingColors:{primary:"#57B5E0"},logo:"https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif"},id:"3",mainImage:"https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"}],saved:[{price:"$526,500",agency:{brandingColors:{primary:"#000000"},logo:"https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"},id:"4",mainImage:"https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"}]});a(12);var o=a(0);function b(e){var t=e.id,a=e.onButtonClick,r=e.price,c=e.mainImage,d=e.isSaved,s=Object(n.useState)(!1),b=Object(i.a)(s,2),f=b[0],u=b[1],l="".concat(d?"Remove":"Add"," property "),p=d?"#EECDCD":"#DEEBD7";return Object(o.jsxs)("div",{onMouseEnter:function(){return u(!0)},onMouseLeave:function(e){u(!1)},className:"propertyCard",children:[Object(o.jsx)("img",{src:c,className:"preview",alt:"todo"}),f&&Object(o.jsx)("button",{onClick:function(){return a(t)},style:{background:p},children:l}),"$ ",r]})}function f(e){var t=e.cards,a=e.title,i=e.isSaved,n=e.updateShortlistCards,r=function(e){n(e,i)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:a}),t.map((function(e,t){return Object(o.jsx)(b,{price:e.price,id:e.id,mainImage:e.mainImage,isSaved:i,onButtonClick:r},t)}))]})}var u=a(5),l=a(6),p=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"addCard",value:function(e,t){return e.concat(t)}},{key:"removeCard",value:function(e,t){return e.filter((function(e){return e.id!==t}))}}]),e}();a(14);function j(e){var t=new p,a=e.initialShortlistCards,r=e.resultCards,c=Object(n.useState)(a),d=Object(i.a)(c,2),s=d[0],b=d[1],u=function(e,a){if(a)b(t.removeCard(s,e));else{if(s.find((function(t){return t.id===e})))return;var i=r.find((function(t){return t.id===e}));b(t.addCard(s,i))}};return Object(o.jsxs)("div",{className:"board",children:[Object(o.jsx)(f,{title:"Results",isSaved:!1,cards:r,updateShortlistCards:u}),Object(o.jsx)(f,{title:"Saved Properties",isSaved:!0,cards:s,updateShortlistCards:u})]})}function m(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],r=t[1];return new Promise((function(e){setTimeout((function(){return e(s)}),2e3)})).then((function(e){r(e)})),a?Object(o.jsx)(j,{initialShortlistCards:a.saved,resultCards:a.results}):Object(o.jsx)("p",{children:"We are trying hard to get your property list, please wait a while."})}d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.efae2280.chunk.js.map