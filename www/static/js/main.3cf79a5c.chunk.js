(this["webpackJsonpio.cordova.hellocordova"]=this["webpackJsonpio.cordova.hellocordova"]||[]).push([[0],{127:function(e,t,r){},129:function(e,t,r){"use strict";r.r(t);var n=r(30),a=r.n(n),c=r(3),o=r(135),s=r(36),i=Object(s.a)(),l=r(20),d=r(8),u=r(0),j=r.n(u),b=r(2),p="LOGIN",h="LOGOUT",O="CHANGE_EMAIL_LOGIN",m="CHANGE_PASSWORD_LOGIN",f="ISFETCHING_START",g="ISFETCHING_COMPLETE",x="MODAL_ERROR",v="GET_REPARACIONES",E="CHANGE_INPUT_REP",R=r(82),y=r(75),w=r(37),C=(Object(R.a)({apiKey:"AIzaSyCqupkvp1jXt8y8WjVjSuqi9OFMkJu_LpI",authDomain:"mc-dron.firebaseapp.com",projectId:"mc-dron",storageBucket:"mc-dron.appspot.com",messagingSenderId:"410639876260",appId:"1:410639876260:web:045fb9451d7ec1d6ee2631"}),Object(w.e)()),I=function(e,t){return new Promise((function(r,n){console.log(e,t);var a=Object(y.a)();Object(y.b)(a,e,t).then((function(){console.log("Se logue\xf3");var c=a.currentUser;if(c.emailVerified){console.log("Email is verified "+e);var o=Object(w.b)(Object(w.a)(C,"USUARIOS"),e);return console.log("Pasa el ref:"+JSON.stringify(o)),Object(w.c)(o).then((function(n){if(console.log("Entra al then get"),n.exists){console.log("Entra al doc.exists");var a=n.data(),c=a.Nick,o=a.UrlFotoUsu,s=a.NombreUsu,i=a.ApellidoUsu,l=a.CiudadUsu,d=a.DomicilioUsu,u=a.ProvinciaUsu,j=a.TelefonoUsu,b=a.Admin,p={nombre:s,apellido:i,email:e,nick:c,urlFoto:o,password:t,admin:b,ciudad:l,domicilio:d,provincia:u,telefono:j};return console.log(JSON.stringify(p)),r(p)}})).catch((function(e){console.log("Entra al catch get"),n(e)})),r()}console.log("Email is not verified"),app.dialog.alert("Falta verificar el email. Compruebe su casilla de correos","Atenci\xf3n"),c.sendEmailVerification()})).catch((function(e){console.log(e.code),n(e)}))}))},N=function(){return console.log("llega a isfetching"),{type:f}},S=function(){return{type:g}},A=function(e,t){return function(){var r=Object(b.a)(j.a.mark((function r(n){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(){var r=Object(b.a)(j.a.mark((function r(a,c){var o;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""==e||""==t){r.next=6;break}return n(N()),r.next=4,I(e,t).then((function(e){return console.log("llega al then del loginPersistencia"),n({type:p,payload:{data:{isLoggedIn:!0,usuario:e}}}),a(e)})).catch((function(e){console.log("llega al catch del loginPersistencia"),c(e)})).finally(n(S()));case 4:r.next=8;break;case 6:return o={code:"email o password incorrectos"},r.abrupt("return",c(o));case 8:case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},L=function(){return{type:h,payload:{data:{isLoggedIn:!1}}}},P=r(4),F=Object(l.b)((function(e){return{email:e.app.usuario.email,password:e.app.usuario.password,admin:e.app.usuario.admin,isFetching:e.app.isFetching,showError:e.app.showError}}),{login:A,emailOnChangeLogin:function(e){return{type:O,payload:{data:e}}},passwordOnChangeLogin:function(e){return{type:m,payload:{data:e}}},abreError:function(e,t){return console.log("llega a abreError"),{type:x,payload:{data:{modalError:{showError:!0,mensajeError:t,tituloError:e}}}}}})((function(e){var t=e.isFetching,r=e.login,n=e.emailOnChangeLogin,a=e.passwordOnChangeLogin,c=e.email,o=e.password,s=(e.showError,e.abreError),l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(c,o).then((function(){return i.push("/")})).catch((function(e){s("Error ","C\xf3digo - "+e.code)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(P.jsx)("h3",{children:"cargando ...."}):Object(P.jsx)("div",{className:"text-center",children:Object(P.jsx)("main",{className:"form-signin",children:Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)("img",{className:"mb-4",src:"./img/logo.png",alt:"",width:"100%"}),Object(P.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(P.jsxs)("div",{className:"form-floating",children:[Object(P.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",value:c,onChange:function(e){return n(e.target.value)}}),Object(P.jsx)("label",{children:"Email address"})]}),Object(P.jsxs)("div",{className:"form-floating",children:[Object(P.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",value:o,onChange:function(e){return a(e.target.value)}}),Object(P.jsx)("label",{children:"Password"})]}),Object(P.jsx)("div",{className:"checkbox mb-3",children:Object(P.jsxs)("label",{children:[Object(P.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(P.jsx)("button",{onClick:function(){return l()},className:"w-100 btn btn-lg btn-primary bg-bluemcdron",children:"Sign in"}),Object(P.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"\xa9 2017\u20132021"})]})})})})),T=r(139),k=r(137),U=r(134),D=Object(l.b)(null,{cierraError:function(){return console.log("llega a cierra"),{type:x,payload:{data:{modalError:{showError:!1}}}}}})((function(e){var t=e.hide,r=e.titulo,n=e.mensaje,a=e.cierraError;return console.log("Llega a ErrorComponent "+t),Object(P.jsxs)(T.a,{centered:!0,show:t,onHide:a,children:[Object(P.jsx)(T.a.Title,{children:Object(P.jsx)(k.a,{variant:"danger",children:r})}),Object(P.jsx)(T.a.Body,{children:n}),Object(P.jsx)(T.a.Footer,{children:Object(P.jsx)(U.a,{className:"bg-bluemcdron",onClick:a,children:"Cerrar"})})]})})),_=r(87),G=Object(l.b)(null,{logout:L})((function(e){e.logout,e.admin;var t=e.match;return Object(P.jsx)(_.a,{in:open,children:Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)("img",{class:"mb-4",src:"./img/logo.png",alt:"",width:"100%","max-width":"100px"}),Object(P.jsx)("button",{className:"m-4 btn w-75 bg-bluemcdron",style:{height:"100px"},onClick:function(){return i.push("".concat(t.path,"/reparaciones"))},children:Object(P.jsx)("text",{class:"text-white text-center",children:"REPARACIONES"})}),Object(P.jsx)("button",{className:"m-4 btn w-75 bg-bluemcdron",style:{height:"100px"},children:Object(P.jsx)("text",{class:"text-white text-center",children:"PRESUPUESTO"})})]})})})),M=Object(l.b)((function(e){return{coleccionReparaciones:e.app.coleccionReparaciones,isFetching:e.app.isFetching}}),{getReparaciones:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(b.a)(j.a.mark((function e(r,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N()),e.next=3,new Promise((function(e,t){var r=Object(w.a)(C,"REPARACIONES"),n=Object(w.g)(r,Object(w.f)("PrioridadRep"));Object(w.d)(n).then((function(t){var r=[];t.forEach((function(e){return r.push({id:e.id,data:e.data()})})),e(r)})).catch((function(e){return t(e)}))})).then((function(e){return console.log("llega al then del getReparacionesPersistencia"),t({type:v,payload:{data:e}}),r(e)})).catch((function(e){console.log("llega al catch del getReparacionesPersistencia"),n(e)})).finally(t(S()));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getReparaciones,r=e.coleccionReparaciones,n=e.isFetching;e.match;return Object(c.useEffect)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),[t]),n?Object(P.jsx)("h3",{children:"cargando ...."}):Object(P.jsx)("div",{class:"list-group",children:r.map((function(e){return Object(P.jsxs)("a",{value:e.id,href:"#",class:"list-group-item list-group-item-action","aria-current":"true",onClick:function(){return i.push("/inicio/reparacion")},children:[Object(P.jsxs)("div",{class:"d-flex w-100 justify-content-between",children:[Object(P.jsx)("h5",{class:"mb-1",children:e.data.DroneRep}),Object(P.jsx)("small",{children:"3 days ago"})]}),Object(P.jsx)("p",{class:"mb-1",children:e.data.EstadoRep}),Object(P.jsx)("small",{children:e.data.UsuarioRep})]})}))})})),H=Object(l.b)(null,{changeInputRep:function(e){return{type:E,payload:{input:e.id,data:e.value}}}})((function(e){Object(o.e)().id;return Object(P.jsxs)("form",{children:[Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"ESTADO DE LA REPARACI\xd3N"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"estadoRep",class:"form-label",children:"Estado"}),Object(P.jsx)("input",{type:"text",class:"form-control",id:"estadoRep",onChange:function(t){return e(t.target)}})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"ENLACE A DRIVE"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"driveRep",class:"form-label",children:"En lace a Drive"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"text",class:"form-control",id:"driveRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"CONSULTA - PRIMEROS DATOS"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"feConRep",class:"form-label",children:"Fecha de Cosulta"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"date",class:"form-control",id:"feConRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"usuarioRep",class:"form-label",children:"Cliente"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"text",class:"form-control",id:"usuarioRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"droneRep",class:"form-label",children:"Modelo del Drone"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"text",class:"form-control",id:"droneRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"descripcionUsuRep",class:"form-label",children:"Desperfectos o Roturas"}),Object(P.jsx)("textarea",{onChange:function(t){return e(t.target)},class:"form-control",id:"descripcionUsuRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"CONSULTA - PRIMEROS DATOS"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"feRecRep",class:"form-label",children:"Fecha de Recepci\xf3n"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"date",class:"form-control",id:"feRecRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"REVISI\xd3N - DIAGN\xd3STICO Y PRESUPUESTO DATOS"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"numeroSerieRep",class:"form-label",children:"N\xfamero de Serie"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"text",class:"form-control",id:"numeroSerieRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"descripcionTecRep",class:"form-label",children:"Observaciones del T\xe9cnico"}),Object(P.jsx)("textarea",{onChange:function(t){return e(t.target)},class:"form-control",id:"descripcionTecRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"presuMoRep",class:"form-label",children:"Presupuesto Mano de Obra $"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"number",class:"form-control",id:"presuMoRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"presuReRep",class:"form-label",children:"Presupuesto Repuestos $"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"number",class:"form-control",id:"presuReRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"presuFiRep",class:"form-label",children:"Presupuesto Final $"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"number",class:"form-control",id:"presuFiRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"presuDiRep",class:"form-label",children:"Diagn\xf3stico $"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"number",class:"form-control",id:"presuDiRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"REPUESTOS - CUALES Y SEGUIMIENTO"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"txtRepuestosRep",class:"form-label",children:"Qu\xe9 repuesto, seguimiento, transportista"}),Object(P.jsx)("textarea",{onChange:function(t){return e(t.target)},class:"form-control",id:"txtRepuestosRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"REPARACI\xd3N - DATOS DE LA REPARACI\xd3N"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"informeRep",class:"form-label",children:"Informe de Reparaci\xf3n o Diagn\xf3stico"}),Object(P.jsx)("textarea",{onChange:function(t){return e(t.target)},class:"form-control",id:"informeRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"feFinRep",class:"form-label",children:"Fecha Finalizacion"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"date",class:"form-control",id:"feFinRep"})]})]})}),Object(P.jsx)("div",{class:"card",style:"width: 18rem;",children:Object(P.jsxs)("div",{class:"card-body",children:[Object(P.jsx)("h5",{class:"card-title",children:"ENTREGA - DATOS DE LA ENTREGA"}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"feEntRep",class:"form-label",children:"Fecha Entrega"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"date",class:"form-control",id:"feEntRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"txtEntregaRep",class:"form-label",children:"Cliente, Comisionista, Correo, Seguimiento"}),Object(P.jsx)("textarea",{onChange:function(t){return e(t.target)},class:"form-control",id:"txtEntregaRep"})]}),Object(P.jsxs)("div",{class:"form-floating mb-3",children:[Object(P.jsx)("label",{for:"seguimientoEntregaRep",class:"form-label",children:"Nro. de Seguimiento"}),Object(P.jsx)("input",{onChange:function(t){return e(t.target)},type:"text",class:"form-control",id:"seguimientoEntregaRep"})]})]})}),Object(P.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})),V=r(85),J=r(138),z=r(136),$=Object(l.b)(null,{logout:L})((function(e){return Object(V.a)(e),Object(P.jsx)(J.a,{className:"bg-bluemcdron",children:Object(P.jsx)(z.a,{width:"50",height:"50",onClick:function(){return i.goBack()},color:"white"})})})),q=function(e){var t=e.match,r=e.isLoggedIn;e.admin;return console.log("inicio rutes"),console.log(r),Object(P.jsx)(P.Fragment,{children:r?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)($,{}),Object(P.jsxs)(o.d,{children:[Object(P.jsx)(o.b,{exact:!0,path:"".concat(t.path),component:G}),Object(P.jsx)(o.b,{exact:!0,path:"".concat(t.path,"/reparaciones"),component:M}),Object(P.jsx)(o.b,{exact:!0,path:"".concat(t.path,"/reparacion"),component:H})]})]}):Object(P.jsx)(o.a,{to:"/login"})})},B=Object(l.b)(null,{login:A,logout:L})((function(e){var t=e.isLoggedIn,r=e.admin;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(o.d,{children:[Object(P.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)(o.a,{to:"/inicio"})}}),Object(P.jsx)(o.b,{path:"/noautorizado",render:function(){return Object(P.jsx)(D,{mensaje:"Acceso no autorizado"})}}),Object(P.jsx)(o.b,{path:"/errorlogin",render:function(){return Object(P.jsx)(D,{mensaje:"Login incorrecto"})}}),Object(P.jsx)(o.b,{path:"/ocurrioproblema",render:function(){return Object(P.jsx)(D,{mensaje:"Ocurri\xf3 un problema"})}}),Object(P.jsx)(o.b,{path:"/login",render:function(e){return Object(P.jsx)(F,Object(d.a)({},e))}}),Object(P.jsx)(o.b,{path:"/inicio",render:function(e){return Object(P.jsx)(q,Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:t,admin:r}))}})]})})})),X=Object(l.b)((function(e){return{isLoggedIn:e.app.isLoggedIn,admin:e.app.usuario.admin,modalError:e.app.modalError}}))((function(e){var t=e.isLoggedIn,r=e.admin,n=e.modalError;return Object(P.jsxs)("div",{children:[Object(P.jsx)(D,{hide:n.showError,mensaje:n.mensajeError,titulo:n.tituloError}),Object(P.jsx)(o.c,{history:i,children:Object(P.jsx)(B,{isLoggedIn:t,admin:r})})]})})),W=r(49),Y=r(86),K=r(6),Q={isLoggedIn:!1,isFetching:!1,modalError:{showError:!1,mensajeError:"",tituloError:""},usuario:{nombre:"",apellido:"",email:"",nick:"",urlFoto:"",password:"",admin:!1},coleccionReparaciones:[]},Z=Object(W.b)({app:function(){var e,t,r,n,a,c,o,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case v:return Object(d.a)(Object(d.a)({},s),{},{coleccionReparaciones:i.payload.data});case E:return Object(d.a)(Object(d.a)({},s),{},{reparacion:Object(d.a)(Object(d.a)({},s.reparacion),{},Object(K.a)({},i.payload.input,i.payload.data))});case f:return Object(d.a)(Object(d.a)({},s),{},{isFetching:!0});case g:return Object(d.a)(Object(d.a)({},s),{},{isFetching:!1});case p:return Object(d.a)(Object(d.a)({},s),{},{isFetching:!1,isLoggedIn:i.payload.data.isLoggedIn,usuario:Object(d.a)(Object(d.a)({},s.usuario),{},{nombre:null===(e=i.payload.data.usuario)||void 0===e?void 0:e.nombre,apellido:null===(t=i.payload.data.usuario)||void 0===t?void 0:t.apellido,admin:null===(r=i.payload.data.usuario)||void 0===r?void 0:r.admin,email:null===(n=i.payload.data.usuario)||void 0===n?void 0:n.email,nick:null===(a=i.payload.data.usuario)||void 0===a?void 0:a.nick,password:null===(c=i.payload.data.usuario)||void 0===c?void 0:c.password,urlFoto:null===(o=i.payload.data.usuario)||void 0===o?void 0:o.urlFoto})});case h:return Object(d.a)(Object(d.a)({},s),{},{isLoggedIn:i.payload.data.isLoggedIn});case m:return Object(d.a)(Object(d.a)({},s),{},{usuario:Object(d.a)(Object(d.a)({},s.usuario),{},{password:i.payload.data})});case O:return Object(d.a)(Object(d.a)({},s),{},{usuario:Object(d.a)(Object(d.a)({},s.usuario),{},{email:i.payload.data})});case x:return console.log("llega al reducer "+i.payload.data.showError),Object(d.a)(Object(d.a)({},s),{},{modalError:i.payload.data.modalError});default:return s}}}),ee=window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,te=[Y.a],re=Object(W.d)(Z,ee(W.a.apply(void 0,te)));r(104),r(105),r(127);a.a.render(Object(P.jsx)(l.a,{store:re,children:Object(P.jsx)(X,{})}),document.querySelector("#root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.3cf79a5c.chunk.js.map