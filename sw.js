if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>r(e,c),f={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"600x400icon.jpg",revision:"d7f1d09fa5908a592f407a9b9c9437ea"},{url:"configuraciones.html",revision:"062fd85a860e6ce0dfb0249ce216382b"},{url:"firestore.js",revision:"bb9e92885b3c4c75aa2b345f994adeb3"},{url:"index.html",revision:"41cf23f5b330c91f7c524fd66ccb41f0"},{url:"index.js",revision:"442e937f111356c3b037d438c5b00e53"},{url:"manifest.json",revision:"baadb1036a83ddcfd3705daf028b5461"},{url:"menu.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"style.css",revision:"cb3ad54300381b1a6202c88252bb9535"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
