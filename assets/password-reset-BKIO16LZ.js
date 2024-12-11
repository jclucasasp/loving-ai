import{g as P,u as v,j as s,C as y,a as g,b as F,d as T,B as b,P as j,t as c,T as u}from"./index-BO3Okp7x.js";import{I,a as p,b as a,c as O}from"./input-otp-DWng1Ta5.js";import{u as C,F as R,a as t,b as i,L as o,d as n,e as l,t as S}from"./zod-D1WJCPSh.js";import{a as E}from"./user-auth-api-Q5w5xvFk.js";import{I as m}from"./input-CDVIqmmN.js";function B(){const{email:h}=P().state||{email:""},f=v(),r=C({resolver:S(j),defaultValues:{email:h,otp:"",password:"",confirm:""}}),w=async e=>{const x=j.safeParse(e);if(!x.success){c({title:"Validation failed.",description:x.error.message,variant:"destructive",action:s.jsx(u,{altText:"Retry",children:"Retry"}),duration:3e3});return}const d=await E(e.email,e.otp,e.password);if(!d||d.status==401){c({title:"OTP verification failed.",description:"Either your OTP is invalid or have expired.",variant:"destructive",duration:3e3});return}if(d.status>=500){c({title:"Error resetting password.",description:"Please try again. If the problem persists, please email us on lovingaiteam@gmail.com.",variant:"destructive",action:s.jsx(u,{altText:"Okay",children:"Okay"}),duration:7e3});return}f("/login",{state:{email:e.email,password:e.password}})};return s.jsx("section",{className:"mt-24",children:s.jsxs(y,{className:"max-w-sm",children:[s.jsx(g,{children:s.jsx(F,{children:"Password Reset"})}),s.jsx(T,{children:s.jsx(R,{...r,children:s.jsxs("form",{className:"flex flex-col gap-2",onSubmit:r.handleSubmit(w),children:[s.jsx(t,{name:"email",control:r.control,render:({field:e})=>s.jsxs(i,{hidden:!0,children:[s.jsx(o,{htmlFor:"email",children:"Email"}),s.jsx(n,{children:s.jsx(m,{...e,id:"email",type:"email"})}),s.jsx(l,{})]})}),s.jsx(t,{name:"otp",control:r.control,render:({field:e})=>s.jsxs(i,{children:[s.jsx(o,{htmlFor:"otp",children:"Enter the OTP from your email"}),s.jsx(n,{children:s.jsxs(I,{maxLength:6,...e,children:[s.jsxs(p,{children:[s.jsx(a,{index:0}),s.jsx(a,{index:1}),s.jsx(a,{index:2})]}),s.jsx(O,{}),s.jsxs(p,{children:[s.jsx(a,{index:3}),s.jsx(a,{index:4}),s.jsx(a,{index:5})]})]})}),s.jsx(l,{})]})}),s.jsx(t,{name:"password",control:r.control,render:({field:e})=>s.jsxs(i,{children:[s.jsx(o,{htmlFor:"password",children:"Password"}),s.jsx(n,{children:s.jsx(m,{...e,id:"password",type:"password"})}),s.jsx(l,{})]})}),s.jsx(t,{name:"confirm",control:r.control,render:({field:e})=>s.jsxs(i,{children:[s.jsx(o,{htmlFor:"confirm",children:"Confirm Password"}),s.jsx(n,{children:s.jsx(m,{...e,id:"confirm",type:"password"})}),s.jsx(l,{})]})}),s.jsx(b,{type:"submit",variant:"secondary",className:"border w-full rounded-full mt-6 p-2",children:"Reset"})]})})})]})})}export{B as default};
