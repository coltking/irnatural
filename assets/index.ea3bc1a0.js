var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));import{a as l,r as d,u as p,j as u,M as m,b as h,F as g,B as y,t as C,c as f,C as v,R as T,d as S,e as w,P as b,N as x,f as E,g as N,h as R,H as k,T as O,i as A,S as I,k as _,l as j,m as D,n as P,o as F,p as G,q as U,s as L,v as H}from"./vendor.b9414b88.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const q="https://irnaturaldb.herokuapp.com",M=({idCheck:e,initialMount:t,initialConcept:a,CloseModal:r,modalState:n})=>{const[o,i]=d.exports.useState({mount:0,concept:""}),f=e=>{e.preventDefault(),i(s(c({},o),{[e.target.name]:e.target.value}))},v=p();return d.exports.useEffect((()=>{i({mount:t,concept:a})}),[t,a]),u(m,{show:n,onHide:r,dialogClassName:"d-flex",children:[h(m.Header,{closeButton:!0,children:h(m.Title,{children:"EDITAR ENTRADA"})}),u(m.Body,{children:[h(g.Control,{type:"text",name:"concept",value:o.concept,onChange:f}),h(g.Control,{type:"number",name:"mount",value:o.mount,onChange:f})]}),u(m.Footer,{children:[h(y,{variant:"secondary",onClick:()=>{i({mount:0,concept:""}),r()},children:"Cancelar"}),h(y,{variant:"primary",onClick:()=>{t<1&&o.mount<1||t>=1&&o.mount>=1?(v(((e,t,a)=>r=>{const n=localStorage.getItem("token");l.put(q+"/check/"+e,{concepto:t,entry:a},{withCredentials:!0,headers:{Accept:"application/json",Authorization:"Bearer "+n,"Content-Type":"application/json;charset=UTF-8"}}).then((e=>{r({type:"CHECK_UPDATED"})}))})(e,o.concept,o.mount)),i({mount:0,concept:""}),r()):C(t<1?"El valor no puede ser positivo.":"El valor no puede ser negativo.")},children:"Guardar Cambios"})]})]})};const z=e=>{C(e)},B=()=>e=>{l.get(q+"/products",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((t=>{console.log("res.data",t.data),e({type:"SETTING_PRODUCTS",payload:t.data})})).catch((t=>{"Request failed with status code 401"===t.message&&e(z("Hubo un error al buscar productos."))}))},$=e=>t=>{t({type:"SETTING_PROGRESS",payload:e})},K=e=>t=>{t({type:"ADD_TO_CART",payload:e}),t(z("Producto agregado al carrito."))};function J({id:e,img:t,title:a,description:r,price:n,edit:o=!1,quantity:i}){const c=p(),s=f(),d=async e=>{c((e=>t=>{const a=localStorage.getItem("token");l.defaults.headers.common.Authorization="Bearer "+a,l.delete(q+"/products/"+e,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((e=>{200===e.status?(t(z("Producto eliminado.")),t(B())):t(z("Hubo un error al eliminar el producto."))})).catch((e=>{"Request failed with status code 401"===e.message&&t(z("Hubo un error al eliminar el producto."))}))})(e))};return u(v,{style:{width:"18rem",margin:"10px"},children:[h(v.Img,{variant:"top",src:t,onClick:()=>{s.push(`/product/${e}`)}}),u(v.Body,{children:[h(v.Title,{children:a}),u(v.Footer,{className:"text-center",children:[i&&u(v.Subtitle,{className:"mb-4 left",children:["Cantidad: ",i," ",h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart",viewBox:"0 0 16 16",children:h("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})]}),u(T,{children:[u(y,{variant:"light",disabled:!0,children:["$",n]}),null===o?h(y,{variant:"primary",onClick:async()=>{await c(K({img:t,title:a,description:r,price:n})),setTimeout((()=>c(B())),100)},children:"Agregar al carrito"}):!1===o?h(y,{variant:"primary",onClick:async()=>{await c((e=>t=>{t({type:"REMOVE_FROM_CART",payload:e})})(a)),setTimeout((()=>c(B())),100)},children:"Quitar"}):u(S,{children:[h(y,{variant:"primary",onClick:async()=>{C("Coming soon.")},children:"Editar"}),h(y,{variant:"danger",onClick:()=>d(e),children:"Eliminar"})]})]})]})]})]})}const V=()=>{const[e,t]=d.exports.useState(""),[a,r]=d.exports.useState(!1),[n,o]=d.exports.useState(null),[i,c]=d.exports.useState(null),[s,m]=d.exports.useState(null),[C,f]=d.exports.useState(null);d.exports.useState(null);const[v,x]=d.exports.useState(null),[E,N]=d.exports.useState(""),[R,k]=d.exports.useState(0),O=p(),A=w((e=>e.userReducer.user.name)),I=w((e=>e.homeReducer.products)),_=w((e=>e.homeReducer.progress));return d.exports.useEffect((()=>{O(B())}),[]),u(S,{className:"justify-content-center",children:[h(M,{idProduct:n,initialPrice:i,initialImg:C,initialDescription:s,CloseModal:()=>{r(!a),setTimeout((()=>O(B())),200)},modalState:a}),h(T,{className:"justify-content-center",children:h("h3",{className:"text-center",children:A})}),u(T,{children:["object"==typeof I?I.map(((e,t)=>h(d.exports.Fragment,{children:h(J,{id:e.idProduct,title:e.title,description:e.description,img:e.img,price:e.price,edit:!0})},e.title+t))):void 0,h(T,{className:"text-center",children:h(S,{children:"NUEVO PRODUCTO"})}),u(T,{className:"justify-content-center ",children:[h(S,{children:h(g.Control,{className:"text-center",type:"input",value:E,onChange:e=>{e.preventDefault(),N(e.target.value)},placeholder:"Titulo"})}),h(S,{children:h(g.Control,{className:"text-center",type:"input",value:e,onChange:e=>{e.preventDefault(),t(e.target.value)},placeholder:"Descripcion"})}),h(S,{children:h(g.Control,{className:"text-center",type:"number",value:R,onChange:e=>{e.preventDefault(),k(e.target.value)},placeholder:"Precio"})}),u(S,{children:[h(g.Group,{onChange:e=>{return t=e.target.files[0],void x(t);var t},children:h(g.Control,{type:"file",accept:".png,.jpg,.jpeg"})}),h(b,{now:_})]}),h(S,{children:h("fieldset",{className:"text-center",children:h(y,{className:"text-center",variant:"primary",onClick:async()=>{await O(((e,t,a,r)=>async n=>{const o=new FormData;o.append("file",a),o.append("upload_preset","siaovu0b");const i=await l.post("https://api.cloudinary.com/v1_1/invokeromega/image/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress(e){n($(100*e.loaded/e.total))}}),c=localStorage.getItem("token");l.defaults.headers.common.Authorization="Bearer "+c,await l.post(q+"/products",{title:e,description:t,image:i.data.secure_url,price:r},{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),n(B())})(E,e,v,R)),await t(""),await k(0),await N(""),await t(""),await x(null),await O(B())},children:"AGREGAR"})})})]})]})]})},Z=()=>{const e=w((e=>e.homeReducer.products));w((e=>e.homeReducer.cart));const t=p();return d.exports.useEffect((async()=>{await t(B())}),[]),console.log(e),h(S,{children:h(T,{className:"justify-content-center",children:"object"==typeof e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(J,{id:e.idProduct,edit:null,title:e.title,description:e.description,img:e.img,price:e.price})},e.title+t))):h("div",{className:"text-center",children:"No hay productos disponibles"})})})},Q=()=>{const e=w((e=>e.userReducer.user.name));return h(d.exports.Fragment,{children:h(""===e?Z:V,{})})};function W(){const e=f(),t=p(),a=w((e=>e.userReducer.user.name)),r=()=>e.push("/");return d.exports.useEffect((()=>{t((e=>{if(localStorage.getItem("token")){const t=localStorage.getItem("user");e({type:"SETTING_USER",payload:JSON.parse(t)})}}))}),[]),h("div",{className:"navContainer",children:u(x,{bg:"light",expand:"lg",children:[h(x.Brand,{style:{marginLeft:"10px"},onClick:r,children:""===a?"IR Cosmetica Natural":a}),h(x.Toggle,{"aria-controls":"basic-navbar-nav"}),h(x.Collapse,{id:"basic-navbar-nav",children:u(E,{className:"me-auto",children:[h(E.Link,{onClick:r,children:"Home"}),h(E.Link,{onClick:()=>e.push("/cart"),children:"Carrito"}),""===a?h(d.exports.Fragment,{children:h(E.Link,{onClick:()=>e.push("/login"),children:"Iniciar sesion"})}):h(E.Link,{onClick:()=>{t((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e({type:"LOGOUT"})}))},children:"Cerrar sesion"})]})})]})})}function X(){const[e,t]=d.exports.useState({email:"",password:""}),a=a=>{a.preventDefault(),t(s(c({},e),{[a.target.name]:a.target.value}))},r=p(),n=f();return u(d.exports.Fragment,{children:[h("h5",{className:"text-center  mt-5",children:"INICIAR SESION"}),u(g,{onSubmit:t=>{var a;t.preventDefault(),a=e.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?""!==e.password?(r(((e,t)=>async a=>{const{data:r}=await l.post(q+"/user/login",{email:e,password:t},{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}});console.log("login",r),r.token&&(localStorage.setItem("token",r.token),localStorage.setItem("user",JSON.stringify(r.user)),a({type:"SETTING_USER",payload:r.user}))})(e.email,e.password)),setTimeout((()=>n.push("/")),2e3)):C("Todos los campos son obligatorios."):C("Email invalido.")},children:[u(g.Group,{className:"mb-3",children:[h(g.Label,{children:"Email"}),h(g.Control,{type:"text",value:e.email,name:"email",placeholder:"carlos@castañeda.com",onChange:a}),h(g.Label,{children:"Contraseña"}),h(g.Control,{type:"password",name:"password",value:e.password,onChange:a})]}),h("div",{className:"d-grid gap-2",children:h(y,{variant:"success",type:"submit",size:"lg",children:"Enviar"})})]})]})}function Y(){const e=w((e=>e.homeReducer.cart)),[t,a]=d.exports.useState("Hola, queria hacerte un pedido de:\n"),[r,n]=d.exports.useState(""),o=p();function i(e){n("https://maps.google.com/?q="+e.coords.latitude+","+e.coords.longitude)}const c={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function s(){C("no pudimos acceder a tu ubicacion, escribenos tu direccion manualmente por wsp!")}d.exports.useEffect((async()=>{await navigator.geolocation.watchPosition(i,s,c)}),[]);return u(d.exports.Fragment,{children:[h(T,{className:"justify-content-center",children:e?e.map(((e,t)=>h(d.exports.Fragment,{children:h(J,{title:e.title,description:e.description,img:e.img,price:e.price,edit:!1,quantity:e.quantity})},e.title+t))):void 0}),u(T,{children:[h(S,{className:"text-center",children:u("h3",{children:["Total: $",e.reduce(((e,t)=>e+t.price*t.quantity),0)]})}),h(S,{className:"text-center",children:h(y,{variant:"success",onClick:async()=>{const a=e.reduce(((e,t)=>e+t.quantity+" "+t.title+"\n"),"");window.open("https://wa.me/543417197294/?text="+encodeURI(t+a+r))},children:"Pedir por whatsapp"})}),h(S,{className:"text-center",children:h(y,{variant:"danger",onClick:()=>{o((e=>{e({type:"CLEAN_CART"})}))},children:"Vaciar carrito"})})]})]})}function ee(){const{id:e}=N(),t=p(),a=w((e=>e.productReducer.product));d.exports.useEffect((()=>{e&&t((e=>t=>{l.get(`https://irnaturaldb.herokuapp.com/products/${e}`).then((e=>{t({type:"GET_PRODUCT",payload:e.data})})).catch((e=>{console.log(e)}))})(e))}),[]);return u(v,{children:[h(v.Img,{variant:"top",src:a.img}),u(v.Body,{children:[h(v.Title,{children:a.name}),h(v.Text,{children:a.description})]}),h(v.Footer,{children:u("small",{className:"text-muted",children:["$",a.price]})}),h(y,{variant:"primary",onClick:async()=>{await t(K({img:img,title:title,description:description,price:price}))},children:"Agregar al carrito"})]})}function te(){const e=window.innerWidth;return console.log(e),h(R.Fragment,{children:u(k,{basename:"/",children:[h(W,{}),h(O,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),h("div",{className:"GeneralContainer",children:h(A,{className:"ContentContainer",children:u(I,{children:[h(_,{path:"/user",component:V}),h(_,{path:"/login",component:X}),h(_,{path:"/cart",component:Y}),h(_,{exact:!0,path:"/",component:Q}),h(_,{path:"/product/:id",component:ee}),h(j,{from:"*",to:"/"})]})})})]})})}const ae={user:{name:"",email:""},balance:0},re={products:[],progress:0,cart:[]},ne={products:[]};const oe=P(D({userReducer:(e=ae,t)=>{switch(t.type){case"LOGOUT":return s(c({},e),{user:{name:"",email:""}});case"SETTING_USER":return s(c({},e),{user:t.payload});case"CHECK_UPDATED":return c({},e);case"SETTING_USER_CHECKS":return s(c({},e),{user:s(c({},e.user),{checks:t.payload.checks}),balance:t.payload.balance});case"CHECK_DELETED":default:return c({},e)}},homeReducer:(e=re,t)=>{switch(t.type){case"CLEAN_CART":return s(c({},e),{cart:[]});case"REMOVE_FROM_CART":const a=e.cart.findIndex((e=>{if(e.title===t.payload)return!0}));if(e.cart[a].quantity>1)return e.cart[a].quantity--,s(c({},e),{cart:[...e.cart]});{const a=e.cart.filter((e=>e.title!==t.payload));return s(c({},e),{cart:a})}case"SETTING_CART":return s(c({},e),{cart:t.payload});case"ADD_TO_CART":console.log("in");const r=e.cart.findIndex((e=>{if(console.log("product: ",e),e.title===t.payload.title)return!0}));return console.log("index: ",r),-1!==r?(e.cart[r].quantity=e.cart[r].quantity+1,console.log("state: ",e),c({},e)):(t.payload.quantity=1,s(c({},e),{cart:[...e.cart,t.payload]}));case"SETTING_PRODUCTS":case"SETTING_PROGRESS":return s(c({},e),{products:t.payload});default:return c({},e)}},productReducer:(e=ne,t)=>{switch(t.type){case"GET_PRODUCT":return s(c({},e),{product:t.payload});default:return e}}}),function(){try{const e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(e){return void console.warn(e)}}(),F(G(U)));oe.subscribe((()=>function(e){try{const t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(t){console.warn(t)}}(oe.getState()))),L.render(h(H,{store:oe,children:h(R.StrictMode,{children:h(te,{})})}),document.getElementById("root"));
