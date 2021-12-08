var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,c=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&i(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{a as l,r as d,u,j as p,M as m,b as h,F as g,B as y,t as f,C,c as v,d as S,R as b,P as x,e as w,N as T,f as E,g as N,H as R,T as O,h as k,S as I,i as A,k as _,l as D,m as P,n as G,o as L,p as j,q,s as F}from"./vendor.bfc480e6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const U="https://git.heroku.com/irnaturaldb.git",H=({idCheck:e,initialMount:t,initialConcept:r,CloseModal:a,modalState:n})=>{const[o,i]=d.exports.useState({mount:0,concept:""}),C=e=>{e.preventDefault(),i(s(c({},o),{[e.target.name]:e.target.value}))},v=u();return d.exports.useEffect((()=>{i({mount:t,concept:r})}),[t,r]),p(m,{show:n,onHide:a,dialogClassName:"d-flex",children:[h(m.Header,{closeButton:!0,children:h(m.Title,{children:"EDITAR ENTRADA"})}),p(m.Body,{children:[h(g.Control,{type:"text",name:"concept",value:o.concept,onChange:C}),h(g.Control,{type:"number",name:"mount",value:o.mount,onChange:C})]}),p(m.Footer,{children:[h(y,{variant:"secondary",onClick:()=>{i({mount:0,concept:""}),a()},children:"Cancelar"}),h(y,{variant:"primary",onClick:()=>{t<1&&o.mount<1||t>=1&&o.mount>=1?(v(((e,t,r)=>a=>{const n=localStorage.getItem("token");l.put(U+"/check/"+e,{concepto:t,entry:r},{withCredentials:!0,headers:{Authorization:"Bearer "+n}}).then((e=>{a({type:"CHECK_UPDATED"})}))})(e,o.concept,o.mount)),i({mount:0,concept:""}),a()):f(t<1?"El valor no puede ser positivo.":"El valor no puede ser negativo.")},children:"Guardar Cambios"})]})]})};const M=()=>e=>{l.get(U+"/products",{withCredentials:!0}).then((t=>{e({type:"SETTING_PRODUCTS",payload:t.data})})).catch((t=>{"Request failed with status code 401"===t.message&&e(void f("Hubo un error al buscar productos."))}))},B=e=>t=>{t({type:"SETTING_PROGRESS",payload:e})};function z({img:e,title:t,description:r,price:a,edit:n=!1,quantity:o}){const i=u();return p(C,{style:{width:"18rem",margin:"10px"},children:[h(C.Img,{variant:"top",src:e}),p(C.Body,{children:[h(C.Title,{children:t}),h(C.Text,{children:r}),o&&p(C.Subtitle,{className:"mb-4 left",children:["Cantidad: ",o," ",h("i",{class:"bi bi-cart right"})]}),p(C.Footer,{className:"text-center",children:[p(y,{variant:"light",disabled:!0,children:["$",a]}),h(y,null===n?{variant:"primary",onClick:async()=>{var n;await i((n={img:e,title:t,description:r,price:a},e=>{e({type:"ADD_TO_CART",payload:n})})),setTimeout((()=>i(M())),100)},children:"Agregar al carrito"}:!1===n?{variant:"primary",onClick:async()=>{await i((e=>t=>{t({type:"REMOVE_FROM_CART",payload:e})})(t)),setTimeout((()=>i(M())),100)},children:"Quitar"}:{variant:"primary",onClick:async()=>{f("Coming soon.")},children:"Editar"})]})]})]})}const K=()=>{const[e,t]=d.exports.useState(""),[r,a]=d.exports.useState(!1),[n,o]=d.exports.useState(null),[i,c]=d.exports.useState(null),[s,m]=d.exports.useState(null),[f,C]=d.exports.useState(null);d.exports.useState(null);const[w,T]=d.exports.useState(null),[E,N]=d.exports.useState(""),[R,O]=d.exports.useState(0),k=u(),I=v((e=>e.userReducer.user.name)),A=v((e=>e.homeReducer.products)),_=v((e=>e.homeReducer.progress));return d.exports.useEffect((()=>{k(M())}),[]),p(S,{className:"justify-content-center",children:[h(H,{idProduct:n,initialPrice:i,initialImg:f,initialDescription:s,CloseModal:()=>{a(!r),setTimeout((()=>k(M())),200)},modalState:r}),h(b,{className:"justify-content-center",children:h("h3",{className:"text-center",children:I})}),p(b,{children:["object"==typeof A?A.map(((e,t)=>h(d.exports.Fragment,{children:h(z,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!0})},e.title+t))):void 0,h(b,{className:"text-center",children:h(S,{children:"NUEVO PRODUCTO"})}),p(b,{className:"justify-content-center ",children:[h(S,{children:h(g.Control,{className:"text-center",type:"input",value:E,onChange:e=>{e.preventDefault(),N(e.target.value)},placeholder:"ingrese un titulo"})}),h(S,{children:h(g.Control,{className:"text-center",type:"input",value:e,onChange:e=>{e.preventDefault(),t(e.target.value)},placeholder:"ingrese una descripcion"})}),h(S,{children:h(g.Control,{className:"text-center",type:"number",value:R,onChange:e=>{e.preventDefault(),O(e.target.value)},placeholder:"ingrese un precio"})}),p(S,{children:[h(g.Group,{onChange:e=>{return t=e.target.files[0],void T(t);var t},children:h(g.Control,{type:"file",accept:".png,.jpg,.jpeg"})}),h(x,{now:_})]}),h(S,{children:h("fieldset",{className:"text-center",children:h(y,{className:"text-center",variant:"primary",onClick:async()=>{await k(((e,t,r,a)=>async n=>{const o=new FormData;o.append("file",r),o.append("upload_preset","siaovu0b");const i=await l.post("https://api.cloudinary.com/v1_1/invokeromega/image/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress(e){n(B(100*e.loaded/e.total))}}),c=localStorage.getItem("token");await l.post(U+"/products",{title:e,description:t,image:i.data.secure_url,price:a},{withCredentials:!0,headers:{Authorization:"Bearer "+c}}),n(M())})(E,e,w,R)),await t(""),await O(0),await N(""),await t(""),await T(null),await k(M())},children:"AGREGAR"})})})]})]})]})},J=()=>{const e=v((e=>e.homeReducer.products)),t=v((e=>e.homeReducer.cart)),r=u();return d.exports.useEffect((async()=>{await r(M())}),[]),console.log(t),h(S,{children:h(b,{children:"object"==typeof e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(z,{edit:null,title:e.title,description:e.description,img:e.img,price:e.price})},e.title+t))):h("div",{className:"text-center",children:"No hay productos disponibles"})})})},V=()=>{const e=v((e=>e.userReducer.user.name));return h(d.exports.Fragment,{children:h(""===e?J:K,{})})};function $(){const e=w(),t=u(),r=v((e=>e.userReducer.user.name)),a=()=>e.push("/");return d.exports.useEffect((()=>{t((e=>{if(localStorage.getItem("token")){const t=localStorage.getItem("user");e({type:"SETTING_USER",payload:JSON.parse(t)})}}))}),[]),h("div",{className:"navContainer",children:p(T,{bg:"light",expand:"lg",children:[h(T.Brand,{style:{marginLeft:"10px"},onClick:a,children:""===r?"IR Cosmetica Natural":r}),h(T.Toggle,{"aria-controls":"basic-navbar-nav"}),h(T.Collapse,{id:"basic-navbar-nav",children:p(E,{className:"me-auto",children:[h(E.Link,{onClick:a,children:"Home"}),h(E.Link,{onClick:()=>e.push("/cart"),children:"Carrito"}),""===r?h(d.exports.Fragment,{children:h(E.Link,{onClick:()=>e.push("/login"),children:"Iniciar sesion"})}):h(E.Link,{onClick:()=>{t((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e({type:"LOGOUT"})}))},children:"Cerrar sesion"})]})})]})})}function Z(){const[e,t]=d.exports.useState({email:"",password:""}),r=r=>{r.preventDefault(),t(s(c({},e),{[r.target.name]:r.target.value}))},a=u(),n=w();return p(d.exports.Fragment,{children:[h("h5",{className:"text-center  mt-5",children:"INICIAR SESION"}),p(g,{onSubmit:t=>{var r;t.preventDefault(),r=e.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase())?""!==e.password?(a(((e,t)=>async r=>{const{data:a}=await await l.post(U+"/user/login",{email:e,password:t},{withCredentials:!0});console.log("login",a),a.token&&(localStorage.setItem("token",a.token),localStorage.setItem("user",JSON.stringify(a.user)),r({type:"SETTING_USER",payload:a.user}))})(e.email,e.password)),setTimeout((()=>n.push("/")),200)):f("Todos los campos son obligatorios."):f("Email invalido.")},children:[p(g.Group,{className:"mb-3",children:[h(g.Label,{children:"Email"}),h(g.Control,{type:"text",value:e.email,name:"email",placeholder:"carlos@castañeda.com",onChange:r}),h(g.Label,{children:"Contraseña"}),h(g.Control,{type:"password",name:"password",value:e.password,onChange:r})]}),h("div",{className:"d-grid gap-2",children:h(y,{variant:"success",type:"submit",size:"lg",children:"Enviar"})})]})]})}function Q(){const e=v((e=>e.homeReducer.cart)),[t,r]=d.exports.useState("Hola, queria hacerte un pedido de:\n"),[a,n]=d.exports.useState(""),o=u();function i(e){n("https://maps.google.com/?q="+e.coords.latitude+","+e.coords.longitude)}const c={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function s(){f("no pudimos acceder a tu ubicacion, escribenos tu direccion manualmente por wsp!")}d.exports.useEffect((async()=>{await navigator.geolocation.watchPosition(i,s,c)}),[]);return p(d.exports.Fragment,{children:[h(b,{children:e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(z,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!1,quantity:e.quantity})},e.title+t))):void 0}),p(b,{children:[h(S,{className:"text-center",children:p("h3",{children:["Total: $",e.reduce(((e,t)=>e+t.price*t.quantity),0)]})}),h(S,{className:"text-center",children:h(y,{variant:"success",onClick:async()=>{const r=e.reduce(((e,t)=>e+t.quantity+" "+t.title+"\n"),"");window.open("https://wa.me/543417197294/?text="+encodeURI(t+r+a))},children:"Pedir por whatsapp"})}),h(S,{className:"text-center",children:h(y,{variant:"danger",onClick:()=>{o((e=>{e({type:"CLEAN_CART"})}))},children:"Vaciar carrito"})})]})]})}function W(){const e=window.innerWidth;return console.log(e),h(N.Fragment,{children:p(R,{basename:"/",children:[h($,{}),h(O,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),h("div",{className:"GeneralContainer",children:h(k,{className:"ContentContainer",children:p(I,{children:[h(A,{path:"/user",component:K}),h(A,{path:"/login",component:Z}),h(A,{path:"/cart",component:Q}),h(A,{exact:!0,path:"/",component:V}),h(_,{from:"*",to:"/"})]})})})]})})}const X={user:{name:"",email:""},balance:0},Y={products:[],progress:0,cart:[]};const ee=P(D({userReducer:(e=X,t)=>{switch(t.type){case"LOGOUT":return s(c({},e),{user:{name:"",email:""}});case"SETTING_USER":return s(c({},e),{user:t.payload});case"CHECK_UPDATED":return c({},e);case"SETTING_USER_CHECKS":return s(c({},e),{user:s(c({},e.user),{checks:t.payload.checks}),balance:t.payload.balance});case"CHECK_DELETED":default:return c({},e)}},homeReducer:(e=Y,t)=>{switch(t.type){case"CLEAN_CART":return s(c({},e),{cart:[]});case"REMOVE_FROM_CART":const r=e.cart.findIndex((e=>{if(e.title===t.payload)return!0}));if(e.cart[r].quantity>1)return e.cart[r].quantity--,s(c({},e),{cart:[...e.cart]});{const r=e.cart.filter((e=>e.title!==t.payload));return s(c({},e),{cart:r})}case"SETTING_CART":return s(c({},e),{cart:t.payload});case"ADD_TO_CART":console.log("in");const a=e.cart.findIndex((e=>{if(console.log("product: ",e),e.title===t.payload.title)return!0}));return console.log("index: ",a),-1!==a?(e.cart[a].quantity=e.cart[a].quantity+1,console.log("state: ",e),c({},e)):(t.payload.quantity=1,s(c({},e),{cart:[...e.cart,t.payload]}));case"SETTING_PRODUCTS":case"SETTING_PROGRESS":return s(c({},e),{products:t.payload});default:return c({},e)}}}),function(){try{const e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(e){return void console.warn(e)}}(),G(L(j)));ee.subscribe((()=>function(e){try{const t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(t){console.warn(t)}}(ee.getState()))),q.render(h(F,{store:ee,children:h(N.StrictMode,{children:h(W,{})})}),document.getElementById("root"));
