(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e(15),r=e.n(o),a=e(6),i=e(4),u=e(3),s=e.n(u),l=e(0),j=function(t){var n=t.note,e=t.toggleImprtance,c=n.important?"make not important":"make important";return Object(l.jsxs)("li",{className:"note",children:[n.content,Object(l.jsx)("button",{onClick:e,children:c})]})},f="https://floating-ocean-58718.herokuapp.com/api/notes",b=function(){return s.a.get(f).then((function(t){return t.data}))},d=function(t){return s.a.post(f,t).then((function(t){return t.data}))},m=function(t,n){return s.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},p=function(t){var n=t.message;return null===n?null:Object(l.jsx)("div",{className:"error",children:n})},h=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),s=u[0],f=u[1],h=Object(c.useState)(!0),O=Object(i.a)(h,2),v=O[0],x=O[1],g=Object(c.useState)(null),k=Object(i.a)(g,2),S=k[0],y=k[1];Object(c.useEffect)((function(){console.log("effect"),b().then((function(t){o(t)}))}),[]),console.log("render",e.length,"notes");var w=function(){return Object(l.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(l.jsx)("br",{}),Object(l.jsx)("em",{children:"Note app, Szymon Wozniak 2021"})]})},N=v?e:e.filter((function(t){return!0===t.important}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Notes"}),Object(l.jsx)(p,{message:S}),Object(l.jsx)("div",{children:Object(l.jsxs)("button",{onClick:function(){return x(!v)},children:["show ",v?"important":"all"]})}),Object(l.jsx)("ul",{children:N.map((function(t,n){return Object(l.jsx)(j,{note:t,toggleImprtance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});m(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){y("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),o(e.filter((function(n){return n.id!=t})))}))}(t.id)}},n)}))}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:s,date:new Date,important:Math.random()<.5};d(n).then((function(t){o(e.concat(t)),f("")}))},children:[Object(l.jsx)("input",{value:s,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"save"})]}),Object(l.jsx)(w,{})]})};e(39);r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.09551cad.chunk.js.map