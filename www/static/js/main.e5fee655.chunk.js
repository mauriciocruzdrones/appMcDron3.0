(this["webpackJsonpio.cordova.hellocordova"]=this["webpackJsonpio.cordova.hellocordova"]||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a.n(n),o=a(3),c=a(136),i=a(36),s=Object(i.a)(),l=a(21),u=a(8),d=a(0),j=a.n(d),b=a(2),p="LOGIN",O="LOGOUT",g="CHANGE_EMAIL_LOGIN",h="CHANGE_PASSWORD_LOGIN",m="ISFETCHING_START",f="ISFETCHING_COMPLETE",x="MODAL_ERROR",v="GET_REPARACIONES",w="CHANGE_INPUT",E=a(82),y=a(74),I=a(37),L=(Object(E.a)({apiKey:"AIzaSyCqupkvp1jXt8y8WjVjSuqi9OFMkJu_LpI",authDomain:"mc-dron.firebaseapp.com",projectId:"mc-dron",storageBucket:"mc-dron.appspot.com",messagingSenderId:"410639876260",appId:"1:410639876260:web:045fb9451d7ec1d6ee2631"}),Object(I.e)()),R=function(e,t){return new Promise((function(a,n){console.log(e,t);var r=Object(y.a)();Object(y.b)(r,e,t).then((function(){console.log("Se logue\xf3");var o=r.currentUser;if(o.emailVerified){console.log("Email is verified "+e);var c=Object(I.b)(Object(I.a)(L,"USUARIOS"),e);return console.log("Pasa el ref:"+JSON.stringify(c)),Object(I.c)(c).then((function(n){if(console.log("Entra al then get"),n.exists){console.log("Entra al doc.exists");var r=n.data(),o=r.Nick,c=r.UrlFotoUsu,i=r.NombreUsu,s=r.ApellidoUsu,l=r.CiudadUsu,u=r.DomicilioUsu,d=r.ProvinciaUsu,j=r.TelefonoUsu,b=r.Admin,p={nombre:i,apellido:s,email:e,nick:o,urlFoto:c,password:t,admin:b,ciudad:l,domicilio:u,provincia:d,telefono:j};return console.log(JSON.stringify(p)),a(p)}})).catch((function(e){console.log("Entra al catch get"),n(e)})),a()}console.log("Email is not verified"),app.dialog.alert("Falta verificar el email. Compruebe su casilla de correos","Atenci\xf3n"),o.sendEmailVerification()})).catch((function(e){console.log(e.code),n(e)}))}))},C=function(){return console.log("llega a isfetching"),{type:m}},k=function(){return{type:f}},P=function(e,t){return function(){var a=Object(b.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=Object(b.a)(j.a.mark((function a(r,o){var c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""==e||""==t){a.next=6;break}return n(C()),a.next=4,R(e,t).then((function(e){return console.log("llega al then del loginPersistencia"),n({type:p,payload:{data:{isLoggedIn:!0,usuario:e}}}),r(e)})).catch((function(e){console.log("llega al catch del loginPersistencia"),o(e)})).finally(n(k()));case 4:a.next=8;break;case 6:return c={code:"email o password incorrectos"},a.abrupt("return",o(c));case 8:case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},N=function(){return{type:O,payload:{data:{isLoggedIn:!1}}}},S=a(6),F=Object(l.b)((function(e){return{email:e.app.usuario.email,password:e.app.usuario.password,admin:e.app.usuario.admin,isFetching:e.app.isFetching,showError:e.app.showError}}),{login:P,emailOnChangeLogin:function(e){return{type:g,payload:{data:e}}},passwordOnChangeLogin:function(e){return{type:h,payload:{data:e}}},abreError:function(e,t){return console.log("llega a abreError"),{type:x,payload:{data:{modalError:{showError:!0,mensajeError:t,tituloError:e}}}}}})((function(e){var t=e.isFetching,a=e.login,n=e.emailOnChangeLogin,r=e.passwordOnChangeLogin,o=e.email,c=e.password,i=(e.showError,e.abreError),l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(o,c).then((function(){return s.push("/")})).catch((function(e){i("Error ","C\xf3digo - "+e.code)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(S.jsx)("h3",{children:"cargando ...."}):Object(S.jsx)("div",{class:"text-center",children:Object(S.jsx)("main",{class:"form-signin",children:Object(S.jsxs)("form",{class:"text-center",children:[Object(S.jsx)("img",{class:"mb-4",src:"./img/logo.png",alt:"",width:"100%"}),Object(S.jsx)("h1",{class:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(S.jsxs)("div",{class:"form-floating",children:[Object(S.jsx)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",value:o,onChange:function(e){return n(e.target.value)}}),Object(S.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(S.jsxs)("div",{class:"form-floating",children:[Object(S.jsx)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",value:c,onChange:function(e){return r(e.target.value)}}),Object(S.jsx)("label",{for:"floatingPassword",children:"Password"})]}),Object(S.jsx)("div",{class:"checkbox mb-3",children:Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(S.jsx)("button",{onClick:function(){return l()},class:"w-100 btn btn-lg btn-primary bg-bluemcdron",type:"submit",children:"Sign in"}),Object(S.jsx)("p",{class:"mt-5 mb-3 text-muted",children:"\xa9 2017\u20132021"})]})})})})),A=a(139),U=a(137),_=a(134),T=Object(l.b)(null,{cierraError:function(){return console.log("llega a cierra"),{type:x,payload:{data:{modalError:{showError:!1}}}}}})((function(e){var t=e.hide,a=e.titulo,n=e.mensaje,r=e.cierraError;return console.log("Llega a ErrorComponent "+t),Object(S.jsxs)(A.a,{centered:!0,show:t,onHide:r,children:[Object(S.jsx)(A.a.Title,{children:Object(S.jsx)(U.a,{variant:"danger",children:a})}),Object(S.jsx)(A.a.Body,{children:n}),Object(S.jsx)(A.a.Footer,{children:Object(S.jsx)(_.a,{className:"bg-bluemcdron",onClick:r,children:"Cerrar"})})]})})),G=a(87),D=Object(l.b)(null,{logout:N})((function(e){e.logout,e.admin;return Object(S.jsx)(G.a,{in:open,children:Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("img",{class:"mb-4",src:"./img/logo.png",alt:"",width:"100%","max-width":"100px"}),Object(S.jsx)("button",{className:"m-4 btn w-75 bg-bluemcdron",style:{height:"100px"},onClick:function(){return s.push("/inicio/listareparaciones")},children:Object(S.jsx)("text",{class:"text-white text-center",children:"REPARACIONES"})}),Object(S.jsx)("button",{className:"m-4 btn w-75 bg-bluemcdron",style:{height:"100px"},children:Object(S.jsx)("text",{class:"text-white text-center",children:"PRESUPUESTO"})})]})})})),H=Object(l.b)((function(e){return{coleccionReparaciones:e.app.coleccionReparaciones,isFetching:e.app.isFetching}}),{getReparaciones:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(b.a)(j.a.mark((function e(a,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.next=3,new Promise((function(e,t){var a=Object(I.a)(L,"REPARACIONES"),n=Object(I.g)(a,Object(I.f)("PrioridadRep"));Object(I.d)(n).then((function(t){var a=[];t.forEach((function(e){return a.push({id:e.id,data:e.data()})})),e(a)})).catch((function(e){return t(e)}))})).then((function(e){return console.log("llega al then del getReparacionesPersistencia"),t({type:v,payload:{data:e}}),a(e)})).catch((function(e){console.log("llega al catch del getReparacionesPersistencia"),n(e)})).finally(t(k()));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getReparaciones,a=e.coleccionReparaciones,n=e.isFetching;return Object(o.useEffect)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),[t]),n?Object(S.jsx)("h3",{children:"cargando ...."}):a.map((function(e){return Object(S.jsx)("div",{class:"list-group",children:Object(S.jsxs)("a",{value:e.id,href:"#",class:"list-group-item list-group-item-action","aria-current":"true",children:[Object(S.jsxs)("div",{class:"d-flex w-100 justify-content-between",children:[Object(S.jsx)("h5",{class:"mb-1",children:e.data.DroneRep}),Object(S.jsx)("small",{children:"3 days ago"})]}),Object(S.jsx)("p",{class:"mb-1",children:e.data.EstadoRep}),Object(S.jsx)("small",{children:e.data.UsuarioRep})]})})}))})),J=a(84),M=a(138),V=a(135),q=Object(l.b)(null,{logout:N})((function(e){return Object(J.a)(e),Object(S.jsx)(M.a,{className:"bg-bluemcdron",children:Object(S.jsx)(V.a,{width:"50",height:"50",onClick:function(){return s.goBack()},color:"white"})})})),z=function(e){var t=e.match,a=e.isLoggedIn;e.admin;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(q,{}),a?Object(S.jsxs)(c.d,{children:[Object(S.jsx)(c.b,{exact:!0,path:"".concat(t.path),render:function(){return Object(S.jsx)(D,{})}}),Object(S.jsx)(c.b,{exact:!0,path:"".concat(t.path,"/listareparaciones"),render:function(){return Object(S.jsx)(H,{})}})]}):Object(S.jsx)(c.a,{to:"/"})]})},B=Object(l.b)(null,{login:P,logout:N})((function(e){var t=e.isLoggedIn,a=e.admin;return Object(S.jsxs)(c.d,{children:[Object(S.jsx)(c.b,{path:"/inicio",render:function(e){return t?Object(S.jsx)(z,Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:t,admin:a})):Object(S.jsx)(c.a,{to:"/login"})}}),Object(S.jsx)(c.b,{exact:!0,path:"/noautorizado",render:function(){return Object(S.jsx)(T,{mensaje:"Acceso no autorizado"})}}),Object(S.jsx)(c.b,{exact:!0,path:"/errorlogin",render:function(){return Object(S.jsx)(T,{mensaje:"Login incorrecto"})}}),Object(S.jsx)(c.b,{exact:!0,path:"/ocurrioproblema",render:function(){return Object(S.jsx)(T,{mensaje:"Ocurri\xf3 un problema"})}}),Object(S.jsx)(c.b,{path:"/login",render:function(e){return Object(S.jsx)(F,Object(u.a)({},e))}}),Object(S.jsx)(c.b,{path:"/",render:function(e){return Object(S.jsx)(c.a,Object(u.a)(Object(u.a)({},e),{},{to:"/inicio"}))}})]})})),X=Object(l.b)((function(e){return{isLoggedIn:e.app.isLoggedIn,admin:e.app.usuario.admin,modalError:e.app.modalError}}))((function(e){var t=e.isLoggedIn,a=e.admin,n=e.modalError;return Object(S.jsxs)("div",{children:[Object(S.jsx)(T,{hide:n.showError,mensaje:n.mensajeError,titulo:n.tituloError}),Object(S.jsx)(c.c,{history:s,children:Object(S.jsx)(B,{isLoggedIn:t,admin:a})})]})})),W=a(49),K=a(86),Q={isLoggedIn:!1,isFetching:!1,modalError:{showError:!1,mensajeError:"",tituloError:""},usuario:{nombre:null,apellido:null,email:null,nick:null,urlFoto:null,password:null,admin:!1},coleccionReparaciones:[]},Y=Object(W.b)({app:function(){var e,t,a,n,r,o,c,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case v:return Object(u.a)(Object(u.a)({},i),{},{coleccionReparaciones:s.payload.data});case w:return console.log(s.payload),Object(u.a)(Object(u.a)({},i),{},{reparacion:Object(u.a)(Object(u.a)({},i.reparacion),{},{drone:s.payload.data})});case m:return Object(u.a)(Object(u.a)({},i),{},{isFetching:!0});case f:return Object(u.a)(Object(u.a)({},i),{},{isFetching:!1});case p:return Object(u.a)(Object(u.a)({},i),{},{isFetching:!1,isLoggedIn:s.payload.data.isLoggedIn,usuario:Object(u.a)(Object(u.a)({},i.usuario),{},{nombre:null===(e=s.payload.data.usuario)||void 0===e?void 0:e.nombre,apellido:null===(t=s.payload.data.usuario)||void 0===t?void 0:t.apellido,admin:null===(a=s.payload.data.usuario)||void 0===a?void 0:a.admin,email:null===(n=s.payload.data.usuario)||void 0===n?void 0:n.email,nick:null===(r=s.payload.data.usuario)||void 0===r?void 0:r.nick,password:null===(o=s.payload.data.usuario)||void 0===o?void 0:o.password,urlFoto:null===(c=s.payload.data.usuario)||void 0===c?void 0:c.urlFoto})});case O:return Object(u.a)(Object(u.a)({},i),{},{isLoggedIn:s.payload.data.isLoggedIn});case h:return Object(u.a)(Object(u.a)({},i),{},{usuario:Object(u.a)(Object(u.a)({},i.usuario),{},{password:s.payload.data})});case g:return Object(u.a)(Object(u.a)({},i),{},{usuario:Object(u.a)(Object(u.a)({},i.usuario),{},{email:s.payload.data})});case x:return console.log("llega al reducer "+s.payload.data.showError),Object(u.a)(Object(u.a)({},i),{},{modalError:s.payload.data.modalError});default:return i}}}),Z=window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,$=[K.a],ee=Object(W.d)(Y,Z(W.a.apply(void 0,$)));a(104),a(105),a(127);r.a.render(Object(S.jsx)(l.a,{store:ee,children:Object(S.jsx)(X,{})}),document.querySelector("#root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.e5fee655.chunk.js.map