!function(){var e,t={669:function(e,t,r){e.exports=r(609)},448:function(e,t,r){"use strict";var n=r(867),o=r(26),i=r(372),s=r(327),a=r(97),u=r(109),c=r(985),f=r(61);e.exports=function(e){return new Promise((function(t,r){var l=e.data,h=e.headers,d=e.responseType;n.isFormData(l)&&delete h["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(m+":"+v)}var g=a(e.baseURL,e.url);function _(){if(p){var n="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,i={data:d&&"text"!==d&&"json"!==d?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,r,i),p=null}}if(p.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=_:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(_)},p.onabort=function(){p&&(r(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var b=(e.withCredentials||c(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;b&&(h[e.xsrfHeaderName]=b)}"setRequestHeader"in p&&n.forEach(h,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete h[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),d&&"json"!==d&&(p.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),l||(l=null),p.send(l)}))}},609:function(e,t,r){"use strict";var n=r(867),o=r(849),i=r(321),s=r(185);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(r(655));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=r(263),u.CancelToken=r(972),u.isCancel=r(502),u.all=function(e){return Promise.all(e)},u.spread=r(713),u.isAxiosError=r(268),e.exports=u,e.exports.default=u},263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:function(e,t,r){"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(867),o=r(327),i=r(782),s=r(572),a=r(185),u=r(875),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var f=[s,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(i),o=Promise.resolve(e);f.length;)o=o.then(f.shift(),f.shift());return o}for(var l=e;r.length;){var h=r.shift(),d=r.shift();try{l=h(l)}catch(e){d(e);break}}try{o=s(l)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=f},782:function(e,t,r){"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:function(e,t,r){"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:function(e,t,r){"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},572:function(e,t,r){"use strict";var n=r(867),o=r(527),i=r(502),s=r(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function c(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=u(void 0,e[o])):r[o]=u(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=u(void 0,t[e]))})),n.forEach(i,c),n.forEach(s,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=u(void 0,e[o])):r[o]=u(void 0,t[o])})),n.forEach(a,(function(n){n in t?r[n]=u(e[n],t[n]):n in e&&(r[n]=u(void 0,e[n]))}));var f=o.concat(i).concat(s).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return n.forEach(l,c),r}},26:function(e,t,r){"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:function(e,t,r){"use strict";var n=r(867),o=r(655);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},655:function(e,t,r){"use strict";var n=r(155),o=r(867),i=r(16),s=r(481),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,f={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(c=r(448)),c),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||n&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw s(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};f.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){f.headers[e]=o.merge(a)})),e.exports=f},849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:function(e,t,r){"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:function(e,t,r){"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:function(e,t,r){"use strict";var n=r(593),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={},s=n.version.split(".");function a(e,t){for(var r=t?t.split("."):s,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}o.transitional=function(e,t,r){var o=t&&a(t);return function(s,a,u){if(!1===e)throw new Error(function(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}(a," has been removed in "+t));return o&&!i[a]&&(i[a]=!0),!e||e(s,a,u)}},e.exports={isOlderVersion:a,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},867:function(e,t,r){"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},70:function(e,t,r){"use strict";var n=r(669),o=r.n(n);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.button_open=document.querySelector('[data-slug="webp-converter-for-media"] a[href*="action=deactivate"]'),this.modal=document.querySelector(".webpModal"),this.button_open&&this.modal)return this.outer=this.modal.querySelector(".webpModal__outer"),this.form=this.outer.querySelector(".webpModal__form"),this.form_options=this.form.querySelectorAll('[name="webpc_reason"]'),this.form_comment=this.form.querySelector('[name="webpc_comment"]'),this.button_submit=this.form.querySelector('button[type="submit"]'),this.button_cancel=this.form.querySelector('button[type="button"]'),this.events={open_modal:this.open_modal.bind(this)},this.atts={option_placeholder:"data-placeholder"},this.status={is_sent:!1},!0}},{key:"set_events",value:function(){var e=this;this.button_open.addEventListener("click",this.events.open_modal),this.button_submit.addEventListener("click",this.submit_form.bind(this)),this.button_cancel.addEventListener("click",this.cancel_form.bind(this)),this.outer.addEventListener("click",this.close_modal.bind(this)),this.form.addEventListener("click",(function(e){e.stopPropagation()}));for(var t=this.form_options.length,r=function(t){e.form_options[t].addEventListener("change",(function(){e.set_current_option(t)}))},n=0;n<t;n++)r(n)}},{key:"open_modal",value:function(e){e.preventDefault(),this.button_open.removeEventListener("click",this.events.open_modal),this.modal.removeAttribute("hidden")}},{key:"close_modal",value:function(){this.modal.setAttribute("hidden","hidden")}},{key:"submit_form",value:function(e){var t=this;e.preventDefault(),this.close_modal(),this.status.is_sent||(this.status.is_sent=!0,setTimeout((function(){t.send_request(),t.button_open.click()}),0))}},{key:"send_request",value:function(){var e=new FormData(this.form),t=this.form.getAttribute("action");o()({method:"POST",url:t,data:e})}},{key:"cancel_form",value:function(e){var t=this;e.preventDefault(),this.close_modal(),setTimeout((function(){t.button_open.click()}),0)}},{key:"set_current_option",value:function(e){this.form_comment.value="";var t=this.form_options[e].getAttribute(this.atts.option_placeholder);this.form_comment.setAttribute("placeholder",t)}}])&&i(t.prototype,r),n&&i(t,n),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.notice=document.querySelector('.notice[data-notice="webp-converter-for-media"]'),this.notice)return this.settings={ajax_url:this.notice.getAttribute("data-url"),ajax_action:"webpc_notice",button_close_class:".notice-dismiss",button_hide_class:"[data-permanently]"},this.events={click_on_close:this.click_on_close.bind(this)},!0}},{key:"set_events",value:function(){this.notice.addEventListener("click",this.events.click_on_close)}},{key:"click_on_close",value:function(e){var t=this.settings,r=t.button_close_class,n=t.button_hide_class;this.notice.removeEventListener("click",this.events.click_on_close),e.target.matches(r)?this.hide_notice(!1):e.target.matches(n)&&this.hide_notice(!0)}},{key:"hide_notice",value:function(e){var t=this.settings.button_close_class;this.send_request(e),e&&this.notice.querySelector(t).click()}},{key:"send_request",value:function(e){var t=this.settings.ajax_url;o()({method:"POST",url:t,data:this.get_data_for_request(e)})}},{key:"get_data_for_request",value:function(e){var t=this.settings.ajax_action,r=new FormData;return r.append("action",t),r.append("is_permanently",e?1:0),r}}])&&a(t.prototype,r),n&&a(t,n),e}();function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.section=document.querySelector(".webpLoader"),this.section)return this.wrapper=this.section.querySelector(".webpLoader__status"),this.progress=this.wrapper.querySelector(".webpLoader__barProgress"),this.progress_size=this.section.querySelector(".webpLoader__sizeProgress"),this.errors=this.section.querySelector(".webpLoader__errors"),this.errors_inner=this.errors.querySelector(".webpLoader__errorsContent"),this.success=this.section.querySelector(".webpLoader__success"),this.success_popup=this.section.querySelector(".webpLoader__popup"),this.option_force=this.section.querySelector('input[name="regenerate_force"]'),this.button=this.section.querySelector(".webpLoader__button"),this.data={count:0,max:0,items:[],size:{before:0,after:0},errors:[]},this.settings={is_disabled:!1,ajax:{url_paths:this.section.getAttribute("data-api-paths"),url_regenerate:this.section.getAttribute("data-api-regenerate"),error_message:this.section.getAttribute("data-api-error-message")},units:["kB","MB","GB"]},this.atts={progress:"data-percent"},this.classes={progress_error:"webpLoader__barProgress--error",button_disabled:"webpLoader__button--disabled",error_message:"webpLoader__errorsContentError"},!0}},{key:"set_events",value:function(){this.button.addEventListener("click",this.init_regeneration.bind(this))}},{key:"init_regeneration",value:function(e){e.preventDefault(),this.settings.is_disabled||(this.settings.is_disabled=!0,this.button.classList.add(this.classes.button_disabled),this.option_force.setAttribute("disabled","disabled"),this.wrapper.removeAttribute("hidden"),this.send_request_for_paths())}},{key:"send_request_for_paths",value:function(){var e=this,t=this.settings.ajax.url_paths;o()({method:"POST",url:t,data:this.get_data_for_paths_request()}).then((function(t){e.data.items=t.data,e.data.max=t.data.length,e.regenerate_next_images()})).catch(this.catch_request_error.bind(this))}},{key:"catch_request_error",value:function(e){var t=this.settings.ajax.error_message,r=e.response&&e.response.data.message||null;this.update_errors([r||t],!0),r||(this.print_error_message(JSON.stringify(e.toJSON()),!0,!0),this.print_error_message(JSON.stringify(e.response),!0,!0))}},{key:"get_data_for_paths_request",value:function(){var e=new FormData;return e.append("regenerate_force",this.option_force.checked?1:0),e}},{key:"regenerate_next_images",value:function(){if(0===this.data.max&&this.update_progress(),!(this.data.count>=this.data.max)){var e=this.data.items[this.data.count];this.data.count++,this.send_request_for_regeneration(e)}}},{key:"send_request_for_regeneration",value:function(e){var t=this,r=this.settings.ajax.url_regenerate;o()({method:"POST",url:r,data:{paths:e}}).then((function(e){t.update_errors(e.data.errors),t.update_size(e.data.size.before,e.data.size.after),t.update_progress(),t.regenerate_next_images()})).catch(this.catch_request_error.bind(this))}},{key:"update_errors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0!==e.length){for(var r=0;r<e.length;r++)this.print_error_message(e[r],t);this.errors.removeAttribute("hidden"),t&&this.progress.classList.add(this.classes.progress_error)}}},{key:"print_error_message",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("p");if(r){var o=document.createElement("pre");o.innerText=e,n.appendChild(o)}else n.innerText=e;t&&n.classList.add(this.classes.error_message),this.errors_inner.appendChild(n)}},{key:"update_size",value:function(e,t){var r=this.data.size;r.before+=e,r.after+=t;var n=r.before-r.after;if(n<0&&(n=0),0!==n){var o=Math.round(100*(1-r.after/r.before));o<0&&(o=0);var i=-1;do{i++,n/=1024}while(n>1024);var s=n.toFixed(2),a=this.settings.units[i];this.progress_size.innerHTML="".concat(s," ").concat(a," (").concat(o,"%)")}}},{key:"update_progress",value:function(){var e=this.data.max>0?Math.floor(this.data.count/this.data.max*100):100;e>100&&(e=100),100===e&&(this.success.removeAttribute("hidden"),this.success_popup.removeAttribute("hidden")),this.progress.setAttribute(this.atts.progress,e.toString())}}])&&c(t.prototype,r),n&&c(t,n),e}();new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new s,new u,new f}},694:function(){},155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,u=[],c=!1,f=-1;function l(){c&&a&&(c=!1,a.length?u=a.concat(u):f=-1,u.length&&h())}function h(){if(!c){var e=s(l);c=!0;for(var t=u.length;t;){for(a=u,u=[];++f<t;)a&&a[f].run();f=-1,t=u.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||c||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},593:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var s=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={794:0,505:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var f=u(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0;return n.O(f)},r=self.webpackChunkwebp_converter_for_media=self.webpackChunkwebp_converter_for_media||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[505],(function(){return n(70)}));var o=n.O(void 0,[505],(function(){return n(694)}));o=n.O(o)}();