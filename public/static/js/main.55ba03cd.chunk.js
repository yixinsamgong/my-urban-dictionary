(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(n,e,t){},56:function(n,e,t){"use strict";t.r(e);var r,o,a=t(0),i=t.n(a),c=t(34),d=t.n(c),s=t(4),l=t(3),b=(t(32),t(8)),u=t(5),p=t(1);var h,x,f,j=u.a.button(r||(r=Object(l.a)(["\n  padding: 20px;\n  background-color: #f5ffe3;\n  font-family: 'Mouse Memoirs', sans-serif;\n  font-size: 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  border-color :#f5ffe3;\n  border-width: 1px;\n  text-decroration: none;\n  cursor: pointer;\n  transition: box-shadow 0.5s;\n  &:hover {\n    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  }\n  @media screen and (max-width: 748px){\n        text-align: center;\n        margin-right: 0px;\n        padding: 20px 0;\n         &:hover {\n     box-shadow: none\n  }\n    }\n}\n"]))),g=u.a.div(o||(o=Object(l.a)(["\nmargin: 10px;\ndisplay: flex;\njustify-content: space-evenly;\n@media screen and (max-width: 748px){\n    padding: 15px;\n        margin: 30px;\n        flex-direction: column;\n        height: auto;\n    }\n\n"]))),O=function(n){var e=n.handleLogout,t=Object(a.useState)(!1),r=Object(s.a)(t,2),o=r[0],i=r[1],c=Object(a.useState)(window.innerWidth),d=Object(s.a)(c,2),l=d[0],u=d[1];return Object(a.useEffect)((function(){var n=function(){u(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),Object(p.b)("div",{style:{marginBottom:"50px"},children:[(o||l>748)&&Object(p.b)(g,{children:[Object(p.a)(j,{children:Object(p.a)(b.c,{to:"/",style:{"text-decoration":"none",color:"#018A9F"},children:"My Slangs "})}),Object(p.a)(j,{children:Object(p.a)(b.c,{to:"/database",style:{"text-decoration":"none",color:"#018A9F"},children:"Search Slangs"})}),Object(p.a)(j,{children:Object(p.a)(b.c,{to:"/submit",style:{"text-decoration":"none",color:"#018A9F"},children:"Submit Your Slangs"})}),Object(p.a)(j,{children:Object(p.a)(b.c,{to:"/",onClick:e,style:{"text-decoration":"none",color:"#018A9F"},children:"Logout"})})]}),l>748?null:Object(p.a)(g,{children:Object(p.a)(j,{onClick:function(){i(!o)},children:"\ud83e\udd28"})})]})},m=t(38),w=t(7);var v,y=u.a.div(h||(h=Object(l.a)(["\n transition: box-shadow 0.5s;\n  width: 80%;\n  align-item: center;\n  margin-left: 40px;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  border-right: 0.1px #f5ffe3;\n  border-bottom: 5px #f5ffe3;\n  background: #f5ffe3;\n  padding: 5px;\n  border-color:rgba(22, 33, 33, 1);\n  display: grid;\n  grid-gap: 10px;\n  &:hover {\n     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);\n  }\n@media (min-width: 748px) {\n    width: calc(70% - 2rem);\n}\n}\n"]))),S=u.a.p(x||(x=Object(l.a)(["\n  text-align: justify;\n  margin-right: 30px;\n  font-family: 'Roboto Condensed', sans-serif;\n"]))),C=u.a.button(f||(f=Object(l.a)(["\n  padding: 10px;\n  margin:10px;\n  background: rgba(1,138,159, 0.6);\n  font-family: 'Mouse Memoirs', sans-serif;\n  font-size: 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  color: white; \n  border-color :#f5ffe3;\n  border-width: 1px;\n  text-decroration: none;\n  cursor: pointer;\n  transition: box-shadow 0.5s;\n  &:hover {\n    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  }\n  @media screen and (max-width: 748px){\n        text-align: center;\n        margin-right: 0px;\n        padding: 20px 0;\n         &:hover {\n     box-shadow: none\n  }\n    }\n}\n"]))),U={fontFamily:"Arial",textAlign:"center"},k={midWidth:"50%",display:"flex",flexWrap:"wrap",height:"50px",minHeight:"20px",margin:"30px",border:"1px solid gray",borderRadius:"5px",padding:"10px",boxShadow:"5px 5px rgba(22, 33, 33, 0.1)"},M={display:"flex",padding:"5px",border:"1px solid gray",borderRadius:"5px",height:"40px",alignItem:"center",backgroundColor:"#f5ffe3",marginRight:"5px",margin:"2px 5px 2px 0px"},A={border:"none",flex:1,backgroundColor:"#f5ffe3",outline:"none",padding:5},D={marginLeft:"5px",cursor:"pointer",textAlign:"center"},F=function(n){var e=n.id,t=n.aword,r=(n.setCurrentUser,n.currentUser,n.handleDelete),o=n.userword,i=t.name,c=t.definition,d=t.example,l=t.author,b=t.written_on,u=Object(a.useState)([]),h=Object(s.a)(u,2),x=h[0],f=h[1],j=Object(w.g)();return Object(a.useEffect)((function(){x&&fetch("/userwords/".concat(o.id,"/tags")).then((function(n){return n.json()})).then((function(n){return f(n)}))}),[]),Object(p.b)(y,{children:[Object(p.a)("div",{children:Object(p.a)("div",{children:Object(p.b)("ul",{children:[Object(p.b)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.a)("h4",{style:{fontFamily:"Mouse Memoirs",fontSize:"25px"},children:i}),Object(p.a)(C,{style:{cursor:"pointer"},onClick:function(){return r(e)},children:"delete"})]}),Object(p.a)(S,{children:c.replace(/\[|\]|"/g,"")}),Object(p.a)(S,{children:d.replace(/\[|\]|"/g,"")}),Object(p.a)(S,{children:l}),Object(p.a)(S,{children:b})]})})}),Object(p.a)("div",{style:U,children:Object(p.b)("div",{style:k,children:[x.map((function(n,e){return Object(p.a)("div",{style:M,children:Object(p.b)("div",{children:[n.tag.name,Object(p.a)("span",{onClick:function(){return e=n,void fetch("/wordtags/".concat(e.id),{method:"DELETE"}).then((function(n){if(n.ok){var t=x.filter((function(n){return n!==e}));f(t)}}));var e},style:D,children:"x"})]})},e)})),Object(p.a)("input",{style:A,onKeyDown:function(n){"Enter"===n.key&&(fetch("/wordtags/".concat(o.id),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.target.value})}).then((function(n){return n.json()})).then((function(e){console.log(e),f([].concat(Object(m.a)(x),[e])),n.target.value=""})),j.push("/"))}})]})})]})};var T,z,E,L=u.a.div(v||(v=Object(l.a)(["    \nwidth: auto;\nposition: relative;\n\n  \tleft: 30px;\n  \ttop: 30px;\n  \tright: 30px;\n  \tbottom: 30px;\ndisplay: grid;\ngrid-template-columns: repeat(2, 1fr);\ngrid-auto-rows: minmax(100px, auto);\ngap: 0.5rem;\n  @media screen and (max-width: 748px){\n        display: flex;\n        flex-direction: column;\n        height: auto;\n    }\n\n"]))),R=function(n){n.uwid;var e=n.words,t=n.handleDelete,r=(n.currentUser,e.map((function(n){return Object(p.a)(F,{id:n.id,aword:n,handleDelete:t,userword:n.userwords[0]})})));return Object(p.a)("div",{children:Object(p.a)(L,{children:r})})};var _,W,J=u.a.div(T||(T=Object(l.a)(["\nfont-family: 'Mouse Memoirs', sans-serif;\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  margin:80px;\n  @media screen and (max-width: 748px){\n       margin:30px;\n  }\n"]))),N=(u.a.h2(z||(z=Object(l.a)(["\n  font-family: 'Mouse Memoirs', sans-serif;\n"]))),u.a.input(E||(E=Object(l.a)(["\n    border-radius: 7px;\n    padding: 0.7rem;\n  border: none;\n  font-family: inherit;\n  font-size: 1.2em;\n  border-bottom: 1.5px gray;\n  transition: all 0.2s;\n  margin: 10px\n  width: 100%;\n    &:focus {\n    outline: none;\n    border-bottom: 4px solid gray;\n}\n"])))),P=function(n){var e=n.searchTerm,t=n.onSearchChange;return Object(p.a)(J,{onSubmit:function(n){n.preventDefault(),t(e)},children:Object(p.a)(N,{type:"text",id:"search",placeholder:"Search slangs...",value:e,onChange:function(n){return t(n.target.value)},autoComplete:"on"})})};var I,B,Y,G=u.a.button(_||(_=Object(l.a)(["\n  margin: auto;\n  padding: 60px;\n  background: url(\"./giphy.gif\") no-repeat scroll 0 0 transparent;\n  font-family: 'Mouse Memoirs', sans-serif;\n  font-size: 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  border-color :#f5ffe3;\n  border-width: 1px;\n  text-decroration: none;\n  cursor: pointer;\n  transition: box-shadow 0.5s;\n\n  &:hover {\n     box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  }\n\n"]))),H=u.a.div(W||(W=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n      @media screen and (max-width: 748px){\n        display: flex;\n        height: auto;\n \n    }\n    \n"]))),K=function(n){var e=n.setCurrentUser,t=n.currentUser,r=Object(a.useState)([]),o=Object(s.a)(r,2),i=o[0],c=o[1],d=Object(a.useState)(""),l=Object(s.a)(d,2);return l[0],l[1],Object(a.useEffect)((function(){fetch("/users/".concat(t.id,"/words")).then((function(n){return n.json()})).then((function(n){return c(n)}))}),[]),Object(a.useEffect)((function(){fetch("/users/".concat(t.id,"/userwords")).then((function(n){return n.json()})).then((function(n){return console.log("I am being called",n)}))}),[]),Object(p.b)("div",{children:[i.length>0?null:Object(p.a)(H,{children:Object(p.a)(G,{children:Object(p.a)(b.c,{to:"/database",style:{"text-decoration":"none",color:"white"},children:"Add Your Slangs!"})})}),Object(p.a)(R,{words:i,setCurrentUser:e,currentUser:t,handleDelete:function(n){console.log(n),fetch("/userwords/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,word_id:n})}).then((function(e){e.ok&&c((function(e){return e.filter((function(e){return e.id!==n}))}))}))}})]})};var q,Q=u.a.div(I||(I=Object(l.a)(["\n transition: box-shadow 0.5s;\n  width: 80%;\n  align-item: center;\n  margin-left: 40px;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  border-right: 0.1px #f5ffe3;\n  border-bottom: 5px #f5ffe3;\n  background: #f5ffe3;\n  padding: 5px;\n  border-color:rgba(22, 33, 33, 1);\n  display: grid;\n  grid-gap: 10px;\n  &:hover {\n     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);\n  }\n@media (min-width: 748px) {\n    width: calc(70% - 2rem);\n}\n}\n"]))),V=u.a.p(B||(B=Object(l.a)(["\n  text-align: justify ;\n  margin-right: 30px;\n  font-family: 'Roboto Condensed', sans-serif;\n"]))),X=u.a.button(Y||(Y=Object(l.a)(["\n  padding: 10px;\n  margin:10px;\n  background: rgba(1,138,159, 0.6);\n  font-family: 'Mouse Memoirs', sans-serif;\n  font-size: 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  color: white; \n  border-color :#f5ffe3;\n  border-width: 1px;\n  text-decroration: none;\n  cursor: pointer;\n  transition: box-shadow 0.5s;\n  &:hover {\n    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  }\n  @media screen and (max-width: 748px){\n        text-align: center;\n        margin-right: 0px;\n        padding: 20px 0;\n         &:hover {\n     box-shadow: none\n  }\n    }\n}\n"]))),Z=function(n){n.id;var e=n.aword,t=(n.setCurrentUser,n.currentUser),r=e.word,o=e.definition,i=e.example,c=e.author,d=e.written_on,l=Object(a.useState)(),b=Object(s.a)(l,2),u=(b[0],b[1]),h=Object(a.useState)([]),x=Object(s.a)(h,2),f=(x[0],x[1]),j=Object(a.useState)(!1),g=Object(s.a)(j,2),O=(g[0],g[1]),m=Object(w.g)();return Object(p.a)(Q,{children:Object(p.b)("ul",{children:[Object(p.b)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.a)("h4",{style:{fontFamily:"Mouse Memoirs"},children:r}),Object(p.a)(X,{onClick:function(){return console.log({name:e.word,definition:e.definition,example:e.example,author:e.author,written_on:e.written_on}),void fetch("/users/".concat(t.id,"/words"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.word,definition:e.definition,example:e.example,author:e.author,written_on:e.written_on})}).then((function(n){O(!1),n.ok?(u(e),m.push("/")):n.json().then((function(n){return f(n.errors)}))}))},children:"ADD IT"})]}),Object(p.a)(V,{children:o.replace(/\[|\]|"/g,"")}),Object(p.a)(V,{children:i.replace(/\[|\]|"/g,"")}),Object(p.a)(V,{children:c}),Object(p.a)(V,{children:d.slice(0,d.indexOf("T"))})]})})};var $=u.a.div(q||(q=Object(l.a)(["    \nwidth: auto;\nposition: relative;\n  \tleft: 30px;\n  \ttop: 30px;\n  \tright: 30px;\n  \tbottom: 30px;\ndisplay: grid;\ngrid-template-columns: repeat(2, 1fr);\ngrid-auto-rows: minmax(100px, auto);\ngap: 0.5rem;\n  @media screen and (max-width: 748px){\n        display: flex;\n        flex-direction: column;\n        height: auto;\n    }\n\n"]))),nn=function(n){var e=n.words,t=n.currentUser,r=e.map((function(n){return Object(p.a)(Z,{id:n.defid,aword:n,currentUser:t})}));return Object(p.a)("div",{children:Object(p.a)($,{children:r})})},en=t(2);var tn,rn,on,an=function(n){var e=n.setCurrentUser,t=n.currentUser,r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],c=o[1],d=Object(a.useState)([]),l=Object(s.a)(d,2),b=l[0],u=l[1];return Object(a.useEffect)((function(){i&&fetch("https://api.urbandictionary.com/v0/define?term=".concat(i)).then((function(n){return n.json()})).then((function(n){u(n.list)}))}),[i]),Object(en.jsxs)("div",{children:[Object(en.jsx)(P,{searchTerm:i,onSearchChange:c}),Object(en.jsx)(nn,{words:b,setCurrentUser:e,currentUser:t})]})};var cn,dn=u.a.button(tn||(tn=Object(l.a)(["\n  padding: 10px;\n  margin:10px;\n  background: rgba(1,138,159, 0.6);\n  font-family: 'Mouse Memoirs', sans-serif;\n  font-size: 24px;\n  border-radius: 4px;\n  font-weight: bold;\n  color: white; \n  border-color :#f5ffe3;\n  border-width: 1px;\n  text-decroration: none;\n  cursor: pointer;\n  transition: box-shadow 0.5s;\n  &:hover {\n    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  }\n  @media screen and (max-width: 748px){\n        text-align: center;\n        margin-right: 0px;\n        padding: 20px 0;\n         &:hover {\n     box-shadow: none\n  }\n    }\n}\n"]))),sn=u.a.input(rn||(rn=Object(l.a)(["\n  width: 60%;\n  padding: 12px 20px;\n  size: 50px;\n  margin: 8px 0;\n  display: inline - block;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-sizing: border - box;\n"]))),ln=u.a.div(on||(on=Object(l.a)(["\n      border-radius: 20px;\n  transition: box-shadow 1s;\n  padding: 20px;\n  background-color: #f5ffe3;\n  box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  max-width: 600px;\n  margin: 100px auto;\n  padding: 5px;\n  text-align: center;\n  @media screen and (max-width: 748px){\n      width: calc (100% - 2rem);\n        margin: 20px;\n        height: auto;\n        width: auto;\n    }\n\n"]))),bn=function(n){n.id;var e=n.currentUser,t=Object(a.useState)([]),r=Object(s.a)(t,2),o=(r[0],r[1]),i=Object(a.useState)(!1),c=Object(s.a)(i,2),d=(c[0],c[1]),l=Object(a.useState)(),b=Object(s.a)(l,2),u=b[0],p=b[1],h=Object(a.useState)(),x=Object(s.a)(h,2),f=x[0],j=x[1],g=Object(a.useState)(),O=Object(s.a)(g,2),m=O[0],v=O[1],y=Object(a.useState)(),S=Object(s.a)(y,2),C=S[0],U=S[1],k=Object(a.useState)(),M=Object(s.a)(k,2),A=M[0],D=M[1],F=Object(w.g)();return Object(en.jsxs)(ln,{children:[Object(en.jsx)("p",{style:{textAlign:"center",fontFamily:"Roboto Condensed",fontSize:"50px",textShadow:"5px 5px rgba(22, 33, 33, 0.2)"},children:"Add Slangs"}),Object(en.jsxs)("form",{onSubmit:function(n){console.log({name:u,definition:f,example:m,author:C,written_on:A}),n.preventDefault(),d(!0),fetch("/users/".concat(e.id,"/words"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,definition:f,example:m,author:C,written_on:A})}).then((function(n){d(!1),n.ok?F.push("/"):n.json().then((function(n){return o(n.errors)}))}))},children:[Object(en.jsx)("p",{children:Object(en.jsx)(sn,{type:"text",name:"word",placeholder:"Word",value:u,onChange:function(n){return p(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(sn,{type:"text",name:"definition",placeholder:"Definition",value:f,onChange:function(n){return j(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(sn,{type:"text",name:"example",placeholder:"Example",value:m,onChange:function(n){return v(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(sn,{type:"text",name:"author",placeholder:"Author",value:C,onChange:function(n){return U(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(sn,{type:"date",name:"written_on",placeholder:"Written On",value:A,onChange:function(n){return D(n.target.value)}})}),Object(en.jsx)(dn,{type:"submit",children:"Add"})]})]})};var un,pn,hn,xn=u.a.h3(cn||(cn=Object(l.a)(["\ntext-align: center;\nfont-family: 'Mouse Memoirs', sans-serif;\nfont-size: 50px;\ncolor: #018A9F;  \ntransition: text-shadow 1s;\ntext-shadow: 5px 5px rgba(22, 33, 33, 0.2)\n"]))),fn=function(n){var e=n.currentUser,t=n.setCurrentUser,r=Object(w.g)(),o=Object(a.useState)(""),i=Object(s.a)(o,2),c=(i[0],i[1],Object(a.useState)([])),d=Object(s.a)(c,2);return d[0],d[1],Object(p.b)("div",{children:[Object(p.a)(xn,{children:Object(p.a)(b.c,{to:"/",style:{textDecoration:"none",color:"#018A9F"},children:" My Urban Dictionary"})}),Object(p.a)(O,{handleLogout:function(){fetch("/logout",{method:"DELETE",credentials:"include"}).then((function(n){n.ok&&(t(null),r.push("/"))}))},setCurrentUser:t,currentUser:e}),Object(p.b)(w.d,{children:[Object(p.a)(w.b,{exact:!0,path:"/",children:Object(p.a)("div",{children:Object(p.a)(K,{setCurrentUser:t,currentUser:e})})}),Object(p.a)(w.b,{exact:!0,path:"/database",children:Object(p.a)("div",{children:Object(p.a)(an,{setCurrentUser:t,currentUser:e})})}),Object(p.a)(w.b,{exact:!0,path:"/submit",children:Object(p.a)("div",{children:Object(p.a)(bn,{setCurrentUser:t,currentUser:e,id:e.id})})}),Object(p.a)(w.a,{to:"/"})]})]})};var jn,gn,On,mn=u.a.button(un||(un=Object(l.a)(["\n    padding: 20px;\n    background: rgba(1,138,159, 0.25);\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-size: 24px;\n    border-radius: 8px;\n    font-weight: bold;\n    margin: 10px;\n    align: cetner\n"]))),wn=u.a.form(pn||(pn=Object(l.a)(["\nwidth: 300px;\n  padding: 64px 15px 24px;\n  margin: auto auto;\n"]))),vn=u.a.input(hn||(hn=Object(l.a)(["\n    width: 100%;\n    displau:flex;\n    border-radius: 10px;\n    margin-right:80%;\n    padding: 8px 5px;\n      border: 0.5;\n      background-color: #f5ffe3;\n      color: #018A9F;\n      font-family: 'Roboto Condensed';\n      letter-spacing: 0.05em;\n      font-size: 16px;\n      &:hover{\n        background: white;\n        outline: none;\n        border: 0.5;\n      }\n      &:focus {\n        outline: none;\n        border: 0.5;\n      }\n    }\n\n"]))),yn={textAlign:"left",fontFamily:"Roboto Condensed, sans-serif",fontWeight:"bold",textDecoration:"none"},Sn=function(n){var e=n.setCurrentUser,t=Object(w.g)(),r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],c=o[1],d=Object(a.useState)(""),l=Object(s.a)(d,2),u=l[0],p=l[1];return Object(en.jsxs)("div",{children:[Object(en.jsx)(w.a,{to:"/"}),Object(en.jsxs)(wn,{onSubmit:function(n){n.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:u})}).then((function(n){n.ok?n.json().then((function(n){e(n),t.push("/")})):n.json().then((function(n){console.error(n)}))}))},children:[Object(en.jsx)("p",{children:Object(en.jsx)(vn,{type:"text",name:"username",placeholder:"username",value:i,onChange:function(n){return c(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(vn,{type:"password",placeholder:"password",name:"password",value:u,onChange:function(n){return p(n.target.value)}})}),"\xa0 \xa0 \xa0 \xa0",Object(en.jsx)("p",{children:Object(en.jsx)(b.b,{to:"/signup",style:yn,children:"No account here? OMG!"})}),Object(en.jsx)(mn,{type:"submit",children:"Log In"})]})]})};var Cn,Un,kn,Mn,An=u.a.button(jn||(jn=Object(l.a)(["\n    padding: 20px;\n    background: rgba(1,138,159, 0.25);\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-size: 24px;\n    border-radius: 8px;\n    font-weight: bold;\n    margin: 10px;\n    align: cetner\n"]))),Dn=u.a.input(gn||(gn=Object(l.a)(["\n    width: 100%;\n    displau:flex;\n    border-radius: 10px;\n    margin-right:80%;\n    padding: 8px 5px;\n      border: 0.5;\n      background-color: #f5ffe3;\n      color: #018A9F;\n      font-family: 'Roboto Condensed';\n      letter-spacing: 0.05em;\n      font-size: 16px;\n      &:hover{\n        background: white;\n        outline: none;\n        border: 0.5;\n      }\n      &:focus {\n        outline: none;\n        border: 0.5;\n      }\n    }\n\n"]))),Fn=u.a.form(On||(On=Object(l.a)(["\nwidth: 300px;\n  padding: 64px 15px 24px;\n  margin: auto auto;\n"]))),Tn={textAlign:"left",fontFamily:"Roboto Condensed, sans-serif",fontWeight:"bold",textDecoration:"none"},zn=function(n){var e=n.setCurrentUser,t=Object(w.g)(),r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],c=o[1],d=Object(a.useState)(""),l=Object(s.a)(d,2),u=l[0],p=l[1],h=Object(a.useState)(""),x=Object(s.a)(h,2),f=x[0],j=x[1],g=Object(a.useState)(""),O=Object(s.a)(g,2),m=O[0],v=O[1];return Object(en.jsx)("div",{children:Object(en.jsxs)(Fn,{onSubmit:function(n){n.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:f,fullname:u,email:m})}).then((function(n){n.ok?n.json().then((function(n){e(n),t.push("/")})):n.json().then((function(n){console.error(n)}))}))},children:[Object(en.jsx)("p",{children:Object(en.jsx)(Dn,{type:"text",name:"username",placeholder:"username",value:i,onChange:function(n){return c(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(Dn,{type:"text",name:"fullname",placeholder:"fullname",value:u,onChange:function(n){return p(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(Dn,{type:"password",name:"password",placeholder:"password",value:f,onChange:function(n){return j(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(Dn,{type:"email",name:"email",placeholder:"email",value:m,onChange:function(n){return v(n.target.value)}})}),Object(en.jsx)("p",{children:Object(en.jsx)(b.b,{to:"/login",style:Tn,children:"You have account? Then why u here?"})}),Object(en.jsx)(An,{type:"submit",children:"Sign Up"})]})})},En=t(18);var Ln=En.a.div(Cn||(Cn=Object(l.a)(["\n  border-radius: 20px;\n  transition: box-shadow 1s;\n  padding: 20px;\n  background-color: #f5ffe3;\n\n  align-items: center;\n  box-shadow: 5px 5px rgba(22, 33, 33, 0.1);\n  max-width: 600px;\n  margin: 100px auto;\n  padding: 5px;\n  text-align: center;\n  @media screen and (max-width: 748px){\n      width: calc (100% - 2rem);\n        margin: 20px;\n        height: auto;\n        width: auto;\n    }\n\n"]))),Rn=En.a.h1(Un||(Un=Object(l.a)(["\n  margin: auto;\n  padding: 20px;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 36px;\n  font-weight: bold;\n  color :#018A9F;\n  align-item:center;\n  text-shadow: 5px 5px rgba(22, 33, 33, 0.2);\n    \n"]))),_n=Object(En.b)(kn||(kn=Object(l.a)(["\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  "]))),Wn=En.a.div(Mn||(Mn=Object(l.a)(["\n  display: inline-block;\n  animation: "," 2s linear infinite;\n  padding: 2rem 1rem;\n  font-size: 3rem;\n"])),_n),Jn=function(n){var e=n.setCurrentUser;return Object(en.jsxs)(Ln,{children:[Object(en.jsxs)("div",{children:[Object(en.jsx)("h1",{style:{textAlign:"center",color:"#018A9F",fontFamily:"Mouse Memoirs",fontSize:"60px",fontWeight:"bold",textShadow:" 5px 5px rgba(22, 33, 33, 0.2)"},children:"My Urban Dictionary"}),Object(en.jsx)(Rn,{children:"Grood with words."})]}),Object(en.jsxs)(w.d,{children:[Object(en.jsx)(w.b,{exact:!0,path:"/",children:Object(en.jsx)(Sn,{setCurrentUser:e})}),Object(en.jsx)(w.b,{exact:!0,path:"/signup",children:Object(en.jsx)(zn,{setCurrentUser:e})}),Object(en.jsx)(w.a,{to:"/"})]}),Object(en.jsx)(Wn,{children:"\ud83d\ude39"}),Object(en.jsx)(Wn,{children:"\ud83c\udf75"}),Object(en.jsx)(Wn,{children:"\ud83e\udee3"})]})};var Nn=function(){var n=Object(a.useState)(null),e=Object(s.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!1),i=Object(s.a)(o,2),c=i[0],d=i[1];return Object(a.useEffect)((function(){fetch("/me",{credentials:"include"}).then((function(n){n.ok?n.json().then((function(n){r(n),d(!0)})):d(!0)}))}),[]),c?Object(en.jsx)(b.a,{children:t?Object(en.jsx)(fn,{setCurrentUser:r,currentUser:t}):Object(en.jsx)(Jn,{setCurrentUser:r})}):Object(en.jsx)("div",{})},Pn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),a(n),i(n)}))};d.a.createRoot(document.getElementById("root")).render(Object(en.jsx)(i.a.StrictMode,{children:Object(en.jsx)(Nn,{})})),Pn()}},[[56,1,2]]]);
//# sourceMappingURL=main.55ba03cd.chunk.js.map