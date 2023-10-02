(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const be=Object.freeze({}),Is=Object.freeze([]),St=()=>{},bm=()=>!1,Hw=/^on[^a-z]/,io=t=>Hw.test(t),ha=t=>t.startsWith("onUpdate:"),Re=Object.assign,qu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qw=Object.prototype.hasOwnProperty,le=(t,e)=>qw.call(t,e),H=Array.isArray,Or=t=>oo(t)==="[object Map]",za=t=>oo(t)==="[object Set]",jd=t=>oo(t)==="[object Date]",X=t=>typeof t=="function",Me=t=>typeof t=="string",ki=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Ku=t=>ye(t)&&X(t.then)&&X(t.catch),Am=Object.prototype.toString,oo=t=>Am.call(t),Wu=t=>oo(t).slice(8,-1),Rm=t=>oo(t)==="[object Object]",zu=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jo=fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kw=fr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ww=/-(\w)/g,gn=Ga(t=>t.replace(Ww,(e,n)=>n?n.toUpperCase():"")),zw=/\B([A-Z])/g,or=Ga(t=>t.replace(zw,"-$1").toLowerCase()),jr=Ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=Ga(t=>t?`on${jr(t)}`:""),Di=(t,e)=>!Object.is(t,e),ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},da=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Gw=t=>{const e=Me(t)?Number(t):NaN;return isNaN(e)?t:e};let Hd;const pa=()=>Hd||(Hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gu(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Me(r)?Xw(r):Gu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Me(t))return t;if(ye(t))return t}}const Qw=/;(?![^(]*\))/g,Yw=/:([^]+)/,Jw=/\/\*[^]*?\*\//g;function Xw(t){const e={};return t.replace(Jw,"").split(Qw).forEach(n=>{if(n){const r=n.split(Yw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ao(t){let e="";if(Me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=ao(t[n]);r&&(e+=r+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zw="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",eE="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",tE=fr(Zw),nE=fr(eE),rE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sE=fr(rE);function Cm(t){return!!t||t===""}function iE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qa(t[r],e[r]);return n}function Qa(t,e){if(t===e)return!0;let n=jd(t),r=jd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ki(t),r=ki(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?iE(t,e):!1;if(n=ye(t),r=ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qa(t[o],e[o]))return!1}}return String(t)===String(e)}function oE(t,e){return t.findIndex(n=>Qa(n,e))}const He=t=>Me(t)?t:t==null?"":H(t)||ye(t)&&(t.toString===Am||!X(t.toString))?JSON.stringify(t,Sm,2):String(t),Sm=(t,e)=>e&&e.__v_isRef?Sm(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:za(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!H(e)&&!Rm(e)?String(e):e;function Ml(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let zt;class aE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}else Ml("cannot run an inactive effect scope.")}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cE(t,e=zt){e&&e.active&&e.effects.push(t)}function lE(){return zt}const Qu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pm=t=>(t.w&ar)>0,km=t=>(t.n&ar)>0,uE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ar},hE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Pm(s)&&!km(s)?s.delete(t):e[n++]=s,s.w&=~ar,s.n&=~ar}e.length=n}},Ll=new WeakMap;let si=0,ar=1;const xl=30;let Et;const Nr=Symbol("iterate"),$l=Symbol("Map key iterate");class Yu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cE(this,r)}run(){if(!this.active)return this.fn();let e=Et,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,tr=!0,ar=1<<++si,si<=xl?uE(this):qd(this),this.fn()}finally{si<=xl&&hE(this),ar=1<<--si,Et=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(qd(this),this.onStop&&this.onStop(),this.active=!1)}}function qd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const Dm=[];function Xr(){Dm.push(tr),tr=!1}function Zr(){const t=Dm.pop();tr=t===void 0?!0:t}function mt(t,e,n){if(tr&&Et){let r=Ll.get(t);r||Ll.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qu()),Om(s,{effect:Et,target:t,type:e,key:n})}}function Om(t,e){let n=!1;si<=xl?km(t)||(t.n|=ar,n=!Pm(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t),Et.onTrack&&Et.onTrack(Re({effect:Et},e)))}function _n(t,e,n,r,s,i){const o=Ll.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?zu(n)&&a.push(o.get("length")):(a.push(o.get(Nr)),Or(t)&&a.push(o.get($l)));break;case"delete":H(t)||(a.push(o.get(Nr)),Or(t)&&a.push(o.get($l)));break;case"set":Or(t)&&a.push(o.get(Nr));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&Fl(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Fl(Qu(l),c)}}function Fl(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Kd(r,e);for(const r of n)r.computed||Kd(r,e)}function Kd(t,e){(t!==Et||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Re({effect:t},e)),t.scheduler?t.scheduler():t.run())}const dE=fr("__proto__,__v_isRef,__isVue"),Nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ki)),fE=Ya(),pE=Ya(!1,!0),mE=Ya(!0),gE=Ya(!0,!0),Wd=_E();function _E(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xr();const r=se(this)[e].apply(this,n);return Zr(),r}}),t}function yE(t){const e=se(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Ya(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Bm:Um:e?Fm:$m).get(r))return r;const o=H(r);if(!t){if(o&&le(Wd,s))return Reflect.get(Wd,s,i);if(s==="hasOwnProperty")return yE}const a=Reflect.get(r,s,i);return(ki(s)?Nm.has(s):dE(s))||(t||mt(r,"get",s),e)?a:Ge(a)?o&&zu(s)?a:a.value:ye(a)?t?Hm(a):Za(a):a}}const vE=Vm(),wE=Vm(!0);function Vm(t=!1){return function(n,r,s,i){let o=n[r];if(cr(o)&&Ge(o)&&!Ge(s))return!1;if(!t&&(!ma(s)&&!cr(s)&&(o=se(o),s=se(s)),!H(n)&&Ge(o)&&!Ge(s)))return o.value=s,!0;const a=H(n)&&zu(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===se(i)&&(a?Di(s,o)&&_n(n,"set",r,s,o):_n(n,"add",r,s)),c}}function EE(t,e){const n=le(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&_n(t,"delete",e,void 0,r),s}function IE(t,e){const n=Reflect.has(t,e);return(!ki(e)||!Nm.has(e))&&mt(t,"has",e),n}function TE(t){return mt(t,"iterate",H(t)?"length":Nr),Reflect.ownKeys(t)}const Mm={get:fE,set:vE,deleteProperty:EE,has:IE,ownKeys:TE},Lm={get:mE,set(t,e){return Ml(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Ml(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},bE=Re({},Mm,{get:pE,set:wE}),AE=Re({},Lm,{get:gE}),Ju=t=>t,Ja=t=>Reflect.getPrototypeOf(t);function Vo(t,e,n=!1,r=!1){t=t.__v_raw;const s=se(t),i=se(e);n||(e!==i&&mt(s,"get",e),mt(s,"get",i));const{has:o}=Ja(s),a=r?Ju:n?Xu:Oi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Mo(t,e=!1){const n=this.__v_raw,r=se(n),s=se(t);return e||(t!==s&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Lo(t,e=!1){return t=t.__v_raw,!e&&mt(se(t),"iterate",Nr),Reflect.get(t,"size",t)}function zd(t){t=se(t);const e=se(this);return Ja(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Gd(t,e){e=se(e);const n=se(this),{has:r,get:s}=Ja(n);let i=r.call(n,t);i?xm(n,r,t):(t=se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Di(e,o)&&_n(n,"set",t,e,o):_n(n,"add",t,e),this}function Qd(t){const e=se(this),{has:n,get:r}=Ja(e);let s=n.call(e,t);s?xm(e,n,t):(t=se(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&_n(e,"delete",t,void 0,i),o}function Yd(){const t=se(this),e=t.size!==0,n=Or(t)?new Map(t):new Set(t),r=t.clear();return e&&_n(t,"clear",void 0,void 0,n),r}function xo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=se(o),c=e?Ju:t?Xu:Oi;return!t&&mt(a,"iterate",Nr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function $o(t,e,n){return function(...r){const s=this.__v_raw,i=se(s),o=Or(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ju:e?Xu:Oi;return!e&&mt(i,"iterate",c?$l:Nr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${jr(t)} operation ${n}failed: target is readonly.`,se(this))}return t==="delete"?!1:this}}function RE(){const t={get(i){return Vo(this,i)},get size(){return Lo(this)},has:Mo,add:zd,set:Gd,delete:Qd,clear:Yd,forEach:xo(!1,!1)},e={get(i){return Vo(this,i,!1,!0)},get size(){return Lo(this)},has:Mo,add:zd,set:Gd,delete:Qd,clear:Yd,forEach:xo(!1,!0)},n={get(i){return Vo(this,i,!0)},get size(){return Lo(this,!0)},has(i){return Mo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!1)},r={get(i){return Vo(this,i,!0,!0)},get size(){return Lo(this,!0)},has(i){return Mo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$o(i,!1,!1),n[i]=$o(i,!0,!1),e[i]=$o(i,!1,!0),r[i]=$o(i,!0,!0)}),[t,n,e,r]}const[CE,SE,PE,kE]=RE();function Xa(t,e){const n=e?t?kE:PE:t?SE:CE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const DE={get:Xa(!1,!1)},OE={get:Xa(!1,!0)},NE={get:Xa(!0,!1)},VE={get:Xa(!0,!0)};function xm(t,e,n){const r=se(n);if(r!==n&&e.call(t,r)){const s=Wu(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const $m=new WeakMap,Fm=new WeakMap,Um=new WeakMap,Bm=new WeakMap;function ME(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function LE(t){return t.__v_skip||!Object.isExtensible(t)?0:ME(Wu(t))}function Za(t){return cr(t)?t:ec(t,!1,Mm,DE,$m)}function jm(t){return ec(t,!1,bE,OE,Fm)}function Hm(t){return ec(t,!0,Lm,NE,Um)}function ii(t){return ec(t,!0,AE,VE,Bm)}function ec(t,e,n,r,s){if(!ye(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=LE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vr(t){return cr(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function cr(t){return!!(t&&t.__v_isReadonly)}function ma(t){return!!(t&&t.__v_isShallow)}function Ul(t){return Vr(t)||cr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function qm(t){return da(t,"__v_skip",!0),t}const Oi=t=>ye(t)?Za(t):t,Xu=t=>ye(t)?Hm(t):t;function Km(t){tr&&Et&&(t=se(t),Om(t.dep||(t.dep=Qu()),{target:t,type:"get",key:"value"}))}function Wm(t,e){t=se(t);const n=t.dep;n&&Fl(n,{target:t,type:"set",key:"value",newValue:e})}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return zm(t,!1)}function xE(t){return zm(t,!0)}function zm(t,e){return Ge(t)?t:new $E(t,e)}class $E{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:Oi(e)}get value(){return Km(this),this._value}set value(e){const n=this.__v_isShallow||ma(e)||cr(e);e=n?e:se(e),Di(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Oi(e),Wm(this,e))}}function Mr(t){return Ge(t)?t.value:t}const FE={get:(t,e,n)=>Mr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Gm(t){return Vr(t)?t:new Proxy(t,FE)}class UE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yu(e,()=>{this._dirty||(this._dirty=!0,Wm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=se(this);return Km(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function BE(t,e,n=!1){let r,s;const i=X(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new UE(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Lr=[];function Xo(t){Lr.push(t)}function Zo(){Lr.pop()}function C(t,...e){Xr();const n=Lr.length?Lr[Lr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=jE();if(r)Pn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${cc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...HE(s)),console.warn(...i)}Zr()}function jE(){let t=Lr[Lr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function HE(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...qE(n))}),e}function qE({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${cc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...KE(t.props),i]:[s+i]}function KE(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Qm(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Qm(t,e,n){return Me(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ge(e)?(e=Qm(t,se(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):X(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=se(e),n?e:[`${t}=`,e])}function WE(t,e){t!==void 0&&(typeof t!="number"?C(`${e} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&C(`${e} is NaN - the duration expression might be incorrect.`))}const Zu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){tc(i,e,n)}return s}function Bt(t,e,n,r){if(X(t)){const i=Pn(t,e,n,r);return i&&Ku(i)&&i.catch(o=>{tc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}function tc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Zu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pn(c,null,10,[t,o,a]);return}}zE(t,n,s,r)}function zE(t,e,n,r=!0){{const s=Zu[e];if(n&&Xo(n),C(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Zo(),r)throw t;console.error(t)}}let Ni=!1,Bl=!1;const ut=[];let an=0;const Ts=[];let on=null,Wn=0;const Ym=Promise.resolve();let eh=null;const GE=100;function Jm(t){const e=eh||Ym;return t?e.then(this?t.bind(this):t):e}function QE(t){let e=an+1,n=ut.length;for(;e<n;){const r=e+n>>>1;Vi(ut[r])<t?e=r+1:n=r}return e}function nc(t){(!ut.length||!ut.includes(t,Ni&&t.allowRecurse?an+1:an))&&(t.id==null?ut.push(t):ut.splice(QE(t.id),0,t),Xm())}function Xm(){!Ni&&!Bl&&(Bl=!0,eh=Ym.then(tg))}function YE(t){const e=ut.indexOf(t);e>an&&ut.splice(e,1)}function Zm(t){H(t)?Ts.push(...t):(!on||!on.includes(t,t.allowRecurse?Wn+1:Wn))&&Ts.push(t),Xm()}function Jd(t,e=Ni?an+1:0){for(t=t||new Map;e<ut.length;e++){const n=ut[e];if(n&&n.pre){if(th(t,n))continue;ut.splice(e,1),e--,n()}}}function eg(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,on){on.push(...e);return}for(on=e,t=t||new Map,on.sort((n,r)=>Vi(n)-Vi(r)),Wn=0;Wn<on.length;Wn++)th(t,on[Wn])||on[Wn]();on=null,Wn=0}}const Vi=t=>t.id==null?1/0:t.id,JE=(t,e)=>{const n=Vi(t)-Vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tg(t){Bl=!1,Ni=!0,t=t||new Map,ut.sort(JE);const e=n=>th(t,n);try{for(an=0;an<ut.length;an++){const n=ut[an];if(n&&n.active!==!1){if(e(n))continue;Pn(n,null,14)}}}finally{an=0,ut.length=0,eg(t),Ni=!1,eh=null,(ut.length||Ts.length)&&tg(t)}}function th(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>GE){const r=e.ownerInstance,s=r&&mh(r.type);return C(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let xr=!1;const ms=new Set;pa().__VUE_HMR_RUNTIME__={createRecord:Xc(ng),rerender:Xc(eI),reload:Xc(tI)};const Hr=new Map;function XE(t){const e=t.type.__hmrId;let n=Hr.get(e);n||(ng(e,t.type),n=Hr.get(e)),n.instances.add(t)}function ZE(t){Hr.get(t.type.__hmrId).instances.delete(t)}function ng(t,e){return Hr.has(t)?!1:(Hr.set(t,{initialDef:gi(e),instances:new Set}),!0)}function gi(t){return Pg(t)?t.__vccOpts:t}function eI(t,e){const n=Hr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,gi(r.type).render=e),r.renderCache=[],xr=!0,r.update(),xr=!1}))}function tI(t,e){const n=Hr.get(t);if(!n)return;e=gi(e),Xd(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=gi(s.type);ms.has(i)||(i!==n.initialDef&&Xd(i,e),ms.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(ms.add(i),s.ceReload(e.styles),ms.delete(i)):s.parent?nc(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Zm(()=>{for(const s of r)ms.delete(gi(s.type))})}function Xd(t,e){Re(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Xc(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let cn,oi=[],jl=!1;function co(t,...e){cn?cn.emit(t,...e):jl||oi.push({event:t,args:e})}function rg(t,e){var n,r;cn=t,cn?(cn.enabled=!0,oi.forEach(({event:s,args:i})=>cn.emit(s,...i)),oi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{rg(i,e)}),setTimeout(()=>{cn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jl=!0,oi=[])},3e3)):(jl=!0,oi=[])}function nI(t,e){co("app:init",t,e,{Fragment:qe,Text:uo,Comment:Pt,Static:yi})}function rI(t){co("app:unmount",t)}const sI=nh("component:added"),sg=nh("component:updated"),iI=nh("component:removed"),oI=t=>{cn&&typeof cn.cleanupBuffer=="function"&&!cn.cleanupBuffer(t)&&iI(t)};function nh(t){return e=>{co(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const aI=ig("perf:start"),cI=ig("perf:end");function ig(t){return(e,n,r)=>{co(t,e.appContext.app,e.uid,e,n,r)}}function lI(t,e,n){co("component:emit",t.appContext.app,t,e,n)}function uI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Tr(e)in h))&&C(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Tr(e)}" prop.`);else{const d=u[e];X(d)&&(d(...n)||C(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(p=>Me(p)?p.trim():p)),h&&(s=n.map(fa))}lI(t,e,s);{const u=e.toLowerCase();u!==e&&r[Tr(u)]&&C(`Event "${u}" is emitted in component ${cc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${or(e)}" instead of "${e}".`)}let a,c=r[a=Tr(e)]||r[a=Tr(gn(e))];!c&&i&&(c=r[a=Tr(or(e))]),c&&Bt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(l,t,6,s)}}function og(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=og(l,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ye(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Re(o,i),ye(t)&&r.set(t,o),o)}function rc(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,or(e))||le(t,e))}let It=null,sc=null;function ga(t){const e=It;return It=t,sc=t&&t.type.__scopeId||null,e}function qt(t){sc=t}function Kt(){sc=null}function rh(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&df(-1);const i=ga(e);let o;try{o=t(...s)}finally{ga(i),r._d&&df(1)}return sg(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Hl=!1;function _a(){Hl=!0}function Zc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:T}=t;let I,P;const x=ga(t);Hl=!1;try{if(n.shapeFlag&4){const $=s||r;I=Gt(u.call($,$,h,i,p,d,y)),P=c}else{const $=e;c===i&&_a(),I=Gt($.length>1?$(i,{get attrs(){return _a(),c},slots:a,emit:l}):$(i,null)),P=e.props?c:dI(c)}}catch($){vi.length=0,tc($,t,1),I=Se(Pt)}let O=I,J;if(I.patchFlag>0&&I.patchFlag&2048&&([O,J]=hI(I)),P&&T!==!1){const $=Object.keys(P),{shapeFlag:_e}=O;if($.length){if(_e&7)o&&$.some(ha)&&(P=fI(P,o)),O=Dn(O,P);else if(!Hl&&O.type!==Pt){const Ce=Object.keys(c),te=[],oe=[];for(let de=0,xe=Ce.length;de<xe;de++){const F=Ce[de];io(F)?ha(F)||te.push(F[2].toLowerCase()+F.slice(3)):oe.push(F)}oe.length&&C(`Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),te.length&&C(`Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Zd(O)||C("Runtime directive used on component with non-element root node. The directives will not function as intended."),O=Dn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(Zd(O)||C("Component inside <Transition> renders non-element root node that cannot be animated."),O.transition=n.transition),J?J(O):I=O,ga(x),I}const hI=t=>{const e=t.children,n=t.dynamicChildren,r=ag(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Gt(r),o]};function ag(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Li(r)){if(r.type!==Pt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const dI=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},fI=(t,e)=>{const n={};for(const r in t)(!ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Zd=t=>t.shapeFlag&7||t.type===Pt;function pI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&xr||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ef(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!rc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ef(r,o,l):!0:!!o;return!1}function ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rc(n,i))return!0}return!1}function mI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gI=t=>t.__isSuspense;function _I(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Zm(t)}function cg(t,e){return sh(t,null,e)}const Fo={};function _i(t,e,n){return X(e)||C("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),sh(t,e,n)}function sh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=be){var a;e||(n!==void 0&&C('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&C('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=$=>{C("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=lE()===((a=We)==null?void 0:a.scope)?We:null;let u,h=!1,d=!1;if(Ge(t)?(u=()=>t.value,h=ma(t)):Vr(t)?(u=()=>t,r=!0):H(t)?(d=!0,h=t.some($=>Vr($)||ma($)),u=()=>t.map($=>{if(Ge($))return $.value;if(Vr($))return Cr($);if(X($))return Pn($,l,2);c($)})):X(t)?e?u=()=>Pn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Bt(t,l,3,[y])}:(u=St,c(t)),e&&r){const $=u;u=()=>Cr($())}let p,y=$=>{p=O.onStop=()=>{Pn($,l,4)}},T;if(xi)if(y=St,e?n&&Bt(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const $=TT();T=$.__watcherHandles||($.__watcherHandles=[])}else return St;let I=d?new Array(t.length).fill(Fo):Fo;const P=()=>{if(O.active)if(e){const $=O.run();(r||h||(d?$.some((_e,Ce)=>Di(_e,I[Ce])):Di($,I)))&&(p&&p(),Bt(e,l,3,[$,I===Fo?void 0:d&&I[0]===Fo?[]:I,y]),I=$)}else O.run()};P.allowRecurse=!!e;let x;s==="sync"?x=P:s==="post"?x=()=>Rt(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),x=()=>nc(P));const O=new Yu(u,x);O.onTrack=i,O.onTrigger=o,e?n?P():I=O.run():s==="post"?Rt(O.run.bind(O),l&&l.suspense):O.run();const J=()=>{O.stop(),l&&l.scope&&qu(l.scope.effects,O)};return T&&T.push(J),J}function yI(t,e,n){const r=this.proxy,s=Me(t)?t.includes(".")?lg(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=We;Ps(this);const a=sh(s,i.bind(r),n);return o?Ps(o):Fr(),a}function lg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Cr(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Cr(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Cr(t[n],e);else if(za(t)||Or(t))t.forEach(n=>{Cr(n,e)});else if(Rm(t))for(const n in t)Cr(t[n],e);return t}function ug(t){Kw(t)&&C("Do not use built-in directive ids as custom directive id: "+t)}function st(t,e){const n=It;if(n===null)return C("withDirectives can only be used inside render functions."),t;const r=ac(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Cr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xr(),Bt(c,n,8,[t.el,a,t,e]),Zr())}}function vI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return es(()=>{t.isMounted=!0}),ah(()=>{t.isUnmounting=!0}),t}const Ft=[Function,Array],wI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft};function EI(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ql(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:T,onAppear:I,onAfterAppear:P,onAppearCancelled:x}=e,O=String(t.key),J=EI(n,t),$=(te,oe)=>{te&&Bt(te,r,9,oe)},_e=(te,oe)=>{const de=oe[1];$(te,oe),H(te)?te.every(xe=>xe.length<=1)&&de():te.length<=1&&de()},Ce={mode:i,persisted:o,beforeEnter(te){let oe=a;if(!n.isMounted)if(s)oe=T||a;else return;te._leaveCb&&te._leaveCb(!0);const de=J[O];de&&gs(t,de)&&de.el._leaveCb&&de.el._leaveCb(),$(oe,[te])},enter(te){let oe=c,de=l,xe=u;if(!n.isMounted)if(s)oe=I||c,de=P||l,xe=x||u;else return;let F=!1;const Ee=te._enterCb=At=>{F||(F=!0,At?$(xe,[te]):$(de,[te]),Ce.delayedLeave&&Ce.delayedLeave(),te._enterCb=void 0)};oe?_e(oe,[te,Ee]):Ee()},leave(te,oe){const de=String(t.key);if(te._enterCb&&te._enterCb(!0),n.isUnmounting)return oe();$(h,[te]);let xe=!1;const F=te._leaveCb=Ee=>{xe||(xe=!0,oe(),Ee?$(y,[te]):$(p,[te]),te._leaveCb=void 0,J[de]===t&&delete J[de])};J[de]=t,d?_e(d,[te,F]):F()},clone(te){return ql(te,e,n,r)}};return Ce}function Kl(t,e){t.shapeFlag&6&&t.component?Kl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&s++,r=r.concat(hg(o.children,e,a))):(e||o.type!==Pt)&&r.push(a!=null?Dn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ze(t,e){return X(t)?(()=>Re({name:t.name},e,{setup:t}))():t}const ea=t=>!!t.type.__asyncLoader,ih=t=>t.type.__isKeepAlive;function II(t,e){dg(t,"a",e)}function TI(t,e){dg(t,"da",e)}function dg(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ih(s.parent.vnode)&&bI(r,e,n,s),s=s.parent}}function bI(t,e,n,r){const s=ic(e,t,r,!0);pg(()=>{qu(r[e],s)},n)}function ic(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xr(),Ps(n);const a=Bt(e,n,t,o);return Fr(),Zr(),a});return r?s.unshift(i):s.push(i),i}else{const s=Tr(Zu[t].replace(/ hook$/,""));C(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const xn=t=>(e,n=We)=>(!xi||t==="sp")&&ic(t,(...r)=>e(...r),n),oh=xn("bm"),es=xn("m"),AI=xn("bu"),fg=xn("u"),ah=xn("bum"),pg=xn("um"),RI=xn("sp"),CI=xn("rtg"),SI=xn("rtc");function PI(t,e=We){ic("ec",t,e)}const Wl="components";function lo(t,e){return DI(Wl,t,!0,e)||t}const kI=Symbol.for("v-ndc");function DI(t,e,n=!0,r=!1){const s=It||We;if(s){const i=s.type;if(t===Wl){const a=mh(i,!1);if(a&&(a===e||a===gn(e)||a===jr(gn(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===Wl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";C(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else C(`resolve${jr(t.slice(0,-1))} can only be used in render() or setup().`)}function tf(t,e){return t&&(t[e]||t[gn(e)]||t[jr(gn(e))])}function Fs(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||C(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const zl=t=>t?Cg(t)?ac(t)||t.proxy:zl(t.parent):null,$r=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ii(t.props),$attrs:t=>ii(t.attrs),$slots:t=>ii(t.slots),$refs:t=>ii(t.refs),$parent:t=>zl(t.parent),$root:t=>zl(t.root),$emit:t=>t.emit,$options:t=>lh(t),$forceUpdate:t=>t.f||(t.f=()=>nc(t.update)),$nextTick:t=>t.n||(t.n=Jm.bind(t.proxy)),$watch:t=>yI.bind(t)}),ch=t=>t==="_"||t==="$",el=(t,e)=>t!==be&&!t.__isScriptSetup&&le(t,e),mg={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(el(r,e))return o[e]=1,r[e];if(s!==be&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const u=$r[e];let h,d;if(u)return e==="$attrs"?(mt(t,"get",e),_a()):e==="$slots"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e];It&&(!Me(e)||e.indexOf("__v")!==0)&&(s!==be&&ch(e[0])&&le(s,e)?C(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===It&&C(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return el(s,e)?(s[e]=n,!0):s.__isScriptSetup&&le(s,e)?(C(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==be&&le(r,e)?(r[e]=n,!0):le(t.props,e)?(C(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(C(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||el(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le($r,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};mg.ownKeys=t=>(C("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function OI(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys($r).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>$r[n](t),set:St})}),e}function NI(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:St})})}function VI(t){const{ctx:e,setupState:n}=t;Object.keys(se(n)).forEach(r=>{if(!n.__isScriptSetup){if(ch(r[0])){C(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:St})}})}function nf(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function MI(){const t=Object.create(null);return(e,n)=>{t[n]?C(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Gl=!0;function LI(t){const e=lh(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:T,deactivated:I,beforeDestroy:P,beforeUnmount:x,destroyed:O,unmounted:J,render:$,renderTracked:_e,renderTriggered:Ce,errorCaptured:te,serverPrefetch:oe,expose:de,inheritAttrs:xe,components:F,directives:Ee,filters:At}=e,yt=MI();{const[ae]=t.propsOptions;if(ae)for(const ce in ae)yt("Props",ce)}if(l&&xI(l,r,yt),o)for(const ae in o){const ce=o[ae];X(ce)?(Object.defineProperty(r,ae,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),yt("Methods",ae)):C(`Method "${ae}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(s){X(s)||C("The data option must be a function. Plain object usage is no longer supported.");const ae=s.call(n,n);if(Ku(ae)&&C("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ye(ae))C("data() should return an object.");else{t.data=Za(ae);for(const ce in ae)yt("Data",ce),ch(ce[0])||Object.defineProperty(r,ce,{configurable:!0,enumerable:!0,get:()=>ae[ce],set:St})}}if(Gl=!0,i)for(const ae in i){const ce=i[ae],xt=X(ce)?ce.bind(n,n):X(ce.get)?ce.get.bind(n,n):St;xt===St&&C(`Computed property "${ae}" has no getter.`);const vr=!X(ce)&&X(ce.set)?ce.set.bind(n):()=>{C(`Write operation failed: computed property "${ae}" is readonly.`)},$n=rt({get:xt,set:vr});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>$n.value,set:nn=>$n.value=nn}),yt("Computed",ae)}if(a)for(const ae in a)gg(a[ae],r,n,ae);if(c){const ae=X(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ce=>{ta(ce,ae[ce])})}u&&rf(u,t,"c");function Fe(ae,ce){H(ce)?ce.forEach(xt=>ae(xt.bind(n))):ce&&ae(ce.bind(n))}if(Fe(oh,h),Fe(es,d),Fe(AI,p),Fe(fg,y),Fe(II,T),Fe(TI,I),Fe(PI,te),Fe(SI,_e),Fe(CI,Ce),Fe(ah,x),Fe(pg,J),Fe(RI,oe),H(de))if(de.length){const ae=t.exposed||(t.exposed={});de.forEach(ce=>{Object.defineProperty(ae,ce,{get:()=>n[ce],set:xt=>n[ce]=xt})})}else t.exposed||(t.exposed={});$&&t.render===St&&(t.render=$),xe!=null&&(t.inheritAttrs=xe),F&&(t.components=F),Ee&&(t.directives=Ee)}function xI(t,e,n=St){H(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;ye(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function rf(t,e,n){Bt(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gg(t,e,n,r){const s=r.includes(".")?lg(n,r):()=>n[r];if(Me(t)){const i=e[t];X(i)?_i(s,i):C(`Invalid watch handler specified by key "${t}"`,i)}else if(X(t))_i(s,t.bind(n));else if(ye(t))if(H(t))t.forEach(i=>gg(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)?_i(s,i,t):C(`Invalid watch handler specified by key "${t.handler}"`,i)}else C(`Invalid watch option: "${r}"`,t)}function lh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ya(c,l,o,!0)),ya(c,e,o)),ye(e)&&i.set(e,c),c}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(r&&o==="expose")C('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=$I[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $I={data:sf,props:of,emits:of,methods:ai,computed:ai,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ai,directives:ai,watch:UI,provide:sf,inject:FI};function sf(t,e){return e?t?function(){return Re(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function FI(t,e){return ai(Ql(t),Ql(e))}function Ql(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?Re(Object.create(null),t,e):e}function of(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Re(Object.create(null),nf(t),nf(e??{})):e}function UI(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function _g(){return{app:null,config:{isNativeTag:bm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BI=0;function jI(t,e){return function(r,s=null){X(r)||(r=Re({},r)),s!=null&&!ye(s)&&(C("root props passed to app.mount() must be an object."),s=null);const i=_g();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){C("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const c=i.app={_uid:BI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(l){C("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?C("Plugin has already been applied to target app."):l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)?(o.add(l),l(c,...u)):C('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?C("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return eu(l,i.config),u?(i.components[l]&&C(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return ug(l),u?(i.directives[l]&&C(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)C("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&C("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Se(r,s);return d.appContext=i,i.reload=()=>{t(Dn(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,nI(c,mf),ac(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,rI(c),delete c._container.__vue_app__):C("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&C(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c},runWithContext(l){va=c;try{return l()}finally{va=null}}};return c}}let va=null;function ta(t,e){if(!We)C("provide() can only be used inside setup().");else{let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=We||It;if(r||va){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:va._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e;C(`injection "${String(t)}" not found.`)}else C("inject() can only be used inside setup() or functional components.")}function HI(t,e,n,r=!1){const s={},i={};da(i,oc,1),t.propsDefaults=Object.create(null),yg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);wg(e||{},s,t),n?t.props=r?s:jm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qI(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function KI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=se(s),[c]=t.propsOptions;let l=!1;if(!qI(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rc(t.emitsOptions,d))continue;const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=gn(d);s[y]=Yl(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{yg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=or(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Yl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs"),wg(e||{},s,t)}function yg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Jo(c))continue;const l=e[c];let u;s&&le(s,u=gn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=se(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Yl(s,c,h,l[h],t,!le(l,h))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ps(s),r=l[n]=c.call(null,e),Fr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===or(n))&&(r=!0))}return r}function vg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,p]=vg(h,e,!0);Re(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ye(t)&&r.set(t,Is),Is;if(H(i))for(let u=0;u<i.length;u++){Me(i[u])||C("props must be strings when using array syntax.",i[u]);const h=gn(i[u]);af(h)&&(o[h]=be)}else if(i){ye(i)||C("invalid props options",i);for(const u in i){const h=gn(u);if(af(h)){const d=i[u],p=o[h]=H(d)||X(d)?{type:d}:Re({},d);if(p){const y=lf(Boolean,p.type),T=lf(String,p.type);p[0]=y>-1,p[1]=T<0||y<T,(y>-1||le(p,"default"))&&a.push(h)}}}}const l=[o,a];return ye(t)&&r.set(t,l),l}function af(t){return t[0]!=="$"?!0:(C(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Jl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cf(t,e){return Jl(t)===Jl(e)}function lf(t,e){return H(e)?e.findIndex(n=>cf(n,t)):X(e)&&cf(e,t)?0:-1}function wg(t,e,n){const r=se(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&WI(i,r[i],o,!le(t,i)&&!le(t,or(i)))}}function WI(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){C('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let c=!1;const l=H(s)?s:[s],u=[];for(let h=0;h<l.length&&!c;h++){const{valid:d,expectedType:p}=GI(e,l[h]);u.push(p||""),c=d}if(!c){C(QI(t,e,u));return}}o&&!o(e)&&C('Invalid prop: custom validator check failed for prop "'+t+'".')}}const zI=fr("String,Number,Boolean,Function,Symbol,BigInt");function GI(t,e){let n;const r=Jl(e);if(zI(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=ye(t):r==="Array"?n=H(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function QI(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(jr).join(" | ")}`;const s=n[0],i=Wu(e),o=uf(e,s),a=uf(e,i);return n.length===1&&hf(s)&&!YI(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,hf(i)&&(r+=`with value ${a}.`),r}function uf(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function hf(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function YI(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Eg=t=>t[0]==="_"||t==="$stable",uh=t=>H(t)?t.map(Gt):[Gt(t)],JI=(t,e,n)=>{if(e._n)return e;const r=rh((...s)=>(We&&C(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),uh(e(...s))),n);return r._c=!1,r},Ig=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eg(s))continue;const i=t[s];if(X(i))e[s]=JI(s,i,r);else if(i!=null){C(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=uh(i);e[s]=()=>o}}},Tg=(t,e)=>{ih(t.vnode)||C("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=uh(e);t.slots.default=()=>n},XI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),da(e,"_",n)):Ig(e,t.slots={})}else t.slots={},e&&Tg(t,e);da(t.slots,oc,1)},ZI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?xr?(Re(s,e),_n(t,"set","$slots")):n&&a===1?i=!1:(Re(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ig(e,s)),o=e}else e&&(Tg(t,e),o={default:1});if(i)for(const a in s)!Eg(a)&&!(a in o)&&delete s[a]};function Xl(t,e,n,r,s=!1){if(H(t)){t.forEach((d,p)=>Xl(d,e&&(H(e)?e[p]:e),n,r,s));return}if(ea(r)&&!s)return;const i=r.shapeFlag&4?ac(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){C("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),X(c))Pn(c,a,12,[o,u]);else{const d=Me(c),p=Ge(c);if(d||p){const y=()=>{if(t.f){const T=d?le(h,c)?h[c]:u[c]:c.value;s?H(T)&&qu(T,i):H(T)?T.includes(i)||T.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):C("Invalid template ref type:",c,`(${typeof c})`)};o?(y.id=-1,Rt(y,n)):y()}else C("Invalid template ref type:",c,`(${typeof c})`)}}let Js,Qn;function In(t,e){t.appContext.config.performance&&wa()&&Qn.mark(`vue-${e}-${t.uid}`),aI(t,e,wa()?Qn.now():Date.now())}function Tn(t,e){if(t.appContext.config.performance&&wa()){const n=`vue-${e}-${t.uid}`,r=n+":end";Qn.mark(r),Qn.measure(`<${cc(t,t.type)}> ${e}`,n,r),Qn.clearMarks(n),Qn.clearMarks(r)}cI(t,e,wa()?Qn.now():Date.now())}function wa(){return Js!==void 0||(typeof window<"u"&&window.performance?(Js=!0,Qn=window.performance):Js=!1),Js}function eT(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Rt=_I;function tT(t){return nT(t)}function nT(t,e){eT();const n=pa();n.__VUE__=!0,rg(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:y}=t,T=(f,m,_,E=null,w=null,k=null,N=!1,S=null,D=xr?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!gs(f,m)&&(E=M(f),$t(f,w,k,!0),f=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:A,ref:q,shapeFlag:B}=m;switch(A){case uo:I(f,m,_,E);break;case Pt:P(f,m,_,E);break;case yi:f==null?x(m,_,E,N):O(f,m,_,N);break;case qe:Ee(f,m,_,E,w,k,N,S,D);break;default:B&1?_e(f,m,_,E,w,k,N,S,D):B&6?At(f,m,_,E,w,k,N,S,D):B&64||B&128?A.process(f,m,_,E,w,k,N,S,D,U):C("Invalid VNode type:",A,`(${typeof A})`)}q!=null&&w&&Xl(q,f&&f.ref,k,m||f,!m)},I=(f,m,_,E)=>{if(f==null)r(m.el=a(m.children),_,E);else{const w=m.el=f.el;m.children!==f.children&&l(w,m.children)}},P=(f,m,_,E)=>{f==null?r(m.el=c(m.children||""),_,E):m.el=f.el},x=(f,m,_,E)=>{[f.el,f.anchor]=y(f.children,m,_,E,f.el,f.anchor)},O=(f,m,_,E)=>{if(m.children!==f.children){const w=d(f.anchor);$(f),[m.el,m.anchor]=y(m.children,_,w,E)}else m.el=f.el,m.anchor=f.anchor},J=({el:f,anchor:m},_,E)=>{let w;for(;f&&f!==m;)w=d(f),r(f,_,E),f=w;r(m,_,E)},$=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},_e=(f,m,_,E,w,k,N,S,D)=>{N=N||m.type==="svg",f==null?Ce(m,_,E,w,k,N,S,D):de(f,m,w,k,N,S,D)},Ce=(f,m,_,E,w,k,N,S)=>{let D,A;const{type:q,props:B,shapeFlag:W,transition:ne,dirs:ue}=f;if(D=f.el=o(f.type,k,B&&B.is,B),W&8?u(D,f.children):W&16&&oe(f.children,D,null,E,w,k&&q!=="foreignObject",N,S),ue&&wr(f,null,E,"created"),te(D,f,f.scopeId,N,E),B){for(const Te in B)Te!=="value"&&!Jo(Te)&&i(D,Te,null,B[Te],k,f.children,E,w,v);"value"in B&&i(D,"value",null,B.value),(A=B.onVnodeBeforeMount)&&sn(A,E,f)}Object.defineProperty(D,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(D,"__vueParentComponent",{value:E,enumerable:!1}),ue&&wr(f,null,E,"beforeMount");const Ae=(!w||w&&!w.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(D),r(D,m,_),((A=B&&B.onVnodeMounted)||Ae||ue)&&Rt(()=>{A&&sn(A,E,f),Ae&&ne.enter(D),ue&&wr(f,null,E,"mounted")},w)},te=(f,m,_,E,w)=>{if(_&&p(f,_),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(w){let k=w.subTree;if(k.patchFlag>0&&k.patchFlag&2048&&(k=ag(k.children)||k),m===k){const N=w.vnode;te(f,N,N.scopeId,N.slotScopeIds,w.parent)}}},oe=(f,m,_,E,w,k,N,S,D=0)=>{for(let A=D;A<f.length;A++){const q=f[A]=S?zn(f[A]):Gt(f[A]);T(null,q,m,_,E,w,k,N,S)}},de=(f,m,_,E,w,k,N)=>{const S=m.el=f.el;let{patchFlag:D,dynamicChildren:A,dirs:q}=m;D|=f.patchFlag&16;const B=f.props||be,W=m.props||be;let ne;_&&Er(_,!1),(ne=W.onVnodeBeforeUpdate)&&sn(ne,_,m,f),q&&wr(m,f,_,"beforeUpdate"),_&&Er(_,!0),xr&&(D=0,N=!1,A=null);const ue=w&&m.type!=="foreignObject";if(A?(xe(f.dynamicChildren,A,S,_,E,ue,k),Zl(f,m)):N||xt(f,m,S,null,_,E,ue,k,!1),D>0){if(D&16)F(S,m,B,W,_,E,w);else if(D&2&&B.class!==W.class&&i(S,"class",null,W.class,w),D&4&&i(S,"style",B.style,W.style,w),D&8){const Ae=m.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const Ue=Ae[Te],Wt=B[Ue],us=W[Ue];(us!==Wt||Ue==="value")&&i(S,Ue,Wt,us,w,f.children,_,E,v)}}D&1&&f.children!==m.children&&u(S,m.children)}else!N&&A==null&&F(S,m,B,W,_,E,w);((ne=W.onVnodeUpdated)||q)&&Rt(()=>{ne&&sn(ne,_,m,f),q&&wr(m,f,_,"updated")},E)},xe=(f,m,_,E,w,k,N)=>{for(let S=0;S<m.length;S++){const D=f[S],A=m[S],q=D.el&&(D.type===qe||!gs(D,A)||D.shapeFlag&70)?h(D.el):_;T(D,A,q,null,E,w,k,N,!0)}},F=(f,m,_,E,w,k,N)=>{if(_!==E){if(_!==be)for(const S in _)!Jo(S)&&!(S in E)&&i(f,S,_[S],null,N,m.children,w,k,v);for(const S in E){if(Jo(S))continue;const D=E[S],A=_[S];D!==A&&S!=="value"&&i(f,S,A,D,N,m.children,w,k,v)}"value"in E&&i(f,"value",_.value,E.value)}},Ee=(f,m,_,E,w,k,N,S,D)=>{const A=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:ne}=m;(xr||B&2048)&&(B=0,D=!1,W=null),ne&&(S=S?S.concat(ne):ne),f==null?(r(A,_,E),r(q,_,E),oe(m.children,_,q,w,k,N,S,D)):B>0&&B&64&&W&&f.dynamicChildren?(xe(f.dynamicChildren,W,_,w,k,N,S),Zl(f,m)):xt(f,m,_,q,w,k,N,S,D)},At=(f,m,_,E,w,k,N,S,D)=>{m.slotScopeIds=S,f==null?m.shapeFlag&512?w.ctx.activate(m,_,E,N,D):yt(m,_,E,w,k,N,D):Fe(f,m,D)},yt=(f,m,_,E,w,k,N)=>{const S=f.component=dT(f,E,w);if(S.type.__hmrId&&XE(S),Xo(f),In(S,"mount"),ih(f)&&(S.ctx.renderer=U),In(S,"init"),pT(S),Tn(S,"init"),S.asyncDep){if(w&&w.registerDep(S,ae),!f.el){const D=S.subTree=Se(Pt);P(null,D,m,_)}return}ae(S,f,m,_,w,k,N),Zo(),Tn(S,"mount")},Fe=(f,m,_)=>{const E=m.component=f.component;if(pI(f,m,_))if(E.asyncDep&&!E.asyncResolved){Xo(m),ce(E,m,_),Zo();return}else E.next=m,YE(E.update),E.update();else m.el=f.el,E.vnode=m},ae=(f,m,_,E,w,k,N)=>{const S=()=>{if(f.isMounted){let{next:q,bu:B,u:W,parent:ne,vnode:ue}=f,Ae=q,Te;Xo(q||f.vnode),Er(f,!1),q?(q.el=ue.el,ce(f,q,N)):q=ue,B&&ps(B),(Te=q.props&&q.props.onVnodeBeforeUpdate)&&sn(Te,ne,q,ue),Er(f,!0),In(f,"render");const Ue=Zc(f);Tn(f,"render");const Wt=f.subTree;f.subTree=Ue,In(f,"patch"),T(Wt,Ue,h(Wt.el),M(Wt),f,w,k),Tn(f,"patch"),q.el=Ue.el,Ae===null&&mI(f,Ue.el),W&&Rt(W,w),(Te=q.props&&q.props.onVnodeUpdated)&&Rt(()=>sn(Te,ne,q,ue),w),sg(f),Zo()}else{let q;const{el:B,props:W}=m,{bm:ne,m:ue,parent:Ae}=f,Te=ea(m);if(Er(f,!1),ne&&ps(ne),!Te&&(q=W&&W.onVnodeBeforeMount)&&sn(q,Ae,m),Er(f,!0),B&&De){const Ue=()=>{In(f,"render"),f.subTree=Zc(f),Tn(f,"render"),In(f,"hydrate"),De(B,f.subTree,f,w,null),Tn(f,"hydrate")};Te?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ue()):Ue()}else{In(f,"render");const Ue=f.subTree=Zc(f);Tn(f,"render"),In(f,"patch"),T(null,Ue,_,E,f,w,k),Tn(f,"patch"),m.el=Ue.el}if(ue&&Rt(ue,w),!Te&&(q=W&&W.onVnodeMounted)){const Ue=m;Rt(()=>sn(q,Ae,Ue),w)}(m.shapeFlag&256||Ae&&ea(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&f.a&&Rt(f.a,w),f.isMounted=!0,sI(f),m=_=E=null}},D=f.effect=new Yu(S,()=>nc(A),f.scope),A=f.update=()=>D.run();A.id=f.uid,Er(f,!0),D.onTrack=f.rtc?q=>ps(f.rtc,q):void 0,D.onTrigger=f.rtg?q=>ps(f.rtg,q):void 0,A.ownerInstance=f,A()},ce=(f,m,_)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,KI(f,m.props,E,_),ZI(f,m.children,_),Xr(),Jd(),Zr()},xt=(f,m,_,E,w,k,N,S,D=!1)=>{const A=f&&f.children,q=f?f.shapeFlag:0,B=m.children,{patchFlag:W,shapeFlag:ne}=m;if(W>0){if(W&128){$n(A,B,_,E,w,k,N,S,D);return}else if(W&256){vr(A,B,_,E,w,k,N,S,D);return}}ne&8?(q&16&&v(A,w,k),B!==A&&u(_,B)):q&16?ne&16?$n(A,B,_,E,w,k,N,S,D):v(A,w,k,!0):(q&8&&u(_,""),ne&16&&oe(B,_,E,w,k,N,S,D))},vr=(f,m,_,E,w,k,N,S,D)=>{f=f||Is,m=m||Is;const A=f.length,q=m.length,B=Math.min(A,q);let W;for(W=0;W<B;W++){const ne=m[W]=D?zn(m[W]):Gt(m[W]);T(f[W],ne,_,null,w,k,N,S,D)}A>q?v(f,w,k,!0,!1,B):oe(m,_,E,w,k,N,S,D,B)},$n=(f,m,_,E,w,k,N,S,D)=>{let A=0;const q=m.length;let B=f.length-1,W=q-1;for(;A<=B&&A<=W;){const ne=f[A],ue=m[A]=D?zn(m[A]):Gt(m[A]);if(gs(ne,ue))T(ne,ue,_,null,w,k,N,S,D);else break;A++}for(;A<=B&&A<=W;){const ne=f[B],ue=m[W]=D?zn(m[W]):Gt(m[W]);if(gs(ne,ue))T(ne,ue,_,null,w,k,N,S,D);else break;B--,W--}if(A>B){if(A<=W){const ne=W+1,ue=ne<q?m[ne].el:E;for(;A<=W;)T(null,m[A]=D?zn(m[A]):Gt(m[A]),_,ue,w,k,N,S,D),A++}}else if(A>W)for(;A<=B;)$t(f[A],w,k,!0),A++;else{const ne=A,ue=A,Ae=new Map;for(A=ue;A<=W;A++){const vt=m[A]=D?zn(m[A]):Gt(m[A]);vt.key!=null&&(Ae.has(vt.key)&&C("Duplicate keys found during update:",JSON.stringify(vt.key),"Make sure keys are unique."),Ae.set(vt.key,A))}let Te,Ue=0;const Wt=W-ue+1;let us=!1,Fd=0;const Ys=new Array(Wt);for(A=0;A<Wt;A++)Ys[A]=0;for(A=ne;A<=B;A++){const vt=f[A];if(Ue>=Wt){$t(vt,w,k,!0);continue}let rn;if(vt.key!=null)rn=Ae.get(vt.key);else for(Te=ue;Te<=W;Te++)if(Ys[Te-ue]===0&&gs(vt,m[Te])){rn=Te;break}rn===void 0?$t(vt,w,k,!0):(Ys[rn-ue]=A+1,rn>=Fd?Fd=rn:us=!0,T(vt,m[rn],_,null,w,k,N,S,D),Ue++)}const Ud=us?rT(Ys):Is;for(Te=Ud.length-1,A=Wt-1;A>=0;A--){const vt=ue+A,rn=m[vt],Bd=vt+1<q?m[vt+1].el:E;Ys[A]===0?T(null,rn,_,Bd,w,k,N,S,D):us&&(Te<0||A!==Ud[Te]?nn(rn,_,Bd,2):Te--)}}},nn=(f,m,_,E,w=null)=>{const{el:k,type:N,transition:S,children:D,shapeFlag:A}=f;if(A&6){nn(f.component.subTree,m,_,E);return}if(A&128){f.suspense.move(m,_,E);return}if(A&64){N.move(f,m,_,U);return}if(N===qe){r(k,m,_);for(let B=0;B<D.length;B++)nn(D[B],m,_,E);r(f.anchor,m,_);return}if(N===yi){J(f,m,_);return}if(E!==2&&A&1&&S)if(E===0)S.beforeEnter(k),r(k,m,_),Rt(()=>S.enter(k),w);else{const{leave:B,delayLeave:W,afterLeave:ne}=S,ue=()=>r(k,m,_),Ae=()=>{B(k,()=>{ue(),ne&&ne()})};W?W(k,ue,Ae):Ae()}else r(k,m,_)},$t=(f,m,_,E=!1,w=!1)=>{const{type:k,props:N,ref:S,children:D,dynamicChildren:A,shapeFlag:q,patchFlag:B,dirs:W}=f;if(S!=null&&Xl(S,null,_,f,!0),q&256){m.ctx.deactivate(f);return}const ne=q&1&&W,ue=!ea(f);let Ae;if(ue&&(Ae=N&&N.onVnodeBeforeUnmount)&&sn(Ae,m,f),q&6)Un(f.component,_,E);else{if(q&128){f.suspense.unmount(_,E);return}ne&&wr(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,_,w,U,E):A&&(k!==qe||B>0&&B&64)?v(A,m,_,!1,!0):(k===qe&&B&384||!w&&q&16)&&v(D,m,_),E&&Fn(f)}(ue&&(Ae=N&&N.onVnodeUnmounted)||ne)&&Rt(()=>{Ae&&sn(Ae,m,f),ne&&wr(f,null,m,"unmounted")},_)},Fn=f=>{const{type:m,el:_,anchor:E,transition:w}=f;if(m===qe){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(N=>{N.type===Pt?s(N.el):Fn(N)}):No(_,E);return}if(m===yi){$(f);return}const k=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:S}=w,D=()=>N(_,k);S?S(f.el,k,D):D()}else k()},No=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},Un=(f,m,_)=>{f.type.__hmrId&&ZE(f);const{bum:E,scope:w,update:k,subTree:N,um:S}=f;E&&ps(E),w.stop(),k&&(k.active=!1,$t(N,f,m,_)),S&&Rt(S,m),Rt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),oI(f)},v=(f,m,_,E=!1,w=!1,k=0)=>{for(let N=k;N<f.length;N++)$t(f[N],m,_,E,w)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),L=(f,m,_)=>{f==null?m._vnode&&$t(m._vnode,null,null,!0):T(m._vnode||null,f,m,null,null,null,_),Jd(),eg(),m._vnode=f},U={p:T,um:$t,m:nn,r:Fn,mt:yt,mc:oe,pc:xt,pbc:xe,n:M,o:t};let fe,De;return e&&([fe,De]=e(U)),{render:L,hydrate:fe,createApp:jI(L,fe)}}function Er({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zl(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zn(s[i]),a.el=o.el),n||Zl(o,a)),a.type===uo&&(a.el=o.el),a.type===Pt&&!a.el&&(a.el=o.el)}}function rT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sT=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),uo=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),yi=Symbol.for("v-stc"),vi=[];let Qt=null;function z(t=!1){vi.push(Qt=t?null:[])}function iT(){vi.pop(),Qt=vi[vi.length-1]||null}let Mi=1;function df(t){Mi+=t}function bg(t){return t.dynamicChildren=Mi>0?Qt||Is:null,iT(),Mi>0&&Qt&&Qt.push(t),t}function Y(t,e,n,r,s,i){return bg(g(t,e,n,r,s,i,!0))}function ho(t,e,n,r,s){return bg(Se(t,e,n,r,s,!0))}function Li(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return e.shapeFlag&6&&ms.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const oT=(...t)=>aT(...t),oc="__vInternal",Ag=({key:t})=>t??null,na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||Ge(t)||X(t)?{i:It,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ag(e),ref:e&&na(e),scopeId:sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(dh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),c.key!==c.key&&C("VNode created with invalid key (NaN). VNode type:",c.type),Mi>0&&!o&&Qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Qt.push(c),c}const Se=oT;function aT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kI)&&(t||C(`Invalid vnode type when creating vnode: ${t}.`),t=Pt),Li(t)){const a=Dn(t,e,!0);return n&&dh(a,n),Mi>0&&!i&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag|=-2,a}if(Pg(t)&&(t=t.__vccOpts),e){e=cT(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=ao(a)),ye(c)&&(Ul(c)&&!H(c)&&(c=Re({},c)),e.style=Gu(c))}const o=Me(t)?1:gI(t)?128:sT(t)?64:ye(t)?4:X(t)?2:0;return o&4&&Ul(t)&&(t=se(t),C("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),g(t,e,n,r,s,o,i,!0)}function cT(t){return t?Ul(t)||oc in t?Re({},t):t:null}function Dn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?lT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ag(a),ref:e&&e.ref?n&&s?H(s)?s.concat(na(e)):[s,na(e)]:na(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&H(o)?o.map(Rg):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dn(t.ssContent),ssFallback:t.ssFallback&&Dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rg(t){const e=Dn(t);return H(t.children)&&(e.children=t.children.map(Rg)),e}function Ye(t=" ",e=0){return Se(uo,null,t,e)}function hh(t,e){const n=Se(yi,null,t);return n.staticCount=e,n}function Ke(t="",e=!1){return e?(z(),ho(Pt,null,t)):Se(Pt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Se(Pt):H(t)?Se(qe,null,t.slice()):typeof t=="object"?zn(t):Se(uo,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dn(t)}function dh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oc in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[Ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function lT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ao([e.class,r.class]));else if(s==="style")e.style=Gu([e.style,r.style]);else if(io(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Bt(t,e,7,[n,r])}const uT=_g();let hT=0;function dT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uT,i={uid:hT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new aE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(r,s),emitsOptions:og(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=OI(i),i.root=e?e.root:i,i.emit=uI.bind(null,i),t.ce&&t.ce(i),i}let We=null;const fh=()=>We||It;let ph,hs,ff="__VUE_INSTANCE_SETTERS__";(hs=pa()[ff])||(hs=pa()[ff]=[]),hs.push(t=>We=t),ph=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Ps=t=>{ph(t),t.scope.on()},Fr=()=>{We&&We.scope.off(),ph(null)},fT=fr("slot,component");function eu(t,e){const n=e.isNativeTag||bm;(fT(t)||n(t))&&C("Do not use built-in or reserved HTML elements as component id: "+t)}function Cg(t){return t.vnode.shapeFlag&4}let xi=!1;function pT(t,e=!1){xi=e;const{props:n,children:r}=t.vnode,s=Cg(t);HI(t,n,s,e),XI(t,r);const i=s?mT(t,e):void 0;return xi=!1,i}function mT(t,e){var n;const r=t.type;{if(r.name&&eu(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)eu(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)ug(i[o])}r.compilerOptions&&gT()&&C('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=qm(new Proxy(t.ctx,mg)),NI(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?vT(t):null;Ps(t),Xr();const o=Pn(s,t,0,[ii(t.props),i]);if(Zr(),Fr(),Ku(o)){if(o.then(Fr,Fr),e)return o.then(a=>{pf(t,a,e)}).catch(a=>{tc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";C(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else pf(t,o,e)}else Sg(t,e)}function pf(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)?(Li(e)&&C("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Gm(e),VI(t)):e!==void 0&&C(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Sg(t,n)}let tu;const gT=()=>!tu;function Sg(t,e,n){const r=t.type;if(!t.render){if(!e&&tu&&!r.render){const s=r.template||lh(t).template;if(s){In(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Re(Re({isCustomElement:i,delimiters:a},o),c);r.render=tu(s,l),Tn(t,"compile")}}t.render=r.render||St}Ps(t),Xr(),LI(t),Zr(),Fr(),!r.render&&t.render===St&&!e&&(r.template?C('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):C("Component is missing template or render function."))}function _T(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _a(),mt(t,"get","$attrs"),e[n]},set(){return C("setupContext.attrs is readonly."),!1},deleteProperty(){return C("setupContext.attrs is readonly."),!1}}))}function yT(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return mt(t,"get","$slots"),e[n]}}))}function vT(t){return Object.freeze({get attrs(){return _T(t)},get slots(){return yT(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&C("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(H(n)?r="array":Ge(n)&&(r="ref")),r!=="object"&&C(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gm(qm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $r)return $r[n](t)},has(e,n){return n in e||n in $r}}))}const wT=/(?:^|[-_])(\w)/g,ET=t=>t.replace(wT,e=>e.toUpperCase()).replace(/[-_]/g,"");function mh(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function cc(t,e,n=!1){let r=mh(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?ET(r):n?"App":"Anonymous"}function Pg(t){return X(t)&&"__vccOpts"in t}const rt=(t,e)=>BE(t,e,xi);function kg(t,e,n){const r=arguments.length;return r===2?ye(e)&&!H(e)?Li(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),Se(t,e,n))}const IT=Symbol.for("v-scx"),TT=()=>{{const t=Yt(IT);return t||C("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function tl(t){return!!(t&&t.__v_isShallow)}function bT(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return ye(h)?h.__isVue?["div",t,"VueInstance"]:Ge(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Vr(h)?["div",{},["span",t,tl(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${cr(h)?" (readonly)":""}`]:cr(h)?["div",{},["span",t,tl(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",se(h.props))),h.setupState!==be&&d.push(o("setup",h.setupState)),h.data!==be&&d.push(o("data",se(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const y=c(h,"inject");return y&&d.push(o("injected",y)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Re({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:ye(h)?["object",{object:d?se(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(X(p))return;const y={};for(const T in h.ctx)l(p,T,d)&&(y[T]=h.ctx[T]);return y}function l(h,d,p){const y=h[p];if(H(y)&&y.includes(d)||ye(y)&&d in y||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(T=>l(T,d,p)))return!0}function u(h){return tl(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const mf="3.3.4",AT="http://www.w3.org/2000/svg",Ar=typeof document<"u"?document:null,gf=Ar&&Ar.createElement("template"),RT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ar.createElementNS(AT,t):Ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ar.createTextNode(t),createComment:t=>Ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gf.innerHTML=r?`<svg>${t}</svg>`:t;const a=gf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function CT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ST(t,e,n){const r=t.style,s=Me(n);if(n&&!s){if(e&&!Me(e))for(const i in e)n[i]==null&&nu(r,i,"");for(const i in n)nu(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const PT=/[^\\];\s*$/,_f=/\s*!important$/;function nu(t,e,n){if(H(n))n.forEach(r=>nu(t,e,r));else if(n==null&&(n=""),PT.test(n)&&C(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=kT(t,e);_f.test(n)?t.setProperty(or(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],nl={};function kT(t,e){const n=nl[e];if(n)return n;let r=gn(e);if(r!=="filter"&&r in t)return nl[e]=r;r=jr(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return nl[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function DT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=sE(e);n==null||i&&!Cm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function OT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch(l){c||C(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,l)}c&&t.removeAttribute(e)}function Rr(t,e,n,r){t.addEventListener(e,n,r)}function NT(t,e,n,r){t.removeEventListener(e,n,r)}function VT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=MT(e);if(r){const l=i[e]=$T(r,s);Rr(t,a,l,c)}else o&&(NT(t,a,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function MT(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let rl=0;const LT=Promise.resolve(),xT=()=>rl||(LT.then(()=>rl=0),rl=Date.now());function $T(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(FT(r,n.value),e,5,[r])};return n.value=t,n.attached=xT(),n}function FT(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ef=/^on[a-z]/,UT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?CT(t,r,s):e==="style"?ST(t,n,r):io(e)?ha(e)||VT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BT(t,e,r,s))?OT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),DT(t,e,r,s))};function BT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ef.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ef.test(e)&&Me(n)?!1:e in t}const jn="transition",Xs="animation",Dg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jT=Re({},wI,Dg),Ir=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},If=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function HT(t){const e={};for(const F in t)F in Dg||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=qT(s),T=y&&y[0],I=y&&y[1],{onBeforeEnter:P,onEnter:x,onEnterCancelled:O,onLeave:J,onLeaveCancelled:$,onBeforeAppear:_e=P,onAppear:Ce=x,onAppearCancelled:te=O}=e,oe=(F,Ee,At)=>{Kn(F,Ee?u:a),Kn(F,Ee?l:o),At&&At()},de=(F,Ee)=>{F._isLeaving=!1,Kn(F,h),Kn(F,p),Kn(F,d),Ee&&Ee()},xe=F=>(Ee,At)=>{const yt=F?Ce:x,Fe=()=>oe(Ee,F,At);Ir(yt,[Ee,Fe]),Tf(()=>{Kn(Ee,F?c:i),bn(Ee,F?u:a),If(yt)||bf(Ee,r,T,Fe)})};return Re(e,{onBeforeEnter(F){Ir(P,[F]),bn(F,i),bn(F,o)},onBeforeAppear(F){Ir(_e,[F]),bn(F,c),bn(F,l)},onEnter:xe(!1),onAppear:xe(!0),onLeave(F,Ee){F._isLeaving=!0;const At=()=>de(F,Ee);bn(F,h),Ng(),bn(F,d),Tf(()=>{F._isLeaving&&(Kn(F,h),bn(F,p),If(J)||bf(F,r,I,At))}),Ir(J,[F,At])},onEnterCancelled(F){oe(F,!1),Ir(O,[F])},onAppearCancelled(F){oe(F,!0),Ir(te,[F])},onLeaveCancelled(F){de(F),Ir($,[F])}})}function qT(t){if(t==null)return null;if(ye(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){const e=Gw(t);return WE(e,"<transition> explicit duration"),e}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Kn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let KT=0;function bf(t,e,n,r){const s=t._endId=++KT,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Og(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function Og(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=Af(s,i),a=r(`${Xs}Delay`),c=r(`${Xs}Duration`),l=Af(a,c);let u=null,h=0,d=0;e===jn?o>0&&(u=jn,h=o,d=i.length):e===Xs?l>0&&(u=Xs,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?jn:Xs:null,d=u?u===jn?i.length:c.length:0);const p=u===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rf(n)+Rf(t[r])))}function Rf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ng(){return document.body.offsetHeight}const Vg=new WeakMap,Mg=new WeakMap,Lg={name:"TransitionGroup",props:Re({},jT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=fh(),r=vI();let s,i;return fg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!JT(s[0].el,n.vnode.el,o))return;s.forEach(GT),s.forEach(QT);const a=s.filter(YT);Ng(),a.forEach(c=>{const l=c.el,u=l.style;bn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Kn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=se(t),a=HT(o);let c=o.tag||qe;s=i,i=e.default?hg(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null?Kl(u,ql(u,a,r,n)):C("<TransitionGroup> children must be keyed.")}if(s)for(let l=0;l<s.length;l++){const u=s[l];Kl(u,ql(u,a,r,n)),Vg.set(u,u.el.getBoundingClientRect())}return Se(c,null,i)}}},WT=t=>delete t.mode;Lg.props;const zT=Lg;function GT(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function QT(t){Mg.set(t,t.el.getBoundingClientRect())}function YT(t){const e=Vg.get(t),n=Mg.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function JT(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Og(r);return s.removeChild(r),i}const Ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ps(e,n):e};function XT(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ea(s);const i=r||s.props&&s.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fa(a)),t._assign(a)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",XT),Rr(t,"compositionend",Cf),Rr(t,"change",Cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ea(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&fa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},xg={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=za(e);Rr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fa(Ia(o)):Ia(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ea(r)},mounted(t,{value:e}){Sf(t,e)},beforeUpdate(t,e,n){t._assign=Ea(n)},updated(t,{value:e}){Sf(t,e)}};function Sf(t,e){const n=t.multiple;if(n&&!H(e)&&!za(e)){C(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8,-1)}.`);return}for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ia(i);if(n)H(e)?i.selected=oE(e,o)>-1:i.selected=e.has(o);else if(Qa(Ia(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}function Ia(t){return"_value"in t?t._value:t.value}const ZT=["ctrl","shift","alt","meta"],eb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ZT.some(n=>t[`${n}Key`]&&!e.includes(n))},lc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=eb[e[s]];if(i&&i(n,e))return}return t(n,...r)},tb=Re({patchProp:UT},RT);let Pf;function nb(){return Pf||(Pf=tT(tb))}const rb=(...t)=>{const e=nb().createApp(...t);sb(e),ib(e);const{mount:n}=e;return e.mount=r=>{const s=ob(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sb(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>tE(e)||nE(e),writable:!1})}function ib(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){C("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return C(r),n},set(){C(r)}})}}function ob(t){if(Me(t)){const e=document.querySelector(t);return e||C(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&C('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function ab(){bT()}ab();function cb(){return $g().__VUE_DEVTOOLS_GLOBAL_HOOK__}function $g(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const lb=typeof Proxy=="function",ub="devtools-plugin:setup",hb="plugin:settings:set";let ds,ru;function db(){var t;return ds!==void 0||(typeof window<"u"&&window.performance?(ds=!0,ru=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ds=!0,ru=global.perf_hooks.performance):ds=!1),ds}function fb(){return db()?ru.now():Date.now()}class pb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return fb()}},n&&n.on(hb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function mb(t,e){const n=t,r=$g(),s=cb(),i=lb&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(ub,t,e);else{const o=i?new pb(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function gb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function il(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vt(s)?s.map(t):t(s)}return n}const wi=()=>{},Vt=Array.isArray;function ge(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const _b=/\/$/,yb=t=>t.replace(_b,"");function ol(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Eb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function vb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Df(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&lr(e.matched[r],n.matched[s])&&Fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wb(t[n],e[n]))return!1;return!0}function wb(t,e){return Vt(t)?Of(t,e):Vt(e)?Of(e,t):t===e}function Of(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Eb(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return ge(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function Ib(t){if(!t)if(An){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yb(t)}const Tb=/^[^#]+#/;function bb(t,e){return t.replace(Tb,"#")+e}function Ab(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const uc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){ge(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{ge(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){ge(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Ab(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const su=new Map;function Cb(t,e){su.set(t,e)}function Sb(t){const e=su.get(t);return su.delete(t),e}let Pb=()=>location.protocol+"//"+location.host;function Ug(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),kf(c,"")}return kf(n,t)+r+s}function kb(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Ug(t,location),y=n.value,T=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}I=T?d.position-T.position:0}else r(p);s.forEach(P=>{P(n.value,y,{delta:I,type:$i.pop,direction:I?I>0?Ei.forward:Ei.back:Ei.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:uc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?uc():null}}function Db(t){const{history:e,location:n}=window,r={value:Ug(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Pb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){ge("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,Vf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:uc()});e.state||ge(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=we({},Vf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ob(t){t=Ib(t);const e=Db(t),n=kb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:bb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Nb(t){return typeof t=="string"||t&&typeof t=="object"}function Bg(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jg=Symbol("navigation failure");var Mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mf||(Mf={}));const Vb={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${Lb(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ks(t,e){return we(new Error(Vb[t](e)),{type:t,[jg]:!0},e)}function En(t,e){return t instanceof Error&&jg in t&&(e==null||!!(t.type&e))}const Mb=["params","query","hash"];function Lb(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of Mb)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Lf="[^/]+?",xb={sensitive:!1,strict:!1,start:!0,end:!0},$b=/[.+*?^${}()[\]/\\]/g;function Fb(t,e){const n=we({},xb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace($b,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:T,optional:I,regexp:P}=d;i.push({name:y,repeatable:T,optional:I});const x=P||Lf;if(x!==Lf){p+=10;try{new RegExp(`(${x})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+J.message)}}let O=T?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(O=I&&l.length<2?`(?:/${O})`:"/"+O),I&&(O+="?"),s+=O,p+=20,I&&(p+=-8),T&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:T,optional:I}=p,P=y in l?l[y]:"";if(Vt(P)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Vt(P)?P.join("/"):P;if(!x)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ub(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Bb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ub(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jb={type:0,value:""},Hb=/[a-zA-Z0-9_]/;function qb(t){if(!t)return[[]];if(t==="/")return[[jb]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Hb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Kb(t,e,n){const r=Fb(qb(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&ge(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Wb(t,e){const n=[],r=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=zb(u);Jb(y,h),y.aliasOf=d&&d.record;const T=Uf(e,u),I=[y];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of O)I.push(we({},y,{components:d?d.record.components:y.components,path:J,aliasOf:d?d.record:y}))}let P,x;for(const O of I){const{path:J}=O;if(h&&J[0]!=="/"){const $=h.record.path,_e=$[$.length-1]==="/"?"":"/";O.path=h.record.path+(J&&_e+J)}if(O.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=Kb(O,h,T),h&&J[0]==="/"&&Xb(P,h),d?(d.alias.push(P),Yb(d,P)):(x=x||P,x!==P&&x.alias.push(P),p&&u.name&&!Ff(P)&&o(u.name)),y.children){const $=y.children;for(let _e=0;_e<$.length;_e++)i($[_e],P,d&&d.children[_e])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return x?()=>{o(x)}:wi}function o(u){if(Bg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Bb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ff(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ks(1,{location:u});{const x=Object.keys(u.params||{}).filter(O=>!d.keys.find(J=>J.name===O));x.length&&ge(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}T=d.record.name,p=we($f(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&$f(u.params,d.keys.map(x=>x.name))),y=d.stringify(p)}else if("path"in u)y=u.path,y.startsWith("/")||ge(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(x=>x.re.test(y)),d&&(p=d.parse(y),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ks(1,{location:u,currentLocation:h});T=d.record.name,p=we({},h.params,u.params),y=d.stringify(p)}const I=[];let P=d;for(;P;)I.unshift(P.record),P=P.parent;return{name:T,path:y,params:p,matched:I,meta:Qb(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function $f(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Gb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qb(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function iu(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function Yb(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(iu.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(iu.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function Jb(t,e){e&&e.record.name&&!t.name&&!t.path&&ge(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Xb(t,e){for(const n of e.keys)if(!t.keys.find(iu.bind(null,n)))return ge(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Hg(t,e){return e.children.some(n=>n===t||Hg(t,n))}const qg=/#/g,Zb=/&/g,e0=/\//g,t0=/=/g,n0=/\?/g,Kg=/\+/g,r0=/%5B/g,s0=/%5D/g,Wg=/%5E/g,i0=/%60/g,zg=/%7B/g,o0=/%7C/g,Gg=/%7D/g,a0=/%20/g;function gh(t){return encodeURI(""+t).replace(o0,"|").replace(r0,"[").replace(s0,"]")}function c0(t){return gh(t).replace(zg,"{").replace(Gg,"}").replace(Wg,"^")}function ou(t){return gh(t).replace(Kg,"%2B").replace(a0,"+").replace(qg,"%23").replace(Zb,"%26").replace(i0,"`").replace(zg,"{").replace(Gg,"}").replace(Wg,"^")}function l0(t){return ou(t).replace(t0,"%3D")}function u0(t){return gh(t).replace(qg,"%23").replace(n0,"%3F")}function h0(t){return t==null?"":u0(t).replace(e0,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{ge(`Error decoding "${t}". Using original value`)}return""+t}function d0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kg," "),o=i.indexOf("="),a=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(a in e){let l=e[a];Vt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=l0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(i=>i&&ou(i)):[r&&ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function f0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const p0=Symbol("router view location matched"),jf=Symbol("router view depth"),hc=Symbol("router"),_h=Symbol("route location"),au=Symbol("router view location");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ks(4,{from:n,to:e})):h instanceof Error?a(h):Nb(h)?a(ks(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,m0(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(ge(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){ge(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function m0(t,e,n){let r=0;return function(){r++===1&&ge(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function al(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&ge(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw ge(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){ge(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,ge(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(g0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Gn(l,n,r,i,o))}else{let c=a();"catch"in c||(ge(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=gb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,r,i,o)()}))}}}return s}function g0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hf(t){const e=Yt(hc),n=Yt(_h),r=rt(()=>e.resolve(Mr(t.to))),s=rt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(lr.bind(null,u));if(d>-1)return d;const p=qf(c[l-2]);return l>1&&qf(u)===p&&h[h.length-1].path!==p?h.findIndex(lr.bind(null,c[l-2])):d}),i=rt(()=>s.value>-1&&w0(n.params,r.value.params)),o=rt(()=>s.value>-1&&s.value===n.matched.length-1&&Fg(n.params,r.value.params));function a(c={}){return v0(c)?e[Mr(t.replace)?"replace":"push"](Mr(t.to)).catch(wi):Promise.resolve()}if(An){const c=fh();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),cg(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const _0=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hf,setup(t,{slots:e}){const n=Za(Hf(t)),{options:r}=Yt(hc),s=rt(()=>({[Kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),y0=_0;function v0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kf=(t,e,n)=>t??e??n,E0=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){I0();const r=Yt(au),s=rt(()=>t.route||r.value),i=Yt(jf,0),o=rt(()=>{let l=Mr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=rt(()=>s.value.matched[o.value]);ta(jf,rt(()=>o.value+1)),ta(p0,a),ta(au,s);const c=Ne();return _i(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!lr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Wf(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,I=kg(d,we({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(An&&I.ref){const P={depth:o.value,name:h.name,path:h.path,meta:h.meta};(Vt(I.ref)?I.ref.map(O=>O.i):[I.ref.i]).forEach(O=>{O.__vrv_devtools=P})}return Wf(n.default,{Component:I,route:l})||I}}});function Wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qg=E0;function I0(){const t=fh(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";ge(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function ei(t,e){const n=we({},t,{matched:t.matched.map(r=>D0(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Uo(t){return{_custom:{display:t}}}let T0=0;function b0(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=T0++;mb({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ei(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Yg})}Vt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=Zg,y="";d.isExactActive?(p=Xg,y="This is exactly active"):d.isActive&&(p=Jg,y="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:y,backgroundColor:p})}))}),_i(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Uo("beforeEach"),from:ei(h,"Current Location during this navigation"),to:ei(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Uo("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Uo("❌")):p.status=Uo("✅"),p.from=ei(h,"Current Location during this navigation"),p.to=ei(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(n_),u.filter&&(h=h.filter(d=>cu(d,u.filter.toLowerCase()))),h.forEach(d=>t_(d,e.currentRoute.value)),u.rootNodes=h.map(e_)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:R0(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function A0(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function R0(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${A0(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Yg=15485081,Jg=2450411,Xg=8702998,C0=2282478,Zg=16486972,S0=6710886;function e_(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:C0}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Zg}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Yg}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Xg}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Jg}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:S0});let r=n.__vd_id;return r==null&&(r=String(P0++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(e_)}}let P0=0;const k0=/^\/(.*)\/([a-z]*)$/;function t_(t,e){const n=e.matched.length&&lr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>lr(r,t.record))),t.children.forEach(r=>t_(r,e))}function n_(t){t.__vd_match=!1,t.children.forEach(n_)}function cu(t,e){const n=String(t.re).match(k0);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>cu(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Fi(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>cu(o,e))}function D0(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function O0(t){const e=Wb(t.routes,t),n=t.parseQuery||d0,r=t.stringifyQuery||Bf,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Zs(),o=Zs(),a=Zs(),c=xE(Hn);let l=Hn;An&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=il.bind(null,v=>""+v),h=il.bind(null,h0),d=il.bind(null,Fi);function p(v,M){let L,U;return Bg(v)?(L=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,L)}function y(v){const M=e.getRecordMatcher(v);M?e.removeRoute(M):ge(`Cannot remove non-existent route "${String(v)}"`)}function T(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function P(v,M){if(M=we({},M||c.value),typeof v=="string"){const m=ol(n,v,M.path),_=e.resolve({path:m.path},M),E=s.createHref(m.fullPath);return E.startsWith("//")?ge(`Location "${v}" resolved to "${E}". A resolved location cannot start with multiple slashes.`):_.matched.length||ge(`No match found for location with path "${v}"`),we(m,_,{params:d(_.params),hash:Fi(m.hash),redirectedFrom:void 0,href:E})}let L;if("path"in v)"params"in v&&!("name"in v)&&Object.keys(v.params).length&&ge(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),L=we({},v,{path:ol(n,v.path,M.path).path});else{const m=we({},v.params);for(const _ in m)m[_]==null&&delete m[_];L=we({},v,{params:h(m)}),M.params=h(M.params)}const U=e.resolve(L,M),fe=v.hash||"";fe&&!fe.startsWith("#")&&ge(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`),U.params=u(d(U.params));const De=vb(r,we({},v,{hash:c0(fe),path:U.path})),f=s.createHref(De);return f.startsWith("//")?ge(`Location "${v}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):U.matched.length||ge(`No match found for location with path "${"path"in v?v.path:v}"`),we({fullPath:De,hash:fe,query:r===Bf?f0(v.query):v.query||{}},U,{redirectedFrom:void 0,href:f})}function x(v){return typeof v=="string"?ol(n,v,c.value.path):we({},v)}function O(v,M){if(l!==v)return ks(8,{from:M,to:v})}function J(v){return Ce(v)}function $(v){return J(we(x(v),{replace:!0}))}function _e(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:L}=M;let U=typeof L=="function"?L(v):L;if(typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),!("path"in U)&&!("name"in U))throw ge(`Invalid redirect found:
${JSON.stringify(U,null,2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return we({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function Ce(v,M){const L=l=P(v),U=c.value,fe=v.state,De=v.force,f=v.replace===!0,m=_e(L);if(m)return Ce(we(x(m),{state:typeof m=="object"?we({},fe,m.state):fe,force:De,replace:f}),M||L);const _=L;_.redirectedFrom=M;let E;return!De&&Df(r,U,L)&&(E=ks(16,{to:_,from:U}),$n(U,U,!0,!1)),(E?Promise.resolve(E):de(_,U)).catch(w=>En(w)?En(w,2)?w:vr(w):ce(w,_,U)).then(w=>{if(w){if(En(w,2))return Df(r,P(w.to),_)&&M&&(M._count=M._count?M._count+1:1)>30?(ge(`Detected a possibly infinite redirection in a navigation guard when going from "${U.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Ce(we({replace:f},x(w.to),{state:typeof w.to=="object"?we({},fe,w.to.state):fe,force:De}),M||_)}else w=F(_,U,!0,f,fe);return xe(_,U,w),w})}function te(v,M){const L=O(v,M);return L?Promise.reject(L):Promise.resolve()}function oe(v){const M=Fn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function de(v,M){let L;const[U,fe,De]=N0(v,M);L=al(U.reverse(),"beforeRouteLeave",v,M);for(const m of U)m.leaveGuards.forEach(_=>{L.push(Gn(_,v,M))});const f=te.bind(null,v,M);return L.push(f),Un(L).then(()=>{L=[];for(const m of i.list())L.push(Gn(m,v,M));return L.push(f),Un(L)}).then(()=>{L=al(fe,"beforeRouteUpdate",v,M);for(const m of fe)m.updateGuards.forEach(_=>{L.push(Gn(_,v,M))});return L.push(f),Un(L)}).then(()=>{L=[];for(const m of De)if(m.beforeEnter)if(Vt(m.beforeEnter))for(const _ of m.beforeEnter)L.push(Gn(_,v,M));else L.push(Gn(m.beforeEnter,v,M));return L.push(f),Un(L)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),L=al(De,"beforeRouteEnter",v,M),L.push(f),Un(L))).then(()=>{L=[];for(const m of o.list())L.push(Gn(m,v,M));return L.push(f),Un(L)}).catch(m=>En(m,8)?m:Promise.reject(m))}function xe(v,M,L){a.list().forEach(U=>oe(()=>U(v,M,L)))}function F(v,M,L,U,fe){const De=O(v,M);if(De)return De;const f=M===Hn,m=An?history.state:{};L&&(U||f?s.replace(v.fullPath,we({scroll:f&&m&&m.scroll},fe)):s.push(v.fullPath,fe)),c.value=v,$n(v,M,L,f),vr()}let Ee;function At(){Ee||(Ee=s.listen((v,M,L)=>{if(!No.listening)return;const U=P(v),fe=_e(U);if(fe){Ce(we(fe,{replace:!0}),U).catch(wi);return}l=U;const De=c.value;An&&Cb(Nf(De.fullPath,L.delta),uc()),de(U,De).catch(f=>En(f,12)?f:En(f,2)?(Ce(f.to,U).then(m=>{En(m,20)&&!L.delta&&L.type===$i.pop&&s.go(-1,!1)}).catch(wi),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ce(f,U,De))).then(f=>{f=f||F(U,De,!1),f&&(L.delta&&!En(f,8)?s.go(-L.delta,!1):L.type===$i.pop&&En(f,20)&&s.go(-1,!1)),xe(U,De,f)}).catch(wi)}))}let yt=Zs(),Fe=Zs(),ae;function ce(v,M,L){vr(v);const U=Fe.list();return U.length?U.forEach(fe=>fe(v,M,L)):(ge("uncaught error during route navigation:"),console.error(v)),Promise.reject(v)}function xt(){return ae&&c.value!==Hn?Promise.resolve():new Promise((v,M)=>{yt.add([v,M])})}function vr(v){return ae||(ae=!v,At(),yt.list().forEach(([M,L])=>v?L(v):M()),yt.reset()),v}function $n(v,M,L,U){const{scrollBehavior:fe}=t;if(!An||!fe)return Promise.resolve();const De=!L&&Sb(Nf(v.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Jm().then(()=>fe(v,M,De)).then(f=>f&&Rb(f)).catch(f=>ce(f,v,M))}const nn=v=>s.go(v);let $t;const Fn=new Set,No={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:I,getRoutes:T,resolve:P,options:t,push:J,replace:$,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Fe.add,isReady:xt,install(v){const M=this;v.component("RouterLink",y0),v.component("RouterView",Qg),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Mr(c)}),An&&!$t&&c.value===Hn&&($t=!0,J(s.location).catch(fe=>{ge("Unexpected error when starting the router:",fe)}));const L={};for(const fe in Hn)Object.defineProperty(L,fe,{get:()=>c.value[fe],enumerable:!0});v.provide(hc,M),v.provide(_h,jm(L)),v.provide(au,c);const U=v.unmount;Fn.add(v),v.unmount=function(){Fn.delete(v),Fn.size<1&&(l=Hn,Ee&&Ee(),Ee=null,c.value=Hn,$t=!1,ae=!1),U()},An&&b0(v,M,e)}};function Un(v){return v.reduce((M,L)=>M.then(()=>oe(L)),Promise.resolve())}return No}function N0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>lr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>lr(l,c))||s.push(c))}return[n,r,s]}function ts(){return Yt(hc)}function yh(){return Yt(_h)}const V0=Ze({name:"ItemLinkComponent",props:{link:{type:String,required:!0},text:{type:String,required:!0},selected:{type:Boolean,default:!1}},emits:["item-clicked"],setup(t,{emit:e}){const n=ts();return{onClickRouteTo:()=>{e("item-clicked"),n.push(t.link)}}}});const ot=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function M0(t,e,n,r,s,i){const o=lo("router-link");return z(),Y("div",{class:ao({itemLink:!0,selected:t.selected}),onClick:e[0]||(e[0]=(...a)=>t.onClickRouteTo&&t.onClickRouteTo(...a))},[Se(o,{to:t.link},{default:rh(()=>[Ye(He(t.text),1)]),_:1},8,["to"])],2)}const L0=ot(V0,[["render",M0],["__scopeId","data-v-2bd57407"],["__file","D:/GitHub/portfolio/src/components/ItemLinkComponent.vue"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},x0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},s_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new $0;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F0=function(t){const e=r_(t);return s_.encodeByteArray(e,!0)},Ta=function(t){return F0(t).replace(/\./g,"")},i_=function(t){try{return s_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=()=>U0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&i_(t[1]);return e&&JSON.parse(e)},vh=()=>{try{return B0()||j0()||H0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},o_=t=>{var e,n;return(n=(e=vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q0=t=>{const e=o_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},a_=()=>{var t;return(t=vh())===null||t===void 0?void 0:t.config},c_=t=>{var e;return(e=vh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function l_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q0(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u_(){try{return typeof indexedDB=="object"}catch{return!1}}function h_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Y0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=J0,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?X0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tn(s,a,r)}}function X0(t,e){return t.replace(Z0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Z0=/\{\$([^}]+)}/g;function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zf(i)&&zf(o)){if(!Ui(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tA(t,e){const n=new nA(t,e);return n.subscribe.bind(n)}class nA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cl),s.error===void 0&&(s.error=cl),s.complete===void 0&&(s.complete=cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1e3,iA=2,oA=4*60*60*1e3,aA=.5;function Gf(t,e=sA,n=iA){const r=e*Math.pow(n,t),s=Math.round(aA*r*(Math.random()-.5)*2);return Math.min(oA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new K0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uA(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lA(t){return t===br?void 0:t}function uA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const dA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},fA=pe.INFO,pA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},mA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=fA,this._logHandler=mA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const gA=(t,e)=>e.some(n=>t instanceof n);let Qf,Yf;function _A(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yA(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d_=new WeakMap,lu=new WeakMap,f_=new WeakMap,ll=new WeakMap,wh=new WeakMap;function vA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d_.set(n,t)}).catch(()=>{}),wh.set(e,t),e}function wA(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EA(t){uu=t(uu)}function IA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ul(this),e,...n);return f_.set(r,e.sort?e.sort():[e]),nr(r)}:yA().includes(t)?function(...e){return t.apply(ul(this),e),nr(d_.get(this))}:function(...e){return nr(t.apply(ul(this),e))}}function TA(t){return typeof t=="function"?IA(t):(t instanceof IDBTransaction&&wA(t),gA(t,_A())?new Proxy(t,uu):t)}function nr(t){if(t instanceof IDBRequest)return vA(t);if(ll.has(t))return ll.get(t);const e=TA(t);return e!==t&&(ll.set(t,e),wh.set(e,t)),e}const ul=t=>wh.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(nr(o.result),c.oldVersion,c.newVersion,nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const AA=["get","getKey","getAll","getAllKeys","count"],RA=["put","add","delete","clear"],hl=new Map;function Jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hl.get(e))return hl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return hl.set(e,i),i}EA(t=>({...t,get:(e,n,r)=>Jf(e,n)||t.get(e,n,r),has:(e,n)=>!!Jf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",Xf="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new dc("@firebase/app"),PA="@firebase/app-compat",kA="@firebase/analytics-compat",DA="@firebase/analytics",OA="@firebase/app-check-compat",NA="@firebase/app-check",VA="@firebase/auth",MA="@firebase/auth-compat",LA="@firebase/database",xA="@firebase/database-compat",$A="@firebase/functions",FA="@firebase/functions-compat",UA="@firebase/installations",BA="@firebase/installations-compat",jA="@firebase/messaging",HA="@firebase/messaging-compat",qA="@firebase/performance",KA="@firebase/performance-compat",WA="@firebase/remote-config",zA="@firebase/remote-config-compat",GA="@firebase/storage",QA="@firebase/storage-compat",YA="@firebase/firestore",JA="@firebase/firestore-compat",XA="firebase",ZA="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="[DEFAULT]",eR={[hu]:"fire-core",[PA]:"fire-core-compat",[DA]:"fire-analytics",[kA]:"fire-analytics-compat",[NA]:"fire-app-check",[OA]:"fire-app-check-compat",[VA]:"fire-auth",[MA]:"fire-auth-compat",[LA]:"fire-rtdb",[xA]:"fire-rtdb-compat",[$A]:"fire-fn",[FA]:"fire-fn-compat",[UA]:"fire-iid",[BA]:"fire-iid-compat",[jA]:"fire-fcm",[HA]:"fire-fcm-compat",[qA]:"fire-perf",[KA]:"fire-perf-compat",[WA]:"fire-rc",[zA]:"fire-rc-compat",[GA]:"fire-gcs",[QA]:"fire-gcs-compat",[YA]:"fire-fst",[JA]:"fire-fst-compat","fire-js":"fire-js",[XA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map,fu=new Map;function tR(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(fu.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of ba.values())tR(n,t);return!0}function rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new ns("app","Firebase",nR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=ZA;function p_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=a_()),!n)throw rr.create("no-options");const i=ba.get(s);if(i){if(Ui(n,i.options)&&Ui(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new hA(s);for(const c of fu.values())o.addComponent(c);const a=new rR(n,r,o);return ba.set(s,a),a}function Eh(t=du){const e=ba.get(t);if(!e&&t===du&&a_())return p_();if(!e)throw rr.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=eR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}yn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="firebase-heartbeat-database",iR=1,Bi="firebase-heartbeat-store";let dl=null;function m_(){return dl||(dl=bA(sR,iR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bi)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),dl}async function oR(t){try{return await(await m_()).transaction(Bi).objectStore(Bi).get(g_(t))}catch(e){if(e instanceof tn)qr.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(n.message)}}}async function Zf(t,e){try{const r=(await m_()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,g_(t)),await r.done}catch(n){if(n instanceof tn)qr.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function g_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=1024,cR=30*24*60*60*1e3;class lR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ep();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=cR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ep(),{heartbeatsToSend:n,unsentEntries:r}=uR(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ep(){return new Date().toISOString().substring(0,10)}function uR(t,e=aR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u_()?h_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tp(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){yn(new Jt("platform-logger",e=>new CA(e),"PRIVATE")),yn(new Jt("heartbeat",e=>new lR(e),"PRIVATE")),jt(hu,Xf,t),jt(hu,Xf,"esm2017"),jt("fire-js","")}dR("");var fR="firebase",pR="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(fR,pR,"app");const mR=(t,e)=>e.some(n=>t instanceof n);let np,rp;function gR(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _R(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,pu=new WeakMap,y_=new WeakMap,fl=new WeakMap,Ih=new WeakMap;function yR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),Ih.set(e,t),e}function vR(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wR(t){mu=t(mu)}function ER(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pl(this),e,...n);return y_.set(r,e.sort?e.sort():[e]),sr(r)}:_R().includes(t)?function(...e){return t.apply(pl(this),e),sr(__.get(this))}:function(...e){return sr(t.apply(pl(this),e))}}function IR(t){return typeof t=="function"?ER(t):(t instanceof IDBTransaction&&vR(t),mR(t,gR())?new Proxy(t,mu):t)}function sr(t){if(t instanceof IDBRequest)return yR(t);if(fl.has(t))return fl.get(t);const e=IR(t);return e!==t&&(fl.set(t,e),Ih.set(e,t)),e}const pl=t=>Ih.get(t);function TR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const bR=["get","getKey","getAll","getAllKeys","count"],AR=["put","add","delete","clear"],ml=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ml.get(e))return ml.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ml.set(e,i),i}wR(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));const v_="@firebase/installations",Th="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1e4,E_=`w:${Th}`,I_="FIS_v2",RR="https://firebaseinstallations.googleapis.com/v1",CR=60*60*1e3,SR="installations",PR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kr=new ns(SR,PR,kR);function T_(t){return t instanceof tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_({projectId:t}){return`${RR}/projects/${t}/installations`}function A_(t){return{token:t.token,requestStatus:2,expiresIn:OR(t.expiresIn),creationTime:Date.now()}}async function R_(t,e){const r=(await e.json()).error;return Kr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function C_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DR(t,{refreshToken:e}){const n=C_(t);return n.append("Authorization",NR(e)),n}async function S_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OR(t){return Number(t.replace("s","000"))}function NR(t){return`${I_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=b_(t),s=C_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:I_,appId:t.appId,sdkVersion:E_},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await S_(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:A_(l.authToken)}}else throw await R_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=/^[cdef][\w-]{21}$/,gu="";function xR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$R(t);return LR.test(n)?n:gu}catch{return gu}}function $R(t){return MR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Map;function D_(t,e){const n=fc(t);O_(n,e),FR(n,e)}function O_(t,e){const n=k_.get(t);if(n)for(const r of n)r(e)}function FR(t,e){const n=UR();n&&n.postMessage({key:t,fid:e}),BR()}let Sr=null;function UR(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=t=>{O_(t.data.key,t.data.fid)}),Sr}function BR(){k_.size===0&&Sr&&(Sr.close(),Sr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="firebase-installations-database",HR=1,Wr="firebase-installations-store";let gl=null;function bh(){return gl||(gl=TR(jR,HR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}})),gl}async function Aa(t,e){const n=fc(t),s=(await bh()).transaction(Wr,"readwrite"),i=s.objectStore(Wr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&D_(t,e.fid),e}async function N_(t){const e=fc(t),r=(await bh()).transaction(Wr,"readwrite");await r.objectStore(Wr).delete(e),await r.done}async function pc(t,e){const n=fc(t),s=(await bh()).transaction(Wr,"readwrite"),i=s.objectStore(Wr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&D_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t){let e;const n=await pc(t.appConfig,r=>{const s=qR(r),i=KR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===gu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qR(t){const e=t||{fid:xR(),registrationStatus:0};return V_(e)}function KR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Kr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=WR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zR(t)}:{installationEntry:e}}async function WR(t,e){try{const n=await VR(t,e);return Aa(t.appConfig,n)}catch(n){throw T_(n)&&n.customData.serverCode===409?await N_(t.appConfig):await Aa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zR(t){let e=await ip(t.appConfig);for(;e.registrationStatus===1;)await P_(100),e=await ip(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ah(t);return r||n}return e}function ip(t){return pc(t,e=>{if(!e)throw Kr.create("installation-not-found");return V_(e)})}function V_(t){return GR(t)?{fid:t.fid,registrationStatus:0}:t}function GR(t){return t.registrationStatus===1&&t.registrationTime+w_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR({appConfig:t,heartbeatServiceProvider:e},n){const r=YR(t,n),s=DR(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:E_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await S_(()=>fetch(r,a));if(c.ok){const l=await c.json();return A_(l)}else throw await R_("Generate Auth Token",c)}function YR(t,{fid:e}){return`${b_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t,e=!1){let n;const r=await pc(t.appConfig,i=>{if(!M_(i))throw Kr.create("not-registered");const o=i.authToken;if(!e&&ZR(o))return i;if(o.requestStatus===1)return n=JR(t,e),i;{if(!navigator.onLine)throw Kr.create("app-offline");const a=tC(i);return n=XR(t,a),a}});return n?await n:r.authToken}async function JR(t,e){let n=await op(t.appConfig);for(;n.authToken.requestStatus===1;)await P_(100),n=await op(t.appConfig);const r=n.authToken;return r.requestStatus===0?Rh(t,e):r}function op(t){return pc(t,e=>{if(!M_(e))throw Kr.create("not-registered");const n=e.authToken;return nC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XR(t,e){try{const n=await QR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Aa(t.appConfig,r),n}catch(n){if(T_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Aa(t.appConfig,r)}throw n}}function M_(t){return t!==void 0&&t.registrationStatus===2}function ZR(t){return t.requestStatus===2&&!eC(t)}function eC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CR}function tC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nC(t){return t.requestStatus===1&&t.requestTime+w_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ah(e);return r?r.catch(console.error):Rh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e=!1){const n=t;return await iC(n),(await Rh(n,e)).token}async function iC(t){const{registrationPromise:e}=await Ah(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){if(!t||!t.options)throw _l("App Configuration");if(!t.name)throw _l("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _l(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _l(t){return Kr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="installations",aC="installations-internal",cC=t=>{const e=t.getProvider("app").getImmediate(),n=oC(e),r=rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lC=t=>{const e=t.getProvider("app").getImmediate(),n=rs(e,L_).getImmediate();return{getId:()=>rC(n),getToken:s=>sC(n,s)}};function uC(){yn(new Jt(L_,cC,"PUBLIC")),yn(new Jt(aC,lC,"PRIVATE"))}uC();jt(v_,Th);jt(v_,Th,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="analytics",hC="firebase_id",dC="origin",fC=60*1e3,pC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ch="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ns("analytics","Analytics",mC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){if(!t.startsWith(Ch)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function x_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _C(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yC(t,e){const n=_C("firebase-js-sdk-policy",{createScriptURL:gC}),r=document.createElement("script"),s=`${Ch}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function vC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await x_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){kt.error(a)}t("config",s,i)}async function EC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await x_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){kt.error(i)}}function IC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await EC(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await wC(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){kt.error(a)}}return s}function TC(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=IC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function bC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ch)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=30,RC=1e3;class CC{constructor(e={},n=RC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $_=new CC;function SC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PC(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:SC(r)},i=pC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function kC(t,e=$_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Nt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new NC;return setTimeout(async()=>{a.abort()},n!==void 0?n:fC),F_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function F_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=$_){var i;const{appId:o,measurementId:a}=t;try{await DC(r,e)}catch(c){if(a)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await PC(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!OC(l)){if(s.deleteThrottleMetadata(o),a)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Gf(n,s.intervalMillis,AC):Gf(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),kt.debug(`Calling attemptFetch again in ${u} millis`),F_(t,h,r,s)}}function DC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OC(t){if(!(t instanceof tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VC(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(){if(u_())try{await h_()}catch(t){return kt.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LC(t,e,n,r,s,i,o){var a;const c=kC(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>kt.error(p)),e.push(c);const l=MC().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);bC(i)||yC(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[dC]="firebase",d.update=!0,h!=null&&(d[hC]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.app=e}_delete(){return delete Ii[this.app.options.appId],Promise.resolve()}}let Ii={},ap=[];const cp={};let yl="dataLayer",$C="gtag",lp,U_,up=!1;function FC(){const t=[];if(l_()&&t.push("This is a browser extension environment."),Y0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function UC(t,e,n){FC();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Ii[r]!=null)throw Nt.create("already-exists",{id:r});if(!up){vC(yl);const{wrappedGtag:i,gtagCore:o}=TC(Ii,ap,cp,yl,$C);U_=i,lp=o,up=!0}return Ii[r]=LC(t,ap,cp,e,lp,yl,n),new xC(t)}function BC(t=Eh()){t=Je(t);const e=rs(t,Ra);return e.isInitialized()?e.getImmediate():jC(t)}function jC(t,e={}){const n=rs(t,Ra);if(n.isInitialized()){const s=n.getImmediate();if(Ui(e,n.getOptions()))return s;throw Nt.create("already-initialized")}return n.initialize({options:e})}function HC(t,e,n,r){t=Je(t),VC(U_,Ii[t.app.options.appId],e,n,r).catch(s=>kt.error(s))}const hp="@firebase/analytics",dp="0.10.0";function qC(){yn(new Jt(Ra,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return UC(r,s,n)},"PUBLIC")),yn(new Jt("analytics-internal",t,"PRIVATE")),jt(hp,dp),jt(hp,dp,"esm2017");function t(e){try{const n=e.getProvider(Ra).getImmediate();return{logEvent:(r,s,i)=>HC(n,r,s,i)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}qC();function Sh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fp(t){return t!==void 0&&t.enterprise!==void 0}class KC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WC=B_,j_=new ns("auth","Firebase",B_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new dc("@firebase/auth");function zC(t,...e){Ca.logLevel<=pe.WARN&&Ca.warn(`Auth (${Us}): ${t}`,...e)}function ra(t,...e){Ca.logLevel<=pe.ERROR&&Ca.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Ph(t,...e)}function dn(t,...e){return Ph(t,...e)}function GC(t,e,n){const r=Object.assign(Object.assign({},WC()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function Ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function Q(t,e,...n){if(!t)throw Ph(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function On(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QC(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QC()||l_()||"connection"in navigator)?navigator.onLine:!0}function JC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=z0()||G0()}get(){return YC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new po(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,s={}){return q_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=fo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),H_.fetch()(K_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function q_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XC),e);try{const s=new eS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw GC(t,u,l);Xt(t,u)}}catch(s){if(s instanceof tn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function mo(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function K_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kh(t.config,s):`${t.config.apiScheme}://${s}`}class eS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),ZC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}async function tS(t,e){return mr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function rS(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Dh(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ti(vl(s.auth_time)),issuedAtTime:Ti(vl(s.iat)),expirationTime:Ti(vl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vl(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=i_(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iS(t){const e=Dh(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&oS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ji(t,rS(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uS(i.providerUserInfo):[],a=lS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new W_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cS(t){const e=Je(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uS(t){return t.map(e=>{var{providerId:n}=e,r=Sh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){const n=await q_(t,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=K_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",H_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return cS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ji(this,nS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:J,isAnonymous:$,providerData:_e,stsTokenManager:Ce}=n;Q(O&&Ce,e,"internal-error");const te=Hi.fromJSON(this.name,Ce);Q(typeof O=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),Q(typeof J=="boolean",e,"internal-error"),Q(typeof $=="boolean",e,"internal-error"),qn(p,e.name),qn(y,e.name),qn(T,e.name),qn(I,e.name),qn(P,e.name),qn(x,e.name);const oe=new Ur({uid:O,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:$,photoURL:y,phoneNumber:p,tenantId:T,stsTokenManager:te,createdAt:P,lastLoginAt:x});return _e&&Array.isArray(_e)&&(oe.providerData=_e.map(de=>Object.assign({},de))),I&&(oe._redirectEventId=I),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hi;s.updateFromServerResponse(n);const i=new Ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Map;function Cn(t){On(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const gp=z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Cn(gp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Cn(gp);const o=sa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(Z_(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||Q_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=gt()){return/firefox\//i.test(t)}function Oh(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q_(t=gt()){return/crios\//i.test(t)}function Y_(t=gt()){return/iemobile/i.test(t)}function J_(t=gt()){return/android/i.test(t)}function X_(t=gt()){return/blackberry/i.test(t)}function Z_(t=gt()){return/webos/i.test(t)}function mc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dS(t=gt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return Q0()&&document.documentMode===10}function ey(t=gt()){return mc(t)||J_(t)||Z_(t)||X_(t)||/windows phone/i.test(t)||Y_(t)}function pS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e=[]){let n;switch(t){case"Browser":n=_p(gt());break;case"Worker":n=`${_p(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e={}){return mr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=6;class yS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_S,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gS(this),n=new yS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ss(t){return Je(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=tA(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ny(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wS().appendChild(r)})}function ES(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const IS="https://www.google.com/recaptcha/enterprise.js?render=",TS="recaptcha-enterprise",bS="NO_RECAPTCHA";class AS{constructor(e){this.type=TS,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{tS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new KC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;fp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(bS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&fp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ny(IS+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Pa(t,e,n,r=!1){const s=new AS(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){const n=rs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ui(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function CS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SS(t,e,n){const r=ss(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ry(e),{host:o,port:a}=PS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||kS()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PS(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function DS(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t,e){return mo(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function OS(t,e){return mr(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function NS(t,e){return OS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function MS(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Nh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Pa(e,r,"signInWithPassword");return wl(e,s)}else return wl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Pa(e,r,"signInWithPassword");return wl(e,i)}else return Promise.reject(s)});case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return DS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MS(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return mo(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="http://localhost";class zr extends Nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Sh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:LS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $S(t){const e=ci(li(t)).link,n=e?ci(li(e)).deep_link_id:null,r=ci(li(t)).deep_link_id;return(r?ci(li(r)).link:null)||r||n||e||t}class Vh{constructor(e){var n,r,s,i,o,a;const c=ci(li(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=xS((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$S(e);try{return new Vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vh.parseLink(n);return Q(r,"argument-error"),qi._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends go{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends go{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends go{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e){return mo(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ur._fromIdTokenResponse(e,r,s),o=wp(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wp(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ka(e,n,r,s)}}function iy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,i,e,r):i})}async function FS(t,e,n=!1){const r=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ji(t,iy(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Dh(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(t,e,n=!1){const r="signIn",s=await iy(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function BS(t,e){return oy(ss(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e,n){var r;Q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HS(t,e,n){var r;const s=ss(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Pa(s,i,"signUpPassword");o=El(s,l)}else o=El(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Pa(s,i,"signUpPassword");return El(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ay(t),l}),c=await Gr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function qS(t,e,n){return BS(Je(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ay(t),r})}async function KS(t,e){const n=Je(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&jS(n.auth,s,e);const{email:i}=await NS(n.auth,s);i!==t.email&&await t.reload()}function WS(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function zS(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}const Da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){const t=gt();return Oh(t)||mc(t)}const QS=1e3,YS=10;class ly extends cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GS()&&pS(),this.fallbackToPolling=ey(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ly.type="LOCAL";const JS=ly;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uy.type="SESSION";const hy=uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await XS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Mh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function eP(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function tP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rP(){return dy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="firebaseLocalStorageDb",sP=1,Oa="firebaseLocalStorage",py="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function iP(){const t=indexedDB.deleteDatabase(fy);return new _o(t).toPromise()}function yu(){const t=indexedDB.open(fy,sP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:py})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await iP(),e(await yu()))})})}async function Ep(t,e,n){const r=_c(t,!0).put({[py]:e,value:n});return new _o(r).toPromise()}async function oP(t,e){const n=_c(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Ip(t,e){const n=_c(t,!0).delete(e);return new _o(n).toPromise()}const aP=800,cP=3;class my{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(rP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tP(),!this.activeServiceWorker)return;this.sender=new ZS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await Ep(e,Da,"1"),await Ip(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_c(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}my.type="LOCAL";const lP=my;new po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){return e?Cn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hP(t){return oy(t.auth,new Lh(t),t.bypassAuthState)}function dP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),US(n,new Lh(t),t.bypassAuthState)}async function fP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),FS(n,new Lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hP;case"linkViaPopup":case"linkViaRedirect":return fP;case"reauthViaPopup":case"reauthViaRedirect":return dP;default:Xt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new po(2e3,1e4);class ws extends gy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pP.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="pendingRedirect",ia=new Map;class gP extends gy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await _P(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _P(t,e){const n=wP(e),r=vP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yP(t,e){ia.set(t._key(),e)}function vP(t){return Cn(t._redirectPersistence)}function wP(t){return sa(mP,t.config.apiKey,t.name)}async function EP(t,e,n=!1){const r=ss(t),s=uP(r,e),o=await new gP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=10*60*1e3;class TP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_y(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _y(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AP(t);for(const n of e)try{if(PP(n))return}catch{}Xt(t,"unauthorized-domain")}function PP(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CP.test(n))return!1;if(RP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=new po(3e4,6e4);function bp(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DP(t){return new Promise((e,n)=>{var r,s,i;function o(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(dn(t,"network-request-failed"))},timeout:kP.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=ES("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},ny(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oa=null,e})}let oa=null;function OP(t){return oa=oa||DP(t),oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new po(5e3,15e3),VP="__/auth/iframe",MP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kh(e,MP):`https://${t.config.authDomain}/${VP}`,r={apiKey:e.apiKey,appName:t.name,v:Us},s=xP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fo(r).slice(1)}`}async function FP(t){const e=await OP(t),n=fn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:$P(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},NP.get());function c(){fn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BP=500,jP=600,HP="_blank",qP="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KP(t,e,n,r=BP,s=jP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=gt().toLowerCase();n&&(a=Q_(l)?HP:n),G_(l)&&(e=e||qP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(dS(l)&&a!=="_self")return WP(e||"",a),new Ap(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Ap(h)}function WP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="__/auth/handler",GP="emulator/auth/handler",QP=encodeURIComponent("fac");async function Rp(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:s};if(e instanceof sy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof go){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${QP}=${encodeURIComponent(c)}`:"";return`${YP(t)}?${fo(a).slice(1)}${l}`}function YP({config:t}){return t.emulator?kh(t,GP):`https://${t.authDomain}/${zP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class JP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hy,this._completeRedirectFn=EP,this._overrideRedirectResult=yP}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,r,_u(),s);return KP(e,o,Mh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rp(e,n,r,_u(),s);return eP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FP(e),r=new TP(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Il];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ey()||Oh()||mc()}}const XP=JP;var Cp="@firebase/auth",Sp="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tk(t){yn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ty(t)},l=new vS(r,s,i,c);return CS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new Jt("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new ZP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Cp,Sp,ek(t)),jt(Cp,Sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=5*60,rk=c_("authIdTokenMaxAge")||nk;let Pp=null;const sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rk)return;const s=n==null?void 0:n.token;Pp!==s&&(Pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ik(t=Eh()){const e=rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RS(t,{popupRedirectResolver:XP,persistence:[lP,JS,hy]}),r=c_("authTokenSyncURL");if(r){const i=sk(r);zS(n,i,()=>i(n.currentUser)),WS(n,o=>i(o))}const s=o_("auth");return s&&SS(n,`http://${s}`),n}tk("Browser");var ok=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,xh=xh||{},ee=ok||self;function yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ak(t){return Object.prototype.hasOwnProperty.call(t,Tl)&&t[Tl]||(t[Tl]=++ck)}var Tl="closure_uid_"+(1e9*Math.random()>>>0),ck=0;function lk(t,e,n){return t.call.apply(t.bind,arguments)}function uk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=lk:dt=uk,dt.apply(null,arguments)}function jo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function gr(){this.s=this.s,this.o=this.o}var hk=0;gr.prototype.s=!1;gr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hk!=0)&&ak(this)};gr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $h(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var dk=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function Ki(t){return/^[\s\xa0]*$/.test(t)}function vc(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function ln(t){return vc().indexOf(t)!=-1}function Fh(t){return Fh[" "](t),t}Fh[" "]=function(){};function fk(t,e){var n=i1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pk=ln("Opera"),Ds=ln("Trident")||ln("MSIE"),vy=ln("Edge"),vu=vy||Ds,wy=ln("Gecko")&&!(vc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge"))&&!(ln("Trident")||ln("MSIE"))&&!ln("Edge"),mk=vc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge");function Ey(){var t=ee.document;return t?t.documentMode:void 0}var wu;e:{var bl="",Al=function(){var t=vc();if(wy)return/rv:([^\);]+)(\)|;)/.exec(t);if(vy)return/Edge\/([\d\.]+)/.exec(t);if(Ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mk)return/WebKit\/(\S+)/.exec(t);if(pk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Al&&(bl=Al?Al[1]:""),Ds){var Rl=Ey();if(Rl!=null&&Rl>parseFloat(bl)){wu=String(Rl);break e}}wu=bl}var Eu;if(ee.document&&Ds){var Dp=Ey();Eu=Dp||parseInt(wu,10)||void 0}else Eu=void 0;var gk=Eu;function Wi(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wy){e:{try{Fh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_k[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.$.h.call(this)}}et(Wi,ft);var _k={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),yk=0;function vk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++yk,this.fa=this.ia=!1}function wc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Uh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Iy(t){const e={};for(const n in t)e[n]=t[n];return e}const Op="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ty(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Op.length;i++)n=Op[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Tu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Iu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=yy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(wc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Bh="closure_lm_"+(1e6*Math.random()|0),Cl={};function by(t,e,n,r,s){if(r&&r.once)return Ry(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)by(t,e[i],n,r,s);return null}return n=qh(n),t&&t[vo]?t.O(e,n,yo(r)?!!r.capture:!!r,s):Ay(t,e,n,!1,r,s)}function Ay(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=yo(s)?!!s.capture:!!s,a=Hh(t);if(a||(t[Bh]=a=new Ec(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Ek(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Sy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ek(){function t(n){return e.call(t.src,t.listener,n)}const e=Ik;return t}function Ry(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ry(t,e[i],n,r,s);return null}return n=qh(n),t&&t[vo]?t.P(e,n,yo(r)?!!r.capture:!!r,s):Ay(t,e,n,!0,r,s)}function Cy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Cy(t,e[i],n,r,s);else r=yo(r)?!!r.capture:!!r,n=qh(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Tu(i,n,r,s),-1<n&&(wc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tu(e,n,r,s)),(n=-1<t?e[t]:null)&&jh(n))}function jh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vo])Iu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Sy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hh(e))?(Iu(n,t),n.h==0&&(n.src=null,e[Bh]=null)):wc(t)}}}function Sy(t){return t in Cl?Cl[t]:Cl[t]="on"+t}function Ik(t,e){if(t.fa)t=!0;else{e=new Wi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&jh(t),t=n.call(r,e)}return t}function Hh(t){return t=t[Bh],t instanceof Ec?t:null}var Sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function qh(t){return typeof t=="function"?t:(t[Sl]||(t[Sl]=function(e){return t.handleEvent(e)}),t[Sl])}function Xe(){gr.call(this),this.i=new Ec(this),this.S=this,this.J=null}et(Xe,gr);Xe.prototype[vo]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){Cy(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(r,t),Ty(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ho(o,r,!0,e)&&s}if(o=e.g=t,s=Ho(o,r,!0,e)&&s,s=Ho(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ho(o,r,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wc(n[r]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Iu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kh=ee.JSON.stringify;class Tk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function bk(){var t=Wh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ak{constructor(){this.h=this.g=null}add(e,n){const r=Py.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Py=new Tk(()=>new Rk,t=>t.reset());class Rk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ck(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Sk(t){ee.setTimeout(()=>{throw t},0)}let zi,Gi=!1,Wh=new Ak,ky=()=>{const t=ee.Promise.resolve(void 0);zi=()=>{t.then(Pk)}};var Pk=()=>{for(var t;t=bk();){try{t.h.call(t.g)}catch(n){Sk(n)}var e=Py;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gi=!1};function Ic(t,e){Xe.call(this),this.h=t||1,this.g=e||ee,this.j=dt(this.qb,this),this.l=Date.now()}et(Ic,Xe);V=Ic.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(zh(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ic.$.N.call(this),zh(this),delete this.g};function Gh(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function Dy(t){t.g=Gh(()=>{t.g=null,t.i&&(t.i=!1,Dy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kk extends gr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dy(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){gr.call(this),this.h=t,this.g={}}et(Qi,gr);var Np=[];function Oy(t,e,n,r){Array.isArray(n)||(n&&(Np[0]=n.toString()),n=Np);for(var s=0;s<n.length;s++){var i=by(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ny(t){Uh(t.g,function(e,n){this.g.hasOwnProperty(n)&&jh(e)},t),t.g={}}Qi.prototype.N=function(){Qi.$.N.call(this),Ny(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tc(){this.g=!0}Tc.prototype.Ea=function(){this.g=!1};function Dk(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ok(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vk(t,n)+(r?" "+r:"")})}function Nk(t,e){t.info(function(){return"TIMEOUT: "+e})}Tc.prototype.info=function(){};function Vk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kh(n)}catch{return e}}var is={},Vp=null;function bc(){return Vp=Vp||new Xe}is.Ta="serverreachability";function Vy(t){ft.call(this,is.Ta,t)}et(Vy,ft);function Yi(t){const e=bc();it(e,new Vy(e))}is.STAT_EVENT="statevent";function My(t,e){ft.call(this,is.STAT_EVENT,t),this.stat=e}et(My,ft);function bt(t){const e=bc();it(e,new My(e,t))}is.Ua="timingevent";function Ly(t,e){ft.call(this,is.Ua,t),this.size=e}et(Ly,ft);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qh(){}Qh.prototype.h=null;function Mp(t){return t.h||(t.h=t.i())}function $y(){}var Eo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yh(){ft.call(this,"d")}et(Yh,ft);function Jh(){ft.call(this,"c")}et(Jh,ft);var bu;function Rc(){}et(Rc,Qh);Rc.prototype.g=function(){return new XMLHttpRequest};Rc.prototype.i=function(){return{}};bu=new Rc;function Io(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qi(this),this.P=Mk,t=vu?125:void 0,this.V=new Ic(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Fy}function Fy(){this.i=null,this.g="",this.h=!1}var Mk=45e3,Au={},Na={};V=Io.prototype;V.setTimeout=function(t){this.P=t};function Ru(t,e,n){t.L=1,t.v=Sc(Nn(e)),t.s=n,t.S=!0,Uy(t,null)}function Uy(t,e){t.G=Date.now(),To(t),t.A=Nn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Gy(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Fy,t.g=mv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new kk(dt(t.Pa,t,t.g),t.O)),Oy(t.U,t.g,"readystatechange",t.nb),e=t.I?Iy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yi(),Dk(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||vu||this.g&&(this.h.h||this.g.ja()||Fp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),Cc(this);var n=this.g.da();this.ca=n;t:if(By(this)){var r=Fp(this.g);t="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),bi(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ok(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ki(a)){var l=a;break t}}l=null}if(n=l)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cu(this,n);else{this.i=!1,this.o=3,bt(12),Pr(this),bi(this);break e}}this.S?(jy(this,u,o),vu&&this.i&&u==3&&(Oy(this.U,this.V,"tick",this.mb),this.V.start())):(Es(this.j,this.m,o,null),Cu(this,o)),u==4&&Pr(this),this.i&&!this.J&&(u==4?hv(this.l,this):(this.i=!1,To(this)))}else n1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Pr(this),bi(this)}}}catch{}finally{}};function By(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function jy(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Lk(t,n),s==Na){e==4&&(t.o=4,bt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Au){t.o=4,bt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,s,null),Cu(t,s);By(t)&&s!=Na&&s!=Au&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rd(e),e.M=!0,bt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Pr(t),bi(t))}V.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.C<e.length&&(Cc(this),jy(this,t,e),this.i&&t!=4&&To(this))}};function Lk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Na:(n=Number(e.substring(n,r)),isNaN(n)?Au:(r+=1,r+n>e.length?Na:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,Pr(this)};function To(t){t.Y=Date.now()+t.P,Hy(t,t.P)}function Hy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(dt(t.lb,t),e)}function Cc(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Nk(this.j,this.A),this.L!=2&&(Yi(),bt(17)),Pr(this),this.o=2,bi(this)):Hy(this,this.Y-t)};function bi(t){t.l.H==0||t.J||hv(t.l,t)}function Pr(t){Cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,zh(t.V),Ny(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Su(n.i,t))){if(!t.K&&Su(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)La(n),Oc(n);else break e;nd(n),bt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=wo(dt(n.ib,n),6e3));if(1>=Jy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else kr(n,11)}else if((t.K||n.g==t)&&La(n),!Ki(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xh(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Pe(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pv(r,r.J?r.pa:null,r.Y),o.K){Xy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Cc(a),To(a)),r.g=o}else lv(r);0<n.j.length&&Nc(n)}else l[0]!="stop"&&l[0]!="close"||kr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?kr(n,7):td(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Yi(4)}catch{}}function xk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $k(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$k(t),r=xk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ky=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Br(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Br){this.h=t.h,Va(this,t.j),this.s=t.s,this.g=t.g,Ma(this,t.m),this.l=t.l;var e=t.i,n=new Ji;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lp(this,n),this.o=t.o}else t&&(e=String(t).match(Ky))?(this.h=!1,Va(this,e[1]||"",!0),this.s=ui(e[2]||""),this.g=ui(e[3]||"",!0),Ma(this,e[4]),this.l=ui(e[5]||"",!0),Lp(this,e[6]||"",!0),this.o=ui(e[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}Br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hi(e,xp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hi(e,xp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hi(n,n.charAt(0)=="/"?jk:Bk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hi(n,qk)),t.join("")};function Nn(t){return new Br(t)}function Va(t,e,n){t.j=n?ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ma(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lp(t,e,n){e instanceof Ji?(t.i=e,Kk(t.i,t.h)):(n||(e=hi(e,Hk)),t.i=new Ji(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Sc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Uk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xp=/[#\/\?@]/g,Bk=/[#\?:]/g,jk=/[#\?]/g,Hk=/[#\?@]/g,qk=/#/g;function Ji(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _r(t){t.g||(t.g=new Map,t.h=0,t.i&&Fk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ji.prototype;V.add=function(t,e){_r(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wy(t,e){_r(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zy(t,e){return _r(t),e=js(t,e),t.g.has(e)}V.forEach=function(t,e){_r(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){_r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){_r(this);let e=[];if(typeof t=="string")zy(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return _r(this),this.i=null,t=js(this,t),zy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gy(t,e,n){Wy(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),$h(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Kk(t,e){e&&!t.j&&(_r(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Wy(this,r),Gy(this,s,n))},t)),t.j=e}var Wk=class{constructor(t,e){this.g=t,this.map=e}};function Qy(t){this.l=t||zk,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zk=10;function Yy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jy(t){return t.h?1:t.g?t.g.size:0}function Su(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xh(t,e){t.g?t.g.add(e):t.h=e}function Xy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qy.prototype.cancel=function(){if(this.i=Zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $h(t.i)}var Gk=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function Qk(){this.g=new Gk}function Yk(t,e,n){const r=n||"";try{qy(t,function(s,i){let o=s;yo(s)&&(o=Kh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Jk(t,e){const n=new Tc;if(ee.Image){const r=new Image;r.onload=jo(qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=jo(qo,n,r,"TestLoadImage: error",!1,e),r.onabort=jo(qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=jo(qo,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Pc(t){this.l=t.ec||null,this.j=t.ob||!1}et(Pc,Qh);Pc.prototype.g=function(){return new kc(this.l,this.j)};Pc.prototype.i=function(t){return function(){return t}}({});function kc(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(kc,Xe);var Zh=0;V=kc.prototype;V.open=function(t,e){if(this.readyState!=Zh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=Zh};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ev(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ev(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bo(this):Xi(this),this.readyState==3&&ev(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,bo(this))};V.Ya=function(t){this.g&&(this.response=t,bo(this))};V.ka=function(){this.g&&bo(this)};function bo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Xk=ee.JSON.parse;function $e(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tv,this.L=this.M=!1}et($e,Xe);var tv="",Zk=/^https?$/i,e1=["POST","PUT"];V=$e.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bu.g(),this.C=this.u?Mp(this.u):Mp(bu),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){$p(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=yy(e1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sv(this),0<this.B&&((this.L=t1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Gh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$p(this,i)}};function t1(t){return Ds&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof xh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function $p(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nv(t),Dc(t)}function nv(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Dc(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dc(this,!0)),$e.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?rv(this):this.kb())};V.kb=function(){rv(this)};function rv(t){if(t.h&&typeof xh<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)Gh(t.La,0,t);else if(it(t,"readystatechange"),un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Ky)[1]||null;!s&&ee.self&&ee.self.location&&(s=ee.self.location.protocol.slice(0,-1)),r=!Zk.test(s?s.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<un(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",nv(t)}}finally{Dc(t)}}}}function Dc(t,e){if(t.g){sv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function sv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function un(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Xk(e)}};function Fp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function n1(t){const e={};t=(t.g&&2<=un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ki(t[r]))continue;var n=Ck(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}wk(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iv(t){let e="";return Uh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ed(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ov(t){this.Ga=0,this.j=[],this.l=new Tc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,t),this.hb=ti("retryDelaySeedMs",1e4,t),this.eb=ti("forwardChannelMaxRetries",2,t),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Qy(t&&t.concurrentRequestLimit),this.Ja=new Qk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=ov.prototype;V.ra=8;V.H=1;function td(t){if(av(t),t.H==3){var e=t.W++,n=Nn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Ao(t,n),e=new Io(t,t.l,e),e.L=2,e.v=Sc(Nn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=mv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}fv(t)}function Oc(t){t.g&&(rd(t),t.g.cancel(),t.g=null)}function av(t){Oc(t),t.u&&(ee.clearTimeout(t.u),t.u=null),La(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Nc(t){if(!Yy(t.i)&&!t.m){t.m=!0;var e=t.Na;zi||ky(),Gi||(zi(),Gi=!0),Wh.add(e,t),t.C=0}}function r1(t,e){return Jy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wo(dt(t.Na,t,e),dv(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Io(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Iy(i),Ty(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cv(this,s,e),n=Nn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Ao(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(iv(i)))+"&"+e:this.o&&ed(n,this.o,i)),Xh(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,Ru(s,n,null)):Ru(s,n,e),this.H=2}}else this.H==3&&(t?Up(this,t):this.j.length==0||Yy(this.i)||Up(this))};function Up(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Ao(t,r),t.o&&t.s&&ed(r,t.o,t.s),n=new Io(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=cv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xh(t.i,n),Ru(n,r,e)}function Ao(t,e){t.na&&Uh(t.na,function(n,r){Pe(e,r,n)}),t.h&&qy({},function(n,r){Pe(e,r,n)})}function cv(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Yk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function lv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zi||ky(),Gi||(zi(),Gi=!0),Wh.add(e,t),t.A=0}}function nd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wo(dt(t.Ma,t),dv(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,uv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wo(dt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Oc(this),uv(this))};function rd(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function uv(t){t.g=new Io(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Ao(t,e),t.o&&t.s&&ed(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Sc(Nn(e)),n.s=null,n.S=!0,Uy(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Oc(this),nd(this),bt(19))};function La(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function hv(t,e){var n=null;if(t.g==e){La(t),rd(t),t.g=null;var r=2}else if(Su(t.i,e))n=e.F,Xy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=bc(),it(r,new Ly(r,n)),Nc(t)}else lv(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&r1(t,e)||r==2&&nd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function dv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function kr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new Br("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Va(n,"https"),Sc(n)),Jk(n.toString(),r)}else bt(2);t.H=0,t.h&&t.h.za(e),fv(t),av(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function fv(t){if(t.H=0,t.ma=[],t.h){const e=Zy(t.i);(e.length!=0||t.j.length!=0)&&(kp(t.ma,e),kp(t.ma,t.j),t.i.i.length=0,$h(t.j),t.j.length=0),t.h.ya()}}function pv(t,e,n){var r=n instanceof Br?Nn(n):new Br(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ma(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Br(null);r&&Va(i,r),e&&(i.g=e),s&&Ma(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Ao(t,r),r}function mv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new $e(new Pc({ob:!0})):new $e(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function gv(){}V=gv.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function xa(){if(Ds&&!(10<=Number(gk)))throw Error("Environmental error: no available transport.")}xa.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Xe.call(this),this.g=new ov(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ki(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ki(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}et(Mt,Xe);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pv(t,null,t.Y),Nc(t)};Mt.prototype.close=function(){td(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kh(t),t=n);e.j.push(new Wk(e.fb++,t)),e.H==3&&Nc(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,td(this.g),delete this.g,Mt.$.N.call(this)};function _v(t){Yh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(_v,Yh);function yv(){Jh.call(this),this.status=1}et(yv,Jh);function Hs(t){this.g=t}et(Hs,gv);Hs.prototype.Ba=function(){it(this.g,"a")};Hs.prototype.Aa=function(t){it(this.g,new _v(t))};Hs.prototype.za=function(t){it(this.g,new yv)};Hs.prototype.ya=function(){it(this.g,"b")};function s1(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(Zt,s1);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Pl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Pl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Pl(this,r),s=0;break}}this.h=s,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var i1={};function sd(t){return-128<=t&&128>t?fk(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function hn(t){if(isNaN(t)||!isFinite(t))return Rs;if(0>t)return nt(hn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Pu;return new Ie(e,0)}function vv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(vv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=hn(Math.pow(e,8)),r=Rs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=hn(Math.pow(e,i)),r=r.R(i).add(hn(o))):(r=r.R(n),r=r.add(hn(o)))}return r}var Pu=4294967296,Rs=sd(0),ku=sd(1),Bp=sd(16777216);V=Ie.prototype;V.ea=function(){if(Ut(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Pu+r)*e,e*=Pu}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(Ut(this))return"-"+nt(this).toString(t);for(var e=hn(Math.pow(t,6)),n=this,r="";;){var s=Fa(n,e).g;n=$a(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}V.X=function(t){return t=$a(this,t),Ut(t)?-1:Sn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(ku)}V.abs=function(){return Ut(this)?nt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function $a(t,e){return t.add(nt(e))}V.R=function(t){if(Sn(this)||Sn(t))return Rs;if(Ut(this))return Ut(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Ut(t))return nt(this.R(nt(t)));if(0>this.X(Bp)&&0>t.X(Bp))return hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ko(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ko(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ko(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ko(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function Ko(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ni(t,e){this.g=t,this.h=e}function Fa(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new ni(Rs,Rs);if(Ut(t))return e=Fa(nt(t),e),new ni(nt(e.g),nt(e.h));if(Ut(e))return e=Fa(t,nt(e)),new ni(nt(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ku,r=e;0>=r.X(t);)n=jp(n),r=jp(r);var s=fs(n,1),i=fs(r,1);for(r=fs(r,2),n=fs(n,2);!Sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=fs(r,1),n=fs(n,1)}return e=$a(t,s.R(e)),new ni(s,e)}for(s=Rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=hn(n),o=i.R(e);Ut(o)||0<o.X(t);)n-=r,i=hn(n),o=i.R(e);Sn(i)&&(i=ku),s=s.add(i),t=$a(t,o)}return new ni(s,t)}V.gb=function(t){return Fa(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function jp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function fs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}xa.prototype.createWebChannel=xa.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Ac.NO_ERROR=0;Ac.TIMEOUT=8;Ac.HTTP_ERROR=6;xy.COMPLETE="complete";$y.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=hn;Ie.fromString=vv;var o1=function(){return new xa},a1=function(){return bc()},kl=Ac,c1=xy,l1=is,Hp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wo=$y,u1=$e,h1=Zt,Cs=Ie;const qp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new dc("@firebase/firestore");function ri(){return Qr.logLevel}function j(t,...e){if(Qr.logLevel<=pe.DEBUG){const n=e.map(id);Qr.debug(`Firestore (${qs}): ${t}`,...n)}}function Vn(t,...e){if(Qr.logLevel<=pe.ERROR){const n=e.map(id);Qr.error(`Firestore (${qs}): ${t}`,...n)}}function Os(t,...e){if(Qr.logLevel<=pe.WARN){const n=e.map(id);Qr.warn(`Firestore (${qs}): ${t}`,...n)}}function id(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ke(t,e){t||Z()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class f1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class p1{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new ct(e)}}class m1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class g1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new m1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new _1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=v1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ve(0,0))}static max(){return new re(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Zi{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const w1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Zi{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return w1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Oe.fromString(e))}static fromName(e){return new G(Oe.fromString(e).popFirst(5))}static empty(){return new G(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Oe(e.slice()))}}function E1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new ur(s,G.empty(),e)}function I1(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(re.min(),G.empty(),-1)}static max(){return new ur(re.max(),G.empty(),-1)}}function T1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==b1)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}od.ae=-1;function Vc(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function R1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wp(this.data.getIterator())}getIteratorFrom(e){return new Wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new pt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tv("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const C1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=C1.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cd(t){const e=t.mapValue.fields.__previous_value__;return ad(e)?cd(e):e}function eo(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ad(t)?4:P1(t)?9007199254740991:10:Z()}function vn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),a=hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),a=je(i.doubleValue);return o===a?Ua(o)===Ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Kp(o)!==Kp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!vn(o[c],a[c])))return!1;return!0}(t,e);default:return Z()}}function no(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return zp(t.timestampValue,e.timestampValue);case 4:return zp(eo(t),eo(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Yr(i),c=Yr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ve(a[l],c[l]);if(u!==0)return u}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(je(i.latitude),je(o.latitude));return a!==0?a:ve(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Vs(a[l],c[l]);if(u)return u}return ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Go.mapValue&&o===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(o===Go.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ve(c[h],u[h]);if(d!==0)return d;const p=Vs(a[c[h]],l[u[h]]);if(p!==0)return p}return ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function zp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=hr(t),r=hr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Ms(t){return Du(t)}function Du(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Du(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Du(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function Ou(t){return!!t&&"integerValue"in t}function ld(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function Ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function P1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ai(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Ai(this.value))}}function bv(t){const e=[];return os(t.fields,(n,r)=>{const s=new ht([n]);if(aa(r)){const i=bv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,re.min(),re.min(),re.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,re.min(),re.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,re.min(),re.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function Yp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function k1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{}class ze extends Av{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O1(e,n,r):n==="array-contains"?new M1(e,r):n==="in"?new L1(e,r):n==="not-in"?new x1(e,r):n==="array-contains-any"?new $1(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new N1(e,r):new V1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends Av{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new wn(e,n)}matches(e){return Rv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rv(t){return t.op==="and"}function Cv(t){return D1(t)&&Rv(t)}function D1(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Nu(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(Cv(t))return t.filters.map(e=>Nu(e)).join(",");{const e=t.filters.map(n=>Nu(n)).join(",");return`${t.op}(${e})`}}function Sv(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Sv(o,s.filters[a]),!0):!1}(t,e):void Z()}function Pv(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pv).join(" ,")+"}"}(t):"Filter"}class O1 extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class N1 extends ze{constructor(e,n){super(e,"in",n),this.keys=kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class V1 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class M1 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ld(n)&&no(n.arrayValue,this.value)}}class L1 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class x1 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class $1 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Xp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new F1(t,e,n,r,s,i,o)}function ud(t){const e=ie(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.he=n}return e.he}function hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!k1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}function Vu(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function U1(t,e,n,r,s,i,o,a){return new Mc(t,e,n,r,s,i,o,a)}function dd(t){return new Mc(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function j1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function H1(t){return t.collectionGroup!==null}function Ci(t){const e=ie(t);if(e.Pe===null){e.Pe=[];const n=j1(e),r=B1(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ri(n)),e.Pe.push(new Ri(ht.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ri(ht.keyField(),i))}}}return e.Pe}function pn(t){const e=ie(t);return e.Ie||(e.Ie=q1(e,Ci(t))),e.Ie}function q1(t,e){if(t.limitType==="F")return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ri(s.field,i)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mu(t,e,n){return new Mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return hd(pn(t),pn(e))&&t.limitType===e.limitType}function Dv(t){return`${ud(pn(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pv(s)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Yp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,a,c){const l=Yp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ci(r),s))}(t,e)}function K1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ov(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=W1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function W1(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Vs(c,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Iv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=new Le(G.comparator);function Mn(){return z1}const Nv=new Le(G.comparator);function di(...t){let e=Nv;for(const n of t)e=e.insert(n.key,n);return e}function Vv(t){let e=Nv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Si()}function Mv(){return Si()}function Si(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const G1=new Le(G.comparator),Q1=new pt(G.comparator);function he(...t){let e=Q1;for(const n of t)e=e.add(n);return e}const Y1=new pt(ve);function J1(){return Y1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function xv(t){return{integerValue:""+t}}function X1(t,e){return R1(e)?xv(e):Lv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._=void 0}}function Z1(t,e,n){return t instanceof ja?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ad(i)&&(i=cd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ro?Fv(t,e):t instanceof so?Uv(t,e):function(s,i){const o=$v(s,i),a=em(o)+em(s.Te);return Ou(o)&&Ou(s.Te)?xv(a):Lv(s.serializer,a)}(t,e)}function eD(t,e,n){return t instanceof ro?Fv(t,e):t instanceof so?Uv(t,e):n}function $v(t,e){return t instanceof Ha?function(r){return Ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ja extends $c{}class ro extends $c{constructor(e){super(),this.elements=e}}function Fv(t,e){const n=Bv(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class so extends $c{constructor(e){super(),this.elements=e}}function Uv(t,e){let n=Bv(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Ha extends $c{constructor(e,n){super(),this.serializer=e,this.Te=n}}function em(t){return je(t.integerValue||t.doubleValue)}function Bv(t){return ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ro&&s instanceof ro||r instanceof so&&s instanceof so?Ns(r.elements,s.elements,vn):r instanceof Ha&&s instanceof Ha?vn(r.Te,s.Te):r instanceof ja&&s instanceof ja}(t.transform,e.transform)}class nD{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fd(t.key,Ht.none()):new So(t.key,t.data,Ht.none());{const n=t.data,r=Ct.empty();let s=new pt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new yr(t.key,r,new Ot(s.toArray()),Ht.none())}}function rD(t,e,n){t instanceof So?function(s,i,o){const a=s.value.clone(),c=nm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(s,i,o){if(!ca(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=nm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Hv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,r){return t instanceof So?function(i,o,a,c){if(!ca(i.precondition,o))return a;const l=i.value.clone(),u=rm(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(i,o,a,c){if(!ca(i.precondition,o))return a;const l=rm(i.fieldTransforms,c,o),u=o.data;return u.setAll(Hv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ca(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=$v(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>tD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yr extends Fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nm(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,eD(o,a,n[s]))}return r}function rm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Z1(i,o,e))}return r}class fd extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iD extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=jv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>tm(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>tm(n,r))}}class pd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return G1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,me;function lD(t){switch(t){default:return Z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function qv(t){if(t===void 0)return Vn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Be.OK:return b.OK;case Be.CANCELLED:return b.CANCELLED;case Be.UNKNOWN:return b.UNKNOWN;case Be.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Be.INTERNAL:return b.INTERNAL;case Be.UNAVAILABLE:return b.UNAVAILABLE;case Be.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Be.NOT_FOUND:return b.NOT_FOUND;case Be.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Be.ABORTED:return b.ABORTED;case Be.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Be.DATA_LOSS:return b.DATA_LOSS;default:return Z()}}(me=Be||(Be={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new Cs([4294967295,4294967295],0);function sm(t){const e=uD().encode(t),n=new h1;return n.update(e),new Uint8Array(n.digest())}function im(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([s,i],0)]}class md{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fi(`Invalid padding: ${n}`);if(r<0)throw new fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Cs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Cs.fromNumber(r)));return s.compare(hD)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new md(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(re.min(),s,new Le(ve),Mn(),he())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Kv{constructor(e,n){this.targetId=e,this.ye=n}}class Wv{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class om{constructor(){this.we=0,this.Se=cm(),this.be=_t.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=he(),n=he(),r=he();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Po(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=cm()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class dD{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Mn(),this.Ue=am(),this.We=new Le(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Vu(i))if(r===0){const o=new G(i.path);this.je(n,o,lt.newNoDocument(o,re.min()))}else ke(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Yr(r).toUint8Array()}catch(c){if(c instanceof Tv)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new md(o,s,i)}catch(c){return Os(c instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Vu(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,lt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=he();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Uc(e,n,this.We,this.$e,r);return this.$e=Mn(),this.Ue=am(),this.We=new Le(ve),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new om,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new pt(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new om),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function am(){return new Le(G.comparator)}function cm(){return new Le(G.comparator)}const fD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mD=(()=>({and:"AND",or:"OR"}))();class gD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lu(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _D(t,e){return qa(t,e.toTimestamp())}function mn(t){return ke(!!t),re.fromTimestamp(function(n){const r=hr(n);return new Ve(r.seconds,r.nanos)}(t))}function gd(t,e){return function(r){return new Oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Gv(t){const e=Oe.fromString(t);return ke(Xv(e)),e}function xu(t,e){return gd(t.databaseId,e.path)}function Dl(t,e){const n=Gv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Qv(n))}function $u(t,e){return gd(t.databaseId,e)}function yD(t){const e=Gv(t);return e.length===4?Oe.emptyPath():Qv(e)}function Fu(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qv(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lm(t,e,n){return{name:xu(t,e),fields:n.value.mapValue.fields}}function vD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ke(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:qv(l.code);return new K(u,l.message||"")}(o);n=new Wv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):re.min(),a=new Ct({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new la(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dl(t,r.document),i=r.readTime?mn(r.readTime):re.min(),o=lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new la([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dl(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cD(s,i),a=r.targetId;n=new Kv(a,o)}}return n}function wD(t,e){let n;if(e instanceof So)n={update:lm(t,e.key,e.value)};else if(e instanceof fd)n={delete:xu(t,e.key)};else if(e instanceof yr)n={update:lm(t,e.key,e.data),updateMask:PD(e.fieldMask)};else{if(!(e instanceof iD))return Z();n={verify:xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_D(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function ED(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(re.min())&&(o=mn(i)),new nD(o,s.transformResults||[])}(n,e))):[]}function ID(t,e){return{documents:[$u(t,e.path)]}}function TD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$u(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$u(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Jv(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ys(h.field),direction:RD(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Lu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function bD(t){let e=yD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Yv(h);return d instanceof wn&&Cv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Ri(vs(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Ba(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Ba(p,d)}(n.endAt)),U1(e,s,o,i,a,"F",c,l)}function AD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Yv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function RD(t){return fD[t]}function CD(t){return pD[t]}function SD(t){return mD[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return ht.fromServerFormat(t.fieldPath)}function Jv(t){return t instanceof ze?function(n){if(n.op==="=="){if(Qp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:CD(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(s=>Jv(s));return r.length===1?r[0]:{compositeFilter:{op:SD(n.op),filters:r}}}(t):Z()}function PD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,s,i=re.min(),o=re.min(),a=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.ht=e}}function DD(t){const e=bD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.an=new ND}addToCollectionParentIndex(e,n){return this.an.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ur.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class ND{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ls(0)}static Ln(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pi(r.mutation,s,Ot.empty(),Ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=di();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Mn();const o=Si(),a=function(){return Si()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof yr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Pi(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new MD(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new Le((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Mv();u.forEach(d=>{if(!i.has(d)){const p=jv(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Dr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:Vv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Mc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,lt.newInvalidDocument(u)))});let a=di();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Pi(u.mutation,l,Ot.empty(),Ve.now()),xc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return R.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:DD(s.bundledQuery),readTime:mn(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.overlays=new Le(G.comparator),this.Pr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Dr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aD(n,r));let i=this.Pr.get(n);i===void 0&&(i=he(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.Ir=new pt(Qe.dr),this.Tr=new pt(Qe.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Qe(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Oe([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new G(new Oe([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=he();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return G.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new pt(Qe.dr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(ve);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new G(i),0);let a=new pt(ve);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),R.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return R.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Sr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.Fr=e,this.docs=function(){return new Le(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||T1(I1(u),r)<=0||(s.has(u.key)||xc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Mr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BD(this)}getSize(e){return R.resolve(this.size)}}class BD extends VD{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.persistence=e,this.Or=new Ks(n=>ud(n),hd),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Nr=0,this.Br=new _d,this.targetCount=0,this.Lr=Ls.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),R.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Qn(n),R.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n){this.kr={},this.overlays={},this.qr=new od(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new jD(this),this.indexManager=new OD,this.remoteDocumentCache=function(s){return new UD(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new kD(n),this.Ur=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $D,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new FD(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new qD(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return R.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class qD extends A1{constructor(e){super(),this.currentSequenceNumber=e}}class yd{constructor(e){this.persistence=e,this.jr=new _d,this.Hr=null}static Jr(e){return new yd(e)}get Yr(){if(this.Hr)return this.Hr;throw Z()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),R.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Yr,r=>{const s=G.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return R.or([()=>R.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vd(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new KD;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(ri()<=pe.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),R.resolve()):(ri()<=pe.DEBUG&&j("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(ri()<=pe.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):R.resolve())}Hi(e,n){if(Zp(n))return R.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mu(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Mu(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Zp(n)||s.isEqual(re.min())?R.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?R.resolve(null):(ri()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.ts(e,o,n,E1(s,-1)).next(a=>a))})}Xi(e,n){let r=new pt(Ov(e));return n.forEach((s,i)=>{xc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return ri()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",_s(n)),this.ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Le(ve),this.ss=new Ks(i=>ud(i),hd),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LD(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function GD(t,e,n,r){return new zD(t,e,n,r)}async function Zv(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function QD(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=R.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(T=>{const I=l.docVersions.get(y);ke(I!==null),T.version.compareTo(I)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ew(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function YD(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(_t.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,I,P){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let c=Mn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(JD(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(re.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function JD(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function XD(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZD(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Uu(t,e,n){const r=ie(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Co(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function um(t,e,n){const r=ie(t);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ie(c),d=h.ss.get(u);return d!==void 0?R.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:he())).next(a=>(eO(r,K1(e),a),{documents:a,Ps:i})))}function eO(t,e,n){let r=t.os.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class hm{constructor(){this.activeTargetIds=J1()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tO{constructor(){this.ro=new hm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo=null;function Ol(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class iO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Ol(),c=this.Do(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Os("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=rO[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Ol();return new Promise((o,a)=>{const c=new u1;c.setWithCredentials(!0),c.listenOnce(c1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kl.NO_ERROR:const u=c.getResponseJson();j(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case kl.TIMEOUT:j(at,`RPC '${e}' ${i} timed out`),a(new K(b.DEADLINE_EXCEEDED,"Request time out"));break;case kl.HTTP_ERROR:const h=c.getStatus();if(j(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(I){const P=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(P)>=0?P:b.UNKNOWN}(p.status);a(new K(y,p.message))}else a(new K(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(b.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);j(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Ol(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=o1(),a=a1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(at,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new sO({ho:I=>{p?j(at,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(d||(j(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),j(at,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},Po:()=>h.close()}),T=(I,P,x)=>{I.listen(P,O=>{try{x(O)}catch(J){setTimeout(()=>{throw J},0)}})};return T(h,Wo.EventType.OPEN,()=>{p||j(at,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Wo.EventType.CLOSE,()=>{p||(p=!0,j(at,`RPC '${e}' stream ${s} transport closed`),y.mo())}),T(h,Wo.EventType.ERROR,I=>{p||(p=!0,Os(at,`RPC '${e}' stream ${s} transport errored:`,I),y.mo(new K(b.UNAVAILABLE,"The operation could not be completed")))}),T(h,Wo.EventType.MESSAGE,I=>{var P;if(!p){const x=I.data[0];ke(!!x);const O=x,J=O.error||((P=O[0])===null||P===void 0?void 0:P.error);if(J){j(at,`RPC '${e}' stream ${s} received error:`,J);const $=J.status;let _e=function(oe){const de=Be[oe];if(de!==void 0)return qv(de)}($),Ce=J.message;_e===void 0&&(_e=b.INTERNAL,Ce="Unknown error status: "+$+" with message "+J.message),p=!0,y.mo(new K(_e,Ce)),h.close()}else j(at,`RPC '${e}' stream ${s} received:`,x),y.fo(x)}}),T(a,l1.STAT_EVENT,I=>{I.stat===Hp.PROXY?j(at,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===Hp.NOPROXY&&j(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Nl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return new gD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new tw(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new K(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oO extends nw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=vD(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?mn(o.readTime):re.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Fu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Vu(c)?{documents:ID(i,c)}:{query:TD(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zv(i,o.resumeToken);const l=Lu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=qa(i,o.snapshotVersion.toTimestamp());const l=Lu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=AD(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Fu(this.serializer),n.removeTarget=e,this.n_(n)}}class aO extends nw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=ED(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.T_(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Fu(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wD(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(b.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(b.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class lO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Vn(n),this.p_=!1):j("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{as(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ie(c);l.F_.add(4),await ko(l),l.O_.set("Unknown"),l.F_.delete(4),await jc(l)}(this))})}),this.O_=new lO(r,s)}}async function jc(t){if(as(t))for(const e of t.M_)await e(!0)}async function ko(t){for(const e of t.M_)await e(!1)}function rw(t,e){const n=ie(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Id(n)?Ed(n):Ws(n).Yo()&&wd(n,e))}function sw(t,e){const n=ie(t),r=Ws(n);n.v_.delete(e),r.Yo()&&iw(n,e),n.v_.size===0&&(r.Yo()?r.e_():as(n)&&n.O_.set("Unknown"))}function wd(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).l_(e)}function iw(t,e){t.N_.Le(e),Ws(t).h_(e)}function Ed(t){t.N_=new dD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.O_.y_()}function Id(t){return as(t)&&!Ws(t).Jo()&&t.v_.size>0}function as(t){return ie(t).F_.size===0}function ow(t){t.N_=void 0}async function hO(t){t.v_.forEach((e,n)=>{wd(t,e)})}async function dO(t,e){ow(t),Id(t)?(t.O_.b_(e),Ed(t)):t.O_.set("Unknown")}async function fO(t,e,n){if(t.O_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof la?t.N_.Ge(e):e instanceof Kv?t.N_.Xe(e):t.N_.He(e),!n.isEqual(re.min()))try{const r=await ew(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),iw(i,c);const h=new er(u.target,c,l,u.sequenceNumber);wd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!Co(e))throw e;t.F_.add(1),await ko(t),t.O_.set("Offline"),n||(n=()=>ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await jc(t)})}function aw(t,e){return e().catch(n=>Ka(t,n,e))}async function Hc(t){const e=ie(t),n=dr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;pO(e);)try{const s=await XD(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,mO(e,s)}catch(s){await Ka(e,s)}cw(e)&&lw(e)}function pO(t){return as(t)&&t.C_.length<10}function mO(t,e){t.C_.push(e);const n=dr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function cw(t){return as(t)&&!dr(t).Jo()&&t.C_.length>0}function lw(t){dr(t).start()}async function gO(t){dr(t).A_()}async function _O(t){const e=dr(t);for(const n of t.C_)e.d_(n.mutations)}async function yO(t,e,n){const r=t.C_.shift(),s=pd.from(r,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hc(t)}async function vO(t,e){e&&dr(t).I_&&await async function(r,s){if(function(o){return lD(o)&&o!==b.ABORTED}(s.code)){const i=r.C_.shift();dr(r).Xo(),await aw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hc(r)}}(t,e),cw(t)&&lw(t)}async function fm(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=as(n);n.F_.add(3),await ko(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await jc(n)}async function wO(t,e){const n=ie(t);e?(n.F_.delete(2),await jc(n)):e||(n.F_.add(2),await ko(n),n.O_.set("Unknown"))}function Ws(t){return t.B_||(t.B_=function(n,r,s){const i=ie(n);return i.V_(),new oO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:hO.bind(null,t),Eo:dO.bind(null,t),c_:fO.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Id(t)?Ed(t):t.O_.set("Unknown")):(await t.B_.stop(),ow(t))})),t.B_}function dr(t){return t.L_||(t.L_=function(n,r,s){const i=ie(n);return i.V_(),new aO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:gO.bind(null,t),Eo:vO.bind(null,t),E_:_O.bind(null,t),T_:yO.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Hc(t)):(await t.L_.stop(),t.C_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Td(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bd(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Co(t))return new K(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.k_=new Le(G.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Z():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.Q_=void 0,this.listeners=[]}}class IO{constructor(){this.queries=new Ks(e=>Dv(e),Lc),this.onlineState="Unknown",this.K_=new Set}}async function uw(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new EO),s)try{i.Q_=await n.onListen(r)}catch(o){const a=bd(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Ad(n)}async function hw(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function TO(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Ad(n)}function bO(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ad(t){t.K_.forEach(e=>{e.next()})}class dw{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.key=e}}class pw{constructor(e){this.key=e}}class AO{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=he(),this.mutatedKeys=he(),this.ua=Ov(e),this.ca=new Ss(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new pm,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=xc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==T&&(r.track({type:3,doc:p}),I=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.ua(p,c)>0||l&&this.ua(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,p){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return y(d)-y(p)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new xs(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new pm,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=he(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new pw(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new fw(r))}),n}Ra(e){this.oa=e.Ps,this.aa=he();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return xs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class RO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CO{constructor(e){this.key=e,this.ma=!1}}class SO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ks(a=>Dv(a),Lc),this.pa=new Map,this.ya=new Set,this.wa=new Le(G.comparator),this.Sa=new Map,this.ba=new _d,this.Da={},this.Ca=new Map,this.va=Ls.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function PO(t,e){const n=FO(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await ZD(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await kO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&rw(n.remoteStore,o)}return s}async function kO(t,e,n,r,s){t.Ma=(h,d,p)=>async function(T,I,P,x){let O=I.view.ha(P);O.es&&(O=await um(T.localStore,I.query,!1).then(({documents:_e})=>I.view.ha(_e,O)));const J=x&&x.targetChanges.get(I.targetId),$=I.view.applyChanges(O,T.isPrimaryClient,J);return gm(T,I.targetId,$.Ea),$.snapshot}(t,h,d,p);const i=await um(t.localStore,e,!0),o=new AO(e,i.Ps),a=o.ha(i.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);gm(t,n,l.Ea);const u=new RO(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function DO(t,e){const n=ie(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Lc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Uu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sw(n.remoteStore,r.targetId),Bu(n,r.targetId)}).catch(Ro)):(Bu(n,r.targetId),await Uu(n.localStore,r.targetId,!0))}async function OO(t,e,n){const r=UO(t);try{const s=await function(o,a){const c=ie(o),l=Ve.now(),u=a.reduce((p,y)=>p.add(y.key),he());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Mn(),T=he();return c._s.getEntries(p,u).next(I=>{y=I,y.forEach((P,x)=>{x.isValidDocument()||(T=T.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(I=>{h=I;const P=[];for(const x of a){const O=sD(x,h.get(x.key).overlayedDocument);O!=null&&P.push(new yr(x.key,O,bv(O.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(I=>{d=I;const P=I.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,I.batchId,P)})}).then(()=>({batchId:d.batchId,changes:Vv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Le(ve)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Do(r,s.changes),await Hc(r.remoteStore)}catch(s){const i=bd(s,"Failed to persist write");n.reject(i)}}async function mw(t,e){const n=ie(t);try{const r=await YD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ke(o.ma):s.removedDocuments.size>0&&(ke(o.ma),o.ma=!1))}),await Do(n,r,e)}catch(r){await Ro(r)}}function mm(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ie(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&Ad(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NO(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Le(G.comparator);o=o.insert(i,lt.newNoDocument(i,re.min()));const a=he().add(i),c=new Uc(re.min(),new Map,new Le(ve),o,a);await mw(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Rd(r)}else await Uu(r.localStore,e,!1).then(()=>Bu(r,e,n)).catch(Ro)}async function VO(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await QD(n.localStore,e);_w(n,r,null),gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Do(n,s)}catch(s){await Ro(s)}}async function MO(t,e,n){const r=ie(t);try{const s=await function(o,a){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ke(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);_w(r,e,n),gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Do(r,s)}catch(s){await Ro(s)}}function gw(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function _w(t,e,n){const r=ie(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||yw(t,r)})}function yw(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(sw(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Rd(t))}function gm(t,e,n){for(const r of n)r instanceof fw?(t.ba.addReference(r.key,e),LO(t,r)):r instanceof pw?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||yw(t,r.key)):Z()}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ya.add(r),Rd(t))}function Rd(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new G(Oe.fromString(e)),r=t.va.next();t.Sa.set(r,new CO(n)),t.wa=t.wa.insert(n,r),rw(t.remoteStore,new er(pn(dd(n.path)),r,"TargetPurposeLimboResolution",od.ae))}}async function Do(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=vd.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=ie(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Co(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(d,T)}}}(r.localStore,i))}async function xO(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Zv(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new K(b.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Do(n,r.cs)}}function $O(t,e){const n=ie(t),r=n.Sa.get(e);if(r&&r.ma)return he().add(r.key);{let s=he();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function FO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NO.bind(null,e),e.fa.c_=TO.bind(null,e.eventManager),e.fa.xa=bO.bind(null,e.eventManager),e}function UO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}class _m{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return GD(this.persistence,new WD,e.initialUser,this.serializer)}createPersistence(e){return new HD(yd.Jr,this.serializer)}createSharedClientState(e){return new tO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xO.bind(null,this.syncEngine),await wO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IO}()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=function(i){return new iO(i)}(e.databaseInfo);return function(i,o,a,c){return new cO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new uO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mm(this.syncEngine,n,0),function(){return dm.C()?new dm:new nO}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new SO(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);j("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await ko(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Ev.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qO(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>fm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>fm(e.remoteStore,i)),t._onlineComponents=e}function HO(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function qO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HO(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await Vl(t,new _m)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Vl(t,new _m);return t._offlineComponents}async function ww(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await ym(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await ym(t,new BO))),t._onlineComponents}function KO(t){return ww(t).then(e=>e.syncEngine)}async function Ew(t){const e=await ww(t),n=e.eventManager;return n.onListen=PO.bind(null,e.syncEngine),n.onUnlisten=DO.bind(null,e.syncEngine),n}function WO(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new vw({next:d=>{o.enqueueAndForget(()=>hw(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new K(b.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new dw(dd(a.path),u,{includeMetadataChanges:!0,Z_:!0});return uw(i,h)}(await Ew(t),t.asyncQueue,e,n,r)),r.promise}function zO(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new vw({next:d=>{o.enqueueAndForget(()=>hw(i,h)),d.fromCache&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new dw(a,u,{includeMetadataChanges:!0,Z_:!0});return uw(i,h)}(await Ew(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e,n){if(!n)throw new K(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new K(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wm(t){if(!G.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Em(t){if(G.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cd(t);throw new K(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d1;switch(r.type){case"firstParty":return new g1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vm.get(n);r&&(j("ComponentProvider","Removing Datastore"),vm.delete(n),r.terminate())}(this),Promise.resolve()}}function QO(t,e,n,r={}){var s;const i=(t=en(t,qc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ct.MOCK_USER;else{a=W0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new K(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(l)}t._authCredentials=new f1(new wv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class ir extends Kc{constructor(e,n,r){super(e,n,dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new G(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Sd(t,e,...n){if(t=Je(t),Tw("collection","path",e),t instanceof qc){const r=Oe.fromString(e,...n);return Em(r),new ir(t,null,r)}{if(!(t instanceof Dt||t instanceof ir))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Em(r),new ir(t.firestore,null,r)}}function cs(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Ev.V()),Tw("doc","path",e),t instanceof qc){const r=Oe.fromString(e,...n);return wm(r),new Dt(t,null,new G(r))}{if(!(t instanceof Dt||t instanceof ir))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return wm(r),new Dt(t.firestore,t instanceof ir?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new tw(this,"async_queue_retry"),this.ou=()=>{const n=Nl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Nl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new kn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Co(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Td.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&Z()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class ls extends qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new YO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bw(this),this._firestoreClient.terminate()}}function JO(t,e){const n=typeof t=="object"?t:Eh(),r=typeof t=="string"?t:e||"(default)",s=rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=q0("firestore");i&&QO(s,...i)}return s}function Pd(t){return t._firestoreClient||bw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bw(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new S1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Iw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new jO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(_t.fromBase64String(e))}catch(n){throw new K(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class Aw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Wa(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Rw(this.Tu)&&XO.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class eN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bc(e)}wu(e,n,r,s=!1){return new Od({Tu:e,methodName:n,yu:r,path:ht.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nd(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new eN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cw(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);Vd("Data must be an object, but it was:",o,r);const a=Sw(r,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ju(e,h,n);if(!o.contains(d))throw new K(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kw(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZO(new Ct(a),c,l)}class zc extends kd{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function tN(t,e,n,r){const s=t.wu(1,e,n);Vd("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();os(r,(c,l)=>{const u=Md(e,c,n);l=Je(l);const h=s.mu(u);if(l instanceof zc)i.push(u);else{const d=Gc(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new Aw(o,a,s.fieldTransforms)}function nN(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[ju(e,r,n)],c=[s];if(i.length%2!=0)throw new K(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ju(e,i[d])),c.push(i[d+1]);const l=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!kw(l,a[d])){const p=a[d];let y=c[d];y=Je(y);const T=o.mu(p);if(y instanceof zc)l.push(p);else{const I=Gc(y,T);I!=null&&(l.push(p),u.set(p,I))}}const h=new Ot(l);return new Aw(u,h,o.fieldTransforms)}function Gc(t,e){if(Pw(t=Je(t)))return Vd("Unsupported field value:",e,t),Sw(t,e);if(t instanceof kd)return function(r,s){if(!Rw(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Gc(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return X1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof Dd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Cd(r)}`)}(t,e)}function Sw(t,e){const n={};return Iv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=Gc(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Pw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Dd||t instanceof $s||t instanceof Dt||t instanceof kd)}function Vd(t,e,n){if(!Pw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Cd(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function ju(t,e,n){if((e=Je(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return Md(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const rN=new RegExp("[~\\*/\\[\\]]");function Md(t,e,n){if(e.search(rN)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(b.INVALID_ARGUMENT,a+t+c)}function kw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ow("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sN extends Dw{data(){return super.data()}}function Ow(t,e){return typeof e=="string"?Md(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oN{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dd(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);ke(Xv(r));const s=new to(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vw extends Dw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ow("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends Vw{data(e={}){return super.data(e)}}class aN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:cN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){t=en(t,Dt);const e=en(t.firestore,ls);return WO(Pd(e),t._key).then(n=>dN(e,t,n))}class Lw extends oN{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function xw(t){t=en(t,Kc);const e=en(t.firestore,ls),n=Pd(e),r=new Lw(e);return iN(t._query),zO(n,t._query).then(s=>new aN(e,r,t,s))}function lN(t,e,n){t=en(t,Dt);const r=en(t.firestore,ls),s=Nw(t.converter,e,n);return Qc(r,[Cw(Nd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function $w(t,e,n,...r){t=en(t,Dt);const s=en(t.firestore,ls),i=Nd(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Wc?nN(i,"updateDoc",t._key,e,n,r):tN(i,"updateDoc",t._key,e),Qc(s,[o.toMutation(t._key,Ht.exists(!0))])}function uN(t){return Qc(en(t.firestore,ls),[new fd(t._key,Ht.none())])}function hN(t,e){const n=en(t.firestore,ls),r=cs(t),s=Nw(t.converter,e);return Qc(n,[Cw(Nd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Qc(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>OO(await KO(r),s,i)),i.promise}(Pd(t),e)}function dN(t,e,n){const r=n.docs.get(e._key),s=new Lw(t);return new Vw(t,s,e._key,r,new pi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){qs=s})(Us),yn(new Jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ls(new p1(r.getProvider("auth-internal")),new y1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new K(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jt(qp,"4.2.0",e),jt(qp,"4.2.0","esm2017")})();const fN={apiKey:"AIzaSyBE-rc_5WvECAAaG5QEnZtfatpztpPnjz0",authDomain:"portfolio-dbf50.firebaseapp.com",databaseURL:"https://portfolio-dbf50-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"portfolio-dbf50",storageBucket:"portfolio-dbf50.appspot.com",messagingSenderId:"173776949572",appId:"1:173776949572:web:b88c9babb223bbe2bfc711",measurementId:"G-8MVPWD2FC6"},Ld=p_(fN);BC(Ld);const Oo=ik(Ld),Ln=JO(Ld),pN=async(t,e)=>{try{e.userUid=t;const n=cs(Ln,"users",t);await lN(n,e),console.log("User created with ID: ",t)}catch(n){console.error("Error adding user: ",n)}},xd=async t=>{try{const e=cs(Ln,"users",t),n=await Mw(e);return n.exists()?n.data():(console.log("No such user!"),null)}catch(e){throw console.error("Error getting user:",e),e}},mN=async(t,e,n)=>{try{const s=(await HS(Oo,t,e)).user;return await pN(s.uid,n),await KS(s),n}catch(r){throw new Error(r.message)}},Tm=async(t,e)=>{try{const r=(await qS(Oo,t,e)).user;if(!r.emailVerified)throw await Fw(),new Error("Email not verified");const i=await xd(r.uid);return localStorage.setItem("user",JSON.stringify(i)),i}catch(n){throw new Error(n.message)}},Fw=async()=>{try{await Oo.signOut(),localStorage.removeItem("user")}catch(t){throw new Error(t.message)}},Hu=async()=>{try{const t=Oo.currentUser;if(t)return await xd(t.uid);throw new Error("No user is signed in")}catch(t){throw new Error(t.message)}},gN=Ze({name:"NavBar",components:{ItemLinkComponent:L0},setup(){const t=yh(),e=ts(),n=Ne(t.path),r=Ne(null),s=Ne(window.innerWidth<=768),i=Ne(!1);es(async()=>{r.value=await Hu(),window.addEventListener("resize",o)});const o=()=>{s.value=window.innerWidth<=768};ah(()=>{window.removeEventListener("resize",o)});const a=()=>{i.value=!i.value};cg(async()=>{n.value=t.path,r.value=await Hu()});const c={"/":"_hello","/about":"_about-me","/contact":"_contact-me","/Projects":"_projects","/resume":"_resume","/blogs":"_blogs","/auth":"_login"},l={"/":"/","/about":"/about","/contact":"/contact","/Projects":"/Projects","/resume":"/resume","/blogs":"/blogs","/auth":"/auth"},u=rt(()=>({"/":n.value==="/","/about":n.value==="/about","/contact":n.value==="/contact","/Projects":n.value==="/Projects","/resume":n.value==="/resume","/blogs":n.value==="/blogs","/auth":n.value==="/auth"}));return{routeText:c,routeLink:l,routeSelected:u,currentUser:r,logOut:async()=>{await Fw(),r.value=null,e.push("/")},isMobile:s,toggleMenu:a,showMenu:i}}});const _N=t=>(qt("data-v-c3ceb15a"),t=t(),Kt(),t),yN={class:"navbar"},vN=_N(()=>g("span",{class:"material-icons"},"menu",-1)),wN=[vN],EN={key:0};function IN(t,e,n,r,s,i){const o=lo("ItemLinkComponent");return z(),Y("div",yN,[t.isMobile?(z(),Y("div",{key:0,onClick:e[0]||(e[0]=(...a)=>t.toggleMenu&&t.toggleMenu(...a)),class:"menu-toggle"},wN)):Ke("v-if",!0),g("div",{class:ao(["wrapper",{"show-menu":t.showMenu}])},[Se(o,{link:t.routeLink["/"],text:t.routeText["/"],selected:t.routeSelected["/"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/resume"],text:t.routeText["/resume"],selected:t.routeSelected["/resume"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/Projects"],text:t.routeText["/Projects"],selected:t.routeSelected["/Projects"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/blogs"],text:t.routeText["/blogs"],selected:t.routeSelected["/blogs"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/about"],text:t.routeText["/about"],selected:t.routeSelected["/about"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/contact"],text:t.routeText["/contact"],selected:t.routeSelected["/contact"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),t.currentUser?(z(),Y("div",EN,[g("button",{onClick:e[1]||(e[1]=(...a)=>t.logOut&&t.logOut(...a))},"Logout")])):(z(),ho(o,{key:1,link:t.routeLink["/auth"],text:t.routeText["/auth"],selected:t.routeSelected["/auth"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]))],2)])}const TN=ot(gN,[["render",IN],["__scopeId","data-v-c3ceb15a"],["__file","D:/GitHub/portfolio/src/components/NavBar.vue"]]);const bN={},AN={class:"footer","aria-label":"Footer Navigation"},RN=hh('<div class="wrapper" data-v-140a6a1b><a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-v-140a6a1b><span class="material-icons" data-v-140a6a1b>facebook</span></a><a href="https://www.twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-v-140a6a1b><span class="material-icons" data-v-140a6a1b>twitter</span></a><a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-v-140a6a1b><span class="material-icons" data-v-140a6a1b>linkedin</span></a></div>',1),CN=[RN];function SN(t,e){return z(),Y("footer",AN,CN)}const PN=ot(bN,[["render",SN],["__scopeId","data-v-140a6a1b"],["__file","D:/GitHub/portfolio/src/components/FooterBar.vue"]]),kN=g("header",null,[g("div",{class:"wrapper"})],-1),DN=Ze({__name:"App",setup(t){return(e,n)=>(z(),Y(qe,null,[Se(TN),kN,Se(Mr(Qg)),Se(PN)],64))}}),ON=ot(DN,[["__file","D:/GitHub/portfolio/src/App.vue"]]),Uw=t=>(qt("data-v-b4e148ca"),t=t(),Kt(),t),NN={class:"wrapper"},VN=Uw(()=>g("div",{class:"text"},[g("p",null,"Hi all. I am"),g("h1",null,"Hassan Farhat"),g("h2",null,"> Full-stack developer"),g("p",null," I am a full-stack developer with a passion for building web applications. I have experience working with multiple technologies across various disciplines. ")],-1)),MN={class:"contentTwo"},LN={class:"overlay"},xN={class:"terminal"},$N=Uw(()=>g("div",{class:"terminal-header"},"Hassan's Terminal",-1)),FN="/bg_blurs.png",UN=Ze({__name:"HomeView",setup(t){const e=["$ npm install vue@next","$ vue create my-project","> Invoking generators...","> Installing additional dependencies...","✔ Project successfully created!"],n=Ne([]);let r=0,s=0;const i=()=>{if(r<e.length){const o=e[r];s<o.length?(n.value[r]||(n.value[r]=""),n.value[r]+=o[s],s++):(r++,s=0)}};return es(()=>{const o=setInterval(()=>{i(),r>=e.length&&clearInterval(o)},25)}),(o,a)=>(z(),Y("main",null,[g("div",NN,[VN,g("div",MN,[g("img",{src:FN,alt:"Background"}),g("div",LN,[g("div",xN,[$N,Ke(" Added this line for the terminal header "),Se(zT,{name:"typewriter",tag:"pre"},{default:rh(()=>[(z(!0),Y(qe,null,Fs(n.value,(c,l)=>(z(),Y("div",{key:l,class:"line"},He(c),1))),128))]),_:1})])])])])]))}});const BN=ot(UN,[["__scopeId","data-v-b4e148ca"],["__file","D:/GitHub/portfolio/src/views/HomeView.vue"]]),jN={class:"tech-stack-card"},HN={class:"tech-stack-name"},qN=Ze({__name:"TechStackCard",props:{stackName:String},setup(t){return(e,n)=>(z(),Y("div",jN,[g("div",HN,He(t.stackName),1)]))}});const KN=ot(qN,[["__scopeId","data-v-d652d963"],["__file","D:/GitHub/portfolio/src/components/TechStackCard.vue"]]),WN=Ze({name:"AboutView",components:{TechStackCard:KN},setup(){return{techStacks:Ne(["Unity","Unreal","Vue","React","Python","C#","C++","Java"])}}});const Yc=t=>(qt("data-v-d4948df9"),t=t(),Kt(),t),zN={class:"about-main"},GN={class:"about-wrapper"},QN=Yc(()=>g("h1",null,"About Me",-1)),YN=Yc(()=>g("p",null,[Ye("//I am Hassan Farhat, a full-stack developer with a passion "),g("br"),Ye(" //for building anything technology...")],-1)),JN={class:"tech-stack-section"},XN=Yc(()=>g("h2",null,"My Tech Stack:",-1)),ZN={class:"tech-stack-grid"},eV=Yc(()=>g("button",{class:"btn-contact"}," Contact Me ",-1));function tV(t,e,n,r,s,i){const o=lo("TechStackCard");return z(),Y("main",zN,[g("div",GN,[QN,YN,g("div",JN,[XN,g("div",ZN,[(z(!0),Y(qe,null,Fs(t.techStacks,a=>(z(),ho(o,{key:a,stackName:a},null,8,["stackName"]))),128))]),eV])])])}const nV=ot(WN,[["render",tV],["__scopeId","data-v-d4948df9"],["__file","D:/GitHub/portfolio/src/views/AboutView.vue"]]),rV=Ze({name:"ContactView",setup(){const t=Ne({name:"",email:"",message:""}),e=Ne(!1),n=Ne(""),r=rt(()=>JSON.stringify(t.value,null,2)),s=rt(()=>r.value.split(`
`));return{form:t,formattedJSONLines:s,submitForm:()=>{if(!t.value.name||!t.value.email||!t.value.message){n.value="All fields are required!";return}e.value=!0,n.value=""},submitted:e,error:n}}});const zs=t=>(qt("data-v-c05bbfbe"),t=t(),Kt(),t),sV={class:"contact-main"},iV={class:"contact-wrapper"},oV=zs(()=>g("h1",null,"Contact Me",-1)),aV={key:0,class:"contact-section"},cV={class:"left"},lV=zs(()=>g("label",{for:"name"},"Name:",-1)),uV=zs(()=>g("label",{for:"email"},"Email:",-1)),hV=zs(()=>g("label",{for:"message"},"Message:",-1)),dV={key:0},fV=zs(()=>g("button",{type:"submit"},"Send",-1)),pV={class:"right"},mV={class:"json-container"},gV={class:"line-number"},_V={key:1},yV=zs(()=>g("p",null,"Thank you for contacting me. I will get back to you soon!",-1)),vV=[yV];function wV(t,e,n,r,s,i){return z(),Y("main",sV,[g("div",iV,[oV,t.submitted?Ke("v-if",!0):(z(),Y("div",aV,[g("div",cV,[g("form",{onSubmit:e[3]||(e[3]=lc((...o)=>t.submitForm&&t.submitForm(...o),["prevent"]))},[lV,st(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.name=o),type:"text",id:"name",required:""},null,512),[[Tt,t.form.name]]),uV,st(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.email=o),type:"email",id:"email",required:""},null,512),[[Tt,t.form.email]]),hV,st(g("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.message=o),id:"message",required:""},null,512),[[Tt,t.form.message]]),t.error?(z(),Y("span",dV,He(t.error),1)):Ke("v-if",!0),Ke(" Display error message if any "),fV],32)]),g("div",pV,[g("div",mV,[(z(!0),Y(qe,null,Fs(t.formattedJSONLines,(o,a)=>(z(),Y("pre",{key:a},[Ye("              "),g("span",gV,He(a+1),1),Ye(" "+He(o)+`
            `,1)]))),128))])])])),t.submitted?(z(),Y("div",_V,vV)):Ke("v-if",!0)])])}const EV=ot(rV,[["render",wV],["__scopeId","data-v-c05bbfbe"],["__file","D:/GitHub/portfolio/src/views/ContactMe.vue"]]),IV=Ze({props:{project:{type:Object,required:!0}}});const TV={class:"project-card"},bV=["src","alt"];function AV(t,e,n,r,s,i){return z(),Y("div",TV,[g("img",{src:t.project.projectImgUrl,alt:t.project.projectTitle,class:"project-image"},null,8,bV),g("h2",null,He(t.project.projectTitle),1),g("p",null,He(t.project.projectDescription),1)])}const RV=ot(IV,[["render",AV],["__scopeId","data-v-31773649"],["__file","D:/GitHub/portfolio/src/components/ProjectCard.vue"]]),CV=async()=>{try{const t=await xw(Sd(Ln,"projects")),e=[];return t.forEach(n=>{e.push(n.data())}),e}catch(t){throw console.error("Error reading documents: ",t),t}},SV=Ze({name:"ProjectsView",components:{ProjectCard:RV},setup(){const t=Ne(),e=async()=>{t.value=await CV(),console.log(t.value)};return es(async()=>{await e()}),{projects:t}}});const PV=t=>(qt("data-v-076d98d6"),t=t(),Kt(),t),kV={class:"projects-main"},DV={class:"projects-wrapper"},OV=PV(()=>g("h1",null,"My Projects",-1)),NV={class:"projects-grid"};function VV(t,e,n,r,s,i){const o=lo("ProjectCard");return z(),Y("main",kV,[g("div",DV,[OV,g("div",NV,[(z(!0),Y(qe,null,Fs(t.projects,a=>(z(),ho(o,{key:a.projectTitle,project:a},null,8,["project"]))),128))])])])}const MV=ot(SV,[["render",VV],["__scopeId","data-v-076d98d6"],["__file","D:/GitHub/portfolio/src/views/ProjectsView.vue"]]);var mi=(t=>(t[t.admin=0]="admin",t[t.user=1]="user",t))(mi||{});const LV=Ze({name:"AuthView",setup(){const t=Ne(!0),e=Ne(),n=ts(),r=Ne({email:"",password:"",userDisplayName:"",userType:mi.user,userVerified:!1}),s=rt({get:()=>mi[r.value.userType],set:l=>{r.value.userType=mi[l]}});es(async()=>{try{const l=await Hu();e.value=l}catch(l){console.error("Error getting current user:",l)}});const i=rt(()=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(r.value.email)),o=rt(()=>i.value&&r.value.password);return{form:r,isLogin:t,submit:async()=>{if(o.value)try{if(t.value){const l=await Tm(r.value.email,r.value.password);n.push("/"),console.log("Logged in user data:",l)}else{const l={userDisplayName:r.value.userDisplayName,userEmail:r.value.email,userUid:"",userType:r.value.userType,userVerified:r.value.userVerified},u=await mN(r.value.email,r.value.password,l);console.log("Registered user data:",u),await Tm(r.value.email,r.value.password),n.push("/")}}catch(l){console.error("Auth Error",l)}},isEmailValid:i,isFormValid:o,toggleView:()=>{t.value=!t.value},userType:s,UserType:mi}}});const Bw=t=>(qt("data-v-bd851895"),t=t(),Kt(),t),xV={class:"auth-main"},$V={class:"auth-wrapper"},FV={key:0},UV={key:1},BV=Bw(()=>g("label",{for:"email"},"Email:",-1)),jV={key:0},HV=Bw(()=>g("label",{for:"password"},"Password:",-1)),qV={key:1,for:"displayName"},KV={key:3,for:"userType"},WV=["value"],zV=["value"],GV=["disabled"];function QV(t,e,n,r,s,i){return z(),Y("div",xV,[g("div",$V,[t.isLogin?(z(),Y("h1",FV,"Login")):(z(),Y("h1",UV,"Register")),g("form",{onSubmit:e[4]||(e[4]=lc((...o)=>t.submit&&t.submit(...o),["prevent"])),class:"auth-form"},[BV,st(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.email=o),type:"email",id:"email",required:""},null,512),[[Tt,t.form.email,void 0,{trim:!0}]]),t.isEmailValid?Ke("v-if",!0):(z(),Y("span",jV,"Invalid email")),HV,st(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.password=o),type:"password",id:"password",required:""},null,512),[[Tt,t.form.password]]),t.isLogin?Ke("v-if",!0):(z(),Y("label",qV,"Display Name:")),t.isLogin?Ke("v-if",!0):st((z(),Y("input",{key:2,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.userDisplayName=o),type:"text",id:"displayName",required:""},null,512)),[[Tt,t.form.userDisplayName,void 0,{trim:!0}]]),t.isLogin?Ke("v-if",!0):(z(),Y("label",KV,"User Type:")),t.isLogin?Ke("v-if",!0):st((z(),Y("select",{key:4,"onUpdate:modelValue":e[3]||(e[3]=o=>t.userType=o),id:"userType"},[g("option",{value:t.UserType.user},"User",8,WV),g("option",{value:t.UserType.admin},"Admin",8,zV)],512)),[[xg,t.userType]]),g("button",{type:"submit",disabled:!t.isFormValid},He(t.isLogin?"Login":"Register"),9,GV)],32),g("button",{onClick:e[5]||(e[5]=(...o)=>t.toggleView&&t.toggleView(...o))},"Switch to "+He(t.isLogin?"Register":"Login"),1)])])}const YV=ot(LV,[["render",QV],["__scopeId","data-v-bd851895"],["__file","D:/GitHub/portfolio/src/views/AuthView.vue"]]),JV=async t=>{try{const e=await hN(Sd(Ln,"blogs"),t),n=e.id;await $w(cs(Ln,"blogs",n),{id:n}),console.log("Blog Document written with ID: ",e.id)}catch(e){console.error("Error adding blog document: ",e)}},XV=async()=>{try{const t=await xw(Sd(Ln,"blogs")),e=[];return t.forEach(n=>{e.push(n.data())}),e}catch(t){throw console.error("Error reading blogs: ",t),t}},jw=async t=>{try{const e=cs(Ln,"blogs",t),n=await Mw(e);if(n.exists())return n.data();throw new Error(`No blog found with id: ${t}`)}catch(e){throw console.error(`Error reading blog with id ${t}: `,e),e}},ZV=async(t,e)=>{try{const n=cs(Ln,"blogs",t);await $w(n,e),console.log("Blog Document updated with ID: ",t)}catch(n){console.error("Error updating blog document: ",n)}},eM=async t=>{try{const e=cs(Ln,"blogs",t);await uN(e),console.log("Blog Document deleted with ID: ",t)}catch(e){console.error("Error deleting blog document: ",e)}},tM=Ze({name:"BlogCard",props:{blog:{type:Object,required:!0},admin:{type:Boolean,default:!1}},emits:["delete-blog"],setup(t,{emit:e}){const n=Ne(!1),r=Ne(""),s=ts();return{formatDate:h=>h.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),confirmDelete:()=>{n.value=!0},editPost:()=>{s.push(`/blogs/${t.blog.id}/edit`)},deletePost:async()=>{r.value===t.blog.title&&(console.log("Deleted"),n.value=!1,await eM(t.blog.id),e("delete-blog"))},cancelDelete:()=>{n.value=!1,r.value=""},goToBlog:()=>{s.push(`/blogs/${t.blog.id}`)},confirmation:r,showModal:n}}});const Jc=t=>(qt("data-v-3d022230"),t=t(),Kt(),t),nM={class:"blog-card"},rM={key:0,class:"control-buttons"},sM=Jc(()=>g("span",{class:"material-icons"},"delete",-1)),iM=[sM],oM=Jc(()=>g("span",{class:"material-icons"},"edit",-1)),aM=[oM],cM={key:0,class:"modal"},lM={class:"modal-content"},uM={for:"confirmation"},hM=["disabled"],dM=["src"],fM={class:"blog-title"},pM={class:"blog-subtitle"},mM={class:"blog-dates"},gM=Jc(()=>g("strong",null,"Created:",-1)),_M=Jc(()=>g("strong",null,"Modified:",-1));function yM(t,e,n,r,s,i){return z(),Y("div",nM,[t.admin?(z(),Y("div",rM,[g("button",{onClick:e[0]||(e[0]=(...o)=>t.confirmDelete&&t.confirmDelete(...o)),class:"control-button"},iM),g("button",{onClick:e[1]||(e[1]=(...o)=>t.editPost&&t.editPost(...o)),class:"control-button"},aM),t.showModal?(z(),Y("div",cM,[g("div",lM,[g("label",uM,[Ye("Enter the blog title "),g("em",null,He(t.blog.title),1),Ye(" to confirm:")]),st(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.confirmation=o),id:"confirmation",type:"text"},null,512),[[Tt,t.confirmation]]),g("button",{onClick:e[3]||(e[3]=(...o)=>t.deletePost&&t.deletePost(...o)),disabled:t.confirmation.trim()!==t.blog.title.trim(),class:"confirm-delete-button"}," Confirm Delete ",8,hM),g("button",{onClick:e[4]||(e[4]=(...o)=>t.cancelDelete&&t.cancelDelete(...o))},"Cancel")])])):Ke("v-if",!0)])):Ke("v-if",!0),g("div",{onClick:e[5]||(e[5]=(...o)=>t.goToBlog&&t.goToBlog(...o)),class:"blog-item"},[g("img",{src:t.blog.imageURL,class:"blog-image"},null,8,dM),g("h2",fM,He(t.blog.title),1),g("h3",pM,He(t.blog.subtitle),1),g("div",mM,[g("p",null,[gM,Ye(" "+He(t.formatDate(t.blog.dateCreated)),1)]),g("p",null,[_M,Ye(" "+He(t.formatDate(t.blog.dateModified)),1)])])])])}const vM=ot(tM,[["render",yM],["__scopeId","data-v-3d022230"],["__file","D:/GitHub/portfolio/src/components/BlogCard.vue"]]),wM=Ze({name:"BlogView",components:{BlogCard:vM},setup(){const t=Ne(),e=Ne(!1),n=ts(),r=async()=>{t.value=await XV(),console.log(t.value)};return es(async()=>{await r();const o=localStorage.getItem("user"),a=o?JSON.parse(o):null;a&&(e.value=a.userType=="admin")}),{blogs:t,admin:e,addPost:()=>{console.log("add post"),n.push("/blogs/create")},refreshBlogs:async()=>{await r()}}}});const EM=t=>(qt("data-v-8815f39e"),t=t(),Kt(),t),IM={class:"blogs-main"},TM={class:"blogs-wrapper"},bM=EM(()=>g("h1",null,"Posts",-1)),AM={key:0,class:"add-post"},RM={class:"blogs-grid"};function CM(t,e,n,r,s,i){const o=lo("BlogCard");return z(),Y("main",IM,[g("div",TM,[bM,t.admin?(z(),Y("div",AM,[g("button",{onClick:e[0]||(e[0]=(...a)=>t.addPost&&t.addPost(...a))},"Add Post")])):Ke("v-if",!0),g("div",RM,[(z(!0),Y(qe,null,Fs(t.blogs,a=>(z(),ho(o,{key:a.title,blog:a,admin:t.admin,onDeleteBlog:t.refreshBlogs},null,8,["blog","admin","onDeleteBlog"]))),128))])])])}const SM=ot(wM,[["render",CM],["__scopeId","data-v-8815f39e"],["__file","D:/GitHub/portfolio/src/views/BlogView.vue"]]),PM=Ze({name:"ResumeView",setup(){const t=Ne("summary"),e=Ne([{name:"summary",label:"_summary.ts"},{name:"experience",label:"_experience.ts"},{name:"skills",label:"_skills.ts"},{name:"education",label:"_education.ts"},{name:"publications",label:"_publications.ts"}]);return{activeSection:t,sections:e,toggleSection:r=>{t.value===r?t.value="":t.value=r}}}});const Lt=t=>(qt("data-v-a5cd2c92"),t=t(),Kt(),t),kM={class:"resume-view"},DM=["value","onChange"],OM={class:"sidebar"},NM={class:"main-container"},VM={class:"main-area"},MM={key:0},LM=Lt(()=>g("div",{class:"comment-heading"},"/* Summary * /",-1)),xM=Lt(()=>g("h2",null,"Hassan Farhat",-1)),$M=Lt(()=>g("p",null,"18 Geach St, Dallas",-1)),FM=Lt(()=>g("p",null,"VIC, 3047",-1)),UM=Lt(()=>g("p",null,"+61 0411 017 988",-1)),BM=Lt(()=>g("p",null,"hassanfarhatcons@gmail.com",-1)),jM=Lt(()=>g("p",null,"Innovative and driven technologist with a strong understanding of various technology stacks and specialised experience in game development, pipeline design, and AI development. Equipped with a background in psychology, adept at integrating these disciplines to create seamless tech solutions that optimise efficiency and effectiveness. Proficient in using Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, and React/Next.js. Strong passion for continuous learning and skill development.",-1)),HM=[LM,xM,$M,FM,UM,BM,jM],qM={key:1},KM=hh('<div class="comment-heading" data-v-a5cd2c92>/* Experience * /</div><h3 data-v-a5cd2c92>Showdog Studios, Franklin, TN USA — Technical Pipeline Designer</h3><p data-v-a5cd2c92>August 2022 - PRESENT</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Designed and implemented pipeline tools using Unreal, Maya, and Python scripting to support artists and animators, which significantly increased workflow speed.</li><li data-v-a5cd2c92>Developed an efficient and user-friendly website using React/Next.js, improving the studio&#39;s online presence and accessibility.</li><li data-v-a5cd2c92>Collaborated with teams across the studio to understand needs and provide appropriate technological solutions.</li><li data-v-a5cd2c92>Ensured seamless integration of new technologies into existing systems.</li><li data-v-a5cd2c92>Identified and addressed performance issues to ensure optimal functioning of the pipeline.</li></ul><h3 data-v-a5cd2c92>2x2 Studios, New York, NY USA — Co-Founder &amp; CTO</h3><p data-v-a5cd2c92>August 2022 - PRESENT</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Oversaw the design of solutions for various clients, bringing their app visions to life, including the planning and execution of a social media app.</li><li data-v-a5cd2c92>Coordinated with marketing teams, investors, UX/UI designers to align technical solutions with business objectives.</li><li data-v-a5cd2c92>Oversaw the development and implementation of company-wide IT strategies and ensured they aligned with the company&#39;s business goals.</li><li data-v-a5cd2c92>Led a team of developers, ensuring effective delegation of tasks and quality control of all technical outputs.</li></ul><h3 data-v-a5cd2c92>PlayingForward, Santa Monica, CA, USA — Data Analyst and AI Developer</h3><p data-v-a5cd2c92>February 2019 - January 2023</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Built an AI motion capture app to detect user movement for clinical and research purposes. Integrated the application in Unity and iOS, serving as a vital bridge between technology and healthcare.</li><li data-v-a5cd2c92>Conducted extensive data analysis to inform business decisions and presented insights to investors and stakeholders, enabling informed decision-making.</li><li data-v-a5cd2c92>Collaborated with healthcare professionals such as nurses, doctors, and researchers, translating their needs into technical requirements for the development team.</li><li data-v-a5cd2c92>Identified, cleaned, and integrated data to maintain its accuracy and usefulness for ongoing projects.</li></ul><h3 data-v-a5cd2c92>La Trobe University, Bundoora, VIC, AU — Research Assistant</h3><p data-v-a5cd2c92>February 2014 - January 2019</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Assisted in the design and execution of research studies within the psychology department.</li><li data-v-a5cd2c92>Developed applications for use in data collection and research studies.</li><li data-v-a5cd2c92>Analysed research data and presented findings in clear, digestible formats.</li><li data-v-a5cd2c92>Co-authored several research papers published in scientific journals.</li></ul>',13),WM=[KM],zM={key:2},GM=hh('<div class="comment-heading" data-v-a5cd2c92>/* Skills * /</div><ul data-v-a5cd2c92><li data-v-a5cd2c92>Technology Stacks: Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, React/Next.js, JS</li><li data-v-a5cd2c92>CI/CD integration</li><li data-v-a5cd2c92>Git and DevOps</li><li data-v-a5cd2c92>AI Development</li><li data-v-a5cd2c92>Pipeline Development</li><li data-v-a5cd2c92>Game Development</li><li data-v-a5cd2c92>Research Study Design</li><li data-v-a5cd2c92>Data Analysis</li><li data-v-a5cd2c92>Website Development</li><li data-v-a5cd2c92>App Development</li><li data-v-a5cd2c92>Project Management</li><li data-v-a5cd2c92>Communication and Team Coordination</li><li data-v-a5cd2c92>Integration of AI functionalities into Mobile Applications</li><li data-v-a5cd2c92>Understanding of User Behavior (AI and Psychology intersection)</li></ul>',2),QM=[GM],YM={key:3},JM=Lt(()=>g("div",{class:"comment-heading"},"/* Education * /",-1)),XM=Lt(()=>g("p",null,"La Trobe University, Bundoora, VIC, AU — Bachelor of Psychology",-1)),ZM=Lt(()=>g("p",null,"2012-2016",-1)),eL=[JM,XM,ZM],tL={key:4},nL=Lt(()=>g("div",{class:"comment-heading"},"/* Publications * /",-1)),rL=Lt(()=>g("ul",null,[g("li",null,[Ye("Hocking, D.R., Ardalan, A., Abu-Rayya, H.M. et al. Feasibility of a virtual reality-based exercise intervention and low-cost motion tracking method for estimation of motor proficiency in youth with autism spectrum disorder. J NeuroEngineering Rehabil 19, 1 (2022). "),g("a",{href:"https://doi.org/10.1186/s12984-021-00978-1",target:"_blank"},"https://doi.org/10.1186/s12984-021-00978-1")]),g("li",null,[Ye("Hocking DR, Fritsche S, Farhat H, Atkinson A, Bendak H, Menant J. Working memory is a core executive function supporting dual-task locomotor performance across childhood and adolescence. J Exp Child Psychol. 2020 Sep;197:104869. "),g("a",{href:"https://doi.org/10.1016/j.jecp.2020.104869",target:"_blank"},"doi: 10.1016/j.jecp.2020.104869"),Ye(". Epub 2020 Jun 20. PMID: 32574754.")]),g("li",null,[Ye("Hocking, Darren & Farhat, Hassan & Gavrila, Cristina. (2019). The influence of cognitive load on transfer of implicit perceptual-motor sequence learning to novel task performance. Psychological Research. "),g("a",{href:"https://doi.org/10.1007/s00426-019-01198-8",target:"_blank"},"10.1007/s00426-019-01198-8"),Ye(".")])],-1)),sL=[nL,rL],iL=Lt(()=>g("div",{class:"terminal"},[g("p",null,[g("span",{class:"greenp"},"$"),Ye(' echo "Hello, World!" '),g("span",{class:"blinking-cursor"},"_")])],-1));function oL(t,e,n,r,s,i){return z(),Y("div",kM,[st(g("select",{class:"mobile-dropdown","onUpdate:modelValue":e[0]||(e[0]=o=>t.activeSection=o)},[(z(!0),Y(qe,null,Fs(t.sections,o=>(z(),Y("option",{key:o.name,value:o.name,onChange:a=>t.toggleSection(o.name)},He(o.label),41,DM))),128))],512),[[xg,t.activeSection]]),g("div",OM,[g("div",{class:"item",onClick:e[1]||(e[1]=o=>t.activeSection="summary")},"_summary.ts"),g("div",{class:"item",onClick:e[2]||(e[2]=o=>t.activeSection="experience")},"_experience.ts"),g("div",{class:"item",onClick:e[3]||(e[3]=o=>t.activeSection="skills")},"_skills.ts"),g("div",{class:"item",onClick:e[4]||(e[4]=o=>t.activeSection="education")},"_education.ts"),g("div",{class:"item",onClick:e[5]||(e[5]=o=>t.activeSection="publications")},"_publications.ts")]),g("div",NM,[g("div",VM,[t.activeSection==="summary"?(z(),Y("div",MM,HM)):Ke("v-if",!0),t.activeSection==="experience"?(z(),Y("div",qM,WM)):Ke("v-if",!0),t.activeSection==="skills"?(z(),Y("div",zM,QM)):Ke("v-if",!0),t.activeSection==="education"?(z(),Y("div",YM,eL)):Ke("v-if",!0),t.activeSection==="publications"?(z(),Y("div",tL,sL)):Ke("v-if",!0)]),iL])])}const aL=ot(PM,[["render",oL],["__scopeId","data-v-a5cd2c92"],["__file","D:/GitHub/portfolio/src/views/ResumeView.vue"]]),cL=Ze({name:"CreateBlog",setup(){const t=Ne({title:"",subtitle:"",content:"",imageURL:"",dateCreated:Ve.now(),dateModified:Ve.now(),id:""}),e=ts();return{blog:t,handleSubmit:async()=>{await JV(t.value),e.push("/blogs")}}}});const Gs=t=>(qt("data-v-469dacab"),t=t(),Kt(),t),lL={class:"create-blog-main"},uL={class:"create-blog-wrapper"},hL=Gs(()=>g("h1",null,"Create Blog",-1)),dL={class:"create-blog-section"},fL={class:"left"},pL=Gs(()=>g("label",{for:"title"},"Title:",-1)),mL=Gs(()=>g("label",{for:"subtitle"},"Subtitle:",-1)),gL=Gs(()=>g("label",{for:"imageURL"},"Image URL:",-1)),_L=Gs(()=>g("label",{for:"content"},"Content:",-1)),yL=Gs(()=>g("button",{type:"submit"},"Create Blog",-1));function vL(t,e,n,r,s,i){return z(),Y("div",lL,[g("div",uL,[hL,g("div",dL,[g("div",fL,[g("form",{onSubmit:e[4]||(e[4]=lc((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[pL,st(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.blog.title=o),id:"title",required:""},null,512),[[Tt,t.blog.title]]),mL,st(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.blog.subtitle=o),id:"subtitle"},null,512),[[Tt,t.blog.subtitle]]),gL,st(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.blog.imageURL=o),id:"imageURL"},null,512),[[Tt,t.blog.imageURL]]),_L,st(g("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.blog.content=o),id:"content",required:""},null,512),[[Tt,t.blog.content]]),yL],32)])])])])}const wL=ot(cL,[["render",vL],["__scopeId","data-v-469dacab"],["__file","D:/GitHub/portfolio/src/views/CreateBlog.vue"]]),EL=Ze({name:"BlogEntryView",setup(){const t=yh();console.log(t.params.id);const e=Ne();oh(async()=>{e.value=await jw(t.params.id),e.value.content=n(e.value)});const n=s=>s.content.replace(/\n/g,"<br />");return{blog:e,formatDate:s=>s.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}});const $d=t=>(qt("data-v-59820ef0"),t=t(),Kt(),t),IL={key:0,class:"blog-entry"},TL=["src"],bL={class:"blog-title"},AL={class:"blog-subtitle"},RL=["innerHTML"],CL={class:"blog-dates"},SL=$d(()=>g("strong",null,"Created:",-1)),PL=$d(()=>g("strong",null,"Modified:",-1)),kL={key:1},DL=$d(()=>g("p",null,"Loading...",-1)),OL=[DL];function NL(t,e,n,r,s,i){return t.blog?(z(),Y("div",IL,[g("img",{src:t.blog.imageURL,alt:"Blog Image",class:"blog-image"},null,8,TL),g("h2",bL,He(t.blog.title),1),g("h3",AL,He(t.blog.subtitle),1),g("div",{class:"blog-content",innerHTML:t.blog.content},null,8,RL),g("div",CL,[g("p",null,[SL,Ye(" "+He(t.formatDate(t.blog.dateCreated)),1)]),g("p",null,[PL,Ye(" "+He(t.formatDate(t.blog.dateModified)),1)])])])):(z(),Y("div",kL,OL))}const VL=ot(EL,[["render",NL],["__scopeId","data-v-59820ef0"],["__file","D:/GitHub/portfolio/src/views/BlogEntryView.vue"]]),ML=Ze({name:"EditBlog",setup(){const t=yh(),e=Ne({title:"",subtitle:"",content:"",imageURL:"",dateCreated:Ve.now(),dateModified:Ve.now(),id:""});oh(async()=>{const s=t.params.id,i=await jw(s);e.value={...i,id:s}});const n=ts();return{blog:e,handleSubmit:async()=>{await ZV(e.value.id,e.value),n.push("/blogs")}}}});const Qs=t=>(qt("data-v-56f15ba2"),t=t(),Kt(),t),LL={class:"edit-blog-main"},xL={class:"edit-blog-wrapper"},$L=Qs(()=>g("h1",null,"Edit Blog",-1)),FL={class:"edit-blog-section"},UL={class:"left"},BL=Qs(()=>g("label",{for:"title"},"Title:",-1)),jL=Qs(()=>g("label",{for:"subtitle"},"Subtitle:",-1)),HL=Qs(()=>g("label",{for:"imageURL"},"Image URL:",-1)),qL=Qs(()=>g("label",{for:"content"},"Content:",-1)),KL=Qs(()=>g("button",{type:"submit"},"Update Blog",-1));function WL(t,e,n,r,s,i){return z(),Y("div",LL,[g("div",xL,[$L,g("div",FL,[g("div",UL,[g("form",{onSubmit:e[4]||(e[4]=lc((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[BL,st(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.blog.title=o),id:"title",required:""},null,512),[[Tt,t.blog.title]]),jL,st(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.blog.subtitle=o),id:"subtitle"},null,512),[[Tt,t.blog.subtitle]]),HL,st(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.blog.imageURL=o),id:"imageURL"},null,512),[[Tt,t.blog.imageURL]]),qL,st(g("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.blog.content=o),id:"content",required:""},null,512),[[Tt,t.blog.content]]),KL],32)])])])])}const zL=ot(ML,[["render",WL],["__scopeId","data-v-56f15ba2"],["__file","D:/GitHub/portfolio/src/views/EditBlog.vue"]]),GL=O0({history:Ob("/"),routes:[{path:"/",name:"Home",component:BN},{path:"/about",name:"About",component:nV},{path:"/contact",name:"Contact",component:EV},{path:"/projects",name:"Projects",component:MV},{path:"/auth",name:"Auth",component:YV},{path:"/blogs",name:"Blogs",component:SM},{path:"/blogs/create",name:"CreateBlog",component:wL},{path:"/blogs/:id",name:"BlogEntry",component:VL},{path:"/blogs/:id/edit",name:"EditBlog",component:zL},{path:"/resume",name:"Resume",component:aL}]});let Yo;Oo.onAuthStateChanged(async t=>{if(!Yo){if(localStorage.removeItem("user"),Yo=rb(ON),Yo.use(GL),t){const e=await xd(t.uid);localStorage.setItem("user",JSON.stringify(e))}Yo.mount("#app")}});
