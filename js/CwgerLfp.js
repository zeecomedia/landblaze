import{d as i,i as l,ed as m,du as o,dt as d,c as r,k as c}from"./ChUMkS6P.js";const g=i({name:"ContentAligment",props:{settings:{type:Object},isEnabledAnimation:{type:Boolean,default:!1},animateClassName:{type:String,default:"animate__fadeInUp"}},setup(e){return{contentAligmenClassName:l(()=>{var s,n;const a=((s=e.settings)==null?void 0:s.contentAligmentType)||null;return a&&((n=m[a])==null?void 0:n.class)})}},render(){var e,t;return o(r("div",{class:c("kmb-widget-aligment-wrap",this.contentAligmenClassName)},[((e=this.$slots)==null?void 0:e.default)&&((t=this.$slots)==null?void 0:t.default({}))]),[[d("animate-onscroll"),{className:`animate__animated ${this.animateClassName}`,isEnabled:this.isEnabledAnimation}]])}});export{g as C};