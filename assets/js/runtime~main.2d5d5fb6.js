(()=>{"use strict";var e,a,f,t,r,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=c,o.c=d,e=[],o.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,b=0;b<f.length;b++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](f[b])))?f.splice(b--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(r,c),r},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,f)=>(o.f[f](e,a),a)),[])),o.u=e=>"assets/js/"+({120:"b77b9fde",140:"daa959d0",552:"f4f34a3a",1096:"aca589af",1556:"7b8d6e14",1704:"462746f0",1844:"85522b6d",2144:"fc5fee3b",2260:"302f1705",2392:"6875c492",2408:"d9f32620",2696:"4c53ba3c",2832:"c5d6d2e8",3132:"ee88ad63",3172:"e7a89f2b",3960:"1e4232ab",4088:"0a1ae38f",4116:"7960e450",4204:"1f391b9e",4304:"5e95c892",4658:"5c868d36",4666:"a94703ab",4734:"e273c56f",4976:"a6aa9e1f",4996:"73664a40",5316:"69ad825f",5344:"e763ae9f",5424:"776e9a3b",5512:"814f3328",5536:"7661071f",5544:"b3690172",5584:"9df8090f",5696:"935f2afb",6128:"a322ecac",6268:"18c41134",6328:"0e384e19",6344:"ccc49370",6456:"02728f01",6500:"a7bd4aaa",6752:"17896441",6784:"2dea408f",7028:"9e4087bc",7528:"8717b14a",7652:"393be207",7742:"bc05890f",7764:"c13eb083",8412:"01a85c17",8552:"1df93b7f",8928:"59362658",9160:"93db109d",9576:"14eb3368",9880:"925b3f96"}[e]||e)+"."+{120:"e27cad97",140:"b8c833ba",552:"b5127648",1096:"9d1ea357",1556:"ac5b782b",1704:"d7fc43a4",1824:"3e2740a7",1844:"b091549a",2144:"f10777d3",2260:"c4f2e5f0",2392:"e119dd37",2408:"2961b56b",2696:"d2d78f72",2832:"5d9391d8",3052:"13b76d76",3132:"cef78829",3172:"834f0564",3960:"3770511c",4088:"39d72fa6",4116:"04642132",4204:"2d61e0c1",4304:"8c1a7a74",4552:"7afd9d2d",4658:"024a8d4d",4666:"5ab4e98c",4734:"62aaafb3",4976:"10fb4e94",4996:"f1b31554",5316:"ef00e2e4",5344:"fba4917f",5424:"80d389b6",5512:"c23a1f7d",5536:"d51fd31f",5544:"f2706480",5584:"5209bff3",5696:"50955510",6128:"65657e53",6268:"449ad2af",6328:"1752fb2e",6344:"0f36af96",6456:"31b5c037",6500:"d4783b27",6752:"b2897295",6784:"0a654b5a",7028:"d4729bd5",7528:"c090476f",7652:"4fd99680",7742:"575b8988",7764:"558579a7",8412:"5168b63a",8552:"dbf3bf11",8928:"3815ef15",9160:"65dbdd25",9576:"cf7025fb",9880:"ec6914fb"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="my-website:",o.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/wiki-education/",o.gca=function(e){return e={17896441:"6752",59362658:"8928",b77b9fde:"120",daa959d0:"140",f4f34a3a:"552",aca589af:"1096","7b8d6e14":"1556","462746f0":"1704","85522b6d":"1844",fc5fee3b:"2144","302f1705":"2260","6875c492":"2392",d9f32620:"2408","4c53ba3c":"2696",c5d6d2e8:"2832",ee88ad63:"3132",e7a89f2b:"3172","1e4232ab":"3960","0a1ae38f":"4088","7960e450":"4116","1f391b9e":"4204","5e95c892":"4304","5c868d36":"4658",a94703ab:"4666",e273c56f:"4734",a6aa9e1f:"4976","73664a40":"4996","69ad825f":"5316",e763ae9f:"5344","776e9a3b":"5424","814f3328":"5512","7661071f":"5536",b3690172:"5544","9df8090f":"5584","935f2afb":"5696",a322ecac:"6128","18c41134":"6268","0e384e19":"6328",ccc49370:"6344","02728f01":"6456",a7bd4aaa:"6500","2dea408f":"6784","9e4087bc":"7028","8717b14a":"7528","393be207":"7652",bc05890f:"7742",c13eb083:"7764","01a85c17":"8412","1df93b7f":"8552","93db109d":"9160","14eb3368":"9576","925b3f96":"9880"}[e]||e,o.p+o.u(e)},(()=>{var e={296:0,2176:0};o.f.j=(a,f)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^2(17|9)6$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=o.p+o.u(a),d=new Error;o.l(c,(f=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],b=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(f);n<c.length;n++)r=c[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},f=self.webpackChunkmy_website=self.webpackChunkmy_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();