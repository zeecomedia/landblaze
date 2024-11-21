import{d as D,s as x,b as F,e as N,v as k,E as T,i as u,dI as L,dE as C,dA as M,w as E,dJ as S,dK as B,dL as O,dM as W,dN as A,c as i,k as R,dO as Y,dP as V,dQ as _}from"./ChUMkS6P.js";import{i as j}from"./A9nCysFq.js";import{n as I}from"./BVv2S30c.js";import{W as q}from"./C5_VwG_t.js";import{V as G,a as H,D as J}from"./DsvMmw88.js";import{D as y}from"./D9Hbs_0D.js";import{F as K}from"./B-lU7qM5.js";import{I as P}from"./uNGU_bZw.js";import{M as Q}from"./CuhE2MTX.js";import"./CeHZR0Ph.js";import"./-oxM8m70.js";import"./DfxtQXwc.js";import"./D6uAcWDZ.js";import"./DSoJ1F4P.js";import"./CyET3sau.js";import"./BgHkq_PJ.js";import"./cuZZCMxh.js";import"./DldpU35S.js";import"./DzFfo68f.js";import"./CfeTNxv7.js";import"./Mt02bkho.js";import"./6SHmCfzU.js";const Se=D({name:"FooterNewsletter",props:{site:{type:Object,required:!0},columnSize:{type:String,default:"lg_w-1-2 md_w-1-2"}},setup(p){const{t:m}=x(),{$api:c}=F(),d=N(),o=k([]),l=T({email:null}),f=k(!1),b=k(void 0),w=u(()=>({email:new G({name:"Email",type:H.Email})})),s=u(()=>{var e;return((e=p.site.footerSettings)==null?void 0:e.newsletter)||new L}),g=u(()=>{var e,t;return((t=(e=s.value)==null?void 0:e.title)==null?void 0:t.lczValue)||m(C[M.Newsletter])}),n=u(()=>{var e,t,r;return E(s.value.button)?new q({lczText:new S({lczValue:((t=(e=s.value)==null?void 0:e.buttonText)==null?void 0:t.lczValue)||"Subscribe now"})}):(r=s.value)==null?void 0:r.button}),v=u(()=>{var e,t;return E((e=s.value)==null?void 0:e.confirmation)?new B({title:new S({lczValue:m("messages.thankYouForYourSubscription")}),description:new S({lczValue:"You have been subscribed"}),image:new O,style:new W({color:null,background:null}),visibleElements:new A({isEnabledTitle:!0,isEnabledDescription:!0,isEnabledImage:!0})}):(t=s.value)==null?void 0:t.confirmation}),h=u(()=>{const e=o.value.find(t=>t.fieldName=="email");return e?e.message:null}),z=async()=>{try{const e=await c.getSingle(new _({siteId:d,isDefault:!0,fields:[I("id"),I("name")].join(",")}));return(e==null?void 0:e.id)||null}catch(e){console.log(e)}};return{t:m,title:g,button:n,error:h,formData:l,newsletter:s,confirmation:v,isShowConfirmationModal:b,onSubmitForm:async e=>{var t;try{e.preventDefault(),o.value=[];const r=J(w.value,l);if(o.value=r.errors,r.isValid){let a=(t=s.value)==null?void 0:t.mailingListId;a||(a=await z()),a&&(f.value=!0,await c.post(new Y({email:l.email,source:"Footer subscribe form",siteId:d,mailingListId:a}))&&(b.value=!0,l.email=null,e.target.reset()))}}catch(r){const a=r;a.responseStatus&&a.responseStatus.message&&o.value.push({fieldName:"email",message:a.responseStatus.message})}finally{f.value=!1}},renderSubmitButton:()=>{var e,t;return j((t=(e=n.value)==null?void 0:e.lczText)==null?void 0:t.lczValue)?i(V,{type:"submit",value:n.value,class:"kmb-newsletter-btn"},{default:()=>[i("i",{class:"kmb-site-icon-telegram"},null)]}):i(V,{type:"submit",value:n.value,class:"kmb-newsletter-btn"},null)}}},render(){var p,m,c,d;return i("div",{class:R(this.columnSize,"w-full kmb-widget-col kmb-footer-column footer-newsletter-column")},[i("div",{class:"kmb-site-footer-newsletter footer-newsletter"},[i(y,{value:this.title,tag:"p",class:"footer-col-title kmb-widget-title-h4"},null),i("div",{class:"kmb-footer-block"},[i("form",{class:"footer-newsletter-form",onSubmit:async o=>await this.onSubmitForm(o)},[i("div",{class:"footer-newsletter-form-group w-full"},[i(K,{modelValue:this.formData.email,"onUpdate:modelValue":o=>this.formData.email=o,error:this.error,placeholder:this.t("labels.emailAddress"),class:"footer-newsletter-field mb-4"},null),this.renderSubmitButton()])])])]),i(Q,{modalType:"xsDefault",isOpened:this.isShowConfirmationModal,classes:"kmb-site-confirmation-modal kmb-site-footer-newsletter-confirmation-modal kmb-site-pop-up-widget kmb-site-pop-up-widget-confirmation-modal",styles:{"--footer-newsletter-modal-color":(m=(p=this.confirmation)==null?void 0:p.style)==null?void 0:m.color,"--footer-newsletter-modal-background":(d=(c=this.confirmation)==null?void 0:c.style)==null?void 0:d.background},onClose:o=>{this.isShowConfirmationModal=o}},{default:()=>{var o,l,f,b,w,s,g,n,v,h;return[i("div",{class:"kmb-site-confirmation-modal-wrap kmb-site-subscribe-confirmation-wrap text-center"},[i("div",{class:"kmb-site-footer-newsletter-confirmation-modal-inner-body-content text-center flex flex-col items-center"},[i(y,{value:(l=(o=this.confirmation)==null?void 0:o.title)==null?void 0:l.lczValue,tag:"h4",isEnabled:(b=(f=this.confirmation)==null?void 0:f.visibleElements)==null?void 0:b.isEnabledTitle,class:"kmb-site-confirmation-modal-title kmb-site-subscribe-form-header kmb-widget-title-h2"},null),i(y,{value:(s=(w=this.confirmation)==null?void 0:w.description)==null?void 0:s.lczValue,tag:"div",isEnabled:(n=(g=this.confirmation)==null?void 0:g.visibleElements)==null?void 0:n.isEnabledDescription,class:"kmb-site-confirmation-modal-desciption kmb-widget-text-body2"},null),((h=(v=this.confirmation)==null?void 0:v.visibleElements)==null?void 0:h.isEnabledImage)&&i(P,{value:this.confirmation.image,resize:{width:400,height:290},class:"kmb-site-confirmation-modal-image mt-10"},null)])])]}})])}});export{Se as default};