import{h as B,u as A,r as j,j as e,C as M,d as V,B as b,e as R,i as S,t as u,T as h,U as O}from"./index-B3mHd3VY.js";import{G as k}from"./personality-api-D40i3y1e.js";import{u as G,t as D,F as H,a as t,b as i,c as l,I as x,e as o,d as c}from"./input-BpVnyDhR.js";import{T as J}from"./index-DgQlkGOK.js";import{L as q}from"./user-auth-api-C3pPh_Yo.js";import{S as v,a as F,b as P,c as T,d as p}from"./select-CaWYgpqa.js";import{C as z}from"./component-heading-CjlZhmLQ.js";import{L as C}from"./loader-circle-CbjjgNm6.js";import"./Combination-BkWn4aC4.js";import"./component-CcfUj0xD.js";function ee(){const s=B(),f=A(),[m,y]=j.useState(!1),a=G({resolver:D(S),defaultValues:{userId:s==null?void 0:s.userId,firstName:s==null?void 0:s.firstName,lastName:s==null?void 0:s.lastName,age:s==null?void 0:s.age,ethnicity:s==null?void 0:s.ethnicity,gender:s==null?void 0:s.gender,bio:s==null?void 0:s.bio,imageUrl:s==null?void 0:s.imageUrl,myersBriggsPersonalityType:s==null?void 0:s.myersBriggsPersonalityType,verified:s==null?void 0:s.verified}}),[N,L]=j.useState([]),w=async()=>await k(),E=async r=>{y(!0);const d=S.safeParse(r);if(!d.success){u({title:"Validation failed.",description:d.error.message,variant:"destructive",action:e.jsx(h,{altText:"Retry",children:"Retry"})});return}const n=await O(d.data);if(y(!1),!n.userId){console.error("Failed to update profile"),u({title:"Failed to update profile",description:"Failed to update profile",variant:"destructive",action:e.jsx(h,{altText:"Retry",children:"Retry"})});return}sessionStorage.clear(),sessionStorage.setItem("loggedInUser",btoa(JSON.stringify(n))),f("/profile"),u({title:"Profile updated successfully",action:e.jsx(h,{altText:"Okay",children:"Okay"})})},Y=async()=>{sessionStorage.clear(),await q(s.userId),f("/")};return j.useEffect(()=>{w().then(r=>{L(r)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"User Profile"}),e.jsxs(M,{className:"w-full",children:[e.jsx(V,{children:e.jsx(H,{...a,children:e.jsxs("form",{className:"flex flex-col gap-2",onSubmit:a.handleSubmit(E),children:[e.jsx(t,{control:a.control,name:"userId",render:({field:r})=>e.jsx(i,{children:e.jsx(l,{children:e.jsx(x,{type:"hidden",placeholder:s==null?void 0:s.userId,...r})})})}),e.jsx(t,{control:a.control,name:"firstName",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your first name"}),e.jsx(l,{children:e.jsx(x,{type:"text",placeholder:s==null?void 0:s.firstName,...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"lastName",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your last name"}),e.jsx(l,{children:e.jsx(x,{type:"text",placeholder:s==null?void 0:s.lastName,...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"age",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your age"}),e.jsx(l,{children:e.jsx(x,{type:"number",...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"ethnicity",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your ethnicity"}),e.jsx(l,{children:e.jsx(x,{type:"text",placeholder:s==null?void 0:s.ethnicity,...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"bio",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your bio"}),e.jsx(l,{children:e.jsx(J,{rows:5,placeholder:s==null?void 0:s.bio,...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"imageUrl",render:({field:r})=>e.jsxs(i,{hidden:!0,children:[e.jsx(o,{children:"Your image url"}),e.jsx(l,{children:e.jsx(x,{type:"text",placeholder:s==null?void 0:s.imageUrl,...r})}),e.jsx(c,{})]})}),e.jsx(t,{control:a.control,name:"gender",render:({field:r})=>e.jsxs(i,{children:[e.jsx(o,{children:"Your Gender"}),e.jsxs(v,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(l,{children:e.jsx(F,{className:"w-full",children:e.jsx(P,{})})}),e.jsxs(T,{children:[e.jsx(p,{value:"MALE",children:"MALE"}),e.jsx(p,{value:"FEMALE",children:"FEMALE"})]}),e.jsx(c,{})]})]})}),e.jsx(t,{control:a.control,name:"myersBriggsPersonalityType",render:({field:r})=>{var d;return e.jsxs(i,{children:[e.jsx(o,{children:"Your Myers Briggs Personality Type"}),e.jsxs(v,{onValueChange:r.onChange,children:[e.jsx(l,{children:e.jsx(F,{className:"w-full",children:e.jsx(P,{placeholder:(d=N.find(n=>n.id===(s==null?void 0:s.myersBriggsPersonalityType)))==null?void 0:d.type})})}),e.jsxs(T,{children:[N.map(n=>e.jsx(p,{value:n.id,children:n.type},n.id))," "]}),e.jsx(c,{})]})]})}}),e.jsxs(b,{disabled:m,variant:"secondary",type:"submit",className:"mt-3 w-full rounded-full","aria-label":"Update profile",children:[m&&e.jsx("span",{children:e.jsx(C,{className:"mr-2 h-4 w-4 animate-spin"})}),"Update Profile"]})]})})}),e.jsx(R,{children:e.jsxs(b,{disabled:m,variant:"destructive",className:"w-full rounded-full",onClick:()=>Y(),"aria-label":"Log out",children:[m&&e.jsx("span",{children:e.jsx(C,{className:"mr-2 h-4 w-4 animate-spin"})}),"Log Out"]})})]})]})}export{ee as default};
