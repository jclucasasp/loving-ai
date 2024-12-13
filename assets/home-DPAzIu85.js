import{r as T,j as v,h as xt,B as dt,a6 as fn,a7 as dn,u as mn}from"./index-viN0Y756.js";import{C as pn}from"./component-heading-L5nAuMkg.js";const gn="/assets/CaucasianW-BBYyze9C.png",hn="/assets/CaucasianM-D15HHG2o.png",xn="/assets/IndianW-BGrdLFLO.png",yn="/assets/AsianW-D0ApKDCF.png",bn="/assets/AsianM-DYs2WQSr.png",Sn="/assets/ColorW-Gttl781-.png",vn="/assets/ColorM-CiJQS0Gi.png",jn="/assets/heart-L2u2Ui8n.png";function Cn(t){return Object.prototype.toString.call(t)==="[object Object]"}function qt(t){return Cn(t)||Array.isArray(t)}function Nn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,n){const s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:s.every(e=>{const u=t[e],a=n[e];return typeof u=="function"?`${u}`==`${a}`:!qt(u)||!qt(a)?u===a:Tt(u,a)})}function Kt(t){return t.concat().sort((n,s)=>n.name>s.name?1:-1).map(n=>n.options)}function En(t,n){if(t.length!==n.length)return!1;const s=Kt(t),o=Kt(n);return s.every((c,r)=>{const e=o[r];return Tt(c,e)})}function Mt(t){return typeof t=="number"}function At(t){return typeof t=="string"}function vt(t){return typeof t=="boolean"}function $t(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function Ot(t){return Math.sign(t)}function mt(t,n){return M(t-n)}function wn(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const s=mt(M(t),M(n));return M(s/t)}function pt(t){return gt(t).map(Number)}function V(t){return t[yt(t)]}function yt(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===yt(t)}function Qt(t,n=0){return Array.from(Array(t),(s,o)=>n+o)}function gt(t){return Object.keys(t)}function Wt(t,n){return[t,n].reduce((s,o)=>(gt(o).forEach(c=>{const r=s[c],e=o[c],u=$t(r)&&$t(e);s[c]=u?Wt(r,e):e}),s),{})}function Dt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Ln(t,n){const s={start:o,center:c,end:r};function o(){return 0}function c(a){return r(a)/2}function r(a){return n-a}function e(a,i){return At(t)?s[t](a):t(n,a,i)}return{measure:e}}function ht(){let t=[];function n(c,r,e,u={passive:!0}){let a;if("addEventListener"in c)c.addEventListener(r,e,u),a=()=>c.removeEventListener(r,e,u);else{const i=c;i.addListener(e),a=()=>i.removeListener(e)}return t.push(a),o}function s(){t=t.filter(c=>c())}const o={add:n,clear:s};return o}function In(t,n,s,o){const c=ht(),r=1e3/60;let e=null,u=0,a=0;function i(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){b(),c.clear()}function d(h){if(!a)return;e||(e=h);const f=h-e;for(e=h,u+=f;u>=r;)s(r),u-=r;const p=u/r;o(p),a&&n.requestAnimationFrame(d)}function g(){a||(a=n.requestAnimationFrame(d))}function b(){n.cancelAnimationFrame(a),e=null,u=0,a=0}function l(){e=null,u=0}return{init:i,destroy:x,start:g,stop:b,update:()=>s(r),render:o}}function An(t,n){const s=n==="rtl",o=t==="y",c=o?"y":"x",r=o?"x":"y",e=!o&&s?-1:1,u=x(),a=d();function i(l){const{height:m,width:h}=l;return o?m:h}function x(){return o?"top":s?"right":"left"}function d(){return o?"bottom":s?"left":"right"}function g(l){return l*e}return{scroll:c,cross:r,startEdge:u,endEdge:a,measureSize:i,direction:g}}function ot(t=0,n=0){const s=M(t-n);function o(i){return i<t}function c(i){return i>n}function r(i){return o(i)||c(i)}function e(i){return r(i)?o(i)?t:n:i}function u(i){return s?i-s*Math.ceil((i-n)/s):i}return{length:s,max:n,min:t,constrain:e,reachedAny:r,reachedMax:c,reachedMin:o,removeOffset:u}}function Yt(t,n,s){const{constrain:o}=ot(0,t),c=t+1;let r=e(n);function e(g){return s?M((c+g)%c):o(g)}function u(){return r}function a(g){return r=e(g),d}function i(g){return x().set(u()+g)}function x(){return Yt(t,u(),s)}const d={get:u,set:a,add:i,clone:x};return d}function Dn(t,n,s,o,c,r,e,u,a,i,x,d,g,b,l,m,h,f,p){const{cross:S,direction:w}=t,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},j=ht(),C=ht(),N=ot(50,225).constrain(b.measure(20)),O={mouse:300,touch:400},E={mouse:500,touch:600},z=l?43:25;let H=!1,G=0,U=0,et=!1,X=!1,$=!1,Q=!1;function ct(y){if(!p)return;function I(F){(vt(p)||p(y,F))&&ut(F)}const P=n;j.add(P,"dragstart",F=>F.preventDefault(),L).add(P,"touchmove",()=>{},L).add(P,"touchend",()=>{}).add(P,"touchstart",I).add(P,"mousedown",I).add(P,"touchcancel",k).add(P,"contextmenu",k).add(P,"click",Y,!0)}function q(){j.clear(),C.clear()}function rt(){const y=Q?s:n;C.add(y,"touchmove",B,L).add(y,"touchend",k).add(y,"mousemove",B,L).add(y,"mouseup",k)}function it(y){const I=y.nodeName||"";return A.includes(I)}function W(){return(l?E:O)[Q?"mouse":"touch"]}function at(y,I){const P=d.add(Ot(y)*-1),F=x.byDistance(y,!l).distance;return l||M(y)<N?F:h&&I?F*.5:x.byIndex(P.get(),0).distance}function ut(y){const I=Dt(y,o);Q=I,$=l&&I&&!y.buttons&&H,H=mt(c.get(),e.get())>=2,!(I&&y.button!==0)&&(it(y.target)||(et=!0,r.pointerDown(y),i.useFriction(0).useDuration(0),c.set(e),rt(),G=r.readPoint(y),U=r.readPoint(y,S),g.emit("pointerDown")))}function B(y){if(!Dt(y,o)&&y.touches.length>=2)return k(y);const P=r.readPoint(y),F=r.readPoint(y,S),K=mt(P,G),J=mt(F,U);if(!X&&!Q&&(!y.cancelable||(X=K>J,!X)))return k(y);const _=r.pointerMove(y);K>m&&($=!0),i.useFriction(.3).useDuration(.75),u.start(),c.add(w(_)),y.preventDefault()}function k(y){const P=x.byDistance(0,!1).index!==d.get(),F=r.pointerUp(y)*W(),K=at(w(F),P),J=wn(F,K),_=z-10*J,Z=f+J/50;X=!1,et=!1,C.clear(),i.useDuration(_).useFriction(Z),a.distance(K,!l),Q=!1,g.emit("pointerUp")}function Y(y){$&&(y.stopPropagation(),y.preventDefault(),$=!1)}function R(){return et}return{init:ct,destroy:q,pointerDown:R}}function Tn(t,n){let o,c;function r(d){return d.timeStamp}function e(d,g){const l=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Dt(d,n)?d:d.touches[0])[l]}function u(d){return o=d,c=d,e(d)}function a(d){const g=e(d)-e(c),b=r(d)-r(o)>170;return c=d,b&&(o=d),g}function i(d){if(!o||!c)return 0;const g=e(c)-e(o),b=r(d)-r(o),l=r(d)-r(c)>170,m=g/b;return b&&!l&&M(m)>.1?m:0}return{pointerDown:u,pointerMove:a,pointerUp:i,readPoint:e}}function Mn(){function t(s){const{offsetTop:o,offsetLeft:c,offsetWidth:r,offsetHeight:e}=s;return{top:o,right:c+r,bottom:o+e,left:c,width:r,height:e}}return{measure:t}}function On(t){function n(o){return t*(o/100)}return{measure:n}}function Pn(t,n,s,o,c,r,e){const u=[t].concat(o);let a,i,x=[],d=!1;function g(h){return c.measureSize(e.measure(h))}function b(h){if(!r)return;i=g(t),x=o.map(g);function f(p){for(const S of p){if(d)return;const w=S.target===t,A=o.indexOf(S.target),L=w?i:x[A],j=g(w?t:o[A]);if(M(j-L)>=.5){h.reInit(),n.emit("resize");break}}}a=new ResizeObserver(p=>{(vt(r)||r(h,p))&&f(p)}),s.requestAnimationFrame(()=>{u.forEach(p=>a.observe(p))})}function l(){d=!0,a&&a.disconnect()}return{init:b,destroy:l}}function kn(t,n,s,o,c,r){let e=0,u=0,a=c,i=r,x=t.get(),d=0;function g(L){const j=L/1e3,C=a*j,N=o.get()-t.get(),O=!a;let E=0;return O?(e=0,s.set(o),t.set(o),E=N):(s.set(t),e+=N/C,e*=i,x+=e,t.add(e*j),E=x-d),u=Ot(E),d=x,A}function b(){const L=o.get()-n.get();return M(L)<.001}function l(){return a}function m(){return u}function h(){return e}function f(){return S(c)}function p(){return w(r)}function S(L){return a=L,A}function w(L){return i=L,A}const A={direction:m,duration:l,velocity:h,seek:g,settled:b,useBaseFriction:p,useBaseDuration:f,useFriction:w,useDuration:S};return A}function Fn(t,n,s,o,c){const r=c.measure(10),e=c.measure(50),u=ot(.1,.99);let a=!1;function i(){return!(a||!t.reachedAny(s.get())||!t.reachedAny(n.get()))}function x(b){if(!i())return;const l=t.reachedMin(n.get())?"min":"max",m=M(t[l]-n.get()),h=s.get()-n.get(),f=u.constrain(m/e);s.subtract(h*f),!b&&M(h)<r&&(s.set(t.constrain(s.get())),o.useDuration(25).useBaseFriction())}function d(b){a=!b}return{shouldConstrain:i,constrain:x,toggleActive:d}}function zn(t,n,s,o,c){const r=ot(-n+t,0),e=d(),u=x(),a=g();function i(l,m){return mt(l,m)<1}function x(){const l=e[0],m=V(e),h=e.lastIndexOf(l),f=e.indexOf(m)+1;return ot(h,f)}function d(){return s.map((l,m)=>{const{min:h,max:f}=r,p=r.constrain(l),S=!m,w=Pt(s,m);return S?f:w||i(h,p)?h:i(f,p)?f:p}).map(l=>parseFloat(l.toFixed(3)))}function g(){if(n<=t+c)return[r.max];if(o==="keepSnaps")return e;const{min:l,max:m}=u;return e.slice(l,m)}return{snapsContained:a,scrollContainLimit:u}}function Bn(t,n,s){const o=n[0],c=s?o-t:V(n);return{limit:ot(c,o)}}function Rn(t,n,s,o){const r=n.min+.1,e=n.max+.1,{reachedMin:u,reachedMax:a}=ot(r,e);function i(g){return g===1?a(s.get()):g===-1?u(s.get()):!1}function x(g){if(!i(g))return;const b=t*(g*-1);o.forEach(l=>l.add(b))}return{loop:x}}function Vn(t){const{max:n,length:s}=t;function o(r){const e=r-n;return s?e/-s:0}return{get:o}}function Hn(t,n,s,o,c){const{startEdge:r,endEdge:e}=t,{groupSlides:u}=c,a=d().map(n.measure),i=g(),x=b();function d(){return u(o).map(m=>V(m)[e]-m[0][r]).map(M)}function g(){return o.map(m=>s[r]-m[r]).map(m=>-M(m))}function b(){return u(i).map(m=>m[0]).map((m,h)=>m+a[h])}return{snaps:i,snapsAligned:x}}function Gn(t,n,s,o,c,r){const{groupSlides:e}=c,{min:u,max:a}=o,i=x();function x(){const g=e(r),b=!t||n==="keepSnaps";return s.length===1?[r]:b?g:g.slice(u,a).map((l,m,h)=>{const f=!m,p=Pt(h,m);if(f){const S=V(h[0])+1;return Qt(S)}if(p){const S=yt(r)-V(h)[0]+1;return Qt(S,V(h)[0])}return l})}return{slideRegistry:i}}function Un(t,n,s,o,c){const{reachedAny:r,removeOffset:e,constrain:u}=o;function a(l){return l.concat().sort((m,h)=>M(m)-M(h))[0]}function i(l){const m=t?e(l):u(l),h=n.map((p,S)=>({diff:x(p-m,0),index:S})).sort((p,S)=>M(p.diff)-M(S.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+s,l-s];if(!t)return l;if(!m)return a(h);const f=h.filter(p=>Ot(p)===m);return f.length?a(f):V(h)-s}function d(l,m){const h=n[l]-c.get(),f=x(h,m);return{index:l,distance:f}}function g(l,m){const h=c.get()+l,{index:f,distance:p}=i(h),S=!t&&r(h);if(!m||S)return{index:f,distance:l};const w=n[f]-p,A=l+x(w,0);return{index:f,distance:A}}return{byDistance:g,byIndex:d,shortcut:x}}function qn(t,n,s,o,c,r,e){function u(d){const g=d.distance,b=d.index!==n.get();r.add(g),g&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(s.set(n.get()),n.set(d.index),e.emit("select"))}function a(d,g){const b=c.byDistance(d,g);u(b)}function i(d,g){const b=n.clone().set(d),l=c.byIndex(b.get(),g);u(l)}return{distance:a,index:i}}function Kn(t,n,s,o,c,r,e,u){const a={passive:!0,capture:!0};let i=0;function x(b){if(!u)return;function l(m){if(new Date().getTime()-i>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const p=s.findIndex(S=>S.includes(m));Mt(p)&&(c.useDuration(0),o.index(p,0),e.emit("slideFocus"))}r.add(document,"keydown",d,!1),n.forEach((m,h)=>{r.add(m,"focus",f=>{(vt(u)||u(b,f))&&l(h)},a)})}function d(b){b.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function ft(t){let n=t;function s(){return n}function o(a){n=e(a)}function c(a){n+=e(a)}function r(a){n-=e(a)}function e(a){return Mt(a)?a:a.get()}return{get:s,set:o,add:c,subtract:r}}function Jt(t,n){const s=t.scroll==="x"?r:e,o=n.style;let c=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function e(d){return`translate3d(0px,${d}px,0px)`}function u(d){c||(o.transform=s(t.direction(d)))}function a(d){c=!d}function i(){c||(o.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:i,to:u,toggleActive:a}}function $n(t,n,s,o,c,r,e,u,a){const x=pt(c),d=pt(c).reverse(),g=f().concat(p());function b(j,C){return j.reduce((N,O)=>N-c[O],C)}function l(j,C){return j.reduce((N,O)=>b(N,C)>0?N.concat([O]):N,[])}function m(j){return r.map((C,N)=>({start:C-o[N]+.5+j,end:C+n-.5+j}))}function h(j,C,N){const O=m(C);return j.map(E=>{const z=N?0:-s,H=N?s:0,G=N?"end":"start",U=O[E][G];return{index:E,loopPoint:U,slideLocation:ft(-1),translate:Jt(t,a[E]),target:()=>u.get()>U?z:H}})}function f(){const j=e[0],C=l(d,j);return h(C,s,!1)}function p(){const j=n-e[0]-1,C=l(x,j);return h(C,-s,!0)}function S(){return g.every(({index:j})=>{const C=x.filter(N=>N!==j);return b(C,n)<=.1})}function w(){g.forEach(j=>{const{target:C,translate:N,slideLocation:O}=j,E=C();E!==O.get()&&(N.to(E),O.set(E))})}function A(){g.forEach(j=>j.translate.clear())}return{canLoop:S,clear:A,loop:w,loopPoints:g}}function Qn(t,n,s){let o,c=!1;function r(a){if(!s)return;function i(x){for(const d of x)if(d.type==="childList"){a.reInit(),n.emit("slidesChanged");break}}o=new MutationObserver(x=>{c||(vt(s)||s(a,x))&&i(x)}),o.observe(t,{childList:!0})}function e(){o&&o.disconnect(),c=!0}return{init:r,destroy:e}}function Wn(t,n,s,o){const c={};let r=null,e=null,u,a=!1;function i(){u=new IntersectionObserver(l=>{a||(l.forEach(m=>{const h=n.indexOf(m.target);c[h]=m}),r=null,e=null,s.emit("slidesInView"))},{root:t.parentElement,threshold:o}),n.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return gt(c).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:p}=c[f];return(l&&p||!l&&!p)&&m.push(f),m},[])}function g(l=!0){if(l&&r)return r;if(!l&&e)return e;const m=d(l);return l&&(r=m),l||(e=m),m}return{init:i,destroy:x,get:g}}function Yn(t,n,s,o,c,r){const{measureSize:e,startEdge:u,endEdge:a}=t,i=s[0]&&c,x=l(),d=m(),g=s.map(e),b=h();function l(){if(!i)return 0;const p=s[0];return M(n[u]-p[u])}function m(){if(!i)return 0;const p=r.getComputedStyle(V(o));return parseFloat(p.getPropertyValue(`margin-${a}`))}function h(){return s.map((p,S,w)=>{const A=!S,L=Pt(w,S);return A?g[S]+x:L?g[S]+d:w[S+1][u]-p[u]}).map(M)}return{slideSizes:g,slideSizesWithGaps:b,startGap:x,endGap:d}}function Jn(t,n,s,o,c,r,e,u,a){const{startEdge:i,endEdge:x,direction:d}=t,g=Mt(s);function b(f,p){return pt(f).filter(S=>S%p===0).map(S=>f.slice(S,S+p))}function l(f){return f.length?pt(f).reduce((p,S,w)=>{const A=V(p)||0,L=A===0,j=S===yt(f),C=c[i]-r[A][i],N=c[i]-r[S][x],O=!o&&L?d(e):0,E=!o&&j?d(u):0,z=M(N-E-(C+O));return w&&z>n+a&&p.push(S),j&&p.push(f.length),p},[]).map((p,S,w)=>{const A=Math.max(w[S-1]||0);return f.slice(A,p)}):[]}function m(f){return g?b(f,s):l(f)}return{groupSlides:m}}function Xn(t,n,s,o,c,r,e){const{align:u,axis:a,direction:i,startIndex:x,loop:d,duration:g,dragFree:b,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:p,watchResize:S,watchSlides:w,watchDrag:A,watchFocus:L}=r,j=2,C=Mn(),N=C.measure(n),O=s.map(C.measure),E=An(a,i),z=E.measureSize(N),H=On(z),G=Ln(u,z),U=!d&&!!p,et=d||!!p,{slideSizes:X,slideSizesWithGaps:$,startGap:Q,endGap:ct}=Yn(E,N,O,s,et,c),q=Jn(E,z,h,d,N,O,Q,ct,j),{snaps:rt,snapsAligned:it}=Hn(E,G,N,O,q),W=-V(rt)+V($),{snapsContained:at,scrollContainLimit:ut}=zn(z,W,it,p,j),B=U?at:it,{limit:k}=Bn(W,B,d),Y=Yt(yt(B),x,d),R=Y.clone(),D=pt(s),y=({dragHandler:tt,scrollBody:wt,scrollBounds:Lt,options:{loop:bt}},It)=>{bt||Lt.constrain(tt.pointerDown()),wt.seek(It)},I=({scrollBody:tt,translate:wt,location:Lt,offsetLocation:bt,scrollLooper:It,slideLooper:on,dragHandler:rn,animation:cn,eventHandler:Rt,scrollBounds:an,options:{loop:Vt}},Ht)=>{const Gt=tt.settled(),un=!an.shouldConstrain(),Ut=Vt?Gt:Gt&&un;Ut&&!rn.pointerDown()&&(cn.stop(),Rt.emit("settle")),Ut||Rt.emit("scroll");const ln=Lt.get()*Ht+_.get()*(1-Ht);bt.set(ln),Vt&&(It.loop(tt.direction()),on.loop()),wt.to(bt.get())},P=In(o,c,tt=>y(Et,tt),tt=>I(Et,tt)),F=.68,K=B[Y.get()],J=ft(K),_=ft(K),Z=ft(K),st=ft(K),lt=kn(J,Z,_,st,g,F),Ct=Un(d,B,W,k,st),Nt=qn(P,Y,R,lt,Ct,st,e),Ft=Vn(k),zt=ht(),en=Wn(n,s,e,m),{slideRegistry:Bt}=Gn(U,p,B,ut,q,D),sn=Kn(t,s,Bt,Nt,lt,zt,e,L),Et={ownerDocument:o,ownerWindow:c,eventHandler:e,containerRect:N,slideRects:O,animation:P,axis:E,dragHandler:Dn(E,t,o,c,st,Tn(E,c),J,P,Nt,lt,Ct,Y,e,H,b,l,f,F,A),eventStore:zt,percentOfView:H,index:Y,indexPrevious:R,limit:k,location:J,offsetLocation:Z,previousLocation:_,options:r,resizeHandler:Pn(n,e,c,s,E,S,C),scrollBody:lt,scrollBounds:Fn(k,Z,st,lt,H),scrollLooper:Rn(W,k,Z,[J,Z,_,st]),scrollProgress:Ft,scrollSnapList:B.map(Ft.get),scrollSnaps:B,scrollTarget:Ct,scrollTo:Nt,slideLooper:$n(E,z,W,X,$,rt,B,Z,s),slideFocus:sn,slidesHandler:Qn(n,e,w),slidesInView:en,slideIndexes:D,slideRegistry:Bt,slidesToScroll:q,target:st,translate:Jt(E,n)};return Et}function _n(){let t={},n;function s(i){n=i}function o(i){return t[i]||[]}function c(i){return o(i).forEach(x=>x(n,i)),a}function r(i,x){return t[i]=o(i).concat([x]),a}function e(i,x){return t[i]=o(i).filter(d=>d!==x),a}function u(){t={}}const a={init:s,emit:c,off:e,on:r,clear:u};return a}const Zn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function te(t){function n(r,e){return Wt(r,e||{})}function s(r){const e=r.breakpoints||{},u=gt(e).filter(a=>t.matchMedia(a).matches).map(a=>e[a]).reduce((a,i)=>n(a,i),{});return n(r,u)}function o(r){return r.map(e=>gt(e.breakpoints||{})).reduce((e,u)=>e.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:s,optionsMediaQueries:o}}function ne(t){let n=[];function s(r,e){return n=e.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(r,t)),e.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function o(){n=n.filter(r=>r.destroy())}return{init:s,destroy:o}}function St(t,n,s){const o=t.ownerDocument,c=o.defaultView,r=te(c),e=ne(r),u=ht(),a=_n(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=r,{on:g,off:b,emit:l}=a,m=E;let h=!1,f,p=i(Zn,St.globalOptions),S=i(p),w=[],A,L,j;function C(){const{container:D,slides:y}=S;L=(At(D)?t.querySelector(D):D)||t.children[0];const P=At(y)?L.querySelectorAll(y):y;j=[].slice.call(P||L.children)}function N(D){const y=Xn(t,L,j,o,c,D,a);if(D.loop&&!y.slideLooper.canLoop()){const I=Object.assign({},D,{loop:!1});return N(I)}return y}function O(D,y){h||(p=i(p,D),S=x(p),w=y||w,C(),f=N(S),d([p,...w.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",E)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&j.length&&f.dragHandler.init(R),A=e.init(R,w)))}function E(D,y){const I=q();z(),O(i({startIndex:I},D),y),a.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),u.clear()}function H(){h||(h=!0,u.clear(),z(),a.emit("destroy"),a.clear())}function G(D,y,I){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:S.duration),f.scrollTo.index(D,I||0))}function U(D){const y=f.index.add(1).get();G(y,D,-1)}function et(D){const y=f.index.add(-1).get();G(y,D,1)}function X(){return f.index.add(1).get()!==q()}function $(){return f.index.add(-1).get()!==q()}function Q(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function q(){return f.index.get()}function rt(){return f.indexPrevious.get()}function it(){return f.slidesInView.get()}function W(){return f.slidesInView.get(!1)}function at(){return A}function ut(){return f}function B(){return t}function k(){return L}function Y(){return j}const R={canScrollNext:X,canScrollPrev:$,containerNode:k,internalEngine:ut,destroy:H,off:b,on:g,emit:l,plugins:at,previousScrollSnap:rt,reInit:m,rootNode:B,scrollNext:U,scrollPrev:et,scrollProgress:ct,scrollSnapList:Q,scrollTo:G,selectedScrollSnap:q,slideNodes:Y,slidesInView:it,slidesNotInView:W};return O(n,s),setTimeout(()=>a.emit("init"),0),R}St.globalOptions=void 0;function kt(t={},n=[]){const s=T.useRef(t),o=T.useRef(n),[c,r]=T.useState(),[e,u]=T.useState(),a=T.useCallback(()=>{c&&c.reInit(s.current,o.current)},[c]);return T.useEffect(()=>{Tt(s.current,t)||(s.current=t,a())},[t,a]),T.useEffect(()=>{En(o.current,n)||(o.current=n,a())},[n,a]),T.useEffect(()=>{if(Nn()&&e){St.globalOptions=kt.globalOptions;const i=St(e,s.current,o.current);return r(i),()=>i.destroy()}else r(void 0)},[e,r]),[u,c]}kt.globalOptions=void 0;const Xt=T.createContext(null);function jt(){const t=T.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const _t=T.forwardRef(({orientation:t="horizontal",opts:n,setApi:s,plugins:o,className:c,children:r,...e},u)=>{const[a,i]=kt({...n,axis:t==="horizontal"?"x":"y"},o),[x,d]=T.useState(!1),[g,b]=T.useState(!1),l=T.useCallback(p=>{p&&(d(p.canScrollPrev()),b(p.canScrollNext()))},[]),m=T.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=T.useCallback(()=>{i==null||i.scrollNext()},[i]),f=T.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),h())},[m,h]);return T.useEffect(()=>{!i||!s||s(i)},[i,s]),T.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),v.jsx(Xt.Provider,{value:{carouselRef:a,api:i,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:v.jsx("div",{ref:u,onKeyDownCapture:f,className:xt("relative",c),role:"region","aria-roledescription":"carousel",...e,children:r})})});_t.displayName="Carousel";const Zt=T.forwardRef(({className:t,...n},s)=>{const{carouselRef:o,orientation:c}=jt();return v.jsx("div",{ref:o,className:"overflow-hidden",children:v.jsx("div",{ref:s,className:xt("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});Zt.displayName="CarouselContent";const nt=T.forwardRef(({className:t,...n},s)=>{const{orientation:o}=jt();return v.jsx("div",{ref:s,role:"group","aria-roledescription":"slide",className:xt("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",t),...n})});nt.displayName="CarouselItem";const tn=T.forwardRef(({className:t,variant:n="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollPrev:e,canScrollPrev:u}=jt();return v.jsxs(dt,{ref:c,variant:n,size:s,className:xt("absolute  h-8 w-8 rounded-full",r==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:e,...o,children:[v.jsx(fn,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Previous slide"})]})});tn.displayName="CarouselPrevious";const nn=T.forwardRef(({className:t,variant:n="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollNext:e,canScrollNext:u}=jt();return v.jsxs(dt,{ref:c,variant:n,size:s,className:xt("absolute h-8 w-8 rounded-full",r==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:e,...o,children:[v.jsx(dn,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Next slide"})]})});nn.displayName="CarouselNext";function oe(){const t=mn();return v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center sm:justify-between justify-center border-b-2 pb-3",children:[v.jsxs("div",{className:"flex items-center justify-start",children:[v.jsx("img",{src:jn,alt:"heart with arrow through it",height:80,width:80}),v.jsx("h1",{className:"text-3xl text-[#FF0066] font-bold",children:"Loving AI"})]}),v.jsxs("nav",{className:"flex justify-end gap-2",children:[v.jsx(dt,{variant:"secondary",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>t("/login"),"aria-label":"Login",children:"Login"}),v.jsx(dt,{variant:"default",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>t("/personality"),"aria-label":"Sign Up",children:"Sign Up"})]})]}),v.jsxs("article",{className:"mt-3 border-b-2 pb-3",children:[v.jsx("h4",{className:"text-md md:text-lg",children:"Why spend your time alone..."}),v.jsx("h3",{className:"text-lg md:text-xl ",children:"when you can find companionship now..."}),v.jsxs("h2",{className:"text-xl md:text-2xl text-[#FF0066] ",children:["Can you ",v.jsx("span",{className:"italic font-bold",children:"Rizz"})," up these AI Hotties?"]}),v.jsxs("div",{className:"text-xs text-slate-700 md:text-base",children:[v.jsx("p",{className:"mt-3",children:"This app was created for real people just like you."}),v.jsx("p",{children:"Every AI person on here have their own unique personality."}),v.jsx("p",{children:"Experience instant connections and create lasting memories."})]})]}),v.jsx(pn,{className:"mt-3 underline",children:"Meet some of the Hotties:"}),v.jsxs(_t,{className:"",opts:{loop:!0,align:"center"},children:[v.jsxs(Zt,{className:"-ml-2 ",children:[v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:yn,alt:"picture of an asian woman"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:bn,alt:"picture of an asian man"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:Sn,alt:"picture of an colored woman"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:vn,alt:"picture of an colored man"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:gn,alt:"picture of an caucasian woman"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:hn,alt:"picture of an caucasian man"})}),v.jsx(nt,{className:"basis-1/2",children:v.jsx("img",{src:xn,alt:"picture of an indian woman"})})]}),v.jsx(tn,{}),v.jsx(nn,{})]}),v.jsx(dt,{variant:"secondary",size:"default",className:"mt-6 w-full rounded-full",onClick:()=>t("/login"),"aria-label":"Login",children:v.jsx("h4",{children:"Get Your Rizz On!"})})]})}export{oe as default};