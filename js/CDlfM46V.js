import{aP as a,j as n}from"./ChUMkS6P.js";import{i as m}from"./1IXFzUcJ.js";var i=(t=>(t.OrderBy="orderBy",t.Page="page",t))(i||{});const p=(t,e)=>{const s=a.removeEmptyFields(t);return n(e)||Object.entries(e).map(([r,o])=>{s.hasOwnProperty(r)&&(s[r]=m(s[r])?o.split(","):o)}),s},c=(t,e)=>n(e)?t:a.removeEmptyFields({...p(t,e)}),P=(t,e)=>{if(n(e))return t;const s=c(t,e);if(t.include==="total"&&e[i.Page]){const r=s.take||10,o=+e[i.Page];s.skip=o*r-r}return a.removeEmptyFields({...s})};export{P as s};