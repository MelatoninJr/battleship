(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),s=n(645),o=n.n(s)()(a());o.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    height: 15%;\n    background-color: red;\n    flex-shrink: 0;\n}\n.bodycontainer {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n}\n.bodyone {\n    z-index: 3;\n    height: 80%;\n    width: 60%;\n    background-color: white;\n    position: absolute;\n\n}\n.bodytwo {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n    z-index: 2;\n}\n\n.firstboard,\n.secondboard{\n    width: 500px;\n    height: 500px; \n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n.popboard {\n    width: 300px;\n    height: 300px; \n    border: 2px solid black;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n.bodyonecontainer {\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid black;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n}\n\n\n\n.footer {\n    height: 15%;\n    background-color: black;\n    flex-shrink: 0;\n}\n\n\n\n.row,\n.column {\n    flex-grow: 1;\n}\n\n.row {\n    display: flex;\n\n\n}\n\n.column {\n    border: 1px solid black;\n}\n\n.column:hover {\n    background-color: ghostwhite;\n}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=a(p,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=n(s[o]);t[i].references--}for(var c=r(e,a),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:e=>{e.exports=function(e,t){this.otherArray=[],this.create=function(){for(let e=0;e<10;e++){let e=[];for(let t=0;t<10;t++)e.push(0);this.otherArray.push(e)}},this.create(),this.visualcreate=function(e,t){for(let t=0;t<10;t++){const n=document.createElement("div");n.classList.add("row"),e.append(n);for(let e=0;e<10;e++){const r=document.createElement("div");r.classList.add("column"),r.dataset.xaxis=t,r.dataset.yaxis=e,r.value=this.otherArray[t][e],n.append(r)}}},this.nodeCheck=function(e,t,n,r,a){const s=document.querySelector(r).querySelectorAll(".column");for(let r=0;r<s.length;r++)Number(s[r].dataset.xaxis)===e&&Number(s[r].dataset.yaxis)===t&&(s[r].classList.add("ship"),this.otherArray[e][t]=1,s[r].classList.add(a),s[r].style.backgroundColor=n)},this.nodeCheckTwo=function(e,t,n,r,a){const s=document.querySelector(r).querySelectorAll(".column");for(let r=0;r<s.length;r++)Number(s[r].dataset.xaxis)===e&&Number(s[r].dataset.yaxis)===t&&(this.otherArray[e][t]=1,s[r].classList.add(a),s[r].style.backgroundColor=n)},this.nodeCheckThree=function(e,t,n,r,a){const s=document.querySelector(r).querySelectorAll(".column");for(let r=0;r<s.length;r++)Number(s[r].dataset.xaxis)===e&&Number(s[r].dataset.yaxis)===t&&(s[r].classList.contains("ship")||(s[r].style.backgroundColor=n))},this.placeship=function(e,t,n){this.nodeCheck(e,t,"black",n)},this.countervalue=0,this.counter=function(){return this.countervalue++,this.countervalue},this.receiveAttack=function(e,t,n){1===this.otherArray[e][t]?(this.counter(),this.nodeCheckTwo(Number(e),Number(t),"red",n,"hit"),this.otherArray[e][t]=2):0===this.otherArray[e][t]&&(this.nodeCheckTwo(Number(e),Number(t),"green",n,"miss"),this.otherArray[e][t]=3)},this.usedArray=[["",""]],this.usedCoords=function(e,t){let n=Number(e),r=Number(t);for(let e=0;e<this.usedArray.length;e++)for(let t=0;t<1;t++)if(this.usedArray[e][t]===n&&this.usedArray[e][t+1]===r)return 1;this.usedArray.push([n,r])},this.shipArray=[[1,2,3,4,5],[1,2,3,4],[1,2,3],[1,2,3],[1,2]],this.placeAllShips=function(e,t,n){const r=document.querySelector(".directionbutton");if(r.classList.contains("horizontal"))for(let r=0;r<this.shipArray[0].length;r++)this.placeship(e,t+r,n);else if(r.classList.contains("vertical"))for(let r=0;r<this.shipArray[0].length;r++)this.placeship(e+r,t,n);this.shipArray.shift()},this.availableArray=[],this.populateArray=function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++)this.availableArray.push([e,t])},this.populateArray(),this.removeFromArray=function(e,t){let n=Number(e),r=Number(t);for(let e=0;e<this.availableArray.length;e++)for(let t=0;t<1;t++)this.availableArray[e][t]===n&&this.availableArray[e][t+1]===r&&this.availableArray.splice(e,1);this.usedArray.push([n,r])},this.isSunk=function(){return document.querySelectorAll(".column"),"Yes"}}},643:e=>{e.exports=function(e){this.counter=0,this.length=e,this.hit=function(){this.counter++},this.array=[],this.arraypush=function(){for(let t=0;t<e;t++)this.array.push(t)},this.arraypush(),this.sunk=function(){return this.length<=this.counter?"Sunk":"Not Sunk"}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),a=n.n(r),s=n(569),o=n.n(s),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),h=n.n(u),p=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var m=n(498),y=n.n(m),v=n(643),b=n.n(v);const x=document.getElementById("content"),g=document.createElement("div");g.classList.add("header"),x.append(g);const A=document.createElement("div");A.classList.add("bodycontainer"),x.append(A);const w=document.createElement("div");w.classList.add("footer"),x.append(w);const k=document.createElement("div");k.classList.add("bodyone");const L=document.createElement("div");L.classList.add("bodytwo"),A.append(k,L);const N=document.createElement("button");N.classList.add("directionbutton"),N.textContent="Rotate",N.classList.add("horizontal"),N.type="button",k.append(N);const E=document.createElement("div");E.classList.add("bodyonecontainer"),k.append(E);const C=document.createElement("div");C.classList.add("popboard"),E.append(C);const S=document.createElement("div");S.classList.add("firstboard");const T=document.createElement("div");T.classList.add("secondboard"),L.append(S,T);const M=new(y()),q=new(y()),z=new(y());M.visualcreate(C,M),q.visualcreate(S,q),z.visualcreate(T,z),z.placeship(9,1,".secondboard"),z.placeship(9,2,".secondboard"),z.placeship(9,3,".secondboard"),N.addEventListener("click",(function(e){e.target.classList.contains("horizontal")?(e.target.classList.remove("horizontal"),e.target.classList.add("vertical")):e.target.classList.contains("vertical")&&(e.target.classList.remove("vertical"),e.target.classList.add("horizontal"))})),C.addEventListener("mouseover",(e=>{let t=e.target,n=Number(t.dataset.xaxis),r=Number(t.dataset.yaxis);for(let e=0;e<M.shipArray[0].length;e++)M.nodeCheckThree(n,r+e,"black",".popboard");t.addEventListener("click",(function(e){let t=e.target,n=Number(t.dataset.xaxis),r=Number(t.dataset.yaxis);console.log(t.dataset.xaxis,t.dataset.yaxis,t),M.placeAllShips(n,r,".popboard"),q.placeAllShips(n,r,".firstboard"),console.log(M.otherArray)}))})),C.addEventListener("mouseout",(e=>{let t=e.target,n=Number(t.dataset.xaxis),r=Number(t.dataset.yaxis);if(t.classList.contains("ship"))for(let e=0;e<M.shipArray[0].length;e++)M.nodeCheckThree(n,r+e+1,"white",".popboard");else for(let e=0;e<M.shipArray[0].length;e++)M.nodeCheckThree(n,r+e,"white",".popboard")})),T.addEventListener("click",(function(e){console.log(e.target);let t=(n=z.availableArray.length,Math.floor(Math.random()*n));var n;let r=z.availableArray[t][0],a=z.availableArray[t][1],s=e.target;2===z.countervalue&&console.log("battleship"),s.classList.contains("hit")||s.classList.contains("miss")||(z.receiveAttack(s.dataset.xaxis,s.dataset.yaxis,".secondboard"),q.receiveAttack(r,a,".firstboard"),z.removeFromArray(r,a))})),new(b())(1),new(b())(2),new(b())(3),new(b())(4),new(b())(5)})()})();