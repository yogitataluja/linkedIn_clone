(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{114:function(e,A,t){"use strict";t.r(A);var s=t(2),a=t.n(s),c=t(19),n=t.n(c),i=(t(71),t(14)),r=(t(75),t(17)),o=(t(76),t(51)),l=t.n(o),j=(t(77),t(3)),d=function(e){var A=e.Icon,t=e.title,s=e.color;return Object(j.jsxs)("div",{className:"inputOption",children:[Object(j.jsx)(A,{style:{color:s}}),Object(j.jsx)("h5",{className:"inputOption_title",children:t})]})},g=t(52),b=t.n(g),u=t(53),m=t.n(u),I=t(54),h=t.n(I),O=t(55),p=t.n(O),f=(t(79),t(47)),x=t.n(f),v=t(48),N=t.n(v),w=t(49),y=t.n(w),C=t(50),H=t.n(C),Q=t(129),B=Object(s.forwardRef)((function(e,A){var t=e.name,s=e.description,a=e.message,c=e.photourl;return Object(j.jsxs)("div",{ref:A,className:"post",children:[Object(j.jsxs)("div",{className:"post_header",children:[Object(j.jsx)(Q.a,{style:{height:"50px",width:"50px"},className:"podt_pic",src:c,children:s[0]}),Object(j.jsxs)("div",{className:"post_info",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{children:s})]})]}),Object(j.jsx)("div",{className:"post_body",children:Object(j.jsx)("p",{children:a})}),Object(j.jsxs)("div",{className:"post_btn",children:[Object(j.jsx)(d,{Icon:x.a,color:"rgba(0, 0, 0, 0.6)",title:"Like"}),Object(j.jsx)(d,{Icon:N.a,color:"rgba(0, 0, 0, 0.6)",title:"Comment"}),Object(j.jsx)(d,{Icon:y.a,color:"rgba(0, 0, 0, 0.6)",title:"Share"}),Object(j.jsx)(d,{Icon:H.a,color:"rgba(0, 0, 0, 0.6)",title:"Send"})]})]})})),D=t(23),P=D.a.initializeApp({apiKey:"AIzaSyDDHoTQHSJO9jsU_ElmlbGu6Q3SfL_PWsY",authDomain:"linkedin-clone-1f8d2.firebaseapp.com",projectId:"linkedin-clone-1f8d2",storageBucket:"linkedin-clone-1f8d2.appspot.com",messagingSenderId:"951276284021",appId:"1:951276284021:web:7ae9ae44e9ef0d212bf03c"}).firestore(),M=D.a.auth(),L=(new D.a.auth.GoogleAuthProvider,t(31)),T=Object(L.b)({name:"user",initialState:{user:null},reducers:{login:function(e,A){e.user=A.payload},logout:function(e){e.user=null}}}),k=T.actions,E=k.login,J=k.logout,S=function(e){return e.user.user},F=T.reducer,G=t(56),K=function(){var e=Object(s.useState)(""),A=Object(r.a)(e,2),t=A[0],a=A[1],c=Object(s.useState)([]),n=Object(r.a)(c,2),o=n[0],g=n[1],u=Object(i.c)(S);Object(s.useEffect)((function(){P.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return g(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(j.jsxs)("div",{className:"feed",children:[Object(j.jsxs)("div",{className:"feed_inputcontainer",children:[Object(j.jsxs)("div",{className:"feed_dp",children:[Object(j.jsx)(Q.a,{className:"post_pic",src:u.photoUrl,children:u.email[0]}),Object(j.jsxs)("div",{className:"feed_input",children:[Object(j.jsx)(l.a,{}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{value:t,name:"message",onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Start a post"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),t?(P.collection("posts").add({name:u.displayName,description:u.email,message:t,photourl:u.photoUrl||u.email[0],timestamp:D.a.firestore.FieldValue.serverTimestamp()}),a("")):alert("Type something")},type:"submit",children:"Post"})]})]})]}),Object(j.jsxs)("div",{className:"feed_inputOption",children:[Object(j.jsx)(d,{Icon:b.a,color:"#70B5F8",title:"Photo"}),Object(j.jsx)(d,{Icon:m.a,color:"#7FC15E",title:"Video"}),Object(j.jsx)(d,{Icon:h.a,color:"#E7A33E",title:"Event"}),Object(j.jsx)(d,{Icon:p.a,color:"#F19194",title:"Write article"})]})]}),Object(j.jsx)(G.a,{children:o.map((function(e){var A=e.id,t=e.data,s=t.name,a=t.description,c=t.message,n=t.photourl;return Object(j.jsx)(B,{name:s,description:a,message:c,photourl:n},A)}))})]})},X=t(57),z=t.n(X),Y=(t(86),t(87),function(e){var A=e.avatar,t=e.Icon,s=e.title,a=e.onClick,c=Object(i.c)(S);return Object(j.jsxs)("div",{onClick:a,className:"headeroption",children:[t&&Object(j.jsx)(t,{className:"headeroption_icon"}),A&&Object(j.jsx)(Q.a,{className:"headeroption_icon",src:null===c||void 0===c?void 0:c.photoUrl,children:c.email[0]}),s&&Object(j.jsxs)("h3",{className:"headeroption_title",children:[s," "]})]})}),q=t(58),R=t.n(q),U=t(59),Z=t.n(U),V=t(60),W=t.n(V),_=t(61),$=t.n(_),ee=t(62),Ae=t.n(ee),te=t(63),se=t.n(te),ae=function(){var e=Object(i.c)(S),A=Object(i.b)();console.log(e);return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"header_left",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(j.jsxs)("div",{className:"header_search",children:[Object(j.jsx)(z.a,{}),Object(j.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(j.jsxs)("div",{className:"header_right",children:[Object(j.jsx)(Y,{Icon:R.a,title:"Home"}),Object(j.jsx)(Y,{Icon:Z.a,title:"My Network"}),Object(j.jsx)(Y,{Icon:W.a,title:"Job"}),Object(j.jsx)(Y,{Icon:$.a,title:"Messaging"}),Object(j.jsx)(Y,{Icon:Ae.a,title:"Notification"}),Object(j.jsx)(Y,{avatar:!0,title:"Me"}),Object(j.jsx)(Y,{Icon:se.a,title:"Sign Out",onClick:function(){A(J()),M.signOut()}})]})]})},ce=(t(88),function(){var e=Object(i.c)(S),A=function(e){return Object(j.jsxs)("div",{className:"sidebar_recentItem",children:[Object(j.jsx)("span",{className:"sidebar_hash",children:"#"}),Object(j.jsx)("p",{children:e})]})};return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"sidebar_top",children:[Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:"profile background"}),Object(j.jsx)("div",{children:Object(j.jsx)(Q.a,{style:{width:"64px",height:"68px"},className:"sidebar_top_pic",src:e.photoUrl,children:e.email[0]})}),Object(j.jsx)("h2",{children:e.displayName}),Object(j.jsx)("p",{children:e.email})]}),Object(j.jsxs)("div",{className:"sidebar_stats",children:[Object(j.jsxs)("div",{className:"sidebar_stat",children:[Object(j.jsx)("p",{children:"Who viewed your profile"}),Object(j.jsx)("p",{className:"sidebar_statNumber",children:"11"})]}),Object(j.jsxs)("div",{className:"sidebar_stat",children:[Object(j.jsx)("p",{children:"Views of your post"}),Object(j.jsx)("p",{className:"sidebar_statNumber",children:"35"})]})]}),Object(j.jsxs)("div",{className:"sidebar_bottom",children:[Object(j.jsx)("h1",{children:"Recent "}),A("reactjs"),A("programming"),A("softwareengineering"),A("developer"),A("design")]})]})}),ne=(t(89),t(90),function(){var e=Object(s.useState)(""),A=Object(r.a)(e,2),t=A[0],a=A[1],c=Object(s.useState)(""),n=Object(r.a)(c,2),o=n[0],l=n[1],d=Object(s.useState)(""),g=Object(r.a)(d,2),b=g[0],u=g[1],m=Object(s.useState)(""),I=Object(r.a)(m,2),h=I[0],O=I[1],p=Object(s.useState)(""),f=Object(r.a)(p,2),x=f[0],v=f[1],N=Object(i.b)();return Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h4",{children:"Be great at what you do"}),Object(j.jsx)("h6",{children:"Get started - It's free."}),Object(j.jsx)("div",{className:"sign_up_form",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"firstName",children:"First Name"}),Object(j.jsx)("input",{name:"fname",value:t,onChange:function(e){return a(e.target.value)},type:"text",className:"form-control",id:"firstName"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"lastName",children:"Last Name"}),Object(j.jsx)("input",{name:"lname",value:o,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",id:"lastName"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"profilePicture",children:"Profile Picture(optional)"}),Object(j.jsx)("input",{name:"profilepic",value:x,onChange:function(e){return v(e.target.value)},type:"text",className:"form-control",id:"profilePicture"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(j.jsx)("input",{name:"email",value:b,onChange:function(e){return u(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(j.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{for:"exampleInputPassword1",children:"Password(6 or more characters)"}),Object(j.jsx)("input",{name:"password",value:h,onChange:function(e){return O(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(j.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),t&&b&&h?M.createUserWithEmailAndPassword(b,h).then((function(e){e.user.updateProfile({displayName:"".concat(t," ").concat(o),photoURL:x}).then((function(){N(E({email:e.user.email,uid:e.user.uid,displayName:"".concat(t," ").concat(o),photoUrl:x}))}))})).catch((function(e){return alert(e.message)})):alert("Please fill your form completely")},className:"btn btn-primary mt-4",children:"Create account"})]})})]})}),ie=function(){var e=Object(s.useState)(),A=Object(r.a)(e,2),t=A[0],a=A[1],c=Object(s.useState)(),n=Object(r.a)(c,2),o=n[0],l=n[1],d=Object(i.b)();return Object(j.jsxs)("div",{className:"login_page",children:[Object(j.jsxs)("div",{className:"signin",children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAcCAMAAACd34usAAAAclBMVEUAAAD///////////8Ad7X///////////8Ad7X///8Ad7X///////////////////////////////////////////////////8giL4Ad7VAmciAu9rw9/ugzONQoszQ5vEQgLqw1egwkcPg7vbA3e2QxN/euFqZAAAAF3RSTlMAEMAgIIDwQBAwwGDQoLBQ4JBwLVlDFiiGsCIAAAGySURBVHhe1deJiuMwDAZgqdnYzThHj8w6R+fc3fd/xYk0yiqUelCHlDI/hPoHwwe1MAncINuHPpGHLdwy5Kbkm8L9F/mVALI8z1aBu3HsLsFKxSnquhidyIktyeg+ck8xnjo7nFPLV4BHWo8/AL7LX63DtQJsHa7L8R6TsPfFstFWhc/TDcOQhLWxtIHgplIWCzjQwk1gKHlVIatYRUqNS5jWnz9/+39U/jzb4MgKn/gMN+LihhZSAAonbXMZjk+y+90CayqBGWCKAEkJgDutl2DN03WwEzib3UB1n2U1OQEO0QqfbHCJgLVWLMWFcr5jKhoFri4gQOMS8EvXv75Rt8HN1DyTXDezy00jeyk+AdNUDXbYTy2jmv2nAiRg4EACHqba2eGz6mTCz2BngHvKt+Eg567nsNA8F2+Ej23bHs0wVCTUMlx7lgJKdQ3QcFlgcgFgkuMiX8FIAomB6gEhq/leO0SNCW6hfZweMyw3VKALRNMAltfD7e9rYAgMyJWpd2axk1KaYX7sMOznyzuwEXc5koM5j/werzvjb8Z7j9oK721vmTrVq8UI3/+F/m6fMB8w1ZI6Nrc/kQAAAABJRU5ErkJggg==",alt:"logo"}),Object(j.jsxs)("form",{className:"form",action:"",children:[Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",name:"email",value:t,placeholder:"Email"}),Object(j.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"password",name:"password",value:o,placeholder:"Password"}),Object(j.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),M.signInWithEmailAndPassword(t,o).then((function(e){d(E({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e.message)}))},type:"submit",children:"Sign in"})]})]}),Object(j.jsx)("div",{className:"sign_up",children:Object(j.jsx)(ne,{})})]})},re=(t(91),t(65)),oe=t.n(re),le=t(64),je=t.n(le),de=function(e,A){return Object(j.jsxs)("div",{className:"widgets_article",children:[Object(j.jsx)("div",{className:"widgets_articleleft",children:Object(j.jsx)(je.a,{className:"dot"})}),Object(j.jsxs)("div",{className:"widgets_articleright",children:[Object(j.jsx)("h4",{children:e}),Object(j.jsx)("p",{children:A})]})]})},ge=function(){return Object(j.jsxs)("div",{className:"widgets",children:[Object(j.jsxs)("div",{className:"widgets_header",children:[Object(j.jsx)("h2",{children:"LinkdIn news"}),Object(j.jsx)(oe.a,{className:"infoicon"})]}),de("Make your next getaway feel longer","2d ago - 1,336 Reader"),de("Out of a job? Write this on CV","6d ago - 3,345 readers"),de("Jobs galore for cloud talent","5d ago - 23,378 readers"),de("IKEA has a new strategy","7d ago - 1,355 readers"),de("Salary hikes make a comeback","1d ago - 38,745 readers"),de("Jobs galore for cloud talent","6d ago - 33,345 readers")]})};var be=function(){var e=Object(i.c)(S),A=Object(i.b)();return Object(s.useEffect)((function(){M.onAuthStateChanged((function(e){A(e?E({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):J())}))}),[]),Object(j.jsx)("div",{className:"app",children:e?Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsx)(ae,{}),Object(j.jsxs)("div",{className:"app_body",children:[Object(j.jsx)(ce,{}),Object(j.jsx)(K,{}),Object(j.jsx)(ge,{})]})]}):Object(j.jsx)(ie,{})})},ue=Object(L.a)({reducer:{user:F}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(92),t(113);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{store:ue,children:Object(j.jsx)(be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,A,t){},75:function(e,A,t){},76:function(e,A,t){},77:function(e,A,t){},79:function(e,A,t){},86:function(e,A,t){},87:function(e,A,t){},88:function(e,A,t){},89:function(e,A,t){},90:function(e,A,t){},91:function(e,A,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.6ed78972.chunk.js.map