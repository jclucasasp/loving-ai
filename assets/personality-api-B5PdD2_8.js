import{H as t,A as e}from"./index-C2qEaanb.js";async function r(){return await fetch(t+"/api/personality/types",{headers:{Authorization:e,"Content-Type":"application/json"}}).then(n=>n.ok?n.json():null).then(n=>n).catch(n=>(console.log(n),null))}async function a(){return await fetch(t+"/api/personality/descriptions",{headers:{Authorization:e,"Content-Type":"application/json"}}).then(n=>n.ok?n.json():null).then(n=>n).catch(n=>(console.log(n),null))}export{r as G,a};