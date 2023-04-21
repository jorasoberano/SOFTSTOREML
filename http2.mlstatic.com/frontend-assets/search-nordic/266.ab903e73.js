(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[266],{86113:function(n,t,e){"use strict";function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=r(e(73935)),i={exports:{}};!function(n,t){var e=o.default;function r(n,t,r){var o="string"===t?document.querySelector(t):t;if(!(o&&o instanceof Element))throw new Error("Container element is not found or not a DOM Element");var i="undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.measure;i&&performance.mark("hydrateStart"),e.hydrate(n,t,(function(){if(i){var n=(window._perfill=window._perfill||function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];(window._perfill.q=window._perfill.q||[]).push(t)},window._perfill);performance.mark("hydrateComplete"),performance.measure("nordic-hydration","hydrateStart","hydrateComplete");var t=performance.getEntriesByName("nordic-hydration");t.length&&n("queue","page-render",[{metric:"hydrate-complete",value:Math.round(t[0].startTime)},{metric:"hydrate-duration",value:Math.round(t[0].duration)}])}"function"==typeof r&&r()}))}(n.exports=r).hydrate=r}(i);var a=i.exports;n.exports=a},13821:function(n,t,e){"use strict";e.r(t),e.d(t,{createBrowserHistory:function(){return k},createHashHistory:function(){return _},createLocation:function(){return y},createMemoryHistory:function(){return H},createPath:function(){return m},locationsAreEqual:function(){return w},parsePath:function(){return p}});var r=e(22122);function o(n){return"/"===n.charAt(0)}function i(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}var a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=n&&n.split("/")||[],r=t&&t.split("/")||[],a=n&&o(n),c=t&&o(t),f=a||c;if(n&&o(n)?r=e:e.length&&(r.pop(),r=r.concat(e)),!r.length)return"/";var u=void 0;if(r.length){var s=r[r.length-1];u="."===s||".."===s||""===s}else u=!1;for(var l=0,h=r.length;h>=0;h--){var d=r[h];"."===d?i(r,h):".."===d?(i(r,h),l++):l&&(i(r,h),l--)}if(!f)for(;l--;l)r.unshift("..");!f||""===r[0]||r[0]&&o(r[0])||r.unshift("");var v=r.join("/");return u&&"/"!==v.substr(-1)&&(v+="/"),v},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};var f=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));var r=void 0===t?"undefined":c(t);if(r!==(void 0===e?"undefined":c(e)))return!1;if("object"===r){var o=t.valueOf(),i=e.valueOf();if(o!==t||i!==e)return n(o,i);var a=Object.keys(t),f=Object.keys(e);return a.length===f.length&&a.every((function(r){return n(t[r],e[r])}))}return!1},u="Invariant failed";function s(n,t){if(!n)throw new Error(u)}function l(n){return"/"===n.charAt(0)?n:"/"+n}function h(n){return"/"===n.charAt(0)?n.substr(1):n}function d(n,t){return function(n,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(n)}(n,t)?n.substr(t.length):n}function v(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function p(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}function m(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function y(n,t,e,o){var i;"string"==typeof n?(i=p(n)).state=t:(void 0===(i=(0,r.Z)({},n)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(i.key=e),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function w(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&f(n.state,t.state)}function g(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var O=!("undefined"==typeof window||!window.document||!window.document.createElement);function P(n,t){t(window.confirm(n))}var x="popstate",b="hashchange";function A(){try{return window.history.state||{}}catch(n){return{}}}function k(n){void 0===n&&(n={}),O||s(!1);var t,e=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=n,c=a.forceRefresh,f=void 0!==c&&c,u=a.getUserConfirmation,h=void 0===u?P:u,p=a.keyLength,w=void 0===p?6:p,k=n.basename?v(l(n.basename)):"";function E(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return k&&(i=d(i,k)),y(i,r,e)}function L(){return Math.random().toString(36).substr(2,w)}var T=g();function S(n){(0,r.Z)(F,n),F.length=e.length,T.notifyListeners(F.location,F.action)}function _(n){(function(n){void 0===n.state&&navigator.userAgent.indexOf("CriOS")})(n)||U(E(n.state))}function C(){U(E(A()))}var H=!1;function U(n){if(H)H=!1,S();else{T.confirmTransitionTo(n,"POP",h,(function(t){t?S({action:"POP",location:n}):function(n){var t=F.location,e=I.indexOf(t.key);-1===e&&(e=0);var r=I.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(H=!0,B(o))}(n)}))}}var M=E(A()),I=[M.key];function R(n){return k+m(n)}function B(n){e.go(n)}var D=0;function j(n){1===(D+=n)&&1===n?(window.addEventListener(x,_),i&&window.addEventListener(b,C)):0===D&&(window.removeEventListener(x,_),i&&window.removeEventListener(b,C))}var q=!1;var F={length:e.length,action:"POP",location:M,createHref:R,push:function(n,t){var r="PUSH",i=y(n,t,L(),F.location);T.confirmTransitionTo(i,r,h,(function(n){if(n){var t=R(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,t),f)window.location.href=t;else{var u=I.indexOf(F.location.key),s=I.slice(0,-1===u?0:u+1);s.push(i.key),I=s,S({action:r,location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=y(n,t,L(),F.location);T.confirmTransitionTo(i,r,h,(function(n){if(n){var t=R(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,t),f)window.location.replace(t);else{var u=I.indexOf(F.location.key);-1!==u&&(I[u]=i.key),S({action:r,location:i})}else window.location.replace(t)}}))},go:B,goBack:function(){B(-1)},goForward:function(){B(1)},block:function(n){void 0===n&&(n=!1);var t=T.setPrompt(n);return q||(j(1),q=!0),function(){return q&&(q=!1,j(-1)),t()}},listen:function(n){var t=T.appendListener(n);return j(1),function(){j(-1),t()}}};return F}var E="hashchange",L={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+h(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:h,decodePath:l},slash:{encodePath:l,decodePath:l}};function T(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function S(n){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+n)}function _(n){void 0===n&&(n={}),O||s(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),o=e.getUserConfirmation,i=void 0===o?P:o,a=e.hashType,c=void 0===a?"slash":a,f=n.basename?v(l(n.basename)):"",u=L[c],h=u.encodePath,p=u.decodePath;function x(){var n=p(T());return f&&(n=d(n,f)),y(n)}var b=g();function A(n){(0,r.Z)(q,n),q.length=t.length,b.notifyListeners(q.location,q.action)}var k=!1,_=null;function C(){var n=T(),t=h(n);if(n!==t)S(t);else{var e=x(),r=q.location;if(!k&&w(r,e))return;if(_===m(e))return;_=null,function(n){if(k)k=!1,A();else{var t="POP";b.confirmTransitionTo(n,t,i,(function(e){e?A({action:t,location:n}):function(n){var t=q.location,e=I.lastIndexOf(m(t));-1===e&&(e=0);var r=I.lastIndexOf(m(n));-1===r&&(r=0);var o=e-r;o&&(k=!0,R(o))}(n)}))}}(e)}}var H=T(),U=h(H);H!==U&&S(U);var M=x(),I=[m(M)];function R(n){t.go(n)}var B=0;function D(n){1===(B+=n)&&1===n?window.addEventListener(E,C):0===B&&window.removeEventListener(E,C)}var j=!1;var q={length:t.length,action:"POP",location:M,createHref:function(n){return"#"+h(f+m(n))},push:function(n,t){var e="PUSH",r=y(n,void 0,void 0,q.location);b.confirmTransitionTo(r,e,i,(function(n){if(n){var t=m(r),o=h(f+t);if(T()!==o){_=t,function(n){window.location.hash=n}(o);var i=I.lastIndexOf(m(q.location)),a=I.slice(0,-1===i?0:i+1);a.push(t),I=a,A({action:e,location:r})}else A()}}))},replace:function(n,t){var e="REPLACE",r=y(n,void 0,void 0,q.location);b.confirmTransitionTo(r,e,i,(function(n){if(n){var t=m(r),o=h(f+t);T()!==o&&(_=t,S(o));var i=I.indexOf(m(q.location));-1!==i&&(I[i]=t),A({action:e,location:r})}}))},go:R,goBack:function(){R(-1)},goForward:function(){R(1)},block:function(n){void 0===n&&(n=!1);var t=b.setPrompt(n);return j||(D(1),j=!0),function(){return j&&(j=!1,D(-1)),t()}},listen:function(n){var t=b.appendListener(n);return D(1),function(){D(-1),t()}}};return q}function C(n,t,e){return Math.min(Math.max(n,t),e)}function H(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,f=t.keyLength,u=void 0===f?6:f,s=g();function l(n){(0,r.Z)(O,n),O.length=O.entries.length,s.notifyListeners(O.location,O.action)}function h(){return Math.random().toString(36).substr(2,u)}var d=C(c,0,i.length-1),v=i.map((function(n){return y(n,void 0,"string"==typeof n?h():n.key||h())})),p=m;function w(n){var t=C(O.index+n,0,O.entries.length-1),r=O.entries[t];s.confirmTransitionTo(r,"POP",e,(function(n){n?l({action:"POP",location:r,index:t}):l()}))}var O={length:v.length,action:"POP",location:v[d],index:d,entries:v,createHref:p,push:function(n,t){var r="PUSH",o=y(n,t,h(),O.location);s.confirmTransitionTo(o,r,e,(function(n){if(n){var t=O.index+1,e=O.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),l({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=y(n,t,h(),O.location);s.confirmTransitionTo(o,r,e,(function(n){n&&(O.entries[O.index]=o,l({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(n){var t=O.index+n;return t>=0&&t<O.entries.length},block:function(n){return void 0===n&&(n=!1),s.setPrompt(n)},listen:function(n){return s.appendListener(n)}};return O}},22452:function(n,t,e){n.exports=e(86113)}}]);
//# sourceMappingURL=//http2.mlstatic.com/frontend-assets/search-nordic/266.ab903e73.js.map