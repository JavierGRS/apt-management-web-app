(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/logo-olecosta.b3cd613a.svg"},117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),u=a.n(c),l=a(3),s=a.n(l),o=a(7),i=a(9),p=a(73),m=(a(88),p.a.initializeApp({apiKey:"AIzaSyAE-hVWy62caraZx7f5QdRKKqdukhJMkAY",authDomain:"tfg-apartaments.firebaseapp.com",projectId:"tfg-apartaments",storageBucket:"tfg-apartaments.appspot.com",messagingSenderId:"863303276615",appId:"1:863303276615:web:7f5f05a0f7edba33e3b962"})),f=m.auth(),d=a(14),b=a.n(d),E="https://apt-management-web-app.herokuapp.com";function h(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E+"/api/signUp/userID/".concat(t.userID,"?userName=").concat(t.userName,"&aptID=").concat(t.apartmentID,"&workerType=").concat(t.workerType),e.next=3,b.a.post(a,{}).then((function(e){return e.data})).catch((function(e){if(e.response.data.error)return e.response.data.error}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n.a.createContext();function k(){return Object(r.useContext)(w)}function y(e){var t=e.children,a=Object(r.useState)(),c=Object(i.a)(a,2),u=c[0],l=c[1],p=Object(r.useState)(!0),m=Object(i.a)(p,2),d=m[0],b=m[1];function E(){return(E=Object(o.a)(s.a.mark((function e(t){var a,r,n,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.email,r=t.password,n=t.userName,c=t.apartmentID,u=t.workerType,f.createUserWithEmailAndPassword(a,r).then((function(e){h({userID:e.user.uid,userName:n,apartmentID:c,workerType:u})})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return f.onAuthStateChanged((function(e){l(e),b(!1)}))}),[]);var v={currentUser:u,login:function(e,t){return f.signInWithEmailAndPassword(e,t)},signup:function(e){return E.apply(this,arguments)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)},updateEmail:function(e){return u.updateEmail(e)},updatePassword:function(e){return u.updatePassword(e)}};return n.a.createElement(w.Provider,{value:v},!d&&t)}var g=a(12),O=a(13),j=a(80);function x(e){var t=e.component,a=Object(j.a)(e,["component"]),r=k().currentUser;return n.a.createElement(O.b,Object.assign({},a,{render:function(e){return r?n.a.createElement(t,e):n.a.createElement(O.a,{to:"/login"})}}))}var I=a(129);function D(e){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("user-token"),r="",console.log(t.role),"admin"!==t.role){e.next=7;break}r=E+"/api/tickets/adminID/".concat(t.userID,"?state=").concat(t.state),e.next=16;break;case 7:if("tenant"!==t.role){e.next=11;break}r=E+"/api/tickets/tenantID/".concat(t.userID,"?state=").concat(t.state),e.next=16;break;case 11:if("worker"!==t.role){e.next=15;break}r=E+"/api/tickets/workerID/".concat(t.userID,"?state=").concat(t.state),e.next=16;break;case 15:return e.abrupt("return",[]);case 16:return e.next=18,b.a.get(r,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){if(e.response&&e.response.data.error)return[]}));case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(35);var C=function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),c=a[0],u=a[1];return n.a.createElement("div",{className:"p-2"},n.a.createElement("button",{onClick:function(){return u(!c)}},n.a.createElement("strong",{className:"pl-2 pr-3"},"TIQUES ",e.state),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-down",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"}))),0===e.tickets.length&&c?n.a.createElement("div",null," No hay tiques disponibles "):c&&e.tickets.map((function(t){return n.a.createElement(N.a.Item,{key:t.ticketID},n.a.createElement("span",null,"Tipo: ",t.type," "),n.a.createElement("br",null),n.a.createElement("span",null,"Apartamento : ",t.aptName," ",t.aptNumber," "),n.a.createElement("br",null),n.a.createElement("span",null,"Descripci\xf3n : ",t.description),n.a.createElement("br",null),n.a.createElement(g.b,{to:{pathname:"/ticket-details",state:{ticket:t,userID:e.userID,role:e.role}}},"Ver detalles"))})))};function T(e){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),r=E+"/api/rol/userID/"+"".concat(t.userID),e.next=4,b.a.get(r,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){return e.response&&e.response.status,"Unauthorized"}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(113);var q=a(127),B=a(128),L=a(122);a(114);function A(e){var t=e.interfaceName,a=k().logout,r=Object(O.g)();function c(){return(c=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:r.push("/login"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(q.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",sticky:"top"},n.a.createElement(q.a.Brand,{href:"/",className:""},n.a.createElement("strong",{className:"white-text"},t)),n.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(B.a,{className:"me-auto"},n.a.createElement(B.a.Link,{href:"/newTicket"},"Nuevo tique"),n.a.createElement(L.a,{title:"Admin",id:"collasible-nav-dropdown"},n.a.createElement(L.a.Item,{href:"/new-Worker"},"Nuevo trabajador")),n.a.createElement(B.a.Link,{onClick:function(){return function(){return c.apply(this,arguments)}()}},"Cerrar Sesi\xf3n")))))}function G(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],k()),c=a.currentUser,u=(a.logout,Object(O.g)()),l=Object(r.useState)([]),p=Object(i.a)(l,2),m=p[0],f=p[1],d=Object(r.useState)([]),b=Object(i.a)(d,2),E=b[0],h=b[1],v=Object(r.useState)([]),w=Object(i.a)(v,2),y=w[0],g=w[1],j=Object(r.useState)("tenant"),x=Object(i.a)(j,2),S=x[0],N=x[1],R=c.uid;function q(){return(q=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T({userID:R});case 3:return"Unauthorized"===(t=e.sent)&&u.push("/login"),N(t),e.t0=f,e.next=9,D({state:"requested",userID:R,role:t});case 9:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=h,e.next=14,D({state:"accepted",userID:R,role:t});case 14:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=g,e.next=19,D({state:"done",userID:R,role:t});case 19:e.t5=e.sent,(0,e.t4)(e.t5),e.next=27;break;case 23:e.prev=23,e.t6=e.catch(0),e.t6.response&&window.alert("Network Error, try to reset the app"),e.t6.status||window.alert("Network Error, try to reset the app");case 27:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){q.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{interfaceName:"Dashboard"}),n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement(C,{state:"SOLICITADOS",role:S,userID:R,tickets:m}),n.a.createElement(C,{state:"ACEPTADOS",role:S,userID:R,tickets:E}),n.a.createElement(C,{state:"REALIZADOS",role:S,userID:R,tickets:y}))))}var V=a(123),F=a(126),P=a(76);function U(){var e=Object(r.useRef)(),t=k().resetPassword,a=Object(r.useState)(""),c=Object(i.a)(a,2),u=c[0],l=c[1],p=Object(r.useState)(""),m=Object(i.a)(p,2),f=m[0],d=m[1],b=Object(r.useState)(!1),E=Object(i.a)(b,2),h=E[0],v=E[1];function w(){return(w=Object(o.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,d(""),l(""),v(!0),a.next=7,t(e.current.value);case 7:d("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),l("Failed to reset password");case 13:v(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Restablecer Contrase\xf1a"),u&&n.a.createElement(V.a,{variant:"danger"},u),f&&n.a.createElement(V.a,{variant:"success"},f),n.a.createElement(F.a,{onSubmit:function(e){return w.apply(this,arguments)}},n.a.createElement(F.a.Group,{id:"email"},n.a.createElement(F.a.Label,null,"Email"),n.a.createElement(F.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(P.a,{disabled:h,className:"w-100",type:"submit"},"Restablecer Contrase\xf1a")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(g.b,{to:"/login"},"Iniciar Sesi\xf3n")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"\xbfNecesitas una cuenta? ",n.a.createElement(g.b,{to:"/signup"},"Registrarse")))}function z(e){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),console.log(t.userID),r=E+"/api/tickets/userID/".concat(t.userID),e.next=5,b.a.post(r,t.postData,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){if(e.response.data.error)return[]}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return K.apply(this,arguments)}function K(){return(K=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user-token"),E+"/api/apartments",e.next=4,b.a.get("https://apt-management-web-app.herokuapp.com/api/apartments",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){return e.response&&e.response.data.error,[]}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return H.apply(this,arguments)}function H(){return(H=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),r=E+"/api/workers/?type=".concat(t.type),e.next=4,b.a.get(r,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){if(e.response&&e.response.data.error)return[]}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=n.a.forwardRef((function(e,t){function a(){return(a=Object(o.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t.current.value),t.current.value=r.target.value,a.t0=e,a.next=5,M({type:e.typeRef});case 5:a.t1=a.sent,a.t0.workersChange.call(a.t0,a.t1);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return n.a.createElement("div",null,0===e.typeOfState.length?n.a.createElement("label",null," No States avaliable"):n.a.createElement("select",{className:"browser-default custom-select",defaultValue:e.defaultValue,ref:t,onChange:function(e){return a.apply(this,arguments)}},e.typeOfState.map((function(e){return n.a.createElement("option",{key:e.id,value:e.state},e.state)}))))}));var Y=n.a.forwardRef((function(e,t){function a(){return(a=Object(o.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(r.target.value),t.current.value=r.target.value,a.t0=e,a.next=5,M({type:t.current.value});case 5:a.t1=a.sent,a.t0.workersChange.call(a.t0,a.t1);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return n.a.createElement("div",null,n.a.createElement("select",{className:"browser-default custom-select",defaultValue:e.defaultValue,ref:t,onChange:function(e){return a.apply(this,arguments)}},e.typeOfTickets.map((function(e){return n.a.createElement("option",{key:e.id,value:e.type},e.type)}))))}));var Z=n.a.forwardRef((function(e,t){return n.a.createElement("div",null,console.log(e.workers),console.log("VALUE: "+e.defaultValue),0===e.workers.length?n.a.createElement("label",null," NO WORKERS"):n.a.createElement("select",{className:"browser-default custom-select",defaultValue:e.defaultValue,ref:t,onChange:function(e){t.current.value=e.target.value}},e.workers.map((function(t){return console.log(e.defaultValue),n.a.createElement("option",{key:t.id,value:t.id}," ",t.name," ")}))))}));n.a.forwardRef((function(e,t){return n.a.createElement("div",null,"requested"!==e.ticketState&&n.a.createElement("label",null,"Choose a time:",n.a.createElement("input",{type:"datetime-local",id:"meeting-time",name:"meeting-time",ref:t,onChange:function(e){t.current.value=e.target.value},required:!0})))}));var X=n.a.forwardRef((function(e,t){return n.a.createElement("div",null,0===e.apts.length?n.a.createElement("label",null," NO APARTAMENTS"):n.a.createElement("select",{className:"browser-default custom-select",defaultValue:e.defaultValue,ref:t,onChange:function(e){t.current.value=e.target.value}},e.apts.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name," ",e.number," ")}))))}));function $(e){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),r=E+"/api/apartments/tenantID/".concat(t.userID),e.next=4,b.a.get(r,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){return[]}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(){var e=Object(r.createRef)(""),t=Object(r.useRef)(null),a=Object(r.useRef)(""),c=Object(r.useRef)(""),u=Object(r.useRef)(""),l=Object(r.useState)([]),p=Object(i.a)(l,2),m=p[0],d=p[1],b=Object(O.g)(),E=k().currentUser,h=Object(r.useState)([]),v=Object(i.a)(h,2),w=v[0],y=v[1],g=Object(r.useState)([]),j=Object(i.a)(g,2),x=j[0],D=j[1],S=E.uid;function N(){return(N=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({userID:S});case 2:if("tenant"!==e.sent){e.next=13;break}return e.t0=D,e.next=7,$({userID:S});case 7:e.t1=e.sent,e.t2=[e.t1],(0,e.t0)(e.t2),y([{id:1,state:"requested"}]),e.next=19;break;case 13:return e.t3=D,e.next=16,J();case 16:e.t4=e.sent,(0,e.t3)(e.t4),y([{id:1,state:"requested"},{id:2,state:"accepted"},{id:3,state:"done"}]);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function r(n){var l,o,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),l=f.currentUser.uid,r.next=4,R();case 4:return o=r.sent,i={apartmentID:e.current.value,state:c.current.value,type:a.current.value,description:u.current.value,createdBy:l,createdTime:o},"requested"!==c.current.value&&(i.worker=t.current.value),console.log(i),r.next=10,z({postData:i,userID:l});case 10:b.push("/");case 11:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function R(){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toISOString().slice(0,-8),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("div",{className:"mb-3 d-flex align-items-center"},n.a.createElement("button",{type:"button",variant:"link",onClick:function(){return b.goBack()},className:"mr-auto btn btn-secondary"},n.a.createElement("i",{className:"bi bi-arrow-return-left"})),n.a.createElement("h1",{className:"mr-auto"},"Crear Tique")),n.a.createElement(F.a,{onSubmit:function(e){return C.apply(this,arguments)}},n.a.createElement(F.a.Group,{id:"apartmentSelect"},n.a.createElement(F.a.Label,null,"Apartamento:"),n.a.createElement(X,{ref:e,apts:x})),n.a.createElement(F.a.Group,{id:"stateSelect"},n.a.createElement(F.a.Label,null,"Estado:"),n.a.createElement(Q,{typeRef:a.current.value,typeOfState:w,ref:c,workersChange:function(e){return d(e)}})),n.a.createElement(F.a.Group,{id:"typeSelect"},n.a.createElement(F.a.Label,null,"Tipo:"),n.a.createElement(Y,{workersChange:function(e){return d(e)},ref:a,typeOfTickets:[{id:1,type:"cleaning"},{id:2,type:"runner"},{id:3,type:"maintenance"}]})),n.a.createElement(F.a.Group,{id:"workerSelect"},("accepted"===c.current.value||"done"===c.current.value)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a.Label,null,"Worker:"),n.a.createElement(Z,{ref:t,workers:m,typeOfState:w}))),n.a.createElement(F.a.Group,{id:"description"},n.a.createElement(F.a.Label,null,"Descripci\xf3n:"),n.a.createElement(F.a.Control,{as:"textarea",rows:3,ref:u,required:!0})),n.a.createElement(P.a,{className:"w-100",type:"submit"},"Guardar Tique")))))};function te(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=k(),u=c.currentUser,l=c.updatePassword,s=c.updateEmail,o=Object(r.useState)(""),p=Object(i.a)(o,2),m=p[0],f=p[1],d=Object(r.useState)(!1),b=Object(i.a)(d,2),E=b[0],h=b[1],v=Object(O.g)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),m&&n.a.createElement(V.a,{variant:"danger"},m),n.a.createElement(F.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return f("Passwords do not match");var n=[];h(!0),f(""),e.current.value!==u.email&&n.push(s(e.current.value)),t.current.value&&n.push(l(t.current.value)),Promise.all(n).then((function(){v.push("/")})).catch((function(){f("Failed to update account")})).finally((function(){h(!1)}))}},n.a.createElement(F.a.Group,{id:"email"},n.a.createElement(F.a.Label,null,"Email"),n.a.createElement(F.a.Control,{type:"email",ref:e,required:!0,defaultValue:u.email})),n.a.createElement(F.a.Group,{id:"password"},n.a.createElement(F.a.Label,null,"Password"),n.a.createElement(F.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),n.a.createElement(F.a.Group,{id:"password-confirm"},n.a.createElement(F.a.Label,null,"Password Confirmation"),n.a.createElement(F.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),n.a.createElement(P.a,{disabled:E,className:"w-100",type:"submit"},"Update")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},n.a.createElement(g.b,{to:"/"},"Cancel")))}function ae(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=Object(r.useRef)(),u=k().signup,l=Object(r.useState)(""),p=Object(i.a)(l,2),m=p[0],f=p[1],d=Object(r.useState)(!1),b=Object(i.a)(d,2),E=b[0],h=b[1],v=Object(O.g)(),w=Object(r.createRef)(""),y=Object(r.useState)([]),j=Object(i.a)(y,2),x=j[0],D=j[1];function S(){return(S=Object(o.a)(s.a.mark((function r(n){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",f("Passwords do not match"));case 3:return r.prev=3,f(""),h(!0),r.next=8,u({email:e.current.value,password:t.current.value,userName:c.current.value,apartmentID:w.current.value});case 8:v.push("/login"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),f("Failed to create an account");case 14:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}function N(){return(N=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,J();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Registrarse"),m&&n.a.createElement(V.a,{variant:"danger"},m),n.a.createElement(F.a,{onSubmit:function(e){return S.apply(this,arguments)}},n.a.createElement(F.a.Group,{id:"userName"},n.a.createElement(F.a.Label,null,"Nombre Usuario"),n.a.createElement(F.a.Control,{type:"text",ref:c,placeholder:"Javier Gallego",required:!0})),n.a.createElement(F.a.Group,{id:"email"},n.a.createElement(F.a.Label,null,"Email"),n.a.createElement(F.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(F.a.Group,{id:"password"},n.a.createElement(F.a.Label,null,"Contrase\xf1a"),n.a.createElement(F.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(F.a.Group,{id:"password-confirm"},n.a.createElement(F.a.Label,null,"Confirma contrase\xf1a"),n.a.createElement(F.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(F.a.Group,{id:"apartament"},n.a.createElement(F.a.Label,null,"Apartamento"),n.a.createElement(X,{ref:w,apts:x})),n.a.createElement(P.a,{disabled:E,className:"w-100",type:"submit"},"Crear Cuenta")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"\xbfYa tienes una cuenta? ",n.a.createElement(g.b,{to:"/login"},"Iniciar Sesi\xf3n")))}function re(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=k().login,c=Object(r.useState)(""),u=Object(i.a)(c,2),l=u[0],p=u[1],m=Object(r.useState)(!1),d=Object(i.a)(m,2),b=(d[0],d[1]),E=Object(O.g)();function h(){return(h=Object(o.a)(s.a.mark((function r(n){var c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,p(""),b(!0),r.next=6,a(e.current.value,t.current.value);case 6:return r.next=8,f.currentUser.getIdToken();case 8:c=r.sent,localStorage.setItem("user-token",c),E.push("/"),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),p("Failed to log in");case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Iniciar Sesi\xf3n"),l&&n.a.createElement(V.a,{variant:"danger"},l),n.a.createElement(F.a,{onSubmit:function(e){return h.apply(this,arguments)}},n.a.createElement(F.a.Group,{id:"email"},n.a.createElement(F.a.Label,null,"Email"),n.a.createElement(F.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(F.a.Group,{id:"password"},n.a.createElement(F.a.Label,null,"Contrase\xf1a"),n.a.createElement(F.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(P.a,{className:"w-100",type:"submit"},"Iniciar Sesi\xf3n")),n.a.createElement("div",{className:"w-100 text-center mt-3"},n.a.createElement(g.b,{to:"/forgot-password"},"\xbfOlvidaste la contrase\xf1a?")))),n.a.createElement("div",{className:"w-100 text-center mt-2"},"\xbfNecesitas una cuenta? ",n.a.createElement(g.b,{to:"/signup"},"Registrarse")))}var ne=a(125);function ce(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),console.log(t.ticketID),console.log(t.postData),r=E+"/api/tickets/ticketId/".concat(t.ticketID),e.next=6,b.a.put(r,t.postData,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){if(e.response.data.error)return[]}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return se.apply(this,arguments)}function se(){return(se=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("user-token"),console.log(t.ticketID),console.log(t.userID),r=E+"/api/tickets/".concat(t.ticketID,"/userID/").concat(t.userID),console.log(r),e.next=7,b.a.delete(r,{headers:{Authorization:"Bearer "+a}}).then((function(e){return e.data})).catch((function(e){return e}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],u=function(){return c(!1)},l=Object(O.h)(),p=(l.state||[]).ticket,m=(l.state||[]).userID,f=(l.state||"tenant").role,d=Object(O.g)();function b(){return(b=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le({ticketID:p.ticketID,userID:m}).then(d.goBack()).catch((function(e){window.alert(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={apartmentID:p.apartmentID,createdBy:p.createdBy,createdTime:p.createdTime,description:p.description,state:"accepted",tenantID:p.tenantID,type:p.type,worker:m},ce({ticketID:p.ticketID,postData:t}).then(d.goBack()).catch((function(e){window.alert(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={apartmentID:p.apartmentID,createdBy:p.createdBy,createdTime:p.createdTime,description:p.description,state:"done",tenantID:p.tenantID,type:p.type,worker:m},ce({ticketID:p.ticketID,postData:t}).then(d.goBack()).catch((function(e){window.alert(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("div",{className:"mb-3 d-flex align-items-center"},n.a.createElement("button",{type:"button",variant:"link",onClick:function(){return d.goBack()},className:"mr-auto btn btn-secondary"},n.a.createElement("i",{className:"bi bi-arrow-return-left"})),n.a.createElement("h1",{className:"mr-auto"},"Detalles Tique")),n.a.createElement(I.a.Subtitle,null,"Apartamento:"),n.a.createElement(I.a.Text,null,p.aptName," ",p.aptNumber),n.a.createElement(I.a.Subtitle,null,"Estado:"),n.a.createElement(I.a.Text,null,p.state),n.a.createElement(I.a.Subtitle,null,"Tipo:"),n.a.createElement(I.a.Text,null,p.type),n.a.createElement(I.a.Subtitle,null,"Descripci\xf3n:"),n.a.createElement(I.a.Text,null,p.description),n.a.createElement(I.a.Subtitle,null,"Fecha Creaci\xf3n:"),n.a.createElement(I.a.Text,null,p.createdTime),n.a.createElement(I.a.Subtitle,null,"Creado por:"),n.a.createElement(I.a.Text,null,p.createdByName),p.worker&&n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a.Subtitle,null,"Trabajador:"),n.a.createElement(I.a.Text,null,p.workerName)),("tenant"!==f||"tenant"===f&&"requested"===p.state)&&n.a.createElement("div",{className:"pt-2 d-flex justify-content-between"},n.a.createElement(P.a,{type:"button",className:"btn btn-danger btn-lg mx-auto ",onClick:function(){return c(!0)}},"Borrar Tique"),n.a.createElement(g.b,{className:"btn btn-primary btn-lg mx-auto",to:{pathname:"/editTicket",state:{ticket:p,userRole:f}}},"Editar Tique")),n.a.createElement("br",null),n.a.createElement("div",null,"worker"===f&&"requested"===p.state&&n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{type:"button",className:"mx-2 btn btn-success btn-lg w-75",onClick:function(){return function(){return E.apply(this,arguments)}()}}," Aceptar Tique")),"worker"===f&&"accepted"===p.state&&n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{type:"button",className:"mx-2 btn btn-success btn-lg w-75",onClick:function(){return function(){return h.apply(this,arguments)}()}}," Realizar Tique"))))),n.a.createElement(ne.a,{show:a,onHide:u},n.a.createElement(ne.a.Header,{closeButton:!0},n.a.createElement(ne.a.Title,null,"\xbfSeguro que quieres borrar el tique?")),n.a.createElement(ne.a.Footer,null,n.a.createElement(P.a,{variant:"secondary",onClick:function(){return u()}},"Cerrar"),n.a.createElement(P.a,{variant:"primary",onClick:function(){return function(){return b.apply(this,arguments)}()}},"S\xed, Borrar Tique"))))};var ie=function(){var e=Object(O.h)().state||[],t=e.ticket,a=e.userRole,c=Object(r.useRef)(t.apartmentID),u=Object(r.useRef)(t.worker||""),l=Object(r.useRef)(""),p=Object(r.useRef)(""),m=Object(r.useRef)(""),f=Object(r.useState)([]),d=Object(i.a)(f,2),b=d[0],E=d[1],h=Object(O.g)(),v=k().currentUser,w=Object(r.useState)([]),y=Object(i.a)(w,2),g=y[0],j=y[1],x=Object(r.useState)([]),D=Object(i.a)(x,2),S=D[0],N=D[1],C=v.uid;function T(){return(T=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={apartmentID:c.current.value,createdBy:t.createdBy,createdTime:t.createdTime,description:m.current.value,state:t.state,tenantID:t.tenantID,type:t.type,worker:u.current.value||null},ce({ticketID:t.ticketID,postData:a}).then(h.push("/")).catch((function(e){window.alert(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("tenant"!==a){e.next=10;break}return e.t0=N,e.next=4,$({userID:C});case 4:e.t1=e.sent,e.t2=[e.t1],(0,e.t0)(e.t2),j([{id:1,state:"requested"}]),e.next=16;break;case 10:return e.t3=N,e.next=13,J();case 13:e.t4=e.sent,(0,e.t3)(e.t4),j([{id:1,state:"requested"},{id:2,state:"accepted"},{id:3,state:"done"}]);case 16:return e.t5=E,e.next=19,M({type:t.type});case 19:e.t6=e.sent,(0,e.t5)(e.t6);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){R.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("div",{className:"mb-3 d-flex align-items-center"},n.a.createElement("button",{type:"button",variant:"link",onClick:function(){return h.goBack()},className:"mr-auto btn btn-secondary"},n.a.createElement("i",{className:"bi bi-arrow-return-left"})),n.a.createElement("h1",{className:"mr-auto"},"Editar Tique")),n.a.createElement(F.a,{onSubmit:function(){return T.apply(this,arguments)}},n.a.createElement("fieldset",{disabled:!0},n.a.createElement(F.a.Group,{id:"apartmentSelect"},n.a.createElement(F.a.Label,null,"Apartamento:"),n.a.createElement(X,{ref:c,defaultValue:t.apartmentID,apts:S})),n.a.createElement(F.a.Group,{id:"stateSelect"},n.a.createElement(F.a.Label,null,"Estado:"),n.a.createElement(Q,{typeRef:l.current.value,defaultValue:t.state,typeOfState:g,ref:p,workersChange:function(e){return E(e)}})),n.a.createElement(F.a.Group,{id:"typeSelect"},n.a.createElement(F.a.Label,null,"Tipo:"),n.a.createElement(Y,{workersChange:function(e){return E(e)},defaultValue:t.type,ref:l,typeOfTickets:[{id:1,type:"cleaning"},{id:2,type:"runner"},{id:3,type:"maintenance"}]}))),n.a.createElement(F.a.Group,{id:"workerSelect"},t.worker&&n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a.Label,null,"Trabajador:"),n.a.createElement(Z,{ref:u,workers:b,defaultValue:t.worker,typeOfState:g}))),n.a.createElement(F.a.Group,{id:"description"},n.a.createElement(F.a.Label,null,"Descripci\xf3n:"),n.a.createElement(F.a.Control,{as:"textarea",rows:3,defaultValue:t.description,ref:m,required:!0})),n.a.createElement(P.a,{className:"w-100",type:"submit"},"Editar Tique")))))},pe=a(124);var me=n.a.forwardRef((function(e,t){return n.a.createElement("div",null,e.workersType?e.workersType&&n.a.createElement("select",{className:"browser-default custom-select",defaultValue:e.defaultValue,ref:t,onChange:function(e){t.current.value=e.target.value}},e.workersType.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.type)}))):n.a.createElement("label",null," No Worker Types"))}));function fe(){return de.apply(this,arguments)}function de(){return(de=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user-token"),E+"/api/workers-type",e.next=4,b.a.get("https://apt-management-web-app.herokuapp.com/api/workers-type",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){return e.response&&e.response.data.error,[]}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=Object(r.useRef)(),u=Object(r.useRef)(),l=k().signup,p=Object(O.g)(),m=Object(r.useState)(""),f=Object(i.a)(m,2),d=f[0],b=f[1],E=Object(r.useState)(!1),h=Object(i.a)(E,2),v=h[0],w=h[1],y=Object(r.useState)([]),g=Object(i.a)(y,2),j=g[0],x=g[1];function D(){return(D=Object(o.a)(s.a.mark((function r(n){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",b("Passwords do not match"));case 3:return r.prev=3,b(""),w(!0),r.next=8,l({email:e.current.value,password:t.current.value,userName:c.current.value,workerType:u.current.value});case 8:p.push("/login"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),b("Failed to create an account");case 14:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,fe();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,null,n.a.createElement(I.a.Body,null,n.a.createElement("h2",{className:"text-center mb-4"},"Nuevo Trabajador"),d&&n.a.createElement(V.a,{variant:"danger"},d),n.a.createElement(F.a,{onSubmit:function(e){return D.apply(this,arguments)}},n.a.createElement(F.a.Group,{id:"userName"},n.a.createElement(F.a.Label,null,"Nombre Usuario"),n.a.createElement(F.a.Control,{type:"text",ref:c,placeholder:"Javier Gallego",required:!0})),n.a.createElement(F.a.Group,{id:"email"},n.a.createElement(F.a.Label,null,"Email"),n.a.createElement(F.a.Control,{type:"email",ref:e,required:!0})),n.a.createElement(F.a.Group,{id:"password"},n.a.createElement(F.a.Label,null,"Contrase\xf1a"),n.a.createElement(F.a.Control,{type:"password",ref:t,required:!0})),n.a.createElement(F.a.Group,{id:"password-confirm"},n.a.createElement(F.a.Label,null,"Confirma contrase\xf1a"),n.a.createElement(F.a.Control,{type:"password",ref:a,required:!0})),n.a.createElement(F.a.Group,{id:"workerSelect"},n.a.createElement(F.a.Label,null,"Type:"),n.a.createElement(me,{ref:u,workersType:j})),n.a.createElement(pe.a,{className:"text-center"},n.a.createElement(P.a,{disabled:v,type:"submit"},"Crear Trabajador"))))))}var Ee=function(){return n.a.createElement(g.a,null,n.a.createElement(y,null,n.a.createElement(O.d,null,n.a.createElement(x,{exact:!0,path:"/",component:G}),n.a.createElement(x,{path:"/update-profile",component:te}),n.a.createElement(x,{path:"/new-worker",component:be}),n.a.createElement(O.b,{path:"/signup",component:ae}),n.a.createElement(O.b,{path:"/login",component:re}),n.a.createElement(O.b,{path:"/forgot-password",component:U}),n.a.createElement(x,{path:"/ticket-details",component:oe}),n.a.createElement(x,{path:"/newTicket",component:ee}),n.a.createElement(x,{path:"/editTicket",component:ie}))))};a(116);u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ee,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a(117)}},[[82,1,2]]]);
//# sourceMappingURL=main.149c9150.chunk.js.map