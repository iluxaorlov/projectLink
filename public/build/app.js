!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=function(e){let t=new XMLHttpRequest,n=JSON.stringify({address:e});t.onreadystatechange=function(){4===this.readyState&&(200===this.status&&this.responseText&&(document.getElementById("form__address").blur(),function(e){let t=JSON.parse(e);if(document.getElementById("past"))document.getElementById("past").innerHTML=`<a id="past__link" href="${t.link}" target="_blank">${t.link}</a><i id="past__copy" class="fas fa-copy"></i>`;else{let e=`<div id="past"><a class="past__link" href="${t.link}" target="_blank">${t.link}</a><i id="past__copy" class="fas fa-copy"></i></div>`;document.getElementById("form__address").insertAdjacentHTML("afterend",e)}}(this.responseText)),400===this.status&&(document.getElementById("form__address").focus(),document.getElementById("form__address").style.backgroundColor="#ff8080",document.getElementById("form__address").style.transition="",setTimeout(function(){document.getElementById("form__address").style.backgroundColor="",document.getElementById("form__address").style.transition="background-color 500ms linear"},1e3)))},t.open("POST","/",!0),t.setRequestHeader("Content-type","application/json"),t.send(n)};var r=function(){let e=document.createRange(),t=window.getSelection();var n;t.removeAllRanges(),e.selectNode(this.previousElementSibling),t.addRange(e),document.execCommand("copy"),t.removeAllRanges(),(n=this).style.color="#00ff00",n.style.transition="",setTimeout(function(){n.style.color="",n.style.transition="color 500ms linear"},1e3)};document.getElementById("form__address").addEventListener("keydown",function(e){13===e.keyCode&&o(this.value)}),document.getElementById("form__address").addEventListener("paste",function(){setTimeout(()=>{o(this.value)})}),document.getElementById("form").addEventListener("click",function(e){let t=e.target;"past__copy"===t.id&&r.call(t)})}]);