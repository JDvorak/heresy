/*! (c) Andrea Giammarchi - ISC */
var heresy=function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={};try{i.WeakMap=WeakMap}catch(e){i.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var u=i.WeakMap;var c={};try{c.Event=new Event(".").constructor}catch(t){try{c.Event=new CustomEvent(".").constructor}catch(t){c.Event=function(t,n){n||(n={});var r=e.createEvent("Event"),a=!!n.bubbles,o=!!n.cancelable;r.initEvent(t,a,o);try{r.bubbles=a,r.cancelable=o}catch(r){}return r}}}var s=c.Event,l={};try{l.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},l.WeakSet=r}(WeakMap)}var f=l.WeakSet,h=!1,p=function(t){var n,r=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom|Android)\/(\d+)/.test(n)),a=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(r||a){var o={},i=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)};if(a)p=i;else{var c=new u;p=function(e){return c.get(e)||function(e,t){return c.set(e,t),t}(e,i(e))}}}else h=!0;return v(t)};function v(e){return h?e:p(e)}function d(e){for(var t=arguments.length,n=[v(e)],r=1;r<t;)n.push(arguments[r++]);return n}var g=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),y=Array.isArray,m=g.prototype.nodeType;function b(e,t){this.type=e,this.args=t}Object.freeze(b);var w=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return r(n,i),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),E={};try{E.Map=Map}catch(e){E.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var o=r(a);return o&&(t.splice(e,1),n.splice(e,1)),o},forEach:function(e,r){t.forEach(function(t,a){e.call(r,n[a],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,o){return n[r(a)?e:t.push(a)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var N,x=E.Map,A=function(e,t,n,r,a,o){for(var i=("selectedIndex"in t),u=-1;r<a;){var c=e(n[r],1);i&&u<0&&c.selected&&(u=r),t.insertBefore(c,o),r++}i&&-1<u&&(t.selectedIndex=u)},C=function(e,t){return e==t},k=function(e){return e},j=function(e,t,n,r,a,o,i){var u=o-a;if(u<1)return-1;for(;n-t>=u;){for(var c=t,s=a;c<n&&s<o&&i(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1},O=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},S=function(e,t,n,r,a){if(a-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[a-1],-1)),o.deleteContents()}},_=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},T=function(e,t,n,r,a,o,i,u,c,s,l,f,h){!function(e,t,n,r,a,o,i,u,c){for(var s=new x,l=e.length,f=i,h=0;h<l;)switch(e[h++]){case 0:a++,f++;break;case 1:s.set(r[a],1),A(t,n,r,a++,a,f<u?t(o[f],0):c);break;case-1:f++}for(h=0;h<l;)switch(e[h++]){case 0:i++;break;case-1:s.has(o[i])?i++:S(t,n,o,i++,i)}}(function(e,t,n,r,a,o,i){var u,c,s,l,f,h,p,v=n+o,d=[];e:for(u=0;u<=v;u++){if(u>50)return null;for(p=u-1,f=u?d[u-1]:[0,0],h=d[u]=[],c=-u;c<=u;c+=2){for(s=(l=c===-u||c!==u&&f[p+c-1]<f[p+c+1]?f[p+c+1]:f[p+c-1]+1)-c;l<o&&s<n&&i(r[a+l],e[t+s]);)l++,s++;if(l===o&&s===n)break e;h[u+c]=l}}var g=Array(u/2+v/2),y=g.length-1;for(u=d.length-1;u>=0;u--){for(;l>0&&s>0&&i(r[a+l-1],e[t+s-1]);)g[y--]=0,l--,s--;if(!u)break;p=u-1,f=u?d[u-1]:[0,0],(c=l-s)==-u||c!==u&&f[p+c-1]<f[p+c+1]?(s--,g[y--]=1):(l--,g[y--]=-1)}return g}(n,r,o,i,u,s,f)||function(e,t,n,r,a,o,i,u){var c=0,s=r<u?r:u,l=Array(s++),f=Array(s);f[0]=-1;for(var h=1;h<s;h++)f[h]=i;for(var p=new x,v=o;v<i;v++)p.set(a[v],v);for(var d=t;d<n;d++){var g=p.get(e[d]);null!=g&&-1<(c=_(f,s,g))&&(f[c]=g,l[c]={newi:d,oldi:g,prev:l[c-1]})}for(c=--s,--i;f[c]>i;)--c;s=u+r-c;var y=Array(s),m=l[c];for(--n;m;){for(var b=m,w=b.newi,E=b.oldi;n>w;)y[--s]=1,--n;for(;i>E;)y[--s]=-1,--i;y[--s]=0,--n,--i,m=m.prev}for(;n>=t;)y[--s]=1,--n;for(;i>=o;)y[--s]=-1,--i;return y}(n,r,a,o,i,u,c,s),e,t,n,r,i,u,l,h)},M=function(e,t,n,r){r||(r={});for(var a=r.compare||C,o=r.node||k,i=null==r.before?null:o(r.before,0),u=t.length,c=u,s=0,l=n.length,f=0;s<c&&f<l&&a(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&a(t[c-1],n[l-1]);)c--,l--;var h=s===c,p=f===l;if(h&&p)return n;if(h&&f<l)return A(o,e,n,f,l,O(o,t,s,u,i)),n;if(p&&s<c)return S(o,e,t,s,c),n;var v=c-s,d=l-f,g=-1;if(v<d){if(-1<(g=j(n,f,l,t,s,c,a)))return A(o,e,n,f,g,o(t[s],0)),A(o,e,n,g+v,l,O(o,t,c,u,i)),n}else if(d<v&&-1<(g=j(t,s,c,n,f,l,a)))return S(o,e,t,s,g),S(o,e,t,g+d,c),n;return v<2||d<2?(A(o,e,n,f,l,o(t[s],0)),S(o,e,t,s,c),n):v===d&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,a)?(A(o,e,n,f,l,O(o,t,c,u,i)),n):(T(o,e,n,f,l,d,t,s,c,v,u,a,i),n)},$=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),L="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},P="-"+Math.random().toFixed(6)+"%";try{"content"in(N=e.createElement("template"))&&(N.innerHTML='<p tabindex="'+P+'"></p>',N.content.childNodes[0].getAttribute("tabindex")==P)||(P="_dt: "+P.slice(1,-1)+";",!0)}catch(e){}var R="\x3c!--"+P+"--\x3e",D=8,Z=1,z=3,W=/^(?:style|textarea)$/i,V=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var F=" \\f\\n\\r\\t",H="[^"+F+"\\/>\"'=]+",I="["+F+"]+"+H,G="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",B="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+H.replace("\\/","")+"))?)",q=new RegExp(G+I+B+"+)(["+F+"]*/?>)","g"),U=new RegExp(G+I+B+"*)(["+F+"]*/>)","g"),J=new RegExp("("+I+"\\s*=\\s*)(['\"]?)"+R+"\\2","gi");function K(e,t,n,r){return"<"+t+n.replace(J,Q)+r}function Q(e,t,n){return t+(n||'"')+P+(n||'"')}function X(e,t,n){return V.test(t)?e:"<"+t+n+"></"+t+">"}function Y(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ee(t,n,r,a){for(var o=new x,i=t.attributes,u=[],c=u.slice.call(i,0),s=c.length,l=0;l<s;){var f,h=c[l++],p=h.value===P;if(p||1<(f=h.value.split(R)).length){var v=h.name;if(!o.has(v)){var d=r.shift().replace(p?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")","i"),"$1"),g=i[d]||i[d.toLowerCase()];if(o.set(v,g),p)n.push(ne(g,a,d,null));else{for(var y=f.length-2;y--;)r.shift();n.push(ne(g,a,d,f))}}u.push(h)}}for(s=u.length,l=0;l<s;){var m=u[l++];/^id$/i.test(m.name)?t.removeAttribute(m.name):t.removeAttributeNode(m)}var b=t.nodeName;if(/^script$/i.test(b)){var w=e.createElement(b);for(s=i.length,l=0;l<s;)w.setAttributeNode(i[l++].cloneNode(!0));w.textContent=t.textContent,t.parentNode.replaceChild(w,t)}}function te(e,t){return{type:"any",node:e,path:t}}function ne(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function re(e,t){return{type:"text",node:e,path:t}}var ae=new u,oe=new u;function ie(e,t){var n=function(e){return e.join(R).replace(U,X).replace(q,K)}(t),r=e.transform;r&&(n=r(n));var a=w(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===L.call(r.textContent).length&&e.removeChild(r)}}(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,i=o.length,u=0;u<i;){var c=o[u];switch(c.nodeType){case Z:var s=a.concat(u);ee(c,n,r,s),e(c,n,r,s);break;case D:var l=c.textContent;if(l===P)r.shift(),n.push(W.test(t.nodeName)?re(t,a):te(c,a.concat(u)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(c),u--,i--}break;case z:W.test(t.nodeName)&&L.call(c.textContent)===R&&(r.shift(),n.push(re(t,a)))}u++}}(a,o,t.slice(0),[]);var i={content:a,updates:function(n){for(var r=[],a=o.length,i=0,u=0;i<a;){var c=o[i++],s=Y(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var l=c.sparse,f=e.attribute(s,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(u+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var u=r[o-i];if(u.sparse){var c=u.values,s=c[0],l=1,f=c.length;for(i+=f-2;l<f;)s+=arguments[o++]+c[l++];u.fn(s)}else u.fn(arguments[o++])}return n}}};return ae.set(t,i),i}function ue(t){return function(n){var r=oe.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=ae.get(n)||ie(t,n),a=$.call(e,r.content,!0),o={content:a,template:n,updates:r.updates(a)};return oe.set(t,o),o}(t,n)),r.updates.apply(null,arguments),r.content}}var ce=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(u){var c,s,l,f;switch(typeof u){case"object":if(u){if("object"===o){if(!a&&i!==u)for(s in i)s in u||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,u)l="number"!=typeof(f=u[s])||e.test(s)?f:f+"px",!a&&/^--/.test(s)?c.setProperty(s,l):c[s]=l;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=c):i=u;break}default:i!=u&&(o="string",i=u,a?r.value=u||"":r.cssText=u||"")}}}}(),se=function(e,t){return e.nodeType===m?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},le=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},fe=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},he=/^(?:form|list)$/i,pe=[].slice;function ve(e){return this.type=e,ue(this)}function de(e){return e(this)}ve.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return le(e,n);t="className";case"data":case"props":return fe(e,t);case"style":return ce(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||he.test(t))?fe(e,t):le(e,n)}},any:function(e,t){var n,r={node:se,before:e},a="ownerSVGElement"in e?"svg":"html",o=!1;return function i(u){switch(typeof u){case"string":case"number":case"boolean":o?n!==u&&(n=u,t[0].textContent=u):(o=!0,n=u,t=M(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":i(u(e));break;case"object":case"undefined":if(null==u){o=!1,t=M(e.parentNode,t,[],r);break}default:if(o=!1,n=u,y(u))if(0===u.length)t.length&&(t=M(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":i(String(u));break;case"function":i(u.map(de,e));break;case"object":y(u[0])&&(u=u.concat.apply([],u));default:t=M(e.parentNode,t,u,r)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?i(String(u.text)):"any"in u?i(u.any):"html"in u?t=M(e.parentNode,t,pe.call(w([].concat(u.html).join(""),a).childNodes),r):"length"in u&&i(pe.call(u)):t=M(e.parentNode,t,11===u.nodeType?pe.call(u.childNodes):[u],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(pe.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var ge=Object.create,ye=Object.keys,me=new u,be=new u,we=ve.prototype,Ee=null,Ne=function(e){var t=Ce("html",e),n=Ce("svg",e);return{html:t,svg:n,hook:function(e){return{html:Ae(e,t),svg:Ae(e,n)}},render:function(t,n){var r=ke.call(this,t,n,e);return be.get(t)!==r&&(be.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}};Ne(ve);function xe(e,t){return e.nodeType===m?e.valueOf(t):e}function Ae(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),xe(n.current.apply(null,arguments),!1)}}function Ce(e,t){var n=new u;return r.for=function(r,a){var o=n.get(r)||function(e){var t={$:null};return n.set(e,t),t}(r);return null==a&&(a="$"),o[a]||function(n,r){var a=[],o=null,i=new t(e),u=function(){return i.apply(null,Oe(a,1,1,t))};return n[r]=function(){a=d.apply(null,arguments);var e=ke(i,u,t);return o||(o=Se(e))}}(o,a)},r;function r(){var n=d.apply(null,arguments);return Ee?new b(e,n):new t(e).apply(null,n)}}function ke(e,t,n){var r,a,o=Ee;(Ee=me.get(e)||(r=e,a={i:0,length:0,stack:[],update:!1},me.set(r,a),a)).i=0;var i,u=t.call(this);if(u instanceof b){i=xe(je(u,0,n),Ee.update);var c=Ee,s=c.i,l=c.length,f=c.stack,h=c.update;s<l&&f.splice(Ee.length=s),h&&(Ee.update=!1)}else i=xe(u,!1);return Ee=o,i}function je(e,t,n){var r=Ee,a=r.i,o=r.length,i=r.stack,u=e.type,c=e.args,s=a<o;Ee.i++,s||(Ee.length=i.push({l:t,kind:u,tag:null,tpl:c[0],wire:null})),Oe(c,1,t+1,n);var l=i[a];if(s){var f=l.l,h=l.kind,p=l.tag,v=l.tpl,d=l.wire;if(f===t&&u===h&&v===c[0])return p.apply(null,c),d}var g=new n(u),y=Se(g.apply(null,c));return l.l=t,l.kind=u,l.tag=g,l.tpl=c[0],l.wire=y,a<1&&(Ee.update=!0),y}function Oe(e,t,n,r){for(var a=e.length;t<a;t++){var o=e[t];"object"==typeof o&&o&&(o instanceof b?e[t]=je(o,n-1,r):y(o)&&(e[t]=Oe(o,0,n++,r)))}return e}function Se(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new g(t):e}var _e=null;try{_e=new function(){}}catch(e){}var Te=function(e){return function(t){function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(this,n(o).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(o,e),o}()};if(_e){var Me=Object.getPrototypeOf,$e=Object.setPrototypeOf,Le=("object"==("undefined"==typeof Reflect?"undefined":typeof Reflect)?Reflect:{construct:function(e,t,n){for(var r=[null],a=0;a<t.length;a++)r.push(t[a]);var o=e.bind.apply(e,r);return $e(new o,n.prototype)}}).construct;Te=function(e,t){function n(){return Le(t?Me(e):e,arguments,n)}return $e(n.prototype,e.prototype),$e(n,e)}}var Pe={map:{},re:null},Re=function(e){return new RegExp("<(/)?(".concat(e.join("|"),")([^A-Za-z0-9:._-])"),"g")},De=null,Ze=function(e,t){var n=De||t,r=n.map,a=n.re;return e.replace(a,function(e,t,n,a){var o=r[n],i=o.tagName,u=o.is;return o.element?t?"</".concat(u,">"):"<".concat(u).concat(a):t?"</".concat(i,">"):"<".concat(i,' is="').concat(u,'"').concat(a)})},ze=function(e){var t=e.tagName,n=e.is;return e.element?n:"".concat(t,'[is="').concat(n,'"]')},We=function(){return De},Ve=function(e){De=e},Fe=function(e){var t=ge(we);return ye(e).forEach(function(n){t[n]=e[n](t[n])||String}),n.prototype=t,Ne(n);function n(){return ve.apply(this,arguments)}}({transform:function(e){return function(e){return Ze(e,Pe)}}}),He=Fe.render,Ie=Fe.html,Ge=Fe.svg,Be="_🔥",qe=Object.defineProperties,Ue=new u,Je=new u,Ke=new f,Qe="attributeChangedCallback",Xe="connectedCallback",Ye="dis".concat(Xe),et=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return ft.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:ft}},tt=function(e){var t=e.prototype,n=[],r={html:{configurable:!0,get:ct},svg:{configurable:!0,get:st}};r[Be]={value:{events:n,info:null}},"handleEvent"in t||(r.handleEvent={configurable:!0,value:lt}),"oninit"in t&&(n.push("init"),et(t,r,"render")),et(t,r,Qe),et(t,r,Xe),et(t,r,Ye),[[Qe,"onattributechanged",function(e,t,n){var r=nt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}],[Xe,"onconnected",function(){this.dispatchEvent(nt("connected"))}],[Ye,"ondisconnected",function(){this.dispatchEvent(nt("disconnected"))}],[Xe,"render",function(){this.render()}]].forEach(function(e){var a=o(e,3),i=a[0],u=a[1],c=a[2];if(!(i in t)&&u in t)if("render"!==u&&n.push(u.slice(2)),i in r){var s=r[i].value;r[i]={configurable:!0,value:function(){return s.apply(this,arguments),c.apply(this,arguments)}}}else r[i]={configurable:!0,value:c}});var a=e.booleanAttributes||[];a.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});var i=e.observedAttributes||[];i.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),qe(t,r);var u=a.concat(i);return u.length?qe(e,{observedAttributes:{configurable:!0,get:function(){return u}}}):e},nt=function(e){return new s(e)},rt=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new b("html",t)};rt.for=Ie.for;var at=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new b("svg",t)};at.for=Ge.for;var ot=function(e,t,n){var r=it(e,t,new u);return n.set(e,r),r},it=function(e,t,n){return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var u=v(r),c=n.get(u)||function(e,t,n){var r=n.info,a=r?Ze(t.join(Be),r).split(Be):t;return e.set(t,a),a}(n,u,e[Be]);return He(e,function(){return t.apply(void 0,[c].concat(o))})}};function ut(e){this.addEventListener(e,this)}function ct(){return Ue.get(this)||ot(this,rt,Ue)}function st(){return Je.get(this)||ot(this,at,Je)}function lt(e){this["on".concat(e.type)](e)}function ft(){Ke.has(this)||(Ke.add(this),this[Be].events.forEach(ut,this),this.dispatchEvent(nt("init")))}var ht=Object.create,pt=Object.defineProperty,vt=Object.defineProperties,dt=Object.getOwnPropertyNames,gt=Object.getOwnPropertySymbols,yt=Object.getOwnPropertyDescriptor,mt=Object.keys,bt={element:HTMLElement},wt=new u,Et=new u,Nt=function(e){var t=ht(null),n=ht(null),r={prototype:n,statics:t};return dt(e).concat(gt(e)).forEach(function(r){var a=yt(e,r);switch(a.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"observedAttributes":case"style":case"tagName":t[r]=a;break;default:n[r]=a}}),r},xt=function(t,n,r){var a;if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(t))throw"Invalid name";var o=RegExp.$1,i=RegExp.$3,u=RegExp.$4,c=i||u||n.tagName||n.extends||"element";if(!/^[A-Za-z0-9:._-]+$/.test(c))throw"Invalid tag";var s,l="",f="";c.indexOf("-")<0?(l=o.replace(/([A-Z])([A-Z][a-z])/g,s="$1"+(s||"-")+"$2").replace(/([a-z])([A-Z])/g,s).toLowerCase()+r).indexOf("-")<0&&(f="-heresy"):(l=c+r,c="element");var h=l+f;if(customElements.get(h))throw"Duplicated ".concat(h," definition");var p=Te("object"==typeof n?Et.get(n)||function(t,n){var r=Nt(t),a=r.statics,o=r.prototype,i=Te(bt[n]||(bt[n]=e.createElement(n).constructor),!1);return vt(i.prototype,o),vt(i,a),Et.set(t,tt(i)),i}(n,c):wt.get(n)||function(e){var t=Te(e,!1);return wt.set(e,tt(t)),t}(n),!0),v="element"===c;if(pt(p,"new",{value:v?function(){return e.createElement(h)}:function(){return e.createElement(c,{is:h})}}),pt(p.prototype,"is",{value:h}),""===r){var d=function(e){for(var t=e.length,n=0,r=0;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)}(l.toUpperCase());Pe.map[o]=At(p,c,h,{id:d,i:0}),Pe.re=Re(mt(Pe.map))}var g=[h,p];return v||g.push({extends:c}),(a=customElements).define.apply(a,g),{Class:p,is:h,name:o,tagName:c}},At=function t(n,r,a,o){var i=n.prototype,u=function(e,t){return{tagName:e,is:t,element:"element"===e}}(r,a),c=[ze(u)],s=n.includes||n.contains;if(s){var l={};mt(s).forEach(function(e){var n="-".concat(o.id,"-").concat(o.i++),r=xt(e,s[e],n),a=r.Class,i=r.is,u=r.name,f=r.tagName;c.push(ze(l[u]=t(a,f,i,o)))});var f=Re(mt(l)),h={events:i[Be].events,info:{map:l,re:f}};if(pt(i,Be,{value:h}),"render"in i){var p=i.render,v=h.info;pt(i,"render",{value:function(){var e=We();Ve(v);var t=p.apply(this,arguments);return Ve(e),t}})}}return"style"in n&&function(t){if((t||"").length){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t));var r=e.head||e.querySelector("head");r.insertBefore(n,r.lastChild)}}(n.style.apply(n,c)),u};return t.define=function(e,t){return("string"==typeof e?xt(e,t,""):xt(e.name,e,"")).Class},t.html=rt,t.ref=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}},t.render=function(e,t){return He(e,"function"==typeof t?t:function(){return t})},t.svg=at,t}(document,{});
