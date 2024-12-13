import{j as e,C as y,a as F,d as b,g as O,r as u,N as I,u as R,b as E,B as h,e as q,a3 as p,T as c,a4 as z}from"./index-BcDUjC1K.js";import{u as A,F as B,a as j,b as f,g,c as w,I as N,d as v,t as M}from"./input-Bw7JxDoU.js";import{a as V,O as H}from"./user-auth-api-DCxgQXI3.js";import{S as a}from"./skeleton-EcazpQ6F.js";import{L as J}from"./loader-circle-Ds3OMT4g.js";function U(){return e.jsx("div",{children:e.jsxs(y,{children:[e.jsx(F,{className:"flex items-center",children:e.jsx(a,{className:"h-[30px] w-[200px] rounded-xl"})}),e.jsxs(b,{className:"flex flex-col gap-4",children:[e.jsx(a,{className:"h-[30px] w-[80px] rounded-xl"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(a,{className:"h-[40px] w-[110px] rounded-xl"}),e.jsx(a,{className:"h-[40px] w-[110px] rounded-xl"})]}),e.jsx(a,{className:"h-[30px] w-[100px] rounded-xl"}),e.jsx(a,{className:"h-[40px] w-full rounded-xl"}),e.jsx(a,{className:"h-[30px] w-[120px] rounded-xl"}),e.jsx(a,{className:"h-[40px] w-full rounded-xl"}),e.jsx(a,{className:"h-[40px] w-full rounded-full mt-3"})]})]})})}function W(){const{email:S,password:C}=O().state||{email:"",password:""},[n,x]=u.useState(!1),[L,m]=u.useState(!1),{toast:l}=I(),r=A({resolver:M(p),defaultValues:{email:S,password:C}}),o=R(),P=s=>{const t=p.safeParse(s);t.success&&T(t.data)},T=async s=>{m(!0);const t=await V(s.email,s.password);if(m(!1),!t){l({title:"Login Failed",variant:"destructive",action:e.jsx(c,{altText:"Retry",children:"Retry"}),duration:3e3});return}sessionStorage.setItem("loggedInUser",btoa(JSON.stringify(t))),o("/profile")},k=async s=>{const d=z.string({required_error:"Email is required"}).email({message:"Must be a valid email"}).safeParse(s.email);if(!d.success){l({title:"Please enter a valid email.",variant:"destructive",duration:3e3});return}x(!0);const i=await H(d.data);if(x(!1),i&&i.status>=400&&i.status<500){l({title:"Email does not exist",description:"Please check if you have a typo in your email. If you are new here, you need to sign up first.",variant:"destructive",action:e.jsx(c,{altText:"Okay",children:"Okay"}),duration:5e3});return}if(!i||i.status>=500){l({title:"Error sending OTP.",description:"Please try again. If the problem persists, please email us on lovingaiteam@gmail.com.",variant:"destructive",action:e.jsx(c,{altText:"Okay",children:"Okay"}),duration:7e3});return}o("/reset",{state:{email:d.data}})};return e.jsxs("section",{className:"mt-24",children:[n&&e.jsx(U,{}),!n&&e.jsxs(y,{children:[e.jsxs(F,{className:"text-center text-2xl",children:[e.jsx("div",{className:"flex justify-center mb-3",children:e.jsx("img",{src:"/heart.png",alt:"heart with arrow through it",height:80,width:80})}),e.jsx(E,{className:"text-[#FF0066]",children:"Rizz loading..."})]}),e.jsx(b,{children:e.jsx(B,{...r,children:e.jsxs("form",{className:"flex flex-col gap-2",onSubmit:r.handleSubmit(P),children:[e.jsx(j,{name:"email",control:r.control,render:({field:s})=>e.jsxs(f,{children:[e.jsx(g,{htmlFor:"email",children:"Email"}),e.jsx(w,{children:e.jsx(N,{...s,id:"email",type:"email"})}),e.jsx(v,{})]})}),e.jsx(j,{name:"password",control:r.control,render:({field:s})=>e.jsxs(f,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(g,{htmlFor:"password",children:"Password"}),e.jsx("span",{className:"text-slate-400 cursor-pointer text-sm select-none",onClick:()=>k(r.getValues()),children:"Forgot Password?"})]}),e.jsx(w,{children:e.jsx(N,{...s,id:"password",type:"password"})}),e.jsx(v,{})]})}),e.jsxs(h,{type:"submit",variant:"secondary",disabled:n,className:"border w-full rounded-full mt-6 p-2",children:[L&&e.jsx("span",{children:e.jsx(J,{className:"mr-2 h-4 w-4 animate-spin"})}),"Login"]})]})})}),e.jsx(q,{children:e.jsx(h,{variant:"link",onClick:()=>o("/personality"),className:"text-slate-400",children:'Don"t have an account? Sign up'})})]})]})}export{W as default};