!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.axiosJsonpAdapter=n():e.axiosJsonpAdapter=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){function o(e){var n=[];for(var o in e)n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.join("&")}var t=1;e.exports=function(e){return new Promise(function(n,r){function a(){c&&(c.onload=c.onreadystatechange=c.onerror=null,c.parentNode&&c.parentNode.removeChild(c),c=null)}var c=document.createElement("script"),i=e.url;if(e.params){var u=o(e.params);u&&(i+=(i.indexOf("?")>=0?"&":"?")+u)}c.async=!0;var d="axiosJsonpCallback"+t++,f=window[d],p=!1;window[d]=function(e){if(window[d]=f,!p){n({data:e,status:200})}};var s={_:(new Date).getTime()};s[e.callbackParamName||"callback"]=d,i+=(i.indexOf("?")>=0?"&":"?")+o(s),c.onload=c.onreadystatechange=function(){c.readyState&&!/loaded|complete/.test(c.readyState)||a()},c.onerror=function(){a(),r(new Error("Network Error"))},e.cancelToken&&e.cancelToken.promise.then(function(e){c&&(p=!0,r(e))}),c.src=i,document.head.appendChild(c)})}}])});