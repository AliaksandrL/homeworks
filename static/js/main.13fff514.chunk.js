(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,n){e.exports={greeting:"Greeting_greeting___SowO",error:"Greeting_error__3IwXa",input:"Greeting_input__3etzh",ddd:"Greeting_ddd___YinE",errorInput:"Greeting_errorInput__1UBIR",button:"Greeting_button__33Muj",count:"Greeting_count__3JX_7"}},,,function(e,t,n){e.exports={message:"Message_message__eh482",avatar:"Message_avatar__3K0oz",fon:"Message_fon__1noMx",time:"Message_time__2M1bR",name:"Message_name__2RuFp"}},,function(e,t,n){e.exports={input:"SuperInputText_input__2mK6T",superInput:"SuperInputText_superInput__X7WXG",errorInput:"SuperInputText_errorInput__3W28F",error:"SuperInputText_error__8eobK"}},,function(e,t,n){e.exports={default:"SuperButton_default__1J9-t",red:"SuperButton_red__1gmda",btn:"SuperButton_btn__1pOuY","glass-effect":"SuperButton_glass-effect__3rdlk"}},,function(e,t,n){e.exports={blue:"HW4_blue__j8406",column:"HW4_column__-8DMj",testSpanError:"HW4_testSpanError__3M-ZQ"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__25ufI",spanClassName:"SuperCheckbox_spanClassName__2Ap99"}},,function(e,t,n){e.exports={App:"App_App__1mcd6"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),s=n.n(c),o=(n(21),n(15)),i=n.n(o),l=n(6),j=n.n(l),u=n(0),d=function(e){return Object(u.jsxs)("div",{className:j.a.fon,children:[Object(u.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:"avater"}),Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("div",{className:j.a.name,children:e.name}),Object(u.jsx)("div",{children:e.message}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Harry Potter",m="I have a stick",_="22:00";var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(d,{avatar:b,name:h,message:m,time:_}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=n(2);var x=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),e.affair.name]})};var f=function(e){var t=e.data.map((function(t){return Object(u.jsx)(x,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var v=function(){var e=Object(a.useState)(g),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(p.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(f,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},k=n(16),C=n(3),N=n.n(C),S=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,o=N.a.error?N.a.errorInput:N.a.input;return Object(u.jsxs)("div",{className:N.a.greeting,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:o,onKeyPress:s,onBlur:n}),Object(u.jsx)("div",{className:N.a.error,children:r})]}),Object(u.jsx)("button",{onClick:a,className:N.a.button,disabled:!t,children:"add"}),Object(u.jsx)("span",{className:N.a.count,children:c})]})},y=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(p.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(""),l=Object(p.a)(i,2),j=l[0],d=l[1],b=function(){n(s),alert("Hello ".concat(s,"!")),o("")},h=t.length;return Object(u.jsx)(S,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(o(t),j&&d("")):(s&&o(""),d("no name"))},addUser:b,error:j,totalUsers:h,onEnter:function(e){"Enter"===e.key&&s&&b()}})},w=n(25);var I=function(){var e=Object(a.useState)([{_id:Object(w.a)(),name:"Sasha"},{_id:Object(w.a)(),name:"Masha"},{_id:Object(w.a)(),name:"Gari"},{_id:Object(w.a)(),name:"Nasty"},{_id:Object(w.a)(),name:"Valera"}]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(y,{users:n,addUserCallback:function(e){var t={_id:Object(w.a)(),name:e};r([].concat(Object(k.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},M=n(4),T=n(5),A=n(8),E=n.n(A),G=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(E.a.error," ").concat(o||""),j="".concat(E.a.errorInput," ").concat(c?E.a.errorInput:E.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value.trim())},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(u.jsx)("span",{className:l,children:c})]})},B=n(12),F=n.n(B),W=n(10),H=n.n(W),K=function(e){var t=e.red,n=e.className,a=Object(T.a)(e,["red","className"]),r="".concat(H.a.btn," ").concat(t?H.a.red:H.a.default," ").concat(n);return Object(u.jsx)("button",Object(M.a)({className:r},a))},U=n(13),P=n.n(U),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(u.jsx)("span",{className:P.a.spanClassName,children:r})]})};var J=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(p.a)(o,2),l=i[0],j=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:F.a.column,children:[Object(u.jsx)(G,{value:n,onChangeText:r,onEnter:s,error:c}),Object(u.jsx)(G,{className:F.a.blue}),Object(u.jsx)(K,{children:"default"}),Object(u.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(K,{disabled:!0,children:"disabled"}),Object(u.jsx)(X,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(X,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var R=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(v,{}),Object(u.jsx)(I,{}),Object(u.jsx)(J,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.13fff514.chunk.js.map