(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={greeting:"Greeting_greeting___SowO",error:"Greeting_error__3IwXa",input:"Greeting_input__3etzh",ddd:"Greeting_ddd___YinE",errorInput:"Greeting_errorInput__1UBIR",button:"Greeting_button__33Muj",count:"Greeting_count__3JX_7"}},,function(e,t,n){e.exports={link:"Header_link__2EdzI",header:"Header_header__KkC-p",block:"Header_block__2TyTd"}},function(e,t,n){e.exports={message:"Message_message__eh482",avatar:"Message_avatar__3K0oz",fon:"Message_fon__1noMx",time:"Message_time__2M1bR",name:"Message_name__2RuFp"}},,,function(e,t,n){e.exports={input:"SuperInputText_input__2mK6T",superInput:"SuperInputText_superInput__X7WXG",errorInput:"SuperInputText_errorInput__3W28F",error:"SuperInputText_error__8eobK"}},,function(e,t,n){e.exports={cat:"Error404_cat__rYMnJ",textFound:"Error404_textFound__2pMwf",numberFound:"Error404_numberFound__HEMUV"}},function(e,t,n){e.exports={default:"SuperButton_default__1J9-t",red:"SuperButton_red__1gmda",btn:"SuperButton_btn__1pOuY","glass-effect":"SuperButton_glass-effect__3rdlk"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__j8406",column:"HW4_column__-8DMj",testSpanError:"HW4_testSpanError__3M-ZQ"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__25ufI",spanClassName:"SuperCheckbox_spanClassName__2Ap99"}},,,,function(e,t,n){e.exports={App:"App_App__1mcd6"}},,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(25),s=n.n(c),o=(n(34),n(26)),i=n.n(o),j=n(9),u=n(10),l=n.n(u),b=n(0);var d=function(){return Object(b.jsxs)("div",{className:l.a.header,children:[Object(b.jsx)(j.b,{to:"/pre-junior",activeClassName:"active",className:l.a.link,children:"pre-junior"}),Object(b.jsx)(j.b,{to:"/junior",activeClassName:"active",className:l.a.link,children:"junior"}),Object(b.jsx)(j.b,{to:"/junior-plus",activeClassName:"active",className:l.a.link,children:"junior+"}),Object(b.jsx)("div",{className:l.a.block})]})},O=n(16),h=n.n(O);var x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:h.a.numberFound,children:"404"}),Object(b.jsx)("div",{className:h.a.textFound,children:"Page not found!"}),Object(b.jsx)("div",{className:h.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(2),_=n(11),p=n.n(_),f=function(e){return Object(b.jsxs)("div",{className:p.a.fon,children:[Object(b.jsx)("img",{className:p.a.avatar,src:e.avatar,alt:"avater"}),Object(b.jsxs)("div",{className:p.a.message,children:[Object(b.jsx)("div",{className:p.a.name,children:e.name}),Object(b.jsx)("div",{children:e.message}),Object(b.jsx)("div",{className:p.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Harry Potter",k="I have a stick",C="22:00";var N=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)(f,{avatar:v,name:g,message:k,time:C}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},S=n(3);var y=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),e.affair.name]})};var w=function(e){var t=e.data.map((function(t){return Object(b.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(r.useState)(I),t=Object(S.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(S.a)(c,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(w,{data:j,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},F=n(29),M=n(8),T=n.n(M),A=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter,o=T.a.error?T.a.errorInput:T.a.input;return Object(b.jsxs)("div",{className:T.a.greeting,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:o,onKeyPress:s,onBlur:n}),Object(b.jsx)("div",{className:T.a.error,children:a})]}),Object(b.jsx)("button",{onClick:r,className:T.a.button,disabled:!t,children:"add"}),Object(b.jsx)("span",{className:T.a.count,children:c})]})},B=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(S.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),j=Object(S.a)(i,2),u=j[0],l=j[1],d=function(){n(s),alert("Hello ".concat(s,"!")),o("")},O=t.length;return Object(b.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(o(t),u&&l("")):(s&&o(""),l("no name"))},addUser:d,error:u,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&d()}})},H=n(43);var P=function(){var e=Object(r.useState)([{_id:Object(H.a)(),name:"Sasha"},{_id:Object(H.a)(),name:"Masha"},{_id:Object(H.a)(),name:"Gari"},{_id:Object(H.a)(),name:"Nasty"},{_id:Object(H.a)(),name:"Valera"}]),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};a([].concat(Object(F.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},G=n(6),W=n(7),J=n(14),K=n.n(J),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(K.a.error," ").concat(o||""),u="".concat(K.a.errorInput," ").concat(c?K.a.errorInput:K.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(G.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value.trim())},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:u},i)),c&&Object(b.jsx)("span",{className:j,children:c})]})},X=n(21),D=n.n(X),R=n(17),Y=n.n(R),z=function(e){var t=e.red,n=e.className,r=Object(W.a)(e,["red","className"]),a="".concat(Y.a.btn," ").concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(b.jsx)("button",Object(G.a)({className:a},r))},V=n(22),Z=n.n(V),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(G.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:Z.a.spanClassName,children:a})]})};var L=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(S.a)(o,2),j=i[0],u=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:D.a.column,children:[Object(b.jsx)(U,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(U,{className:D.a.blue}),Object(b.jsx)(z,{children:"default"}),Object(b.jsx)(z,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(z,{disabled:!0,children:"disabled"}),Object(b.jsx)(q,{checked:j,onChangeChecked:u,children:"some text "}),Object(b.jsx)(q,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(S.a)(s,2),i=o[0],j=(o[1],a||{}),u=j.children,l=j.onDoubleClick,d=j.className,O=Object(W.a)(j,["children","onDoubleClick","className"]),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return Object(b.jsx)(b.Fragment,{children:i?Object(b.jsx)(U,Object(G.a)({autoFocus:!0,onBlur:function(e){t&&t(e)},onEnter:function(){n&&n()}},c)):Object(b.jsx)("span",Object(G.a)(Object(G.a)({onDoubleClick:function(e){l&&l(e)},className:h},O),{},{children:u||c.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}$("test",{x:"A",y:1});!function(e,t){var n=t,r=localStorage.getItem(e);null!==r&&(n=JSON.parse(r))}("test",{x:"",y:0});var ee=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(Q,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(z,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(b.jsx)(z,{onClick:function(){},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{}),Object(b.jsx)(E,{}),Object(b.jsx)(P,{}),Object(b.jsx)(L,{}),Object(b.jsx)(ee,{})]})};var ne=function(){return Object(b.jsx)("div",{children:"junior"})};var re=function(){return Object(b.jsx)("div",{children:"juniorPlus"})},ae="/pre-junior",ce="/junior",se="/junior-plus";var oe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(m.d,{children:[Object(b.jsx)(m.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(m.a,{to:ae})}}),Object(b.jsx)(m.b,{path:ae,render:function(){return Object(b.jsx)(te,{})}}),Object(b.jsx)(m.b,{path:ce,render:function(){return Object(b.jsx)(ne,{})}}),Object(b.jsx)(m.b,{path:se,render:function(){return Object(b.jsx)(re,{})}}),Object(b.jsx)(m.b,{render:function(){return Object(b.jsx)(x,{})}})]})})};var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(oe,{})]})})};var je=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(je,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.8576471c.chunk.js.map