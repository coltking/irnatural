var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));import{a as l,r as d,u,j as p,M as m,b as h,F as g,B as y,t as f,C as v,c as C,d as b,R as S,P as x,e as w,N as T,f as E,g as N,h as R,T as k,i as _,S as O,k as I,l as A,m as D,n as P,o as G,p as L,q as j,s as q,v as F,w as U}from"./vendor.1e35437e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const H="https://git.heroku.com/irnaturaldb.git",M=({idCheck:e,initialMount:t,initialConcept:a,CloseModal:r,modalState:n})=>{const[o,i]=d.exports.useState({mount:0,concept:""}),v=e=>{e.preventDefault(),i(s(c({},o),{[e.target.name]:e.target.value}))},C=u();return d.exports.useEffect((()=>{i({mount:t,concept:a})}),[t,a]),p(m,{show:n,onHide:r,dialogClassName:"d-flex",children:[h(m.Header,{closeButton:!0,children:h(m.Title,{children:"EDITAR ENTRADA"})}),p(m.Body,{children:[h(g.Control,{type:"text",name:"concept",value:o.concept,onChange:v}),h(g.Control,{type:"number",name:"mount",value:o.mount,onChange:v})]}),p(m.Footer,{children:[h(y,{variant:"secondary",onClick:()=>{i({mount:0,concept:""}),r()},children:"Cancelar"}),h(y,{variant:"primary",onClick:()=>{t<1&&o.mount<1||t>=1&&o.mount>=1?(C(((e,t,a)=>r=>{const n=localStorage.getItem("token");l.put(H+"/check/"+e,{concepto:t,entry:a},{withCredentials:!0,headers:{Authorization:"Bearer "+n}}).then((e=>{r({type:"CHECK_UPDATED"})}))})(e,o.concept,o.mount)),i({mount:0,concept:""}),r()):f(t<1?"El valor no puede ser positivo.":"El valor no puede ser negativo.")},children:"Guardar Cambios"})]})]})};const z=()=>e=>{l.get(H+"/products",{withCredentials:!0}).then((t=>{e({type:"SETTING_PRODUCTS",payload:t.data})})).catch((t=>{"Request failed with status code 401"===t.message&&e(void f("Hubo un error al buscar productos."))}))},B=e=>t=>{t({type:"SETTING_PROGRESS",payload:e})};function K({img:e,title:t,description:a,price:r,edit:n=!1,quantity:o}){const i=u();return p(v,{style:{width:"18rem",margin:"10px"},children:[h(v.Img,{variant:"top",src:e}),p(v.Body,{children:[h(v.Title,{children:t}),o?p(v.Subtitle,{className:"mb-4 text-muted",children:["Cantidad: ",o]}):void 0,h(v.Text,{children:a}),p(v.Footer,{className:"text-center",children:[p(y,{variant:"light",disabled:!0,children:["$",r]}),h(y,null===n?{variant:"primary",onClick:async()=>{var n;await i((n={img:e,title:t,description:a,price:r},e=>{e({type:"ADD_TO_CART",payload:n})})),setTimeout((()=>i(z())),100)},children:"Agregar al carrito"}:!1===n?{variant:"primary",onClick:async()=>{await i((e=>t=>{t({type:"REMOVE_FROM_CART",payload:e})})(t)),setTimeout((()=>i(z())),100)},children:"Quitar"}:{variant:"primary",onClick:async()=>{f("Coming soon.")},children:"Editar"})]})]})]})}const J=()=>{const[e,t]=d.exports.useState(""),[a,r]=d.exports.useState(!1),[n,o]=d.exports.useState(null),[i,c]=d.exports.useState(null),[s,m]=d.exports.useState(null),[f,v]=d.exports.useState(null);d.exports.useState(null);const[w,T]=d.exports.useState(null),[E,N]=d.exports.useState(""),[R,k]=d.exports.useState(0),_=u(),O=C((e=>e.userReducer.user.name)),I=C((e=>e.homeReducer.products)),A=C((e=>e.homeReducer.progress));return d.exports.useEffect((()=>{_(z())}),[]),p(b,{className:"justify-content-center",children:[h(M,{idProduct:n,initialPrice:i,initialImg:f,initialDescription:s,CloseModal:()=>{r(!a),setTimeout((()=>_(z())),200)},modalState:a}),h(S,{className:"justify-content-center",children:h("h3",{className:"text-center",children:O})}),p(S,{children:["object"==typeof I?I.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!0})},e.title+t))):void 0,h(S,{className:"text-center",children:h(b,{children:"NUEVO PRODUCTO"})}),p(S,{className:"justify-content-center ",children:[h(b,{children:h(g.Control,{className:"text-center",type:"input",value:E,onChange:e=>{e.preventDefault(),N(e.target.value)},placeholder:"ingrese un titulo"})}),h(b,{children:h(g.Control,{className:"text-center",type:"input",value:e,onChange:e=>{e.preventDefault(),t(e.target.value)},placeholder:"ingrese una descripcion"})}),h(b,{children:h(g.Control,{className:"text-center",type:"number",value:R,onChange:e=>{e.preventDefault(),k(e.target.value)},placeholder:"ingrese un precio"})}),p(b,{children:[h(g.Group,{onChange:e=>{return t=e.target.files[0],void T(t);var t},children:h(g.Control,{type:"file",accept:".png,.jpg,.jpeg"})}),h(x,{now:A})]}),h(b,{children:h("fieldset",{className:"text-center",children:h(y,{className:"text-center",variant:"primary",onClick:async()=>{await _(((e,t,a,r)=>async n=>{const o=new FormData;o.append("file",a),o.append("upload_preset","siaovu0b");const i=await l.post("https://api.cloudinary.com/v1_1/invokeromega/image/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress(e){n(B(100*e.loaded/e.total))}}),c=localStorage.getItem("token");await l.post(H+"/products",{title:e,description:t,image:i.data.secure_url,price:r},{withCredentials:!0,headers:{Authorization:"Bearer "+c}}),n(z())})(E,e,w,R)),await t(""),await k(0),await N(""),await t(""),await T(null),await _(z())},children:"AGREGAR"})})})]})]})]})},V=()=>{const e=C((e=>e.homeReducer.products));C((e=>e.homeReducer.cart));const t=u();return d.exports.useEffect((async()=>{await t(z())}),[]),h(b,{children:h(S,{children:"object"==typeof e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{edit:null,title:e.title,description:e.description,img:e.img,price:e.price})},e.title+t))):h("div",{className:"text-center",children:"No hay productos disponibles"})})})},$=()=>{const e=C((e=>e.userReducer.user.name));return h(d.exports.Fragment,{children:h(""===e?V:J,{})})};var Z={particles:{number:{value:200,density:{enable:!0,value_area:561}},color:{value:"#fb4be6"},shape:{type:"circle",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:50,color:"#000000",opacity:.1,width:1},move:{enable:!0,speed:2,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:2e3,size:1e3,duration:2,opacity:8,speed:5},repulse:{distance:400,duration:.4},push:{particles_nb:10},remove:{particles_nb:10}}},retina_detect:!0};function Q(){const e=w(),t=u(),a=C((e=>e.userReducer.user.name)),r=()=>e.push("/");return d.exports.useEffect((()=>{t((e=>{if(localStorage.getItem("token")){const t=localStorage.getItem("user");e({type:"SETTING_USER",payload:JSON.parse(t)})}}))}),[]),h("div",{className:"navContainer",children:p(T,{bg:"light",expand:"lg",children:[h(T.Brand,{style:{marginLeft:"10px"},onClick:r,children:""===a?"IR Cosmetica Natural":a}),h(T.Toggle,{"aria-controls":"basic-navbar-nav"}),h(T.Collapse,{id:"basic-navbar-nav",children:p(E,{className:"me-auto",children:[h(E.Link,{onClick:r,children:"Home"}),h(E.Link,{onClick:()=>e.push("/cart"),children:"Carrito"}),""===a?h(d.exports.Fragment,{children:h(E.Link,{onClick:()=>e.push("/login"),children:"Iniciar sesion"})}):h(E.Link,{onClick:()=>{t((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e({type:"LOGOUT"})}))},children:"Cerrar sesion"})]})})]})})}function X(){const[e,t]=d.exports.useState({email:"",password:""}),a=a=>{a.preventDefault(),t(s(c({},e),{[a.target.name]:a.target.value}))},r=u(),n=w();return p(d.exports.Fragment,{children:[h("h5",{className:"text-center  mt-5",children:"INICIAR SESION"}),p(g,{onSubmit:t=>{var a;t.preventDefault(),a=e.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?""!==e.password?(r(((e,t)=>async a=>{const{data:r}=await await l.post(H+"/user/login",{email:e,password:t},{withCredentials:!0});console.log("login",r),r.token&&(localStorage.setItem("token",r.token),localStorage.setItem("user",JSON.stringify(r.user)),a({type:"SETTING_USER",payload:r.user}))})(e.email,e.password)),setTimeout((()=>n.push("/")),200)):f("Todos los campos son obligatorios."):f("Email invalido.")},children:[p(g.Group,{className:"mb-3",children:[h(g.Label,{children:"Email"}),h(g.Control,{type:"text",value:e.email,name:"email",placeholder:"carlos@castañeda.com",onChange:a}),h(g.Label,{children:"Contraseña"}),h(g.Control,{type:"password",name:"password",value:e.password,onChange:a})]}),h("div",{className:"d-grid gap-2",children:h(y,{variant:"success",type:"submit",size:"lg",children:"Enviar"})})]})]})}function Y(){const e=C((e=>e.homeReducer.cart)),[t,a]=d.exports.useState("Hola, queria hacerte un pedido de:\n"),[r,n]=d.exports.useState(""),o=u();function i(e){n("https://maps.google.com/?q="+e.coords.latitude+","+e.coords.longitude)}const c={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function s(){f("no pudimos acceder a tu ubicacion, escribenos tu direccion manualmente por wsp!")}d.exports.useEffect((async()=>{await navigator.geolocation.watchPosition(i,s,c)}),[]);return p(d.exports.Fragment,{children:[h(S,{children:e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!1,quantity:e.quantity})},e.title+t))):void 0}),p(S,{children:[h(b,{className:"text-center",children:p("h3",{children:["Total: $",e.reduce(((e,t)=>e+t.price*t.quantity),0)]})}),h(b,{className:"text-center",children:h(y,{variant:"success",onClick:async()=>{const a=e.reduce(((e,t)=>e+t.quantity+" "+t.title+"\n"),"");window.open("https://wa.me/543417197294/?text="+encodeURI(t+a+r))},children:"Pedir por whatsapp"})}),h(b,{className:"text-center",children:h(y,{variant:"danger",onClick:()=>{o((e=>{e({type:"CLEAN_CART"})}))},children:"Vaciar carrito"})})]})]})}function W(){return p(N.Fragment,{children:[p(R,{children:[h(Q,{}),h(k,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),h("div",{className:"GeneralContainer",children:h(_,{className:"ContentContainer",children:p(O,{children:[h(I,{path:"/user",component:J}),h(I,{path:"/login",component:X}),h(I,{path:"/cart",component:Y}),h(I,{exact:!0,path:"/",component:$}),h(A,{from:"*",to:"/"})]})})})]}),h(D,{params:Z})]})}const ee={user:{name:"",email:""},balance:0},te={products:[],progress:0,cart:[]};const ae=G(P({userReducer:(e=ee,t)=>{switch(t.type){case"LOGOUT":return s(c({},e),{user:{name:"",email:""}});case"SETTING_USER":return s(c({},e),{user:t.payload});case"CHECK_UPDATED":return c({},e);case"SETTING_USER_CHECKS":return s(c({},e),{user:s(c({},e.user),{checks:t.payload.checks}),balance:t.payload.balance});case"CHECK_DELETED":default:return c({},e)}},homeReducer:(e=te,t)=>{switch(t.type){case"CLEAN_CART":return s(c({},e),{cart:[]});case"REMOVE_FROM_CART":const a=e.cart.findIndex((e=>{if(e.title===t.payload)return!0}));if(e.cart[a].quantity>1)return e.cart[a].quantity--,s(c({},e),{cart:[...e.cart]});{const a=e.cart.filter((e=>e.title!==t.payload));return s(c({},e),{cart:a})}case"SETTING_CART":return s(c({},e),{cart:t.payload});case"ADD_TO_CART":console.log("in");const r=e.cart.findIndex((e=>{if(console.log("product: ",e),e.title===t.payload.title)return!0}));return console.log("index: ",r),-1!==r?(e.cart[r].quantity=e.cart[r].quantity+1,console.log("state: ",e),c({},e)):(t.payload.quantity=1,s(c({},e),{cart:[...e.cart,t.payload]}));case"SETTING_PRODUCTS":case"SETTING_PROGRESS":return s(c({},e),{products:t.payload});default:return c({},e)}}}),function(){try{const e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(e){return void console.warn(e)}}(),L(j(q)));ae.subscribe((()=>function(e){try{const t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(t){console.warn(t)}}(ae.getState()))),F.render(h(U,{store:ae,children:h(N.StrictMode,{children:h(W,{})})}),document.getElementById("root"));
