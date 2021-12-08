var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));import{a as l,r as d,u,j as p,M as m,b as h,F as g,B as y,t as f,c as C,C as v,R as S,d as w,e as T,P as b,N as x,f as E,g as N,H as R,T as k,h as O,S as I,i as A,k as _,l as D,m as P,n as L,o as j,p as G,q as H,s as q}from"./vendor.44a3f253.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const F="https://irnaturaldb.herokuapp.com/",U=({idCheck:e,initialMount:t,initialConcept:a,CloseModal:r,modalState:n})=>{const[o,i]=d.exports.useState({mount:0,concept:""}),C=e=>{e.preventDefault(),i(s(c({},o),{[e.target.name]:e.target.value}))},v=u();return d.exports.useEffect((()=>{i({mount:t,concept:a})}),[t,a]),p(m,{show:n,onHide:r,dialogClassName:"d-flex",children:[h(m.Header,{closeButton:!0,children:h(m.Title,{children:"EDITAR ENTRADA"})}),p(m.Body,{children:[h(g.Control,{type:"text",name:"concept",value:o.concept,onChange:C}),h(g.Control,{type:"number",name:"mount",value:o.mount,onChange:C})]}),p(m.Footer,{children:[h(y,{variant:"secondary",onClick:()=>{i({mount:0,concept:""}),r()},children:"Cancelar"}),h(y,{variant:"primary",onClick:()=>{t<1&&o.mount<1||t>=1&&o.mount>=1?(v(((e,t,a)=>r=>{const n=localStorage.getItem("token");l.put(F+"/check/"+e,{concepto:t,entry:a},{headers:{Authorization:"Bearer "+n}}).then((e=>{r({type:"CHECK_UPDATED"})}))})(e,o.concept,o.mount)),i({mount:0,concept:""}),r()):f(t<1?"El valor no puede ser positivo.":"El valor no puede ser negativo.")},children:"Guardar Cambios"})]})]})};const M=e=>{f(e)},z=()=>e=>{l.get(F+"/products",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((t=>{console.log("res.data",t.data),e({type:"SETTING_PRODUCTS",payload:t.data})})).catch((t=>{"Request failed with status code 401"===t.message&&e(M("Hubo un error al buscar productos."))}))},B=e=>t=>{t({type:"SETTING_PROGRESS",payload:e})};function K({id:e,img:t,title:a,description:r,price:n,edit:o=!1,quantity:i}){const c=u();C();const s=async e=>{c((e=>t=>{const a=localStorage.getItem("token");l.defaults.headers.common.Authorization="Bearer "+a,l.delete(F+"/products/"+e,{headers:{"Content-Type":"application/json"}}).then((e=>{200===e.status?(t(M("Producto eliminado.")),t(z())):t(M("Hubo un error al eliminar el producto."))})).catch((e=>{"Request failed with status code 401"===e.message&&t(M("Hubo un error al eliminar el producto."))}))})(e))};return p(v,{style:{width:"18rem",margin:"10px"},children:[h(v.Img,{variant:"top",src:t,onClick:()=>{}}),p(v.Body,{children:[h(v.Title,{children:a}),p(v.Footer,{className:"text-center",children:[i&&p(v.Subtitle,{className:"mb-4 left",children:["Cantidad: ",i," ",h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart",viewBox:"0 0 16 16",children:h("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})]}),p(S,{children:[p(y,{variant:"light",disabled:!0,children:["$",n]}),null===o?h(y,{variant:"primary",onClick:async()=>{var e;await c((e={img:t,title:a,description:r,price:n},t=>{t({type:"ADD_TO_CART",payload:e})})),setTimeout((()=>c(z())),100)},children:"Agregar al carrito"}):!1===o?h(y,{variant:"primary",onClick:async()=>{await c((e=>t=>{t({type:"REMOVE_FROM_CART",payload:e})})(a)),setTimeout((()=>c(z())),100)},children:"Quitar"}):p(w,{children:[h(y,{variant:"primary",onClick:async()=>{f("Coming soon.")},children:"Editar"}),h(y,{variant:"danger",onClick:()=>s(e),children:"Eliminar"})]})]})]})]})]})}const J=()=>{const[e,t]=d.exports.useState(""),[a,r]=d.exports.useState(!1),[n,o]=d.exports.useState(null),[i,c]=d.exports.useState(null),[s,m]=d.exports.useState(null),[f,C]=d.exports.useState(null);d.exports.useState(null);const[v,x]=d.exports.useState(null),[E,N]=d.exports.useState(""),[R,k]=d.exports.useState(0),O=u(),I=T((e=>e.userReducer.user.name)),A=T((e=>e.homeReducer.products)),_=T((e=>e.homeReducer.progress));return d.exports.useEffect((()=>{O(z())}),[]),p(w,{className:"justify-content-center",children:[h(U,{idProduct:n,initialPrice:i,initialImg:f,initialDescription:s,CloseModal:()=>{r(!a),setTimeout((()=>O(z())),200)},modalState:a}),h(S,{className:"justify-content-center",children:h("h3",{className:"text-center",children:I})}),p(S,{children:["object"==typeof A?A.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{id:e.idProduct,title:e.title,description:e.description,img:e.img,price:e.price,edit:!0})},e.title+t))):void 0,h(S,{className:"text-center",children:h(w,{children:"NUEVO PRODUCTO"})}),p(S,{className:"justify-content-center ",children:[h(w,{children:h(g.Control,{className:"text-center",type:"input",value:E,onChange:e=>{e.preventDefault(),N(e.target.value)},placeholder:"Titulo"})}),h(w,{children:h(g.Control,{className:"text-center",type:"input",value:e,onChange:e=>{e.preventDefault(),t(e.target.value)},placeholder:"Descripcion"})}),h(w,{children:h(g.Control,{className:"text-center",type:"number",value:R,onChange:e=>{e.preventDefault(),k(e.target.value)},placeholder:"Precio"})}),p(w,{children:[h(g.Group,{onChange:e=>{return t=e.target.files[0],void x(t);var t},children:h(g.Control,{type:"file",accept:".png,.jpg,.jpeg"})}),h(b,{now:_})]}),h(w,{children:h("fieldset",{className:"text-center",children:h(y,{className:"text-center",variant:"primary",onClick:async()=>{await O(((e,t,a,r)=>async n=>{const o=new FormData;o.append("file",a),o.append("upload_preset","siaovu0b");const i=await l.post("https://api.cloudinary.com/v1_1/invokeromega/image/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress(e){n(B(100*e.loaded/e.total))}}),c=localStorage.getItem("token");l.defaults.headers.common.Authorization="Bearer "+c,await l.post(F+"/products",{title:e,description:t,image:i.data.secure_url,price:r},{headers:{"Content-Type":"application/json"}}),n(z())})(E,e,v,R)),await t(""),await k(0),await N(""),await t(""),await x(null),await O(z())},children:"AGREGAR"})})})]})]})]})},V=()=>{const e=T((e=>e.homeReducer.products));T((e=>e.homeReducer.cart));const t=u();return d.exports.useEffect((async()=>{await t(z())}),[]),console.log(e),h(w,{children:h(S,{children:"object"==typeof e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{id:e.idProduct,edit:null,title:e.title,description:e.description,img:e.img,price:e.price})},e.title+t))):h("div",{className:"text-center",children:"No hay productos disponibles"})})})},$=()=>{const e=T((e=>e.userReducer.user.name));return h(d.exports.Fragment,{children:h(""===e?V:J,{})})};function Z(){const e=C(),t=u(),a=T((e=>e.userReducer.user.name)),r=()=>e.push("/");return d.exports.useEffect((()=>{t((e=>{if(localStorage.getItem("token")){const t=localStorage.getItem("user");e({type:"SETTING_USER",payload:JSON.parse(t)})}}))}),[]),h("div",{className:"navContainer",children:p(x,{bg:"light",expand:"lg",children:[h(x.Brand,{style:{marginLeft:"10px"},onClick:r,children:""===a?"IR Cosmetica Natural":a}),h(x.Toggle,{"aria-controls":"basic-navbar-nav"}),h(x.Collapse,{id:"basic-navbar-nav",children:p(E,{className:"me-auto",children:[h(E.Link,{onClick:r,children:"Home"}),h(E.Link,{onClick:()=>e.push("/cart"),children:"Carrito"}),""===a?h(d.exports.Fragment,{children:h(E.Link,{onClick:()=>e.push("/login"),children:"Iniciar sesion"})}):h(E.Link,{onClick:()=>{t((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e({type:"LOGOUT"})}))},children:"Cerrar sesion"})]})})]})})}function Q(){const[e,t]=d.exports.useState({email:"",password:""}),a=a=>{a.preventDefault(),t(s(c({},e),{[a.target.name]:a.target.value}))},r=u(),n=C();return p(d.exports.Fragment,{children:[h("h5",{className:"text-center  mt-5",children:"INICIAR SESION"}),p(g,{onSubmit:t=>{var a;t.preventDefault(),a=e.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?""!==e.password?(r(((e,t)=>async a=>{const{data:r}=await(await l.post(F+"/user/login",{email:e,password:t},{withCredentials:!0})).data;console.log("login",r),r.token&&(localStorage.setItem("token",r.token),localStorage.setItem("user",JSON.stringify(r.user)),a({type:"SETTING_USER",payload:r.user}))})(e.email,e.password)),setTimeout((()=>n.push("/")),200)):f("Todos los campos son obligatorios."):f("Email invalido.")},children:[p(g.Group,{className:"mb-3",children:[h(g.Label,{children:"Email"}),h(g.Control,{type:"text",value:e.email,name:"email",placeholder:"carlos@castañeda.com",onChange:a}),h(g.Label,{children:"Contraseña"}),h(g.Control,{type:"password",name:"password",value:e.password,onChange:a})]}),h("div",{className:"d-grid gap-2",children:h(y,{variant:"success",type:"submit",size:"lg",children:"Enviar"})})]})]})}function W(){const e=T((e=>e.homeReducer.cart)),[t,a]=d.exports.useState("Hola, queria hacerte un pedido de:\n"),[r,n]=d.exports.useState(""),o=u();function i(e){n("https://maps.google.com/?q="+e.coords.latitude+","+e.coords.longitude)}const c={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function s(){f("no pudimos acceder a tu ubicacion, escribenos tu direccion manualmente por wsp!")}d.exports.useEffect((async()=>{await navigator.geolocation.watchPosition(i,s,c)}),[]);return p(d.exports.Fragment,{children:[h(S,{children:e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(K,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!1,quantity:e.quantity})},e.title+t))):void 0}),p(S,{children:[h(w,{className:"text-center",children:p("h3",{children:["Total: $",e.reduce(((e,t)=>e+t.price*t.quantity),0)]})}),h(w,{className:"text-center",children:h(y,{variant:"success",onClick:async()=>{const a=e.reduce(((e,t)=>e+t.quantity+" "+t.title+"\n"),"");window.open("https://wa.me/543417197294/?text="+encodeURI(t+a+r))},children:"Pedir por whatsapp"})}),h(w,{className:"text-center",children:h(y,{variant:"danger",onClick:()=>{o((e=>{e({type:"CLEAN_CART"})}))},children:"Vaciar carrito"})})]})]})}function X(){const e=window.innerWidth;return console.log(e),h(N.Fragment,{children:p(R,{basename:"/",children:[h(Z,{}),h(k,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),h("div",{className:"GeneralContainer",children:h(O,{className:"ContentContainer",children:p(I,{children:[h(A,{path:"/user",component:J}),h(A,{path:"/login",component:Q}),h(A,{path:"/cart",component:W}),h(A,{exact:!0,path:"/",component:$}),h(_,{from:"*",to:"/"})]})})})]})})}const Y={user:{name:"",email:""},balance:0},ee={products:[],progress:0,cart:[]};const te=P(D({userReducer:(e=Y,t)=>{switch(t.type){case"LOGOUT":return s(c({},e),{user:{name:"",email:""}});case"SETTING_USER":return s(c({},e),{user:t.payload});case"CHECK_UPDATED":return c({},e);case"SETTING_USER_CHECKS":return s(c({},e),{user:s(c({},e.user),{checks:t.payload.checks}),balance:t.payload.balance});case"CHECK_DELETED":default:return c({},e)}},homeReducer:(e=ee,t)=>{switch(t.type){case"CLEAN_CART":return s(c({},e),{cart:[]});case"REMOVE_FROM_CART":const a=e.cart.findIndex((e=>{if(e.title===t.payload)return!0}));if(e.cart[a].quantity>1)return e.cart[a].quantity--,s(c({},e),{cart:[...e.cart]});{const a=e.cart.filter((e=>e.title!==t.payload));return s(c({},e),{cart:a})}case"SETTING_CART":return s(c({},e),{cart:t.payload});case"ADD_TO_CART":console.log("in");const r=e.cart.findIndex((e=>{if(console.log("product: ",e),e.title===t.payload.title)return!0}));return console.log("index: ",r),-1!==r?(e.cart[r].quantity=e.cart[r].quantity+1,console.log("state: ",e),c({},e)):(t.payload.quantity=1,s(c({},e),{cart:[...e.cart,t.payload]}));case"SETTING_PRODUCTS":case"SETTING_PROGRESS":return s(c({},e),{products:t.payload});default:return c({},e)}}}),function(){try{const e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(e){return void console.warn(e)}}(),L(j(G)));te.subscribe((()=>function(e){try{const t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(t){console.warn(t)}}(te.getState()))),H.render(h(q,{store:te,children:h(N.StrictMode,{children:h(X,{})})}),document.getElementById("root"));
