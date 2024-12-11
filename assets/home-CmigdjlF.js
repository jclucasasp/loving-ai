import{r as T,j as b,h as yn,B as mn,a6 as ft,a7 as dt,u as mt,a8 as pt}from"./index-63zCG_IC.js";import{C as gt}from"./component-heading-6ZDaXazP.js";const ht="/loving-ai/assets/CaucasianW-BBYyze9C.png",xt="/loving-ai/assets/CaucasianM-D15HHG2o.png",yt="/loving-ai/assets/IndianW-BGrdLFLO.png",bt="/loving-ai/assets/AsianW-D0ApKDCF.png",St="/loving-ai/assets/AsianM-DYs2WQSr.png",vt="/loving-ai/assets/ColorW-Gttl781-.png",jt="/loving-ai/assets/ColorM-CiJQS0Gi.png",wt="/loving-ai/assets/heart-L2u2Ui8n.png";function Ct(n){return Object.prototype.toString.call(n)==="[object Object]"}function Kn(n){return Ct(n)||Array.isArray(n)}function Nt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Pn(n,t){const s=Object.keys(n),o=Object.keys(t);if(s.length!==o.length)return!1;const c=JSON.stringify(Object.keys(n.breakpoints||{})),r=JSON.stringify(Object.keys(t.breakpoints||{}));return c!==r?!1:s.every(e=>{const u=n[e],a=t[e];return typeof u=="function"?`${u}`==`${a}`:!Kn(u)||!Kn(a)?u===a:Pn(u,a)})}function $n(n){return n.concat().sort((t,s)=>t.name>s.name?1:-1).map(t=>t.options)}function Et(n,t){if(n.length!==t.length)return!1;const s=$n(n),o=$n(t);return s.every((c,r)=>{const e=o[r];return Pn(c,e)})}function Mn(n){return typeof n=="number"}function Dn(n){return typeof n=="string"}function jn(n){return typeof n=="boolean"}function Qn(n){return Object.prototype.toString.call(n)==="[object Object]"}function P(n){return Math.abs(n)}function On(n){return Math.sign(n)}function pn(n,t){return P(n-t)}function Lt(n,t){if(n===0||t===0||P(n)<=P(t))return 0;const s=pn(P(n),P(t));return P(s/n)}function gn(n){return hn(n).map(Number)}function H(n){return n[bn(n)]}function bn(n){return Math.max(0,n.length-1)}function kn(n,t){return t===bn(n)}function Jn(n,t=0){return Array.from(Array(n),(s,o)=>t+o)}function hn(n){return Object.keys(n)}function Wn(n,t){return[n,t].reduce((s,o)=>(hn(o).forEach(c=>{const r=s[c],e=o[c],u=Qn(r)&&Qn(e);s[c]=u?Wn(r,e):e}),s),{})}function Tn(n,t){return typeof t.MouseEvent<"u"&&n instanceof t.MouseEvent}function It(n,t){const s={start:o,center:c,end:r};function o(){return 0}function c(a){return r(a)/2}function r(a){return t-a}function e(a,i){return Dn(n)?s[n](a):n(t,a,i)}return{measure:e}}function xn(){let n=[];function t(c,r,e,u={passive:!0}){let a;if("addEventListener"in c)c.addEventListener(r,e,u),a=()=>c.removeEventListener(r,e,u);else{const i=c;i.addListener(e),a=()=>i.removeListener(e)}return n.push(a),o}function s(){n=n.filter(c=>c())}const o={add:t,clear:s};return o}function At(n,t,s,o){const c=xn(),r=1e3/60;let e=null,u=0,a=0;function i(){c.add(n,"visibilitychange",()=>{n.hidden&&l()})}function x(){S(),c.clear()}function d(h){if(!a)return;e||(e=h);const f=h-e;for(e=h,u+=f;u>=r;)s(r),u-=r;const p=u/r;o(p),a&&t.requestAnimationFrame(d)}function g(){a||(a=t.requestAnimationFrame(d))}function S(){t.cancelAnimationFrame(a),e=null,u=0,a=0}function l(){e=null,u=0}return{init:i,destroy:x,start:g,stop:S,update:()=>s(r),render:o}}function Dt(n,t){const s=t==="rtl",o=n==="y",c=o?"y":"x",r=o?"x":"y",e=!o&&s?-1:1,u=x(),a=d();function i(l){const{height:m,width:h}=l;return o?m:h}function x(){return o?"top":s?"right":"left"}function d(){return o?"bottom":s?"left":"right"}function g(l){return l*e}return{scroll:c,cross:r,startEdge:u,endEdge:a,measureSize:i,direction:g}}function on(n=0,t=0){const s=P(n-t);function o(i){return i<n}function c(i){return i>t}function r(i){return o(i)||c(i)}function e(i){return r(i)?o(i)?n:t:i}function u(i){return s?i-s*Math.ceil((i-t)/s):i}return{length:s,max:t,min:n,constrain:e,reachedAny:r,reachedMax:c,reachedMin:o,removeOffset:u}}function Yn(n,t,s){const{constrain:o}=on(0,n),c=n+1;let r=e(t);function e(g){return s?P((c+g)%c):o(g)}function u(){return r}function a(g){return r=e(g),d}function i(g){return x().set(u()+g)}function x(){return Yn(n,u(),s)}const d={get:u,set:a,add:i,clone:x};return d}function Tt(n,t,s,o,c,r,e,u,a,i,x,d,g,S,l,m,h,f,p){const{cross:v,direction:E}=n,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},j=xn(),w=xn(),C=on(50,225).constrain(S.measure(20)),M={mouse:300,touch:400},N={mouse:500,touch:600},z=l?43:25;let V=!1,G=0,U=0,en=!1,X=!1,$=!1,Q=!1;function an(y){if(!p)return;function I(F){(jn(p)||p(y,F))&&ln(F)}const O=t;j.add(O,"dragstart",F=>F.preventDefault(),L).add(O,"touchmove",()=>{},L).add(O,"touchend",()=>{}).add(O,"touchstart",I).add(O,"mousedown",I).add(O,"touchcancel",k).add(O,"contextmenu",k).add(O,"click",W,!0)}function q(){j.clear(),w.clear()}function rn(){const y=Q?s:t;w.add(y,"touchmove",B,L).add(y,"touchend",k).add(y,"mousemove",B,L).add(y,"mouseup",k)}function cn(y){const I=y.nodeName||"";return A.includes(I)}function J(){return(l?N:M)[Q?"mouse":"touch"]}function un(y,I){const O=d.add(On(y)*-1),F=x.byDistance(y,!l).distance;return l||P(y)<C?F:h&&I?F*.5:x.byIndex(O.get(),0).distance}function ln(y){const I=Tn(y,o);Q=I,$=l&&I&&!y.buttons&&V,V=pn(c.get(),e.get())>=2,!(I&&y.button!==0)&&(cn(y.target)||(en=!0,r.pointerDown(y),i.useFriction(0).useDuration(0),c.set(e),rn(),G=r.readPoint(y),U=r.readPoint(y,v),g.emit("pointerDown")))}function B(y){if(!Tn(y,o)&&y.touches.length>=2)return k(y);const O=r.readPoint(y),F=r.readPoint(y,v),K=pn(O,G),Y=pn(F,U);if(!X&&!Q&&(!y.cancelable||(X=K>Y,!X)))return k(y);const _=r.pointerMove(y);K>m&&($=!0),i.useFriction(.3).useDuration(.75),u.start(),c.add(E(_)),y.preventDefault()}function k(y){const O=x.byDistance(0,!1).index!==d.get(),F=r.pointerUp(y)*J(),K=un(E(F),O),Y=Lt(F,K),_=z-10*Y,Z=f+Y/50;X=!1,en=!1,w.clear(),i.useDuration(_).useFriction(Z),a.distance(K,!l),Q=!1,g.emit("pointerUp")}function W(y){$&&(y.stopPropagation(),y.preventDefault(),$=!1)}function R(){return en}return{init:an,destroy:q,pointerDown:R}}function Pt(n,t){let o,c;function r(d){return d.timeStamp}function e(d,g){const l=`client${(g||n.scroll)==="x"?"X":"Y"}`;return(Tn(d,t)?d:d.touches[0])[l]}function u(d){return o=d,c=d,e(d)}function a(d){const g=e(d)-e(c),S=r(d)-r(o)>170;return c=d,S&&(o=d),g}function i(d){if(!o||!c)return 0;const g=e(c)-e(o),S=r(d)-r(o),l=r(d)-r(c)>170,m=g/S;return S&&!l&&P(m)>.1?m:0}return{pointerDown:u,pointerMove:a,pointerUp:i,readPoint:e}}function Mt(){function n(s){const{offsetTop:o,offsetLeft:c,offsetWidth:r,offsetHeight:e}=s;return{top:o,right:c+r,bottom:o+e,left:c,width:r,height:e}}return{measure:n}}function Ot(n){function t(o){return n*(o/100)}return{measure:t}}function kt(n,t,s,o,c,r,e){const u=[n].concat(o);let a,i,x=[],d=!1;function g(h){return c.measureSize(e.measure(h))}function S(h){if(!r)return;i=g(n),x=o.map(g);function f(p){for(const v of p){if(d)return;const E=v.target===n,A=o.indexOf(v.target),L=E?i:x[A],j=g(E?n:o[A]);if(P(j-L)>=.5){h.reInit(),t.emit("resize");break}}}a=new ResizeObserver(p=>{(jn(r)||r(h,p))&&f(p)}),s.requestAnimationFrame(()=>{u.forEach(p=>a.observe(p))})}function l(){d=!0,a&&a.disconnect()}return{init:S,destroy:l}}function Ft(n,t,s,o,c,r){let e=0,u=0,a=c,i=r,x=n.get(),d=0;function g(L){const j=L/1e3,w=a*j,C=o.get()-n.get(),M=!a;let N=0;return M?(e=0,s.set(o),n.set(o),N=C):(s.set(n),e+=C/w,e*=i,x+=e,n.add(e*j),N=x-d),u=On(N),d=x,A}function S(){const L=o.get()-t.get();return P(L)<.001}function l(){return a}function m(){return u}function h(){return e}function f(){return v(c)}function p(){return E(r)}function v(L){return a=L,A}function E(L){return i=L,A}const A={direction:m,duration:l,velocity:h,seek:g,settled:S,useBaseFriction:p,useBaseDuration:f,useFriction:E,useDuration:v};return A}function zt(n,t,s,o,c){const r=c.measure(10),e=c.measure(50),u=on(.1,.99);let a=!1;function i(){return!(a||!n.reachedAny(s.get())||!n.reachedAny(t.get()))}function x(S){if(!i())return;const l=n.reachedMin(t.get())?"min":"max",m=P(n[l]-t.get()),h=s.get()-t.get(),f=u.constrain(m/e);s.subtract(h*f),!S&&P(h)<r&&(s.set(n.constrain(s.get())),o.useDuration(25).useBaseFriction())}function d(S){a=!S}return{shouldConstrain:i,constrain:x,toggleActive:d}}function Bt(n,t,s,o,c){const r=on(-t+n,0),e=d(),u=x(),a=g();function i(l,m){return pn(l,m)<1}function x(){const l=e[0],m=H(e),h=e.lastIndexOf(l),f=e.indexOf(m)+1;return on(h,f)}function d(){return s.map((l,m)=>{const{min:h,max:f}=r,p=r.constrain(l),v=!m,E=kn(s,m);return v?f:E||i(h,p)?h:i(f,p)?f:p}).map(l=>parseFloat(l.toFixed(3)))}function g(){if(t<=n+c)return[r.max];if(o==="keepSnaps")return e;const{min:l,max:m}=u;return e.slice(l,m)}return{snapsContained:a,scrollContainLimit:u}}function Rt(n,t,s){const o=t[0],c=s?o-n:H(t);return{limit:on(c,o)}}function Ht(n,t,s,o){const r=t.min+.1,e=t.max+.1,{reachedMin:u,reachedMax:a}=on(r,e);function i(g){return g===1?a(s.get()):g===-1?u(s.get()):!1}function x(g){if(!i(g))return;const S=n*(g*-1);o.forEach(l=>l.add(S))}return{loop:x}}function Vt(n){const{max:t,length:s}=n;function o(r){const e=r-t;return s?e/-s:0}return{get:o}}function Gt(n,t,s,o,c){const{startEdge:r,endEdge:e}=n,{groupSlides:u}=c,a=d().map(t.measure),i=g(),x=S();function d(){return u(o).map(m=>H(m)[e]-m[0][r]).map(P)}function g(){return o.map(m=>s[r]-m[r]).map(m=>-P(m))}function S(){return u(i).map(m=>m[0]).map((m,h)=>m+a[h])}return{snaps:i,snapsAligned:x}}function Ut(n,t,s,o,c,r){const{groupSlides:e}=c,{min:u,max:a}=o,i=x();function x(){const g=e(r),S=!n||t==="keepSnaps";return s.length===1?[r]:S?g:g.slice(u,a).map((l,m,h)=>{const f=!m,p=kn(h,m);if(f){const v=H(h[0])+1;return Jn(v)}if(p){const v=bn(r)-H(h)[0]+1;return Jn(v,H(h)[0])}return l})}return{slideRegistry:i}}function qt(n,t,s,o,c){const{reachedAny:r,removeOffset:e,constrain:u}=o;function a(l){return l.concat().sort((m,h)=>P(m)-P(h))[0]}function i(l){const m=n?e(l):u(l),h=t.map((p,v)=>({diff:x(p-m,0),index:v})).sort((p,v)=>P(p.diff)-P(v.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+s,l-s];if(!n)return l;if(!m)return a(h);const f=h.filter(p=>On(p)===m);return f.length?a(f):H(h)-s}function d(l,m){const h=t[l]-c.get(),f=x(h,m);return{index:l,distance:f}}function g(l,m){const h=c.get()+l,{index:f,distance:p}=i(h),v=!n&&r(h);if(!m||v)return{index:f,distance:l};const E=t[f]-p,A=l+x(E,0);return{index:f,distance:A}}return{byDistance:g,byIndex:d,shortcut:x}}function Kt(n,t,s,o,c,r,e){function u(d){const g=d.distance,S=d.index!==t.get();r.add(g),g&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),S&&(s.set(t.get()),t.set(d.index),e.emit("select"))}function a(d,g){const S=c.byDistance(d,g);u(S)}function i(d,g){const S=t.clone().set(d),l=c.byIndex(S.get(),g);u(l)}return{distance:a,index:i}}function $t(n,t,s,o,c,r,e,u){const a={passive:!0,capture:!0};let i=0;function x(S){if(!u)return;function l(m){if(new Date().getTime()-i>10)return;e.emit("slideFocusStart"),n.scrollLeft=0;const p=s.findIndex(v=>v.includes(m));Mn(p)&&(c.useDuration(0),o.index(p,0),e.emit("slideFocus"))}r.add(document,"keydown",d,!1),t.forEach((m,h)=>{r.add(m,"focus",f=>{(jn(u)||u(S,f))&&l(h)},a)})}function d(S){S.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function dn(n){let t=n;function s(){return t}function o(a){t=e(a)}function c(a){t+=e(a)}function r(a){t-=e(a)}function e(a){return Mn(a)?a:a.get()}return{get:s,set:o,add:c,subtract:r}}function Xn(n,t){const s=n.scroll==="x"?r:e,o=t.style;let c=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function e(d){return`translate3d(0px,${d}px,0px)`}function u(d){c||(o.transform=s(n.direction(d)))}function a(d){c=!d}function i(){c||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:i,to:u,toggleActive:a}}function Qt(n,t,s,o,c,r,e,u,a){const x=gn(c),d=gn(c).reverse(),g=f().concat(p());function S(j,w){return j.reduce((C,M)=>C-c[M],w)}function l(j,w){return j.reduce((C,M)=>S(C,w)>0?C.concat([M]):C,[])}function m(j){return r.map((w,C)=>({start:w-o[C]+.5+j,end:w+t-.5+j}))}function h(j,w,C){const M=m(w);return j.map(N=>{const z=C?0:-s,V=C?s:0,G=C?"end":"start",U=M[N][G];return{index:N,loopPoint:U,slideLocation:dn(-1),translate:Xn(n,a[N]),target:()=>u.get()>U?z:V}})}function f(){const j=e[0],w=l(d,j);return h(w,s,!1)}function p(){const j=t-e[0]-1,w=l(x,j);return h(w,-s,!0)}function v(){return g.every(({index:j})=>{const w=x.filter(C=>C!==j);return S(w,t)<=.1})}function E(){g.forEach(j=>{const{target:w,translate:C,slideLocation:M}=j,N=w();N!==M.get()&&(C.to(N),M.set(N))})}function A(){g.forEach(j=>j.translate.clear())}return{canLoop:v,clear:A,loop:E,loopPoints:g}}function Jt(n,t,s){let o,c=!1;function r(a){if(!s)return;function i(x){for(const d of x)if(d.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(x=>{c||(jn(s)||s(a,x))&&i(x)}),o.observe(n,{childList:!0})}function e(){o&&o.disconnect(),c=!0}return{init:r,destroy:e}}function Wt(n,t,s,o){const c={};let r=null,e=null,u,a=!1;function i(){u=new IntersectionObserver(l=>{a||(l.forEach(m=>{const h=t.indexOf(m.target);c[h]=m}),r=null,e=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:o}),t.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return hn(c).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:p}=c[f];return(l&&p||!l&&!p)&&m.push(f),m},[])}function g(l=!0){if(l&&r)return r;if(!l&&e)return e;const m=d(l);return l&&(r=m),l||(e=m),m}return{init:i,destroy:x,get:g}}function Yt(n,t,s,o,c,r){const{measureSize:e,startEdge:u,endEdge:a}=n,i=s[0]&&c,x=l(),d=m(),g=s.map(e),S=h();function l(){if(!i)return 0;const p=s[0];return P(t[u]-p[u])}function m(){if(!i)return 0;const p=r.getComputedStyle(H(o));return parseFloat(p.getPropertyValue(`margin-${a}`))}function h(){return s.map((p,v,E)=>{const A=!v,L=kn(E,v);return A?g[v]+x:L?g[v]+d:E[v+1][u]-p[u]}).map(P)}return{slideSizes:g,slideSizesWithGaps:S,startGap:x,endGap:d}}function Xt(n,t,s,o,c,r,e,u,a){const{startEdge:i,endEdge:x,direction:d}=n,g=Mn(s);function S(f,p){return gn(f).filter(v=>v%p===0).map(v=>f.slice(v,v+p))}function l(f){return f.length?gn(f).reduce((p,v,E)=>{const A=H(p)||0,L=A===0,j=v===bn(f),w=c[i]-r[A][i],C=c[i]-r[v][x],M=!o&&L?d(e):0,N=!o&&j?d(u):0,z=P(C-N-(w+M));return E&&z>t+a&&p.push(v),j&&p.push(f.length),p},[]).map((p,v,E)=>{const A=Math.max(E[v-1]||0);return f.slice(A,p)}):[]}function m(f){return g?S(f,s):l(f)}return{groupSlides:m}}function _t(n,t,s,o,c,r,e){const{align:u,axis:a,direction:i,startIndex:x,loop:d,duration:g,dragFree:S,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:p,watchResize:v,watchSlides:E,watchDrag:A,watchFocus:L}=r,j=2,w=Mt(),C=w.measure(t),M=s.map(w.measure),N=Dt(a,i),z=N.measureSize(C),V=Ot(z),G=It(u,z),U=!d&&!!p,en=d||!!p,{slideSizes:X,slideSizesWithGaps:$,startGap:Q,endGap:an}=Yt(N,C,M,s,en,c),q=Xt(N,z,h,d,C,M,Q,an,j),{snaps:rn,snapsAligned:cn}=Gt(N,G,C,M,q),J=-H(rn)+H($),{snapsContained:un,scrollContainLimit:ln}=Bt(z,J,cn,p,j),B=U?un:cn,{limit:k}=Rt(J,B,d),W=Yn(bn(B),x,d),R=W.clone(),D=gn(s),y=({dragHandler:nn,scrollBody:Ln,scrollBounds:In,options:{loop:Sn}},An)=>{Sn||In.constrain(nn.pointerDown()),Ln.seek(An)},I=({scrollBody:nn,translate:Ln,location:In,offsetLocation:Sn,scrollLooper:An,slideLooper:rt,dragHandler:it,animation:ct,eventHandler:Hn,scrollBounds:at,options:{loop:Vn}},Gn)=>{const Un=nn.settled(),ut=!at.shouldConstrain(),qn=Vn?Un:Un&&ut;qn&&!it.pointerDown()&&(ct.stop(),Hn.emit("settle")),qn||Hn.emit("scroll");const lt=In.get()*Gn+_.get()*(1-Gn);Sn.set(lt),Vn&&(An.loop(nn.direction()),rt.loop()),Ln.to(Sn.get())},O=At(o,c,nn=>y(En,nn),nn=>I(En,nn)),F=.68,K=B[W.get()],Y=dn(K),_=dn(K),Z=dn(K),sn=dn(K),fn=Ft(Y,Z,_,sn,g,F),Cn=qt(d,B,J,k,sn),Nn=Kt(O,W,R,fn,Cn,sn,e),zn=Vt(k),Bn=xn(),st=Wt(t,s,e,m),{slideRegistry:Rn}=Ut(U,p,B,ln,q,D),ot=$t(n,s,Rn,Nn,fn,Bn,e,L),En={ownerDocument:o,ownerWindow:c,eventHandler:e,containerRect:C,slideRects:M,animation:O,axis:N,dragHandler:Tt(N,n,o,c,sn,Pt(N,c),Y,O,Nn,fn,Cn,W,e,V,S,l,f,F,A),eventStore:Bn,percentOfView:V,index:W,indexPrevious:R,limit:k,location:Y,offsetLocation:Z,previousLocation:_,options:r,resizeHandler:kt(t,e,c,s,N,v,w),scrollBody:fn,scrollBounds:zt(k,Z,sn,fn,V),scrollLooper:Ht(J,k,Z,[Y,Z,_,sn]),scrollProgress:zn,scrollSnapList:B.map(zn.get),scrollSnaps:B,scrollTarget:Cn,scrollTo:Nn,slideLooper:Qt(N,z,J,X,$,rn,B,Z,s),slideFocus:ot,slidesHandler:Jt(t,e,E),slidesInView:st,slideIndexes:D,slideRegistry:Rn,slidesToScroll:q,target:sn,translate:Xn(N,t)};return En}function Zt(){let n={},t;function s(i){t=i}function o(i){return n[i]||[]}function c(i){return o(i).forEach(x=>x(t,i)),a}function r(i,x){return n[i]=o(i).concat([x]),a}function e(i,x){return n[i]=o(i).filter(d=>d!==x),a}function u(){n={}}const a={init:s,emit:c,off:e,on:r,clear:u};return a}const ne={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function te(n){function t(r,e){return Wn(r,e||{})}function s(r){const e=r.breakpoints||{},u=hn(e).filter(a=>n.matchMedia(a).matches).map(a=>e[a]).reduce((a,i)=>t(a,i),{});return t(r,u)}function o(r){return r.map(e=>hn(e.breakpoints||{})).reduce((e,u)=>e.concat(u),[]).map(n.matchMedia)}return{mergeOptions:t,optionsAtMedia:s,optionsMediaQueries:o}}function ee(n){let t=[];function s(r,e){return t=e.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(r,n)),e.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function o(){t=t.filter(r=>r.destroy())}return{init:s,destroy:o}}function vn(n,t,s){const o=n.ownerDocument,c=o.defaultView,r=te(c),e=ee(r),u=xn(),a=Zt(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=r,{on:g,off:S,emit:l}=a,m=N;let h=!1,f,p=i(ne,vn.globalOptions),v=i(p),E=[],A,L,j;function w(){const{container:D,slides:y}=v;L=(Dn(D)?n.querySelector(D):D)||n.children[0];const O=Dn(y)?L.querySelectorAll(y):y;j=[].slice.call(O||L.children)}function C(D){const y=_t(n,L,j,o,c,D,a);if(D.loop&&!y.slideLooper.canLoop()){const I=Object.assign({},D,{loop:!1});return C(I)}return y}function M(D,y){h||(p=i(p,D),v=x(p),E=y||E,w(),f=C(v),d([p,...E.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",N)),v.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&j.length&&f.dragHandler.init(R),A=e.init(R,E)))}function N(D,y){const I=q();z(),M(i({startIndex:I},D),y),a.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),u.clear()}function V(){h||(h=!0,u.clear(),z(),a.emit("destroy"),a.clear())}function G(D,y,I){!v.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:v.duration),f.scrollTo.index(D,I||0))}function U(D){const y=f.index.add(1).get();G(y,D,-1)}function en(D){const y=f.index.add(-1).get();G(y,D,1)}function X(){return f.index.add(1).get()!==q()}function $(){return f.index.add(-1).get()!==q()}function Q(){return f.scrollSnapList}function an(){return f.scrollProgress.get(f.location.get())}function q(){return f.index.get()}function rn(){return f.indexPrevious.get()}function cn(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function un(){return A}function ln(){return f}function B(){return n}function k(){return L}function W(){return j}const R={canScrollNext:X,canScrollPrev:$,containerNode:k,internalEngine:ln,destroy:V,off:S,on:g,emit:l,plugins:un,previousScrollSnap:rn,reInit:m,rootNode:B,scrollNext:U,scrollPrev:en,scrollProgress:an,scrollSnapList:Q,scrollTo:G,selectedScrollSnap:q,slideNodes:W,slidesInView:cn,slidesNotInView:J};return M(t,s),setTimeout(()=>a.emit("init"),0),R}vn.globalOptions=void 0;function Fn(n={},t=[]){const s=T.useRef(n),o=T.useRef(t),[c,r]=T.useState(),[e,u]=T.useState(),a=T.useCallback(()=>{c&&c.reInit(s.current,o.current)},[c]);return T.useEffect(()=>{Pn(s.current,n)||(s.current=n,a())},[n,a]),T.useEffect(()=>{Et(o.current,t)||(o.current=t,a())},[t,a]),T.useEffect(()=>{if(Nt()&&e){vn.globalOptions=Fn.globalOptions;const i=vn(e,s.current,o.current);return r(i),()=>i.destroy()}else r(void 0)},[e,r]),[u,c]}Fn.globalOptions=void 0;const _n=T.createContext(null);function wn(){const n=T.useContext(_n);if(!n)throw new Error("useCarousel must be used within a <Carousel />");return n}const Zn=T.forwardRef(({orientation:n="horizontal",opts:t,setApi:s,plugins:o,className:c,children:r,...e},u)=>{const[a,i]=Fn({...t,axis:n==="horizontal"?"x":"y"},o),[x,d]=T.useState(!1),[g,S]=T.useState(!1),l=T.useCallback(p=>{p&&(d(p.canScrollPrev()),S(p.canScrollNext()))},[]),m=T.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=T.useCallback(()=>{i==null||i.scrollNext()},[i]),f=T.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),h())},[m,h]);return T.useEffect(()=>{!i||!s||s(i)},[i,s]),T.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),b.jsx(_n.Provider,{value:{carouselRef:a,api:i,opts:t,orientation:n||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:b.jsx("div",{ref:u,onKeyDownCapture:f,className:yn("relative",c),role:"region","aria-roledescription":"carousel",...e,children:r})})});Zn.displayName="Carousel";const nt=T.forwardRef(({className:n,...t},s)=>{const{carouselRef:o,orientation:c}=wn();return b.jsx("div",{ref:o,className:"overflow-hidden",children:b.jsx("div",{ref:s,className:yn("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",n),...t})})});nt.displayName="CarouselContent";const tn=T.forwardRef(({className:n,...t},s)=>{const{orientation:o}=wn();return b.jsx("div",{ref:s,role:"group","aria-roledescription":"slide",className:yn("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",n),...t})});tn.displayName="CarouselItem";const tt=T.forwardRef(({className:n,variant:t="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollPrev:e,canScrollPrev:u}=wn();return b.jsxs(mn,{ref:c,variant:t,size:s,className:yn("absolute  h-8 w-8 rounded-full",r==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",n),disabled:!u,onClick:e,...o,children:[b.jsx(ft,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Previous slide"})]})});tt.displayName="CarouselPrevious";const et=T.forwardRef(({className:n,variant:t="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollNext:e,canScrollNext:u}=wn();return b.jsxs(mn,{ref:c,variant:t,size:s,className:yn("absolute h-8 w-8 rounded-full",r==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",n),disabled:!u,onClick:e,...o,children:[b.jsx(dt,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Next slide"})]})});et.displayName="CarouselNext";function re(){const n=mt();return b.jsxs("div",{children:[b.jsxs(pt,{children:[b.jsx("title",{children:"Loving AI"}),b.jsx("meta",{name:"description",content:"Chat with an AI companion for instant connections and lasting memories. Unique personalities, no guesswork, and no rejection."}),b.jsx("link",{rel:"canonical",href:"https://www.loving-ai.com"}),b.jsx("script",{type:"application/ld+json",children:`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "JC Lucas",
      "jobTitle": "Freelance Fullstack Software Engineer",
      "description": "An AI enthusiast and expert in creating engaging, fun, and realistic AI companions for instant connections and lasting memories.",
      "url": "https://www.loving-ai.com",
      "image": "https://www.loving-ai.com/heart.png",
    }
    `})]}),b.jsxs("div",{className:"flex items-center sm:justify-between justify-center border-b-2 pb-3",children:[b.jsxs("div",{className:"flex items-center justify-start",children:[b.jsx("img",{src:wt,alt:"heart with arrow through it",height:80,width:80}),b.jsx("h1",{className:"text-3xl text-[#FF0066] font-bold",children:"Loving AI"})]}),b.jsxs("nav",{className:"flex justify-end gap-2",children:[b.jsx(mn,{variant:"secondary",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>n("/login"),"aria-label":"Login",children:"Login"}),b.jsx(mn,{variant:"default",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>n("/personality"),"aria-label":"Sign Up",children:"Sign Up"})]})]}),b.jsxs("article",{className:"mt-3 border-b-2 pb-3",children:[b.jsx("h4",{className:"text-md md:text-lg",children:"Why spend your time alone..."}),b.jsx("h3",{className:"text-lg md:text-xl ",children:"when you can find companionship now..."}),b.jsxs("h2",{className:"text-xl md:text-2xl text-[#FF0066] ",children:["Can you ",b.jsx("span",{className:"italic font-bold",children:"Rizz"})," up these AI Hotties?"]}),b.jsxs("div",{className:"text-xs text-slate-700 md:text-base",children:[b.jsx("p",{className:"mt-3",children:"This app was created for real people just like you."}),b.jsx("p",{children:"Every AI person on here have their own unique personality."}),b.jsx("p",{children:"Experience instant connections and create lasting memories."})]})]}),b.jsx(gt,{className:"mt-3 underline",children:"Meet some of the Hotties:"}),b.jsxs(Zn,{className:"",opts:{loop:!0,align:"center"},children:[b.jsxs(nt,{className:"-ml-2 ",children:[b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:bt,alt:"picture of an asian woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:St,alt:"picture of an asian man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:vt,alt:"picture of an colored woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:jt,alt:"picture of an colored man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:ht,alt:"picture of an caucasian woman"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:xt,alt:"picture of an caucasian man"})}),b.jsx(tn,{className:"basis-1/2",children:b.jsx("img",{src:yt,alt:"picture of an indian woman"})})]}),b.jsx(tt,{}),b.jsx(et,{})]}),b.jsx(mn,{variant:"secondary",size:"default",className:"mt-6 w-full rounded-full",onClick:()=>n("/login"),"aria-label":"Login",children:b.jsx("h4",{children:"Get Your Rizz On!"})})]})}export{re as default};
