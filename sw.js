if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.3be79d05.js",revision:null},{url:"assets/index.e697d787.css",revision:null},{url:"assets/pathseg.7edb03bd.js",revision:null},{url:"assets/vendor.7d1a7e03.js",revision:null},{url:"index.html",revision:"31b0181edd31fc49a149a9c62c679d5f"},{url:"registerSW.js",revision:"dc60e43497c0d2fd9c2e421368fcdcd1"},{url:"manifest.webmanifest",revision:"9c566e1bbeba988778cef40c920b4249"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
