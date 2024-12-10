import{r as P,j as b,h as yn,B as mn,a6 as ft,a7 as dt,u as mt,a8 as pt}from"./index-BOec_SUu.js";import{C as gt}from"./component-heading-BsrudvjC.js";function ht(n){return Object.prototype.toString.call(n)==="[object Object]"}function $n(n){return ht(n)||Array.isArray(n)}function xt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Dn(n,t){const s=Object.keys(n),o=Object.keys(t);if(s.length!==o.length)return!1;const c=JSON.stringify(Object.keys(n.breakpoints||{})),r=JSON.stringify(Object.keys(t.breakpoints||{}));return c!==r?!1:s.every(e=>{const u=n[e],a=t[e];return typeof u=="function"?`${u}`==`${a}`:!$n(u)||!$n(a)?u===a:Dn(u,a)})}function Kn(n){return n.concat().sort((t,s)=>t.name>s.name?1:-1).map(t=>t.options)}function yt(n,t){if(n.length!==t.length)return!1;const s=Kn(n),o=Kn(t);return s.every((c,r)=>{const e=o[r];return Dn(c,e)})}function On(n){return typeof n=="number"}function Tn(n){return typeof n=="string"}function vn(n){return typeof n=="boolean"}function Jn(n){return Object.prototype.toString.call(n)==="[object Object]"}function D(n){return Math.abs(n)}function kn(n){return Math.sign(n)}function pn(n,t){return D(n-t)}function bt(n,t){if(n===0||t===0||D(n)<=D(t))return 0;const s=pn(D(n),D(t));return D(s/n)}function gn(n){return hn(n).map(Number)}function V(n){return n[bn(n)]}function bn(n){return Math.max(0,n.length-1)}function Mn(n,t){return t===bn(n)}function Qn(n,t=0){return Array.from(Array(n),(s,o)=>t+o)}function hn(n){return Object.keys(n)}function Xn(n,t){return[n,t].reduce((s,o)=>(hn(o).forEach(c=>{const r=s[c],e=o[c],u=Jn(r)&&Jn(e);s[c]=u?Xn(r,e):e}),s),{})}function Pn(n,t){return typeof t.MouseEvent<"u"&&n instanceof t.MouseEvent}function St(n,t){const s={start:o,center:c,end:r};function o(){return 0}function c(a){return r(a)/2}function r(a){return t-a}function e(a,i){return Tn(n)?s[n](a):n(t,a,i)}return{measure:e}}function xn(){let n=[];function t(c,r,e,u={passive:!0}){let a;if("addEventListener"in c)c.addEventListener(r,e,u),a=()=>c.removeEventListener(r,e,u);else{const i=c;i.addListener(e),a=()=>i.removeListener(e)}return n.push(a),o}function s(){n=n.filter(c=>c())}const o={add:t,clear:s};return o}function jt(n,t,s,o){const c=xn(),r=1e3/60;let e=null,u=0,a=0;function i(){c.add(n,"visibilitychange",()=>{n.hidden&&l()})}function x(){S(),c.clear()}function d(h){if(!a)return;e||(e=h);const f=h-e;for(e=h,u+=f;u>=r;)s(r),u-=r;const p=u/r;o(p),a&&t.requestAnimationFrame(d)}function g(){a||(a=t.requestAnimationFrame(d))}function S(){t.cancelAnimationFrame(a),e=null,u=0,a=0}function l(){e=null,u=0}return{init:i,destroy:x,start:g,stop:S,update:()=>s(r),render:o}}function vt(n,t){const s=t==="rtl",o=n==="y",c=o?"y":"x",r=o?"x":"y",e=!o&&s?-1:1,u=x(),a=d();function i(l){const{height:m,width:h}=l;return o?m:h}function x(){return o?"top":s?"right":"left"}function d(){return o?"bottom":s?"left":"right"}function g(l){return l*e}return{scroll:c,cross:r,startEdge:u,endEdge:a,measureSize:i,direction:g}}function on(n=0,t=0){const s=D(n-t);function o(i){return i<n}function c(i){return i>t}function r(i){return o(i)||c(i)}function e(i){return r(i)?o(i)?n:t:i}function u(i){return s?i-s*Math.ceil((i-t)/s):i}return{length:s,max:t,min:n,constrain:e,reachedAny:r,reachedMax:c,reachedMin:o,removeOffset:u}}function Yn(n,t,s){const{constrain:o}=on(0,n),c=n+1;let r=e(t);function e(g){return s?D((c+g)%c):o(g)}function u(){return r}function a(g){return r=e(g),d}function i(g){return x().set(u()+g)}function x(){return Yn(n,u(),s)}const d={get:u,set:a,add:i,clone:x};return d}function wt(n,t,s,o,c,r,e,u,a,i,x,d,g,S,l,m,h,f,p){const{cross:j,direction:C}=n,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},v=xn(),w=xn(),N=on(50,225).constrain(S.measure(20)),O={mouse:300,touch:400},E={mouse:500,touch:600},z=l?43:25;let H=!1,G=0,q=0,en=!1,_=!1,K=!1,J=!1;function an(y){if(!p)return;function I(F){(vn(p)||p(y,F))&&ln(F)}const k=t;v.add(k,"dragstart",F=>F.preventDefault(),L).add(k,"touchmove",()=>{},L).add(k,"touchend",()=>{}).add(k,"touchstart",I).add(k,"mousedown",I).add(k,"touchcancel",M).add(k,"contextmenu",M).add(k,"click",X,!0)}function U(){v.clear(),w.clear()}function rn(){const y=J?s:t;w.add(y,"touchmove",B,L).add(y,"touchend",M).add(y,"mousemove",B,L).add(y,"mouseup",M)}function cn(y){const I=y.nodeName||"";return A.includes(I)}function Q(){return(l?E:O)[J?"mouse":"touch"]}function un(y,I){const k=d.add(kn(y)*-1),F=x.byDistance(y,!l).distance;return l||D(y)<N?F:h&&I?F*.5:x.byIndex(k.get(),0).distance}function ln(y){const I=Pn(y,o);J=I,K=l&&I&&!y.buttons&&H,H=pn(c.get(),e.get())>=2,!(I&&y.button!==0)&&(cn(y.target)||(en=!0,r.pointerDown(y),i.useFriction(0).useDuration(0),c.set(e),rn(),G=r.readPoint(y),q=r.readPoint(y,j),g.emit("pointerDown")))}function B(y){if(!Pn(y,o)&&y.touches.length>=2)return M(y);const k=r.readPoint(y),F=r.readPoint(y,j),$=pn(k,G),Y=pn(F,q);if(!_&&!J&&(!y.cancelable||(_=$>Y,!_)))return M(y);const Z=r.pointerMove(y);$>m&&(K=!0),i.useFriction(.3).useDuration(.75),u.start(),c.add(C(Z)),y.preventDefault()}function M(y){const k=x.byDistance(0,!1).index!==d.get(),F=r.pointerUp(y)*Q(),$=un(C(F),k),Y=bt(F,$),Z=z-10*Y,W=f+Y/50;_=!1,en=!1,w.clear(),i.useDuration(Z).useFriction(W),a.distance($,!l),J=!1,g.emit("pointerUp")}function X(y){K&&(y.stopPropagation(),y.preventDefault(),K=!1)}function R(){return en}return{init:an,destroy:U,pointerDown:R}}function Nt(n,t){let o,c;function r(d){return d.timeStamp}function e(d,g){const l=`client${(g||n.scroll)==="x"?"X":"Y"}`;return(Pn(d,t)?d:d.touches[0])[l]}function u(d){return o=d,c=d,e(d)}function a(d){const g=e(d)-e(c),S=r(d)-r(o)>170;return c=d,S&&(o=d),g}function i(d){if(!o||!c)return 0;const g=e(c)-e(o),S=r(d)-r(o),l=r(d)-r(c)>170,m=g/S;return S&&!l&&D(m)>.1?m:0}return{pointerDown:u,pointerMove:a,pointerUp:i,readPoint:e}}function Et(){function n(s){const{offsetTop:o,offsetLeft:c,offsetWidth:r,offsetHeight:e}=s;return{top:o,right:c+r,bottom:o+e,left:c,width:r,height:e}}return{measure:n}}function Ct(n){function t(o){return n*(o/100)}return{measure:t}}function Lt(n,t,s,o,c,r,e){const u=[n].concat(o);let a,i,x=[],d=!1;function g(h){return c.measureSize(e.measure(h))}function S(h){if(!r)return;i=g(n),x=o.map(g);function f(p){for(const j of p){if(d)return;const C=j.target===n,A=o.indexOf(j.target),L=C?i:x[A],v=g(C?n:o[A]);if(D(v-L)>=.5){h.reInit(),t.emit("resize");break}}}a=new ResizeObserver(p=>{(vn(r)||r(h,p))&&f(p)}),s.requestAnimationFrame(()=>{u.forEach(p=>a.observe(p))})}function l(){d=!0,a&&a.disconnect()}return{init:S,destroy:l}}function It(n,t,s,o,c,r){let e=0,u=0,a=c,i=r,x=n.get(),d=0;function g(L){const v=L/1e3,w=a*v,N=o.get()-n.get(),O=!a;let E=0;return O?(e=0,s.set(o),n.set(o),E=N):(s.set(n),e+=N/w,e*=i,x+=e,n.add(e*v),E=x-d),u=kn(E),d=x,A}function S(){const L=o.get()-t.get();return D(L)<.001}function l(){return a}function m(){return u}function h(){return e}function f(){return j(c)}function p(){return C(r)}function j(L){return a=L,A}function C(L){return i=L,A}const A={direction:m,duration:l,velocity:h,seek:g,settled:S,useBaseFriction:p,useBaseDuration:f,useFriction:C,useDuration:j};return A}function At(n,t,s,o,c){const r=c.measure(10),e=c.measure(50),u=on(.1,.99);let a=!1;function i(){return!(a||!n.reachedAny(s.get())||!n.reachedAny(t.get()))}function x(S){if(!i())return;const l=n.reachedMin(t.get())?"min":"max",m=D(n[l]-t.get()),h=s.get()-t.get(),f=u.constrain(m/e);s.subtract(h*f),!S&&D(h)<r&&(s.set(n.constrain(s.get())),o.useDuration(25).useBaseFriction())}function d(S){a=!S}return{shouldConstrain:i,constrain:x,toggleActive:d}}function Tt(n,t,s,o,c){const r=on(-t+n,0),e=d(),u=x(),a=g();function i(l,m){return pn(l,m)<1}function x(){const l=e[0],m=V(e),h=e.lastIndexOf(l),f=e.indexOf(m)+1;return on(h,f)}function d(){return s.map((l,m)=>{const{min:h,max:f}=r,p=r.constrain(l),j=!m,C=Mn(s,m);return j?f:C||i(h,p)?h:i(f,p)?f:p}).map(l=>parseFloat(l.toFixed(3)))}function g(){if(t<=n+c)return[r.max];if(o==="keepSnaps")return e;const{min:l,max:m}=u;return e.slice(l,m)}return{snapsContained:a,scrollContainLimit:u}}function Pt(n,t,s){const o=t[0],c=s?o-n:V(t);return{limit:on(c,o)}}function Dt(n,t,s,o){const r=t.min+.1,e=t.max+.1,{reachedMin:u,reachedMax:a}=on(r,e);function i(g){return g===1?a(s.get()):g===-1?u(s.get()):!1}function x(g){if(!i(g))return;const S=n*(g*-1);o.forEach(l=>l.add(S))}return{loop:x}}function Ot(n){const{max:t,length:s}=n;function o(r){const e=r-t;return s?e/-s:0}return{get:o}}function kt(n,t,s,o,c){const{startEdge:r,endEdge:e}=n,{groupSlides:u}=c,a=d().map(t.measure),i=g(),x=S();function d(){return u(o).map(m=>V(m)[e]-m[0][r]).map(D)}function g(){return o.map(m=>s[r]-m[r]).map(m=>-D(m))}function S(){return u(i).map(m=>m[0]).map((m,h)=>m+a[h])}return{snaps:i,snapsAligned:x}}function Mt(n,t,s,o,c,r){const{groupSlides:e}=c,{min:u,max:a}=o,i=x();function x(){const g=e(r),S=!n||t==="keepSnaps";return s.length===1?[r]:S?g:g.slice(u,a).map((l,m,h)=>{const f=!m,p=Mn(h,m);if(f){const j=V(h[0])+1;return Qn(j)}if(p){const j=bn(r)-V(h)[0]+1;return Qn(j,V(h)[0])}return l})}return{slideRegistry:i}}function Ft(n,t,s,o,c){const{reachedAny:r,removeOffset:e,constrain:u}=o;function a(l){return l.concat().sort((m,h)=>D(m)-D(h))[0]}function i(l){const m=n?e(l):u(l),h=t.map((p,j)=>({diff:x(p-m,0),index:j})).sort((p,j)=>D(p.diff)-D(j.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+s,l-s];if(!n)return l;if(!m)return a(h);const f=h.filter(p=>kn(p)===m);return f.length?a(f):V(h)-s}function d(l,m){const h=t[l]-c.get(),f=x(h,m);return{index:l,distance:f}}function g(l,m){const h=c.get()+l,{index:f,distance:p}=i(h),j=!n&&r(h);if(!m||j)return{index:f,distance:l};const C=t[f]-p,A=l+x(C,0);return{index:f,distance:A}}return{byDistance:g,byIndex:d,shortcut:x}}function zt(n,t,s,o,c,r,e){function u(d){const g=d.distance,S=d.index!==t.get();r.add(g),g&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),S&&(s.set(t.get()),t.set(d.index),e.emit("select"))}function a(d,g){const S=c.byDistance(d,g);u(S)}function i(d,g){const S=t.clone().set(d),l=c.byIndex(S.get(),g);u(l)}return{distance:a,index:i}}function Bt(n,t,s,o,c,r,e,u){const a={passive:!0,capture:!0};let i=0;function x(S){if(!u)return;function l(m){if(new Date().getTime()-i>10)return;e.emit("slideFocusStart"),n.scrollLeft=0;const p=s.findIndex(j=>j.includes(m));On(p)&&(c.useDuration(0),o.index(p,0),e.emit("slideFocus"))}r.add(document,"keydown",d,!1),t.forEach((m,h)=>{r.add(m,"focus",f=>{(vn(u)||u(S,f))&&l(h)},a)})}function d(S){S.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function dn(n){let t=n;function s(){return t}function o(a){t=e(a)}function c(a){t+=e(a)}function r(a){t-=e(a)}function e(a){return On(a)?a:a.get()}return{get:s,set:o,add:c,subtract:r}}function _n(n,t){const s=n.scroll==="x"?r:e,o=t.style;let c=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function e(d){return`translate3d(0px,${d}px,0px)`}function u(d){c||(o.transform=s(n.direction(d)))}function a(d){c=!d}function i(){c||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:i,to:u,toggleActive:a}}function Rt(n,t,s,o,c,r,e,u,a){const x=gn(c),d=gn(c).reverse(),g=f().concat(p());function S(v,w){return v.reduce((N,O)=>N-c[O],w)}function l(v,w){return v.reduce((N,O)=>S(N,w)>0?N.concat([O]):N,[])}function m(v){return r.map((w,N)=>({start:w-o[N]+.5+v,end:w+t-.5+v}))}function h(v,w,N){const O=m(w);return v.map(E=>{const z=N?0:-s,H=N?s:0,G=N?"end":"start",q=O[E][G];return{index:E,loopPoint:q,slideLocation:dn(-1),translate:_n(n,a[E]),target:()=>u.get()>q?z:H}})}function f(){const v=e[0],w=l(d,v);return h(w,s,!1)}function p(){const v=t-e[0]-1,w=l(x,v);return h(w,-s,!0)}function j(){return g.every(({index:v})=>{const w=x.filter(N=>N!==v);return S(w,t)<=.1})}function C(){g.forEach(v=>{const{target:w,translate:N,slideLocation:O}=v,E=w();E!==O.get()&&(N.to(E),O.set(E))})}function A(){g.forEach(v=>v.translate.clear())}return{canLoop:j,clear:A,loop:C,loopPoints:g}}function Vt(n,t,s){let o,c=!1;function r(a){if(!s)return;function i(x){for(const d of x)if(d.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(x=>{c||(vn(s)||s(a,x))&&i(x)}),o.observe(n,{childList:!0})}function e(){o&&o.disconnect(),c=!0}return{init:r,destroy:e}}function Ht(n,t,s,o){const c={};let r=null,e=null,u,a=!1;function i(){u=new IntersectionObserver(l=>{a||(l.forEach(m=>{const h=t.indexOf(m.target);c[h]=m}),r=null,e=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:o}),t.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return hn(c).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:p}=c[f];return(l&&p||!l&&!p)&&m.push(f),m},[])}function g(l=!0){if(l&&r)return r;if(!l&&e)return e;const m=d(l);return l&&(r=m),l||(e=m),m}return{init:i,destroy:x,get:g}}function Gt(n,t,s,o,c,r){const{measureSize:e,startEdge:u,endEdge:a}=n,i=s[0]&&c,x=l(),d=m(),g=s.map(e),S=h();function l(){if(!i)return 0;const p=s[0];return D(t[u]-p[u])}function m(){if(!i)return 0;const p=r.getComputedStyle(V(o));return parseFloat(p.getPropertyValue(`margin-${a}`))}function h(){return s.map((p,j,C)=>{const A=!j,L=Mn(C,j);return A?g[j]+x:L?g[j]+d:C[j+1][u]-p[u]}).map(D)}return{slideSizes:g,slideSizesWithGaps:S,startGap:x,endGap:d}}function qt(n,t,s,o,c,r,e,u,a){const{startEdge:i,endEdge:x,direction:d}=n,g=On(s);function S(f,p){return gn(f).filter(j=>j%p===0).map(j=>f.slice(j,j+p))}function l(f){return f.length?gn(f).reduce((p,j,C)=>{const A=V(p)||0,L=A===0,v=j===bn(f),w=c[i]-r[A][i],N=c[i]-r[j][x],O=!o&&L?d(e):0,E=!o&&v?d(u):0,z=D(N-E-(w+O));return C&&z>t+a&&p.push(j),v&&p.push(f.length),p},[]).map((p,j,C)=>{const A=Math.max(C[j-1]||0);return f.slice(A,p)}):[]}function m(f){return g?S(f,s):l(f)}return{groupSlides:m}}function Ut(n,t,s,o,c,r,e){const{align:u,axis:a,direction:i,startIndex:x,loop:d,duration:g,dragFree:S,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:p,watchResize:j,watchSlides:C,watchDrag:A,watchFocus:L}=r,v=2,w=Et(),N=w.measure(t),O=s.map(w.measure),E=vt(a,i),z=E.measureSize(N),H=Ct(z),G=St(u,z),q=!d&&!!p,en=d||!!p,{slideSizes:_,slideSizesWithGaps:K,startGap:J,endGap:an}=Gt(E,N,O,s,en,c),U=qt(E,z,h,d,N,O,J,an,v),{snaps:rn,snapsAligned:cn}=kt(E,G,N,O,U),Q=-V(rn)+V(K),{snapsContained:un,scrollContainLimit:ln}=Tt(z,Q,cn,p,v),B=q?un:cn,{limit:M}=Pt(Q,B,d),X=Yn(bn(B),x,d),R=X.clone(),T=gn(s),y=({dragHandler:nn,scrollBody:Ln,scrollBounds:In,options:{loop:Sn}},An)=>{Sn||In.constrain(nn.pointerDown()),Ln.seek(An)},I=({scrollBody:nn,translate:Ln,location:In,offsetLocation:Sn,scrollLooper:An,slideLooper:rt,dragHandler:it,animation:ct,eventHandler:Vn,scrollBounds:at,options:{loop:Hn}},Gn)=>{const qn=nn.settled(),ut=!at.shouldConstrain(),Un=Hn?qn:qn&&ut;Un&&!it.pointerDown()&&(ct.stop(),Vn.emit("settle")),Un||Vn.emit("scroll");const lt=In.get()*Gn+Z.get()*(1-Gn);Sn.set(lt),Hn&&(An.loop(nn.direction()),rt.loop()),Ln.to(Sn.get())},k=jt(o,c,nn=>y(Cn,nn),nn=>I(Cn,nn)),F=.68,$=B[X.get()],Y=dn($),Z=dn($),W=dn($),sn=dn($),fn=It(Y,W,Z,sn,g,F),Nn=Ft(d,B,Q,M,sn),En=zt(k,X,R,fn,Nn,sn,e),zn=Ot(M),Bn=xn(),st=Ht(t,s,e,m),{slideRegistry:Rn}=Mt(q,p,B,ln,U,T),ot=Bt(n,s,Rn,En,fn,Bn,e,L),Cn={ownerDocument:o,ownerWindow:c,eventHandler:e,containerRect:N,slideRects:O,animation:k,axis:E,dragHandler:wt(E,n,o,c,sn,Nt(E,c),Y,k,En,fn,Nn,X,e,H,S,l,f,F,A),eventStore:Bn,percentOfView:H,index:X,indexPrevious:R,limit:M,location:Y,offsetLocation:W,previousLocation:Z,options:r,resizeHandler:Lt(t,e,c,s,E,j,w),scrollBody:fn,scrollBounds:At(M,W,sn,fn,H),scrollLooper:Dt(Q,M,W,[Y,W,Z,sn]),scrollProgress:zn,scrollSnapList:B.map(zn.get),scrollSnaps:B,scrollTarget:Nn,scrollTo:En,slideLooper:Rt(E,z,Q,_,K,rn,B,W,s),slideFocus:ot,slidesHandler:Vt(t,e,C),slidesInView:st,slideIndexes:T,slideRegistry:Rn,slidesToScroll:U,target:sn,translate:_n(E,t)};return Cn}function $t(){let n={},t;function s(i){t=i}function o(i){return n[i]||[]}function c(i){return o(i).forEach(x=>x(t,i)),a}function r(i,x){return n[i]=o(i).concat([x]),a}function e(i,x){return n[i]=o(i).filter(d=>d!==x),a}function u(){n={}}const a={init:s,emit:c,off:e,on:r,clear:u};return a}const Kt={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Jt(n){function t(r,e){return Xn(r,e||{})}function s(r){const e=r.breakpoints||{},u=hn(e).filter(a=>n.matchMedia(a).matches).map(a=>e[a]).reduce((a,i)=>t(a,i),{});return t(r,u)}function o(r){return r.map(e=>hn(e.breakpoints||{})).reduce((e,u)=>e.concat(u),[]).map(n.matchMedia)}return{mergeOptions:t,optionsAtMedia:s,optionsMediaQueries:o}}function Qt(n){let t=[];function s(r,e){return t=e.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(r,n)),e.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function o(){t=t.filter(r=>r.destroy())}return{init:s,destroy:o}}function jn(n,t,s){const o=n.ownerDocument,c=o.defaultView,r=Jt(c),e=Qt(r),u=xn(),a=$t(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=r,{on:g,off:S,emit:l}=a,m=E;let h=!1,f,p=i(Kt,jn.globalOptions),j=i(p),C=[],A,L,v;function w(){const{container:T,slides:y}=j;L=(Tn(T)?n.querySelector(T):T)||n.children[0];const k=Tn(y)?L.querySelectorAll(y):y;v=[].slice.call(k||L.children)}function N(T){const y=Ut(n,L,v,o,c,T,a);if(T.loop&&!y.slideLooper.canLoop()){const I=Object.assign({},T,{loop:!1});return N(I)}return y}function O(T,y){h||(p=i(p,T),j=x(p),C=y||C,w(),f=N(j),d([p,...C.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",E)),j.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&v.length&&f.dragHandler.init(R),A=e.init(R,C)))}function E(T,y){const I=U();z(),O(i({startIndex:I},T),y),a.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),u.clear()}function H(){h||(h=!0,u.clear(),z(),a.emit("destroy"),a.clear())}function G(T,y,I){!j.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:j.duration),f.scrollTo.index(T,I||0))}function q(T){const y=f.index.add(1).get();G(y,T,-1)}function en(T){const y=f.index.add(-1).get();G(y,T,1)}function _(){return f.index.add(1).get()!==U()}function K(){return f.index.add(-1).get()!==U()}function J(){return f.scrollSnapList}function an(){return f.scrollProgress.get(f.location.get())}function U(){return f.index.get()}function rn(){return f.indexPrevious.get()}function cn(){return f.slidesInView.get()}function Q(){return f.slidesInView.get(!1)}function un(){return A}function ln(){return f}function B(){return n}function M(){return L}function X(){return v}const R={canScrollNext:_,canScrollPrev:K,containerNode:M,internalEngine:ln,destroy:H,off:S,on:g,emit:l,plugins:un,previousScrollSnap:rn,reInit:m,rootNode:B,scrollNext:q,scrollPrev:en,scrollProgress:an,scrollSnapList:J,scrollTo:G,selectedScrollSnap:U,slideNodes:X,slidesInView:cn,slidesNotInView:Q};return O(t,s),setTimeout(()=>a.emit("init"),0),R}jn.globalOptions=void 0;function Fn(n={},t=[]){const s=P.useRef(n),o=P.useRef(t),[c,r]=P.useState(),[e,u]=P.useState(),a=P.useCallback(()=>{c&&c.reInit(s.current,o.current)},[c]);return P.useEffect(()=>{Dn(s.current,n)||(s.current=n,a())},[n,a]),P.useEffect(()=>{yt(o.current,t)||(o.current=t,a())},[t,a]),P.useEffect(()=>{if(xt()&&e){jn.globalOptions=Fn.globalOptions;const i=jn(e,s.current,o.current);return r(i),()=>i.destroy()}else r(void 0)},[e,r]),[u,c]}Fn.globalOptions=void 0;const Zn=P.createContext(null);function wn(){const n=P.useContext(Zn);if(!n)throw new Error("useCarousel must be used within a <Carousel />");return n}const Wn=P.forwardRef(({orientation:n="horizontal",opts:t,setApi:s,plugins:o,className:c,children:r,...e},u)=>{const[a,i]=Fn({...t,axis:n==="horizontal"?"x":"y"},o),[x,d]=P.useState(!1),[g,S]=P.useState(!1),l=P.useCallback(p=>{p&&(d(p.canScrollPrev()),S(p.canScrollNext()))},[]),m=P.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=P.useCallback(()=>{i==null||i.scrollNext()},[i]),f=P.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),h())},[m,h]);return P.useEffect(()=>{!i||!s||s(i)},[i,s]),P.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),b.jsx(Zn.Provider,{value:{carouselRef:a,api:i,opts:t,orientation:n||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:b.jsx("div",{ref:u,onKeyDownCapture:f,className:yn("relative",c),role:"region","aria-roledescription":"carousel",...e,children:r})})});Wn.displayName="Carousel";const nt=P.forwardRef(({className:n,...t},s)=>{const{carouselRef:o,orientation:c}=wn();return b.jsx("div",{ref:o,className:"overflow-hidden",children:b.jsx("div",{ref:s,className:yn("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",n),...t})})});nt.displayName="CarouselContent";const tn=P.forwardRef(({className:n,...t},s)=>{const{orientation:o}=wn();return b.jsx("div",{ref:s,role:"group","aria-roledescription":"slide",className:yn("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",n),...t})});tn.displayName="CarouselItem";const tt=P.forwardRef(({className:n,variant:t="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollPrev:e,canScrollPrev:u}=wn();return b.jsxs(mn,{ref:c,variant:t,size:s,className:yn("absolute  h-8 w-8 rounded-full",r==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",n),disabled:!u,onClick:e,...o,children:[b.jsx(ft,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Previous slide"})]})});tt.displayName="CarouselPrevious";const et=P.forwardRef(({className:n,variant:t="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollNext:e,canScrollNext:u}=wn();return b.jsxs(mn,{ref:c,variant:t,size:s,className:yn("absolute h-8 w-8 rounded-full",r==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",n),disabled:!u,onClick:e,...o,children:[b.jsx(dt,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Next slide"})]})});et.displayName="CarouselNext";function _t(){const n=mt();return b.jsxs("div",{children:[b.jsxs(pt,{children:[b.jsx("title",{children:"Loving AI"}),b.jsx("meta",{name:"description",content:"Chat with an AI companion for instant connections and lasting memories. Unique personalities, no guesswork, and no rejection."}),b.jsx("link",{rel:"canonical",href:"https://www.loving-ai.com"}),b.jsx("script",{type:"application/ld+json",children:`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "JC Lucas",
      "jobTitle": "Freelance Fullstack Software Engineer",
      "description": "An AI enthusiast and expert in creating engaging, fun, and realistic AI companions for instant connections and lasting memories.",
      "url": "https://www.loving-ai.com",
      "image": "https://www.loving-ai.com/heart.png",
    }
    `})]}),b.jsxs("div",{className:"flex items-center sm:justify-between justify-center border-b-2 pb-3",children:[b.jsxs("div",{className:"flex items-center justify-start",children:[b.jsx("img",{src:"/heart.png",alt:"heart with arrow through it",height:80,width:80}),b.jsx("h1",{className:"text-3xl text-[#FF0066] font-bold",children:"Loving AI"})]}),b.jsxs("nav",{className:"flex justify-end gap-2",children:[b.jsx(mn,{variant:"secondary",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>n("/login"),"aria-label":"Login",children:"Login"}),b.jsx(mn,{variant:"default",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>n("/personality"),"aria-label":"Sign Up",children:"Sign Up"})]})]}),b.jsxs("article",{className:"mt-3 border-b-2 pb-3",children:[b.jsx("h4",{className:"text-md md:text-lg",children:"Why spend your time alone..."}),b.jsx("h3",{className:"text-lg md:text-xl ",children:"when you can find companionship now..."}),b.jsxs("h2",{className:"text-xl md:text-2xl text-[#FF0066] ",children:["Can you ",b.jsx("span",{className:"italic font-bold",children:"Rizz"})," up these AI Hotties?"]}),b.jsxs("div",{className:"text-xs text-slate-700 md:text-base",children:[b.jsx("p",{className:"mt-3",children:"This app was created for real people just like you."}),b.jsx("p",{children:"Every AI person on here have their own unique personality."}),b.jsx("p",{children:"Experience instant connections and create lasting memories."})]})]}),b.jsx(gt,{className:"mt-3 underline",children:"Meet some of the Hotties:"}),b.jsxs(Wn,{className:"",opts:{loop:!0,align:"center"},children:[b.jsxs(nt,{className:"-ml-2 ",children:[b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/AsianW.png",alt:"picture of an asian woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/AsianM.png",alt:"picture of an asian man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/ColorW.png",alt:"picture of an colored woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/ColorM.png",alt:"picture of an colored man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/CaucasianW.png",alt:"picture of an caucasian woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/CaucasianM.png",alt:"picture of an caucasian man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:"/IndianW.png",alt:"picture of an indian woman"})})]}),b.jsx(tt,{}),b.jsx(et,{})]}),b.jsx(mn,{variant:"secondary",size:"default",className:"mt-6 w-full rounded-full",onClick:()=>n("/login"),"aria-label":"Login",children:b.jsx("h4",{children:"Get Your Rizz On!"})})]})}export{_t as default};
