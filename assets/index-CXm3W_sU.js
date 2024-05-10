(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class ya{static isWebGLAvailable(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const t=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&t.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(t){try{const e=document.createElement("canvas"),i=window.WebGL2RenderingContext&&e.getContext("webgl2");return i.drawingBufferColorSpace=t,i.drawingBufferColorSpace===t}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(t){const e={1:"WebGL",2:"WebGL 2"},i={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",i[t]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",e[t]),s.innerHTML=r,s}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="164",mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ah=0,Ta=1,lh=2,Cc=1,ch=2,fn=3,zn=0,Pe=1,mn=2,Bn=0,Bi=1,Ca=2,Aa=3,Pa=4,uh=5,ni=100,hh=101,dh=102,ph=103,fh=104,mh=200,_h=201,vh=202,gh=203,yo=204,To=205,bh=206,xh=207,Mh=208,wh=209,Eh=210,Sh=211,yh=212,Th=213,Ch=214,Ah=0,Ph=1,Rh=2,fs=3,Lh=4,Dh=5,Ih=6,Uh=7,Vo=0,Nh=1,Oh=2,kn=0,Fh=1,Bh=2,kh=3,Vh=4,zh=5,Hh=6,Gh=7,Ac=300,Gi=301,Wi=302,Co=303,Ao=304,Ss=306,Po=1e3,ri=1001,Ro=1002,Ge=1003,Wh=1004,Vr=1005,Ye=1006,Os=1007,si=1008,Hn=1009,Xh=1010,jh=1011,Pc=1012,Rc=1013,Xi=1014,On=1015,ys=1016,Lc=1017,Dc=1018,Tr=1020,qh=35902,Yh=1021,Kh=1022,Qe=1023,$h=1024,Zh=1025,ki=1026,_r=1027,Jh=1028,Ic=1029,Qh=1030,Uc=1031,Nc=1033,Fs=33776,Bs=33777,ks=33778,Vs=33779,Ra=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Oa=37496,Fa=37808,Ba=37809,ka=37810,Va=37811,za=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,ja=37817,qa=37818,Ya=37819,Ka=37820,$a=37821,zs=36492,Za=36494,Ja=36495,td=36283,Qa=36284,tl=36285,el=36286,ed=3200,nd=3201,zo=0,id=1,Nn="",$e="srgb",Xn="srgb-linear",Ho="display-p3",Ts="display-p3-linear",ms="linear",te="srgb",_s="rec709",vs="p3",vi=7680,nl=519,rd=512,sd=513,od=514,Oc=515,ad=516,ld=517,cd=518,ud=519,il=35044,rl="300 es",_n=2e3,gs=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const fr=Math.PI/180,vr=180/Math.PI;function Yi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Go(n,t){return(n%t+t)%t}function hd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function dd(n,t,e){return n!==t?(e-n)/(t-n):0}function mr(n,t,e){return(1-e)*n+e*t}function pd(n,t,e,i){return mr(n,t,1-Math.exp(-e*i))}function fd(n,t=1){return t-Math.abs(Go(n,t*2)-t)}function md(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function _d(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function vd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function gd(n,t){return n+Math.random()*(t-n)}function bd(n){return n*(.5-Math.random())}function xd(n){n!==void 0&&(sl=n);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Md(n){return n*fr}function wd(n){return n*vr}function Ed(n){return(n&n-1)===0&&n!==0}function Sd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Td(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),p=o((t-i)/2),m=s((i-t)/2),v=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*d,l*p,a*c);break;case"YZY":n.set(l*p,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*p,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Cd={DEG2RAD:fr,RAD2DEG:vr,generateUUID:Yi,clamp:we,euclideanModulo:Go,mapLinear:hd,inverseLerp:dd,lerp:mr,damp:pd,pingpong:fd,smoothstep:md,smootherstep:_d,randInt:vd,randFloat:gd,randFloatSpread:bd,seededRandom:xd,degToRad:Md,radToDeg:wd,isPowerOfTwo:Ed,ceilPowerOfTwo:Sd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Td,normalize:Ee,denormalize:Oi};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(t,e,i,r,s,o,a,l,c){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],v=i[8],x=r[0],f=r[3],h=r[6],S=r[1],w=r[4],T=r[7],U=r[2],A=r[5],C=r[8];return s[0]=o*x+a*S+l*U,s[3]=o*f+a*w+l*A,s[6]=o*h+a*T+l*C,s[1]=c*x+u*S+d*U,s[4]=c*f+u*w+d*A,s[7]=c*h+u*T+d*C,s[2]=p*x+m*S+v*U,s[5]=p*f+m*w+v*A,s[8]=p*h+m*T+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,p=a*l-u*s,m=c*s-o*l,v=e*d+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=p*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hs.makeScale(t,e)),this}rotate(t){return this.premultiply(Hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Rt;function Fc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ad(){const n=gr("canvas");return n.style.display="block",n}const ol={};function Pd(n){n in ol||(ol[n]=!0,console.warn(n))}const al=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Xn]:{transfer:ms,primaries:_s,toReference:n=>n,fromReference:n=>n},[$e]:{transfer:te,primaries:_s,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ts]:{transfer:ms,primaries:vs,toReference:n=>n.applyMatrix3(ll),fromReference:n=>n.applyMatrix3(al)},[Ho]:{transfer:te,primaries:vs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ll),fromReference:n=>n.applyMatrix3(al).convertLinearToSRGB()}},Rd=new Set([Xn,Ts]),Zt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=zr[t].toReference,r=zr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return zr[n].primaries},getTransfer:function(n){return n===Nn?ms:zr[n].transfer}};function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gi;class Ld{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=gr("canvas")),gi.width=t.width,gi.height=t.height;const i=gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ws(r[o].image)):s.push(Ws(r[o]))}else s=Ws(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ws(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ld.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class ye extends di{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,i=ri,r=ri,s=Ye,o=si,a=Qe,l=Hn,c=ye.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Yi(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Ac;ye.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,i=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],v=l[9],x=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,T=(m+1)/2,U=(h+1)/2,A=(u+p)/4,C=(d+x)/4,H=(v+f)/4;return w>T&&w>U?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=C/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=A/r,s=H/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=H/s),this.set(i,r,s,e),this}let S=Math.sqrt((f-v)*(f-v)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(d-x)/S,this.z=(p-u)/S,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ye(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Ud{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kc extends ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(d!==x||l!==p||c!==m||u!==v){let f=1-a;const h=l*p+c*m+u*v+d*x,S=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const U=Math.sqrt(w),A=Math.atan2(U,h*S);f=Math.sin(f*A)/U,a=Math.sin(a*A)/U}const T=a*S;if(l=l*f+p*T,c=c*f+m*T,u=u*f+v*T,d=d*f+x*T,f===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],p=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+u*d+l*m-c*p,t[e+1]=l*v+u*p+c*d-a*m,t[e+2]=c*v+u*m+a*p-l*d,t[e+3]=u*v-a*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),p=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d-p*m*v;break;case"YXZ":this._x=p*u*d+c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d+p*m*v;break;case"ZXY":this._x=p*u*d-c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d-p*m*v;break;case"ZYX":this._x=p*u*d-c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d+p*m*v;break;case"YZX":this._x=p*u*d+c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d-p*m*v;break;case"XZY":this._x=p*u*d-c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new R,cl=new li;class Cr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(s,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Gr.subVectors(this.max,rr),bi.subVectors(t.a,rr),xi.subVectors(t.b,rr),Mi.subVectors(t.c,rr),yn.subVectors(xi,bi),Tn.subVectors(Mi,xi),Yn.subVectors(bi,Mi);let e=[0,-yn.z,yn.y,0,-Tn.z,Tn.y,0,-Yn.z,Yn.y,yn.z,0,-yn.x,Tn.z,0,-Tn.x,Yn.z,0,-Yn.x,-yn.y,yn.x,0,-Tn.y,Tn.x,0,-Yn.y,Yn.x,0];return!js(e,bi,xi,Mi,Gr)||(e=[1,0,0,0,1,0,0,0,1],!js(e,bi,xi,Mi,Gr))?!1:(Wr.crossVectors(yn,Tn),e=[Wr.x,Wr.y,Wr.z],js(e,bi,xi,Mi,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new R,new R,new R,new R,new R,new R,new R,new R],Xe=new R,Hr=new Cr,bi=new R,xi=new R,Mi=new R,yn=new R,Tn=new R,Yn=new R,rr=new R,Gr=new R,Wr=new R,Kn=new R;function js(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kn.fromArray(n,s);const a=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),u=i.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Od=new Cr,sr=new R,qs=new R;class Wo{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Od.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(qs)),this.expandByPoint(sr.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new R,Ys=new R,Xr=new R,Cn=new R,Ks=new R,jr=new R,$s=new R;class Vc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ys.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(Ys);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Xr),a=Cn.dot(this.direction),l=-Cn.dot(Xr),c=Cn.lengthSq(),u=Math.abs(1-o*o);let d,p,m,v;if(u>0)if(d=o*l-a,p=o*a-l,v=s*u,d>=0)if(p>=-v)if(p<=v){const x=1/u;d*=x,p*=x,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ys).addScaledVector(Xr,p),m}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const i=cn.dot(this.direction),r=cn.dot(cn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,r,s){Ks.subVectors(e,t),jr.subVectors(i,t),$s.crossVectors(Ks,jr);let o=this.direction.dot($s),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);const l=a*this.direction.dot(jr.crossVectors(Cn,jr));if(l<0)return null;const c=a*this.direction.dot(Ks.cross(Cn));if(c<0||l+c>o)return null;const u=-a*Cn.dot($s);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,o,a,l,c,u,d,p,m,v,x,f){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,d,p,m,v,x,f)}set(t,e,i,r,s,o,a,l,c,u,d,p,m,v,x,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=v,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=o*u,m=o*d,v=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+v*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*d,v=c*u,x=c*d;e[0]=p+x*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*d,v=c*u,x=c*d;e[0]=p-x*a,e[4]=-o*d,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*d,v=a*u,x=a*d;e[0]=l*u,e[4]=v*c-m,e[8]=p*c+x,e[1]=l*d,e[5]=x*c+p,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=x-p*d,e[8]=v*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+v,e[10]=p-x*d}else if(t.order==="XZY"){const p=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+x,e[5]=o*u,e[9]=m*d-v,e[2]=v*d-m,e[6]=a*u,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Bd)}lookAt(t,e,i){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),An.crossVectors(i,Ie),An.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),An.crossVectors(i,Ie)),An.normalize(),qr.crossVectors(Ie,An),r[0]=An.x,r[4]=qr.x,r[8]=Ie.x,r[1]=An.y,r[5]=qr.y,r[9]=Ie.y,r[2]=An.z,r[6]=qr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],v=i[2],x=i[6],f=i[10],h=i[14],S=i[3],w=i[7],T=i[11],U=i[15],A=r[0],C=r[4],H=r[8],E=r[12],b=r[1],O=r[5],z=r[9],P=r[13],j=r[2],X=r[6],Z=r[10],J=r[14],G=r[3],tt=r[7],Q=r[11],dt=r[15];return s[0]=o*A+a*b+l*j+c*G,s[4]=o*C+a*O+l*X+c*tt,s[8]=o*H+a*z+l*Z+c*Q,s[12]=o*E+a*P+l*J+c*dt,s[1]=u*A+d*b+p*j+m*G,s[5]=u*C+d*O+p*X+m*tt,s[9]=u*H+d*z+p*Z+m*Q,s[13]=u*E+d*P+p*J+m*dt,s[2]=v*A+x*b+f*j+h*G,s[6]=v*C+x*O+f*X+h*tt,s[10]=v*H+x*z+f*Z+h*Q,s[14]=v*E+x*P+f*J+h*dt,s[3]=S*A+w*b+T*j+U*G,s[7]=S*C+w*O+T*X+U*tt,s[11]=S*H+w*z+T*Z+U*Q,s[15]=S*E+w*P+T*J+U*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],v=t[3],x=t[7],f=t[11],h=t[15];return v*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*m-i*l*m)+x*(+e*l*m-e*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+f*(+e*c*d-e*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-e*l*d+e*a*p+r*o*d-i*o*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],v=t[12],x=t[13],f=t[14],h=t[15],S=d*f*c-x*p*c+x*l*m-a*f*m-d*l*h+a*p*h,w=v*p*c-u*f*c-v*l*m+o*f*m+u*l*h-o*p*h,T=u*x*c-v*d*c+v*a*m-o*x*m-u*a*h+o*d*h,U=v*d*l-u*x*l-v*a*p+o*x*p+u*a*f-o*d*f,A=e*S+i*w+r*T+s*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(x*p*s-d*f*s-x*r*m+i*f*m+d*r*h-i*p*h)*C,t[2]=(a*f*s-x*l*s+x*r*c-i*f*c-a*r*h+i*l*h)*C,t[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*m-i*l*m)*C,t[4]=w*C,t[5]=(u*f*s-v*p*s+v*r*m-e*f*m-u*r*h+e*p*h)*C,t[6]=(v*l*s-o*f*s-v*r*c+e*f*c+o*r*h-e*l*h)*C,t[7]=(o*p*s-u*l*s+u*r*c-e*p*c-o*r*m+e*l*m)*C,t[8]=T*C,t[9]=(v*d*s-u*x*s-v*i*m+e*x*m+u*i*h-e*d*h)*C,t[10]=(o*x*s-v*a*s+v*i*c-e*x*c-o*i*h+e*a*h)*C,t[11]=(u*a*s-o*d*s-u*i*c+e*d*c+o*i*m-e*a*m)*C,t[12]=U*C,t[13]=(u*x*r-v*d*r+v*i*p-e*x*p-u*i*f+e*d*f)*C,t[14]=(v*a*r-o*x*r-v*i*l+e*x*l+o*i*f-e*a*f)*C,t[15]=(o*d*r-u*a*r+u*i*l-e*d*l-o*i*p+e*a*p)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,p=s*c,m=s*u,v=s*d,x=o*u,f=o*d,h=a*d,S=l*c,w=l*u,T=l*d,U=i.x,A=i.y,C=i.z;return r[0]=(1-(x+h))*U,r[1]=(m+T)*U,r[2]=(v-w)*U,r[3]=0,r[4]=(m-T)*A,r[5]=(1-(p+h))*A,r[6]=(f+S)*A,r[7]=0,r[8]=(v+w)*C,r[9]=(f-S)*C,r[10]=(1-(p+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),a=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],je.copy(this);const c=1/s,u=1/o,d=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=_n){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let m,v;if(a===_n)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gs)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=_n){const l=this.elements,c=1/(e-t),u=1/(i-r),d=1/(o-s),p=(e+t)*c,m=(i+r)*u;let v,x;if(a===_n)v=(o+s)*d,x=-2*d;else if(a===gs)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const wi=new R,je=new le,Fd=new R(0,0,0),Bd=new R(1,1,1),An=new R,qr=new R,Ie=new R,ul=new le,hl=new li;class Ke{constructor(t=0,e=0,i=0,r=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kd=0;const dl=new R,Ei=new li,un=new le,Yr=new R,or=new R,Vd=new R,zd=new li,pl=new R(1,0,0),fl=new R(0,1,0),ml=new R(0,0,1),_l={type:"added"},Hd={type:"removed"},Si={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Re extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new R,e=new Ke,i=new li,r=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Rt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(or,Yr,this.up):un.lookAt(Yr,or,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(un),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Re.DEFAULT_UP=new R(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new R,hn=new R,Js=new R,dn=new R,yi=new R,Ti=new R,vl=new R,Qs=new R,to=new R,eo=new R;class Je{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),qe.subVectors(t,e),r.cross(qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){qe.subVectors(r,e),hn.subVectors(i,e),Js.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(hn),l=qe.dot(Js),c=hn.dot(hn),u=hn.dot(Js),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-a*u)*p,v=(o*u-a*l)*p;return s.set(1-m-v,v,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static isFrontFacing(t,e,i,r){return qe.subVectors(i,e),hn.subVectors(t,e),qe.cross(hn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;yi.subVectors(r,i),Ti.subVectors(s,i),Qs.subVectors(t,i);const l=yi.dot(Qs),c=Ti.dot(Qs);if(l<=0&&c<=0)return e.copy(i);to.subVectors(t,r);const u=yi.dot(to),d=Ti.dot(to);if(u>=0&&d<=u)return e.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(yi,o);eo.subVectors(t,s);const m=yi.dot(eo),v=Ti.dot(eo);if(v>=0&&m<=v)return e.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ti,a);const f=u*v-m*d;if(f<=0&&d-u>=0&&m-v>=0)return vl.subVectors(s,r),a=(d-u)/(d-u+(m-v)),e.copy(r).addScaledVector(vl,a);const h=1/(f+x+p);return o=x*h,a=p*h,e.copy(i).addScaledVector(yi,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function no(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=Go(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=no(o,s,t+1/3),this.g=no(o,s,t),this.b=no(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Hc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Zt.fromWorkingColorSpace(Me.copy(this),t),Math.round(we(Me.r*255,0,255))*65536+Math.round(we(Me.g*255,0,255))*256+Math.round(we(Me.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,r=Me.g,s=Me.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=$e){Zt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,r=Me.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Kr);const i=mr(Pn.h,Kr.h,e),r=mr(Pn.s,Kr.s,e),s=mr(Pn.l,Kr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new zt;zt.NAMES=Hc;let Gd=0;class Ki extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=To,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xo extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new R,$r=new xt;class en{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),r=Ee(r,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class Gc extends en{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wc extends en{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class nn extends en{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wd=0;const ze=new le,io=new Re,Ci=new R,Ue=new Cr,ar=new Cr,ve=new R;class jn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?Wc:Gc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Rt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,i){return ze.makeTranslation(t,e,i),this.applyMatrix4(ze),this}scale(t,e,i){return ze.makeScale(t,e,i),this.applyMatrix4(ze),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ue.min,ar.min),Ue.expandByPoint(ve),ve.addVectors(Ue.max,ar.max),Ue.expandByPoint(ve)):(Ue.expandByPoint(ar.min),Ue.expandByPoint(ar.max))}Ue.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ve.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),ve.add(Ci)),r=Math.max(r,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new R,l[H]=new R;const c=new R,u=new R,d=new R,p=new xt,m=new xt,v=new xt,x=new R,f=new R;function h(H,E,b){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),p.fromBufferAttribute(s,H),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),u.sub(c),d.sub(c),m.sub(p),v.sub(p);const O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(O),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(O),a[H].add(x),a[E].add(x),a[b].add(x),l[H].add(f),l[E].add(f),l[b].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let H=0,E=S.length;H<E;++H){const b=S[H],O=b.start,z=b.count;for(let P=O,j=O+z;P<j;P+=3)h(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const w=new R,T=new R,U=new R,A=new R;function C(H){U.fromBufferAttribute(r,H),A.copy(U);const E=a[H];w.copy(E),w.sub(U.multiplyScalar(U.dot(E))).normalize(),T.crossVectors(A,E);const O=T.dot(l[H])<0?-1:1;o.setXYZW(H,w.x,w.y,w.z,O)}for(let H=0,E=S.length;H<E;++H){const b=S[H],O=b.start,z=b.count;for(let P=O,j=O+z;P<j;P+=3)C(t.getX(P+0)),C(t.getX(P+1)),C(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let h=0;h<u;h++)p[v++]=c[m++]}return new en(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new le,$n=new Vc,Zr=new Wo,bl=new R,Ai=new R,Pi=new R,Ri=new R,ro=new R,Jr=new R,Qr=new xt,ts=new xt,es=new xt,xl=new R,Ml=new R,wl=new R,ns=new R,is=new R;class Oe extends Re{constructor(t=new jn,e=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ro.fromBufferAttribute(d,t),o?Jr.addScaledVector(ro,u):Jr.addScaledVector(ro.sub(e),u))}e.add(Jr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),$n.copy(t.ray).recast(t.near),!(Zr.containsPoint($n.origin)===!1&&($n.intersectSphere(Zr,bl)===null||$n.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(gl.copy(s).invert(),$n.copy(t.ray).applyMatrix4(gl),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const f=p[v],h=o[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,U=w;T<U;T+=3){const A=a.getX(T),C=a.getX(T+1),H=a.getX(T+2);r=rs(this,h,t,i,c,u,d,A,C,H),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,h=x;f<h;f+=3){const S=a.getX(f),w=a.getX(f+1),T=a.getX(f+2);r=rs(this,o,t,i,c,u,d,S,w,T),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const f=p[v],h=o[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=S,U=w;T<U;T+=3){const A=T,C=T+1,H=T+2;r=rs(this,h,t,i,c,u,d,A,C,H),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,h=x;f<h;f+=3){const S=f,w=f+1,T=f+2;r=rs(this,o,t,i,c,u,d,S,w,T),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Xd(n,t,e,i,r,s,o,a){let l;if(t.side===Pe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===zn,a),l===null)return null;is.copy(a),is.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(is);return c<e.near||c>e.far?null:{distance:c,point:is.clone(),object:n}}function rs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ai),n.getVertexPosition(l,Pi),n.getVertexPosition(c,Ri);const u=Xd(n,t,e,i,Ai,Pi,Ri,ns);if(u){r&&(Qr.fromBufferAttribute(r,a),ts.fromBufferAttribute(r,l),es.fromBufferAttribute(r,c),u.uv=Je.getInterpolation(ns,Ai,Pi,Ri,Qr,ts,es,new xt)),s&&(Qr.fromBufferAttribute(s,a),ts.fromBufferAttribute(s,l),es.fromBufferAttribute(s,c),u.uv1=Je.getInterpolation(ns,Ai,Pi,Ri,Qr,ts,es,new xt)),o&&(xl.fromBufferAttribute(o,a),Ml.fromBufferAttribute(o,l),wl.fromBufferAttribute(o,c),u.normal=Je.getInterpolation(ns,Ai,Pi,Ri,xl,Ml,wl,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};Je.getNormal(Ai,Pi,Ri,d.normal),u.face=d}return u}class Ar extends jn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,m=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function v(x,f,h,S,w,T,U,A,C,H,E){const b=T/C,O=U/H,z=T/2,P=U/2,j=A/2,X=C+1,Z=H+1;let J=0,G=0;const tt=new R;for(let Q=0;Q<Z;Q++){const dt=Q*O-P;for(let Ot=0;Ot<X;Ot++){const qt=Ot*b-z;tt[x]=qt*S,tt[f]=dt*w,tt[h]=j,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[f]=0,tt[h]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(Ot/C),d.push(1-Q/H),J+=1}}for(let Q=0;Q<H;Q++)for(let dt=0;dt<C;dt++){const Ot=p+dt+X*Q,qt=p+dt+X*(Q+1),W=p+(dt+1)+X*(Q+1),et=p+(dt+1)+X*Q;l.push(Ot,qt,et),l.push(qt,W,et),G+=6}a.addGroup(m,G,E),m+=G,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Se(n){const t={};for(let e=0;e<n.length;e++){const i=ji(n[e]);for(const r in i)t[r]=i[r]}return t}function jd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const qd={clone:ji,merge:Se};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jc extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,El=new xt,Sl=new xt;class Ne extends jc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,El,Sl),e.subVectors(Sl,El)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class $d extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(Li,Di,t,e);r.layers=this.layers,this.add(r);const s=new Ne(Li,Di,t,e);s.layers=this.layers,this.add(s);const o=new Ne(Li,Di,t,e);o.layers=this.layers,this.add(o);const a=new Ne(Li,Di,t,e);a.layers=this.layers,this.add(a);const l=new Ne(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class qc extends ye{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new qc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:Bn});s.uniforms.tEquirect.value=e;const o=new Oe(r,s),a=e.minFilter;return e.minFilter===si&&(e.minFilter=Ye),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const so=new R,Jd=new R,Qd=new Rt;class Un{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=so.subVectors(i,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(so),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qd.getNormalMatrix(t),r=this.coplanarPoint(so).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Wo,ss=new R;class jo{constructor(t=new Un,e=new Un,i=new Un,r=new Un,s=new Un,o=new Un){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],m=r[8],v=r[9],x=r[10],f=r[11],h=r[12],S=r[13],w=r[14],T=r[15];if(i[0].setComponents(l-s,p-c,f-m,T-h).normalize(),i[1].setComponents(l+s,p+c,f+m,T+h).normalize(),i[2].setComponents(l+o,p+u,f+v,T+S).normalize(),i[3].setComponents(l-o,p-u,f-v,T-S).normalize(),i[4].setComponents(l-a,p-d,f-x,T-w).normalize(),e===_n)i[5].setComponents(l+a,p+d,f+x,T+w).normalize();else if(e===gs)i[5].setComponents(a,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ss.x=r.normal.x>0?t.max.x:t.min.x,ss.y=r.normal.y>0?t.max.y:t.min.y,ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yc(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function tp(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,p=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&p.length===0&&n.bufferSubData(c,0,u),p.length!==0){for(let m=0,v=p.length;m<v;m++){const x=p[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Cs extends jn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=t/a,p=e/l,m=[],v=[],x=[],f=[];for(let h=0;h<u;h++){const S=h*p-o;for(let w=0;w<c;w++){const T=w*d-s;v.push(T,-S,0),x.push(0,0,1),f.push(w/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const w=S+c*h,T=S+c*(h+1),U=S+1+c*(h+1),A=S+1+c*h;m.push(w,T,A),m.push(T,U,A)}this.setIndex(m),this.setAttribute("position",new nn(v,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:up,begin_vertex:hp,beginnormal_vertex:dp,bsdfs:pp,iridescence_fragment:fp,bumpmap_pars_fragment:mp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:bp,color_fragment:xp,color_pars_fragment:Mp,color_pars_vertex:wp,color_vertex:Ep,common:Sp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Ap,emissivemap_fragment:Pp,emissivemap_pars_fragment:Rp,colorspace_fragment:Lp,colorspace_pars_fragment:Dp,envmap_fragment:Ip,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:qp,envmap_vertex:Fp,fog_vertex:Bp,fog_pars_vertex:kp,fog_fragment:Vp,fog_pars_fragment:zp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:jp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Kp,lights_phong_fragment:$p,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:af,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:uf,map_particle_pars_fragment:hf,metalnessmap_fragment:df,metalnessmap_pars_fragment:pf,morphinstance_vertex:ff,morphcolor_vertex:mf,morphnormal_vertex:_f,morphtarget_pars_vertex:vf,morphtarget_vertex:gf,normal_fragment_begin:bf,normal_fragment_maps:xf,normal_pars_fragment:Mf,normal_pars_vertex:wf,normal_vertex:Ef,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Af,opaque_fragment:Pf,packing:Rf,premultiplied_alpha_fragment:Lf,project_vertex:Df,dithering_fragment:If,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Bf,shadowmap_vertex:kf,shadowmask_pars_fragment:Vf,skinbase_vertex:zf,skinning_pars_vertex:Hf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:jf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Kf,transmission_pars_fragment:$f,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:rm,cube_vert:sm,cube_frag:om,depth_vert:am,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:um,equirect_vert:hm,equirect_frag:dm,linedashed_vert:pm,linedashed_frag:fm,meshbasic_vert:mm,meshbasic_frag:_m,meshlambert_vert:vm,meshlambert_frag:gm,meshmatcap_vert:bm,meshmatcap_frag:xm,meshnormal_vert:Mm,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Sm,meshphysical_vert:ym,meshphysical_frag:Tm,meshtoon_vert:Cm,meshtoon_frag:Am,points_vert:Pm,points_frag:Rm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Ze={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Ze.physical={uniforms:Se([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const os={r:0,b:0,g:0},Jn=new Ke,Nm=new le;function Om(n,t,e,i,r,s,o){const a=new zt(0);let l=s===!0?0:1,c,u,d=null,p=0,m=null;function v(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function x(S){let w=!1;const T=v(S);T===null?h(a,l):T&&T.isColor&&(h(T,1),w=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function f(S,w){const T=v(w);T&&(T.isCubeTexture||T.mapping===Ss)?(u===void 0&&(u=new Oe(new Ar(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ji(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(w.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(Jn)),u.material.toneMapped=Zt.getTransfer(T.colorSpace)!==te,(d!==T||p!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Oe(new Cs(2,2),new Gn({name:"BackgroundMaterial",uniforms:ji(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(T.colorSpace)!==te,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,w){S.getRGB(os,Xc(n)),i.buffers.color.setClear(os.r,os.g,os.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),l=w,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:x,addToRenderList:f}}function Fm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(b,O,z,P,j){let X=!1;const Z=d(P,z,O);s!==Z&&(s=Z,c(s.object)),X=m(b,P,z,j),X&&v(b,P,z,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,T(b,O,z,P),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,O,z){const P=z.wireframe===!0;let j=i[b.id];j===void 0&&(j={},i[b.id]=j);let X=j[O.id];X===void 0&&(X={},j[O.id]=X);let Z=X[P];return Z===void 0&&(Z=p(l()),X[P]=Z),Z}function p(b){const O=[],z=[],P=[];for(let j=0;j<e;j++)O[j]=0,z[j]=0,P[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:b,attributes:{},index:null}}function m(b,O,z,P){const j=s.attributes,X=O.attributes;let Z=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const Q=j[G];let dt=X[G];if(dt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==P}function v(b,O,z,P){const j={},X=O.attributes;let Z=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let Q=X[G];Q===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),j[G]=dt,Z++}s.attributes=j,s.attributesNum=Z,s.index=P}function x(){const b=s.newAttributes;for(let O=0,z=b.length;O<z;O++)b[O]=0}function f(b){h(b,0)}function h(b,O){const z=s.newAttributes,P=s.enabledAttributes,j=s.attributeDivisors;z[b]=1,P[b]===0&&(n.enableVertexAttribArray(b),P[b]=1),j[b]!==O&&(n.vertexAttribDivisor(b,O),j[b]=O)}function S(){const b=s.newAttributes,O=s.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==b[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function w(b,O,z,P,j,X,Z){Z===!0?n.vertexAttribIPointer(b,O,z,j,X):n.vertexAttribPointer(b,O,z,P,j,X)}function T(b,O,z,P){x();const j=P.attributes,X=z.getAttributes(),Z=O.defaultAttributeValues;for(const J in X){const G=X[J];if(G.location>=0){let tt=j[J];if(tt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(tt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(tt=b.instanceColor)),tt!==void 0){const Q=tt.normalized,dt=tt.itemSize,Ot=t.get(tt);if(Ot===void 0)continue;const qt=Ot.buffer,W=Ot.type,et=Ot.bytesPerElement,ut=W===n.INT||W===n.UNSIGNED_INT||tt.gpuType===Rc;if(tt.isInterleavedBufferAttribute){const rt=tt.data,Ft=rt.stride,Dt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let I=0;I<G.locationSize;I++)h(G.location+I,rt.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let I=0;I<G.locationSize;I++)f(G.location+I);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let I=0;I<G.locationSize;I++)w(G.location+I,dt/G.locationSize,W,Q,Ft*et,(Dt+dt/G.locationSize*I)*et,ut)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<G.locationSize;rt++)f(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let rt=0;rt<G.locationSize;rt++)w(G.location+rt,dt/G.locationSize,W,Q,dt*et,dt/G.locationSize*rt*et,ut)}}else if(Z!==void 0){const Q=Z[J];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(G.location,Q);break;case 3:n.vertexAttrib3fv(G.location,Q);break;case 4:n.vertexAttrib4fv(G.location,Q);break;default:n.vertexAttrib1fv(G.location,Q)}}}}S()}function U(){H();for(const b in i){const O=i[b];for(const z in O){const P=O[z];for(const j in P)u(P[j].object),delete P[j];delete O[z]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const O=i[b.id];for(const z in O){const P=O[z];for(const j in P)u(P[j].object),delete P[j];delete O[z]}delete i[b.id]}function C(b){for(const O in i){const z=i[O];if(z[b.id]===void 0)continue;const P=z[b.id];for(const j in P)u(P[j].object),delete P[j];delete z[b.id]}}function H(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:f,disableUnusedAttributes:S}}function Bm(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d;m++)this.render(c[m],u[m]);else{p.multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];e.update(m,i,1)}}function l(c,u,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];for(let x=0;x<p.length;x++)e.update(v,i,p[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function km(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Qe&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:h,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:T,maxSamples:U}}function Vm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Un,a=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){const v=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!f)s?u(null):c();else{const S=s?0:i,w=S*4;let T=h.clippingState||null;l.value=T,T=u(v,p,w,m);for(let U=0;U!==w;++U)T[U]=e[U];h.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,p,m,v){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const h=m+x*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<h)&&(f=new Float32Array(h));for(let w=0,T=m;w!==x;++w,T+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function zm(n){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=Gi:a===Ao&&(o.mapping=Wi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Hm extends jc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,yl=[.125,.215,.35,.446,.526,.582],ii=20,oo=new Hm,Tl=new zt;let ao=null,lo=0,co=0,uo=!1;const ei=(1+Math.sqrt(5))/2,Ii=1/ei,Cl=[new R(-ei,Ii,0),new R(ei,Ii,0),new R(-Ii,0,ei),new R(Ii,0,ei),new R(0,ei,-Ii),new R(0,ei,Ii),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,lo,co),this._renderer.xr.enabled=uo,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ys,format:Qe,colorSpace:Xn,depthBuffer:!1},r=Pl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(s)),this._blurMaterial=Wm(s,t,e)}return r}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,i,r){const a=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Tl),u.toneMapping=kn,u.autoClear=!1;const m=new Xo({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new Oe(new Ar,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(Tl),x=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):S===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const w=this._cubeSize;as(r,S*w,h>2?w:0,w,w),u.setRenderTarget(r),x&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Gi||t.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;as(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cl[(r-s-1)%Cl.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Oe(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),x=s/v,f=isFinite(s)?1+Math.floor(u*x):ii;f>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ii}`);const h=[];let S=0;for(let C=0;C<ii;++C){const H=C/x,E=Math.exp(-H*H/2);h.push(E),C===0?S+=E:C<f&&(S+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=v,p.mipInt.value=w-i;const T=this._sizeLods[r],U=3*T*(r>w-Fi?r-w+Fi:0),A=4*(this._cubeSize-T);as(e,U,A,3*T,2*T),l.setRenderTarget(e),l.render(d,oo)}}function Gm(n){const t=[],e=[],i=[];let r=n;const s=n-Fi+1+yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Fi?l=yl[o-n+Fi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,x=3,f=2,h=1,S=new Float32Array(x*v*m),w=new Float32Array(f*v*m),T=new Float32Array(h*v*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,H=A>2?0:-1,E=[C,H,0,C+2/3,H,0,C+2/3,H+1,0,C,H,0,C+2/3,H+1,0,C,H+1,0];S.set(E,x*v*A),w.set(p,f*v*A);const b=[A,A,A,A,A,A];T.set(b,h*v*A)}const U=new jn;U.setAttribute("position",new en(S,x)),U.setAttribute("uv",new en(w,f)),U.setAttribute("faceIndex",new en(T,h)),t.push(U),r>Fi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pl(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=Ss,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Wm(n,t,e){const i=new Float32Array(ii),r=new R(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Rl(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ll(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===Ao,u=l===Gi||l===Wi;if(c||u){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Al(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Al(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function jm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qm(n,t,e,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const x=p.morphAttributes[v];for(let f=0,h=x.length;f<h;f++)t.remove(x[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const v in p)t.update(p[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let f=0,h=x.length;f<h;f++)t.update(x[f],n.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const S=m.array;x=m.version;for(let w=0,T=S.length;w<T;w+=3){const U=S[w+0],A=S[w+1],C=S[w+2];p.push(U,A,A,C,C,U)}}else if(v!==void 0){const S=v.array;x=v.version;for(let w=0,T=S.length/3-1;w<T;w+=3){const U=w+0,A=w+1,C=w+2;p.push(U,A,A,C,C,U)}}else return;const f=new(Fc(p)?Wc:Gc)(p,1);f.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,f)}function u(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Ym(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,s,p*o),e.update(m,i,1)}function c(p,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,p*o,v),e.update(m,i,v))}function u(p,m,v){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<v;f++)this.render(p[f]/o,m[f]);else{x.multiDrawElementsWEBGL(i,m,0,s,p,0,v);let f=0;for(let h=0;h<v;h++)f+=m[h];e.update(f,i,1)}}function d(p,m,v,x){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/o,m[h],x[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,x,0,v);let h=0;for(let S=0;S<v;S++)h+=m[S];for(let S=0;S<x.length;S++)e.update(h,i,x[S])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Km(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function $m(n,t,e){const i=new WeakMap,r=new ie;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let b=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),x===!0&&(T=2),f===!0&&(T=3);let U=a.attributes.position.count*T,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const C=new Float32Array(U*A*4*d),H=new kc(C,U,A,d);H.type=On,H.needsUpdate=!0;const E=T*4;for(let O=0;O<d;O++){const z=h[O],P=S[O],j=w[O],X=U*A*4*O;for(let Z=0;Z<z.count;Z++){const J=Z*E;v===!0&&(r.fromBufferAttribute(z,Z),C[X+J+0]=r.x,C[X+J+1]=r.y,C[X+J+2]=r.z,C[X+J+3]=0),x===!0&&(r.fromBufferAttribute(P,Z),C[X+J+4]=r.x,C[X+J+5]=r.y,C[X+J+6]=r.z,C[X+J+7]=0),f===!0&&(r.fromBufferAttribute(j,Z),C[X+J+8]=r.x,C[X+J+9]=r.y,C[X+J+10]=r.z,C[X+J+11]=j.itemSize===4?r.w:1)}}p={count:d,texture:H,size:new xt(U,A)},i.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Zm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Kc extends ye{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ki,u!==ki&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=Xi),i===void 0&&u===_r&&(i=Tr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $c=new ye,Zc=new Kc(1,1);Zc.compareFunction=Oc;const Jc=new kc,Qc=new Nd,tu=new qc,Dl=[],Il=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function $i(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Dl[r];if(s===void 0&&(s=new Float32Array(r),Dl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function As(n,t){let e=Il[t];e===void 0&&(e=new Int32Array(t),Il[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function t_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function e_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function n_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;Ol.set(i),n.uniformMatrix2fv(this.addr,!1,Ol),me(e,i)}}function i_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;Nl.set(i),n.uniformMatrix3fv(this.addr,!1,Nl),me(e,i)}}function r_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;Ul.set(i),n.uniformMatrix4fv(this.addr,!1,Ul),me(e,i)}}function s_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function o_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function a_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function l_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function c_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function h_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function d_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function p_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Zc:$c;e.setTexture2D(t||s,r)}function f_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Qc,r)}function m_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||tu,r)}function __(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Jc,r)}function v_(n){switch(n){case 5126:return Jm;case 35664:return Qm;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return h_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return __}}function g_(n,t){n.uniform1fv(this.addr,t)}function b_(n,t){const e=$i(t,this.size,2);n.uniform2fv(this.addr,e)}function x_(n,t){const e=$i(t,this.size,3);n.uniform3fv(this.addr,e)}function M_(n,t){const e=$i(t,this.size,4);n.uniform4fv(this.addr,e)}function w_(n,t){const e=$i(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function E_(n,t){const e=$i(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S_(n,t){const e=$i(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function y_(n,t){n.uniform1iv(this.addr,t)}function T_(n,t){n.uniform2iv(this.addr,t)}function C_(n,t){n.uniform3iv(this.addr,t)}function A_(n,t){n.uniform4iv(this.addr,t)}function P_(n,t){n.uniform1uiv(this.addr,t)}function R_(n,t){n.uniform2uiv(this.addr,t)}function L_(n,t){n.uniform3uiv(this.addr,t)}function D_(n,t){n.uniform4uiv(this.addr,t)}function I_(n,t,e){const i=this.cache,r=t.length,s=As(e,r);fe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||$c,s[o])}function U_(n,t,e){const i=this.cache,r=t.length,s=As(e,r);fe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Qc,s[o])}function N_(n,t,e){const i=this.cache,r=t.length,s=As(e,r);fe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||tu,s[o])}function O_(n,t,e){const i=this.cache,r=t.length,s=As(e,r);fe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Jc,s[o])}function F_(n){switch(n){case 5126:return g_;case 35664:return b_;case 35665:return x_;case 35666:return M_;case 35674:return w_;case 35675:return E_;case 35676:return S_;case 5124:case 35670:return y_;case 35667:case 35671:return T_;case 35668:case 35672:return C_;case 35669:case 35673:return A_;case 5125:return P_;case 36294:return R_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}class B_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=v_(e.type)}}class k_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}}class V_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Fl(n,t){n.seq.push(t),n.map[t.id]=t}function z_(n,t,e){const i=n.name,r=i.length;for(ho.lastIndex=0;;){const s=ho.exec(i),o=ho.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fl(e,c===void 0?new B_(a,n,t):new k_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new V_(a),Fl(e,d)),e=d}}}class hs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);z_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Bl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const H_=37297;let G_=0;function W_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function X_(n){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n);let i;switch(t===e?i="":t===vs&&e===_s?i="LinearDisplayP3ToLinearSRGB":t===_s&&e===vs&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case Ts:return[i,"LinearTransferOETF"];case $e:case Ho:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+W_(n.getShaderSource(t),o)}else return r}function j_(n,t){const e=X_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function q_(n,t){let e;switch(t){case Fh:e="Linear";break;case Bh:e="Reinhard";break;case kh:e="OptimizedCineon";break;case Vh:e="ACESFilmic";break;case Hh:e="AgX";break;case Gh:e="Neutral";break;case zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Y_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function K_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function pr(n){return n!==""}function Vl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(Z_,Q_)}const J_=new Map;function Q_(n,t){let e=Pt[t];if(e===void 0){const i=J_.get(t);if(i!==void 0)e=Pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}const tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(n){return n.replace(tv,ev)}function ev(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Ss:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function sv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function ov(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function av(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=nv(e),c=iv(e),u=rv(e),d=sv(e),p=ov(e),m=Y_(e),v=K_(s),x=r.createProgram();let f,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),h.length>0&&(h+=`
`)):(f=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),h=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==kn?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,j_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=Lo(o),o=Vl(o,e),o=zl(o,e),a=Lo(a),a=Vl(a,e),a=zl(a,e),o=Hl(o),a=Hl(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=S+f+o,T=S+h+a,U=Bl(r,r.VERTEX_SHADER,w),A=Bl(r,r.FRAGMENT_SHADER,T);r.attachShader(x,U),r.attachShader(x,A),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(O){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),P=r.getShaderInfoLog(U).trim(),j=r.getShaderInfoLog(A).trim();let X=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,U,A);else{const J=kl(r,U,"vertex"),G=kl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||j==="")&&(Z=!1);Z&&(O.diagnostics={runnable:X,programLog:z,vertexShader:{log:P,prefix:f},fragmentShader:{log:j,prefix:h}})}r.deleteShader(U),r.deleteShader(A),H=new hs(r,x),E=$_(r,x)}let H;this.getUniforms=function(){return H===void 0&&C(this),H};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,H_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=A,this}let lv=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new uv(t),e.set(t,i)),i}}class uv{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}}function hv(n,t,e,i,r,s,o){const a=new zc,l=new cv,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function f(E,b,O,z,P){const j=z.fog,X=P.geometry,Z=E.isMeshStandardMaterial?z.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),G=J&&J.mapping===Ss?J.image.height:null,tt=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Q!==void 0?Q.length:0;let Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let qt,W,et,ut;if(tt){const Gt=Ze[tt];qt=Gt.vertexShader,W=Gt.fragmentShader}else qt=E.vertexShader,W=E.fragmentShader,l.update(E),et=l.getVertexShaderID(E),ut=l.getFragmentShaderID(E);const rt=n.getRenderTarget(),Ft=P.isInstancedMesh===!0,Dt=P.isBatchedMesh===!0,I=!!E.map,Yt=!!E.matcap,_t=!!J,Kt=!!E.aoMap,gt=!!E.lightMap,Bt=!!E.bumpMap,St=!!E.normalMap,kt=!!E.displacementMap,ee=!!E.emissiveMap,y=!!E.metalnessMap,g=!!E.roughnessMap,V=E.anisotropy>0,q=E.clearcoat>0,K=E.dispersion>0,$=E.iridescence>0,mt=E.sheen>0,at=E.transmission>0,ot=V&&!!E.anisotropyMap,Mt=q&&!!E.clearcoatMap,it=q&&!!E.clearcoatNormalMap,ft=q&&!!E.clearcoatRoughnessMap,Vt=$&&!!E.iridescenceMap,vt=$&&!!E.iridescenceThicknessMap,ct=mt&&!!E.sheenColorMap,yt=mt&&!!E.sheenRoughnessMap,It=!!E.specularMap,$t=!!E.specularColorMap,Ct=!!E.specularIntensityMap,_=at&&!!E.transmissionMap,L=at&&!!E.thicknessMap,N=!!E.gradientMap,Y=!!E.alphaMap,nt=E.alphaTest>0,Tt=!!E.alphaHash,Ut=!!E.extensions;let se=kn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(se=n.toneMapping);const _e={shaderID:tt,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:W,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:ut,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Dt,instancing:Ft,instancingColor:Ft&&P.instanceColor!==null,instancingMorph:Ft&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xn,alphaToCoverage:!!E.alphaToCoverage,map:I,matcap:Yt,envMap:_t,envMapMode:_t&&J.mapping,envMapCubeUVHeight:G,aoMap:Kt,lightMap:gt,bumpMap:Bt,normalMap:St,displacementMap:p&&kt,emissiveMap:ee,normalMapObjectSpace:St&&E.normalMapType===id,normalMapTangentSpace:St&&E.normalMapType===zo,metalnessMap:y,roughnessMap:g,anisotropy:V,anisotropyMap:ot,clearcoat:q,clearcoatMap:Mt,clearcoatNormalMap:it,clearcoatRoughnessMap:ft,dispersion:K,iridescence:$,iridescenceMap:Vt,iridescenceThicknessMap:vt,sheen:mt,sheenColorMap:ct,sheenRoughnessMap:yt,specularMap:It,specularColorMap:$t,specularIntensityMap:Ct,transmission:at,transmissionMap:_,thicknessMap:L,gradientMap:N,opaque:E.transparent===!1&&E.blending===Bi&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:nt,alphaHash:Tt,combine:E.combine,mapUv:I&&x(E.map.channel),aoMapUv:Kt&&x(E.aoMap.channel),lightMapUv:gt&&x(E.lightMap.channel),bumpMapUv:Bt&&x(E.bumpMap.channel),normalMapUv:St&&x(E.normalMap.channel),displacementMapUv:kt&&x(E.displacementMap.channel),emissiveMapUv:ee&&x(E.emissiveMap.channel),metalnessMapUv:y&&x(E.metalnessMap.channel),roughnessMapUv:g&&x(E.roughnessMap.channel),anisotropyMapUv:ot&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(E.sheenRoughnessMap.channel),specularMapUv:It&&x(E.specularMap.channel),specularColorMapUv:$t&&x(E.specularColorMap.channel),specularIntensityMapUv:Ct&&x(E.specularIntensityMap.channel),transmissionMapUv:_&&x(E.transmissionMap.channel),thicknessMapUv:L&&x(E.thicknessMap.channel),alphaMapUv:Y&&x(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(I||Y),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:I&&E.map.isVideoTexture===!0&&Zt.getTransfer(E.map.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ut&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function h(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(S(b,E),w(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function w(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),E.push(a.mask)}function T(E){const b=v[E.type];let O;if(b){const z=Ze[b];O=qd.clone(z.uniforms)}else O=E.uniforms;return O}function U(E,b){let O;for(let z=0,P=u.length;z<P;z++){const j=u[z];if(j.cacheKey===b){O=j,++O.usedTimes;break}}return O===void 0&&(O=new av(n,b,E,s),u.push(O)),O}function A(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function H(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:T,acquireProgram:U,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:H}}function dv(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function pv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,p,m,v,x,f){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:f},n[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=f),t++,h}function a(d,p,m,v,x,f){const h=o(d,p,m,v,x,f);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(d,p,m,v,x,f){const h=o(d,p,m,v,x,f);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||pv),i.length>1&&i.sort(p||Wl),r.length>1&&r.sort(p||Wl)}function u(){for(let d=t,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xl,n.set(i,[o])):r>=s.length?(o=new Xl,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function _v(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let vv=0;function gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bv(n){const t=new mv,e=_v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const r=new R,s=new le,o=new le;function a(c,u){let d=0,p=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,x=0,f=0,h=0,S=0,w=0,T=0,U=0,A=0,C=0,H=0;c.sort(gv);const E=u===!0?Math.PI:1;for(let O=0,z=c.length;O<z;O++){const P=c[O],j=P.color,X=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=j.r*X*E,p+=j.g*X*E,m+=j.b*X*E;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],X);H++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const tt=P.shadow,Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=J,i.directionalShadowMatrix[v]=P.shadow.matrix,w++}i.directional[v]=G,v++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(j).multiplyScalar(X*E),G.distance=Z,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[f]=G;const tt=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,tt.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[f]=tt.matrix,P.castShadow){const Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,i.spotShadow[f]=Q,i.spotShadowMap[f]=J,U++}f++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(j).multiplyScalar(X),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[h]=G,h++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*E),G.distance=P.distance,G.decay=P.decay,P.castShadow){const tt=P.shadow,Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,i.pointShadow[x]=Q,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=P.shadow.matrix,T++}i.point[x]=G,x++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(X*E),G.groundColor.copy(P.groundColor).multiplyScalar(X*E),i.hemi[S]=G,S++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=m;const b=i.hash;(b.directionalLength!==v||b.pointLength!==x||b.spotLength!==f||b.rectAreaLength!==h||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==T||b.numSpotShadows!==U||b.numSpotMaps!==A||b.numLightProbes!==H)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=h,i.point.length=x,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=U+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=H,b.directionalLength=v,b.pointLength=x,b.spotLength=f,b.rectAreaLength=h,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=T,b.numSpotShadows=U,b.numSpotMaps=A,b.numLightProbes=H,i.version=vv++)}function l(c,u){let d=0,p=0,m=0,v=0,x=0;const f=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const w=c[h];if(w.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(w.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),m++}else if(w.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),o.identity(),s.copy(w.matrixWorld),s.premultiply(f),o.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:i}}function jl(n){const t=new bv(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xv(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new jl(n),t.set(r,[a])):s>=o.length?(a=new jl(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Mv extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wv extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yv(n,t,e){let i=new jo;const r=new xt,s=new xt,o=new ie,a=new Mv({depthPacking:nd}),l=new wv,c={},u=e.maxTextureSize,d={[zn]:Pe,[Pe]:zn,[mn]:mn},p=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ev,fragmentShader:Sv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new jn;v.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Oe(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let h=this.type;this.render=function(A,C,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const P=h!==fn&&this.type===fn,j=h===fn&&this.type!==fn;for(let X=0,Z=A.length;X<Z;X++){const J=A[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const tt=G.getFrameExtents();if(r.multiply(tt),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/tt.x),r.x=s.x*tt.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/tt.y),r.y=s.y*tt.y,G.mapSize.y=s.y)),G.map===null||P===!0||j===!0){const dt=this.type!==fn?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new ai(r.x,r.y,dt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Q=G.getViewportCount();for(let dt=0;dt<Q;dt++){const Ot=G.getViewport(dt);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),z.viewport(o),G.updateMatrices(J,dt),i=G.getFrustum(),T(C,H,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===fn&&S(G,H),G.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(E,b,O)};function S(A,C){const H=t.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,H,p,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,H,m,x,null)}function w(A,C,H,E){let b=null;const O=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)b=O;else if(b=H.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=b.uuid,P=C.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let X=j[P];X===void 0&&(X=b.clone(),j[P]=X,C.addEventListener("dispose",U)),b=X}if(b.visible=C.visible,b.wireframe=C.wireframe,E===fn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=n.properties.get(b);z.light=H}return b}function T(A,C,H,E,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);const P=t.update(A),j=A.material;if(Array.isArray(j)){const X=P.groups;for(let Z=0,J=X.length;Z<J;Z++){const G=X[Z],tt=j[G.materialIndex];if(tt&&tt.visible){const Q=w(A,tt,E,b);A.onBeforeShadow(n,A,C,H,P,Q,G),n.renderBufferDirect(H,null,P,Q,A,G),A.onAfterShadow(n,A,C,H,P,Q,G)}}}else if(j.visible){const X=w(A,j,E,b);A.onBeforeShadow(n,A,C,H,P,X,null),n.renderBufferDirect(H,null,P,X,A,null),A.onAfterShadow(n,A,C,H,P,X,null)}}const z=A.children;for(let P=0,j=z.length;P<j;P++)T(z[P],C,H,E,b)}function U(A){A.target.removeEventListener("dispose",U);for(const H in c){const E=c[H],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function Tv(n){function t(){let _=!1;const L=new ie;let N=null;const Y=new ie(0,0,0,0);return{setMask:function(nt){N!==nt&&!_&&(n.colorMask(nt,nt,nt,nt),N=nt)},setLocked:function(nt){_=nt},setClear:function(nt,Tt,Ut,se,_e){_e===!0&&(nt*=se,Tt*=se,Ut*=se),L.set(nt,Tt,Ut,se),Y.equals(L)===!1&&(n.clearColor(nt,Tt,Ut,se),Y.copy(L))},reset:function(){_=!1,N=null,Y.set(-1,0,0,0)}}}function e(){let _=!1,L=null,N=null,Y=null;return{setTest:function(nt){nt?ut(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(nt){L!==nt&&!_&&(n.depthMask(nt),L=nt)},setFunc:function(nt){if(N!==nt){switch(nt){case Ah:n.depthFunc(n.NEVER);break;case Ph:n.depthFunc(n.ALWAYS);break;case Rh:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case Lh:n.depthFunc(n.EQUAL);break;case Dh:n.depthFunc(n.GEQUAL);break;case Ih:n.depthFunc(n.GREATER);break;case Uh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}N=nt}},setLocked:function(nt){_=nt},setClear:function(nt){Y!==nt&&(n.clearDepth(nt),Y=nt)},reset:function(){_=!1,L=null,N=null,Y=null}}}function i(){let _=!1,L=null,N=null,Y=null,nt=null,Tt=null,Ut=null,se=null,_e=null;return{setTest:function(Gt){_||(Gt?ut(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(Gt){L!==Gt&&!_&&(n.stencilMask(Gt),L=Gt)},setFunc:function(Gt,ce,Qt){(N!==Gt||Y!==ce||nt!==Qt)&&(n.stencilFunc(Gt,ce,Qt),N=Gt,Y=ce,nt=Qt)},setOp:function(Gt,ce,Qt){(Tt!==Gt||Ut!==ce||se!==Qt)&&(n.stencilOp(Gt,ce,Qt),Tt=Gt,Ut=ce,se=Qt)},setLocked:function(Gt){_=Gt},setClear:function(Gt){_e!==Gt&&(n.clearStencil(Gt),_e=Gt)},reset:function(){_=!1,L=null,N=null,Y=null,nt=null,Tt=null,Ut=null,se=null,_e=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],m=null,v=!1,x=null,f=null,h=null,S=null,w=null,T=null,U=null,A=new zt(0,0,0),C=0,H=!1,E=null,b=null,O=null,z=null,P=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=Z>=2);let G=null,tt={};const Q=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),Ot=new ie().fromArray(Q),qt=new ie().fromArray(dt);function W(_,L,N,Y){const nt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(_,Tt),n.texParameteri(_,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(_,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<N;Ut++)_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(L+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return Tt}const et={};et[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),s.setFunc(fs),Bt(!1),St(Ta),ut(n.CULL_FACE),Kt(Bn);function ut(_){c[_]!==!0&&(n.enable(_),c[_]=!0)}function rt(_){c[_]!==!1&&(n.disable(_),c[_]=!1)}function Ft(_,L){return u[_]!==L?(n.bindFramebuffer(_,L),u[_]=L,_===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=L),_===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=L),!0):!1}function Dt(_,L){let N=p,Y=!1;if(_){N=d.get(L),N===void 0&&(N=[],d.set(L,N));const nt=_.textures;if(N.length!==nt.length||N[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Ut=nt.length;Tt<Ut;Tt++)N[Tt]=n.COLOR_ATTACHMENT0+Tt;N.length=nt.length,Y=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,Y=!0);Y&&n.drawBuffers(N)}function I(_){return m!==_?(n.useProgram(_),m=_,!0):!1}const Yt={[ni]:n.FUNC_ADD,[hh]:n.FUNC_SUBTRACT,[dh]:n.FUNC_REVERSE_SUBTRACT};Yt[ph]=n.MIN,Yt[fh]=n.MAX;const _t={[mh]:n.ZERO,[_h]:n.ONE,[vh]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[Eh]:n.SRC_ALPHA_SATURATE,[Mh]:n.DST_COLOR,[bh]:n.DST_ALPHA,[gh]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[wh]:n.ONE_MINUS_DST_COLOR,[xh]:n.ONE_MINUS_DST_ALPHA,[Sh]:n.CONSTANT_COLOR,[yh]:n.ONE_MINUS_CONSTANT_COLOR,[Th]:n.CONSTANT_ALPHA,[Ch]:n.ONE_MINUS_CONSTANT_ALPHA};function Kt(_,L,N,Y,nt,Tt,Ut,se,_e,Gt){if(_===Bn){v===!0&&(rt(n.BLEND),v=!1);return}if(v===!1&&(ut(n.BLEND),v=!0),_!==uh){if(_!==x||Gt!==H){if((f!==ni||w!==ni)&&(n.blendEquation(n.FUNC_ADD),f=ni,w=ni),Gt)switch(_){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFunc(n.ONE,n.ONE);break;case Aa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ca:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Aa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}h=null,S=null,T=null,U=null,A.set(0,0,0),C=0,x=_,H=Gt}return}nt=nt||L,Tt=Tt||N,Ut=Ut||Y,(L!==f||nt!==w)&&(n.blendEquationSeparate(Yt[L],Yt[nt]),f=L,w=nt),(N!==h||Y!==S||Tt!==T||Ut!==U)&&(n.blendFuncSeparate(_t[N],_t[Y],_t[Tt],_t[Ut]),h=N,S=Y,T=Tt,U=Ut),(se.equals(A)===!1||_e!==C)&&(n.blendColor(se.r,se.g,se.b,_e),A.copy(se),C=_e),x=_,H=!1}function gt(_,L){_.side===mn?rt(n.CULL_FACE):ut(n.CULL_FACE);let N=_.side===Pe;L&&(N=!N),Bt(N),_.blending===Bi&&_.transparent===!1?Kt(Bn):Kt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),s.setFunc(_.depthFunc),s.setTest(_.depthTest),s.setMask(_.depthWrite),r.setMask(_.colorWrite);const Y=_.stencilWrite;o.setTest(Y),Y&&(o.setMask(_.stencilWriteMask),o.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),o.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),ee(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(_){E!==_&&(_?n.frontFace(n.CW):n.frontFace(n.CCW),E=_)}function St(_){_!==ah?(ut(n.CULL_FACE),_!==b&&(_===Ta?n.cullFace(n.BACK):_===lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),b=_}function kt(_){_!==O&&(X&&n.lineWidth(_),O=_)}function ee(_,L,N){_?(ut(n.POLYGON_OFFSET_FILL),(z!==L||P!==N)&&(n.polygonOffset(L,N),z=L,P=N)):rt(n.POLYGON_OFFSET_FILL)}function y(_){_?ut(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function g(_){_===void 0&&(_=n.TEXTURE0+j-1),G!==_&&(n.activeTexture(_),G=_)}function V(_,L,N){N===void 0&&(G===null?N=n.TEXTURE0+j-1:N=G);let Y=tt[N];Y===void 0&&(Y={type:void 0,texture:void 0},tt[N]=Y),(Y.type!==_||Y.texture!==L)&&(G!==N&&(n.activeTexture(N),G=N),n.bindTexture(_,L||et[_]),Y.type=_,Y.texture=L)}function q(){const _=tt[G];_!==void 0&&_.type!==void 0&&(n.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function mt(){try{n.texSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ft(){try{n.texStorage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Vt(){try{n.texImage2D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function vt(){try{n.texImage3D.apply(n,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ct(_){Ot.equals(_)===!1&&(n.scissor(_.x,_.y,_.z,_.w),Ot.copy(_))}function yt(_){qt.equals(_)===!1&&(n.viewport(_.x,_.y,_.z,_.w),qt.copy(_))}function It(_,L){let N=l.get(L);N===void 0&&(N=new WeakMap,l.set(L,N));let Y=N.get(_);Y===void 0&&(Y=n.getUniformBlockIndex(L,_.name),N.set(_,Y))}function $t(_,L){const Y=l.get(L).get(_);a.get(L)!==Y&&(n.uniformBlockBinding(L,Y,_.__bindingPointIndex),a.set(L,Y))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,tt={},u={},d=new WeakMap,p=[],m=null,v=!1,x=null,f=null,h=null,S=null,w=null,T=null,U=null,A=new zt(0,0,0),C=0,H=!1,E=null,b=null,O=null,z=null,P=null,Ot.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ut,disable:rt,bindFramebuffer:Ft,drawBuffers:Dt,useProgram:I,setBlending:Kt,setMaterial:gt,setFlipSided:Bt,setCullFace:St,setLineWidth:kt,setPolygonOffset:ee,setScissorTest:y,activeTexture:g,bindTexture:V,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Vt,texImage3D:vt,updateUBOMapping:It,uniformBlockBinding:$t,texStorage2D:it,texStorage3D:ft,texSubImage2D:mt,texSubImage3D:at,compressedTexSubImage2D:ot,compressedTexSubImage3D:Mt,scissor:ct,viewport:yt,reset:Ct}}function Cv(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):gr("canvas")}function x(y,g,V){let q=1;const K=ee(y);if((K.width>V||K.height>V)&&(q=V/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(q*K.width),mt=Math.floor(q*K.height);d===void 0&&(d=v($,mt));const at=g?v($,mt):d;return at.width=$,at.height=mt,at.getContext("2d").drawImage(y,0,0,$,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+mt+")."),at}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function f(y){return y.generateMipmaps&&y.minFilter!==Ge&&y.minFilter!==Ye}function h(y){n.generateMipmap(y)}function S(y,g,V,q,K=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=g;if(g===n.RED&&(V===n.FLOAT&&($=n.R32F),V===n.HALF_FLOAT&&($=n.R16F),V===n.UNSIGNED_BYTE&&($=n.R8)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.R8UI),V===n.UNSIGNED_SHORT&&($=n.R16UI),V===n.UNSIGNED_INT&&($=n.R32UI),V===n.BYTE&&($=n.R8I),V===n.SHORT&&($=n.R16I),V===n.INT&&($=n.R32I)),g===n.RG&&(V===n.FLOAT&&($=n.RG32F),V===n.HALF_FLOAT&&($=n.RG16F),V===n.UNSIGNED_BYTE&&($=n.RG8)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RG8UI),V===n.UNSIGNED_SHORT&&($=n.RG16UI),V===n.UNSIGNED_INT&&($=n.RG32UI),V===n.BYTE&&($=n.RG8I),V===n.SHORT&&($=n.RG16I),V===n.INT&&($=n.RG32I)),g===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),g===n.RGBA){const mt=K?ms:Zt.getTransfer(q);V===n.FLOAT&&($=n.RGBA32F),V===n.HALF_FLOAT&&($=n.RGBA16F),V===n.UNSIGNED_BYTE&&($=mt===te?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(y,g){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ge&&y.minFilter!==Ye?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function T(y){const g=y.target;g.removeEventListener("dispose",T),A(g),g.isVideoTexture&&u.delete(g)}function U(y){const g=y.target;g.removeEventListener("dispose",U),H(g)}function A(y){const g=i.get(y);if(g.__webglInit===void 0)return;const V=y.source,q=p.get(V);if(q){const K=q[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(y),Object.keys(q).length===0&&p.delete(V)}i.remove(y)}function C(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const V=y.source,q=p.get(V);delete q[g.__cacheKey],o.memory.textures--}function H(y){const g=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let K=0;K<g.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[q][K]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const V=y.textures;for(let q=0,K=V.length;q<K;q++){const $=i.get(V[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(V[q])}i.remove(y)}let E=0;function b(){E=0}function O(){const y=E;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),E+=1,y}function z(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function P(y,g){const V=i.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.version>0&&V.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(V,y,g);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function j(y,g){const V=i.get(y);if(y.version>0&&V.__version!==y.version){Ot(V,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function X(y,g){const V=i.get(y);if(y.version>0&&V.__version!==y.version){Ot(V,y,g);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function Z(y,g){const V=i.get(y);if(y.version>0&&V.__version!==y.version){qt(V,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}const J={[Po]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Ro]:n.MIRRORED_REPEAT},G={[Ge]:n.NEAREST,[Wh]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[Os]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},tt={[rd]:n.NEVER,[ud]:n.ALWAYS,[sd]:n.LESS,[Oc]:n.LEQUAL,[od]:n.EQUAL,[cd]:n.GEQUAL,[ad]:n.GREATER,[ld]:n.NOTEQUAL};function Q(y,g){if(g.type===On&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ye||g.magFilter===Os||g.magFilter===Vr||g.magFilter===si||g.minFilter===Ye||g.minFilter===Os||g.minFilter===Vr||g.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,J[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,J[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,J[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,G[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,G[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,tt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ge||g.minFilter!==Vr&&g.minFilter!==si||g.type===On&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function dt(y,g){let V=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",T));const q=g.source;let K=p.get(q);K===void 0&&(K={},p.set(q,K));const $=z(g);if($!==y.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),K[$].usedTimes++;const mt=K[y.__cacheKey];mt!==void 0&&(K[y.__cacheKey].usedTimes--,mt.usedTimes===0&&C(g)),y.__cacheKey=$,y.__webglTexture=K[$].texture}return V}function Ot(y,g,V){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const K=dt(y,g),$=g.source;e.bindTexture(q,y.__webglTexture,n.TEXTURE0+V);const mt=i.get($);if($.version!==mt.__version||K===!0){e.activeTexture(n.TEXTURE0+V);const at=Zt.getPrimaries(Zt.workingColorSpace),ot=g.colorSpace===Nn?null:Zt.getPrimaries(g.colorSpace),Mt=g.colorSpace===Nn||at===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let it=x(g.image,!1,r.maxTextureSize);it=kt(g,it);const ft=s.convert(g.format,g.colorSpace),Vt=s.convert(g.type);let vt=S(g.internalFormat,ft,Vt,g.colorSpace,g.isVideoTexture);Q(q,g);let ct;const yt=g.mipmaps,It=g.isVideoTexture!==!0,$t=mt.__version===void 0||K===!0,Ct=$.dataReady,_=w(g,it);if(g.isDepthTexture)vt=n.DEPTH_COMPONENT16,g.type===On?vt=n.DEPTH_COMPONENT32F:g.type===Xi?vt=n.DEPTH_COMPONENT24:g.type===Tr&&(vt=n.DEPTH24_STENCIL8),$t&&(It?e.texStorage2D(n.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,vt,it.width,it.height,0,ft,Vt,null));else if(g.isDataTexture)if(yt.length>0){It&&$t&&e.texStorage2D(n.TEXTURE_2D,_,vt,yt[0].width,yt[0].height);for(let L=0,N=yt.length;L<N;L++)ct=yt[L],It?Ct&&e.texSubImage2D(n.TEXTURE_2D,L,0,0,ct.width,ct.height,ft,Vt,ct.data):e.texImage2D(n.TEXTURE_2D,L,vt,ct.width,ct.height,0,ft,Vt,ct.data);g.generateMipmaps=!1}else It?($t&&e.texStorage2D(n.TEXTURE_2D,_,vt,it.width,it.height),Ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,ft,Vt,it.data)):e.texImage2D(n.TEXTURE_2D,0,vt,it.width,it.height,0,ft,Vt,it.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_,vt,yt[0].width,yt[0].height,it.depth);for(let L=0,N=yt.length;L<N;L++)ct=yt[L],g.format!==Qe?ft!==null?It?Ct&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,ct.width,ct.height,it.depth,ft,ct.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,L,vt,ct.width,ct.height,it.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?Ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,L,0,0,0,ct.width,ct.height,it.depth,ft,Vt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,L,vt,ct.width,ct.height,it.depth,0,ft,Vt,ct.data)}else{It&&$t&&e.texStorage2D(n.TEXTURE_2D,_,vt,yt[0].width,yt[0].height);for(let L=0,N=yt.length;L<N;L++)ct=yt[L],g.format!==Qe?ft!==null?It?Ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,L,0,0,ct.width,ct.height,ft,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,L,vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?Ct&&e.texSubImage2D(n.TEXTURE_2D,L,0,0,ct.width,ct.height,ft,Vt,ct.data):e.texImage2D(n.TEXTURE_2D,L,vt,ct.width,ct.height,0,ft,Vt,ct.data)}else if(g.isDataArrayTexture)It?($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_,vt,it.width,it.height,it.depth),Ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,Vt,it.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,ft,Vt,it.data);else if(g.isData3DTexture)It?($t&&e.texStorage3D(n.TEXTURE_3D,_,vt,it.width,it.height,it.depth),Ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,Vt,it.data)):e.texImage3D(n.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,ft,Vt,it.data);else if(g.isFramebufferTexture){if($t)if(It)e.texStorage2D(n.TEXTURE_2D,_,vt,it.width,it.height);else{let L=it.width,N=it.height;for(let Y=0;Y<_;Y++)e.texImage2D(n.TEXTURE_2D,Y,vt,L,N,0,ft,Vt,null),L>>=1,N>>=1}}else if(yt.length>0){if(It&&$t){const L=ee(yt[0]);e.texStorage2D(n.TEXTURE_2D,_,vt,L.width,L.height)}for(let L=0,N=yt.length;L<N;L++)ct=yt[L],It?Ct&&e.texSubImage2D(n.TEXTURE_2D,L,0,0,ft,Vt,ct):e.texImage2D(n.TEXTURE_2D,L,vt,ft,Vt,ct);g.generateMipmaps=!1}else if(It){if($t){const L=ee(it);e.texStorage2D(n.TEXTURE_2D,_,vt,L.width,L.height)}Ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Vt,it)}else e.texImage2D(n.TEXTURE_2D,0,vt,ft,Vt,it);f(g)&&h(q),mt.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function qt(y,g,V){if(g.image.length!==6)return;const q=dt(y,g),K=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+V);const $=i.get(K);if(K.version!==$.__version||q===!0){e.activeTexture(n.TEXTURE0+V);const mt=Zt.getPrimaries(Zt.workingColorSpace),at=g.colorSpace===Nn?null:Zt.getPrimaries(g.colorSpace),ot=g.colorSpace===Nn||mt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Mt=g.isCompressedTexture||g.image[0].isCompressedTexture,it=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let N=0;N<6;N++)!Mt&&!it?ft[N]=x(g.image[N],!0,r.maxCubemapSize):ft[N]=it?g.image[N].image:g.image[N],ft[N]=kt(g,ft[N]);const Vt=ft[0],vt=s.convert(g.format,g.colorSpace),ct=s.convert(g.type),yt=S(g.internalFormat,vt,ct,g.colorSpace),It=g.isVideoTexture!==!0,$t=$.__version===void 0||q===!0,Ct=K.dataReady;let _=w(g,Vt);Q(n.TEXTURE_CUBE_MAP,g);let L;if(Mt){It&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_,yt,Vt.width,Vt.height);for(let N=0;N<6;N++){L=ft[N].mipmaps;for(let Y=0;Y<L.length;Y++){const nt=L[Y];g.format!==Qe?vt!==null?It?Ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y,0,0,nt.width,nt.height,vt,nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y,yt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?Ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y,0,0,nt.width,nt.height,vt,ct,nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y,yt,nt.width,nt.height,0,vt,ct,nt.data)}}}else{if(L=g.mipmaps,It&&$t){L.length>0&&_++;const N=ee(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_,yt,N.width,N.height)}for(let N=0;N<6;N++)if(it){It?Ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ft[N].width,ft[N].height,vt,ct,ft[N].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,ft[N].width,ft[N].height,0,vt,ct,ft[N].data);for(let Y=0;Y<L.length;Y++){const Tt=L[Y].image[N].image;It?Ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y+1,0,0,Tt.width,Tt.height,vt,ct,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y+1,yt,Tt.width,Tt.height,0,vt,ct,Tt.data)}}else{It?Ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,vt,ct,ft[N]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,yt,vt,ct,ft[N]);for(let Y=0;Y<L.length;Y++){const nt=L[Y];It?Ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y+1,0,0,vt,ct,nt.image[N]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y+1,yt,vt,ct,nt.image[N])}}}f(g)&&h(n.TEXTURE_CUBE_MAP),$.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function W(y,g,V,q,K,$){const mt=s.convert(V.format,V.colorSpace),at=s.convert(V.type),ot=S(V.internalFormat,mt,at,V.colorSpace);if(!i.get(g).__hasExternalTextures){const it=Math.max(1,g.width>>$),ft=Math.max(1,g.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,$,ot,it,ft,g.depth,0,mt,at,null):e.texImage2D(K,$,ot,it,ft,0,mt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,i.get(V).__webglTexture,0,gt(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,i.get(V).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(y,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let q=n.DEPTH_COMPONENT24;if(V||Bt(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===On?q=n.DEPTH_COMPONENT32F:K.type===Xi&&(q=n.DEPTH_COMPONENT24));const $=gt(g);Bt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const q=gt(g);V&&Bt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,g.width,g.height):Bt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const q=g.textures;for(let K=0;K<q.length;K++){const $=q[K],mt=s.convert($.format,$.colorSpace),at=s.convert($.type),ot=S($.internalFormat,mt,at,$.colorSpace),Mt=gt(g);V&&Bt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,ot,g.width,g.height):Bt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,ot,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ot,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),P(g.depthTexture,0);const q=i.get(g.depthTexture).__webglTexture,K=gt(g);if(g.depthTexture.format===ki)Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(g.depthTexture.format===_r)Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function rt(y){const g=i.get(y),V=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ut(g.__webglFramebuffer,y)}else if(V){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]=n.createRenderbuffer(),et(g.__webglDepthbuffer[q],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),et(g.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(y,g,V){const q=i.get(y);g!==void 0&&W(q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&rt(y)}function Dt(y){const g=y.texture,V=i.get(y),q=i.get(g);y.addEventListener("dispose",U);const K=y.textures,$=y.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let ot=0;ot<g.mipmaps.length;ot++)V.__webglFramebuffer[at][ot]=n.createFramebuffer()}else V.__webglFramebuffer[at]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)V.__webglFramebuffer[at]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(mt)for(let at=0,ot=K.length;at<ot;at++){const Mt=i.get(K[at]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&Bt(y)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){const ot=K[at];V.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Mt=s.convert(ot.format,ot.colorSpace),it=s.convert(ot.type),ft=S(ot.internalFormat,Mt,it,ot.colorSpace,y.isXRRenderTarget===!0),Vt=gt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ft,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,V.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),et(V.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Q(n.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let ot=0;ot<g.mipmaps.length;ot++)W(V.__webglFramebuffer[at][ot],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ot);else W(V.__webglFramebuffer[at],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let at=0,ot=K.length;at<ot;at++){const Mt=K[at],it=i.get(Mt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Q(n.TEXTURE_2D,Mt),W(V.__webglFramebuffer,y,Mt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),f(Mt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(at=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),Q(at,g),g.mipmaps&&g.mipmaps.length>0)for(let ot=0;ot<g.mipmaps.length;ot++)W(V.__webglFramebuffer[ot],y,g,n.COLOR_ATTACHMENT0,at,ot);else W(V.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,at,0);f(g)&&h(at),e.unbindTexture()}y.depthBuffer&&rt(y)}function I(y){const g=y.textures;for(let V=0,q=g.length;V<q;V++){const K=g[V];if(f(K)){const $=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(K).__webglTexture;e.bindTexture($,mt),h($),e.unbindTexture()}}}const Yt=[],_t=[];function Kt(y){if(y.samples>0){if(Bt(y)===!1){const g=y.textures,V=y.width,q=y.height;let K=n.COLOR_BUFFER_BIT;const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(y),at=g.length>1;if(at)for(let ot=0;ot<g.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ot]);const Mt=i.get(g[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,K,n.NEAREST),l===!0&&(Yt.length=0,_t.length=0,Yt.push(n.COLOR_ATTACHMENT0+ot),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Yt.push($),_t.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ot=0;ot<g.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ot]);const Mt=i.get(g[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function gt(y){return Math.min(r.maxSamples,y.samples)}function Bt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function St(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function kt(y,g){const V=y.colorSpace,q=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||V!==Xn&&V!==Nn&&(Zt.getTransfer(V)===te?(q!==Qe||K!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),g}function ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=b,this.setTexture2D=P,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Bt}function Av(n,t){function e(i,r=Nn){let s;const o=Zt.getTransfer(r);if(i===Hn)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.BYTE;if(i===jh)return n.SHORT;if(i===Pc)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===ys)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===Qe)return n.RGBA;if(i===$h)return n.LUMINANCE;if(i===Zh)return n.LUMINANCE_ALPHA;if(i===ki)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===Qh)return n.RG;if(i===Uc)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===Fs||i===Bs||i===ks||i===Vs)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ra||i===La||i===Da||i===Ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Na||i===Oa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ua||i===Na)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===Ba||i===ka||i===Va||i===za||i===Ha||i===Ga||i===Wa||i===Xa||i===ja||i===qa||i===Ya||i===Ka||i===$a)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ja)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$a)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===Za||i===Ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===zs)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===Qa||i===tl||i===el)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Pv extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ls extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rv={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,i),h=this._getHandJoint(c,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new Gn({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oe(new Cs(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Uv extends di{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,v=null;const x=new Iv,f=e.getContextAttributes();let h=null,S=null;const w=[],T=[],U=new xt;let A=null;const C=new Ne;C.layers.enable(1),C.viewport=new ie;const H=new Ne;H.layers.enable(2),H.viewport=new ie;const E=[C,H],b=new Pv;b.layers.enable(1),b.layers.enable(2);let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=w[W];return et===void 0&&(et=new po,w[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=w[W];return et===void 0&&(et=new po,w[W]=et),et.getGripSpace()},this.getHand=function(W){let et=w[W];return et===void 0&&(et=new po,w[W]=et),et.getHandSpace()};function P(W){const et=T.indexOf(W.inputSource);if(et===-1)return;const ut=w[et];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||o),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let W=0;W<w.length;W++){const et=T[W];et!==null&&(T[W]=null,w[W].disconnect(et))}O=null,z=null,x.reset(),t.setRenderTarget(h),m=null,p=null,d=null,r=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ai(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,ut=null,rt=null;f.depth&&(rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?_r:ki,ut=f.stencil?Tr:Xi);const Ft={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(Ft),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new ai(p.textureWidth,p.textureHeight,{format:Qe,type:Hn,depthTexture:new Kc(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qt.setContext(r),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(W){for(let et=0;et<W.removed.length;et++){const ut=W.removed[et],rt=T.indexOf(ut);rt>=0&&(T[rt]=null,w[rt].disconnect(ut))}for(let et=0;et<W.added.length;et++){const ut=W.added[et];let rt=T.indexOf(ut);if(rt===-1){for(let Dt=0;Dt<w.length;Dt++)if(Dt>=T.length){T.push(ut),rt=Dt;break}else if(T[Dt]===null){T[Dt]=ut,rt=Dt;break}if(rt===-1)break}const Ft=w[rt];Ft&&Ft.connect(ut)}}const Z=new R,J=new R;function G(W,et,ut){Z.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(ut.matrixWorld);const rt=Z.distanceTo(J),Ft=et.projectionMatrix.elements,Dt=ut.projectionMatrix.elements,I=Ft[14]/(Ft[10]-1),Yt=Ft[14]/(Ft[10]+1),_t=(Ft[9]+1)/Ft[5],Kt=(Ft[9]-1)/Ft[5],gt=(Ft[8]-1)/Ft[0],Bt=(Dt[8]+1)/Dt[0],St=I*gt,kt=I*Bt,ee=rt/(-gt+Bt),y=ee*-gt;et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(y),W.translateZ(ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const g=I+ee,V=Yt+ee,q=St-y,K=kt+(rt-y),$=_t*Yt/V*g,mt=Kt*Yt/V*g;W.projectionMatrix.makePerspective(q,K,$,mt,g,V),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function tt(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),b.near=H.near=C.near=W.near,b.far=H.far=C.far=W.far,(O!==b.near||z!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,z=b.far,C.near=O,C.far=z,H.near=O,H.far=z,C.updateProjectionMatrix(),H.updateProjectionMatrix(),W.updateProjectionMatrix());const et=W.parent,ut=b.cameras;tt(b,et);for(let rt=0;rt<ut.length;rt++)tt(ut[rt],et);ut.length===2?G(b,C,H):b.projectionMatrix.copy(C.projectionMatrix),Q(W,b,et)};function Q(W,et,ut){ut===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=vr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let dt=null;function Ot(W,et){if(u=et.getViewerPose(c||o),v=et,u!==null){const ut=u.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let rt=!1;ut.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Dt=0;Dt<ut.length;Dt++){const I=ut[Dt];let Yt=null;if(m!==null)Yt=m.getViewport(I);else{const Kt=d.getViewSubImage(p,I);Yt=Kt.viewport,Dt===0&&(t.setRenderTargetTextures(S,Kt.colorTexture,p.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(S))}let _t=E[Dt];_t===void 0&&(_t=new Ne,_t.layers.enable(Dt),_t.viewport=new ie,E[Dt]=_t),_t.matrix.fromArray(I.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(I.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Dt===0&&(b.matrix.copy(_t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(_t)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Dt=d.getDepthInformation(ut[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,r.renderState)}}for(let ut=0;ut<w.length;ut++){const rt=T[ut],Ft=w[ut];rt!==null&&Ft!==void 0&&Ft.update(rt,et,c||o)}x.render(t,b),dt&&dt(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}const qt=new Yc;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(W){dt=W},this.dispose=function(){}}}const Qn=new Ke,Nv=new le;function Ov(n,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,Xc(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,S,w,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),d(f,h)):h.isMeshPhongMaterial?(s(f,h),u(f,h)):h.isMeshStandardMaterial?(s(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,T)):h.isMeshMatcapMaterial?(s(f,h),v(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),x(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,S,w):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Pe&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Pe&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const S=t.get(h),w=S.envMap,T=S.envMapRotation;if(w&&(f.envMap.value=w,Qn.copy(T),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),f.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Qn)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const U=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*U,e(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,S,w){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*S,f.scale.value=w*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,S){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const S=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function c(S,w){let T=r[S.id];T===void 0&&(v(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",f));const U=w.program;i.updateUBOMapping(S,U);const A=t.render.frame;s[S.id]!==A&&(p(S),s[S.id]=A)}function u(S){const w=d();S.__bindingPointIndex=w;const T=n.createBuffer(),U=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const w=r[S.id],T=S.uniforms,U=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,C=T.length;A<C;A++){const H=Array.isArray(T[A])?T[A]:[T[A]];for(let E=0,b=H.length;E<b;E++){const O=H[E];if(m(O,A,E,U)===!0){const z=O.__offset,P=Array.isArray(O.value)?O.value:[O.value];let j=0;for(let X=0;X<P.length;X++){const Z=P[X],J=x(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+j,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,w,T,U){const A=S.value,C=w+"_"+T;if(U[C]===void 0)return typeof A=="number"||typeof A=="boolean"?U[C]=A:U[C]=A.clone(),!0;{const H=U[C];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return U[C]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function v(S){const w=S.uniforms;let T=0;const U=16;for(let C=0,H=w.length;C<H;C++){const E=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,O=E.length;b<O;b++){const z=E[b],P=Array.isArray(z.value)?z.value:[z.value];for(let j=0,X=P.length;j<X;j++){const Z=P[j],J=x(Z),G=T%U;G!==0&&U-G<J.boundary&&(T+=U-G),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=J.storage}}}const A=T%U;return A>0&&(T+=U-A),S.__size=T,S.__cache={},this}function x(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function f(S){const w=S.target;w.removeEventListener("dispose",f);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Bv{constructor(t={}){const{canvas:e=Ad(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const h=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const w=this;let T=!1,U=0,A=0,C=null,H=-1,E=null;const b=new ie,O=new ie;let z=null;const P=new zt(0);let j=0,X=e.width,Z=e.height,J=1,G=null,tt=null;const Q=new ie(0,0,X,Z),dt=new ie(0,0,X,Z);let Ot=!1;const qt=new jo;let W=!1,et=!1;const ut=new le,rt=new R,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return C===null?J:1}let I=i;function Yt(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",_,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",N,!1),I===null){const D="webgl2";if(I=Yt(D,M),I===null)throw Yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _t,Kt,gt,Bt,St,kt,ee,y,g,V,q,K,$,mt,at,ot,Mt,it,ft,Vt,vt,ct,yt,It;function $t(){_t=new jm(I),_t.init(),ct=new Av(I,_t),Kt=new km(I,_t,t,ct),gt=new Tv(I),Bt=new Km(I),St=new dv,kt=new Cv(I,_t,gt,St,Kt,ct,Bt),ee=new zm(w),y=new Xm(w),g=new tp(I),yt=new Fm(I,g),V=new qm(I,g,Bt,yt),q=new Zm(I,V,g,Bt),ft=new $m(I,Kt,kt),ot=new Vm(St),K=new hv(w,ee,y,_t,Kt,yt,ot),$=new Ov(w,St),mt=new fv,at=new xv(_t),it=new Om(w,ee,y,gt,q,p,l),Mt=new yv(w,q,Kt),It=new Fv(I,Bt,Kt,gt),Vt=new Bm(I,_t,Bt),vt=new Ym(I,_t,Bt),Bt.programs=K.programs,w.capabilities=Kt,w.extensions=_t,w.properties=St,w.renderLists=mt,w.shadowMap=Mt,w.state=gt,w.info=Bt}$t();const Ct=new Uv(w,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=_t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(X,Z,!1))},this.getSize=function(M){return M.set(X,Z)},this.setSize=function(M,D,k=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Z=D,e.width=Math.floor(M*J),e.height=Math.floor(D*J),k===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(X*J,Z*J).floor()},this.setDrawingBufferSize=function(M,D,k){X=M,Z=D,J=k,e.width=Math.floor(M*k),e.height=Math.floor(D*k),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,D,k,F){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,D,k,F),gt.viewport(b.copy(Q).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(dt)},this.setScissor=function(M,D,k,F){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,D,k,F),gt.scissor(O.copy(dt).multiplyScalar(J).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(M){gt.setScissorTest(Ot=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){tt=M},this.getClearColor=function(M){return M.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(M=!0,D=!0,k=!0){let F=0;if(M){let B=!1;if(C!==null){const lt=C.texture.format;B=lt===Nc||lt===Uc||lt===Ic}if(B){const lt=C.texture.type,ht=lt===Hn||lt===Xi||lt===Pc||lt===Tr||lt===Lc||lt===Dc,pt=it.getClearColor(),bt=it.getClearAlpha(),wt=pt.r,At=pt.g,Nt=pt.b;ht?(m[0]=wt,m[1]=At,m[2]=Nt,m[3]=bt,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=wt,v[1]=At,v[2]=Nt,v[3]=bt,I.clearBufferiv(I.COLOR,0,v))}else F|=I.COLOR_BUFFER_BIT}D&&(F|=I.DEPTH_BUFFER_BIT),k&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",N,!1),mt.dispose(),at.dispose(),St.dispose(),ee.dispose(),y.dispose(),q.dispose(),yt.dispose(),It.dispose(),K.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Gt),Ct.removeEventListener("sessionend",ce),Qt.stop()};function _(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=Bt.autoReset,D=Mt.enabled,k=Mt.autoUpdate,F=Mt.needsUpdate,B=Mt.type;$t(),Bt.autoReset=M,Mt.enabled=D,Mt.autoUpdate=k,Mt.needsUpdate=F,Mt.type=B}function N(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const D=M.target;D.removeEventListener("dispose",Y),nt(D)}function nt(M){Tt(M),St.remove(M)}function Tt(M){const D=St.get(M).programs;D!==void 0&&(D.forEach(function(k){K.releaseProgram(k)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,k,F,B,lt){D===null&&(D=Ft);const ht=B.isMesh&&B.matrixWorld.determinant()<0,pt=ih(M,D,k,F,B);gt.setMaterial(F,ht);let bt=k.index,wt=1;if(F.wireframe===!0){if(bt=V.getWireframeAttribute(k),bt===void 0)return;wt=2}const At=k.drawRange,Nt=k.attributes.position;let ue=At.start*wt,ge=(At.start+At.count)*wt;lt!==null&&(ue=Math.max(ue,lt.start*wt),ge=Math.min(ge,(lt.start+lt.count)*wt)),bt!==null?(ue=Math.max(ue,0),ge=Math.min(ge,bt.count)):Nt!=null&&(ue=Math.max(ue,0),ge=Math.min(ge,Nt.count));const De=ge-ue;if(De<0||De===1/0)return;yt.setup(B,F,pt,k,bt);let an,Xt=Vt;if(bt!==null&&(an=g.get(bt),Xt=vt,Xt.setIndex(an)),B.isMesh)F.wireframe===!0?(gt.setLineWidth(F.wireframeLinewidth*Dt()),Xt.setMode(I.LINES)):Xt.setMode(I.TRIANGLES);else if(B.isLine){let Et=F.linewidth;Et===void 0&&(Et=1),gt.setLineWidth(Et*Dt()),B.isLineSegments?Xt.setMode(I.LINES):B.isLineLoop?Xt.setMode(I.LINE_LOOP):Xt.setMode(I.LINE_STRIP)}else B.isPoints?Xt.setMode(I.POINTS):B.isSprite&&Xt.setMode(I.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Xt.renderInstances(ue,De,B.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,nr=Math.min(k.instanceCount,Et);Xt.renderInstances(ue,De,nr)}else Xt.render(ue,De)};function Ut(M,D,k){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,kr(M,D,k),M.side=zn,M.needsUpdate=!0,kr(M,D,k),M.side=mn):kr(M,D,k)}this.compile=function(M,D,k=null){k===null&&(k=M),f=at.get(k),f.init(D),S.push(f),k.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==k&&M.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(w._useLegacyLights);const F=new Set;return M.traverse(function(B){const lt=B.material;if(lt)if(Array.isArray(lt))for(let ht=0;ht<lt.length;ht++){const pt=lt[ht];Ut(pt,k,B),F.add(pt)}else Ut(lt,k,B),F.add(lt)}),S.pop(),f=null,F},this.compileAsync=function(M,D,k=null){const F=this.compile(M,D,k);return new Promise(B=>{function lt(){if(F.forEach(function(ht){St.get(ht).currentProgram.isReady()&&F.delete(ht)}),F.size===0){B(M);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let se=null;function _e(M){se&&se(M)}function Gt(){Qt.stop()}function ce(){Qt.start()}const Qt=new Yc;Qt.setAnimationLoop(_e),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(M){se=M,Ct.setAnimationLoop(M),M===null?Qt.stop():Qt.start()},Ct.addEventListener("sessionstart",Gt),Ct.addEventListener("sessionend",ce),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(D),D=Ct.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,D,C),f=at.get(M,S.length),f.init(D),S.push(f),ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),qt.setFromProjectionMatrix(ut),et=this.localClippingEnabled,W=ot.init(this.clippingPlanes,et),x=mt.get(M,h.length),x.init(),h.push(x),wn(M,D,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(G,tt);const k=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1;k&&it.addToRenderList(x,M),this.info.render.frame++,W===!0&&ot.beginShadows();const F=f.state.shadowsArray;Mt.render(F,M,D),W===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,lt=x.transmissive;if(f.setupLights(w._useLegacyLights),D.isArrayCamera){const ht=D.cameras;if(lt.length>0)for(let pt=0,bt=ht.length;pt<bt;pt++){const wt=ht[pt];En(B,lt,M,wt)}k&&it.render(M);for(let pt=0,bt=ht.length;pt<bt;pt++){const wt=ht[pt];ke(x,M,wt,wt.viewport)}}else lt.length>0&&En(B,lt,M,D),k&&it.render(M),ke(x,M,D);C!==null&&(kt.updateMultisampleRenderTarget(C),kt.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(w,M,D),yt.resetDefaultState(),H=-1,E=null,S.pop(),S.length>0?(f=S[S.length-1],W===!0&&ot.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function wn(M,D,k,F){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||qt.intersectsSprite(M)){F&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);const ht=q.update(M),pt=M.material;pt.visible&&x.push(M,ht,pt,k,rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||qt.intersectsObject(M))){const ht=q.update(M),pt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),rt.copy(ht.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(pt)){const bt=ht.groups;for(let wt=0,At=bt.length;wt<At;wt++){const Nt=bt[wt],ue=pt[Nt.materialIndex];ue&&ue.visible&&x.push(M,ht,ue,k,rt.z,Nt)}}else pt.visible&&x.push(M,ht,pt,k,rt.z,null)}}const lt=M.children;for(let ht=0,pt=lt.length;ht<pt;ht++)wn(lt[ht],D,k,F)}function ke(M,D,k,F){const B=M.opaque,lt=M.transmissive,ht=M.transparent;f.setupLightsView(k),W===!0&&ot.setGlobalState(w.clippingPlanes,k),F&&gt.viewport(b.copy(F)),B.length>0&&on(B,D,k),lt.length>0&&on(lt,D,k),ht.length>0&&on(ht,D,k),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function En(M,D,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new ai(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?ys:Hn,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const lt=f.state.transmissionRenderTarget[F.id],ht=F.viewport||b;lt.setSize(ht.z,ht.w);const pt=w.getRenderTarget();w.setRenderTarget(lt),w.getClearColor(P),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear();const bt=w.toneMapping;w.toneMapping=kn;const wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),W===!0&&ot.setGlobalState(w.clippingPlanes,F),on(M,k,F),kt.updateMultisampleRenderTarget(lt),kt.updateRenderTargetMipmap(lt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Nt=0,ue=D.length;Nt<ue;Nt++){const ge=D[Nt],De=ge.object,an=ge.geometry,Xt=ge.material,Et=ge.group;if(Xt.side===mn&&De.layers.test(F.layers)){const nr=Xt.side;Xt.side=Pe,Xt.needsUpdate=!0,er(De,k,F,an,Xt,Et),Xt.side=nr,Xt.needsUpdate=!0,At=!0}}At===!0&&(kt.updateMultisampleRenderTarget(lt),kt.updateRenderTargetMipmap(lt))}w.setRenderTarget(pt),w.setClearColor(P,j),wt!==void 0&&(F.viewport=wt),w.toneMapping=bt}function on(M,D,k){const F=D.isScene===!0?D.overrideMaterial:null;for(let B=0,lt=M.length;B<lt;B++){const ht=M[B],pt=ht.object,bt=ht.geometry,wt=F===null?ht.material:F,At=ht.group;pt.layers.test(k.layers)&&er(pt,D,k,bt,wt,At)}}function er(M,D,k,F,B,lt){M.onBeforeRender(w,D,k,F,B,lt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(w,D,k,F,M,lt),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Pe,B.needsUpdate=!0,w.renderBufferDirect(k,D,F,B,M,lt),B.side=zn,B.needsUpdate=!0,w.renderBufferDirect(k,D,F,B,M,lt),B.side=mn):w.renderBufferDirect(k,D,F,B,M,lt),M.onAfterRender(w,D,k,F,B,lt)}function kr(M,D,k){D.isScene!==!0&&(D=Ft);const F=St.get(M),B=f.state.lights,lt=f.state.shadowsArray,ht=B.state.version,pt=K.getParameters(M,B.state,lt,D,k),bt=K.getProgramCacheKey(pt);let wt=F.programs;F.environment=M.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(M.isMeshStandardMaterial?y:ee).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",Y),wt=new Map,F.programs=wt);let At=wt.get(bt);if(At!==void 0){if(F.currentProgram===At&&F.lightsStateVersion===ht)return wa(M,pt),At}else pt.uniforms=K.getUniforms(M),M.onBuild(k,pt,w),M.onBeforeCompile(pt,w),At=K.acquireProgram(pt,bt),wt.set(bt,At),F.uniforms=pt.uniforms;const Nt=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=ot.uniform),wa(M,pt),F.needsLights=sh(M),F.lightsStateVersion=ht,F.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=At,F.uniformsList=null,At}function Ma(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=hs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function wa(M,D){const k=St.get(M);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function ih(M,D,k,F,B){D.isScene!==!0&&(D=Ft),kt.resetTextureUnits();const lt=D.fog,ht=F.isMeshStandardMaterial?D.environment:null,pt=C===null?w.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,bt=(F.isMeshStandardMaterial?y:ee).get(F.envMap||ht),wt=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,At=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Nt=!!k.morphAttributes.position,ue=!!k.morphAttributes.normal,ge=!!k.morphAttributes.color;let De=kn;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=w.toneMapping);const an=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Xt=an!==void 0?an.length:0,Et=St.get(F),nr=f.state.lights;if(W===!0&&(et===!0||M!==E)){const Ve=M===E&&F.id===H;ot.setState(F,M,Ve)}let ne=!1;F.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==nr.state.version||Et.outputColorSpace!==pt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==bt||F.fog===!0&&Et.fog!==lt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==ot.numPlanes||Et.numIntersection!==ot.numIntersection)||Et.vertexAlphas!==wt||Et.vertexTangents!==At||Et.morphTargets!==Nt||Et.morphNormals!==ue||Et.morphColors!==ge||Et.toneMapping!==De||Et.morphTargetsCount!==Xt)&&(ne=!0):(ne=!0,Et.__version=F.version);let qn=Et.currentProgram;ne===!0&&(qn=kr(F,D,B));let Ea=!1,ir=!1,Is=!1;const be=qn.getUniforms(),Sn=Et.uniforms;if(gt.useProgram(qn.program)&&(Ea=!0,ir=!0,Is=!0),F.id!==H&&(H=F.id,ir=!0),Ea||E!==M){be.setValue(I,"projectionMatrix",M.projectionMatrix),be.setValue(I,"viewMatrix",M.matrixWorldInverse);const Ve=be.map.cameraPosition;Ve!==void 0&&Ve.setValue(I,rt.setFromMatrixPosition(M.matrixWorld)),Kt.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&be.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,ir=!0,Is=!0)}if(B.isSkinnedMesh){be.setOptional(I,B,"bindMatrix"),be.setOptional(I,B,"bindMatrixInverse");const Ve=B.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),be.setValue(I,"boneTexture",Ve.boneTexture,kt))}B.isBatchedMesh&&(be.setOptional(I,B,"batchingTexture"),be.setValue(I,"batchingTexture",B._matricesTexture,kt));const Us=k.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&ft.update(B,k,qn),(ir||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,be.setValue(I,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Sn.envMap.value=bt,Sn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Sn.envMapIntensity.value=D.environmentIntensity),ir&&(be.setValue(I,"toneMappingExposure",w.toneMappingExposure),Et.needsLights&&rh(Sn,Is),lt&&F.fog===!0&&$.refreshFogUniforms(Sn,lt),$.refreshMaterialUniforms(Sn,F,J,Z,f.state.transmissionRenderTarget[M.id]),hs.upload(I,Ma(Et),Sn,kt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(hs.upload(I,Ma(Et),Sn,kt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&be.setValue(I,"center",B.center),be.setValue(I,"modelViewMatrix",B.modelViewMatrix),be.setValue(I,"normalMatrix",B.normalMatrix),be.setValue(I,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ve=F.uniformsGroups;for(let Ns=0,oh=Ve.length;Ns<oh;Ns++){const Sa=Ve[Ns];It.update(Sa,qn),It.bind(Sa,qn)}}return qn}function rh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function sh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,k){St.get(M.texture).__webglTexture=D,St.get(M.depthTexture).__webglTexture=k;const F=St.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const k=St.get(M);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,k=0){C=M,U=D,A=k;let F=!0,B=null,lt=!1,ht=!1;if(M){const bt=St.get(M);bt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):bt.__webglFramebuffer===void 0?kt.setupRenderTarget(M):bt.__hasExternalTextures&&kt.rebindTextures(M,St.get(M.texture).__webglTexture,St.get(M.depthTexture).__webglTexture);const wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ht=!0);const At=St.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[D])?B=At[D][k]:B=At[D],lt=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?B=St.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?B=At[k]:B=At,b.copy(M.viewport),O.copy(M.scissor),z=M.scissorTest}else b.copy(Q).multiplyScalar(J).floor(),O.copy(dt).multiplyScalar(J).floor(),z=Ot;if(gt.bindFramebuffer(I.FRAMEBUFFER,B)&&F&&gt.drawBuffers(M,B),gt.viewport(b),gt.scissor(O),gt.setScissorTest(z),lt){const bt=St.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,k)}else if(ht){const bt=St.get(M.texture),wt=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,wt)}H=-1},this.readRenderTargetPixels=function(M,D,k,F,B,lt,ht){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ht!==void 0&&(pt=pt[ht]),pt){gt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const bt=M.texture,wt=bt.format,At=bt.type;if(!Kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-F&&k>=0&&k<=M.height-B&&I.readPixels(D,k,F,B,ct.convert(wt),ct.convert(At),lt)}finally{const bt=C!==null?St.get(C).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(M,D,k=0){const F=Math.pow(2,-k),B=Math.floor(D.image.width*F),lt=Math.floor(D.image.height*F);kt.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,M.x,M.y,B,lt),gt.unbindTexture()},this.copyTextureToTexture=function(M,D,k,F=0){const B=D.image.width,lt=D.image.height,ht=ct.convert(k.format),pt=ct.convert(k.type);kt.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,B,lt,ht,pt,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ht,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,ht,pt,D.image),F===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,k,F,B=0){const lt=M.max.x-M.min.x,ht=M.max.y-M.min.y,pt=M.max.z-M.min.z,bt=ct.convert(F.format),wt=ct.convert(F.type);let At;if(F.isData3DTexture)kt.setTexture3D(F,0),At=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)kt.setTexture2DArray(F,0),At=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ge=I.getParameter(I.UNPACK_SKIP_PIXELS),De=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES),Xt=k.isCompressedTexture?k.mipmaps[B]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(At,B,D.x,D.y,D.z,lt,ht,pt,bt,wt,Xt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(At,B,D.x,D.y,D.z,lt,ht,pt,bt,Xt.data):I.texSubImage3D(At,B,D.x,D.y,D.z,lt,ht,pt,bt,wt,Xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),B===0&&F.generateMipmaps&&I.generateMipmap(At),gt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),gt.unbindTexture()},this.resetState=function(){U=0,A=0,C=null,gt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ho?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Ts?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class kv extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class br extends jn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new R,p=new R,m=[],v=[],x=[],f=[];for(let h=0;h<=i;h++){const S=[],w=h/i;let T=0;h===0&&o===0?T=.5/e:h===i&&l===Math.PI&&(T=-.5/e);for(let U=0;U<=e;U++){const A=U/e;d.x=-t*Math.cos(r+A*s)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(r+A*s)*Math.sin(o+w*a),v.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),f.push(A+T,1-w),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<e;S++){const w=u[h][S+1],T=u[h][S],U=u[h+1][S],A=u[h+1][S+1];(h!==0||o>0)&&m.push(w,T,A),(h!==i-1||l<Math.PI)&&m.push(T,U,A)}this.setIndex(m),this.setAttribute("position",new nn(v,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ql extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vv extends Ki{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new zt(16777215),this.specular=new zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Yl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Hv=new zv;class Yo{constructor(t){this.manager=t!==void 0?t:Hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gv extends Yo{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Yl.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=gr("img");function l(){u(),Yl.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Wv extends Yo{constructor(t){super(t)}load(t,e,i,r){const s=new ye,o=new Gv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class eu extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const fo=new le,Kl=new R,$l=new R;class Xv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zl=new le,lr=new R,mo=new R;class jv extends Xv{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(lr),mo.copy(i.position),mo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(mo),i.updateMatrixWorld(),r.makeTranslation(-lr.x,-lr.y,-lr.z),Zl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}class qv extends eu{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yv extends eu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kv extends Oe{constructor(t,e,i){const r=new br(e,4,2),s=new Xo({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const Ql={type:"change"},_o={type:"start"},tc={type:"end"},cs=new Vc,ec=new Un,$v=Math.cos(70*Cd.DEG2RAD);class Zv extends di{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",Mt),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ql),i.update(),s=r.NONE},this.update=function(){const _=new R,L=new li().setFromUnitVectors(t.up,new R(0,1,0)),N=L.clone().invert(),Y=new R,nt=new li,Tt=new R,Ut=2*Math.PI;return function(_e=null){const Gt=i.object.position;_.copy(Gt).sub(i.target),_.applyQuaternion(L),a.setFromVector3(_),i.autoRotate&&s===r.NONE&&z(b(_e)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=i.minAzimuthAngle,Qt=i.maxAzimuthAngle;isFinite(ce)&&isFinite(Qt)&&(ce<-Math.PI?ce+=Ut:ce>Math.PI&&(ce-=Ut),Qt<-Math.PI?Qt+=Ut:Qt>Math.PI&&(Qt-=Ut),ce<=Qt?a.theta=Math.max(ce,Math.min(Qt,a.theta)):a.theta=a.theta>(ce+Qt)/2?Math.max(ce,a.theta):Math.min(Qt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let wn=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const ke=a.radius;a.radius=Q(a.radius*c),wn=ke!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(N),Gt.copy(i.target).add(_),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let ke=null;if(i.object.isPerspectiveCamera){const En=_.length();ke=Q(En*c);const on=En-ke;i.object.position.addScaledVector(T,on),i.object.updateMatrixWorld(),wn=!!on}else if(i.object.isOrthographicCamera){const En=new R(U.x,U.y,0);En.unproject(i.object);const on=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),wn=on!==i.object.zoom;const er=new R(U.x,U.y,0);er.unproject(i.object),i.object.position.sub(er).add(En),i.object.updateMatrixWorld(),ke=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(cs.origin.copy(i.object.position),cs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(cs.direction))<$v?t.lookAt(i.target):(ec.setFromNormalAndCoplanarPoint(i.object.up,i.target),cs.intersectPlane(ec,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),wn=!0)}return c=1,A=!1,wn||Y.distanceToSquared(i.object.position)>o||8*(1-nt.dot(i.object.quaternion))>o||Tt.distanceToSquared(i.target)>o?(i.dispatchEvent(Ql),Y.copy(i.object.position),nt.copy(i.object.quaternion),Tt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Vt),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",$),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",V),i.domElement.getRootNode().removeEventListener("keydown",at,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Mt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Jl,l=new Jl;let c=1;const u=new R,d=new xt,p=new xt,m=new xt,v=new xt,x=new xt,f=new xt,h=new xt,S=new xt,w=new xt,T=new R,U=new xt;let A=!1;const C=[],H={};let E=!1;function b(_){return _!==null?2*Math.PI/60*i.autoRotateSpeed*_:2*Math.PI/60/60*i.autoRotateSpeed}function O(_){const L=Math.abs(_*.01);return Math.pow(.95,i.zoomSpeed*L)}function z(_){l.theta-=_}function P(_){l.phi-=_}const j=function(){const _=new R;return function(N,Y){_.setFromMatrixColumn(Y,0),_.multiplyScalar(-N),u.add(_)}}(),X=function(){const _=new R;return function(N,Y){i.screenSpacePanning===!0?_.setFromMatrixColumn(Y,1):(_.setFromMatrixColumn(Y,0),_.crossVectors(i.object.up,_)),_.multiplyScalar(N),u.add(_)}}(),Z=function(){const _=new R;return function(N,Y){const nt=i.domElement;if(i.object.isPerspectiveCamera){const Tt=i.object.position;_.copy(Tt).sub(i.target);let Ut=_.length();Ut*=Math.tan(i.object.fov/2*Math.PI/180),j(2*N*Ut/nt.clientHeight,i.object.matrix),X(2*Y*Ut/nt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(N*(i.object.right-i.object.left)/i.object.zoom/nt.clientWidth,i.object.matrix),X(Y*(i.object.top-i.object.bottom)/i.object.zoom/nt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function tt(_,L){if(!i.zoomToCursor)return;A=!0;const N=i.domElement.getBoundingClientRect(),Y=_-N.left,nt=L-N.top,Tt=N.width,Ut=N.height;U.x=Y/Tt*2-1,U.y=-(nt/Ut)*2+1,T.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(_){return Math.max(i.minDistance,Math.min(i.maxDistance,_))}function dt(_){d.set(_.clientX,_.clientY)}function Ot(_){tt(_.clientX,_.clientX),h.set(_.clientX,_.clientY)}function qt(_){v.set(_.clientX,_.clientY)}function W(_){p.set(_.clientX,_.clientY),m.subVectors(p,d).multiplyScalar(i.rotateSpeed);const L=i.domElement;z(2*Math.PI*m.x/L.clientHeight),P(2*Math.PI*m.y/L.clientHeight),d.copy(p),i.update()}function et(_){S.set(_.clientX,_.clientY),w.subVectors(S,h),w.y>0?J(O(w.y)):w.y<0&&G(O(w.y)),h.copy(S),i.update()}function ut(_){x.set(_.clientX,_.clientY),f.subVectors(x,v).multiplyScalar(i.panSpeed),Z(f.x,f.y),v.copy(x),i.update()}function rt(_){tt(_.clientX,_.clientY),_.deltaY<0?G(O(_.deltaY)):_.deltaY>0&&J(O(_.deltaY)),i.update()}function Ft(_){let L=!1;switch(_.code){case i.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),L=!0;break;case i.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),L=!0;break;case i.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),L=!0;break;case i.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),L=!0;break}L&&(_.preventDefault(),i.update())}function Dt(_){if(C.length===1)d.set(_.pageX,_.pageY);else{const L=$t(_),N=.5*(_.pageX+L.x),Y=.5*(_.pageY+L.y);d.set(N,Y)}}function I(_){if(C.length===1)v.set(_.pageX,_.pageY);else{const L=$t(_),N=.5*(_.pageX+L.x),Y=.5*(_.pageY+L.y);v.set(N,Y)}}function Yt(_){const L=$t(_),N=_.pageX-L.x,Y=_.pageY-L.y,nt=Math.sqrt(N*N+Y*Y);h.set(0,nt)}function _t(_){i.enableZoom&&Yt(_),i.enablePan&&I(_)}function Kt(_){i.enableZoom&&Yt(_),i.enableRotate&&Dt(_)}function gt(_){if(C.length==1)p.set(_.pageX,_.pageY);else{const N=$t(_),Y=.5*(_.pageX+N.x),nt=.5*(_.pageY+N.y);p.set(Y,nt)}m.subVectors(p,d).multiplyScalar(i.rotateSpeed);const L=i.domElement;z(2*Math.PI*m.x/L.clientHeight),P(2*Math.PI*m.y/L.clientHeight),d.copy(p)}function Bt(_){if(C.length===1)x.set(_.pageX,_.pageY);else{const L=$t(_),N=.5*(_.pageX+L.x),Y=.5*(_.pageY+L.y);x.set(N,Y)}f.subVectors(x,v).multiplyScalar(i.panSpeed),Z(f.x,f.y),v.copy(x)}function St(_){const L=$t(_),N=_.pageX-L.x,Y=_.pageY-L.y,nt=Math.sqrt(N*N+Y*Y);S.set(0,nt),w.set(0,Math.pow(S.y/h.y,i.zoomSpeed)),J(w.y),h.copy(S);const Tt=(_.pageX+L.x)*.5,Ut=(_.pageY+L.y)*.5;tt(Tt,Ut)}function kt(_){i.enableZoom&&St(_),i.enablePan&&Bt(_)}function ee(_){i.enableZoom&&St(_),i.enableRotate&&gt(_)}function y(_){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(_.pointerId),i.domElement.addEventListener("pointermove",g),i.domElement.addEventListener("pointerup",V)),!yt(_)&&(vt(_),_.pointerType==="touch"?it(_):q(_)))}function g(_){i.enabled!==!1&&(_.pointerType==="touch"?ft(_):K(_))}function V(_){switch(ct(_),C.length){case 0:i.domElement.releasePointerCapture(_.pointerId),i.domElement.removeEventListener("pointermove",g),i.domElement.removeEventListener("pointerup",V),i.dispatchEvent(tc),s=r.NONE;break;case 1:const L=C[0],N=H[L];it({pointerId:L,pageX:N.x,pageY:N.y});break}}function q(_){let L;switch(_.button){case 0:L=i.mouseButtons.LEFT;break;case 1:L=i.mouseButtons.MIDDLE;break;case 2:L=i.mouseButtons.RIGHT;break;default:L=-1}switch(L){case mi.DOLLY:if(i.enableZoom===!1)return;Ot(_),s=r.DOLLY;break;case mi.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enablePan===!1)return;qt(_),s=r.PAN}else{if(i.enableRotate===!1)return;dt(_),s=r.ROTATE}break;case mi.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enableRotate===!1)return;dt(_),s=r.ROTATE}else{if(i.enablePan===!1)return;qt(_),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_o)}function K(_){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(_);break;case r.DOLLY:if(i.enableZoom===!1)return;et(_);break;case r.PAN:if(i.enablePan===!1)return;ut(_);break}}function $(_){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(_.preventDefault(),i.dispatchEvent(_o),rt(mt(_)),i.dispatchEvent(tc))}function mt(_){const L=_.deltaMode,N={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(L){case 1:N.deltaY*=16;break;case 2:N.deltaY*=100;break}return _.ctrlKey&&!E&&(N.deltaY*=10),N}function at(_){_.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(_){_.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function Mt(_){i.enabled===!1||i.enablePan===!1||Ft(_)}function it(_){switch(It(_),C.length){case 1:switch(i.touches.ONE){case _i.ROTATE:if(i.enableRotate===!1)return;Dt(_),s=r.TOUCH_ROTATE;break;case _i.PAN:if(i.enablePan===!1)return;I(_),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case _i.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_t(_),s=r.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Kt(_),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_o)}function ft(_){switch(It(_),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;gt(_),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Bt(_),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;kt(_),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(_),i.update();break;default:s=r.NONE}}function Vt(_){i.enabled!==!1&&_.preventDefault()}function vt(_){C.push(_.pointerId)}function ct(_){delete H[_.pointerId];for(let L=0;L<C.length;L++)if(C[L]==_.pointerId){C.splice(L,1);return}}function yt(_){for(let L=0;L<C.length;L++)if(C[L]==_.pointerId)return!0;return!1}function It(_){let L=H[_.pointerId];L===void 0&&(L=new xt,H[_.pointerId]=L),L.set(_.pageX,_.pageY)}function $t(_){const L=_.pointerId===C[0]?C[1]:C[0];return H[L]}i.domElement.addEventListener("contextmenu",Vt),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",$,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",at,{passive:!0,capture:!0}),this.update()}}/*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. */function Jt(n){return n==null}function Ko(n){return n!==null&&typeof n=="object"}function Do(n){return n!==null&&typeof n=="object"}function Jv(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function ci(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],o=t[r];return Do(s)&&Do(o)?Object.assign(Object.assign({},i),{[r]:ci(s,o)}):Object.assign(Object.assign({},i),{[r]:r in t?o:s})},{})}function $o(n){return Ko(n)?"target"in n:!1}const Qv={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class ae{static alreadyDisposed(){return new ae({type:"alreadydisposed"})}static notBindable(){return new ae({type:"notbindable"})}static notCompatible(t,e){return new ae({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new ae({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new ae({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Qv[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class bs{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!bs.isBindable(i))throw ae.notBindable();if(!(t in i))throw ae.propertyNotFound(t);i[t]=e}}class de{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class tg{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new de,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class eg{constructor(t){this.emitter=new de,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class ng{constructor(t){this.emitter=new de,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function re(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new eg(n):new tg(n,t)}function ig(n){return[new ng(n),(t,e)=>{n.setRawValue(t,e)}]}class Lt{constructor(t){this.emitter=new de,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:re(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Lt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class Pr{constructor(t){this.values=Lt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class rg{constructor(t){this.values=Lt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return Jt(i)||(r=Math.max(r,i)),Jt(e)||(r=Math.min(r,e)),r}}class sg{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class og{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const ag={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class lg{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=ag[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const cg={"+":n=>n,"-":n=>-n,"~":n=>~n};class ug{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=cg[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Zo(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function xr(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function hg(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Mr(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function dg(n,t){const e=Mr(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=Mr(n,t);return r===""?"":i+r}function Jo(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=dg(n,t);return i===""?"":e+i}function nu(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=hg(n,t);return t+=i.length,i===""?"":i+Mr(n,t)}function pg(n,t){const e=nu(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=Mr(n,t);return t+=r.length,e+i+r+Jo(n,t)}function fg(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Mr(n,t);return t+=i.length,i===""?"":e+i+Jo(n,t)}function mg(n,t){const e=nu(n,t);return t+=e.length,e===""?"":e+Jo(n,t)}const _g=Zo([pg,fg,mg]);function vg(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function gg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=vg(n,t);return i===""?"":e+i}function bg(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function xg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=bg(n,t);return i===""?"":e+i}function Mg(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function wg(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Mg(n,t);return i===""?"":e+i}const Eg=Zo([gg,xg,wg]),Sg=Zo([Eg,_g]);function yg(n,t){const e=Sg(n,t);return t+=e.length,e===""?null:{evaluable:new og(e),cursor:t}}function Tg(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=ru(n,t);if(!i)return null;t=i.cursor,t+=xr(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function Cg(n,t){var e;return(e=yg(n,t))!==null&&e!==void 0?e:Tg(n,t)}function iu(n,t){const e=Cg(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=iu(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new ug(i,r.evaluable)}):null}function Ag(n,t,e){e+=xr(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=xr(t,e).length,{cursor:e,operator:i}):null}function Pg(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const o=Ag(t,e,i);if(!o)break;i=o.cursor;const a=n(e,i);if(!a)return null;i=a.cursor,s=new lg(o.operator,s,a.evaluable)}return s?{cursor:i,evaluable:s}:null}}const Rg=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Pg(n,t),iu);function ru(n,t){return t+=xr(n,t).length,Rg(n,t)}function Lg(n){const t=ru(n,0);return!t||t.cursor+xr(n,t.cursor).length!==n.length?null:t.evaluable}function bn(n){var t;const e=Lg(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function su(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=bn(n);if(!Jt(t))return t}return 0}function Dg(n){return String(n)}function Le(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function jt(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function nc(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function pe(n,t,e){return Math.min(Math.max(n,t),e)}function ou(n,t){return(n%t+t)%t}function Ig(n,t){return Jt(n.step)?Math.max(nc(t),2):nc(n.step)}function au(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function lu(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function cu(n,t){return Jt(n.step)?null:new sg(n.step,t)}function uu(n){return!Jt(n.max)&&!Jt(n.min)?new Pr({max:n.max,min:n.min}):!Jt(n.max)||!Jt(n.min)?new rg({max:n.max,min:n.min}):null}function hu(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Le(Ig(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:au(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:lu(n,t)}}function du(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Qo(n){return{constraint:n.constraint,textProps:Lt.fromObject(hu(n.params,n.initialValue))}}class pi{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Ps{constructor(t){this.target=t}}class Rr extends Ps{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class Ug extends Ps{constructor(t,e){super(t),this.expanded=e}}class Ng extends Ps{constructor(t,e){super(t),this.index=e}}class Og extends Ps{constructor(t,e){super(t),this.native=e}}class wr extends pi{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new de,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new Rr(this,e.binding.target.read(),t.options.last))}}class Fg{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new de}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Bg(n){if(!("binding"in n))return!1;const t=n.binding;return $o(t)&&"read"in t&&"write"in t}function kg(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const o=t[s],a=o(n[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return i}function Vg(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function zg(n){return n===null?!1:typeof n=="object"}function pn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function ic(n){return{custom:t=>pn(t)(n),boolean:pn(t=>typeof t=="boolean"?t:void 0)(n),number:pn(t=>typeof t=="number"?t:void 0)(n),string:pn(t=>typeof t=="string"?t:void 0)(n),function:pn(t=>typeof t=="function"?t:void 0)(n),constant:t=>pn(e=>e===t?t:void 0)(n),raw:pn(t=>t)(n),object:t=>pn(e=>{if(zg(e))return kg(e,t)})(n),array:t=>pn(e=>{if(Array.isArray(e))return Vg(e,t)})(n)}}const Io={optional:ic(!0),required:ic(!1)};function oe(n,t){const e=t(Io),i=Io.required.object(e)(n);return i.succeeded?i.value:void 0}function Fe(n,t,e,i){if(t&&!t(n))return!1;const r=oe(n,e);return r?i(r):!1}function Be(n,t){var e;return ci((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function oi(n){return"value"in n}function pu(n){if(!Ko(n)||!("binding"in n))return!1;const t=n.binding;return $o(t)}const tn="http://www.w3.org/2000/svg";function xs(n){n.offsetHeight}function Hg(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function ta(n){return n.ontouchstart!==void 0}function Gg(){return globalThis}function Wg(){return Gg().document}function Xg(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const jg={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Rs(n,t){const e=n.createElementNS(tn,"svg");return e.innerHTML=jg[t],e}function fu(n,t,e){n.insertBefore(t,n.children[e])}function ea(n){n.parentElement&&n.parentElement.removeChild(n)}function mu(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function qg(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function _u(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function gn(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function rn(n,t,e){gn(n.value(t),e)}const Yg="tp";function Ht(n){return(e,i)=>[Yg,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const cr=Ht("lbl");function Kg(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class vu{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(cr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(cr("l")),rn(e.props,"label",s=>{Jt(s)?this.element.classList.add(cr(void 0,"nol")):(this.element.classList.remove(cr(void 0,"nol")),qg(i),i.appendChild(Kg(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(cr("v")),this.element.appendChild(r),this.valueElement=r}}class gu{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new vu(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return Fe(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return Be(null,{label:this.props.get("label")})}}function $g(){return["veryfirst","first","last","verylast"]}const rc=Ht(""),sc={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ls{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{$g().forEach(i=>{e.classList.remove(rc(void 0,sc[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(rc(void 0,sc[i]))})}),this.viewProps.handleDispose(()=>{ea(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return Fe(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return Be(null,Object.assign({},this.viewProps.exportState()))}}class ui extends Ls{constructor(t,e){if(e.value!==e.valueController.value)throw ae.shouldNeverHappen();const i=e.valueController.viewProps,r=new gu(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new vu(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return Fe(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return Be(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function oc(n){const t=Object.assign({},n);return delete t.value,t}class bu extends ui{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return Fe(t,e=>super.importState(oc(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return Be(()=>oc(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function Zg(n){return oi(n)&&pu(n.value)}class Jg extends bu{importState(t){return Fe(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function Qg(n){return oi(n)&&Bg(n.value)}function xu(n,t){for(;n.length<t;)n.push(void 0)}function t0(n){const t=[];return xu(t,n),t}function e0(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function n0(n,t){const e=[...e0(n),t];return e.length>n.length?e.splice(0,e.length-n.length):xu(e,n.length),e}class i0{constructor(t){this.emitter=new de,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=re(t0(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=n0(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function r0(n){if(!("binding"in n))return!1;const t=n.binding;return $o(t)&&"read"in t&&!("write"in t)}class s0 extends bu{exportState(){return Be(()=>super.exportState(),{binding:{readonly:!0}})}}function o0(n){return oi(n)&&r0(n.value)}class a0 extends pi{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new Og(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function l0(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function Zi(n,t){return e=>{l0(n,t,e)}}function na(n,t){gn(n,e=>{t.textContent=e??""})}const vo=Ht("btn");class c0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(vo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(vo("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(vo("t")),na(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class u0{constructor(t,e){this.emitter=new de,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new c0(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return Fe(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return Be(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class ac extends Ls{constructor(t,e){const i=new u0(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new gu(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return Fe(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return Be(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class Mu{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const Ji=new Mu("2.0.3");function Ce(n){return Object.assign({core:Ji},n)}const h0=Ce({id:"button",type:"blade",accept(n){const t=oe(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new ac(n.document,{blade:n.blade,buttonProps:Lt.fromObject({title:n.params.title}),labelProps:Lt.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof ac?new a0(n.controller):null}});function d0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function p0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function f0(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function m0(n){return Ko(n)?"refresh"in n&&typeof n.refresh=="function":!1}function _0(n,t){if(!bs.isBindable(n))throw ae.notBindable();return new bs(n,t)}class v0{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new de,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,_0(t,e),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(t){return p0(this,t)}addButton(t){return d0(this,t)}addTab(t){return f0(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{m0(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=pu(e.value)?e.value.binding:null;this.emitter_.emit("change",new Rr(i,r?r.target.read():e.value.rawValue,t.options.last))}}class ia extends pi{constructor(t,e){super(t),this.rackApi_=new v0(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class ra extends Ls{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return Fe(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return Be(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Uo(n){return"rackController"in n}class g0{constructor(t){this.emitter=new de,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw ae.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function b0(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(oi(i)&&i.value===t)return i}return null}function x0(n){return Uo(n)?n.rackController.rack.bcSet_:null}class M0{constructor(t){var e,i;this.emitter=new de,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new g0(x0),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),oi(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Uo(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(oi(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Uo(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=b0(this.find(oi),t.sender);if(!e)throw ae.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class sa{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new M0({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&fu(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&ea(t.bladeController.view.element)}}function Qi(){return new Lt({positions:re([],{equals:Jv})})}class Lr extends Lt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Lt.createCore(e);return new Lr(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!Jt(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};rn(this,"expanded",i),rn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function w0(n,t){let e=0;return Hg(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),xs(t),e=t.clientHeight,n.set("temporaryExpanded",null),xs(t)}),e}function lc(n,t){t.style.height=n.styleHeight}function oa(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),Jt(n.get("expandedHeight"))){const e=w0(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),xs(t)}),n.emitter.on("change",()=>{lc(n,t)}),lc(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class wu extends ia{constructor(t,e){super(t,e),this.emitter_=new de,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Ug(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const Eu=Ht("cnt");class E0{constructor(t,e){var i;this.className_=Ht((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),Eu()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),rn(this.foldable_,"completed",Zi(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),rn(e.props,"title",c=>{Jt(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=t.createElement("div");o.classList.add(this.className_("t")),na(e.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class No extends ra{constructor(t,e){var i;const r=Lr.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new E0(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new sa({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,oa(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return Fe(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return Be(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const S0=Ce({id:"folder",type:"blade",accept(n){const t=oe(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new No(n.document,{blade:n.blade,expanded:n.params.expanded,props:Lt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof No?new wu(n.controller,n.pool):null}}),y0=Ht("");function cc(n,t){return Zi(n,y0(void 0,t))}class Mn extends Lt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=ig(re(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new Mn(Lt.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){gn(this.globalDisabled_,cc(t,"disabled")),rn(this,"hidden",cc(t,"hidden"))}bindDisabled(t){gn(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){gn(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const uc=Ht("tbp");class T0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(uc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(uc("c")),this.element.appendChild(i),this.containerElement=i}}const ur=Ht("tbi");class C0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ur()),e.viewProps.bindClassModifiers(this.element),rn(e.props,"selected",s=>{s?this.element.classList.add(ur(void 0,"sel")):this.element.classList.remove(ur(void 0,"sel"))});const i=t.createElement("button");i.classList.add(ur("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(ur("t")),na(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class A0{constructor(t,e){this.emitter=new de,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new C0(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Oo extends ra{constructor(t,e){const i=new T0(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new sa({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new A0(t,{props:e.itemProps,viewProps:Mn.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,rn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return Fe(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return Be(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class P0 extends ia{constructor(t,e){super(t,e),this.emitter_=new de,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Oo(e,{blade:Qi(),itemProps:Lt.fromObject({selected:!1,title:t.title}),props:Lt.fromObject({selected:!1}),viewProps:Mn.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new Ng(this,t.rawValue))}}class R0 extends ia{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const hc=-1;class L0{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=re(!0),this.selectedIndex=re(hc),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=hc,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const hr=Ht("tab");class D0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(hr(),Eu()),e.viewProps.bindClassModifiers(this.element),gn(e.empty,Zi(this.element,hr(void 0,"nop")));const i=t.createElement("div");i.classList.add(hr("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(hr("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(hr("c")),this.element.appendChild(s),this.contentsElement=s}}class dc extends ra{constructor(t,e){const i=new L0,r=new D0(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new sa({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;fu(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;ea(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const Su=Ce({id:"tab",type:"blade",accept(n){const t=oe(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new dc(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Oo(n.document,{blade:Qi(),itemProps:Lt.fromObject({selected:!1,title:e.title}),props:Lt.fromObject({selected:!1}),viewProps:Mn.create()});t.add(i)}),t},api(n){return n.controller instanceof dc?new P0(n.controller,n.pool):n.controller instanceof Oo?new R0(n.controller,n.pool):null}});function I0(n,t){const e=n.accept(t.params);if(!e)return null;const i=oe(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:Qi(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Mn.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class aa extends wr{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class U0{constructor(){this.disabled=!1,this.emitter=new de}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class N0{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new de,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Dr{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function Ms(n,t){if(n instanceof t)return n;if(n instanceof Dr){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class Ir{constructor(t){this.values=Lt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function Ur(n){var t;const e=Io;if(Array.isArray(n))return(t=oe({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function la(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function ca(n){return Jt(n)?null:new Ir(la(n))}const go=Ht("lst");class O0{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(go()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(go("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(go("m")),r.appendChild(Rs(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,rn(this.props_,"options",s=>{mu(this.selectElement),s.forEach(o=>{const a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Wn{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new O0(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return Fe(t,null,e=>({options:e.required.custom(Ur)}),e=>(this.props.set("options",la(e.options)),!0))}exportProps(){return Be(null,{options:this.props.get("options")})}}const pc=Ht("pop");class F0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(pc()),e.viewProps.bindClassModifiers(this.element),gn(e.shows,Zi(this.element,pc(void 0,"v")))}}class yu{constructor(t,e){this.shows=re(!1),this.viewProps=e.viewProps,this.view=new F0(t,{shows:this.shows,viewProps:this.viewProps})}}const fc=Ht("txt");class B0{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(fc()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(fc("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Er{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new B0(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);Jt(r)||(this.value.rawValue=r),this.view.refresh()}}function k0(n){return String(n)}function Tu(n){return n==="false"?!1:!!n}function mc(n){return k0(n)}function V0(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const z0=Le(0);function ws(n){return z0(n)+"%"}function Cu(n){return String(n)}function Fo(n){return n}function tr({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}n.emitter.on("change",o=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),o.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Ae(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Sr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function xn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function H0(n){return n==="ArrowUp"||n==="ArrowDown"}function Au(n){return H0(n)||n==="ArrowLeft"||n==="ArrowRight"}function bo(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class fi{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new de,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(bo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(bo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(bo(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const He=Ht("txt");class G0{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(He(),He(void 0,"num")),e.arrayPosition&&this.element.classList.add(He(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(He("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(He()),this.inputElement.classList.add(He("i"));const r=t.createElement("div");r.classList.add(He("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(tn,"svg");s.classList.add(He("g")),this.knobElement.appendChild(s);const o=t.createElementNS(tn,"path");o.classList.add(He("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=t.createElementNS(tn,"path");a.classList.add(He("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=t.createElement("div");l.classList.add(Ht("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(He(void 0,"drg"));return}this.element.classList.add(He(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=pe(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class Nr{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=re(null),this.view=new G0(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new fi(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let o=t;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);Jt(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Ae(this.props.get("keyScale"),Sr(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Ae(this.props.get("keyScale"),Sr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const xo=Ht("sld");class W0{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(xo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(xo("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(xo("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=pe(jt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class X0{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new W0(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(jt(pe(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Ae(this.props.get("keyScale"),xn(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Ae(this.props.get("keyScale"),xn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Mo=Ht("sldtxt");class j0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Mo());const i=t.createElement("div");i.classList.add(Mo("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Mo("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Es{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new X0(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new Nr(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new j0(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return Fe(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return Be(null,{max:t.get("max"),min:t.get("min")})}}function Pu(n){return{sliderProps:new Lt({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Lt({formatter:re(n.formatter),keyScale:n.keyScale,pointerScale:re(n.pointerScale)})}}const q0={containerUnitSize:"cnt-usz"};function Ru(n){return`--${q0[n]}`}function yr(n){return du(n)}function Fn(n){if(Do(n))return oe(n,yr)}function vn(n,t){if(!n)return;const e=[],i=cu(n,t);i&&e.push(i);const r=uu(n);return r&&e.push(r),new Dr(e)}function Y0(n){return n?n.major===Ji.major:!1}function Lu(n){if(n==="inline"||n==="popup")return n}function Or(n,t){n.write(t)}const us=Ht("ckb");class K0{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(us()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(us("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(us("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(us("w")),this.labelElement.appendChild(s);const o=Rs(t,"check");s.appendChild(o),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class $0{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new K0(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function Z0(n){const t=[],e=ca(n.options);return e&&t.push(e),new Dr(t)}const J0=Ce({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=oe(t,i=>({options:i.optional.custom(Ur),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Tu,constraint:n=>Z0(n.params),writer:n=>Or},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ms(i,Ir);return r?new Wn(t,{props:new Lt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new $0(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof Wn?new aa(n.controller):null}}),ti=Ht("col");class Q0{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ti()),e.foldable.bindExpandedClass(this.element,ti(void 0,"expanded")),rn(e.foldable,"completed",Zi(this.element,ti(void 0,"cpl")));const i=t.createElement("div");i.classList.add(ti("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(ti("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(ti("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(ti("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function tb(n,t,e){const i=pe(n/255,0,1),r=pe(t/255,0,1),s=pe(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c=0,u=0;const d=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),i===o?c=(r-s)/l:r===o?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,d*100]}function eb(n,t,e){const i=(n%360+360)%360,r=pe(t/100,0,1),s=pe(e/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o/2;let c,u,d;return i>=0&&i<60?[c,u,d]=[o,a,0]:i>=60&&i<120?[c,u,d]=[a,o,0]:i>=120&&i<180?[c,u,d]=[0,o,a]:i>=180&&i<240?[c,u,d]=[0,a,o]:i>=240&&i<300?[c,u,d]=[a,0,o]:[c,u,d]=[o,0,a],[(c+l)*255,(u+l)*255,(d+l)*255]}function nb(n,t,e){const i=pe(n/255,0,1),r=pe(t/255,0,1),s=pe(e/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c;l===0?c=0:o===i?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=o===0?0:l/o,d=o;return[c,u*100,d*100]}function Du(n,t,e){const i=ou(n,360),r=pe(t/100,0,1),s=pe(e/100,0,1),o=s*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o;let c,u,d;return i>=0&&i<60?[c,u,d]=[o,a,0]:i>=60&&i<120?[c,u,d]=[a,o,0]:i>=120&&i<180?[c,u,d]=[0,o,a]:i>=180&&i<240?[c,u,d]=[0,a,o]:i>=240&&i<300?[c,u,d]=[a,0,o]:[c,u,d]=[o,0,a],[(c+l)*255,(u+l)*255,(d+l)*255]}function ib(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function rb(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function sn(n){return[n[0],n[1],n[2]]}function Ds(n,t){return[n[0],n[1],n[2],t]}const sb={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:ib,rgb:eb},hsv:{hsl:rb,hsv:(n,t,e)=>[n,t,e],rgb:Du},rgb:{hsl:tb,hsv:nb,rgb:(n,t,e)=>[n,t,e]}};function qi(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function ob(n,t){return n===t?t:ou(n,t)}function Iu(n,t,e){var i;const r=qi(t,e);return[t==="rgb"?pe(n[0],0,r[0]):ob(n[0],r[0]),pe(n[1],0,r[1]),pe(n[2],0,r[2]),pe((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function _c(n,t,e,i){const r=qi(t,e),s=qi(t,i);return n.map((o,a)=>o/r[a]*s[a])}function Uu(n,t,e){const i=_c(n,t.mode,t.type,"int"),r=sb[t.mode][e.mode](...i);return _c(r,e.mode,"int",e.type)}class Wt{static black(){return new Wt([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Iu(t,e,this.type)}getComponents(t){return Ds(Uu(sn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ln=Ht("colp");class ab{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ln()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ln("hsv"));const r=t.createElement("div");r.classList.add(Ln("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(Ln("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const o=t.createElement("div");if(o.classList.add(Ln("rgb")),this.textsView_=e.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const a=t.createElement("div");a.classList.add(Ln("a"));const l=t.createElement("div");l.classList.add(Ln("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=t.createElement("div");c.classList.add(Ln("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function lb(n){return n==="int"?"int":n==="float"?"float":void 0}function ua(n){return oe(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(lb)}),expanded:t.optional.boolean,picker:t.optional.custom(Lu),readonly:t.optional.constant(!1)}))}function hi(n){return n?.1:1}function Nu(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class ha{constructor(t,e){this.type="float",this.mode=e,this.comps_=Iu(t,e,this.type)}getComponents(t){return Ds(Uu(sn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const cb={int:(n,t)=>new Wt(n,t),float:(n,t)=>new ha(n,t)};function da(n,t,e){return cb[e](n,t)}function ub(n){return n.type==="float"}function hb(n){return n.type==="int"}function db(n){const t=n.getComponents(),e=qi(n.mode,"int");return new Wt([Math.round(jt(t[0],0,1,0,e[0])),Math.round(jt(t[1],0,1,0,e[1])),Math.round(jt(t[2],0,1,0,e[2])),t[3]],n.mode)}function pb(n){const t=n.getComponents(),e=qi(n.mode,"int");return new ha([jt(t[0],0,e[0],0,1),jt(t[1],0,e[1],0,1),jt(t[2],0,e[2],0,1),t[3]],n.mode)}function Te(n,t){if(n.type===t)return n;if(hb(n)&&t==="float")return pb(n);if(ub(n)&&t==="int")return db(n);throw ae.shouldNeverHappen()}function fb(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function We(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const mb={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ou(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return mb[i](e)}function Fu(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[We(t[1],255),We(t[2],255),We(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function _b(n){const t=Fu(n);return t?new Wt(t,"rgb"):null}function Bu(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[We(t[1],255),We(t[2],255),We(t[3],255),We(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function vb(n){const t=Bu(n);return t?new Wt(t,"rgb"):null}function ku(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ou(t[1]),We(t[2],100),We(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function gb(n){const t=ku(n);return t?new Wt(t,"hsl"):null}function Vu(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ou(t[1]),We(t[2],100),We(t[3],100),We(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function bb(n){const t=Vu(n);return t?new Wt(t,"hsl"):null}function zu(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function xb(n){const t=zu(n);return t?new Wt(t,"rgb"):null}function Hu(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),jt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),jt(parseInt(e[4],16),0,255,0,1)]:null}function Mb(n){const t=Hu(n);return t?new Wt(t,"rgb"):null}function Gu(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function wb(n){return t=>{const e=Gu(t);return e?da(e,"rgb",n):null}}function Wu(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Eb(n){return t=>{const e=Wu(t);return e?da(e,"rgb",n):null}}const Sb=[{parser:zu,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Hu,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Fu,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Bu,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ku,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Vu,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Gu,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Wu,result:{alpha:!0,mode:"rgb",notation:"object"}}];function yb(n){return Sb.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Tb(n,t="int"){const e=yb(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Fr(n){const t=[xb,Mb,_b,vb,gb,bb];t.push(wb("int"),Eb("int"));const e=V0(t);return i=>{const r=e(i);return r?Te(r,n):null}}function Cb(n){const t=Fr("int");if(typeof n!="string")return Wt.black();const e=t(n);return e??Wt.black()}function Xu(n){const t=pe(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function pa(n,t="#"){const e=sn(n.getComponents("rgb")).map(Xu).join("");return`${t}${e}`}function fa(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Xu).join("");return`${t}${i}`}function ju(n){const t=Le(0),e=Te(n,"int");return`rgb(${sn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function ds(n){const t=Le(2),e=Le(0);return`rgba(${Te(n,"int").getComponents("rgb").map((s,o)=>(o===3?t:e)(s)).join(", ")})`}function Ab(n){const t=[Le(0),ws,ws],e=Te(n,"int");return`hsl(${sn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function Pb(n){const t=[Le(0),ws,ws,Le(2)];return`hsla(${Te(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function qu(n,t){const e=Le(t==="float"?2:0),i=["r","g","b"],r=Te(n,t);return`{${sn(r.getComponents("rgb")).map((o,a)=>`${i[a]}: ${e(o)}`).join(", ")}}`}function Rb(n){return t=>qu(t,n)}function Yu(n,t){const e=Le(2),i=Le(t==="float"?2:0),r=["r","g","b","a"];return`{${Te(n,t).getComponents("rgb").map((a,l)=>{const c=l===3?e:i;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function Lb(n){return t=>Yu(t,n)}const Db=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:pa},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:fa},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:ju},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:ds},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ab},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Pb},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Rb(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Lb(t)}],[])];function Ku(n){return Db.reduce((t,e)=>t||(fb(e.format,n)?e.stringifier:null),null)}const dr=Ht("apl");class Ib{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(dr()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(dr("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(dr("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(dr("m")),this.element.appendChild(s),this.markerElem_=s;const o=t.createElement("div");o.classList.add(dr("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Wt([e[0],e[1],e[2],0],"rgb"),r=new Wt([e[0],e[1],e[2],255],"rgb"),s=["to right",ds(i),ds(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=ds(t);const o=jt(e[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class Ub{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Ib(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Wt([s,o,a,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Ae(hi(!0),xn(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Wt([r,s,o,a+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Ae(hi(!0),xn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ui=Ht("coltxt");function Nb(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class Ob{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ui()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ui("m")),this.modeElem_=Nb(t),this.modeElem_.classList.add(Ui("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(Ui("mm")),r.appendChild(Rs(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Ui("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),gn(e.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){mu(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(Ui("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Fb(n){return Le(n==="float"?2:0)}function Bb(n,t,e){const i=qi(n,t)[e];return new Pr({min:0,max:i})}function kb(n,t,e){return new Nr(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Lt.fromObject({formatter:Fb(t.colorType),keyScale:hi(!1),pointerScale:t.colorType==="float"?.01:1}),value:re(0,{constraint:Bb(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Vb(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:bn,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=kb(n,e,i);return tr({primary:t.value,secondary:r.value,forward(s){return Te(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,o){const a=t.colorMode,c=Te(s,t.colorType).getComponents(a);c[i]=o;const u=da(Ds(sn(c),c[3]),a,t.colorType);return Te(u,"int")}}),r})}function zb(n,t){const e=new Er(n,{parser:Fr("int"),props:Lt.fromObject({formatter:pa}),value:re(Wt.black()),viewProps:t.viewProps});return tr({primary:t.value,secondary:e.value,forward:i=>new Wt(sn(i.getComponents()),i.mode),backward:(i,r)=>new Wt(Ds(sn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Hb(n){return n!=="hex"}class Gb{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=re(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Ob(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Hb(e)?Vb(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):zb(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const wo=Ht("hpl");class Wb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(wo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(wo("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(wo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=ju(new Wt([e,100,100],"hsv"));const i=jt(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Xb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Wb(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=jt(pe(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Wt([i,s,o,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Ae(hi(!1),xn(t));if(e===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Wt([r+e,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Ae(hi(!1),xn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Eo=Ht("svp"),vc=64;class jb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Eo()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=vc,i.width=vc,i.classList.add(Eo("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Eo("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=Xg(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=t.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let d=0;d<r;d++){const p=jt(d,0,r,0,100),m=jt(u,0,s,100,0),v=Du(i[0],p,m),x=(u*r+d)*4;a[x]=v[0],a[x+1]=v[1],a[x+2]=v[2],a[x+3]=255}t.putImageData(o,0,0);const l=jt(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=jt(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class qb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new jb(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=jt(t.point.x,0,t.bounds.width,0,100),r=jt(t.point.y,0,t.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Wt([s,i,r,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Au(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),o=hi(!1),a=Ae(o,xn(t)),l=Ae(o,Sr(t));a===0&&l===0||this.value.setRawValue(new Wt([e,i+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=hi(!1),i=Ae(e,xn(t)),r=Ae(e,Sr(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Yb{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Xb(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new qb(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Ub(t,{value:this.value,viewProps:this.viewProps}),text:new Nr(t,{parser:bn,props:Lt.fromObject({pointerScale:.01,keyScale:.1,formatter:Le(2)}),value:re(0,{constraint:new Pr({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&tr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Wt(s,i.mode)}}),this.textsC_=new Gb(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new ab(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const So=Ht("colsw");class Kb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(So()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(So("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(So("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=fa(t)}onValueChange_(){this.update_()}}class $b{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Kb(t,{value:this.value,viewProps:this.viewProps})}}class ma{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Lr.create(e.expanded),this.swatchC_=new $b(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new Er(t,{parser:e.parser,props:Lt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Q0(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new yu(t,{viewProps:this.viewProps}):null;const r=new Yb(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),oa(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=_u(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!ta(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Zb(n){return sn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function Jb(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function Qb(n){return new Wt([n>>16&255,n>>8&255,n&255],"rgb")}function tx(n){return new Wt([n>>24&255,n>>16&255,n>>8&255,jt(n&255,0,255,0,1)],"rgb")}function ex(n){return typeof n!="number"?Wt.black():Qb(n)}function nx(n){return typeof n!="number"?Wt.black():tx(n)}function ps(n,t){return typeof n!="object"||Jt(n)?!1:t in n&&typeof n[t]=="number"}function $u(n){return ps(n,"r")&&ps(n,"g")&&ps(n,"b")}function Zu(n){return $u(n)&&ps(n,"a")}function Ju(n){return $u(n)}function _a(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function gc(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function ix(n){const t=Ku(n);return t?(e,i)=>{Or(e,t(i))}:null}function rx(n){const t=n?Jb:Zb;return(e,i)=>{Or(e,t(i))}}function sx(n,t,e){const r=Te(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function ox(n,t,e){const r=Te(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function ax(n,t){return(e,i)=>{n?sx(e,i,t):ox(e,i,t)}}function lx(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function cx(n){return n?t=>fa(t,"0x"):t=>pa(t,"0x")}function ux(n){return"color"in n||n.view==="color"}const hx=Ce({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!ux(t))return null;const e=ua(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:lx(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?nx:ex,equals:_a,writer:n=>rx(n.params.supportsAlpha)},controller:n=>{var t,e;return new ma(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:cx(n.params.supportsAlpha),parser:Fr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function dx(n,t){if(!Ju(n))return Te(Wt.black(),t);if(t==="int"){const e=gc(n);return new Wt(e,"rgb")}if(t==="float"){const e=gc(n);return new ha(e,"rgb")}return Te(Wt.black(),"int")}function px(n){return Zu(n)}function fx(n){return t=>{const e=dx(t,n);return Te(e,"int")}}function mx(n,t){return e=>n?Yu(e,t):qu(e,t)}const _x=Ce({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!Ju(n))return null;const i=ua(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Nu(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>fx(n.params.colorType),equals:_a,writer:n=>ax(px(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Zu(n.initialValue);return new ma(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:mx(i,n.params.colorType),parser:Fr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),vx=Ce({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Tb(n,Nu(t));if(!e)return null;const i=Ku(e);if(!i)return null;const r=ua(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>Cb,equals:_a,writer:n=>{const t=ix(n.params.format);if(!t)throw ae.notBindable();return t}},controller:n=>{var t,e;return new ma(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:Fr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class va{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&o!==void 0?o:i});return this.asm_.fromComponents(e)}}const bc=Ht("pndtxt");class gx{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(bc()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(bc("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function bx(n,t,e){return new Nr(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:re(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class ga{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>bx(t,e,r)),this.acs_.forEach((i,r)=>{tr({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,o)=>{const a=e.assembly.toComponents(s);return a[r]=o,e.assembly.fromComponents(a)}})}),this.view=new gx(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class xx extends wr{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function Mx(n,t){const e=[],i=cu(n,t);i&&e.push(i);const r=uu(n);r&&e.push(r);const s=ca(n.options);return s&&e.push(s),new Dr(e)}const wx=Ce({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=oe(t,i=>Object.assign(Object.assign({},du(i)),{options:i.optional.custom(Ur),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>su,constraint:n=>Mx(n.params,n.initialValue),writer:n=>Or},controller:n=>{const t=n.value,e=n.constraint,i=e&&Ms(e,Ir);if(i)return new Wn(n.document,{props:new Lt({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=hu(n.params,t.rawValue),s=e&&Ms(e,Pr);return s?new Es(n.document,Object.assign(Object.assign({},Pu(Object.assign(Object.assign({},r),{keyScale:re(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:bn,value:t,viewProps:n.viewProps})):new Nr(n.document,{parser:bn,props:Lt.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Es?new xx(n.controller):n.controller.valueController instanceof Wn?new aa(n.controller):null}});class Vn{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(Jt(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Qu={toComponents:n=>n.getComponents(),fromComponents:n=>new Vn(...n)},Ni=Ht("p2d");class Ex{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ni()),e.viewProps.bindClassModifiers(this.element),gn(e.expanded,Zi(this.element,Ni(void 0,"expanded")));const i=t.createElement("div");i.classList.add(Ni("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(Ni("b")),r.appendChild(Rs(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Ni("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(Ni("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const Dn=Ht("p2dp");class Sx{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Dn()),e.layout==="popup"&&this.element.classList.add(Dn(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Dn("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(tn,"svg");r.classList.add(Dn("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(tn,"line");s.classList.add(Dn("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=t.createElementNS(tn,"line");o.classList.add(Dn("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=t.createElementNS(tn,"line");a.classList.add(Dn("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=t.createElement("div");l.classList.add(Dn("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=jt(t,-i,+i,0,100),s=jt(e,-i,+i,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function xc(n,t,e){return[Ae(t[0],xn(n)),Ae(t[1],Sr(n))*(e?1:-1)]}class yx{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Sx(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new fi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=jt(t.point.x,0,t.bounds.width,-i,+i),s=jt(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Vn(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Au(t.key)&&t.preventDefault();const[e,i]=xc(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Vn(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=xc(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Tx{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Lr.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new yu(t,{viewProps:this.viewProps}):null;const s=new yx(t,{layout:e.pickerLayout,props:new Lt({invertsY:re(e.invertsY),max:re(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new ga(t,{assembly:Qu,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ex(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),oa(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=_u(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!ta(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function Cx(n){return Vn.isObject(n)?new Vn(n.x,n.y):new Vn}function Ax(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function Px(n,t){return new va({assembly:Qu,components:[vn(Object.assign(Object.assign({},n),n.x),t.x),vn(Object.assign(Object.assign({},n),n.y),t.y)]})}function Mc(n,t){var e,i;if(!Jt(n.min)||!Jt(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=au(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function Rx(n,t){var e,i;const r=Mc(ci(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=Mc(ci(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function Lx(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const Dx=Ce({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Vn.isObject(n))return null;const e=oe(t,i=>Object.assign(Object.assign({},yr(i)),{expanded:i.optional.boolean,picker:i.optional.custom(Lu),readonly:i.optional.constant(!1),x:i.optional.custom(Fn),y:i.optional.object(Object.assign(Object.assign({},yr(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>Cx,constraint:n=>Px(n.params,n.initialValue),equals:Vn.equals,writer:()=>Ax},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,o=[n.params.x,n.params.y];return new Tx(i,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return Qo({constraint:s.components[l],initialValue:a,params:ci(n.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:Lx(n.params),max:Rx(n.params,r.rawValue),parser:bn,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class zi{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(Jt(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const th={toComponents:n=>n.getComponents(),fromComponents:n=>new zi(...n)};function Ix(n){return zi.isObject(n)?new zi(n.x,n.y,n.z):new zi}function Ux(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function Nx(n,t){return new va({assembly:th,components:[vn(Object.assign(Object.assign({},n),n.x),t.x),vn(Object.assign(Object.assign({},n),n.y),t.y),vn(Object.assign(Object.assign({},n),n.z),t.z)]})}const Ox=Ce({id:"input-point3d",type:"input",accept:(n,t)=>{if(!zi.isObject(n))return null;const e=oe(t,i=>Object.assign(Object.assign({},yr(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(Fn),y:i.optional.custom(Fn),z:i.optional.custom(Fn)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Ix,constraint:n=>Nx(n.params,n.initialValue),equals:zi.equals,writer:n=>Ux},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new ga(n.document,{assembly:th,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Qo({constraint:e.components[s],initialValue:r,params:ci(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:bn,value:t,viewProps:n.viewProps})}});class Hi{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(Jt(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const eh={toComponents:n=>n.getComponents(),fromComponents:n=>new Hi(...n)};function Fx(n){return Hi.isObject(n)?new Hi(n.x,n.y,n.z,n.w):new Hi}function Bx(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function kx(n,t){return new va({assembly:eh,components:[vn(Object.assign(Object.assign({},n),n.x),t.x),vn(Object.assign(Object.assign({},n),n.y),t.y),vn(Object.assign(Object.assign({},n),n.z),t.z),vn(Object.assign(Object.assign({},n),n.w),t.w)]})}const Vx=Ce({id:"input-point4d",type:"input",accept:(n,t)=>{if(!Hi.isObject(n))return null;const e=oe(t,i=>Object.assign(Object.assign({},yr(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(Fn),x:i.optional.custom(Fn),y:i.optional.custom(Fn),z:i.optional.custom(Fn)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Fx,constraint:n=>kx(n.params,n.initialValue),equals:Hi.equals,writer:n=>Bx},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new ga(n.document,{assembly:eh,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Qo({constraint:e.components[s],initialValue:r,params:ci(n.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:bn,value:t,viewProps:n.viewProps})}});function zx(n){const t=[],e=ca(n.options);return e&&t.push(e),new Dr(t)}const Hx=Ce({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=oe(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(Ur)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Cu,constraint:n=>zx(n.params),writer:n=>Or},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Ms(i,Ir);return r?new Wn(t,{props:new Lt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Er(t,{parser:s=>s,props:Lt.fromObject({formatter:Fo}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof Wn?new aa(n.controller):null}}),Br={monitor:{defaultInterval:200,defaultRows:3}},wc=Ht("mll");class Gx{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(wc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(wc("i")),i.style.height=`calc(var(${Ru("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class ba{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Gx(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const Ec=Ht("sgl");class Wx{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Ec()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Ec("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class xa{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Wx(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const Xx=Ce({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=oe(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Tu},controller:n=>{var t;return n.value.rawValue.length===1?new xa(n.document,{formatter:mc,value:n.value,viewProps:n.viewProps}):new ba(n.document,{formatter:mc,rows:(t=n.params.rows)!==null&&t!==void 0?t:Br.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class jx extends wr{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const In=Ht("grl");class qx{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(In()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(tn,"svg");i.classList.add(In("g")),i.style.height=`calc(var(${Ru("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(tn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(In("t"),Ht("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((d,p)=>{if(d===void 0)return;const m=jt(p,0,i,0,t),v=jt(d,r,s,e,0);o.push([m,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(In("t","a"));return}const c=jt(this.cursor_.rawValue,0,i,0,t),u=jt(l,r,s,e,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(In("t","a"))||(a.classList.add(In("t","a"),In("t","in")),xs(a),a.classList.remove(In("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class nh{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=re(-1),this.view=new qx(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!ta(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new fi(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return Fe(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return Be(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(jt(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(jt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Bo(n){return Jt(n.format)?Le(2):n.format}function Yx(n){var t;return n.value.rawValue.length===1?new xa(n.document,{formatter:Bo(n.params),value:n.value,viewProps:n.viewProps}):new ba(n.document,{formatter:Bo(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Br.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function Kx(n){var t,e,i;return new nh(n.document,{formatter:Bo(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Br.monitor.defaultRows,props:Lt.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function Sc(n){return n.view==="graph"}const $x=Ce({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=oe(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>Sc(n)?64:1,reader:n=>su},controller:n=>Sc(n.params)?Kx(n):Yx(n),api:n=>n.controller.valueController instanceof nh?new jx(n.controller):null}),Zx=Ce({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=oe(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Cu},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new ba(n.document,{formatter:Fo,rows:(t=n.params.rows)!==null&&t!==void 0?t:Br.monitor.defaultRows,value:e,viewProps:n.viewProps}):new xa(n.document,{formatter:Fo,value:e,viewProps:n.viewProps})}});class Jx{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class Qx{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function tM(n,t){var e;const i=n.accept(t.target.read(),t.params);if(Jt(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=oe(t.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),o=n.binding.reader(r),a=n.binding.constraint?n.binding.constraint(r):void 0,l=new Qx({reader:o,target:t.target,writer:n.binding.writer(r)}),c=new Fg(re(o(i.initialValue),{constraint:a,equals:n.binding.equals}),l),u=n.controller({constraint:a,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:Mn.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new Jg(t.document,{blade:Qi(),props:Lt.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class eM{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function nM(n,t){return t===0?new U0:new N0(n,t??Br.monitor.defaultInterval)}function iM(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(Jt(s))return null;const o={target:t.target,initialValue:s.initialValue,params:s.params},a=oe(t.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),l=n.binding.reader(o),c=(i=(e=a==null?void 0:a.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new i0({binding:new eM({reader:l,target:t.target}),bufferSize:c,ticker:nM(t.document,a==null?void 0:a.interval)}),d=n.controller({document:t.document,params:s.params,value:u,viewProps:Mn.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return d.viewProps.bindDisabled(u.ticker),d.viewProps.handleDispose(()=>{u.ticker.dispose()}),new s0(t.document,{blade:Qi(),props:Lt.fromObject({label:"label"in t.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:d})}class rM{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!Y0(e.core))throw ae.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??tM(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??iM(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(Jt(r))throw new ae({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const o=this.createMonitor_(t,e,i);if(o)return o;throw new ae({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??I0(s,{document:t,params:e}),null);if(!i)throw new ae({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new wr(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new wr(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Qg(t))return this.createInputBindingApi_(t);if(o0(t))return this.createMonitorBindingApi_(t);throw ae.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Zg(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw ae.shouldNeverHappen();return this.apiCache_.add(t,e)}}const sM=new Jx;function oM(){const n=new rM(sM);return[Dx,Ox,Vx,Hx,wx,vx,_x,hx,J0,Xx,Zx,$x,h0,S0,Su].forEach(t=>{n.register("core",t)}),n}class aM extends pi{constructor(t){super(t),this.emitter_=new de,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Rr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class lM extends pi{}class cM extends pi{constructor(t){super(t),this.emitter_=new de,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Rr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class uM extends pi{constructor(t){super(t),this.emitter_=new de,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Rr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const hM=function(){return{id:"list",type:"blade",core:Ji,accept(n){const t=oe(n,e=>({options:e.required.custom(Ur),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new Ir(la(n.params.options)),e=re(n.params.value,{constraint:t}),i=new Wn(n.document,{props:new Lt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new ui(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof ui)||!(n.controller.valueController instanceof Wn)?null:new aM(n.controller)}}}();class dM extends wu{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class pM extends No{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const yc=Ht("spr");class fM{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(yc()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(yc("r")),this.element.appendChild(i)}}class Tc extends Ls{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new fM(t,{viewProps:e.viewProps})}))}}const mM={id:"separator",type:"blade",core:Ji,accept(n){const t=oe(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new Tc(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Tc?new lM(n.controller):null}},_M={id:"slider",type:"blade",core:Ji,accept(n){const t=oe(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new Pr({max:n.params.max,min:n.params.min}),s=re(i,{constraint:r}),o=new Es(n.document,Object.assign(Object.assign({},Pu({formatter:(e=n.params.format)!==null&&e!==void 0?e:Dg,keyScale:re(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:lu(n.params,i)})),{parser:bn,value:s,viewProps:n.viewProps}));return new ui(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:s,valueController:o})},api(n){return!(n.controller instanceof ui)||!(n.controller.valueController instanceof Es)?null:new cM(n.controller)}},vM=function(){return{id:"text",type:"blade",core:Ji,accept(n){const t=oe(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=re(n.params.value),i=new Er(n.document,{parser:n.params.parse,props:Lt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new ui(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof ui)||!(n.controller.valueController instanceof Er)?null:new uM(n.controller)}}}();function gM(n){const t=n.createElement("div");return t.classList.add(Ht("dfw")()),n.body&&n.body.appendChild(t),t}function bM(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class xM extends dM{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:Wg(),o=oM(),a=new pM(s,{expanded:r.expanded,blade:Qi(),props:Lt.fromObject({title:r.title}),viewProps:Mn.create()});super(a,o),this.pool_=o,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:gM(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw ae.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw ae.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&bM(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[hM,mM,_M,Su,vM]})}}new Mu("4.0.3");const MM=()=>{const n=new xM({title:"Parameters",expanded:!0}),t=new kv,e=new Wv,i=e.load("/textures/2k_earth_daymap.jpg");e.load("/textures/2k_earth_nightmap.jpg");const r=e.load("/textures/2k_earth_clouds.jpg"),s=e.load("/textures/2k_moon.jpg"),o=new ql({map:i}),a=new ql({map:s}),l=new br(1,64,64),c=new br(1,64,64),u=new Vv({map:r,transparent:!0,opacity:.15}),d=new Oe(c,u);d.scale.setScalar(13.5),t.add(d);const p=[{name:"Earth",radius:13,position:[0,0,0],speed:.002,material:o,moons:[{name:"Moon",radius:.25,distance:2,speed:.01,material:a}]}],m=z=>{const P=new Oe(l,z.material);return P.scale.setScalar(z.radius),P.position.set(z.position[0],z.position[1],z.position[2]),P},v=z=>{const P=new Oe(l,z.material);return P.scale.setScalar(z.radius),P.position.x=z.distance,P},x=p.map(z=>{const P=m(z);return t.add(P),z.moons.forEach(j=>{const X=v(j);P.add(X)}),P});console.log(x);const f=new Yv(3355443,1);t.add(f);const h=new qv(16777215,400);h.position.set(20,21,15),t.add(h);const S=new Kv(h,1);t.add(S);const w=new Ne(45,window.innerWidth/window.innerHeight,.1,1e3);w.position.z=80,w.position.y=5;const T=document.querySelector("canvas.threejs"),U=new Bv({canvas:T,antialias:!0});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,2));const A=new Zv(w,T);A.enableDamping=!0,A.maxDistance=200,A.minDistance=20,window.addEventListener("resize",()=>{w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)});const C=n.addFolder({title:"Planet"});C.addBinding(p[0],"radius",{min:5,max:20,step:.1}).on("change",z=>{x[0].scale.setScalar(z.value)}),C.addBinding(p[0],"speed",{min:0,max:.1,step:.001});const H=n.addFolder({title:"Moon"});H.addBinding(p[0].moons[0],"radius",{min:.1,max:1,step:.05}).on("change",z=>{x[0].children[0].scale.setScalar(z.value)}),H.addBinding(p[0].moons[0],"speed",{min:0,max:.1,step:.001}),H.addBinding(p[0].moons[0],"distance",{min:1,max:10,step:.1});const E=n.addFolder({title:"point Light"});E.addBinding(h.position,"x",{min:-50,max:50,step:.1}).on("change",()=>{directionalLightHelper.update()}),E.addBinding(h.position,"y",{min:-50,max:50,step:.1}).on("change",()=>{directionalLightHelper.update()}),E.addBinding(h.position,"z",{min:-50,max:50,step:.1}).on("change",()=>{directionalLightHelper.update()}),E.addBinding(h,"intensity",{min:100,max:1e3,step:10}).on("change",()=>{directionalLightHelper.update()}),n.addFolder({title:"ambient Light"}).addBinding(f,"intensity",{min:0,max:5,step:.1}).on("change",()=>{directionalLightHelper.update()});const O=()=>{d.rotation.y+=.005,x.forEach((z,P)=>{z.rotation.y+=p[P].speed,z.children.forEach((j,X)=>{j.rotation.y+=p[P].moons[X].speed,j.position.x=Math.sin(j.rotation.y)*p[P].moons[X].distance,j.position.z=Math.cos(j.rotation.y)*p[P].moons[X].distance})}),A.update(),U.render(t,w),window.requestAnimationFrame(O)};O()};if(ya.isWebGLAvailable())MM();else{const n=ya.getWebGLErrorMessage();document.getElementById("container").appendChild(n)}
//# sourceMappingURL=index-CXm3W_sU.js.map
