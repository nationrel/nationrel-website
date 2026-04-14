var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function A(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),j={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(j,e)?!1:Mt.test(e)?Nt[e]=!0:(j[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function M(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=M(En),On=h({},En,{view:0,detail:0}),kn=M(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:N,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=M(Nn),Fn=M(h({},Nn,{dataTransfer:0})),In=M(h({},On,{relatedTarget:0})),Ln=M(h({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=M(h({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=M(h({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function N(){return Un}var Wn=M(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:N,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=M(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=M(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:N})),qn=M(h({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=M(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=M(h({},En,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=gn&&`CompositionEvent`in window,Qn=null;gn&&`documentMode`in document&&(Qn=document.documentMode);var $n=gn&&`TextEvent`in window&&!Qn,er=gn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=Sn(),xn=bn=yn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Ht(Tt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(gn){var _r;if(gn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,ln(e)),mn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=gn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ut(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};gn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),At(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),P(e)}function ci(e,t){return oi(e,null,null,t),P(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function P(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=fi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=fi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=fi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function vi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var I=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){I[Si++]=wi,I[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-Ke(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=I[--Si],I[Si]=null,wi=I[--Si],I[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fi=Fi.return}}function Hi(e){if(e!==Fi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=Fi?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=Fi=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=fe(null),qi=null,Ji=null;function Yi(e,t,n){k(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,pe(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=D.S;D.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=fe(null);function ba(){var e=ya.current;return e===null?K.pooledCache:e}function xa(e,t){t===null?k(ya,ya.current):k(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=F(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case te:return t=ka(t),f(e,t,n)}if(ce(t)||ae(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=ka(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=ka(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&Ai(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=ka(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=P(e),li(e,null,n),t}return oi(e,r,t,n),P(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,A(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=fe(null),eo=fe(0);function to(e,t){e=Wl,k(eo,e),k($a,t),Wl=e|t.baseLanes}function no(){k(eo,Wl),k($a,$a.current)}function ro(){Wl=eo.current,pe($a),pe(eo)}var io=fe(null),ao=null;function oo(e){var t=e.alternate;k(z,z.current&1),k(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){k(z,z.current),k(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(k(z,z.current),k(io,e),ao===null&&(ao=e)):lo(e)}function lo(){k(z,z.current),k(io,io.current)}function uo(e){pe(io),ao===e&&(ao=null),pe(z)}var z=fe(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){D.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Oa(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((po&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ic=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=B;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Dr(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Dr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return na(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,A(e,n)}}var zs={readContext:na,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(R){var n=ki,r=Oi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ti(e)}function Ys(e){console.error(e)}function Xs(e){ti(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=io.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),qa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&s&&Mi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=F(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=F(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ui(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(z.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?oo(t):lo(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=F(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=F(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=F(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(z,o),ac(e,t,r,n),r=R?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=F(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=F(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(z,z.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,R&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Gi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),Fi=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Fi=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Fi=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Fi=t,L=null,e=!0)),e||zi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=K,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Hi(t))Bi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Xi(t.type),U(t),null;case 19:if(pe(z),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return k(z,z.current&1|2),R&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return U(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=z.current,k(z,a?n&1|2:n&1),R&&Ai(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(z),null;case 4:return ye(),null;case 10:return Xi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&pe(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ni(t),t.tag){case 3:Xi(ca),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:pe(z);break;case 10:Xi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&pe(ya);break;case 24:Xi(ca)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||R){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,ko(e),Na=null,Pa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=F(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function Cu(e,t){B=null,D.H=zs,t===Ca||t===Ta?(t=ja(),Y=3):t===wa?(t=ja(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(J&4194048)===J?ao===null:(J&62914560)===J||J&536870912?e===ao:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&io.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ai()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Da(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Ji=qi=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ga(t,n,2),r!==null&&(tc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ci(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),ut(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=Ln;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=`modulepreload`,y=function(e){return`/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ne(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return ae(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ne(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||ee(),unstable_mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function se(e,t,n=`/`){return ce(e,t,n,!1)}function ce(e,t,n,r){let i=Ce((typeof t==`string`?ie(t):t).pathname||`/`,n);if(i==null)return null;let a=O(e);ue(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Se(i);o=ye(a[e],t,r)}return o}function D(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function O(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=je([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),O(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,k=1,me=10,he=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=he),t&&(r+=pe),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?k:me),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:je([a,u.pathname]),pathnameBase:Me(je([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=je([a,u.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Ee(n.substring(1),`/`):Ee(n,t)):a=t,{pathname:a,search:Ne(r),hash:Pe(i)}}function Ee(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.join(`/`).replace(/\/\/+/g,`/`),Me=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ne=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Pe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Fe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ie(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Le(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Re=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ze(e,t){let n=e;if(typeof n!=`string`||!we.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Re)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ce(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Be=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Be);var Ve=[`GET`,...Be];new Set(Ve);var He=_.createContext(null);He.displayName=`DataRouter`;var Ue=_.createContext(null);Ue.displayName=`DataRouterState`;var We=_.createContext(!1),Ge=_.createContext({isTransitioning:!1});Ge.displayName=`ViewTransition`;var Ke=_.createContext(new Map);Ke.displayName=`Fetchers`;var qe=_.createContext(null);qe.displayName=`Await`;var Je=_.createContext(null);Je.displayName=`Navigation`;var Ye=_.createContext(null);Ye.displayName=`Location`;var Xe=_.createContext({outlet:null,matches:[],isDataRoute:!1});Xe.displayName=`Route`;var Ze=_.createContext(null);Ze.displayName=`RouteError`;var Qe=`REACT_ROUTER_ERROR`,$e=`REDIRECT`,et=`ROUTE_ERROR_RESPONSE`;function tt(e){if(e.startsWith(`${Qe}:${$e}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function nt(e){if(e.startsWith(`${Qe}:${et}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Fe(t.status,t.statusText,t.data)}catch{}}function rt(e,{relative:t}={}){T(it(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Je),{hash:i,pathname:a,search:o}=ut(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:je([n,a])),r.createHref({pathname:s,search:o,hash:i})}function it(){return _.useContext(Ye)!=null}function at(){return T(it(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Ye).location}var ot=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function st(e){_.useContext(Je).static||_.useLayoutEffect(e)}function A(){let{isDataRoute:e}=_.useContext(Xe);return e?kt():ct()}function ct(){T(it(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(He),{basename:t,navigator:n}=_.useContext(Je),{matches:r}=_.useContext(Xe),{pathname:i}=at(),a=JSON.stringify(ke(r)),o=_.useRef(!1);return st(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(E(o.current,ot),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:je([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function lt(){let{matches:e}=_.useContext(Xe),t=e[e.length-1];return t?t.params:{}}function ut(e,{relative:t}={}){let{matches:n}=_.useContext(Xe),{pathname:r}=at(),i=JSON.stringify(ke(n));return _.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function dt(e,t){return ft(e,t)}function ft(e,t,n){T(it(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Je),{matches:i}=_.useContext(Xe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;jt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=at(),d;if(t){let e=typeof t==`string`?ie(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=se(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=yt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:je([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:je([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Ye.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function pt(){let e=Ot(),t=Ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var mt=_.createElement(pt,null),ht=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=nt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(Xe.Provider,{value:this.props.routeContext},_.createElement(Ze.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(_t,{error:e},t):t}};ht.contextType=We;var gt=new WeakMap;function _t({children:e,error:t}){let{basename:n}=_.useContext(Je);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=tt(t.digest);if(e){let r=gt.get(t);if(r)throw r;let i=ze(e.location,n);if(Re&&!gt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw gt.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function vt({routeContext:e,match:t,children:n}){let r=_.useContext(He);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Xe.Provider,{value:e},n)}function yt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Le(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||mt,o&&(s<0&&c===0?(jt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(vt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(ht,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=_.useContext(He);return T(t,bt(e)),t}function St(e){let t=_.useContext(Ue);return T(t,bt(e)),t}function Ct(e){let t=_.useContext(Xe);return T(t,bt(e)),t}function wt(e){let t=Ct(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Tt(){return wt(`useRouteId`)}function Et(){return St(`useNavigation`).navigation}function Dt(){let{matches:e,loaderData:t}=St(`useMatches`);return _.useMemo(()=>e.map(e=>D(e,t)),[e,t])}function Ot(){let e=_.useContext(Ze),t=St(`useRouteError`),n=wt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function kt(){let{router:e}=xt(`useNavigate`),t=wt(`useNavigate`),n=_.useRef(!1);return st(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{E(n.current,ot),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var At={};function jt(e,t,n){!t&&!At[e]&&(At[e]=!0,E(!1,n))}_.useOptimistic,_.memo(Mt);function Mt({routes:e,future:t,state:n,isStatic:r,onError:i}){return ft(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function j(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Nt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!it(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=_.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Je.Provider,{value:c},_.createElement(Ye.Provider,{children:t,value:h}))}function Pt({children:e,location:t}){return dt(Ft(e),t)}function Ft(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Ft(e.props.children,i));return}T(e.type===j,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ft(e.props.children,i)),n.push(a)}),n}var It=`get`,Lt=`application/x-www-form-urlencoded`;function Rt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function zt(e){return Rt(e)&&e.tagName.toLowerCase()===`button`}function Bt(e){return Rt(e)&&e.tagName.toLowerCase()===`form`}function Vt(e){return Rt(e)&&e.tagName.toLowerCase()===`input`}function Ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ut(e,t){return e.button===0&&(!t||t===`_self`)&&!Ht(e)}function Wt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Gt(e,t){let n=Wt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Kt=null;function qt(){if(Kt===null)try{new FormData(document.createElement(`form`),0),Kt=!1}catch{Kt=!0}return Kt}var Jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Yt(e){return e!=null&&!Jt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lt}"`),null):e}function Xt(e,t){let n,r,i,a,o;if(Bt(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||It,i=Yt(e.getAttribute(`enctype`))||Lt,a=new FormData(e)}else if(zt(e)||Vt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||It,i=Yt(e.getAttribute(`formenctype`))||Yt(o.getAttribute(`enctype`))||Lt,a=new FormData(o,e),!qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Rt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=It,r=null,i=Lt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Zt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Qt=/[&><\u2028\u2029]/g;function $t(e){return e.replace(Qt,e=>Zt[e])}function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ce(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=_.useContext(He);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=_.useContext(Ue);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=_.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=_.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=_.useContext(mn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let{router:n}=fn(),r=_.useMemo(()=>se(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement(bn,{page:e,matches:r,...t}):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=at(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=_.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function xn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Sn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Sn&&(window.__reactRouterVersion=`7.13.2`)}catch{}function Cn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=_.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Nt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function wn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Nt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}wn.displayName=`unstable_HistoryRouter`;var Tn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:v}=_.useContext(Je),y=typeof l==`string`&&Tn.test(l),b=ze(l,h);l=b.to;let x=rt(l,{relative:r}),S=at(),C=null;if(o){let e=Ae(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:je([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=gn(n,p),ee=Mn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:v});function te(t){e&&e(t),t.defaultPrevented||ee(t)}let ne=!(b.isExternal||i),re=_.createElement(`a`,{...p,...E,href:(ne?C:void 0)||b.absoluteURL||x,onClick:ne?te:e,ref:xn(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,re,_.createElement(vn,{page:x})):re});M.displayName=`Link`;var En=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ut(a,{relative:c.relative}),d=at(),f=_.useContext(Ue),{navigator:p,basename:m}=_.useContext(Je),h=f!=null&&Un(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ce(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(M,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});En.displayName=`NavLink`;var Dn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=It,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=_.useContext(Je),g=In(),v=Ln(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Tn.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Dn.displayName=`Form`;function On({getKey:e,storageKey:t,...n}){let r=_.useContext(mn),{basename:i}=_.useContext(Je),a=at(),o=Dt();Vn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Bn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${$t(JSON.stringify(t||Rn))}, ${$t(JSON.stringify(s))})`}})}On.displayName=`ScrollRestoration`;function kn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function An(e){let t=_.useContext(He);return T(t,kn(e)),t}function jn(e){let t=_.useContext(Ue);return T(t,kn(e)),t}function Mn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=A(),d=at(),f=ut(e,{relative:o});return _.useCallback(p=>{if(Ut(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Nn(e){E(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=_.useRef(Wt(e)),n=_.useRef(!1),r=at(),i=_.useMemo(()=>Gt(r.search,n.current?null:t.current),[r.search]),a=A();return[i,_.useCallback((e,t)=>{let r=Wt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Pn=0,Fn=()=>`__${String(++Pn)}__`;function In(){let{router:e}=An(`useSubmit`),{basename:t}=_.useContext(Je),n=Tt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Xt(e,t);a.navigate===!1?await r(a.fetcherKey||Fn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ln(e,{relative:t}={}){let{basename:n}=_.useContext(Je),r=_.useContext(Xe);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ut(e||`.`,{relative:t})},o=at();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:je([n,a.pathname])),re(a)}var Rn=`react-router-scroll-positions`,zn={};function Bn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ce(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Vn({getKey:e,storageKey:t}={}){let{router:n}=An(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=jn(`useScrollRestoration`),{basename:a}=_.useContext(Je),o=at(),s=Dt(),c=Et();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Hn(_.useCallback(()=>{if(c.state===`idle`){let t=Bn(o,s,a,e);zn[t]=window.scrollY}try{sessionStorage.setItem(t||Rn,JSON.stringify(zn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Rn);e&&(zn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(zn,()=>window.scrollY,e?(t,n)=>Bn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Hn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Un(e,{relative:t}={}){let n=_.useContext(Ge);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=An(`useViewTransitionState`),i=ut(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var N=e=>typeof e==`string`,Wn=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Gn=e=>e==null?``:String(e),Kn=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},qn=/###/g,Jn=e=>e&&e.includes(`###`)?e.replace(qn,`.`):e,Yn=e=>!e||N(e),Xn=(e,t,n)=>{let r=N(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(Yn(e))return{};let t=Jn(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return Yn(e)?{}:{obj:e,k:Jn(r[i])}},Zn=(e,t,n)=>{let{obj:r,k:i}=Xn(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=Xn(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=Xn(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},Qn=(e,t,n,r)=>{let{obj:i,k:a}=Xn(e,t,Object);i[a]=i[a]||[],i[a].push(n)},$n=(e,t)=>{let{obj:n,k:r}=Xn(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},er=(e,t,n)=>{let r=$n(e,n);return r===void 0?$n(t,n):r},tr=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?N(e[r])||e[r]instanceof String||N(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):tr(e[r],t[r],n):e[r]=t[r]);return e},nr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),rr={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},ir=e=>N(e)?e.replace(/[&<>"'\/]/g,e=>rr[e]):e,ar=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},or=[` `,`,`,`?`,`!`,`;`],sr=new ar(20),cr=(e,t,n)=>{t||=``,n||=``;let r=or.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=sr.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},lr=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},ur=e=>e?.replace(/_/g,`-`),dr={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},fr=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||dr,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(N(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},pr=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},mr=class extends pr{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):N(n)&&i?o.push(...n.split(i)):o.push(n)));let s=$n(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!N(n)?s:lr(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),Zn(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(N(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=$n(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?tr(s,n,i):s={...s,...n},Zn(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},hr={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},gr=Symbol(`i18next/PATH_KEY`);function _r(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===gr?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function vr(e,t){let{[gr]:n}=e(_r()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`;if(n.length>1&&i){let e=t?.ns,a=Array.isArray(e)?e:null;if(a&&a.length>1&&a.slice(1).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var yr=e=>!N(e)&&typeof e!=`boolean`&&typeof e!=`number`,br=class e extends pr{constructor(e,t={}){super(),Kn([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=fr.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=yr(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!cr(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:N(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:N(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=vr(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?vr(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!N(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let ee=yr(E),te=Object.prototype.toString.apply(E);if(y&&E&&ee&&!_.includes(te)&&!(N(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:yr(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&N(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=N(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!N(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=N(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=hr.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return N(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?vr(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!N(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(N(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!N(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},xr=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=fr.create(`languageUtils`)}getScriptPartFromCode(e){if(e=ur(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=ur(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(N(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),N(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return N(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):N(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},Sr={zero:0,one:1,two:2,few:3,many:4,other:5},Cr={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},wr=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=fr.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=ur(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Cr;if(!e.match(/-|_/))return Cr;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Sr[e]-Sr[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Tr=(e,t,n,r=`.`,i=!0)=>{let a=er(e,t,n);return!a&&i&&N(n)&&(a=lr(e,n,r),a===void 0&&(a=lr(t,n,r))),a},Er=e=>e.replace(/\$/g,`$$$$`),Dr=class{constructor(e={}){this.logger=fr.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?ir:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?nr(i):a||`{{`,this.suffix=o?nr(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u||`-`,this.unescapeSuffix=this.unescapePrefix?``:l||``,this.nestingPrefix=d?nr(d):f||nr(`$t(`),this.nestingSuffix=p?nr(p):m||nr(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Tr(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Tr(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp();let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Er(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Er(this.escape(e)):Er(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=N(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !N(a)&&!this.useRawValueToEscape&&(a=Gn(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${nr(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!N(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!N(i))return i;N(i)||(i=Gn(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},Or=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},kr=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(ur(r),i),t[o]=s),s(n)}},Ar=e=>(t,n,r)=>e(ur(n),r)(t),jr=class{constructor(e={}){this.logger=fr.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?kr:Ar;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=kr(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&!i[0].includes(`)`)&&i.find(e=>e.includes(`)`))){let e=i.findIndex(e=>e.includes(`)`));i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Or(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},Mr=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Nr=class extends pr{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=fr.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{Qn(n.loaded,[i],a),Mr(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();N(e)&&(e=this.languageUtils.toResolveHierarchy(e)),N(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Pr=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),N(e[1])&&(t.defaultValue=e[1]),N(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Fr=e=>(N(e.ns)&&(e.ns=[e.ns]),N(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),N(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Ir=()=>{},Lr=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Rr=class e extends pr{constructor(e={},t){if(super(),this.options=Fr(e),this.services={},this.logger=fr,this.modules={external:[]},Lr(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(N(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Pr();this.options={...n,...this.options,...Fr(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?fr.init(r(this.modules.logger),this.options):fr.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:jr;let t=new xr(this.options);this.store=new mr(this.options.resources,this.options);let n=this.services;n.logger=fr,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new wr(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new Dr(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Nr(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new br(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Ir,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=Wn(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Ir){let n=t,r=N(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=Wn();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Ir,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&hr.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=Wn();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=N(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(N(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n){let r=(e,t,...i)=>{let a;a=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(i)),a.lng=a.lng||r.lng,a.lngs=a.lngs||r.lngs,a.ns=a.ns||r.ns,a.keyPrefix!==``&&(a.keyPrefix=a.keyPrefix||n||r.keyPrefix);let o={...this.options,...a};typeof a.keyPrefix==`function`&&(a.keyPrefix=vr(a.keyPrefix,o));let s=this.options.keySeparator||`.`,c;return a.keyPrefix&&Array.isArray(e)?c=e.map(e=>(typeof e==`function`&&(e=vr(e,o)),`${a.keyPrefix}${s}${e}`)):(typeof e==`function`&&(e=vr(e,o)),c=a.keyPrefix?`${a.keyPrefix}${s}${e}`:e),this.t(c,a)};return N(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=Wn();return this.options.ns?(N(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=Wn();N(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new xr(Pr());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Ir){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new mr(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...Pr().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new Dr(n)}return a.translator=new br(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();Rr.createInstance,Rr.dir,Rr.init,Rr.loadResources,Rr.reloadResources,Rr.use,Rr.changeLanguage,Rr.getFixedT,Rr.t,Rr.exists,Rr.setDefaultNamespace,Rr.hasLoadedNamespace,Rr.loadNamespaces,Rr.loadLanguages;var zr=(e,t,n,r)=>{let i=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,`warn`,`react-i18next::`,!0);Kr(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console?.warn&&console.warn(...i)},Br={},Vr=(e,t,n,r)=>{Kr(n)&&Br[n]||(Kr(n)&&(Br[n]=new Date),zr(e,t,n,r))},Hr=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off(`initialized`,n)},0),t()};e.on(`initialized`,n)}},Ur=(e,t,n)=>{e.loadNamespaces(t,Hr(e,n))},Wr=(e,t,n,r)=>{if(Kr(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Ur(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,Hr(e,r))},Gr=(e,t,n={})=>!t.languages||!t.languages.length?(Vr(t,`NO_LANGUAGES`,`i18n.languages were undefined or empty`,{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf(`languageChanging`)>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}),Kr=e=>typeof e==`string`,qr=e=>typeof e==`object`&&!!e,Jr=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Yr={"&amp;":`&`,"&#38;":`&`,"&lt;":`<`,"&#60;":`<`,"&gt;":`>`,"&#62;":`>`,"&apos;":`'`,"&#39;":`'`,"&quot;":`"`,"&#34;":`"`,"&nbsp;":` `,"&#160;":` `,"&copy;":`©`,"&#169;":`©`,"&reg;":`®`,"&#174;":`®`,"&hellip;":`…`,"&#8230;":`…`,"&#x2F;":`/`,"&#47;":`/`},Xr=e=>Yr[e],Zr={bindI18n:`languageChanged`,bindI18nStore:``,transEmptyNodeValue:``,transSupportBasicHtmlNodes:!0,transWrapTextNodes:``,transKeepBasicHtmlNodesFor:[`br`,`strong`,`i`,`p`],useSuspense:!0,unescape:e=>e.replace(Jr,Xr),transDefaultProps:void 0},Qr=(e={})=>{Zr={...Zr,...e}},$r=()=>Zr,ei,ti=e=>{ei=e},ni=()=>ei,ri={type:`3rdParty`,init(e){Qr(e.options.react),ti(e)}},ii=(0,_.createContext)(),ai=class{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}},oi=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),si=o(((e,t)=>{t.exports=oi()}))(),ci={t:(e,t)=>{if(Kr(t))return t;if(qr(t)&&Kr(t.defaultValue))return t.defaultValue;if(typeof e==`function`)return``;if(Array.isArray(e)){let t=e[e.length-1];return typeof t==`function`?``:t}return e},ready:!1},li=()=>()=>{},P=(e,t={})=>{let{i18n:n}=t,{i18n:r,defaultNS:i}=(0,_.useContext)(ii)||{},a=n||r||ni();a&&!a.reportNamespaces&&(a.reportNamespaces=new ai),a||Vr(a,`NO_I18NEXT_INSTANCE`,`useTranslation: You will need to pass in an i18next instance by using initReactI18next`);let o=(0,_.useMemo)(()=>({...$r(),...a?.options?.react,...t}),[a,t]),{useSuspense:s,keyPrefix:c}=o,l=e||i||a?.options?.defaultNS,u=Kr(l)?[l]:l||[`translation`],d=(0,_.useMemo)(()=>u,u);a?.reportNamespaces?.addUsedNamespaces?.(d);let f=(0,_.useRef)(0),p=(0,_.useCallback)(e=>{if(!a)return li;let{bindI18n:t,bindI18nStore:n}=o,r=()=>{f.current+=1,e()};return t&&a.on(t,r),n&&a.store.on(n,r),()=>{t&&t.split(` `).forEach(e=>a.off(e,r)),n&&n.split(` `).forEach(e=>a.store.off(e,r))}},[a,o]),m=(0,_.useRef)(),h=(0,_.useCallback)(()=>{if(!a)return ci;let e=!!(a.isInitialized||a.initializedStoreOnce)&&d.every(e=>Gr(e,a,o)),n=t.lng||a.language,r=f.current,i=m.current;if(i&&i.ready===e&&i.lng===n&&i.keyPrefix===c&&i.revision===r)return i;let s={t:a.getFixedT(n,o.nsMode===`fallback`?d:d[0],c),ready:e,lng:n,keyPrefix:c,revision:r};return m.current=s,s},[a,d,c,o,t.lng]),[g,v]=(0,_.useState)(0),{t:y,ready:b}=(0,si.useSyncExternalStore)(p,h,h);(0,_.useEffect)(()=>{if(a&&!b&&!s){let e=()=>v(e=>e+1);t.lng?Wr(a,t.lng,d,e):Ur(a,d,e)}},[a,t.lng,d,b,s,g]);let x=a||{},S=(0,_.useRef)(null),C=(0,_.useRef)(),w=e=>{let t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;let n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,`__original`))try{Object.defineProperty(n,`__original`,{value:e,writable:!1,enumerable:!1,configurable:!1})}catch{}return n},T=(0,_.useMemo)(()=>{let e=x,t=e?.language,n=e;e&&(S.current&&S.current.__original===e&&C.current===t?n=S.current:(n=w(e),S.current=n,C.current=t));let r=!b&&!s?(...e)=>(Vr(a,`USE_T_BEFORE_READY`,`useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.`),y(...e)):y,i=[r,n,b];return i.t=r,i.i18n=n,i.ready=b,i},[y,x,b,x.resolvedLanguage,x.language,x.languages]);if(a&&s&&!b)throw new Promise(e=>{let n=()=>e();t.lng?Wr(a,t.lng,d,n):Ur(a,d,n)});return T},ui=`国可工软 | FMEA、Weibull、SPC、可靠性工业软件国产替代`,di=`国可工软（苏州）科技有限公司，专注质量可靠性工业软件20年，提供FMEA、Weibull、SPC、FTA等完整产品线，国产化替代进口软件领军企业，服务400+客户。`,fi=`https://www.nationrel.com`,pi=`https://www.nationrel.com/og-image.png`;function F(e,t,n=!1){let r=n?`property`:`name`,i=document.querySelector(`meta[${r}="${e}"]`);i||(i=document.createElement(`meta`),i.setAttribute(r,e),document.head.appendChild(i)),i.setAttribute(`content`,t)}function mi(e,t){let n=document.querySelector(`link[rel="${e}"]`);n||(n=document.createElement(`link`),n.setAttribute(`rel`,e),document.head.appendChild(n)),n.setAttribute(`href`,t)}function hi(e,t){let n=document.querySelector(`script[data-seo-id="${e}"]`);n||(n=document.createElement(`script`),n.setAttribute(`type`,`application/ld+json`),n.setAttribute(`data-seo-id`,e),document.head.appendChild(n)),n.textContent=JSON.stringify(t)}function gi(e){let t=document.querySelector(`script[data-seo-id="${e}"]`);t&&t.remove()}function _i(e={}){let{title:t,description:n,keywords:r,canonical:i,ogTitle:a,ogDescription:o,ogImage:s,ogType:c=`website`,noIndex:l=!1,structuredData:u}=e;(0,_.useEffect)(()=>{let e=t?`${t} | 国可工软`:ui,d=n||di,f=i?`${fi}${i}`:fi,p=a||e,m=o||d,h=s||pi;return document.title=e,F(`description`,d),r&&F(`keywords`,r),F(`robots`,l?`noindex, nofollow`:`index, follow, max-image-preview:large, max-snippet:-1`),mi(`canonical`,f),F(`og:type`,c,!0),F(`og:url`,f,!0),F(`og:title`,p,!0),F(`og:description`,m,!0),F(`og:image`,h,!0),F(`og:locale`,`zh_CN`,!0),F(`og:site_name`,`国可工软`,!0),F(`twitter:card`,`summary_large_image`),F(`twitter:title`,p),F(`twitter:description`,m),F(`twitter:image`,h),u&&(Array.isArray(u)?u:[u]).forEach((e,t)=>{hi(`page-seo-${t}`,e)}),()=>{document.title=ui,F(`description`,di),F(`robots`,`index, follow, max-image-preview:large, max-snippet:-1`),mi(`canonical`,fi),F(`og:url`,fi,!0),F(`og:title`,ui,!0),F(`og:description`,di,!0),u&&(Array.isArray(u)?u:[u]).forEach((e,t)=>gi(`page-seo-${t}`))}},[t,n,i])}var vi={header:{logoText:`国可 | Nationrel`,logoAlt:`国可工软`,tagline:`应用可靠性工程`},products:{title:`产品与服务`,subtitle:`近20款自主研发与合作软件产品，覆盖FMEA、寿命分析、加速试验、FTA等可靠性关键领域`,viewAllProducts:`查看全部产品`,overview:`产品概述`,highlights:`核心亮点`,specs:`技术规格`,scenarios:`应用场景`,learnMoreDetails:`了解更多详情`,consultDesc:`如需产品演示或方案咨询，欢迎联系我们的专业工程师团队。`,consultNow:`立即咨询`,page:{title:`产品与服务`,subtitle:`覆盖质量可靠性工作全场景的工具软件与技术服务，助力企业构建全寿命周期可靠性管理体系`,breadcrumb:`首页`,filterLabel:`按分类筛选：`,productCount:`共 <span class='font-semibold text-slate-700'>{{count}}</span> 款产品`,emptyTitle:`该分类暂无产品`,emptyDesc:`可以联系我们了解更多定制化解决方案`,viewAllBtn:`查看全部产品`,contactBtn:`联系我们`,ctaTitle:`找不到合适的产品？`,ctaDesc:`我们提供定制化解决方案，专业工程师团队为您量身打造最适合的可靠性工具组合`,expertConsult:`免费咨询专家`,filterLabels:{all:`全部产品`,consulting:`咨询/诊断`,software:`软件`,technology:`应用技术推广`}}},common:{backToTop:`回到顶部`,backToHome:`返回首页`,learnMore:`了解更多`,viewDetails:`查看详情`,viewAll:`查看全部`,freeConsult:`免费咨询`,trialApply:`试用申请`,freeTrial:`免费试用`,contactUs:`联系我们`,consultNow:`立即咨询`,submit:`提交`,loading:`提交中...`,prevPage:`上一页`,nextPage:`下一页`,minRead:`分钟`,companyName:`国可工软`,companyNameFull:`国可工软（苏州）科技有限公司`,copyright:`© {{year}} 国可工软（苏州）科技有限公司 版权所有`,icp:`苏ICP备2025155226号-1`,pageNotFound:`页面不存在`,pageNotFoundDesc:`抱歉，您访问的页面不存在或已被移除。`,backHome:`返回首页`,productNotFound:`产品不存在`,backToProducts:`返回产品列表`,articleNotFound:`文章不存在`,backToNews:`返回新闻列表`,backToKnowledge:`返回知识库`,scenarios:`个应用场景`,noArticles:`暂无文章`,noArticlesDesc:`该分类下暂无文章，敬请期待...`,relatedArticles:`相关文章`,haveQuestions:`有疑问？咨询我们`,contactTeamDesc:`我们的专业团队随时为您解答技术问题、产品咨询及合作事宜。`,backToContact:`返回联系我们`},nav:{welcome:`欢迎访问国可工软官网！专注质量可靠性工业软件20年`,home:`首页`,products:`产品解决方案`,allProducts:`全部产品`,allProductsDesc:`20款自主与合作软件`,cases:`典型案例`,casesDesc:`近千家客户成功实践`,videos:`视频教程`,videosDesc:`产品演示与使用教程`,ai:`国可AI`,knowledge:`知识库`,knowledgeArticles:`知识文章`,knowledgeArticlesDesc:`FMEA与可靠性知识`,fmeaCases:`FMEA案例`,fmeaCasesDesc:`各行业FMEA实战案例`,reliabilityStd:`可靠性标准`,reliabilityStdDesc:`IEC·MIL·GJB标准体系`,industryTrends:`行业趋势`,industryTrendsDesc:`国产替代与行业动态`,about:`关于国可`,aboutUs:`了解我们`,aboutUsDesc:`公司介绍与发展历程`,news:`新闻动态`,newsDesc:`公司最新动态资讯`,contact:`联系我们`,contactDesc:`苏州总部`,lifecycle:`全生命周期方案`},hero:{seoH1:`国可工软 - 国产FMEA可靠性软件 | Weibull分析 SPC统计过程控制 ALT加速寿命试验`,slide1:{slogan:`全生命周期`,title:`从设计到退役的可靠性守护`,subtitle:`规划 · 设计 · 验证 · 制造 · 运维`,description:`覆盖产品全生命周期五大阶段，20+核心工具软件
一站式满足企业从研发设计到运维保障的全流程需求`,cta:`查看解决方案`,cta2:`了解产品`},slide2:{slogan:`智能FMEA软件`,title:`精准识别风险 · 可靠守护质量`,subtitle:`AI精准辅助 | 万级节点毫秒响应 | 大型项目稳定运行`,description:`内置20年可靠性知识库，AI精准识别失效模式、智能推荐改进措施
万级节点毫秒级响应，大型项目长时间运行零崩溃`,cta:`免费试用`,cta2:`了解更多`},slide3:{slogan:`行业深耕 · 专业可靠`,title:`深耕可靠性领域20年 · 千余家客户共同选择`,subtitle:`方法论沉淀 | 客户信赖 | 全生命周期覆盖`,description:`近20年可靠性工程实践经验，方法论与软件深度融合
汽车、航空、航天、新能源等高端制造行业千余家客户持续信赖`,cta:`客户案例`,cta2:`联系我们`},prevSlide:`上一页`,nextSlide:`下一页`,slideLabel:`切换到第{{num}}页`,scrollDown:`了解更多`},about:{title:`关于我们`,intro:`国可工软是一家专注于质量与可靠性技术领域的高科技企业，致力于为制造业客户提供可靠性技术培训、专业咨询、软件系统开发及行业技术推广一体化解决方案。公司拥有ASQ CRE资深专家团队，核心成员具备20年以上的行业经验，已服务1000+家企业客户。`,viewMore:`了解更多`,stats:{clients:`签约客户`,clientsUnit:`家`,years:`深耕年限`,yearsUnit:`年`,products:`核心产品`,productsUnit:`款`,industries:`覆盖行业`,industriesUnit:`个`},aboutPage:{title:`关于国可`,subtitle:`十余年专注于质量可靠性工业软件，助力中国制造提升核心竞争力`,tabs:{intro:`公司介绍`,timeline:`发展历程`,values:`核心优势`,know:`了解我们`},introTitle:`国可工软（苏州）科技有限公司`,introP1:`<strong>国可工软科技有限公司</strong>（以下简称「国可」），是一家专注于质量与可靠性技术咨询、培训及软件系统开发的科技创新企业。公司在苏州设立研发中心，并在北京、大连、成都、武汉、西安、深圳、宁德、重庆、台湾设有分支机构及合作伙伴，目前正在筹办美国公司，积极整合全球优质资源，致力于为企业提供培训、咨询、自主研发软件为一体的全方位可靠性整体解决方案。`,introP2:`公司技术实力雄厚，核心团队拥有超过20年的质量与可靠性咨询服务经验，成员多为美国可靠性协会认证可靠性工程师（ASQ CRE），曾在GE、Honeywell、GM等国际知名企业积累了深厚的行业经验。中国团队则具备丰富的本土化实施经验，并与上海交通大学、华东师范大学等高校建立了紧密的合作关系。强大的客户资源覆盖航天、航空、工程机械、汽车、能源等多个重要行业。`,introP3:`公司自主研发的FMEA、Weibull分析、加速寿命试验分析等软件产品，已获得国内数百家企业的认可与采纳。签约客户包括上汽集团、富士康、美的集团、一汽解放、国家能源集团等众多知名企业，彰显了市场的广泛认可。其系列软件曾荣获2021年全国工业APP和信息消费大赛总决赛「工业APP数字制造与管理专项成果转化奖」，2022年工信部制造业质量管理数字化典型场景和解决方案奖，「2023-2024工业互联网新质力百佳」，「2024年工业APP大赛总决赛三等奖」「2024年电子信息行业质量提升典型案例」。`,certifications:`荣誉资质`,certList:[{title:`24项软件著作权`,desc:`17项可靠性+7项FMEA`},{title:`高新技术企业`,desc:`2022年认定`},{title:`ISO9001认证`,desc:`质量管理体系`},{title:`双软企业`,desc:`软件企业+产品`},{title:`工信部入选`,desc:`制造业质量管理数字化`},{title:`江苏民营科技企业`,desc:`省级认定`}],suzhouCenter:`苏州`,suzhouAddr:`高新区竹园路209号2号楼310室`,shanghaiHQ:``,shanghaiAddr:`闵行区莲花南路2899号莲谷科技园5号楼A312-A314`,branches:`分支机构`,branchesList:`苏州 · 北京 · 成都 · 武汉 · 西安 · 大连 · 宁德 · 深圳 · 沈阳 · 重庆 · 台湾 · 美国（筹办中）`,timelineTitle:`发展历程`,coreValues:`核心价值`,values:[{title:`全球最佳实践`,desc:`提供可靠性体系的全球最佳实践`},{title:`自主研发创新`,desc:`为制造业客户自主研发创造全新可靠性设计体验`},{title:`知识转移`,desc:`通过知识转移，帮助客户成功`}],advantagesTitle:`核心优势`,advantages:[{title:`权威标准`,desc:`AIAG-VDA国内首批合规软件`},{title:`资深团队`,desc:`核心成员为ASQ CRE认证工程师`},{title:`行业经验`,desc:`GE、Honeywell、GM等世界500强经验`},{title:`荣誉资质`,desc:`24项软件著作权+高新技术企业`},{title:`AI智能辅助`,desc:`AI赋能FMEA分析，效率提升80%`}],bizTraining:`业务与培训`,reliabilityTraining:`可靠性系统培训`,trainingList:[`可靠性基础与数据分析技术`,`可靠性设计(DFR)培训`,`FMEA(DFMEA/PFMEA/MSRA)培训`,`六西格玛技术(DMAIC/DFSS)`],reliaQube:`ReliaQube软件平台`,reliaQubeList:[`退化数据分析(eDA)`,`维修优化分析(eOMA)`,`返修数据分析(eWA)`,`可靠性测试设计(eDRT)`,`加速寿命分析(eALT)`],reliabilityConsult:`可靠性咨询`,consultList:[`可靠性数据收集与分析`,`可靠性流程咨询`,`持续可靠性改进`,`FMEA方法及流程咨询`],reliabilityPromo:`可靠性应用技术推广`,promoList:[`可靠性应用技术学院`,`可靠性应用技术微课堂`,`可靠性应用技术公众号`,`可靠性应用技术国际论坛`],page:{timeline:{subtitle:`深耕质量可靠性领域二十年，持续创新突破`,milestones:[{year:`2007~2012`,title:`创立基础`,desc:`国内开展可靠性咨询`},{year:`2012`,title:`公司成立`,desc:`国可工软正式成立`},{year:`2014`,title:`软件初版发布`,desc:`ReliaQube & DFMEA V1.0`},{year:`2017`,title:`高新认证`,desc:`16项软著，高企认证`},{year:`2019`,title:`七步法版本`,desc:`DFMEA V4.2.2 发布`},{year:`2020`,title:`获奖 & 扩张`,desc:`优秀产品奖，苏州公司`},{year:`2021~2022`,title:`荣誉与奖项`,desc:`工信部转化奖`},{year:`2023`,title:`产品扩展`,desc:`FTA发布，签约吉利`},{year:`2024`,title:`全线发布`,desc:`RBD、ALT、HALT等`},{year:`2025`,title:`AI 智能时代`,desc:`AI-FMEA 发布`,current:!0}]},stats:[{label:`20+年行业经验`,value:`20+`},{label:`1000+客户信赖`,value:`1000+`},{label:`20+款产品矩阵`,value:`20+`},{label:`30+技术专家`,value:`30+`}],certs:{iso9001:{name:`ISO 9001`,desc:`质量管理体系认证`},iso27001:{name:`ISO/IEC 27001`,desc:`信息安全管理体系`},software:{name:`软件企业证书`,desc:`双软认证`},copyright:{name:`软件著作权`,desc:`40+`,count:`40+`},current:`当前`},coreValues:[{title:`全球最佳实践`,desc:`融合国际先进可靠性技术理念`},{title:`自主研发`,desc:`核心算法自主可控，安全可靠`},{title:`知识转移`,desc:`专业培训助力企业能力建设`}]}}},industries:{title:`覆盖多行业应用场景`,subtitle:`深耕质量可靠性领域二十余年，已服务 <span class='text-blue-600 font-bold'>1000+</span> 企业客户，产品广泛应用于汽车、航空航天、工程机械、电子电气、能源、军工国防、医疗器械、轨道交通等关键行业`,certTitle:`资质认证 & 荣誉`,certSubtitle:`权威认证，品质保障`,clientLabel:`合作客户：`,list:{汽车:{name:`汽车`,desc:`整车及零部件可靠性工程`,stats:`50+ 车企客户`},航空航天:{name:`航空航天`,desc:`航空器件可靠性验证`,stats:`20+ 航空单位`},工程机械:{name:`工程机械`,desc:`工程机械可靠性工程`,stats:`60+ 装备企业`},电子电气:{name:`电子电气`,desc:`消费电子与工业电子`,stats:`100+ 电子企业`},能源:{name:`能源`,desc:`动力电池与储能系统`,stats:`30+ 能源企业`},军工国防:{name:`军工国防`,desc:`军工产品可靠性分析`,stats:`保密单位`},医疗器械:{name:`医疗器械`,desc:`医疗设备可靠性认证`,stats:`40+ 医疗企业`},轨道交通:{name:`轨道交通`,desc:`轨道交通系统可靠性`,stats:`15+ 轨交企业`}},certs:[{name:`高新技术企业`,desc:`国家级高新技术企业认定`},{name:`ISO 9001`,desc:`质量管理体系认证`},{name:`双软企业`,desc:`软件企业+软件产品认定`},{name:`40+项软著`,desc:`自主研发知识产权`},{name:`行业会员`,desc:`中国电子质量管理协会会员`},{name:`苏州领军`,desc:`苏州工业园区科技领军`}],certsExtra:{copyrightCount:`40+ 软著`,copyrightDesc:`自主研发知识产权`}},knowledge:{title:`知识库`,subtitle:`涵盖FMEA、可靠性工程、质量标准等专业知识，由国可工软技术团队持续整理发布`,searchPlaceholder:`搜索文章标题、标签...`,noResults:`暂无匹配的文章`,articleCount:`共 <span class='text-blue-600 font-semibold'>{{count}}</span> 篇文章 · 持续更新中`,categories:{all:`全部`,"fmea-knowledge":`FMEA知识`,"fmea-method":`FMEA方法`,"reliability-flow":`可靠性流程`,"reliability-dev":`可靠性开发`,"reliability-eval":`可靠性评估`,"reliability-std":`可靠性标准`,"software-rel":`软件可靠性`,"industry-trend":`行业趋势`},cta:{title:`想了解更多或申请软件试用？`,subtitle:`专业团队提供一对一解答，定制适合您的解决方案`,contactBtn:`立即联系我们`,moreArticlesBtn:`浏览更多文章`}},news:{title:`新闻动态`,subtitle:`了解国可工软最新动态、行业资讯与技术分享`,pageSubtitle:`关注公司最新动态、技术分享与客户案例`,noArticles:`暂无文章`,readMore:`阅读全文`,categoryLabels:{news:`公司动态`,tech:`技术文章`,case:`行业洞察`},filters:{all:`全部`}},contact:{title:`联系我们`,subtitle:`无论您是了解产品详情、申请免费试用，还是寻求技术咨询，我们都随时恭候您的垂询。`,cards:{hotline:{label:`服务热线`,value:`4000-032-330`},email:{label:`邮箱`,value:`service@nationrel.com`},address:{label:`苏州总部`,value:`苏州高新区竹园路209号`}},form:{title:`发送咨询`,name:`姓名 *`,namePlaceholder:`您的姓名`,company:`公司`,companyPlaceholder:`公司名称`,phone:`电话 *`,phonePlaceholder:`联系电话`,emailField:`邮箱`,emailPlaceholder:`电子邮箱`,message:`咨询内容 *`,messagePlaceholder:`请描述您的需求...`,submitBtn:`提交咨询`},success:{title:`提交成功！`,desc:`我们将在1个工作日内与您联系`},error:`提交失败，请直接拨打电话 4000-032-330 联系我们。`,promises:{title:`我们的承诺`,quickResponse:{title:`快速响应`,desc:`1个工作日内回复`},professional:{title:`专业保障`,desc:`20年行业经验团队`},freeTrial:{title:`免费试用`,desc:`14天免费试用`}},faq:{title:`常见问题`,items:[{q:`你们提供免费试用吗？`,a:`是的，我们提供14天免费试用，您可以联系客服申请。`},{q:`软件是否支持定制开发？`,a:`支持，我们可根据企业需求提供定制化服务。`},{q:`培训服务如何收费？`,a:`我们提供高性价比的培训服务，具体费用根据培训内容而定。`}]}},lifecycle:{title:`覆盖产品全生命周期的`,titleHighlight:` 可靠性解决方案`,subtitle:`从产品规划到退役，国可提供贯穿全程的可靠性工程服务——技术培训、专业咨询、软件工具三位一体，帮助制造业企业构建系统化的可靠性能力`,stageLabel:`阶段 {{phase}}`,solutionsLabel:`本阶段解决方案`,productsLabel:`推荐产品/服务`,getSolution:`获取此阶段解决方案`,viewAllSolutions:`查看全部产品解决方案`,coreValues:[{title:`全周期覆盖`,desc:`从规划到退役，五大阶段无缝衔接，一家公司解决全生命周期可靠性问题`},{title:`软件+咨询双轮驱动`,desc:`自主研发软件工具 + 专业咨询服务，软硬兼施帮助企业真正落地可靠性工程`},{title:`AI智能赋能`,desc:`国可AI大模型深度融合可靠性专业知识，智能分析、自动推荐，显著提升效率`}],stages:{plan:{label:`规划阶段`,en:`Planning`,description:`产品立项与可靠性指标制定，建立可靠性大纲，定义设计输入要求`,solutions:[{name:`可靠性规划咨询`,link:`/products/reliability-prediction`},{name:`维修数据分析`,link:`/products/phm`},{name:`寿命数据分析`,link:`/products/weibull`},{name:`风险评估`,link:`/products/reliability-prediction`},{name:`质量功能展开QFD`,link:`/products/reliability-prediction`},{name:`可靠性目标设定与分配`,link:`/products/reliability-prediction`},{name:`可靠性预计`,link:`/products/reliability-prediction`},{name:`可靠性大纲编制`,link:`/products/reliability-prediction`}],products:[{name:`可靠性咨询服务`,link:`/contact`},{name:`维修数据分析软件`,link:`/products/phm`},{name:`寿命数据分析软件`,link:`/products/weibull`},{name:`质量功能展开QFD软件`,link:`/products/reliability-prediction`},{name:`可靠性目标设定与分配软件`,link:`/products/reliability-prediction`},{name:`可靠性预计软件`,link:`/products/reliability-prediction`}]},design:{label:`设计阶段`,en:`Design`,description:`设计阶段FMEA分析、可靠性预计与分配、故障树分析，早期发现潜在风险`,solutions:[{name:`DFMEA`,link:`/products/fmea`},{name:`故障树分析（FTA）`,link:`/products/fta`},{name:`实验设计（DOE）`,link:`/products/doe`},{name:`高加速试验（HALT）`,link:`/products/halt`},{name:`加速寿命试验（ALT）`,link:`/products/alt`},{name:`目标分配校正`,link:`/products/reliability-prediction`},{name:`基于失效模式的设计评审（DRBFM）`,link:`/products/fmea`}],products:[{name:`FMEA软件`,link:`/products/fmea`},{name:`故障树分析（FTA）软件`,link:`/products/fta`},{name:`实验设计（DOE）软件`,link:`/products/doe`},{name:`加速寿命试验（ALT）分析软件`,link:`/products/alt`},{name:`可靠性框图（RBD）软件`,link:`/products/rbd`}]},test:{label:`验证阶段`,en:`Verification`,description:`可靠性验证试验设计、加速寿命试验、环境应力筛选，量化可靠性水平`,solutions:[{name:`可靠性试验设计`,link:`/products/alt`},{name:`加速寿命试验（ALT）`,link:`/products/alt`},{name:`ALT/HALT方案`,link:`/products/halt`},{name:`环境试验`,link:`/products/env-chamber`},{name:`可靠性验证试验`,link:`/products/alt`},{name:`可靠性增长试验`,link:`/products/alt`},{name:`试验数据分析`,link:`/products/weibull`}],products:[{name:`寿命数据分析软件`,link:`/products/weibull`},{name:`退化数据分析软件`,link:`/products/weibull`},{name:`加速寿命试验（ALT）分析软件`,link:`/products/alt`},{name:`可靠性增长试验分析软件`,link:`/products/alt`},{name:`试验室管理系统（LIMS）`,link:`/products/lims`},{name:`环境试验设备`,link:`/products/env-chamber`},{name:`HALT设备`,link:`/products/halt`},{name:`第三方试验室`,link:`/contact`},{name:`失效分析服务`,link:`/contact`}]},produce:{label:`制造阶段`,en:`Manufacturing`,description:`PFMEA过程分析、SPC统计过程控制、制造过程质量监控，保障生产可靠性`,solutions:[{name:`PFMEA`,link:`/products/fmea`},{name:`SPC控制图`,link:`/products/spc`},{name:`工艺控制计划`,link:`/products/spc`},{name:`MSA量测分析`,link:`/products/msa`},{name:`实验设计（DOE）`,link:`/products/doe`}],products:[{name:`PFMEA软件`,link:`/products/fmea`},{name:`SPC/MSA软件`,link:`/products/spc`},{name:`实验设计（DOE）软件`,link:`/products/doe`},{name:`控制计划软件`,link:`/products/spc`},{name:`制造执行系统MES`,link:`/products/mes`}]},service:{label:`运维阶段`,en:`Operations`,description:`现场故障数据采集与分析、维修策略优化、备件管理，提升产品全寿命可靠性`,solutions:[{name:`现场数据分析`,link:`/products/weibull`},{name:`维修优化分析`,link:`/products/phm`},{name:`备件量化分析`,link:`/products/phm`},{name:`退化趋势预测`,link:`/products/phm`},{name:`以可靠性为中心的维修（RCM）`,link:`/products/phm`},{name:`根本原因分析`,link:`/products/phm`},{name:`预测与健康管理`,link:`/products/phm`}],products:[{name:`维修数据分析软件`,link:`/products/phm`},{name:`寿命数据分析软件`,link:`/products/weibull`},{name:`FRACAS管理系统`,link:`/products/phm`},{name:`AI+DMAIC工具软件`,link:`/products/phm`},{name:`预测与健康管理PHM设备`,link:`/products/phm`}]}}},ai:{pageTitle:`智能 FMEA 模板中心`,pageSubtitle:`输入产品描述，AI 智能生成完整 FMEA 表格。内置百万级失效案例，覆盖 DFMEA / PFMEA / MSRA 全类型，让失效分析更高效。`,freeTrial:`免费试用`,viewProducts:`查看产品`,tableHeaders:{no:`序号`,item:`项目/工序`,failure:`潜在失效模式`,effect:`潜在影响`,severity:`严重度`,riskLevel:`风险等级`,actions:`建议措施`},riskLabels:{high:`高风险`,medium:`中风险`,low:`低风险`},aiGenerating:`国可AI 正在基于行业知识库生成更多失效模式...`,tableData:{dfmea:[{id:`1`,item:`转向控制器`,potentialFailure:`转向指令响应延迟`,potentialEffect:`驾驶员感觉转向不灵敏`,severity:`8`,actions:`优化控制器算法`},{id:`2`,item:`电机驱动`,potentialFailure:`输出扭矩不足`,potentialEffect:`加速性能下降`,severity:`6`,actions:`提升电机功率`},{id:`3`,item:`电池管理系统`,potentialFailure:`SOC估算偏差大`,potentialEffect:`续航显示不准`,severity:`5`,actions:`校准算法参数`}],pfmea:[{id:`1`,item:`焊接工序`,potentialFailure:`焊点虚焊`,potentialEffect:`连接强度不足`,severity:`8`,actions:`增加检测工位`},{id:`2`,item:`涂胶工序`,potentialFailure:`胶量不均`,potentialEffect:`密封不良`,severity:`7`,actions:`调整胶量参数`},{id:`3`,item:`组装工序`,potentialFailure:`螺栓扭矩偏差`,potentialEffect:`装配松动`,severity:`6`,actions:`扭矩实时监控`}],msra:[{id:`1`,item:`制动系统`,potentialFailure:`制动距离过长`,potentialEffect:`碰撞风险`,severity:`9`,actions:`优化制动策略`},{id:`2`,item:`安全气囊`,potentialFailure:`误爆/不爆`,potentialEffect:`乘员伤害`,severity:`10`,actions:`双重冗余设计`}]},features:{oneClick:{title:`一键生成`,desc:`输入产品描述，AI 秒级生成完整 FMEA 表格，告别 Excel 手填`},smartReasoning:{title:`智能推理`,desc:`自动构建失效因果链，覆盖隐性风险，遗漏率降低 60%`},knowledgeBase:{title:`百万级知识库`,desc:`覆盖汽车、航空、医疗等 30+ 领域失效案例，智能匹配推荐`}},cta:{title:`准备好体验国可AI了吗？`,subtitle:`无需信用卡，专业顾问一对一讲解`,btn:`立即免费试用`},templates:{dfmea:{name:`DFMEA 设计失效模式与影响分析`,desc:`适用于产品设计阶段的失效分析`},pfmea:{name:`PFMEA 过程失效模式与影响分析`,desc:`适用于制造过程控制的风险分析`},msra:{name:`MSRA 措施优先级分析`,desc:`基于AIAG-VDA标准的风险评估`}},riskSuffix:`风险`,sevenSteps:{title:`FMEA 七步核心方法论`,subtitle:`基于AIAG & VDA标准的完整FMEA分析流程，AI-FMEA全程智能支持`,header1:`步骤`,header2:`内容`,header3:`AI-FMEA智能支持`,steps:[{title:`策划与准备`,content:`定义项目范围、边界、分析依据`,ai:[`项目创建、FMEA范围界定`]},{title:`结构分析`,content:`图形化展示产品/过程结构`,ai:[`结构树、过程流程图(PFD)图形化编辑`]},{title:`功能分析`,content:`定义功能、构建功能网`,ai:[`功能网智能绘制、支持层级展开`]},{title:`失效分析`,content:`识别失效模式、影响、原因，构建失效网`,ai:[`失效网自动生成、支持与功能网双向追溯`]},{title:`风险分析`,content:`评估严重度(S)、频度(O)、探测度(D)，确定行动优先级(AP)`,ai:[`自动计算AP、支持S/O/D自定义定义`]},{title:`优化`,content:`定义预防措施与探测措施，跟踪措施状态`,ai:[`措施跟踪模块、任务分发与提醒`]},{title:`结果文件化`,content:`输出FMEA报告、特性清单、控制计划等`,ai:[`一键导出、支持多语言`]}]},functions:{navTitle:`功能导航`,tabs:{intro:{title:`功能介绍`,subtitle:`查看 · 功能`,desc:`AI-FMEA是国可工软自主研发的质量可靠性领域垂直AI大模型产品，融合DeepSeek通用模型与行业专属知识库，深度理解FMEA方法论，帮助工程师高效完成FMEA分析工作。`,features:[`符合AIAG-VDA 2019新版七步法标准`,`支持DFMEA、PFMEA、MSRA等多种分析类型`,`AI智能辅助，一键生成FMEA文档`,`内置行业知识库，支持专业问答`,`支持团队协作，多人在线编辑`,`支持导出DOCX/PDF/Excel格式`]},ai:{title:`AI生成`,subtitle:`AI生成 · FMEA`,desc:`输入零部件名称，AI-FMEA快速生成符合AIAG-VDA标准的七步法FMEA表格，帮助工程师高效完成分析工作。`,features:[`AIAG-VDA 2019新版七步法格式输出，符合行业标准`,`支持多人协作编辑，可设置不同权限和查看权限`,`文档版本记录，保存修改历史，便于追溯和审核`,`支持导出DOCX/PDF/Excel格式，方便提交和归档`,`符合IATF 16949、ISO 9001等质量管理体系的文档要求`],advantage:`相比传统单机版FMEA工具，提供更便捷的团队协作和文档管理功能。`},dual:{title:`双模型`,subtitle:`双模型 · 切换`,desc:`支持DeepSeek通用模型和国可行业专属模型双引擎，用户可根据需求灵活切换，获得最适合的分析结果。`,features:[`DeepSeek通用大模型，强大的通用理解和推理能力`,`国可行业专属模型，深厚的FMEA专业知识`,`一键切换模型，快速对比分析结果`,`支持自定义模型参数，优化输出效果`,`云端算力支持，响应速度快`],advantage:`同时具备通用AI的广度和行业AI的深度，比单一模型更专业。`},cross:{title:`跨系统`,subtitle:`跨系统 · 数据`,desc:`支持与PLM、ERP、MES等企业系统无缝对接，打通数据孤岛，实现FMEA数据的统一管理和追溯。`,features:[`与主流PLM系统无缝集成`,`支持ERP物料数据自动同步`,`与MES系统共享工艺参数`,`FMEA与其他质量数据关联分析`,`支持定制化接口开发`,`保障数据传输安全合规`],advantage:`打破信息孤岛，让FMEA成为企业质量数据管理的核心环节。`},monitor:{title:`实时监控`,subtitle:`实时 · 监控`,desc:`实时监控FMEA分析进度和团队协作状态，及时发现风险，确保项目按时交付。`,features:[`项目进度实时可视化`,`团队成员在线状态一目了然`,`自动提醒待处理任务`,`风险预警和变更通知`,`支持与企业微信/钉钉消息同步`,`移动端随时随地查看`],advantage:`让FMEA项目管理更透明，团队协作更高效。`},integrate:{title:`集成`,subtitle:`集成 · 扩展`,desc:`丰富的API接口和插件体系，支持与企业现有系统深度集成，满足个性化定制需求。`,features:[`标准化RESTful API接口`,`支持WebHook事件推送`,`提供Python/Java SDK`,`与飞书、钉钉、企业微信深度集成`,`支持私有化部署`,`7×24小时技术支持`],advantage:`灵活的集成能力，满足企业复杂业务场景需求。`},collab:{title:`协作`,subtitle:`协作 · 团队`,desc:`支持多人同时编辑同一FMEA文档，实时同步进度，支持权限管理和版本控制，让团队协作更高效。`,features:[`实时多人在线编辑`,`灵活的角色权限管理（管理员/编辑/查看）`,`完整的版本历史记录`,`评论和批注功能`,`任务分配和进度跟踪`,`支持企业微信/钉钉集成`],advantage:`让跨部门、跨地域的FMEA协作变得简单高效。`}}},coreFeatures:`核心功能`},floating:{wechat:`微信咨询`,wechatQR:`微信二维码
请替换为实际图片`,scanQR:`扫码添加客服微信`,instantResponse:`即时响应·专业解答`,consult:`咨询`},trustSection:{subtitle:`客户与资质`,title:`行业头部企业的共同选择`,desc:`深耕质量可靠性20年，服务航空、汽车、军工、医疗等10+行业`,aiBadge:`AI赋能 · 智能分析`,aiTitle:`国可AI智能分析引擎`,aiDesc:`基于国可20年可靠性数据积累，训练行业专属AI模型，让FMEA分析效率提升80%`,aiFeatures:{recognition:`智能失效识别`,recognitionDesc:`AI自动识别潜在失效模式`,recommendation:`智能措施推荐`,recommendationDesc:`基于历史数据推荐改进措施`,qualityCheck:`质量智能检查`,qualityCheckDesc:`自动检查FMEA完整性与合规性`,report:`智能报告生成`,reportDesc:`一键生成专业分析报告`},stats:{clients:`签约客户`,years:`深耕年限`,products:`核心产品`,industries:`覆盖行业`},certificationsTitle:`荣誉资质`,certifications:{highTech:`高新技术企业`,copyrights:`40+项软件著作权`,iso9001:`ISO 9001认证`,miit:`工信部典型场景`,dualSoft:`双软认定企业`}},footer:{productServices:`产品服务`,aboutUs:`关于我们`,infoCenter:`资讯中心`,contactInfo:`联系方式`,companyName:`国可工软科技有限公司`,wechat:`微信公众号`,douyin:`抖音`,douyinAccount:`抖音号`,copyright:`Copyright © 2020-{{year}} 版权所有 © 国可工软科技有限公司`,links:{about:`了解我们`,advantages:`核心优势`,timeline:`发展历程`,certificates:`荣誉资质`,partners:`合作伙伴`,news:`新闻动态`,knowledge:`知识库`,cases:`典型案例`,videos:`视频教程`},phone:`电话：4000-032-330`,mobile:`手机：185-5006-2538`,email:`邮箱：service@nationrel.com`,address:`地址：高新区竹园路209号2号楼310室`,privacyPolicy:`隐私政策`,terms:`服务条款`,cookiePolicy:`Cookie政策`,productLinks:{fmea:`FMEA软件`,reliaqube:`ReliaQube平台`,weibull:`Weibull寿命数据分析`,knowledge:`知识库`,videos:`视频教程`},phoneDisplay:`4000-032-330`,emailDisplay:`service@nationrel.com`},cases:{title:`典型案例`,stats:{companies:`签约客户`,years:`深耕年限`,products:`核心产品`,industries:`覆盖行业`},filterAll:`全部`,pageTitle:`客户成功案例`,pageDesc:`深耕质量可靠性20年，为您量身定制解决方案`,challenge:`面临挑战`,solution:`解决方案`,results:`项目成果`,noResults:`该行业案例整理中，敬请期待`,ctaTitle:`您的企业也可以成为下一个成功案例`,ctaDesc:`20年专注质量可靠性，为您量身定制解决方案`,ctaPhone:`立即拨打 4000-032-330`,ctaBook:`预约免费咨询`},videos:{title:`视频教程`,pageSubtitle:`观看产品演示和使用教程，快速上手国可工软各款软件`,views:`{{count}}次观看`,bilibiliCTA:`更多视频教程请访问B站官方账号`,bilibiliLink:`前往B站观看更多`},trialModal:{title:`选择试用平台`,subtitle:`我们提供两款核心产品，请根据您的需求选择试用`,startTrial:`立即试用`,hint:`提交后即可在本站工作台登录试用，无需等待审核`,platforms:{fmea:{subtitle:`智能FMEA分析平台`,feature1:`AI智能失效识别`,feature2:`DFMEA/PFMEA/MSRA`,feature3:`七步法向导`},relia:{subtitle:`可靠性分析平台`,feature1:`Weibull分析`,feature2:`加速寿命试验`,feature3:`可靠性预计`}}},lang:{zh:`中文`,en:`EN`,switchZh:`🇨🇳 中文 / English`,switchEn:`🇺🇸 English / 中文`},newsDetail:{relatedArticles:`相关文章`,publishedAt:`发布于`,imageAlt:`图片`}},yi={header:{logoText:`Nationrel`,logoAlt:`Nationrel`,tagline:`Applied Reliability Engineering`},products:{title:`Products & Services`,subtitle:`Nearly 20 self-developed and partner software products covering FMEA, life analysis, accelerated testing, FTA, and other key reliability areas`,viewAllProducts:`View All Products`,overview:`Product Overview`,highlights:`Key Highlights`,specs:`Technical Specifications`,scenarios:`Application Scenarios`,learnMoreDetails:`Learn More Details`,consultDesc:`For product demos or solution consulting, please contact our professional engineering team.`,consultNow:`Consult Now`,page:{title:`Products & Services`,subtitle:`Comprehensive software tools and technical services for quality reliability, helping enterprises build lifecycle reliability management systems`,breadcrumb:`Home`,filterLabel:`Filter by category: `,productCount:`<span class='font-semibold text-slate-700'>{{count}}</span> products`,emptyTitle:`No products in this category`,emptyDesc:`Contact us for customized solutions`,viewAllBtn:`View All Products`,contactBtn:`Contact Us`,ctaTitle:`Can't find the right product?`,ctaDesc:`We provide customized solutions — our expert engineers will tailor the optimal reliability tool combination for you`,expertConsult:`Free Expert Consultation`,filterLabels:{all:`All Products`,consulting:`Consulting`,software:`Software`,technology:`Technology Promotion`}}},industries:{title:`Serving Multiple Industries`,subtitle:`Over 20 years in quality reliability, serving <span class='text-blue-600 font-bold'>1000+</span> enterprise clients across automotive, aerospace, construction machinery, electronics, energy, defense, medical devices, and rail transit industries`,certTitle:`Certifications & Honors`,certSubtitle:`Authoritative certifications, quality assurance`,clientLabel:`Clients: `,list:{汽车:{name:`Automotive`,desc:`Vehicle & component reliability engineering`,stats:`50+ auto companies`},航空航天:{name:`Aerospace`,desc:`Aviation component reliability verification`,stats:`20+ aviation organizations`},工程机械:{name:`Construction Machinery`,desc:`Construction machinery reliability engineering`,stats:`60+ equipment manufacturers`},电子电气:{name:`Electronics & Electrical`,desc:`Consumer & industrial electronics`,stats:`100+ electronics companies`},能源:{name:`Energy`,desc:`Power batteries & energy storage systems`,stats:`30+ energy companies`},军工国防:{name:`Defense & Military`,desc:`Defense product reliability analysis`,stats:`Classified`},医疗器械:{name:`Medical Devices`,desc:`Medical equipment reliability certification`,stats:`40+ medical companies`},轨道交通:{name:`Rail Transit`,desc:`Rail transit system reliability`,stats:`15+ rail companies`}},certs:[{name:`High-Tech Enterprise`,desc:`National High-Tech Enterprise Certification`},{name:`ISO 9001`,desc:`Quality Management System Certification`},{name:`Dual-Software Enterprise`,desc:`Software Enterprise + Product Certification`},{name:`40+ Software Copyrights`,desc:`Independent R&D intellectual property`},{name:`Industry Member`,desc:`China SAE Member`},{name:`Suzhou Leading Tech`,desc:`Suzhou Industrial Park Tech Leader`}],certsExtra:{copyrightCount:`40+ Copyrights`,copyrightDesc:`Independent R&D IP Rights`}},common:{backToTop:`Back to top`,backToHome:`Back to Home`,learnMore:`Learn More`,viewDetails:`View Details`,viewAll:`View All`,freeConsult:`Free Consultation`,trialApply:`Apply for Trial`,freeTrial:`Free Trial`,contactUs:`Contact Us`,consultNow:`Consult Now`,submit:`Submit`,loading:`Submitting...`,prevPage:`Previous`,nextPage:`Next`,minRead:`min`,companyName:`Nationrel`,companyNameFull:`Nationrel (Suzhou) Technology Co., Ltd.`,copyright:`© {{year}} Nationrel (Suzhou) Technology Co., Ltd. All rights reserved.`,icp:`SuICP No. 2025155226-1`,pageNotFound:`Page Not Found`,pageNotFoundDesc:`Sorry, the page you are looking for does not exist or has been removed.`,backHome:`Back to Home`,productNotFound:`Product Not Found`,backToProducts:`Back to Products`,articleNotFound:`Article Not Found`,backToNews:`Back to News`,backToKnowledge:`Back to Knowledge Base`,scenarios:`scenarios`,noArticles:`No Articles`,noArticlesDesc:`No articles in this category, please check back later...`,relatedArticles:`Related Articles`,haveQuestions:`Have Questions? Contact Us`,contactTeamDesc:`Our professional team is ready to answer your technical questions, product inquiries, and partnership opportunities.`,backToContact:`Back to Contact Us`},nav:{welcome:`Welcome to Nationrel! 20 years dedicated to quality & reliability industrial software`,home:`Home`,products:`Product Solutions`,allProducts:`All Products`,allProductsDesc:`20 self-developed & partner software`,cases:`Case Studies`,casesDesc:`Success stories from 1000+ clients`,videos:`Video Tutorials`,videosDesc:`Product demos & tutorials`,ai:`Nationrel AI`,knowledge:`Knowledge Base`,knowledgeArticles:`Knowledge Articles`,knowledgeArticlesDesc:`FMEA & reliability knowledge`,fmeaCases:`FMEA Cases`,fmeaCasesDesc:`Industry FMEA case studies`,reliabilityStd:`Reliability Standards`,reliabilityStdDesc:`IEC·MIL·GJB standards`,industryTrends:`Industry Trends`,industryTrendsDesc:`Localization & industry updates`,about:`About Us`,aboutUs:`About Us`,aboutUsDesc:`Company introduction & history`,news:`News`,newsDesc:`Latest company news`,contact:`Contact`,contactDesc:`Suzhou HQ`,lifecycle:`Lifecycle Solutions`},hero:{seoH1:`Nationrel - Domestic FMEA Reliability Software | Weibull Analysis SPC ALT Accelerated Life Testing`,slide1:{slogan:`Full Lifecycle`,title:`Reliability Guardian from Design to Retirement`,subtitle:`Five Stages Covered | One-Stop Solution`,description:`Planning → Design → Verification → Manufacturing → Operations — covering the entire product lifecycle with 20+ professional modules`,cta:`View Solutions`,cta2:`Explore Products`},slide2:{slogan:`Nationrel AI · Smart Reliability`,title:`AI Redefines Reliability Analysis`,subtitle:`Industry-Specific LLM | Full-Process AI Assistance`,description:`Deep integration with 30+ industry failure cases across automotive, aerospace, medical — intelligent matching reduces missed failures by 60%`,cta:`Try AI Features`,cta2:`View Cases`},slide3:{slogan:`Nationrel ReliaQube`,title:`Beyond the 7-Step Method · Effortless FMEA`,subtitle:`Smart FMEA Platform | AI-Powered Failure Analysis`,description:`20 years of reliability expertise — intelligent failure mode identification, automated analysis reports, precision improvement recommendations — boosting FMEA efficiency by 80%+`,cta:`Free Trial`,cta2:`Learn More`},prevSlide:`Previous slide`,nextSlide:`Next slide`,slideLabel:`Go to slide {{num}}`,scrollDown:`Learn more`},about:{title:`About Us`,intro:`Nationrel is a high-tech enterprise focused on quality and reliability technology, providing integrated solutions including reliability training, professional consulting, software development, and technology promotion for manufacturing clients. Our team of ASQ CRE certified experts with 20+ years of industry experience has served 1000+ enterprise clients.`,viewMore:`Learn More`,stats:{clients:`Clients Served`,clientsUnit:``,years:`Years of Expertise`,yearsUnit:``,products:`Core Products`,productsUnit:``,industries:`Industries Covered`,industriesUnit:``},aboutPage:{title:`About Nationrel`,subtitle:`Over a decade of dedication to quality & reliability industrial software, empowering Chinese manufacturing competitiveness`,tabs:{intro:`Company Profile`,timeline:`History`,values:`Core Strengths`,know:`Discover Us`},introTitle:`Nationrel (Suzhou) Technology Co., Ltd.`,introP1:`<strong>NationRel Technology Co., Ltd.</strong> (hereinafter referred to as 'NationRel') is a technology innovation enterprise specializing in quality and reliability technology consulting, training, and software system development. Headquartered in Suzhou with an R&D center there, we have branches and partners in Beijing, Dalian, Chengdu, Wuhan, Xi'an, Shenzhen, Ningde, Chongqing, and Taiwan. We are currently establishing a US company to integrate global quality resources, dedicated to providing comprehensive reliability solutions integrating training, consulting, and self-developed software for enterprises.`,introP2:`Our company boasts strong technical capabilities. The core team has over 20 years of experience in quality and reliability consulting services, with members being ASQ CRE (American Society of Quality Certified Reliability Engineers) who have accumulated deep industry experience at internationally renowned companies such as GE, Honeywell, and GM. The China team has rich localized implementation experience and has established close partnerships with universities such as Shanghai Jiao Tong University and East China Normal University. Our strong customer resources cover aerospace, aviation, construction machinery, automotive, energy, and other important industries.`,introP3:`The company's self-developed software products including FMEA, Weibull analysis, and accelerated life testing analysis have been recognized and adopted by hundreds of domestic enterprises. Our clients include SAIC Motor, Foxconn, Midea Group, FAW Jiefang, and China Energy Investment Group, demonstrating broad market recognition. Our software series has won multiple awards including the 2021 National Industrial APP and Information Consumption Competition 'Industrial APP Digital Manufacturing and Management Achievement Transformation Award', the 2022 MIIT Manufacturing Quality Management Digitalization Typical Scenarios and Solutions Award, '2023-2024 Industrial Internet New Quality Productivity Top 100', '2024 Industrial APP Competition Third Prize', and '2024 Electronic Information Industry Quality Improvement Typical Case'.`,certifications:`Certifications & Honors`,certList:[{title:`40+ Software Copyrights`,desc:`Reliability + FMEA`},{title:`High-Tech Enterprise`,desc:`Certified in 2022`},{title:`ISO 9001 Certified`,desc:`Quality Management System`},{title:`Dual-Software Enterprise`,desc:`Software Enterprise + Product`},{title:`MIIT Selected`,desc:`Manufacturing Quality Digitalization`},{title:`Jiangsu Private Sci-Tech`,desc:`Provincial Certification`}],suzhouCenter:`Suzhou R&D Center`,suzhouAddr:`Room 310, Building 2, No. 209 Zhuyuan Road, Gaoxin District`,shanghaiHQ:`Shanghai Headquarters`,shanghaiAddr:`A312-A314, Building 5, Liangu Science Park, No. 2899 Lianhua South Road, Minhang District`,branches:`Branch Offices`,branchesList:`Suzhou (R&D Center) · Shanghai (HQ) · Beijing · Chengdu · Wuhan · Xi'an · Dalian · Ningde · Shenzhen · Shenyang · Chongqing · Taiwan · USA (Coming Soon)`,timelineTitle:`Development History`,coreValues:`Core Values`,values:[{title:`Global Best Practices`,desc:`Delivering global best practices in reliability systems`},{title:`Independent Innovation`,desc:`Creating new reliability design experiences through self-developed solutions`},{title:`Knowledge Transfer`,desc:`Helping clients succeed through knowledge transfer`}],advantagesTitle:`Core Strengths`,advantages:[{title:`Authoritative Standards`,desc:`First batch of AIAG-VDA compliant software in China`},{title:`Senior Team`,desc:`Core members are ASQ CRE certified engineers`},{title:`Industry Experience`,desc:`Fortune 500 experience at GE, Honeywell, GM, etc.`},{title:`Certifications`,desc:`40+ software copyrights + High-Tech Enterprise`},{title:`AI-Powered`,desc:`AI-enhanced FMEA analysis, 80% efficiency boost`}],bizTraining:`Business & Training`,reliabilityTraining:`Reliability System Training`,trainingList:[`Reliability Fundamentals & Data Analysis`,`Design for Reliability (DFR) Training`,`FMEA (DFMEA/PFMEA/MSRA) Training`,`Six Sigma (DMAIC/DFSS)`],reliaQube:`ReliaQube Software Platform`,reliaQubeList:[`Degradation Data Analysis (eDA)`,`Maintenance Optimization (eOMA)`,`Repair Data Analysis (eWA)`,`Reliability Test Design (eDRT)`,`Accelerated Life Analysis (eALT)`],reliabilityConsult:`Reliability Consulting`,consultList:[`Reliability Data Collection & Analysis`,`Reliability Process Consulting`,`Continuous Reliability Improvement`,`FMEA Methodology & Process Consulting`],reliabilityPromo:`Reliability Technology Promotion`,promoList:[`Reliability Technology Academy`,`Reliability Micro-Learning`,`Reliability Technology WeMedia`,`International Reliability Forum`],page:{timeline:{subtitle:`Over 20 years of dedication to quality and reliability, continuous innovation and breakthroughs`,milestones:[{year:`2007~2012`,title:`Foundation`,desc:`Reliability consulting in China`},{year:`2012`,title:`Company Founded`,desc:`Nationrel officially established`},{year:`2014`,title:`First Software Release`,desc:`ReliaQube & DFMEA V1.0`},{year:`2017`,title:`High-Tech Certification`,desc:`16 copyrights, high-tech certified`},{year:`2019`,title:`7-Step Method`,desc:`DFMEA V4.2.2 released`},{year:`2020`,title:`Awards & Expansion`,desc:`Best product award, Suzhou office`},{year:`2021~2022`,title:`Honors & Awards`,desc:`MIIT transformation award`},{year:`2023`,title:`Product Expansion`,desc:`FTA released, Geely partnership`},{year:`2024`,title:`Full Product Line`,desc:`RBD, ALT, HALT released`},{year:`2025`,title:`AI Smart Era`,desc:`AI-FMEA released`,current:!0}]},stats:[{label:`20+ Years Industry Experience`,value:`20+`},{label:`1000+ Clients`,value:`1000+`},{label:`20+ Product Matrix`,value:`20+`},{label:`30+ Technical Experts`,value:`30+`}],certs:{iso9001:{name:`ISO 9001`,desc:`Quality Management System`},iso27001:{name:`ISO/IEC 27001`,desc:`Information Security`},software:{name:`Software Enterprise`,desc:`Dual-Software Certified`},copyright:{name:`Software Copyright`,desc:`40+`,count:`40+`},current:`Current`},coreValues:[{title:`Global Best Practices`,desc:`Integrating international advanced reliability technology`},{title:`Independent R&D`,desc:`Core algorithms self-controlled, safe and reliable`},{title:`Knowledge Transfer`,desc:`Professional training empowers enterprise capability building`}]}}},knowledge:{title:`Knowledge Base`,subtitle:`Professional articles on FMEA, reliability engineering, and quality standards, continuously curated by Nationrel's technical team`,searchPlaceholder:`Search articles, tags...`,noResults:`No matching articles found`,articleCount:`<span class='text-blue-600 font-semibold'>{{count}}</span> articles · Continuously updated`,categories:{all:`All`,"fmea-knowledge":`FMEA Knowledge`,"fmea-method":`FMEA Methods`,"reliability-flow":`Reliability Process`,"reliability-dev":`Reliability Development`,"reliability-eval":`Reliability Evaluation`,"reliability-std":`Reliability Standards`,"software-rel":`Software Reliability`,"industry-trend":`Industry Trends`},cta:{title:`Want to learn more or apply for a software trial?`,subtitle:`Our professional team provides one-on-one consultation and customized solutions`,contactBtn:`Contact Us Now`,moreArticlesBtn:`Browse More Articles`}},news:{title:`News & Updates`,subtitle:`Latest news, industry insights, and technical sharing from Nationrel`,pageSubtitle:`Stay updated with company news, technical sharing, and client cases`,noArticles:`No articles yet`,readMore:`Read More`,categoryLabels:{news:`Company News`,tech:`Technical Articles`,case:`Industry Insights`},filters:{all:`All`}},contact:{title:`Contact Us`,subtitle:`Whether you're exploring products, requesting a free trial, or seeking technical consultation, we're here to help.`,cards:{hotline:{label:`Service Hotline`,value:`4000-032-330`},email:{label:`Email`,value:`service@nationrel.com`},address:{label:`Suzhou HQ`,value:`No. 209 Zhuyuan Road, Gaoxin District, Suzhou`}},form:{title:`Send Inquiry`,name:`Name *`,namePlaceholder:`Your name`,company:`Company`,companyPlaceholder:`Company name`,phone:`Phone *`,phonePlaceholder:`Phone number`,emailField:`Email`,emailPlaceholder:`Email address`,message:`Inquiry *`,messagePlaceholder:`Describe your needs...`,submitBtn:`Submit Inquiry`},success:{title:`Submitted Successfully!`,desc:`We will contact you within 1 business day`},error:`Submission failed. Please call 4000-032-330 to contact us directly.`,promises:{title:`Our Commitments`,quickResponse:{title:`Quick Response`,desc:`Reply within 1 business day`},professional:{title:`Professional Guarantee`,desc:`20 years of industry experience`},freeTrial:{title:`Free Trial`,desc:`14-day free trial`}},faq:{title:`FAQ`,items:[{q:`Do you offer a free trial?`,a:`Yes, we provide a 14-day free trial. Contact our customer service to apply.`},{q:`Do you support custom development?`,a:`Yes, we offer customized services based on enterprise requirements.`},{q:`How is training billed?`,a:`We offer cost-effective training services. Specific costs depend on the training content.`}]}},lifecycle:{title:`Full-Lifecycle`,titleHighlight:` Reliability Solutions`,subtitle:`From product planning to retirement, Nationrel provides end-to-end reliability engineering services — software tools, professional consulting, and technical training — helping manufacturers build systematic reliability capabilities`,stageLabel:`Phase {{phase}}`,stageLabelShort:`Phase`,solutionsLabel:`Phase Solutions`,productsLabel:`Recommended Products/Services`,getSolution:`Get This Phase Solution`,viewAllSolutions:`View All Product Solutions`,coreValues:[{title:`Full Lifecycle Coverage`,desc:`Seamless coverage across five stages — one company for all your lifecycle reliability needs`},{title:`Software + Consulting`,desc:`Self-developed software tools + professional consulting services, comprehensively enabling reliability engineering`},{title:`AI-Empowered`,desc:`Nationrel AI LLM deeply integrated with reliability expertise — intelligent analysis, automated recommendations, 80%+ efficiency boost`}],stages:{plan:{label:`Planning`,en:`Planning`,description:`Product initiation and reliability target setting, establishing reliability programs, defining design input requirements`,solutions:[{name:`Reliability Planning`,link:`/products/reliability-prediction`},{name:`Maintenance Data Analysis`,link:`/products/phm`},{name:`Lifetime Data Analysis`,link:`/products/weibull`},{name:`Risk Assessment`,link:`/products/reliability-prediction`},{name:`QFD`,link:`/products/reliability-prediction`},{name:`Reliability Target Setting & Allocation`,link:`/products/reliability-prediction`},{name:`Reliability Prediction`,link:`/products/reliability-prediction`},{name:`Reliability Program Development`,link:`/products/reliability-prediction`}],products:[{name:`Reliability Consulting`,link:`/contact`},{name:`Maintenance Data Analysis Software`,link:`/products/phm`},{name:`Lifetime Data Analysis Software`,link:`/products/weibull`},{name:`QFD Software`,link:`/products/reliability-prediction`},{name:`Reliability Target Setting Software`,link:`/products/reliability-prediction`},{name:`Reliability Prediction Software`,link:`/products/reliability-prediction`}]},design:{label:`Design`,en:`Design`,description:`Design-phase FMEA analysis, reliability prediction & allocation, fault tree analysis — early risk identification`,solutions:[{name:`DFMEA`,link:`/products/fmea`},{name:`Fault Tree Analysis (FTA)`,link:`/products/fta`},{name:`Design of Experiments (DOE)`,link:`/products/doe`},{name:`HALT`,link:`/products/halt`},{name:`Accelerated Life Testing (ALT)`,link:`/products/alt`},{name:`Target Allocation Correction`,link:`/products/reliability-prediction`},{name:`DRBFM`,link:`/products/fmea`}],products:[{name:`FMEA Software`,link:`/products/fmea`},{name:`FTA Software`,link:`/products/fta`},{name:`DOE Software`,link:`/products/doe`},{name:`ALT Analysis Software`,link:`/products/alt`},{name:`RBD Software`,link:`/products/rbd`}]},test:{label:`Verification`,en:`Verification`,description:`Reliability test design, accelerated life testing, environmental stress screening — quantifying reliability levels`,solutions:[{name:`Reliability Test Design`,link:`/products/alt`},{name:`Accelerated Life Testing (ALT)`,link:`/products/alt`},{name:`ALT/HALT Planning`,link:`/products/halt`},{name:`Environmental Testing`,link:`/products/env-chamber`},{name:`Reliability Demonstration Testing`,link:`/products/alt`},{name:`Reliability Growth Testing`,link:`/products/alt`},{name:`Test Data Analysis`,link:`/products/weibull`}],products:[{name:`Lifetime Data Analysis Software`,link:`/products/weibull`},{name:`Degradation Data Analysis Software`,link:`/products/weibull`},{name:`ALT Analysis Software`,link:`/products/alt`},{name:`Reliability Growth Testing Software`,link:`/products/alt`},{name:`LIMS`,link:`/products/lims`},{name:`Environmental Test Equipment`,link:`/products/env-chamber`},{name:`HALT Equipment`,link:`/products/halt`},{name:`Third-party Testing Lab`,link:`/contact`},{name:`Failure Analysis Service`,link:`/contact`}]},produce:{label:`Manufacturing`,en:`Manufacturing`,description:`PFMEA process analysis, SPC statistical process control, manufacturing quality monitoring — ensuring production reliability`,solutions:[{name:`PFMEA`,link:`/products/fmea`},{name:`SPC Control Charts`,link:`/products/spc`},{name:`Process Control Plans`,link:`/products/spc`},{name:`MSA Measurement Analysis`,link:`/products/msa`},{name:`Design of Experiments (DOE)`,link:`/products/doe`}],products:[{name:`PFMEA Software`,link:`/products/fmea`},{name:`SPC/MSA Software`,link:`/products/spc`},{name:`DOE Software`,link:`/products/doe`},{name:`Control Plan Software`,link:`/products/spc`},{name:`MES`,link:`/products/mes`}]},service:{label:`Operations`,en:`Operations`,description:`Field failure data collection & analysis, maintenance strategy optimization, spare parts management — improving lifecycle reliability`,solutions:[{name:`Field Data Analysis`,link:`/products/weibull`},{name:`Maintenance Optimization`,link:`/products/phm`},{name:`Spare Parts Quantification`,link:`/products/phm`},{name:`Degradation Trend Prediction`,link:`/products/phm`},{name:`RCM`,link:`/products/phm`},{name:`Root Cause Analysis`,link:`/products/phm`},{name:`PHM`,link:`/products/phm`}],products:[{name:`Maintenance Data Analysis Software`,link:`/products/phm`},{name:`Lifetime Data Analysis Software`,link:`/products/weibull`},{name:`FRACAS Management System`,link:`/products/phm`},{name:`AI+DMAIC Tools`,link:`/products/phm`},{name:`PHM Equipment`,link:`/products/phm`}]}}},ai:{pageTitle:`Smart FMEA Template Center`,pageSubtitle:`Input a product description, and AI generates a complete FMEA table. Built with millions of failure cases covering DFMEA / PFMEA / MSRA types — making failure analysis more efficient.`,freeTrial:`Free Trial`,viewProducts:`View Products`,tableHeaders:{no:`No.`,item:`Item/Process`,failure:`Potential Failure Mode`,effect:`Potential Effect`,severity:`Severity`,riskLevel:`Risk Level`,actions:`Recommended Actions`},riskLabels:{high:`High Risk`,medium:`Medium Risk`,low:`Low Risk`},aiGenerating:`Nationrel AI is generating more failure modes based on the industry knowledge base...`,tableData:{dfmea:[{id:`1`,item:`Steering Controller`,potentialFailure:`Steering command response delay`,potentialEffect:`Driver feels steering unresponsive`,severity:`8`,actions:`Optimize controller algorithm`},{id:`2`,item:`Motor Drive`,potentialFailure:`Insufficient output torque`,potentialEffect:`Acceleration performance degradation`,severity:`6`,actions:`Increase motor power`},{id:`3`,item:`Battery Management`,potentialFailure:`Large SOC estimation deviation`,potentialEffect:`Inaccurate range display`,severity:`5`,actions:`Calibrate algorithm parameters`}],pfmea:[{id:`1`,item:`Welding Process`,potentialFailure:`Cold solder joints`,potentialEffect:`Insufficient connection strength`,severity:`8`,actions:`Add inspection station`},{id:`2`,item:`Adhesive Process`,potentialFailure:`Uneven glue amount`,potentialEffect:`Poor sealing`,severity:`7`,actions:`Adjust glue parameters`},{id:`3`,item:`Assembly Process`,potentialFailure:`Bolt torque deviation`,potentialEffect:`Loose assembly`,severity:`6`,actions:`Real-time torque monitoring`}],msra:[{id:`1`,item:`Braking System`,potentialFailure:`Excessive braking distance`,potentialEffect:`Collision risk`,severity:`9`,actions:`Optimize braking strategy`},{id:`2`,item:`Airbag`,potentialFailure:`Misfire/No fire`,potentialEffect:`Occupant injury`,severity:`10`,actions:`Dual redundancy design`}]},features:{oneClick:{title:`One-Click Generation`,desc:`Input a product description, AI generates a complete FMEA table in seconds — no more manual Excel work`},smartReasoning:{title:`Smart Reasoning`,desc:`Automatically builds failure causal chains, covers hidden risks, reduces missed failures by 60%`},knowledgeBase:{title:`Million-Level Knowledge Base`,desc:`Covers 30+ industry failure cases across automotive, aerospace, medical — intelligent matching & recommendations`}},cta:{title:`Ready to experience Nationrel AI?`,subtitle:`No credit card required, one-on-one expert consultation`,btn:`Start Free Trial`},templates:{dfmea:{name:`DFMEA - Design Failure Mode & Effects Analysis`,desc:`Failure analysis for product design phase`},pfmea:{name:`PFMEA - Process Failure Mode & Effects Analysis`,desc:`Risk analysis for manufacturing process control`},msra:{name:`MSRA - Measure of Priority Analysis`,desc:`Risk assessment based on AIAG-VDA standards`}},riskSuffix:` Risk`,sevenSteps:{title:`FMEA Seven-Step Core Methodology`,subtitle:`Based on AIAG & VDA standards, AI-FMEA provides full intelligent support`,header1:`Step`,header2:`Content`,header3:`AI-FMEA Intelligent Support`,steps:[{title:`Planning & Preparation`,content:`Define project scope, boundaries, analysis basis`,ai:[`Project creation, FMEA scope definition`]},{title:`Structure Analysis`,content:`Graphically display product/process structure`,ai:[`Structure tree, PFD graphical editing`]},{title:`Function Analysis`,content:`Define functions, build function network`,ai:[`Intelligent function network drawing, hierarchical expansion`]},{title:`Failure Analysis`,content:`Identify failure modes, effects, causes, build failure network`,ai:[`Auto-generated failure network, bidirectional traceability with function network`]},{title:`Risk Analysis`,content:`Evaluate S-O-D, determine action priority (AP)`,ai:[`Auto AP calculation, customizable S/O/D definitions`]},{title:`Optimization`,content:`Define prevention/detection actions, track status`,ai:[`Action tracking module, task distribution & reminders`]},{title:`Documentation`,content:`Output FMEA report, characteristic list, control plan`,ai:[`One-click export, multi-language support`]}]},functions:{navTitle:`Function Navigation`,tabs:{intro:{title:`Features`,subtitle:`View · Features`,desc:`AI-FMEA is a vertical AI model product for quality and reliability, integrated with DeepSeek general model and industry-specific knowledge base, deeply understanding FMEA methodology to help engineers efficiently complete FMEA analysis.`,features:[`Complies with AIAG-VDA 2019 new seven-step standard`,`Supports DFMEA, PFMEA, MSRA and other analysis types`,`AI intelligent assistance, one-click FMEA document generation`,`Built-in industry knowledge base, professional Q&A support`,`Team collaboration support, multi-person online editing`,`Export to DOCX/PDF/Excel formats`]},ai:{title:`AI Generation`,subtitle:`AI Generation · FMEA`,desc:`Input component name, AI-FMEA quickly generates seven-step FMEA tables complying with AIAG-VDA standards.`,features:[`AIAG-VDA 2019 new seven-step format output`,`Multi-person collaborative editing with permission settings`,`Document version history, traceable audit trail`,`Export to DOCX/PDF/Excel formats`,`Complies with IATF 16949, ISO 9001 requirements`],advantage:`Compared to traditional standalone FMEA tools, provides more convenient team collaboration and document management.`},dual:{title:`Dual Model`,subtitle:`Dual Model · Switch`,desc:`Supports both DeepSeek general model and Nationrel industry-specific model. Users can switch flexibly to get the most suitable analysis results.`,features:[`DeepSeek general AI model, powerful general understanding and reasoning`,`Nationrel industry model, deep FMEA expertise`,`One-click model switching, compare results quickly`,`Customizable model parameters`,`Cloud computing support, fast response`],advantage:`Combines the breadth of general AI with the depth of industry AI, more professional than single models.`},cross:{title:`Cross-System`,subtitle:`Cross-System · Data`,desc:`Seamlessly integrates with PLM, ERP, MES and other enterprise systems, breaking data silos and enabling unified FMEA data management.`,features:[`Seamless integration with major PLM systems`,`Auto-sync ERP material data`,`Share process parameters with MES`,`FMEA quality data correlation analysis`,`Custom interface development support`,`Secure and compliant data transfer`],advantage:`Breaks information silos, making FMEA the core of enterprise quality data management.`},monitor:{title:`Real-time Monitor`,subtitle:`Real-time · Monitor`,desc:`Real-time monitoring of FMEA analysis progress and team collaboration status, timely risk detection, ensuring on-time project delivery.`,features:[`Real-time project progress visualization`,`Team member online status at a glance`,`Auto reminder for pending tasks`,`Risk warning and change notifications`,`Sync with WeChat/ DingTalk messages`,`Mobile access anytime, anywhere`],advantage:`Makes FMEA project management more transparent and team collaboration more efficient.`},integrate:{title:`Integration`,subtitle:`Integration · Extension`,desc:`Rich API interfaces and plugin system, supporting deep integration with existing enterprise systems to meet personalized customization needs.`,features:[`Standard RESTful API interfaces`,`WebHook event notifications`,`Python/Java SDK available`,`Deep integration with Feishu, DingTalk, WeChat Work`,`Private deployment support`,`7×24 technical support`],advantage:`Flexible integration capabilities to meet complex enterprise business scenarios.`},collab:{title:`Collaboration`,subtitle:`Collaboration · Team`,desc:`Support multiple people editing the same FMEA document simultaneously, real-time progress sync, permission management and version control.`,features:[`Real-time multi-person online editing`,`Flexible role permission management`,`Complete version history records`,`Comments and annotation features`,`Task assignment and progress tracking`,`Enterprise WeChat/DingTalk integration`],advantage:`Makes cross-department and cross-regional FMEA collaboration simple and efficient.`}}},coreFeatures:`Core Features`},floating:{wechat:`WeChat`,wechatQR:`WeChat QR Code
Replace with actual image`,scanQR:`Scan to add our WeChat`,instantResponse:`Instant Response · Professional Support`,consult:`Consult`},trustSection:{subtitle:`Clients & Certifications`,title:`Trusted by Industry Leaders`,desc:`20 years in quality reliability, serving 10+ industries including aerospace, automotive, defense, and medical`,aiBadge:`AI Powered · Smart Analysis`,aiTitle:`Nationrel AI Analysis Engine`,aiDesc:`Based on 20 years of reliability data, training industry-specific AI models to boost FMEA analysis efficiency by 80%`,aiFeatures:{recognition:`Smart Failure Recognition`,recognitionDesc:`AI automatically identifies potential failure modes`,recommendation:`Smart Action Recommendation`,recommendationDesc:`Recommends improvements based on historical data`,qualityCheck:`Quality Smart Check`,qualityCheckDesc:`Automatically checks FMEA completeness and compliance`,report:`Smart Report Generation`,reportDesc:`One-click professional analysis report generation`},stats:{clients:`Clients`,years:`Years`,products:`Products`,industries:`Industries Covered`},certificationsTitle:`Certifications`,certifications:{highTech:`High-Tech Enterprise`,copyrights:`40+ Software Copyrights`,iso9001:`ISO 9001 Certified`,miit:`MIIT Typical Scenario`,dualSoft:`Dual-Soft Certified`}},footer:{productServices:`Products & Services`,aboutUs:`About Us`,infoCenter:`Information`,contactInfo:`Contact Info`,companyName:`Nationrel Technology Co., Ltd.`,wechat:`WeChat Official`,douyin:`TikTok`,douyinAccount:`TikTok Account`,copyright:`Copyright © 2020-{{year}} Nationrel Technology Co., Ltd. All Rights Reserved`,links:{about:`About Us`,advantages:`Core Strengths`,timeline:`History`,certificates:`Certifications`,partners:`Partners`,news:`News`,knowledge:`Knowledge Base`,cases:`Case Studies`,videos:`Video Tutorials`},phone:`Phone: 4000-032-330`,mobile:`Mobile: 185-5006-2538`,email:`Email: service@nationrel.com`,address:`Address: Room 310, Building 2, No. 209 Zhuyuan Road, Suzhou`,privacyPolicy:`Privacy Policy`,terms:`Terms of Service`,cookiePolicy:`Cookie Policy`,productLinks:{fmea:`FMEA Software`,reliaqube:`ReliaQube Platform`,weibull:`Weibull Life Data Analysis`,knowledge:`Knowledge Base`,videos:`Video Tutorials`},phoneDisplay:`4000-032-330`,emailDisplay:`service@nationrel.com`},cases:{title:`Case Studies`,stats:{companies:`Clients`,years:`Years of Expertise`,products:`Core Products`,industries:`Industries Covered`},filterAll:`All`,pageTitle:`Customer Success Stories`,pageDesc:`20 years of expertise in quality and reliability, customized solutions for your enterprise`,challenge:`Challenges Faced`,solution:`Solutions`,results:`Project Results`,noResults:`Cases in this industry are being prepared`,ctaTitle:`Your Enterprise Can Be the Next Success Story`,ctaDesc:`20 years of expertise in quality and reliability, customized solutions for your enterprise`,ctaPhone:`Call Now 4000-032-330`,ctaBook:`Book Free Consultation`},videos:{title:`Video Tutorials`,pageSubtitle:`Watch product demos and tutorials to quickly get started with Nationrel software`,views:`{{count}} views`,bilibiliCTA:`For more tutorials, visit our official Bilibili channel`,bilibiliLink:`Visit Bilibili for More`},trialModal:{title:`Choose Trial Platform`,subtitle:`We offer two core products. Please select based on your needs`,startTrial:`Start Trial`,hint:`You can log in and start using immediately after submission, no waiting for approval`,platforms:{fmea:{subtitle:`Intelligent FMEA Analysis Platform`,feature1:`AI Smart Failure Recognition`,feature2:`DFMEA/PFMEA/MSRA`,feature3:`7-Step Method Wizard`},relia:{subtitle:`Reliability Analysis Platform`,feature1:`Weibull Analysis`,feature2:`Accelerated Life Testing`,feature3:`Reliability Prediction`}}},lang:{zh:`中文`,en:`EN`,switchZh:`🇨🇳 中文 / English`,switchEn:`🇺🇸 English / 中文`},newsDetail:{relatedArticles:`Related Articles`,publishedAt:`Published on`,imageAlt:`Image`}},bi=typeof localStorage<`u`?localStorage.getItem(`nationrel-lang`):`zh`;Rr.use(ri).init({resources:{zh:{translation:vi},en:{translation:yi}},lng:bi||`zh`,fallbackLng:`zh`,interpolation:{escapeValue:!1}});var xi=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=o(((e,t)=>{t.exports=xi()}))();function Si(){let{t:e}=P(),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=()=>{let e=window.scrollY>300;n(e),i(e)};return window.addEventListener(`scroll`,e),e(),()=>window.removeEventListener(`scroll`,e)},[]),(0,_.useEffect)(()=>{if(!r)return;let e=e=>{e.target.closest(`#floating-contact`)||i(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[r]),(0,I.jsxs)(I.Fragment,{children:[t&&(0,I.jsx)(`button`,{onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),className:`fixed bottom-28 right-5 z-50 w-11 h-11 bg-white text-slate-500 rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5`,"aria-label":e(`common.backToTop`),children:(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 15l7-7 7 7`})})}),(0,I.jsxs)(`div`,{id:`floating-contact`,className:`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 transition-all duration-300 ${t?`opacity-100 translate-y-0`:`opacity-0 translate-y-4 pointer-events-none`}`,children:[r&&(0,I.jsxs)(`div`,{className:`flex flex-col items-end gap-2 mb-1 animate-fadeIn`,children:[(0,I.jsxs)(`div`,{className:`relative`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg shadow-green-200 transition-all`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,I.jsx)(`path`,{d:`M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.972 2.975-7.63 1.208-.701 2.582-1.048 3.972-1.048.365 0 .724.027 1.083.075C15.668 4.025 12.48 2.187 8.69 2.187zm-2.46 4.665c.518 0 .94.42.94.94 0 .52-.422.94-.94.94a.94.94 0 01-.94-.94c0-.52.42-.94.94-.94zm4.814 0c.518 0 .94.42.94.94 0 .52-.422.94-.94.94a.94.94 0 01-.94-.94c0-.52.42-.94.94-.94zm4.044 4.666c-3.798 0-6.875 2.792-6.875 6.234 0 3.441 3.077 6.234 6.875 6.234.766 0 1.502-.113 2.19-.315a.624.624 0 01.547.069l1.457.852a.249.249 0 00.128.042.226.226 0 00.226-.226.32.32 0 00-.037-.162l-.299-1.134a.452.452 0 01.163-.509C21.073 21.677 22 20.161 22 18.452c0-3.441-3.077-6.234-6.875-6.234l-.036.101zm-1.86 3.35c.398 0 .72.321.72.72a.72.72 0 01-.72.72.72.72 0 01-.72-.72c0-.399.322-.72.72-.72zm3.72 0c.398 0 .72.321.72.72a.72.72 0 01-.72.72.72.72 0 01-.72-.72c0-.399.322-.72.72-.72z`})}),e(`floating.wechat`)]}),(0,I.jsxs)(`div`,{className:`absolute bottom-full right-0 mb-2 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 w-44 text-center`,children:[(0,I.jsx)(`div`,{className:`w-32 h-32 mx-auto mb-2 overflow-hidden rounded-xl`,children:(0,I.jsx)(`img`,{src:`/wechat-qr.png`,alt:e(`floating.wechat`),className:`w-full h-full object-cover`})}),(0,I.jsx)(`p`,{className:`text-xs text-slate-500`,children:e(`floating.scanQR`)}),(0,I.jsx)(`p`,{className:`text-xs font-semibold text-slate-700 mt-0.5`,children:e(`floating.instantResponse`)}),(0,I.jsx)(`div`,{className:`absolute bottom-0 right-5 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white`})]})]}),(0,I.jsxs)(`a`,{href:`tel:4000032330`,className:`flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),`4000-032-330`]})]}),(0,I.jsx)(`button`,{onClick:()=>i(!r),className:`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${r?`bg-slate-700 text-white rotate-45`:`bg-gradient-to-br from-blue-600 to-indigo-600 text-white animate-pulse-slow`}`,"aria-label":e(`common.contactUs`),children:r?(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})}):(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z`})})}),!r&&(0,I.jsx)(`span`,{className:`text-xs text-slate-500 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 shadow-sm border border-slate-100`,children:e(`floating.consult`)})]})]})}var Ci=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),wi=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Ti=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Ei=e=>{let t=Ti(e);return t.charAt(0).toUpperCase()+t.slice(1)},Di={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Oi=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ki=(0,_.createContext)({}),Ai=()=>(0,_.useContext)(ki),ji=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Ai()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...Di,width:t??l??Di.width,height:t??l??Di.height,stroke:e??f,strokeWidth:m,className:Ci(`lucide`,p,i),...!a&&!Oi(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),Mi=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ji,{ref:i,iconNode:t,className:Ci(`lucide-${wi(Ei(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Ei(e),n},Ni=Mi(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Pi=Mi(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),Fi=Mi(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),L=Mi(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),R=Mi(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),Ii=Mi(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),Li=Mi(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),Ri=Mi(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),zi=Mi(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Bi=Mi(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Vi=Mi(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Hi=Mi(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function Ui({isOpen:e,onClose:t}){let{t:n}=P(),r=(0,_.useRef)(null);if((0,_.useEffect)(()=>{let n=e=>{r.current&&!r.current.contains(e.target)&&t()};return e&&(document.addEventListener(`mousedown`,n),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`mousedown`,n),document.body.style.overflow=``}},[e,t]),(0,_.useEffect)(()=>{let n=e=>{e.key===`Escape`&&t()};return e&&document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),!e)return null;let i=[{name:`AI-FMEA`,subtitleKey:`trialModal.platforms.fmea.subtitle`,url:`https://fmea.nationrel.com/#/login`,icon:(0,I.jsx)(Vi,{className:`w-8 h-8`}),color:`from-blue-500 to-blue-600`,featureKeys:[`trialModal.platforms.fmea.feature1`,`trialModal.platforms.fmea.feature2`,`trialModal.platforms.fmea.feature3`]},{name:`ReliaQube`,subtitleKey:`trialModal.platforms.relia.subtitle`,url:`http://reliaqube.nationrel.cn/#/login?redirect=%2F`,icon:(0,I.jsx)(Ii,{className:`w-8 h-8`}),color:`from-cyan-500 to-cyan-600`,featureKeys:[`trialModal.platforms.relia.feature1`,`trialModal.platforms.relia.feature2`,`trialModal.platforms.relia.feature3`]}];return(0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity`}),(0,I.jsxs)(`div`,{ref:r,className:`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200`,children:[(0,I.jsx)(`button`,{onClick:t,className:`absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10`,children:(0,I.jsx)(Hi,{className:`w-5 h-5 text-slate-600`})}),(0,I.jsxs)(`div`,{className:`bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-white`,children:[(0,I.jsx)(`h2`,{className:`text-2xl font-bold mb-2`,children:n(`trialModal.title`)}),(0,I.jsx)(`p`,{className:`text-blue-100`,children:n(`trialModal.subtitle`)})]}),(0,I.jsxs)(`div`,{className:`p-8`,children:[(0,I.jsx)(`div`,{className:`grid md:grid-cols-2 gap-6`,children:i.map(e=>(0,I.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`group relative bg-slate-50 rounded-2xl p-6 border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`,children:[(0,I.jsx)(`div`,{className:`w-16 h-16 rounded-2xl bg-gradient-to-br ${e.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,children:e.icon}),(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-900 mb-1`,children:e.name}),(0,I.jsx)(`p`,{className:`text-slate-500 text-sm mb-4`,children:n(e.subtitleKey)}),(0,I.jsx)(`ul`,{className:`space-y-2 mb-6`,children:e.featureKeys.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-center gap-2 text-sm text-slate-600`,children:[(0,I.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-blue-500`}),n(e)]},t))}),(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${e.color} text-white font-semibold group-hover:shadow-lg transition-all duration-300`,children:[n(`trialModal.startTrial`),(0,I.jsx)(Li,{className:`w-4 h-4`})]})]},e.name))}),(0,I.jsx)(`div`,{className:`mt-6 text-center`,children:(0,I.jsx)(`p`,{className:`text-sm text-slate-500`,children:n(`trialModal.hint`)})})]})]})]})}function Wi(){let{t:e,i18n:t}=P(),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`home`),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(!1),f=(0,_.useRef)(null),p=A(),m=at(),h=m.pathname!==`/`;(0,_.useEffect)(()=>{let e=()=>{if(r(window.scrollY>20),h)return;let e=S.map(e=>document.getElementById(e)).filter(Boolean).find(e=>{let t=e.getBoundingClientRect();return t.top<=100&&t.bottom>100});e&&s(e.id)};return window.addEventListener(`scroll`,e),r(window.scrollY>20),()=>window.removeEventListener(`scroll`,e)},[h]);let g=e=>{if(e===`home`){p(`/`),a(!1),l(null);return}e.startsWith(`/`)?p(e):h?(p(`/#${e}`),setTimeout(()=>document.getElementById(e)?.scrollIntoView({behavior:`smooth`}),150)):document.getElementById(e)?.scrollIntoView({behavior:`smooth`}),a(!1),l(null)},v=e=>{f.current&&clearTimeout(f.current),l(e)},y=()=>{f.current=setTimeout(()=>l(null),150)},b=()=>{let e=t.language===`zh`?`en`:`zh`;t.changeLanguage(e),localStorage.setItem(`nationrel-lang`,e)},x=[{label:e(`nav.home`),href:`/`,type:`link`},{label:e(`nav.products`),type:`dropdown`,children:[{label:e(`nav.allProducts`),href:`/products`,desc:e(`nav.allProductsDesc`)},{label:e(`nav.cases`),href:`/cases`,desc:e(`nav.casesDesc`)},{label:e(`nav.videos`),href:`/videos`,desc:e(`nav.videosDesc`)}]},{label:e(`nav.ai`),type:`link`,href:`/ai`,highlight:!0},{label:e(`nav.knowledge`),type:`dropdown`,children:[{label:e(`nav.knowledgeArticles`),href:`/knowledge`,desc:e(`nav.knowledgeArticlesDesc`)},{label:e(`nav.fmeaCases`),href:`/knowledge?cat=case`,desc:e(`nav.fmeaCasesDesc`)},{label:e(`nav.reliabilityStd`),href:`/knowledge?cat=standard`,desc:e(`nav.reliabilityStdDesc`)},{label:e(`nav.industryTrends`),href:`/knowledge?cat=trend`,desc:e(`nav.industryTrendsDesc`)}]},{label:e(`nav.about`),type:`dropdown`,children:[{label:e(`nav.aboutUs`),href:`/about`,desc:e(`nav.aboutUsDesc`)},{label:e(`nav.news`),href:`/news`,desc:e(`nav.newsDesc`)},{label:e(`nav.contact`),href:`/contact`,desc:e(`nav.contactDesc`)}]}],S=[`home`,`about`,`products`,`knowledge`,`cases`,`news`,`contact`],C={productSolutions:e(`nav.products`),productItems:[{label:e(`nav.lifecycle`),href:`/#lifecycle`},{label:e(`nav.allProducts`),href:`/products`},{label:e(`nav.cases`),href:`/cases`},{label:e(`nav.videos`),href:`/videos`}],knowledgeLabel:e(`nav.knowledge`),knowledgeItems:[{label:e(`nav.knowledgeArticles`),href:`/knowledge`},{label:e(`nav.fmeaCases`),href:`/knowledge?cat=case`},{label:e(`nav.reliabilityStd`),href:`/knowledge?cat=standard`},{label:e(`nav.industryTrends`),href:`/knowledge?cat=trend`}],aboutLabel:e(`nav.about`),aboutItems:[{label:e(`nav.aboutUs`),href:`/about`},{label:e(`nav.news`),href:`/news`},{label:e(`nav.contact`),href:`/contact`}]};return(0,I.jsxs)(`nav`,{className:`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 shadow-lg shadow-blue-900/50`,children:[(0,I.jsx)(`div`,{className:`border-b border-blue-800/50 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 py-1 flex items-center justify-between text-sm`,children:[(0,I.jsxs)(`div`,{className:`hidden md:flex items-center gap-2 text-blue-300`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 12h14M12 5l7 7-7 7`})}),(0,I.jsx)(`span`,{children:e(`nav.welcome`)})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,I.jsxs)(`a`,{href:`tel:4000032330`,className:`flex items-center gap-1.5 hover:text-blue-400 transition-colors text-blue-300`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),(0,I.jsx)(`span`,{children:`4000-032-330`})]}),(0,I.jsxs)(`a`,{href:`mailto:service@nationrel.com`,className:`flex items-center gap-1.5 hover:text-blue-400 transition-colors text-blue-300`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),(0,I.jsx)(`span`,{children:`service@nationrel.com`})]}),(0,I.jsxs)(`button`,{onClick:b,className:`flex items-center gap-1 hover:text-blue-400 transition-colors text-blue-300`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129`})}),(0,I.jsx)(`span`,{children:t.language===`zh`?e(`lang.en`):e(`lang.zh`)})]})]})]})}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-12`,children:[(0,I.jsx)(`button`,{onClick:()=>g(`home`),className:`group shrink-0 flex items-center gap-1`,children:(0,I.jsx)(`img`,{src:`/logo-white.png`,alt:`Nationrel`,className:`h-8 group-hover:scale-105 transition-all duration-300`})}),(0,I.jsx)(`div`,{className:`hidden lg:flex items-center gap-2`,children:x.map(e=>e.type===`link`?e.highlight?(0,I.jsxs)(`button`,{onClick:()=>g(e.href),className:`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-cyan-300 hover:from-blue-500/30 hover:to-cyan-500/30 hover:text-cyan-200 hover:scale-105`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z`})}),e.label,(0,I.jsx)(`span`,{className:`text-[10px] px-1.5 py-0.5 bg-cyan-500/30 rounded-full text-cyan-300`,children:`AI`})]},e.label):(0,I.jsx)(`button`,{onClick:()=>g(e.href),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${m.pathname===`/`?`text-blue-400 bg-slate-700/50`:`text-white hover:text-blue-400 hover:bg-slate-700/50`}`,children:e.label},e.label):(0,I.jsxs)(`div`,{className:`relative`,onMouseEnter:()=>v(e.label),onMouseLeave:y,children:[(0,I.jsxs)(`button`,{className:`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1 ${c===e.label?`text-blue-400 bg-slate-700/50`:`text-white hover:text-blue-400 hover:bg-slate-700/50`}`,children:[e.label,(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5 transition-transform duration-200 ${c===e.label?`rotate-180`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})})]}),c===e.label&&e.children&&(0,I.jsx)(`div`,{className:`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64`,children:(0,I.jsx)(`div`,{className:`bg-slate-800 rounded-2xl shadow-2xl shadow-slate-900/50 border border-slate-700 overflow-hidden`,children:e.children.map(e=>(0,I.jsxs)(`button`,{onClick:()=>g(e.href),className:`w-full text-left px-5 py-3.5 hover:bg-slate-700 transition-colors group`,children:[(0,I.jsx)(`div`,{className:`text-sm font-semibold text-white group-hover:text-blue-400 transition-colors`,children:e.label}),(0,I.jsx)(`div`,{className:`text-xs text-blue-300 mt-0.5`,children:e.desc})]},e.label))})})]},e.label))}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsxs)(`button`,{onClick:()=>d(!0),className:`hidden md:flex items-center gap-2 px-5 py-2 bg-slate-700/80 border border-slate-500 hover:border-blue-400 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:text-blue-300`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})}),e(`common.freeTrial`)]}),(0,I.jsx)(`button`,{onClick:()=>g(`contact`),className:`hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5`,children:e(`common.freeConsult`)}),(0,I.jsx)(`button`,{className:`lg:hidden p-2 rounded-lg text-white`,onClick:()=>a(!i),children:i?(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})}):(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 6h16M4 12h16M4 18h16`})})})]})]}),i&&(0,I.jsx)(`div`,{className:`lg:hidden bg-slate-800 border-t border-slate-700 shadow-lg max-h-[80vh] overflow-y-auto`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 py-4 space-y-1`,children:[(0,I.jsx)(`button`,{onClick:()=>g(`home`),className:`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-slate-700 hover:text-blue-400 transition-colors`,children:e(`nav.home`)}),(0,I.jsxs)(`button`,{onClick:()=>g(`/ai`),className:`block w-full text-left px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-cyan-300 hover:from-blue-500/30 flex items-center gap-2`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z`})}),e(`nav.ai`),(0,I.jsx)(`span`,{className:`text-[10px] px-1.5 py-0.5 bg-cyan-500/30 rounded-full`,children:`AI`})]}),(0,I.jsx)(`button`,{onClick:b,className:`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-blue-300 hover:bg-slate-700 hover:text-blue-400 transition-colors`,children:t.language===`zh`?e(`lang.switchZh`):e(`lang.switchEn`)}),(0,I.jsx)(`div`,{className:`pt-2 pb-1 px-4 text-xs font-bold text-blue-400 uppercase tracking-wider`,children:C.productSolutions}),C.productItems.map(e=>(0,I.jsx)(`button`,{onClick:()=>g(e.href),className:`block w-full text-left px-4 py-2.5 rounded-xl text-sm text-blue-200 hover:bg-slate-700 hover:text-blue-400 transition-colors`,children:e.label},e.label)),(0,I.jsx)(`div`,{className:`pt-2 pb-1 px-4 text-xs font-bold text-blue-400 uppercase tracking-wider`,children:C.knowledgeLabel}),C.knowledgeItems.map(e=>(0,I.jsx)(`button`,{onClick:()=>g(e.href),className:`block w-full text-left px-4 py-2.5 rounded-xl text-sm text-blue-200 hover:bg-slate-700 hover:text-blue-400 transition-colors`,children:e.label},e.label)),(0,I.jsx)(`div`,{className:`pt-2 pb-1 px-4 text-xs font-bold text-blue-400 uppercase tracking-wider`,children:C.aboutLabel}),C.aboutItems.map(e=>(0,I.jsx)(`button`,{onClick:()=>g(e.href),className:`block w-full text-left px-4 py-2.5 rounded-xl text-sm text-blue-200 hover:bg-slate-700 hover:text-blue-400 transition-colors`,children:e.label},e.label)),(0,I.jsxs)(`div`,{className:`flex gap-2 mt-3`,children:[(0,I.jsx)(`button`,{onClick:()=>{a(!1),d(!0)},className:`flex-1 text-center px-4 py-2.5 bg-slate-700 border border-slate-500 text-white rounded-xl text-sm font-medium`,children:e(`common.freeTrial`)}),(0,I.jsx)(`button`,{onClick:()=>g(`contact`),className:`flex-1 text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl text-sm font-bold`,children:e(`common.freeConsult`)})]})]})}),(0,I.jsx)(Ui,{isOpen:u,onClose:()=>d(!1)})]})}function Gi(){let{t:e}=P(),t=A(),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1),c=[{id:1,slogan:e(`hero.slide1.slogan`),title:e(`hero.slide1.title`),subtitle:e(`hero.slide1.subtitle`),description:e(`hero.slide1.description`),cta:e(`hero.slide1.cta`),ctaLink:`/#lifecycle`,cta2:e(`hero.slide1.cta2`),cta2Link:`/products`,bgGradient:`from-blue-900/90 via-blue-800/80 to-indigo-900/90`,bgImage:`/images/hero-reliability.jpg`},{id:2,slogan:e(`hero.slide2.slogan`),title:e(`hero.slide2.title`),subtitle:e(`hero.slide2.subtitle`),description:e(`hero.slide2.description`),cta:e(`hero.slide2.cta`),ctaLink:`/#lifecycle`,cta2:e(`hero.slide2.cta2`),cta2Link:`/products`,bgGradient:`from-blue-900/90 via-blue-800/80 to-cyan-900/90`,bgImage:`/images/hero-global.jpg`},{id:3,slogan:e(`hero.slide3.slogan`),title:e(`hero.slide3.title`),subtitle:e(`hero.slide3.subtitle`),description:e(`hero.slide3.description`),cta:e(`hero.slide3.cta`),ctaLink:`/#lifecycle`,cta2:e(`hero.slide3.cta2`),cta2Link:`/products`,bgGradient:`from-slate-900/90 via-blue-900/80 to-indigo-900/90`,bgImage:`/images/hero-team.jpg`}];(0,_.useEffect)(()=>{let e=setInterval(()=>{r(e=>(e+1)%3)},3e3);return()=>clearInterval(e)},[3]);let l=e=>{i||e===n||(a(!0),r(e),setTimeout(()=>a(!1),500))},u=e=>{e.startsWith(`/#`)?document.getElementById(e.slice(2))?.scrollIntoView({behavior:`smooth`}):e.startsWith(`#`)?document.getElementById(e.slice(1))?.scrollIntoView({behavior:`smooth`}):t(e)},d=c[n];return(0,I.jsxs)(`section`,{id:`home`,className:`relative h-[85vh] min-h-[600px] overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`absolute inset-0`,children:[c.map((e,t)=>(0,I.jsx)(`div`,{className:`absolute inset-0 transition-opacity duration-1000 ${t===n?`opacity-100`:`opacity-0`}`,style:{backgroundImage:`url(${e.bgImage})`,backgroundSize:`cover`,backgroundPosition:`center`}},e.id)),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80`}),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-cyan-900/30`})]}),(0,I.jsx)(`div`,{className:`absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent`}),(0,I.jsx)(`div`,{className:`absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 to-purple-600/10 rounded-full blur-[80px]`}),(0,I.jsx)(`div`,{className:`absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-500/15 to-blue-500/10 rounded-full blur-[60px]`}),(0,I.jsxs)(`div`,{className:`absolute bottom-0 left-0 right-0 h-32`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0`,style:{background:`linear-gradient(168deg, transparent 0%, rgba(30,41,59,0.15) 50%, rgba(30,41,59,0.3) 100%)`}}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent`})]}),(0,I.jsx)(`div`,{className:`absolute -bottom-1 left-0 right-0 h-20 bg-slate-50`}),(0,I.jsxs)(`div`,{className:`relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center justify-center`,children:[(0,I.jsx)(`h1`,{className:`sr-only`,children:e(`hero.seoH1`)}),(0,I.jsxs)(`div`,{className:`max-w-3xl mx-auto text-center`,children:[(0,I.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in shadow-xl`,children:[(0,I.jsx)(`span`,{className:`w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50`}),(0,I.jsx)(`span`,{className:`text-white/90 text-sm font-medium tracking-wide`,children:d.slogan})]},`slogan-${n}`),(0,I.jsx)(`h2`,{className:`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up`,children:d.title},`title-${n}`),(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-4 mb-6`,children:[(0,I.jsx)(`div`,{className:`w-12 h-px bg-gradient-to-r from-transparent to-white/40`}),(0,I.jsx)(`p`,{className:`text-xl md:text-2xl text-white/90 font-medium animate-fade-in-up`,children:d.subtitle},`subtitle-${n}`),(0,I.jsx)(`div`,{className:`w-12 h-px bg-gradient-to-l from-transparent to-white/40`})]}),(0,I.jsx)(`p`,{className:`text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up whitespace-pre-line`,children:d.description},`desc-${n}`),(0,I.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-4 animate-fade-in-up`,children:[(0,I.jsxs)(`button`,{onClick:()=>u(d.ctaLink),className:`group relative px-10 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500`}),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity`}),(0,I.jsxs)(`span`,{className:`relative flex items-center justify-center gap-2 text-white`,children:[d.cta,(0,I.jsx)(Ni,{className:`w-5 h-5 group-hover:translate-x-1 transition-transform`})]})]}),(0,I.jsx)(`button`,{onClick:()=>u(d.cta2Link||`/products`),className:`px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 hover:shadow-xl`,children:d.cta2})]},`cta-${n}`)]})]}),(0,I.jsx)(`button`,{onClick:()=>l((n-1+3)%3),className:`absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 group`,"aria-label":e(`hero.prevSlide`),children:(0,I.jsx)(L,{className:`w-6 h-6 group-hover:-translate-x-1 transition-transform`})}),(0,I.jsx)(`button`,{onClick:()=>l((n+1)%3),className:`absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 group`,"aria-label":e(`hero.nextSlide`),children:(0,I.jsx)(R,{className:`w-6 h-6 group-hover:translate-x-1 transition-transform`})}),(0,I.jsx)(`div`,{className:`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3`,children:Array.from({length:3}).map((t,r)=>(0,I.jsx)(`button`,{onClick:()=>l(r),className:`relative transition-all duration-500 ${r===n?`w-10 h-2`:`w-2 h-2`}`,"aria-label":e(`hero.slideLabel`,{num:r+1}),children:r===n?(0,I.jsx)(`div`,{className:`absolute inset-0 bg-white rounded-full shadow-lg shadow-white/50`}):(0,I.jsx)(`div`,{className:`absolute inset-0 bg-white/40 hover:bg-white/60 rounded-full transition-colors`})},r))}),(0,I.jsx)(`div`,{className:`absolute bottom-10 right-10 z-20`,children:(0,I.jsxs)(`button`,{onClick:()=>document.getElementById(`about`)?.scrollIntoView({behavior:`smooth`}),className:`flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors`,children:[(0,I.jsx)(`span`,{className:`text-xs tracking-widest uppercase`,children:`探索`}),(0,I.jsx)(Fi,{className:`w-5 h-5 animate-bounce`})]})}),(0,I.jsx)(Ui,{isOpen:o,onClose:()=>s(!1)})]})}function Ki(){let{t:e}=P(),t=A(),[n,r]=(0,_.useState)(`design`),i=[{id:`plan`,phase:`01`,icon:(0,I.jsx)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2`})}),color:`from-blue-600 to-blue-700`,lightColor:`bg-blue-50`,textColor:`text-blue-700`,borderColor:`border-blue-200`,label:e(`lifecycle.stages.plan.label`),description:e(`lifecycle.stages.plan.description`),solutions:e(`lifecycle.stages.plan.solutions`,{returnObjects:!0}),products:e(`lifecycle.stages.plan.products`,{returnObjects:!0})},{id:`design`,phase:`02`,icon:(0,I.jsxs)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`}),(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`})]}),color:`from-indigo-600 to-indigo-700`,lightColor:`bg-indigo-50`,textColor:`text-indigo-700`,borderColor:`border-indigo-200`,label:e(`lifecycle.stages.design.label`),description:e(`lifecycle.stages.design.description`),solutions:e(`lifecycle.stages.design.solutions`,{returnObjects:!0}),products:e(`lifecycle.stages.design.products`,{returnObjects:!0})},{id:`test`,phase:`03`,icon:(0,I.jsx)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),color:`from-sky-600 to-sky-700`,lightColor:`bg-sky-50`,textColor:`text-sky-700`,borderColor:`border-sky-200`,label:e(`lifecycle.stages.test.label`),description:e(`lifecycle.stages.test.description`),solutions:e(`lifecycle.stages.test.solutions`,{returnObjects:!0}),products:e(`lifecycle.stages.test.products`,{returnObjects:!0})},{id:`produce`,phase:`04`,icon:(0,I.jsx)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z`})}),color:`from-cyan-600 to-cyan-700`,lightColor:`bg-cyan-50`,textColor:`text-cyan-700`,borderColor:`border-cyan-200`,label:e(`lifecycle.stages.produce.label`),description:e(`lifecycle.stages.produce.description`),solutions:e(`lifecycle.stages.produce.solutions`,{returnObjects:!0}),products:e(`lifecycle.stages.produce.products`,{returnObjects:!0})},{id:`service`,phase:`05`,icon:(0,I.jsx)(`svg`,{className:`w-7 h-7`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`})}),color:`from-blue-700 to-indigo-700`,lightColor:`bg-blue-50`,textColor:`text-blue-800`,borderColor:`border-blue-200`,label:e(`lifecycle.stages.service.label`),description:e(`lifecycle.stages.service.description`),solutions:e(`lifecycle.stages.service.solutions`,{returnObjects:!0}),products:e(`lifecycle.stages.service.products`,{returnObjects:!0})}],a=[{icon:(0,I.jsx)(`svg`,{className:`w-8 h-8`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z`})}),titleKey:`lifecycle.coreValues.0.title`,descKey:`lifecycle.coreValues.0.desc`},{icon:(0,I.jsx)(`svg`,{className:`w-8 h-8`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18`})}),titleKey:`lifecycle.coreValues.1.title`,descKey:`lifecycle.coreValues.1.desc`},{icon:(0,I.jsx)(`svg`,{className:`w-8 h-8`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M13 10V3L4 14h7v7l9-11h-7z`})}),titleKey:`lifecycle.coreValues.2.title`,descKey:`lifecycle.coreValues.2.desc`}],o=i.find(e=>e.id===n)??i[1];return(0,I.jsxs)(`section`,{id:`lifecycle`,className:`py-12 lg:py-16 bg-white relative overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`absolute inset-0 pointer-events-none`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-50 opacity-60 blur-3xl`}),(0,I.jsx)(`div`,{className:`absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-50 opacity-50 blur-3xl`})]}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 relative`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`LIFECYCLE SOLUTION`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsxs)(`h2`,{className:`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900`,children:[e(`lifecycle.title`),(0,I.jsx)(`span`,{className:`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600`,children:e(`lifecycle.titleHighlight`)})]}),(0,I.jsx)(`p`,{className:`mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed`,children:e(`lifecycle.subtitle`)})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16`,children:a.map((t,n)=>(0,I.jsxs)(`div`,{className:`flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300`,children:[(0,I.jsx)(`div`,{className:`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-200`,children:t.icon}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{className:`font-bold text-slate-900 mb-1.5`,children:e(t.titleKey)}),(0,I.jsx)(`p`,{className:`text-sm text-slate-500 leading-relaxed`,children:e(t.descKey)})]})]},n))}),(0,I.jsxs)(`div`,{className:`relative`,children:[(0,I.jsx)(`div`,{className:`hidden lg:block absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 z-0`}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8`,children:i.map(t=>(0,I.jsxs)(`button`,{onClick:()=>r(t.id),className:`relative flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 z-10 ${n===t.id?`bg-gradient-to-b ${t.color} border-transparent text-white shadow-xl shadow-blue-200`:`bg-white ${t.borderColor} hover:shadow-md text-slate-600 hover:border-blue-300`}`,children:[(0,I.jsx)(`div`,{className:`text-xs font-bold tracking-widest ${n===t.id?`text-white/70`:`text-slate-400`}`,children:t.phase}),(0,I.jsx)(`div`,{className:`${n===t.id?`text-white`:t.textColor}`,children:t.icon}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`text-sm font-bold text-center ${n===t.id?`text-white`:`text-slate-800`}`,children:e(`lifecycle.stages.`+t.id+`.label`)}),(0,I.jsx)(`div`,{className:`text-xs text-center ${n===t.id?`text-white/70`:`text-slate-400`}`,children:e(`lifecycle.stages.`+t.id+`.en`)})]})]},t.id))}),(0,I.jsx)(`div`,{className:`rounded-3xl p-8 border-2 ${o.borderColor} bg-gradient-to-br from-white to-${o.lightColor} transition-all duration-500`,style:{background:`linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)`},children:(0,I.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start`,children:[(0,I.jsxs)(`div`,{className:`lg:col-span-1`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,I.jsx)(`div`,{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${o.color} flex items-center justify-center text-white shadow-lg`,children:o.icon}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`text-xs text-slate-400 font-medium`,children:e(`lifecycle.stageLabel`,{phase:o.phase})}),(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-900`,children:o.label})]})]}),(0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed text-sm`,children:o.description})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`h4`,{className:`text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2`,children:[(0,I.jsx)(`span`,{className:`w-1 h-4 rounded-full bg-gradient-to-b ${o.color}`}),e(`lifecycle.solutionsLabel`)]}),(0,I.jsx)(`div`,{className:`space-y-2.5`,children:o.solutions.map((e,n)=>(0,I.jsxs)(`button`,{onClick:()=>t(e.link),className:`w-full flex items-center gap-3 p-2.5 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 text-left cursor-pointer`,children:[(0,I.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-gradient-to-b ${o.color} flex-shrink-0`}),(0,I.jsx)(`span`,{className:`text-sm text-slate-700 font-medium`,children:e.name})]},n))})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`h4`,{className:`text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2`,children:[(0,I.jsx)(`span`,{className:`w-1 h-4 rounded-full bg-gradient-to-b ${o.color}`}),e(`lifecycle.productsLabel`)]}),(0,I.jsx)(`div`,{className:`space-y-2.5`,children:o.products.map((e,n)=>(0,I.jsxs)(`button`,{onClick:()=>t(e.link),className:`w-full flex items-center justify-between p-3 bg-white rounded-xl border ${o.borderColor} hover:shadow-md cursor-pointer group transition-all duration-200 text-left`,children:[(0,I.jsx)(`span`,{className:`text-sm font-semibold ${o.textColor} group-hover:text-blue-700`,children:e.name}),(0,I.jsx)(`svg`,{className:`w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]},n))}),(0,I.jsx)(`button`,{onClick:()=>t(`/contact`),className:`mt-5 w-full px-5 py-3 bg-gradient-to-r ${o.color} text-white rounded-xl font-semibold text-sm hover:opacity-90 hover:shadow-lg transition-all duration-300`,children:e(`lifecycle.getSolution`)})]})]})})]}),(0,I.jsx)(`div`,{className:`mt-12 text-center`,children:(0,I.jsxs)(`button`,{onClick:()=>{t(`/products`),window.scrollTo({top:0,behavior:`smooth`})},className:`inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-300/40 hover:-translate-y-0.5 transition-all duration-300`,children:[e(`lifecycle.viewAllSolutions`),(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})})]})]})}function qi({value:e,suffix:t,unit:n}){let[r,i]=(0,_.useState)(0),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&!o&&s(!0)},{threshold:.5});return a.current&&e.observe(a.current),()=>e.disconnect()},[o]),(0,_.useEffect)(()=>{if(!o)return;let t=e/60,n=0,r=setInterval(()=>{n+=t,n>=e?(i(e),clearInterval(r)):i(Math.floor(n))},2e3/60);return()=>clearInterval(r)},[o,e]),(0,I.jsxs)(`span`,{ref:a,children:[r,n,t]})}function Ji(){let{t:e}=P(),t=A(),n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&i(!0)},{threshold:.1});return n.current&&e.observe(n.current),()=>e.disconnect()},[]);let a=[{label:e(`about.stats.clients`),value:1e3,unit:`+`,suffix:e(`about.stats.clientsUnit`)},{label:e(`about.stats.years`),value:20,unit:`+`,suffix:e(`about.stats.yearsUnit`)},{label:e(`about.stats.products`),value:20,unit:``,suffix:e(`about.stats.productsUnit`)},{label:e(`about.stats.industries`),value:20,unit:`+`,suffix:e(`about.stats.industriesUnit`)}];return(0,I.jsxs)(`section`,{id:`about`,className:`py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent`}),(0,I.jsx)(`div`,{className:`absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50`}),(0,I.jsx)(`div`,{className:`absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50`}),(0,I.jsxs)(`div`,{ref:n,className:`max-w-7xl mx-auto px-6 lg:px-8 relative`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-16 transition-all duration-700 ${r?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`}`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`ABOUT US`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsx)(`h2`,{className:`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900`,children:e(`about.title`)})]}),(0,I.jsx)(`div`,{className:`bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 mb-12 transition-all duration-700 delay-200 ${r?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`}`,children:(0,I.jsxs)(`div`,{className:`max-w-3xl mx-auto text-left`,children:[(0,I.jsx)(`p`,{className:`text-lg text-slate-600 leading-relaxed mb-8`,dangerouslySetInnerHTML:{__html:e(`about.intro`)}}),(0,I.jsx)(`div`,{className:`text-center`,children:(0,I.jsxs)(`button`,{onClick:()=>{t(`/about?tab=know`),window.scrollTo({top:0,behavior:`smooth`})},className:`group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5`,children:[e(`about.viewMore`),(0,I.jsx)(`svg`,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})})]})}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 transition-all duration-700 delay-300 ${r?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`}`,children:a.map((e,t)=>(0,I.jsxs)(`div`,{className:`text-right p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/70 transition-all hover:-translate-y-1`,children:[(0,I.jsx)(`div`,{className:`text-3xl md:text-4xl font-bold text-blue-600 mb-2`,children:(0,I.jsx)(qi,{value:e.value,suffix:e.suffix,unit:e.unit})}),(0,I.jsx)(`div`,{className:`text-sm text-slate-500 font-medium`,children:e.label})]},t))})]})]})}var Yi=()=>{let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let t=new IntersectionObserver(([e])=>{e.isIntersecting&&n(!0)},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),{ref:e,isVisible:t}},Xi=({client:e})=>{let{i18n:t}=P(),n=t.language===`en`;return(0,I.jsx)(`div`,{className:`px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-blue-300 hover:bg-blue-50/80 hover:shadow-md transition-all cursor-pointer group`,title:n?e.nameEn:e.name,children:(0,I.jsx)(`span`,{className:`text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors`,children:n?e.nameEn:e.name})})},Zi={汽车:[{name:`比亚迪`,nameEn:`BYD`,color:`from-blue-400 to-blue-500`},{name:`上汽集团`,nameEn:`SAIC Motor`,color:`from-red-500 to-red-600`},{name:`吉利汽车`,nameEn:`Geely`,color:`from-blue-500 to-blue-600`},{name:`长城汽车`,nameEn:`Great Wall`,color:`from-slate-600 to-slate-700`},{name:`蔚来汽车`,nameEn:`NIO`,color:`from-blue-500 to-blue-600`}],航空航天:[{name:`中国商飞`,nameEn:`COMAC`,color:`from-blue-500 to-blue-600`},{name:`航空工业`,nameEn:`AVIC`,color:`from-blue-600 to-blue-700`},{name:`中国船级社`,nameEn:`CCS`,color:`from-blue-500 to-blue-600`},{name:`航天科工`,nameEn:`CASIC`,color:`from-red-500 to-red-600`}],工程机械:[{name:`徐工集团`,nameEn:`XCMG`,color:`from-yellow-500 to-yellow-600`},{name:`三一重工`,nameEn:`SANY`,color:`from-red-600 to-red-700`},{name:`柳工集团`,nameEn:`LiuGong`,color:`from-orange-500 to-orange-600`},{name:`临工集团`,nameEn:`Lindo`,color:`from-yellow-500 to-yellow-600`},{name:`中联重科`,nameEn:`Zoomlion`,color:`from-green-500 to-green-600`}],电子电气:[{name:`美的`,nameEn:`Midea`,color:`from-red-500 to-red-600`},{name:`富士康`,nameEn:`Foxconn`,color:`from-blue-600 to-blue-700`},{name:`飞利浦`,nameEn:`Philips`,color:`from-cyan-500 to-cyan-600`},{name:`罗技`,nameEn:`Logitech`,color:`from-red-500 to-red-600`},{name:`英飞凌`,nameEn:`Infineon`,color:`from-green-500 to-green-600`},{name:`华润微电`,nameEn:`CRMicro`,color:`from-red-500 to-red-600`}],能源:[{name:`宁德时代`,nameEn:`CATL`,color:`from-green-500 to-green-600`},{name:`孚能集团`,nameEn:`Farasis`,color:`from-blue-500 to-blue-600`},{name:`赣锋锂业`,nameEn:`Ganfeng`,color:`from-orange-500 to-orange-600`},{name:`国家能源`,nameEn:`CHN Energy`,color:`from-red-500 to-red-600`},{name:`国家电投`,nameEn:`SPIC`,color:`from-blue-500 to-blue-600`}],军工国防:[{name:`中国兵器`,nameEn:`NORINCO`,color:`from-green-600 to-green-700`},{name:`中国船舶`,nameEn:`CSSC`,color:`from-blue-600 to-blue-700`},{name:`中国电科`,nameEn:`CETC`,color:`from-red-500 to-red-600`}],医疗器械:[{name:`迈瑞医疗`,nameEn:`Mindray`,color:`from-blue-500 to-blue-600`},{name:`联影医疗`,nameEn:`United Imaging`,color:`from-blue-500 to-blue-600`},{name:`威高集团`,nameEn:`WEGO`,color:`from-red-500 to-red-600`},{name:`新华医疗`,nameEn:`Shinva`,color:`from-red-500 to-red-600`}],轨道交通:[{name:`中国中车`,nameEn:`CRRC`,color:`from-red-500 to-red-600`},{name:`阿尔斯通`,nameEn:`Alstom`,color:`from-green-500 to-green-600`},{name:`西门子`,nameEn:`Siemens`,color:`from-gray-500 to-gray-600`},{name:`庞巴迪`,nameEn:`Bombardier`,color:`from-red-500 to-red-600`}]},Qi=[{key:`汽车`,image:`/images/industry-auto.jpg`,color:`from-blue-500 to-blue-600`,bgColor:`bg-blue-50`,clients:Zi.汽车},{key:`航空航天`,image:`/images/industry-aerospace.jpg`,color:`from-indigo-500 to-indigo-600`,bgColor:`bg-indigo-50`,clients:Zi.航空航天},{key:`工程机械`,image:`/images/industry-machinery.jpg`,color:`from-slate-500 to-slate-600`,bgColor:`bg-slate-100`,clients:Zi.工程机械},{key:`电子电气`,image:`/images/industry-electronics.jpg`,color:`from-sky-500 to-sky-600`,bgColor:`bg-sky-50`,clients:Zi.电子电气},{key:`能源`,image:`/images/industry-energy.jpg`,color:`from-cyan-500 to-cyan-600`,bgColor:`bg-cyan-50`,clients:Zi.能源},{key:`军工国防`,image:`/client-logos/f64523c1e2de1879fbc0e302d923db22.png`,color:`from-blue-700 to-indigo-700`,bgColor:`bg-blue-50`,clients:Zi.军工国防},{key:`医疗器械`,image:`/images/industry-medical.jpg`,color:`from-teal-600 to-teal-700`,bgColor:`bg-teal-50`,clients:Zi.医疗器械},{key:`轨道交通`,image:`/images/industry-railway.jpg`,color:`from-blue-600 to-blue-700`,bgColor:`bg-blue-50`,clients:Zi.轨道交通}],$i=[{name:`高新技术企业`,nameEn:`High-Tech Enterprise`,desc:`国家级高新技术企业认定`,descEn:`National High-Tech Certification`,image:`high-tech/cert.png`},{name:`ISO 9001`,nameEn:`ISO 9001`,desc:`质量管理体系认证`,descEn:`Quality Management System`,image:`iso9001-v2/微信图片_20260409174625_83_23.png`},{name:`双软企业`,nameEn:`Dual-Software`,desc:`软件企业+软件产品认定`,descEn:`Software Enterprise & Product`,image:`software-v2/afc82f12c1dff86e6e61c57f05348f10.png`},{name:`40+项软著`,nameEn:`40+ Software Copyrights`,desc:`自主研发知识产权`,descEn:`Independent IP Rights`,image:`high-tech/微信图片_20260409184909_182_2.png`},{name:`行业会员`,nameEn:`Industry Member`,desc:`中国电子质量管理协会会员单位证书`,descEn:`China Electronics Quality Association Member`,image:`software-v2/8ef1f40c-5644-43af-ae6e-26fd50d60357.png`},{name:`苏州领军`,nameEn:`Suzhou Leading Talent`,desc:`苏州工业园区科技领军`,descEn:`Suzhou Industrial Park Tech Leader`,image:`software-v2/0614fb00-6697-4b76-a900-893f614d028d.png`}];function ea(){let{t:e}=P(),[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(null),a=A(),{ref:o,isVisible:s}=Yi(),c=e=>{a(`/cases`),window.scrollTo({top:0,behavior:`smooth`})},l=e=>{i(e)},u=()=>{i(null)};return(0,I.jsxs)(`section`,{className:`py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`INDUSTRIES & CLIENTS`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsx)(`h2`,{className:`mt-4 text-3xl md:text-4xl font-bold text-slate-900`,children:e(`industries.title`)}),(0,I.jsx)(`p`,{className:`mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed`,dangerouslySetInnerHTML:{__html:e(`industries.subtitle`)}})]}),(0,I.jsx)(`div`,{ref:o,className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20`,children:Qi.map((t,r)=>(0,I.jsxs)(`div`,{className:`${s?`visible`:``} scroll-animate scroll-delay-${r%4+1} group relative rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer`,onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),onClick:()=>c(t.key),children:[(0,I.jsx)(`div`,{className:`h-1.5 bg-gradient-to-r ${t.color}`}),(0,I.jsxs)(`div`,{className:"relative h-36 overflow-hidden bg-gradient-to-br ${industry.color}",children:[t.image?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`img`,{src:t.image,alt:t.key,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700`,loading:`eager`,decoding:`async`}),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`})]}):(0,I.jsx)(`div`,{className:`w-full h-full bg-gradient-to-br ${t.color}`}),(0,I.jsx)(`div`,{className:`absolute bottom-3 left-4 right-4`,children:(0,I.jsx)(`h3`,{className:`text-xl font-bold ${t.image,`text-white`} group-hover:text-blue-300 transition-colors`,children:e(`industries.list.`+t.key+`.name`)})})]}),(0,I.jsxs)(`div`,{className:`p-5`,children:[(0,I.jsx)(`div`,{className:`flex items-center justify-between mb-3`,children:(0,I.jsx)(`span`,{className:`px-3 py-1 rounded-full text-xs font-bold ${t.bgColor} text-slate-700`,children:e(`industries.list.`+t.key+`.stats`)})}),(0,I.jsx)(`p`,{className:`text-sm text-slate-500 mb-4`,children:e(`industries.list.`+t.key+`.desc`)}),(0,I.jsxs)(`div`,{className:`pt-4 border-t border-slate-100`,children:[(0,I.jsx)(`p`,{className:`text-xs text-slate-400 mb-3`,children:e(`industries.clientLabel`)}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[t.clients.slice(0,6).map((e,t)=>(0,I.jsx)(Xi,{client:e},t)),t.clients.length>6&&(0,I.jsxs)(`div`,{className:`w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500`,children:[`+`,t.clients.length-6]})]})]})]}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`})]},t.key))}),(0,I.jsxs)(`div`,{className:`mt-20`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,I.jsx)(`h3`,{className:`text-2xl font-bold text-slate-900 mb-2`,children:e(`industries.certTitle`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`industries.certSubtitle`)})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`,children:$i.map((t,n)=>(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all text-center group cursor-pointer`,onClick:()=>l(t),children:[(0,I.jsx)(`div`,{className:`w-28 h-28 mx-auto mb-3 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow bg-white flex items-center justify-center`,children:(0,I.jsx)(`img`,{src:`/certificates/${t.image}`,alt:e(`industries.certs.`+n+`.name`),className:`max-w-full max-h-full object-contain`})}),(0,I.jsx)(`h4`,{className:`font-bold text-slate-800 text-sm`,children:e(`industries.certs.`+n+`.name`)}),(0,I.jsx)(`p`,{className:`text-xs text-slate-500 mt-1`,children:e(`industries.certs.`+n+`.desc`)})]},n))})]})]}),r&&(0,I.jsx)(`div`,{className:`fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4`,onClick:u,children:(0,I.jsxs)(`div`,{className:`relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl`,children:[(0,I.jsx)(`button`,{onClick:u,className:`absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110`,children:(0,I.jsx)(Hi,{className:`w-6 h-6 text-slate-700`})}),(0,I.jsx)(`img`,{src:`/certificates/${r.image}`,alt:r.name,className:`max-w-full max-h-[85vh] object-contain`,onClick:e=>e.stopPropagation()}),(0,I.jsxs)(`div`,{className:`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6`,children:[(0,I.jsx)(`h4`,{className:`text-white font-bold text-lg`,children:r.name}),(0,I.jsx)(`p`,{className:`text-white/80 text-sm mt-1`,children:r.desc})]})]})})]})}var ta=[{id:`fmea`,name:`FMEA软件`,category:`software`,categoryLabel:`软件`,description:`失效模式与影响分析工具，帮助识别和预防潜在失效，全面支持AIAG-VDA FMEA标准。`,features:[`DFMEA/PFMEA/FMEA-MSR`,`AP值智能计算`,`措施跟踪管理`,`报告自动生成`],icon:`shield-check`,color:{gradient:`from-blue-50 to-indigo-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-600 to-indigo-700`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`FMEA（失效模式与影响分析）是一种系统性的预防性质量分析方法，通过识别产品或过程中的潜在失效模式，评估其对系统的影响，并采取预防措施降低风险。国可工软FMEA软件完整实现了AIAG-VDA 2019版标准，是目前国内首批通过严格合规性验证的FMEA工具软件之一，广泛应用于汽车、航空、电子等行业头部企业。`,scenarios:[`新产品设计阶段风险识别（DFMEA）`,`制造与装配过程优化（PFMEA）`,`监控与系统响应分析（FMEA-MSR）`,`质量体系IATF 16949认证合规`,`供应链质量要求传递与协作`],highlights:[`完整支持AIAG-VDA 2019五步法：结构分析→功能分析→失效分析→风险评估→优化`,`AP值智能计算：内置完整评分表，严重度/发生度/可探测度一键评估，自动输出AP等级`,`措施闭环管理：记录责任人、截止日期、完成状态，支持邮件提醒，确保措施落地`,`多模块协同：与SPC、MSA模块数据互联，失效数据实时关联过程能力指标`,`专业报告输出：Word/PDF格式，符合主机厂提交要求，支持自定义封面与模板`],specs:[`支持标准：AIAG-VDA 2019, AIAG 4th Edition, IEC 60812`,`分析类型：DFMEA / PFMEA / FMEA-MSR`,`数据交换：Excel导入导出, Word/PDF报告`,`协作支持：多用户并发编辑, 权限管控`,`部署方式：本地部署 / 私有化云部署`]}},{id:`weibull`,name:`寿命数据分析（Weibull）`,category:`software`,categoryLabel:`软件`,description:`基于Weibull分布的可靠性寿命数据分析软件，支持多种分布模型与统计推断方法。`,features:[`MLE/RRX/RRY参数估计`,`置信区间计算`,`B10寿命预测`,`多组数据对比`],icon:`trending-up`,color:{gradient:`from-emerald-50 to-teal-50`,iconBg:`bg-emerald-100`,iconColor:`text-emerald-600`,badge:`bg-emerald-50 text-emerald-700 border-emerald-200`,accent:`text-emerald-600`,border:`hover:border-emerald-300`,shadow:`hover:shadow-emerald-100`,detailHero:`from-emerald-600 to-teal-700`,tag:`bg-emerald-50 text-emerald-700`},detail:{overview:`Weibull分布是可靠性工程中应用最广泛的寿命分布模型，能够描述早期失效、随机失效和耗损失效三种失效规律。国可工软寿命数据分析软件提供完整的Weibull分析功能，支持MLE、RRX、RRY三种参数估计方法，能够处理完整数据、右删失数据、区间删失数据等多种数据类型，为可靠性工程师提供专业、直观的分析工具。`,scenarios:[`产品可靠性寿命评估与B10/B50寿命预测`,`失效数据分析与失效模式识别`,`可靠性增长试验数据处理`,`质保期与备件需求预测`,`竞争失效模式分离分析`],highlights:[`三种参数估计方法：MLE（最大似然）、RRX/RRY（秩回归），可灵活选择适合小样本的方法`,`完整数据类型支持：精确失效时间、右删失（悬挂数据）、区间删失均可处理`,`置信区间计算：Fisher矩阵法和似然比法，小样本下推荐似然比法`,`丰富可靠性指标：可靠度R(t)、累积失效概率F(t)、失效率λ(t)、MTTF、Bx寿命`,`专业Weibull概率图：置信带自动绘制，支持多组数据叠加对比`],specs:[`支持分布：Weibull 2参数/3参数, 指数分布, 正态/对数正态分布`,`数据类型：完整数据 / 右删失 / 区间删失 / 左删失`,`参数估计：MLE, RRX, RRY`,`置信区间：Fisher矩阵法 / 似然比法 / Bootstrap法`,`图形输出：Weibull概率图, 可靠度曲线, 失效率曲线, PDF/CDF`]}},{id:`alt`,name:`加速寿命试验分析`,category:`software`,categoryLabel:`软件`,description:`通过加速应力下的试验数据，推断产品在正常使用条件下的可靠性与寿命特征。`,features:[`Arrhenius/逆幂律模型`,`加速因子计算`,`正常应力下寿命预测`,`可视化分析`],icon:`zap`,color:{gradient:`from-blue-50 to-cyan-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-500 to-cyan-600`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`加速寿命试验（ALT）是一种通过施加超出正常使用水平的应力（如高温、高电压、高湿度等），加速产品失效进程，从而在较短时间内获取可靠性信息的试验方法。国可工软加速寿命试验分析软件支持常用的加速模型，能够将加速条件下的试验数据外推至正常使用条件，为产品寿命预测和可靠性验证提供科学依据。`,scenarios:[`电子元器件高温加速寿命评估`,`绝缘材料电应力加速退化分析`,`密封件湿热加速老化研究`,`产品市场寿命预测与质保期制定`,`加速试验方案设计与应力水平选取`],highlights:[`Arrhenius模型：温度加速最常用模型，自动计算活化能Ea和加速因子AF`,`逆幂律模型：适用于电压、电流、机械应力等非温度应力加速`,`广义Eyring模型：支持多应力协同加速，适应复杂工况`,`寿命预测精度：基于Weibull/对数正态等寿命分布，置信区间完整展示`,`试验方案优化：给定试验时间和样本数，自动推荐最优应力水平组合`],specs:[`加速模型：Arrhenius, 逆幂律, 广义Eyring, 温度-湿度模型`,`寿命分布：Weibull, 指数, 正态, 对数正态`,`应力类型：温度, 电压, 电流, 振动, 湿度`,`输出指标：加速因子, Bx寿命, 可靠度, MTTF`,`图形输出：加速模型拟合图, 寿命-应力关系图, Weibull概率图`]}},{id:`fta`,name:`故障树分析（FTA）`,category:`software`,categoryLabel:`软件`,description:`以图形化故障树方式分析系统失效，定性与定量评估系统可靠性与安全性。`,features:[`图形化故障树构建`,`最小割集计算`,`重要度分析`,`蒙特卡洛仿真`],icon:`git-branch`,color:{gradient:`from-indigo-50 to-blue-50`,iconBg:`bg-indigo-100`,iconColor:`text-indigo-600`,badge:`bg-indigo-50 text-indigo-700 border-indigo-200`,accent:`text-indigo-600`,border:`hover:border-indigo-300`,shadow:`hover:shadow-indigo-100`,detailHero:`from-indigo-600 to-blue-700`,tag:`bg-indigo-50 text-indigo-700`},detail:{overview:`故障树分析（FTA）是一种自顶向下的演绎式安全与可靠性分析方法，以图形化的树状结构表示系统顶事件（不期望事件）与底事件（基本失效事件）之间的逻辑关系。国可工软FTA软件提供直观的图形化编辑界面和强大的定量计算引擎，支持复杂系统的可靠性分析与安全性评估。`,scenarios:[`系统安全性分析与危险识别（ARP 4761）`,`核电、航空航天安全完整性等级分析`,`复杂机电系统可靠性建模`,`故障诊断与维修决策支持`,`FMEA与FTA联合分析（双向追踪）`],highlights:[`专业图形编辑：拖拽构建故障树，支持与/或/非/表决门，自动布局`,`最小割集算法：MOCUS算法精确求解，直观展示导致顶事件的最简失效组合`,`Birnbaum/Fussell-Vesely重要度：量化各底事件对顶事件的贡献度，指导设计优化`,`蒙特卡洛仿真：非可修系统和可修系统均支持，置信区间精确估计`,`与FMEA联动：底事件直接关联FMEA失效模式，保持分析一致性`],specs:[`支持门类型：AND, OR, NOT, XOR, INHIBIT, 表决门(k/n)`,`定量算法：精确概率法, 蒙特卡洛仿真`,`重要度指标：Birnbaum, Fussell-Vesely, RAW, RRW`,`数据类型：失效率(λ), 失效概率, 测试间隔`,`支持标准：IEC 61025, MIL-HDBK-1629A, ARP 4761`]}},{id:`spc`,name:`SPC（统计过程控制）`,category:`software`,categoryLabel:`软件`,description:`利用统计方法监控和控制生产过程，实时检测过程异常，保障产品质量稳定性。`,features:[`X-R/X-S/P/C控制图`,`过程能力分析(Cp/Cpk)`,`自动判异规则`,`实时预警`],icon:`bar-chart-2`,color:{gradient:`from-cyan-50 to-sky-50`,iconBg:`bg-cyan-100`,iconColor:`text-cyan-600`,badge:`bg-cyan-50 text-cyan-700 border-cyan-200`,accent:`text-cyan-600`,border:`hover:border-cyan-300`,shadow:`hover:shadow-cyan-100`,detailHero:`from-cyan-600 to-sky-700`,tag:`bg-cyan-50 text-cyan-700`},detail:{overview:`统计过程控制（SPC）是利用统计学方法对生产过程进行监控的质量管理工具。通过对过程数据的实时采集和分析，在质量问题发生之前发出预警，将过程控制在受控状态。国可工软SPC软件支持连续数据和离散数据的多种控制图类型，内置Nelson/西部电气判异规则，并提供完整的过程能力分析功能。`,scenarios:[`机加工、注塑、钣金等制造过程尺寸监控`,`电子组装焊接质量在线监控`,`来料检验与供应商质量管控`,`IATF 16949过程能力要求符合性验证`,`六西格玛DMAIC项目过程改进`],highlights:[`完整控制图类型：计量型(X-R, X-S, I-MR)与计数型(P, NP, C, U)全覆盖`,`8条自动判异规则：Nelson规则，一旦异常点出现立即高亮标注并推送告警`,`过程能力指数全集：Cp, Cpk, Pp, Ppk, Cpm，Z值，PPM预估，6M分析`,`分组分析：支持按操作员/班组/设备/物料分层，快速定位变差来源`,`实时数据接入：支持Excel批量导入和设备数据实时采集接口`],specs:[`控制图：X-R, X-S, I-MR, P, NP, C, U, EWMA, CUSUM`,`能力指数：Cp, Cpk, Pp, Ppk, Cpm`,`判异规则：Nelson 8条规则 / 西部电气4条规则`,`数据接入：Excel/CSV导入, OPC-UA接口, API接口`,`部署方式：本地单机 / 工厂网络部署 / 云端SaaS`]}},{id:`msa`,name:`MSA（测量系统分析）`,category:`software`,categoryLabel:`软件`,description:`评估测量系统的准确性、稳定性和重复性，确保数据测量结果的可靠性与有效性。`,features:[`量具R&R研究`,`Gage偏倚分析`,`属性一致性分析`,`%GR&R计算`],icon:`ruler`,color:{gradient:`from-rose-50 to-pink-50`,iconBg:`bg-rose-100`,iconColor:`text-rose-600`,badge:`bg-rose-50 text-rose-700 border-rose-200`,accent:`text-rose-600`,border:`hover:border-rose-300`,shadow:`hover:shadow-rose-100`,detailHero:`from-rose-500 to-pink-600`,tag:`bg-rose-50 text-rose-700`},detail:{overview:`测量系统分析（MSA）是评价测量数据质量的统计方法，通过分析测量系统的变差来源（包括量具本身的重复性和测量员之间的再现性），判断测量系统是否能够满足过程控制的需求。国可工软MSA软件支持计量型和计数型测量系统的全面分析，是企业通过IATF 16949认证的必备工具。`,scenarios:[`新量具验收与引入前评价`,`量具定期校准与验证`,`IATF 16949控制计划中测量系统评价`,`自动化检测设备能力验证`,`供应商测量系统评审`],highlights:[`量具R&R研究：均值极差法和方差分析法(ANOVA)，精确区分重复性与再现性`,`%GR&R评估：自动给出"合格/需改善/不合格"判定，对标AIAG MSA手册标准`,`偏倚与线性分析：评估量具在量程范围内的系统性偏差`,`稳定性分析：长期监控量具漂移，判断校准有效期`,`属性一致性：评估属性（计数型）测量的操作员内与操作员间一致性`],specs:[`分析类型：量具R&R(均值极差法/ANOVA), 偏倚, 线性, 稳定性, 属性一致性`,`计算方法：均值极差法, 方差分析法(ANOVA)`,`评价指标：%GR&R, %重复性, %再现性, NDC, Cg/Cgk`,`参考标准：AIAG MSA第四版, VDA 5`,`报告格式：Excel/Word报告, 含全部分析图表`]}},{id:`doe`,name:`DOE（实验设计）`,category:`software`,categoryLabel:`软件`,description:`通过科学的实验设计方法，以最少的实验次数获取最多的产品优化信息。`,features:[`全因子/部分因子设计`,`响应曲面设计`,`田口方法`,`主效应与交互效应分析`],icon:`flask-conical`,color:{gradient:`from-lime-50 to-green-50`,iconBg:`bg-lime-100`,iconColor:`text-lime-600`,badge:`bg-lime-50 text-lime-700 border-lime-200`,accent:`text-lime-600`,border:`hover:border-lime-300`,shadow:`hover:shadow-lime-100`,detailHero:`from-lime-600 to-green-700`,tag:`bg-lime-50 text-lime-700`},detail:{overview:`实验设计（DOE）是一种通过合理安排实验方案来高效研究多因素对产品质量影响的统计方法。与传统"一次改一个因素"的方法相比，DOE能够以更少的实验次数同时研究多个因素及其交互效应，找到最优参数组合。国可工软DOE软件内置实验设计向导，从设计类型选择到方差分析报告，全程引导用户完成优化分析。`,scenarios:[`注塑成型工艺参数优化（温度/压力/速度）`,`焊接工艺参数筛选与优化`,`化学配方成分比例研究`,`电子产品性能影响因素筛选`,`六西格玛改善阶段参数优化（DMAIC的I阶段）`],highlights:[`设计向导：根据因素数、水平数和目标自动推荐最优设计方案`,`全因子设计：完整研究所有因素和交互效应，适合2-4个因素`,`部分因子设计：精心挑选的实验子集，5-8个因素时大幅减少实验次数`,`响应曲面设计(RSM)：CCD/Box-Behnken设计，拟合二次模型，精确定位最优点`,`田口正交设计：信噪比分析，稳健参数设计，降低过程变异`],specs:[`设计类型：全因子, 2k部分因子, Plackett-Burman, 中心复合(CCD), Box-Behnken, 田口正交`,`分析方法：方差分析(ANOVA), 回归分析, 主效应图, 交互效应图`,`优化方法：响应优化器, 遗传算法优化`,`输出图形：主效应图, 交互效应图, 等高线图, 响应曲面3D图`,`最大因素数：筛选设计最多支持15个因素`]}},{id:`rbd`,name:`RBD（可靠性框图）`,category:`software`,categoryLabel:`软件`,description:`通过可靠性框图建模，评估系统级可靠性，识别薄弱环节，优化冗余设计。`,features:[`串/并联/k-of-n结构`,`系统可靠性计算`,`重要度分析`,`备件优化`],icon:`layout-dashboard`,color:{gradient:`from-sky-50 to-blue-50`,iconBg:`bg-sky-100`,iconColor:`text-sky-600`,badge:`bg-sky-50 text-sky-700 border-sky-200`,accent:`text-sky-600`,border:`hover:border-sky-300`,shadow:`hover:shadow-sky-100`,detailHero:`from-sky-500 to-blue-600`,tag:`bg-sky-50 text-sky-700`},detail:{overview:`可靠性框图（RBD）是一种通过图形化方式表示系统各组件可靠性逻辑关系的分析工具。与故障树分析（FTA）互补，RBD采用自底向上的方式，将系统分解为串联、并联和复合结构，计算系统整体可靠性，是系统级可靠性设计和评估的核心工具。`,scenarios:[`复杂系统可靠性建模与系统MTBF/MTTF预计`,`冗余设计方案评估与优化`,`系统薄弱环节识别与可靠性分配`,`维修策略制定与备件需求规划`,`系统可用度(Availability)仿真分析`],highlights:[`图形化建模：拖拽构建RBD，串联/并联/k-of-n/桥接结构全支持`,`系统可靠性精确计算：基于解析法和蒙特卡洛仿真，支持可修系统`,`重要度分析：识别对系统可靠性贡献最大的组件，指导重点改善`,`可用度仿真：考虑维修时间和维修策略，计算系统稳态可用度`,`备件优化：基于泊松分布计算最优备件储备量，降低备件成本`],specs:[`结构类型：串联, 并联, k-of-n表决, 桥接, 负载共担`,`计算方法：精确解析法, 蒙特卡洛仿真`,`可靠性指标：系统可靠度, MTBF, MTTF, 可用度(A)`,`维修模型：指数分布, Weibull, 对数正态`,`重要度指标：Birnbaum, 关键重要度, Fussell-Vesely`]}},{id:`reliability-prediction`,name:`可靠性预计`,category:`software`,categoryLabel:`软件`,description:`根据元器件数据库预测产品故障率，支持MIL-HDBK-217、GJB/Z 299等多种标准。`,features:[`元器件数据库`,`MIL-217/GJB299标准`,`温度降额分析`,`系统MTBF预计`],icon:`calculator`,color:{gradient:`from-blue-50 to-indigo-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-500 to-indigo-600`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`可靠性预计是在产品设计阶段，根据元器件的固有可靠性数据和工作应力条件，预测产品或系统故障率（λ）和平均故障间隔时间（MTBF）的方法。国可工软可靠性预计软件V3.0拥有10万+元器件数据库，全面支持MIL-HDBK-217F、GJB/Z 299C/D等军民用标准，并引入AI辅助元器件识别功能，大幅提升预计效率。`,scenarios:[`军用电子设备MTBF指标论证与验证`,`航空机载设备可靠性预计（GJB/Z 299）`,`工业控制设备故障率分析（MIL-217）`,`产品温度降额设计分析`,`可靠性增长计划基线数据建立`],highlights:[`10万+元器件数据库：覆盖电阻、电容、IC、连接器、电源模块等全类别，含国产替代器件`,`AI辅助BOM匹配：上传Excel BOM表，AI自动匹配元器件，人工匹配工作量降低70%`,`多标准并行计算：同一BOM支持MIL-217和GJB 299同时计算，结果对比`,`温度降额分析：元器件工作温度与降额曲线，识别热设计风险点`,`系统MTBF汇总：从元器件到模块到系统，分层汇总故障率，输出专业预计报告`],specs:[`支持标准：MIL-HDBK-217F Notice2, GJB/Z 299C, GJB/Z 299D, Bellcore/Telcordia`,`元器件数据库：10万+条目，含国产器件品牌`,`计算方法：零件计数法, 零件应力分析法`,`环境类别：GB, GF, AIA, AIF, AUC, UNS, ARW, SF, MF等全环境`,`报告格式：Word/Excel，含元器件明细表和系统汇总表`]}},{id:`lims`,name:`LIMS（实验室信息管理系统）`,category:`consulting`,categoryLabel:`咨询/诊断`,description:`实验室信息管理系统，管理样品、实验、数据和报告的全流程数字化管理。`,features:[`样品全程追踪`,`实验数据采集`,`质量控制`,`合规性管理`],icon:`flask-conical`,color:{gradient:`from-teal-50 to-emerald-50`,iconBg:`bg-teal-100`,iconColor:`text-teal-600`,badge:`bg-teal-50 text-teal-700 border-teal-200`,accent:`text-teal-600`,border:`hover:border-teal-300`,shadow:`hover:shadow-teal-100`,detailHero:`from-teal-600 to-emerald-700`,tag:`bg-teal-50 text-teal-700`},detail:{overview:`LIMS（实验室信息管理系统）是专为实验室设计的综合性信息化管理平台，覆盖从样品接收、检测实验到数据管理、报告输出的全流程数字化管理。系统完全符合ISO/IEC 17025实验室认可要求，支持与检测设备直连，消除人工记录误差，提升实验室管理规范性和检测效率。`,scenarios:[`理化检测实验室检测流程管理`,`ISO/IEC 17025实验室认可合规管理`,`企业内部中心化测试实验室管理`,`第三方检测机构检测业务数字化`,`可靠性试验数据管理与追溯`],highlights:[`样品全生命周期追踪：条码/RFID追踪，从接收、分配到出具报告全程留痕`,`仪器设备直连：支持主流检测设备数据直采，消除手工记录差错`,`质量控制管理：内置QC样品管理，控制图监控检测质量稳定性`,`合规性管理：审计追踪、电子签名、版本控制，满足17025认可要求`,`自动报告生成：根据模板自动生成检测报告，支持电子签章`],specs:[`参考标准：ISO/IEC 17025, GMP, GLP`,`接口支持：RS-232, TCP/IP设备直连接口`,`部署方式：本地服务器 / 私有云`,`集成能力：ERP, QMS, MES系统接口`,`数据安全：权限管控, 全程审计追踪, 数据备份`]}},{id:`mes`,name:`MES（制造执行系统）`,category:`consulting`,categoryLabel:`咨询/诊断`,description:`连接计划层与控制层的制造执行系统，实现生产过程的实时监控与精细化管理。`,features:[`生产调度管理`,`质量在线检测`,`设备状态监控`,`追溯与报表`],icon:`factory`,color:{gradient:`from-slate-50 to-gray-50`,iconBg:`bg-slate-100`,iconColor:`text-slate-600`,badge:`bg-slate-50 text-slate-700 border-slate-200`,accent:`text-slate-600`,border:`hover:border-slate-300`,shadow:`hover:shadow-slate-100`,detailHero:`from-slate-600 to-gray-700`,tag:`bg-slate-50 text-slate-700`},detail:{overview:`MES（制造执行系统）是连接企业上层ERP计划系统与底层设备控制系统的中间层，实现对制造现场的实时监控和精细化管理。系统覆盖工单调度、工序流转、质量检验、设备管理和物料追踪等核心业务，帮助企业实现制造过程的透明化、数字化和智能化。`,scenarios:[`离散制造业生产过程精细化管理`,`汽车零部件制造质量追溯管理`,`电子制造SMT产线实时监控`,`IATF 16949生产过程记录与追溯合规`,`精益生产改善与OEE提升项目`],highlights:[`生产调度管理：工单自动下发，工序流转实时追踪，在制品数量动态更新`,`质量在线检验：关键工序首件/巡检/完检，检验结果实时记录，不合格品自动拦截`,`设备OEE监控：实时采集设备运行状态，自动计算OEE，停机原因分析`,`正反向追溯：从成品追溯到原料批次，或从原料追溯所有关联成品`,`报表中心：生产日报、质量报表、设备报表，支持自定义报表配置`],specs:[`功能模块：工单管理, 工序流转, 质量管理, 设备管理, 物料管理, 追溯, 报表`,`适用行业：离散制造, 汽车零部件, 电子制造, 军工`,`集成接口：ERP(SAP/用友/金蝶), PLC/SCADA, WMS`,`部署方式：私有化本地部署`,`数据采集：手工录入, 扫码/RFID, 设备自动采集`]}},{id:`qms`,name:`QMS（质量管理系统）`,category:`consulting`,categoryLabel:`咨询/诊断`,description:`覆盖企业质量管理全流程的数字化系统，支持ISO 9001、IATF 16949等标准。`,features:[`文件与记录管理`,`不合格品管理`,`审核管理`,`持续改进PDCA`],icon:`clipboard-check`,color:{gradient:`from-indigo-50 to-blue-50`,iconBg:`bg-indigo-100`,iconColor:`text-indigo-600`,badge:`bg-indigo-50 text-indigo-700 border-indigo-200`,accent:`text-indigo-600`,border:`hover:border-indigo-300`,shadow:`hover:shadow-indigo-100`,detailHero:`from-indigo-600 to-blue-700`,tag:`bg-indigo-50 text-indigo-700`},detail:{overview:`QMS（质量管理系统）是帮助企业建立和运行ISO 9001/IATF 16949等质量管理体系的数字化管理平台。系统覆盖质量策划、质量控制、质量保证和质量改进四大质量活动，通过文件管理、过程监控、审核管理和持续改进等模块，推动企业质量管理体系从"纸面认证"转变为"真实落地"。`,scenarios:[`ISO 9001 / IATF 16949质量管理体系建设与维护`,`质量文件与记录电子化管理`,`客户投诉与8D报告管理`,`内审/外审管理与整改跟踪`,`供应商质量管理与绩效评价`],highlights:[`文件管控：文件版本管理、审批流程、受控分发，杜绝使用过期文件`,`不合格品管理：报废/返工/让步接受全流程，8D报告模板，根本原因分析`,`审核管理：内审计划、检查表、发现项管理、整改期限跟踪`,`供应商管理：供应商认证、绩效评级、定期评审，动态更新合格供应商名录`,`持续改进：PDCA改善提案管理，改善效果量化跟踪，知识库积累`],specs:[`支持标准：ISO 9001:2015, IATF 16949:2016, ISO 14001, OHSAS 18001`,`核心模块：文件管理, 不合格品, 审核管理, 纠正预防, 供应商管理, 客户投诉`,`流程引擎：可配置审批流，支持串行/并行/条件分支`,`集成接口：ERP, MES数据联通`,`部署方式：SaaS云端 / 私有化本地部署`]}},{id:`env-chamber`,name:`环境试验箱`,category:`technology`,categoryLabel:`应用技术推广`,description:`提供温湿度、振动、盐雾等多种环境应力试验设备，满足产品可靠性验证需求。`,features:[`温湿度综合试验箱`,`振动试验台`,`盐雾试验箱`,`IP防护等级测试`],icon:`thermometer`,color:{gradient:`from-sky-50 to-blue-50`,iconBg:`bg-sky-100`,iconColor:`text-sky-600`,badge:`bg-sky-50 text-sky-700 border-sky-200`,accent:`text-sky-600`,border:`hover:border-sky-300`,shadow:`hover:shadow-sky-100`,detailHero:`from-sky-500 to-blue-600`,tag:`bg-sky-50 text-sky-700`},detail:{overview:`国可工软与国内顶级环境试验设备厂商合作，提供覆盖温度、湿度、振动、盐雾、防护等级等各类环境应力试验设备。这些设备是产品可靠性验证、IEC/军标环境适应性试验的核心硬件支撑，可搭配国可工软分析软件形成"硬件试验+数据分析"的完整解决方案。`,scenarios:[`产品高低温、温湿度循环试验（IEC 60068）`,`电子产品防护等级(IP)测试验证`,`整机振动与冲击试验（GJB 150A）`,`金属零件盐雾腐蚀性试验`,`汽车零部件环境适应性验证`],highlights:[`温湿度综合试验箱：-70℃至+180℃宽温区，精度±0.5℃，多种容积规格可选`,`振动试验台：电动振动台，频率范围2Hz-3000Hz，满足随机振动与正弦扫频`,`盐雾试验箱：中性盐雾(NSS)/醋酸盐雾(ASS)/铜加速盐雾(CASS)，符合GB/T 2423.17`,`IP防护测试：IP1X~IP6X防尘、IPX1~IPX8防水全级别测试能力`,`数据记录系统：试验参数实时记录，与可靠性分析软件无缝对接`],specs:[`温湿度箱：-70~+180℃, 湿度10%~98%RH`,`振动台：推力100kgf~2000kgf多规格, 频率2~3000Hz`,`盐雾箱：容积108L~1000L, 符合GB/T 2423.17/IEC 60068-2-11`,`试验标准：IEC 60068系列, GB/T 2423系列, GJB 150A, MIL-STD-810`,`服务方式：设备销售 / 设备租赁 / 第三方试验外包`]}},{id:`halt`,name:`高加速寿命试验箱（HALT）`,category:`technology`,categoryLabel:`应用技术推广`,description:`快速激发产品潜在缺陷，大幅缩短可靠性验证周期，提高产品设计可靠性。`,features:[`六自由度振动`,`快速温变`,`综合应力加载`,`HASS筛选`],icon:`activity`,color:{gradient:`from-purple-50 to-fuchsia-50`,iconBg:`bg-purple-100`,iconColor:`text-purple-600`,badge:`bg-purple-50 text-purple-700 border-purple-200`,accent:`text-purple-600`,border:`hover:border-purple-300`,shadow:`hover:shadow-purple-100`,detailHero:`from-purple-600 to-fuchsia-700`,tag:`bg-purple-50 text-purple-700`},detail:{overview:`HALT（高加速寿命试验）是一种通过施加远超产品规格的极端应力（超出设计裕量的温度变化率和振动量级），快速激发产品潜在缺陷的试验技术。与传统可靠性试验相比，HALT通常在数天内即可完成数月的等效试验，大幅缩短产品研发验证周期，并帮助工程师在量产前发现并消除设计和工艺缺陷。`,scenarios:[`新产品研发阶段设计裕量探索`,`工艺改进后可靠性影响快速评估`,`量产前HASS（高加速应力筛选）出厂筛选`,`竞品可靠性差距快速识别`,`供应商零部件快速可靠性评价`],highlights:[`六自由度气动振动：X/Y/Z三轴平移+三轴旋转同时激励，激励效率远高于单轴振动台`,`超快速温变：温变率可达60℃/min，在极短时间内完成宽温循环`,`综合应力叠加：温度循环+六自由度振动同时施加，最大化应力激励效果`,`HASS筛选方案：基于HALT结果制定HASS筛选条件，量产出厂100%筛选`,`缺陷激发效率：典型HALT试验可激发出等效3~5年现场使用的失效模式`],specs:[`温度范围：-100℃~+200℃`,`温变率：≥60℃/min（典型值）`,`振动类型：气动六自由度随机振动`,`综合应力：温度+振动同时施加`,`工作台面：常用规格305×305mm, 460×460mm`]}},{id:`phm`,name:`PHM设备`,category:`technology`,categoryLabel:`应用技术推广`,description:`预测性健康管理设备，通过传感器与算法实现设备故障预测和健康状态评估。`,features:[`多参数传感采集`,`状态监测与预警`,`剩余寿命预测`,`维护决策支持`],icon:`heart-pulse`,color:{gradient:`from-cyan-50 to-sky-50`,iconBg:`bg-cyan-100`,iconColor:`text-cyan-600`,badge:`bg-cyan-50 text-cyan-700 border-cyan-200`,accent:`text-cyan-600`,border:`hover:border-cyan-300`,shadow:`hover:shadow-cyan-100`,detailHero:`from-cyan-500 to-sky-600`,tag:`bg-cyan-50 text-cyan-700`},detail:{overview:`PHM（预测性健康管理）设备通过在关键设备上部署传感器，持续采集振动、温度、电流、压力等运行数据，结合状态监测算法和机器学习模型，实现设备健康状态的实时评估和故障的提前预测，将传统"事后维修"转变为"预测性维修"，大幅降低非计划停机损失。`,scenarios:[`旋转机械（电机、泵、压缩机）健康监测`,`数控机床主轴轴承状态监测`,`风力发电机组传动系统健康管理`,`生产线关键设备预测性维护计划`,`军工装备状态健康管理（PHM）`],highlights:[`多源传感融合：振动（加速度）、温度、电流、压力、声发射等多参数同步采集`,`特征提取与诊断：时域、频域、时频域特征提取，识别轴承、齿轮等典型故障模式`,`剩余寿命预测（RUL）：基于退化模型和机器学习算法，输出剩余寿命置信区间`,`健康指数（HI）：综合多维特征生成0-100健康评分，直观显示设备健康趋势`,`维修决策支持：基于预测结果自动生成维修建议和备件需求计划`],specs:[`采样频率：振动传感器最高51.2kHz`,`通信方式：有线(RS-485/Ethernet) / 无线(4G/WiFi)`,`防护等级：IP67`,`算法模型：统计过程控制, 机器学习(随机森林/LSTM), 物理模型`,`集成方式：本地边缘计算 / 云端分析平台`]}},{id:`env-lab`,name:`环境试验室 / 失效分析`,category:`technology`,categoryLabel:`应用技术推广`,description:`提供专业环境试验室服务及失效分析服务，帮助企业快速定位产品失效根本原因。`,features:[`第三方环境试验`,`失效模式分析`,`SEM/EDS微观分析`,`可靠性评估报告`],icon:`microscope`,color:{gradient:`from-fuchsia-50 to-violet-50`,iconBg:`bg-fuchsia-100`,iconColor:`text-fuchsia-600`,badge:`bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200`,accent:`text-fuchsia-600`,border:`hover:border-fuchsia-300`,shadow:`hover:shadow-fuchsia-100`,detailHero:`from-fuchsia-600 to-violet-700`,tag:`bg-fuchsia-50 text-fuchsia-700`},detail:{overview:`国可工软与权威第三方实验室合作，为客户提供专业的环境试验外包服务和产品失效分析服务。依托先进的试验设备和具有丰富经验的可靠性工程师团队，帮助企业快速完成可靠性验证试验，并对失效样品进行深入的失效机理分析，出具专业的失效分析报告，为产品改进提供直接依据。`,scenarios:[`新产品量产前可靠性鉴定试验`,`外场故障返回样品根因分析`,`质量纠纷第三方检测取证`,`供应商来料失效分析支持`,`产品可靠性评估与寿命评价`],highlights:[`多类别环境试验：温度循环、湿热、振动、冲击、盐雾等，符合IEC、GJB、AEC-Q系列标准`,`电气失效分析：ICT测试、X-Ray检查、冷热开短路定位，快速锁定失效区域`,`材料微观分析：SEM扫描电镜+EDS能谱，微米级别形貌和成分分析`,`截面/研磨分析：PCB/焊点截面分析，识别冷焊、气孔、层间分层等工艺缺陷`,`专业失效分析报告：失效现象→失效机理→根本原因→改进建议，逻辑完整`],specs:[`试验能力：温湿度循环, 振动冲击, 盐雾, HALT/HASS, IP防护`,`分析手段：SEM, EDS, X-Ray, FIB, FTIR, ICP-MS`,`服务标准：IEC 60068, GJB 150A, AEC-Q系列`,`出具报告：CNAS认可实验室报告（部分项目）`,`周期：常规服务5-15个工作日，加急服务可缩短至3个工作日`]}},{id:`qfd`,name:`QFD（质量功能展开）`,category:`software`,categoryLabel:`软件`,description:`将客户需求转化为技术要求，构建"质量屋"实现需求落地，驱动产品规划与设计决策。`,features:[`质量屋构建`,`需求瀑布分解`,`技术竞争性对比`,`设计目标设定`],icon:`home`,color:{gradient:`from-amber-50 to-orange-50`,iconBg:`bg-amber-100`,iconColor:`text-amber-600`,badge:`bg-amber-50 text-amber-700 border-amber-200`,accent:`text-amber-600`,border:`hover:border-amber-300`,shadow:`hover:shadow-amber-100`,detailHero:`from-amber-500 to-orange-600`,tag:`bg-amber-50 text-amber-700`},detail:{overview:`QFD（质量功能展开）是一种将市场与客户需求转化为产品设计要求、工艺参数和制造规格的系统化方法论。其核心工具"质量屋"（House of Quality）通过直观的矩阵形式，建立客户需求与技术特性之间的关联关系，帮助企业在产品设计阶段做出"以客户为中心"的决策，从源头提升产品竞争力。`,scenarios:[`新产品开发前期客户需求调研与分析`,`产品规划阶段技术指标分解与设定`,`设计评审阶段竞争性对比分析`,`跨部门协作与需求传递（市场-研发-制造）`,`供应商质量目标分解与管控`],highlights:[`可视化质量屋：直观的"屋顶-左墙-右墙-房间"结构，一目了然展示需求-特性关系`,`需求量化分析：支持层次分析法(AHP)，将定性需求转化为权重分配`,`关联矩阵构建：自动计算相关性强弱，用颜色区分正相关/负相关/强相关/弱相关`,`竞争性对比：与竞品对标分析，直观展示各技术指标的竞争优势与差距`,`层层展开：从质量屋到零部件展开、过程展开、生产工艺展开，信息逐级细化`],specs:[`质量屋要素：客户需求, 技术特性, 关系矩阵, 屋顶相关矩阵, 竞争性评估, 目标值`,`分析方法：层次分析法(AHP), 主成分分析(PCA)`,`展开模型：产品规划矩阵, 零部件展开, 过程计划, 生产工艺计划`,`协作功能：多人协同编辑, 版本管理`,`报告输出：Word/PDF格式质量屋报告`]}},{id:`degradation`,name:`退化数据分析`,category:`software`,categoryLabel:`软件`,description:`基于性能退化数据的可靠性分析软件，跟踪产品性能随时间的退化趋势，预测失效时间。`,features:[`退化轨迹建模`,`阈值失效分析`,`剩余寿命预测`,`退化数据管理`],icon:`trending-down`,color:{gradient:`from-rose-50 to-pink-50`,iconBg:`bg-rose-100`,iconColor:`text-rose-600`,badge:`bg-rose-50 text-rose-700 border-rose-200`,accent:`text-rose-600`,border:`hover:border-rose-300`,shadow:`hover:shadow-rose-100`,detailHero:`from-rose-500 to-pink-600`,tag:`bg-rose-50 text-rose-700`},detail:{overview:`对于许多产品而言，性能退化先于功能失效发生。通过定期测量产品的关键性能参数并分析其退化趋势，可以在功能失效发生前预测剩余使用寿命（RUL）。国可工软退化数据分析软件支持多种退化模型，能够处理线性退化、非线性退化、随机退化等多种退化模式，为预测性维护和寿命延长管理提供科学依据。`,scenarios:[`电子元器件参数漂移分析（晶体管增益、漏电流等）`,`电池容量衰减评估与剩余寿命预测`,`机械零部件磨损退化分析`,`轴承、齿轮等旋转部件退化监测`,`复合材料/高分子材料老化性能评估`],highlights:[`多模型支持：线性退化模型、非线性退化模型（指数/幂律）、随机效应退化模型`,`虚拟样本扩展：基于少量实测退化数据生成大量虚拟样本，提升统计可信度`,`阈值失效分析：当性能退化至预设阈值时自动判定为失效，输出首次失效时间分布`,`剩余寿命预测(RUL)：输出RUL点估计值及置信区间，支持概率分布表达`,`与PHM集成：可导入传感器实时监测数据，实现在线退化追踪与寿命预测`],specs:[`退化模型：线性, 指数, 幂律, 对数, 自定义非线性`,`参数估计：最小二乘法, 贝叶斯估计`,`数据类型：定时测量退化数据, 不定时测量退化数据, 带噪声退化数据`,`输出指标：剩余寿命分布, 可靠度函数, 失效率函数`,`集成能力：与Weibull分析互通, PHM设备数据接入`]}},{id:`reliability-growth`,name:`可靠性增长分析`,category:`software`,categoryLabel:`软件`,description:`跟踪产品研发和试验过程中的可靠性提升趋势，量化分析改进效果，指导可靠性迭代。`,features:[`Duane模型分析`,`Crow-AMSAA模型`,`增长率计算`,`改进效果评估`],icon:`trending-up`,color:{gradient:`from-green-50 to-emerald-50`,iconBg:`bg-green-100`,iconColor:`text-green-600`,badge:`bg-green-50 text-green-700 border-green-200`,accent:`text-green-600`,border:`hover:border-green-300`,shadow:`hover:shadow-green-100`,detailHero:`from-green-500 to-emerald-600`,tag:`bg-green-50 text-green-700`},detail:{overview:`可靠性增长是指产品通过设计改进、消除系统性缺陷而实现的可靠性水平持续提升的过程。跟踪和分析可靠性增长趋势，是研发项目可靠性管理的核心任务之一。国可工软可靠性增长分析软件支持Duane模型和Crow-AMSAA模型，能够基于试验故障数据量化可靠性增长率、预测未来可靠性水平、评估改进措施的有效性。`,scenarios:[`军工产品可靠性增长试验管理（GJB 899A）`,`新产品研发过程中的可靠性追踪与评估`,`设计改进措施有效性验证`,`研发项目可靠性达标预测`,`批量生产前的可靠性定型评估`],highlights:[`Duane模型：图形法可靠性增长分析，直观展示MTBF增长趋势，支持理想增长线绘制`,`Crow-AMSAA模型：连续时间/离散时间NHPP模型，适用于变试验强度场景`,`增长率量化：自动计算可靠性增长率β和特征寿命λ，预测未来MTBF`,`改进效果评估：对比改进前后的故障间隔时间，量化评估改进措施的有效性`,`试验规划：基于目标MTBF反推所需试验时间，指导试验资源配置`],specs:[`分析模型：Duane模型, Crow-AMSAA (NHPP), 变强度模型`,`数据类型：定时截尾, 定数截尾, 混合截尾`,`输出指标：MTBF增长趋势, 增长率β, 特征寿命λ, 95%置信区间`,`标准符合：GJB 899A, MIL-STD-1631`,`报告功能：可靠性增长曲线图, 故障时间分布图, 改进有效性评估报告`]}},{id:`rcm`,name:`RCM（以可靠性为中心的维修）`,category:`software`,categoryLabel:`软件`,description:`基于可靠性的维修策略优化工具，分析设备失效机理，制定预防性维护计划。`,features:[`FMECA分析`,`维修任务筛选`,`间隔优化`,`备件计划`],icon:`wrench`,color:{gradient:`from-violet-50 to-purple-50`,iconBg:`bg-violet-100`,iconColor:`text-violet-600`,badge:`bg-violet-50 text-violet-700 border-violet-200`,accent:`text-violet-600`,border:`hover:border-violet-300`,shadow:`hover:shadow-violet-100`,detailHero:`from-violet-500 to-purple-600`,tag:`bg-violet-50 text-violet-700`},detail:{overview:`RCM（以可靠性为中心的维修）是一种系统化的维修决策框架，通过分析设备的功能、失效模式、失效后果，确定最合适的维修策略（预防性维修、状态维修、故障检修或改进性维修）。国可工软RCM软件将FMECA分析与维修策略决策相结合，帮助企业从"强制维修"转变为"基于风险的精准维修"，在保障设备可靠性的同时降低维修成本。`,scenarios:[`关键设备预防性维修策略制定`,`维修间隔优化与维修资源规划`,`备件库存优化与采购计划`,`设备全生命周期维修成本分析`,`运维外包服务方案制定与评估`],highlights:[`系统层次分析：从设备→子系统→部件→零件逐层分解，建立完整的FMECA档案`,`失效机理识别：区分磨损失效、疲劳失效、过载失效等不同机理，对症下药`,`维修任务筛选：根据失效后果严重性和经济性，筛选适合的预防性维修任务类型`,`间隔优化计算：基于可靠性模型计算最优维修间隔，平衡维修成本与故障风险`,`备件需求预测：结合故障率和维修间隔，输出备件库存建议和安全库存水平`],specs:[`分析深度：设备级, 系统级, 部件级FMECA`,`维修策略类型：时间-based预防维修, 状态-based维修, 故障检修, 改进性维修`,`优化算法：等间隔优化, 变间隔优化, 可靠性约束优化`,`集成能力：与FMEA模块协同, 与PHM系统数据对接`,`报告输出：RCM分析报告, 维修计划, 备件清单`]}}],na=[{id:`6`,title:`告别 Excel 手填！国可工软 AI FMEA 以数倍速生成七步法结构化数据，显著提升风险识别能力`,summary:`继"国匠智汇"大模型发布之后，国可技术团队持续深挖AI的应用价值，近期正式推出AI FMEA，开启了质量风险分析的"智能飞跃"。能够在极短时间内生成新版七步法结构化FMEA，严格对标国际主流标准，显著提升产品研发与工艺改进的效率与质量。`,content:`导  语

"告别 Excel 手填！国可工软 AI FMEA 以数倍速生成七步法结构化数据，显著提升风险识别能力" 。

继"国匠智汇"大模型发布之后，国可技术团队持续深挖AI的应用价值，力求在可靠性领域实现技术突破与创新应用。

近期，国可工软正式推出AI FMEA，开启了质量风险分析的"智能飞跃"。国可AI FMEA能够在极短的时间内生成新版七步法结构化 FMEA，严格对标国际主流标准；结构化数据可直接通向PLM/MES，失效链自动关联设计、工艺、试验数据；依托百万级行业知识库，精准识别潜在风险，AI 推荐措施合规率极高，显著提升了产品研发与工艺改进的效率与质量，为工业软件智能化发展树立了新标杆！



01
效能革新
从 "人天" 到 "分钟"，解放生产力

传统 FMEA 之痛

•DFMEA：一个复杂系统的分析通常需要投入数月的时间，填写内容甚至达到数千项；此外，因版本混乱导致返工率又非常之高。

•PFMEA：工艺变更后更新 PFMEA 需经历若干轮会议讨论，跨部门对齐耗时长达数周甚至数月，即便如此，仍可能遗漏未能识别的失效。 

AI FMEA 解决方案

•功能 1 & 2：一键生成七步法表格，输入名称，快速出表：

•DFMEA：自动关联 BOM 结构、功能要求、历史失效案例，自动生成功能、失效、措施等内容，并带有 S/O/D 评分的完整表格。
•PFMEA：同步工艺流程图，AI 能精准识别高风险工序（如 "涂胶厚度不足"），并对管控措施优先排序。此外，还能确保与控制计划的一致性。

•功能 3 & 4：结构化数据打通系统孤岛

•DFMEA 结构化输出：结构树自动关联 BOM 模型，功能网直通仿真验证平台，失效网可预警试验部门重点监控项。
•PFMEA 系统集成：工序数据对接 MES 实现实时监控，AI 可动态预警工艺参数偏移风险。

•价值提炼：实现 "数倍效率 + 零基础上手"，新工程师借助 AI 也能输出专家级 FMEA。


02
精准度跃升
百万级知识库 + 智能推理，让风险无处可藏

传统盲区

•传统瓶颈：人工分析仅能覆盖部分常见失效，极易遗漏供应链二级失效（如 "隔膜毛刺导致电芯微短路"）。

•传统短板：Excel 表格无法关联实时数据（如产线 SPC 数据、试验场耐久测试）。

•传统痛点：人工推荐的管控措施缺乏量化验证。


技术突破

•行业知识库覆盖 30 + 领域：

•汽车：涵盖三电系统、底盘、智驾等大量标准失效模式。
•电子：包含 PCBA 工艺、芯片封装等众多隐性缺陷数据。

•医疗：针对无菌包装、生物相容性等法规高风险项进行专项训练。

•失效链智能推理：

•输入 "车载摄像头模组"，AI 自动构建"镜头畸变→图像识别延迟→AEB 误触发"跨系统失效链，并推荐光学校准 + 算法冗余方案。

![失效链智能推理示意](/news-images/ai-fmea/image1.GIF)

•数据佐证：AI 识别风险覆盖率显著提升，某 Tier1 企业借助 AI 发现多处人工遗漏的 EMC 干扰风险。

•功能链智能推理：

•输入 "车载雷达系统"，AI 智能构建"障碍物探测→点云融合→变道决策→执行器响应"跨域功能链，并推荐多雷达时序优化 + 决策逻辑强化方案。

![功能链智能推理示意](/news-images/ai-fmea/image2.GIF)

•数据佐证：AI 实现功能链分析效率大幅提升，某 OEM 通过 AI 重构信号传输链路，使目标物关联准确率显著提高，成功规避冗余算力投入。

•智能链突破：

•MES/PLM 数据接入：AI 动态监控工艺参数变化，触发 PFMEA 自动更新。

•预测性维护：通过设备 IoT 数据预判潜在失效（如 "冲压模具磨损导致钣金开裂风险上升"） 。


03
长期价值
数据资产沉淀，驱动企业质量体系进化

传统弊端

•Excel 表格孤立存储，历史数据无法复用，新项目只能重复 "从零开始"。

•专家经验随人员流失而断层，新人培养周期长达6个月。


知识闭环

•企业专属知识库：

•AI 自动归档所有项目的 DFMEA/PFMEA 数据，形成可搜索的风险数据库。

•新项目输入相似零部件名称，自动推荐历史管控措施，复用率高。

![知识库资产沉淀](/news-images/ai-fmea/image4.GIF)

•合规与追溯：
•内置符合汽车、电子电器、航天航空等多个行业标准要求的逻辑，AI 自动标注法规高风险项。

•版本修改记录全程可审计，满足审核要求。

---

04
选择国可 AI FMEA 的理由

▪双模型驱动：DeepSeek +国匠智汇垂直模型专为可靠性训练，失效模式颗粒度精细至 "传感器焊点虚焊" 级别。

▪效能革新：从 "人脑 + Excel" 转变为 "AI + 结构化数据"，分析周期从天级缩短至分钟级。

▪精准避坑：基于百万级失效案例库训练，AI 推荐措施覆盖行业大量最佳实践。

▪灵活协作：支持团队在线编辑、版本对比，历史数据自动归档追溯。

▪持续进化：AI 模型随用户反馈动态优化，越用越懂您的业务场景。

总  结

AI FMEA 并非替代工程师，而是让专家能够更专注于高风险决策。立即拥抱变革，用 AI 将跨职能团队从 "低效手工" 推向 "智能分析" 时代！

*体验国匠智汇质量风险分析的"智能飞跃"，欢迎访问官网注册试用账号，或联系我们的销售团队预约演示，亲身体验AI赋能的创新价值！*`,date:`2026-04-09`,category:`news`,published:!0,author:`产品团队`,coverImage:`/news-images/ai-fmea/image1.GIF`},{id:`2`,title:`Weibull分析中小样本量的置信区间计算方法探讨`,summary:`在可靠性工程实践中，受试验成本和周期限制，工程师往往只能获取较少的失效数据。本文探讨小样本量下Weibull参数置信区间的三种主要估计方法及其适用场景。`,content:`可靠性寿命数据分析中，小样本问题是工程实践中最常见的挑战之一。本文围绕这一问题，系统介绍了三种主要的置信区间估计方法。

## 最大似然估计（MLE）法

MLE是当前统计学界最推荐的参数估计方法，其置信区间基于Fisher信息矩阵计算。优点是理论严谨、计算高效；缺点是在样本量较小（n<5）时，渐进正态假设可能不成立，导致区间偏窄。

## Likelihood Ratio（似然比）置信区间

基于似然比检验原理，不依赖大样本正态近似，在小样本下通常比MLE置信区间更准确。计算复杂度较高，但已在工业可靠性软件中广泛实现。

## Bootstrap方法

通过重采样模拟，无分布假设，适用性最广。对于样本量n≥10的情形，Bootstrap置信区间通常表现最稳健。计算密集，需要大量重复抽样。

## 实践建议

- n<5：优先使用似然比方法
- 5≤n<20：似然比方法或Bootstrap均可
- n≥20：MLE方法通常可靠，计算效率最高

国可工软Weibull软件在最新版本中已全面支持上述三种方法，用户可根据实际情况灵活选择。`,date:`2025-11-20`,category:`tech`,published:!0,author:`技术团队`},{id:`4`,title:`国可工软正式发布可靠性预计软件V3.0版本`,summary:`全新V3.0版本新增对GJB/Z 299D标准的完整支持，元器件数据库扩充至10万+条目，并引入AI辅助元器件识别功能，大幅提升可靠性预计工作效率。`,content:`国可工软可靠性预计软件V3.0版本正式发布，本次更新带来了多项重大功能升级。

**主要更新内容**

1. **新增GJB/Z 299D标准支持**：全面实现最新国军标可靠性预计标准，满足国防电子产品可靠性预计需求。

2. **元器件数据库大幅扩充**：数据库条目从5万扩充至10万+，覆盖国产替代元器件品牌。

3. **AI辅助元器件识别**：用户只需上传元器件BOM表，AI系统自动匹配数据库中的对应元器件，人工匹配工作量降低70%。

4. **报告模板定制功能**：新增多种报告模板，支持按照客户要求定制输出格式。

**升级建议**

已购买V2.x版本的用户可免费升级至V3.0，请联系您的客户服务代表获取升级包。`,date:`2025-09-01`,category:`news`,published:!0,author:`产品团队`},{id:`5`,title:`如何有效开展DOE实验设计——从入门到精通`,summary:`实验设计（DOE）是质量工程师必备技能之一，本文从基础概念出发，系统介绍全因子设计、部分因子设计、响应曲面设计的选用原则和实施要点。`,content:`实验设计（Design of Experiments，DOE）是一种系统性安排实验的统计方法，目标是以最少的实验次数获取最大的信息量。

## 什么时候用DOE

当你需要同时研究多个因素对输出的影响时，DOE是最高效的工具。与"一次改变一个因素"（OFAT）的传统做法相比，DOE能够：
- 研究因素间的交互效应
- 以更少的实验次数得到可靠结论
- 建立输入-输出的数学模型

## 设计类型选择

**全因子设计（Full Factorial）**
- 适用：因素数量较少（2-4个），需要完整研究所有交互效应
- 特点：最全面，实验次数最多

**部分因子设计（Fractional Factorial）**
- 适用：因素较多（5-8个），主效应和低阶交互效应为主
- 特点：实验次数减少，可能有混杂

**响应曲面设计（RSM）**
- 适用：在筛选实验后，需要精细优化关键因素
- 特点：可拟合二次模型，找到最优参数点

## 国可工软DOE软件的特点

我们的DOE软件内置了实验设计向导，帮助用户根据因素数量和研究目的自动推荐最适合的设计方案，并提供完整的方差分析（ANOVA）和参数优化功能。`,date:`2025-08-12`,category:`tech`,published:!0,author:`技术团队`},{id:`7`,title:`加速信息技术与制造业、流通业的全面融合`,summary:`工业互联网作为数字新基建的重要组成，涵盖了数据+算力+算法等多种基础设施，正成为推动工业数字经济创新发展的关键引擎。`,content:`作为一个制造业大国，我国顺应经济社会数字化转型的大趋势，以工业互联网为突破口，大力推动新型数字基础设施建设，加速信息技术与制造业、流通业的全面融合，做实做强做优实体经济，进一步增强发展主动权。

## 数字新基建将推动工业数字经济发展进入新阶段

以信息技术加速创新与融合渗透为突出特征的新一轮科技革命和产业变革正在孕育兴起，对更适宜数字经济发展的新基础设施建设提出巨大需求。

工业互联网作为数字新基建的重要组成，涵盖了"数据+算力+算法"等多种基础设施，正成为推动工业数字经济创新发展的关键引擎。测算数据显示，2019年我国工业互联网产业经济增加值规模2.13万亿元，占GDP比重为2.2%，对经济增长的贡献为9.9%。

## 平台化是工业数字经济新体系的主要特征

平台化是数字经济时代最重要的趋势之一，不仅模糊了分工边界，深化了信息化和工业化融合，还促使价值创造由价值链向价值网络转变，推动了价值链升级。

工业互联网平台改变了传统经济下的供需模式，促使需求决定供给成为主流，并将传统经济链条式的上中下游组织重构成围绕平台的环形链条，塑造了以平台为核心的工业数字经济新体系。

## 平台驱动的供应链数字化变革

平台新角色：从信息撮合到聚合服务。数字技术的创新发展不断推动各类平台沿着数字化、网络化、智能化的方向协同式、螺旋式迭代创新和优化升级，并使其服务体系从信息展示、交易撮合过渡到聚合服务。

商业新模式：构建供应商、商家与消费者的协同网。相对于工业时代流水线、供应链、多层级管理，互联网时代更强调低成本、快反应、高定制，供需两端的变化带来商业模式的变革。

供应新网络：从线性供应链到价值网络。工业电子商务平台可以有效拓展和深化产业协同，推动供应链管理信息流向网络化多向流动模型转变，加速形成供应链上下游企业融通发展、工业生产和商贸流通协同共进的新型价值网络。`,date:`2025-07-15`,category:`case`,published:!0,author:`行业观察`},{id:`8`,title:`福特顾客特定要求(CSR)中FMEA最新要求解读`,summary:`汽车工作组(IATF)发布的福特顾客特定要求(CSR)，重点在FMEA应用中的要求。主机厂对FMEA越来越重视，供应商需使用FMEA软件确保文件一致性。`,content:`去年底，汽车工作组(IATF)官网发布了福特的顾客特定要求(CSR)，本次更新重点在福特针对FMEA应用中的要求，生效时间为2022年1月3日。

## 本次更新的五大要点

1. **组织责任**：组织对DFMEA（如果有设计责任）、PFMEA和控制计划的准确性和完整性负责！并且需向福特提供副本。

2. **基础FMEA要求**：要求组织使用基础/基准FMEA；一般过程比如冲压、铆接、注塑等过程都有基础FMEA；可参考AIAG或VDA出版的相关FMEA手册。

3. **信息流关联**：要求FMEA信息流从基础FMEA开始，关联基础FMEA、零部件FMEA、控制计划和作业指导书，并保持一致性，按需更新。

4. **FMEA软件要求**：要求使用软件完成FMEA，以确保相关文件（FMEA-CP-WI）的一致性：
   - 2022年7月1日：使用FMEA软件展示基础和零部件FMEA（未量产项目）
   - 2022年12月31日：所有制造过程的所有基础PFMEA在FMEA软件中获得

5. **逆向FMEA要求**：组织需要建立流程确保所有新项目在设备安装运行后完成逆向FMEA事件。

## 核心启示

**主机厂对FMEA越来越重视**

从历次IATF16949顾客特定要求的更新来看，主机厂对下级供应商的产品质量要求和管理体系要求越来越严格。特别是这次福特CSR的更新，重点强调了FMEA方面的内容，并以"required"、"shall"等来要求供应商。

**FMEA应用将回归本质**

FMEA应该是一个伴随产品开发从启动、开发、验证、应用及反馈纠正的动态过程。对于供应商的FMEA要求已提升至"过程"阶段，包括：
- FMEA方法
- FMEA流程（正向、逆向）
- FMEA工具和软件
- FMEA与其他活动/文件关系

**使用FMEA软件顺应数字化趋势**

福特CSR要求应用软件帮助团队创建基础FMEA、家族FMEA、控制计划、作业指导书等文件：
1. 在软件中创建FMEA，思路清晰，结构可视化
2. 软件步骤驱动，同步编辑，同步更新
3. 相关文件关联，保证一致性
4. 通过数字化手段进行知识萃取和沉淀`,date:`2025-06-20`,category:`case`,published:!0,author:`行业观察`},{id:`9`,title:`核电获得电力研究院燃料可靠性研究项目`,summary:`核电与电力研究院正式签订燃料包壳异物磨蚀试验合同，开展不同工况条件下的燃料可靠性研究，EPRI将提供超过六十万美元的资助。`,content:`北星核电网讯：近日，核电（上海核工院）与电力研究院（以下简称"EPRI"）正式签订"不同流动工况下的燃料包壳异物磨蚀试验"合同，EPRI委托核电（上海核工院）开展不同工况条件、不同异物类型对燃料包壳的磨蚀试验，并对相关的机理进行分析，共同助力同行改进和提升燃料可靠性水平。

## 项目背景

依照合同约定，项目总体上将分为两个阶段：

**第一阶段**：针对室温工况开展燃料包壳异物磨蚀试验研究

**第二阶段**：继续实施高温高压工况燃料包壳异物磨蚀试验研究

EPRI将对这两个阶段的试验提供超过六十万美元的资助。

## 技术合作

核电（上海核工院）自2018年正式加入EPRI全会员以来，获得了大量具有应用价值的技术报告和软件工具。该公司燃料材料所作为对接EPRI燃料可靠性分项的业务部门，在总体技术部的指导下，开展了大量燃料可靠性技术领域的消化吸收工作，并与EPRI燃料可靠性分项团队在诸多行业共性技术问题上长期保持密切沟通。

## 项目推进

今年3月，EPRI燃料可靠性团队向该公司提出了委托开展燃料包壳异物磨蚀试验的需求。燃料材料所组建专项团队，依据EPRI需求并结合自身积累的试验经验，向EPRI提出了详细试验方案。今年7月，试验方案正式通过了EPRI燃料可靠性技术咨询委员会的审议，并同意按照该公司测算的费用进行全额资助。

## 未来展望

本次合同的正式签订，为该合作项目的立项划下了圆满句号。下一阶段，该公司燃料材料所将严格对照合同约定，组织和落实好相关的试验研究任务，并在工作方法、流程及质保要求等方面开展对标，致力于成为EPRI在燃料可靠性领域的长期合作单位。`,date:`2025-05-10`,category:`case`,published:!0,author:`国可工软`}],ra=[{name:`汽车`,icon:`🚗`},{name:`航空航天`,icon:`✈️`},{name:`工程机械`,icon:`🏗️`},{name:`电子电气`,icon:`⚡`},{name:`能源`,icon:`🔋`},{name:`军工国防`,icon:`🛡️`},{name:`医疗器械`,icon:`🏥`},{name:`轨道交通`,icon:`🚄`}],ia=[{id:`v1`,title:`DFMEA 培训微课版-完整版`,bvid:`BV1bq421c7CW`,cover:`/video1.jpg`,duration:`01:12:29`,date:`2024-04-12`,views:16e3},{id:`v2`,title:`新版FMEA六步法应用案例讲解`,bvid:`BV1fp421Q7zW`,cover:`/video2.jpg`,duration:`00:42:18`,date:`2024-04-16`,views:2489},{id:`v3`,title:`P-FMEA微课版-结构分析和功能分析（二三）`,bvid:`BV1aH4y1M7rS`,cover:`/video3.jpg`,duration:`00:16:52`,date:`2024-04-13`,views:9190},{id:`v4`,title:`P-FMEA微课版-失效分析（四）`,bvid:`BV1oz421C7D2`,cover:`/video4.jpg`,duration:`00:06:47`,date:`2024-04-17`,views:1e3},{id:`v5`,title:`DFMEA 培训微课版-规划与准备（一）`,bvid:`BV1mm411z7HG`,cover:`/video5.jpg`,duration:`00:03:49`,date:`2024-04-11`,views:2e3},{id:`v6`,title:`DFMEA 培训微课版-概述`,bvid:`BV1Rm411z76L`,cover:`/video6.jpg`,duration:`00:04:56`,date:`2024-04-10`,views:3e3}],aa=[{id:`fmea-knowledge`,name:`FMEA知识`},{id:`fmea-method`,name:`FMEA方法`},{id:`reliability-flow`,name:`可靠性流程`},{id:`reliability-eval`,name:`可靠性评估`},{id:`reliability-std`,name:`可靠性标准`},{id:`industry-trend`,name:`行业趋势`}],oa=[{id:`fk-001`,title:`FMEA是什么？一文读懂FMEA的定义、类型与价值`,summary:`FMEA（失效模式与影响分析）是预防产品和过程风险的核心质量工具。本文系统介绍FMEA的基本概念、四种主要类型及其在企业中的实际价值。`,content:`## 什么是FMEA

FMEA（Failure Mode and Effects Analysis，失效模式与影响分析）是一种系统性、预防性的质量分析方法，通过识别产品或过程中可能出现的潜在失效模式，评估其对系统、子系统及最终用户的影响，并制定预防或探测措施，从而在问题发生前消除或降低风险。

FMEA的核心理念是"**预防优于纠正**"——在设计阶段和过程控制阶段就将风险消除，而不是在发生失效后才去补救。

---

## FMEA的四种主要类型

### 1. DFMEA（设计失效模式与影响分析）
- **对象**：产品设计
- **目的**：识别产品设计中的潜在失效，确保产品满足用户功能需求和安全要求
- **适用阶段**：概念设计 → 详细设计 → 设计验证

### 2. PFMEA（过程失效模式与影响分析）
- **对象**：制造和装配过程
- **目的**：识别生产过程中可能导致产品缺陷的潜在失效，提升过程稳定性
- **适用阶段**：工艺设计 → 试生产 → 量产

### 3. FMEA-MSR（监控与系统响应失效模式与影响分析）
- **对象**：产品在顾客使用阶段的监控和响应系统（如汽车ECU、OBD系统）
- **目的**：评估监控系统是否能够及时发现失效并采取适当响应，确保使用安全
- **适用阶段**：AIAG-VDA 2019版新增类型，主要面向汽车行业

### 4. 系统FMEA / 概念FMEA
- **对象**：系统级功能和接口
- **目的**：在概念阶段早期识别系统级风险，为后续DFMEA/PFMEA奠定基础

---

## FMEA的核心价值

| 价值维度 | 具体体现 |
|---------|---------|
| **降低质量成本** | 在设计阶段发现并解决问题，成本比量产后发现低10~100倍 |
| **提升产品可靠性** | 系统识别并消除潜在失效，提高产品全寿命周期可靠性 |
| **支持认证合规** | IATF 16949、ISO 9001、AS9100等标准均要求开展FMEA |
| **促进跨部门协作** | FMEA天然是跨功能团队协作的工具，促进设计-制造-质量一体化 |
| **知识资产积累** | FMEA文档是宝贵的组织知识资产，支持产品迭代和经验传承 |

---

## FMEA与风险优先数（RPN）vs 行动优先级（AP）

**传统RPN方法（AIAG 4th Edition）**：
- RPN = 严重度(S) × 发生度(O) × 探测度(D)
- 缺点：不同S/O/D组合可能产生相同RPN，但实际风险差异很大

**新版AP方法（AIAG-VDA 2019）**：
- AP根据S和O/D的组合，直接输出高/中/低三个优先级
- 更加关注严重度高的情况，避免RPN方法的局限性
- 国可工软FMEA软件已全面支持AP值计算

---

## 参考标准

- **AIAG-VDA FMEA手册（2019）**：当前汽车行业最权威标准
- **AIAG FMEA手册（第4版）**：2019版前的主流标准，仍有大量企业使用
- **IEC 60812**：电子和电气行业FMEA标准
- **SAE J1739**：汽车行业FMEA标准（已被AIAG-VDA取代）
- **MIL-STD-1629A**：美军标FMEA标准，航空航天及国防行业常用`,category:`fmea-knowledge`,tags:[`FMEA`,`DFMEA`,`PFMEA`,`质量管理`,`AIAG-VDA`],date:`2025-12-01`,author:`技术编辑部`,readTime:8,cover:`/images/knowledge/fk-001.jpg`},{id:`fk-002`,title:`AIAG-VDA FMEA 2019版五步法详解`,summary:`AIAG-VDA 2019版FMEA手册引入了全新的"五步法"分析框架，彻底替代了传统的表格填写方式。本文详细解析五个步骤的含义、输出和注意事项。`,content:`## AIAG-VDA 2019版五步法概述

AIAG-VDA 2019版FMEA手册最重要的创新是引入了**七步法**分析框架（7-Step Approach）。每一步都有明确的目标和输出，步骤之间逻辑递进，确保分析的系统性和完整性。

---

## 七步法详解

### 第一步：策划与准备（Planning and Preparation）

**目标**：明确FMEA的范围、目的和边界

**关键活动**：
- 确定分析对象（产品/过程）和边界
- 组建跨功能FMEA团队
- 收集相关信息（客户要求、类似产品经验、法规要求等）
- 制定FMEA项目时间计划

**重要输出**：
- FMEA基准文件（Baseline FMEA）
- 团队成员和职责矩阵

---

### 第二步：结构分析（Structure Analysis）

**目标**：建立系统/过程的层级结构，明确分析边界

**对于DFMEA**：
- 构建系统-子系统-部件三层结构树
- 识别各层级间的接口和边界条件

**对于PFMEA**：
- 构建过程流程图（过程步骤-工作要素）
- 识别每个过程步骤的4M要素（Man/Machine/Material/Method）

---

### 第三步：功能分析（Function Analysis）

**目标**：明确每个结构元素的功能和性能要求

**核心内容**：
- 每个产品/过程单元的**功能**（做什么）
- 功能的**量化性能要求**（做到什么程度）
- 上下层级之间的功能关系

**提示**：功能描述应使用动词+名词形式，例如"传递扭矩≥200N·m"

---

### 第四步：失效分析（Failure Analysis）

**目标**：识别可能导致功能无法满足要求的失效

**失效三元组**：
- **失效影响（FE）**：失效对上层功能或客户的影响
- **失效模式（FM）**：功能失效的具体表现形式
- **失效原因（FC）**：导致失效模式发生的根本原因

**注意**：一个失效模式可以有多个失效原因，每个原因需单独评估

---

### 第五步：风险分析（Risk Analysis）

**目标**：对每个失效原因进行量化风险评估

**评分指标**：
- **严重度（S）**：失效影响对客户的严重程度，1-10分
- **发生度（O）**：失效原因发生的可能性，1-10分
- **探测度（D）**：预防/探测措施发现失效原因或失效模式的能力，1-10分

**行动优先级（AP）**：
- 根据S与O、D的组合，查询AP表得出 H（高）/ M（中）/ L（低）
- AP=H：**必须**采取措施
- AP=M：**应该**采取措施
- AP=L：可考虑采取措施

---

### 第六步：优化（Optimization）

**目标**：针对AP=H和AP=M的失效，制定和跟踪改进措施

**措施类型**：
- **预防措施**：降低失效原因的发生度（O）
- **探测措施**：提高对失效原因或失效模式的探测能力（D）

**措施跟踪要素**：责任人、计划完成日期、实际完成状态、措施实施后的重新评估

---

### 第七步：结果文件化（Results Documentation）

**目标**：确保FMEA分析成果得到正式记录和传递

**主要内容**：
- FMEA表格的最终版本
- 措施实施状态汇总
- 关键学习点（Lessons Learned）更新
- 向后续阶段（如控制计划）的输出

---

## 国可工软FMEA软件对七步法的支持

国可工软FMEA软件完整实现了七步法分析流程，提供结构化的引导界面，帮助团队系统完成每一步分析，并自动汇总输出符合主机厂要求的标准FMEA报告。`,category:`fmea-method`,tags:[`AIAG-VDA`,`FMEA五步法`,`七步法`,`风险分析`,`AP值`],date:`2025-11-15`,author:`技术编辑部`,readTime:10,cover:`/images/knowledge/fk-002.jpg`},{id:`fk-003`,title:`DFMEA与PFMEA的区别与联系`,summary:`DFMEA（设计FMEA）和PFMEA（过程FMEA）是最常用的两种FMEA类型，两者在分析对象、团队组成、时机和输出上都有显著差异，又在结构上紧密关联。`,content:`## DFMEA与PFMEA对比

| 对比项 | DFMEA | PFMEA |
|-------|-------|-------|
| **全称** | Design FMEA | Process FMEA |
| **分析对象** | 产品设计（零件/子系统/系统） | 制造和装配过程 |
| **分析目标** | 消除设计缺陷，确保产品功能 | 消除过程缺陷，确保产品质量 |
| **主导团队** | 设计工程师为主 | 过程/制造工程师为主 |
| **输入** | 产品设计图纸、规范、客户要求 | 产品图纸、过程流程图、控制计划 |
| **典型失效** | 尺寸超差、材料疲劳、电气短路 | 装配漏件、加工尺寸偏差、焊接缺陷 |
| **措施指向** | 设计变更、公差优化、验证测试 | 过程参数控制、防错装置、检验加强 |
| **开展时机** | 设计阶段（DV前完成） | 工艺设计阶段（量产前完成） |

---

## 两者的内在联系

DFMEA和PFMEA不是独立的——**DFMEA的输出是PFMEA的输入**。

具体来说：
1. DFMEA识别出的产品特殊特性（Critical/Significant Characteristics）需要在PFMEA中针对这些特性制定过程控制措施
2. DFMEA中"可通过制造过程改善"的失效原因，需要在PFMEA中被识别和控制
3. 两份FMEA共同支撑控制计划（Control Plan）的制定

---

## 常见误区

**误区1：认为DFMEA和PFMEA可以合并成一张表**
→ 不可以。两者的分析对象和逻辑完全不同，混淆会导致分析质量严重下降。

**误区2：先做PFMEA再做DFMEA**
→ 应先做DFMEA，确认设计方案后再开展PFMEA。

**误区3：PFMEA中填写设计原因**
→ PFMEA的失效原因应指向制造和装配过程的变差，而非产品设计缺陷。

---

## 国可工软软件支持

国可工软FMEA软件支持DFMEA、PFMEA、FMEA-MSR三种类型，每种类型提供独立的模板和字段配置，并支持跨FMEA类型的特殊特性关联追踪。`,category:`fmea-knowledge`,tags:[`DFMEA`,`PFMEA`,`FMEA类型`,`设计分析`,`过程分析`],date:`2025-10-20`,author:`技术编辑部`,readTime:7,cover:`/images/knowledge/fk-003.jpg`},{id:`fk-004`,title:`AP值（行动优先级）计算方法与评判标准详解`,summary:`AP（行动优先级）是AIAG-VDA 2019版FMEA的核心创新，替代了传统的RPN风险优先数。本文详解AP的计算逻辑、H/M/L判定标准及与RPN的对比。`,content:`## AP值是什么

AP（Action Priority，行动优先级）是AIAG-VDA 2019版FMEA手册引入的全新风险评价指标，用于替代传统的RPN（风险优先数）。

AP的本质是：**先看严重度，再看发生度/探测度的组合**，直接输出需要采取行动的优先级。

---

## AP的判定方法

AP通过查询标准提供的"AP查询表"来确定，输入为：
- S（严重度，1-10）
- O（发生度，1-10）
- D（探测度，1-10）

**AP判定规则简化说明**：

| 严重度S | 条件 | AP级别 |
|--------|------|--------|
| S = 9~10 | 任意O和D | H（高） |
| S = 7~8 | O较高 或 D较高 | H（高） |
| S = 7~8 | O低 且 D低 | M（中） |
| S = 4~6 | O较高 且 D较高 | H（高） |
| S = 4~6 | 其他组合 | M（中）或L（低） |
| S = 1~3 | 任意O和D | L（低） |

> 注：完整AP查询表以AIAG-VDA 2019版官方手册为准

---

## H/M/L的含义和要求

| AP级别 | 含义 | 要求 |
|--------|------|------|
| **H（High）** | 高优先级，必须采取行动 | 必须制定措施，明确责任人和完成时间，有充分理由时才可保留 |
| **M（Medium）** | 中优先级，应该采取行动 | 建议采取措施，团队需说明不采取行动的理由 |
| **L（Low）** | 低优先级，可考虑改进 | 可选择性采取措施 |

---

## AP vs RPN：为什么要换？

**RPN的问题**：
1. 不同S/O/D组合可能产生相同RPN，但风险差异极大
   - 例：S=10, O=1, D=1 → RPN=10 （严重但不大可能）
   - 例：S=1, O=10, D=1 → RPN=10 （轻微但频发）
   - 这两种情况的处理优先级显然不同，但RPN无法区分
2. 企业往往设置"RPN>100才需要采取措施"等阈值，可能忽略高严重度但低频率的风险

**AP的优势**：
1. 严重度（S）优先——S=9/10时无论O和D如何都是高优先级
2. 三级分类简洁明了，便于团队快速决策
3. 消除了"卡RPN阈值"的漏洞

---

## 国可工软FMEA软件中的AP计算

软件内置完整的AIAG-VDA AP查询表，用户输入S、O、D评分后，自动计算并显示AP级别，并用颜色区分（红色=H，黄色=M，绿色=L）。系统还提供AP分布统计图，帮助团队快速识别高风险项目。`,category:`fmea-method`,tags:[`AP值`,`RPN`,`行动优先级`,`AIAG-VDA`,`风险评估`],date:`2025-09-10`,author:`技术编辑部`,readTime:9,cover:`/images/knowledge/fk-004.jpg`},{id:`rr-001`,title:`可靠性工程全流程概述——从研发到退役`,summary:`可靠性工作贯穿产品全寿命周期的每个阶段。本文系统梳理从概念阶段到退役阶段的可靠性工程活动，帮助工程师建立"全周期可靠性"的整体视野。`,content:`## 什么是全寿命周期可靠性工程

产品可靠性不是"测"出来的，也不是"改"出来的——而是**设计出来的**。真正的可靠性工程应该从产品概念阶段就开始，贯穿整个产品生命周期。

全寿命周期可靠性工程通常包含以下五个阶段：

---

## 第一阶段：概念与方案阶段

**目标**：建立可靠性目标，制定可靠性工作计划

**主要活动**：
- 制定可靠性指标（MTBF、可靠度、可用度等）
- 开展可靠性论证，评估技术可行性
- 识别关键可靠性风险
- 制定可靠性工作计划（RMP）

**工具方法**：任务可靠性分析、权衡分析、历史数据基线建立

---

## 第二阶段：工程研发阶段

**目标**：将可靠性要求落实到设计中

**主要活动**：
- 可靠性分配（将系统MTBF分配到各子系统）
- 可靠性预计（基于元器件数据库预测故障率）
- FMEA/FTA分析（识别和消除设计弱点）
- RBD建模（系统可靠性框图分析）
- 可靠性设计评审

**工具方法**：MIL-HDBK-217、GJB/Z 299、FMEA、FTA、RBD

---

## 第三阶段：可靠性验证阶段

**目标**：通过试验验证产品是否达到可靠性指标

**主要活动**：
- 可靠性研制试验（HALT，激发潜在缺陷）
- 可靠性增长试验（按AMSAA曲线跟踪增长）
- 可靠性鉴定试验（统计验证是否满足指标）
- 环境适应性试验（温度、湿度、振动等）

**工具方法**：HALT/HASS、加速寿命试验（ALT）、Weibull分析

---

## 第四阶段：生产与使用阶段

**目标**：保持并提升产品可靠性

**主要活动**：
- 可靠性筛选（HASS，剔除早期失效产品）
- 现场故障数据收集与分析
- 可靠性增长持续改进
- 维护性和保障性管理

**工具方法**：SPC、PHM（预测健康管理）、现场可靠性数据分析

---

## 第五阶段：退役与改进阶段

**目标**：提炼经验教训，为下代产品提供数据

**主要活动**：
- 寿命终止失效数据统计
- 可靠性数据库更新
- Lessons Learned整理
- 下代产品可靠性设计输入

---

## 国可工软全周期解决方案

国可工软提供覆盖上述全流程的工具软件和咨询服务，包括：
- 设计阶段：FMEA、FTA、RBD、可靠性预计软件
- 验证阶段：Weibull寿命分析、ALT加速寿命试验分析、HALT设备
- 生产阶段：SPC、MSA、DOE、PHM设备
- 全流程：环境试验室服务、失效分析服务`,category:`reliability-flow`,tags:[`可靠性工程`,`全寿命周期`,`MTBF`,`可靠性流程`],date:`2025-11-01`,author:`技术编辑部`,readTime:10,cover:`/images/knowledge/rr-001.jpg`},{id:`rr-002`,title:`可靠性预计：元器件计数法与应力分析法的选用指南`,summary:`可靠性预计是产品设计阶段的重要工作，元器件计数法和零件应力分析法各有适用场景。本文对比两种方法的原理、数据需求和精度，帮助工程师做出合理选择。`,content:`## 可靠性预计的目的

可靠性预计（Reliability Prediction）是在产品研发阶段，基于元器件数据库和工作条件，预测产品或系统的故障率（λ）和平均故障间隔时间（MTBF）。

其主要目的：
1. **早期验证**：设计阶段验证MTBF是否可能满足指标要求
2. **方案比较**：对比多种设计方案的可靠性差异
3. **指导改进**：识别可靠性薄弱环节，指导降额设计
4. **提供基线**：为可靠性增长试验和验证试验提供基准

---

## 两种主要方法

### 1. 元器件计数法（Parts Count Method）

**原理**：根据元器件品种、数量和通用质量因子，快速估算系统故障率

**公式**：
$$\\lambda_{系统} = \\sum_{i=1}^{n} N_i \\cdot \\lambda_{Gi} \\cdot \\pi_{Qi}$$

其中：
- $N_i$：第i类元器件数量
- $\\lambda_{Gi}$：第i类元器件通用故障率
- $\\pi_{Qi}$：质量因子

**适用场景**：
- 设计早期（BOM不详细）
- 快速初步估算
- 方案级对比

**优点**：数据需求少，计算快速  
**缺点**：精度较低，未考虑具体工作应力

---

### 2. 零件应力分析法（Part Stress Analysis Method）

**原理**：根据每个元器件的实际工作应力（电压、电流、温度等）计算故障率

**公式（以电阻为例）**：
$$\\lambda_p = \\lambda_b \\cdot \\pi_T \\cdot \\pi_R \\cdot \\pi_V \\cdot \\pi_Q \\cdot \\pi_E$$

其中各 $\\pi$ 因子对应温度、电阻值、电压应力、质量、环境等修正因子

**适用场景**：
- 详细设计阶段（有完整BOM和原理图）
- 需要较高预计精度
- 温度降额分析

**优点**：精度高，可识别过应力元器件  
**缺点**：需要详细工作应力数据，计算复杂

---

## 两种方法对比

| 对比项 | 元器件计数法 | 零件应力分析法 |
|-------|-------------|--------------|
| **精度** | 低 | 中-高 |
| **数据需求** | BOM数量 | BOM + 工作应力 |
| **适用阶段** | 方案/初步设计 | 详细设计 |
| **计算工作量** | 小 | 大 |
| **主要用途** | 初步评估、方案比较 | 精确预计、降额分析 |

---

## 国可工软可靠性预计软件的支持

国可工软可靠性预计软件V3.0同时支持两种方法，并在同一BOM下支持MIL-HDBK-217F和GJB/Z 299C/D的并行计算和结果对比，大幅提升预计效率。AI辅助BOM匹配功能可将元器件手工匹配工作量降低70%。`,category:`reliability-eval`,tags:[`可靠性预计`,`MTBF`,`MIL-HDBK-217`,`GJB299`,`元器件`],date:`2025-08-20`,author:`技术编辑部`,readTime:11,cover:`/images/knowledge/rr-002.jpg`},{id:`rs-001`,title:`主流可靠性标准体系概览：IEC、MIL、GJB全梳理`,summary:`可靠性工程领域有众多国际和国家标准，涵盖方法标准、试验标准、数据标准等多个维度。本文系统梳理民用、军用、国产三大体系的主要标准，帮助工程师快速定位所需标准。`,content:`## 可靠性标准的三大体系

可靠性工程标准主要分为三大体系：
1. **IEC体系**：国际电工委员会，民用电子/电气产品为主
2. **MIL体系**：美国军用标准，航空、航天、国防领域
3. **GJB体系**：中国国军标，国内军工、航空航天领域

---

## IEC民用标准体系

### 可靠性基础标准
| 标准编号 | 标准名称 | 主要内容 |
|---------|---------|---------|
| **IEC 60300-1** | 可靠性管理 | 可靠性管理框架和原则 |
| **IEC 60300-3-1** | 可靠性分析方法指南 | FMEA、FTA等方法概述 |
| **IEC 60300-3-4** | 寿命周期费用 | 全寿命周期费用分析 |

### FMEA相关标准
| 标准编号 | 标准名称 |
|---------|---------|
| **IEC 60812** | FMEA实施规程 |
| **IEC 61025** | 故障树分析（FTA） |

### 环境试验标准
| 标准编号 | 内容 |
|---------|------|
| **IEC 60068-2系列** | 环境试验方法（温度、湿度、振动、盐雾等） |
| **IEC 60721系列** | 环境条件分类 |

---

## MIL美军标体系

### 可靠性预计
| 标准编号 | 标准名称 |
|---------|---------|
| **MIL-HDBK-217F** | 电子设备可靠性预计手册（最广泛使用） |
| **MIL-HDBK-217F Notice2** | 217F修订版（当前最新） |

### 分析方法
| 标准编号 | 标准名称 |
|---------|---------|
| **MIL-STD-1629A** | FMEA实施规程（军标版） |
| **MIL-HDBK-1629A** | FMEA手册 |
| **MIL-HDBK-338B** | 电子可靠性设计手册 |

### 试验标准
| 标准编号 | 标准名称 |
|---------|---------|
| **MIL-STD-810** | 环境工程考虑与实验室试验 |
| **MIL-STD-883** | 微电子器件试验方法 |

---

## GJB国军标体系（中国）

### 可靠性基础
| 标准编号 | 标准名称 |
|---------|---------|
| **GJB 813** | 可靠性建模与预计 |
| **GJB 899A** | 可靠性鉴定和验收试验 |
| **GJB 1391** | FMEA和危害性分析（FMECA） |

### 可靠性预计
| 标准编号 | 标准名称 |
|---------|---------|
| **GJB/Z 299C** | 电子设备可靠性预计手册（C版） |
| **GJB/Z 299D** | 电子设备可靠性预计手册（D版，最新） |

### 环境试验
| 标准编号 | 标准名称 |
|---------|---------|
| **GJB 150A** | 军用设备实验室环境试验方法 |
| **GJB 2405** | 可靠性增长试验 |

---

## 汽车行业标准

| 标准/手册 | 发布机构 | 内容 |
|----------|---------|------|
| **AIAG-VDA FMEA（2019）** | AIAG+VDA | 汽车FMEA最新标准 |
| **IATF 16949** | IATF | 汽车质量管理体系 |
| **AEC-Q100/101/200** | AEC | 汽车电子元器件可靠性 |
| **ISO 26262** | ISO | 道路车辆功能安全 |

---

## 如何选择适用标准

- **汽车行业**：AIAG-VDA FMEA + IATF 16949 + AEC-Q系列
- **军工航空航天**：GJB体系（国内）+ MIL体系（引进项目）
- **一般工业电子**：IEC 60300系列 + IEC 60068试验系列
- **医疗器械**：ISO 14971（风险管理）+ IEC 60601系列`,category:`reliability-std`,tags:[`可靠性标准`,`IEC`,`MIL-HDBK`,`GJB`,`AIAG-VDA`],date:`2025-07-15`,author:`技术编辑部`,readTime:13,cover:`/images/knowledge/rs-001.jpg`},{id:`it-001`,title:`国产工业软件崛起：质量可靠性领域的替代进程与趋势`,summary:`在"国产替代"大背景下，以FMEA、SPC、MSA为代表的质量可靠性工具软件市场正经历深刻变革。本文分析国产化替代的驱动因素、现状和未来趋势。`,content:`## 背景：为什么要国产替代

质量可靠性工具软件长期被国外厂商主导：

- **Minitab**（美国）：SPC、DOE、回归分析
- **ReliaSoft/HBM Prenscia**（美国）：Weibull分析、ALT、RBD、FTA
- **Windchill Quality Solutions**（美国）：FMEA、FMECA
- **ITEM Software**（英国）：可靠性预计、FTA

这些软件年授权费用高昂（通常数万至数十万元/席/年），且存在数据安全风险和技术封锁隐患，国内尤其是军工、航空航天领域的国产替代需求极为迫切。

---

## 国产替代的驱动因素

### 政策驱动
- "十四五"工业软件专项规划明确支持工业软件自主研发
- 军工、航天、能源等关键行业数据安全要求倒逼国产化
- 政府采购"优先购买国产软件"政策

### 市场驱动
- 国产软件价格通常为进口软件的1/3~1/5，性价比显著
- 本土化服务和培训支持更及时
- 中文界面更符合国内用户习惯

### 技术驱动
- 国内软件研发能力显著提升，功能逐渐对标甚至超越进口软件
- 云计算、AI技术融合创新，国产软件反而占据先机

---

## 当前国产化进程

| 软件类型 | 国产化程度 | 代表企业 |
|---------|-----------|---------|
| SPC统计过程控制 | ★★★★☆ 较高 | 国可工软、质量云 |
| FMEA软件 | ★★★★☆ 较高 | 国可工软 |
| MSA测量系统分析 | ★★★★☆ 较高 | 国可工软 |
| Weibull可靠性分析 | ★★★☆☆ 中等 | 国可工软 |
| 可靠性预计 | ★★★★★ 高 | 国可工软 |
| FTA故障树分析 | ★★★☆☆ 中等 | 国可工软 |
| DOE实验设计 | ★★★☆☆ 中等 | 国可工软 |

---

## 未来趋势

### 1. AI赋能质量分析
- 自动化BOM匹配、智能失效模式推荐
- 基于机器学习的异常检测和预测性质量控制

### 2. 云端协作与SaaS化
- 多人实时协作FMEA，代替离线Excel
- 按需订阅，降低软件准入门槛

### 3. 与MES/PLM深度集成
- 质量数据从设计到生产无缝流通
- 实时SPC数据与生产执行联动

### 4. 标准持续演进
- AIAG-VDA FMEA持续更新，软件需持续跟进
- ISO 26262、IEC 61508等功能安全标准与可靠性工具深度融合

---

## 国可工软的定位

作为国内质量可靠性工业软件领域的头部企业，国可工软坚持自主研发，已推出覆盖FMEA、Weibull、ALT、FTA、SPC、MSA、DOE、RBD、可靠性预计等全系列工具软件，技术指标已全面对标同类进口产品，在汽车、军工、航空航天等领域获得近千家客户的认可。`,category:`industry-trend`,tags:[`国产替代`,`工业软件`,`行业趋势`,`质量软件`],date:`2025-12-10`,author:`行业研究团队`,readTime:9,cover:`/images/knowledge/it-001.jpg`},{id:`sr-001`,title:`R-FMEA软件详解：功能特点与核心优势`,summary:`R-FMEA（ReliaBench-FMEA）是国可工软基于业界标准和最佳实践开发的失效模式及影响分析软件。本文详细介绍其核心功能、技术特点和应用场景。`,content:`## R-FMEA 软件概述

R-FMEA（ReliaBench-FMEA）是国可工软（苏州）科技有限公司自主研发的失效模式及影响分析软件，融合了团队十几年的可靠性咨询和服务经验，遵循AIAG-VDA FMEA手册标准，支持新版FMEA"七步法"分析流程。

---

## 核心功能特点

### 1. 支持新版FMEA七步法
- **策划和准备**：项目规划、团队组建、边界定义
- **结构分析**：系统-子系统-组件层级结构树
- **功能分析**：功能网、要求清单、规格定义
- **失效分析**：失效链、失效模式-原因-后果关联
- **风险分析**：S/O/D评分、AP行动优先级计算
- **优化**：改进措施制定与跟踪
- **结果文件化**：自动生成DFMEA/PFMEA报告

### 2. 基于B/S架构，免安装易用
- 通过网页浏览器操作，无需本地安装
- 支持Windows、Mac、Linux等多平台访问
- 云端部署，数据集中管理，团队协作便捷

### 3. FMEA主模型（类三维模型）
- 建立结构、功能、失效、措施之间的关联关系
- 实现知识的积累和快速重用
- 支持变更影响分析和版本管理

### 4. 图形化展示分析结果
- **结构树**：可视化产品结构层级
- **工艺流程图**：PFMEA过程流程展示
- **功能网**：功能之间的关联关系
- **失效网**：失效链的可视化追踪
- **风险矩阵**：S/O/D分布和AP优先级

### 5. 多语言支持
- 操作界面支持中文、英文、德文、日文、韩文、泰文等25种语言
- 支持实时互译，适应跨国企业需求

### 6. 主FMEA与派生FMEA机制
- **主FMEA**：汇总通用部件及其附属零件的知识
- **派生FMEA**：基于主FMEA快速生成特定项目FMEA
- **知识库**：形成企业级FMEA知识资产，支持持续积累

### 7. 丰富的输出报告
**DFMEA相关报告**：
- DVP&R（设计验证计划与报告）
- DRBFM（设计评审基于失效模式）
- 特性清单（关键/重要特性）
- FTA（故障树分析）
- FMEDA（失效模式影响与诊断分析）

**PFMEA相关报告**：
- 控制计划（Control Plan）
- 检验计划
- 作业指导书
- 防错清单

---

## 技术规格

| 项目 | 规格说明 |
|------|---------|
| **软件类型** | 商业软件 |
| **部署方式** | 云部署、本地部署 |
| **架构** | B/S架构，基于SQL数据库 |
| **适用平台** | Windows、Mac、Linux |
| **适用行业** | 汽车、航空航天、机械制造、电子电器、能源电力 |
| **数据交换** | 支持Excel导入/导出 |
| **标准支持** | AIAG-VDA FMEA 2019、AIAG FMEA 4th |

---

## 典型应用场景

### 汽车行业
- 整车DFMEA分析
- 零部件PFMEA分析
- 供应商FMEA管理
- IATF 16949合规支持

### 航空航天
- 系统FMEA分析
- 关键件可靠性验证
- 安全性分析（与FTA结合）

### 电子电器
- 电路板DFMEA
- 装配过程PFMEA
- 软件FMEA（SFMEA）

---

## 客户案例

- **奇瑞商用车**（2026）
- **中伟新材料股份有限公司**（2026）
- **重庆赣锋动力科技有限公司**（2026）
- **沈阳来金汽车零部件股份有限公司**（2026）
- **珠海全志科技股份有限公司**（2026）

---

## 总结

R-FMEA软件通过标准化的七步法流程、可视化的分析工具和强大的知识管理功能，帮助企业建立系统化的FMEA分析能力，提升产品质量和可靠性水平。`,category:`software-rel`,tags:[`R-FMEA`,`FMEA软件`,`AIAG-VDA`,`七步法`,`国可工软`],date:`2025-04-08`,author:`产品团队`,readTime:10,cover:`/images/knowledge/sr-001.jpg`},{id:`fm-003`,title:`DFMEA七步法完整指南：从策划到文件化`,summary:`AIAG-VDA 2019版FMEA手册引入了全新的"七步法"分析框架。本文详细解析DFMEA（设计FMEA）七个步骤的操作要点、输出要求和注意事项。`,content:`## DFMEA 七步法概述

AIAG-VDA 2019版FMEA手册最重要的创新是引入了**七步法**分析框架（7-Step Approach），彻底替代了传统的表格填写方式。每一步都有明确的目标和输出，步骤之间逻辑递进，确保分析的系统性和完整性。

---

## 第一步：策划与准备（Planning and Preparation）

### 目标
明确FMEA的范围、目的和边界，为后续分析奠定基础。

### 关键活动
- **确定分析对象**：明确是系统FMEA、子系统FMEA还是组件FMEA
- **定义边界**：确定包含什么、不包含什么（使用边界图）
- **组建团队**：跨功能团队，包括设计、质量、工艺、测试等角色
- **收集信息**：
  - 客户要求（SOR、技术规范）
  - 类似产品经验（历史FMEA、问题库）
  - 法规要求（安全、环保）
- **制定计划**：时间节点、资源分配、交付物定义

### 输出物
- FMEA项目计划书
- 边界图（Boundary Diagram）
- 团队成员清单

---

## 第二步：结构分析（Structure Analysis）

### 目标
将分析对象分解为系统、子系统、组件层级，建立结构树。

### 关键活动
- **层级划分**：
  - 聚焦元素（Focus Element）：当前分析层级
  - 上级元素（Next Higher Level）：聚焦元素的父级
  - 下级元素（Next Lower Level）：聚焦元素的子级
- **结构树构建**：使用树状图展示层级关系
- **接口识别**：物理连接、能量传递、信息交换、物料流动

### 输出物
- 结构树（Structure Tree）
- 接口矩阵（Interface Matrix）

### 示例
\`\`\`
整车制动系统（上级）
  └── 制动踏板总成（聚焦）
        ├── 踏板支架（下级）
        ├── 踏板臂（下级）
        └── 回位弹簧（下级）
\`\`\`

---

## 第三步：功能分析（Function Analysis）

### 目标
定义每个层级的功能及其要求，建立功能网。

### 关键活动
- **功能描述**：用动词+名词描述功能（如"传递力"、"转换信号"）
- **要求定义**：
  - 功能要求（性能指标）
  - 非功能要求（可靠性、安全性、环境适应性）
- **功能网构建**：展示上级功能如何由下级功能实现

### 输出物
- 功能网（Function Network）
- 功能要求清单

### 示例
| 层级 | 功能 | 要求 |
|------|------|------|
| 上级 | 实现车辆减速 | 制动距离≤40m（100km/h→0） |
| 聚焦 | 传递驾驶员踏板力 | 力传递效率≥95%，响应时间≤0.1s |
| 下级 | 踏板臂杠杆作用 | 杠杆比 4:1，刚度≥500N/mm |

---

## 第四步：失效分析（Failure Analysis）

### 目标
识别潜在失效模式、失效原因和失效后果，建立失效链。

### 关键活动
- **失效后果（FE）**：对上级元素、最终用户、法规的影响
- **失效模式（FM）**：聚焦元素失效的表现形式
- **失效原因（FC）**：导致失效模式发生的根本原因
- **失效链构建**：FC → FM → FE 的因果关系

### 输出物
- 失效链（Failure Chain）
- 失效分析表

### 评分提示
- **严重度（S）**：基于失效后果评估
- **发生度（O）**：基于失效原因评估
- **探测度（D）**：基于当前探测措施评估

---

## 第五步：风险分析（Risk Analysis）

### 目标
评估失效风险等级，确定行动优先级。

### 关键活动
- **严重度评分（S）**：1-10分，基于对安全、法规、功能的影响
- **发生度评分（O）**：1-10分，基于失效原因的发生频率
- **探测度评分（D）**：1-10分，基于探测措施的有效性
- **AP计算**：使用AIAG-VDA 2019的AP矩阵（H/M/L）

### AP矩阵逻辑
| S | O/D组合 | AP |
|---|---------|-----|
| 9-10 | 任意 | H（高优先级） |
| 5-8 | O≥7或D≥7 | H |
| 5-8 | O≤6且D≤6 | M（中优先级） |
| 1-4 | 任意 | L（低优先级） |

### 输出物
- 风险分析表（含S/O/D/AP）
- 高风险项清单（AP=H）

---

## 第六步：优化（Optimization）

### 目标
针对高风险项制定改进措施，降低风险等级。

### 关键活动
- **措施制定**：
  - 预防措施：降低发生度（O）
  - 探测措施：降低探测度（D）
  - 设计变更：降低严重度（S，通常需要设计变更）
- **责任分配**：明确措施负责人和完成日期
- **措施跟踪**：定期评审措施实施状态
- **重新评估**：措施实施后重新计算S/O/D/AP

### 措施优先级
1. **首先**：消除失效原因（降低O）
2. **其次**：增加或改进探测措施（降低D）
3. **最后**：降低严重度（通常需要设计变更）

### 输出物
- 改进措施清单
- 措施跟踪表
- 更新后的风险分析

---

## 第七步：结果文件化（Results Documentation）

### 目标
将分析过程和结果文档化，形成完整的DFMEA报告。

### 关键活动
- **报告编制**：
  - DFMEA表格（含所有分析内容）
  - 边界图、结构树、功能网、失效网
  - 高风险项和改进措施汇总
- **管理层评审**：向管理层汇报分析结果和风险状态
- **知识归档**：将FMEA纳入企业知识库
- **动态更新**：设计变更、问题发生时及时更新FMEA

### 输出物
- DFMEA报告
- 风险汇总表
- 改进措施跟踪报告

---

## DFMEA七步法实施建议

### 成功关键因素
1. **高层支持**：获得管理层对资源和时间承诺的支持
2. **团队协作**：跨功能团队充分参与，避免"一言堂"
3. **数据驱动**：基于历史数据、测试数据、现场数据进行分析
4. **工具支持**：使用专业FMEA软件（如R-FMEA）提升效率
5. **持续改进**：FMEA是活文档，需要随设计演进持续更新

### 常见误区
- ❌ 仅由质量部门编写，设计部门不参与
- ❌ 一次性完成，不再更新
- ❌ 评分随意，缺乏数据支撑
- ❌ 措施泛泛而谈，无法落地
- ❌ 忽视低风险项的积累效应

---

## 总结

DFMEA七步法提供了一个系统化、结构化的风险分析方法，通过七个逻辑递进的步骤，帮助企业从"救火式"问题解决转向"预防式"风险管理。掌握七步法的精髓，是提升产品设计质量的关键能力。`,category:`fmea-method`,tags:[`DFMEA`,`七步法`,`AIAG-VDA 2019`,`设计FMEA`,`风险管理`],date:`2025-04-08`,author:`技术团队`,readTime:15,cover:`/images/knowledge/fm-003.jpg`},{id:`fm-004`,title:`PFMEA七步法完整指南：过程风险分析实战`,summary:`PFMEA（过程失效模式与影响分析）专注于制造和装配过程的风险识别与控制。本文详解PFMEA七步法的实施要点，帮助生产型企业提升过程质量。`,content:`## PFMEA 概述

PFMEA（Process Failure Mode and Effects Analysis，过程失效模式与影响分析）是专注于**制造和装配过程**的风险分析工具。与DFMEA关注产品设计不同，PFMEA关注：
- 生产过程是否稳定？
- 过程能力是否充足？
- 潜在过程失效如何预防？

---

## PFMEA与DFMEA的关系

| 维度 | DFMEA | PFMEA |
|------|-------|-------|
| **分析对象** | 产品设计 | 制造/装配过程 |
| **关注重点** | 设计缺陷 | 过程变异 |
| **输入** | 设计概念、客户要求 | DFMEA、工艺流程图 |
| **输出** | 设计改进、DVP&R | 控制计划、作业指导书 |
| **时机** | 设计阶段 | 过程开发→量产 |

**关键联系**：
- DFMEA的"特性清单"是PFMEA的重要输入
- PFMEA的"失效模式"可能源于DFMEA的"潜在失效原因"
- 两者共同形成从设计到制造的风险管控闭环

---

## PFMEA七步法详解

### 第一步：策划与准备

**特殊考虑**：
- **过程范围**：明确是零件级、组件级还是总成级PFMEA
- **工艺流程图**：作为PFMEA的基础输入
- **DFMEA输入**：继承设计阶段的特性清单和风险提示

**关键交付物**：
- 工艺流程图（PFD）
- 过程流程图（PFC）
- 特性清单（来自DFMEA）

---

### 第二步：结构分析

**PFMEA结构层级**：
\`\`\`
系统/总成（上级）
  └── 聚焦过程（如：机加工、焊接、装配）
        ├── 4M要素-人（Man）
        ├── 4M要素-机（Machine）
        ├── 4M要素-料（Material）
        └── 4M要素-法（Method）
\`\`\`

**过程要素分析**：
使用**4M**（人、机、料、法）+ **1E**（环）模型分析过程输入。

| 要素 | 典型失效原因 |
|------|-------------|
| 人 | 操作失误、技能不足、疲劳 |
| 机 | 设备磨损、参数漂移、维护不足 |
| 料 | 来料缺陷、混料、标识不清 |
| 法 | 工艺参数不当、作业指导不清 |
| 环 | 温湿度失控、洁净度不足 |

---

### 第三步：功能分析

**过程功能描述**：
- **动词+名词**：如"钻孔"、"焊接"、"拧紧"
- **过程参数**：速度、温度、压力、时间等
- **过程要求**：CPK≥1.33、合格率≥99%

**功能网示例**：
\`\`\`
产品功能：密封性能良好
  └── 过程功能：涂胶均匀
        └── 4M要素功能：
              ├── 人：正确操作涂胶设备
              ├── 机：涂胶量精度±5%
              ├── 料：胶水粘度符合规格
              └── 法：涂胶速度100mm/s
\`\`\`

---

### 第四步：失效分析

**PFMEA失效链**：

| 层级 | 要素 | 示例 |
|------|------|------|
| 失效后果（FE） | 对工厂、客户、最终用户的影响 | 客户投诉漏水、保修索赔 |
| 失效模式（FM） | 过程失效的表现 | 涂胶量不足、涂胶位置偏移 |
| 失效原因（FC） | 4M要素的失效 | 胶水粘度低、气压不稳定 |

**常见过程失效模式**：
- 尺寸超差（机加工）
- 虚焊/焊穿（焊接）
- 漏装/错装（装配）
- 污染/划伤（清洁/防护）
- 参数漂移（热处理）

---

### 第五步：风险分析

**PFMEA评分特殊考虑**：

**严重度（S）**：
- 基于对**后续过程**和**最终客户**的影响
- 安全/法规相关特性自动S=9或10

**发生度（O）**：
- 基于过程能力（CPK）和历史不良率
- 参考数据：
  - CPK≥1.67 → O=1-2
  - CPK 1.33-1.67 → O=3-4
  - CPK 1.0-1.33 → O=5-6
  - CPK<1.0 → O≥7

**探测度（D）**：
- 基于探测方法的**及时性**和**有效性**
- 在线自动检测 < 离线抽检 < 目视检查

---

### 第六步：优化

**PFMEA典型改进措施**：

| 失效原因 | 预防措施 | 探测措施 |
|---------|---------|---------|
| 操作失误 | 防错设计（Poka-Yoke） | 自动检测 |
| 设备参数漂移 | SPC控制、预防性维护 | 首检+巡检 |
| 来料缺陷 | 供应商管理、来料检验 | IQC检验 |
| 工艺参数不当 | DOE优化、标准化作业 | 过程审核 |

**控制计划关联**：
- PFMEA的高风险项必须纳入控制计划
- 控制计划是PFMEA措施的具体执行文件

---

### 第七步：结果文件化

**PFMEA特有输出**：
- **控制计划（Control Plan）**：
  - 关键控制点（CCP）
  - 控制方法（SPC、防错、检验）
  - 反应计划
- **作业指导书**：操作标准化
- **检验规范**：IQC、IPQC、OQC要求

---

## PFMEA实施最佳实践

### 时机选择
| 阶段 | PFMEA活动 |
|------|----------|
| 过程开发 | 初始PFMEA，识别潜在风险 |
| 试生产 | 验证PFMEA，更新发生度评分 |
| 量产初期 | 基于早期数据优化措施 |
| 量产稳定 | 定期评审，持续改进 |
| 变更时 | 变更触发PFMEA更新 |

### 与SPC的结合
- PFMEA识别的关键特性 → SPC控制图监控
- SPC异常 → 触发PFMEA重新评估
- 形成"识别-监控-改进"闭环

### 与MSA的关系
- MSA确保测量系统可靠，是PFMEA评分的数据基础
- 测量系统变异大 → 探测度评分偏高 → 需要改进测量方法

---

## 总结

PFMEA是连接产品设计与生产制造的桥梁，通过系统化的七步法分析，帮助企业：
1. 预防过程失效，减少生产不良
2. 优化控制计划，提升过程能力
3. 降低质量成本，提高客户满意度

PFMEA不是一次性的文档，而是伴随产品全生命周期的动态管理工具。`,category:`fmea-method`,tags:[`PFMEA`,`七步法`,`过程FMEA`,`控制计划`,`4M分析`],date:`2025-04-08`,author:`技术团队`,readTime:14,cover:`/images/knowledge/fm-004.jpg`},{id:`rf-002`,title:`质量五大工具关系解析：APQP、FMEA、MSA、SPC、PPAP`,summary:`APQP、FMEA、MSA、SPC、PPAP是汽车行业质量管理的五大核心工具。本文系统解析五大工具之间的逻辑关系、应用顺序和整合方法。`,content:`## 质量五大工具概述

在汽车行业（特别是IATF 16949质量管理体系中），**APQP、FMEA、MSA、SPC、PPAP**被称为"质量五大工具"。它们不是孤立使用的，而是相互关联、顺序递进，共同构成产品质量策划的完整框架。

---

## 五大工具简介

### 1. APQP（产品质量先期策划）
**定义**：结构化的新产品开发方法论
**核心输出**：
- 项目计划与里程碑
- 设计目标与规范
- 过程流程图
- 控制计划
- 其他四大工具的整合框架

### 2. FMEA（失效模式与影响分析）
**定义**：系统化的风险预防工具
**分类**：
- DFMEA（设计FMEA）
- PFMEA（过程FMEA）

### 3. MSA（测量系统分析）
**定义**：评估测量数据可靠性的方法
**核心内容**：
- 偏倚、线性、稳定性
- 重复性与再现性（GR&R）
- 属性一致性分析

### 4. SPC（统计过程控制）
**定义**：基于统计方法监控过程稳定性的技术
**核心工具**：
- 控制图（X-R、X-S、P、C、U图等）
- 过程能力分析（CPK、PPK）

### 5. PPAP（生产件批准程序）
**定义**：验证生产过程具备量产能力的标准化流程
**核心输出**：
- 设计记录
- 过程流程图
- PFMEA
- 控制计划
- MSA报告
- SPC数据
- 全尺寸报告
- 材料/性能试验结果

---

## 五大工具的逻辑关系

### 时间轴关系
\`\`\`
项目启动 → 产品设计 → 过程设计 → 试生产 → 量产
   │          │          │          │        │
  APQP      DFMEA      PFMEA      MSA     SPC监控
   │          │          │          │        │
   └──────────┴──────────┴──────────┴────────┘
                        │
                      PPAP批准
\`\`\`

### 输入输出关系

| 工具 | 主要输入 | 主要输出 | 下游工具 |
|------|---------|---------|---------|
| **APQP** | 客户要求、项目计划 | 项目里程碑、资源计划 | 所有工具 |
| **DFMEA** | 设计概念、客户规范 | 特性清单、设计风险 | PFMEA、DVP&R |
| **PFMEA** | DFMEA、工艺流程图 | 控制计划、过程风险 | 控制计划、SOP |
| **MSA** | 测量设备、测量方法 | GR&R报告、测量系统能力 | SPC、检验规范 |
| **SPC** | 过程数据、控制计划 | 过程能力报告、监控数据 | 持续改进 |
| **PPAP** | 所有工具输出 | 批准报告、证据包 | 量产许可 |

### 数据流关系
\`\`\`
DFMEA特性清单 ───────┐
                     ├──→ 控制计划 ←── PFMEA措施
工艺流程图 ──────────┤          ↑
                     │          │
                     └──→ MSA验证 → SPC监控
\`\`\`

---

## 五大工具的实施顺序

### 阶段一：项目策划（APQP第1-2阶段）
**活动**：
- 组建项目团队
- 明确客户要求
- 制定项目计划
- 启动DFMEA

**输出**：
- 项目计划书
- 设计目标
- 初始DFMEA

### 阶段二：产品设计开发（APQP第3阶段）
**活动**：
- 完成详细设计
- 完成DFMEA
- 制定DVP&R（设计验证计划）
- 启动PFMEA准备

**输出**：
- 设计图纸/规范
- 完整DFMEA
- 特性清单（传递到PFMEA）

### 阶段三：过程设计开发（APQP第4阶段）
**活动**：
- 设计工艺流程
- 完成PFMEA
- 制定控制计划
- 准备MSA

**输出**：
- 过程流程图
- 完整PFMEA
- 初始控制计划

### 阶段四：产品过程确认（APQP第5阶段）
**活动**：
- 试生产
- 执行MSA
- 收集SPC数据
- 准备PPAP

**输出**：
- MSA报告
- SPC初始数据
- PPAP文件包

### 阶段五：量产与持续改进（APQP第6阶段）
**活动**：
- SPC持续监控
- 定期评审FMEA
- 问题驱动改进

**输出**：
- SPC监控报告
- 更新的FMEA和控制计划

---

## 五大工具的整合应用

### 整合要点

**1. 统一特性清单**
- DFMEA识别的关键特性 → 传递到PFMEA → 纳入控制计划
- 确保设计意图在制造过程中得到保证

**2. 数据一致性**
- MSA验证的测量系统 → 用于SPC数据收集
- SPC数据 → 用于FMEA发生度评分更新

**3. 风险闭环**
- DFMEA风险 → 设计变更或传递到PFMEA
- PFMEA风险 → 控制计划措施 → SPC监控
- SPC异常 → 触发FMEA重新评估

### 典型整合流程示例

**场景：新产品开发项目**

\`\`\`
Week 1-2: APQP启动
  └── 项目计划、团队组建

Week 3-6: 产品设计 + DFMEA
  └── 设计概念 → 详细设计
  └── DFMEA分析 → 特性清单

Week 7-10: 过程设计 + PFMEA
  └── 工艺流程图
  └── PFMEA分析（继承DFMEA特性）
  └── 控制计划初稿

Week 11-12: MSA准备
  └── 确定测量系统
  └── 准备GR&R研究

Week 13-14: 试生产 + 数据收集
  └── 试生产运行
  └── 执行MSA
  └── 收集SPC初始数据

Week 15-16: PPAP准备与提交
  └── 整理所有文件
  └── 提交客户批准

Week 17+: 量产 + SPC监控
  └── 持续监控
  └── 定期评审更新
\`\`\`

---

## 常见问题与误区

### ❌ 误区一：五大工具各自为政
**问题**：不同部门分别做，缺乏整合
**后果**：数据不一致、遗漏关键风险
**解决**：建立跨功能团队，统一协调

### ❌ 误区二：FMEA只做一次
**问题**：DFMEA/PFMEA完成后不再更新
**后果**：无法反映实际风险状态
**解决**：动态更新机制，变更触发评审

### ❌ 误区三：MSA与SPC脱节
**问题**：MSA未做就开始SPC
**后果**：SPC数据不可靠，误判过程状态
**解决**：MSA先行，验证测量系统合格后再SPC

### ❌ 误区四：PPAP只是文档收集
**问题**：为了PPAP而PPAP，缺乏实质验证
**后果**：量产初期问题频发
**解决**：PPAP是验证过程能力的证据，不是简单的文件堆砌

---

## 总结

质量五大工具是一个有机整体：
- **APQP**是框架，统筹全局
- **FMEA**是预防，识别风险
- **MSA**是基础，确保数据可靠
- **SPC**是监控，维持过程稳定
- **PPAP**是验证，确认量产能力

掌握五大工具的关系和整合应用，是汽车行业质量工程师的核心能力。`,category:`reliability-flow`,tags:[`五大工具`,`APQP`,`FMEA`,`MSA`,`SPC`,`PPAP`,`IATF 16949`],date:`2025-04-08`,author:`质量团队`,readTime:12,cover:`/images/knowledge/rf-002.jpg`},{id:`rr-003`,title:`ASQ认证可靠性工程师（CRE）知识体系解析`,summary:`美国质量协会（ASQ）认证可靠性工程师（CRE）是全球公认的可靠性工程领域权威认证。本文系统解析CRE知识体系（BoK）的五大核心模块，帮助工程师全面了解可靠性工程的能力要求。`,content:`## 绪论

美国质量协会（ASQ）的认证可靠性工程师（Certified Reliability Engineer, CRE）是全球公认的可靠性工程领域权威认证。该认证要求考生系统掌握产品与系统全生命周期中的可靠性设计、分析、测试及管理方法。其知识体系（Body of Knowledge, BoK）围绕五大核心模块构建，覆盖从理论到实践的全方位能力要求。

![CRE知识体系总览](/images/knowledge/rr-003/image1.png)

---

## 一、可靠性基础：构建系统化认知

可靠性工程的核心目标是通过预防性设计与持续改进，确保产品在预期寿命内稳定运行。CRE知识体系以可靠性基础为起点，分为两大维度：

![浴盆曲线与可靠性指标](/images/knowledge/rr-003/image2.png)

### （1）管理基础

可靠性工程师需具备跨部门协作能力，包括：

① **价值驱动**：明确可靠性对成本控制、品牌声誉及客户满意度的长期影响。

② **生命周期管理**：参与设计评审，预判可靠性对风险与成本的影响，例如通过DFMEA（设计失效模式分析）提前规避潜在缺陷。

③ **供应商管理**：制定供应商可靠性评估标准，持续监控其质量表现，确保供应链稳健性。

### （2）技术基础

涵盖可靠性工程的核心概念与工具：

① **术语与指标**：如MTBF（平均故障间隔时间）、MTTR（平均修复时间）、浴盆曲线等，量化可靠性表现。

② **六西格玛与质量三角**：通过DMAIC流程实现可靠性改进，平衡成本、时间与质量的动态关系。

③ **根本原因分析**：运用5Why、鱼骨图等方法追溯失效根源，避免问题重复发生。

---

## 二、风险管理：从识别到闭环控制

风险管理是可靠性工程的核心能力。CRE要求工程师掌握风险识别-分析-缓解的全流程方法：

![FMEA与FTA分析方法](/images/knowledge/rr-003/image3.png)

### （1）风险识别

① **工具应用**：通过p图（参数图）识别潜在失效场景，结合用户画像（正常/极端使用条件）定义风险边界。

② **分类评估**：区分技术风险（如设计缺陷）、战略风险（如合规问题）及操作风险（如供应链中断），优先处理高概率、高影响事件。

### （2）风险分析

① **FTA与FMEA**：故障树分析（FTA）量化系统级失效概率，失效模式分析（FMEA）定位关键组件薄弱点。两者结合可优化冗余设计。

② **共模失效**：识别共同原因导致的系统性故障（如电源波动影响多个子系统），通过隔离设计降低连锁风险。

### （3）风险缓解

① **ALARP原则**：将风险降至"合理可行最低水平"，平衡控制措施的成本与效益。

② **ISO标准整合**：依据ISO 31000制定风险应对计划，确保措施可追踪、可验证。

---

## 三、概率与统计学：数据驱动的决策支持

可靠性工程高度依赖数据建模与统计分析能力。CRE知识体系要求掌握：

![Weibull分布与数据分析](/images/knowledge/rr-003/image4.png)

### （1）基础理论与工具

① **分布模型**：威布尔分布分析寿命数据，对数正态分布处理维修时间，泊松分布模拟低概率事件。

② **统计推断**：通过置信区间评估样本代表性，利用假设检验验证改进措施的有效性。

### （2）数据全周期管理

① **数据源整合**：结合实验室测试数据、现场故障记录及物联网（IoT）实时监测信息，构建多维分析模型。

② **FRACAS系统**：建立故障报告、分析与纠正措施闭环，驱动持续改进。

---

## 四、可靠性测试与建模：验证与预测的平衡

![加速寿命试验与HALT测试](/images/knowledge/rr-003/image5.png)

### （1）测试策略设计

① **加速寿命测试（ALT）**：通过高应力条件（如温度循环、振动）缩短测试周期，外推正常使用下的可靠性表现。

② **HALT/HASS**：高加速寿命试验（HALT）暴露设计极限，高加速应力筛选（HASS）用于量产批次缺陷剔除。

### （2）建模技术

① **可靠性框图**：串联/并联/K-out-of-N模型量化系统可靠性，指导冗余设计。

② **物理失效模型**：应用Coffin-Manson模型预测热疲劳寿命，阿伦尼乌斯方程评估温度对电子元件的影响。

---

## 五、生命周期可靠性：从设计到退役的全流程优化

### （1）设计阶段

① **DfR（可靠性设计）**：通过应力-强度分析、实验设计（DOE）优化参数容差，提升固有可靠性。

② **DFX技术**：面向可制造性（DFM）、可维护性（DFMt）的设计，降低后期成本。

### （2）运维阶段

① **预测性维护**：基于CBM（状态监控）数据，动态调整维护周期，减少非计划停机。

② **备件策略**：利用威布尔分析预测备件需求，优化库存水平。

---

## 六、认知水平：布鲁姆分类法的实践映射

CRE知识体系基于布鲁姆分类法，将认知能力分为六个层次：

① **识记（Remember）**：对术语、定义、事实、观点、材料、模式、序列、方法、原理等知识要素进行有效回忆或准确辨识。

② **理解（Understand）**：能够阅读并阐释各类描述性文本、交流信息、研究报告、数据表格、图示说明、操作指引及规范条例，把握其核心内涵与逻辑关系。

③ **应用（Apply）**：在特定情境中掌握运用概念体系、操作流程、方法论框架、数学公式、基础原理及理论模型的时机选择与实施策略。

④ **分析（Analyze）**：将复杂信息解构为基本组成单元，辨析各要素间的关联机制与组织结构，并能从多维情境中提取关键变量或核心数据。

⑤ **评价（Evaluate）**：基于预设评价标准或专业规范，对特定观点、解决方案等对象进行系统性价值判断，通过多维度比较验证其合理性与有效性。

⑥ **创造（Create）**：通过要素重组与结构整合，建构具有新型范式或内在逻辑的知识体系；或从复杂数据集中筛选有效信息，形成具有实证支撑的创新性结论。

---

## 结语

CRE知识体系不仅为工程师提供技术工具箱，更培养了系统性思维与风险管理能力。在企业层面，CRE人才可推动产品可靠性提升30%以上（据ASQ案例研究），降低保修成本并增强市场竞争力。随着工业4.0与智能制造的普及，可靠性工程将进一步与AI、数字孪生等技术融合，而CRE认证将持续作为行业能力的黄金标准。`,category:`reliability-flow`,tags:[`ASQ CRE`,`可靠性工程师`,`可靠性认证`,`知识体系`,`BoK`],date:`2026-04-09`,author:`技术编辑部`,readTime:15,cover:`/images/knowledge/rr-003/image1.png`},{id:`re-001`,title:`Weibull分布在可靠性分析中的应用：从理论到实践`,summary:`Weibull分布是可靠性工程中最常用的寿命分布模型。本文介绍Weibull分布的基本理论、参数估计方法和在寿命数据分析中的实际应用。`,content:`## Weibull分布概述

Weibull分布是瑞典工程师Waloddi Weibull于1951年提出的连续概率分布，因其**灵活性**和**广泛的适用性**，成为可靠性工程中最常用的寿命分布模型。

---

## 为什么可靠性分析选择Weibull分布？

### 1. 形状参数β的灵活性
Weibull分布通过形状参数β可以模拟多种失效模式：

| β值 | 失效特征 | 典型应用场景 |
|-----|---------|-------------|
| β < 1 | 早期失效（递减失效率） | 调试期、 Infant mortality |
| β = 1 | 随机失效（恒定失效率） | 偶然故障、指数分布 |
| β > 1 | 磨损失效（递增失效率） | 老化、疲劳、磨损 |
| β = 3.5 | 近似正态分布 | 对称分布的失效模式 |

### 2. 三参数形式适应性强
- **两参数Weibull**：形状参数β + 尺度参数η
- **三参数Weibull**：增加位置参数γ（最小寿命）

### 3. 工程解释性强
- η（特征寿命）：63.2%失效发生的时间点
- β（形状参数）：直接反映失效机理

---

## Weibull分布数学基础

### 概率密度函数（PDF）
\`\`\`
f(t) = (β/η) × (t/η)^(β-1) × exp[-(t/η)^β]
\`\`\`

### 累积分布函数（CDF）
\`\`\`
F(t) = 1 - exp[-(t/η)^β]
\`\`\`

### 可靠性函数
\`\`\`
R(t) = exp[-(t/η)^β]
\`\`\`

### 失效率函数
\`\`\`
λ(t) = (β/η) × (t/η)^(β-1)
\`\`\`

### 关键指标计算
- **MTTF（平均失效时间）**：η × Γ(1 + 1/β)
- **中位寿命**：η × (ln2)^(1/β)
- **B10寿命**：η × (-ln0.9)^(1/β)（10%失效的时间）

---

## 参数估计方法

### 方法一：最大似然估计（MLE）
**原理**：找到使观测数据出现概率最大的参数值

**优点**：
- 统计性质优良，渐近无偏
- 计算效率高
- 适合大样本（n≥20）

**缺点**：
- 小样本时可能偏差较大
- 计算复杂，需要迭代求解

**适用场景**：样本量充足，追求统计严谨性

### 方法二：秩回归（Rank Regression）
**原理**：在Weibull概率纸上进行线性回归拟合

**步骤**：
1. 对失效时间排序，计算中位秩
2. 取对数变换：ln(t) vs ln[-ln(1-F(t))]
3. 线性回归拟合
4. 从斜率和截距求β和η

**优点**：
- 计算简单，易于理解
- 小样本表现较好
- 可视化直观

**缺点**：
- 大样本时效率低于MLE
- 对异常值敏感

**适用场景**：小样本、快速估算、教学演示

### 方法三：贝叶斯估计
**原理**：结合先验信息和观测数据进行估计

**优点**：
- 可以融入工程经验
- 小样本时更稳健

**缺点**：
- 需要确定先验分布
- 计算复杂

**适用场景**：样本极少但有历史数据可参考

---

## 置信区间估计

### 为什么需要置信区间？
点估计只是"最佳猜测"，置信区间反映估计的不确定性范围。

### 常用方法

**1. Fisher信息矩阵法**
- 基于MLE的渐近正态性
- 适用于大样本

**2. 似然比（Likelihood Ratio）法**
- 不依赖大样本近似
- 小样本更准确
- 计算复杂度中等

**3. Bootstrap方法**
- 重采样模拟
- 无分布假设
- 计算密集但灵活

### 选择建议
| 样本量 | 推荐方法 |
|--------|---------|
| n < 5 | Bootstrap或贝叶斯 |
| 5 ≤ n < 20 | 似然比方法 |
| n ≥ 20 | MLE + Fisher矩阵 |

---

## Weibull分析实战步骤

### 步骤1：数据准备
**数据类型**：
- 完全数据：所有样本都失效
- 删失数据：部分样本未失效（右删失最常见）

**数据要求**：
- 至少3-5个失效数据点
- 记录失效时间
- 记录失效模式（用于竞争风险分析）

### 步骤2：分布识别
**图形检验**：
- Weibull概率图：数据应呈直线
- 如果明显弯曲，考虑其他分布或对数正态

**统计检验**：
- Anderson-Darling检验
- Kolmogorov-Smirnov检验

### 步骤3：参数估计
使用专业软件（如国可工软Weibull分析模块）：
1. 输入数据
2. 选择估计方法（推荐MLE）
3. 获取β、η估计值

### 步骤4：模型检验
**残差分析**：
- 检查残差是否随机分布
- 识别异常点

**拟合优度**：
- R²值（回归方法）
- 对数似然值（MLE方法）

### 步骤5：可靠性指标计算
**常用指标**：
- MTTF（平均寿命）
- B10/B50寿命（特定失效百分比的时间）
- 可靠度R(t) at特定时间
- 失效率λ(t)

### 步骤6：结果解释与决策
**基于β值的判断**：
- β<1：关注早期失效，改进筛选工艺
- β≈1：考虑预防性维护策略
- β>1：计划更换周期，预防磨损失效

---

## 典型应用场景

### 场景1：产品寿命评估
**问题**：某轴承在额定载荷下的寿命是多少？
**分析**：
- 收集失效数据
- Weibull拟合得到β、η
- 计算B10寿命作为更换周期

### 场景2：保修期预测
**问题**：3年保修期内预计有多少比例会失效？
**分析**：
- F(3年) = 1 - exp[-(3/η)^β]
- 预测保修索赔数量和成本

### 场景3：不同设计的对比
**问题**：新设计比旧设计寿命提高多少？
**分析**：
- 分别对两组数据做Weibull分析
- 比较η值（特征寿命）
- 统计检验差异显著性

### 场景4：竞争失效模式分析
**问题**：产品有多种失效模式，如何分析？
**分析**：
- 按失效模式分组
- 分别做Weibull分析
- 识别主导失效模式

---

## 常见问题与注意事项

### ⚠️ 样本量不足
**问题**：只有2-3个失效数据
**解决**：
- 使用贝叶斯方法融入先验信息
- 结合加速寿命试验（ALT）获取更多数据
- 参考相似产品的历史数据

### ⚠️ 多失效模式混合
**问题**：数据中包含早期失效和磨损失效
**解决**：
- 竞争风险分析（Competing Risks）
- 分段Weibull模型
- 按失效模式分层分析

### ⚠️ 异常值影响
**问题**：个别极端值影响拟合结果
**解决**：
- 识别并调查异常值原因
- 使用稳健估计方法
- 考虑三参数Weibull（加入位置参数）

### ⚠️ 分布选择错误
**问题**：Weibull拟合不佳
**解决**：
- 尝试对数正态分布
- 尝试指数分布（β=1时的Weibull）
- 使用概率图和拟合优度检验辅助判断

---

## 软件工具推荐

### 专业可靠性软件
- **国可工软 ReliaQube-eWA**：国产Weibull分析工具
- **ReliaSoft Weibull++**：国际知名可靠性软件
- **Minitab**：通用统计软件，含可靠性模块

### Excel插件
- **Weibull Toolbox**：免费的Excel分析工具
- **RELAN**：可靠性分析Excel插件

---

## 总结

Weibull分布是可靠性工程师的"瑞士军刀"：
- **灵活**：通过β参数适应各种失效模式
- **实用**：工程解释性强，便于沟通
- **成熟**：参数估计和置信区间方法完善

掌握Weibull分析，是开展寿命数据分析、制定维护策略、预测保修成本的核心能力。`,category:`reliability-eval`,tags:[`Weibull分布`,`寿命分析`,`可靠性评估`,`参数估计`,`MTTF`],date:`2025-04-08`,author:`可靠性团队`,readTime:16,cover:`/images/knowledge/re-001.jpg`},{id:`wb-001`,title:`为什么要做Weibull分析？案例1-不仅仅是预警`,summary:`通过玻璃升降器售后数据的Weibull分析案例，展示如何判断失效模式属于早期失效、偶然失效还是损耗失效，帮助快速寻找根因及改进。`,content:`## 背景

在一次技术交流中，大家对为什么要做Weibull分析存在疑虑，就把当时的售后数据拿出来，让分析人员做下分析，给出一个分析结果，以此证明Weibull分析的价值。

## 数据概述

数据为某车辆上市10个月内的销售数据和售后索赔数据。

## 分析结论

分析人员挑选了其中玻璃升降器的售后数据，进行了简单的整理，得到数据如下：

![数据整理](/weibull-images/weibull1-0.png)

一共有：114次关于玻璃升降器的索赔
其中升降反转和升降异响分别是84和17次，未知失效（表达模糊）为13次。

经过简单的数据整理和分析，得到结论如下：

**1、升降反转为早期失效**

可能由于制造质量控制问题导致。加强制造质量管控可以得到解决，未来失效会逐渐减少。

![早期失效分析](/weibull-images/weibull1-1.png)

**2、升降异响为损耗失效**

极有可能是设计问题，未来会失效越来越多。

![损耗失效分析](/weibull-images/weibull1-2.png)

## 后续例证

在约8个月（即该车型量产1年半）以后，分析团队再次拿到索赔数据。数据对比如下：

![数据对比](/weibull-images/weibull1-3.png)

1. 升降反转失效数量增加甚少，只增加了16次；（符合早期失效特点）
2. 升降异响索赔增量巨大，随着使用时间增加越来越多；（符合损耗失效特点）

以上实际数据，与前期数据分析结论保持高度一致。

## 总结

简单总结该案例的启示：

1. Weibull分析帮助我们判断失效模式是属于早期失效、偶然失效，还是损耗失效，有助于更快寻找根因及改进；
2. 当前的少量失效，未必就不需要重视；（升降异响早期并不起眼，后期却占了大头）
3. 通过Weibull分析，可以科学地预测产品未来的可靠性发展趋势，为产品改进和质量控制提供数据支撑。`,category:`reliability-eval`,tags:[`Weibull分析`,`失效模式`,`早期失效`,`损耗失效`,`售后数据`],date:`2025-04-15`,author:`技术团队`,readTime:6,cover:`/weibull-images/weibull1-4.png`},{id:`wb-002`,title:`无失效数据的产品可靠性评估案例`,summary:`当所有寿命相关的试验全部通过且无失效发生时，如何科学评价产品可靠性？本文通过ECU可靠性评估案例，介绍Weibayes（威布尔卡方）方法的应用。`,content:`## 问题背景

当所有寿命相关的试验全部通过且无失效发生时如何评价产品可靠性？

一个产品可能有几项与寿命相关的可靠性验证试验。例如，车辆中使用的电子控制模块（ECU）通常有以下四项与寿命相关的试验，涉及温度和湿度应力：

- 高温操作耐久性（HTOE）试验
- 高温高湿耐久性（HTHE）试验
- 功率温度循环耐久性（PTCE）试验
- 热冲击（TS）试验

上述四个与寿命相关的试验应该会激发出各种失效机理，导致产品的累积损伤。

## 案例对话

**Julius:** 当四项寿命试验都没有失效发生时，其实没有很多可靠性统计方法可以帮助你。其中一个可用的方法是使用非常基本的二项式分布模型，但这没啥大用。

**Steve:** 我们有一些摸底试验的失效数据，但不是很多。

**Julius:** 你们碰巧有热冲击试验中焊点开裂问题的威布尔分布的β值吗？

**Steve:** 我们没有威布尔分布的β值，但我有数据。

![试验数据表](/weibull-images/weibull2-0.png)

**Julius:** 我们可以使用焊点开裂的Weibull分布β值作为已知数值。大概率下如果ECU失效了，就会以这种焊点开裂方式失效。

## Weibayes（威布尔卡方）方法

![威布尔分析结果](/weibull-images/weibull2-1.png)

看起来威布尔分布的β值大约是5.2。

结合所有数据以及Weibull分布β=5.2，在置信度90%的情况下，产品达到10年的设计寿命时可靠度约为**97.7%**。

## 相关理论

在这个案例里，我们使用了Weibayes方法（Abernethy，2010年），也是Nelson（1985年）提出的"威布尔卡方"方法。

![公式](/weibull-images/weibull2-8.png)

**公式说明：**

- 首先必须给出β值（Beta值可以通过之前的数据计算获得）
- t 是试验时间指标：通常是设计寿命或验证目标
- t_i 是样品 i 的试验停止时间
- χ²(C,r) 是自由度为"r"的卡方分布的C百分位数

在Excel中，使用 CHISQ.INV(C, 2(r+1)) 获得卡方值。

## 实践意义

当产品通过所有可靠性试验且无失效发生时，Weibayes方法提供了一种科学的可靠性评估途径：

1. 利用历史摸底试验数据获取β值
2. 结合当前验证试验的无失效数据
3. 计算给定置信度下的产品可靠度
4. 为产品设计寿命提供数据支撑

这种方法特别适用于高可靠性、长寿命产品的可靠性验证场景。`,category:`reliability-eval`,tags:[`Weibull分析`,`Weibayes`,`无失效数据`,`ECU`,`置信度`],date:`2025-03-20`,author:`Julius王政`,readTime:8,cover:`/weibull-images/weibull2-3.png`},{id:`wb-003`,title:`为什么要做Weibull分析？案例3-可靠性比较`,summary:`如何通过Weibull分析比较两组数据的可靠性？本文通过两个供应商的寿命试验数据，展示如何科学地评估和比较产品可靠性。`,content:`## 前言

Weibull分析不是简单的画图，包含了很多外延的知识和经验。我们这一系列分享，旨在每一篇讲清楚一两个知识点。

今天，让咱们通过一个简单的案例，了解如何通过Weibull分析比较两组数据的可靠性。

## 背景

在某零部件有两个供应商，为了挑选更合适的供应商，分别拿了8个样本进行寿命试验，得到的数据是每个样本失效的时间，结果如下：

![供应商寿命数据](/weibull-images/weibull3-0.png)

那哪家供应商的可靠性更好呢？

## 讨论

如果单纯从数据上来看，供应商1的数据比较分散，供应商2的数据比较集中，但是很难说谁更好一些。

### 方法一：比较平均值

- 供应商1产品的平均寿命是：136,749
- 供应商2产品的平均寿命是：38,593
- **结论：供应商1胜出**

### 方法二：比较中位数

- 供应商1产品的中位寿命是：100,515
- 供应商2产品的中位寿命是：37,616
- **结论：供应商1胜出**

中位数指一组数据的中间值，通俗来说就是50%比它大，50%比它小。（Excel公式：Median）

### 但的确如此吗？

相信这时候很多朋友一定会想到，需要进行比较，还需要一个前提，就是咱们期望这个产品使用多少时间。

- 如果时间要求是1~2万的，可能会是供应商2会更好一些，因为在此之前都没有失效
- 如果时间要求是5~6万的，可能会是供应商1会更好一些，因为在此之前供应商2基本都已经失效

## Weibull分析结果

通过Weibull分析，我们可以得到这两个供应商各自的Weibull分析图形。为了便于比较，我们可以通过"多图"将他们放在一张图上进行直观比较。

![Weibull对比分析](/weibull-images/weibull3-1.png)

### 如果要求的使用时间是2万

- 供应商1产品的不可靠度 F(2万) 是：13.18%
- 供应商2产品的不可靠度 F(2万) 是：2.68%
- **结论：供应商2胜出**

### 如果要求的使用时间是5万

- 供应商1产品的不可靠度 F(5万) 是：29.19%
- 供应商2产品的不可靠度 F(5万) 是：90.52%
- **结论：供应商1胜出**

![可靠性对比](/weibull-images/weibull3-4.png)

## 总结

1. 平均值在产品可靠性比较中，有一定的意义，但还需根据客户需求、设计目标、数据分布进一步对比分析
2. 用不可靠度（F(t)）或者可靠度（R(t)）进行比较，可能会更加合适
3. 通过Weibull分析，我们可以得到产品应用到任意时刻的可靠性或者不可靠度
4. 在平时的工作中，可以通过这样的分析，比较不同供应商、批次、区域等的产品可靠性；也可以进行产品改进前后的可靠性比较`,category:`reliability-eval`,tags:[`Weibull分析`,`供应商比较`,`可靠性对比`,`B10寿命`,`可靠度`],date:`2025-02-10`,author:`技术团队`,readTime:7,cover:`/weibull-images/weibull3-5.png`},{id:`wb-004`,title:`Why Weibull？案例4-如何证明达到可靠性要求？`,summary:`客户要求B10寿命大于20万循环，如何通过Weibull分析证明产品可靠性已达到客户要求？本文展示威布尔分析方法在可靠性验证中的应用。`,content:`## 前言

Weibull分析不是简单的画图，包含了很多外延的知识和经验。我们这一系列分享，旨在每一篇讲清楚一两个知识点。

今天，让咱们通过一个简单的案例，了解如何通过Weibull分析证明产品可靠性已经达到客户要求。

## 背景

某涡轮增压器压气机叶片的供应商收到客户要求，要求其产品的低周疲劳（一种失效模式）的**B10寿命大于20万个循环**（Cycle）。

![涡轮增压器叶片](/weibull-images/weibull4-0.png)

那供应商应该如何证明其产品的可靠性满足了这项要求呢？

## 试验数据

供应商选择了9个样本，进行低周疲劳寿命试验，得到的寿命数据如下：

![寿命试验数据](/weibull-images/weibull4-1.png)

其中有8个发生了失效，后面的数据表示其失效的时间（即循环数）；第九个在583,500循环的时候停止了试验（称为右删失数据）。

## 分析结果

通过Weibull分析，我们可以得到如下的Weibull分析图形，通过添加B10（即不可靠度为10%）的辅助线，可以得到其B10寿命为：**271,862**

该结果大于客户要求的：大于20万，证明满足客户要求。

![B10分析](/weibull-images/weibull4-2.png)

## 置信度要求

这样就可以了吗？可能还是不够的！

这时候需要去看一下客户的要求中，是不是对置信度提了要求。

有些时候，客户可能还会要求：**B10大于20万，置信度要求为90%。**

如果是是这样，我们需要计算90%置信下限的B10寿命是多少。通过"计算器"可以得到下图的结果：

![90%置信下限](/weibull-images/weibull4-3.png)

**90%置信下限为：205,795**，满足客户要求。

## 名词解释

**Bx寿命（也称Lx寿命）**

1. Bx寿命是可靠性方面常用的可靠性参数。当x等于10时称为B10寿命，x等于50时称为B50寿命
2. 在ISO-281标准中，B10寿命表示在一定数量的轴承中，其中90%的轴承的寿命能够达到的时间点
3. 此外，在澳大利亚标准AS3890和AS2729中, B10（或L10）寿命可以用于衡量产品的寿命

![Bx寿命定义](/weibull-images/weibull4-4.png)

- B1表示在规定的条件下，1%的产品失效的那个时间点
- B10表示10%的产品失效的那个时间点
- B0.1表示0.1%的产品失效

## 实践意义

很多时候，通过寿命试验证明达到客户的某个可靠性要求，需要的试验样本数量和试验时间都会很大，不是特别经济。关于如何减少试验样本数量和缩短试验时间，可以通过以下方法优化：

1. 采用加速寿命试验（ALT）缩短试验时间
2. 合理设计试验方案，利用历史数据（如Weibayes方法）
3. 采用序贯试验方法减少样本量

Weibull分析为产品可靠性验证提供了科学、定量的评估手段，是可靠性工程师必备的分析工具。`,category:`reliability-eval`,tags:[`Weibull分析`,`B10寿命`,`置信度`,`寿命试验`,`可靠性验证`],date:`2025-01-15`,author:`技术团队`,readTime:8,cover:`/weibull-images/weibull4-2.png`}],sa=[{id:`case-008`,title:`吉利汽车研究院FMEA&DVP管理系统项目`,company:`吉利汽车研究院（宁波）有限公司`,industry:`汽车`,problem:`吉利汽车研究院需要建立统一的FMEA&DVP管理平台，满足集团研发数字化转型需求，实现与下游供应商的协同管理。`,solution:`部署国可工软FMEA&DVP管理系统：① 定制符合吉利研发流程的FMEA模板 ② 建立DVP与FMEA的关联机制 ③ 实现研发内部与供应商的协同工作 ④ 提供数据分析和报表功能`,result:[`建立统一的FMEA&DVP管理平台`,`研发效率提升约40%`,`实现与供应商的协同管理`,`通过体系审核`],products:[`FMEA软件`],date:`2024-11`},{id:`case-009`,title:`蔚来汽车FMEA管理系统项目`,company:`蔚来汽车科技（安徽）有限公司`,industry:`新能源`,problem:`蔚来汽车作为新兴新能源汽车企业，需要建立符合AIAG-VDA标准的FMEA管理体系，提升研发质量和效率。`,solution:`部署国可工软FMEA软件：① 部署符合AIAG-VDA 2019标准的FMEA模板 ② 建立跨部门协作机制 ③ 实现措施跟踪闭环管理 ④ 提供智能化辅助功能`,result:[`建立符合国际标准的FMEA管理体系`,`FMEA分析效率显著提升`,`措施跟踪完成率达95%以上`,`通过客户审核`],products:[`FMEA软件`],date:`2024-10`},{id:`case-010`,title:`奇瑞商用车FMEA管理系统项目`,company:`奇瑞商用车（安徽）有限公司`,industry:`汽车`,problem:`奇瑞商用车需要提升FMEA分析能力，满足主机厂要求，建立系统化的质量管理流程。`,solution:`部署国可工软FMEA管理系统：① 定制符合商用车特点的FMEA模板 ② 开展FMEA专项培训 ③ 建立分析流程和评审机制 ④ 实现措施跟踪管理`,result:[`FMEA分析能力显著提升`,`通过主机厂审核`,`质量体系更加完善`,`客户满意度提高`],products:[`FMEA软件`],date:`2024-09`},{id:`case-011`,title:`赛力斯新能源汽车FMEA管理系统项目`,company:`重庆金康赛力斯新能源汽车设计有限公司`,industry:`新能源`,problem:`赛力斯作为新能源汽车企业，需要建立高效的FMEA管理体系，提升产品可靠性，满足主机厂和法规要求。`,solution:`部署国可工软FMEA软件：① 部署AIAG-VDA标准模板 ② 建立跨职能团队协作机制 ③ 实现失效模式库管理 ④ 提供智能化分析辅助`,result:[`建立完善的FMEA管理体系`,`分析效率提升约50%`,`满足主机厂合规要求`,`产品可靠性明显改善`],products:[`FMEA软件`],date:`2024-08`},{id:`case-012`,title:`富士康电子制造FMEA管理系统项目`,company:`富士康昆山电脑接插件有限公司`,industry:`电子电气`,problem:`富士康作为全球知名电子代工企业，需要建立FMEA管理能力，满足终端客户的质量要求，提升产品可靠性。`,solution:`部署国可工软FMEA管理系统：① 定制电子制造行业FMEA模板 ② 建立失效模式知识库 ③ 实现与MES系统数据对接 ④ 提供质量分析报表`,result:[`建立电子制造行业FMEA标准`,`质量问题早期识别能力提升`,`客户审核顺利通过`,`生产效率提升约30%`],products:[`FMEA软件`],date:`2024-07`},{id:`case-013`,title:`北汽研究总院FMEA管理系统项目`,company:`北京汽车研究总院有限公司`,industry:`汽车`,problem:`北京汽车研究总院需要建立统一的FMEA管理平台，提升研发质量，满足集团化和国际化发展需求。`,solution:`部署国可工软FMEA软件：① 定制符合北汽标准的FMEA模板 ② 建立集团级知识共享机制 ③ 实现多项目并行管理 ④ 提供数据分析和决策支持`,result:[`建立集团级FMEA管理平台`,`实现知识积累和复用`,`研发质量显著提升`,`通过体系认证审核`],products:[`FMEA软件`],date:`2024-06`}],ca=[{id:`fmea`,name:`FMEA Software`,category:`software`,categoryLabel:`Software`,description:`Failure Mode and Effects Analysis tool, helping identify and prevent potential failures, fully supporting AIAG-VDA FMEA standards.`,features:[`DFMEA/PFMEA/FMEA-MSR`,`AI-powered AP Calculation`,`Action Tracking`,`Auto Report Generation`],icon:`shield-check`,color:{gradient:`from-blue-50 to-indigo-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-600 to-indigo-700`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`FMEA (Failure Mode and Effects Analysis) is a systematic preventive quality analysis method that identifies potential failure modes in products or processes, evaluates their impact on the system, and implements preventive measures to reduce risks. NationRel FMEA software fully implements the AIAG-VDA 2019 standard and is one of the first FMEA tools in China to pass strict compliance verification, widely used by leading enterprises in automotive, aerospace, and electronics industries.`,scenarios:[`Risk identification during new product design (DFMEA)`,`Manufacturing and assembly process optimization (PFMEA)`,`Monitoring and System Response Analysis (FMEA-MSR)`,`IATF 16949 quality system certification compliance`,`Supply chain quality requirement transmission and collaboration`],highlights:[`Full support for AIAG-VDA 2019 Five-Step Approach: Structure → Function → Failure → Risk → Optimization`,`AI-powered AP Calculation: Built-in complete scoring tables, one-click S/O/D evaluation, automatic AP level output`,`Closed-loop Action Management: Record responsible person, deadline, status, email reminders, ensure implementation`,`Multi-module Integration: Data connectivity with SPC and MSA modules, real-time failure data correlation with Cpk`,`Professional Reports: Word/PDF format, meeting OEM submission requirements, customizable templates`],specs:[`Supported Standards: AIAG-VDA 2019, AIAG 4th Edition, IEC 60812`,`Analysis Types: DFMEA / PFMEA / FMEA-MSR`,`Data Exchange: Excel import/export, Word/PDF reports`,`Collaboration: Multi-user concurrent editing, permission control`,`Deployment: On-premise / Private cloud deployment`]}},{id:`weibull`,name:`Weibull Life Data Analysis`,category:`software`,categoryLabel:`Software`,description:`Reliability life data analysis software based on Weibull distribution, supporting multiple distribution models and statistical inference methods.`,features:[`MLE/RRX/RRY Estimation`,`Confidence Interval`,`B10 Life Prediction`,`Multi-group Comparison`],icon:`trending-up`,color:{gradient:`from-emerald-50 to-teal-50`,iconBg:`bg-emerald-100`,iconColor:`text-emerald-600`,badge:`bg-emerald-50 text-emerald-700 border-emerald-200`,accent:`text-emerald-600`,border:`hover:border-emerald-300`,shadow:`hover:shadow-emerald-100`,detailHero:`from-emerald-600 to-teal-700`,tag:`bg-emerald-50 text-emerald-700`},detail:{overview:`Weibull distribution is the most widely used life distribution model in reliability engineering, capable of describing early failure, random failure, and wear-out failure patterns. NationRel Weibull Analysis Software provides complete Weibull analysis capabilities, supporting MLE, RRX, and RRY parameter estimation methods, handling complete data, right-censored data, and interval-censored data, offering professional and intuitive analysis tools for reliability engineers.`,scenarios:[`Product reliability life assessment and B10/B50 life prediction`,`Failure data analysis and failure mode identification`,`Reliability growth test data processing`,`Warranty period and spare parts demand forecasting`,`Competing failure mode separation analysis`],highlights:[`Three parameter estimation methods: MLE, RRX/RRY (rank regression), flexible selection for small samples`,`Complete data type support: Exact failure time, right-censored, interval-censored all handled`,`Confidence interval calculation: Fisher matrix and likelihood ratio methods, recommend likelihood ratio for small samples`,`Rich reliability metrics: R(t), F(t), λ(t), MTTF, Bx life`,`Professional Weibull probability plot: Automatic confidence band, multi-group overlay comparison`],specs:[`Supported distributions: Weibull 2P/3P, Exponential, Normal/Log-normal`,`Data types: Complete / Right-censored / Interval-censored / Left-censored`,`Parameter estimation: MLE, RRX, RRY`,`Confidence intervals: Fisher Matrix / Likelihood Ratio / Bootstrap`,`Graphical output: Weibull probability plot, reliability curve, hazard curve, PDF/CDF`]}},{id:`alt`,name:`Accelerated Life Testing Analysis`,category:`software`,categoryLabel:`Software`,description:`Infer product reliability and life characteristics under normal use conditions through test data under accelerated stresses.`,features:[`Arrhenius/Power Law Models`,`Acceleration Factor Calculation`,`Normal Stress Life Prediction`,`Visual Analysis`],icon:`zap`,color:{gradient:`from-blue-50 to-cyan-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-500 to-cyan-600`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`Accelerated Life Testing (ALT) is a test method that applies stresses beyond normal operating levels (such as high temperature, high voltage, high humidity, etc.) to accelerate product failure, thereby obtaining reliability information in a shorter time. NationRel ALT Analysis Software supports commonly used acceleration models, extrapolating test data under accelerated conditions to normal use conditions, providing scientific basis for product life prediction and reliability verification.`,scenarios:[`High-temperature accelerated life assessment for electronic components`,`Electrical stress accelerated degradation analysis for insulation materials`,`Damp-heat accelerated aging research for seals`,`Product market life prediction and warranty period determination`,`Accelerated test plan design and stress level selection`],highlights:[`Arrhenius Model: Most common temperature acceleration model, automatic Ea and AF calculation`,`Inverse Power Law Model: Suitable for voltage, current, mechanical stress acceleration`,`Generalized Eyring Model: Supports multi-stress combined acceleration for complex conditions`,`Life prediction accuracy: Based on Weibull/log-normal distributions with complete confidence intervals`,`Test plan optimization: Given test time and sample size, auto-recommend optimal stress combinations`],specs:[`Acceleration models: Arrhenius, Power Law, Generalized Eyring, Temperature-Humidity`,`Life distributions: Weibull, Exponential, Normal, Lognormal`,`Stress types: Temperature, Voltage, Current, Vibration, Humidity`,`Output metrics: Acceleration factor, Bx life, Reliability, MTTF`,`Graphical output: Model fitting plot, Life-stress relationship, Weibull probability plot`]}},{id:`fta`,name:`Fault Tree Analysis (FTA)`,category:`software`,categoryLabel:`Software`,description:`Analyze system failures graphically through fault trees, qualitative and quantitative reliability and safety assessment.`,features:[`Graphical Fault Tree Construction`,`Minimal Cut Set Calculation`,`Importance Analysis`,`Monte Carlo Simulation`],icon:`git-branch`,color:{gradient:`from-indigo-50 to-blue-50`,iconBg:`bg-indigo-100`,iconColor:`text-indigo-600`,badge:`bg-indigo-50 text-indigo-700 border-indigo-200`,accent:`text-indigo-600`,border:`hover:border-indigo-300`,shadow:`hover:shadow-indigo-100`,detailHero:`from-indigo-600 to-blue-700`,tag:`bg-indigo-50 text-indigo-700`},detail:{overview:`Fault Tree Analysis (FTA) is a top-down deductive safety and reliability analysis method that uses a graphical tree structure to represent the logical relationship between top events (undesired events) and basic events (fundamental failure events). NationRel FTA Software provides intuitive graphical editing interface and powerful quantitative calculation engine, supporting complex system reliability analysis and safety assessment.`,scenarios:[`System safety analysis and hazard identification (ARP 4761)`,`Nuclear power, aerospace safety integrity level analysis`,`Complex electromechanical system reliability modeling`,`Fault diagnosis and maintenance decision support`,`Combined FMEA and FTA analysis (bi-directional tracking)`],highlights:[`Professional graphical editing: Drag-and-drop fault tree, AND/OR/NOT/VOTE gates, auto layout`,`Minimal cut set algorithm: MOCUS algorithm for precise solution, intuitive display of simplest failure combinations`,`Birnbaum/Fussell-Vesely Importance: Quantify each basic event contribution to top event, guide design optimization`,`Monte Carlo simulation: Both non-repairable and repairable systems supported, precise confidence interval estimation`,`FMEA linkage: Basic events directly linked to FMEA failure modes, maintaining analysis consistency`],specs:[`Supported gate types: AND, OR, NOT, XOR, INHIBIT, VOTE(k/n)`,`Quantitative algorithms: Exact probability, Monte Carlo simulation`,`Importance metrics: Birnbaum, Fussell-Vesely, RAW, RRW`,`Data types: Failure rate (λ), Failure probability, Test interval`,`Supported standards: IEC 61025, MIL-HDBK-1629A, ARP 4761`]}},{id:`spc`,name:`SPC (Statistical Process Control)`,category:`software`,categoryLabel:`Software`,description:`Use statistical methods to monitor and control production processes, real-time detection of process abnormalities, ensuring product quality stability.`,features:[`X-R/X-S/P/C Control Charts`,`Process Capability (Cp/Cpk)`,`Auto Out-of-Control Rules`,`Real-time Alerts`],icon:`bar-chart-2`,color:{gradient:`from-cyan-50 to-sky-50`,iconBg:`bg-cyan-100`,iconColor:`text-cyan-600`,badge:`bg-cyan-50 text-cyan-700 border-cyan-200`,accent:`text-cyan-600`,border:`hover:border-cyan-300`,shadow:`hover:shadow-cyan-100`,detailHero:`from-cyan-600 to-sky-700`,tag:`bg-cyan-50 text-cyan-700`},detail:{overview:`Statistical Process Control (SPC) is a quality management tool that uses statistical methods to monitor production processes. Through real-time collection and analysis of process data, it provides early warnings before quality problems occur, keeping the process under control. NationRel SPC Software supports multiple control chart types for continuous and discrete data, built-in Nelson/Western Electric out-of-control rules, and provides complete process capability analysis functions.`,scenarios:[`Machining, injection molding, sheet metal manufacturing dimension monitoring`,`Electronic assembly soldering quality online monitoring`,`Incoming inspection and supplier quality control`,`IATF 16949 process capability requirement compliance verification`,`Six Sigma DMAIC project process improvement`],highlights:[`Complete control chart types: Variables (X-R, X-S, I-MR) and Attributes (P, NP, C, U) fully covered`,`8 auto out-of-control rules: Nelson rules, immediate highlight and alert when abnormal points appear`,`Complete capability indices: Cp, Cpk, Pp, Ppk, Cpm, Z-value, PPM estimation, 6M analysis`,`Grouped analysis: Support stratification by operator/shift/equipment/material, quickly locate variation sources`,`Real-time data access: Excel batch import and equipment data real-time collection interface`],specs:[`Control charts: X-R, X-S, I-MR, P, NP, C, U, EWMA, CUSUM`,`Capability indices: Cp, Cpk, Pp, Ppk, Cpm`,`Out-of-control rules: Nelson 8 rules / Western Electric 4 rules`,`Data access: Excel/CSV import, OPC-UA interface, API interface`,`Deployment: Standalone / Factory network / Cloud SaaS`]}},{id:`msa`,name:`MSA (Measurement System Analysis)`,category:`software`,categoryLabel:`Software`,description:`Evaluate measurement system accuracy, stability and repeatability, ensuring reliability and validity of measurement results.`,features:[`Gage R&R Studies`,`Gage Bias Analysis`,`Attribute Agreement Analysis`,`%GR&R Calculation`],icon:`ruler`,color:{gradient:`from-rose-50 to-pink-50`,iconBg:`bg-rose-100`,iconColor:`text-rose-600`,badge:`bg-rose-50 text-rose-700 border-rose-200`,accent:`text-rose-600`,border:`hover:border-rose-300`,shadow:`hover:shadow-rose-100`,detailHero:`from-rose-500 to-pink-600`,tag:`bg-rose-50 text-rose-700`},detail:{overview:`Measurement System Analysis (MSA) is a statistical method for evaluating measurement data quality. By analyzing variation sources in the measurement system (including repeatability and reproducibility between operators), it determines whether the measurement system can meet process control requirements. NationRel MSA Software supports comprehensive analysis of both variables and attributes measurement systems, essential for IATF 16949 certification.`,scenarios:[`New gage acceptance and pre-introduction evaluation`,`Periodic calibration and verification of gages`,`Measurement system evaluation in IATF 16949 Control Plan`,`Automated inspection equipment capability verification`,`Supplier measurement system review`],highlights:[`Gage R&R Studies: Average-range and ANOVA methods, precise separation of repeatability and reproducibility`,`%GR&R evaluation: Auto "Accept/Improve/Reject" judgment, aligned with AIAG MSA manual standards`,`Bias and linearity analysis: Evaluate systematic deviation across measurement range`,`Stability analysis: Long-term monitoring of gage drift, determine calibration validity period`,`Attribute agreement: Evaluate intra-operator and inter-operator consistency for attribute measurements`],specs:[`Analysis types: Gage R&R (Average-range/ANOVA), Bias, Linearity, Stability, Attribute agreement`,`Calculation methods: Average-range method, ANOVA method`,`Evaluation metrics: %GR&R, %Repeatability, %Reproducibility, NDC, Cg/Cgk`,`Reference standards: AIAG MSA 4th Edition, VDA 5`,`Report format: Excel/Word reports with complete analysis charts`]}},{id:`doe`,name:`DOE (Design of Experiments)`,category:`software`,categoryLabel:`Software`,description:`Scientific experimental design methods to obtain maximum product optimization information with minimum experiments.`,features:[`Full/Partial Factorial Design`,`Response Surface Design`,`Taguchi Methods`,`Main & Interaction Effects Analysis`],icon:`flask-conical`,color:{gradient:`from-lime-50 to-green-50`,iconBg:`bg-lime-100`,iconColor:`text-lime-600`,badge:`bg-lime-50 text-lime-700 border-lime-200`,accent:`text-lime-600`,border:`hover:border-lime-300`,shadow:`hover:shadow-lime-100`,detailHero:`from-lime-600 to-green-700`,tag:`bg-lime-50 text-lime-700`},detail:{overview:`Design of Experiments (DOE) is a statistical method for efficiently studying multi-factor impacts on product quality through rational experimental arrangement. Compared with traditional "change one factor at a time" methods, DOE can study multiple factors and their interactions simultaneously with fewer experiments, finding optimal parameter combinations. NationRel DOE Software includes an experimental design wizard, guiding users from design type selection to ANOVA report generation.`,scenarios:[`Injection molding process parameter optimization (temperature/pressure/speed)`,`Welding process parameter screening and optimization`,`Chemical formulation composition ratio research`,`Electronic product performance factor screening`,`Six Sigma improvement stage parameter optimization (DMAIC I-phase)`],highlights:[`Design wizard: Auto-recommend optimal design based on factor count, levels, and objectives`,`Full factorial design: Complete study of all factors and interactions, suitable for 2-4 factors`,`Fractional factorial design: Carefully selected experiment subsets, significantly reduce experiments for 5-8 factors`,`Response Surface Methodology (RSM): CCD/Box-Behnken designs, quadratic model fitting, precise optimal point location`,`Taguchi orthogonal design: S/N ratio analysis, robust parameter design, reduce process variation`],specs:[`Design types: Full factorial, 2k fractional factorial, Plackett-Burman, CCD, Box-Behnken, Taguchi orthogonal`,`Analysis methods: ANOVA, regression analysis, main effects plot, interaction plots`,`Optimization: Response optimizer, genetic algorithm optimization`,`Output graphs: Main effects, interaction effects, contour plots, 3D response surface`,`Maximum factors: Up to 15 factors for screening designs`]}},{id:`rbd`,name:`RBD (Reliability Block Diagram)`,category:`software`,categoryLabel:`Software`,description:`Evaluate system-level reliability through reliability block diagram modeling, identify weak links, optimize redundancy design.`,features:[`Series/Parallel/k-of-n Structures`,`System Reliability Calculation`,`Importance Analysis`,`Spare Parts Optimization`],icon:`layout-dashboard`,color:{gradient:`from-sky-50 to-blue-50`,iconBg:`bg-sky-100`,iconColor:`text-sky-600`,badge:`bg-sky-50 text-sky-700 border-sky-200`,accent:`text-sky-600`,border:`hover:border-sky-300`,shadow:`hover:shadow-sky-100`,detailHero:`from-sky-500 to-blue-600`,tag:`bg-sky-50 text-sky-700`},detail:{overview:`Reliability Block Diagram (RBD) is an analytical tool that represents the logical reliability relationships between system components graphically. Complementing Fault Tree Analysis (FTA), RBD uses a bottom-up approach, decomposing systems into series, parallel, and composite structures to calculate overall system reliability, serving as a core tool for system-level reliability design and assessment.`,scenarios:[`Complex system reliability modeling and system MTBF/MTTF prediction`,`Redundancy design scheme evaluation and optimization`,`System weak link identification and reliability allocation`,`Maintenance strategy development and spare parts planning`,`System availability (Availability) simulation analysis`],highlights:[`Graphical modeling: Drag-and-drop RBD construction, series/parallel/k-of-n/bridge structures fully supported`,`Precise system reliability calculation: Based on analytical and Monte Carlo methods, supports repairable systems`,`Importance analysis: Identify components with greatest contribution to system reliability, guide key improvements`,`Availability simulation: Consider maintenance time and strategies, calculate system steady-state availability`,`Spare parts optimization: Calculate optimal spare inventory based on Poisson distribution, reduce inventory costs`],specs:[`Structure types: Series, parallel, k-of-n voting, bridge, load sharing`,`Calculation methods: Exact analytical, Monte Carlo simulation`,`Reliability metrics: System reliability, MTBF, MTTF, Availability (A)`,`Maintenance models: Exponential, Weibull, Lognormal`,`Importance metrics: Birnbaum, Criticality, Fussell-Vesely`]}},{id:`reliability-prediction`,name:`Reliability Prediction`,category:`software`,categoryLabel:`Software`,description:`Predict product failure rates based on component database, supporting MIL-HDBK-217, GJB/Z 299 and other standards.`,features:[`Component Database`,`MIL-217/GJB299 Standards`,`Temperature Derating Analysis`,`System MTBF Prediction`],icon:`calculator`,color:{gradient:`from-blue-50 to-indigo-50`,iconBg:`bg-blue-100`,iconColor:`text-blue-600`,badge:`bg-blue-50 text-blue-700 border-blue-200`,accent:`text-blue-600`,border:`hover:border-blue-300`,shadow:`hover:shadow-blue-100`,detailHero:`from-blue-500 to-indigo-600`,tag:`bg-blue-50 text-blue-700`},detail:{overview:`Reliability prediction is a method to predict product or system failure rate (λ) and Mean Time Between Failures (MTBF) based on component inherent reliability data and working stress conditions during product design. NationRel Reliability Prediction Software V3.0 has a 100,000+ component database, fully supporting MIL-HDBK-217F, GJB/Z 299C/D and other military/civilian standards, with AI-assisted component identification features that significantly improve prediction efficiency.`,scenarios:[`Military electronic equipment MTBF demonstration and verification`,`Aviation airborne equipment reliability prediction (GJB/Z 299)`,`Industrial control equipment failure rate analysis (MIL-217)`,`Product temperature derating design analysis`,`Reliability growth plan baseline data establishment`],highlights:[`100,000+ component database: Covering resistors, capacitors, ICs, connectors, power modules, etc., including domestic substitute brands`,`AI-assisted BOM matching: Upload Excel BOM, AI auto-matches components, reducing manual matching work by 70%`,`Multi-standard parallel calculation: Same BOM supports MIL-217 and GJB 299 simultaneous calculation with result comparison`,`Temperature derating analysis: Component operating temperature vs derating curve, identify thermal design risks`,`System MTBF summary: From components to modules to systems, hierarchical failure rate aggregation, professional prediction reports`],specs:[`Supported standards: MIL-HDBK-217F Notice2, GJB/Z 299C, GJB/Z 299D, Bellcore/Telcordia`,`Component database: 100,000+ entries, including domestic brands`,`Calculation methods: Parts count method, Parts stress analysis method`,`Environment categories: GB, GF, AIA, AIF, AUC, UNS, ARW, SF, MF and all environments`,`Report format: Word/Excel with component details and system summary`]}},{id:`lims`,name:`LIMS (Laboratory Information Management)`,category:`consulting`,categoryLabel:`Consulting`,description:`Laboratory information management system for full-process digital management of samples, experiments, data and reports.`,features:[`Full Sample Tracking`,`Experiment Data Collection`,`Quality Control`,`Compliance Management`],icon:`flask-conical`,color:{gradient:`from-teal-50 to-emerald-50`,iconBg:`bg-teal-100`,iconColor:`text-teal-600`,badge:`bg-teal-50 text-teal-700 border-teal-200`,accent:`text-teal-600`,border:`hover:border-teal-300`,shadow:`hover:shadow-teal-100`,detailHero:`from-teal-600 to-emerald-700`,tag:`bg-teal-50 text-teal-700`},detail:{overview:`LIMS (Laboratory Information Management System) is a comprehensive information management platform designed for laboratories, covering full-process digital management from sample receiving, testing experiments to data management and report output. The system fully complies with ISO/IEC 17025 laboratory accreditation requirements, supports direct connection to testing equipment, eliminating manual recording errors and improving laboratory management standardization and testing efficiency.`,scenarios:[`Physical and chemical testing laboratory process management`,`ISO/IEC 17025 laboratory accreditation compliance management`,`Enterprise centralized testing laboratory management`,`Third-party testing institution testing business digitization`,`Reliability test data management and traceability`],highlights:[`Full sample lifecycle tracking: Barcode/RFID tracking, complete records from receiving, assignment to report issuance`,`Direct instrument connection: Support mainstream testing equipment data collection, eliminate manual recording errors`,`Quality control management: Built-in QC sample management, control chart monitoring of testing quality stability`,`Compliance management: Audit trail, electronic signatures, version control, meeting 17025 requirements`,`Auto report generation: Auto-generate test reports based on templates, support electronic signatures`],specs:[`Reference standards: ISO/IEC 17025, GMP, GLP`,`Interface support: RS-232, TCP/IP direct equipment connection`,`Deployment: Local server / Private cloud`,`Integration: ERP, QMS, MES system interfaces`,`Data security: Permission control, complete audit trail, data backup`]}},{id:`mes`,name:`MES (Manufacturing Execution System)`,category:`consulting`,categoryLabel:`Consulting`,description:`Connect planning layer and control layer with real-time monitoring and refined management of production processes.`,features:[`Production Scheduling`,`Online Quality Inspection`,`Equipment Status Monitoring`,`Traceability & Reports`],icon:`factory`,color:{gradient:`from-slate-50 to-gray-50`,iconBg:`bg-slate-100`,iconColor:`text-slate-600`,badge:`bg-slate-50 text-slate-700 border-slate-200`,accent:`text-slate-600`,border:`hover:border-slate-300`,shadow:`hover:shadow-slate-100`,detailHero:`from-slate-600 to-gray-700`,tag:`bg-slate-50 text-slate-700`},detail:{overview:`MES (Manufacturing Execution System) is the middle layer connecting upper ERP planning systems and lower equipment control systems, implementing real-time monitoring and refined management of manufacturing sites. The system covers core businesses including work order scheduling, process flow, quality inspection, equipment management and material tracking, helping enterprises achieve transparency, digitization and intelligence in manufacturing processes.`,scenarios:[`Refined management of discrete manufacturing production processes`,`Automotive parts manufacturing quality traceability management`,`Electronic manufacturing SMT line real-time monitoring`,`IATF 16949 production process records and traceability compliance`,`Lean production improvement and OEE improvement projects`],highlights:[`Production scheduling: Auto work order dispatch, real-time process flow tracking, dynamic WIP updates`,`Online quality inspection: Key process first-piece/routine/final inspection, real-time inspection result recording, auto NCR blocking`,`Equipment OEE monitoring: Real-time equipment operation status collection, auto OEE calculation, downtime analysis`,`Forward and reverse traceability: From finished product to raw material batches, or from material to all related finished products`,`Report center: Daily production reports, quality reports, equipment reports, customizable report configuration`],specs:[`Functional modules: Work order, process flow, quality management, equipment management, material management, traceability, reports`,`Applicable industries: Discrete manufacturing, automotive parts, electronics manufacturing, defense`,`Integration interfaces: ERP (SAP/UFIDA/Kingdee), PLC/SCADA, WMS`,`Deployment: Private on-premise deployment`,`Data collection: Manual entry, scan/RFID, equipment auto collection`]}},{id:`qms`,name:`QMS (Quality Management System)`,category:`consulting`,categoryLabel:`Consulting`,description:`Digital system covering full enterprise quality management process, supporting ISO 9001, IATF 16949 and other standards.`,features:[`Document & Record Management`,`Nonconforming Product Management`,`Audit Management`,`Continuous Improvement PDCA`],icon:`clipboard-check`,color:{gradient:`from-indigo-50 to-blue-50`,iconBg:`bg-indigo-100`,iconColor:`text-indigo-600`,badge:`bg-indigo-50 text-indigo-700 border-indigo-200`,accent:`text-indigo-600`,border:`hover:border-indigo-300`,shadow:`hover:shadow-indigo-100`,detailHero:`from-indigo-600 to-blue-700`,tag:`bg-indigo-50 text-indigo-700`},detail:{overview:`QMS (Quality Management System) is a digital management platform helping enterprises establish and operate ISO 9001/IATF 16949 quality management systems. The system covers four major quality activities: quality planning, quality control, quality assurance and quality improvement. Through modules like document management, process monitoring, audit management and continuous improvement, it promotes enterprise quality management system from "paper certification" to "real implementation".`,scenarios:[`ISO 9001 / IATF 16949 quality management system establishment and maintenance`,`Electronic quality document and record management`,`Customer complaint and 8D report management`,`Internal/external audit management and corrective action tracking`,`Supplier quality management and performance evaluation`],highlights:[`Document control: Document version management, approval workflows, controlled distribution, prevent use of expired documents`,`Nonconforming product management: Scrap/rework/concession full process, 8D report templates, root cause analysis`,`Audit management: Internal audit plans, checklists, findings management, corrective action deadline tracking`,`Supplier management: Supplier certification, performance rating, periodic reviews, dynamic update of approved supplier list`,`Continuous improvement: PDCA improvement proposal management, quantified improvement tracking, knowledge base accumulation`],specs:[`Supported standards: ISO 9001:2015, IATF 16949:2016, ISO 14001, OHSAS 18001`,`Core modules: Document, nonconforming product, audit management, corrective prevention, supplier management, customer complaints`,`Workflow engine: Configurable approval workflows, support serial/parallel/conditional branching`,`Integration interfaces: ERP, MES data connectivity`,`Deployment: SaaS cloud / Private on-premise deployment`]}},{id:`env-chamber`,name:`Environmental Test Chamber`,category:`technology`,categoryLabel:`Technology Services`,description:`Temperature, humidity, vibration, salt spray and other environmental stress testing equipment for product reliability verification.`,features:[`Temperature & Humidity Chamber`,`Vibration Test System`,`Salt Spray Chamber`,`IP Protection Testing`],icon:`thermometer`,color:{gradient:`from-sky-50 to-blue-50`,iconBg:`bg-sky-100`,iconColor:`text-sky-600`,badge:`bg-sky-50 text-sky-700 border-sky-200`,accent:`text-sky-600`,border:`hover:border-sky-300`,shadow:`hover:shadow-sky-100`,detailHero:`from-sky-500 to-blue-600`,tag:`bg-sky-50 text-sky-700`},detail:{overview:`NationRel partners with top domestic environmental test equipment manufacturers to provide various environmental stress testing equipment covering temperature, humidity, vibration, salt spray, protection levels and more. These equipment are core hardware support for product reliability verification and IEC/military environmental adaptability testing, combining with NationRel analysis software to form complete "hardware testing + data analysis" solutions.`,scenarios:[`Product high/low temperature, temperature-humidity cyclic testing (IEC 60068)`,`Electronic product protection level (IP) testing verification`,`Equipment vibration and shock testing (GJB 150A)`,`Metal parts salt spray corrosion testing`,`Automotive parts environmental adaptability verification`],highlights:[`Temperature & humidity chamber: -70°C to +180°C wide range, ±0.5°C accuracy, multiple volume options`,`Vibration test system: Electrodynamic vibration system, 2Hz-3000Hz frequency range, random and sine sweep supported`,`Salt spray chamber: NSS/ASS/CASS, compliant with GB/T 2423.17`,`IP protection testing: IP1X~IP6X dust, IPX1~IPX8 water resistance full-level testing capability`,`Data recording system: Real-time test parameter recording, seamless connection with reliability analysis software`],specs:[`Temperature/humidity chamber: -70~+180°C, humidity 10%~98%RH`,`Vibration system: Thrust 100kgf~2000kgf multiple specs, frequency 2~3000Hz`,`Salt spray chamber: Volume 108L~1000L, compliant with GB/T 2423.17/IEC 60068-2-11`,`Test standards: IEC 60068 series, GB/T 2423 series, GJB 150A, MIL-STD-810`,`Service: Equipment sales / rental / third-party testing outsourcing`]}},{id:`halt`,name:`HALT (Highly Accelerated Life Test)`,category:`technology`,categoryLabel:`Technology Services`,description:`Rapidly excite potential product defects, significantly shorten reliability verification cycle, improve product design reliability.`,features:[`Six-DOF Vibration`,`Rapid Temperature Cycling`,`Combined Stress Loading`,`HASS Screening`],icon:`activity`,color:{gradient:`from-purple-50 to-fuchsia-50`,iconBg:`bg-purple-100`,iconColor:`text-purple-600`,badge:`bg-purple-50 text-purple-700 border-purple-200`,accent:`text-purple-600`,border:`hover:border-purple-300`,shadow:`hover:shadow-purple-100`,detailHero:`from-purple-600 to-fuchsia-700`,tag:`bg-purple-50 text-purple-700`},detail:{overview:`HALT (Highly Accelerated Life Testing) is a test technology that rapidly excites potential product defects by applying extreme stresses far beyond product specifications (temperature change rates and vibration levels beyond design margins). Compared with traditional reliability testing, HALT can complete months of equivalent testing in just a few days, significantly shortening product R&D verification cycles and helping engineers discover and eliminate design and process defects before mass production.`,scenarios:[`Design margin exploration in new product R&D stage`,`Rapid reliability impact assessment after process improvement`,`Pre-shipment HASS (Highly Accelerated Stress Screening) for mass production`,`Rapid reliability gap identification vs competitors`,`Rapid reliability evaluation of supplier components`],highlights:[`Six-DOF pneumatic vibration: X/Y/Z triaxial translation plus triaxial rotation simultaneous excitation, much higher efficiency than single-axis vibration tables`,`Ultra-rapid temperature cycling: Up to 60°C/min temperature change rate, complete wide temperature cycles in extremely short time`,`Combined stress superposition: Simultaneous temperature cycling and six-DOF vibration, maximize stress excitation effect`,`HASS screening plan: Develop HASS conditions based on HALT results, 100% screening at mass production shipment`,`Defect excitation efficiency: Typical HALT can excite failure modes equivalent to 3-5 years of field use`],specs:[`Temperature range: -100°C~+200°C`,`Temperature change rate: ≥60°C/min (typical)`,`Vibration type: Pneumatic six-DOF random vibration`,`Combined stress: Temperature + vibration simultaneous application`,`Work surfaces: Common sizes 305×305mm, 460×460mm`]}},{id:`phm`,name:`PHM Equipment`,category:`technology`,categoryLabel:`Technology Services`,description:`Prognostics and Health Management equipment for equipment fault prediction and health status assessment through sensors and algorithms.`,features:[`Multi-parameter Sensing`,`Condition Monitoring & Alerts`,`Remaining Useful Life Prediction`,`Maintenance Decision Support`],icon:`heart-pulse`,color:{gradient:`from-cyan-50 to-sky-50`,iconBg:`bg-cyan-100`,iconColor:`text-cyan-600`,badge:`bg-cyan-50 text-cyan-700 border-cyan-200`,accent:`text-cyan-600`,border:`hover:border-cyan-300`,shadow:`hover:shadow-cyan-100`,detailHero:`from-cyan-500 to-sky-600`,tag:`bg-cyan-50 text-cyan-700`},detail:{overview:`PHM (Prognostics and Health Management) equipment continuously collects operating data such as vibration, temperature, current, and pressure by deploying sensors on critical equipment. Combined with condition monitoring algorithms and machine learning models, it enables real-time equipment health assessment and early fault prediction, transforming traditional "breakdown maintenance" to "predictive maintenance", significantly reducing unplanned downtime losses.`,scenarios:[`Rotating machinery (motors, pumps, compressors) health monitoring`,`CNC machine spindle bearing condition monitoring`,`Wind turbine drivetrain health management`,`Production line critical equipment predictive maintenance planning`,`Military equipment PHM`],highlights:[`Multi-source sensor fusion: Vibration (acceleration), temperature, current, pressure, acoustic emission multi-parameter synchronous collection`,`Feature extraction and diagnosis: Time domain, frequency domain, time-frequency domain features, identify typical failure modes like bearing and gear`,`Remaining Useful Life (RUL) prediction: Based on degradation models and ML algorithms, output RUL confidence interval`,`Health Index (HI): Comprehensive multi-dimensional features generate 0-100 health score, intuitive equipment health trend display`,`Maintenance decision support: Auto-generate maintenance suggestions and spare parts requirements based on prediction results`],specs:[`Sampling frequency: Vibration sensor up to 51.2kHz`,`Communication: Wired (RS-485/Ethernet) / Wireless (4G/WiFi)`,`Protection level: IP67`,`Algorithm models: SPC, ML (Random Forest/LSTM), physics-based models`,`Integration: Local edge computing / Cloud analytics platform`]}},{id:`env-lab`,name:`Environmental Lab / Failure Analysis`,category:`technology`,categoryLabel:`Technology Services`,description:`Professional environmental testing lab services and failure analysis services to help enterprises quickly locate root causes of product failures.`,features:[`Third-party Environmental Testing`,`Failure Mode Analysis`,`SEM/EDS Microanalysis`,`Reliability Assessment Reports`],icon:`microscope`,color:{gradient:`from-fuchsia-50 to-violet-50`,iconBg:`bg-fuchsia-100`,iconColor:`text-fuchsia-600`,badge:`bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200`,accent:`text-fuchsia-600`,border:`hover:border-fuchsia-300`,shadow:`hover:shadow-fuchsia-100`,detailHero:`from-fuchsia-600 to-violet-700`,tag:`bg-fuchsia-50 text-fuchsia-700`},detail:{overview:`NationRel partners with authoritative third-party laboratories to provide professional environmental testing outsourcing and product failure analysis services for customers. With advanced testing equipment and experienced reliability engineering teams, we help enterprises quickly complete reliability verification tests and conduct in-depth failure mechanism analysis on failed samples, providing professional failure analysis reports for direct product improvement guidance.`,scenarios:[`New product reliability qualification testing before mass production`,`Field failure return sample root cause analysis`,`Third-party testing evidence collection for quality disputes`,`Supplier incoming failure analysis support`,`Product reliability assessment and life evaluation`],highlights:[`Multi-category environmental testing: Temperature cycling, humidity, vibration, shock, salt spray, compliant with IEC, GJB, AEC-Q series standards`,`Electrical failure analysis: ICT test, X-Ray inspection, cold/hot opens-short location, quickly lock failure area`,`Material microanalysis: SEM scanning electron microscope + EDS energy dispersive spectroscopy, micron-level morphology and composition analysis`,`Cross-section/grinding analysis: PCB/solder joint cross-section analysis, identify cold solder, voids, delamination and other process defects`,`Professional failure analysis reports: Failure phenomenon → failure mechanism → root cause → improvement suggestions, complete logic`],specs:[`Testing capability: Temp-humidity cycling, vibration shock, salt spray, HALT/HASS, IP protection`,`Analysis methods: SEM, EDS, X-Ray, FIB, FTIR, ICP-MS`,`Service standards: IEC 60068, GJB 150A, AEC-Q series`,`Reports: CNAS accredited laboratory reports (partial items)`,`Cycle: Standard service 5-15 working days, expedited service can be shortened to 3 working days`]}},{id:`qfd`,name:`QFD (Quality Function Deployment)`,category:`software`,categoryLabel:`Software`,description:`Transform customer requirements into technical specifications through House of Quality, driving product planning and design decisions.`,features:[`House of Quality`,`Requirement Cascade`,`Competitive Analysis`,`Target Setting`],icon:`home`,color:{gradient:`from-amber-50 to-orange-50`,iconBg:`bg-amber-100`,iconColor:`text-amber-600`,badge:`bg-amber-50 text-amber-700 border-amber-200`,accent:`text-amber-600`,border:`hover:border-amber-300`,shadow:`hover:shadow-amber-100`,detailHero:`from-amber-500 to-orange-600`,tag:`bg-amber-50 text-amber-700`},detail:{overview:`QFD (Quality Function Deployment) is a systematic methodology that transforms market and customer requirements into product design specifications, process parameters, and manufacturing standards. Its core tool, the "House of Quality," visually displays the relationship between customer needs and technical characteristics through an intuitive matrix, helping enterprises make customer-centric decisions in product design and enhance product competitiveness from the source.`,scenarios:[`Customer requirement research and analysis in early new product development`,`Technical specification decomposition and target setting during product planning`,`Competitive analysis during design review phase`,`Cross-department collaboration and requirement transmission (Marketing-R&D-Manufacturing)`,`Supplier quality target decomposition and control`],highlights:[`Visual House of Quality: Intuitive "Roof-Left Wall-Right Wall-Room" structure, clearly showing requirement-characteristic relationships`,`Quantitative Requirement Analysis: Supports Analytic Hierarchy Process (AHP), converting qualitative requirements to weighted priorities`,`Correlation Matrix Construction: Automatically calculates correlation strength, using colors to distinguish positive/negative and strong/weak correlations`,`Competitive Benchmarking: Compare with competitors, intuitively showing competitive advantages and gaps in each technical indicator`,`Multi-level Deployment: From House of Quality to part deployment, process planning, and production planning, information progressively refined`],specs:[`House of Quality Elements: Customer requirements, Technical characteristics, Relationship matrix, Roof correlation matrix, Competitive assessment, Target values`,`Analysis Methods: Analytic Hierarchy Process (AHP), Principal Component Analysis (PCA)`,`Deployment Models: Product planning matrix, Part deployment, Process planning, Production planning`,`Collaboration: Multi-user co-editing, Version management`,`Report Output: Word/PDF House of Quality reports`]}},{id:`degradation`,name:`Degradation Data Analysis`,category:`software`,categoryLabel:`Software`,description:`Reliability analysis software based on performance degradation data, tracking product performance trends over time and predicting failure time.`,features:[`Degradation Modeling`,`Threshold Failure Analysis`,`RUL Prediction`,`Degradation Data Management`],icon:`trending-down`,color:{gradient:`from-rose-50 to-pink-50`,iconBg:`bg-rose-100`,iconColor:`text-rose-600`,badge:`bg-rose-50 text-rose-700 border-rose-200`,accent:`text-rose-600`,border:`hover:border-rose-300`,shadow:`hover:shadow-rose-100`,detailHero:`from-rose-500 to-pink-600`,tag:`bg-rose-50 text-rose-700`},detail:{overview:`For many products, performance degradation precedes functional failure. By regularly measuring key performance parameters and analyzing their degradation trends, remaining useful life (RUL) can be predicted before functional failure occurs. NationRel Degradation Data Analysis software supports multiple degradation models and handles linear degradation, nonlinear degradation, and random degradation patterns, providing scientific basis for predictive maintenance and life extension management.`,scenarios:[`Electronic component parameter drift analysis (transistor gain, leakage current, etc.)`,`Battery capacity fade assessment and remaining life prediction`,`Mechanical component wear degradation analysis`,`Bearing and gear degradation monitoring`,`Composite/polymer material aging performance evaluation`],highlights:[`Multiple Model Support: Linear degradation model, nonlinear degradation models (exponential/power law), random effects degradation models`,`Virtual Sample Expansion: Generate large amounts of virtual samples from limited measured degradation data, improving statistical confidence`,`Threshold Failure Analysis: Automatically determines failure when performance degrades to preset threshold, outputs time-to-failure distribution`,`Remaining Life Prediction (RUL): Outputs RUL point estimates and confidence intervals, supports probability distribution expression`,`PHM Integration: Can import sensor real-time monitoring data for online degradation tracking and life prediction`],specs:[`Degradation Models: Linear, Exponential, Power law, Logarithmic, Custom nonlinear`,`Parameter Estimation: Least squares method, Bayesian estimation`,`Data Types: Periodic measurement degradation data, Non-periodic measurement degradation data, Noisy degradation data`,`Output Indicators: Remaining life distribution, Reliability function, Failure rate function`,`Integration: Compatible with Weibull analysis, PHM equipment data interface`]}},{id:`reliability-growth`,name:`Reliability Growth Analysis`,category:`software`,categoryLabel:`Software`,description:`Track reliability improvement trends during product R&D and testing, quantitatively analyze improvement effects, guide reliability iteration.`,features:[`Duane Model Analysis`,`Crow-AMSAA Model`,`Growth Rate Calculation`,`Improvement Assessment`],icon:`trending-up`,color:{gradient:`from-green-50 to-emerald-50`,iconBg:`bg-green-100`,iconColor:`text-green-600`,badge:`bg-green-50 text-green-700 border-green-200`,accent:`text-green-600`,border:`hover:border-green-300`,shadow:`hover:shadow-green-100`,detailHero:`from-green-500 to-emerald-600`,tag:`bg-green-50 text-green-700`},detail:{overview:`Reliability growth refers to the continuous improvement of product reliability level through design improvements and elimination of systematic defects. Tracking and analyzing reliability growth trends is one of the core tasks of R&D project reliability management. NationRel Reliability Growth Analysis software supports Duane model and Crow-AMSAA model, enabling quantitative reliability growth rate analysis, future reliability level prediction, and evaluation of improvement measure effectiveness based on test failure data.`,scenarios:[`Military product reliability growth test management (GJB 899A)`,`Reliability tracking and evaluation during new product R&D`,`Design improvement effectiveness verification`,`R&D project reliability compliance prediction`,`Reliability finalization assessment before mass production`],highlights:[`Duane Model: Graphical reliability growth analysis, intuitive MTBF growth trend display, ideal growth line support`,`Crow-AMSAA Model: Continuous time/discrete time NHPP models, suitable for variable test intensity scenarios`,`Growth Rate Quantification: Automatically calculates reliability growth rate β and characteristic life λ, predicts future MTBF`,`Improvement Effectiveness Assessment: Compares pre/post-improvement failure intervals, quantitatively evaluates improvement effectiveness`,`Test Planning: Calculates required test time based on target MTBF, guides test resource allocation`],specs:[`Analysis Models: Duane model, Crow-AMSAA (NHPP), Variable intensity model`,`Data Types: Time censored, Failure censored, Mixed censored`,`Output Indicators: MTBF growth trend, Growth rate β, Characteristic life λ, 95% confidence interval`,`Standard Compliance: GJB 899A, MIL-STD-1631`,`Report Functions: Reliability growth curve, Failure time distribution chart, Improvement effectiveness report`]}},{id:`rcm`,name:`RCM (Reliability-Centered Maintenance)`,category:`software`,categoryLabel:`Software`,description:`Reliability-based maintenance strategy optimization tool, analyzes equipment failure mechanisms, develops preventive maintenance plans.`,features:[`FMECA Analysis`,`Maintenance Task Screening`,`Interval Optimization`,`Spare Parts Planning`],icon:`wrench`,color:{gradient:`from-violet-50 to-purple-50`,iconBg:`bg-violet-100`,iconColor:`text-violet-600`,badge:`bg-violet-50 text-violet-700 border-violet-200`,accent:`text-violet-600`,border:`hover:border-violet-300`,shadow:`hover:shadow-violet-100`,detailHero:`from-violet-500 to-purple-600`,tag:`bg-violet-50 text-violet-700`},detail:{overview:`RCM (Reliability-Centered Maintenance) is a systematic maintenance decision-making framework that determines the most appropriate maintenance strategy (preventive maintenance, condition-based maintenance, corrective maintenance, or redesign) by analyzing equipment functions, failure modes, and failure consequences. NationRel RCM software combines FMECA analysis with maintenance strategy decisions, helping enterprises transition from "mandatory maintenance" to "risk-based precision maintenance," reducing maintenance costs while ensuring equipment reliability.`,scenarios:[`Preventive maintenance strategy development for critical equipment`,`Maintenance interval optimization and resource planning`,`Spare parts inventory optimization and procurement planning`,`Equipment lifecycle maintenance cost analysis`,`Outsourced maintenance service plan development and evaluation`],highlights:[`System-level Analysis: Decompose from equipment → subsystem → component → part, establish complete FMECA archive`,`Failure Mechanism Identification: Distinguish between wear failure, fatigue failure, overload failure, etc., address root causes`,`Maintenance Task Screening: Screen suitable preventive maintenance task types based on failure consequence severity and economics`,`Interval Optimization Calculation: Calculate optimal maintenance intervals based on reliability models, balancing maintenance cost and failure risk`,`Spare Parts Demand Prediction: Combined with failure rate and maintenance intervals, output spare parts inventory recommendations and safety stock levels`],specs:[`Analysis Depth: Equipment-level, System-level, Component-level FMECA`,`Maintenance Strategy Types: Time-based preventive maintenance, Condition-based maintenance, Corrective maintenance, Redesign`,`Optimization Algorithms: Equal interval optimization, Variable interval optimization, Reliability constraint optimization`,`Integration: FMEA module collaboration, PHM system data interface`,`Report Output: RCM analysis report, Maintenance plan, Spare parts list`]}}],la=[{id:`6`,title:`Say Goodbye to Manual Excel Filling! NationRel AI FMEA Generates Seven-Step Structured Data at Multiple Times the Speed`,summary:`Following the release of the "Guojiang Smart" large model, NationRel officially launched AI FMEA, opening a new era of "intelligent leap" in quality risk analysis. It generates new Seven-Step structured FMEA in extremely short time, strictly aligned with international mainstream standards.`,content:`Introduction

"Say goodbye to manual Excel filling! NationRel AI FMEA generates structured Seven-Step data at multiple times the speed, significantly improving risk identification capabilities."

Following the release of the "Guojiang Smart" large model, NationRel's technical team continues to explore AI application value, striving for technological breakthroughs and innovative applications in the reliability field.

Recently, NationRel officially launched AI FMEA, opening a new era of "intelligent leap" in quality risk analysis. NationRel AI FMEA can generate new Seven-Step structured FMEA in extremely short time, strictly aligned with international mainstream standards; structured data can directly connect to PLM/MES, with failure chains automatically linking design, process, and test data; relying on a million-level industry knowledge base, it accurately identifies potential risks, with extremely high AI-recommended measures compliance rate, significantly improving product R&D and process improvement efficiency and quality, setting a new benchmark for industrial software intelligence development!


01
Efficiency Innovation
From "Man-Days" to "Minutes", Unleashing Productivity

Traditional FMEA Pain Points

•DFMEA: A complex system analysis typically requires months of investment, with thousands of items to fill in; additionally, version confusion leads to very high rework rates.

•PFMEA: After process changes, updating PFMEA requires several rounds of meetings, cross-departmental alignment taking weeks or even months, and even then, potential failures may still be missed.

AI FMEA Solutions

•Features 1 & 2: One-click Seven-Step table generation, input name, get table instantly:

•DFMEA: Automatically links BOM structure, functional requirements, historical failure cases, auto-generates functions, failures, measures and other content, with complete tables including S/O/D scoring.

![DFMEA One-Click Seven-Step Table](/news-images/ai-fmea/image1.GIF)

•PFMEA: Synchronizes process flow diagrams, AI can accurately identify high-risk processes (such as "insufficient adhesive thickness"), and prioritize control measures. Also ensures consistency with control plans.

![PFMEA Auto-Generation](/news-images/ai-fmea/image2.GIF)

•Features 3 & 4: Structured data breaks through system silos

•DFMEA Structured Output: Structural tree automatically links BOM model, function network directly connects to simulation verification platform, failure network can alert test department key monitoring items.

![DFMEA Structured Output](/news-images/ai-fmea/image4.GIF)

•PFMEA System Integration: Process data connects to MES for real-time monitoring, AI can dynamically warn of process parameter drift risks.

![PFMEA System Integration](/news-images/ai-fmea/image5.GIF)

•Value Summary: Achieve "multiple times efficiency + zero-threshold operation", new engineers can also output expert-level FMEA with AI assistance.


02
Precision Improvement
Million-Level Knowledge Base + Intelligent Reasoning, Leaving No Risk Undetected

Traditional Blind Spots

•Traditional Bottleneck: Manual analysis can only cover part of common failures, easily missing secondary supply chain failures (such as "separator burrs causing cell micro-short circuits").

•Traditional Shortcoming: Excel tables cannot link real-time data (such as production line SPC data, test track durability testing).

•Traditional Pain Point: Manually recommended control measures lack quantitative verification.


Technical Breakthroughs

•Industry Knowledge Base Covers 30+ Domains:

•Automotive: Covers a large number of standard failure modes for electric powertrain, chassis, autonomous driving, etc.

•Electronics: Contains numerous hidden defect data for PCBA processes, chip packaging, etc.

•Medical: Specialized training for high-risk regulatory items such as sterile packaging, biocompatibility, etc.

•Failure Chain Intelligent Reasoning:

•Input "automotive camera module", AI automatically constructs "lens distortion → image recognition delay → AEB false trigger" cross-system failure chain, and recommends optical calibration + algorithm redundancy solutions.

•Data Support: AI risk identification coverage significantly improved, a Tier1 enterprise discovered multiple manually missed EMC interference risks with AI assistance.

•Function Chain Intelligent Reasoning:

•Input "automotive radar system", AI intelligently constructs "obstacle detection → point cloud fusion → lane change decision → actuator response" cross-domain function chain, and recommends multi-radar timing optimization + decision logic enhancement solutions.

•Data Support: AI achieves significantly improved function chain analysis efficiency, an OEM restructured signal transmission links through AI, significantly improving target correlation accuracy, successfully avoiding redundant computing power investment.

•Intelligent Chain Breakthrough:

•MES/PLM Data Integration: AI dynamically monitors process parameter changes, triggering automatic PFMEA updates.

•Predictive Maintenance: Predicts potential failures through equipment IoT data (such as "stamping die wear causing sheet metal cracking risk increase").


03
Long-Term Value
Data Asset Accumulation, Driving Enterprise Quality System Evolution

Traditional Drawbacks

•Excel tables are stored in isolation, historical data cannot be reused, new projects can only repeat "starting from scratch".

•Expert experience is interrupted with personnel turnover, new employee training cycle up to 6 months.


Knowledge Loop

•Enterprise Exclusive Knowledge Base:

•AI automatically archives all project DFMEA/PFMEA data, forming a searchable risk database.

•New projects input similar part names, automatically recommend historical control measures, high reuse rate.

•Compliance and Traceability:

•Built-in logic conforming to requirements of multiple industry standards including automotive, electronic appliances, aerospace, etc., AI automatically labels high-risk regulatory items.

•Version modification records are fully auditable, meeting audit requirements.


04
Reasons to Choose NationRel AI FMEA

▪Dual-Model Drive: DeepSeek + Guojiang Smart vertical model specifically trained for reliability, with failure mode granularity refined to "sensor solder joint virtual soldering" level.

▪Efficiency Innovation: Transforming from "human brain + Excel" to "AI + structured data", analysis cycle shortened from days to minutes.

▪Accurate Risk Avoidance: Trained on million-level failure case library, AI-recommended measures cover extensive industry best practices.

▪Flexible Collaboration: Supports team online editing, version comparison, automatic archival and traceability of historical data.

▪Continuous Evolution: AI model dynamically optimizes with user feedback, becoming more tailored to your business scenario with use.

Summary

AI FMEA does not replace engineers, but enables experts to focus more on high-risk decision-making. Embrace change immediately, and use AI to push cross-functional teams from "inefficient manual" to "intelligent analysis" era!

*Experience the "intelligent leap" of Guojiang Smart quality risk analysis. Welcome to visit our official website to register for a trial account, or contact our sales team to schedule a demonstration, and experience the innovative value of AI empowerment firsthand!*`,date:`2026-04-09`,category:`news`,published:!0,author:`Product Team`,coverImage:`/news-images/ai-fmea/image1.GIF`},{id:`1`,title:`NationRel FMEA Software Passes AIAG-VDA 2019 Standard Certification`,summary:`Our self-developed FMEA software now fully supports AIAG-VDA 2019 standard and has passed strict third-party compliance verification, becoming one of the first certified tools in China.`,content:`NationRel (Suzhou) Technology Co., Ltd.'s self-developed FMEA software has recently passed third-party compliance verification for the AIAG-VDA 2019 standard, marking another significant step forward for our company in the quality reliability tool software field.

**Background**

The AIAG-VDA FMEA handbook was jointly released by the Automotive Industry Action Group (AIAG) and the German Association of the Automotive Industry (VDA) in 2019, and is currently the most authoritative FMEA standard in the automotive industry. The new version introduced significant innovations over the original, including the "Action Priority (AP)" replacing the traditional "Risk Priority Number (RPN)".

**Certification Significance**

The passage of this certification means NationRel's FMEA software has reached international first-class level, fully supporting the highest compliance requirements for FMEA analysis tools in automotive, aerospace, electronics and other industries.

**Technical Highlights**

- Complete implementation of AIAG-VDA Five-Step analysis process
- Automatic AP value calculation with complete scoring tables
- Data linkage with SPC, MSA and other modules
- Chinese and English bilingual interface, adapting to multinational enterprise needs`,date:`2025-12-15`,category:`news`,published:!0,author:`NationRel Editorial Team`},{id:`2`,title:`Discussion on Confidence Interval Calculation Methods for Small Sample Sizes in Weibull Analysis`,summary:`In reliability engineering practice, engineers often can only obtain limited failure data due to test costs and cycles. This article explores three main confidence interval estimation methods for Weibull parameters under small sample conditions.`,content:`In reliability life data analysis, small sample problems are one of the most common challenges in engineering practice. This article systematically introduces three main confidence interval estimation methods.

## Maximum Likelihood Estimation (MLE)

MLE is currently the most recommended parameter estimation method in the statistics community, with confidence intervals based on Fisher information matrix calculation. Advantages: theoretically rigorous and computationally efficient; Disadvantages: when sample size is small (n<5), asymptotic normality assumptions may not hold, leading to narrow intervals.

## Likelihood Ratio Confidence Interval

Based on likelihood ratio test principles, it does not rely on large sample normal approximation and is usually more accurate under small samples. Higher computational complexity, but widely implemented in industrial reliability software.

## Bootstrap Method

Through resampling simulation without distribution assumptions, it has the widest applicability. For sample sizes n≥10, Bootstrap confidence intervals usually perform most robustly. Computationally intensive, requiring extensive resampling.

## Practical Recommendations

- n<5: Prefer likelihood ratio method
- 5≤n<20: Both likelihood ratio and Bootstrap acceptable
- n≥20: MLE usually reliable, highest computational efficiency

NationRel Weibull software has fully supported all three methods in the latest version, allowing users to flexibly choose based on actual conditions.`,date:`2025-11-20`,category:`tech`,published:!0,author:`Technical Team`},{id:`4`,title:`NationRel Officially Releases Reliability Prediction Software V3.0`,summary:`The new V3.0 version adds complete support for GJB/Z 299D standard, expands component database to 100,000+ entries, and introduces AI-assisted component identification, significantly improving reliability prediction efficiency.`,content:`NationRel Reliability Prediction Software V3.0 officially released, bringing multiple major functional upgrades.

**Major Updates**

1. **New GJB/Z 299D Standard Support**: Fully implements the latest national military standard for reliability prediction, meeting defense electronics reliability prediction needs.

2. **Component Database Expansion**: Database entries expanded from 50,000 to 100,000+, covering domestic substitute component brands.

3. **AI-Assisted Component Identification**: Users only need to upload component BOM, AI system automatically matches components in database, reducing manual matching workload by 70%.

4. **Report Template Customization**: Added multiple report templates, supporting output format customization per customer requirements.

**Upgrade Recommendations**

Users who purchased V2.x versions can upgrade to V3.0 for free. Please contact your customer service representative for the upgrade package.`,date:`2025-09-01`,category:`news`,published:!0,author:`Product Team`},{id:`5`,title:`How to Effectively Conduct DOE - From Beginner to Expert`,summary:`Design of Experiments (DOE) is one of the essential skills for quality engineers. This article starts from basic concepts and systematically introduces selection principles and implementation points for full factorial, fractional factorial, and response surface designs.`,content:`Design of Experiments (DOE) is a statistical method for systematically arranging experiments, with the goal of obtaining maximum information with minimum experiments.

## When to Use DOE

When you need to simultaneously study the effects of multiple factors on output, DOE is the most efficient tool. Compared with traditional "Change One Factor at a Time" (OFAT) approaches, DOE can:
- Study factor interaction effects
- Draw reliable conclusions with fewer experiments
- Build mathematical models of input-output relationships

## Design Type Selection

**Full Factorial Design**
- Applicable: Fewer factors (2-4), need complete study of all interaction effects
- Characteristics: Most comprehensive, most experiments

**Fractional Factorial Design**
- Applicable: More factors (5-8), mainly main effects and low-order interactions
- Characteristics: Reduced experiments, may have confounding

**Response Surface Methodology (RSM)**
- Applicable: After screening experiments, need fine optimization of key factors
- Characteristics: Can fit quadratic models, find optimal parameter points

## NationRel DOE Software Features

Our DOE software includes an experimental design wizard that helps users automatically recommend the most suitable design based on factor count and research objectives, providing complete ANOVA and parameter optimization functions.`,date:`2025-08-12`,category:`tech`,published:!0,author:`Technical Team`},{id:`7`,title:`Accelerating the Full Integration of IT with Manufacturing and Distribution`,summary:`As an important component of new digital infrastructure, Industrial Internet covers data, computing power, and algorithms, becoming a key engine for innovative development of industrial digital economy.`,content:`As a major manufacturing country, China follows the general trend of digital transformation of economy and society, taking Industrial Internet as a breakthrough point to vigorously promote new digital infrastructure construction, accelerate the full integration of information technology with manufacturing and distribution, further strengthen and improve the real economy, and enhance development initiative.

## New Digital Infrastructure Will Drive Industrial Digital Economy into a New Stage

A new round of scientific and technological revolution and industrial transformation characterized by accelerated innovation and integration penetration of information technology is emerging, creating huge demand for new infrastructure more suitable for digital economic development.

Industrial Internet, as an important component of new digital infrastructure, covering "data + computing power + algorithms" and other types of infrastructure, is becoming a key engine for innovative development of industrial digital economy. Data shows that in 2019, China's industrial Internet industry economic value added scale was 2.13 trillion yuan, accounting for 2.2% of GDP, contributing 9.9% to economic growth.

## Platformization is the Main Feature of New Industrial Digital Economy System

Platformization is one of the most important trends in the digital economy era, not only blurring the boundaries of division of labor and deepening the integration of information and industrialization, but also promoting the transformation of value creation from value chain to value network, driving value chain upgrades.

Industrial Internet platforms have changed the supply-demand model under the traditional economy, promoting demand-driven supply as the mainstream, and restructuring the traditional chain-like upstream, midstream, and downstream organizations into circular chains centered on platforms, creating a new industrial digital economy system with platforms as the core.

## Platform-Driven Supply Chain Digital Transformation

New Platform Role: From Information Matching to Integrated Services. The innovative development of digital technology continuously promotes various platforms to collaboratively and spirally iterate, innovate, and upgrade along the direction of digitalization, networking, and intelligence, transitioning their service systems from information display and transaction matching to integrated services.

New Business Model: Building a Collaborative Network of Suppliers, Merchants, and Consumers. Compared with the industrial era's assembly lines, supply chains, and multi-level management, the internet era places greater emphasis on low cost, fast response, and high customization. Changes at both supply and demand ends bring business model transformation.

New Supply Network: From Linear Supply Chain to Value Network. Industrial e-commerce platforms can effectively expand and deepen industrial collaboration, promoting supply chain management information flow from the unidirectional flow model of "supplier - producer - distributor - consumer" to a networked multi-directional flow model.`,date:`2025-07-15`,category:`case`,published:!0,author:`Industry Observer`},{id:`8`,title:`Interpretation of Ford Customer Specific Requirements (CSR) - Latest FMEA Requirements`,summary:`Ford's Customer Specific Requirements (CSR) published by IATF focus on FMEA application requirements. OEMs are paying more attention to FMEA, and suppliers need to use FMEA software to ensure document consistency.`,content:`At the end of last year, the IATF official website published Ford's Customer Specific Requirements (CSR), with key updates on Ford's requirements for FMEA applications, effective January 3, 2022.

## Five Key Updates This Time

1. **Organizational Responsibility**: The organization remains responsible for the accuracy and completeness of the DFMEA (where Design Responsible), PFMEA, and Control Plans! Copies must be provided to Ford upon request.

2. **Foundation FMEA Requirements**: Organizations are required to have Foundation FMEAs; general processes such as stamping, riveting, injection molding, etc. all have Foundation FMEAs; refer to AIAG or VDA published FMEA manuals for more information.

3. **Information Flow Linking**: FMEA information flow should start from Foundation FMEA, linking Foundation FMEA, Part FMEA, Control Plans, and Work Instructions, maintaining consistency and updating as needed.

4. **FMEA Software Requirements**: Suppliers shall use FMEA software which ensures the alignment of Foundation FMEA, Part FMEA, Control Plan, and other applicable documents:
   - July 1, 2022: FMEA software to display Foundation and Part FMEAs (for programs not yet at Job 1)
   - December 31, 2022: All Foundation PFMEAs for all manufacturing processes (current and forward model) to be in FMEA software

5. **Reverse FMEA Requirements**: Organizations are required to have a process in place that ensures all new launches complete a Reverse FMEA (RFMEA) event once the equipment is installed and running.

## Key Insights

**OEMs are Paying More Attention to FMEA**

From the updates to IATF16949 Customer Specific Requirements, OEMs' requirements for product quality and management system requirements for suppliers at lower levels are becoming increasingly strict. This Ford CSR update particularly emphasizes FMEA content, using "required" and "shall" to mandate supplier requirements.

**FMEA Application Will Return to Its Essence**

FMEA should be a dynamic process accompanying product development from initiation, development, verification, application, to feedback and correction. Supplier FMEA requirements have been elevated to the "process" level, including:
- FMEA methods
- FMEA processes (forward, reverse)
- FMEA tools and software
- FMEA relationship with other activities/documents

**Using FMEA Software Follows Digital Transformation Trends**

Ford CSR requires applying software to help teams create Foundation FMEA, Family FMEA, Control Plans, Work Instructions, and other documents:
1. Create FMEA in software for clear thinking and visual structure
2. Software-driven steps with synchronized editing and updates
3. Related document linking for consistency
4. Knowledge extraction and accumulation through digital means`,date:`2025-06-20`,category:`case`,published:!0,author:`Industry Observer`},{id:`9`,title:`HPR Signs Fuel Reliability Research Project with EPRI`,summary:`HPR officially signed a fuel cladding foreign object erosion test contract with the Electric Power Research Institute (EPRI) to conduct fuel reliability research under different working conditions, with EPRI providing over 600,000 USD in funding.`,content:`From North Star Nuclear Network: Recently, HPR (Shanghai Nuclear Engineering Research Institute) officially signed a contract with the Electric Power Research Institute (EPRI) for "Fuel Cladding Foreign Object Erosion Tests Under Different Flow Conditions." EPRI commissioned HPR to conduct erosion tests on fuel cladding under different working conditions and with different foreign object types, and to analyze the related mechanisms, jointly helping peers improve and enhance fuel reliability levels.

## Project Background

According to the contract, the project is divided into two phases:

**Phase 1**: Conduct fuel cladding foreign object erosion test research at room temperature conditions

**Phase 2**: Proceed with high-temperature and high-pressure fuel cladding foreign object erosion test research

EPRI will provide over 600,000 USD in funding for these two phases of testing.

## Technical Cooperation

Since formally joining EPRI as a full member in 2018, HPR has obtained a large number of technically applicable research reports and software tools. The company's Fuel Materials Division, as the business department responsible for linking with EPRI's Fuel Reliability sub-project, under the guidance of the General Technical Department, has conducted extensive work on digestion and absorption in the field of fuel reliability technology, and has maintained close communication with the EPRI Fuel Reliability sub-project team on many common technical issues in the industry.

## Project Progress

This March, the EPRI Fuel Reliability team proposed the need to commission fuel cladding foreign object erosion testing. The Fuel Materials Division established a specialized team, proposing a detailed test plan to EPRI based on their requirements and combined with accumulated testing experience. This July, the test plan officially passed review by the EPRI Fuel Reliability Technical Advisory Committee, and agreed to fully fund based on the fees calculated by the company.

## Future Outlook

The official signing of this contract marks a successful conclusion for the project initiation. In the next phase, the company's Fuel Materials Division will strictly follow contract requirements to organize and implement the related testing research tasks, and conduct benchmarking in work methods, processes, and quality assurance requirements, committed to becoming a long-term cooperation partner with EPRI in the field of fuel reliability.`,date:`2025-05-10`,category:`case`,published:!0,author:`NationRel`}],ua=[{id:`fk-001`,title:`What is FMEA? Understanding FMEA Definition, Types, and Value`,summary:`FMEA (Failure Mode and Effects Analysis) is a core quality tool for preventing product and process risks. This article systematically introduces FMEA concepts, four main types, and their actual value in enterprises.`,content:`## What is FMEA

FMEA (Failure Mode and Effects Analysis) is a systematic, preventive quality analysis method that identifies potential failure modes that may occur in products or processes, evaluates their impact on systems, subsystems, and end users, and develops prevention or detection measures to eliminate or reduce risks before problems occur.

The core concept of FMEA is "**Prevention over Correction**" - eliminating risks during design and process control stages rather than remedying problems after failures occur.

---

## Four Main Types of FMEA

### 1. DFMEA (Design Failure Mode and Effects Analysis)
- **Object**: Product design
- **Purpose**: Identify potential failures in product design, ensuring products meet user functional requirements and safety needs
- **Applicable phases**: Concept design → Detailed design → Design verification

### 2. PFMEA (Process Failure Mode and Effects Analysis)
- **Object**: Manufacturing and assembly processes
- **Purpose**: Identify potential failures that may cause product defects in production processes, improve process stability
- **Applicable phases**: Process design → Trial production → Mass production

### 3. FMEA-MSR (Failure Mode, Effects and Diagnostic Analysis)
- **Object**: Product monitoring and system response during customer use (such as automotive ECUs, OBD systems)
- **Purpose**: Evaluate whether monitoring systems can promptly detect failures and take appropriate responses, ensuring use safety
- **Applicable phases**: New type added in AIAG-VDA 2019, mainly for automotive industry

### 4. System FMEA / Concept FMEA
- **Object**: System-level functions and interfaces
- **Purpose**: Identify system-level risks early in concept phase, establishing foundation for subsequent DFMEA/PFMEA

---

## Core Value of FMEA

| Value Dimension | Specific Benefits |
|----------------|-------------------|
| **Reduce Quality Costs** | Finding and solving problems at design stage costs 10-100x less than finding them after mass production |
| **Improve Product Reliability** | Systematically identify and eliminate potential failures, improve product full lifecycle reliability |
| **Support Certification Compliance** | IATF 16949, ISO 9001, AS9100 and other standards all require FMEA |
| **Promote Cross-department Collaboration** | FMEA naturally promotes design-manufacturing-quality integration |
| **Knowledge Asset Accumulation** | FMEA documents are valuable organizational knowledge assets supporting product iteration and experience inheritance |

---

## FMEA: RPN vs Action Priority (AP)

**Traditional RPN Method (AIAG 4th Edition)**:
- RPN = Severity(S) × Occurrence(O) × Detection(D)
- Drawback: Different S/O/D combinations may produce the same RPN, but actual risks differ greatly

**New AP Method (AIAG-VDA 2019)**:
- AP outputs High/Medium/Low based on S and O/D combinations
- More focused on high severity situations, avoiding RPN limitations
- NationRel FMEA software fully supports AP calculation

---

## Reference Standards

- **AIAG-VDA FMEA Handbook (2019)**: Most authoritative current automotive industry standard
- **AIAG FMEA Handbook (4th Edition)**: Mainstream standard before 2019, still widely used
- **IEC 60812**: FMEA standard for electronics and electrical industry
- **SAE J1739**: Automotive industry FMEA standard (superseded by AIAG-VDA)
- **MIL-STD-1629A**: Military FMEA standard, commonly used in aerospace and defense industries`,category:`fmea-knowledge`,tags:[`FMEA`,`DFMEA`,`PFMEA`,`Quality Management`,`AIAG-VDA`],date:`2025-12-01`,author:`Technical Editorial`,readTime:8,cover:`/images/knowledge/fk-001.jpg`},{id:`fk-002`,title:`Detailed Explanation of AIAG-VDA FMEA 2019 Seven-Step Approach`,summary:`AIAG-VDA 2019 FMEA handbook introduced a completely new "Seven-Step" analysis framework, thoroughly replacing traditional spreadsheet-based approaches. This article details the meaning, outputs, and considerations for each step.`,content:`## AIAG-VDA 2019 Seven-Step Approach Overview

The most important innovation of AIAG-VDA 2019 FMEA handbook is the introduction of the **Seven-Step Approach**. Each step has clear objectives and outputs, with logical progression between steps ensuring systematic and comprehensive analysis.

---

## Seven-Step Approach Details

### Step 1: Planning and Preparation

**Objective**: Define FMEA scope, purpose, and boundaries

**Key Activities**:
- Define analysis object (product/process) and boundaries
- Form cross-functional FMEA team
- Collect relevant information (customer requirements, similar product experience, regulatory requirements, etc.)
- Develop FMEA project schedule

**Important Outputs**:
- FMEA baseline document
- Team members and responsibility matrix

---

### Step 2: Structure Analysis

**Objective**: Establish system/process hierarchy, clarify analysis boundaries

**For DFMEA**:
- Build system-subsystem-component three-level structure tree
- Identify interfaces and boundary conditions between levels

**For PFMEA**:
- Build process flow diagram (process steps-work elements)
- Identify 4M elements (Man/Machine/Material/Method) for each process step

---

### Step 3: Function Analysis

**Objective**: Clarify function and performance requirements for each structural element

**Core Content**:
- **Function** of each product/process element (what it does)
- **Quantified performance requirements** for functions (to what extent)
- Functional relationships between upper and lower levels

**Tip**: Function descriptions should use verb+noun form, e.g., "Transmit torque ≥200N·m"

---

### Step 4: Failure Analysis

**Objective**: Identify failures that may prevent functions from meeting requirements

**Failure Triad**:
- **Failure Effect (FE)**: Impact of failure on upper-level function or customer
- **Failure Mode (FM)**: Specific manifestation of function failure
- **Failure Cause (FC)**: Root cause leading to failure mode occurrence

**Note**: One failure mode can have multiple failure causes, each cause needs separate evaluation

---

### Step 5: Risk Analysis

**Objective**: Quantified risk assessment for each failure cause

**Scoring Indicators**:
- **Severity (S)**: Severity of failure effect to customer, score 1-10
- **Occurrence (O)**: Likelihood of failure cause occurrence, score 1-10
- **Detection (D)**: Ability of prevention/detection measures to find failure cause or mode, score 1-10

**Action Priority (AP)**:
- Based on S and O/D combinations, query AP table to determine H/M/L
- AP=H: **Must** take action
- AP=M: **Should** take action
- AP=L: May consider taking action

---

### Step 6: Optimization

**Objective**: Develop and track improvement actions for AP=H and AP=M failures

**Action Types**:
- **Prevention actions**: Reduce occurrence of failure cause (O)
- **Detection actions**: Improve ability to detect failure cause or mode (D)

**Action Tracking Elements**: Responsible person, planned completion date, actual completion status, reassessment after action implementation

---

### Step 7: Results Documentation

**Objective**: Ensure FMEA analysis results are formally recorded and communicated

**Main Content**:
- Final version of FMEA worksheet
- Summary of action implementation status
- Key lessons learned updates
- Outputs to subsequent phases (such as Control Plan)

---

## NationRel FMEA Software Seven-Step Support

NationRel FMEA software fully implements the Seven-Step analysis process, providing structured guided interfaces to help teams systematically complete each step of analysis and automatically generate standard FMEA reports meeting OEM requirements.`,category:`fmea-method`,tags:[`AIAG-VDA`,`FMEA Five-Step`,`Seven-Step`,`Risk Analysis`,`AP Value`],date:`2025-11-15`,author:`Technical Editorial`,readTime:10,cover:`/images/knowledge/fk-002.jpg`},{id:`fk-003`,title:`Differences and Connections Between DFMEA and PFMEA`,summary:`DFMEA (Design FMEA) and PFMEA (Process FMEA) are the two most commonly used FMEA types. Both differ significantly in analysis objects, team composition, timing, and outputs, while being closely connected in structure.`,content:`## DFMEA vs PFMEA Comparison

| Comparison Item | DFMEA | PFMEA |
|----------------|-------|-------|
| **Full Name** | Design FMEA | Process FMEA |
| **Analysis Object** | Product design (parts/subsystems/systems) | Manufacturing and assembly processes |
| **Analysis Objective** | Eliminate design defects, ensure product functions | Eliminate process defects, ensure product quality |
| **Lead Team** | Design engineers primarily | Process/manufacturing engineers primarily |
| **Inputs** | Product design drawings, specifications, customer requirements | Product drawings, process flow diagrams, control plans |
| **Typical Failures** | Dimensional out-of-tolerance, material fatigue, electrical short | Missing assembly parts, machining dimensional deviation, welding defects |
| **Action Focus** | Design changes, tolerance optimization, verification testing | Process parameter control, poka-yoke devices, enhanced inspection |
| **Timing** | Design phase (complete before DV) | Process design phase (complete before production) |

---

## Intrinsic Connections Between Them

DFMEA and PFMEA are not independent—**DFMEA output is PFMEA input**.

Specifically:
1. Special characteristics (Critical/Significant) identified in DFMEA require PFMEA to develop process control measures for these characteristics
2. Failure causes in DFMEA that "can be improved through manufacturing process" need to be identified and controlled in PFMEA
3. Both FMEAs jointly support Control Plan development

---

## Common Misconceptions

**Misconception 1: DFMEA and PFMEA can be merged into one sheet**
→ Cannot. Their analysis objects and logic are completely different; confusion seriously degrades analysis quality.

**Misconception 2: Do PFMEA before DFMEA**
→ Should do DFMEA first, then PFMEA after confirming design scheme.

**Misconception 3: Fill in design reasons in PFMEA**
→ PFMEA failure causes should point to manufacturing and assembly process variation, not product design defects.

---

## NationRel Software Support

NationRel FMEA software supports DFMEA, PFMEA, and FMEA-MSR, each type providing independent templates and field configurations, with support for cross-FMEA special characteristic tracking.`,category:`fmea-knowledge`,tags:[`DFMEA`,`PFMEA`,`FMEA Types`,`Design Analysis`,`Process Analysis`],date:`2025-10-20`,author:`Technical Editorial`,readTime:7,cover:`/images/knowledge/fk-003.jpg`},{id:`fk-004`,title:`Detailed Explanation of AP (Action Priority) Calculation Method and Evaluation Criteria`,summary:`AP (Action Priority) is the core innovation of AIAG-VDA 2019 FMEA, replacing the traditional RPN. This article details AP calculation logic, H/M/L determination criteria, and comparison with RPN.`,content:`## What is AP

AP (Action Priority) is a new risk evaluation indicator introduced in AIAG-VDA 2019 FMEA handbook, replacing the traditional RPN (Risk Priority Number).

The essence of AP is: **First look at severity, then look at occurrence/detection combinations**, directly outputting the priority for taking action.

---

## AP Determination Method

AP is determined by consulting the standard "AP lookup table" with inputs:
- S (Severity, 1-10)
- O (Occurrence, 1-10)
- D (Detection, 1-10)

**Simplified AP Determination Rules**:

| Severity S | Condition | AP Level |
|------------|----------|----------|
| S = 9~10 | Any O and D | H (High) |
| S = 7~8 | High O OR High D | H (High) |
| S = 7~8 | Low O AND Low D | M (Medium) |
| S = 4~6 | High O AND High D | H (High) |
| S = 4~6 | Other combinations | M or L |
| S = 1~3 | Any O and D | L (Low) |

> Note: Refer to official AIAG-VDA 2019 handbook for complete AP lookup table

---

## H/M/L Meanings and Requirements

| AP Level | Meaning | Requirement |
|----------|--------|-------------|
| **H (High)** | High priority, must take action | Must develop actions, clarify responsible person and deadline, can only be retained with sufficient justification |
| **M (Medium)** | Medium priority, should take action | Recommend taking action, team must explain reason for not taking action |
| **L (Low)** | Low priority, may consider improvement | Optionally take action |

---

## AP vs RPN: Why Change?

**RPN Problems**:
1. Different S/O/D combinations may produce the same RPN, but risks differ greatly
   - Example: S=10, O=1, D=1 → RPN=10 (severe but unlikely)
   - Example: S=1, O=10, D=1 → RPN=10 (minor but frequent)
   - These two situations clearly need different handling priorities, but RPN cannot distinguish them
2. Enterprises often set thresholds like "RPN>100 requires action," potentially missing high severity but low frequency risks

**AP Advantages**:
1. Severity (S) takes priority—S=9/10 is high priority regardless of O and D
2. Three-level classification is simple and clear, facilitating quick team decisions
3. Eliminates "RPN threshold gaming" loopholes

---

## AP Calculation in NationRel FMEA Software

Software includes complete AIAG-VDA AP lookup tables. After users input S, O, D scores, it automatically calculates and displays AP level with color coding (Red=H, Yellow=M, Green=L). System also provides AP distribution statistics chart, helping teams quickly identify high-risk items.`,category:`fmea-method`,tags:[`AP Value`,`RPN`,`Action Priority`,`AIAG-VDA`,`Risk Assessment`],date:`2025-09-10`,author:`Technical Editorial`,readTime:9,cover:`/images/knowledge/fk-004.jpg`},{id:`rr-001`,title:`Overview of Complete Reliability Engineering Process - From R&D to Retirement`,summary:`Reliability work permeates every phase of product lifecycle. This article systematically reviews reliability engineering activities from concept phase to retirement phase, helping engineers establish a "full-lifecycle reliability" perspective.`,content:`## What is Full Lifecycle Reliability Engineering

Product reliability is not "tested" out, nor is it "corrected" out—it is **designed** in. True reliability engineering should start from the product concept phase and run throughout the entire product lifecycle.

A full lifecycle reliability engineering typically includes five phases:

---

## Phase 1: Concept and Planning

**Objective**: Establish reliability objectives, develop reliability work plan

**Main Activities**:
- Develop reliability metrics (MTBF, reliability, availability, etc.)
- Conduct reliability demonstration, assess technical feasibility
- Identify key reliability risks
- Develop Reliability Management Plan (RMP)

**Tools**: Mission reliability analysis, trade-off analysis, historical data baseline establishment

---

## Phase 2: Engineering Development

**Objective**: Translate reliability requirements into design

**Main Activities**:
- Reliability allocation (allocate system MTBF to subsystems)
- Reliability prediction (predict failure rate based on component database)
- FMEA/FTA analysis (identify and eliminate design weaknesses)
- RBD modeling (system reliability block diagram analysis)
- Reliability design reviews

**Tools**: MIL-HDBK-217, GJB/Z 299, FMEA, FTA, RBD

---

## Phase 3: Reliability Demonstration

**Objective**: Verify product meets reliability metrics through testing

**Main Activities**:
- Reliability development testing (HALT, excite potential defects)
- Reliability growth testing (track growth per AMSAA curve)
- Reliability qualification testing (statistical verification of metrics)
- Environmental adaptability testing (temperature, humidity, vibration, etc.)

**Tools**: HALT/HASS, Accelerated Life Testing (ALT), Weibull analysis

---

## Phase 4: Production and Use

**Objective**: Maintain and improve product reliability

**Main Activities**:
- Reliability screening (HASS, eliminate early failure products)
- Field failure data collection and analysis
- Continuous reliability growth improvement
- Maintainability and supportability management

**Tools**: SPC, PHM (Prognostics and Health Management), field reliability data analysis

---

## Phase 5: Retirement and Improvement

**Objective**: Extract lessons learned, provide data for next-generation products

**Main Activities**:
- End-of-life failure data statistics
- Reliability database updates
- Lessons Learned compilation
- Next-generation product reliability design inputs

---

## NationRel Full Lifecycle Solutions

NationRel provides tool software and consulting services covering the above full process:
- Design phase: FMEA, FTA, RBD, Reliability Prediction software
- Demonstration phase: Weibull life analysis, ALT analysis, HALT equipment
- Production phase: SPC, MSA, DOE, PHM equipment
- Full process: Environmental lab services, failure analysis services`,category:`reliability-flow`,tags:[`Reliability Engineering`,`Full Lifecycle`,`MTBF`,`Reliability Process`],date:`2025-11-01`,author:`Technical Editorial`,readTime:10,cover:`/images/knowledge/rr-001.jpg`},{id:`rr-002`,title:`Reliability Prediction: Selection Guide for Parts Count vs Stress Analysis Methods`,summary:`Reliability prediction is important work during product design. Parts count and part stress analysis methods each have applicable scenarios. This article compares the principles, data requirements, and accuracy of both methods, helping engineers make reasonable choices.`,content:`## Purpose of Reliability Prediction

Reliability prediction estimates product or system failure rate (λ) and Mean Time Between Failures (MTBF) based on component databases and operating conditions during product development.

Main purposes:
1. **Early verification**: Verify during design phase whether MTBF targets are achievable
2. **Scheme comparison**: Compare reliability differences between multiple design schemes
3. **Guide improvement**: Identify reliability weak links, guide derating design
4. **Provide baseline**: Provide baseline for reliability growth and demonstration testing

---

## Two Main Methods

### 1. Parts Count Method

**Principle**: Quickly estimate system failure rate based on component types, quantities, and generic quality factors

**Formula**:
$$\\lambda_{system} = \\sum_{i=1}^{n} N_i \\cdot \\lambda_{Gi} \\cdot \\pi_{Qi}$$

Where:
- $N_i$: Quantity of i-th component type
- $\\lambda_{Gi}$: Generic failure rate of i-th component type
- $\\pi_{Qi}$: Quality factor

**Applicable scenarios**:
- Early design phase (BOM not detailed)
- Quick preliminary estimation
- Program-level comparison

**Advantages**: Low data requirements, fast calculation
**Disadvantages**: Lower accuracy, does not consider specific operating stresses

---

### 2. Part Stress Analysis Method

**Principle**: Calculate failure rate based on actual operating stresses (voltage, current, temperature, etc.) of each component

**Formula** (example for resistors):
$$\\lambda_p = \\lambda_b \\cdot \\pi_T \\cdot \\pi_R \\cdot \\pi_V \\cdot \\pi_Q \\cdot \\pi_E$$

Where each $\\pi$ factor corresponds to temperature, resistance value, voltage stress, quality, environment, etc.

**Applicable scenarios**:
- Detailed design phase (complete BOM and schematic available)
- Requires higher prediction accuracy
- Temperature derating analysis

**Advantages**: High accuracy, can identify over-stressed components
**Disadvantages**: Requires detailed operating stress data, complex calculation

---

## Comparison

| Comparison Item | Parts Count | Part Stress |
|----------------|-------------|-------------|
| **Accuracy** | Low | Medium-High |
| **Data Requirements** | BOM quantity | BOM + Operating stresses |
| **Applicable Phase** | Concept/Preliminary design | Detailed design |
| **Computational Effort** | Small | Large |
| **Primary Use** | Preliminary assessment, scheme comparison | Accurate prediction, derating analysis |

---

## NationRel Reliability Prediction Software Support

NationRel Reliability Prediction Software V3.0 supports both methods simultaneously, and supports parallel calculation and result comparison of MIL-HDBK-217F and GJB/Z 299C/D on the same BOM, significantly improving prediction efficiency. AI-assisted BOM matching can reduce manual component matching workload by 70%.`,category:`reliability-eval`,tags:[`Reliability Prediction`,`MTBF`,`MIL-HDBK-217`,`GJB299`,`Components`],date:`2025-08-20`,author:`Technical Editorial`,readTime:11,cover:`/images/knowledge/rr-002.jpg`},{id:`rs-001`,title:`Overview of Major Reliability Standards Systems: Complete Guide to IEC, MIL, GJB`,summary:`The reliability engineering field has many international and national standards covering methods, testing, data and other dimensions. This article systematically reviews the three major systems—civilian, military, and domestic—helping engineers quickly locate needed standards.`,content:`## Three Major Reliability Standards Systems

Reliability engineering standards are primarily divided into three major systems:
1. **IEC System**: International Electrotechnical Commission, civilian electronics/electrical products
2. **MIL System**: US Military standards, aerospace and defense fields
3. **GJB System**: Chinese National Military Standards, domestic military and aerospace

---

## IEC Civil Standards System

### Reliability Foundation Standards
| Standard | Name | Main Content |
|---------|------|-------------|
| **IEC 60300-1** | Dependability Management | Reliability management framework and principles |
| **IEC 60300-3-1** | Guide to Reliability Analysis | Overview of FMEA, FTA and other methods |
| **IEC 60300-3-4** | Life Cycle Costing | Life cycle cost analysis |

### FMEA Related Standards
| Standard | Name |
|---------|------|
| **IEC 60812** | FMEA Procedures |
| **IEC 61025** | Fault Tree Analysis (FTA) |

### Environmental Testing Standards
| Standard | Content |
|---------|---------|
| **IEC 60068-2 series** | Environmental test methods (temperature, humidity, vibration, salt spray, etc.) |
| **IEC 60721 series** | Classification of environmental conditions |

---

## MIL Military Standards System

### Reliability Prediction
| Standard | Name |
|---------|------|
| **MIL-HDBK-217F** | Electronic Equipment Reliability Prediction (most widely used) |
| **MIL-HDBK-217F Notice2** | 217F revision (current latest) |

### Analysis Methods
| Standard | Name |
|---------|------|
| **MIL-STD-1629A** | FMEA Procedures (military version) |
| **MIL-HDBK-1629A** | FMEA Handbook |
| **MIL-HDBK-338B** | Electronic Reliability Design Handbook |

### Testing Standards
| Standard | Name |
|---------|------|
| **MIL-STD-810** | Environmental Engineering Considerations and Laboratory Tests |
| **MIL-STD-883** | Test Methods for Microelectronics |

---

## GJB National Military Standards System (China)

### Reliability Foundation
| Standard | Name |
|---------|------|
| **GJB 813** | Reliability Modeling and Prediction |
| **GJB 899A** | Reliability Qualification and Acceptance Testing |
| **GJB 1391** | FMEA and FMECA |

### Reliability Prediction
| Standard | Name |
|---------|------|
| **GJB/Z 299C** | Electronic Equipment Reliability Prediction Handbook (Version C) |
| **GJB/Z 299D** | Electronic Equipment Reliability Prediction Handbook (Version D, latest) |

### Environmental Testing
| Standard | Name |
|---------|------|
| **GJB 150A** | Laboratory Environmental Test Methods for Military Equipment |
| **GJB 2405** | Reliability Growth Testing |

---

## Automotive Industry Standards

| Standard/Handbook | Issuing Organization | Content |
|-----------------|---------------------|---------|
| **AIAG-VDA FMEA (2019)** | AIAG+VDA | Latest automotive FMEA standard |
| **IATF 16949** | IATF | Automotive Quality Management System |
| **AEC-Q100/101/200** | AEC | Automotive Electronics Component Reliability |
| **ISO 26262** | ISO | Road Vehicles Functional Safety |

---

## How to Select Applicable Standards

- **Automotive industry**: AIAG-VDA FMEA + IATF 16949 + AEC-Q series
- **Military aerospace**: GJB system (domestic) + MIL system (imported projects)
- **General industrial electronics**: IEC 60300 series + IEC 60068 test series
- **Medical devices**: ISO 14971 (Risk Management) + IEC 60601 series`,category:`reliability-std`,tags:[`Reliability Standards`,`IEC`,`MIL-HDBK`,`GJB`,`AIAG-VDA`],date:`2025-07-15`,author:`Technical Editorial`,readTime:13,cover:`/images/knowledge/rs-001.jpg`},{id:`it-001`,title:`Rise of Domestic Industrial Software: Localization Progress and Trends in Quality Reliability Field`,summary:`Under the "domestic substitution" background, the quality reliability tool software market represented by FMEA, SPC, and MSA is undergoing profound changes. This article analyzes drivers, current status, and future trends of domestic substitution.`,content:`## Background: Why Domestic Substitution

Quality reliability tool software has long been dominated by foreign vendors:

- **Minitab** (USA): SPC, DOE, regression analysis
- **ReliaSoft/HBM Prenscia** (USA): Weibull analysis, ALT, RBD, FTA
- **Windchill Quality Solutions** (USA): FMEA, FMECA
- **ITEM Software** (UK): Reliability prediction, FTA

These software packages have high annual licensing fees (usually tens of thousands to hundreds of thousands of yuan/seat/year), with data security risks and technology lockdown concerns, making domestic substitution especially urgent in military, aerospace, and energy sectors.

---

## Drivers of Domestic Substitution

### Policy Drivers
- "14th Five-Year" industrial software special planning explicitly supports independent R&D
- Data security requirements in military, aerospace, energy and other key industries drive localization
- Government procurement "priority purchase domestic software" policy

### Market Drivers
- Domestic software prices typically 1/3~1/5 of imported software, significantly better cost-performance
- More timely local service and training support
- Chinese interface better matches domestic user habits

### Technology Drivers
- Domestic software R&D capability significantly improved, features gradually matching and even surpassing imported software
- Cloud computing, AI technology integration innovation gives domestic software first-mover advantage

---

## Current Localization Progress

| Software Type | Localization Level | Representative Companies |
|--------------|-------------------|-------------------------|
| SPC Statistical Process Control | ★★★★☆ High | NationRel, Quality Cloud |
| FMEA Software | ★★★★☆ High | NationRel |
| MSA Measurement System Analysis | ★★★★☆ High | NationRel |
| Weibull Reliability Analysis | ★★★☆☆ Medium | NationRel |
| Reliability Prediction | ★★★★★ High | NationRel |
| FTA Fault Tree Analysis | ★★★☆☆ Medium | NationRel |
| DOE Design of Experiments | ★★★☆☆ Medium | NationRel |

---

## Future Trends

### 1. AI-Empowered Quality Analysis
- Automated BOM matching, intelligent failure mode recommendation
- ML-based anomaly detection and predictive quality control

### 2. Cloud Collaboration and SaaS
- Multi-person real-time collaborative FMEA, replacing offline Excel
- Pay-as-you-go subscription, lowering software entry barriers

### 3. Deep Integration with MES/PLM
- Quality data seamlessly flows from design to production
- Real-time SPC data linked with production execution

### 4. Standards Continue Evolving
- AIAG-VDA FMEA continuous updates, software needs ongoing support
- ISO 26262, IEC 61508 functional safety standards deeply integrated with reliability tools

---

## NationRel's Position

As a leading enterprise in the domestic quality reliability industrial software field, NationRel adheres to independent R&D, having launched complete series of tool software covering FMEA, Weibull, ALT, FTA, SPC, MSA, DOE, RBD, reliability prediction and more. Technical specifications have fully matched similar imported products, gaining recognition from nearly a thousand customers in automotive, military, aerospace and other industries.`,category:`industry-trend`,tags:[`Domestic Substitution`,`Industrial Software`,`Industry Trends`,`Quality Software`],date:`2025-12-10`,author:`Industry Research Team`,readTime:9,cover:`/images/knowledge/it-001.jpg`},{id:`sr-001`,title:`R-FMEA Software Overview: Features and Core Advantages`,summary:`R-FMEA (ReliaBench-FMEA) is a Failure Mode and Effects Analysis software developed by NationRel based on industry standards and best practices. This article details its core functions, technical features, and application scenarios.`,content:`## R-FMEA Software Overview

R-FMEA (ReliaBench-FMEA) is a Failure Mode and Effects Analysis software independently developed by NationRel (Suzhou) Technology Co., Ltd. It integrates over a decade of reliability consulting and service experience, follows AIAG-VDA FMEA handbook standards, and supports the new FMEA "7-Step" analysis process.

---

## Core Features

### 1. Supports New FMEA 7-Step Method
- **Planning and Preparation**: Project planning, team formation, boundary definition
- **Structure Analysis**: System-subsystem-component hierarchical structure tree
- **Function Analysis**: Function network, requirements list, specification definition
- **Failure Analysis**: Failure chain, failure mode-cause-effect relationships
- **Risk Analysis**: S/O/D scoring, AP Action Priority calculation
- **Optimization**: Improvement measure development and tracking
- **Results Documentation**: Automatic DFMEA/PFMEA report generation

### 2. B/S Architecture, No Installation Required
- Web browser-based operation, no local installation needed
- Supports Windows, Mac, Linux multi-platform access
- Cloud deployment with centralized data management and convenient team collaboration

### 3. FMEA Master Model (3D-like Model)
- Establishes relationships between structure, function, failure, and measures
- Enables knowledge accumulation and rapid reuse
- Supports change impact analysis and version management

### 4. Graphical Results Display
- **Structure Tree**: Visualize product structure hierarchy
- **Process Flow Diagram**: PFMEA process flow display
- **Function Network**: Relationships between functions
- **Failure Network**: Visual tracking of failure chains
- **Risk Matrix**: S/O/D distribution and AP priority

### 5. Multi-language Support
- Interface supports 25 languages including Chinese, English, German, Japanese, Korean, Thai
- Real-time translation support for multinational enterprise needs

### 6. Master FMEA and Derived FMEA Mechanism
- **Master FMEA**: Consolidates knowledge of common parts and sub-components
- **Derived FMEA**: Quickly generates project-specific FMEAs based on Master FMEA
- **Knowledge Base**: Forms enterprise-level FMEA knowledge assets with continuous accumulation

### 7. Rich Output Reports
**DFMEA-related Reports**:
- DVP&R (Design Verification Plan and Report)
- DRBFM (Design Review Based on Failure Mode)
- Characteristics List (Critical/Significant Characteristics)
- FTA (Fault Tree Analysis)
- FMEDA (Failure Modes, Effects and Diagnostic Analysis)

**PFMEA-related Reports**:
- Control Plan
- Inspection Plan
- Work Instructions
- Error-proofing Checklist

---

## Technical Specifications

| Item | Specification |
|------|--------------|
| **Software Type** | Commercial Software |
| **Deployment** | Cloud, On-premise |
| **Architecture** | B/S architecture, SQL database based |
| **Platforms** | Windows, Mac, Linux |
| **Industries** | Automotive, Aerospace, Machinery, Electronics, Energy |
| **Data Exchange** | Excel import/export support |
| **Standards** | AIAG-VDA FMEA 2019, AIAG FMEA 4th |

---

## Typical Application Scenarios

### Automotive Industry
- Vehicle DFMEA analysis
- Component PFMEA analysis
- Supplier FMEA management
- IATF 16949 compliance support

### Aerospace
- System FMEA analysis
- Critical component reliability verification
- Safety analysis (combined with FTA)

### Electronics
- PCB DFMEA
- Assembly PFMEA
- Software FMEA (SFMEA)

---

## Customer Cases

- **Chery Commercial Vehicles** (2026)
- **CNGR Advanced Material Co., Ltd.** (2026)
- **Chongqing Ganfeng Power Technology** (2026)
- **Shenyang Laijin Auto Parts** (2026)
- **Zhuhai Allwinner Technology** (2026)

---

## Summary

R-FMEA software helps enterprises establish systematic FMEA analysis capabilities and improve product quality and reliability through standardized 7-step processes, visual analysis tools, and powerful knowledge management features.`,category:`software-rel`,tags:[`R-FMEA`,`FMEA Software`,`AIAG-VDA`,`7-Step`,`NationRel`],date:`2025-04-08`,author:`Product Team`,readTime:10,cover:`/images/knowledge/sr-001.jpg`},{id:`fm-003`,title:`DFMEA 7-Step Complete Guide: From Planning to Documentation`,summary:`The AIAG-VDA 2019 FMEA handbook introduced a new "7-Step" analysis framework. This article details the operation points, output requirements, and considerations for each of the seven DFMEA (Design FMEA) steps.`,content:`## DFMEA 7-Step Overview

The most important innovation of the AIAG-VDA 2019 FMEA handbook is the introduction of the **7-Step** analysis framework, completely replacing traditional form-filling methods. Each step has clear objectives and outputs, with logical progression ensuring systematic and complete analysis.

---

## Step 1: Planning and Preparation

### Objective
Clarify FMEA scope, purpose, and boundaries to lay the foundation for subsequent analysis.

### Key Activities
- **Determine analysis object**: System FMEA, subsystem FMEA, or component FMEA
- **Define boundaries**: What to include and exclude (using boundary diagram)
- **Form team**: Cross-functional team including design, quality, process, testing roles
- **Collect information**:
  - Customer requirements (SOR, technical specifications)
  - Similar product experience (historical FMEA, issue database)
  - Regulatory requirements (safety, environmental)
- **Develop plan**: Timeline, resource allocation, deliverable definition

### Outputs
- FMEA project plan
- Boundary diagram
- Team member list

---

## Step 2: Structure Analysis

### Objective
Decompose analysis object into system, subsystem, component levels, establishing structure tree.

### Key Activities
- **Level division**:
  - Focus Element: Current analysis level
  - Next Higher Level: Parent of focus element
  - Next Lower Level: Children of focus element
- **Structure tree construction**: Tree diagram showing hierarchical relationships
- **Interface identification**: Physical connections, energy transfer, information exchange, material flow

### Outputs
- Structure Tree
- Interface Matrix

---

## Step 3: Function Analysis

### Objective
Define functions and requirements at each level, establishing function network.

### Key Activities
- **Function description**: Verb + noun (e.g., "transfer force", "convert signal")
- **Requirements definition**:
  - Functional requirements (performance indicators)
  - Non-functional requirements (reliability, safety, environmental adaptability)
- **Function network construction**: Show how higher-level functions are realized by lower-level functions

### Outputs
- Function Network
- Function requirements list

---

## Step 4: Failure Analysis

### Objective
Identify potential failure modes, causes, and effects, establishing failure chains.

### Key Activities
- **Failure Effect (FE)**: Impact on higher level, end user, regulations
- **Failure Mode (FM)**: Manifestation of focus element failure
- **Failure Cause (FC)**: Root cause leading to failure mode
- **Failure chain construction**: FC → FM → FE causal relationship

### Scoring Tips
- **Severity (S)**: Based on failure effect assessment
- **Occurrence (O)**: Based on failure cause assessment
- **Detection (D)**: Based on current detection measures assessment

---

## Step 5: Risk Analysis

### Objective
Assess failure risk levels and determine action priorities.

### Key Activities
- **Severity scoring (S)**: 1-10, based on safety, regulation, function impact
- **Occurrence scoring (O)**: 1-10, based on failure cause frequency
- **Detection scoring (D)**: 1-10, based on detection measure effectiveness
- **AP calculation**: Use AIAG-VDA 2019 AP matrix (H/M/L)

### AP Matrix Logic
| S | O/D Combination | AP |
|---|-----------------|-----|
| 9-10 | Any | H (High Priority) |
| 5-8 | O≥7 or D≥7 | H |
| 5-8 | O≤6 and D≤6 | M (Medium Priority) |
| 1-4 | Any | L (Low Priority) |

---

## Step 6: Optimization

### Objective
Develop improvement measures for high-risk items to reduce risk levels.

### Key Activities
- **Measure development**:
  - Preventive measures: Reduce occurrence (O)
  - Detection measures: Reduce detection (D)
  - Design changes: Reduce severity (S, usually requires design change)
- **Responsibility assignment**: Clear measure owner and completion date
- **Measure tracking**: Regular review of measure implementation status
- **Re-assessment**: Recalculate S/O/D/AP after measure implementation

### Outputs
- Improvement measures list
- Measure tracking table
- Updated risk analysis

---

## Step 7: Results Documentation

### Objective
Document analysis process and results, forming complete DFMEA report.

### Outputs
- DFMEA report
- Risk summary table
- Improvement measures tracking report

---

## Success Factors

1. **Executive support**: Management commitment to resources and time
2. **Team collaboration**: Cross-functional team participation
3. **Data-driven**: Based on historical data, test data, field data
4. **Tool support**: Use professional FMEA software to improve efficiency
5. **Continuous improvement**: FMEA is a living document, update with design evolution`,category:`fmea-method`,tags:[`DFMEA`,`7-Step`,`AIAG-VDA 2019`,`Design FMEA`,`Risk Management`],date:`2025-04-08`,author:`Technical Team`,readTime:15,cover:`/images/knowledge/fm-003.jpg`},{id:`fm-004`,title:`PFMEA 7-Step Complete Guide: Process Risk Analysis in Practice`,summary:`PFMEA (Process Failure Mode and Effects Analysis) focuses on risk identification and control in manufacturing and assembly processes. This article details the implementation points of PFMEA 7-Step method to help production enterprises improve process quality.`,content:`## PFMEA Overview

PFMEA focuses on **manufacturing and assembly processes**, unlike DFMEA which focuses on product design. PFMEA addresses:
- Is the production process stable?
- Is process capability adequate?
- How to prevent potential process failures?

---

## PFMEA 7-Step Details

### Step 1: Planning and Preparation
**Special considerations**:
- **Process scope**: Part level, component level, or assembly level PFMEA
- **Process flow diagram**: Foundation for PFMEA
- **DFMEA input**: Inherit characteristics list and risk hints from design phase

### Step 2: Structure Analysis
**PFMEA structure levels** using **4M** (Man, Machine, Material, Method) + **1E** (Environment) model.

### Step 3: Function Analysis
**Process function description**: Verb + noun + process parameters

### Step 4: Failure Analysis
Common process failure modes: dimensional deviation, welding defects, missing/wrong parts, contamination, parameter drift

### Step 5: Risk Analysis
**PFMEA scoring special considerations**:
- **Severity (S)**: Based on impact to subsequent processes and final customer
- **Occurrence (O)**: Based on process capability (CPK) and historical defect rate
- **Detection (D)**: Based on detection method timeliness and effectiveness

### Step 6: Optimization
**Typical PFMEA improvement measures**:
- Poka-Yoke (error-proofing) for operational errors
- SPC control and preventive maintenance for equipment drift
- Supplier management and incoming inspection for material defects

### Step 7: Results Documentation
**PFMEA-specific outputs**:
- Control Plan (with critical control points)
- Work instructions
- Inspection specifications

---

## Integration with SPC
- PFMEA-identified key characteristics → SPC control chart monitoring
- SPC abnormalities → Trigger PFMEA re-evaluation
- Form "identify-monitor-improve" closed loop`,category:`fmea-method`,tags:[`PFMEA`,`7-Step`,`Process FMEA`,`Control Plan`,`4M Analysis`],date:`2025-04-08`,author:`Technical Team`,readTime:14,cover:`/images/knowledge/fm-004.jpg`},{id:`rf-002`,title:`Quality Five Tools Relationship Analysis: APQP, FMEA, MSA, SPC, PPAP`,summary:`APQP, FMEA, MSA, SPC, and PPAP are the five core tools for quality management in the automotive industry. This article systematically analyzes the logical relationships, application sequence, and integration methods of the five tools.`,content:`## Quality Five Tools Overview

In the automotive industry (especially IATF 16949 quality management system), **APQP, FMEA, MSA, SPC, PPAP** are known as the "Quality Five Tools." They are not used in isolation but are interrelated and sequential, forming a complete framework for product quality planning.

---

## Five Tools Introduction

| Tool | Definition | Core Output |
|------|-----------|-------------|
| **APQP** | Product Quality Advanced Planning | Project plan, design goals, control plan |
| **FMEA** | Failure Mode and Effects Analysis | Risk prevention, characteristics list |
| **MSA** | Measurement System Analysis | Measurement reliability assessment |
| **SPC** | Statistical Process Control | Process stability monitoring |
| **PPAP** | Production Part Approval Process | Process capability verification |

---

## Logical Relationships

### Timeline Relationship
\`\`\`
Project Start → Product Design → Process Design → Trial Production → Mass Production
     │            │             │              │            │
    APQP       DFMEA         PFMEA          MSA        SPC Monitoring
     │            │             │              │            │
     └────────────┴─────────────┴──────────────┴────────────┘
                           │
                        PPAP Approval
\`\`\`

### Integration Points
1. **Unified characteristics list**: DFMEA → PFMEA → Control Plan
2. **Data consistency**: MSA → SPC data collection
3. **Risk closed loop**: DFMEA risk → PFMEA → Control Plan → SPC monitoring

---

## Implementation Sequence

### Phase 1: Project Planning (APQP Phase 1-2)
- Form project team
- Clarify customer requirements
- Develop project plan
- Launch DFMEA

### Phase 2: Product Design (APQP Phase 3)
- Complete detailed design
- Complete DFMEA
- Develop DVP&R
- Prepare PFMEA

### Phase 3: Process Design (APQP Phase 4)
- Design process flow
- Complete PFMEA
- Develop control plan
- Prepare MSA

### Phase 4: Product/Process Validation (APQP Phase 5)
- Trial production
- Execute MSA
- Collect SPC initial data
- Prepare PPAP

### Phase 5: Production and Continuous Improvement (APQP Phase 6)
- SPC continuous monitoring
- Regular FMEA review
- Problem-driven improvement

---

## Common Mistakes

❌ **Working in silos**: Different departments work separately without integration
❌ **FMEA only once**: DFMEA/PFMEA not updated after completion
❌ **MSA disconnected from SPC**: Starting SPC before MSA completion
❌ **PPAP as just document collection**: Lack of substantive process validation`,category:`reliability-flow`,tags:[`Five Tools`,`APQP`,`FMEA`,`MSA`,`SPC`,`PPAP`,`IATF 16949`],date:`2025-04-08`,author:`Quality Team`,readTime:12,cover:`/images/knowledge/rf-002.jpg`},{id:`rr-003`,title:`ASQ Certified Reliability Engineer (CRE) Body of Knowledge Analysis`,summary:`The ASQ Certified Reliability Engineer (CRE) certification is globally recognized as the authoritative credential in reliability engineering. This article systematically analyzes the five core modules of the CRE Body of Knowledge (BoK), helping engineers understand the comprehensive capability requirements in reliability engineering.`,content:`## Introduction

The Certified Reliability Engineer (CRE) certification from the American Society for Quality (ASQ) is globally recognized as the authoritative credential in the field of reliability engineering. This certification requires candidates to systematically master product and system lifecycle reliability design, analysis, testing, and management methods. Its Body of Knowledge (BoK) is structured around five core modules, covering comprehensive capabilities from theory to practice.

![CRE Body of Knowledge Overview](/images/knowledge/rr-003/image1.png)

---

## 1. Reliability Fundamentals: Building Systematic Understanding

The core objective of reliability engineering is to ensure stable product operation within expected lifespan through preventive design and continuous improvement. The CRE BoK starts with reliability fundamentals, divided into two dimensions:

![Bathtub Curve and Reliability Metrics](/images/knowledge/rr-003/image2.png)

### (1) Management Fundamentals

Reliability engineers need cross-departmental collaboration capabilities:

① **Value-Driven**: Clarify reliability's long-term impact on cost control, brand reputation, and customer satisfaction.

② **Lifecycle Management**: Participate in design reviews, anticipate reliability's impact on risks and costs, such as using DFMEA (Design Failure Mode and Effects Analysis) to proactively avoid potential defects.

③ **Supplier Management**: Develop supplier reliability evaluation standards, continuously monitor quality performance, ensure supply chain robustness.

### (2) Technical Fundamentals

Covers core concepts and tools of reliability engineering:

① **Terms and Metrics**: Such as MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), bathtub curve, etc., to quantify reliability performance.

② **Six Sigma and Quality Triangle**: Implement reliability improvement through DMAIC process, balancing cost, time, and quality dynamics.

③ **Root Cause Analysis**: Use 5Why, fishbone diagrams to trace failure origins, prevent problem recurrence.

---

## 2. Risk Management: From Identification to Closed-Loop Control

Risk management is the core competency of reliability engineering. CRE requires engineers to master the full-process methods of risk identification-analysis-mitigation:

![FMEA and FTA Analysis Methods](/images/knowledge/rr-003/image3.png)

### (1) Risk Identification

① **Tool Application**: Use p-diagrams (parameter diagrams) to identify potential failure scenarios, define risk boundaries with user profiles (normal/extreme usage conditions).

② **Classification Assessment**: Distinguish technical risks (design defects), strategic risks (compliance issues), and operational risks (supply chain disruptions), prioritize high-probability, high-impact events.

### (2) Risk Analysis

① **FTA and FMEA**: Fault Tree Analysis (FTA) quantifies system-level failure probability, Failure Mode and Effects Analysis (FMEA) locates key component weaknesses. Combining both optimizes redundancy design.

② **Common Mode Failures**: Identify systemic failures caused by common causes (such as power fluctuations affecting multiple subsystems), reduce cascading risks through isolation design.

### (3) Risk Mitigation

① **ALARP Principle**: Reduce risk to "As Low As Reasonably Practicable" level, balancing control measure costs and benefits.

② **ISO Standard Integration**: Develop risk response plans based on ISO 31000, ensuring measures are traceable and verifiable.

---

## 3. Probability and Statistics: Data-Driven Decision Support

Reliability engineering highly depends on data modeling and statistical analysis capabilities. CRE BoK requires mastery of:

![Weibull Distribution and Data Analysis](/images/knowledge/rr-003/image4.png)

### (1) Basic Theory and Tools

① **Distribution Models**: Weibull distribution for life data analysis, lognormal distribution for repair times, Poisson distribution for low-probability events.

② **Statistical Inference**: Evaluate sample representativeness through confidence intervals, use hypothesis testing to verify improvement measure effectiveness.

### (2) Data Lifecycle Management

① **Data Source Integration**: Combine laboratory test data, field failure records, and IoT real-time monitoring information to build multi-dimensional analysis models.

② **FRACAS System**: Establish fault reporting, analysis, and corrective action closed-loop system, drive continuous improvement.

---

## 4. Reliability Testing and Modeling: Balancing Verification and Prediction

![Accelerated Life Testing and HALT](/images/knowledge/rr-003/image5.png)

### (1) Test Strategy Design

① **Accelerated Life Testing (ALT)**: Shorten test cycles through high-stress conditions (temperature cycling, vibration), extrapolate normal-use reliability performance.

② **HALT/HASS**: Highly Accelerated Life Testing (HALT) exposes design limits, Highly Accelerated Stress Screening (HASS) used for mass production batch defect removal.

### (2) Modeling Techniques

① **Reliability Block Diagrams**: Series/parallel/K-out-of-N models quantify system reliability, guide redundancy design.

② **Physics of Failure Models**: Apply Coffin-Manson model for thermal fatigue life prediction, Arrhenius equation to assess temperature impact on electronic components.

---

## 5. Lifecycle Reliability: Full-Process Optimization from Design to Retirement

### (1) Design Phase

① **DfR (Design for Reliability)**: Optimize parameter tolerances through stress-strength analysis and Design of Experiments (DOE), improve inherent reliability.

② **DFX Techniques**: Design for Manufacturability (DFM), Design for Maintainability (DFMt), reduce later-stage costs.

### (2) Operations Phase

① **Predictive Maintenance**: Based on Condition-Based Maintenance (CBM) data, dynamically adjust maintenance cycles, reduce unplanned downtime.

② **Spare Parts Strategy**: Use Weibull analysis to predict spare parts requirements, optimize inventory levels.

---

## 6. Cognitive Levels: Bloom's Taxonomy Practice Mapping

The CRE BoK is based on Bloom's Taxonomy, dividing cognitive abilities into six levels:

① **Remember**: Effectively recall or accurately identify knowledge elements such as terms, definitions, facts, viewpoints, materials, patterns, sequences, methods, and principles.

② **Understand**: Read and interpret various descriptive texts, communications, research reports, data tables, diagrams, operational guidelines, and specifications, grasp their core meaning and logical relationships.

③ **Apply**: Master the timing selection and implementation strategies for applying conceptual systems, operational processes, methodological frameworks, mathematical formulas, basic principles, and theoretical models in specific situations.

④ **Analyze**: Deconstruct complex information into basic constituent units, identify relationships and organizational structures between elements, extract key variables or core data from multi-dimensional contexts.

⑤ **Evaluate**: Make systematic value judgments about specific viewpoints, solutions, etc., based on preset evaluation criteria or professional standards, verify their rationality and effectiveness through multi-dimensional comparison.

⑥ **Create**: Construct knowledge systems with new paradigms or internal logic through element reorganization and structural integration; or select valid information from complex datasets to form empirically supported innovative conclusions.

---

## Conclusion

The CRE Body of Knowledge not only provides engineers with a technical toolbox but also cultivates systematic thinking and risk management capabilities. At the enterprise level, CRE professionals can drive product reliability improvements of over 30% (according to ASQ case studies), reduce warranty costs, and enhance market competitiveness. As Industry 4.0 and smart manufacturing become widespread, reliability engineering will further integrate with AI, digital twins, and other technologies, and the CRE certification will continue as the gold standard for industry capabilities.`,category:`reliability-flow`,tags:[`ASQ CRE`,`Reliability Engineer`,`Reliability Certification`,`Body of Knowledge`,`BoK`],date:`2026-04-09`,author:`Technical Editorial Team`,readTime:15,cover:`/images/knowledge/rr-003/image1.png`},{id:`re-001`,title:`Weibull Distribution in Reliability Analysis: From Theory to Practice`,summary:`Weibull distribution is the most commonly used life distribution model in reliability engineering. This article introduces Weibull distribution theory, parameter estimation methods, and practical applications in life data analysis.`,content:`## Weibull Distribution Overview

Weibull distribution, proposed by Swedish engineer Waloddi Weibull in 1951, has become the most widely used life distribution model in reliability engineering due to its **flexibility** and **broad applicability**.

---

## Why Weibull for Reliability Analysis?

### 1. Shape Parameter β Flexibility
Through shape parameter β, Weibull can model various failure modes:

| β Value | Failure Characteristic | Typical Application |
|---------|----------------------|---------------------|
| β < 1 | Early failure (decreasing failure rate) | Debug period, infant mortality |
| β = 1 | Random failure (constant failure rate) | Random failures, exponential distribution |
| β > 1 | Wear-out failure (increasing failure rate) | Aging, fatigue, wear |
| β = 3.5 | Approximates normal distribution | Symmetric failure modes |

### 2. Three-Parameter Form Adaptability
- **Two-parameter Weibull**: Shape β + Scale η
- **Three-parameter Weibull**: Adds location parameter γ (minimum life)

### 3. Strong Engineering Interpretability
- η (Characteristic Life): Time when 63.2% failures occur
- β (Shape Parameter): Directly reflects failure mechanism

---

## Key Formulas

**Probability Density Function (PDF)**:
\`\`\`
f(t) = (β/η) × (t/η)^(β-1) × exp[-(t/η)^β]
\`\`\`

**Reliability Function**:
\`\`\`
R(t) = exp[-(t/η)^β]
\`\`\`

**Failure Rate Function**:
\`\`\`
λ(t) = (β/η) × (t/η)^(β-1)
\`\`\`

**Key Metrics**:
- **MTTF**: η × Γ(1 + 1/β)
- **Median Life**: η × (ln2)^(1/β)
- **B10 Life**: η × (-ln0.9)^(1/β) (time at 10% failure)

---

## Parameter Estimation Methods

### Method 1: Maximum Likelihood Estimation (MLE)
**Pros**: Statistically sound, asymptotically unbiased, efficient for large samples (n≥20)
**Cons**: May be biased for small samples, computationally complex

### Method 2: Rank Regression
**Pros**: Simple calculation, intuitive visualization, better for small samples
**Cons**: Less efficient than MLE for large samples, sensitive to outliers

### Method 3: Bayesian Estimation
**Pros**: Can incorporate prior information, more robust for small samples
**Cons**: Requires prior distribution determination, computationally complex

---

## Confidence Interval Methods

| Sample Size | Recommended Method |
|-------------|-------------------|
| n < 5 | Bootstrap or Bayesian |
| 5 ≤ n < 20 | Likelihood Ratio method |
| n ≥ 20 | MLE + Fisher Matrix |

---

## Practical Application Steps

1. **Data Preparation**: Collect failure times and censoring information
2. **Distribution Identification**: Weibull probability plot check
3. **Parameter Estimation**: Use professional software (e.g., NationRel Weibull module)
4. **Model Validation**: Residual analysis and goodness-of-fit tests
5. **Reliability Metrics Calculation**: MTTF, B10/B50 life, R(t)
6. **Result Interpretation**: Decision making based on β value

---

## Typical Applications

### Scenario 1: Product Life Assessment
Determine bearing life under rated load using Weibull analysis to calculate B10 life for replacement scheduling.

### Scenario 2: Warranty Prediction
Calculate F(warranty period) to predict warranty claim quantity and cost.

### Scenario 3: Design Comparison
Compare η values between new and old designs to quantify life improvement.

### Scenario 4: Competing Failure Modes
Analyze by failure mode groups to identify dominant failure modes.

---

## Summary

Weibull distribution is the "Swiss Army knife" of reliability engineers:
- **Flexible**: Adapts to various failure modes through β parameter
- **Practical**: Strong engineering interpretability for communication
- **Mature**: Well-established parameter estimation and confidence interval methods`,category:`reliability-eval`,tags:[`Weibull Distribution`,`Life Data Analysis`,`Reliability Assessment`,`Parameter Estimation`,`MTTF`],date:`2025-04-08`,author:`Reliability Team`,readTime:16,cover:`/images/knowledge/re-001.jpg`},{id:`wb-001`,title:`Why Do Weibull Analysis? Case 1 - More Than Just Early Warning`,summary:`Through a Weibull analysis case of window lifter warranty data, learn how to determine whether failure modes are early failures, random failures, or wear-out failures, helping to quickly find root causes and improvements.`,content:`## Background

During a technical exchange, there were doubts about why Weibull analysis should be done. So warranty data was taken out and analyzed to prove the value of Weibull analysis.

## Data Overview

Data includes sales data and warranty claims data for a vehicle within 10 months of market launch.

## Analysis Conclusions

The analyst selected window lifter warranty data for simple organization, resulting in the following data:

![Data Summary](/weibull-images/weibull1-0.png)

Total: 114 window lifter claims
- Window reversal: 84
- Window noise: 17
- Unknown failures: 13

After simple data organization and analysis, conclusions are as follows:

**1. Window Reversal is Early Failure**

Possibly caused by manufacturing quality control issues. Strengthening manufacturing quality control can solve this; future failures will gradually decrease.

![Early Failure Analysis](/weibull-images/weibull1-1.png)

**2. Window Noise is Wear-out Failure**

Most likely a design issue; future failures will increase.

![Wear-out Failure Analysis](/weibull-images/weibull1-2.png)

## Follow-up Evidence

About 8 months later (18 months after mass production), the analysis team obtained warranty data again. Comparison shows:

![Data Comparison](/weibull-images/weibull1-3.png)

1. Window reversal failures increased very little, only 16 additional claims (consistent with early failure characteristics)
2. Window noise claims increased significantly, more failures as usage time increases (consistent with wear-out failure characteristics)

The actual data is highly consistent with previous analysis conclusions.

## Summary

1. Weibull analysis helps determine whether failure modes are early failures, random failures, or wear-out failures, helping to find root causes and improvements faster
2. Current low failure rates may still require attention (window noise was insignificant early on but became the majority later)
3. Weibull analysis enables scientific prediction of future product reliability trends, providing data support for product improvement and quality control`,category:`reliability-eval`,tags:[`Weibull Analysis`,`Failure Mode`,`Early Failure`,`Wear-out Failure`,`Warranty Data`],date:`2025-04-15`,author:`Technical Team`,readTime:6,cover:`/weibull-images/weibull1-4.png`},{id:`wb-002`,title:`Product Reliability Evaluation Case with Zero-Failure Data`,summary:`When all life-related tests pass without failures, how to scientifically evaluate product reliability? This article introduces the Weibayes (Weibull Chi-Square) method through an ECU reliability evaluation case.`,content:`## Problem Background

When all life-related tests pass without failures, how to evaluate product reliability?

A product may have several life-related reliability verification tests. For example, Electronic Control Modules (ECU) used in vehicles typically have four life-related tests involving temperature and humidity stresses:

- High Temperature Operating Endurance (HTOE)
- High Temperature Humidity Endurance (HTHE)
- Power Temperature Cycling Endurance (PTCE)
- Thermal Shock (TS)

These four life-related tests should excite various failure mechanisms causing cumulative damage to the product.

## Case Dialog

**Julius:** When all four life tests have no failures, there aren't many reliability statistical methods to help you. One available method is the basic binomial distribution model, but that's not very useful.

**Steve:** We have some failure data from preliminary testing, but not much.

**Julius:** Do you happen to have the Weibull distribution beta value for solder joint cracking in thermal shock testing?

**Steve:** We don't have the Weibull beta value, but I have the data.

![Test Data Table](/weibull-images/weibull2-0.png)

**Julius:** We can use the Weibull distribution beta value for solder joint cracking as a known value. If the ECU fails, it will most likely fail in this solder joint cracking mode.

## Weibayes (Weibull Chi-Square) Method

![Weibull Analysis Results](/weibull-images/weibull2-1.png)

The Weibull distribution beta value appears to be approximately 5.2.

Combining all data and Weibull distribution beta=5.2, with 90% confidence, the product reliability at the 10-year design life is approximately **97.7%**.

## Related Theory

In this case, we used the Weibayes method (Abernethy, 2010), also known as Nelson's "Weibull Chi-Square" method (1985).

![Formula](/weibull-images/weibull2-8.png)

**Formula Explanation:**

- The beta value must first be provided
- t is the test time indicator: usually the design life or verification target
- t_i is the test stop time for sample i
- chi-square(C,r) is the C percentile of chi-square distribution with r degrees of freedom

In Excel, use CHISQ.INV(C, 2(r+1)) to obtain the chi-square value.

## Practical Significance

When products pass all reliability tests without failures, the Weibayes method provides a scientific reliability evaluation approach:

1. Use historical preliminary test data to obtain beta values
2. Combine current verification test zero-failure data
3. Calculate product reliability at given confidence levels
4. Provide data support for product design life

This method is particularly suitable for high-reliability, long-life product reliability verification scenarios.`,category:`reliability-eval`,tags:[`Weibull Analysis`,`Weibayes`,`Zero-Failure Data`,`ECU`,`Confidence Level`],date:`2025-03-20`,author:`Julius Wang`,readTime:8,cover:`/weibull-images/weibull2-3.png`},{id:`wb-003`,title:`Why Do Weibull Analysis? Case 3 - Reliability Comparison`,summary:`How to compare the reliability of two datasets using Weibull analysis? This article demonstrates how to scientifically evaluate and compare product reliability through life test data from two suppliers.`,content:`## Introduction

Weibull analysis is not just simple graphing; it includes many related knowledge and experiences. This series aims to explain one or two key points clearly in each article.

Today, let's understand how to compare the reliability of two datasets using Weibull analysis through a simple case.

## Background

A certain auto part has two suppliers. To select the more suitable one, 8 samples from each supplier were tested for life testing, and the failure time data for each sample was obtained as follows:

![Supplier Life Data](/weibull-images/weibull3-0.png)

So which supplier has better reliability?

## Discussion

Looking at the data alone, Supplier 1's data is more dispersed while Supplier 2's data is more concentrated, but it's hard to say which is better.

### Method 1: Compare Average Values

- Supplier 1 average life: 136,749
- Supplier 2 average life: 38,593
- **Conclusion: Supplier 1 wins**

### Method 2: Compare Median Values

- Supplier 1 median life: 100,515
- Supplier 2 median life: 37,616
- **Conclusion: Supplier 1 wins**

### But is this really the case?

Many will realize that comparison also needs a prerequisite: how long do we expect the product to be used?

- If the time requirement is 10,000-20,000, Supplier 2 might be better (no failures before this)
- If the time requirement is 50,000-60,000, Supplier 1 might be better (Supplier 2 has mostly failed by then)

## Weibull Analysis Results

Through Weibull analysis, we can obtain Weibull analysis charts for each supplier. For easy comparison, we can place them on one chart using "multi-chart."

![Weibull Comparison](/weibull-images/weibull3-1.png)

### If Required Usage Time is 20,000

- Supplier 1 unreliability F(20,000): 13.18%
- Supplier 2 unreliability F(20,000): 2.68%
- **Conclusion: Supplier 2 wins**

### If Required Usage Time is 50,000

- Supplier 1 unreliability F(50,000): 29.19%
- Supplier 2 unreliability F(50,000): 90.52%
- **Conclusion: Supplier 1 wins**

![Reliability Comparison](/weibull-images/weibull3-4.png)

## Summary

1. Mean values have certain significance in product reliability comparison, but further analysis is needed based on customer requirements, design goals, and data distribution
2. Using unreliability F(t) or reliability R(t) for comparison may be more appropriate
3. Through Weibull analysis, we can obtain product reliability or unreliability at any point in time
4. In daily work, such analysis can compare product reliability across different suppliers, batches, regions; and compare reliability before and after product improvements`,category:`reliability-eval`,tags:[`Weibull Analysis`,`Supplier Comparison`,`Reliability Comparison`,`B10 Life`,`Reliability`],date:`2025-02-10`,author:`Technical Team`,readTime:7,cover:`/weibull-images/weibull3-5.png`},{id:`wb-004`,title:`Why Weibull? Case 4 - How to Prove Reliability Requirements are Met?`,summary:`With customer requirement of B10 life greater than 200,000 cycles, how to prove product reliability meets customer requirements through Weibull analysis? This article demonstrates Weibull analysis in reliability verification.`,content:`## Introduction

Weibull analysis is not just simple graphing; it includes many related knowledge and experiences. This series aims to explain one or two key points clearly in each article.

Today, let's understand how to prove product reliability meets customer requirements through a simple case.

## Background

A turbocharger compressor blade supplier received customer requirements: the product's low-cycle fatigue (a failure mode) B10 life must be greater than 200,000 cycles.

![Turbocharger Blades](/weibull-images/weibull4-0.png)

How should the supplier prove that their product's reliability meets this requirement?

## Test Data

The supplier selected 9 samples for low-cycle fatigue life testing, obtaining the following life data:

![Life Test Data](/weibull-images/weibull4-1.png)

Eight samples failed, with the data representing failure time (cycles); the ninth stopped testing at 583,500 cycles (called right-censored data).

## Analysis Results

Through Weibull analysis, we can obtain the Weibull analysis chart. By adding the B10 (unreliability at 10%) reference line, we find B10 life is: **271,862**

This result is greater than the customer's requirement of 200,000, proving the requirement is met.

![B10 Analysis](/weibull-images/weibull4-2.png)

## Confidence Level Requirements

Is this enough? Possibly not!

At this point, you need to check if the customer has confidence level requirements.

Sometimes customers may require: **B10 greater than 200,000, with 90% confidence level.**

If so, we need to calculate the B10 life at the 90% lower confidence limit. Using the "calculator" gives the following result:

![90% Confidence Lower Limit](/weibull-images/weibull4-3.png)

**90% confidence lower limit: 205,795**, meeting customer requirements.

## Terminology

**Bx Life (also called Lx Life)**

1. Bx life is a commonly used reliability parameter in reliability engineering. When x equals 10, it's called B10 life; when x equals 50, it's called B50 life
2. In ISO-281 standard, B10 life represents the time point at which 90% of a certain number of bearings can achieve
3. In Australian standards AS3890 and AS2729, B10 (or L10) life can be used to measure product life

![Bx Life Definition](/weibull-images/weibull4-4.png)

- B1 represents the time point at which 1% of products fail under specified conditions
- B10 represents the time point at which 10% of products fail
- B0.1 represents the time point at which 0.1% of products fail

## Practical Significance

Often, proving that a product meets certain customer reliability requirements through life testing requires large sample sizes and long test times, which is not particularly economical. Methods to optimize include:

1. Using Accelerated Life Testing (ALT) to shorten test time
2. Properly designing test plans and using historical data (such as Weibayes method)
3. Using sequential testing methods to reduce sample size

Weibull analysis provides scientific, quantitative evaluation tools for product reliability verification, making it an essential analytical tool for reliability engineers.`,category:`reliability-eval`,tags:[`Weibull Analysis`,`B10 Life`,`Confidence Level`,`Life Testing`,`Reliability Verification`],date:`2025-01-15`,author:`Technical Team`,readTime:8,cover:`/weibull-images/weibull4-2.png`}],da=[{id:`case-008`,title:`Geely Automobile Research Institute FMEA&DVP Management System Project`,company:`Geely Automobile Research Institute (Ningbo) Co., Ltd.`,industry:`Automotive`,problem:`Geely Automobile Research Institute needed to establish a unified FMEA&DVP management platform to meet group R&D digital transformation needs and achieve collaborative management with downstream suppliers.`,solution:`Deployed NationRel FMEA&DVP management system: ① Customized FMEA templates meeting Geely R&D processes ② Established DVP and FMEA correlation mechanism ③ Achieved internal R&D and supplier collaborative work ④ Provided data analysis and reporting functions`,result:[`Established unified FMEA&DVP management platform`,`R&D efficiency improved by approximately 40%`,`Achieved collaborative management with suppliers`,`Passed system audit`],products:[`FMEA Software`],date:`2024-11`},{id:`case-009`,title:`NIO Automobile FMEA Management System Project`,company:`NIO Automobile Technology (Anhui) Co., Ltd.`,industry:`New Energy`,problem:`As an emerging new energy vehicle enterprise, NIO Automobile needed to establish FMEA management system meeting AIAG-VDA standards to improve R&D quality and efficiency.`,solution:`Deployed NationRel FMEA software: ① Deployed FMEA templates meeting AIAG-VDA 2019 standards ② Established cross-department collaboration mechanism ③ Achieved closed-loop action tracking management ④ Provided intelligent assisted functions`,result:[`Established FMEA management system meeting international standards`,`FMEA analysis efficiency significantly improved`,`Action tracking completion rate reached over 95%`,`Passed customer audit`],products:[`FMEA Software`],date:`2024-10`},{id:`case-010`,title:`Chery Commercial Vehicle FMEA Management System Project`,company:`Chery Commercial Vehicle (Anhui) Co., Ltd.`,industry:`Automotive`,problem:`Chery Commercial Vehicle needed to improve FMEA analysis capabilities to meet OEM requirements and establish systematic quality management processes.`,solution:`Deployed NationRel FMEA management system: ① Customized FMEA templates suited for commercial vehicle characteristics ② Conducted specialized FMEA training ③ Established analysis processes and review mechanisms ④ Achieved action tracking management`,result:[`FMEA analysis capability significantly improved`,`Passed OEM audit`,`Quality system more comprehensive`,`Customer satisfaction improved`],products:[`FMEA Software`],date:`2024-09`},{id:`case-011`,title:`SERES New Energy Vehicle FMEA Management System Project`,company:`Chongqing Jinkhong SERES New Energy Automobile Design Co., Ltd.`,industry:`New Energy`,problem:`As a new energy vehicle enterprise, SERES needed to establish efficient FMEA management system to improve product reliability and meet OEM and regulatory requirements.`,solution:`Deployed NationRel FMEA software: ① Deployed AIAG-VDA standard templates ② Established cross-functional team collaboration mechanism ③ Achieved failure mode library management ④ Provided intelligent analysis assistance`,result:[`Established comprehensive FMEA management system`,`Analysis efficiency improved by approximately 50%`,`Met OEM compliance requirements`,`Product reliability significantly improved`],products:[`FMEA Software`],date:`2024-08`},{id:`case-012`,title:`Foxconn Electronics Manufacturing FMEA Management System Project`,company:`Foxconn Kunshan Computer Connectors Co., Ltd.`,industry:`Electronics`,problem:`As a globally renowned electronics contract manufacturer, Foxconn needed to establish FMEA management capabilities to meet end-customer quality requirements and improve product reliability.`,solution:`Deployed NationRel FMEA management system: ① Customized FMEA templates for electronics manufacturing industry ② Established failure mode knowledge base ③ Achieved data connection with MES system ④ Provided quality analysis reports`,result:[`Established FMEA standards for electronics manufacturing industry`,`Early identification capability for quality issues improved`,`Customer audit successfully passed`,`Production efficiency improved by approximately 30%`],products:[`FMEA Software`],date:`2024-07`},{id:`case-013`,title:`BAIC Research Institute FMEA Management System Project`,company:`Beijing Automotive Research Institute Co., Ltd.`,industry:`Automotive`,problem:`BAIC Research Institute needed to establish unified FMEA management platform to improve R&D quality and meet group and international development needs.`,solution:`Deployed NationRel FMEA software: ① Customized FMEA templates meeting BAIC standards ② Established group-level knowledge sharing mechanism ③ Achieved multi-project parallel management ④ Provided data analysis and decision support`,result:[`Established group-level FMEA management platform`,`Achieved knowledge accumulation and reuse`,`R&D quality significantly improved`,`Passed system certification audit`],products:[`FMEA Software`],date:`2024-06`}],fa=[{name:`Automotive`,icon:`🚗`},{name:`Aerospace`,icon:`✈️`},{name:`Construction Machinery`,icon:`🏗️`},{name:`Electronics`,icon:`⚡`},{name:`Energy`,icon:`🔋`},{name:`Defense`,icon:`🛡️`},{name:`Medical Devices`,icon:`🏥`},{name:`Rail Transit`,icon:`🚄`}],pa=[{id:`v1`,title:`DFMEA Training Micro-course - Full Version`,bvid:`BV1bq421c7CW`,cover:`/video1.jpg`,duration:`01:12:29`,date:`2024-04-12`,views:16e3},{id:`v2`,title:`New FMEA Six-Step Approach Application Case Study`,bvid:`BV1fp421Q7zW`,cover:`/video2.jpg`,duration:`00:42:18`,date:`2024-04-16`,views:2489},{id:`v3`,title:`P-FMEA Micro-course - Structure and Function Analysis (2-3)`,bvid:`BV1aH4y1M7rS`,cover:`/video3.jpg`,duration:`00:16:52`,date:`2024-04-13`,views:9190},{id:`v4`,title:`P-FMEA Micro-course - Failure Analysis (4)`,bvid:`BV1oz421C7D2`,cover:`/video4.jpg`,duration:`00:06:47`,date:`2024-04-17`,views:1e3},{id:`v5`,title:`DFMEA Training Micro-course - Planning and Preparation (1)`,bvid:`BV1mm411z7HG`,cover:`/video5.jpg`,duration:`00:03:49`,date:`2024-04-11`,views:2e3},{id:`v6`,title:`DFMEA Training Micro-course - Overview`,bvid:`BV1Rm411z76L`,cover:`/video6.jpg`,duration:`00:04:56`,date:`2024-04-10`,views:3e3}],ma=[{id:`fmea-knowledge`,name:`FMEA Knowledge`},{id:`fmea-method`,name:`FMEA Methods`},{id:`fmea-case`,name:`FMEA Cases`},{id:`reliability-flow`,name:`Reliability Process`},{id:`reliability-eval`,name:`Reliability Evaluation`},{id:`reliability-std`,name:`Reliability Standards`},{id:`industry-trend`,name:`Industry Trends`}],ha=()=>localStorage.getItem(`nationrel-lang`)===`en`?`en`:`zh`,ga=()=>ha()===`en`,_a=()=>ga()?ca:ta,va=()=>ga()?la:na,ya=()=>ga()?ua:oa,ba=()=>ga()?da:sa,xa=()=>ga()?fa:ra,Sa=()=>ga()?ma:aa,Ca=()=>ga()?pa:ia,wa=6;function Ta({product:e}){let{t}=P(),{color:n}=e,r=A();return(0,I.jsxs)(`div`,{onClick:()=>r(`/products/${e.id}`),className:`group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`,children:[(0,I.jsx)(`div`,{className:`h-1 bg-gradient-to-r ${n.detailHero}`}),(0,I.jsxs)(`div`,{className:`p-4 flex flex-col flex-1`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,I.jsx)(`div`,{className:`w-9 h-9 rounded-lg ${n.iconBg} ${n.iconColor} flex items-center justify-center flex-shrink-0`,children:oo[e.icon]||(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,I.jsx)(`h3`,{className:`text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors`,children:e.name})]}),(0,I.jsx)(`p`,{className:`text-slate-500 text-sm line-clamp-2 flex-1`,children:e.description}),(0,I.jsxs)(`div`,{className:`mt-3 text-xs font-medium text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`,children:[(0,I.jsx)(`span`,{children:t(`common.viewDetails`)}),(0,I.jsx)(`svg`,{className:`w-3 h-3`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`})})]})]})]})}function Ea(){let{t:e}=P(),t=A(),n=_a().slice(0,wa);return(0,I.jsx)(`section`,{id:`products`,className:`py-12 lg:py-16 bg-slate-50`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`PRODUCTS & SERVICES`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsx)(`h2`,{className:`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900`,children:e(`products.title`)}),(0,I.jsx)(`p`,{className:`mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed`,children:e(`products.subtitle`)})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 gap-4 mb-8`,children:n.map(e=>(0,I.jsx)(Ta,{product:e},e.id))}),(0,I.jsx)(`div`,{className:`flex flex-wrap justify-center gap-3`,children:(0,I.jsxs)(`button`,{onClick:()=>{t(`/products`),window.scrollTo({top:0,behavior:`smooth`})},className:`inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-500 transition-colors`,children:[e(`products.viewAllProducts`),(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`})})]})})]})})}var Da=[`from-blue-600 via-blue-700 to-indigo-800`,`from-cyan-500 via-cyan-600 to-blue-700`,`from-indigo-500 via-indigo-600 to-blue-700`,`from-sky-500 via-sky-600 to-indigo-700`,`from-blue-500 via-blue-600 to-cyan-700`];function Oa(){let{t:e}=P(),t=A(),[n,r]=(0,_.useState)(1),i=va().filter(e=>e.published),a=Math.ceil(i.length/5),o=(n-1)*5,s=i.slice(o,o+5);return(0,I.jsx)(`section`,{id:`news`,className:`py-12 lg:py-16 bg-white`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`NEWS`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsx)(`h2`,{className:`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900`,children:e(`news.title`)}),(0,I.jsx)(`p`,{className:`mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed`,children:e(`news.subtitle`)})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12`,children:s.map((e,n)=>(0,I.jsxs)(`div`,{onClick:()=>t(`/news/${e.id}`),className:`group cursor-pointer`,children:[(0,I.jsxs)(`div`,{className:`relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br ${Da[n%Da.length]} mb-4`,children:[(0,I.jsxs)(`div`,{className:`absolute inset-0 opacity-20`,children:[(0,I.jsx)(`div`,{className:`absolute top-2 right-2 w-8 h-8 rounded-full bg-white/30`}),(0,I.jsx)(`div`,{className:`absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/20`})]}),(0,I.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center p-4`,children:(0,I.jsx)(`h3`,{className:`text-white font-bold text-sm md:text-base text-center line-clamp-3 drop-shadow-lg`,children:e.title})}),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h4`,{className:`font-semibold text-slate-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-2`,children:e.title}),(0,I.jsx)(`p`,{className:`text-xs text-slate-500 line-clamp-2`,children:e.summary})]})]},e.id))}),a>1&&(0,I.jsxs)(`div`,{className:`flex justify-center items-center gap-2 mb-12`,children:[(0,I.jsx)(`button`,{onClick:()=>r(e=>Math.max(1,e-1)),disabled:n===1,className:`px-4 py-2 text-sm border border-slate-200 rounded hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:e(`common.prevPage`)}),Array.from({length:a},(e,t)=>t+1).map(e=>(0,I.jsx)(`button`,{onClick:()=>r(e),className:`w-10 h-10 text-sm rounded transition-colors ${n===e?`bg-blue-600 text-white`:`border border-slate-200 hover:border-blue-300 hover:text-blue-600`}`,children:e},e)),(0,I.jsx)(`button`,{onClick:()=>r(e=>Math.min(a,e+1)),disabled:n===a,className:`px-4 py-2 text-sm border border-slate-200 rounded hover:border-blue-300 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:e(`common.nextPage`)})]}),(0,I.jsx)(`div`,{className:`text-center`,children:(0,I.jsx)(`button`,{onClick:()=>{t(`/news`),window.scrollTo({top:0,behavior:`smooth`})},className:`px-12 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded-lg`,children:e(`common.learnMore`)})})]})})}function ka(){let{t:e}=P(),[t,n]=(0,_.useState)({name:``,company:``,phone:``,email:``,message:``}),[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(!1),d=async r=>{r.preventDefault(),o(!0),c(``);try{let e=encodeURIComponent(`官网咨询 - ${t.name}（${t.company||`未填写公司`}）`),r=encodeURIComponent(`姓名：${t.name}\n公司：${t.company||`未填写`}\n电话：${t.phone}\n邮箱：${t.email||`未填写`}\n\n咨询内容：\n${t.message}`);window.location.href=`mailto:service@nationrel.com?subject=${e}&body=${r}`,i(!0),setTimeout(()=>i(!1),5e3),n({name:``,company:``,phone:``,email:``,message:``})}catch{c(e(`contact.error`))}finally{o(!1)}},f=[{icon:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})}),label:e(`contact.cards.hotline.label`),value:e(`contact.cards.hotline.value`)},{icon:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75`})}),label:e(`contact.cards.email.label`),value:e(`contact.cards.email.value`)},{icon:(0,I.jsxs)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 10.5a3 3 0 11-6 0 3 3 0 016 0z`}),(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z`})]}),label:e(`contact.cards.address.label`),value:e(`contact.cards.address.value`)}],p=[{q:e(`contact.faq.items.0.q`),a:e(`contact.faq.items.0.a`)},{q:e(`contact.faq.items.1.q`),a:e(`contact.faq.items.1.a`)},{q:e(`contact.faq.items.2.q`),a:e(`contact.faq.items.2.a`)}];return(0,I.jsxs)(`section`,{id:`contact`,className:`py-12 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]`}),(0,I.jsx)(`div`,{className:`absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]`}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 relative z-10`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-blue-600 uppercase`,children:[(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`}),`CONTACT US`,(0,I.jsx)(`span`,{className:`w-8 h-px bg-blue-600`})]}),(0,I.jsx)(`h2`,{className:`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900`,children:e(`contact.title`)}),(0,I.jsx)(`p`,{className:`mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed`,children:e(`contact.subtitle`)})]}),(0,I.jsx)(`div`,{className:`flex justify-center gap-4 mb-12 flex-wrap`,children:f.map(e=>(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300 flex flex-col items-center text-center w-64`,children:[(0,I.jsx)(`div`,{className:`w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 flex items-center justify-center mb-4`,children:e.icon}),(0,I.jsx)(`div`,{className:`text-sm text-slate-400 mb-1`,children:e.label}),(0,I.jsx)(`div`,{className:`text-slate-800 font-semibold`,children:e.value})]},e.label))}),(0,I.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-12`,children:[(0,I.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-100 p-8 shadow-2xl shadow-slate-200/20`,children:[(0,I.jsx)(`h3`,{className:`text-2xl font-bold text-slate-900 mb-6`,children:e(`contact.form.title`)}),r?(0,I.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-12 text-center`,children:[(0,I.jsx)(`div`,{className:`w-20 h-20 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 flex items-center justify-center mb-6`,children:(0,I.jsx)(`svg`,{className:`w-10 h-10`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})})}),(0,I.jsx)(`h4`,{className:`text-2xl font-bold text-slate-900 mb-3`,children:e(`contact.success.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`contact.success.desc`)})]}):(0,I.jsxs)(`form`,{onSubmit:d,className:`space-y-5`,children:[(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-semibold text-slate-700 mb-2`,children:e(`contact.form.name`)}),(0,I.jsx)(`input`,{required:!0,className:`w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500`,value:t.name,onChange:e=>n({...t,name:e.target.value}),placeholder:e(`contact.form.namePlaceholder`)})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-semibold text-slate-700 mb-2`,children:e(`contact.form.company`)}),(0,I.jsx)(`input`,{className:`w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500`,value:t.company,onChange:e=>n({...t,company:e.target.value}),placeholder:e(`contact.form.companyPlaceholder`)})]})]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-semibold text-slate-700 mb-2`,children:e(`contact.form.phone`)}),(0,I.jsx)(`input`,{required:!0,type:`tel`,className:`w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500`,value:t.phone,onChange:e=>n({...t,phone:e.target.value}),placeholder:e(`contact.form.phonePlaceholder`)})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-semibold text-slate-700 mb-2`,children:e(`contact.form.emailField`)}),(0,I.jsx)(`input`,{type:`email`,className:`w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500`,value:t.email,onChange:e=>n({...t,email:e.target.value}),placeholder:e(`contact.form.emailPlaceholder`)})]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-semibold text-slate-700 mb-2`,children:e(`contact.form.message`)}),(0,I.jsx)(`textarea`,{required:!0,rows:4,className:`w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none`,value:t.message,onChange:e=>n({...t,message:e.target.value}),placeholder:e(`contact.form.messagePlaceholder`)})]}),s&&(0,I.jsx)(`p`,{className:`text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl`,children:s}),(0,I.jsx)(`button`,{type:`submit`,disabled:a,className:`w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30`,children:e(a?`common.loading`:`contact.form.submitBtn`)})]})]}),(0,I.jsxs)(`div`,{className:`space-y-6`,children:[(0,I.jsxs)(`div`,{className:`bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white`,children:[(0,I.jsx)(`h3`,{className:`text-2xl font-bold mb-6`,children:e(`contact.promises.title`)}),(0,I.jsxs)(`div`,{className:`space-y-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,I.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-semibold`,children:e(`contact.promises.quickResponse.title`)}),(0,I.jsx)(`div`,{className:`text-blue-200 text-sm`,children:e(`contact.promises.quickResponse.desc`)})]})]}),(0,I.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,I.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-semibold`,children:e(`contact.promises.professional.title`)}),(0,I.jsx)(`div`,{className:`text-blue-200 text-sm`,children:e(`contact.promises.professional.desc`)})]})]}),(0,I.jsxs)(`button`,{onClick:()=>u(!0),className:`w-full flex items-start gap-4 text-left group`,children:[(0,I.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-semibold group-hover:text-blue-200 transition-colors`,children:e(`contact.promises.freeTrial.title`)}),(0,I.jsx)(`div`,{className:`text-blue-200 text-sm`,children:e(`contact.promises.freeTrial.desc`)})]})]})]})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/20`,children:[(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-900 mb-5`,children:e(`contact.faq.title`)}),(0,I.jsx)(`div`,{className:`space-y-4`,children:p.map((e,t)=>(0,I.jsxs)(`div`,{className:`border-b border-slate-100 pb-4 last:border-0`,children:[(0,I.jsx)(`div`,{className:`font-semibold text-slate-800 mb-2`,children:e.q}),(0,I.jsx)(`div`,{className:`text-sm text-slate-500`,children:e.a})]},t))})]})]})]})]}),(0,I.jsx)(Ui,{isOpen:l,onClose:()=>u(!1)})]})}function Aa(){let{t:e}=P(),t=new Date().getFullYear();return(0,I.jsx)(`footer`,{className:`bg-slate-900 text-slate-400`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 py-16`,children:[(0,I.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8`,children:[(0,I.jsxs)(`div`,{className:`space-y-4`,children:[(0,I.jsx)(M,{to:`/`,className:`flex items-center gap-2`,children:(0,I.jsx)(`img`,{src:`/wechat-qr-alt.png`,alt:e(`header.logoAlt`),className:`h-10`})}),(0,I.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,I.jsx)(`div`,{className:`flex items-start gap-2`,children:(0,I.jsx)(`span`,{className:`text-slate-500`,children:e(`footer.companyName`)})}),(0,I.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,I.jsx)(zi,{className:`w-4 h-4 mt-0.5 flex-shrink-0`}),(0,I.jsx)(`span`,{children:e(`footer.address`)})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Bi,{className:`w-4 h-4 flex-shrink-0`}),(0,I.jsx)(`span`,{children:e(`footer.phoneDisplay`)})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Ri,{className:`w-4 h-4 flex-shrink-0`}),(0,I.jsx)(`span`,{children:e(`footer.emailDisplay`)})]})]})]}),(0,I.jsxs)(`div`,{className:`space-y-4`,children:[(0,I.jsx)(`h3`,{className:`text-white font-semibold`,children:e(`footer.productServices`)}),(0,I.jsxs)(`ul`,{className:`space-y-2 text-sm`,children:[(0,I.jsx)(`li`,{children:(0,I.jsx)(M,{to:`/products/fmea`,className:`hover:text-white transition-colors`,children:e(`footer.productLinks.fmea`)})}),(0,I.jsx)(`li`,{children:(0,I.jsx)(M,{to:`/products`,className:`hover:text-white transition-colors`,children:e(`footer.productLinks.reliaqube`)})}),(0,I.jsx)(`li`,{children:(0,I.jsx)(M,{to:`/products/weibull`,className:`hover:text-white transition-colors`,children:e(`footer.productLinks.weibull`)})}),(0,I.jsx)(`li`,{children:(0,I.jsx)(M,{to:`/knowledge`,className:`hover:text-white transition-colors`,children:e(`footer.productLinks.knowledge`)})}),(0,I.jsx)(`li`,{children:(0,I.jsx)(M,{to:`/videos`,className:`hover:text-white transition-colors`,children:e(`footer.productLinks.videos`)})})]})]})]}),(0,I.jsx)(`div`,{className:`mt-10 pt-6 border-t border-slate-800`,children:(0,I.jsxs)(`div`,{className:`flex flex-col md:flex-row justify-center items-center gap-2 text-xs`,children:[(0,I.jsx)(`p`,{children:e(`footer.copyright`,{year:t})}),(0,I.jsx)(`span`,{className:`hidden md:inline`,children:`|`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(`a`,{href:`/privacy-policy`,className:`hover:text-white transition-colors`,children:e(`footer.privacyPolicy`)}),(0,I.jsx)(`span`,{children:`|`}),(0,I.jsx)(`a`,{href:`/terms`,className:`hover:text-white transition-colors`,children:e(`footer.terms`)}),(0,I.jsx)(`span`,{children:`|`}),(0,I.jsx)(`a`,{href:`/cookie-policy`,className:`hover:text-white transition-colors`,children:e(`footer.cookiePolicy`)}),(0,I.jsx)(`span`,{children:`|`}),(0,I.jsx)(`span`,{children:e(`common.icp`)})]})]})})]})})}function ja({product:e,iconMap:t,onBack:n}){let{color:r,detail:i}=e,a=A(),{t:o}=P();return(0,I.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,I.jsxs)(`div`,{className:`relative bg-gradient-to-br ${r.detailHero} overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 translate-x-32 -translate-y-32`}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-x-16 translate-y-16`}),(0,I.jsx)(`div`,{className:`absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white opacity-5`}),(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,backgroundSize:`40px 40px`}}),(0,I.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12`,children:[(0,I.jsxs)(`button`,{onClick:n,className:`flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group`,children:[(0,I.jsx)(`svg`,{className:`w-5 h-5 group-hover:-translate-x-1 transition-transform`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18`})}),(0,I.jsx)(`span`,{className:`text-sm font-medium`,children:o(`common.backToProducts`)})]}),(0,I.jsxs)(`div`,{className:`flex items-start gap-6`,children:[(0,I.jsx)(`div`,{className:`w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0 border border-white/20`,children:(0,I.jsx)(`div`,{className:`scale-150`,children:t[e.icon]||(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})})}),(0,I.jsxs)(`div`,{className:`flex-1`,children:[(0,I.jsx)(`span`,{className:`inline-block text-xs px-3 py-1 rounded-full bg-white/20 text-white/90 border border-white/30 font-medium mb-3`,children:e.categoryLabel}),(0,I.jsx)(`h1`,{className:`text-3xl md:text-4xl font-bold text-white mb-3`,children:e.name}),(0,I.jsx)(`p`,{className:`text-white/80 text-lg max-w-2xl leading-relaxed`,children:e.description}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-5`,children:e.features.map((e,t)=>(0,I.jsx)(`span`,{className:`text-sm px-3 py-1 rounded-lg bg-white/15 text-white/90 border border-white/20 font-medium`,children:e},t))})]})]})]})]}),(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16`,children:(0,I.jsxs)(`div`,{className:`grid lg:grid-cols-3 gap-10`,children:[(0,I.jsxs)(`div`,{className:`lg:col-span-2 space-y-10`,children:[(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${r.iconBg} ${r.iconColor} flex items-center justify-center flex-shrink-0`,children:(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:o(`products.overview`)})]}),(0,I.jsx)(`div`,{className:`bg-slate-50 rounded-2xl p-6 border border-slate-100`,children:(0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed text-[15px]`,children:i.overview})})]}),(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${r.iconBg} ${r.iconColor} flex items-center justify-center flex-shrink-0`,children:(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z`})})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:o(`products.highlights`)})]}),(0,I.jsx)(`div`,{className:`space-y-3`,children:i.highlights.map((e,t)=>{let n=e.indexOf(`：`),i=n>-1?e.slice(0,n):null,a=n>-1?e.slice(n+1):e;return(0,I.jsxs)(`div`,{className:`flex gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all`,children:[(0,I.jsx)(`div`,{className:`w-7 h-7 rounded-full ${r.iconBg} ${r.iconColor} flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold`,children:t+1}),(0,I.jsxs)(`div`,{children:[i&&(0,I.jsxs)(`span`,{className:`font-semibold text-slate-800`,children:[i,`：`]}),(0,I.jsx)(`span`,{className:`text-slate-600 text-sm leading-relaxed`,children:a})]})]},t)})})]}),i.specs&&i.specs.length>0&&(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${r.iconBg} ${r.iconColor} flex items-center justify-center flex-shrink-0`,children:(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`})})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:o(`products.specs`)})]}),(0,I.jsx)(`div`,{className:`bg-white rounded-2xl border border-slate-100 overflow-hidden`,children:i.specs.map((e,t)=>{let n=e.indexOf(`：`),a=n>-1?e.slice(0,n):e,o=n>-1?e.slice(n+1):``;return(0,I.jsxs)(`div`,{className:`flex gap-4 px-6 py-4 ${t%2==0?`bg-slate-50/50`:`bg-white`} ${t<i.specs.length-1?`border-b border-slate-100`:``}`,children:[(0,I.jsx)(`span`,{className:`font-semibold text-sm ${r.accent} min-w-[120px]`,children:a}),(0,I.jsx)(`span`,{className:`text-slate-600 text-sm`,children:o})]},t)})})]})]}),(0,I.jsxs)(`div`,{className:`space-y-6`,children:[(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl border border-slate-100 p-6 sticky top-8`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg ${r.iconBg} ${r.iconColor} flex items-center justify-center flex-shrink-0`,children:(0,I.jsxs)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]})}),(0,I.jsx)(`h3`,{className:`text-base font-bold text-slate-900`,children:o(`products.scenarios`)})]}),(0,I.jsx)(`ul`,{className:`space-y-3`,children:i.scenarios.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 ${r.iconColor} flex-shrink-0 mt-0.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M5 13l4 4L19 7`})}),(0,I.jsx)(`span`,{className:`text-sm text-slate-600 leading-relaxed`,children:e})]},t))})]}),(0,I.jsxs)(`div`,{className:`rounded-2xl bg-gradient-to-br ${r.detailHero} p-6 text-white`,children:[(0,I.jsx)(`h3`,{className:`font-bold text-lg mb-2`,children:o(`products.learnMoreDetails`)}),(0,I.jsx)(`p`,{className:`text-white/80 text-sm mb-5 leading-relaxed`,children:o(`products.consultDesc`)}),(0,I.jsx)(`button`,{onClick:()=>a(`/contact`),className:`w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]`,children:o(`products.consultNow`)}),(0,I.jsxs)(`a`,{href:`tel:4000032330`,className:`mt-3 flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm transition-colors`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z`})}),`4000-032-330`]})]})]})]})})]})}var Ma={news:`bg-blue-50 text-blue-700 border-blue-200`,tech:`bg-violet-50 text-violet-700 border-violet-200`,case:`bg-emerald-50 text-emerald-700 border-emerald-200`},Na={news:`from-blue-600 to-sky-500`,tech:`from-indigo-600 to-blue-500`,case:`from-cyan-600 to-blue-500`};function Pa(e){let t=e.split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r];if(e.startsWith(`![`)&&e.includes(`](`)){let t=e.match(/!\[([^\]]*)\]\(([^)]+)\)/);if(t){let[,e,i]=t;n.push((0,I.jsxs)(`figure`,{className:`my-6 mx-auto max-w-full`,children:[(0,I.jsx)(`img`,{src:i,alt:e||`图片`,className:`max-w-full h-auto rounded-lg shadow-md mx-auto`,loading:`lazy`}),e&&(0,I.jsx)(`figcaption`,{className:`text-center text-sm text-slate-500 mt-2`,children:e})]},r)),r++;continue}}if(e.startsWith(`## `))n.push((0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100`,children:e.slice(3)},r));else if(e.startsWith(`### `))n.push((0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-800 mt-7 mb-3`,children:e.slice(4)},r));else if(e.startsWith(`**`)&&e.endsWith(`**`)&&e.length>4)n.push((0,I.jsx)(`p`,{className:`font-semibold text-slate-800 mt-4 mb-2`,children:e.slice(2,-2)},r));else if(e.startsWith(`- `)){let e=[];for(;r<t.length&&t[r].startsWith(`- `);)e.push(t[r].slice(2)),r++;n.push((0,I.jsx)(`ul`,{className:`space-y-2 my-4 ml-2`,children:e.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-start gap-2 text-slate-600`,children:[(0,I.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0`}),(0,I.jsx)(`span`,{children:e})]},t))},`list-${r}`));continue}else if(/^\d+\./.test(e)){let e=[];for(;r<t.length&&/^\d+\./.test(t[r]);)e.push(t[r].replace(/^\d+\.\s*/,``)),r++;n.push((0,I.jsx)(`ol`,{className:`space-y-2 my-4 ml-2 list-decimal list-inside`,children:e.map((e,t)=>{let n=e.match(/^\*\*(.+?)\*\*:?\s*(.*)/);return n?(0,I.jsxs)(`li`,{className:`text-slate-600`,children:[(0,I.jsx)(`span`,{className:`font-semibold text-slate-800`,children:n[1]}),n[2]?`：${n[2]}`:``]},t):(0,I.jsx)(`li`,{className:`text-slate-600`,children:e},t)})},`ol-${r}`));continue}else e===``?n.push((0,I.jsx)(`div`,{className:`h-2`},r)):n.push((0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed my-2`,children:e},r));r++}return n}function Fa({article:e,onBack:t,relatedArticles:n=[],onSelectRelated:r}){let{t:i}=P();return(0,I.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[(0,I.jsxs)(`div`,{className:`bg-gradient-to-br ${Na[e.category]} relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,backgroundSize:`40px 40px`}}),(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 lg:px-8 pt-20 pb-12 relative`,children:[(0,I.jsxs)(`button`,{onClick:t,className:`flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18`})}),i(`common.backToNews`)]}),(0,I.jsx)(`span`,{className:`inline-block text-xs px-3 py-1 rounded-full font-medium border bg-white/20 text-white border-white/30 mb-4`,children:i(`news.categoryLabels.${e.category}`)}),(0,I.jsx)(`h1`,{className:`text-3xl md:text-4xl font-bold text-white leading-snug mb-6 max-w-3xl`,children:e.title}),(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-white/70 text-sm`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5`})}),e.date]}),(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z`})}),e.author]})]})]})]}),(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 -mt-4 pb-16`,children:(0,I.jsxs)(`div`,{className:`grid lg:grid-cols-4 gap-8`,children:[(0,I.jsxs)(`div`,{className:`lg:col-span-1 space-y-6`,children:[n.length>0&&(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl border border-slate-100 shadow-sm p-5`,children:[(0,I.jsxs)(`h3`,{className:`text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2`,children:[(0,I.jsx)(`span`,{className:`w-1 h-4 bg-blue-500 rounded-full`}),i(`newsDetail.relatedArticles`)]}),(0,I.jsx)(`div`,{className:`space-y-3`,children:n.map(e=>(0,I.jsxs)(`button`,{onClick:()=>r?.(e),className:`w-full text-left group`,children:[(0,I.jsx)(`div`,{className:`text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mb-1`,children:e.title}),(0,I.jsx)(`div`,{className:`text-xs text-slate-400`,children:e.date})]},e.id))})]}),(0,I.jsxs)(`div`,{className:`bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white`,children:[(0,I.jsx)(`h3`,{className:`font-bold mb-2`,children:i(`common.haveQuestions`)}),(0,I.jsx)(`p`,{className:`text-blue-100 text-sm mb-4 leading-relaxed`,children:i(`common.contactTeamDesc`)}),(0,I.jsxs)(`div`,{className:`space-y-2 text-sm mb-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-blue-100`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z`})}),i(`contact.cards.hotline.value`)]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-blue-100`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75`})}),i(`contact.cards.email.value`)]})]}),(0,I.jsx)(`button`,{onClick:t,className:`w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors`,children:i(`common.backToContact`)})]})]}),(0,I.jsxs)(`div`,{className:`lg:col-span-3`,children:[(0,I.jsx)(`div`,{className:`p-5 rounded-2xl border bg-white shadow-sm mb-8`,children:(0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed text-base italic`,children:e.summary})}),(0,I.jsx)(`div`,{className:`bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-12`,children:(0,I.jsx)(`div`,{className:`text-slate-700 text-[15px] leading-8`,children:Pa(e.content)})}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between mt-6 pt-6 border-t border-slate-200`,children:[(0,I.jsx)(`span`,{className:`text-xs px-3 py-1.5 rounded-full font-medium border ${Ma[e.category]}`,children:i(`news.categoryLabels.${e.category}`)}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-slate-400 text-sm`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5`})}),i(`newsDetail.publishedAt`),` `,e.date]})]})]})]})})]})}function Ia(e){let t=e.split(`
`),n=[],r=0,i=0;for(;r<t.length;){let e=t[r];if(!e.trim()){r++;continue}if(e.startsWith(`# `)){n.push((0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-900 mt-10 mb-5`,children:e.slice(2)},i++)),r++;continue}if(e.startsWith(`## `)){n.push((0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100`,children:e.slice(3)},i++)),r++;continue}if(e.startsWith(`### `)){n.push((0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-800 mt-8 mb-3`,children:e.slice(4)},i++)),r++;continue}if(e.startsWith(`#### `)){n.push((0,I.jsx)(`h4`,{className:`text-lg font-bold text-slate-800 mt-6 mb-2`,children:e.slice(5)},i++)),r++;continue}if(e.trim()===`---`){n.push((0,I.jsx)(`hr`,{className:`my-8 border-slate-200`},i++)),r++;continue}let a=e.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(a){let e=a[1],t=a[2];n.push((0,I.jsx)(`div`,{className:`my-6 flex justify-center`,children:(0,I.jsx)(`img`,{src:t,alt:e,className:`max-w-full h-auto rounded-lg shadow-md`,loading:`lazy`})},i++)),r++;continue}if(e.startsWith(`|`)){let e=[];for(;r<t.length&&t[r].startsWith(`|`);)e.push(t[r]),r++;let a=e[0].split(`|`).filter((t,n)=>n>0&&n<e[0].split(`|`).length-1).map(e=>e.trim()),o=e.slice(2).map(e=>e.split(`|`).filter((t,n)=>n>0&&n<e.split(`|`).length-1).map(e=>e.trim()));n.push((0,I.jsx)(`div`,{className:`overflow-x-auto my-6`,children:(0,I.jsxs)(`table`,{className:`w-full border-collapse text-sm`,children:[(0,I.jsx)(`thead`,{children:(0,I.jsx)(`tr`,{className:`bg-blue-50`,children:a.map((e,t)=>(0,I.jsx)(`th`,{className:`px-4 py-3 text-left font-semibold text-slate-700 border border-slate-200 first:rounded-tl-xl last:rounded-tr-xl`,children:e},t))})}),(0,I.jsx)(`tbody`,{children:o.map((e,t)=>(0,I.jsx)(`tr`,{className:`hover:bg-slate-50 transition-colors`,children:e.map((e,t)=>(0,I.jsx)(`td`,{className:`px-4 py-3 border border-slate-200 text-slate-600`,children:La(e)},t))},t))})]})},i++));continue}if(e.startsWith(`- `)||e.startsWith(`* `)){let e=[];for(;r<t.length&&(t[r].startsWith(`- `)||t[r].startsWith(`* `));)e.push(t[r].slice(2)),r++;n.push((0,I.jsx)(`ul`,{className:`my-5 space-y-2.5 pl-1`,children:e.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-start gap-2.5 text-slate-600 leading-relaxed`,children:[(0,I.jsx)(`span`,{className:`w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5`,children:(0,I.jsx)(`svg`,{className:`w-3 h-3`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M4.5 12.75l6 6 9-13.5`})})}),(0,I.jsx)(`span`,{children:La(e)})]},t))},i++));continue}if(/^\d+\.\s/.test(e)){let e=[];for(;r<t.length&&/^\d+\.\s/.test(t[r]);)e.push(t[r].replace(/^\d+\.\s/,``)),r++;n.push((0,I.jsx)(`ol`,{className:`my-5 space-y-2.5 pl-1`,children:e.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-start gap-3 text-slate-600 leading-relaxed`,children:[(0,I.jsx)(`span`,{className:`w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5`,children:t+1}),(0,I.jsx)(`span`,{children:La(e)})]},t))},i++));continue}if(e.startsWith("```")){let e=[];for(r++;r<t.length&&!t[r].startsWith("```");)e.push(t[r]),r++;r++,n.push((0,I.jsx)(`pre`,{className:`my-6 p-5 rounded-2xl bg-slate-900 text-slate-200 text-sm overflow-x-auto leading-relaxed`,children:(0,I.jsx)(`code`,{children:e.join(`
`)})},i++));continue}n.push((0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed my-4 text-[1.025rem]`,children:La(e)},i++)),r++}return n}function La(e){if(!e.includes(`**`)&&!e.includes("`"))return e;let t=[],n=e,r=0;for(;n.length>0;){let e=n.indexOf(`**`),i=n.indexOf("`");if(e===-1&&i===-1){t.push(n);break}let a=e===-1?i:i===-1?e:Math.min(e,i);if(a>0&&(t.push(n.slice(0,a)),n=n.slice(a)),n.startsWith(`**`)){let e=n.indexOf(`**`,2);if(e===-1){t.push(n);break}t.push((0,I.jsx)(`strong`,{className:`font-semibold text-slate-900`,children:n.slice(2,e)},r++)),n=n.slice(e+2)}else if(n.startsWith("`")){let e=n.indexOf("`",1);if(e===-1){t.push(n);break}t.push((0,I.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-slate-100 text-blue-700 text-sm font-mono`,children:n.slice(1,e)},r++)),n=n.slice(e+1)}}return(0,I.jsx)(I.Fragment,{children:t})}function Ra({articleId:e,onBack:t,onSelectRelated:n}){let{t:r}=P(),i=ya(),a=i.find(t=>t.id===e),o=a?i.filter(t=>t.id!==e&&t.category===a.category).slice(0,3):[];return a?(0,I.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,I.jsxs)(`div`,{className:`bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-20 pb-12 px-6 relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,backgroundSize:`50px 50px`}}),(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto relative z-10`,children:[(0,I.jsxs)(`button`,{onClick:t,className:`inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 text-sm font-medium transition-colors group`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 group-hover:-translate-x-1 transition-transform`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18`})}),r(`common.backToKnowledge`)]}),(0,I.jsx)(`div`,{className:`mb-4`,children:(0,I.jsx)(`span`,{className:`px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold`,children:r(`knowledge.categories.${a.category}`)})}),(0,I.jsx)(`h1`,{className:`text-3xl md:text-4xl font-bold leading-tight mb-6`,children:a.title}),(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-5 text-sm text-blue-200/70`,children:[(0,I.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z`})}),a.author]}),(0,I.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5`})}),a.date]}),(0,I.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z`})}),`~`,a.readTime,` `,r(`common.minRead`)]})]}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-6`,children:a.tags.map(e=>(0,I.jsxs)(`span`,{className:`px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white/70 text-xs`,children:[`# `,e]},e))})]})]}),(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 lg:px-8 py-16`,children:[(0,I.jsx)(`div`,{className:`prose max-w-none`,children:Ia(a.content)}),o.length>0&&(0,I.jsxs)(`div`,{className:`mt-20 pt-12 border-t border-slate-100`,children:[(0,I.jsx)(`h3`,{className:`text-2xl font-bold text-slate-900 mb-8`,children:r(`common.relatedArticles`)}),(0,I.jsx)(`div`,{className:`grid md:grid-cols-3 gap-6`,children:o.map(e=>(0,I.jsxs)(`div`,{onClick:()=>n?.(e.id),className:`group p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer`,children:[(0,I.jsx)(`span`,{className:`text-xs text-blue-600 font-semibold mb-3 block`,children:r(`knowledge.categories.${e.category}`)}),(0,I.jsx)(`h4`,{className:`text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug`,children:e.title}),(0,I.jsx)(`p`,{className:`text-slate-500 text-sm line-clamp-2 leading-relaxed`,children:e.summary})]},e.id))})]}),(0,I.jsxs)(`div`,{className:`mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center`,children:[(0,I.jsx)(`h4`,{className:`text-xl font-bold mb-2`,children:r(`knowledge.cta.title`)}),(0,I.jsx)(`p`,{className:`text-blue-200 mb-6 text-sm`,children:r(`knowledge.cta.subtitle`)}),(0,I.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-4 justify-center`,children:[(0,I.jsx)(`button`,{onClick:()=>{t(),setTimeout(()=>document.getElementById(`contact`)?.scrollIntoView({behavior:`smooth`}),100)},className:`px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg`,children:r(`knowledge.cta.contactBtn`)}),(0,I.jsx)(`button`,{onClick:t,className:`px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors`,children:r(`knowledge.cta.moreArticlesBtn`)})]})]})]})]}):(0,I.jsx)(`div`,{className:`min-h-screen flex items-center justify-center`,children:(0,I.jsxs)(`div`,{className:`text-center`,children:[(0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-700 mb-4`,children:r(`common.articleNotFound`)}),(0,I.jsx)(`button`,{onClick:t,className:`px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors`,children:r(`common.backToKnowledge`)})]})})}function za({product:e,index:t}){let{color:n}=e,r=A(),{t:i}=P();return(0,I.jsxs)(`div`,{onClick:()=>r(`/products/${e.id}`),className:`group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-100 flex flex-col`,style:{animationDelay:`${t*40}ms`},children:[(0,I.jsx)(`div`,{className:`h-1.5 bg-gradient-to-r ${n.detailHero} opacity-90`}),(0,I.jsxs)(`div`,{className:`p-6 flex flex-col flex-1`,children:[(0,I.jsxs)(`div`,{className:`flex items-start justify-between mb-4`,children:[(0,I.jsx)(`div`,{className:`w-12 h-12 rounded-xl ${n.iconBg} ${n.iconColor} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`,children:oo[e.icon]||(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,I.jsx)(`span`,{className:`text-xs px-2.5 py-1 rounded-full font-medium ${n.badge} border`,children:e.categoryLabel})]}),(0,I.jsx)(`h3`,{className:`text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug`,children:e.name}),(0,I.jsx)(`p`,{className:`text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2`,children:e.description}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-1.5 mb-4`,children:e.features.slice(0,3).map((e,t)=>(0,I.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100`,children:e},t))}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between pt-3 border-t border-slate-50`,children:[(0,I.jsxs)(`span`,{className:`text-xs font-medium ${n.accent}`,children:[e.detail.scenarios.length,` `,i(`common.scenarios`)]}),(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs font-semibold ${n.accent} group-hover:gap-2 transition-all duration-200`,children:[i(`common.viewDetails`),(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`})})]})]})]})]})}function Ba(){let{t:e}=P(),t=[{key:`consulting`,label:e(`products.page.filterLabels.consulting`),icon:`📋`},{key:`software`,label:e(`products.page.filterLabels.software`),icon:`💻`},{key:`technology`,label:e(`products.page.filterLabels.technology`),icon:`🔬`},{key:`all`,label:e(`products.page.filterLabels.all`),icon:`⊞`}];_i({title:`产品与服务 - FMEA、Weibull、SPC、FTA等质量可靠性软件`,description:`国可工软提供FMEA软件、eWeibull寿命分析、SPC统计过程控制、FTA故障树、MSA测量系统分析、DOE实验设计、可靠性预计等近20款质量可靠性工业软件，全面国产替代进口软件。`,keywords:`FMEA软件,Weibull软件,SPC软件,FTA软件,MSA软件,DOE软件,可靠性预计,质量管理软件,国产替代`,canonical:`/products`});let[n,r]=(0,_.useState)(`all`),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`all`),c=A(),l=at();(0,_.useEffect)(()=>{let e=new URLSearchParams(l.search).get(`cat`);e&&t.some(t=>t.key===e)&&(r(e),s(e))},[l.search]);let u=e=>{e!==n&&(a(!0),setTimeout(()=>{r(e),s(e),a(!1)},180))},d=_a(),f=d.filter(e=>o===`all`||e.category===o),p={all:d.length};for(let e of d)p[e.category]=(p[e.category]||0)+1;return(0,I.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[(0,I.jsx)(Wi,{}),(0,I.jsxs)(`div`,{className:`relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 pt-20 pb-12 overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,backgroundSize:`48px 48px`}}),(0,I.jsx)(`div`,{className:`absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-32 -translate-y-20 pointer-events-none`}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-x-20 translate-y-20 pointer-events-none`}),(0,I.jsxs)(`div`,{className:`relative max-w-6xl mx-auto px-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-blue-200 text-sm mb-5`,children:[(0,I.jsx)(`button`,{onClick:()=>c(`/`),className:`hover:text-white transition-colors`,children:e(`products.page.breadcrumb`)}),(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5 opacity-60`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),(0,I.jsx)(`span`,{className:`text-white/90`,children:e(`products.page.title`)})]}),(0,I.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-end gap-6`,children:[(0,I.jsxs)(`div`,{className:`flex-1`,children:[(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-white mb-3 leading-tight`,children:e(`products.page.title`)}),(0,I.jsx)(`p`,{className:`text-blue-100 text-lg max-w-2xl leading-relaxed`,children:e(`products.page.subtitle`)})]}),(0,I.jsx)(`div`,{className:`flex gap-6 md:gap-8 shrink-0`,children:[{label:e(`products.page.filterLabels.consulting`),value:p.consulting||0},{label:e(`products.page.filterLabels.software`),value:p.software||0},{label:e(`products.page.filterLabels.technology`),value:p.technology||0}].map(e=>(0,I.jsxs)(`div`,{className:`text-center`,children:[(0,I.jsx)(`div`,{className:`text-2xl font-bold text-white`,children:e.value}),(0,I.jsx)(`div`,{className:`text-xs text-blue-200 mt-0.5`,children:e.label})]},e.label))})]})]})]}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16`,children:[(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 mb-8`,children:[(0,I.jsx)(`span`,{className:`text-sm text-slate-400 mr-1 hidden sm:inline`,children:e(`products.page.filterLabel`)}),t.map(e=>{let t=p[e.key]||0,r=n===e.key;return(0,I.jsxs)(`button`,{onClick:()=>u(e.key),className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${r?`bg-blue-600 text-white shadow-lg shadow-blue-200`:`bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm`}`,children:[(0,I.jsx)(`span`,{children:e.label}),(0,I.jsx)(`span`,{className:`min-w-[20px] text-center text-xs px-1.5 py-0.5 rounded-full font-semibold ${r?`bg-white/25 text-white`:`bg-slate-100 text-slate-500`}`,children:t})]},e.key)}),(0,I.jsx)(`span`,{className:`ml-auto text-sm text-slate-400`,dangerouslySetInnerHTML:{__html:e(`products.page.productCount`,{count:f.length})}})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200 ${i?`opacity-0 scale-[0.99]`:`opacity-100 scale-100`}`,style:{transition:`opacity 180ms, transform 180ms`},children:f.map((e,t)=>(0,I.jsx)(za,{product:e,index:t},e.id))}),f.length===0&&!i&&(0,I.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 text-center`,children:[(0,I.jsx)(`div`,{className:`w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4`,children:(0,I.jsx)(`svg`,{className:`w-8 h-8 text-slate-400`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25-2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z`})})}),(0,I.jsx)(`h3`,{className:`text-lg font-semibold text-slate-700 mb-2`,children:e(`products.page.emptyTitle`)}),(0,I.jsx)(`p`,{className:`text-slate-400 text-sm mb-6`,children:e(`products.page.emptyDesc`)}),(0,I.jsxs)(`div`,{className:`flex gap-3`,children:[(0,I.jsx)(`button`,{onClick:()=>u(`all`),className:`px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors`,children:e(`products.page.viewAllBtn`)}),(0,I.jsx)(`button`,{onClick:()=>c(`/#contact`),className:`px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-500 transition-colors`,children:e(`products.page.contactBtn`)})]})]}),f.length>0&&(0,I.jsxs)(`div`,{className:`mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-10 text-white text-center relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,backgroundSize:`32px 32px`}}),(0,I.jsxs)(`div`,{className:`relative`,children:[(0,I.jsx)(`h3`,{className:`text-2xl font-bold mb-3`,children:e(`products.page.ctaTitle`)}),(0,I.jsx)(`p`,{className:`text-blue-100 mb-6 max-w-md mx-auto`,children:e(`products.page.ctaDesc`)}),(0,I.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-center gap-3`,children:[(0,I.jsxs)(`button`,{onClick:()=>c(`/contact`),className:`inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg`,children:[e(`products.page.expertConsult`),(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3`})})]}),(0,I.jsxs)(`a`,{href:`tel:4000032330`,className:`inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/30 text-white rounded-xl font-medium hover:bg-white/25 transition-colors`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z`})}),`4000-032-330`]})]})]})]})]}),(0,I.jsx)(Aa,{})]})}function Va({video:e,index:t}){let[n,r]=(0,_.useState)(!1),{t:i}=P();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{onClick:()=>r(!0),className:`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100`,children:[(0,I.jsxs)(`div`,{className:`relative aspect-video overflow-hidden`,children:[(0,I.jsx)(`img`,{src:e.cover,alt:e.title,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}),(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300`}),(0,I.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,I.jsx)(`div`,{className:`w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`,children:(0,I.jsx)(`svg`,{className:`w-6 h-6 text-slate-800 ml-1`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{d:`M8 5v14l11-7z`})})})}),(0,I.jsx)(`div`,{className:`absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-md`,children:e.duration})]}),(0,I.jsxs)(`div`,{className:`p-4`,children:[(0,I.jsx)(`h4`,{className:`text-sm font-semibold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-relaxed`,children:e.title}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 mt-2`,children:[(0,I.jsx)(`span`,{className:`text-xs text-slate-400`,children:e.date}),(0,I.jsx)(`span`,{className:`text-slate-300`,children:`·`}),(0,I.jsx)(`span`,{className:`text-xs text-slate-400`,children:i(`videos.views`,{count:e.views})})]})]})]}),n&&(0,I.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4`,onClick:()=>r(!1),children:(0,I.jsxs)(`div`,{className:`w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl`,onClick:e=>e.stopPropagation(),children:[(0,I.jsxs)(`div`,{className:`flex justify-between items-center px-4 py-3 bg-slate-900`,children:[(0,I.jsx)(`span`,{className:`text-white text-sm font-medium truncate`,children:e.title}),(0,I.jsx)(`button`,{onClick:()=>r(!1),className:`text-slate-400 hover:text-white transition-colors`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]}),(0,I.jsx)(`iframe`,{src:`//player.bilibili.com/player.html?bvid=${e.bvid}&page=1&autoplay=1`,className:`w-full aspect-video`,allowFullScreen:!0})]})})]})}function Ha(){let{t:e}=P();_i({title:`FMEA与可靠性视频教程 - 免费学习资源`,description:`国可工软提供FMEA免费视频教程，包含DFMEA完整版培训、FMEA六步法案例讲解、P-FMEA微课等系列课程，帮助质量工程师快速掌握FMEA分析方法。`,keywords:`FMEA视频教程,DFMEA培训视频,PFMEA学习,可靠性工程培训,AIAG-VDA教学`,canonical:`/videos`});let t=A();return(0,I.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`div`,{className:`bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 pt-20 pb-10`,children:(0,I.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-blue-200 text-sm mb-4`,children:[(0,I.jsx)(`button`,{onClick:()=>t(`/`),className:`hover:text-white`,children:e(`products.page.breadcrumb`)}),(0,I.jsx)(`span`,{children:`/`}),(0,I.jsx)(`span`,{children:e(`videos.title`)})]}),(0,I.jsx)(`h1`,{className:`text-4xl font-bold text-white mb-4`,children:e(`videos.title`)}),(0,I.jsx)(`p`,{className:`text-blue-100 text-lg max-w-2xl`,children:e(`videos.pageSubtitle`)})]})}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16`,children:[(0,I.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,children:Ca().map((e,t)=>(0,I.jsx)(Va,{video:e,index:t},e.id))}),(0,I.jsxs)(`div`,{className:`mt-12 text-center p-8 bg-white rounded-xl shadow-sm border border-slate-100`,children:[(0,I.jsx)(`p`,{className:`text-slate-600 mb-4`,children:e(`videos.bilibiliCTA`)}),(0,I.jsxs)(`a`,{href:`https://space.bilibili.com/1296244231`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-colors`,children:[(0,I.jsx)(`svg`,{className:`w-5 h-5`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,I.jsx)(`path`,{d:`M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z`})}),e(`videos.bilibiliLink`)]})]})]}),(0,I.jsx)(Aa,{})]})}function Ua(){let{t:e}=P();_i({title:`典型案例 - 汽车、航空、工程机械等行业客户成功案例`,description:`国可工软客户成功案例，涵盖汽车主机厂FMEA实施、航天电子可靠性分析，工程机械SPC质量控制等，查看真实的质量可靠性软件应用效果。`,keywords:`FMEA案例,可靠性软件案例,汽车质量管理案例,航空可靠性案例,国可工软客户案例`,canonical:`/cases`});let t=xa(),n=ba(),r=[e(`cases.filterAll`),...t.map(e=>e.name)],[i,a]=(0,_.useState)(e(`cases.filterAll`)),o=[{number:`1000+`,label:e(`cases.stats.companies`)},{number:`20+`,label:e(`cases.stats.years`)},{number:`20`,label:e(`cases.stats.products`)},{number:`20+`,label:e(`cases.stats.industries`)}],[s,c]=(0,_.useState)(null),l=A(),u=!i||i===e(`cases.filterAll`)?n:n.filter(e=>e.industry===i);return(0,I.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[(0,I.jsx)(Wi,{}),(0,I.jsxs)(`div`,{className:`bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 pt-20 pb-12 relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 opacity-10`,style:{backgroundImage:`radial-gradient(circle at 20% 50%, #60a5fa 0%, transparent 60%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 50%)`}}),(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-8 relative z-10`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-blue-300 text-sm mb-5`,children:[(0,I.jsx)(`button`,{onClick:()=>l(`/`),className:`hover:text-white transition-colors`,children:e(`products.page.breadcrumb`)}),(0,I.jsx)(`svg`,{className:`w-3 h-3`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),(0,I.jsx)(`span`,{className:`text-white`,children:e(`cases.title`)})]}),(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-white mb-4 leading-tight`,children:e(`cases.pageTitle`)}),(0,I.jsx)(`p`,{className:`text-blue-200 text-lg max-w-2xl mb-10`,children:e(`cases.pageDesc`)}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-4`,children:o.map((e,t)=>(0,I.jsxs)(`div`,{className:`bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20`,children:[(0,I.jsx)(`div`,{className:`text-2xl font-bold text-white`,children:e.number}),(0,I.jsx)(`div`,{className:`text-blue-200 text-sm`,children:e.label})]},t))})]})]}),(0,I.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6 py-12`,children:[(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-10`,children:r.map(e=>(0,I.jsx)(`button`,{onClick:()=>a(e),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${i===e?`bg-blue-600 text-white shadow-md shadow-blue-200`:`bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600`}`,children:e},e))}),(0,I.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:u.map(t=>{let n=s===t.id;return(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col`,children:[(0,I.jsxs)(`div`,{className:`bg-gradient-to-r from-blue-600 to-indigo-700 px-6 pt-5 pb-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,I.jsx)(`span`,{className:`text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full`,children:t.industry}),(0,I.jsx)(`span`,{className:`text-blue-200 text-xs`,children:t.date})]}),(0,I.jsx)(`h3`,{className:`text-base font-bold text-white leading-snug`,children:t.title})]}),(0,I.jsxs)(`div`,{className:`p-6 flex flex-col flex-1`,children:[(0,I.jsxs)(`div`,{className:`mb-4`,children:[(0,I.jsx)(`div`,{className:`text-xs font-bold text-orange-600 uppercase tracking-wide mb-1.5`,children:e(`cases.challenge`)}),(0,I.jsx)(`p`,{className:`text-slate-600 text-sm leading-relaxed ${n?``:`line-clamp-2`}`,children:t.problem})]}),n&&(0,I.jsxs)(`div`,{className:`mb-4`,children:[(0,I.jsx)(`div`,{className:`text-xs font-bold text-blue-600 uppercase tracking-wide mb-1.5`,children:e(`cases.solution`)}),(0,I.jsx)(`p`,{className:`text-slate-600 text-sm leading-relaxed`,children:t.solution})]}),(0,I.jsxs)(`div`,{className:`mb-5`,children:[(0,I.jsx)(`div`,{className:`text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2`,children:e(`cases.results`)}),(0,I.jsx)(`ul`,{className:`space-y-1.5`,children:(n?t.result:t.result.slice(0,2)).map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-start gap-2 text-sm text-slate-700`,children:[(0,I.jsx)(`span`,{className:`w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`,children:`✓`}),(0,I.jsx)(`span`,{children:e})]},t))})]}),(0,I.jsxs)(`div`,{className:`mt-auto pt-4 border-t border-slate-100 flex items-center justify-between`,children:[(0,I.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:t.products.map((e,t)=>(0,I.jsx)(`span`,{className:`text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100`,children:e},t))}),(0,I.jsxs)(`button`,{onClick:()=>c(n?null:t.id),className:`text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 ml-2 transition-colors`,children:[e(n?`common.viewAll`:`common.viewDetails`),(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5 transition-transform ${n?`rotate-180`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})})]})]})]})]},t.id)})}),u.length===0&&(0,I.jsx)(`div`,{className:`text-center py-20 text-slate-400`,children:(0,I.jsx)(`div`,{className:`text-lg font-medium`,children:e(`cases.noResults`)})}),(0,I.jsxs)(`div`,{className:`mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center`,children:[(0,I.jsx)(`h2`,{className:`text-2xl md:text-3xl font-bold text-white mb-3`,children:e(`cases.ctaTitle`)}),(0,I.jsx)(`p`,{className:`text-blue-200 mb-8 max-w-xl mx-auto`,children:e(`cases.ctaDesc`)}),(0,I.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-4 justify-center`,children:[(0,I.jsx)(`a`,{href:`tel:4000032330`,className:`inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg`,children:e(`cases.ctaPhone`)}),(0,I.jsx)(`button`,{onClick:()=>l(`/contact`),className:`inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors`,children:e(`cases.ctaBook`)})]})]})]}),(0,I.jsx)(Aa,{})]})}var Wa=`/images/knowledge-default.jpg`,Ga=e=>ya().find(t=>t.id===e)?.cover||Wa;function Ka(){let{t:e}=P();_i({title:`FMEA与可靠性知识库 - 技术文章与学习资源`,description:`国可工软知识库，涵盖FMEA知识、FMEA方法、可靠性流程、可靠性评估、行业趋势等技术文章，帮助工程师深入掌握质量可靠性理论与实践。`,keywords:`FMEA教程,FMEA知识库,可靠性工程技术,AIAG-VDA七步法,Weibull分析教程,可靠性预计方法`,canonical:`/knowledge`});let[t]=Nn(),n=t.get(`cat`),r=()=>n===`standard`?`reliability-std`:n===`trend`?`industry-trend`:`all`,[i,a]=(0,_.useState)(r());(0,_.useEffect)(()=>{a(r())},[n]);let o=ya(),s=i===`all`?o:o.filter(e=>e.category===i);return(0,I.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-b from-slate-50 to-white`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`section`,{className:`pt-20 pb-10 px-6`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto text-center`,children:[(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-slate-900 mb-4`,children:e(`knowledge.title`)}),(0,I.jsx)(`p`,{className:`text-lg text-slate-600 max-w-2xl mx-auto`,children:e(`knowledge.subtitle`)})]})}),(0,I.jsx)(`section`,{className:`px-6 pb-8`,children:(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:(0,I.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-3`,children:[Sa().map(e=>(0,I.jsx)(`button`,{onClick:()=>a(e.id),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i===e.id?`bg-blue-600 text-white shadow-lg shadow-blue-600/30`:`bg-white text-slate-600 hover:bg-slate-100 border border-slate-200`}`,children:e.name},e.id)),(0,I.jsx)(`button`,{onClick:()=>a(`all`),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i===`all`?`bg-blue-600 text-white shadow-lg shadow-blue-600/30`:`bg-white text-slate-600 hover:bg-slate-100 border border-slate-200`}`,children:e(`knowledge.categories.all`)})]})})}),(0,I.jsx)(`section`,{className:`px-6 pb-20`,children:(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:s.length===0?(0,I.jsxs)(`div`,{className:`text-center py-20`,children:[(0,I.jsx)(`div`,{className:`w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center`,children:(0,I.jsx)(`svg`,{className:`w-10 h-10 text-slate-400`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25`})})}),(0,I.jsx)(`h3`,{className:`text-lg font-semibold text-slate-800 mb-2`,children:e(`common.noArticles`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`common.noArticlesDesc`)})]}):(0,I.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:s.map(t=>{let n=Ga(t.id);return(0,I.jsxs)(M,{to:`/knowledge/${t.id}`,className:`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100`,children:[(0,I.jsxs)(`div`,{className:`relative h-44 overflow-hidden`,children:[(0,I.jsx)(`img`,{src:n,alt:t.title,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`}),(0,I.jsx)(`div`,{className:`absolute top-3 left-3`,children:(0,I.jsx)(`span`,{className:`px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium`,children:Sa().find(e=>e.id===t.category)?.name||`知识分享`})}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent`})]}),(0,I.jsxs)(`div`,{className:`p-5`,children:[(0,I.jsx)(`h3`,{className:`font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2`,children:t.title}),(0,I.jsx)(`p`,{className:`text-sm text-slate-500 line-clamp-2 mb-4`,children:t.summary}),t.tags&&t.tags.length>0&&(0,I.jsx)(`div`,{className:`flex flex-wrap gap-1.5 mb-3`,children:t.tags.slice(0,3).map((e,t)=>(0,I.jsx)(`span`,{className:`px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs`,children:e},t))}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),(0,I.jsx)(`span`,{children:t.date})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})}),(0,I.jsxs)(`span`,{children:[t.readTime,` `,e(`common.minRead`)]})]})]})]})]},t.id)})})})}),(0,I.jsx)(Aa,{})]})}function qa(){let{t:e}=P(),[t,n]=(0,_.useState)(null),r=e=>{n(e)},i=()=>{n(null)};_i({title:`关于我们 - 专注质量可靠性工业软件20年`,description:`国可工软（苏州）科技有限公司，2012年成立，深耕质量可靠性工业软件20年。ASQ CRE认证工程师团队，拥有40+项软件著作权，ISO9001认证，高新技术企业，服务汽车、航空、航天等行业1000+客户。`,keywords:`国可工软介绍,可靠性软件公司,质量管理软件厂商,ASQ CRE认证,高新技术企业`,canonical:`/about`});let a=[{title:`ISO 9001 质量管理体系认证`,image:`/certificates/iso9001/微信图片_20260409174625_83_23.png`},{title:`ISO 9001 质量管理体系认证`,image:`/certificates/iso9001/微信图片_20260409174632_84_23.png`}],o=[{title:`ISO/IEC 27001 信息安全管理体系认证`,image:`/certificates/iso27001/微信图片_20260409174518_81_23.png`},{title:`ISO/IEC 27001 信息安全管理体系认证`,image:`/certificates/iso27001/微信图片_20260409174525_82_23.png`}],s=[{title:`软件企业证书`,image:`/certificates/software/微信图片_20260409174313_76_23.png`},{title:`软件企业证书`,image:`/certificates/software/微信图片_20260409174346_77_23.png`},{title:`软件企业证书`,image:`/certificates/software/微信图片_20260409174422_78_23.png`},{title:`软件产品证书`,image:`/certificates/software/微信图片_20260409174437_79_23.png`},{title:`软件产品证书`,image:`/certificates/software/微信图片_20260409174443_80_23.png`},{title:`软件产品证书`,image:`/certificates/software/afc82f12c1dff86e6e61c57f05348f10.png`}],c=[{title:`软件著作权登记证书`,image:`/certificates/honor/微信图片_20260409184909_182_2.png`}];e(`about.aboutPage.page.coreValues.0.title`),e(`about.aboutPage.page.coreValues.0.desc`),e(`about.aboutPage.page.coreValues.1.title`),e(`about.aboutPage.page.coreValues.1.desc`),e(`about.aboutPage.page.coreValues.2.title`),e(`about.aboutPage.page.coreValues.2.desc`);let l=[{label:e(`about.aboutPage.page.stats.0.label`),value:e(`about.aboutPage.page.stats.0.value`)},{label:e(`about.aboutPage.page.stats.1.label`),value:e(`about.aboutPage.page.stats.1.value`)},{label:e(`about.aboutPage.page.stats.2.label`),value:e(`about.aboutPage.page.stats.2.value`)},{label:e(`about.aboutPage.page.stats.3.label`),value:e(`about.aboutPage.page.stats.3.value`)}];return(0,I.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`section`,{className:`pt-24 pb-12 px-6 bg-gradient-to-b from-slate-50 to-white`,children:(0,I.jsxs)(`div`,{className:`max-w-6xl mx-auto text-center`,children:[(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-slate-900 mb-4`,children:e(`about.aboutPage.title`)}),(0,I.jsx)(`p`,{className:`text-lg text-slate-600 max-w-2xl mx-auto`,children:e(`about.aboutPage.subtitle`)})]})}),(0,I.jsx)(`section`,{className:`px-6 pb-16`,children:(0,I.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,I.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12`,children:l.map((e,t)=>(0,I.jsxs)(`div`,{className:`relative group`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}),(0,I.jsxs)(`div`,{className:`relative text-center p-6 border-b-2 border-slate-100 group-hover:border-blue-400 transition-colors`,children:[(0,I.jsx)(`div`,{className:`text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-3`,children:e.value}),(0,I.jsx)(`div`,{className:`text-sm font-medium text-slate-500 tracking-wide uppercase`,children:e.label})]})]},t))}),(0,I.jsx)(`div`,{className:`mb-12`,children:(0,I.jsxs)(`div`,{className:`space-y-4 text-slate-600 leading-relaxed text-lg`,children:[(0,I.jsx)(`p`,{dangerouslySetInnerHTML:{__html:e(`about.aboutPage.introP1`)}}),(0,I.jsx)(`p`,{children:e(`about.aboutPage.introP2`)}),(0,I.jsx)(`p`,{children:e(`about.aboutPage.introP3`)})]})}),(0,I.jsx)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12`,children:[{icon:`01`,color:`from-blue-500 to-cyan-400`,title:`国际标准 专业认证`,desc:`核心团队持有 ASQ CRE 国际认证，深耕质量可靠性领域20年+`},{icon:`02`,color:`from-purple-500 to-pink-400`,title:`自主研发 国产替代`,desc:`14款自主研发软件，覆盖FMEA、Weibull、SPC等全生命周期`},{icon:`03`,color:`from-emerald-500 to-teal-400`,title:`专业团队 定制服务`,desc:`技术团队曾任职于GE、Honeywell、GM等国际企业`},{icon:`04`,color:`from-orange-500 to-amber-400`,title:`行业认可 荣誉资质`,desc:`工信部典型场景奖、工业APP大赛三等奖等多项殊荣`}].map((e,t)=>(0,I.jsxs)(`div`,{className:`group relative`,children:[(0,I.jsx)(`div`,{className:`absolute -inset-0.5 bg-gradient-to-r ${e.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500`}),(0,I.jsxs)(`div`,{className:`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 hover:border-white/50 transition-all duration-300`,children:[(0,I.jsxs)(`div`,{className:`flex items-start justify-between mb-4`,children:[(0,I.jsx)(`span`,{className:`text-xs font-bold bg-gradient-to-r ${e.color} bg-clip-text text-transparent`,children:e.icon}),(0,I.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-gradient-to-br ${e.color} flex items-center justify-center shadow-lg shadow-blue-500/20`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})})})]}),(0,I.jsx)(`h4`,{className:`font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors`,children:e.title}),(0,I.jsx)(`p`,{className:`text-sm text-slate-500 leading-relaxed`,children:e.desc})]})]},t))}),(0,I.jsx)(`div`,{className:`grid md:grid-cols-3 gap-6`,children:[{icon:`培`,color:`from-blue-500 to-blue-600`,bgGlow:`bg-blue-500`,title:`专业培训`,desc:`FMEA、可靠性工程、SPC统计过程控制等实战培训课程`,tags:[`DFMEA`,`PFMEA`,`MSA`]},{icon:`咨`,color:`from-green-500 to-emerald-600`,bgGlow:`bg-green-500`,title:`技术咨询`,desc:`质量可靠性体系建设、流程优化、项目辅导`,tags:[`体系搭建`,`FMEA项目`,`六西格玛`]},{icon:`软`,color:`from-purple-500 to-violet-600`,bgGlow:`bg-purple-500`,title:`软件开发`,desc:`自主研发FMEA、Weibull、SPC等14款可靠性软件`,tags:[`FMEA`,`Weibull`,`AI智能`]}].map((e,t)=>(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-4 mb-4`,children:[(0,I.jsx)(`span`,{className:`w-12 h-12 bg-gradient-to-br ${e.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`,children:e.icon}),(0,I.jsx)(`h4`,{className:`font-bold text-slate-800 text-xl`,children:e.title})]}),(0,I.jsx)(`p`,{className:`text-slate-500 text-sm mb-4`,children:e.desc}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.tags.map((e,t)=>(0,I.jsx)(`span`,{className:`px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors`,children:e},t))})]},t))})]})}),(0,I.jsx)(`section`,{className:`px-6 pb-16 bg-gradient-to-b from-slate-50 to-white`,children:(0,I.jsxs)(`div`,{className:`max-w-6xl mx-auto py-12`,children:[(0,I.jsxs)(`h2`,{className:`text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`w-1 h-8 bg-blue-600 rounded-full`}),e(`about.aboutPage.certifications`)]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-4`,children:[(0,I.jsxs)(`div`,{className:`bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group`,children:[(0,I.jsx)(`div`,{className:`aspect-[3/4] bg-gradient-to-br from-slate-50 to-amber-50 p-3`,children:(0,I.jsx)(`img`,{src:a[0].image,alt:`ISO 9001`,className:`w-full h-full object-contain group-hover:scale-105 transition-transform`,onError:e=>e.target.style.display=`none`})}),(0,I.jsxs)(`div`,{className:`p-3 bg-slate-900 text-white text-center`,children:[(0,I.jsx)(`div`,{className:`text-sm font-medium`,children:e(`about.aboutPage.page.certs.iso9001.name`)}),(0,I.jsx)(`div`,{className:`text-xs text-slate-400`,children:e(`about.aboutPage.page.certs.iso9001.desc`)})]})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group`,children:[(0,I.jsx)(`div`,{className:`aspect-[3/4] bg-gradient-to-br from-slate-50 to-green-50 p-3`,children:(0,I.jsx)(`img`,{src:o[0].image,alt:`ISO 27001`,className:`w-full h-full object-contain group-hover:scale-105 transition-transform`,onError:e=>e.target.style.display=`none`})}),(0,I.jsxs)(`div`,{className:`p-3 bg-slate-900 text-white text-center`,children:[(0,I.jsx)(`div`,{className:`text-sm font-medium`,children:e(`about.aboutPage.page.certs.iso27001.name`)}),(0,I.jsx)(`div`,{className:`text-xs text-slate-400`,children:e(`about.aboutPage.page.certs.iso27001.desc`)})]})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group`,children:[(0,I.jsx)(`div`,{className:`aspect-[3/4] bg-gradient-to-br from-slate-50 to-blue-50 p-3`,children:(0,I.jsx)(`img`,{src:s[0].image,alt:e(`about.aboutPage.page.certs.software.name`),className:`w-full h-full object-contain group-hover:scale-105 transition-transform`,onError:e=>e.target.style.display=`none`})}),(0,I.jsxs)(`div`,{className:`p-3 bg-slate-900 text-white text-center`,children:[(0,I.jsx)(`div`,{className:`text-sm font-medium`,children:e(`about.aboutPage.page.certs.software.name`)}),(0,I.jsx)(`div`,{className:`text-xs text-slate-400`,children:e(`about.aboutPage.page.certs.software.desc`)})]})]}),c.map((t,n)=>(0,I.jsxs)(`div`,{className:`bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group cursor-pointer`,onClick:()=>r(t),children:[(0,I.jsx)(`div`,{className:`aspect-[3/4] bg-gradient-to-br from-slate-50 to-amber-50 p-3`,children:(0,I.jsx)(`img`,{src:t.image,alt:e(`about.aboutPage.page.certs.copyright.name`),className:`w-full h-full object-contain group-hover:scale-105 transition-transform`,onError:e=>e.target.style.display=`none`})}),(0,I.jsxs)(`div`,{className:`p-3 bg-slate-900 text-white text-center`,children:[(0,I.jsx)(`div`,{className:`text-sm font-medium`,children:e(`about.aboutPage.page.certs.copyright.name`)}),(0,I.jsx)(`div`,{className:`text-xs text-slate-400`,children:e(`about.aboutPage.page.certs.copyright.count`)})]})]},n))]})]})}),t&&(0,I.jsx)(`div`,{className:`fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4`,onClick:i,children:(0,I.jsxs)(`div`,{className:`relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl`,children:[(0,I.jsx)(`button`,{onClick:i,className:`absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110`,children:(0,I.jsx)(Hi,{className:`w-6 h-6 text-slate-700`})}),(0,I.jsx)(`img`,{src:t.image,alt:t.title,className:`max-w-full max-h-[85vh] object-contain`,onClick:e=>e.stopPropagation()}),(0,I.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6`,children:(0,I.jsx)(`h4`,{className:`text-white font-bold text-lg`,children:t.title})})]})}),(0,I.jsx)(Aa,{})]})}var Ja={news:`bg-blue-50 text-blue-700`,tech:`bg-sky-50 text-sky-700`,case:`bg-cyan-50 text-cyan-700`};function Ya(){let{t:e}=P();_i({title:`新闻动态 - 公司资讯与技术文章`,description:`国可工软新闻动态，包含公司最新资讯、FMEA技术文章、可靠性分析案例分享，了解质量可靠性工业软件行业最新动态。`,keywords:`FMEA新闻,可靠性技术文章,质量管理资讯,国可工软新闻,AIAG-VDA更新`,canonical:`/news`});let[t,n]=(0,_.useState)(`all`),r=A(),i=[{key:`news`,label:e(`news.categoryLabels.news`)},{key:`tech`,label:e(`news.categoryLabels.tech`)},{key:`case`,label:e(`news.categoryLabels.case`)},{key:`all`,label:e(`news.filters.all`)}],a=va().filter(e=>(t===`all`||e.category===t)&&e.published);return(0,I.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-b from-slate-50 to-white`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`section`,{className:`pt-20 pb-10 px-6`,children:(0,I.jsxs)(`div`,{className:`max-w-7xl mx-auto text-center`,children:[(0,I.jsxs)(`span`,{className:`inline-flex items-center gap-2 text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4`,children:[(0,I.jsx)(`span`,{className:`w-8 h-0.5 bg-blue-600`}),`News & Articles`,(0,I.jsx)(`span`,{className:`w-8 h-0.5 bg-blue-600`})]}),(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-slate-900 mb-4`,children:e(`news.title`)}),(0,I.jsx)(`p`,{className:`text-lg text-slate-600 max-w-2xl mx-auto`,children:e(`news.pageSubtitle`)})]})}),(0,I.jsx)(`section`,{className:`px-6 pb-8`,children:(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:(0,I.jsx)(`div`,{className:`flex gap-3 flex-wrap justify-center`,children:i.map(e=>(0,I.jsx)(`button`,{onClick:()=>n(e.key),className:`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${t===e.key?`bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30`:`bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md`}`,children:e.label},e.key))})})}),(0,I.jsx)(`section`,{className:`px-6 pb-20`,children:(0,I.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:a.length===0?(0,I.jsx)(`div`,{className:`text-center py-20 text-slate-400`,children:e(`news.noArticles`)}):(0,I.jsx)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-3 gap-7`,children:a.map(t=>(0,I.jsxs)(`div`,{className:`group bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 cursor-pointer`,onClick:()=>r(`/news/${t.id}`),children:[(0,I.jsx)(`div`,{className:`h-2 ${t.category===`news`||t.category===`tech`?`bg-gradient-to-r from-blue-500 to-blue-400`:`bg-gradient-to-r from-emerald-500 to-emerald-400`}`}),(0,I.jsxs)(`div`,{className:`p-7 flex flex-col flex-1`,children:[(0,I.jsx)(`div`,{className:`flex items-center justify-between mb-4`,children:(0,I.jsx)(`span`,{className:`text-xs px-3 py-1.5 rounded-full font-semibold ${Ja[t.category]}`,children:e(`news.categoryLabels.${t.category}`)})}),(0,I.jsx)(`h3`,{className:`font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2`,children:t.title}),(0,I.jsx)(`p`,{className:`text-slate-500 text-base leading-relaxed line-clamp-3 flex-1 mb-5`,children:t.summary}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between mt-auto pt-4 border-t border-slate-100`,children:[(0,I.jsx)(`span`,{className:`text-sm text-slate-400`,children:t.date}),(0,I.jsxs)(`span`,{className:`text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`,children:[e(`news.readMore`),(0,I.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]})]})]},t.id))})})}),(0,I.jsx)(Aa,{})]})}function Xa(){return(0,I.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-b from-slate-50 to-white`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`div`,{className:`pt-20`,children:(0,I.jsx)(ka,{})}),(0,I.jsx)(Aa,{})]})}function Za(){let{t:e}=P(),t=A(),[n,r]=(0,_.useState)(`dfmea`),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1),c=t=>{let n=e(`ai.tableData.${t}`,{returnObjects:!0});return Array.isArray(n)?n:[]};e(`ai.templates.dfmea.name`),e(`ai.templates.dfmea.desc`),c(`dfmea`),e(`ai.templates.pfmea.name`),e(`ai.templates.pfmea.desc`),c(`pfmea`),e(`ai.templates.msra.name`),e(`ai.templates.msra.desc`),c(`msra`),_i({title:`国匠AI - 质量可靠性领域专属AI大模型`,description:`国匠AI是国可工软自主研发的质量可靠性领域垂直AI大模型，融合DeepSeek通用模型与行业专属知识库，实现FMEA智能一键生成、失效链推理、行业标准问答，大幅提升质量工程效率。`,keywords:`国匠AI,FMEA AI,质量AI大模型,智能FMEA,AI可靠性分析,工业AI助手`,canonical:`/ai`});let l=[`dfmea`,`pfmea`,`msra`];return(0,_.useEffect)(()=>{if(i)return;let e=setInterval(()=>{r(e=>l[(l.indexOf(e)+1)%l.length])},3e3);return()=>clearInterval(e)},[i]),(0,I.jsxs)(`div`,{className:`min-h-screen bg-slate-50`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(`section`,{className:`bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600`,children:(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 pt-20 pb-12 text-center`,children:[(0,I.jsx)(`h1`,{className:`text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight whitespace-nowrap`,children:e(`ai.pageTitle`)}),(0,I.jsx)(`p`,{className:`text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto`,children:e(`ai.pageSubtitle`)}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-4 justify-center`,children:[(0,I.jsx)(`button`,{onClick:()=>s(!0),className:`px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg`,children:e(`ai.freeTrial`)}),(0,I.jsx)(`button`,{onClick:()=>t(`/products`),className:`px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-colors border border-white/30`,children:e(`ai.viewProducts`)})]})]})}),(0,I.jsx)(Qa,{}),(0,I.jsx)(`section`,{className:`max-w-6xl mx-auto px-6 pb-16`,children:(0,I.jsx)(eo,{})}),(0,I.jsx)(`section`,{className:`bg-white py-16`,children:(0,I.jsx)(`div`,{className:`max-w-6xl mx-auto px-6`,children:(0,I.jsxs)(`div`,{className:`grid md:grid-cols-3 gap-8`,children:[(0,I.jsxs)(`div`,{className:`text-center p-8 rounded-2xl bg-slate-50`,children:[(0,I.jsx)(`div`,{className:`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center`,children:(0,I.jsx)(`svg`,{className:`w-7 h-7 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 10V3L4 14h7v7l9-11h-7z`})})}),(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2`,children:e(`ai.features.oneClick.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`ai.features.oneClick.desc`)})]}),(0,I.jsxs)(`div`,{className:`text-center p-8 rounded-2xl bg-slate-50`,children:[(0,I.jsx)(`div`,{className:`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center`,children:(0,I.jsx)(`svg`,{className:`w-7 h-7 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z`})})}),(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2`,children:e(`ai.features.smartReasoning.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`ai.features.smartReasoning.desc`)})]}),(0,I.jsxs)(`div`,{className:`text-center p-8 rounded-2xl bg-slate-50`,children:[(0,I.jsx)(`div`,{className:`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center`,children:(0,I.jsx)(`svg`,{className:`w-7 h-7 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253`})})}),(0,I.jsx)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2`,children:e(`ai.features.knowledgeBase.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`ai.features.knowledgeBase.desc`)})]})]})})}),(0,I.jsx)(`section`,{className:`py-16 lg:py-20`,children:(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 lg:px-8 text-center`,children:[(0,I.jsx)(`h2`,{className:`text-3xl font-bold text-slate-800 mb-4`,children:e(`ai.cta.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500 mb-8`,children:e(`ai.cta.subtitle`)}),(0,I.jsx)(`button`,{onClick:()=>s(!0),className:`px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30`,children:e(`ai.cta.btn`)})]})}),(0,I.jsx)(Aa,{}),(0,I.jsx)(Ui,{isOpen:o,onClose:()=>s(!1)})]})}function Qa(){let{t:e}=P(),t=e(`ai.sevenSteps.steps`,{returnObjects:!0});return(0,I.jsxs)(`section`,{className:`max-w-6xl mx-auto px-6 py-16`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,I.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4`,children:[(0,I.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-blue-500`}),`AIAG & VDA 标准`]}),(0,I.jsx)(`h2`,{className:`text-3xl font-bold text-slate-900 mb-3`,children:e(`ai.sevenSteps.title`)}),(0,I.jsx)(`p`,{className:`text-slate-500`,children:e(`ai.sevenSteps.subtitle`)})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`grid grid-cols-12 bg-slate-900 text-white text-sm`,children:[(0,I.jsx)(`div`,{className:`col-span-2 px-4 py-3 font-semibold`,children:e(`ai.sevenSteps.header1`)}),(0,I.jsx)(`div`,{className:`col-span-4 px-4 py-3 font-semibold`,children:e(`ai.sevenSteps.header2`)}),(0,I.jsx)(`div`,{className:`col-span-6 px-4 py-3 font-semibold bg-blue-600`,children:e(`ai.sevenSteps.header3`)})]}),t.map((e,t)=>(0,I.jsxs)(`div`,{className:`grid grid-cols-12 text-sm ${t%2==0?`bg-white`:`bg-slate-50`} hover:bg-blue-50/50 transition-colors`,children:[(0,I.jsxs)(`div`,{className:`col-span-2 px-4 py-4 flex items-center gap-3`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm`,children:t+1}),(0,I.jsx)(`span`,{className:`font-medium text-slate-800`,children:e.title})]}),(0,I.jsx)(`div`,{className:`col-span-4 px-4 py-4 text-slate-600`,children:e.content}),(0,I.jsx)(`div`,{className:`col-span-6 px-4 py-4 bg-blue-50/50`,children:(0,I.jsx)(`ul`,{className:`space-y-1`,children:e.ai.map((e,t)=>(0,I.jsxs)(`li`,{className:`flex items-center gap-2 text-blue-700`,children:[(0,I.jsx)(`svg`,{className:`w-4 h-4 flex-shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M5 13l4 4L19 7`})}),(0,I.jsx)(`span`,{children:e})]},t))})})]},t))]})]})}var $a=({type:e,className:t=`w-6 h-6`})=>{let n={intro:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z`})}),ai:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})}),dual:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4`})}),cross:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z`})}),monitor:(0,I.jsxs)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:[(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]}),integrate:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z`})}),collab:(0,I.jsx)(`svg`,{className:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z`})})};return n[e]||n.intro};function eo(){let{t:e}=P(),[t,n]=(0,_.useState)(`intro`),r=[{id:`intro`,label:e(`ai.functions.tabs.intro.title`)},{id:`ai`,label:e(`ai.functions.tabs.ai.title`)},{id:`dual`,label:e(`ai.functions.tabs.dual.title`)},{id:`cross`,label:e(`ai.functions.tabs.cross.title`)},{id:`monitor`,label:e(`ai.functions.tabs.monitor.title`)},{id:`integrate`,label:e(`ai.functions.tabs.integrate.title`)},{id:`collab`,label:e(`ai.functions.tabs.collab.title`)}],i=(t=>e(`ai.functions.tabs.${t}`,{returnObjects:!0}))(t);return(0,I.jsxs)(`div`,{className:`flex gap-8`,children:[(0,I.jsx)(`div`,{className:`w-48 flex-shrink-0`,children:(0,I.jsx)(`div`,{className:`sticky top-24`,children:(0,I.jsx)(`nav`,{className:`space-y-1`,children:r.map(e=>(0,I.jsxs)(`button`,{onClick:()=>n(e.id),className:`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center gap-3 relative ${t===e.id?`text-blue-600 font-medium`:`text-slate-500 hover:text-slate-700`}`,children:[t===e.id&&(0,I.jsx)(`span`,{className:`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-500 rounded-r`}),(0,I.jsx)($a,{type:e.id,className:`w-5 h-5 ${t===e.id?`text-blue-500`:`text-slate-400`}`}),(0,I.jsx)(`span`,{children:e.label})]},e.id))})})}),(0,I.jsx)(`div`,{className:`flex-1 min-w-0`,children:(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 px-10 py-10 relative overflow-hidden`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-1/4 w-96 h-32 bg-blue-500/20 blur-3xl rounded-full`}),(0,I.jsx)(`div`,{className:`absolute bottom-0 right-1/4 w-64 h-32 bg-cyan-500/10 blur-2xl rounded-full`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-4 relative z-10`,children:[(0,I.jsx)(`span`,{className:`px-3 py-1 rounded-lg bg-blue-500/80 text-white text-sm font-medium`,children:i.subtitle.split(`·`)[0]}),(0,I.jsx)(`span`,{className:`px-3 py-1 rounded-lg bg-white/10 text-blue-200 text-sm`,children:i.subtitle.split(`·`)[1]})]}),(0,I.jsx)(`h3`,{className:`text-3xl font-bold text-white mb-3 relative z-10`,children:i.title}),(0,I.jsx)(`p`,{className:`text-slate-300 text-base leading-relaxed relative z-10`,children:i.desc})]}),(0,I.jsxs)(`div`,{className:`p-8`,children:[(0,I.jsx)(`div`,{className:`mb-6`,children:(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,I.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30`,children:(0,I.jsx)(`svg`,{className:`w-5 h-5 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z`})})}),(0,I.jsx)(`h4`,{className:`text-lg font-bold text-slate-800`,children:e(`ai.coreFeatures`)})]})}),(0,I.jsx)(`div`,{className:`grid md:grid-cols-2 gap-4 mb-6`,children:i.features.map((e,t)=>(0,I.jsx)(`div`,{className:`p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-200`,children:(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5`,children:(0,I.jsx)(`svg`,{className:`w-3.5 h-3.5 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:3,d:`M5 13l4 4L19 7`})})}),(0,I.jsx)(`span`,{className:`text-sm text-slate-700 leading-relaxed`,children:e})]})},t))}),i.advantage&&(0,I.jsxs)(`div`,{className:`p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200 shadow-sm`,children:[(0,I.jsxs)(`h4`,{className:`text-sm font-bold text-red-700 mb-3 flex items-center gap-2`,children:[(0,I.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 10V3L4 14h7v7l9-11h-7z`})}),`竞争优势`]}),(0,I.jsx)(`p`,{className:`text-sm text-red-600 leading-relaxed`,children:i.advantage})]})]})]})})]})}function to(){return _i({title:`边界与范围 - 国可工软`,description:`国可工软科技有限公司边界与范围声明，包含公司联系信息、服务条款和隐私政策。`,canonical:`/boundary`}),(0,I.jsx)(`div`,{className:`min-h-screen bg-slate-50`,children:(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 py-16`,children:[(0,I.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-900 mb-4`,children:`边界与范围`}),(0,I.jsx)(`p`,{className:`text-slate-600`,children:`Boundary and Scope Statement`})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,I.jsx)(`div`,{className:`w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center`,children:(0,I.jsx)(Pi,{className:`w-5 h-5 text-blue-600`})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:`公司信息`})]}),(0,I.jsxs)(`div`,{className:`space-y-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`span`,{className:`text-slate-500 w-20 flex-shrink-0`,children:`公司名称`}),(0,I.jsx)(`span`,{className:`text-slate-900 font-medium`,children:`国可工软科技有限公司`})]}),(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(zi,{className:`w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{className:`text-slate-500 block mb-1`,children:`公司地址`}),(0,I.jsx)(`span`,{className:`text-slate-900`,children:`苏州高新区竹园路209号2号楼310室`})]})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(Bi,{className:`w-5 h-5 text-slate-400 flex-shrink-0`}),(0,I.jsx)(`span`,{className:`text-slate-500 w-16 flex-shrink-0`,children:`联系电话`}),(0,I.jsx)(`a`,{href:`tel:4000-032-330`,className:`text-blue-600 hover:underline`,children:`4000-032-330`})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(Ri,{className:`w-5 h-5 text-slate-400 flex-shrink-0`}),(0,I.jsx)(`span`,{className:`text-slate-500 w-16 flex-shrink-0`,children:`电子邮箱`}),(0,I.jsx)(`a`,{href:`mailto:service@nationrel.com`,className:`text-blue-600 hover:underline`,children:`service@nationrel.com`})]})]})]}),(0,I.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mb-6`,children:`法律声明`}),(0,I.jsxs)(`div`,{className:`space-y-4 text-slate-600`,children:[(0,I.jsx)(`p`,{children:`本网站所有内容仅供信息参考之用。国可工软科技有限公司保留随时修改、更新或删除本网站内容的权利，恕不另行通知。`}),(0,I.jsx)(`p`,{children:`访问和使用本网站即表示您同意遵守我们的服务条款和隐私政策。如有任何疑问，请通过上述联系方式与我们取得联系。`})]}),(0,I.jsxs)(`div`,{className:`mt-6 flex flex-wrap gap-4`,children:[(0,I.jsx)(M,{to:`/terms`,className:`inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors`,children:`服务条款`}),(0,I.jsx)(M,{to:`/privacy`,className:`inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors`,children:`隐私政策`})]})]}),(0,I.jsxs)(`div`,{className:`text-center text-sm text-slate-500 pt-8 border-t border-slate-200`,children:[(0,I.jsxs)(`p`,{className:`mb-2`,children:[`Copyright © 2020-`,new Date().getFullYear(),` 版权所有 © 国可工软科技有限公司`]}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(M,{to:`/terms`,className:`hover:text-slate-700`,children:`服务条款`}),(0,I.jsx)(`span`,{className:`mx-2`,children:`|`}),(0,I.jsx)(M,{to:`/privacy`,className:`hover:text-slate-700`,children:`隐私协议`}),(0,I.jsx)(`span`,{className:`mx-2`,children:`|`}),(0,I.jsx)(`a`,{href:`https://beian.miit.gov.cn/#/Integrated/index`,target:`_blank`,rel:`noopener noreferrer`,className:`hover:text-slate-700`,children:`苏ICP备2025155226号-1`})]})]})]})})}function no(){return(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 py-16`,children:[(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-900 mb-8`,children:`国可工软SAAS FMEA隐私协议`}),(0,I.jsxs)(`div`,{className:`prose prose-slate max-w-none`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`1. 我们会收集您的哪些信息`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`在您使用本软件及相关服务时，经取得您授权同意后，我们在您使用本软件的过程中会收集和处理您的个人信息。`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）当您创建国可工软FMEA账户时，我们会收集您提交的个人信息，包括您的手机号码、电子邮件地址以及密码等信息；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（2）当您购买产品服务时，我们会收集您的订单信息，如购买的产品、购买日期及订单数量，支付信息等；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）在您使用本软件的过程中收集的信息。在您使用本软件时，为了保障本软件及相关服务的安全运行，我们会自动收集您的硬件型号、操作系统版本号、唯一设备标识符、网络设备硬件地址、软件版本号。为了预防恶意程序及安全运营所必需，我们会收集安装的应用信息或正在运行的进程信息、应用程序的总体运行、使用情况与频率、应用崩溃情况、总体安装使用情况、性能数据、应用来源。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`2. 我们如何使用您的个人信息`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`我们会将您的个人信息用于以下目的：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）实现产品功能所必需；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（2）给用户提供订购的产品和服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）用户作为与国可工软缔结合同的一方履行合同所必需。以便国可工软获取必要的信息去识别和向用户发送账单并从按照用户同意的付费方式收费；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（4）验证您的身份并提供客户服务或支持，防止盗版；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（5）分析您对我们网站和产品的使用情况，以更好地了解它们的使用方式，从而改进我们的产品和服务以及用户体验；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（6）国可工软内部统计和分析用途；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（7）征得您同意的其他用途。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`3. 我们如何使用Cookies`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`为保证网站和产品正常运行，为帮助您获得更轻松的访问体验，并向您推荐您可能感兴趣的信息，我们会在您的计算机或移动设备上存储名为Cookie的小数据文件。Cookie通常包含标识符、站点名称以及一些号码及字符。借助于Cookie，网站能够存储您的偏好等数据，以此帮助您免去重复填写个人信息、输入历史搜索内容等繁琐；同时我们还可能利用上述技术为您推荐、展示、推送您感兴趣的内容。您可根据自己的偏好管理或删除Cookie，您也可以清除计算机上保存的所有Cookie。我们不会将Cookie用于本政策所述目的之外的任何用途。大部分网络浏览器都设有阻止Cookie的功能，您可以通过浏览器设置选项清除计算机上保存的所有Cookie，但如果您这么做，可能会导致您在每一次访问我们的网站时都需要亲自更改用户设置。`})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`4. 我们是否会共享或披露您的信息`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`请您理解，我们的产品和服务并不仅仅只由我们向您提供，在一些场合下，为了给您更好的产品体验，保障运营效率与质量，确保运营安全，经您同意，我们可能会与我们的关联方、第三方进行合作。因此，我们可能会在与我们的关联方、第三方合作联合为您提供服务的过程中共享您的个人信息。`}),(0,I.jsx)(`p`,{children:`共享您的个人信息，我们将遵循如下原则：`}),(0,I.jsx)(`p`,{children:`授权同意原则：未经您的同意，我们不会共享您的个人信息，除非共享的个人信息是去标识化处理后的信息，且共享第三方无法重新识别此类信息的自然人主体。如果第三方使用信息的目的超越原授权同意范围，他们需要重新征得您的同意。`}),(0,I.jsx)(`p`,{children:`合法正当与最小必要原则：共享的数据必须具有合法正当目的，且共享的数据以达成目的必要为限。 安全审慎原则：我们将审慎评估第三方使用共享信息的目的，对这些合作方的安全保障能力进行综合评估，并要求其遵循合作法律协议。我们会对合作方获取信息的软件工具开发包、应用程序接口（API）进行严格的安全监测，以保护数据安全。`}),(0,I.jsx)(`p`,{children:`我们仅会在以下情况下，公开披露您的个人信息：`}),(0,I.jsx)(`p`,{children:`获得您明确同意或基于您的主动选择，我们可能会公开披露您的个人信息；`}),(0,I.jsx)(`p`,{children:`或为保护国可工软FMEA平台及其关联方用户或公众的人身财产安全免遭侵害，我们可能依据适用的法律或国可工软平台相关协议、规则披露关于您的个人信息；`}),(0,I.jsx)(`p`,{children:`基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。`}),(0,I.jsx)(`p`,{children:`您主动与他人共享的信息：您可以通过我们的网站进行搜索问题上报、评价等，以帮助更多的用户享受到更精准的信息。您可以利用我们的分享功能与您的特定或不特定社交好友（如微信、微博）共享您的个人信息。请您在分享前充分考虑信息接收人的信誉情况，并建议您查看您利用的社交网络或第三方服务提供商的隐私声明，以了解他们如何处理您的信息，以便审慎决策。`}),(0,I.jsx)(`p`,{children:`以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：`}),(0,I.jsx)(`p`,{children:`与国家安全、国防安全有关的；`}),(0,I.jsx)(`p`,{children:`与公共安全、公共卫生、重大公共利益有关的；`}),(0,I.jsx)(`p`,{children:`与犯罪侦查、起诉、审判和判决执行等有关的；`}),(0,I.jsx)(`p`,{children:`出于维护您或其他个人的⽣命、财产等重大合法权益但又很难得到本人同意的；`}),(0,I.jsx)(`p`,{children:`您自行向社会公众公开的个人信息；`}),(0,I.jsx)(`p`,{children:`从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`5. 我们如何保护和保存您的个人信息`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`我们已使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息，并保证所收集的信息仅用于本隐私政策所规定的目的。`}),(0,I.jsx)(`p`,{children:`我们会采取一切合理可行的措施，确保未收集无关的个人信息。我们承诺将使您的个人信息存储时间始终处于法律要求或实现产品功能和服务所需的合理必要的期限内。在您使用我们的产品和服务期间，我们将保存为了向您提供我们的产品和服务所必需的您的个人信息。超出上述个人信息保存期限后，我们会对您的个人信息进行删除或匿名化处理。`}),(0,I.jsx)(`p`,{children:`在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。`}),(0,I.jsx)(`p`,{children:`如出现国可工软FMEA产品和服务停止运营的情形，我们会采取合理措施保护您个人信息安全，包括及时停止继续收集个人信息的活动；停止运营的通知将以逐一送达或公告的形式通知用户；并对所持有的个人信息进行删除或匿名化处理等。`}),(0,I.jsx)(`p`,{children:`我们依照法律法规的规定，将境内收集的您的个人信息存储于中华人民共和国境内。目前，我们不会将上述信息传输至境外，如果我们向境外传输，我们会遵循相关国家规定或者征求您的同意。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`6. 您的权利`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`根据相关法律规定，用户对其个人信息具有如下权利：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）知情权：用户有权获得关于国可工软如何收集和使用个人数据及其权利的清晰，透明和易于理解的信息；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（2）访问权：用户有权访问其个人数据；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）更正权：如果用户的个人数据不准确或不完整，用户有权更正其个人数据；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（4）删除权：用户有权利要求删除其个人数据（在国可工软没有不可抗拒的原因导致其无法删除数据的情况下）。我们收集的部分信息可能是匿名形式收集的，对于这部分信息，您将无法进行删除；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（5）限制处理权：在某些情况下，用户有权“阻止”或禁止其个人数据的使用；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（6）反对处理的权利：用户有权在其特定情况下得任何时候反对处理其个人数据；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（7）提出投诉的权利：用户有权就国可工软处理其个人数据的方式向其国家监管机构提出投诉；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（8）撤回同意的权利：如果用户已经同意国可工软施行的个人数据的特定处理，用户有权随时撤回其同意。 在这种情况下，并不意味此前国可工软对该用户的个人数据方面做出的任何处理是非法的。`}),(0,I.jsx)(`p`,{children:`然而，在注册国可工软FMEA帐号、使用部分国可工软FMEA网站、产品、服务时，提供诸如邮箱地址等信息是必备的，如果用户不提供这些必备信息，我们将无法为您创建国可工软FMEA帐号，或为您提供您所需的国可工软FMEA产品或服务。为保障安全，在您提出上述权利主张时，您可能需要提供书面请求，或以其他方式证明您的身份。我们将在验证您的身份后再处理您的请求。一般情况下，我们将在15天内做出答复。`}),(0,I.jsx)(`p`,{children:`对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝，并向您具体说明拒绝的理由。`}),(0,I.jsx)(`p`,{children:`在以下情形中，按照法律法规要求，我们将无法响应您的更正、删除、注销信息等请求：`}),(0,I.jsx)(`p`,{children:`与国家安全、国防安全直接相关的；`}),(0,I.jsx)(`p`,{children:`与公共安全、公共卫生、重大公共利益直接相关的；`}),(0,I.jsx)(`p`,{children:`与犯罪侦查、起诉、审判和判决执行等直接相关的；`}),(0,I.jsx)(`p`,{children:`有充分证据表明您存在主观恶意或滥用权利的；`}),(0,I.jsx)(`p`,{children:`响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；`}),(0,I.jsx)(`p`,{children:`涉及商业秘密的。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`7. 未成年人条款`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`我们主要面向成人提供产品和服务。若您是未满18周岁的未成年人，在使用本软件及相关服务前，应在您的父母或其他监护人监护、指导下共同阅读并同意本隐私政策。我们根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律允许、父母或其他监护人明确同意或保护未成年人所必要的情况下收集、使用、储存、共享、转让或披露未成年人的个人信息；如果我们发现在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关信息。若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，请通过本隐私政策公示的联系方式与我们联系。`})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`8. 投诉与反馈`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`如果您希望针对我们处理您个人信息的方式提出异议或作出投诉，或您有与本政策相关的任何疑问、意见或请求，请第一时间联系我们，联系方式为service@nationrel.com，我们将会在15个工作日日内处理并反馈您的请求。`})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`9. 隐私政策的修订和通知`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`为了给您提供更好的服务，本软件及相关服务将不时更新与变化，我们会适时对本隐私政策进行修订，该等修订构成本隐私政策的一部分并具有等同于本隐私政策的效力。本隐私政策一旦发生任何重大变更，我们会在产品或服务内通过弹窗、推送等方式向您提示。`}),(0,I.jsx)(`p`,{children:`我们建议您定期查看隐私政策，以获取有关我们隐私政策的最新信息。若您不同意修改后的隐私政策，您有权并应立即停止使用我们的产品和/或服务。如果您继续使用我们的产品和/或服务，则视为您接受我们对本政策相关条款所做的修改。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`10. 联系我们`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`如果用户因任何原因或任何需求需要联系国可工软（包括行使其与上述数据保护有关的任何权利），请联系service@nationrel .com，国可工软的经营地址位于：江苏省苏州市虎丘区竹园路209号中国苏州创业园2-1505。`})}),(0,I.jsx)(`div`,{className:`mt-12 p-4 bg-blue-50 rounded-xl`,children:(0,I.jsxs)(`p`,{className:`text-slate-600`,children:[(0,I.jsx)(`strong`,{children:`联系我们：`}),`service@nationrel.com`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`strong`,{children:`地址：`}),`江苏省苏州市虎丘区竹园路209号中国苏州创业园2-1505`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`strong`,{children:`©国可工软（苏州）科技有限公司保留一切权利。`})]})})]})]})}function ro(){return(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 py-16`,children:[(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-900 mb-8`,children:`国可工软SAAS FMEA服务条款`}),(0,I.jsxs)(`div`,{className:`prose prose-slate max-w-none`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`1. 服务条款的确认和接纳`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`国可工软SAAS FMEA（以下简称“国可工软FMEA”）是由国可工软提供的互联网软件服务。本服务条款是您与国可工软之间关于您（“您”或“用户”）访问和使用国可工软FMEA以及国可工软提供的其他服务的主要协议。`}),(0,I.jsx)(`p`,{children:`如您使用国可工软FMEA，即表示您自愿接受本服务条款的全部内容。如您对本服务条款有疑问的，请通过国可工软FMEA网站公布的联系方式进行询问，国可工软将向您解释条款内容。如您不同意本服务条款的任意内容，或者无法准确理解国可工软对条款内容的解释，请不要注册、购买、开通或以其他任何方式使用国可工软FMEA服务。`}),(0,I.jsx)(`p`,{children:`国可工软有权不时地对服务条款做任何修改和补充，并在国可工软FMEA网站上公布。服务条款的修改和补充将在公布时立即生效。您继续访问和使用国可工软FMEA即视为您接受修订后的服务条款。如您不同意修订后的服务条款，您应停止访问国可工软FMEA并拒绝使用服务。`}),(0,I.jsx)(`p`,{children:`如果您代表某个机构而非您个人注册、登录和使用国可工软FMEA和/或我们其他的服务，则您将被认为获得充分授权代表该机构同意本服务条款以及不时修订和补充的服务条款。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`2. 账户和使用`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`基于访问国可工软FMEA和使用服务的需求，您同意以下事项：依国可工软FMEA网站提示填写准确的、真实的手机号、注册邮箱、密码和名称，并确保今后更新的手机号、登录邮箱、名称、头像等资料的有效性和合法性。若您提供任何违法、虚假、不道德或国可工软认为不适合在国可工软FMEA上展示的资料；或者国可工软有理由怀疑您的资料属于病毒程序或恶意操作；或者您违反本服务条款的规定；或者未经国可工软同意，将国可工软FMEA用于商业目的，国可工软有权限制、封禁您在本网站的账号，及暂停或终止提供软件的部分或全部功能。在此情况下，国可工软将不向您承担任何责任。`}),(0,I.jsx)(`p`,{children:`您有责任维护您的账户和密码的安全性。国可工软建议您妥善保管您的注册邮箱、手机号、密码和名称，准确输入该等信息将作为您访问登录国可工软FMEA并享有服务的关键环节。如果您发现有人未经授权使用您的账户信息或怀疑任何人未经授权可能能够访问您的私有内容，您应立即更改密码，并向我们反馈。`}),(0,I.jsx)(`p`,{children:`您的账户只可以由您本人登录及使用，多人共享账号是被禁止的。如您是企业/组织用户，您登录本软件后可以创建您的企业或组织。您可以选择通过手机号码、邮箱、邀请链接、邀请二维码等方式（具体方式以国可工软FMEA实际提供的方式为准）邀请企业/组织成员加入本软件成为您的最终用户。`}),(0,I.jsx)(`p`,{children:`您仅能为自身内部运营之目的使用本软件，您不得出于任何非法或未经授权的目的使用本软件，包括但不限于不得以营利或非营利目的以任何方式向任何第三方提供本软件或其任何部分，不得利用本软件从事任何违法或侵犯第三方知识产权或其他合法权益的活动。`}),(0,I.jsx)(`p`,{children:`您在使用本软件过程中应遵守所有可适用的法律法规及本协议、业务规则的规定，不得发生任何违法、违反本协议或侵犯第三方合法权益的行为；您应对您账户项下的全部行为承担相应法律责任。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`3. 会员服务`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`国可工软SAAS FMEA会员服务（以下简称“会员服务”）是指您在支付相应的会员服务费用后，在会员有效时长内享有的服务产品，包括但不限于“增加席位数、增加文件数量”等。会员服务开通成功后，您可在会员有效时长内享受相应的会员权益。国可工软将根据用户需求、产品变化等，对现有会员服务内容进行调整，并可能在不同时间推出不同的会员服务内容，以不断完善和优化会员服务。具体会员服务内容以国可工软FMEA【“价格”】页面公布的信息为准。`}),(0,I.jsx)(`p`,{children:`本软件的收费方式为预付费、按年扣费。若非因国可工软原因导致本软件在服务期限内中止或终止，已支付的费用不予退还。国可工软不会为未使用完的年费、升级/降级套餐退款，也不会为软件计划中尚未使用的剩余期限退款。所有费用均为含税价格。`}),(0,I.jsx)(`p`,{children:`软件降级后可能会导致您账户下的内容、功能、特征或能力的丧失。您明确知悉并同意上述变化及风险，国可工软对因此发生的任何损失不承担任何责任。`}),(0,I.jsx)(`p`,{children:`禁止通过以下方式开通或使用会员服务：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(1) 以营利、经营等非个人使用的目的为自己或他人开通会员服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(2) 通过任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件等任何程序、软件方式为自己或他人开通会员服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(3) 通过任何不正当手段或以违反诚实信用原则的方式为自己或他人开通会员服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(4) 通过非国可工软指定的方式为自己或他人开通会员服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(5) 通过侵犯国可工软或他人合法权益的方式为自己或他人开通会员服务；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`(6) 通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通会员服务。国可工软会根据会员服务的整体规划，对会员服务的服务内容、收费标准、方式等进行修改和变更，前述修改、变更，国可工软将在相应服务页面进行公示。您若需要获取、使用会员服务，请先提前了解清楚当时关于会员服务的收费标准、方式等信息。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`4. 内容发布和使用权`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`您声明并保证您上传或储存在国可工软FMEA中的内容不违反本协议并且符合法律法规。您应对您上传或储存的内容的合法性、准确性、完整性和可靠性负责。您应负责获得并持续保有任何与您的内容相关的通知、同意或授权。除非法律另有明确规定，否则国可工软不承担任何与您上传或储存的内容有关的义务和责任。若您在国可工软FMEA上传、储存侵犯他人知识产权或其他违法、违规的内容，国可工软有权予以删除并保留移交司法机关处理的权利。`}),(0,I.jsx)(`p`,{children:`您不得使用国可工软FMEA上传、储存、共享、发送或传播任何敏感信息和违反国家法律法规的信息，包括但不限于下列信息：`}),(0,I.jsx)(`p`,{children:`反对宪法所确定的基本原则的；`}),(0,I.jsx)(`p`,{children:`危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统⼀的；`}),(0,I.jsx)(`p`,{children:`损害国家荣誉和利益的；`}),(0,I.jsx)(`p`,{children:`煽动⺠族仇恨、⺠族歧视，破坏⺠族团结的；`}),(0,I.jsx)(`p`,{children:`破坏国家宗教政策，宣扬邪教和封建迷信的；`}),(0,I.jsx)(`p`,{children:`散布谣⾔，扰乱社会秩序，破坏社会稳定的；`}),(0,I.jsx)(`p`,{children:`散布淫秽、⾊情、赌博、暴⼒、凶杀、恐怖或者教唆犯罪的；`}),(0,I.jsx)(`p`,{children:`侮辱或者诽谤他⼈，侵害他⼈合法权益的；`}),(0,I.jsx)(`p`,{children:`含有法律、⾏政法规禁⽌的其他内容的。`}),(0,I.jsx)(`p`,{children:`您承诺发表言论要：爱国、守法、自律、真实、文明。不传播任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、危害国家安全的、泄露国家机密的、破坏国家宗教政策和民族团结的以及其它违反法律法规及政策的内容。若您的行为不符合以上提到的服务协议，国可工软FMEA将作出独立判断立即暂停或终止您的服务账号。您需自行对其全部行为承担法律责任，国可工软FMEA不承担任何法律责任。`}),(0,I.jsx)(`p`,{children:`保护他人权利`}),(0,I.jsx)(`p`,{children:`传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容。`}),(0,I.jsx)(`p`,{children:`您不得制作、复制、发布、传播涉及他人隐私、个人信息或资料的信息。`}),(0,I.jsx)(`p`,{children:`禁止骚扰和广告`}),(0,I.jsx)(`p`,{children:`您不得发表、传送、传播骚扰、广告信息、过度营销信息及垃圾信息或含有任何性或性暗示的内容。`}),(0,I.jsx)(`p`,{children:`您应当对您使用国可工软FMEA的一切行为及所有在您账户下的活动（不论是您还是您授权他人的行为）负责。您不得利用国可工软FMEA从事违反法律法规、违反本用户协议约定、危害网络安全、危害计算机系统安全、破坏国可工软FMEA产品完整性或其他侵害任何第三人利益的活动。若您从事了上述行为，国可工软有权暂停或终止您的账户，并拒绝您于现在和未来使用国可工软FMEA之全部或部分功能，由此对国可工软或第三人造成的损失或由此产生的一切法律责任均由您全部承担。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`5. 版权`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`您在国可工软FMEA提交的内容之所有权归您所有。您明白国可工软对您提供的任何内容不在任何方面负责，国可工软没有义务预先审查此类内容。但是，国可工软FMEA有权随时决定您提供的任何内容是否符合相关法律规定或本协议的相关约定，并可随时预先审查、转移、拒绝、修改和/或删除您上传的内容，而无需事先通知您。若您使用本服务的行为存在或涉嫌任何违反国家法律法规或侵犯任何第三方合法权益的情形，国可工软有权直接删除该等违反规定的信息，并可以暂停或终止向您服务。`}),(0,I.jsx)(`p`,{children:`国可工软FMEA的所有权及所有与国可工软FMEA服务相关的知识产权（包括但不限于源代码、目标代码、文档资料、界面设计、页面框架、以及任何由国可工软根据维护与技术支持提供的软件、资料等）归国可工软所有。您认同国可工软拥有的所有权及知识产权，并承诺尊重及不以任何方式侵害国可工软对国可工软FMEA享有的所有权及知识产权。未经国可工软书面许可，您不能复制、拷贝、转让、许可或提供他人使用上述知识成果，或者私自使用任何部分代码和外观设计，否则您应承担相应的法律责任；且国可工软有权终止服务且不退还任何费用。`}),(0,I.jsx)(`p`,{children:`对于企业用户，我们可能在我们的网站、我们举办的活动或其他宣传推广中使用企业用户的名称、字号、商标等信息或标识以对本服务进行宣传。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`6. 模板社区服务/资源`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`用户发布的付费/免费模板在系统审核通过后将自动公开到国可工软FMEA模板广场，并供其他用户付费或免费使用。`}),(0,I.jsx)(`p`,{children:`付费模板在国可工软FMEA平台上完成交易后，成交额的30%作为平台服务费（含税），其余的70%作为作者收益计入到个人账户，并可提现。`}),(0,I.jsx)(`p`,{children:`内容的使用权`}),(0,I.jsx)(`p`,{children:`用户将文件发布并公开到国可工软FMEA模板广场后，即视为永久授权国可工软FMEA使用，并授权国可工软将文件通过互联网及/或移动互联网面向全球用户进行发布、推广以及传播，以及以任何合法方式将文件用于对国可工软FMEA平台的宣传、推广。若用户上传的文件涉及到个人隐私及商业秘密应在文件中予以注明，对于未注明的，视为未涉及个人隐私及商业秘密，国可工软FMEA可以不做任何标记直接用于宣传及推广展示使用，若因此发生纠纷，国可工软FMEA不承担任何法律责任。`}),(0,I.jsx)(`p`,{children:`国可工软FMEA平台的模板使用，无论是使用平台自有模板，还是其他用户上传的付费/免费模板，任何时候您均不得将通过前述服务获得的有权使用的模板的任何部分或全部以转授权、分授权或其他任何方式免费的或收费的提供给他人（包括自然人及具备或不具备法人主体资格的机构、组织）使用，亦不得利用有权使用的数字作品的任何部分或全部以销售、租赁或变相销售、租赁或其他类似的方式牟利。`}),(0,I.jsx)(`p`,{children:`恶意利用国可工软规则漏洞或平台系统漏洞进行任何非法活动的，国可工软有权终止为其提供产品服务，并有权对其采取包括但不限于警告、限制或禁止使用其账号全部或部分功能，冻结、扣除、清零账号下的所有权益及收益、注销账号等措施。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`7. 隐私政策`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`使用国可工软FMEA和国可工软提供的其他服务，即表示您同意国可工软合法收集和使用有关您及您所使用服务的技术性或诊断性信息。收集到的这些信息将用于改进国可工软FMEA产品的内容和技术，提升国可工软FMEA的服务品质。`}),(0,I.jsx)(`p`,{children:`国可工软不会将您的信息和内容提供或出售给其他的组织或个人，但以下情况除外：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）您的事先同意或授权，或您于国可工软FMEA上主动与第三方进行分享操作；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（2）司法机关或有权政府机构或任何法律法规部门规章要求国可工软提供该等信息；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）您违反了本服务条款，且国可工软需要向第三方提供的。`}),(0,I.jsx)(`p`,{children:`保护用户个人信息是国可工软的一项基本原则，国可工软将按照《国可工软FMEA隐私协议》的约定收集、使用、储存和分享您的个人信息，以及您如何管理您的个人信息、我们如何采取必要措施保障您的个人信息安全、我们响应您的权利请求等。您声明并保证，您已仔细阅读、完全理解并同意上述《国可工软FMEA隐私协议》的全部内容。若您不同意本协议及，请您立即停止使用我们提供的任何服务或产品。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`8. 数据和信息安全`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`我们与您共同负有维护账号安全的责任。国可工软在目前的技术水平下努力保护您的账号在服务器端的安全，并不断更新技术措施。但互联网并非绝对安全的环境，我们特别提醒您应该妥善保管您的账号和密码，杜绝私自转借乃至出售账号等有害于账号安全的行为。此外，国可工软建议您采用复杂字符组合设定您的账号密码。请您理解，国可工软不对因您自身有违相关法律法规规定和本协议约定使用账号的行为及其所导致的数据未经授权访问、泄露、破坏乃至销毁等造成的损失承担责任。`}),(0,I.jsx)(`p`,{children:`国可工软将依照法律、行政法规的规定和国家标准的强制性要求，采取合理的技术措施和其他必要措施，努力保护您的数据和信息安全。但是，互联网数据传输、存储、转换均可能存在一定未知且不确定的数据安全风险，该等风险将导致包括但不限于数据丢失、泄露、损坏、无法读取或提取等后果。您确认，您已明确知晓并同意接受该等因互联网引发的风风险和后果，并已采取恰当的措施（例如数据备份等），以便在该等风险发生时将损失降至最低。`}),(0,I.jsx)(`p`,{children:`您知悉并认可，国可工软FMEA服务是基于第三方云服务所提供的SaaS服务，鉴于网络服务的特殊性（包括但不限于云服务器的稳定性问题、通讯基础设施故障、网络黑客攻击、政府管制等行为的存在及其他我们无法控制的情形），我们提供的服务可能会出现中断、不能及时传送信息或其他不能满足您的要求的情况，请您知悉并理解，该情况将不视为我们违反本协议约定，但我们将尽可能及时通过网页公告、系统通知、短信或者其他合理的方式通知您。`}),(0,I.jsx)(`p`,{children:`因互联网技术本身等非国可工软主观故意或重大过失导致危害您数据安全的，国可工软不承担任何赔偿责任。因国可工软重大过失危害您数据安全的，国可工软的赔偿责任以向您收取的服务费用为上限。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`9. 免责声明`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`您知悉并同意，在下列情况下，国可工软无需向您承担任何责任：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）由于您维护不当或保密不当，导致数据、资料、密码等丢失或泄漏，或其他非国可工软原因导致的个人信息的泄漏，国可工软不承担任何法律责任；`}),(0,I.jsx)(`p`,{children:`任何由于不可抗力、黑客攻击、电脑病毒侵入、网络运营商原因或政府管制等国可工软无法合理控制的原因而造成使用终止、中断、延误、使用限制、使用异常、使用不能、暂时性网站关闭等，国可工软不承担任何法律责任；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）您应对通过国可工软FMEA上传或储存文件、输入数据的合法性以及获得文件、数据、内容的方式的合法性负责，因上述文件、数据、内容引发的一切纠纷，由您承担全部法律责任，国可工软不承担任何法律责任；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（4）互联网是一个开放平台，如果您将图片、文字等内容上传并传播，有可能会被其他组织或个人复制、转载、擅改或做其他非法用途，您应充分意识到此类风险的存在。您同意使用国可工软服务所存在的此类风险及后果将完全由您自己承担，国可工软不承担任何责任；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（5）您理解并确认，受技术所限，国可工软无法保证其所提供的服务毫无瑕疵，但我们承诺将不断提升服务质量及服务水平，为您提供更加优质的服务。据此，您同意：如果国可工软所提供的服务虽然存在瑕疵，但该等瑕疵是当时行业技术水平所无法避免的，其将不被视为违约，国可工软无须因此向您承担任何责任；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（6）我们通过中华人民共和国境内的设施提供服务，我们无法确保您的使用行为、发布的信息及内容在其他国家或地区是适当的、可行的，当您在其他司法辖区使用本软件及相关服务时，您应自行确保其遵守当地的法律法规，我们对此不承担任何责任；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（7）如我们发现、或通过第三方举报或投诉获知，您发布的内容存在或涉嫌违反国家法律法规或本软件规则的，我们有权依据合理判断不经通知立即采取一切必要措施（包括但不限于立刻删除您所发布的相关内容、冻结账户封号、向公安机关报案等）或配合国家网信部门、公检法等国家机关的执法要求对账户做相应处理以减轻或消除您行为所造成的影响。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`10. 服务变更/中断/终止`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`如因系统维护或升级的需要而暂停网络服务、调整服务功能的，国可工软将尽可能事先在网站上进行通告。`}),(0,I.jsx)(`p`,{children:`如发生下列任何一种情形，国可工软有权单方面中断或终止向用户提供服务而无需通知用户：`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（1）用户提供的个人资料不真实，或违反其他⽤户个⼈资料提供规则；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（2）用户违反本服务条款中规定的使用规则；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（3）未经国可工软同意，将国可工软FMEA用于商业目的或者其他任何营利性用途；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（4）您对国可工软FMEA的访问或使用可能会对国可工软FMEA服务、国可工软或第三方造成安全风险；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（5）需要听从法庭传票、法律命令或遵循法律程序；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（6）根据相关法律法规或政府机构的要求；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（7）因⾃然灾害、战争等不可抗⼒；`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（8）本协议发⽣变更或修改，您不同意变更或修改后的⽤户协议。`}),(0,I.jsx)(`p`,{className:`pl-4`,children:`（9）禁止在未经预先书面授权的情况下销售或转卖国可工软的付费服务（包括但不限于会员权益和文件扩容数等）。如果发现存在未经国可工软预先书面授权囤积、倒卖、转售国可工软产品的行为，国可工软有权追究其的法律责任。同时，国可工软有权调查任何通过不正当手段获取会员权益、文件扩容数的行为，一经发现，国可工软有权收回用户已获得的奖励、权益，情节严重的，国可工软将冻结其账号或者封号，国可工软有权采用以上一种或多种的方式对违规用户进行处理。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`11. 本服务协议的完善和修改`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`国可工软有权根据互联网行业变化以及有关法律、法规的颁布、修订，不时地完善和修改本服务条款。国可工软保留随时修改服务条款的权利，用户在使用FMEA Coach软件服务时，有必要对国可工软最新的服务条款进行仔细阅读和重新确认，当发生相关争议时，以最新的服务条款为准。`})}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`12. 特别约定`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`本服务条款及其下的服务受中华人民共和国法律管辖，并按之解释。`}),(0,I.jsx)(`p`,{children:`用户使用本服务的行为若有任何违反国家法律法规或侵犯任何第三方合法权益的情形，国可工软有权直接删除该等违反规定的信息，并可以暂停或终止向该用户提供服务。`}),(0,I.jsx)(`p`,{children:`若用户利用本服务从事任何违法或侵权行为，由用户自行承担全部责任，国可工软不承担任何法律责任及连带责任。因此给国可工软或任何第三方造成任何损失的，用户应负责全额赔偿。`}),(0,I.jsx)(`p`,{children:`用户在此特别声明并承诺，用户已充分注意本服务协议内免除或限制国可工软责任的条款，用户完全知晓并理解该等条款的规定并同意接受。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`13. 联系我们`}),(0,I.jsx)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:(0,I.jsx)(`p`,{children:`当您有其他的投诉、建议或反馈时，请与我们联系。您可以将您的问题发送⾄service@nationrel.com，或邮寄到如下地址：江苏省苏州市虎丘区竹园路209号中国苏州创业园2-1505`})}),(0,I.jsx)(`div`,{className:`mt-12 p-4 bg-blue-50 rounded-xl`,children:(0,I.jsxs)(`p`,{className:`text-slate-600`,children:[(0,I.jsx)(`strong`,{children:`联系我们：`}),`service@nationrel.com`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`strong`,{children:`地址：`}),`江苏省苏州市虎丘区竹园路209号中国苏州创业园2-1505`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`strong`,{children:`©国可工软（苏州）科技有限公司保留一切权利。`})]})})]})]})}function io(){return(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 py-16`,children:[(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-900 mb-8`,children:`Cookie政策`}),(0,I.jsxs)(`div`,{className:`prose prose-slate max-w-none`,children:[(0,I.jsx)(`p`,{className:`text-slate-600 leading-relaxed text-base`,children:`国可工软（苏州）科技有限公司（以下简称“我们”）使用Cookie和相关技术来确保网站正常运行、改善用户体验并分析网站使用情况。本政策说明了我们如何使用这些技术。`}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`一、什么是Cookie`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`Cookie是您访问网站时，网站存储在您浏览器中的小型文本文件。它们帮助网站记住您的偏好设置（如语言选择、登录状态），并使网站功能正常工作。`}),(0,I.jsx)(`p`,{children:`除Cookie外，我们还可能使用类似的追踪技术，如LocalStorage（本地存储）和SessionStorage（会话存储）来保存数据。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`二、我们使用的Cookie类型`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`1. 必要Cookie`})}),(0,I.jsx)(`p`,{children:`这些Cookie是网站运行所必需的，无法关闭。它们包括：`}),(0,I.jsxs)(`ul`,{className:`list-disc list-inside space-y-2 ml-4`,children:[(0,I.jsx)(`li`,{children:`语言设置（nationrel-lang）`}),(0,I.jsx)(`li`,{children:`Cookie同意状态`}),(0,I.jsx)(`li`,{children:`用户登录状态（用于已登录用户）`})]}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`2. 功能Cookie`})}),(0,I.jsx)(`p`,{children:`这些Cookie帮助网站记住您的偏好设置：`}),(0,I.jsxs)(`ul`,{className:`list-disc list-inside space-y-2 ml-4`,children:[(0,I.jsx)(`li`,{children:`界面显示偏好`}),(0,I.jsx)(`li`,{children:`最近浏览的产品或文章`})]}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`3. 分析Cookie`})}),(0,I.jsx)(`p`,{children:`我们使用分析工具了解网站访问情况，用于改进服务质量：`}),(0,I.jsxs)(`ul`,{className:`list-disc list-inside space-y-2 ml-4`,children:[(0,I.jsx)(`li`,{children:`访问量统计`}),(0,I.jsx)(`li`,{children:`用户行为路径分析`}),(0,I.jsx)(`li`,{children:`页面性能监控`})]})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`三、第三方服务`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`我们使用的第三方分析服务：`}),(0,I.jsxs)(`ul`,{className:`list-disc list-inside space-y-2 ml-4`,children:[(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`strong`,{children:`百度统计：`}),`用于分析网站流量和用户行为（baidu.com）`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`strong`,{children:`Microsoft Clarity：`}),`用于用户行为分析和热力图（clarity.ms）`]})]}),(0,I.jsx)(`p`,{children:`这些第三方服务有自己的隐私政策，我们建议您查看其隐私条款了解详情。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`四、如何管理Cookie`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`1. 首次访问设置`})}),(0,I.jsx)(`p`,{children:`首次访问我们的网站时，会显示Cookie同意横幅。您可以选择接受全部、拒绝非必要Cookie或自定义设置。`}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`2. 更改设置`})}),(0,I.jsx)(`p`,{children:`您可以随时通过点击页面底部的"Cookie设置"链接更改您的偏好设置。`}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`3. 浏览器设置`})}),(0,I.jsx)(`p`,{children:`您也可以通过浏览器设置阻止或删除Cookie。但请注意，阻止必要Cookie可能导致网站部分功能无法正常使用。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`五、Cookie使用详情`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:(0,I.jsx)(`strong`,{children:`具体使用的Cookie：`})}),(0,I.jsxs)(`table`,{className:`min-w-full border-collapse border border-gray-300 mt-4`,children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{className:`bg-gray-50`,children:[(0,I.jsx)(`th`,{className:`border border-gray-300 px-4 py-2 text-left`,children:`Cookie名称`}),(0,I.jsx)(`th`,{className:`border border-gray-300 px-4 py-2 text-left`,children:`类型`}),(0,I.jsx)(`th`,{className:`border border-gray-300 px-4 py-2 text-left`,children:`用途`}),(0,I.jsx)(`th`,{className:`border border-gray-300 px-4 py-2 text-left`,children:`有效期`})]})}),(0,I.jsxs)(`tbody`,{children:[(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`nationrel-lang`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`必要`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`保存语言偏好`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`1年`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`cookie-consent`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`必要`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`记录Cookie同意状态`}),(0,I.jsx)(`td`,{className:`border border-gray-300 px-4 py-2`,children:`1年`})]})]})]})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`六、LocalStorage使用`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed space-y-3`,children:[(0,I.jsx)(`p`,{children:`除Cookie外，我们的网站还可能使用浏览器LocalStorage存储以下数据：`}),(0,I.jsxs)(`ul`,{className:`list-disc list-inside space-y-2 ml-4`,children:[(0,I.jsx)(`li`,{children:`表单草稿（避免输入内容丢失）`}),(0,I.jsx)(`li`,{children:`临时浏览数据`})]}),(0,I.jsx)(`p`,{children:`您可以在浏览器设置中清除LocalStorage数据。`})]}),(0,I.jsx)(`h2`,{className:`text-xl font-bold text-slate-900 mt-8 mb-3`,children:`七、联系我们`}),(0,I.jsxs)(`div`,{className:`text-slate-600 leading-relaxed`,children:[(0,I.jsx)(`p`,{children:`如您对本Cookie政策有任何疑问，请联系我们：`}),(0,I.jsxs)(`div`,{className:`mt-4 p-4 bg-slate-50 rounded-xl space-y-2`,children:[(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`公司名称：`}),`国可工软（苏州）科技有限公司`]}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`服务热线：`}),`4000-032-330`]}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`电子邮箱：`}),`service@nationrel.com`]})]})]}),(0,I.jsx)(`div`,{className:`mt-12 p-4 bg-blue-50 rounded-xl`,children:(0,I.jsxs)(`p`,{className:`text-slate-600`,children:[(0,I.jsx)(`strong`,{children:`最后更新日期：`}),`2026年4月8日`]})})]})]})}function ao(){let{t:e}=P(),t=[{name:`AI-FMEA`,subtitleKey:`trialModal.platforms.fmea.subtitle`,url:`https://fmea.nationrel.com/#/login`,icon:(0,I.jsx)(Vi,{className:`w-8 h-8`}),color:`from-blue-500 to-blue-600`,featureKeys:[`trialModal.platforms.fmea.feature1`,`trialModal.platforms.fmea.feature2`,`trialModal.platforms.fmea.feature3`]},{name:`ReliaQube`,subtitleKey:`trialModal.platforms.relia.subtitle`,url:`http://reliaqube.nationrel.cn/#/login?redirect=%2F`,icon:(0,I.jsx)(Ii,{className:`w-8 h-8`}),color:`from-cyan-500 to-cyan-600`,featureKeys:[`trialModal.platforms.relia.feature1`,`trialModal.platforms.relia.feature2`,`trialModal.platforms.relia.feature3`]}];return(0,I.jsxs)(`div`,{className:`min-h-screen bg-gradient-to-b from-slate-50 to-white`,children:[(0,I.jsx)(Wi,{}),(0,I.jsxs)(`div`,{className:`relative bg-gradient-to-r from-blue-600 to-blue-700 py-20 overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`absolute inset-0 opacity-10`,children:[(0,I.jsx)(`div`,{className:`absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl`}),(0,I.jsx)(`div`,{className:`absolute bottom-10 right-10 w-60 h-60 bg-cyan-400 rounded-full blur-3xl`})]}),(0,I.jsxs)(`div`,{className:`relative max-w-4xl mx-auto px-6 text-center`,children:[(0,I.jsx)(`h1`,{className:`text-4xl md:text-5xl font-bold text-white mb-4`,children:e(`trialModal.title`)}),(0,I.jsx)(`p`,{className:`text-xl text-blue-100`,children:e(`trialModal.subtitle`)})]})]}),(0,I.jsxs)(`div`,{className:`max-w-4xl mx-auto px-6 py-16`,children:[(0,I.jsx)(`div`,{className:`grid md:grid-cols-2 gap-8`,children:t.map(t=>(0,I.jsxs)(`a`,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,className:`group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`,children:[(0,I.jsx)(`div`,{className:`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity`}),(0,I.jsx)(`div`,{className:`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`,children:t.icon}),(0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-900 mb-2`,children:t.name}),(0,I.jsx)(`p`,{className:`text-slate-500 mb-6`,children:e(t.subtitleKey)}),(0,I.jsx)(`ul`,{className:`space-y-3 mb-8`,children:t.featureKeys.map((t,n)=>(0,I.jsxs)(`li`,{className:`flex items-center gap-3 text-slate-600`,children:[(0,I.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500`}),e(t)]},n))}),(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r ${t.color} text-white font-bold group-hover:shadow-lg transition-all duration-300`,children:[e(`trialModal.startTrial`),(0,I.jsx)(Li,{className:`w-5 h-5`})]})]},t.name))}),(0,I.jsx)(`div`,{className:`mt-12 text-center bg-blue-50 rounded-2xl p-6`,children:(0,I.jsx)(`p`,{className:`text-blue-700 font-medium`,children:e(`trialModal.hint`)})}),(0,I.jsxs)(`div`,{className:`mt-8 text-center`,children:[(0,I.jsx)(`p`,{className:`text-slate-500 mb-4`,children:`还有其他问题？`}),(0,I.jsxs)(`a`,{href:`tel:4000032330`,className:`inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium`,children:[(0,I.jsx)(`span`,{children:`📞`}),` 拨打热线：4000-032-330`]})]})]}),(0,I.jsx)(Aa,{})]})}var oo={"shield-check":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 013 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z`})}),"trending-up":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941`})}),zap:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z`})}),"git-branch":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M7.5 3v10.5m0 0a3 3 0 100 6 3 3 0 000-6zm0 0h6.75a3 3 0 003-3V9.75a3 3 0 00-3-3H14.25M7.5 3a3 3 0 100 3.75 3 3 0 000-3.75z`})}),"bar-chart-2":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z`})}),ruler:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z`})}),"flask-conical":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5a2.25 2.25 0 00-.659 1.591l-.053.053A2.25 2.25 0 004.125 18h15.75a2.25 2.25 0 001.591-.659l-.053-.053A2.25 2.25 0 0020.7 15.5`})}),"layout-dashboard":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z`})}),calculator:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z`})}),factory:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z`})}),"clipboard-check":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75`})}),thermometer:(0,I.jsxs)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z`}),(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z`})]}),activity:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M3.75 12h3l3-9 3 18 3-9h3.75`})}),"heart-pulse":(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z`})}),microscope:(0,I.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5a2.25 2.25 0 00-.659 1.591l-.053.053A2.25 2.25 0 004.125 18h15.75a2.25 2.25 0 001.591-.659l-.053-.053A2.25 2.25 0 0020.7 15.5`})})};function so(){let{t:e}=P();return _i({title:`国可工软 | 国产FMEA软件、Weibull分析、SPC、FTA可靠性平台`,description:`国可工软（苏州）科技有限公司，专注质量可靠性工业软件20年，提供FMEA软件（AIAG-VDA标准）、Weibull寿命分析、SPC统计过程控制、FTA故障树、MSA、DOE等完整产品线，国产化替代进口软件领军企业，服务400+客户。`,canonical:`/`}),(0,I.jsxs)(`div`,{className:`min-h-screen`,children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(Gi,{}),(0,I.jsx)(Ki,{}),(0,I.jsx)(Ea,{}),(0,I.jsx)(ea,{}),(0,I.jsx)(Ji,{}),(0,I.jsx)(Oa,{}),(0,I.jsx)(ka,{}),(0,I.jsx)(Aa,{})]})}function co(){let{t:e}=P(),{productId:t}=lt(),n=A(),r=_a().find(e=>e.id===t);return _i(r?{title:`${r.name} - 质量可靠性工业软件`,description:`${r.description} 国可工软${r.name}，${r.detail.highlights?.[0]??``}。支持应用场景：${r.detail.scenarios?.slice(0,2).join(`、`)}等。`,keywords:`${r.name},${r.features.join(`,`)},国可工软,质量可靠性软件,国产替代`,canonical:`/products/${r.id}`,ogType:`product`,structuredData:{"@context":`https://schema.org`,"@type":`SoftwareApplication`,name:r.name,description:r.description,applicationCategory:`BusinessApplication`,operatingSystem:`Windows`,url:`https://www.nationrel.com/products/${r.id}`,offers:{"@type":`Offer`,seller:{"@type":`Organization`,name:`国可工软（苏州）科技有限公司`},url:`https://www.nationrel.com/products/${r.id}`}}}:{}),r?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(ja,{product:r,iconMap:oo,onBack:()=>n(`/products`)})}):(0,I.jsx)(`div`,{className:`min-h-screen flex items-center justify-center`,children:(0,I.jsxs)(`div`,{className:`text-center`,children:[(0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-700 mb-4`,children:e(`common.productNotFound`)}),(0,I.jsx)(`button`,{onClick:()=>n(`/#products`),className:`px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors`,children:e(`common.backToProducts`)})]})})}function lo(){let{t:e}=P(),{articleId:t}=lt(),n=A(),r=va(),i=r.find(e=>e.id===t),a=i?r.filter(e=>e.id!==t&&e.published&&e.category===i.category).slice(0,3):[];return _i(i?{title:i.title,description:i.summary,keywords:`${i.title},国可工软,质量可靠性,FMEA,Weibull,工业软件`,canonical:`/news/${i.id}`,ogType:`article`,structuredData:{"@context":`https://schema.org`,"@type":`Article`,headline:i.title,description:i.summary,author:{"@type":`Person`,name:i.author},publisher:{"@type":`Organization`,name:`国可工软（苏州）科技有限公司`,logo:{"@type":`ImageObject`,url:`https://www.nationrel.com/logo.png`}},datePublished:i.date,dateModified:i.date,url:`https://www.nationrel.com/news/${i.id}`}}:{}),i?(0,I.jsx)(Fa,{article:i,onBack:()=>n(`/news`),relatedArticles:a,onSelectRelated:e=>n(`/news/${e.id}`)}):(0,I.jsx)(`div`,{className:`min-h-screen flex items-center justify-center`,children:(0,I.jsxs)(`div`,{className:`text-center`,children:[(0,I.jsx)(`h2`,{className:`text-2xl font-bold text-slate-700 mb-4`,children:e(`common.articleNotFound`)}),(0,I.jsx)(`button`,{onClick:()=>n(`/#news`),className:`px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors`,children:e(`common.backToNews`)})]})})}function uo(){let{articleId:e}=lt(),t=A(),n=ya().find(t=>t.id===e);return _i(n?{title:n.title,description:n.summary,keywords:`${n.tags.join(`,`)},FMEA知识库,可靠性技术,国可工软`,canonical:`/knowledge/${n.id}`,ogType:`article`,structuredData:{"@context":`https://schema.org`,"@type":`Article`,headline:n.title,description:n.summary,author:{"@type":`Person`,name:n.author},publisher:{"@type":`Organization`,name:`国可工软（苏州）科技有限公司`,logo:{"@type":`ImageObject`,url:`https://www.nationrel.com/logo.png`}},datePublished:n.date,dateModified:n.date,url:`https://www.nationrel.com/knowledge/${n.id}`,keywords:n.tags.join(`, `)}}:{canonical:`/knowledge/${e??``}`}),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Wi,{}),(0,I.jsx)(Ra,{articleId:e??``,onBack:()=>t(`/knowledge`),onSelectRelated:e=>t(`/knowledge/${e}`)}),(0,I.jsx)(Aa,{})]})}function z(){let{pathname:e,hash:t}=at();return(0,_.useEffect)(()=>{if(t){let e=document.querySelector(t);e&&setTimeout(()=>e.scrollIntoView({behavior:`smooth`}),100)}else window.scrollTo({top:0,behavior:`smooth`})},[e,t]),null}function fo(){return(0,_.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});return document.querySelectorAll(`.scroll-animate`).forEach(t=>{e.observe(t)}),()=>e.disconnect()},[]),null}function po(){let e=A();return(0,I.jsx)(`div`,{className:`min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white`,children:(0,I.jsxs)(`div`,{className:`text-center px-6 max-w-lg`,children:[(0,I.jsx)(`div`,{className:`text-9xl font-bold text-slate-200 mb-4`,children:`404`}),(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-slate-800 mb-3`,children:`404・页面走失了`}),(0,I.jsxs)(`p`,{className:`text-slate-500 mb-8 leading-relaxed`,children:[`它好像迷路到了不知名角落，`,(0,I.jsx)(`br`,{}),`不妨回到主页，重新开启优化产品之旅`]}),(0,I.jsx)(`button`,{onClick:()=>e(`/`),className:`px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-colors`,children:`返回首页`})]})})}function B(){return(0,I.jsxs)(Cn,{children:[(0,I.jsx)(z,{}),(0,I.jsx)(fo,{}),(0,I.jsx)(Si,{}),(0,I.jsxs)(Pt,{children:[(0,I.jsx)(j,{path:`/`,element:(0,I.jsx)(so,{})}),(0,I.jsx)(j,{path:`/products`,element:(0,I.jsx)(Ba,{})}),(0,I.jsx)(j,{path:`/videos`,element:(0,I.jsx)(Ha,{})}),(0,I.jsx)(j,{path:`/cases`,element:(0,I.jsx)(Ua,{})}),(0,I.jsx)(j,{path:`/knowledge`,element:(0,I.jsx)(Ka,{})}),(0,I.jsx)(j,{path:`/about`,element:(0,I.jsx)(qa,{})}),(0,I.jsx)(j,{path:`/news`,element:(0,I.jsx)(Ya,{})}),(0,I.jsx)(j,{path:`/contact`,element:(0,I.jsx)(Xa,{})}),(0,I.jsx)(j,{path:`/products/:productId`,element:(0,I.jsx)(co,{})}),(0,I.jsx)(j,{path:`/news/:articleId`,element:(0,I.jsx)(lo,{})}),(0,I.jsx)(j,{path:`/knowledge/:articleId`,element:(0,I.jsx)(uo,{})}),(0,I.jsx)(j,{path:`/ai`,element:(0,I.jsx)(Za,{})}),(0,I.jsx)(j,{path:`/boundary`,element:(0,I.jsx)(to,{})}),(0,I.jsx)(j,{path:`/privacy-policy`,element:(0,I.jsx)(no,{})}),(0,I.jsx)(j,{path:`/terms`,element:(0,I.jsx)(ro,{})}),(0,I.jsx)(j,{path:`/cookie-policy`,element:(0,I.jsx)(io,{})}),(0,I.jsx)(j,{path:`/trial`,element:(0,I.jsx)(ao,{})}),(0,I.jsx)(j,{path:`*`,element:(0,I.jsx)(po,{})})]})]})}(0,g.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(_.StrictMode,{children:(0,I.jsx)(B,{})}));