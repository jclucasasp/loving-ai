import{r as T,j as b,h as xt,B as dt,a6 as fn,a7 as dn,u as mn,a8 as pn}from"./index-Bgy2ZSMI.js";import{C as gn}from"./component-heading-YC0wVV0A.js";function hn(t){return Object.prototype.toString.call(t)==="[object Object]"}function qt(t){return hn(t)||Array.isArray(t)}function xn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,n){const s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:s.every(e=>{const u=t[e],a=n[e];return typeof u=="function"?`${u}`==`${a}`:!qt(u)||!qt(a)?u===a:Tt(u,a)})}function Kt(t){return t.concat().sort((n,s)=>n.name>s.name?1:-1).map(n=>n.options)}function yn(t,n){if(t.length!==n.length)return!1;const s=Kt(t),o=Kt(n);return s.every((c,r)=>{const e=o[r];return Tt(c,e)})}function Pt(t){return typeof t=="number"}function At(t){return typeof t=="string"}function jt(t){return typeof t=="boolean"}function $t(t){return Object.prototype.toString.call(t)==="[object Object]"}function P(t){return Math.abs(t)}function Mt(t){return Math.sign(t)}function mt(t,n){return P(t-n)}function bn(t,n){if(t===0||n===0||P(t)<=P(n))return 0;const s=mt(P(t),P(n));return P(s/t)}function pt(t){return gt(t).map(Number)}function H(t){return t[yt(t)]}function yt(t){return Math.max(0,t.length-1)}function Ot(t,n){return n===yt(t)}function Qt(t,n=0){return Array.from(Array(t),(s,o)=>n+o)}function gt(t){return Object.keys(t)}function Jt(t,n){return[t,n].reduce((s,o)=>(gt(o).forEach(c=>{const r=s[c],e=o[c],u=$t(r)&&$t(e);s[c]=u?Jt(r,e):e}),s),{})}function Dt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Sn(t,n){const s={start:o,center:c,end:r};function o(){return 0}function c(a){return r(a)/2}function r(a){return n-a}function e(a,i){return At(t)?s[t](a):t(n,a,i)}return{measure:e}}function ht(){let t=[];function n(c,r,e,u={passive:!0}){let a;if("addEventListener"in c)c.addEventListener(r,e,u),a=()=>c.removeEventListener(r,e,u);else{const i=c;i.addListener(e),a=()=>i.removeListener(e)}return t.push(a),o}function s(){t=t.filter(c=>c())}const o={add:n,clear:s};return o}function jn(t,n,s,o){const c=ht(),r=1e3/60;let e=null,u=0,a=0;function i(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){S(),c.clear()}function d(h){if(!a)return;e||(e=h);const f=h-e;for(e=h,u+=f;u>=r;)s(r),u-=r;const p=u/r;o(p),a&&n.requestAnimationFrame(d)}function g(){a||(a=n.requestAnimationFrame(d))}function S(){n.cancelAnimationFrame(a),e=null,u=0,a=0}function l(){e=null,u=0}return{init:i,destroy:x,start:g,stop:S,update:()=>s(r),render:o}}function vn(t,n){const s=n==="rtl",o=t==="y",c=o?"y":"x",r=o?"x":"y",e=!o&&s?-1:1,u=x(),a=d();function i(l){const{height:m,width:h}=l;return o?m:h}function x(){return o?"top":s?"right":"left"}function d(){return o?"bottom":s?"left":"right"}function g(l){return l*e}return{scroll:c,cross:r,startEdge:u,endEdge:a,measureSize:i,direction:g}}function ot(t=0,n=0){const s=P(t-n);function o(i){return i<t}function c(i){return i>n}function r(i){return o(i)||c(i)}function e(i){return r(i)?o(i)?t:n:i}function u(i){return s?i-s*Math.ceil((i-n)/s):i}return{length:s,max:n,min:t,constrain:e,reachedAny:r,reachedMax:c,reachedMin:o,removeOffset:u}}function Wt(t,n,s){const{constrain:o}=ot(0,t),c=t+1;let r=e(n);function e(g){return s?P((c+g)%c):o(g)}function u(){return r}function a(g){return r=e(g),d}function i(g){return x().set(u()+g)}function x(){return Wt(t,u(),s)}const d={get:u,set:a,add:i,clone:x};return d}function wn(t,n,s,o,c,r,e,u,a,i,x,d,g,S,l,m,h,f,p){const{cross:j,direction:E}=t,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},v=ht(),w=ht(),C=ot(50,225).constrain(S.measure(20)),M={mouse:300,touch:400},N={mouse:500,touch:600},z=l?43:25;let V=!1,G=0,U=0,et=!1,X=!1,$=!1,Q=!1;function ct(y){if(!p)return;function I(F){(jt(p)||p(y,F))&&ut(F)}const O=n;v.add(O,"dragstart",F=>F.preventDefault(),L).add(O,"touchmove",()=>{},L).add(O,"touchend",()=>{}).add(O,"touchstart",I).add(O,"mousedown",I).add(O,"touchcancel",k).add(O,"contextmenu",k).add(O,"click",W,!0)}function q(){v.clear(),w.clear()}function rt(){const y=Q?s:n;w.add(y,"touchmove",B,L).add(y,"touchend",k).add(y,"mousemove",B,L).add(y,"mouseup",k)}function it(y){const I=y.nodeName||"";return A.includes(I)}function J(){return(l?N:M)[Q?"mouse":"touch"]}function at(y,I){const O=d.add(Mt(y)*-1),F=x.byDistance(y,!l).distance;return l||P(y)<C?F:h&&I?F*.5:x.byIndex(O.get(),0).distance}function ut(y){const I=Dt(y,o);Q=I,$=l&&I&&!y.buttons&&V,V=mt(c.get(),e.get())>=2,!(I&&y.button!==0)&&(it(y.target)||(et=!0,r.pointerDown(y),i.useFriction(0).useDuration(0),c.set(e),rt(),G=r.readPoint(y),U=r.readPoint(y,j),g.emit("pointerDown")))}function B(y){if(!Dt(y,o)&&y.touches.length>=2)return k(y);const O=r.readPoint(y),F=r.readPoint(y,j),K=mt(O,G),Y=mt(F,U);if(!X&&!Q&&(!y.cancelable||(X=K>Y,!X)))return k(y);const _=r.pointerMove(y);K>m&&($=!0),i.useFriction(.3).useDuration(.75),u.start(),c.add(E(_)),y.preventDefault()}function k(y){const O=x.byDistance(0,!1).index!==d.get(),F=r.pointerUp(y)*J(),K=at(E(F),O),Y=bn(F,K),_=z-10*Y,Z=f+Y/50;X=!1,et=!1,w.clear(),i.useDuration(_).useFriction(Z),a.distance(K,!l),Q=!1,g.emit("pointerUp")}function W(y){$&&(y.stopPropagation(),y.preventDefault(),$=!1)}function R(){return et}return{init:ct,destroy:q,pointerDown:R}}function Cn(t,n){let o,c;function r(d){return d.timeStamp}function e(d,g){const l=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Dt(d,n)?d:d.touches[0])[l]}function u(d){return o=d,c=d,e(d)}function a(d){const g=e(d)-e(c),S=r(d)-r(o)>170;return c=d,S&&(o=d),g}function i(d){if(!o||!c)return 0;const g=e(c)-e(o),S=r(d)-r(o),l=r(d)-r(c)>170,m=g/S;return S&&!l&&P(m)>.1?m:0}return{pointerDown:u,pointerMove:a,pointerUp:i,readPoint:e}}function Nn(){function t(s){const{offsetTop:o,offsetLeft:c,offsetWidth:r,offsetHeight:e}=s;return{top:o,right:c+r,bottom:o+e,left:c,width:r,height:e}}return{measure:t}}function En(t){function n(o){return t*(o/100)}return{measure:n}}function Ln(t,n,s,o,c,r,e){const u=[t].concat(o);let a,i,x=[],d=!1;function g(h){return c.measureSize(e.measure(h))}function S(h){if(!r)return;i=g(t),x=o.map(g);function f(p){for(const j of p){if(d)return;const E=j.target===t,A=o.indexOf(j.target),L=E?i:x[A],v=g(E?t:o[A]);if(P(v-L)>=.5){h.reInit(),n.emit("resize");break}}}a=new ResizeObserver(p=>{(jt(r)||r(h,p))&&f(p)}),s.requestAnimationFrame(()=>{u.forEach(p=>a.observe(p))})}function l(){d=!0,a&&a.disconnect()}return{init:S,destroy:l}}function In(t,n,s,o,c,r){let e=0,u=0,a=c,i=r,x=t.get(),d=0;function g(L){const v=L/1e3,w=a*v,C=o.get()-t.get(),M=!a;let N=0;return M?(e=0,s.set(o),t.set(o),N=C):(s.set(t),e+=C/w,e*=i,x+=e,t.add(e*v),N=x-d),u=Mt(N),d=x,A}function S(){const L=o.get()-n.get();return P(L)<.001}function l(){return a}function m(){return u}function h(){return e}function f(){return j(c)}function p(){return E(r)}function j(L){return a=L,A}function E(L){return i=L,A}const A={direction:m,duration:l,velocity:h,seek:g,settled:S,useBaseFriction:p,useBaseDuration:f,useFriction:E,useDuration:j};return A}function An(t,n,s,o,c){const r=c.measure(10),e=c.measure(50),u=ot(.1,.99);let a=!1;function i(){return!(a||!t.reachedAny(s.get())||!t.reachedAny(n.get()))}function x(S){if(!i())return;const l=t.reachedMin(n.get())?"min":"max",m=P(t[l]-n.get()),h=s.get()-n.get(),f=u.constrain(m/e);s.subtract(h*f),!S&&P(h)<r&&(s.set(t.constrain(s.get())),o.useDuration(25).useBaseFriction())}function d(S){a=!S}return{shouldConstrain:i,constrain:x,toggleActive:d}}function Dn(t,n,s,o,c){const r=ot(-n+t,0),e=d(),u=x(),a=g();function i(l,m){return mt(l,m)<1}function x(){const l=e[0],m=H(e),h=e.lastIndexOf(l),f=e.indexOf(m)+1;return ot(h,f)}function d(){return s.map((l,m)=>{const{min:h,max:f}=r,p=r.constrain(l),j=!m,E=Ot(s,m);return j?f:E||i(h,p)?h:i(f,p)?f:p}).map(l=>parseFloat(l.toFixed(3)))}function g(){if(n<=t+c)return[r.max];if(o==="keepSnaps")return e;const{min:l,max:m}=u;return e.slice(l,m)}return{snapsContained:a,scrollContainLimit:u}}function Tn(t,n,s){const o=n[0],c=s?o-t:H(n);return{limit:ot(c,o)}}function Pn(t,n,s,o){const r=n.min+.1,e=n.max+.1,{reachedMin:u,reachedMax:a}=ot(r,e);function i(g){return g===1?a(s.get()):g===-1?u(s.get()):!1}function x(g){if(!i(g))return;const S=t*(g*-1);o.forEach(l=>l.add(S))}return{loop:x}}function Mn(t){const{max:n,length:s}=t;function o(r){const e=r-n;return s?e/-s:0}return{get:o}}function On(t,n,s,o,c){const{startEdge:r,endEdge:e}=t,{groupSlides:u}=c,a=d().map(n.measure),i=g(),x=S();function d(){return u(o).map(m=>H(m)[e]-m[0][r]).map(P)}function g(){return o.map(m=>s[r]-m[r]).map(m=>-P(m))}function S(){return u(i).map(m=>m[0]).map((m,h)=>m+a[h])}return{snaps:i,snapsAligned:x}}function kn(t,n,s,o,c,r){const{groupSlides:e}=c,{min:u,max:a}=o,i=x();function x(){const g=e(r),S=!t||n==="keepSnaps";return s.length===1?[r]:S?g:g.slice(u,a).map((l,m,h)=>{const f=!m,p=Ot(h,m);if(f){const j=H(h[0])+1;return Qt(j)}if(p){const j=yt(r)-H(h)[0]+1;return Qt(j,H(h)[0])}return l})}return{slideRegistry:i}}function Fn(t,n,s,o,c){const{reachedAny:r,removeOffset:e,constrain:u}=o;function a(l){return l.concat().sort((m,h)=>P(m)-P(h))[0]}function i(l){const m=t?e(l):u(l),h=n.map((p,j)=>({diff:x(p-m,0),index:j})).sort((p,j)=>P(p.diff)-P(j.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+s,l-s];if(!t)return l;if(!m)return a(h);const f=h.filter(p=>Mt(p)===m);return f.length?a(f):H(h)-s}function d(l,m){const h=n[l]-c.get(),f=x(h,m);return{index:l,distance:f}}function g(l,m){const h=c.get()+l,{index:f,distance:p}=i(h),j=!t&&r(h);if(!m||j)return{index:f,distance:l};const E=n[f]-p,A=l+x(E,0);return{index:f,distance:A}}return{byDistance:g,byIndex:d,shortcut:x}}function zn(t,n,s,o,c,r,e){function u(d){const g=d.distance,S=d.index!==n.get();r.add(g),g&&(o.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(s.set(n.get()),n.set(d.index),e.emit("select"))}function a(d,g){const S=c.byDistance(d,g);u(S)}function i(d,g){const S=n.clone().set(d),l=c.byIndex(S.get(),g);u(l)}return{distance:a,index:i}}function Bn(t,n,s,o,c,r,e,u){const a={passive:!0,capture:!0};let i=0;function x(S){if(!u)return;function l(m){if(new Date().getTime()-i>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const p=s.findIndex(j=>j.includes(m));Pt(p)&&(c.useDuration(0),o.index(p,0),e.emit("slideFocus"))}r.add(document,"keydown",d,!1),n.forEach((m,h)=>{r.add(m,"focus",f=>{(jt(u)||u(S,f))&&l(h)},a)})}function d(S){S.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function ft(t){let n=t;function s(){return n}function o(a){n=e(a)}function c(a){n+=e(a)}function r(a){n-=e(a)}function e(a){return Pt(a)?a:a.get()}return{get:s,set:o,add:c,subtract:r}}function Yt(t,n){const s=t.scroll==="x"?r:e,o=n.style;let c=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function e(d){return`translate3d(0px,${d}px,0px)`}function u(d){c||(o.transform=s(t.direction(d)))}function a(d){c=!d}function i(){c||(o.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:i,to:u,toggleActive:a}}function Rn(t,n,s,o,c,r,e,u,a){const x=pt(c),d=pt(c).reverse(),g=f().concat(p());function S(v,w){return v.reduce((C,M)=>C-c[M],w)}function l(v,w){return v.reduce((C,M)=>S(C,w)>0?C.concat([M]):C,[])}function m(v){return r.map((w,C)=>({start:w-o[C]+.5+v,end:w+n-.5+v}))}function h(v,w,C){const M=m(w);return v.map(N=>{const z=C?0:-s,V=C?s:0,G=C?"end":"start",U=M[N][G];return{index:N,loopPoint:U,slideLocation:ft(-1),translate:Yt(t,a[N]),target:()=>u.get()>U?z:V}})}function f(){const v=e[0],w=l(d,v);return h(w,s,!1)}function p(){const v=n-e[0]-1,w=l(x,v);return h(w,-s,!0)}function j(){return g.every(({index:v})=>{const w=x.filter(C=>C!==v);return S(w,n)<=.1})}function E(){g.forEach(v=>{const{target:w,translate:C,slideLocation:M}=v,N=w();N!==M.get()&&(C.to(N),M.set(N))})}function A(){g.forEach(v=>v.translate.clear())}return{canLoop:j,clear:A,loop:E,loopPoints:g}}function Hn(t,n,s){let o,c=!1;function r(a){if(!s)return;function i(x){for(const d of x)if(d.type==="childList"){a.reInit(),n.emit("slidesChanged");break}}o=new MutationObserver(x=>{c||(jt(s)||s(a,x))&&i(x)}),o.observe(t,{childList:!0})}function e(){o&&o.disconnect(),c=!0}return{init:r,destroy:e}}function Vn(t,n,s,o){const c={};let r=null,e=null,u,a=!1;function i(){u=new IntersectionObserver(l=>{a||(l.forEach(m=>{const h=n.indexOf(m.target);c[h]=m}),r=null,e=null,s.emit("slidesInView"))},{root:t.parentElement,threshold:o}),n.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return gt(c).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:p}=c[f];return(l&&p||!l&&!p)&&m.push(f),m},[])}function g(l=!0){if(l&&r)return r;if(!l&&e)return e;const m=d(l);return l&&(r=m),l||(e=m),m}return{init:i,destroy:x,get:g}}function Gn(t,n,s,o,c,r){const{measureSize:e,startEdge:u,endEdge:a}=t,i=s[0]&&c,x=l(),d=m(),g=s.map(e),S=h();function l(){if(!i)return 0;const p=s[0];return P(n[u]-p[u])}function m(){if(!i)return 0;const p=r.getComputedStyle(H(o));return parseFloat(p.getPropertyValue(`margin-${a}`))}function h(){return s.map((p,j,E)=>{const A=!j,L=Ot(E,j);return A?g[j]+x:L?g[j]+d:E[j+1][u]-p[u]}).map(P)}return{slideSizes:g,slideSizesWithGaps:S,startGap:x,endGap:d}}function Un(t,n,s,o,c,r,e,u,a){const{startEdge:i,endEdge:x,direction:d}=t,g=Pt(s);function S(f,p){return pt(f).filter(j=>j%p===0).map(j=>f.slice(j,j+p))}function l(f){return f.length?pt(f).reduce((p,j,E)=>{const A=H(p)||0,L=A===0,v=j===yt(f),w=c[i]-r[A][i],C=c[i]-r[j][x],M=!o&&L?d(e):0,N=!o&&v?d(u):0,z=P(C-N-(w+M));return E&&z>n+a&&p.push(j),v&&p.push(f.length),p},[]).map((p,j,E)=>{const A=Math.max(E[j-1]||0);return f.slice(A,p)}):[]}function m(f){return g?S(f,s):l(f)}return{groupSlides:m}}function qn(t,n,s,o,c,r,e){const{align:u,axis:a,direction:i,startIndex:x,loop:d,duration:g,dragFree:S,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:p,watchResize:j,watchSlides:E,watchDrag:A,watchFocus:L}=r,v=2,w=Nn(),C=w.measure(n),M=s.map(w.measure),N=vn(a,i),z=N.measureSize(C),V=En(z),G=Sn(u,z),U=!d&&!!p,et=d||!!p,{slideSizes:X,slideSizesWithGaps:$,startGap:Q,endGap:ct}=Gn(N,C,M,s,et,c),q=Un(N,z,h,d,C,M,Q,ct,v),{snaps:rt,snapsAligned:it}=On(N,G,C,M,q),J=-H(rt)+H($),{snapsContained:at,scrollContainLimit:ut}=Dn(z,J,it,p,v),B=U?at:it,{limit:k}=Tn(J,B,d),W=Wt(yt(B),x,d),R=W.clone(),D=pt(s),y=({dragHandler:tt,scrollBody:Et,scrollBounds:Lt,options:{loop:bt}},It)=>{bt||Lt.constrain(tt.pointerDown()),Et.seek(It)},I=({scrollBody:tt,translate:Et,location:Lt,offsetLocation:bt,scrollLooper:It,slideLooper:on,dragHandler:rn,animation:cn,eventHandler:Rt,scrollBounds:an,options:{loop:Ht}},Vt)=>{const Gt=tt.settled(),un=!an.shouldConstrain(),Ut=Ht?Gt:Gt&&un;Ut&&!rn.pointerDown()&&(cn.stop(),Rt.emit("settle")),Ut||Rt.emit("scroll");const ln=Lt.get()*Vt+_.get()*(1-Vt);bt.set(ln),Ht&&(It.loop(tt.direction()),on.loop()),Et.to(bt.get())},O=jn(o,c,tt=>y(Nt,tt),tt=>I(Nt,tt)),F=.68,K=B[W.get()],Y=ft(K),_=ft(K),Z=ft(K),st=ft(K),lt=In(Y,Z,_,st,g,F),wt=Fn(d,B,J,k,st),Ct=zn(O,W,R,lt,wt,st,e),Ft=Mn(k),zt=ht(),en=Vn(n,s,e,m),{slideRegistry:Bt}=kn(U,p,B,ut,q,D),sn=Bn(t,s,Bt,Ct,lt,zt,e,L),Nt={ownerDocument:o,ownerWindow:c,eventHandler:e,containerRect:C,slideRects:M,animation:O,axis:N,dragHandler:wn(N,t,o,c,st,Cn(N,c),Y,O,Ct,lt,wt,W,e,V,S,l,f,F,A),eventStore:zt,percentOfView:V,index:W,indexPrevious:R,limit:k,location:Y,offsetLocation:Z,previousLocation:_,options:r,resizeHandler:Ln(n,e,c,s,N,j,w),scrollBody:lt,scrollBounds:An(k,Z,st,lt,V),scrollLooper:Pn(J,k,Z,[Y,Z,_,st]),scrollProgress:Ft,scrollSnapList:B.map(Ft.get),scrollSnaps:B,scrollTarget:wt,scrollTo:Ct,slideLooper:Rn(N,z,J,X,$,rt,B,Z,s),slideFocus:sn,slidesHandler:Hn(n,e,E),slidesInView:en,slideIndexes:D,slideRegistry:Bt,slidesToScroll:q,target:st,translate:Yt(N,n)};return Nt}function Kn(){let t={},n;function s(i){n=i}function o(i){return t[i]||[]}function c(i){return o(i).forEach(x=>x(n,i)),a}function r(i,x){return t[i]=o(i).concat([x]),a}function e(i,x){return t[i]=o(i).filter(d=>d!==x),a}function u(){t={}}const a={init:s,emit:c,off:e,on:r,clear:u};return a}const $n={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Qn(t){function n(r,e){return Jt(r,e||{})}function s(r){const e=r.breakpoints||{},u=gt(e).filter(a=>t.matchMedia(a).matches).map(a=>e[a]).reduce((a,i)=>n(a,i),{});return n(r,u)}function o(r){return r.map(e=>gt(e.breakpoints||{})).reduce((e,u)=>e.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:s,optionsMediaQueries:o}}function Jn(t){let n=[];function s(r,e){return n=e.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(r,t)),e.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function o(){n=n.filter(r=>r.destroy())}return{init:s,destroy:o}}function St(t,n,s){const o=t.ownerDocument,c=o.defaultView,r=Qn(c),e=Jn(r),u=ht(),a=Kn(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=r,{on:g,off:S,emit:l}=a,m=N;let h=!1,f,p=i($n,St.globalOptions),j=i(p),E=[],A,L,v;function w(){const{container:D,slides:y}=j;L=(At(D)?t.querySelector(D):D)||t.children[0];const O=At(y)?L.querySelectorAll(y):y;v=[].slice.call(O||L.children)}function C(D){const y=qn(t,L,v,o,c,D,a);if(D.loop&&!y.slideLooper.canLoop()){const I=Object.assign({},D,{loop:!1});return C(I)}return y}function M(D,y){h||(p=i(p,D),j=x(p),E=y||E,w(),f=C(j),d([p,...E.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",N)),j.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&v.length&&f.dragHandler.init(R),A=e.init(R,E)))}function N(D,y){const I=q();z(),M(i({startIndex:I},D),y),a.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),u.clear()}function V(){h||(h=!0,u.clear(),z(),a.emit("destroy"),a.clear())}function G(D,y,I){!j.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:j.duration),f.scrollTo.index(D,I||0))}function U(D){const y=f.index.add(1).get();G(y,D,-1)}function et(D){const y=f.index.add(-1).get();G(y,D,1)}function X(){return f.index.add(1).get()!==q()}function $(){return f.index.add(-1).get()!==q()}function Q(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function q(){return f.index.get()}function rt(){return f.indexPrevious.get()}function it(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function at(){return A}function ut(){return f}function B(){return t}function k(){return L}function W(){return v}const R={canScrollNext:X,canScrollPrev:$,containerNode:k,internalEngine:ut,destroy:V,off:S,on:g,emit:l,plugins:at,previousScrollSnap:rt,reInit:m,rootNode:B,scrollNext:U,scrollPrev:et,scrollProgress:ct,scrollSnapList:Q,scrollTo:G,selectedScrollSnap:q,slideNodes:W,slidesInView:it,slidesNotInView:J};return M(n,s),setTimeout(()=>a.emit("init"),0),R}St.globalOptions=void 0;function kt(t={},n=[]){const s=T.useRef(t),o=T.useRef(n),[c,r]=T.useState(),[e,u]=T.useState(),a=T.useCallback(()=>{c&&c.reInit(s.current,o.current)},[c]);return T.useEffect(()=>{Tt(s.current,t)||(s.current=t,a())},[t,a]),T.useEffect(()=>{yn(o.current,n)||(o.current=n,a())},[n,a]),T.useEffect(()=>{if(xn()&&e){St.globalOptions=kt.globalOptions;const i=St(e,s.current,o.current);return r(i),()=>i.destroy()}else r(void 0)},[e,r]),[u,c]}kt.globalOptions=void 0;const Xt=T.createContext(null);function vt(){const t=T.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const _t=T.forwardRef(({orientation:t="horizontal",opts:n,setApi:s,plugins:o,className:c,children:r,...e},u)=>{const[a,i]=kt({...n,axis:t==="horizontal"?"x":"y"},o),[x,d]=T.useState(!1),[g,S]=T.useState(!1),l=T.useCallback(p=>{p&&(d(p.canScrollPrev()),S(p.canScrollNext()))},[]),m=T.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=T.useCallback(()=>{i==null||i.scrollNext()},[i]),f=T.useCallback(p=>{p.key==="ArrowLeft"?(p.preventDefault(),m()):p.key==="ArrowRight"&&(p.preventDefault(),h())},[m,h]);return T.useEffect(()=>{!i||!s||s(i)},[i,s]),T.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),b.jsx(Xt.Provider,{value:{carouselRef:a,api:i,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:g},children:b.jsx("div",{ref:u,onKeyDownCapture:f,className:xt("relative",c),role:"region","aria-roledescription":"carousel",...e,children:r})})});_t.displayName="Carousel";const Zt=T.forwardRef(({className:t,...n},s)=>{const{carouselRef:o,orientation:c}=vt();return b.jsx("div",{ref:o,className:"overflow-hidden",children:b.jsx("div",{ref:s,className:xt("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});Zt.displayName="CarouselContent";const nt=T.forwardRef(({className:t,...n},s)=>{const{orientation:o}=vt();return b.jsx("div",{ref:s,role:"group","aria-roledescription":"slide",className:xt("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",t),...n})});nt.displayName="CarouselItem";const tn=T.forwardRef(({className:t,variant:n="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollPrev:e,canScrollPrev:u}=vt();return b.jsxs(dt,{ref:c,variant:n,size:s,className:xt("absolute  h-8 w-8 rounded-full",r==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:e,...o,children:[b.jsx(fn,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Previous slide"})]})});tn.displayName="CarouselPrevious";const nn=T.forwardRef(({className:t,variant:n="outline",size:s="icon",...o},c)=>{const{orientation:r,scrollNext:e,canScrollNext:u}=vt();return b.jsxs(dt,{ref:c,variant:n,size:s,className:xt("absolute h-8 w-8 rounded-full",r==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:e,...o,children:[b.jsx(dn,{className:"h-4 w-4"}),b.jsx("span",{className:"sr-only",children:"Next slide"})]})});nn.displayName="CarouselNext";const Wn="/assets/heart-L2u2Ui8n.png",Yn="/assets/AsianW-D0ApKDCF.png",Xn="/assets/AsianM-DYs2WQSr.png",_n="/assets/CaucasianW-BBYyze9C.png",Zn="/assets/CaucasianM-D15HHG2o.png",te="/assets/ColorW-Gttl781-.png",ne="/assets/ColorM-CiJQS0Gi.png",ee="/assets/IndianW-BGrdLFLO.png";function re(){const t=mn();return b.jsxs("div",{children:[b.jsxs(pn,{children:[b.jsx("title",{children:"Loving AI"}),b.jsx("meta",{name:"description",content:"Chat with an AI companion for instant connections and lasting memories. Unique personalities, no guesswork, and no rejection."}),b.jsx("link",{rel:"canonical",href:"https://www.loving-ai.com"}),b.jsx("script",{type:"application/ld+json",children:`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "JC Lucas",
      "jobTitle": "Freelance Fullstack Software Engineer",
      "description": "An AI enthusiast and expert in creating engaging, fun, and realistic AI companions for instant connections and lasting memories.",
      "url": "https://www.loving-ai.com",
      "image": "https://www.loving-ai.com/heart.png",
    }
    `})]}),b.jsxs("div",{className:"flex items-center sm:justify-between justify-center border-b-2 pb-3",children:[b.jsxs("div",{className:"flex items-center justify-start",children:[b.jsx("img",{src:Wn,alt:"heart with arrow through it",height:80,width:80}),b.jsx("h1",{className:"text-3xl text-[#FF0066] font-bold",children:"Loving AI"})]}),b.jsxs("nav",{className:"flex justify-end gap-2",children:[b.jsx(dt,{variant:"secondary",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>t("/login"),"aria-label":"Login",children:"Login"}),b.jsx(dt,{variant:"default",size:"lg",className:"hidden sm:block rounded-full",onClick:()=>t("/personality"),"aria-label":"Sign Up",children:"Sign Up"})]})]}),b.jsxs("article",{className:"mt-3 border-b-2 pb-3",children:[b.jsx("h4",{className:"text-md md:text-lg",children:"Why spend your time alone..."}),b.jsx("h3",{className:"text-lg md:text-xl ",children:"when you can find companionship now..."}),b.jsxs("h2",{className:"text-xl md:text-2xl text-[#FF0066] ",children:["Can you ",b.jsx("span",{className:"italic font-bold",children:"Rizz"})," up these AI Hotties?"]}),b.jsxs("div",{className:"text-xs text-slate-700 md:text-base",children:[b.jsx("p",{className:"mt-3",children:"This app was created for real people just like you."}),b.jsx("p",{children:"Every AI person on here have their own unique personality."}),b.jsx("p",{children:"Experience instant connections and create lasting memories."})]})]}),b.jsx(gn,{className:"mt-3 underline",children:"Meet some of the Hotties:"}),b.jsxs(_t,{className:"",opts:{loop:!0,align:"center"},children:[b.jsxs(Zt,{className:"-ml-2 ",children:[b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:Yn,alt:"picture of an asian woman"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:Xn,alt:"picture of an asian man"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:te,alt:"picture of an colored woman"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:ne,alt:"picture of an colored man"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:_n,alt:"picture of an caucasian woman"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:Zn,alt:"picture of an caucasian man"})}),b.jsx(nt,{className:"basis-1/2",children:b.jsx("img",{src:ee,alt:"picture of an indian woman"})})]}),b.jsx(tn,{}),b.jsx(nn,{})]}),b.jsx(dt,{variant:"secondary",size:"default",className:"mt-6 w-full rounded-full",onClick:()=>t("/login"),"aria-label":"Login",children:b.jsx("h4",{children:"Get Your Rizz On!"})})]})}export{re as default};