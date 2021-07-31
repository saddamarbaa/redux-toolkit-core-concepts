(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__171iG"}},11:function(e,t,n){e.exports={profile:"UserProfile_profile__oUZeH"}},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(1);var c=n(4),r=n.n(c),i=n(2),o=n(3),u=Object(o.b)({name:"counter",initialState:{counter:0,showCounter:!0},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload},toggleCounter:function(e){e.showCounter=!e.showCounter}}}),s=u.actions,a=u.reducer,j=Object(o.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{login:function(e){e.isAuthenticated=!0},logout:function(e){e.isAuthenticated=!1}}}),l=j.actions,b=j.reducer,d=Object(o.a)({reducer:{counter:a,auth:b}}),h=(n(22),n(8)),O=n.n(h),x=n(0),f=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.counter.counter})),n=Object(i.c)((function(e){return e.counter.showCounter}));return Object(x.jsxs)("main",{className:O.a.counter,children:[Object(x.jsx)("h1",{children:"Redux Counter"}),n&&Object(x.jsx)("div",{className:O.a.value,children:t}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){e(s.increment())},children:"Increment"}),Object(x.jsx)("button",{onClick:function(){e(s.increase(10))},children:"Increase by 10"}),Object(x.jsx)("button",{onClick:function(){e(s.decrement())},children:"Decrement"})]}),Object(x.jsx)("button",{onClick:function(){e(s.toggleCounter())},children:"Toggle Counter"})]})},m=n(10),p=n.n(m),_=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isAuthenticated}));return Object(x.jsxs)("header",{className:p.a.header,children:[Object(x.jsx)("h1",{children:"Redux Auth"}),t&&Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/",children:"My Products"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/",children:"My Sales"})}),Object(x.jsx)("li",{children:Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e(l.logout())},children:"Logout"})})]})})]})},v=n(5),C=n.n(v),g=function(){var e=Object(i.b)();return Object(x.jsx)("main",{className:C.a.auth,children:Object(x.jsx)("section",{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(l.login())},children:[Object(x.jsxs)("div",{className:C.a.control,children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email"})]}),Object(x.jsxs)("div",{className:C.a.control,children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password"})]}),Object(x.jsx)("button",{children:"Login"})]})})})},w=n(11),A=n.n(w),y=function(){return Object(x.jsx)("main",{className:A.a.profile,children:Object(x.jsx)("h2",{children:"My User Profile"})})};var k=function(){var e=Object(i.c)((function(e){return e.auth.isAuthenticated}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,{}),!e&&Object(x.jsx)(g,{}),e&&Object(x.jsx)(y,{}),Object(x.jsx)(f,{})]})};r.a.render(Object(x.jsx)(i.a,{store:d,children:Object(x.jsx)(k,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={auth:"Auth_auth__1AatS",control:"Auth_control__3Mhq7"}},8:function(e,t,n){e.exports={counter:"Counter_counter__1b2KB",value:"Counter_value__1EetC"}}},[[24,1,2]]]);
//# sourceMappingURL=main.de6edd7a.chunk.js.map