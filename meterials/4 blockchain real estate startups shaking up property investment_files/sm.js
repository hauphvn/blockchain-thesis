!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n=window.__smjsonp__;window.__smjsonp__=function(e,o,r){for(var a,s,u=0,c=[];u<e.length;u++)s=e[u],i[s]&&c.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(n&&n(e,o,r);c.length;)c.shift()()};var o={},i={5:0,6:0};e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(u);var e=i[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),i[t]=void 0)}var o=i[t];if(0===o)return new Promise(function(t){t()});if(o)return o[2];var r=new Promise(function(e,n){o=i[t]=[e,n]});o[2]=r;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+"chunk/"+({0:"popup",1:"chat",2:"web-push",3:"sm_war"}[t]||t)+".js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),r},e.m=t,e.c=o,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="//app2.salesmanago.pl/static/",e.oe=function(t){throw console.error(t),t},e(e.s=61)}([function(t,e){t.exports=function(){window.console||(window.console={}),["log","debug","warn","error"].forEach(function(t){window.console[t]||(window.console[t]=function(){})});var t=console.debug.bind(window.console,"[sm]"),e=console.debug.bind(window.console),n=console.log.bind(window.console,"[sm][deprecation]");return{debug:t,debugNoTag:e,info:console.log.bind(window.console,"[sm]"),warn:console.warn.bind(window.console),error:console.error.bind(window.console),deprecated:!1!==window._smlogdep?n:function(){}}}()},function(t,e,n){t.exports={endpoint:("https:"==document.location.protocol?"https://":"http://")+"app2.salesmanago.pl",chat_endpoint:"https://chat02.salesmanago.com",war_endpoint:"https://www.salesmanago.pl/war",chat_ws:"wss://chat02.salesmanago.com",gvar:"___sm.js___",urls:{chat:"/chat/client",chat_consl:"/chat/consultants",chat_unread:"/chat/unread",chat_holding:"/chat/client/holding/conversation",cf:"/api/chat/contact/form.json",pf:"/api/chat/contact/form.json",error:"/api/err.gif",r:"/api/r.gif",vs:"/api/vs",vc:"/api/vc.json",war_config:"/war.json",war_report:"/ack.json",ext:"/web-api/e.gif",p:"/api/popup/content.json",push:{sett:"/api/push/consentForm/displaySettings.json",cf:"/api/push/consentForm.htm"},custom:function(t){return"/dynamic/"+t+"/custom.js"}},priority:{wp:1,p:0}}},function(t,e,n){function o(){function t(){var t=r.get(a);if(t)return i.smCreateCookie(s,t,c),t;var e=i.getUrlVars()[u];return e?(i.smCreateCookie(s,e,c),e):i.smReadCookie(s)}function e(t,e){function n(){var t=i.generateUUID();return i.smCreateCookie(l,t,f),t}var o=i.smReadCookie(l);return o?function(){return t&&e&&e!==t}()?n():(i.smCreateCookie(l,o,f),o):n()}this.stored=null,this.touch=function(){return this.getContactId(!0)},this.getContactId=function(n){if(!this.stored||n){var o=i.smReadCookie(s),r=t();this.stored={smclient:r,smuuid:e(r,o)}}return this.stored},this.isMonitored=function(){return!!this.getContactId().smclient},this.update=function(t){t&&(this.stored&&(this.stored.smclient=t),i.smCreateCookie(s,t,c))}}var i=n(6),r=n(5),a="_smclientid",s="smclient",u="smclient",c=3650,l="smuuid",f=3650;t.exports=new o},function(t,e,n){function o(){this.params=[]}var i=n(7);o.prototype.ap=function(t,e){return this.params.push({n:t,v:e}),this},o.prototype.apo=function(t){if(this.params.length>0)throw".apo should be executed at most once";return this.params.push(t),this},o.prototype.buildQueryString=function(){return 0===this.params.length?"":"?"+this.params.map(function(t){var e=i.isFunction(t.v)?t.v():t.v;return!(!i.isNotUndefined(e)||!i.isNotNull(e))&&t.n+"="+encodeURIComponent(e)}).filter(function(t){return!1!==t}).join("&")},o.prototype.withEndpoint=function(t){return this.endpoint=t,this},o.prototype.withPath=function(t){return this.path=t,this},o.prototype.buildPostUrl=function(){return this.endpoint+this.path},o.prototype.buildGetUrl=function(){return this.endpoint+this.path+this.buildQueryString()},o.prototype.ajaxPost=function(t,e){return this._ajax("POST",t,e)},o.prototype._ajax=function(t,e,n){var o=this;return new Promise(function(i,r){function a(t){return"function"==typeof t}var s;s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var u="POST"===t?o.buildPostUrl():o.buildGetUrl();if(s.open(t,u,!0),s.onload=function(){4===s.readyState&&(200===s.status?(a(e)&&e(s.responseText),i(s.responseText)):(a(n)&&n(s.responseText,s.status),r(s.responseText,s.status)))},s.onerror=function(){a(n)&&n("error"),r()},"POST"===t){s.setRequestHeader("Content-Type","application/json");var c=o.params.length>0?o.params[0]:{};s.send(JSON.stringify(c))}else s.send()})},o.prototype.ajaxGet=function(t,e){return this._ajax("GET",t,e)},t.exports=o},,function(t,e,n){(function(e){function o(){var t={};this.init=function(e){e=e||window,t._smapp=e._smapp,t._smid=e._smid,t._smclientid=e._smclientid,t._smextid=e._smextid,t._smurloverride=e._smurloverride,t._smtags=e._smtags,t._smcustom=e._smcustom,t._smcustomparam=e._smcustomparam,t._smbanners=e._smbanners},this.set=function(e){i.isObject(e)&&i.isNotEmpty(e)&&Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&(t[n]=e[n])})},this.get=function(e){return t[e]}}var i=n(7);t.exports=new o}).call(e,n(0))},function(t,e,n){function o(t){return 0==t.indexOf("www.")?t.replace("www.",""):t}function i(t){return!t||0===t.length}function r(t){t=t||window;var e=t.location.href;return-1!=e.indexOf("?")?e.slice(e.indexOf("?")+1):""}function a(t){t=t||window;var e=t.location.href,n=-1!=e.indexOf("?")?e.slice(0,e.indexOf("?")):e;return i(n)?"":-1!=n.indexOf("#")?n.slice(n.indexOf("#")+1):""}function s(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(new Date).getTime().toString(16)+"-"+t()+t()+t()+"-"+t()+t()+"-"+t()+t()+"-"+t()+t()+"-"+t()+t()+t()}function u(t){t=t||window;var e=[];return C.getUrlParams(t).split("&").forEach(function(t){if(t){var n=t.split("="),o=n[0],i=n[1];e.push(o),e[o]=i}}),e}function c(t,e,n){return C.createCookie(t,e,n)}function l(t,e,n){var o=new Date;n&&(b.isNumber(n)?o=w.addDays.call(new Date,n):b.isObject(n)&&(o=w.add.call(new Date,n))),document.cookie=v.createCookieString(t,e,o,C.getDomain(document.domain)),h()&&window.localStorage.setItem(t,e)}function f(t){return C.readCookie(t)}function p(t){for(var e=t+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return h()?window.localStorage.getItem(t):null}function d(t){C.smCreateCookie(t,"",-1),h()&&window.localStorage.removeItem(t)}function m(t){var e=y.pad;return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"Z"}function h(){var t;try{t=window.localStorage;var e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}function g(){return void 0===window.smQueue?_.getInstance():window.smQueue}var v=n(34),w=n(35),y=n(23),b=n(7),_=n(36),C={smCreateCookie:c,smReadCookie:f,getDomain:o,isEmpty:i,getUrlParams:r,getUrlAnch:a,generateUUID:s,getUrlVars:u,createCookie:l,readCookie:p,eraseCookie:d,dateToISOString:m,getProcessQueue:g,globalMethods:{smCreateCookie:c,smReadCookie:f}};t.exports=C},function(t,e){function n(t){return"[object Array]"===h.call(t)}function o(t){return"[object String]"===h.call(t)}function i(t){return"[object Number]"===h.call(t)}function r(t){return"[object Undefined]"===h.call(t)}function a(t){return!r(t)}function s(t){return"[object Boolean]"===h.call(t)}function u(t){return"[object Object]"===h.call(t)}function c(t){return"[object Date]"===h.call(t)}function l(t){return"[object Function]"===h.call(t)}function f(t){return"[object Null]"===h.call(t)}function p(t){return!f(t)}function d(t){return r(t)||f(t)||0===Object.keys(t).length||t.length<=0}function m(t){return!d(t)}var h=Object.prototype.toString;t.exports={isArray:n,isString:o,isNumber:i,isUndefined:r,isNotUndefined:a,isBoolean:s,isObject:u,isDate:c,isFunction:l,isNull:f,isNotNull:p,isEmpty:d,isNotEmpty:m}},function(t,e,n){function o(t){return JSON.stringify(t)}function i(t){try{return JSON.parse(t)}catch(t){return new r(t),{}}}var r=n(14);t.exports={to:o,from:i}},function(t,e,n){(function(e){function o(){this.endpoint=s.endpoint,this.path=s.urls.r}function i(t,e,n){o.call(this),this.productUrl=t,this.frameId=e,this.productId=n}function r(t){o.call(this),this.uri="smevent:"+t}function a(){o.call(this)}var s=n(1),u=n(6),c=n(2),l=n(62),f=n(3);o.prototype.push=function(t){var e=new Image(1,1);t&&"function"==typeof t&&(e.onload=function(){setTimeout(t,500)}),e.src=this.buildRequest()},o.prototype.buildRequest=function(){return new f},i.prototype=Object.create(o.prototype),i.prototype.buildRequest=function(){var t=c.touch();return(new f).withEndpoint(this.endpoint).withPath(this.path).ap("tp","cf").ap("ii",this.frameId).ap("prid",this.productId).ap("uri",l.getPathFromUrl(this.productUrl)).ap("location",l.getOriginFromUrl(this.productUrl)).ap("uuid",l.getSmUuid(t)).ap("referrer",window.location.href).ap("smid",l.getGlobalFetcherParam("_smid")).ap("time",l.getDateIso()).ap("title",l.getDocumentParam("title")).ap("cp",l.getDate()).ap("client",l.getSmContactId(t)).ap("extid",l.getExtId()).buildGetUrl()},r.prototype=Object.create(o.prototype),r.prototype.buildRequest=function(){var t=c.touch();return(new f).withEndpoint(this.endpoint).withPath(this.path).ap("uri",this.uri).ap("location",l.getDocumentParam("domain")).ap("uuid",l.getSmUuid(t)).ap("referrer",l.getDocumentParam("referrer")).ap("smid",l.getGlobalFetcherParam("_smid")).ap("time",l.getDateIso()).ap("title",l.getDocumentParam("title")).ap("cp",l.getDate()).ap("tags",l.getGlobalFetcherParam("_smtags")).ap("client",l.getSmContactId(t)).ap("extid",l.getExtId).buildGetUrl()},a.prototype=Object.create(o.prototype),a.prototype.buildRequest=function(){var t=c.touch(),e=u.getUrlVars();return(new f).withEndpoint(this.endpoint).withPath(this.path).ap("uri",l.buildEventUri()).ap("location",l.getDocumentParam("domain")).ap("uuid",l.getSmUuid(t)).ap("referrer",l.getDocumentParam("referrer")).ap("smid",l.getGlobalFetcherParam("_smid")).ap("time",l.getDateIso()).ap("timestamp",l.getDate()).ap("session",l.getVisitsCounter()).ap("title",l.getDocumentParam("title")).ap("cp",l.getDate()).ap("conversation",l.getUrlVarsParam(e,"smconv")).ap("smrid",l.getUrlVarsParam(e,"smrid")).ap("smaid",l.getUrlVarsParam(e,"smaid")).ap("smlid",l.getUrlVarsParam(e,"smlid")).ap("smpid",l.getUrlVarsParam(e,"smpid")).ap("tags",l.getGlobalFetcherParam("_smtags")).ap("client",l.getSmContactId(t)).ap("extid",l.getExtId()).ap("goid",l.getCookieValue("__goadservices")).ap("ns",l.isNewSession()).ap("vs",l.getVisitSource()).buildGetUrl()};var p={SmEvent:r,TrackEvent:a,SmEventFrame:i};p._private={getUrlVarsParam:l.getUrlVarsParam,getGlobalFetcherParam:l.getGlobalFetcherParam,buildEventUri:l.buildEventUri,getDocumentParam:l.getDocumentParam,getSmUuid:l.getSmUuid,getSmContactId:l.getSmContactId,getDateIso:l.getDateIso,getDate:l.getDate,getVisitsCounter:l.getVisitsCounter,getExtId:l.getExtId,getCookieValue:l.getCookieValue,isNewSession:l.isNewSession,getVisitSource:l.getVisitSource},t.exports=p}).call(e,n(0))},,,,,function(t,e,n){(function(e){function o(t){e.error("Error occurred",t);var n=a.get("_smid")||window._smid,o=(new r).withEndpoint(i.endpoint).withPath(i.urls.error).ap("s",t.stackTrace||t.stack).ap("m",t.message).ap("u",document.location.href).ap("v",n);(new Image).src=o.buildGetUrl()}var i=n(1),r=n(3),a=n(5);t.exports=o}).call(e,n(0))},,,function(t,e){t.exports=function(){var t={},e=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(;n<o;n++){var i=arguments[n];!function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=e&&"[object Object]"===Object.prototype.toString.call(n[o])?extend(!0,t[o],n[o]):n[o])}(i)}return t}},function(t,e){var n=null;t.exports={initGlobalChatApiObject:function(){window.smLiveChat={enabled:!1},n=window.smLiveChat},exposeDefaultApi:function(){n.toggleChat=function(){return{success:!1,opened:!1,code:1,reason:"Waiting for response from server"}}},updateToggleChatError:function(t,e){n.toggleChat=function(){return{success:!1,opened:!1,code:t,reason:e}}},updateToggleChatActive:function(t){setTimeout(function(){n.enabled=!0,n.toggleChat=function(){return{success:!0,opened:t.toggleChat()}},window.smLiveChatAfterInitCallback&&"function"==typeof window.smLiveChatAfterInitCallback&&window.smLiveChatAfterInitCallback()},10)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,function(t,e){function n(){this.map={},this.timeline=[]}n.prototype.isEmpty=function(){return 0===Object.keys(this.map).length},n.prototype.size=function(){return Object.keys(this.map).length},n.prototype.clear=function(){this.map={}},n.prototype.set=function(t,e){return t&&e&&(this.timeline.push({index:t,action:"set",time:Date.now()}),this.map[t]=e),this},n.prototype.get=function(t){var e=this.map[t];return this.timeline.push({index:t,action:"get",status:"undefined"!==e,time:Date.now()}),e},n.prototype.has=function(t){var e=this.map.hasOwnProperty(t);return this.timeline.push({index:t,action:"has",status:e,time:Date.now()}),e},n.prototype.delete=function(t){return!!this.map.hasOwnProperty(t)&&delete this.map[t]},t.exports=n},,function(t,e){function n(t){return t<10?"0"+t:t}function o(t){return!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):0}t.exports={pad:n,safeZ:o}},,function(t,e,n){(function(e){var o=n(30),i={provided:!1},r=null,a=new Promise(function(t,a){n.e(3).then(function(e){var o=n(56);null===r&&(t(o),r=!0,i.get=function(){return o},i.provided=!0)}.bind(null,n)).catch(n.oe),setTimeout(function(){null===r&&(e.info("war script not loaded in time"),r=!1,a())},o.WAR_ENSURE_TIMEOUT)});i.ensure=a,t.exports=i}).call(e,n(0))},,,,,function(t,e){t.exports={WAR_PROCESSING_TIMEOUT:2500,WAR_CONFIG_REQUEST_TIMEOUT:2e3,WAR_REPORT_REQUEST_TIMEOUT:500,WAR_ENSURE_TIMEOUT:2e3,WAR_JSON_TRIGGER_TIME:750}},function(t,e,n){(function(e){function o(t,e){for(var n=!1,o=0;o<t.length;o++){var r=t[o];if(!r||0===r.length)return;var a=e.location.toString();if(i(a,r)||"/"===r[r.length-1]&&"/"!==a[a.length-1]&&i(e.location.toString(),r.substr(0,r.length-1))){n=!0;break}}return n}var i=n(39);t.exports=function(t,e,n){if(e=e||window,n=n||document,!t||!t.url||!t.exurl)return!1;if(t.url=t.url.length>0?t.url:["**"],t.domain){"[object Array]"!==Object.prototype.toString.call(t.domain)&&(t.domain=[t.domain]);var i=!1;if(t.domain.forEach(function(t){return"**"===t?(i=!0,!1):t&&n.domain.indexOf(t)>-1?(i=!0,!1):void 0}),!i)return!1}return!(!o(t.url,e)||o(t.exurl,e)||!0===t.ohp&&"/"!==e.location.pathname.toString())}}).call(e,n(0))},function(t,e,n){(function(e){function o(){this.data={},this.incrementedVisits=!1}var i=n(6);n(14);o.prototype.init=function(t){this.data.visits=t.visits,this.data.views=t.views,this.data.ts=t.ts,this.data.numberOfRejectionButtonClick=t.numberOfRejectionButtonClick,this.data.isNewSession=t.isNewSession||!1},o.prototype.loadSavedOrDefaults=function(){var t=this.loadSaved();return t?(t.isNewSession=!1,t):{visits:1,views:0,ts:(new Date).getTime(),numberOfRejectionButtonClick:0,isNewSession:!0}},o.prototype.checkIsNewSession=function(){return this.data.isNewSession||!1},o.prototype.loadSaved=function(){var t=i.smReadCookie("smvr");return t?this.deserialize(t):null},o.prototype.serialize=function(){return btoa(JSON.stringify(this.data))},o.prototype.deserialize=function(t){try{return JSON.parse(atob(t))}catch(t){return null}},o.prototype.save=function(){i.smCreateCookie("smvr",this.serialize(),3650)},o.prototype.hasIncrementedVisits=function(){return this.incrementedVisits},o.prototype.incrementViews=function(){var t=(new Date).getTime();this.data.views+=1,this.incrementedVisits=!1,t-this.data.ts>108e5&&(this.incrementedVisits=!0,this.data.visits+=1),this.data.ts=t},o.prototype.touch=function(){this.init(this.loadSavedOrDefaults()),this.incrementViews(),this.save()},o.prototype.incrementRejectionClick=function(){this.init(this.loadSavedOrDefaults()),this.data.numberOfRejectionButtonClick+=1,this.save()},t.exports=new o}).call(e,n(0))},function(t,e,n){function o(){var t={language:navigator.language||navigator.userLanguage};this.config=r({},t),this.set=function(t){this.config=r({},this.config,t)},this.get=function(){return i.from(i.to(this.config))}}var i=(n(1),n(8)),r=n(17);t.exports=new o},function(t,e){function n(t,e,n,o){var i="";return n&&(i="; expires="+n.toGMTString()),t+"="+e+i+"; path=/; domain="+o}t.exports={createCookieString:n}},function(t,e){function n(t){return o.call(this,{seconds:24*t*60*60})}function o(t){var e=new Date(this.getTime());return t.seconds?e.setTime(e.getTime()+1e3*t.seconds):t.hours&&e.setTime(e.getTime()+60*t.hours*60*1e3),e}t.exports={addDays:n,add:o}},function(t,e,n){var o=n(21);t.exports=function(){function t(){return{map:new o}}var e;return{getInstance:function(){return e||(e=new t),e}}}()},function(t,e){function n(t,e){e=e||window;for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}t.exports=n},function(t,e,n){(function(e){var o=n(1),i=n(9),r=n(25),a=n(30),s=n(71),u=n(7),c=n(5);t.exports=function(){n(32).touch(),n(2).touch();var t=n(57).get(),e=new Promise(function(t){setTimeout(function(){t()},a.WAR_JSON_TRIGGER_TIME)});r.ensure.then(function(t){t.QueueModifier.initRunner()}),(new i.TrackEvent).push(function(){Promise.all([t,r.ensure,e]).then(function(e){if(c.set({_smapp:e[0].a}),u.isNotNull(e[0].war)){var n=e[1];setTimeout(function(){n.WarCSExecutor.run(),t.then(n.QueueModifier.getRunner().run)},50)}})}),n(72)();var l=n(73),f=n(75),p=function(t){Promise.all([n(40).ensure(t),n(76)(t)]).then(function(e){var n=e[0],i=e[1];n&&l.register("wp",o.priority.wp).notify(function(){return n.setup(t.f)}),i&&l.register("p",o.priority.p).notify(function(){return i.setup(t.p)}),l.run()})};t.then(n(77));var d=function(){s(),t.then(function(t){p(t),f(t)})};r.ensure.then(function(t){t.QueueModifier.getRunner().processed.then(function(e){u.isNotNull(e.war)?t.Config.get().then(function(t){0===t.sp.length&&s()},s):s(),p(e),f(e)},function(){d()})},function(){d()})}}).call(e,n(0))},function(t,e){t.exports=function(t,e){return"**"===e||t.indexOf(e)>-1}},function(t,e,n){function o(){var t=[],e=null;this.ensure=function(o){return new Promise(function(i){!o||t.length||o.f&&o.f.length>0?n.e(2).then(function(o){e=n(60),e.apiConsetForms=t,i(e)}.bind(null,n)).catch(n.oe):i()})},this.enqueueApi=function(e){t.push({id:e[0],rv:e[1]})}}n(1);t.exports=new o},,,,,,,,,,,,,,,function(t,e,n){(function(e){function n(t,e){for(var n=!0,o=0;o<e.length;o++){if(!e[o](t)){n=!1;break}}return n}t.exports=n}).call(e,n(0))},,function(t,e,n){(function(e){function o(){var t=this;t.config=null,t.request=null,t.get=function(){return new Promise(function(e,n){if(t.config)return e(t.config);if(t.request)return t.request.then(function(){e(t.config)}).catch(function(){n()}),t.request;var o=a.urls.vc,u=a.endpoint;return t.request=(new i).withEndpoint(u).withPath(o).ap("s",r.get("_smid")).ajaxGet().then(function(n){t.config=s.from(n),e(t.config)}).catch(function(){n()})})}}var i=n(3),r=n(5),a=n(1),s=n(8);t.exports=new o}).call(e,n(0))},function(t,e,n){var o=n(59);t.exports=function(t){if(!0===t.mobile)return!0;var e=t.mobile?t.mobile:640;return o()>e}},function(t,e){t.exports=function(t){return t=t||window,t.innerWidth>0?t.innerWidth:t.width}},,function(t,e,n){(function(t){var e=n(1),o=n(5),i=n(6),r=n(37),a=n(9),s=n(14),u=n(18);try{var c=n(64).default;if(window.Promise||(window.Promise=c),void 0!==window[e.gvar])throw{message:"Second SALESmanago code detected. Remove duplicated code."};window[e.gvar]={},o.init(),u.initGlobalChatApiObject(),u.exposeDefaultApi(),r(i.globalMethods),r({smEvent:function(e,n){t.deprecated("smEvent() is depracated. Use sm('event', { name: 'event-name' }) instead."),new a.SmEvent(e).push(n)},buildEventUrl:function(){t.deprecated("No longer supported")}});var l=i.getUrlVars();r({client:l.smclient,conversation:l.smconv,smlid:l.smlid,smpid:l.smpid,storedClient:i.smReadCookie("smclient"),smQueue:i.getProcessQueue()}),n(69)(),n(70)(),n(78)(),n(38)(),n(82)(),window.addEventListener("message",function(t){var e=t.data,n={};try{n=JSON.parse(e)}catch(t){return}"BHR_SM_CLIENT"==n.topic&&i.smCreateCookie("smclient",n.call,365)})}catch(t){new s(t)}}).call(e,n(0))},function(t,e,n){(function(e){var o=n(5),i=n(6),r=n(32),a=n(63),s=n(2),u=n(7);t.exports={getUrlVarsParam:function(t,e){return t||(t=i.getUrlVars()),t[e]?t[e]:null},getGlobalFetcherParam:function(t){return o.get(t)},buildEventUri:function(t){t=t||window;var e,n=o.get("_smurloverride");if(n)e=n;else{e=t.location.pathname;var r=i.getUrlAnch();r&&(e=e+"#"+r);var a=i.getUrlParams();a&&(e=e+"?"+a)}return e},getDocumentParam:function(t,e){return e=e||document,e[t]},getSmUuid:function(t){return t||u.isObject(t)?t.smuuid||(t=s.getContactId()):t=s.getContactId(),t.smuuid},getSmContactId:function(t){return t||u.isObject(t)?t.smclient||(t=s.getContactId()):t=s.getContactId(),t.smclient},getDateIso:function(t){return t=u.isDate(t)?t:new Date,i.dateToISOString(t)},getDate:function(t){return t=u.isDate(t)?t:new Date,t.getTime()},getVisitsCounter:function(){return r.loadSavedOrDefaults().visits},getExtId:function(){var t=o.get("_smextid");return t?i.smReadCookie(t):null},getCookieValue:function(t){return i.smReadCookie(t)},isNewSession:function(){return r.checkIsNewSession()},getVisitSource:function(){var t=a.getVs();return t},getOriginFromUrl:function(t){return/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/.exec(t)[2]},getPathFromUrl:function(t){return/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/.exec(t)[3]}}}).call(e,n(0))},function(t,e,n){(function(e){function o(){this.vs=null}var i=n(1),r=n(6),a=n(3);o.prototype.fetch=function(t){t=t||document;var e=r.getUrlVars(),n=this;(new a).withEndpoint(i.endpoint).withPath(i.urls.vs).ap("location",t.domain).ap("referrer",t.referrer).ap("or",r.smReadCookie("_smor")).ap("conversation",e.smconv).ajaxGet(function(t){n.save(JSON.parse(t).visitSource)})},o.prototype.getVs=function(){if(this.vs)return this.vs;if(r.smReadCookie("_smvs")){var t=r.smReadCookie("_smvs");return this.vs=t,t}return this.fetch(),null},o.prototype.save=function(t){t&&(this.vs=t,r.smCreateCookie("_smvs",t,1))},t.exports=new o}).call(e,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function o(){}function i(t,e){return function(){t.apply(e,arguments)}}function r(t){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,r._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:u)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void u(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof r)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void f(i(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){u(t,e)}}function u(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&r._immediateFn(function(){t._handled||r._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function l(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,u(e,t))})}catch(t){if(n)return;n=!0,u(e,t)}}var p=n(68),d=setTimeout;r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new l(t,e,n)),n},r.prototype.finally=p.a,r.all=function(t){return new r(function(e,n){function o(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){o(t,e)},n)}i[t]=a,0==--r&&e(i)}catch(t){n(t)}}if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return e([]);for(var r=i.length,a=0;a<i.length;a++)o(a,i[a])})},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(e,n){for(var o=0,i=t.length;o<i;o++)t[o].then(e,n)})},r._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){d(t,0)},r._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.default=r}.call(e,n(65).setImmediate)},function(t,e,n){(function(t){function o(t,e){this._id=t,this._clearFn=e}var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(66),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,n(19))},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];return c[u]={callback:t,args:e},s(u),u++}function i(t){delete c[t]}function r(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(l)setTimeout(a,0,t);else{var e=c[t];if(e){l=!0;try{r(e)}finally{i(t),l=!1}}}}if(!t.setImmediate){var s,u=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),p.setImmediate=o,p.clearImmediate=i}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(19),n(67))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var t=i(a);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new u(t,e)),1!==m.length||h||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";function o(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}e.a=o},function(t,e,n){(function(e){var o=n(37),i=n(2),r=n(9).SmEvent,a="smclientid:",s="app2.salesmanago.pl";t.exports=function(){function t(t){if((t.origin==="https://"+s||t.origin==="http://"+s)&&t.data&&"string"==typeof t.data&&0==t.data.indexOf(a)){var e=t.data.replace(a,"");i.update(e),new r("SMFORM ["+t.source.top.location.pathname+"]").push()}}o({listener:t}),window.addEventListener?addEventListener("message",t,!1):attachEvent("onmessage",t)}}).call(e,n(0))},function(t,e,n){(function(e){t.exports=function(){!function(t){var e=t.pushState;t.pushState=function(n){"function"==typeof t.onpushstate&&t.onpushstate({state:n});var o=e.apply(t,arguments);return"function"==typeof t.onpushstateapplied&&t.onpushstateapplied({state:n},window.location.href),o},t.onpushstateapplied=function(){n(38)()}}(window.history)}}).call(e,n(0))},function(t,e,n){var o=n(6);t.exports=function(){var t=o.getProcessQueue();!t.map.has("initPopup")&&window.initPopup&&(t.map.set("initPopup","sm.js"),window.initPopup())}},function(t,e,n){var o=n(2);t.exports=function(t){t=t||document;var e=o.getContactId().smclient;if(e)for(var n=t.getElementsByClassName("sm-iframe-download-form")||[],i=0;i<n.length;i++){var r=n[i].getAttribute("src"),a=r+"?contactId="+e;n[i].setAttribute("src",a)}}},function(t,e,n){(function(e){function o(){this.watchQueue=new i,this.f={},this.loop=null}var i=n(74);o.prototype.register=function(t,e){var n=this;return n.watchQueue.push(t,e),{notify:function(e){n.f[t]=e,n.loop&&n.loop.then(function(){e()})}}},o.prototype.run=function(){function t(t){n.watchQueue.size()?e(t):t()}function e(e){var o=n.watchQueue.pop();n.f[o]().then(function(){t(e)})}var n=this;return n.loop=new Promise(function(e){t(e)})},t.exports=new o}).call(e,n(0))},function(t,e){function n(){this.data=[]}n.prototype.push=function(t,e){for(var n=0;n<this.data.length&&this.data[n][1]>e;n++);this.data.splice(n,0,[t,e])},n.prototype.pop=function(){var t=this.data.shift();return t?t[0]:null},n.prototype.size=function(){return this.data.length},t.exports=n},function(t,e,n){(function(e){function o(t){return null==t||0===t.length?"**":t}function i(t){var e=t.c,n=null;return e.filter(function(t){return!t.rr}).forEach(function(t){if(t.location.url&&(t.location.url=t.location.url.map(o)),t.location.domain&&(t.location.domain=t.location.domain.map(o)),s(t.location,a))return n=t,!1}),n}function r(t){return new Promise(function(e){if(t&&t.c&&t.c.length>0){var o=i(t);o||l?n.e(1).then(function(i){l=!0;var r=n(11);o?r.setup(o).then(function(n){c.provided&&c.get().Utils.scheduleChatActions(r,t,n),e()}):(r.destroy(),e())}.bind(null,n)).catch(n.oe):u.updateToggleChatError(2,"No chat available for current location")}else u.updateToggleChatError(2,"No chat available for current location"),e()})}var a=[n(58),n(31)],s=n(55),u=n(18),c=n(25),l=!1;t.exports=r}).call(e,n(0))},function(t,e,n){function o(t){return new Promise(function(e){t&&t.p&&t.p.length>0?n.e(0).then(function(t){e(n(20))}.bind(null,n)).catch(n.oe):e()})}t.exports=o},function(t,e,n){var o=n(9),i=n(3);t.exports=function(t){if(t.r.length){var e=window.location.href,n=smReadCookie("smclient"),r=smReadCookie("smuuid"),a=("https:"===document.location.protocol?"https://":"http://")+"app2.salesmanago.pl";for(var s in t.r){var u=new i;if(-1!==e.indexOf(t.r[s].sUrl)){var c=t.r[s],l=document.getElementById(c.dId);if(l){u.withEndpoint(a).withPath(c.fUrl).ap("url",window.location.href).ap("wizardId",c.id),r&&u.ap("uuid",r),n&&u.ap("smc",n);var f=document.createElement("iframe");switch(f.setAttribute("src",u.buildGetUrl()),f.setAttribute("scrolling","no"),f.setAttribute("id","sm_frame_"+c.id),f.style.width="0",f.style.height="0",f.style.minWidth="100%",f.style.maxWidth="100%",f.style.border="0",c.dPl){case"REPLACE":l.innerHTML="",l.appendChild(f);break;case"ABOVE":l.insertBefore(f,l.firstChild);break;case"BELOW":l.appendChild(f)}}}}var p=window.addEventListener?"addEventListener":"attachEvent";(0,window[p])("attachEvent"===p?"onmessage":"message",function(t){var e=t.data;switch(e.type){case"sm-link":new o.SmEventFrame(e.url,e.frameId,e.productId).push(),e.newTab?window.open(e.url+"?sm_source=recommendation_frame","_blank"):location.href=e.url+"?sm_source=recommendation_frame";break;case"sm-height-transfer":if(e.frameHeight&&e.frameId){document.getElementById("sm_frame_"+e.frameId).style.height=e.frameHeight+"px"}}},!1)}}},function(t,e,n){(function(e){function o(t){t=t||window;try{var e=t[t[a]],n=e.q;if(n&&n.length>0)for(var o=0;o<n.length;o++)i.apply(null,n[o]);t[t[a]]=i}catch(t){return!1}}function i(t,o){function i(t){n.e(0).then(function(e){var o=n(20);t(o)}.bind(null,n)).catch(n.oe)}if(t&&o)if("extEvent"===t)n(79)(o);else if("webPush"===t)n(40).enqueueApi(o);else if("popup"===t)if("show"===o){var a=arguments[2];i(function(t){t.show(a)})}else"close"===o&&i(function(t){t.close()});else"event"===t?new r.SmEvent(o.name).push(o.onLoad):"config"===t?"set"===o&&n(33).set(arguments[2]):e.error("Unknown action: "+t)}var r=n(9),a="SalesmanagoObject";t.exports=o}).call(e,n(0))},function(t,e,n){(function(e){function o(t){var e=new Image(1,1);e.src=i.build(t)}var i=n(80);t.exports=o}).call(e,n(0))},function(t,e,n){function o(){function t(){return{client:a.get("_smid"),timestamp:(new Date).getUTCDate(),cid:r.getContactId().smclient}}this.build=function(e){var n=t(),o=new s(i.endpoint,i.urls.ext,n,c);for(var r in e)e.hasOwnProperty(r)&&o.addParameter(r,e[r]);return o.buildUrl()}}var i=n(1),r=n(2),a=n(5),s=n(81),u=n(21),c=(new u).set("client","a").set("owner","b").set("email","c").set("cid","d").set("contactExtEventType","e").set("date","f").set("description","g").set("products","h").set("location","i").set("value","j").set("details","k").set("externalId","l").set("timestamp","m").set("userId","n");t.exports=new o},function(t,e,n){function o(t,e,n,o){this.params=[],this.request=new i,this.request.withEndpoint(t),this.request.withPath(e),this.commonParams=n,this.parameterMap=o}var i=n(3),r=n(7);o.prototype.addParameter=function(t,e){this.params[t]=e},o.prototype.appendToRequest=function(t){var e=this;for(var n in t)t.hasOwnProperty(n)&&t[n]&&function(n){if(e.parameterMap.has(n)){var o=e.parameterMap.get(n);r.isArray(t[n])?t[n].forEach(function(t){e.request.ap(o,t)}):e.request.ap(o,t[n])}}(n)},o.prototype.buildUrl=function(){return this.appendToRequest(this.commonParams),this.appendToRequest(this.params),this.request.buildGetUrl()},t.exports=o},function(t,e,n){(function(e){var o=n(5),i=n(1),r=n(3),a=n(9),s=n(7);t.exports=function(){var t=s.isBoolean(o.get("_smcustom")),e=s.isBoolean(o.get("_smbanners")),n=o.get("_smid");if(t||e){var u=o.get("_smcustomparam"),c=(new r).ap("uri",a._private.buildEventUri).ap("location",a._private.getDocumentParam("domain")).ap("uuid",function(){return a._private.getSmUuid()}).ap("referrer",a._private.getDocumentParam("referrer")).ap("time",a._private.getDateIso).ap("conversation",function(){return a._private.getUrlVarsParam(null,"smconv")}).ap("client",function(){return a._private.getSmContactId()}).ap("title",a._private.getDocumentParam("title")).ap("extid",a._private.getExtId).ap("custom",u).ap("banners",e),l=c.buildQueryString();!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=i.endpoint+i.urls.custom(n)+l;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}}}).call(e,n(0))}]);