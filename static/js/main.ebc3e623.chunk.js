(this["webpackJsonpmodal-react"]=this["webpackJsonpmodal-react"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var i,c,o,r,a,s,d,l=t(1),u=t(9),j=t.n(u),b=(t(17),t(2)),h=t(4),p=t(3),x=t(0),O=function(n){var e=n.children,t=n.isOpen,i=n.onClose,c=n.title,o=void 0===c?"No title included":c,r=n.includeHeader,a=n.includeOverlay,s=n.includePadding,d=n.modalPosition;return Object(x.jsx)(x.Fragment,{children:t&&Object(x.jsx)(f,{includeOverlay:a,modalPosition:d,children:Object(x.jsxs)(g,{includePadding:s,children:[r&&Object(x.jsx)(C,{children:Object(x.jsx)("h3",{children:o})}),Object(x.jsx)(m,{onClick:i,children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),e]})})})},f=p.a.div(i||(i=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: ",";\n  justify-content: center;\n"])),(function(n){return n.includeOverlay?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0)"}),(function(n){return n.modalPosition?n.modalPosition:"center"})),g=p.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 40%;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: ",";\n  position: relative;\n"])),(function(n){return n.includePadding?"20px":"0"})),C=p.a.div(o||(o=Object(b.a)(["\n  font-size: 1.5rem;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 50px;\n  border-bottom: 1px solid #ccc;\n  h3 {\n    font-weight: 500;\n    font-size: 20px;\n    color: #1766dc;\n  }\n"]))),m=p.a.button(r||(r=Object(b.a)(["\n  background: none;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: #1766dc;\n  cursor: pointer;\n  &:hover {\n    background-color: #f2f2f2;\n    transition: 0.3s ease all;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])));var v=function(){var n=Object(l.useState)(!1),e=Object(h.a)(n,2),t=e[0],i=e[1],c=Object(l.useState)(!1),o=Object(h.a)(c,2),r=o[0],a=o[1],s=Object(l.useState)(!1),d=Object(h.a)(s,2),u=d[0],j=d[1],b=Object(l.useState)(!1),p=Object(h.a)(b,2),f=p[0],g=p[1],C=function(n){n((function(n){return!n}))};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(w,{children:[Object(x.jsx)(k,{onClick:function(){return C(i)},children:"Modal 1"}),Object(x.jsx)(k,{onClick:function(){return C(a)},children:"Modal 2"}),Object(x.jsx)(k,{onClick:function(){return C(j)},children:"Modal 3"}),Object(x.jsx)(k,{onClick:function(){return C(g)},children:"Modal 4"})]}),Object(x.jsx)(O,{isOpen:t,onClose:function(){return C(i)},title:"Some title",includeHeader:!0,includePadding:!0,includeOverlay:!0,children:Object(x.jsxs)(y,{children:[Object(x.jsx)("h1",{children:"Article title"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque!"}),Object(x.jsx)(k,{onClick:function(){return C(i)},children:"Close"})]})}),Object(x.jsx)(O,{isOpen:r,onClose:function(){return C(a)},includeHeader:!1,includePadding:!1,includeOverlay:!0,children:Object(x.jsx)(y,{children:Object(x.jsx)("img",{src:"https://cdn.pixabay.com/photo/2019/10/11/16/56/cat-4542301_960_720.jpg",alt:""})})}),Object(x.jsx)(O,{isOpen:u,onClose:function(){return C(j)},title:"Cats",includeHeader:!0,includePadding:!0,modalPosition:"start",children:Object(x.jsxs)(y,{children:[Object(x.jsx)("h1",{children:"Cats"}),Object(x.jsx)("p",{children:"Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats!"}),Object(x.jsx)(k,{onClick:function(){return C(j)},children:"Close"})]})}),Object(x.jsx)(O,{isOpen:f,onClose:function(){return C(g)},title:"Cats",includeHeader:!0,includePadding:!0,includeOverlay:!1,modalPosition:"end",children:Object(x.jsxs)(y,{children:[Object(x.jsx)("h1",{children:"Cats"}),Object(x.jsx)("p",{children:"Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats!"}),Object(x.jsx)(k,{onClick:function(){return C(g)},children:"Close"})]})})]})},w=p.a.div(a||(a=Object(b.a)(["\n  padding: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"]))),k=p.a.button(s||(s=Object(b.a)(['\n  display: block;\n  font-size: 16px;\n  min-width: fit-content;\n  height: 50px;\n  padding: 10px 30px;\n  border-radius: 100px;\n  color: #fff;\n  border: none;\n  background: #1766dc;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  transition: 0.3s ease all;\n  &:hover {\n    background: #0066ff;\n  }\n']))),y=p.a.div(d||(d=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h1 {\n    font-size: 42px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  p {\n    font-size: 18px;\n    margin-bottom: 20px;\n  }\n  img {\n    width: 100%;\n    vertical-align: top;\n    border-radius: 3px;\n  }\n"])));j.a.render(Object(x.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ebc3e623.chunk.js.map