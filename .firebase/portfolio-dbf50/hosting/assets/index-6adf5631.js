(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const be=Object.freeze({}),Is=Object.freeze([]),St=()=>{},Tm=()=>!1,jw=/^on[^a-z]/,io=t=>jw.test(t),ha=t=>t.startsWith("onUpdate:"),Re=Object.assign,Hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hw=Object.prototype.hasOwnProperty,le=(t,e)=>Hw.call(t,e),H=Array.isArray,Nr=t=>oo(t)==="[object Map]",za=t=>oo(t)==="[object Set]",jd=t=>oo(t)==="[object Date]",X=t=>typeof t=="function",Le=t=>typeof t=="string",ki=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",qu=t=>ye(t)&&X(t.then)&&X(t.catch),bm=Object.prototype.toString,oo=t=>bm.call(t),Ku=t=>oo(t).slice(8,-1),Am=t=>oo(t)==="[object Object]",Wu=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jo=fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qw=fr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kw=/-(\w)/g,gn=Ga(t=>t.replace(Kw,(e,n)=>n?n.toUpperCase():"")),Ww=/\B([A-Z])/g,or=Ga(t=>t.replace(Ww,"-$1").toLowerCase()),Hr=Ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),br=Ga(t=>t?`on${Hr(t)}`:""),Oi=(t,e)=>!Object.is(t,e),ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},da=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zw=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let Hd;const pa=()=>Hd||(Hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zu(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Jw(r):zu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Le(t))return t;if(ye(t))return t}}const Gw=/;(?![^(]*\))/g,Qw=/:([^]+)/,Yw=/\/\*[^]*?\*\//g;function Jw(t){const e={};return t.replace(Yw,"").split(Gw).forEach(n=>{if(n){const r=n.split(Qw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ao(t){let e="";if(Le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=ao(t[n]);r&&(e+=r+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xw="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Zw="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",eE=fr(Xw),tE=fr(Zw),nE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rE=fr(nE);function Rm(t){return!!t||t===""}function sE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qa(t[r],e[r]);return n}function Qa(t,e){if(t===e)return!0;let n=jd(t),r=jd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ki(t),r=ki(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?sE(t,e):!1;if(n=ye(t),r=ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qa(t[o],e[o]))return!1}}return String(t)===String(e)}function iE(t,e){return t.findIndex(n=>Qa(n,e))}const Fe=t=>Le(t)?t:t==null?"":H(t)||ye(t)&&(t.toString===bm||!X(t.toString))?JSON.stringify(t,Cm,2):String(t),Cm=(t,e)=>e&&e.__v_isRef?Cm(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:za(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!H(e)&&!Am(e)?String(e):e;function Vl(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let zt;class oE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}else Vl("cannot run an inactive effect scope.")}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function aE(t,e=zt){e&&e.active&&e.effects.push(t)}function cE(){return zt}const Gu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sm=t=>(t.w&ar)>0,Pm=t=>(t.n&ar)>0,lE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ar},uE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sm(s)&&!Pm(s)?s.delete(t):e[n++]=s,s.w&=~ar,s.n&=~ar}e.length=n}},Ml=new WeakMap;let si=0,ar=1;const Ll=30;let Et;const Vr=Symbol("iterate"),xl=Symbol("Map key iterate");class Qu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,aE(this,r)}run(){if(!this.active)return this.fn();let e=Et,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,tr=!0,ar=1<<++si,si<=Ll?lE(this):qd(this),this.fn()}finally{si<=Ll&&uE(this),ar=1<<--si,Et=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(qd(this),this.onStop&&this.onStop(),this.active=!1)}}function qd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const km=[];function Zr(){km.push(tr),tr=!1}function es(){const t=km.pop();tr=t===void 0?!0:t}function mt(t,e,n){if(tr&&Et){let r=Ml.get(t);r||Ml.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Gu()),Om(s,{effect:Et,target:t,type:e,key:n})}}function Om(t,e){let n=!1;si<=Ll?Pm(t)||(t.n|=ar,n=!Sm(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t),Et.onTrack&&Et.onTrack(Re({effect:Et},e)))}function _n(t,e,n,r,s,i){const o=Ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Wu(n)&&a.push(o.get("length")):(a.push(o.get(Vr)),Nr(t)&&a.push(o.get(xl)));break;case"delete":H(t)||(a.push(o.get(Vr)),Nr(t)&&a.push(o.get(xl)));break;case"set":Nr(t)&&a.push(o.get(Vr));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&$l(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);$l(Gu(l),c)}}function $l(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Kd(r,e);for(const r of n)r.computed||Kd(r,e)}function Kd(t,e){(t!==Et||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Re({effect:t},e)),t.scheduler?t.scheduler():t.run())}const hE=fr("__proto__,__v_isRef,__isVue"),Dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ki)),dE=Ya(),fE=Ya(!1,!0),pE=Ya(!0),mE=Ya(!0,!0),Wd=gE();function gE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zr();const r=se(this)[e].apply(this,n);return es(),r}}),t}function _E(t){const e=se(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Ya(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Um:Fm:e?$m:xm).get(r))return r;const o=H(r);if(!t){if(o&&le(Wd,s))return Reflect.get(Wd,s,i);if(s==="hasOwnProperty")return _E}const a=Reflect.get(r,s,i);return(ki(s)?Dm.has(s):hE(s))||(t||mt(r,"get",s),e)?a:Ge(a)?o&&Wu(s)?a:a.value:ye(a)?t?jm(a):Za(a):a}}const yE=Nm(),vE=Nm(!0);function Nm(t=!1){return function(n,r,s,i){let o=n[r];if(cr(o)&&Ge(o)&&!Ge(s))return!1;if(!t&&(!ma(s)&&!cr(s)&&(o=se(o),s=se(s)),!H(n)&&Ge(o)&&!Ge(s)))return o.value=s,!0;const a=H(n)&&Wu(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===se(i)&&(a?Oi(s,o)&&_n(n,"set",r,s,o):_n(n,"add",r,s)),c}}function wE(t,e){const n=le(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&_n(t,"delete",e,void 0,r),s}function EE(t,e){const n=Reflect.has(t,e);return(!ki(e)||!Dm.has(e))&&mt(t,"has",e),n}function IE(t){return mt(t,"iterate",H(t)?"length":Vr),Reflect.ownKeys(t)}const Vm={get:dE,set:yE,deleteProperty:wE,has:EE,ownKeys:IE},Mm={get:pE,set(t,e){return Vl(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Vl(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},TE=Re({},Vm,{get:fE,set:vE}),bE=Re({},Mm,{get:mE}),Yu=t=>t,Ja=t=>Reflect.getPrototypeOf(t);function Vo(t,e,n=!1,r=!1){t=t.__v_raw;const s=se(t),i=se(e);n||(e!==i&&mt(s,"get",e),mt(s,"get",i));const{has:o}=Ja(s),a=r?Yu:n?Ju:Di;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Mo(t,e=!1){const n=this.__v_raw,r=se(n),s=se(t);return e||(t!==s&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Lo(t,e=!1){return t=t.__v_raw,!e&&mt(se(t),"iterate",Vr),Reflect.get(t,"size",t)}function zd(t){t=se(t);const e=se(this);return Ja(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Gd(t,e){e=se(e);const n=se(this),{has:r,get:s}=Ja(n);let i=r.call(n,t);i?Lm(n,r,t):(t=se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Oi(e,o)&&_n(n,"set",t,e,o):_n(n,"add",t,e),this}function Qd(t){const e=se(this),{has:n,get:r}=Ja(e);let s=n.call(e,t);s?Lm(e,n,t):(t=se(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&_n(e,"delete",t,void 0,i),o}function Yd(){const t=se(this),e=t.size!==0,n=Nr(t)?new Map(t):new Set(t),r=t.clear();return e&&_n(t,"clear",void 0,void 0,n),r}function xo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=se(o),c=e?Yu:t?Ju:Di;return!t&&mt(a,"iterate",Vr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function $o(t,e,n){return function(...r){const s=this.__v_raw,i=se(s),o=Nr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Yu:e?Ju:Di;return!e&&mt(i,"iterate",c?xl:Vr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Hr(t)} operation ${n}failed: target is readonly.`,se(this))}return t==="delete"?!1:this}}function AE(){const t={get(i){return Vo(this,i)},get size(){return Lo(this)},has:Mo,add:zd,set:Gd,delete:Qd,clear:Yd,forEach:xo(!1,!1)},e={get(i){return Vo(this,i,!1,!0)},get size(){return Lo(this)},has:Mo,add:zd,set:Gd,delete:Qd,clear:Yd,forEach:xo(!1,!0)},n={get(i){return Vo(this,i,!0)},get size(){return Lo(this,!0)},has(i){return Mo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!1)},r={get(i){return Vo(this,i,!0,!0)},get size(){return Lo(this,!0)},has(i){return Mo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$o(i,!1,!1),n[i]=$o(i,!0,!1),e[i]=$o(i,!1,!0),r[i]=$o(i,!0,!0)}),[t,n,e,r]}const[RE,CE,SE,PE]=AE();function Xa(t,e){const n=e?t?PE:SE:t?CE:RE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const kE={get:Xa(!1,!1)},OE={get:Xa(!1,!0)},DE={get:Xa(!0,!1)},NE={get:Xa(!0,!0)};function Lm(t,e,n){const r=se(n);if(r!==n&&e.call(t,r)){const s=Ku(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const xm=new WeakMap,$m=new WeakMap,Fm=new WeakMap,Um=new WeakMap;function VE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ME(t){return t.__v_skip||!Object.isExtensible(t)?0:VE(Ku(t))}function Za(t){return cr(t)?t:ec(t,!1,Vm,kE,xm)}function Bm(t){return ec(t,!1,TE,OE,$m)}function jm(t){return ec(t,!0,Mm,DE,Fm)}function ii(t){return ec(t,!0,bE,NE,Um)}function ec(t,e,n,r,s){if(!ye(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ME(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mr(t){return cr(t)?Mr(t.__v_raw):!!(t&&t.__v_isReactive)}function cr(t){return!!(t&&t.__v_isReadonly)}function ma(t){return!!(t&&t.__v_isShallow)}function Fl(t){return Mr(t)||cr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Hm(t){return da(t,"__v_skip",!0),t}const Di=t=>ye(t)?Za(t):t,Ju=t=>ye(t)?jm(t):t;function qm(t){tr&&Et&&(t=se(t),Om(t.dep||(t.dep=Gu()),{target:t,type:"get",key:"value"}))}function Km(t,e){t=se(t);const n=t.dep;n&&$l(n,{target:t,type:"set",key:"value",newValue:e})}function Ge(t){return!!(t&&t.__v_isRef===!0)}function ke(t){return Wm(t,!1)}function LE(t){return Wm(t,!0)}function Wm(t,e){return Ge(t)?t:new xE(t,e)}class xE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:Di(e)}get value(){return qm(this),this._value}set value(e){const n=this.__v_isShallow||ma(e)||cr(e);e=n?e:se(e),Oi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Di(e),Km(this,e))}}function Lr(t){return Ge(t)?t.value:t}const $E={get:(t,e,n)=>Lr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zm(t){return Mr(t)?t:new Proxy(t,$E)}class FE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qu(e,()=>{this._dirty||(this._dirty=!0,Km(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=se(this);return qm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function UE(t,e,n=!1){let r,s;const i=X(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new FE(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const xr=[];function Xo(t){xr.push(t)}function Zo(){xr.pop()}function C(t,...e){Zr();const n=xr.length?xr[xr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=BE();if(r)Pn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${cc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...jE(s)),console.warn(...i)}es()}function BE(){let t=xr[xr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function jE(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...HE(n))}),e}function HE({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${cc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...qE(t.props),i]:[s+i]}function qE(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Gm(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Gm(t,e,n){return Le(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ge(e)?(e=Gm(t,se(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):X(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=se(e),n?e:[`${t}=`,e])}function KE(t,e){t!==void 0&&(typeof t!="number"?C(`${e} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&C(`${e} is NaN - the duration expression might be incorrect.`))}const Xu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){tc(i,e,n)}return s}function Ut(t,e,n,r){if(X(t)){const i=Pn(t,e,n,r);return i&&qu(i)&&i.catch(o=>{tc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}function tc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Xu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pn(c,null,10,[t,o,a]);return}}WE(t,n,s,r)}function WE(t,e,n,r=!0){{const s=Xu[e];if(n&&Xo(n),C(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Zo(),r)throw t;console.error(t)}}let Ni=!1,Ul=!1;const ut=[];let an=0;const Ts=[];let on=null,Wn=0;const Qm=Promise.resolve();let Zu=null;const zE=100;function Ym(t){const e=Zu||Qm;return t?e.then(this?t.bind(this):t):e}function GE(t){let e=an+1,n=ut.length;for(;e<n;){const r=e+n>>>1;Vi(ut[r])<t?e=r+1:n=r}return e}function nc(t){(!ut.length||!ut.includes(t,Ni&&t.allowRecurse?an+1:an))&&(t.id==null?ut.push(t):ut.splice(GE(t.id),0,t),Jm())}function Jm(){!Ni&&!Ul&&(Ul=!0,Zu=Qm.then(eg))}function QE(t){const e=ut.indexOf(t);e>an&&ut.splice(e,1)}function Xm(t){H(t)?Ts.push(...t):(!on||!on.includes(t,t.allowRecurse?Wn+1:Wn))&&Ts.push(t),Jm()}function Jd(t,e=Ni?an+1:0){for(t=t||new Map;e<ut.length;e++){const n=ut[e];if(n&&n.pre){if(eh(t,n))continue;ut.splice(e,1),e--,n()}}}function Zm(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,on){on.push(...e);return}for(on=e,t=t||new Map,on.sort((n,r)=>Vi(n)-Vi(r)),Wn=0;Wn<on.length;Wn++)eh(t,on[Wn])||on[Wn]();on=null,Wn=0}}const Vi=t=>t.id==null?1/0:t.id,YE=(t,e)=>{const n=Vi(t)-Vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eg(t){Ul=!1,Ni=!0,t=t||new Map,ut.sort(YE);const e=n=>eh(t,n);try{for(an=0;an<ut.length;an++){const n=ut[an];if(n&&n.active!==!1){if(e(n))continue;Pn(n,null,14)}}}finally{an=0,ut.length=0,Zm(t),Ni=!1,Zu=null,(ut.length||Ts.length)&&eg(t)}}function eh(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>zE){const r=e.ownerInstance,s=r&&ph(r.type);return C(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let $r=!1;const ms=new Set;pa().__VUE_HMR_RUNTIME__={createRecord:Jc(tg),rerender:Jc(ZE),reload:Jc(eI)};const qr=new Map;function JE(t){const e=t.type.__hmrId;let n=qr.get(e);n||(tg(e,t.type),n=qr.get(e)),n.instances.add(t)}function XE(t){qr.get(t.type.__hmrId).instances.delete(t)}function tg(t,e){return qr.has(t)?!1:(qr.set(t,{initialDef:gi(e),instances:new Set}),!0)}function gi(t){return Sg(t)?t.__vccOpts:t}function ZE(t,e){const n=qr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,gi(r.type).render=e),r.renderCache=[],$r=!0,r.update(),$r=!1}))}function eI(t,e){const n=qr.get(t);if(!n)return;e=gi(e),Xd(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=gi(s.type);ms.has(i)||(i!==n.initialDef&&Xd(i,e),ms.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(ms.add(i),s.ceReload(e.styles),ms.delete(i)):s.parent?nc(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Xm(()=>{for(const s of r)ms.delete(gi(s.type))})}function Xd(t,e){Re(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Jc(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let cn,oi=[],Bl=!1;function co(t,...e){cn?cn.emit(t,...e):Bl||oi.push({event:t,args:e})}function ng(t,e){var n,r;cn=t,cn?(cn.enabled=!0,oi.forEach(({event:s,args:i})=>cn.emit(s,...i)),oi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{ng(i,e)}),setTimeout(()=>{cn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Bl=!0,oi=[])},3e3)):(Bl=!0,oi=[])}function tI(t,e){co("app:init",t,e,{Fragment:Ke,Text:uo,Comment:Pt,Static:yi})}function nI(t){co("app:unmount",t)}const rI=th("component:added"),rg=th("component:updated"),sI=th("component:removed"),iI=t=>{cn&&typeof cn.cleanupBuffer=="function"&&!cn.cleanupBuffer(t)&&sI(t)};function th(t){return e=>{co(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const oI=sg("perf:start"),aI=sg("perf:end");function sg(t){return(e,n,r)=>{co(t,e.appContext.app,e.uid,e,n,r)}}function cI(t,e,n){co("component:emit",t.appContext.app,t,e,n)}function lI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(br(e)in h))&&C(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${br(e)}" prop.`);else{const d=u[e];X(d)&&(d(...n)||C(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(fa))}cI(t,e,s);{const u=e.toLowerCase();u!==e&&r[br(u)]&&C(`Event "${u}" is emitted in component ${cc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${or(e)}" instead of "${e}".`)}let a,c=r[a=br(e)]||r[a=br(gn(e))];!c&&i&&(c=r[a=br(or(e))]),c&&Ut(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(l,t,6,s)}}function ig(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=ig(l,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ye(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Re(o,i),ye(t)&&r.set(t,o),o)}function rc(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,or(e))||le(t,e))}let It=null,sc=null;function ga(t){const e=It;return It=t,sc=t&&t.type.__scopeId||null,e}function Ht(t){sc=t}function qt(){sc=null}function nh(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&df(-1);const i=ga(e);let o;try{o=t(...s)}finally{ga(i),r._d&&df(1)}return rg(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let jl=!1;function _a(){jl=!0}function Xc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:T}=t;let I,P;const x=ga(t);jl=!1;try{if(n.shapeFlag&4){const $=s||r;I=Gt(u.call($,$,h,i,p,d,y)),P=c}else{const $=e;c===i&&_a(),I=Gt($.length>1?$(i,{get attrs(){return _a(),c},slots:a,emit:l}):$(i,null)),P=e.props?c:hI(c)}}catch($){vi.length=0,tc($,t,1),I=Se(Pt)}let D=I,J;if(I.patchFlag>0&&I.patchFlag&2048&&([D,J]=uI(I)),P&&T!==!1){const $=Object.keys(P),{shapeFlag:_e}=D;if($.length){if(_e&7)o&&$.some(ha)&&(P=dI(P,o)),D=On(D,P);else if(!jl&&D.type!==Pt){const Ce=Object.keys(c),te=[],oe=[];for(let de=0,$e=Ce.length;de<$e;de++){const F=Ce[de];io(F)?ha(F)||te.push(F[2].toLowerCase()+F.slice(3)):oe.push(F)}oe.length&&C(`Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),te.length&&C(`Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Zd(D)||C("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=On(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Zd(D)||C("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),J?J(D):I=D,ga(x),I}const uI=t=>{const e=t.children,n=t.dynamicChildren,r=og(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Gt(r),o]};function og(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Li(r)){if(r.type!==Pt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const hI=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},dI=(t,e)=>{const n={};for(const r in t)(!ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Zd=t=>t.shapeFlag&7||t.type===Pt;function fI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&$r||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ef(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!rc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ef(r,o,l):!0:!!o;return!1}function ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rc(n,i))return!0}return!1}function pI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mI=t=>t.__isSuspense;function gI(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Xm(t)}function ag(t,e){return rh(t,null,e)}const Fo={};function _i(t,e,n){return X(e)||C("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),rh(t,e,n)}function rh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=be){var a;e||(n!==void 0&&C('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&C('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=$=>{C("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=cE()===((a=We)==null?void 0:a.scope)?We:null;let u,h=!1,d=!1;if(Ge(t)?(u=()=>t.value,h=ma(t)):Mr(t)?(u=()=>t,r=!0):H(t)?(d=!0,h=t.some($=>Mr($)||ma($)),u=()=>t.map($=>{if(Ge($))return $.value;if(Mr($))return Sr($);if(X($))return Pn($,l,2);c($)})):X(t)?e?u=()=>Pn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ut(t,l,3,[y])}:(u=St,c(t)),e&&r){const $=u;u=()=>Sr($())}let p,y=$=>{p=D.onStop=()=>{Pn($,l,4)}},T;if(xi)if(y=St,e?n&&Ut(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const $=IT();T=$.__watcherHandles||($.__watcherHandles=[])}else return St;let I=d?new Array(t.length).fill(Fo):Fo;const P=()=>{if(D.active)if(e){const $=D.run();(r||h||(d?$.some((_e,Ce)=>Oi(_e,I[Ce])):Oi($,I)))&&(p&&p(),Ut(e,l,3,[$,I===Fo?void 0:d&&I[0]===Fo?[]:I,y]),I=$)}else D.run()};P.allowRecurse=!!e;let x;s==="sync"?x=P:s==="post"?x=()=>Rt(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),x=()=>nc(P));const D=new Qu(u,x);D.onTrack=i,D.onTrigger=o,e?n?P():I=D.run():s==="post"?Rt(D.run.bind(D),l&&l.suspense):D.run();const J=()=>{D.stop(),l&&l.scope&&Hu(l.scope.effects,D)};return T&&T.push(J),J}function _I(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?cg(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=We;Ps(this);const a=rh(s,i.bind(r),n);return o?Ps(o):Ur(),a}function cg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Sr(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Sr(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Sr(t[n],e);else if(za(t)||Nr(t))t.forEach(n=>{Sr(n,e)});else if(Am(t))for(const n in t)Sr(t[n],e);return t}function lg(t){qw(t)&&C("Do not use built-in directive ids as custom directive id: "+t)}function st(t,e){const n=It;if(n===null)return C("withDirectives can only be used inside render functions."),t;const r=ac(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Sr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zr(),Ut(c,n,8,[t.el,a,t,e]),es())}}function yI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{t.isMounted=!0}),oh(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],vI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t};function wI(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Hl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:T,onAppear:I,onAfterAppear:P,onAppearCancelled:x}=e,D=String(t.key),J=wI(n,t),$=(te,oe)=>{te&&Ut(te,r,9,oe)},_e=(te,oe)=>{const de=oe[1];$(te,oe),H(te)?te.every($e=>$e.length<=1)&&de():te.length<=1&&de()},Ce={mode:i,persisted:o,beforeEnter(te){let oe=a;if(!n.isMounted)if(s)oe=T||a;else return;te._leaveCb&&te._leaveCb(!0);const de=J[D];de&&gs(t,de)&&de.el._leaveCb&&de.el._leaveCb(),$(oe,[te])},enter(te){let oe=c,de=l,$e=u;if(!n.isMounted)if(s)oe=I||c,de=P||l,$e=x||u;else return;let F=!1;const Ee=te._enterCb=At=>{F||(F=!0,At?$($e,[te]):$(de,[te]),Ce.delayedLeave&&Ce.delayedLeave(),te._enterCb=void 0)};oe?_e(oe,[te,Ee]):Ee()},leave(te,oe){const de=String(t.key);if(te._enterCb&&te._enterCb(!0),n.isUnmounting)return oe();$(h,[te]);let $e=!1;const F=te._leaveCb=Ee=>{$e||($e=!0,oe(),Ee?$(y,[te]):$(p,[te]),te._leaveCb=void 0,J[de]===t&&delete J[de])};J[de]=t,d?_e(d,[te,F]):F()},clone(te){return Hl(te,e,n,r)}};return Ce}function ql(t,e){t.shapeFlag&6&&t.component?ql(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ug(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&s++,r=r.concat(ug(o.children,e,a))):(e||o.type!==Pt)&&r.push(a!=null?On(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ze(t,e){return X(t)?(()=>Re({name:t.name},e,{setup:t}))():t}const ea=t=>!!t.type.__asyncLoader,sh=t=>t.type.__isKeepAlive;function EI(t,e){hg(t,"a",e)}function II(t,e){hg(t,"da",e)}function hg(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sh(s.parent.vnode)&&TI(r,e,n,s),s=s.parent}}function TI(t,e,n,r){const s=ic(e,t,r,!0);fg(()=>{Hu(r[e],s)},n)}function ic(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zr(),Ps(n);const a=Ut(e,n,t,o);return Ur(),es(),a});return r?s.unshift(i):s.push(i),i}else{const s=br(Xu[t].replace(/ hook$/,""));C(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const xn=t=>(e,n=We)=>(!xi||t==="sp")&&ic(t,(...r)=>e(...r),n),ih=xn("bm"),ts=xn("m"),bI=xn("bu"),dg=xn("u"),oh=xn("bum"),fg=xn("um"),AI=xn("sp"),RI=xn("rtg"),CI=xn("rtc");function SI(t,e=We){ic("ec",t,e)}const Kl="components";function lo(t,e){return kI(Kl,t,!0,e)||t}const PI=Symbol.for("v-ndc");function kI(t,e,n=!0,r=!1){const s=It||We;if(s){const i=s.type;if(t===Kl){const a=ph(i,!1);if(a&&(a===e||a===gn(e)||a===Hr(gn(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===Kl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";C(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else C(`resolve${Hr(t.slice(0,-1))} can only be used in render() or setup().`)}function tf(t,e){return t&&(t[e]||t[gn(e)]||t[Hr(gn(e))])}function Fs(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||C(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Wl=t=>t?Rg(t)?ac(t)||t.proxy:Wl(t.parent):null,Fr=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ii(t.props),$attrs:t=>ii(t.attrs),$slots:t=>ii(t.slots),$refs:t=>ii(t.refs),$parent:t=>Wl(t.parent),$root:t=>Wl(t.root),$emit:t=>t.emit,$options:t=>ch(t),$forceUpdate:t=>t.f||(t.f=()=>nc(t.update)),$nextTick:t=>t.n||(t.n=Ym.bind(t.proxy)),$watch:t=>_I.bind(t)}),ah=t=>t==="_"||t==="$",Zc=(t,e)=>t!==be&&!t.__isScriptSetup&&le(t,e),pg={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Zc(r,e))return o[e]=1,r[e];if(s!==be&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const u=Fr[e];let h,d;if(u)return e==="$attrs"?(mt(t,"get",e),_a()):e==="$slots"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e];It&&(!Le(e)||e.indexOf("__v")!==0)&&(s!==be&&ah(e[0])&&le(s,e)?C(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===It&&C(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Zc(s,e)?(s[e]=n,!0):s.__isScriptSetup&&le(s,e)?(C(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==be&&le(r,e)?(r[e]=n,!0):le(t.props,e)?(C(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(C(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||Zc(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Fr,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};pg.ownKeys=t=>(C("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function OI(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Fr).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Fr[n](t),set:St})}),e}function DI(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:St})})}function NI(t){const{ctx:e,setupState:n}=t;Object.keys(se(n)).forEach(r=>{if(!n.__isScriptSetup){if(ah(r[0])){C(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:St})}})}function nf(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function VI(){const t=Object.create(null);return(e,n)=>{t[n]?C(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let zl=!0;function MI(t){const e=ch(t),n=t.proxy,r=t.ctx;zl=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:T,deactivated:I,beforeDestroy:P,beforeUnmount:x,destroyed:D,unmounted:J,render:$,renderTracked:_e,renderTriggered:Ce,errorCaptured:te,serverPrefetch:oe,expose:de,inheritAttrs:$e,components:F,directives:Ee,filters:At}=e,yt=VI();{const[ae]=t.propsOptions;if(ae)for(const ce in ae)yt("Props",ce)}if(l&&LI(l,r,yt),o)for(const ae in o){const ce=o[ae];X(ce)?(Object.defineProperty(r,ae,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),yt("Methods",ae)):C(`Method "${ae}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(s){X(s)||C("The data option must be a function. Plain object usage is no longer supported.");const ae=s.call(n,n);if(qu(ae)&&C("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ye(ae))C("data() should return an object.");else{t.data=Za(ae);for(const ce in ae)yt("Data",ce),ah(ce[0])||Object.defineProperty(r,ce,{configurable:!0,enumerable:!0,get:()=>ae[ce],set:St})}}if(zl=!0,i)for(const ae in i){const ce=i[ae],Lt=X(ce)?ce.bind(n,n):X(ce.get)?ce.get.bind(n,n):St;Lt===St&&C(`Computed property "${ae}" has no getter.`);const wr=!X(ce)&&X(ce.set)?ce.set.bind(n):()=>{C(`Write operation failed: computed property "${ae}" is readonly.`)},$n=rt({get:Lt,set:wr});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>$n.value,set:nn=>$n.value=nn}),yt("Computed",ae)}if(a)for(const ae in a)mg(a[ae],r,n,ae);if(c){const ae=X(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ce=>{ta(ce,ae[ce])})}u&&rf(u,t,"c");function Be(ae,ce){H(ce)?ce.forEach(Lt=>ae(Lt.bind(n))):ce&&ae(ce.bind(n))}if(Be(ih,h),Be(ts,d),Be(bI,p),Be(dg,y),Be(EI,T),Be(II,I),Be(SI,te),Be(CI,_e),Be(RI,Ce),Be(oh,x),Be(fg,J),Be(AI,oe),H(de))if(de.length){const ae=t.exposed||(t.exposed={});de.forEach(ce=>{Object.defineProperty(ae,ce,{get:()=>n[ce],set:Lt=>n[ce]=Lt})})}else t.exposed||(t.exposed={});$&&t.render===St&&(t.render=$),$e!=null&&(t.inheritAttrs=$e),F&&(t.components=F),Ee&&(t.directives=Ee)}function LI(t,e,n=St){H(t)&&(t=Gl(t));for(const r in t){const s=t[r];let i;ye(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function rf(t,e,n){Ut(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mg(t,e,n,r){const s=r.includes(".")?cg(n,r):()=>n[r];if(Le(t)){const i=e[t];X(i)?_i(s,i):C(`Invalid watch handler specified by key "${t}"`,i)}else if(X(t))_i(s,t.bind(n));else if(ye(t))if(H(t))t.forEach(i=>mg(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)?_i(s,i,t):C(`Invalid watch handler specified by key "${t.handler}"`,i)}else C(`Invalid watch option: "${r}"`,t)}function ch(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ya(c,l,o,!0)),ya(c,e,o)),ye(e)&&i.set(e,c),c}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(r&&o==="expose")C('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=xI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xI={data:sf,props:of,emits:of,methods:ai,computed:ai,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ai,directives:ai,watch:FI,provide:sf,inject:$I};function sf(t,e){return e?t?function(){return Re(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function $I(t,e){return ai(Gl(t),Gl(e))}function Gl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?Re(Object.create(null),t,e):e}function of(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Re(Object.create(null),nf(t),nf(e??{})):e}function FI(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function gg(){return{app:null,config:{isNativeTag:Tm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UI=0;function BI(t,e){return function(r,s=null){X(r)||(r=Re({},r)),s!=null&&!ye(s)&&(C("root props passed to app.mount() must be an object."),s=null);const i=gg();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){C("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const c=i.app={_uid:UI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(l){C("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?C("Plugin has already been applied to target app."):l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)?(o.add(l),l(c,...u)):C('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?C("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Zl(l,i.config),u?(i.components[l]&&C(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return lg(l),u?(i.directives[l]&&C(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)C("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&C("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Se(r,s);return d.appContext=i,i.reload=()=>{t(On(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,tI(c,mf),ac(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,nI(c),delete c._container.__vue_app__):C("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&C(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c},runWithContext(l){va=c;try{return l()}finally{va=null}}};return c}}let va=null;function ta(t,e){if(!We)C("provide() can only be used inside setup().");else{let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=We||It;if(r||va){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:va._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e;C(`injection "${String(t)}" not found.`)}else C("inject() can only be used inside setup() or functional components.")}function jI(t,e,n,r=!1){const s={},i={};da(i,oc,1),t.propsDefaults=Object.create(null),_g(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);vg(e||{},s,t),n?t.props=r?s:Bm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function HI(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function qI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=se(s),[c]=t.propsOptions;let l=!1;if(!HI(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rc(t.emitsOptions,d))continue;const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=gn(d);s[y]=Ql(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{_g(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=or(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ql(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs"),vg(e||{},s,t)}function _g(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Jo(c))continue;const l=e[c];let u;s&&le(s,u=gn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=se(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ql(s,c,h,l[h],t,!le(l,h))}}return o}function Ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ps(s),r=l[n]=c.call(null,e),Ur())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===or(n))&&(r=!0))}return r}function yg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,p]=yg(h,e,!0);Re(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ye(t)&&r.set(t,Is),Is;if(H(i))for(let u=0;u<i.length;u++){Le(i[u])||C("props must be strings when using array syntax.",i[u]);const h=gn(i[u]);af(h)&&(o[h]=be)}else if(i){ye(i)||C("invalid props options",i);for(const u in i){const h=gn(u);if(af(h)){const d=i[u],p=o[h]=H(d)||X(d)?{type:d}:Re({},d);if(p){const y=lf(Boolean,p.type),T=lf(String,p.type);p[0]=y>-1,p[1]=T<0||y<T,(y>-1||le(p,"default"))&&a.push(h)}}}}const l=[o,a];return ye(t)&&r.set(t,l),l}function af(t){return t[0]!=="$"?!0:(C(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Yl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cf(t,e){return Yl(t)===Yl(e)}function lf(t,e){return H(e)?e.findIndex(n=>cf(n,t)):X(e)&&cf(e,t)?0:-1}function vg(t,e,n){const r=se(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&KI(i,r[i],o,!le(t,i)&&!le(t,or(i)))}}function KI(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){C('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let c=!1;const l=H(s)?s:[s],u=[];for(let h=0;h<l.length&&!c;h++){const{valid:d,expectedType:p}=zI(e,l[h]);u.push(p||""),c=d}if(!c){C(GI(t,e,u));return}}o&&!o(e)&&C('Invalid prop: custom validator check failed for prop "'+t+'".')}}const WI=fr("String,Number,Boolean,Function,Symbol,BigInt");function zI(t,e){let n;const r=Yl(e);if(WI(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=ye(t):r==="Array"?n=H(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function GI(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Hr).join(" | ")}`;const s=n[0],i=Ku(e),o=uf(e,s),a=uf(e,i);return n.length===1&&hf(s)&&!QI(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,hf(i)&&(r+=`with value ${a}.`),r}function uf(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function hf(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function QI(...t){return t.some(e=>e.toLowerCase()==="boolean")}const wg=t=>t[0]==="_"||t==="$stable",lh=t=>H(t)?t.map(Gt):[Gt(t)],YI=(t,e,n)=>{if(e._n)return e;const r=nh((...s)=>(We&&C(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),lh(e(...s))),n);return r._c=!1,r},Eg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wg(s))continue;const i=t[s];if(X(i))e[s]=YI(s,i,r);else if(i!=null){C(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=lh(i);e[s]=()=>o}}},Ig=(t,e)=>{sh(t.vnode)||C("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=lh(e);t.slots.default=()=>n},JI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),da(e,"_",n)):Eg(e,t.slots={})}else t.slots={},e&&Ig(t,e);da(t.slots,oc,1)},XI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?$r?(Re(s,e),_n(t,"set","$slots")):n&&a===1?i=!1:(Re(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Eg(e,s)),o=e}else e&&(Ig(t,e),o={default:1});if(i)for(const a in s)!wg(a)&&!(a in o)&&delete s[a]};function Jl(t,e,n,r,s=!1){if(H(t)){t.forEach((d,p)=>Jl(d,e&&(H(e)?e[p]:e),n,r,s));return}if(ea(r)&&!s)return;const i=r.shapeFlag&4?ac(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){C("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),X(c))Pn(c,a,12,[o,u]);else{const d=Le(c),p=Ge(c);if(d||p){const y=()=>{if(t.f){const T=d?le(h,c)?h[c]:u[c]:c.value;s?H(T)&&Hu(T,i):H(T)?T.includes(i)||T.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):C("Invalid template ref type:",c,`(${typeof c})`)};o?(y.id=-1,Rt(y,n)):y()}else C("Invalid template ref type:",c,`(${typeof c})`)}}let Js,Qn;function In(t,e){t.appContext.config.performance&&wa()&&Qn.mark(`vue-${e}-${t.uid}`),oI(t,e,wa()?Qn.now():Date.now())}function Tn(t,e){if(t.appContext.config.performance&&wa()){const n=`vue-${e}-${t.uid}`,r=n+":end";Qn.mark(r),Qn.measure(`<${cc(t,t.type)}> ${e}`,n,r),Qn.clearMarks(n),Qn.clearMarks(r)}aI(t,e,wa()?Qn.now():Date.now())}function wa(){return Js!==void 0||(typeof window<"u"&&window.performance?(Js=!0,Qn=window.performance):Js=!1),Js}function ZI(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Rt=gI;function eT(t){return tT(t)}function tT(t,e){ZI();const n=pa();n.__VUE__=!0,ng(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:y}=t,T=(f,m,g,E=null,w=null,k=null,N=!1,S=null,O=$r?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!gs(f,m)&&(E=M(f),xt(f,w,k,!0),f=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:A,ref:q,shapeFlag:B}=m;switch(A){case uo:I(f,m,g,E);break;case Pt:P(f,m,g,E);break;case yi:f==null?x(m,g,E,N):D(f,m,g,N);break;case Ke:Ee(f,m,g,E,w,k,N,S,O);break;default:B&1?_e(f,m,g,E,w,k,N,S,O):B&6?At(f,m,g,E,w,k,N,S,O):B&64||B&128?A.process(f,m,g,E,w,k,N,S,O,U):C("Invalid VNode type:",A,`(${typeof A})`)}q!=null&&w&&Jl(q,f&&f.ref,k,m||f,!m)},I=(f,m,g,E)=>{if(f==null)r(m.el=a(m.children),g,E);else{const w=m.el=f.el;m.children!==f.children&&l(w,m.children)}},P=(f,m,g,E)=>{f==null?r(m.el=c(m.children||""),g,E):m.el=f.el},x=(f,m,g,E)=>{[f.el,f.anchor]=y(f.children,m,g,E,f.el,f.anchor)},D=(f,m,g,E)=>{if(m.children!==f.children){const w=d(f.anchor);$(f),[m.el,m.anchor]=y(m.children,g,w,E)}else m.el=f.el,m.anchor=f.anchor},J=({el:f,anchor:m},g,E)=>{let w;for(;f&&f!==m;)w=d(f),r(f,g,E),f=w;r(m,g,E)},$=({el:f,anchor:m})=>{let g;for(;f&&f!==m;)g=d(f),s(f),f=g;s(m)},_e=(f,m,g,E,w,k,N,S,O)=>{N=N||m.type==="svg",f==null?Ce(m,g,E,w,k,N,S,O):de(f,m,w,k,N,S,O)},Ce=(f,m,g,E,w,k,N,S)=>{let O,A;const{type:q,props:B,shapeFlag:z,transition:ne,dirs:ue}=f;if(O=f.el=o(f.type,k,B&&B.is,B),z&8?u(O,f.children):z&16&&oe(f.children,O,null,E,w,k&&q!=="foreignObject",N,S),ue&&Er(f,null,E,"created"),te(O,f,f.scopeId,N,E),B){for(const Te in B)Te!=="value"&&!Jo(Te)&&i(O,Te,null,B[Te],k,f.children,E,w,v);"value"in B&&i(O,"value",null,B.value),(A=B.onVnodeBeforeMount)&&sn(A,E,f)}Object.defineProperty(O,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:E,enumerable:!1}),ue&&Er(f,null,E,"beforeMount");const Ae=(!w||w&&!w.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(O),r(O,m,g),((A=B&&B.onVnodeMounted)||Ae||ue)&&Rt(()=>{A&&sn(A,E,f),Ae&&ne.enter(O),ue&&Er(f,null,E,"mounted")},w)},te=(f,m,g,E,w)=>{if(g&&p(f,g),E)for(let k=0;k<E.length;k++)p(f,E[k]);if(w){let k=w.subTree;if(k.patchFlag>0&&k.patchFlag&2048&&(k=og(k.children)||k),m===k){const N=w.vnode;te(f,N,N.scopeId,N.slotScopeIds,w.parent)}}},oe=(f,m,g,E,w,k,N,S,O=0)=>{for(let A=O;A<f.length;A++){const q=f[A]=S?zn(f[A]):Gt(f[A]);T(null,q,m,g,E,w,k,N,S)}},de=(f,m,g,E,w,k,N)=>{const S=m.el=f.el;let{patchFlag:O,dynamicChildren:A,dirs:q}=m;O|=f.patchFlag&16;const B=f.props||be,z=m.props||be;let ne;g&&Ir(g,!1),(ne=z.onVnodeBeforeUpdate)&&sn(ne,g,m,f),q&&Er(m,f,g,"beforeUpdate"),g&&Ir(g,!0),$r&&(O=0,N=!1,A=null);const ue=w&&m.type!=="foreignObject";if(A?($e(f.dynamicChildren,A,S,g,E,ue,k),Xl(f,m)):N||Lt(f,m,S,null,g,E,ue,k,!1),O>0){if(O&16)F(S,m,B,z,g,E,w);else if(O&2&&B.class!==z.class&&i(S,"class",null,z.class,w),O&4&&i(S,"style",B.style,z.style,w),O&8){const Ae=m.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const je=Ae[Te],Wt=B[je],us=z[je];(us!==Wt||je==="value")&&i(S,je,Wt,us,w,f.children,g,E,v)}}O&1&&f.children!==m.children&&u(S,m.children)}else!N&&A==null&&F(S,m,B,z,g,E,w);((ne=z.onVnodeUpdated)||q)&&Rt(()=>{ne&&sn(ne,g,m,f),q&&Er(m,f,g,"updated")},E)},$e=(f,m,g,E,w,k,N)=>{for(let S=0;S<m.length;S++){const O=f[S],A=m[S],q=O.el&&(O.type===Ke||!gs(O,A)||O.shapeFlag&70)?h(O.el):g;T(O,A,q,null,E,w,k,N,!0)}},F=(f,m,g,E,w,k,N)=>{if(g!==E){if(g!==be)for(const S in g)!Jo(S)&&!(S in E)&&i(f,S,g[S],null,N,m.children,w,k,v);for(const S in E){if(Jo(S))continue;const O=E[S],A=g[S];O!==A&&S!=="value"&&i(f,S,A,O,N,m.children,w,k,v)}"value"in E&&i(f,"value",g.value,E.value)}},Ee=(f,m,g,E,w,k,N,S,O)=>{const A=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:ne}=m;($r||B&2048)&&(B=0,O=!1,z=null),ne&&(S=S?S.concat(ne):ne),f==null?(r(A,g,E),r(q,g,E),oe(m.children,g,q,w,k,N,S,O)):B>0&&B&64&&z&&f.dynamicChildren?($e(f.dynamicChildren,z,g,w,k,N,S),Xl(f,m)):Lt(f,m,g,q,w,k,N,S,O)},At=(f,m,g,E,w,k,N,S,O)=>{m.slotScopeIds=S,f==null?m.shapeFlag&512?w.ctx.activate(m,g,E,N,O):yt(m,g,E,w,k,N,O):Be(f,m,O)},yt=(f,m,g,E,w,k,N)=>{const S=f.component=hT(f,E,w);if(S.type.__hmrId&&JE(S),Xo(f),In(S,"mount"),sh(f)&&(S.ctx.renderer=U),In(S,"init"),fT(S),Tn(S,"init"),S.asyncDep){if(w&&w.registerDep(S,ae),!f.el){const O=S.subTree=Se(Pt);P(null,O,m,g)}return}ae(S,f,m,g,w,k,N),Zo(),Tn(S,"mount")},Be=(f,m,g)=>{const E=m.component=f.component;if(fI(f,m,g))if(E.asyncDep&&!E.asyncResolved){Xo(m),ce(E,m,g),Zo();return}else E.next=m,QE(E.update),E.update();else m.el=f.el,E.vnode=m},ae=(f,m,g,E,w,k,N)=>{const S=()=>{if(f.isMounted){let{next:q,bu:B,u:z,parent:ne,vnode:ue}=f,Ae=q,Te;Xo(q||f.vnode),Ir(f,!1),q?(q.el=ue.el,ce(f,q,N)):q=ue,B&&ps(B),(Te=q.props&&q.props.onVnodeBeforeUpdate)&&sn(Te,ne,q,ue),Ir(f,!0),In(f,"render");const je=Xc(f);Tn(f,"render");const Wt=f.subTree;f.subTree=je,In(f,"patch"),T(Wt,je,h(Wt.el),M(Wt),f,w,k),Tn(f,"patch"),q.el=je.el,Ae===null&&pI(f,je.el),z&&Rt(z,w),(Te=q.props&&q.props.onVnodeUpdated)&&Rt(()=>sn(Te,ne,q,ue),w),rg(f),Zo()}else{let q;const{el:B,props:z}=m,{bm:ne,m:ue,parent:Ae}=f,Te=ea(m);if(Ir(f,!1),ne&&ps(ne),!Te&&(q=z&&z.onVnodeBeforeMount)&&sn(q,Ae,m),Ir(f,!0),B&&De){const je=()=>{In(f,"render"),f.subTree=Xc(f),Tn(f,"render"),In(f,"hydrate"),De(B,f.subTree,f,w,null),Tn(f,"hydrate")};Te?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{In(f,"render");const je=f.subTree=Xc(f);Tn(f,"render"),In(f,"patch"),T(null,je,g,E,f,w,k),Tn(f,"patch"),m.el=je.el}if(ue&&Rt(ue,w),!Te&&(q=z&&z.onVnodeMounted)){const je=m;Rt(()=>sn(q,Ae,je),w)}(m.shapeFlag&256||Ae&&ea(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&f.a&&Rt(f.a,w),f.isMounted=!0,rI(f),m=g=E=null}},O=f.effect=new Qu(S,()=>nc(A),f.scope),A=f.update=()=>O.run();A.id=f.uid,Ir(f,!0),O.onTrack=f.rtc?q=>ps(f.rtc,q):void 0,O.onTrigger=f.rtg?q=>ps(f.rtg,q):void 0,A.ownerInstance=f,A()},ce=(f,m,g)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,qI(f,m.props,E,g),XI(f,m.children,g),Zr(),Jd(),es()},Lt=(f,m,g,E,w,k,N,S,O=!1)=>{const A=f&&f.children,q=f?f.shapeFlag:0,B=m.children,{patchFlag:z,shapeFlag:ne}=m;if(z>0){if(z&128){$n(A,B,g,E,w,k,N,S,O);return}else if(z&256){wr(A,B,g,E,w,k,N,S,O);return}}ne&8?(q&16&&v(A,w,k),B!==A&&u(g,B)):q&16?ne&16?$n(A,B,g,E,w,k,N,S,O):v(A,w,k,!0):(q&8&&u(g,""),ne&16&&oe(B,g,E,w,k,N,S,O))},wr=(f,m,g,E,w,k,N,S,O)=>{f=f||Is,m=m||Is;const A=f.length,q=m.length,B=Math.min(A,q);let z;for(z=0;z<B;z++){const ne=m[z]=O?zn(m[z]):Gt(m[z]);T(f[z],ne,g,null,w,k,N,S,O)}A>q?v(f,w,k,!0,!1,B):oe(m,g,E,w,k,N,S,O,B)},$n=(f,m,g,E,w,k,N,S,O)=>{let A=0;const q=m.length;let B=f.length-1,z=q-1;for(;A<=B&&A<=z;){const ne=f[A],ue=m[A]=O?zn(m[A]):Gt(m[A]);if(gs(ne,ue))T(ne,ue,g,null,w,k,N,S,O);else break;A++}for(;A<=B&&A<=z;){const ne=f[B],ue=m[z]=O?zn(m[z]):Gt(m[z]);if(gs(ne,ue))T(ne,ue,g,null,w,k,N,S,O);else break;B--,z--}if(A>B){if(A<=z){const ne=z+1,ue=ne<q?m[ne].el:E;for(;A<=z;)T(null,m[A]=O?zn(m[A]):Gt(m[A]),g,ue,w,k,N,S,O),A++}}else if(A>z)for(;A<=B;)xt(f[A],w,k,!0),A++;else{const ne=A,ue=A,Ae=new Map;for(A=ue;A<=z;A++){const vt=m[A]=O?zn(m[A]):Gt(m[A]);vt.key!=null&&(Ae.has(vt.key)&&C("Duplicate keys found during update:",JSON.stringify(vt.key),"Make sure keys are unique."),Ae.set(vt.key,A))}let Te,je=0;const Wt=z-ue+1;let us=!1,Fd=0;const Ys=new Array(Wt);for(A=0;A<Wt;A++)Ys[A]=0;for(A=ne;A<=B;A++){const vt=f[A];if(je>=Wt){xt(vt,w,k,!0);continue}let rn;if(vt.key!=null)rn=Ae.get(vt.key);else for(Te=ue;Te<=z;Te++)if(Ys[Te-ue]===0&&gs(vt,m[Te])){rn=Te;break}rn===void 0?xt(vt,w,k,!0):(Ys[rn-ue]=A+1,rn>=Fd?Fd=rn:us=!0,T(vt,m[rn],g,null,w,k,N,S,O),je++)}const Ud=us?nT(Ys):Is;for(Te=Ud.length-1,A=Wt-1;A>=0;A--){const vt=ue+A,rn=m[vt],Bd=vt+1<q?m[vt+1].el:E;Ys[A]===0?T(null,rn,g,Bd,w,k,N,S,O):us&&(Te<0||A!==Ud[Te]?nn(rn,g,Bd,2):Te--)}}},nn=(f,m,g,E,w=null)=>{const{el:k,type:N,transition:S,children:O,shapeFlag:A}=f;if(A&6){nn(f.component.subTree,m,g,E);return}if(A&128){f.suspense.move(m,g,E);return}if(A&64){N.move(f,m,g,U);return}if(N===Ke){r(k,m,g);for(let B=0;B<O.length;B++)nn(O[B],m,g,E);r(f.anchor,m,g);return}if(N===yi){J(f,m,g);return}if(E!==2&&A&1&&S)if(E===0)S.beforeEnter(k),r(k,m,g),Rt(()=>S.enter(k),w);else{const{leave:B,delayLeave:z,afterLeave:ne}=S,ue=()=>r(k,m,g),Ae=()=>{B(k,()=>{ue(),ne&&ne()})};z?z(k,ue,Ae):Ae()}else r(k,m,g)},xt=(f,m,g,E=!1,w=!1)=>{const{type:k,props:N,ref:S,children:O,dynamicChildren:A,shapeFlag:q,patchFlag:B,dirs:z}=f;if(S!=null&&Jl(S,null,g,f,!0),q&256){m.ctx.deactivate(f);return}const ne=q&1&&z,ue=!ea(f);let Ae;if(ue&&(Ae=N&&N.onVnodeBeforeUnmount)&&sn(Ae,m,f),q&6)Un(f.component,g,E);else{if(q&128){f.suspense.unmount(g,E);return}ne&&Er(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,g,w,U,E):A&&(k!==Ke||B>0&&B&64)?v(A,m,g,!1,!0):(k===Ke&&B&384||!w&&q&16)&&v(O,m,g),E&&Fn(f)}(ue&&(Ae=N&&N.onVnodeUnmounted)||ne)&&Rt(()=>{Ae&&sn(Ae,m,f),ne&&Er(f,null,m,"unmounted")},g)},Fn=f=>{const{type:m,el:g,anchor:E,transition:w}=f;if(m===Ke){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(N=>{N.type===Pt?s(N.el):Fn(N)}):No(g,E);return}if(m===yi){$(f);return}const k=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:S}=w,O=()=>N(g,k);S?S(f.el,k,O):O()}else k()},No=(f,m)=>{let g;for(;f!==m;)g=d(f),s(f),f=g;s(m)},Un=(f,m,g)=>{f.type.__hmrId&&XE(f);const{bum:E,scope:w,update:k,subTree:N,um:S}=f;E&&ps(E),w.stop(),k&&(k.active=!1,xt(N,f,m,g)),S&&Rt(S,m),Rt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),iI(f)},v=(f,m,g,E=!1,w=!1,k=0)=>{for(let N=k;N<f.length;N++)xt(f[N],m,g,E,w)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),L=(f,m,g)=>{f==null?m._vnode&&xt(m._vnode,null,null,!0):T(m._vnode||null,f,m,null,null,null,g),Jd(),Zm(),m._vnode=f},U={p:T,um:xt,m:nn,r:Fn,mt:yt,mc:oe,pc:Lt,pbc:$e,n:M,o:t};let fe,De;return e&&([fe,De]=e(U)),{render:L,hydrate:fe,createApp:BI(L,fe)}}function Ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xl(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zn(s[i]),a.el=o.el),n||Xl(o,a)),a.type===uo&&(a.el=o.el),a.type===Pt&&!a.el&&(a.el=o.el)}}function nT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rT=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),uo=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),yi=Symbol.for("v-stc"),vi=[];let Qt=null;function W(t=!1){vi.push(Qt=t?null:[])}function sT(){vi.pop(),Qt=vi[vi.length-1]||null}let Mi=1;function df(t){Mi+=t}function Tg(t){return t.dynamicChildren=Mi>0?Qt||Is:null,sT(),Mi>0&&Qt&&Qt.push(t),t}function Q(t,e,n,r,s,i){return Tg(_(t,e,n,r,s,i,!0))}function ho(t,e,n,r,s){return Tg(Se(t,e,n,r,s,!0))}function Li(t){return t?t.__v_isVNode===!0:!1}function gs(t,e){return e.shapeFlag&6&&ms.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const iT=(...t)=>oT(...t),oc="__vInternal",bg=({key:t})=>t??null,na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Ge(t)||X(t)?{i:It,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bg(e),ref:e&&na(e),scopeId:sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(hh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),c.key!==c.key&&C("VNode created with invalid key (NaN). VNode type:",c.type),Mi>0&&!o&&Qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Qt.push(c),c}const Se=iT;function oT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===PI)&&(t||C(`Invalid vnode type when creating vnode: ${t}.`),t=Pt),Li(t)){const a=On(t,e,!0);return n&&hh(a,n),Mi>0&&!i&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag|=-2,a}if(Sg(t)&&(t=t.__vccOpts),e){e=aT(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=ao(a)),ye(c)&&(Fl(c)&&!H(c)&&(c=Re({},c)),e.style=zu(c))}const o=Le(t)?1:mI(t)?128:rT(t)?64:ye(t)?4:X(t)?2:0;return o&4&&Fl(t)&&(t=se(t),C("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),_(t,e,n,r,s,o,i,!0)}function aT(t){return t?Fl(t)||oc in t?Re({},t):t:null}function On(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?cT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bg(a),ref:e&&e.ref?n&&s?H(s)?s.concat(na(e)):[s,na(e)]:na(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&H(o)?o.map(Ag):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ag(t){const e=On(t);return H(t.children)&&(e.children=t.children.map(Ag)),e}function Ye(t=" ",e=0){return Se(uo,null,t,e)}function uh(t,e){const n=Se(yi,null,t);return n.staticCount=e,n}function Ve(t="",e=!1){return e?(W(),ho(Pt,null,t)):Se(Pt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Se(Pt):H(t)?Se(Ke,null,t.slice()):typeof t=="object"?zn(t):Se(uo,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function hh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oc in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[Ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function cT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ao([e.class,r.class]));else if(s==="style")e.style=zu([e.style,r.style]);else if(io(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Ut(t,e,7,[n,r])}const lT=gg();let uT=0;function hT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||lT,i={uid:uT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yg(r,s),emitsOptions:ig(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=OI(i),i.root=e?e.root:i,i.emit=lI.bind(null,i),t.ce&&t.ce(i),i}let We=null;const dh=()=>We||It;let fh,hs,ff="__VUE_INSTANCE_SETTERS__";(hs=pa()[ff])||(hs=pa()[ff]=[]),hs.push(t=>We=t),fh=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Ps=t=>{fh(t),t.scope.on()},Ur=()=>{We&&We.scope.off(),fh(null)},dT=fr("slot,component");function Zl(t,e){const n=e.isNativeTag||Tm;(dT(t)||n(t))&&C("Do not use built-in or reserved HTML elements as component id: "+t)}function Rg(t){return t.vnode.shapeFlag&4}let xi=!1;function fT(t,e=!1){xi=e;const{props:n,children:r}=t.vnode,s=Rg(t);jI(t,n,s,e),JI(t,r);const i=s?pT(t,e):void 0;return xi=!1,i}function pT(t,e){var n;const r=t.type;{if(r.name&&Zl(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)Zl(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)lg(i[o])}r.compilerOptions&&mT()&&C('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Hm(new Proxy(t.ctx,pg)),DI(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?yT(t):null;Ps(t),Zr();const o=Pn(s,t,0,[ii(t.props),i]);if(es(),Ur(),qu(o)){if(o.then(Ur,Ur),e)return o.then(a=>{pf(t,a,e)}).catch(a=>{tc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";C(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else pf(t,o,e)}else Cg(t,e)}function pf(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)?(Li(e)&&C("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=zm(e),NI(t)):e!==void 0&&C(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Cg(t,n)}let eu;const mT=()=>!eu;function Cg(t,e,n){const r=t.type;if(!t.render){if(!e&&eu&&!r.render){const s=r.template||ch(t).template;if(s){In(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Re(Re({isCustomElement:i,delimiters:a},o),c);r.render=eu(s,l),Tn(t,"compile")}}t.render=r.render||St}Ps(t),Zr(),MI(t),es(),Ur(),!r.render&&t.render===St&&!e&&(r.template?C('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):C("Component is missing template or render function."))}function gT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _a(),mt(t,"get","$attrs"),e[n]},set(){return C("setupContext.attrs is readonly."),!1},deleteProperty(){return C("setupContext.attrs is readonly."),!1}}))}function _T(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return mt(t,"get","$slots"),e[n]}}))}function yT(t){return Object.freeze({get attrs(){return gT(t)},get slots(){return _T(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&C("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(H(n)?r="array":Ge(n)&&(r="ref")),r!=="object"&&C(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zm(Hm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}const vT=/(?:^|[-_])(\w)/g,wT=t=>t.replace(vT,e=>e.toUpperCase()).replace(/[-_]/g,"");function ph(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function cc(t,e,n=!1){let r=ph(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?wT(r):n?"App":"Anonymous"}function Sg(t){return X(t)&&"__vccOpts"in t}const rt=(t,e)=>UE(t,e,xi);function Pg(t,e,n){const r=arguments.length;return r===2?ye(e)&&!H(e)?Li(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Li(n)&&(n=[n]),Se(t,e,n))}const ET=Symbol.for("v-scx"),IT=()=>{{const t=Yt(ET);return t||C("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function el(t){return!!(t&&t.__v_isShallow)}function TT(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return ye(h)?h.__isVue?["div",t,"VueInstance"]:Ge(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Mr(h)?["div",{},["span",t,el(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${cr(h)?" (readonly)":""}`]:cr(h)?["div",{},["span",t,el(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",se(h.props))),h.setupState!==be&&d.push(o("setup",h.setupState)),h.data!==be&&d.push(o("data",se(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const y=c(h,"inject");return y&&d.push(o("injected",y)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Re({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:ye(h)?["object",{object:d?se(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(X(p))return;const y={};for(const T in h.ctx)l(p,T,d)&&(y[T]=h.ctx[T]);return y}function l(h,d,p){const y=h[p];if(H(y)&&y.includes(d)||ye(y)&&d in y||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(T=>l(T,d,p)))return!0}function u(h){return el(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const mf="3.3.4",bT="http://www.w3.org/2000/svg",Rr=typeof document<"u"?document:null,gf=Rr&&Rr.createElement("template"),AT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rr.createElementNS(bT,t):Rr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rr.createTextNode(t),createComment:t=>Rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gf.innerHTML=r?`<svg>${t}</svg>`:t;const a=gf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function RT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function CT(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&tu(r,i,"");for(const i in n)tu(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ST=/[^\\];\s*$/,_f=/\s*!important$/;function tu(t,e,n){if(H(n))n.forEach(r=>tu(t,e,r));else if(n==null&&(n=""),ST.test(n)&&C(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=PT(t,e);_f.test(n)?t.setProperty(or(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],tl={};function PT(t,e){const n=tl[e];if(n)return n;let r=gn(e);if(r!=="filter"&&r in t)return tl[e]=r;r=Hr(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return tl[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function kT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=rE(e);n==null||i&&!Rm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function OT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Rm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch(l){c||C(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,l)}c&&t.removeAttribute(e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function DT(t,e,n,r){t.removeEventListener(e,n,r)}function NT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=VT(e);if(r){const l=i[e]=xT(r,s);Cr(t,a,l,c)}else o&&(DT(t,a,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function VT(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let nl=0;const MT=Promise.resolve(),LT=()=>nl||(MT.then(()=>nl=0),nl=Date.now());function xT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut($T(r,n.value),e,5,[r])};return n.value=t,n.attached=LT(),n}function $T(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ef=/^on[a-z]/,FT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?RT(t,r,s):e==="style"?CT(t,n,r):io(e)?ha(e)||NT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UT(t,e,r,s))?OT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kT(t,e,r,s))};function UT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ef.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ef.test(e)&&Le(n)?!1:e in t}const jn="transition",Xs="animation",kg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},BT=Re({},vI,kg),Tr=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},If=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function jT(t){const e={};for(const F in t)F in kg||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=HT(s),T=y&&y[0],I=y&&y[1],{onBeforeEnter:P,onEnter:x,onEnterCancelled:D,onLeave:J,onLeaveCancelled:$,onBeforeAppear:_e=P,onAppear:Ce=x,onAppearCancelled:te=D}=e,oe=(F,Ee,At)=>{Kn(F,Ee?u:a),Kn(F,Ee?l:o),At&&At()},de=(F,Ee)=>{F._isLeaving=!1,Kn(F,h),Kn(F,p),Kn(F,d),Ee&&Ee()},$e=F=>(Ee,At)=>{const yt=F?Ce:x,Be=()=>oe(Ee,F,At);Tr(yt,[Ee,Be]),Tf(()=>{Kn(Ee,F?c:i),bn(Ee,F?u:a),If(yt)||bf(Ee,r,T,Be)})};return Re(e,{onBeforeEnter(F){Tr(P,[F]),bn(F,i),bn(F,o)},onBeforeAppear(F){Tr(_e,[F]),bn(F,c),bn(F,l)},onEnter:$e(!1),onAppear:$e(!0),onLeave(F,Ee){F._isLeaving=!0;const At=()=>de(F,Ee);bn(F,h),Dg(),bn(F,d),Tf(()=>{F._isLeaving&&(Kn(F,h),bn(F,p),If(J)||bf(F,r,I,At))}),Tr(J,[F,At])},onEnterCancelled(F){oe(F,!1),Tr(D,[F])},onAppearCancelled(F){oe(F,!0),Tr(te,[F])},onLeaveCancelled(F){de(F),Tr($,[F])}})}function HT(t){if(t==null)return null;if(ye(t))return[rl(t.enter),rl(t.leave)];{const e=rl(t);return[e,e]}}function rl(t){const e=zw(t);return KE(e,"<transition> explicit duration"),e}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Kn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qT=0;function bf(t,e,n,r){const s=t._endId=++qT,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Og(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function Og(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=Af(s,i),a=r(`${Xs}Delay`),c=r(`${Xs}Duration`),l=Af(a,c);let u=null,h=0,d=0;e===jn?o>0&&(u=jn,h=o,d=i.length):e===Xs?l>0&&(u=Xs,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?jn:Xs:null,d=u?u===jn?i.length:c.length:0);const p=u===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rf(n)+Rf(t[r])))}function Rf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Dg(){return document.body.offsetHeight}const Ng=new WeakMap,Vg=new WeakMap,Mg={name:"TransitionGroup",props:Re({},BT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=dh(),r=yI();let s,i;return dg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!YT(s[0].el,n.vnode.el,o))return;s.forEach(zT),s.forEach(GT);const a=s.filter(QT);Dg(),a.forEach(c=>{const l=c.el,u=l.style;bn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Kn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=se(t),a=jT(o);let c=o.tag||Ke;s=i,i=e.default?ug(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null?ql(u,Hl(u,a,r,n)):C("<TransitionGroup> children must be keyed.")}if(s)for(let l=0;l<s.length;l++){const u=s[l];ql(u,Hl(u,a,r,n)),Ng.set(u,u.el.getBoundingClientRect())}return Se(c,null,i)}}},KT=t=>delete t.mode;Mg.props;const WT=Mg;function zT(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function GT(t){Vg.set(t,t.el.getBoundingClientRect())}function QT(t){const e=Ng.get(t),n=Vg.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function YT(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Og(r);return s.removeChild(r),i}const Ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ps(e,n):e};function JT(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ea(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fa(a)),t._assign(a)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",JT),Cr(t,"compositionend",Cf),Cr(t,"change",Cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ea(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&fa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Lg={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=za(e);Cr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fa(Ia(o)):Ia(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ea(r)},mounted(t,{value:e}){Sf(t,e)},beforeUpdate(t,e,n){t._assign=Ea(n)},updated(t,{value:e}){Sf(t,e)}};function Sf(t,e){const n=t.multiple;if(n&&!H(e)&&!za(e)){C(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8,-1)}.`);return}for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ia(i);if(n)H(e)?i.selected=iE(e,o)>-1:i.selected=e.has(o);else if(Qa(Ia(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}function Ia(t){return"_value"in t?t._value:t.value}const XT=["ctrl","shift","alt","meta"],ZT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XT.some(n=>t[`${n}Key`]&&!e.includes(n))},lc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ZT[e[s]];if(i&&i(n,e))return}return t(n,...r)},eb=Re({patchProp:FT},AT);let Pf;function tb(){return Pf||(Pf=eT(eb))}const nb=(...t)=>{const e=tb().createApp(...t);rb(e),sb(e);const{mount:n}=e;return e.mount=r=>{const s=ib(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rb(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>eE(e)||tE(e),writable:!1})}function sb(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){C("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return C(r),n},set(){C(r)}})}}function ib(t){if(Le(t)){const e=document.querySelector(t);return e||C(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&C('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function ob(){TT()}ob();function ab(){return xg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function xg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const cb=typeof Proxy=="function",lb="devtools-plugin:setup",ub="plugin:settings:set";let ds,nu;function hb(){var t;return ds!==void 0||(typeof window<"u"&&window.performance?(ds=!0,nu=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ds=!0,nu=global.perf_hooks.performance):ds=!1),ds}function db(){return hb()?nu.now():Date.now()}class fb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return db()}},n&&n.on(ub,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function pb(t,e){const n=t,r=xg(),s=ab(),i=cb&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(lb,t,e);else{const o=i?new fb(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function mb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vt(s)?s.map(t):t(s)}return n}const wi=()=>{},Vt=Array.isArray;function ge(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const gb=/\/$/,_b=t=>t.replace(gb,"");function il(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function yb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Of(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&lr(e.matched[r],n.matched[s])&&$g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vb(t[n],e[n]))return!1;return!0}function vb(t,e){return Vt(t)?Df(t,e):Vt(e)?Df(e,t):t===e}function Df(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wb(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return ge(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function Eb(t){if(!t)if(An){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_b(t)}const Ib=/^[^#]+#/;function Tb(t,e){return t.replace(Ib,"#")+e}function bb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const uc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ab(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){ge(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{ge(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){ge(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=bb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function Rb(t,e){ru.set(t,e)}function Cb(t){const e=ru.get(t);return ru.delete(t),e}let Sb=()=>location.protocol+"//"+location.host;function Fg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),kf(c,"")}return kf(n,t)+r+s}function Pb(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Fg(t,location),y=n.value,T=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}I=T?d.position-T.position:0}else r(p);s.forEach(P=>{P(n.value,y,{delta:I,type:$i.pop,direction:I?I>0?Ei.forward:Ei.back:Ei.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:uc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?uc():null}}function kb(t){const{history:e,location:n}=window,r={value:Fg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Sb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){ge("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,Vf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:uc()});e.state||ge(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=we({},Vf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ob(t){t=Eb(t);const e=kb(t),n=Pb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Tb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Db(t){return typeof t=="string"||t&&typeof t=="object"}function Ug(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bg=Symbol("navigation failure");var Mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mf||(Mf={}));const Nb={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${Mb(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ks(t,e){return we(new Error(Nb[t](e)),{type:t,[Bg]:!0},e)}function En(t,e){return t instanceof Error&&Bg in t&&(e==null||!!(t.type&e))}const Vb=["params","query","hash"];function Mb(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of Vb)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Lf="[^/]+?",Lb={sensitive:!1,strict:!1,start:!0,end:!0},xb=/[.+*?^${}()[\]/\\]/g;function $b(t,e){const n=we({},Lb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(xb,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:T,optional:I,regexp:P}=d;i.push({name:y,repeatable:T,optional:I});const x=P||Lf;if(x!==Lf){p+=10;try{new RegExp(`(${x})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+J.message)}}let D=T?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(D=I&&l.length<2?`(?:/${D})`:"/"+D),I&&(D+="?"),s+=D,p+=20,I&&(p+=-8),T&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:T,optional:I}=p,P=y in l?l[y]:"";if(Vt(P)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Vt(P)?P.join("/"):P;if(!x)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Fb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ub(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Fb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Bb={type:0,value:""},jb=/[a-zA-Z0-9_]/;function Hb(t){if(!t)return[[]];if(t==="/")return[[Bb]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:jb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function qb(t,e,n){const r=$b(Hb(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&ge(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kb(t,e){const n=[],r=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=Wb(u);Yb(y,h),y.aliasOf=d&&d.record;const T=Uf(e,u),I=[y];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of D)I.push(we({},y,{components:d?d.record.components:y.components,path:J,aliasOf:d?d.record:y}))}let P,x;for(const D of I){const{path:J}=D;if(h&&J[0]!=="/"){const $=h.record.path,_e=$[$.length-1]==="/"?"":"/";D.path=h.record.path+(J&&_e+J)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=qb(D,h,T),h&&J[0]==="/"&&Jb(P,h),d?(d.alias.push(P),Qb(d,P)):(x=x||P,x!==P&&x.alias.push(P),p&&u.name&&!Ff(P)&&o(u.name)),y.children){const $=y.children;for(let _e=0;_e<$.length;_e++)i($[_e],P,d&&d.children[_e])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return x?()=>{o(x)}:wi}function o(u){if(Ug(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Ub(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ff(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ks(1,{location:u});{const x=Object.keys(u.params||{}).filter(D=>!d.keys.find(J=>J.name===D));x.length&&ge(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}T=d.record.name,p=we($f(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&$f(u.params,d.keys.map(x=>x.name))),y=d.stringify(p)}else if("path"in u)y=u.path,y.startsWith("/")||ge(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(x=>x.re.test(y)),d&&(p=d.parse(y),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ks(1,{location:u,currentLocation:h});T=d.record.name,p=we({},h.params,u.params),y=d.stringify(p)}const I=[];let P=d;for(;P;)I.unshift(P.record),P=P.parent;return{name:T,path:y,params:p,matched:I,meta:Gb(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function $f(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gb(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function su(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function Qb(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(su.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(su.bind(null,n)))return ge(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function Yb(t,e){e&&e.record.name&&!t.name&&!t.path&&ge(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Jb(t,e){for(const n of e.keys)if(!t.keys.find(su.bind(null,n)))return ge(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function jg(t,e){return e.children.some(n=>n===t||jg(t,n))}const Hg=/#/g,Xb=/&/g,Zb=/\//g,e0=/=/g,t0=/\?/g,qg=/\+/g,n0=/%5B/g,r0=/%5D/g,Kg=/%5E/g,s0=/%60/g,Wg=/%7B/g,i0=/%7C/g,zg=/%7D/g,o0=/%20/g;function mh(t){return encodeURI(""+t).replace(i0,"|").replace(n0,"[").replace(r0,"]")}function a0(t){return mh(t).replace(Wg,"{").replace(zg,"}").replace(Kg,"^")}function iu(t){return mh(t).replace(qg,"%2B").replace(o0,"+").replace(Hg,"%23").replace(Xb,"%26").replace(s0,"`").replace(Wg,"{").replace(zg,"}").replace(Kg,"^")}function c0(t){return iu(t).replace(e0,"%3D")}function l0(t){return mh(t).replace(Hg,"%23").replace(t0,"%3F")}function u0(t){return t==null?"":l0(t).replace(Zb,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{ge(`Error decoding "${t}". Using original value`)}return""+t}function h0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qg," "),o=i.indexOf("="),a=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(a in e){let l=e[a];Vt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=c0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(i=>i&&iu(i)):[r&&iu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function d0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const f0=Symbol("router view location matched"),jf=Symbol("router view depth"),hc=Symbol("router"),gh=Symbol("route location"),ou=Symbol("router view location");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ks(4,{from:n,to:e})):h instanceof Error?a(h):Db(h)?a(ks(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,p0(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(ge(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){ge(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function p0(t,e,n){let r=0;return function(){r++===1&&ge(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function ol(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&ge(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw ge(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){ge(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,ge(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(m0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Gn(l,n,r,i,o))}else{let c=a();"catch"in c||(ge(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=mb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,r,i,o)()}))}}}return s}function m0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hf(t){const e=Yt(hc),n=Yt(gh),r=rt(()=>e.resolve(Lr(t.to))),s=rt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(lr.bind(null,u));if(d>-1)return d;const p=qf(c[l-2]);return l>1&&qf(u)===p&&h[h.length-1].path!==p?h.findIndex(lr.bind(null,c[l-2])):d}),i=rt(()=>s.value>-1&&v0(n.params,r.value.params)),o=rt(()=>s.value>-1&&s.value===n.matched.length-1&&$g(n.params,r.value.params));function a(c={}){return y0(c)?e[Lr(t.replace)?"replace":"push"](Lr(t.to)).catch(wi):Promise.resolve()}if(An){const c=dh();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),ag(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const g0=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hf,setup(t,{slots:e}){const n=Za(Hf(t)),{options:r}=Yt(hc),s=rt(()=>({[Kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_0=g0;function y0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kf=(t,e,n)=>t??e??n,w0=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){E0();const r=Yt(ou),s=rt(()=>t.route||r.value),i=Yt(jf,0),o=rt(()=>{let l=Lr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=rt(()=>s.value.matched[o.value]);ta(jf,rt(()=>o.value+1)),ta(f0,a),ta(ou,s);const c=ke();return _i(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!lr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Wf(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,I=Pg(d,we({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(An&&I.ref){const P={depth:o.value,name:h.name,path:h.path,meta:h.meta};(Vt(I.ref)?I.ref.map(D=>D.i):[I.ref.i]).forEach(D=>{D.__vrv_devtools=P})}return Wf(n.default,{Component:I,route:l})||I}}});function Wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gg=w0;function E0(){const t=dh(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";ge(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function ei(t,e){const n=we({},t,{matched:t.matched.map(r=>k0(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Uo(t){return{_custom:{display:t}}}let I0=0;function T0(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=I0++;pb({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ei(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Qg})}Vt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=Xg,y="";d.isExactActive?(p=Jg,y="This is exactly active"):d.isActive&&(p=Yg,y="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:y,backgroundColor:p})}))}),_i(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Uo("beforeEach"),from:ei(h,"Current Location during this navigation"),to:ei(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Uo("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Uo("❌")):p.status=Uo("✅"),p.from=ei(h,"Current Location during this navigation"),p.to=ei(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(t_),u.filter&&(h=h.filter(d=>au(d,u.filter.toLowerCase()))),h.forEach(d=>e_(d,e.currentRoute.value)),u.rootNodes=h.map(Zg)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:A0(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function b0(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function A0(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${b0(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Qg=15485081,Yg=2450411,Jg=8702998,R0=2282478,Xg=16486972,C0=6710886;function Zg(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:R0}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Xg}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Qg}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Jg}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Yg}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:C0});let r=n.__vd_id;return r==null&&(r=String(S0++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(Zg)}}let S0=0;const P0=/^\/(.*)\/([a-z]*)$/;function e_(t,e){const n=e.matched.length&&lr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>lr(r,t.record))),t.children.forEach(r=>e_(r,e))}function t_(t){t.__vd_match=!1,t.children.forEach(t_)}function au(t,e){const n=String(t.re).match(P0);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>au(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Fi(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>au(o,e))}function k0(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function O0(t){const e=Kb(t.routes,t),n=t.parseQuery||h0,r=t.stringifyQuery||Bf,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Zs(),o=Zs(),a=Zs(),c=LE(Hn);let l=Hn;An&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,v=>""+v),h=sl.bind(null,u0),d=sl.bind(null,Fi);function p(v,M){let L,U;return Ug(v)?(L=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,L)}function y(v){const M=e.getRecordMatcher(v);M?e.removeRoute(M):ge(`Cannot remove non-existent route "${String(v)}"`)}function T(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function P(v,M){if(M=we({},M||c.value),typeof v=="string"){const m=il(n,v,M.path),g=e.resolve({path:m.path},M),E=s.createHref(m.fullPath);return E.startsWith("//")?ge(`Location "${v}" resolved to "${E}". A resolved location cannot start with multiple slashes.`):g.matched.length||ge(`No match found for location with path "${v}"`),we(m,g,{params:d(g.params),hash:Fi(m.hash),redirectedFrom:void 0,href:E})}let L;if("path"in v)"params"in v&&!("name"in v)&&Object.keys(v.params).length&&ge(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),L=we({},v,{path:il(n,v.path,M.path).path});else{const m=we({},v.params);for(const g in m)m[g]==null&&delete m[g];L=we({},v,{params:h(m)}),M.params=h(M.params)}const U=e.resolve(L,M),fe=v.hash||"";fe&&!fe.startsWith("#")&&ge(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`),U.params=u(d(U.params));const De=yb(r,we({},v,{hash:a0(fe),path:U.path})),f=s.createHref(De);return f.startsWith("//")?ge(`Location "${v}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):U.matched.length||ge(`No match found for location with path "${"path"in v?v.path:v}"`),we({fullPath:De,hash:fe,query:r===Bf?d0(v.query):v.query||{}},U,{redirectedFrom:void 0,href:f})}function x(v){return typeof v=="string"?il(n,v,c.value.path):we({},v)}function D(v,M){if(l!==v)return ks(8,{from:M,to:v})}function J(v){return Ce(v)}function $(v){return J(we(x(v),{replace:!0}))}function _e(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:L}=M;let U=typeof L=="function"?L(v):L;if(typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),!("path"in U)&&!("name"in U))throw ge(`Invalid redirect found:
${JSON.stringify(U,null,2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return we({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function Ce(v,M){const L=l=P(v),U=c.value,fe=v.state,De=v.force,f=v.replace===!0,m=_e(L);if(m)return Ce(we(x(m),{state:typeof m=="object"?we({},fe,m.state):fe,force:De,replace:f}),M||L);const g=L;g.redirectedFrom=M;let E;return!De&&Of(r,U,L)&&(E=ks(16,{to:g,from:U}),$n(U,U,!0,!1)),(E?Promise.resolve(E):de(g,U)).catch(w=>En(w)?En(w,2)?w:wr(w):ce(w,g,U)).then(w=>{if(w){if(En(w,2))return Of(r,P(w.to),g)&&M&&(M._count=M._count?M._count+1:1)>30?(ge(`Detected a possibly infinite redirection in a navigation guard when going from "${U.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Ce(we({replace:f},x(w.to),{state:typeof w.to=="object"?we({},fe,w.to.state):fe,force:De}),M||g)}else w=F(g,U,!0,f,fe);return $e(g,U,w),w})}function te(v,M){const L=D(v,M);return L?Promise.reject(L):Promise.resolve()}function oe(v){const M=Fn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function de(v,M){let L;const[U,fe,De]=D0(v,M);L=ol(U.reverse(),"beforeRouteLeave",v,M);for(const m of U)m.leaveGuards.forEach(g=>{L.push(Gn(g,v,M))});const f=te.bind(null,v,M);return L.push(f),Un(L).then(()=>{L=[];for(const m of i.list())L.push(Gn(m,v,M));return L.push(f),Un(L)}).then(()=>{L=ol(fe,"beforeRouteUpdate",v,M);for(const m of fe)m.updateGuards.forEach(g=>{L.push(Gn(g,v,M))});return L.push(f),Un(L)}).then(()=>{L=[];for(const m of De)if(m.beforeEnter)if(Vt(m.beforeEnter))for(const g of m.beforeEnter)L.push(Gn(g,v,M));else L.push(Gn(m.beforeEnter,v,M));return L.push(f),Un(L)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),L=ol(De,"beforeRouteEnter",v,M),L.push(f),Un(L))).then(()=>{L=[];for(const m of o.list())L.push(Gn(m,v,M));return L.push(f),Un(L)}).catch(m=>En(m,8)?m:Promise.reject(m))}function $e(v,M,L){a.list().forEach(U=>oe(()=>U(v,M,L)))}function F(v,M,L,U,fe){const De=D(v,M);if(De)return De;const f=M===Hn,m=An?history.state:{};L&&(U||f?s.replace(v.fullPath,we({scroll:f&&m&&m.scroll},fe)):s.push(v.fullPath,fe)),c.value=v,$n(v,M,L,f),wr()}let Ee;function At(){Ee||(Ee=s.listen((v,M,L)=>{if(!No.listening)return;const U=P(v),fe=_e(U);if(fe){Ce(we(fe,{replace:!0}),U).catch(wi);return}l=U;const De=c.value;An&&Rb(Nf(De.fullPath,L.delta),uc()),de(U,De).catch(f=>En(f,12)?f:En(f,2)?(Ce(f.to,U).then(m=>{En(m,20)&&!L.delta&&L.type===$i.pop&&s.go(-1,!1)}).catch(wi),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ce(f,U,De))).then(f=>{f=f||F(U,De,!1),f&&(L.delta&&!En(f,8)?s.go(-L.delta,!1):L.type===$i.pop&&En(f,20)&&s.go(-1,!1)),$e(U,De,f)}).catch(wi)}))}let yt=Zs(),Be=Zs(),ae;function ce(v,M,L){wr(v);const U=Be.list();return U.length?U.forEach(fe=>fe(v,M,L)):(ge("uncaught error during route navigation:"),console.error(v)),Promise.reject(v)}function Lt(){return ae&&c.value!==Hn?Promise.resolve():new Promise((v,M)=>{yt.add([v,M])})}function wr(v){return ae||(ae=!v,At(),yt.list().forEach(([M,L])=>v?L(v):M()),yt.reset()),v}function $n(v,M,L,U){const{scrollBehavior:fe}=t;if(!An||!fe)return Promise.resolve();const De=!L&&Cb(Nf(v.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Ym().then(()=>fe(v,M,De)).then(f=>f&&Ab(f)).catch(f=>ce(f,v,M))}const nn=v=>s.go(v);let xt;const Fn=new Set,No={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:I,getRoutes:T,resolve:P,options:t,push:J,replace:$,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:Lt,install(v){const M=this;v.component("RouterLink",_0),v.component("RouterView",Gg),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Lr(c)}),An&&!xt&&c.value===Hn&&(xt=!0,J(s.location).catch(fe=>{ge("Unexpected error when starting the router:",fe)}));const L={};for(const fe in Hn)Object.defineProperty(L,fe,{get:()=>c.value[fe],enumerable:!0});v.provide(hc,M),v.provide(gh,Bm(L)),v.provide(ou,c);const U=v.unmount;Fn.add(v),v.unmount=function(){Fn.delete(v),Fn.size<1&&(l=Hn,Ee&&Ee(),Ee=null,c.value=Hn,xt=!1,ae=!1),U()},An&&T0(v,M,e)}};function Un(v){return v.reduce((M,L)=>M.then(()=>oe(L)),Promise.resolve())}return No}function D0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>lr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>lr(l,c))||s.push(c))}return[n,r,s]}function pr(){return Yt(hc)}function _h(){return Yt(gh)}const N0=Ze({name:"ItemLinkComponent",props:{link:{type:String,required:!0},text:{type:String,required:!0},selected:{type:Boolean,default:!1}},emits:["item-clicked"],setup(t,{emit:e}){const n=pr();return{onClickRouteTo:()=>{e("item-clicked"),n.push(t.link)}}}});const ot=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function V0(t,e,n,r,s,i){const o=lo("router-link");return W(),Q("div",{class:ao({itemLink:!0,selected:t.selected}),onClick:e[0]||(e[0]=(...a)=>t.onClickRouteTo&&t.onClickRouteTo(...a))},[Se(o,{to:t.link},{default:nh(()=>[Ye(Fe(t.text),1)]),_:1},8,["to"])],2)}const M0=ot(N0,[["render",V0],["__scopeId","data-v-2bd57407"],["__file","D:/GitHub/portfolio/src/components/ItemLinkComponent.vue"]]);/**
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
 */const n_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},L0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},r_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):L0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new x0;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $0=function(t){const e=n_(t);return r_.encodeByteArray(e,!0)},Ta=function(t){return $0(t).replace(/\./g,"")},s_=function(t){try{return r_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function F0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const U0=()=>F0().__FIREBASE_DEFAULTS__,B0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},j0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s_(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return U0()||B0()||j0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H0=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o_=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},a_=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function K0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function c_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function z0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function G0(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l_(){try{return typeof indexedDB=="object"}catch{return!1}}function u_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Q0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Y0="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y0,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?J0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tn(s,a,r)}}function J0(t,e){return t.replace(X0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const X0=/\{\$([^}]+)}/g;function Z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zf(i)&&zf(o)){if(!Ui(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zf(t){return t!==null&&typeof t=="object"}/**
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
 */function fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eA(t,e){const n=new tA(t,e);return n.subscribe.bind(n)}class tA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=al),s.error===void 0&&(s.error=al),s.complete===void 0&&(s.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function al(){}/**
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
 */const rA=1e3,sA=2,iA=4*60*60*1e3,oA=.5;function Gf(t,e=rA,n=sA){const r=e*Math.pow(n,t),s=Math.round(oA*r*(Math.random()-.5)*2);return Math.min(iA,r+s)}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class aA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new q0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lA(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cA(t){return t===Ar?void 0:t}function lA(t){return t.instantiationMode==="EAGER"}/**
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
 */class uA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const hA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},dA=pe.INFO,fA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},pA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=dA,this._logHandler=pA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const mA=(t,e)=>e.some(n=>t instanceof n);let Qf,Yf;function gA(){return Qf||(Qf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _A(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h_=new WeakMap,cu=new WeakMap,d_=new WeakMap,cl=new WeakMap,vh=new WeakMap;function yA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h_.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function vA(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wA(t){lu=t(lu)}function EA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ll(this),e,...n);return d_.set(r,e.sort?e.sort():[e]),nr(r)}:_A().includes(t)?function(...e){return t.apply(ll(this),e),nr(h_.get(this))}:function(...e){return nr(t.apply(ll(this),e))}}function IA(t){return typeof t=="function"?EA(t):(t instanceof IDBTransaction&&vA(t),mA(t,gA())?new Proxy(t,lu):t)}function nr(t){if(t instanceof IDBRequest)return yA(t);if(cl.has(t))return cl.get(t);const e=IA(t);return e!==t&&(cl.set(t,e),vh.set(e,t)),e}const ll=t=>vh.get(t);function TA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(nr(o.result),c.oldVersion,c.newVersion,nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bA=["get","getKey","getAll","getAllKeys","count"],AA=["put","add","delete","clear"],ul=new Map;function Jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ul.set(e,i),i}wA(t=>({...t,get:(e,n,r)=>Jf(e,n)||t.get(e,n,r),has:(e,n)=>!!Jf(e,n)||t.has(e,n)}));/**
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
 */class RA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",Xf="0.9.19";/**
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
 */const Kr=new dc("@firebase/app"),SA="@firebase/app-compat",PA="@firebase/analytics-compat",kA="@firebase/analytics",OA="@firebase/app-check-compat",DA="@firebase/app-check",NA="@firebase/auth",VA="@firebase/auth-compat",MA="@firebase/database",LA="@firebase/database-compat",xA="@firebase/functions",$A="@firebase/functions-compat",FA="@firebase/installations",UA="@firebase/installations-compat",BA="@firebase/messaging",jA="@firebase/messaging-compat",HA="@firebase/performance",qA="@firebase/performance-compat",KA="@firebase/remote-config",WA="@firebase/remote-config-compat",zA="@firebase/storage",GA="@firebase/storage-compat",QA="@firebase/firestore",YA="@firebase/firestore-compat",JA="firebase",XA="10.4.0";/**
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
 */const hu="[DEFAULT]",ZA={[uu]:"fire-core",[SA]:"fire-core-compat",[kA]:"fire-analytics",[PA]:"fire-analytics-compat",[DA]:"fire-app-check",[OA]:"fire-app-check-compat",[NA]:"fire-auth",[VA]:"fire-auth-compat",[MA]:"fire-rtdb",[LA]:"fire-rtdb-compat",[xA]:"fire-fn",[$A]:"fire-fn-compat",[FA]:"fire-iid",[UA]:"fire-iid-compat",[BA]:"fire-fcm",[jA]:"fire-fcm-compat",[HA]:"fire-perf",[qA]:"fire-perf-compat",[KA]:"fire-rc",[WA]:"fire-rc-compat",[zA]:"fire-gcs",[GA]:"fire-gcs-compat",[QA]:"fire-fst",[YA]:"fire-fst-compat","fire-js":"fire-js",[JA]:"fire-js-all"};/**
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
 */const ba=new Map,du=new Map;function eR(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(du.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of ba.values())eR(n,t);return!0}function rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new ns("app","Firebase",tR);/**
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
 */class nR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Us=XA;function f_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=o_()),!n)throw rr.create("no-options");const i=ba.get(s);if(i){if(Ui(n,i.options)&&Ui(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new uA(s);for(const c of du.values())o.addComponent(c);const a=new nR(n,r,o);return ba.set(s,a),a}function wh(t=hu){const e=ba.get(t);if(!e&&t===hu&&o_())return f_();if(!e)throw rr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=ZA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}yn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rR="firebase-heartbeat-database",sR=1,Bi="firebase-heartbeat-store";let hl=null;function p_(){return hl||(hl=TA(rR,sR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bi)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),hl}async function iR(t){try{return await(await p_()).transaction(Bi).objectStore(Bi).get(m_(t))}catch(e){if(e instanceof tn)Kr.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(n.message)}}}async function Zf(t,e){try{const r=(await p_()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,m_(t)),await r.done}catch(n){if(n instanceof tn)Kr.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kr.warn(r.message)}}}function m_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oR=1024,aR=30*24*60*60*1e3;class cR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ep();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=aR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ep(),{heartbeatsToSend:n,unsentEntries:r}=lR(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ep(){return new Date().toISOString().substring(0,10)}function lR(t,e=oR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l_()?u_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tp(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hR(t){yn(new Jt("platform-logger",e=>new RA(e),"PRIVATE")),yn(new Jt("heartbeat",e=>new cR(e),"PRIVATE")),Bt(uu,Xf,t),Bt(uu,Xf,"esm2017"),Bt("fire-js","")}hR("");var dR="firebase",fR="10.4.0";/**
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
 */Bt(dR,fR,"app");const pR=(t,e)=>e.some(n=>t instanceof n);let np,rp;function mR(){return np||(np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gR(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,fu=new WeakMap,__=new WeakMap,dl=new WeakMap,Eh=new WeakMap;function _R(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&g_.set(n,t)}).catch(()=>{}),Eh.set(e,t),e}function yR(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||__.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vR(t){pu=t(pu)}function wR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return __.set(r,e.sort?e.sort():[e]),sr(r)}:gR().includes(t)?function(...e){return t.apply(fl(this),e),sr(g_.get(this))}:function(...e){return sr(t.apply(fl(this),e))}}function ER(t){return typeof t=="function"?wR(t):(t instanceof IDBTransaction&&yR(t),pR(t,mR())?new Proxy(t,pu):t)}function sr(t){if(t instanceof IDBRequest)return _R(t);if(dl.has(t))return dl.get(t);const e=ER(t);return e!==t&&(dl.set(t,e),Eh.set(e,t)),e}const fl=t=>Eh.get(t);function IR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const TR=["get","getKey","getAll","getAllKeys","count"],bR=["put","add","delete","clear"],pl=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return pl.set(e,i),i}vR(t=>({...t,get:(e,n,r)=>sp(e,n)||t.get(e,n,r),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));const y_="@firebase/installations",Ih="0.6.4";/**
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
 */const v_=1e4,w_=`w:${Ih}`,E_="FIS_v2",AR="https://firebaseinstallations.googleapis.com/v1",RR=60*60*1e3,CR="installations",SR="Installations";/**
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
 */const PR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wr=new ns(CR,SR,PR);function I_(t){return t instanceof tn&&t.code.includes("request-failed")}/**
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
 */function T_({projectId:t}){return`${AR}/projects/${t}/installations`}function b_(t){return{token:t.token,requestStatus:2,expiresIn:OR(t.expiresIn),creationTime:Date.now()}}async function A_(t,e){const r=(await e.json()).error;return Wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function R_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kR(t,{refreshToken:e}){const n=R_(t);return n.append("Authorization",DR(e)),n}async function C_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OR(t){return Number(t.replace("s","000"))}function DR(t){return`${E_} ${t}`}/**
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
 */async function NR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=T_(t),s=R_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:E_,appId:t.appId,sdkVersion:w_},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await C_(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:b_(l.authToken)}}else throw await A_("Create Installation",c)}/**
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
 */function S_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function VR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MR=/^[cdef][\w-]{21}$/,mu="";function LR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xR(t);return MR.test(n)?n:mu}catch{return mu}}function xR(t){return VR(t).substr(0,22)}/**
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
 */const P_=new Map;function k_(t,e){const n=fc(t);O_(n,e),$R(n,e)}function O_(t,e){const n=P_.get(t);if(n)for(const r of n)r(e)}function $R(t,e){const n=FR();n&&n.postMessage({key:t,fid:e}),UR()}let Pr=null;function FR(){return!Pr&&"BroadcastChannel"in self&&(Pr=new BroadcastChannel("[Firebase] FID Change"),Pr.onmessage=t=>{O_(t.data.key,t.data.fid)}),Pr}function UR(){P_.size===0&&Pr&&(Pr.close(),Pr=null)}/**
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
 */const BR="firebase-installations-database",jR=1,zr="firebase-installations-store";let ml=null;function Th(){return ml||(ml=IR(BR,jR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zr)}}})),ml}async function Aa(t,e){const n=fc(t),s=(await Th()).transaction(zr,"readwrite"),i=s.objectStore(zr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&k_(t,e.fid),e}async function D_(t){const e=fc(t),r=(await Th()).transaction(zr,"readwrite");await r.objectStore(zr).delete(e),await r.done}async function pc(t,e){const n=fc(t),s=(await Th()).transaction(zr,"readwrite"),i=s.objectStore(zr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&k_(t,a.fid),a}/**
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
 */async function bh(t){let e;const n=await pc(t.appConfig,r=>{const s=HR(r),i=qR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HR(t){const e=t||{fid:LR(),registrationStatus:0};return N_(e)}function qR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Wr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WR(t)}:{installationEntry:e}}async function KR(t,e){try{const n=await NR(t,e);return Aa(t.appConfig,n)}catch(n){throw I_(n)&&n.customData.serverCode===409?await D_(t.appConfig):await Aa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WR(t){let e=await ip(t.appConfig);for(;e.registrationStatus===1;)await S_(100),e=await ip(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bh(t);return r||n}return e}function ip(t){return pc(t,e=>{if(!e)throw Wr.create("installation-not-found");return N_(e)})}function N_(t){return zR(t)?{fid:t.fid,registrationStatus:0}:t}function zR(t){return t.registrationStatus===1&&t.registrationTime+v_<Date.now()}/**
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
 */async function GR({appConfig:t,heartbeatServiceProvider:e},n){const r=QR(t,n),s=kR(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:w_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await C_(()=>fetch(r,a));if(c.ok){const l=await c.json();return b_(l)}else throw await A_("Generate Auth Token",c)}function QR(t,{fid:e}){return`${T_(t)}/${e}/authTokens:generate`}/**
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
 */async function Ah(t,e=!1){let n;const r=await pc(t.appConfig,i=>{if(!V_(i))throw Wr.create("not-registered");const o=i.authToken;if(!e&&XR(o))return i;if(o.requestStatus===1)return n=YR(t,e),i;{if(!navigator.onLine)throw Wr.create("app-offline");const a=eC(i);return n=JR(t,a),a}});return n?await n:r.authToken}async function YR(t,e){let n=await op(t.appConfig);for(;n.authToken.requestStatus===1;)await S_(100),n=await op(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ah(t,e):r}function op(t){return pc(t,e=>{if(!V_(e))throw Wr.create("not-registered");const n=e.authToken;return tC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JR(t,e){try{const n=await GR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Aa(t.appConfig,r),n}catch(n){if(I_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await D_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Aa(t.appConfig,r)}throw n}}function V_(t){return t!==void 0&&t.registrationStatus===2}function XR(t){return t.requestStatus===2&&!ZR(t)}function ZR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RR}function eC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tC(t){return t.requestStatus===1&&t.requestTime+v_<Date.now()}/**
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
 */async function nC(t){const e=t,{installationEntry:n,registrationPromise:r}=await bh(e);return r?r.catch(console.error):Ah(e).catch(console.error),n.fid}/**
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
 */async function rC(t,e=!1){const n=t;return await sC(n),(await Ah(n,e)).token}async function sC(t){const{registrationPromise:e}=await bh(t);e&&await e}/**
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
 */function iC(t){if(!t||!t.options)throw gl("App Configuration");if(!t.name)throw gl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gl(t){return Wr.create("missing-app-config-values",{valueName:t})}/**
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
 */const M_="installations",oC="installations-internal",aC=t=>{const e=t.getProvider("app").getImmediate(),n=iC(e),r=rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cC=t=>{const e=t.getProvider("app").getImmediate(),n=rs(e,M_).getImmediate();return{getId:()=>nC(n),getToken:s=>rC(n,s)}};function lC(){yn(new Jt(M_,aC,"PUBLIC")),yn(new Jt(oC,cC,"PRIVATE"))}lC();Bt(y_,Ih);Bt(y_,Ih,"esm2017");/**
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
 */const Ra="analytics",uC="firebase_id",hC="origin",dC=60*1e3,fC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rh="https://www.googletagmanager.com/gtag/js";/**
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
 */const pC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ns("analytics","Analytics",pC);/**
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
 */function mC(t){if(!t.startsWith(Rh)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function L_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _C(t,e){const n=gC("firebase-js-sdk-policy",{createScriptURL:mC}),r=document.createElement("script"),s=`${Rh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function yC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vC(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await L_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){kt.error(a)}t("config",s,i)}async function wC(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await L_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){kt.error(i)}}function EC(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await wC(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await vC(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){kt.error(a)}}return s}function IC(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=EC(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function TC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rh)&&n.src.includes(t))return n;return null}/**
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
 */const bC=30,AC=1e3;class RC{constructor(e={},n=AC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const x_=new RC;function CC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function SC(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:CC(r)},i=fC.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function PC(t,e=x_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Nt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new DC;return setTimeout(async()=>{a.abort()},n!==void 0?n:dC),$_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function $_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=x_){var i;const{appId:o,measurementId:a}=t;try{await kC(r,e)}catch(c){if(a)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await SC(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!OC(l)){if(s.deleteThrottleMetadata(o),a)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Gf(n,s.intervalMillis,bC):Gf(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),kt.debug(`Calling attemptFetch again in ${u} millis`),$_(t,h,r,s)}}function kC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OC(t){if(!(t instanceof tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function NC(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function VC(){if(l_())try{await u_()}catch(t){return kt.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MC(t,e,n,r,s,i,o){var a;const c=PC(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>kt.error(p)),e.push(c);const l=VC().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);TC(i)||_C(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[hC]="firebase",d.update=!0,h!=null&&(d[uC]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class LC{constructor(e){this.app=e}_delete(){return delete Ii[this.app.options.appId],Promise.resolve()}}let Ii={},ap=[];const cp={};let _l="dataLayer",xC="gtag",lp,F_,up=!1;function $C(){const t=[];if(c_()&&t.push("This is a browser extension environment."),Q0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function FC(t,e,n){$C();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Ii[r]!=null)throw Nt.create("already-exists",{id:r});if(!up){yC(_l);const{wrappedGtag:i,gtagCore:o}=IC(Ii,ap,cp,_l,xC);F_=i,lp=o,up=!0}return Ii[r]=MC(t,ap,cp,e,lp,_l,n),new LC(t)}function UC(t=wh()){t=Je(t);const e=rs(t,Ra);return e.isInitialized()?e.getImmediate():BC(t)}function BC(t,e={}){const n=rs(t,Ra);if(n.isInitialized()){const s=n.getImmediate();if(Ui(e,n.getOptions()))return s;throw Nt.create("already-initialized")}return n.initialize({options:e})}function jC(t,e,n,r){t=Je(t),NC(F_,Ii[t.app.options.appId],e,n,r).catch(s=>kt.error(s))}const hp="@firebase/analytics",dp="0.10.0";function HC(){yn(new Jt(Ra,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return FC(r,s,n)},"PUBLIC")),yn(new Jt("analytics-internal",t,"PRIVATE")),Bt(hp,dp),Bt(hp,dp,"esm2017");function t(e){try{const n=e.getProvider(Ra).getImmediate();return{logEvent:(r,s,i)=>jC(n,r,s,i)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}HC();function Ch(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fp(t){return t!==void 0&&t.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function U_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KC=U_,B_=new ns("auth","Firebase",U_());/**
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
 */const Ca=new dc("@firebase/auth");function WC(t,...e){Ca.logLevel<=pe.WARN&&Ca.warn(`Auth (${Us}): ${t}`,...e)}function ra(t,...e){Ca.logLevel<=pe.ERROR&&Ca.error(`Auth (${Us}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Sh(t,...e)}function dn(t,...e){return Sh(t,...e)}function zC(t,e,n){const r=Object.assign(Object.assign({},KC()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B_.create(t,...e)}function Y(t,e,...n){if(!t)throw Sh(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Dn(t,e){t||Rn(e)}/**
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
 */function gu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GC(){return pp()==="http:"||pp()==="https:"}function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GC()||c_()||"connection"in navigator)?navigator.onLine:!0}function YC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=W0()||z0()}get(){return QC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ph(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class j_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XC=new po(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return H_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=fo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),j_.fetch()(q_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JC),e);try{const s=new ZC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw zC(t,u,l);Xt(t,u)}}catch(s){if(s instanceof tn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function mo(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function q_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`}class ZC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),XC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}async function eS(t,e){return gr(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
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
 */async function tS(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function nS(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rS(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=kh(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ti(yl(s.auth_time)),issuedAtTime:Ti(yl(s.iat)),expirationTime:Ti(yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yl(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=s_(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sS(t){const e=kh(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&iS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class K_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ji(t,nS(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lS(i.providerUserInfo):[],a=cS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new K_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function aS(t){const e=Je(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,r=Ch(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uS(t,e){const n=await H_(t,{},async()=>{const r=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=q_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function qn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new K_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ji(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:J,isAnonymous:$,providerData:_e,stsTokenManager:Ce}=n;Y(D&&Ce,e,"internal-error");const te=Hi.fromJSON(this.name,Ce);Y(typeof D=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),Y(typeof J=="boolean",e,"internal-error"),Y(typeof $=="boolean",e,"internal-error"),qn(p,e.name),qn(y,e.name),qn(T,e.name),qn(I,e.name),qn(P,e.name),qn(x,e.name);const oe=new Br({uid:D,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:$,photoURL:y,phoneNumber:p,tenantId:T,stsTokenManager:te,createdAt:P,lastLoginAt:x});return _e&&Array.isArray(_e)&&(oe.providerData=_e.map(de=>Object.assign({},de))),I&&(oe._redirectEventId=I),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hi;s.updateFromServerResponse(n);const i=new Br({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sa(i),i}}/**
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
 */const mp=new Map;function Cn(t){Dn(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
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
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W_.type="NONE";const gp=W_;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Cn(gp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Cn(gp);const o=sa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Br._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new bs(i,e,r))}}/**
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
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(X_(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=gt()){return/firefox\//i.test(t)}function Oh(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=gt()){return/crios\//i.test(t)}function Q_(t=gt()){return/iemobile/i.test(t)}function Y_(t=gt()){return/android/i.test(t)}function J_(t=gt()){return/blackberry/i.test(t)}function X_(t=gt()){return/webos/i.test(t)}function mc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hS(t=gt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dS(){return G0()&&document.documentMode===10}function Z_(t=gt()){return mc(t)||Y_(t)||X_(t)||J_(t)||/windows phone/i.test(t)||Q_(t)}function fS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ey(t,e=[]){let n;switch(t){case"Browser":n=_p(gt());break;case"Worker":n=`${_p(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
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
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mS(t,e={}){return gr(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
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
 */const gS=6;class _S{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mS(this),n=new _S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ss(t){return Je(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=eA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function vS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ty(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vS().appendChild(r)})}function wS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ES="https://www.google.com/recaptcha/enterprise.js?render=",IS="recaptcha-enterprise",TS="NO_RECAPTCHA";class bS{constructor(e){this.type=IS,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{eS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new qC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;fp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(TS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&fp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ty(ES+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Pa(t,e,n,r=!1){const s=new bS(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function AS(t,e){const n=rs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ui(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function RS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CS(t,e,n){const r=ss(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ny(e),{host:o,port:a}=SS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||PS()}function ny(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=ny(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function kS(t,e){return gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vl(t,e){return mo(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}async function OS(t,e){return gr(t,"POST","/v1/accounts:sendOobCode",mr(t,e))}async function DS(t,e){return OS(t,e)}/**
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
 */async function NS(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function VS(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class qi extends Dh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new qi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Pa(e,r,"signInWithPassword");return vl(e,s)}else return vl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Pa(e,r,"signInWithPassword");return vl(e,i)}else return Promise.reject(s)});case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VS(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(t,e){return mo(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const MS="http://localhost";class Gr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ch(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:MS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
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
 */function LS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xS(t){const e=ci(li(t)).link,n=e?ci(li(e)).deep_link_id:null,r=ci(li(t)).deep_link_id;return(r?ci(li(r)).link:null)||r||n||e||t}class Nh{constructor(e){var n,r,s,i,o,a;const c=ci(li(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=LS((s=c.mode)!==null&&s!==void 0?s:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xS(e);try{return new Nh(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nh.parseLink(n);return Y(r,"argument-error"),qi._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ry{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class go extends ry{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends go{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends go{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends go{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function wl(t,e){return mo(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Br._fromIdTokenResponse(e,r,s),o=wp(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wp(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ka(e,n,r,s)}}function sy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,i,e,r):i})}async function $S(t,e,n=!1){const r=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function FS(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ji(t,sy(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=kh(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function iy(t,e,n=!1){const r="signIn",s=await sy(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function US(t,e){return iy(ss(t),e)}/**
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
 */function BS(t,e,n){var r;Y(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Y(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function oy(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jS(t,e,n){var r;const s=ss(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Pa(s,i,"signUpPassword");o=wl(s,l)}else o=wl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Pa(s,i,"signUpPassword");return wl(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oy(t),l}),c=await Qr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function HS(t,e,n){return US(Je(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(t),r})}async function qS(t,e){const n=Je(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&BS(n.auth,s,e);const{email:i}=await DS(n.auth,s);i!==t.email&&await t.reload()}function KS(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function WS(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}const Oa="__sak";/**
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
 */class ay{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zS(){const t=gt();return Oh(t)||mc(t)}const GS=1e3,QS=10;class cy extends ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zS()&&fS(),this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cy.type="LOCAL";const YS=cy;/**
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
 */class ly extends ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const uy=ly;/**
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
 */function JS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await JS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Vh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function ZS(t){fn().location.href=t}/**
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
 */function hy(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function eP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nP(){return hy()?self:null}/**
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
 */const dy="firebaseLocalStorageDb",rP=1,Da="firebaseLocalStorage",fy="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function sP(){const t=indexedDB.deleteDatabase(dy);return new _o(t).toPromise()}function _u(){const t=indexedDB.open(dy,rP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:fy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await sP(),e(await _u()))})})}async function Ep(t,e,n){const r=_c(t,!0).put({[fy]:e,value:n});return new _o(r).toPromise()}async function iP(t,e){const n=_c(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Ip(t,e){const n=_c(t,!0).delete(e);return new _o(n).toPromise()}const oP=800,aP=3;class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(nP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eP(),!this.activeServiceWorker)return;this.sender=new XS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await Ep(e,Oa,"1"),await Ip(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_c(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}py.type="LOCAL";const cP=py;new po(3e4,6e4);/**
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
 */function lP(t,e){return e?Cn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uP(t){return iy(t.auth,new Mh(t),t.bypassAuthState)}function hP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),FS(n,new Mh(t),t.bypassAuthState)}async function dP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),$S(n,new Mh(t),t.bypassAuthState)}/**
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
 */class my{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return dP;case"reauthViaPopup":case"reauthViaRedirect":return hP;default:Xt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fP=new po(2e3,1e4);class ws extends my{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fP.get())};e()}}ws.currentPopupAction=null;/**
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
 */const pP="pendingRedirect",ia=new Map;class mP extends my{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await gP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gP(t,e){const n=vP(e),r=yP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _P(t,e){ia.set(t._key(),e)}function yP(t){return Cn(t._redirectPersistence)}function vP(t){return sa(pP,t.config.apiKey,t.name)}async function wP(t,e,n=!1){const r=ss(t),s=lP(r,e),o=await new mP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EP=10*60*1e3;class IP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gy(t);default:return!1}}/**
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
 */async function bP(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const AP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RP=/^https?/;async function CP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bP(t);for(const n of e)try{if(SP(n))return}catch{}Xt(t,"unauthorized-domain")}function SP(t){const e=gu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RP.test(n))return!1;if(AP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PP=new po(3e4,6e4);function bp(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kP(t){return new Promise((e,n)=>{var r,s,i;function o(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(dn(t,"network-request-failed"))},timeout:PP.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=wS("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},ty(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oa=null,e})}let oa=null;function OP(t){return oa=oa||kP(t),oa}/**
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
 */const DP=new po(5e3,15e3),NP="__/auth/iframe",VP="emulator/auth/iframe",MP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xP(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,VP):`https://${t.config.authDomain}/${NP}`,r={apiKey:e.apiKey,appName:t.name,v:Us},s=LP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fo(r).slice(1)}`}async function $P(t){const e=await OP(t),n=fn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:xP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},DP.get());function c(){fn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const FP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UP=500,BP=600,jP="_blank",HP="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qP(t,e,n,r=UP,s=BP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},FP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=gt().toLowerCase();n&&(a=G_(l)?jP:n),z_(l)&&(e=e||HP,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(hS(l)&&a!=="_self")return KP(e||"",a),new Ap(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Ap(h)}function KP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WP="__/auth/handler",zP="emulator/auth/handler",GP=encodeURIComponent("fac");async function Rp(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:s};if(e instanceof ry){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Z0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof go){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${GP}=${encodeURIComponent(c)}`:"";return`${QP(t)}?${fo(a).slice(1)}${l}`}function QP({config:t}){return t.emulator?Ph(t,zP):`https://${t.authDomain}/${WP}`}/**
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
 */const El="webStorageSupport";class YP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uy,this._completeRedirectFn=wP,this._overrideRedirectResult=_P}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,r,gu(),s);return qP(e,o,Vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rp(e,n,r,gu(),s);return ZS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $P(e),r=new IP(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[El];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||Oh()||mc()}}const JP=YP;var Cp="@firebase/auth",Sp="1.3.0";/**
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
 */class XP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ek(t){yn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(t)},l=new yS(r,s,i,c);return RS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new Jt("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new XP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Cp,Sp,ZP(t)),Bt(Cp,Sp,"esm2017")}/**
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
 */const tk=5*60,nk=a_("authIdTokenMaxAge")||tk;let Pp=null;const rk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nk)return;const s=n==null?void 0:n.token;Pp!==s&&(Pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sk(t=wh()){const e=rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AS(t,{popupRedirectResolver:JP,persistence:[cP,YS,uy]}),r=a_("authTokenSyncURL");if(r){const i=rk(r);WS(n,i,()=>i(n.currentUser)),KS(n,o=>i(o))}const s=i_("auth");return s&&CS(n,`http://${s}`),n}ek("Browser");var ik=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Lh=Lh||{},ee=ik||self;function yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ok(t){return Object.prototype.hasOwnProperty.call(t,Il)&&t[Il]||(t[Il]=++ak)}var Il="closure_uid_"+(1e9*Math.random()>>>0),ak=0;function ck(t,e,n){return t.call.apply(t.bind,arguments)}function lk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=ck:dt=lk,dt.apply(null,arguments)}function jo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function _r(){this.s=this.s,this.o=this.o}var uk=0;_r.prototype.s=!1;_r.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uk!=0)&&ok(this)};_r.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var hk=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function Ki(t){return/^[\s\xa0]*$/.test(t)}function vc(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function ln(t){return vc().indexOf(t)!=-1}function $h(t){return $h[" "](t),t}$h[" "]=function(){};function dk(t,e){var n=s1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fk=ln("Opera"),Os=ln("Trident")||ln("MSIE"),yy=ln("Edge"),yu=yy||Os,vy=ln("Gecko")&&!(vc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge"))&&!(ln("Trident")||ln("MSIE"))&&!ln("Edge"),pk=vc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge");function wy(){var t=ee.document;return t?t.documentMode:void 0}var vu;e:{var Tl="",bl=function(){var t=vc();if(vy)return/rv:([^\);]+)(\)|;)/.exec(t);if(yy)return/Edge\/([\d\.]+)/.exec(t);if(Os)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pk)return/WebKit\/(\S+)/.exec(t);if(fk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bl&&(Tl=bl?bl[1]:""),Os){var Al=wy();if(Al!=null&&Al>parseFloat(Tl)){vu=String(Al);break e}}vu=Tl}var wu;if(ee.document&&Os){var Op=wy();wu=Op||parseInt(vu,10)||void 0}else wu=void 0;var mk=wu;function Wi(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vy){e:{try{$h(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.$.h.call(this)}}et(Wi,ft);var gk={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),_k=0;function yk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++_k,this.fa=this.ia=!1}function wc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ey(t){const e={};for(const n in t)e[n]=t[n];return e}const Dp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Iy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Dp.length;i++)n=Dp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Iu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Eu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=_y(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(wc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Iu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Uh="closure_lm_"+(1e6*Math.random()|0),Rl={};function Ty(t,e,n,r,s){if(r&&r.once)return Ay(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ty(t,e[i],n,r,s);return null}return n=Hh(n),t&&t[vo]?t.O(e,n,yo(r)?!!r.capture:!!r,s):by(t,e,n,!1,r,s)}function by(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=yo(s)?!!s.capture:!!s,a=jh(t);if(a||(t[Uh]=a=new Ec(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=wk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)hk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Cy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wk(){function t(n){return e.call(t.src,t.listener,n)}const e=Ek;return t}function Ay(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ay(t,e[i],n,r,s);return null}return n=Hh(n),t&&t[vo]?t.P(e,n,yo(r)?!!r.capture:!!r,s):by(t,e,n,!0,r,s)}function Ry(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ry(t,e[i],n,r,s);else r=yo(r)?!!r.capture:!!r,n=Hh(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Iu(i,n,r,s),-1<n&&(wc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=jh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Iu(e,n,r,s)),(n=-1<t?e[t]:null)&&Bh(n))}function Bh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vo])Eu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Cy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jh(e))?(Eu(n,t),n.h==0&&(n.src=null,e[Uh]=null)):wc(t)}}}function Cy(t){return t in Rl?Rl[t]:Rl[t]="on"+t}function Ek(t,e){if(t.fa)t=!0;else{e=new Wi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bh(t),t=n.call(r,e)}return t}function jh(t){return t=t[Uh],t instanceof Ec?t:null}var Cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hh(t){return typeof t=="function"?t:(t[Cl]||(t[Cl]=function(e){return t.handleEvent(e)}),t[Cl])}function Xe(){_r.call(this),this.i=new Ec(this),this.S=this,this.J=null}et(Xe,_r);Xe.prototype[vo]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){Ry(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(r,t),Iy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ho(o,r,!0,e)&&s}if(o=e.g=t,s=Ho(o,r,!0,e)&&s,s=Ho(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ho(o,r,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wc(n[r]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Eu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var qh=ee.JSON.stringify;class Ik{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Tk(){var t=Kh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bk{constructor(){this.h=this.g=null}add(e,n){const r=Sy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sy=new Ik(()=>new Ak,t=>t.reset());class Ak{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Rk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ck(t){ee.setTimeout(()=>{throw t},0)}let zi,Gi=!1,Kh=new bk,Py=()=>{const t=ee.Promise.resolve(void 0);zi=()=>{t.then(Sk)}};var Sk=()=>{for(var t;t=Tk();){try{t.h.call(t.g)}catch(n){Ck(n)}var e=Sy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gi=!1};function Ic(t,e){Xe.call(this),this.h=t||1,this.g=e||ee,this.j=dt(this.qb,this),this.l=Date.now()}et(Ic,Xe);V=Ic.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Wh(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ic.$.N.call(this),Wh(this),delete this.g};function zh(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function ky(t){t.g=zh(()=>{t.g=null,t.i&&(t.i=!1,ky(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Pk extends _r{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ky(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){_r.call(this),this.h=t,this.g={}}et(Qi,_r);var Np=[];function Oy(t,e,n,r){Array.isArray(n)||(n&&(Np[0]=n.toString()),n=Np);for(var s=0;s<n.length;s++){var i=Ty(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dy(t){Fh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bh(e)},t),t.g={}}Qi.prototype.N=function(){Qi.$.N.call(this),Dy(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tc(){this.g=!0}Tc.prototype.Ea=function(){this.g=!1};function kk(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ok(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nk(t,n)+(r?" "+r:"")})}function Dk(t,e){t.info(function(){return"TIMEOUT: "+e})}Tc.prototype.info=function(){};function Nk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return qh(n)}catch{return e}}var is={},Vp=null;function bc(){return Vp=Vp||new Xe}is.Ta="serverreachability";function Ny(t){ft.call(this,is.Ta,t)}et(Ny,ft);function Yi(t){const e=bc();it(e,new Ny(e))}is.STAT_EVENT="statevent";function Vy(t,e){ft.call(this,is.STAT_EVENT,t),this.stat=e}et(Vy,ft);function bt(t){const e=bc();it(e,new Vy(e,t))}is.Ua="timingevent";function My(t,e){ft.call(this,is.Ua,t),this.size=e}et(My,ft);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ly={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gh(){}Gh.prototype.h=null;function Mp(t){return t.h||(t.h=t.i())}function xy(){}var Eo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qh(){ft.call(this,"d")}et(Qh,ft);function Yh(){ft.call(this,"c")}et(Yh,ft);var Tu;function Rc(){}et(Rc,Gh);Rc.prototype.g=function(){return new XMLHttpRequest};Rc.prototype.i=function(){return{}};Tu=new Rc;function Io(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qi(this),this.P=Vk,t=yu?125:void 0,this.V=new Ic(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $y}function $y(){this.i=null,this.g="",this.h=!1}var Vk=45e3,bu={},Na={};V=Io.prototype;V.setTimeout=function(t){this.P=t};function Au(t,e,n){t.L=1,t.v=Sc(Nn(e)),t.s=n,t.S=!0,Fy(t,null)}function Fy(t,e){t.G=Date.now(),To(t),t.A=Nn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),zy(n.i,"t",r),t.C=0,n=t.l.J,t.h=new $y,t.g=pv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Pk(dt(t.Pa,t,t.g),t.O)),Oy(t.U,t.g,"readystatechange",t.nb),e=t.I?Ey(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yi(),kk(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yu||this.g&&(this.h.h||this.g.ja()||Fp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),Cc(this);var n=this.g.da();this.ca=n;t:if(Uy(this)){var r=Fp(this.g);t="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),bi(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ok(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ki(a)){var l=a;break t}}l=null}if(n=l)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,n);else{this.i=!1,this.o=3,bt(12),kr(this),bi(this);break e}}this.S?(By(this,u,o),yu&&this.i&&u==3&&(Oy(this.U,this.V,"tick",this.mb),this.V.start())):(Es(this.j,this.m,o,null),Ru(this,o)),u==4&&kr(this),this.i&&!this.J&&(u==4?uv(this.l,this):(this.i=!1,To(this)))}else t1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),kr(this),bi(this)}}}catch{}finally{}};function Uy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function By(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Mk(t,n),s==Na){e==4&&(t.o=4,bt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==bu){t.o=4,bt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,s,null),Ru(t,s);Uy(t)&&s!=Na&&s!=bu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nd(e),e.M=!0,bt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),kr(t),bi(t))}V.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.C<e.length&&(Cc(this),By(this,t,e),this.i&&t!=4&&To(this))}};function Mk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Na:(n=Number(e.substring(n,r)),isNaN(n)?bu:(r+=1,r+n>e.length?Na:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,kr(this)};function To(t){t.Y=Date.now()+t.P,jy(t,t.P)}function jy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(dt(t.lb,t),e)}function Cc(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Dk(this.j,this.A),this.L!=2&&(Yi(),bt(17)),kr(this),this.o=2,bi(this)):jy(this,this.Y-t)};function bi(t){t.l.H==0||t.J||uv(t.l,t)}function kr(t){Cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wh(t.V),Dy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ru(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cu(n.i,t))){if(!t.K&&Cu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)La(n),Dc(n);else break e;td(n),bt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=wo(dt(n.ib,n),6e3));if(1>=Yy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Or(n,11)}else if((t.K||n.g==t)&&La(n),!Ki(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jh(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Pe(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=fv(r,r.J?r.pa:null,r.Y),o.K){Jy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Cc(a),To(a)),r.g=o}else cv(r);0<n.j.length&&Nc(n)}else l[0]!="stop"&&l[0]!="close"||Or(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Or(n,7):ed(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Yi(4)}catch{}}function Lk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Hy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xk(t),r=Lk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $k(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jr){this.h=t.h,Va(this,t.j),this.s=t.s,this.g=t.g,Ma(this,t.m),this.l=t.l;var e=t.i,n=new Ji;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lp(this,n),this.o=t.o}else t&&(e=String(t).match(qy))?(this.h=!1,Va(this,e[1]||"",!0),this.s=ui(e[2]||""),this.g=ui(e[3]||"",!0),Ma(this,e[4]),this.l=ui(e[5]||"",!0),Lp(this,e[6]||"",!0),this.o=ui(e[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}jr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hi(e,xp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hi(e,xp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hi(n,n.charAt(0)=="/"?Bk:Uk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hi(n,Hk)),t.join("")};function Nn(t){return new jr(t)}function Va(t,e,n){t.j=n?ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ma(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lp(t,e,n){e instanceof Ji?(t.i=e,qk(t.i,t.h)):(n||(e=hi(e,jk)),t.i=new Ji(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Sc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xp=/[#\/\?@]/g,Uk=/[#\?:]/g,Bk=/[#\?]/g,jk=/[#\?@]/g,Hk=/#/g;function Ji(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yr(t){t.g||(t.g=new Map,t.h=0,t.i&&$k(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ji.prototype;V.add=function(t,e){yr(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ky(t,e){yr(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wy(t,e){return yr(t),e=js(t,e),t.g.has(e)}V.forEach=function(t,e){yr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){yr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){yr(this);let e=[];if(typeof t=="string")Wy(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return yr(this),this.i=null,t=js(this,t),Wy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zy(t,e,n){Ky(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),xh(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qk(t,e){e&&!t.j&&(yr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ky(this,r),zy(this,s,n))},t)),t.j=e}var Kk=class{constructor(t,e){this.g=t,this.map=e}};function Gy(t){this.l=t||Wk,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wk=10;function Qy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yy(t){return t.h?1:t.g?t.g.size:0}function Cu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jh(t,e){t.g?t.g.add(e):t.h=e}function Jy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gy.prototype.cancel=function(){if(this.i=Xy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return xh(t.i)}var zk=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function Gk(){this.g=new zk}function Qk(t,e,n){const r=n||"";try{Hy(t,function(s,i){let o=s;yo(s)&&(o=qh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Yk(t,e){const n=new Tc;if(ee.Image){const r=new Image;r.onload=jo(qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=jo(qo,n,r,"TestLoadImage: error",!1,e),r.onabort=jo(qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=jo(qo,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Pc(t){this.l=t.ec||null,this.j=t.ob||!1}et(Pc,Gh);Pc.prototype.g=function(){return new kc(this.l,this.j)};Pc.prototype.i=function(t){return function(){return t}}({});function kc(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(kc,Xe);var Xh=0;V=kc.prototype;V.open=function(t,e){if(this.readyState!=Xh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=Xh};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Zy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bo(this):Xi(this),this.readyState==3&&Zy(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,bo(this))};V.Ya=function(t){this.g&&(this.response=t,bo(this))};V.ka=function(){this.g&&bo(this)};function bo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Jk=ee.JSON.parse;function Ue(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ev,this.L=this.M=!1}et(Ue,Xe);var ev="",Xk=/^https?$/i,Zk=["POST","PUT"];V=Ue.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tu.g(),this.C=this.u?Mp(this.u):Mp(Tu),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){$p(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=_y(Zk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rv(this),0<this.B&&((this.L=e1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=zh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$p(this,i)}};function e1(t){return Os&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Lh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function $p(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tv(t),Oc(t)}function tv(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Oc(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oc(this,!0)),Ue.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?nv(this):this.kb())};V.kb=function(){nv(this)};function nv(t){if(t.h&&typeof Lh<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)zh(t.La,0,t);else if(it(t,"readystatechange"),un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(qy)[1]||null;!s&&ee.self&&ee.self.location&&(s=ee.self.location.protocol.slice(0,-1)),r=!Xk.test(s?s.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<un(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",tv(t)}}finally{Oc(t)}}}}function Oc(t,e){if(t.g){rv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function rv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function un(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Jk(e)}};function Fp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ev:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function t1(t){const e={};t=(t.g&&2<=un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ki(t[r]))continue;var n=Rk(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}vk(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sv(t){let e="";return Fh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function iv(t){this.Ga=0,this.j=[],this.l=new Tc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,t),this.hb=ti("retryDelaySeedMs",1e4,t),this.eb=ti("forwardChannelMaxRetries",2,t),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gy(t&&t.concurrentRequestLimit),this.Ja=new Gk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=iv.prototype;V.ra=8;V.H=1;function ed(t){if(ov(t),t.H==3){var e=t.W++,n=Nn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Ao(t,n),e=new Io(t,t.l,e),e.L=2,e.v=Sc(Nn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=pv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}dv(t)}function Dc(t){t.g&&(nd(t),t.g.cancel(),t.g=null)}function ov(t){Dc(t),t.u&&(ee.clearTimeout(t.u),t.u=null),La(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Nc(t){if(!Qy(t.i)&&!t.m){t.m=!0;var e=t.Na;zi||Py(),Gi||(zi(),Gi=!0),Kh.add(e,t),t.C=0}}function n1(t,e){return Yy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wo(dt(t.Na,t,e),hv(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Io(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ey(i),Iy(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=av(this,s,e),n=Nn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Ao(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(sv(i)))+"&"+e:this.o&&Zh(n,this.o,i)),Jh(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,Au(s,n,null)):Au(s,n,e),this.H=2}}else this.H==3&&(t?Up(this,t):this.j.length==0||Qy(this.i)||Up(this))};function Up(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Ao(t,r),t.o&&t.s&&Zh(r,t.o,t.s),n=new Io(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=av(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jh(t.i,n),Au(n,r,e)}function Ao(t,e){t.na&&Fh(t.na,function(n,r){Pe(e,r,n)}),t.h&&Hy({},function(n,r){Pe(e,r,n)})}function av(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Qk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function cv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zi||Py(),Gi||(zi(),Gi=!0),Kh.add(e,t),t.A=0}}function td(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wo(dt(t.Ma,t),hv(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,lv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wo(dt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Dc(this),lv(this))};function nd(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function lv(t){t.g=new Io(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Ao(t,e),t.o&&t.s&&Zh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Sc(Nn(e)),n.s=null,n.S=!0,Fy(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Dc(this),td(this),bt(19))};function La(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function uv(t,e){var n=null;if(t.g==e){La(t),nd(t),t.g=null;var r=2}else if(Cu(t.i,e))n=e.F,Jy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=bc(),it(r,new My(r,n)),Nc(t)}else cv(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&n1(t,e)||r==2&&td(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Or(t,5);break;case 4:Or(t,10);break;case 3:Or(t,6);break;default:Or(t,2)}}}function hv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Or(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new jr("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Va(n,"https"),Sc(n)),Yk(n.toString(),r)}else bt(2);t.H=0,t.h&&t.h.za(e),dv(t),ov(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function dv(t){if(t.H=0,t.ma=[],t.h){const e=Xy(t.i);(e.length!=0||t.j.length!=0)&&(kp(t.ma,e),kp(t.ma,t.j),t.i.i.length=0,xh(t.j),t.j.length=0),t.h.ya()}}function fv(t,e,n){var r=n instanceof jr?Nn(n):new jr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ma(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new jr(null);r&&Va(i,r),e&&(i.g=e),s&&Ma(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Ao(t,r),r}function pv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Pc({ob:!0})):new Ue(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function mv(){}V=mv.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function xa(){if(Os&&!(10<=Number(mk)))throw Error("Environmental error: no available transport.")}xa.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Xe.call(this),this.g=new iv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ki(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ki(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}et(Mt,Xe);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=fv(t,null,t.Y),Nc(t)};Mt.prototype.close=function(){ed(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qh(t),t=n);e.j.push(new Kk(e.fb++,t)),e.H==3&&Nc(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,ed(this.g),delete this.g,Mt.$.N.call(this)};function gv(t){Qh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(gv,Qh);function _v(){Yh.call(this),this.status=1}et(_v,Yh);function Hs(t){this.g=t}et(Hs,mv);Hs.prototype.Ba=function(){it(this.g,"a")};Hs.prototype.Aa=function(t){it(this.g,new gv(t))};Hs.prototype.za=function(t){it(this.g,new _v)};Hs.prototype.ya=function(){it(this.g,"b")};function r1(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(Zt,r1);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Sl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Sl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Sl(this,r),s=0;break}}this.h=s,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var s1={};function rd(t){return-128<=t&&128>t?dk(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function hn(t){if(isNaN(t)||!isFinite(t))return Rs;if(0>t)return nt(hn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Su;return new Ie(e,0)}function yv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(yv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=hn(Math.pow(e,8)),r=Rs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=hn(Math.pow(e,i)),r=r.R(i).add(hn(o))):(r=r.R(n),r=r.add(hn(o)))}return r}var Su=4294967296,Rs=rd(0),Pu=rd(1),Bp=rd(16777216);V=Ie.prototype;V.ea=function(){if(Ft(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Su+r)*e,e*=Su}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(Ft(this))return"-"+nt(this).toString(t);for(var e=hn(Math.pow(t,6)),n=this,r="";;){var s=Fa(n,e).g;n=$a(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}V.X=function(t){return t=$a(this,t),Ft(t)?-1:Sn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(Pu)}V.abs=function(){return Ft(this)?nt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function $a(t,e){return t.add(nt(e))}V.R=function(t){if(Sn(this)||Sn(t))return Rs;if(Ft(this))return Ft(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Ft(t))return nt(this.R(nt(t)));if(0>this.X(Bp)&&0>t.X(Bp))return hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ko(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ko(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ko(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ko(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function Ko(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ni(t,e){this.g=t,this.h=e}function Fa(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new ni(Rs,Rs);if(Ft(t))return e=Fa(nt(t),e),new ni(nt(e.g),nt(e.h));if(Ft(e))return e=Fa(t,nt(e)),new ni(nt(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pu,r=e;0>=r.X(t);)n=jp(n),r=jp(r);var s=fs(n,1),i=fs(r,1);for(r=fs(r,2),n=fs(n,2);!Sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=fs(r,1),n=fs(n,1)}return e=$a(t,s.R(e)),new ni(s,e)}for(s=Rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=hn(n),o=i.R(e);Ft(o)||0<o.X(t);)n-=r,i=hn(n),o=i.R(e);Sn(i)&&(i=Pu),s=s.add(i),t=$a(t,o)}return new ni(s,t)}V.gb=function(t){return Fa(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function jp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function fs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}xa.prototype.createWebChannel=xa.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Ac.NO_ERROR=0;Ac.TIMEOUT=8;Ac.HTTP_ERROR=6;Ly.COMPLETE="complete";xy.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=hn;Ie.fromString=yv;var i1=function(){return new xa},o1=function(){return bc()},Pl=Ac,a1=Ly,c1=is,Hp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wo=xy,l1=Ue,u1=Zt,Cs=Ie;const qp="@firebase/firestore";/**
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
 */const Yr=new dc("@firebase/firestore");function ri(){return Yr.logLevel}function j(t,...e){if(Yr.logLevel<=pe.DEBUG){const n=e.map(sd);Yr.debug(`Firestore (${qs}): ${t}`,...n)}}function Vn(t,...e){if(Yr.logLevel<=pe.ERROR){const n=e.map(sd);Yr.error(`Firestore (${qs}): ${t}`,...n)}}function Ds(t,...e){if(Yr.logLevel<=pe.WARN){const n=e.map(sd);Yr.warn(`Firestore (${qs}): ${t}`,...n)}}function sd(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Oe(t,e){t||Z()}function ie(t,e){return t}/**
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
 */class vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class d1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class f1{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ct(e)}}class p1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class m1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new p1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new g1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function y1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=y1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Me(0,0))}static max(){return new re(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Zi{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const v1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Zi{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return v1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ne.fromString(e))}static fromName(e){return new G(Ne.fromString(e).popFirst(5))}static empty(){return new G(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ne(e.slice()))}}function w1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new ur(s,G.empty(),e)}function E1(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(re.min(),G.empty(),-1)}static max(){return new ur(re.max(),G.empty(),-1)}}function I1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const T1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ro(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==T1)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class id{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}id.ae=-1;function Vc(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function A1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wp(this.data.getIterator())}getIteratorFrom(e){return new Wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new pt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iv("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const R1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=R1.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */function od(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ad(t){const e=t.mapValue.fields.__previous_value__;return od(e)?ad(e):e}function eo(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class C1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?od(t)?4:S1(t)?9007199254740991:10:Z()}function vn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),a=hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jr(s.bytesValue).isEqual(Jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?Ua(o)===Ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Kp(o)!==Kp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!vn(o[c],a[c])))return!1;return!0}(t,e);default:return Z()}}function no(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return zp(t.timestampValue,e.timestampValue);case 4:return zp(eo(t),eo(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Jr(i),c=Jr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ve(a[l],c[l]);if(u!==0)return u}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(qe(i.latitude),qe(o.latitude));return a!==0?a:ve(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Vs(a[l],c[l]);if(u)return u}return ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Go.mapValue&&o===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(o===Go.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ve(c[h],u[h]);if(d!==0)return d;const p=Vs(a[c[h]],l[u[h]]);if(p!==0)return p}return ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function zp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=hr(t),r=hr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Ms(t){return ku(t)}function ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ku(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ku(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function Ou(t){return!!t&&"integerValue"in t}function cd(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function Ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function S1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ai(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Ai(this.value))}}function Tv(t){const e=[];return os(t.fields,(n,r)=>{const s=new ht([n]);if(aa(r)){const i=Tv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
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
 */class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function P1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bv{}class ze extends bv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O1(e,n,r):n==="array-contains"?new V1(e,r):n==="in"?new M1(e,r):n==="not-in"?new L1(e,r):n==="array-contains-any"?new x1(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new D1(e,r):new N1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends bv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new wn(e,n)}matches(e){return Av(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Av(t){return t.op==="and"}function Rv(t){return k1(t)&&Av(t)}function k1(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Du(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(Rv(t))return t.filters.map(e=>Du(e)).join(",");{const e=t.filters.map(n=>Du(n)).join(",");return`${t.op}(${e})`}}function Cv(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof wn?function(r,s){return s instanceof wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Cv(o,s.filters[a]),!0):!1}(t,e):void Z()}function Sv(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(Sv).join(" ,")+"}"}(t):"Filter"}class O1 extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class D1 extends ze{constructor(e,n){super(e,"in",n),this.keys=Pv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N1 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Pv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class V1 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cd(n)&&no(n.arrayValue,this.value)}}class M1 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class L1 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class x1 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
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
 */class $1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Xp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $1(t,e,n,r,s,i,o)}function ld(t){const e=ie(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Du(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.he=n}return e.he}function ud(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}function Nu(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Mc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function F1(t,e,n,r,s,i,o,a){return new Mc(t,e,n,r,s,i,o,a)}function hd(t){return new Mc(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function B1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function j1(t){return t.collectionGroup!==null}function Ci(t){const e=ie(t);if(e.Pe===null){e.Pe=[];const n=B1(e),r=U1(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ri(n)),e.Pe.push(new Ri(ht.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ri(ht.keyField(),i))}}}return e.Pe}function pn(t){const e=ie(t);return e.Ie||(e.Ie=H1(e,Ci(t))),e.Ie}function H1(t,e){if(t.limitType==="F")return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ri(s.field,i)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vu(t,e,n){return new Mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return ud(pn(t),pn(e))&&t.limitType===e.limitType}function kv(t){return`${ld(pn(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Sv(s)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Yp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,a,c){const l=Yp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ci(r),s))}(t,e)}function q1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ov(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=K1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function K1(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Vs(c,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
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
 */const W1=new xe(G.comparator);function Mn(){return W1}const Dv=new xe(G.comparator);function di(...t){let e=Dv;for(const n of t)e=e.insert(n.key,n);return e}function Nv(t){let e=Dv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Si()}function Vv(){return Si()}function Si(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const z1=new xe(G.comparator),G1=new pt(G.comparator);function he(...t){let e=G1;for(const n of t)e=e.add(n);return e}const Q1=new pt(ve);function Y1(){return Q1}/**
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
 */function Mv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Lv(t){return{integerValue:""+t}}function J1(t,e){return A1(e)?Lv(e):Mv(t,e)}/**
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
 */class $c{constructor(){this._=void 0}}function X1(t,e,n){return t instanceof ja?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&od(i)&&(i=ad(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ro?$v(t,e):t instanceof so?Fv(t,e):function(s,i){const o=xv(s,i),a=em(o)+em(s.Te);return Ou(o)&&Ou(s.Te)?Lv(a):Mv(s.serializer,a)}(t,e)}function Z1(t,e,n){return t instanceof ro?$v(t,e):t instanceof so?Fv(t,e):n}function xv(t,e){return t instanceof Ha?function(r){return Ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ja extends $c{}class ro extends $c{constructor(e){super(),this.elements=e}}function $v(t,e){const n=Uv(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class so extends $c{constructor(e){super(),this.elements=e}}function Fv(t,e){let n=Uv(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Ha extends $c{constructor(e,n){super(),this.serializer=e,this.Te=n}}function em(t){return qe(t.integerValue||t.doubleValue)}function Uv(t){return cd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ro&&s instanceof ro||r instanceof so&&s instanceof so?Ns(r.elements,s.elements,vn):r instanceof Ha&&s instanceof Ha?vn(r.Te,s.Te):r instanceof ja&&s instanceof ja}(t.transform,e.transform)}class tO{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ca(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function Bv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dd(t.key,jt.none()):new So(t.key,t.data,jt.none());{const n=t.data,r=Ct.empty();let s=new pt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new Dt(s.toArray()),jt.none())}}function nO(t,e,n){t instanceof So?function(s,i,o){const a=s.value.clone(),c=nm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!ca(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=nm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,r){return t instanceof So?function(i,o,a,c){if(!ca(i.precondition,o))return a;const l=i.value.clone(),u=rm(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,a,c){if(!ca(i.precondition,o))return a;const l=rm(i.fieldTransforms,c,o),u=o.data;return u.setAll(jv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ca(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xv(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>eO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends Fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nm(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Z1(o,a,n[s]))}return r}function rm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,X1(i,o,e))}return r}class dd extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sO extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Bv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>tm(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>tm(n,r))}}class fd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return z1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fd(e,n,r,s)}}/**
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
 */class oO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,me;function cO(t){switch(t){default:return Z();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Hv(t){if(t===void 0)return Vn("GRPC error has no .code"),b.UNKNOWN;switch(t){case He.OK:return b.OK;case He.CANCELLED:return b.CANCELLED;case He.UNKNOWN:return b.UNKNOWN;case He.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case He.INTERNAL:return b.INTERNAL;case He.UNAVAILABLE:return b.UNAVAILABLE;case He.UNAUTHENTICATED:return b.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case He.NOT_FOUND:return b.NOT_FOUND;case He.ALREADY_EXISTS:return b.ALREADY_EXISTS;case He.PERMISSION_DENIED:return b.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case He.ABORTED:return b.ABORTED;case He.OUT_OF_RANGE:return b.OUT_OF_RANGE;case He.UNIMPLEMENTED:return b.UNIMPLEMENTED;case He.DATA_LOSS:return b.DATA_LOSS;default:return Z()}}(me=He||(He={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lO(){return new TextEncoder}/**
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
 */const uO=new Cs([4294967295,4294967295],0);function sm(t){const e=lO().encode(t),n=new u1;return n.update(e),new Uint8Array(n.digest())}function im(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([s,i],0)]}class pd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fi(`Invalid padding: ${n}`);if(r<0)throw new fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Cs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Cs.fromNumber(r)));return s.compare(uO)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=sm(e),[r,s]=im(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(re.min(),s,new xe(ve),Mn(),he())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,he(),he(),he())}}/**
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
 */class la{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class qv{constructor(e,n){this.targetId=e,this.ye=n}}class Kv{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class om{constructor(){this.we=0,this.Se=cm(),this.be=_t.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=he(),n=he(),r=he();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Po(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=cm()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class hO{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Mn(),this.Ue=am(),this.We=new xe(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Nu(i))if(r===0){const o=new G(i.path);this.je(n,o,lt.newNoDocument(o,re.min()))}else Oe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(c){if(c instanceof Iv)return Ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new pd(o,s,i)}catch(c){return Ds(c instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Nu(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,lt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=he();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Uc(e,n,this.We,this.$e,r);return this.$e=Mn(),this.Ue=am(),this.We=new xe(ve),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new om,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new pt(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new om),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function am(){return new xe(G.comparator)}function cm(){return new xe(G.comparator)}const dO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pO=(()=>({and:"AND",or:"OR"}))();class mO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gO(t,e){return qa(t,e.toTimestamp())}function mn(t){return Oe(!!t),re.fromTimestamp(function(n){const r=hr(n);return new Me(r.seconds,r.nanos)}(t))}function md(t,e){return function(r){return new Ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function zv(t){const e=Ne.fromString(t);return Oe(Jv(e)),e}function Lu(t,e){return md(t.databaseId,e.path)}function kl(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Gv(n))}function xu(t,e){return md(t.databaseId,e)}function _O(t){const e=zv(t);return e.length===4?Ne.emptyPath():Gv(e)}function $u(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gv(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lm(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function yO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:Hv(l.code);return new K(u,l.message||"")}(o);n=new Kv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):re.min(),a=new Ct({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new la(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kl(t,r.document),i=r.readTime?mn(r.readTime):re.min(),o=lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new la([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kl(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aO(s,i),a=r.targetId;n=new qv(a,o)}}return n}function vO(t,e){let n;if(e instanceof So)n={update:lm(t,e.key,e.value)};else if(e instanceof dd)n={delete:Lu(t,e.key)};else if(e instanceof vr)n={update:lm(t,e.key,e.data),updateMask:SO(e.fieldMask)};else{if(!(e instanceof sO))return Z();n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function wO(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(re.min())&&(o=mn(i)),new tO(o,s.transformResults||[])}(n,e))):[]}function EO(t,e){return{documents:[xu(t,e.path)]}}function IO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=xu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Yv(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ys(h.field),direction:AO(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Mu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function TO(t){let e=_O(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Qv(h);return d instanceof wn&&Rv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Ri(vs(y.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Ba(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Ba(p,d)}(n.endAt)),F1(e,s,o,i,a,"F",c,l)}function bO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>Qv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function AO(t){return dO[t]}function RO(t){return fO[t]}function CO(t){return pO[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return ht.fromServerFormat(t.fieldPath)}function Yv(t){return t instanceof ze?function(n){if(n.op==="=="){if(Qp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:RO(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(s=>Yv(s));return r.length===1?r[0]:{compositeFilter:{op:CO(n.op),filters:r}}}(t):Z()}function SO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class PO{constructor(e){this.ht=e}}function kO(t){const e=TO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vu(e,e.limit,"L"):e}/**
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
 */class OO{constructor(){this.an=new DO}addToCollectionParentIndex(e,n){return this.an.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ur.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class DO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(Ne.comparator)).toArray()}}/**
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
 */class NO{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class MO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pi(r.mutation,s,Dt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=di();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Mn();const o=Si(),a=function(){return Si()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof vr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Pi(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new VO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Si();let s=new xe((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vv();u.forEach(d=>{if(!i.has(d)){const p=Bv(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):j1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Dr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:Nv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Mc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,lt.newInvalidDocument(u)))});let a=di();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Pi(u.mutation,l,Dt.empty(),Me.now()),xc(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class LO{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return R.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:kO(s.bundledQuery),readTime:mn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class xO{constructor(){this.overlays=new xe(G.comparator),this.Pr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Dr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oO(n,r));let i=this.Pr.get(n);i===void 0&&(i=he(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class gd{constructor(){this.Ir=new pt(Qe.dr),this.Tr=new pt(Qe.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Qe(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Ne([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new G(new Ne([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=he();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return G.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
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
 */class $O{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new pt(Qe.dr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(ve);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new G(i),0);let a=new pt(ve);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),R.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return R.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Sr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FO{constructor(e){this.Fr=e,this.docs=function(){return new xe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||I1(E1(u),r)<=0||(s.has(u.key)||xc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Mr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UO(this)}getSize(e){return R.resolve(this.size)}}class UO extends NO{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class BO{constructor(e){this.persistence=e,this.Or=new Ks(n=>ld(n),ud),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Nr=0,this.Br=new gd,this.targetCount=0,this.Lr=Ls.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),R.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Qn(n),R.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Br.containsKey(n))}}/**
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
 */class jO{constructor(e,n){this.kr={},this.overlays={},this.qr=new id(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new BO(this),this.indexManager=new OO,this.remoteDocumentCache=function(s){return new FO(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new PO(n),this.Ur=new LO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new $O(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new HO(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return R.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class HO extends b1{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.jr=new gd,this.Hr=null}static Jr(e){return new _d(e)}get Yr(){if(this.Hr)return this.Hr;throw Z()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),R.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Yr,r=>{const s=G.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return R.or([()=>R.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class yd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yd(e,n.fromCache,r,s)}}/**
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
 */class qO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KO{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qO;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(ri()<=pe.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),R.resolve()):(ri()<=pe.DEBUG&&j("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(ri()<=pe.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):R.resolve())}Hi(e,n){if(Zp(n))return R.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vu(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Vu(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Zp(n)||s.isEqual(re.min())?R.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?R.resolve(null):(ri()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.ts(e,o,n,w1(s,-1)).next(a=>a))})}Xi(e,n){let r=new pt(Ov(e));return n.forEach((s,i)=>{xc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return ri()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",_s(n)),this.ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class WO{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new xe(ve),this.ss=new Ks(i=>ld(i),ud),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MO(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function zO(t,e,n,r){return new WO(t,e,n,r)}async function Xv(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function GO(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=R.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(T=>{const I=l.docVersions.get(y);Oe(I!==null),T.version.compareTo(I)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zv(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function QO(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(_t.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,I,P){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let c=Mn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(YO(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(re.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function YO(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function JO(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XO(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Fu(t,e,n){const r=ie(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Co(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function um(t,e,n){const r=ie(t);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ie(c),d=h.ss.get(u);return d!==void 0?R.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:he())).next(a=>(ZO(r,q1(e),a),{documents:a,Ps:i})))}function ZO(t,e,n){let r=t.os.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class hm{constructor(){this.activeTargetIds=Y1()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eD{constructor(){this.ro=new hm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tD{so(e){}shutdown(){}}/**
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
 */const nD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rD{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const at="WebChannelConnection";class sD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Ol(),c=this.Do(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ds("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=nD[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Ol();return new Promise((o,a)=>{const c=new l1;c.setWithCredentials(!0),c.listenOnce(a1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Pl.NO_ERROR:const u=c.getResponseJson();j(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Pl.TIMEOUT:j(at,`RPC '${e}' ${i} timed out`),a(new K(b.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const h=c.getStatus();if(j(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(I){const P=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(P)>=0?P:b.UNKNOWN}(p.status);a(new K(y,p.message))}else a(new K(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(b.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);j(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Ol(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i1(),a=o1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(at,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new rD({ho:I=>{p?j(at,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(d||(j(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),j(at,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},Po:()=>h.close()}),T=(I,P,x)=>{I.listen(P,D=>{try{x(D)}catch(J){setTimeout(()=>{throw J},0)}})};return T(h,Wo.EventType.OPEN,()=>{p||j(at,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Wo.EventType.CLOSE,()=>{p||(p=!0,j(at,`RPC '${e}' stream ${s} transport closed`),y.mo())}),T(h,Wo.EventType.ERROR,I=>{p||(p=!0,Ds(at,`RPC '${e}' stream ${s} transport errored:`,I),y.mo(new K(b.UNAVAILABLE,"The operation could not be completed")))}),T(h,Wo.EventType.MESSAGE,I=>{var P;if(!p){const x=I.data[0];Oe(!!x);const D=x,J=D.error||((P=D[0])===null||P===void 0?void 0:P.error);if(J){j(at,`RPC '${e}' stream ${s} received error:`,J);const $=J.status;let _e=function(oe){const de=He[oe];if(de!==void 0)return Hv(de)}($),Ce=J.message;_e===void 0&&(_e=b.INTERNAL,Ce="Unknown error status: "+$+" with message "+J.message),p=!0,y.mo(new K(_e,Ce)),h.close()}else j(at,`RPC '${e}' stream ${s} received:`,x),y.fo(x)}}),T(a,c1.STAT_EVENT,I=>{I.stat===Hp.PROXY?j(at,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===Hp.NOPROXY&&j(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Dl(){return typeof document<"u"?document:null}/**
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
 */function Bc(t){return new mO(t,!0)}/**
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
 */class ew{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class tw{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new ew(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new K(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iD extends tw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=yO(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?mn(o.readTime):re.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=$u(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Nu(c)?{documents:EO(i,c)}:{query:IO(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Wv(i,o.resumeToken);const l=Mu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=qa(i,o.snapshotVersion.toTimestamp());const l=Mu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=bO(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=$u(this.serializer),n.removeTarget=e,this.n_(n)}}class oD extends tw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=wO(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.T_(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=$u(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vO(this.serializer,r))};this.n_(n)}}/**
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
 */class aD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(b.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(b.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class cD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class lD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{as(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ie(c);l.F_.add(4),await ko(l),l.O_.set("Unknown"),l.F_.delete(4),await jc(l)}(this))})}),this.O_=new cD(r,s)}}async function jc(t){if(as(t))for(const e of t.M_)await e(!0)}async function ko(t){for(const e of t.M_)await e(!1)}function nw(t,e){const n=ie(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Ed(n)?wd(n):Ws(n).Yo()&&vd(n,e))}function rw(t,e){const n=ie(t),r=Ws(n);n.v_.delete(e),r.Yo()&&sw(n,e),n.v_.size===0&&(r.Yo()?r.e_():as(n)&&n.O_.set("Unknown"))}function vd(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).l_(e)}function sw(t,e){t.N_.Le(e),Ws(t).h_(e)}function wd(t){t.N_=new hO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.O_.y_()}function Ed(t){return as(t)&&!Ws(t).Jo()&&t.v_.size>0}function as(t){return ie(t).F_.size===0}function iw(t){t.N_=void 0}async function uD(t){t.v_.forEach((e,n)=>{vd(t,e)})}async function hD(t,e){iw(t),Ed(t)?(t.O_.b_(e),wd(t)):t.O_.set("Unknown")}async function dD(t,e,n){if(t.O_.set("Online"),e instanceof Kv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ka(t,r)}else if(e instanceof la?t.N_.Ge(e):e instanceof qv?t.N_.Xe(e):t.N_.He(e),!n.isEqual(re.min()))try{const r=await Zv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),sw(i,c);const h=new er(u.target,c,l,u.sequenceNumber);vd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ka(t,r)}}async function Ka(t,e,n){if(!Co(e))throw e;t.F_.add(1),await ko(t),t.O_.set("Offline"),n||(n=()=>Zv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await jc(t)})}function ow(t,e){return e().catch(n=>Ka(t,n,e))}async function Hc(t){const e=ie(t),n=dr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;fD(e);)try{const s=await JO(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,pD(e,s)}catch(s){await Ka(e,s)}aw(e)&&cw(e)}function fD(t){return as(t)&&t.C_.length<10}function pD(t,e){t.C_.push(e);const n=dr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function aw(t){return as(t)&&!dr(t).Jo()&&t.C_.length>0}function cw(t){dr(t).start()}async function mD(t){dr(t).A_()}async function gD(t){const e=dr(t);for(const n of t.C_)e.d_(n.mutations)}async function _D(t,e,n){const r=t.C_.shift(),s=fd.from(r,e,n);await ow(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hc(t)}async function yD(t,e){e&&dr(t).I_&&await async function(r,s){if(function(o){return cO(o)&&o!==b.ABORTED}(s.code)){const i=r.C_.shift();dr(r).Xo(),await ow(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hc(r)}}(t,e),aw(t)&&cw(t)}async function fm(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=as(n);n.F_.add(3),await ko(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await jc(n)}async function vD(t,e){const n=ie(t);e?(n.F_.delete(2),await jc(n)):e||(n.F_.add(2),await ko(n),n.O_.set("Unknown"))}function Ws(t){return t.B_||(t.B_=function(n,r,s){const i=ie(n);return i.V_(),new iD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:uD.bind(null,t),Eo:hD.bind(null,t),c_:dD.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Ed(t)?wd(t):t.O_.set("Unknown")):(await t.B_.stop(),iw(t))})),t.B_}function dr(t){return t.L_||(t.L_=function(n,r,s){const i=ie(n);return i.V_(),new oD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:mD.bind(null,t),Eo:yD.bind(null,t),E_:gD.bind(null,t),T_:_D.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Hc(t)):(await t.L_.stop(),t.C_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Id{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Id(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Td(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Co(t))return new K(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class pm{constructor(){this.k_=new xe(G.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Z():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wD{constructor(){this.Q_=void 0,this.listeners=[]}}class ED{constructor(){this.queries=new Ks(e=>kv(e),Lc),this.onlineState="Unknown",this.K_=new Set}}async function lw(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new wD),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Td(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&bd(n)}async function uw(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ID(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&bd(n)}function TD(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function bd(t){t.K_.forEach(e=>{e.next()})}class hw{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class dw{constructor(e){this.key=e}}class fw{constructor(e){this.key=e}}class bD{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=he(),this.mutatedKeys=he(),this.ua=Ov(e),this.ca=new Ss(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new pm,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=xc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==T&&(r.track({type:3,doc:p}),I=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.ua(p,c)>0||l&&this.ua(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,p){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return y(d)-y(p)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new xs(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new pm,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=he(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new fw(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new dw(r))}),n}Ra(e){this.oa=e.Ps,this.aa=he();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return xs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class AD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RD{constructor(e){this.key=e,this.ma=!1}}class CD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ks(a=>kv(a),Lc),this.pa=new Map,this.ya=new Set,this.wa=new xe(G.comparator),this.Sa=new Map,this.ba=new gd,this.Da={},this.Ca=new Map,this.va=Ls.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function SD(t,e){const n=$D(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await XO(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await PD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&nw(n.remoteStore,o)}return s}async function PD(t,e,n,r,s){t.Ma=(h,d,p)=>async function(T,I,P,x){let D=I.view.ha(P);D.es&&(D=await um(T.localStore,I.query,!1).then(({documents:_e})=>I.view.ha(_e,D)));const J=x&&x.targetChanges.get(I.targetId),$=I.view.applyChanges(D,T.isPrimaryClient,J);return gm(T,I.targetId,$.Ea),$.snapshot}(t,h,d,p);const i=await um(t.localStore,e,!0),o=new bD(e,i.Ps),a=o.ha(i.documents),c=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);gm(t,n,l.Ea);const u=new AD(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function kD(t,e){const n=ie(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Lc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rw(n.remoteStore,r.targetId),Uu(n,r.targetId)}).catch(Ro)):(Uu(n,r.targetId),await Fu(n.localStore,r.targetId,!0))}async function OD(t,e,n){const r=FD(t);try{const s=await function(o,a){const c=ie(o),l=Me.now(),u=a.reduce((p,y)=>p.add(y.key),he());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Mn(),T=he();return c._s.getEntries(p,u).next(I=>{y=I,y.forEach((P,x)=>{x.isValidDocument()||(T=T.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(I=>{h=I;const P=[];for(const x of a){const D=rO(x,h.get(x.key).overlayedDocument);D!=null&&P.push(new vr(x.key,D,Tv(D.value.mapValue),jt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(I=>{d=I;const P=I.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,I.batchId,P)})}).then(()=>({batchId:d.batchId,changes:Nv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new xe(ve)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Oo(r,s.changes),await Hc(r.remoteStore)}catch(s){const i=Td(s,"Failed to persist write");n.reject(i)}}async function pw(t,e){const n=ie(t);try{const r=await QO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Oe(o.ma):s.removedDocuments.size>0&&(Oe(o.ma),o.ma=!1))}),await Oo(n,r,e)}catch(r){await Ro(r)}}function mm(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ie(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&bd(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DD(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new xe(G.comparator);o=o.insert(i,lt.newNoDocument(i,re.min()));const a=he().add(i),c=new Uc(re.min(),new Map,new xe(ve),o,a);await pw(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Ad(r)}else await Fu(r.localStore,e,!1).then(()=>Uu(r,e,n)).catch(Ro)}async function ND(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await GO(n.localStore,e);gw(n,r,null),mw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oo(n,s)}catch(s){await Ro(s)}}async function VD(t,e,n){const r=ie(t);try{const s=await function(o,a){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);gw(r,e,n),mw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oo(r,s)}catch(s){await Ro(s)}}function mw(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function gw(t,e,n){const r=ie(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||_w(t,r)})}function _w(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(rw(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Ad(t))}function gm(t,e,n){for(const r of n)r instanceof dw?(t.ba.addReference(r.key,e),MD(t,r)):r instanceof fw?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||_w(t,r.key)):Z()}function MD(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ya.add(r),Ad(t))}function Ad(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new G(Ne.fromString(e)),r=t.va.next();t.Sa.set(r,new RD(n)),t.wa=t.wa.insert(n,r),nw(t.remoteStore,new er(pn(hd(n.path)),r,"TargetPurposeLimboResolution",id.ae))}}async function Oo(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=yd.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=ie(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Co(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(d,T)}}}(r.localStore,i))}async function LD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Xv(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new K(b.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oo(n,r.cs)}}function xD(t,e){const n=ie(t),r=n.Sa.get(e);if(r&&r.ma)return he().add(r.key);{let s=he();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function $D(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DD.bind(null,e),e.fa.c_=ID.bind(null,e.eventManager),e.fa.xa=TD.bind(null,e.eventManager),e}function FD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ND.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class _m{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zO(this.persistence,new KO,e.initialUser,this.serializer)}createPersistence(e){return new jO(_d.Jr,this.serializer)}createSharedClientState(e){return new eD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LD.bind(null,this.syncEngine),await vD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ED}()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=function(i){return new sD(i)}(e.databaseInfo);return function(i,o,a,c){return new aD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new lD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mm(this.syncEngine,n,0),function(){return dm.C()?new dm:new tD}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new CD(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);j("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await ko(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class yw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=wv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Td(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HD(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>fm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>fm(e.remoteStore,i)),t._onlineComponents=e}function jD(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jD(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Nl(t,new _m)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Nl(t,new _m);return t._offlineComponents}async function vw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await ym(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await ym(t,new UD))),t._onlineComponents}function qD(t){return vw(t).then(e=>e.syncEngine)}async function ww(t){const e=await vw(t),n=e.eventManager;return n.onListen=SD.bind(null,e.syncEngine),n.onUnlisten=kD.bind(null,e.syncEngine),n}function KD(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new yw({next:d=>{o.enqueueAndForget(()=>uw(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new K(b.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hw(hd(a.path),u,{includeMetadataChanges:!0,Z_:!0});return lw(i,h)}(await ww(t),t.asyncQueue,e,n,r)),r.promise}function WD(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new yw({next:d=>{o.enqueueAndForget(()=>uw(i,h)),d.fromCache&&c.source==="server"?l.reject(new K(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hw(a,u,{includeMetadataChanges:!0,Z_:!0});return lw(i,h)}(await ww(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ew(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function Iw(t,e,n){if(!n)throw new K(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zD(t,e,n,r){if(e===!0&&r===!0)throw new K(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wm(t){if(!G.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Em(t){if(G.isDocumentKey(t))throw new K(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new K(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Im{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ew((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new h1;switch(r.type){case"firstParty":return new m1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vm.get(n);r&&(j("ComponentProvider","Removing Datastore"),vm.delete(n),r.terminate())}(this),Promise.resolve()}}function GD(t,e,n,r={}){var s;const i=(t=en(t,qc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ct.MOCK_USER;else{a=K0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new K(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(l)}t._authCredentials=new d1(new vv(a,c))}}/**
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
 */class Kc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class ir extends Kc{constructor(e,n,r){super(e,n,hd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new G(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Cd(t,e,...n){if(t=Je(t),Iw("collection","path",e),t instanceof qc){const r=Ne.fromString(e,...n);return Em(r),new ir(t,null,r)}{if(!(t instanceof Ot||t instanceof ir))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Em(r),new ir(t.firestore,null,r)}}function cs(t,e,...n){if(t=Je(t),arguments.length===1&&(e=wv.V()),Iw("doc","path",e),t instanceof qc){const r=Ne.fromString(e,...n);return wm(r),new Ot(t,null,new G(r))}{if(!(t instanceof Ot||t instanceof ir))throw new K(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return wm(r),new Ot(t.firestore,t instanceof ir?t.converter:null,new G(r))}}/**
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
 */class QD{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new ew(this,"async_queue_retry"),this.ou=()=>{const n=Dl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new kn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Co(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Id.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&Z()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class ls extends qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new QD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tw(this),this._firestoreClient.terminate()}}function YD(t,e){const n=typeof t=="object"?t:wh(),r=typeof t=="string"?t:e||"(default)",s=rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=H0("firestore");i&&GD(s,...i)}return s}function Sd(t){return t._firestoreClient||Tw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tw(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new C1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ew(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new BD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Pd{constructor(e){this._methodName=e}}/**
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
 */class kd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const JD=/^__.*__$/;class XD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class bw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Aw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Wa(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Aw(this.Tu)&&JD.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class ZD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bc(e)}wu(e,n,r,s=!1){return new Od({Tu:e,methodName:n,yu:r,path:ht.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dd(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new ZD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rw(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);Nd("Data must be an object, but it was:",o,r);const a=Cw(r,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Bu(e,h,n);if(!o.contains(d))throw new K(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pw(u,d)||u.push(d)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new XD(new Ct(a),c,l)}class zc extends Pd{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function eN(t,e,n,r){const s=t.wu(1,e,n);Nd("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();os(r,(c,l)=>{const u=Vd(e,c,n);l=Je(l);const h=s.mu(u);if(l instanceof zc)i.push(u);else{const d=Gc(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Dt(i);return new bw(o,a,s.fieldTransforms)}function tN(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[Bu(e,r,n)],c=[s];if(i.length%2!=0)throw new K(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Bu(e,i[d])),c.push(i[d+1]);const l=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!Pw(l,a[d])){const p=a[d];let y=c[d];y=Je(y);const T=o.mu(p);if(y instanceof zc)l.push(p);else{const I=Gc(y,T);I!=null&&(l.push(p),u.set(p,I))}}const h=new Dt(l);return new bw(u,h,o.fieldTransforms)}function Gc(t,e){if(Sw(t=Je(t)))return Nd("Unsupported field value:",e,t),Cw(t,e);if(t instanceof Pd)return function(r,s){if(!Aw(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Gc(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof kd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:Wv(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:md(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Rd(r)}`)}(t,e)}function Cw(t,e){const n={};return Ev(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=Gc(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof kd||t instanceof $s||t instanceof Ot||t instanceof Pd)}function Nd(t,e,n){if(!Sw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Rd(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Bu(t,e,n){if((e=Je(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return Vd(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const nN=new RegExp("[~\\*/\\[\\]]");function Vd(t,e,n){if(e.search(nN)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(b.INVALID_ARGUMENT,a+t+c)}function Pw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ow("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rN extends kw{data(){return super.data()}}function Ow(t,e){return typeof e=="string"?Vd(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
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
 */function sN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iN{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new kd(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ad(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Oe(Jv(r));const s=new to(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nw extends kw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ow("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends Nw{data(e={}){return super.data(e)}}class oN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:aN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function Vw(t){t=en(t,Ot);const e=en(t.firestore,ls);return KD(Sd(e),t._key).then(n=>hN(e,t,n))}class Mw extends iN{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Lw(t){t=en(t,Kc);const e=en(t.firestore,ls),n=Sd(e),r=new Mw(e);return sN(t._query),WD(n,t._query).then(s=>new oN(e,r,t,s))}function cN(t,e,n){t=en(t,Ot);const r=en(t.firestore,ls),s=Dw(t.converter,e,n);return Qc(r,[Rw(Dd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function xw(t,e,n,...r){t=en(t,Ot);const s=en(t.firestore,ls),i=Dd(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Wc?tN(i,"updateDoc",t._key,e,n,r):eN(i,"updateDoc",t._key,e),Qc(s,[o.toMutation(t._key,jt.exists(!0))])}function lN(t){return Qc(en(t.firestore,ls),[new dd(t._key,jt.none())])}function uN(t,e){const n=en(t.firestore,ls),r=cs(t),s=Dw(t.converter,e);return Qc(n,[Rw(Dd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function Qc(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>OD(await qD(r),s,i)),i.promise}(Sd(t),e)}function hN(t,e,n){const r=n.docs.get(e._key),s=new Mw(t);return new Nw(t,s,e._key,r,new pi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){qs=s})(Us),yn(new Jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ls(new f1(r.getProvider("auth-internal")),new _1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new K(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bt(qp,"4.2.0",e),Bt(qp,"4.2.0","esm2017")})();const dN={apiKey:"AIzaSyBE-rc_5WvECAAaG5QEnZtfatpztpPnjz0",authDomain:"portfolio-dbf50.firebaseapp.com",databaseURL:"https://portfolio-dbf50-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"portfolio-dbf50",storageBucket:"portfolio-dbf50.appspot.com",messagingSenderId:"173776949572",appId:"1:173776949572:web:b88c9babb223bbe2bfc711",measurementId:"G-8MVPWD2FC6"},Md=f_(dN);UC(Md);const Do=sk(Md),Ln=YD(Md),fN=async(t,e)=>{try{e.userUid=t;const n=cs(Ln,"users",t);await cN(n,e),console.log("User created with ID: ",t)}catch(n){console.error("Error adding user: ",n)}},Ld=async t=>{try{const e=cs(Ln,"users",t),n=await Vw(e);return n.exists()?n.data():(console.log("No such user!"),null)}catch(e){throw console.error("Error getting user:",e),e}},pN=async(t,e,n)=>{try{const s=(await jS(Do,t,e)).user;return await fN(s.uid,n),await qS(s),{user:n,error:void 0}}catch(r){return{user:void 0,error:r.message}}},mN=async(t,e)=>{try{const r=(await HS(Do,t,e)).user;if(!r.emailVerified)return await $w(),{user:void 0,error:"User is not verified"};const i=await Ld(r.uid);return i?(localStorage.setItem("user",JSON.stringify(i)),{user:i,error:void 0}):{user:void 0,error:"User not found in database"}}catch(n){return{user:void 0,error:n.message}}},$w=async()=>{try{await Do.signOut(),localStorage.removeItem("user")}catch(t){throw new Error(t.message)}},ju=async()=>{try{const t=Do.currentUser;return t?await Ld(t.uid):null}catch(t){return t.message}},gN=Ze({name:"NavBar",components:{ItemLinkComponent:M0},setup(){const t=_h(),e=pr(),n=ke(t.path),r=ke(null),s=ke(window.innerWidth<=768),i=ke(!1);ts(async()=>{r.value=await ju(),window.addEventListener("resize",o)});const o=()=>{s.value=window.innerWidth<=768};oh(()=>{window.removeEventListener("resize",o)});const a=()=>{i.value=!i.value};ag(async()=>{n.value=t.path,r.value=await ju()});const c={"/":"_hello","/about":"_about-me","/contact":"_contact-me","/Projects":"_projects","/resume":"_resume","/blogs":"_blogs","/auth":"_login"},l={"/":"/","/about":"/about","/contact":"/contact","/Projects":"/Projects","/resume":"/resume","/blogs":"/blogs","/auth":"/auth"},u=rt(()=>({"/":n.value==="/","/about":n.value==="/about","/contact":n.value==="/contact","/Projects":n.value==="/Projects","/resume":n.value==="/resume","/blogs":n.value==="/blogs","/auth":n.value==="/auth"}));return{routeText:c,routeLink:l,routeSelected:u,currentUser:r,logOut:async()=>{await $w(),r.value=null,e.push("/")},isMobile:s,toggleMenu:a,showMenu:i}}});const _N=t=>(Ht("data-v-c3ceb15a"),t=t(),qt(),t),yN={class:"navbar"},vN=_N(()=>_("span",{class:"material-icons"},"menu",-1)),wN=[vN],EN={key:0};function IN(t,e,n,r,s,i){const o=lo("ItemLinkComponent");return W(),Q("div",yN,[t.isMobile?(W(),Q("div",{key:0,onClick:e[0]||(e[0]=(...a)=>t.toggleMenu&&t.toggleMenu(...a)),class:"menu-toggle"},wN)):Ve("v-if",!0),_("div",{class:ao(["wrapper",{"show-menu":t.showMenu}])},[Se(o,{link:t.routeLink["/"],text:t.routeText["/"],selected:t.routeSelected["/"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/resume"],text:t.routeText["/resume"],selected:t.routeSelected["/resume"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/Projects"],text:t.routeText["/Projects"],selected:t.routeSelected["/Projects"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/blogs"],text:t.routeText["/blogs"],selected:t.routeSelected["/blogs"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/about"],text:t.routeText["/about"],selected:t.routeSelected["/about"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),Se(o,{link:t.routeLink["/contact"],text:t.routeText["/contact"],selected:t.routeSelected["/contact"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]),t.currentUser?(W(),Q("div",EN,[_("button",{onClick:e[1]||(e[1]=(...a)=>t.logOut&&t.logOut(...a))},"Logout")])):(W(),ho(o,{key:1,link:t.routeLink["/auth"],text:t.routeText["/auth"],selected:t.routeSelected["/auth"],onItemClicked:t.toggleMenu},null,8,["link","text","selected","onItemClicked"]))],2)])}const TN=ot(gN,[["render",IN],["__scopeId","data-v-c3ceb15a"],["__file","D:/GitHub/portfolio/src/components/NavBar.vue"]]);const bN={},AN={class:"footer","aria-label":"Footer Navigation"},RN=uh('<div class="wrapper" data-v-140a6a1b><a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-v-140a6a1b><span class="material-icons" data-v-140a6a1b>facebook</span></a><a href="mailto:hassanfarhatcons@gmail.com" aria-label="Email" data-v-140a6a1b><span class="material-icons" data-v-140a6a1b>email</span> hassanfarhatcons@gmail.com </a><div class="copyright" data-v-140a6a1b> © Hassan Farhat 2023 </div></div>',1),CN=[RN];function SN(t,e){return W(),Q("footer",AN,CN)}const PN=ot(bN,[["render",SN],["__scopeId","data-v-140a6a1b"],["__file","D:/GitHub/portfolio/src/components/FooterBar.vue"]]),kN=_("header",null,[_("div",{class:"wrapper"})],-1),ON=Ze({__name:"App",setup(t){return(e,n)=>(W(),Q(Ke,null,[Se(TN),kN,Se(Lr(Gg)),Se(PN)],64))}}),DN=ot(ON,[["__file","D:/GitHub/portfolio/src/App.vue"]]),Fw=t=>(Ht("data-v-b4e148ca"),t=t(),qt(),t),NN={class:"wrapper"},VN=Fw(()=>_("div",{class:"text"},[_("p",null,"Hi all. I am"),_("h1",null,"Hassan Farhat"),_("h2",null,"> Full-stack developer"),_("p",null," I am a full-stack developer with a passion for building web applications. I have experience working with multiple technologies across various disciplines. ")],-1)),MN={class:"contentTwo"},LN={class:"overlay"},xN={class:"terminal"},$N=Fw(()=>_("div",{class:"terminal-header"},"Hassan's Terminal",-1)),FN="/bg_blurs.png",UN=Ze({__name:"HomeView",setup(t){const e=["$ npm install vue@next","$ vue create my-project","> Invoking generators...","> Installing additional dependencies...","✔ Project successfully created!"],n=ke([]);let r=0,s=0;const i=()=>{if(r<e.length){const o=e[r];s<o.length?(n.value[r]||(n.value[r]=""),n.value[r]+=o[s],s++):(r++,s=0)}};return ts(()=>{const o=setInterval(()=>{i(),r>=e.length&&clearInterval(o)},25)}),(o,a)=>(W(),Q("main",null,[_("div",NN,[VN,_("div",MN,[_("img",{src:FN,alt:"Background"}),_("div",LN,[_("div",xN,[$N,Ve(" Added this line for the terminal header "),Se(WT,{name:"typewriter",tag:"pre"},{default:nh(()=>[(W(!0),Q(Ke,null,Fs(n.value,(c,l)=>(W(),Q("div",{key:l,class:"line"},Fe(c),1))),128))]),_:1})])])])])]))}});const BN=ot(UN,[["__scopeId","data-v-b4e148ca"],["__file","D:/GitHub/portfolio/src/views/HomeView.vue"]]),jN={class:"tech-stack-card"},HN={class:"tech-stack-name"},qN=Ze({__name:"TechStackCard",props:{stackName:String},setup(t){return(e,n)=>(W(),Q("div",jN,[_("div",HN,Fe(t.stackName),1)]))}});const KN=ot(qN,[["__scopeId","data-v-d652d963"],["__file","D:/GitHub/portfolio/src/components/TechStackCard.vue"]]),WN=Ze({name:"AboutView",components:{TechStackCard:KN},setup(){const t=pr();return{techStacks:ke(["Unity","Unreal","Vue","React","Python","C#","C++","Java"]),takeToContact:()=>{t.push("/contact")}}}});const xd=t=>(Ht("data-v-d4948df9"),t=t(),qt(),t),zN={class:"about-main"},GN={class:"about-wrapper"},QN=xd(()=>_("h1",null,"About Me",-1)),YN=xd(()=>_("p",null,[Ye("//I am Hassan Farhat, a full-stack developer with a passion "),_("br"),Ye(" //for building anything technology...")],-1)),JN={class:"tech-stack-section"},XN=xd(()=>_("h2",null,"My Tech Stack:",-1)),ZN={class:"tech-stack-grid"};function eV(t,e,n,r,s,i){const o=lo("TechStackCard");return W(),Q("main",zN,[_("div",GN,[QN,YN,_("div",JN,[XN,_("div",ZN,[(W(!0),Q(Ke,null,Fs(t.techStacks,a=>(W(),ho(o,{key:a,stackName:a},null,8,["stackName"]))),128))]),_("button",{class:"btn-contact",onClick:e[0]||(e[0]=(...a)=>t.takeToContact&&t.takeToContact(...a))}," Contact Me ")])])])}const tV=ot(WN,[["render",eV],["__scopeId","data-v-d4948df9"],["__file","D:/GitHub/portfolio/src/views/AboutView.vue"]]),nV=Ze({name:"ContactView",setup(){const t=ke({name:"",email:"",message:""}),e=ke(!1),n=ke(""),r=rt(()=>JSON.stringify(t.value,null,2)),s=rt(()=>r.value.split(`
`));return{form:t,formattedJSONLines:s,submitForm:()=>{if(!t.value.name||!t.value.email||!t.value.message){n.value="All fields are required!";return}e.value=!0,n.value=""},submitted:e,error:n}}});const zs=t=>(Ht("data-v-c05bbfbe"),t=t(),qt(),t),rV={class:"contact-main"},sV={class:"contact-wrapper"},iV=zs(()=>_("h1",null,"Contact Me",-1)),oV={key:0,class:"contact-section"},aV={class:"left"},cV=zs(()=>_("label",{for:"name"},"Name:",-1)),lV=zs(()=>_("label",{for:"email"},"Email:",-1)),uV=zs(()=>_("label",{for:"message"},"Message:",-1)),hV={key:0},dV=zs(()=>_("button",{type:"submit"},"Send",-1)),fV={class:"right"},pV={class:"json-container"},mV={class:"line-number"},gV={key:1},_V=zs(()=>_("p",null,"Thank you for contacting me. I will get back to you soon!",-1)),yV=[_V];function vV(t,e,n,r,s,i){return W(),Q("main",rV,[_("div",sV,[iV,t.submitted?Ve("v-if",!0):(W(),Q("div",oV,[_("div",aV,[_("form",{onSubmit:e[3]||(e[3]=lc((...o)=>t.submitForm&&t.submitForm(...o),["prevent"]))},[cV,st(_("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.name=o),type:"text",id:"name",required:""},null,512),[[Tt,t.form.name]]),lV,st(_("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.email=o),type:"email",id:"email",required:""},null,512),[[Tt,t.form.email]]),uV,st(_("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.message=o),id:"message",required:""},null,512),[[Tt,t.form.message]]),t.error?(W(),Q("span",hV,Fe(t.error),1)):Ve("v-if",!0),Ve(" Display error message if any "),dV],32)]),_("div",fV,[_("div",pV,[(W(!0),Q(Ke,null,Fs(t.formattedJSONLines,(o,a)=>(W(),Q("pre",{key:a},[Ye("              "),_("span",mV,Fe(a+1),1),Ye(" "+Fe(o)+`
            `,1)]))),128))])])])),t.submitted?(W(),Q("div",gV,yV)):Ve("v-if",!0)])])}const wV=ot(nV,[["render",vV],["__scopeId","data-v-c05bbfbe"],["__file","D:/GitHub/portfolio/src/views/ContactMe.vue"]]),EV=Ze({props:{project:{type:Object,required:!0}}});const IV={class:"project-card"},TV=["src","alt"];function bV(t,e,n,r,s,i){return W(),Q("div",IV,[_("img",{src:t.project.projectImgUrl,alt:t.project.projectTitle,class:"project-image"},null,8,TV),_("h2",null,Fe(t.project.projectTitle),1),_("p",null,Fe(t.project.projectDescription),1)])}const AV=ot(EV,[["render",bV],["__scopeId","data-v-31773649"],["__file","D:/GitHub/portfolio/src/components/ProjectCard.vue"]]),RV=async()=>{try{const t=await Lw(Cd(Ln,"projects")),e=[];return t.forEach(n=>{e.push(n.data())}),e}catch(t){throw console.error("Error reading documents: ",t),t}},CV=Ze({name:"ProjectsView",components:{ProjectCard:AV},setup(){const t=ke(),e=async()=>{t.value=await RV(),console.log(t.value)};return ts(async()=>{await e()}),{projects:t}}});const SV=t=>(Ht("data-v-076d98d6"),t=t(),qt(),t),PV={class:"projects-main"},kV={class:"projects-wrapper"},OV=SV(()=>_("h1",null,"My Projects",-1)),DV={class:"projects-grid"};function NV(t,e,n,r,s,i){const o=lo("ProjectCard");return W(),Q("main",PV,[_("div",kV,[OV,_("div",DV,[(W(!0),Q(Ke,null,Fs(t.projects,a=>(W(),ho(o,{key:a.projectTitle,project:a},null,8,["project"]))),128))])])])}const VV=ot(CV,[["render",NV],["__scopeId","data-v-076d98d6"],["__file","D:/GitHub/portfolio/src/views/ProjectsView.vue"]]);var mi=(t=>(t[t.admin=0]="admin",t[t.user=1]="user",t))(mi||{});const MV=Ze({name:"AuthView",setup(){const t=ke(!0),e=ke(),n=pr(),r=ke({email:"",password:"",userDisplayName:"",userType:mi.user,userVerified:!1}),s=ke(null),i=ke(null),o=rt({get:()=>mi[r.value.userType],set:h=>{r.value.userType=mi[h]}});ts(async()=>{try{const h=await ju();e.value=h}catch(h){console.error("Error getting current user:",h)}});const a=rt(()=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(r.value.email)),c=rt(()=>a.value&&r.value.password);return{form:r,isLogin:t,submit:async()=>{if(c.value)try{if(t.value){const h=await mN(r.value.email,r.value.password);h.error?s.value=h.error:(n.push("/"),console.log("Logged in user data:",h))}else{const h={userDisplayName:r.value.userDisplayName,userEmail:r.value.email,userUid:"",userType:r.value.userType,userVerified:r.value.userVerified},d=await pN(r.value.email,r.value.password,h);console.log("Registered user data:",d),i.value="User registered successfully, please verify your email and login."}}catch(h){console.error("Auth Error",h),s.value=h.message}},isEmailValid:a,isFormValid:c,toggleView:()=>{t.value=!t.value},userType:o,UserType:mi,errorMessage:s,message:i}}});const Uw=t=>(Ht("data-v-bd851895"),t=t(),qt(),t),LV={class:"auth-main"},xV={class:"auth-wrapper"},$V={key:0,class:"message error"},FV={key:1,class:"message success"},UV={key:2},BV={key:3},jV=Uw(()=>_("label",{for:"email"},"Email:",-1)),HV=Uw(()=>_("label",{for:"password"},"Password:",-1)),qV={key:0,for:"displayName"},KV={key:2,for:"userType"},WV=["value"],zV=["value"],GV=["disabled"];function QV(t,e,n,r,s,i){return W(),Q("div",LV,[_("div",xV,[t.errorMessage?(W(),Q("div",$V,Fe(t.errorMessage),1)):Ve("v-if",!0),t.message?(W(),Q("div",FV,Fe(t.message),1)):Ve("v-if",!0),t.isLogin?(W(),Q("h1",UV,"Login")):t.message?Ve("v-if",!0):(W(),Q("h1",BV,"Register")),t.message?Ve("v-if",!0):(W(),Q("form",{key:4,onSubmit:e[4]||(e[4]=lc((...o)=>t.submit&&t.submit(...o),["prevent"])),class:"auth-form"},[jV,st(_("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.email=o),type:"email",id:"email",required:""},null,512),[[Tt,t.form.email,void 0,{trim:!0}]]),HV,st(_("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.password=o),type:"password",id:"password",required:""},null,512),[[Tt,t.form.password]]),t.isLogin?Ve("v-if",!0):(W(),Q("label",qV,"Display Name:")),t.isLogin?Ve("v-if",!0):st((W(),Q("input",{key:1,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.userDisplayName=o),type:"text",id:"displayName",required:""},null,512)),[[Tt,t.form.userDisplayName,void 0,{trim:!0}]]),t.isLogin?Ve("v-if",!0):(W(),Q("label",KV,"User Type:")),t.isLogin?Ve("v-if",!0):st((W(),Q("select",{key:3,"onUpdate:modelValue":e[3]||(e[3]=o=>t.userType=o),id:"userType"},[_("option",{value:t.UserType.user},"User",8,WV),_("option",{value:t.UserType.admin},"Admin",8,zV)],512)),[[Lg,t.userType]]),_("button",{type:"submit",disabled:!t.isFormValid},Fe(t.isLogin?"Login":"Register"),9,GV)],32)),t.message?Ve("v-if",!0):(W(),Q("button",{key:5,onClick:e[5]||(e[5]=(...o)=>t.toggleView&&t.toggleView(...o))},"Switch to "+Fe(t.isLogin?"Register":"Login"),1))])])}const YV=ot(MV,[["render",QV],["__scopeId","data-v-bd851895"],["__file","D:/GitHub/portfolio/src/views/AuthView.vue"]]),JV=async t=>{try{const e=await uN(Cd(Ln,"blogs"),t),n=e.id;await xw(cs(Ln,"blogs",n),{id:n}),console.log("Blog Document written with ID: ",e.id)}catch(e){console.error("Error adding blog document: ",e)}},XV=async()=>{try{const t=await Lw(Cd(Ln,"blogs")),e=[];return t.forEach(n=>{e.push(n.data())}),e}catch(t){throw console.error("Error reading blogs: ",t),t}},Bw=async t=>{try{const e=cs(Ln,"blogs",t),n=await Vw(e);if(n.exists())return n.data();throw new Error(`No blog found with id: ${t}`)}catch(e){throw console.error(`Error reading blog with id ${t}: `,e),e}},ZV=async(t,e)=>{try{const n=cs(Ln,"blogs",t);await xw(n,e),console.log("Blog Document updated with ID: ",t)}catch(n){console.error("Error updating blog document: ",n)}},eM=async t=>{try{const e=cs(Ln,"blogs",t);await lN(e),console.log("Blog Document deleted with ID: ",t)}catch(e){console.error("Error deleting blog document: ",e)}},tM=Ze({name:"BlogCard",props:{blog:{type:Object,required:!0},admin:{type:Boolean,default:!1}},emits:["delete-blog"],setup(t,{emit:e}){const n=ke(!1),r=ke(""),s=pr();return{formatDate:h=>h.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),confirmDelete:()=>{n.value=!0},editPost:()=>{s.push(`/blogs/${t.blog.id}/edit`)},deletePost:async()=>{r.value===t.blog.title&&(console.log("Deleted"),n.value=!1,await eM(t.blog.id),e("delete-blog"))},cancelDelete:()=>{n.value=!1,r.value=""},goToBlog:()=>{s.push(`/blogs/${t.blog.id}`)},confirmation:r,showModal:n}}});const Yc=t=>(Ht("data-v-3d022230"),t=t(),qt(),t),nM={class:"blog-card"},rM={key:0,class:"control-buttons"},sM=Yc(()=>_("span",{class:"material-icons"},"delete",-1)),iM=[sM],oM=Yc(()=>_("span",{class:"material-icons"},"edit",-1)),aM=[oM],cM={key:0,class:"modal"},lM={class:"modal-content"},uM={for:"confirmation"},hM=["disabled"],dM=["src"],fM={class:"blog-title"},pM={class:"blog-subtitle"},mM={class:"blog-dates"},gM=Yc(()=>_("strong",null,"Created:",-1)),_M=Yc(()=>_("strong",null,"Modified:",-1));function yM(t,e,n,r,s,i){return W(),Q("div",nM,[t.admin?(W(),Q("div",rM,[_("button",{onClick:e[0]||(e[0]=(...o)=>t.confirmDelete&&t.confirmDelete(...o)),class:"control-button"},iM),_("button",{onClick:e[1]||(e[1]=(...o)=>t.editPost&&t.editPost(...o)),class:"control-button"},aM),t.showModal?(W(),Q("div",cM,[_("div",lM,[_("label",uM,[Ye("Enter the blog title "),_("em",null,Fe(t.blog.title),1),Ye(" to confirm:")]),st(_("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.confirmation=o),id:"confirmation",type:"text"},null,512),[[Tt,t.confirmation]]),_("button",{onClick:e[3]||(e[3]=(...o)=>t.deletePost&&t.deletePost(...o)),disabled:t.confirmation.trim()!==t.blog.title.trim(),class:"confirm-delete-button"}," Confirm Delete ",8,hM),_("button",{onClick:e[4]||(e[4]=(...o)=>t.cancelDelete&&t.cancelDelete(...o))},"Cancel")])])):Ve("v-if",!0)])):Ve("v-if",!0),_("div",{onClick:e[5]||(e[5]=(...o)=>t.goToBlog&&t.goToBlog(...o)),class:"blog-item"},[_("img",{src:t.blog.imageURL,class:"blog-image"},null,8,dM),_("h2",fM,Fe(t.blog.title),1),_("h3",pM,Fe(t.blog.subtitle),1),_("div",mM,[_("p",null,[gM,Ye(" "+Fe(t.formatDate(t.blog.dateCreated)),1)]),_("p",null,[_M,Ye(" "+Fe(t.formatDate(t.blog.dateModified)),1)])])])])}const vM=ot(tM,[["render",yM],["__scopeId","data-v-3d022230"],["__file","D:/GitHub/portfolio/src/components/BlogCard.vue"]]),wM=Ze({name:"BlogView",components:{BlogCard:vM},setup(){const t=ke(),e=ke(!1),n=pr(),r=async()=>{t.value=await XV(),console.log(t.value)};return ts(async()=>{await r();const o=localStorage.getItem("user"),a=o?JSON.parse(o):null;a&&(e.value=a.userType=="admin")}),{blogs:t,admin:e,addPost:()=>{console.log("add post"),n.push("/blogs/create")},refreshBlogs:async()=>{await r()}}}});const EM=t=>(Ht("data-v-8815f39e"),t=t(),qt(),t),IM={class:"blogs-main"},TM={class:"blogs-wrapper"},bM=EM(()=>_("h1",null,"Posts",-1)),AM={key:0,class:"add-post"},RM={class:"blogs-grid"};function CM(t,e,n,r,s,i){const o=lo("BlogCard");return W(),Q("main",IM,[_("div",TM,[bM,t.admin?(W(),Q("div",AM,[_("button",{onClick:e[0]||(e[0]=(...a)=>t.addPost&&t.addPost(...a))},"Add Post")])):Ve("v-if",!0),_("div",RM,[(W(!0),Q(Ke,null,Fs(t.blogs,a=>(W(),ho(o,{key:a.title,blog:a,admin:t.admin,onDeleteBlog:t.refreshBlogs},null,8,["blog","admin","onDeleteBlog"]))),128))])])])}const SM=ot(wM,[["render",CM],["__scopeId","data-v-8815f39e"],["__file","D:/GitHub/portfolio/src/views/BlogView.vue"]]),PM=Ze({name:"ResumeView",setup(){const t=ke("summary"),e=ke([{name:"summary",label:"_summary.ts"},{name:"experience",label:"_experience.ts"},{name:"skills",label:"_skills.ts"},{name:"education",label:"_education.ts"},{name:"publications",label:"_publications.ts"}]);return{activeSection:t,sections:e,toggleSection:r=>{t.value===r?t.value="":t.value=r}}}});const Kt=t=>(Ht("data-v-a5cd2c92"),t=t(),qt(),t),kM={class:"resume-view"},OM=["value","onChange"],DM={class:"sidebar"},NM={class:"main-container"},VM={class:"main-area"},MM={key:0},LM=Kt(()=>_("div",{class:"comment-heading"},"/* Summary * /",-1)),xM=Kt(()=>_("h2",null,"Hassan Farhat",-1)),$M=Kt(()=>_("p",null,"VIC, 3047",-1)),FM=Kt(()=>_("p",null,"+61 0411 017 988",-1)),UM=Kt(()=>_("p",null,"hassanfarhatcons@gmail.com",-1)),BM=Kt(()=>_("p",null,"Innovative and driven technologist with a strong understanding of various technology stacks and specialised experience in game development, pipeline design, and AI development. Equipped with a background in psychology, adept at integrating these disciplines to create seamless tech solutions that optimise efficiency and effectiveness. Proficient in using Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, and React/Next.js. Strong passion for continuous learning and skill development.",-1)),jM=[LM,xM,$M,FM,UM,BM],HM={key:1},qM=uh('<div class="comment-heading" data-v-a5cd2c92>/* Experience * /</div><h3 data-v-a5cd2c92>Showdog Studios, Franklin, TN USA — Technical Pipeline Designer</h3><p data-v-a5cd2c92>August 2022 - PRESENT</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Designed and implemented pipeline tools using Unreal, Maya, and Python scripting to support artists and animators, which significantly increased workflow speed.</li><li data-v-a5cd2c92>Developed an efficient and user-friendly website using React/Next.js, improving the studio&#39;s online presence and accessibility.</li><li data-v-a5cd2c92>Collaborated with teams across the studio to understand needs and provide appropriate technological solutions.</li><li data-v-a5cd2c92>Ensured seamless integration of new technologies into existing systems.</li><li data-v-a5cd2c92>Identified and addressed performance issues to ensure optimal functioning of the pipeline.</li></ul><h3 data-v-a5cd2c92>2x2 Studios, New York, NY USA — Co-Founder &amp; CTO</h3><p data-v-a5cd2c92>August 2022 - PRESENT</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Oversaw the design of solutions for various clients, bringing their app visions to life, including the planning and execution of a social media app.</li><li data-v-a5cd2c92>Coordinated with marketing teams, investors, UX/UI designers to align technical solutions with business objectives.</li><li data-v-a5cd2c92>Oversaw the development and implementation of company-wide IT strategies and ensured they aligned with the company&#39;s business goals.</li><li data-v-a5cd2c92>Led a team of developers, ensuring effective delegation of tasks and quality control of all technical outputs.</li></ul><h3 data-v-a5cd2c92>PlayingForward, Santa Monica, CA, USA — Data Analyst and AI Developer</h3><p data-v-a5cd2c92>February 2019 - January 2023</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Built an AI motion capture app to detect user movement for clinical and research purposes. Integrated the application in Unity and iOS, serving as a vital bridge between technology and healthcare.</li><li data-v-a5cd2c92>Conducted extensive data analysis to inform business decisions and presented insights to investors and stakeholders, enabling informed decision-making.</li><li data-v-a5cd2c92>Collaborated with healthcare professionals such as nurses, doctors, and researchers, translating their needs into technical requirements for the development team.</li><li data-v-a5cd2c92>Identified, cleaned, and integrated data to maintain its accuracy and usefulness for ongoing projects.</li></ul><h3 data-v-a5cd2c92>La Trobe University, Bundoora, VIC, AU — Research Assistant</h3><p data-v-a5cd2c92>February 2014 - January 2019</p><ul data-v-a5cd2c92><li data-v-a5cd2c92>Assisted in the design and execution of research studies within the psychology department.</li><li data-v-a5cd2c92>Developed applications for use in data collection and research studies.</li><li data-v-a5cd2c92>Analysed research data and presented findings in clear, digestible formats.</li><li data-v-a5cd2c92>Co-authored several research papers published in scientific journals.</li></ul>',13),KM=[qM],WM={key:2},zM=uh('<div class="comment-heading" data-v-a5cd2c92>/* Skills * /</div><ul data-v-a5cd2c92><li data-v-a5cd2c92>Technology Stacks: Unity, Unreal, Python, C#, C++, Java, Kotlin, Maya, React/Next.js, JS</li><li data-v-a5cd2c92>CI/CD integration</li><li data-v-a5cd2c92>Git and DevOps</li><li data-v-a5cd2c92>AI Development</li><li data-v-a5cd2c92>Pipeline Development</li><li data-v-a5cd2c92>Game Development</li><li data-v-a5cd2c92>Research Study Design</li><li data-v-a5cd2c92>Data Analysis</li><li data-v-a5cd2c92>Website Development</li><li data-v-a5cd2c92>App Development</li><li data-v-a5cd2c92>Project Management</li><li data-v-a5cd2c92>Communication and Team Coordination</li><li data-v-a5cd2c92>Integration of AI functionalities into Mobile Applications</li><li data-v-a5cd2c92>Understanding of User Behavior (AI and Psychology intersection)</li></ul>',2),GM=[zM],QM={key:3},YM=Kt(()=>_("div",{class:"comment-heading"},"/* Education * /",-1)),JM=Kt(()=>_("p",null,"La Trobe University, Bundoora, VIC, AU — Bachelor of Psychology",-1)),XM=Kt(()=>_("p",null,"2012-2016",-1)),ZM=[YM,JM,XM],eL={key:4},tL=Kt(()=>_("div",{class:"comment-heading"},"/* Publications * /",-1)),nL=Kt(()=>_("ul",null,[_("li",null,[Ye("Hocking, D.R., Ardalan, A., Abu-Rayya, H.M. et al. Feasibility of a virtual reality-based exercise intervention and low-cost motion tracking method for estimation of motor proficiency in youth with autism spectrum disorder. J NeuroEngineering Rehabil 19, 1 (2022). "),_("a",{href:"https://doi.org/10.1186/s12984-021-00978-1",target:"_blank"},"https://doi.org/10.1186/s12984-021-00978-1")]),_("li",null,[Ye("Hocking DR, Fritsche S, Farhat H, Atkinson A, Bendak H, Menant J. Working memory is a core executive function supporting dual-task locomotor performance across childhood and adolescence. J Exp Child Psychol. 2020 Sep;197:104869. "),_("a",{href:"https://doi.org/10.1016/j.jecp.2020.104869",target:"_blank"},"doi: 10.1016/j.jecp.2020.104869"),Ye(". Epub 2020 Jun 20. PMID: 32574754.")]),_("li",null,[Ye("Hocking, Darren & Farhat, Hassan & Gavrila, Cristina. (2019). The influence of cognitive load on transfer of implicit perceptual-motor sequence learning to novel task performance. Psychological Research. "),_("a",{href:"https://doi.org/10.1007/s00426-019-01198-8",target:"_blank"},"10.1007/s00426-019-01198-8"),Ye(".")])],-1)),rL=[tL,nL],sL=Kt(()=>_("div",{class:"terminal"},[_("p",null,[_("span",{class:"greenp"},"$"),Ye(' echo "Hello, World!" '),_("span",{class:"blinking-cursor"},"_")])],-1));function iL(t,e,n,r,s,i){return W(),Q("div",kM,[st(_("select",{class:"mobile-dropdown","onUpdate:modelValue":e[0]||(e[0]=o=>t.activeSection=o)},[(W(!0),Q(Ke,null,Fs(t.sections,o=>(W(),Q("option",{key:o.name,value:o.name,onChange:a=>t.toggleSection(o.name)},Fe(o.label),41,OM))),128))],512),[[Lg,t.activeSection]]),_("div",DM,[_("div",{class:"item",onClick:e[1]||(e[1]=o=>t.activeSection="summary")},"_summary.ts"),_("div",{class:"item",onClick:e[2]||(e[2]=o=>t.activeSection="experience")},"_experience.ts"),_("div",{class:"item",onClick:e[3]||(e[3]=o=>t.activeSection="skills")},"_skills.ts"),_("div",{class:"item",onClick:e[4]||(e[4]=o=>t.activeSection="education")},"_education.ts"),_("div",{class:"item",onClick:e[5]||(e[5]=o=>t.activeSection="publications")},"_publications.ts")]),_("div",NM,[_("div",VM,[t.activeSection==="summary"?(W(),Q("div",MM,jM)):Ve("v-if",!0),t.activeSection==="experience"?(W(),Q("div",HM,KM)):Ve("v-if",!0),t.activeSection==="skills"?(W(),Q("div",WM,GM)):Ve("v-if",!0),t.activeSection==="education"?(W(),Q("div",QM,ZM)):Ve("v-if",!0),t.activeSection==="publications"?(W(),Q("div",eL,rL)):Ve("v-if",!0)]),sL])])}const oL=ot(PM,[["render",iL],["__scopeId","data-v-a5cd2c92"],["__file","D:/GitHub/portfolio/src/views/ResumeView.vue"]]),aL=Ze({name:"CreateBlog",setup(){const t=ke({title:"",subtitle:"",content:"",imageURL:"",dateCreated:Me.now(),dateModified:Me.now(),id:""}),e=pr();return{blog:t,handleSubmit:async()=>{await JV(t.value),e.push("/blogs")}}}});const Gs=t=>(Ht("data-v-469dacab"),t=t(),qt(),t),cL={class:"create-blog-main"},lL={class:"create-blog-wrapper"},uL=Gs(()=>_("h1",null,"Create Blog",-1)),hL={class:"create-blog-section"},dL={class:"left"},fL=Gs(()=>_("label",{for:"title"},"Title:",-1)),pL=Gs(()=>_("label",{for:"subtitle"},"Subtitle:",-1)),mL=Gs(()=>_("label",{for:"imageURL"},"Image URL:",-1)),gL=Gs(()=>_("label",{for:"content"},"Content:",-1)),_L=Gs(()=>_("button",{type:"submit"},"Create Blog",-1));function yL(t,e,n,r,s,i){return W(),Q("div",cL,[_("div",lL,[uL,_("div",hL,[_("div",dL,[_("form",{onSubmit:e[4]||(e[4]=lc((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[fL,st(_("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.blog.title=o),id:"title",required:""},null,512),[[Tt,t.blog.title]]),pL,st(_("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.blog.subtitle=o),id:"subtitle"},null,512),[[Tt,t.blog.subtitle]]),mL,st(_("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.blog.imageURL=o),id:"imageURL"},null,512),[[Tt,t.blog.imageURL]]),gL,st(_("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.blog.content=o),id:"content",required:""},null,512),[[Tt,t.blog.content]]),_L],32)])])])])}const vL=ot(aL,[["render",yL],["__scopeId","data-v-469dacab"],["__file","D:/GitHub/portfolio/src/views/CreateBlog.vue"]]),wL=Ze({name:"BlogEntryView",setup(){const t=_h();console.log(t.params.id);const e=ke();ih(async()=>{e.value=await Bw(t.params.id),e.value.content=n(e.value)});const n=s=>s.content.replace(/\n/g,"<br />");return{blog:e,formatDate:s=>s.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}});const $d=t=>(Ht("data-v-59820ef0"),t=t(),qt(),t),EL={key:0,class:"blog-entry"},IL=["src"],TL={class:"blog-title"},bL={class:"blog-subtitle"},AL=["innerHTML"],RL={class:"blog-dates"},CL=$d(()=>_("strong",null,"Created:",-1)),SL=$d(()=>_("strong",null,"Modified:",-1)),PL={key:1},kL=$d(()=>_("p",null,"Loading...",-1)),OL=[kL];function DL(t,e,n,r,s,i){return t.blog?(W(),Q("div",EL,[_("img",{src:t.blog.imageURL,alt:"Blog Image",class:"blog-image"},null,8,IL),_("h2",TL,Fe(t.blog.title),1),_("h3",bL,Fe(t.blog.subtitle),1),_("div",{class:"blog-content",innerHTML:t.blog.content},null,8,AL),_("div",RL,[_("p",null,[CL,Ye(" "+Fe(t.formatDate(t.blog.dateCreated)),1)]),_("p",null,[SL,Ye(" "+Fe(t.formatDate(t.blog.dateModified)),1)])])])):(W(),Q("div",PL,OL))}const NL=ot(wL,[["render",DL],["__scopeId","data-v-59820ef0"],["__file","D:/GitHub/portfolio/src/views/BlogEntryView.vue"]]),VL=Ze({name:"EditBlog",setup(){const t=_h(),e=ke({title:"",subtitle:"",content:"",imageURL:"",dateCreated:Me.now(),dateModified:Me.now(),id:""});ih(async()=>{const s=t.params.id,i=await Bw(s);e.value={...i,id:s}});const n=pr();return{blog:e,handleSubmit:async()=>{await ZV(e.value.id,e.value),n.push("/blogs")}}}});const Qs=t=>(Ht("data-v-56f15ba2"),t=t(),qt(),t),ML={class:"edit-blog-main"},LL={class:"edit-blog-wrapper"},xL=Qs(()=>_("h1",null,"Edit Blog",-1)),$L={class:"edit-blog-section"},FL={class:"left"},UL=Qs(()=>_("label",{for:"title"},"Title:",-1)),BL=Qs(()=>_("label",{for:"subtitle"},"Subtitle:",-1)),jL=Qs(()=>_("label",{for:"imageURL"},"Image URL:",-1)),HL=Qs(()=>_("label",{for:"content"},"Content:",-1)),qL=Qs(()=>_("button",{type:"submit"},"Update Blog",-1));function KL(t,e,n,r,s,i){return W(),Q("div",ML,[_("div",LL,[xL,_("div",$L,[_("div",FL,[_("form",{onSubmit:e[4]||(e[4]=lc((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[UL,st(_("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.blog.title=o),id:"title",required:""},null,512),[[Tt,t.blog.title]]),BL,st(_("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.blog.subtitle=o),id:"subtitle"},null,512),[[Tt,t.blog.subtitle]]),jL,st(_("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.blog.imageURL=o),id:"imageURL"},null,512),[[Tt,t.blog.imageURL]]),HL,st(_("textarea",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.blog.content=o),id:"content",required:""},null,512),[[Tt,t.blog.content]]),qL],32)])])])])}const WL=ot(VL,[["render",KL],["__scopeId","data-v-56f15ba2"],["__file","D:/GitHub/portfolio/src/views/EditBlog.vue"]]),zL=O0({history:Ob("/"),routes:[{path:"/",name:"Home",component:BN},{path:"/about",name:"About",component:tV},{path:"/contact",name:"Contact",component:wV},{path:"/projects",name:"Projects",component:VV},{path:"/auth",name:"Auth",component:YV},{path:"/blogs",name:"Blogs",component:SM},{path:"/blogs/create",name:"CreateBlog",component:vL},{path:"/blogs/:id",name:"BlogEntry",component:NL},{path:"/blogs/:id/edit",name:"EditBlog",component:WL},{path:"/resume",name:"Resume",component:oL}]});let Yo;Do.onAuthStateChanged(async t=>{if(!Yo){if(localStorage.removeItem("user"),Yo=nb(DN),Yo.use(zL),t){const e=await Ld(t.uid);localStorage.setItem("user",JSON.stringify(e))}Yo.mount("#app")}});
