import{F as M,j as e,G as S,r as l,k as A,m as w,n as j,I as E,S as Ee,J as Ie,K as Pe,w as Oe,L as Te,M as Me,h as v,N as F,f as Se,O as Fe,u as ke,Q as $e,C as Le,B as _,x as Ge,y as We,H as Be,E as ze,V as He}from"./index-BOec_SUu.js";import{G as Ve}from"./conversation-api-Cnb7f5iy.js";import{C as Ue}from"./component-heading-BsrudvjC.js";import{S as i}from"./skeleton-7YtrTKD_.js";import{h as qe,F as Ye,d as b}from"./component-WnVlSw2-.js";import{R as Ke,u as Xe}from"./Combination-agNdi_Ld.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=M("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=M("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function Ze(){return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(i,{className:"h-12 w-12 rounded-full"}),e.jsx(i,{className:"h-4 w-[120px]"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{className:"h-9 w-24"}),e.jsx(i,{className:"h-9 w-24"})]})]})]})}var I="Dialog",[k,$]=S(I),[ea,m]=k(I),L=a=>{const{__scopeDialog:t,children:s,open:o,defaultOpen:r,onOpenChange:n,modal:c=!0}=a,d=l.useRef(null),u=l.useRef(null),[f=!1,x]=Oe({prop:o,defaultProp:r,onChange:n});return e.jsx(ea,{scope:t,triggerRef:d,contentRef:u,contentId:b(),titleId:b(),descriptionId:b(),open:f,onOpenChange:x,onOpenToggle:l.useCallback(()=>x(R=>!R),[x]),modal:c,children:s})};L.displayName=I;var G="DialogTrigger",W=l.forwardRef((a,t)=>{const{__scopeDialog:s,...o}=a,r=m(G,s),n=A(t,r.triggerRef);return e.jsx(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":T(r.open),...o,ref:n,onClick:j(a.onClick,r.onOpenToggle)})});W.displayName=G;var P="DialogPortal",[aa,B]=k(P,{forceMount:void 0}),z=a=>{const{__scopeDialog:t,forceMount:s,children:o,container:r}=a,n=m(P,t);return e.jsx(aa,{scope:t,forceMount:s,children:l.Children.map(o,c=>e.jsx(E,{present:s||n.open,children:e.jsx(Te,{asChild:!0,container:r,children:c})}))})};z.displayName=P;var C="DialogOverlay",H=l.forwardRef((a,t)=>{const s=B(C,a.__scopeDialog),{forceMount:o=s.forceMount,...r}=a,n=m(C,a.__scopeDialog);return n.modal?e.jsx(E,{present:o||n.open,children:e.jsx(ta,{...r,ref:t})}):null});H.displayName=C;var ta=l.forwardRef((a,t)=>{const{__scopeDialog:s,...o}=a,r=m(C,s);return e.jsx(Ke,{as:Ee,allowPinchZoom:!0,shards:[r.contentRef],children:e.jsx(w.div,{"data-state":T(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),N="DialogContent",V=l.forwardRef((a,t)=>{const s=B(N,a.__scopeDialog),{forceMount:o=s.forceMount,...r}=a,n=m(N,a.__scopeDialog);return e.jsx(E,{present:o||n.open,children:n.modal?e.jsx(sa,{...r,ref:t}):e.jsx(oa,{...r,ref:t})})});V.displayName=N;var sa=l.forwardRef((a,t)=>{const s=m(N,a.__scopeDialog),o=l.useRef(null),r=A(t,s.contentRef,o);return l.useEffect(()=>{const n=o.current;if(n)return qe(n)},[]),e.jsx(U,{...a,ref:r,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(a.onCloseAutoFocus,n=>{var c;n.preventDefault(),(c=s.triggerRef.current)==null||c.focus()}),onPointerDownOutside:j(a.onPointerDownOutside,n=>{const c=n.detail.originalEvent,d=c.button===0&&c.ctrlKey===!0;(c.button===2||d)&&n.preventDefault()}),onFocusOutside:j(a.onFocusOutside,n=>n.preventDefault())})}),oa=l.forwardRef((a,t)=>{const s=m(N,a.__scopeDialog),o=l.useRef(!1),r=l.useRef(!1);return e.jsx(U,{...a,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var c,d;(c=a.onCloseAutoFocus)==null||c.call(a,n),n.defaultPrevented||(o.current||(d=s.triggerRef.current)==null||d.focus(),n.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:n=>{var u,f;(u=a.onInteractOutside)==null||u.call(a,n),n.defaultPrevented||(o.current=!0,n.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const c=n.target;((f=s.triggerRef.current)==null?void 0:f.contains(c))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&r.current&&n.preventDefault()}})}),U=l.forwardRef((a,t)=>{const{__scopeDialog:s,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:n,...c}=a,d=m(N,s),u=l.useRef(null),f=A(t,u);return Xe(),e.jsxs(e.Fragment,{children:[e.jsx(Ye,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:n,children:e.jsx(Ie,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":T(d.open),...c,ref:f,onDismiss:()=>d.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(na,{titleId:d.titleId}),e.jsx(ia,{contentRef:u,descriptionId:d.descriptionId})]})]})}),O="DialogTitle",q=l.forwardRef((a,t)=>{const{__scopeDialog:s,...o}=a,r=m(O,s);return e.jsx(w.h2,{id:r.titleId,...o,ref:t})});q.displayName=O;var Y="DialogDescription",K=l.forwardRef((a,t)=>{const{__scopeDialog:s,...o}=a,r=m(Y,s);return e.jsx(w.p,{id:r.descriptionId,...o,ref:t})});K.displayName=Y;var X="DialogClose",J=l.forwardRef((a,t)=>{const{__scopeDialog:s,...o}=a,r=m(X,s);return e.jsx(w.button,{type:"button",...o,ref:t,onClick:j(a.onClick,()=>r.onOpenChange(!1))})});J.displayName=X;function T(a){return a?"open":"closed"}var Q="DialogTitleWarning",[ra,Z]=Pe(Q,{contentName:N,titleName:O,docsSlug:"dialog"}),na=({titleId:a})=>{const t=Z(Q),s=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return l.useEffect(()=>{a&&(document.getElementById(a)||console.error(s))},[s,a]),null},la="DialogDescriptionWarning",ia=({contentRef:a,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Z(la).contentName}}.`;return l.useEffect(()=>{var n;const r=(n=a.current)==null?void 0:n.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(o))},[o,a,t]),null},ca=L,da=W,ua=z,fa=H,ga=V,ma=q,pa=K,ee=J,ae="AlertDialog",[xa,Fa]=S(ae,[$]),p=$(),te=a=>{const{__scopeAlertDialog:t,...s}=a,o=p(t);return e.jsx(ca,{...o,...s,modal:!0})};te.displayName=ae;var ha="AlertDialogTrigger",se=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,r=p(s);return e.jsx(da,{...r,...o,ref:t})});se.displayName=ha;var va="AlertDialogPortal",oe=a=>{const{__scopeAlertDialog:t,...s}=a,o=p(t);return e.jsx(ua,{...o,...s})};oe.displayName=va;var Na="AlertDialogOverlay",re=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,r=p(s);return e.jsx(fa,{...r,...o,ref:t})});re.displayName=Na;var D="AlertDialogContent",[ja,Da]=xa(D),ne=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,children:o,...r}=a,n=p(s),c=l.useRef(null),d=A(t,c),u=l.useRef(null);return e.jsx(ra,{contentName:D,titleName:le,docsSlug:"alert-dialog",children:e.jsx(ja,{scope:s,cancelRef:u,children:e.jsxs(ga,{role:"alertdialog",...n,...r,ref:d,onOpenAutoFocus:j(r.onOpenAutoFocus,f=>{var x;f.preventDefault(),(x=u.current)==null||x.focus({preventScroll:!0})}),onPointerDownOutside:f=>f.preventDefault(),onInteractOutside:f=>f.preventDefault(),children:[e.jsx(Me,{children:o}),e.jsx(Aa,{contentRef:c})]})})})});ne.displayName=D;var le="AlertDialogTitle",ie=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,r=p(s);return e.jsx(ma,{...r,...o,ref:t})});ie.displayName=le;var ce="AlertDialogDescription",de=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,r=p(s);return e.jsx(pa,{...r,...o,ref:t})});de.displayName=ce;var ya="AlertDialogAction",ue=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,r=p(s);return e.jsx(ee,{...r,...o,ref:t})});ue.displayName=ya;var fe="AlertDialogCancel",ge=l.forwardRef((a,t)=>{const{__scopeAlertDialog:s,...o}=a,{cancelRef:r}=Da(fe,s),n=p(s),c=A(t,r);return e.jsx(ee,{...n,...o,ref:c})});ge.displayName=fe;var Aa=({contentRef:a})=>{const t=`\`${D}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${D}\` by passing a \`${ce}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var o;document.getElementById((o=a.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(t)},[t,a]),null},wa=te,Ca=se,Ra=oe,me=re,pe=ne,xe=ue,he=ge,ve=ie,Ne=de;const _a=wa,ba=Ca,Ea=Ra,je=l.forwardRef(({className:a,...t},s)=>e.jsx(me,{className:v("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t,ref:s}));je.displayName=me.displayName;const De=l.forwardRef(({className:a,...t},s)=>e.jsxs(Ea,{children:[e.jsx(je,{}),e.jsx(pe,{ref:s,className:v("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...t})]}));De.displayName=pe.displayName;const ye=({className:a,...t})=>e.jsx("div",{className:v("flex flex-col space-y-2 text-center sm:text-left",a),...t});ye.displayName="AlertDialogHeader";const Ae=({className:a,...t})=>e.jsx("div",{className:v("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t});Ae.displayName="AlertDialogFooter";const we=l.forwardRef(({className:a,...t},s)=>e.jsx(ve,{ref:s,className:v("text-lg font-semibold",a),...t}));we.displayName=ve.displayName;const Ce=l.forwardRef(({className:a,...t},s)=>e.jsx(Ne,{ref:s,className:v("text-sm text-muted-foreground",a),...t}));Ce.displayName=Ne.displayName;const Re=l.forwardRef(({className:a,...t},s)=>e.jsx(xe,{ref:s,className:v(F(),a),...t}));Re.displayName=xe.displayName;const _e=l.forwardRef(({className:a,...t},s)=>e.jsx(he,{ref:s,className:v(F({variant:"outline"}),"mt-2 sm:mt-0",a),...t}));_e.displayName=he.displayName;function ka({setCurrentProfile:a,setIsMatched:t}){const s=Se(),[o,r]=l.useState([]),[n,c]=l.useState(!0),{toast:d}=Fe(),u=ke();l.useEffect(()=>{(async()=>{const h=await $e(s.userId);r(h),c(!1)})()},[]);const f=async(g,h)=>{const y=await Ve(g,h.userId);a(h),u("/chat",{state:{conversationData:y,loggedInUser:s,toProfile:h}})},x=async g=>{const h=await He(g);!h||h.status>=500?d({variant:"destructive",description:"Something went wrong",duration:3e3}):r(y=>y==null?void 0:y.filter(be=>be.userId!==g))},R=()=>e.jsx(Le,{children:e.jsxs("ul",{className:"flex h-[80dvh]  flex-col sm:gap-3 overflow-y-scroll",children:[n&&e.jsx(Ze,{}),o==null?void 0:o.map(g=>e.jsxs("li",{className:"flex justify-between mt-5 mr-2",children:[e.jsx("section",{className:"flex items-center",children:e.jsxs(_,{variant:"link",onClick:()=>{a(g),t(!0),u("/profile")},"aria-label":"Go to profile",className:"mb-2 flex gap-1 md:gap-3 lg:gap-6",children:[e.jsxs(Ge,{className:"w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]",children:[e.jsx(We,{src:Be+"/images/"+g.imageUrl,alt:"profile image"}),e.jsx(ze,{children:"?"})]}),e.jsxs("h3",{className:"text-sm sm:text-lg md:text-xl",children:[g.firstName," ",g.lastName]})]})}),e.jsxs("section",{className:"flex gap-2 md:gap-6",children:[e.jsxs(_,{variant:"secondary",className:"gap-1 sm:gap-2 rounded-full",onClick:()=>{f(s.userId,g)},"aria-label":"Go to chat",children:[e.jsx(Je,{}),"Chat"]}),e.jsxs(_a,{children:[e.jsx(ba,{asChild:!0,children:e.jsxs(_,{variant:"destructive",size:"default",className:"bg-red-500 gap-1 sm:gap-2 rounded-full","aria-label":"Delete this match",children:[e.jsx(Qe,{}),"Del"]})}),e.jsxs(De,{children:[e.jsxs(ye,{children:[e.jsx(we,{children:"Deleting Match"}),e.jsx(Ce,{children:"Are you absolutely sure you want to delete this match?"})]}),e.jsxs(Ae,{children:[e.jsx(_e,{"aria-label":"Cancel",className:"rounded-full",children:"Cancel"}),e.jsx(Re,{"aria-label":"Confirm to delete match",className:"rounded-full bg-red-500 hover:bg-red-500/90 hover:text-black",onClick:()=>x(g.userId),children:"Continue"})]})]})]})]})]},g.userId))]})});return e.jsxs("div",{className:"w-full",children:[e.jsx(Ue,{children:"Current Matches"}),e.jsx(R,{})]})}export{ka as default};
