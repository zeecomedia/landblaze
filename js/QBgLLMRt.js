const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cj37CYs3.js","./ChUMkS6P.js","./entry.CPpMyCbQ.css","./uNGU_bZw.js","./BgHkq_PJ.js","./BVv2S30c.js","./cuZZCMxh.js","./DldpU35S.js","./DzFfo68f.js","./CfeTNxv7.js"])))=>i.map(i=>d[i]);
import{d as q,s as F,b as X,X as Z,a as J,v as x,ea as Q,i as a,w as B,e9 as T,dy as k,eZ as g,a0 as C,aR as Y,dH as tt,ah as et,c as o,k as c,K as L,e$ as ot,aP as it,f0 as at,l as rt,_ as st}from"./ChUMkS6P.js";import{_ as A}from"./BgHkq_PJ.js";import{s as ut}from"./CeHZR0Ph.js";import{W as nt}from"./CY0cy9zf.js";import{G as _}from"./CcdTgBWD.js";import{p as dt,a as lt,i as ct}from"./6Po4j3qC.js";import{D as mt}from"./D9Hbs_0D.js";import{P as pt}from"./D03YGIr3.js";import{P as R,a as bt}from"./BlexT4wM.js";const kt=rt(()=>st(()=>import("./Cj37CYs3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),Bt=q({name:"ProductItem",props:{product:{type:Object,required:!0},site:{type:Object},resize:{type:Object},elementShowSettings:{type:Object},gridViewLayoutType:{type:Number,default:_.Four},buttonLabel:{type:String},isShowBottomButton:{type:Boolean,default:!1},isShowOnlyColorSku:{type:Boolean,default:!1},isEnabledButton:{type:Boolean,default:!1},isEnabledSku:{type:Boolean,default:!0},isBottomSku:{type:Boolean,default:!1},columnSize:{type:String,default:"lg_w-1-3 sm_w-1-2"}},emits:["fetch","seeMore"],setup(t){const{t:O}=F(),{$emitter:z}=X(),G=Z(),f=J(),y=x(null),u=x(new Q({productId:t.product.id,quantity:1,skuId:null})),m=a(()=>f.isEnabledStoreApp),j=a(()=>f.isCatalogMode||!1),p=a(()=>t.gridViewLayoutType==_.One),M=a(()=>{const{isEnabledRollOverPicture:e,rollOverPictureImage:i}=t.product;return e?!B(i==null?void 0:i.imageUrl):!1}),N=a(()=>t.isEnabledButton?V.value==T.InStock:!1),U=a(()=>k(t.elementShowSettings,g.ProductVariation)),h=a(()=>k(t.elementShowSettings,g.AddToWishlist)),W=a(()=>{var e,i;return t.isEnabledSku&&(e=t.product)!=null&&e.isEnabledOptionGroups&&U.value?!C((i=n.value)==null?void 0:i.skuConfig):!1}),l=a(()=>t.resize?t.resize:dt(t.gridViewLayoutType)),b=a(()=>t.product.mainImage),$=a(()=>Y(b.value,l.value)),v=a(()=>b.value?b.value.alt:"hocoos product"),n=a(()=>{const{skus:e,activeInventorySku:i}=t.product||{};return i!=null&&i.id&&!C(e)&&(e==null?void 0:e.find(r=>(r==null?void 0:r.id)==(i==null?void 0:i.id)))||i}),V=a(()=>{var e;return lt(t.product,(e=n.value)==null?void 0:e.id)||T.InStock}),D=a(()=>t.product.name||ut(t.product.nameHtml)),S=a(()=>{var I,E,P;if(!m.value)return"#";const{id:e,slug:i,pageTemplateType:s,defaultInventorySkuId:r}=t.product,d=tt({slug:i,pageTemplateType:s||et.Product});return(I=n.value)!=null&&I.id&&((E=n.value)==null?void 0:E.id)!=r&&(u.value.skuId=(P=n.value)==null?void 0:P.id),u.value.skuId?`${d}?skuId=${u.value.skuId}`:d}),H=a(()=>{const e=k(t.elementShowSettings,g.Rating);return new nt({rate:t.product.rating||5,isEnabled:e})}),K=async()=>{if(!m.value)return;const e=ct(t.product,u.value.skuId);e&&(u.value.skuId=e==null?void 0:e.id,await G.addProductToCart(u.value),z.emit("addToCart"))},w=()=>{if(N.value)return o("div",{class:"kmb-product-item-action-box"},[o("div",{class:"kmb-product-btn-group kmb-product-add-to-cart-btn-group"},[o("button",{disabled:!m.value,class:"kmb-widget-btn kmb-add-to-cart-btn kmb-widget-store-primary-btn",onClick:async()=>await K()},[t.buttonLabel||O("buttons.addToCart")])])])};return{cartItem:u,productUrl:S,productName:D,productRate:H,isRowItem:p,isCatalogMode:j,isEnabledAddToWishList:h,isEnabledInventorySkuList:W,renderProductBoxImage:()=>{var e;return o("div",{class:"kmb-product-item-img-col"},[o(pt,{product:t.product},null),o("div",{class:"kmb-product-item-img-box",style:`max-height: ${(e=l.value)==null?void 0:e.height}px`},[!p.value&&o(R,{productId:t.product.id,isEnabled:h.value},null),o(L,{to:S.value,class:"kmb-product-item-link kmb-product-item-image-link"},{default:()=>{var i,s;return[o(A,{src:$.value,loading:"lazy",class:"kmb-product-item-img kmb-product-main-item-img",alt:v.value,ref:"kmb-item-img",style:`max-height: ${(i=l.value)==null?void 0:i.height}px`},null),M.value&&!B(y.value)&&o(A,{src:y.value,loading:"lazy",class:"kmb-product-item-img kmb-product-hover-item-img",alt:v.value,ref:"kmb-item-img",style:`max-height: ${(s=l.value)==null?void 0:s.height}px`},null)]}}),!p.value&&!t.isShowBottomButton&&w()])])},renderInventorySkuList:()=>{var e,i;return(i=(e=n.value)==null?void 0:e.skuConfig)==null?void 0:i.map(s=>{var d;const r=it.filterItemByObject((d=t.product)==null?void 0:d.optionGroups,{key:s.groupKey});if(!(t.isShowOnlyColorSku&&(r==null?void 0:r.type)!=at.ColorAndImage))return o("div",{class:"kmb-product-options-sku-config-item px-2 my-1"},[o(kt,{optionGroups:t.product.optionGroups,record:s},null)])})},renderProductActionBox:w}},render(){return o("div",{class:c("kmb-widget-product-item-layout w-full kmb-widget-col-group",this.isRowItem?"kmb-row-product-item":"kmb-column-product-item kmb-widget-col",this.columnSize),"data-product-id":this.product.id},[o("div",{class:"kmb-product-item"},[this.renderProductBoxImage(),o("div",{class:"kmb-product-info kmb-widget-item-content"},[o("div",{class:c("kmb-product-item-name-row",{"kmb-product-item-name-row-available-wish-list-btn":this.isRowItem&&this.isEnabledAddToWishList})},[this.isRowItem&&o("div",{class:"kmb-product-add-to-wish-col"},[o(R,{productId:this.product.id,isEnabled:this.isEnabledAddToWishList},null)]),o(L,{to:this.productUrl,class:"kmb-product-item-link kmb-product-item-name-link kmb-widget-color-inherit kmb-widget-text-body1"},{default:()=>[o(mt,{value:this.product.nameHtml,tag:"h2",class:"kmb-product-name kmb-widget-default-style-text",title:this.productName,"data-title":this.productName},null)]})]),this.isEnabledInventorySkuList&&!this.isBottomSku&&o("div",{class:"kmb-product-item-sku-config"},[o("div",{class:"kmb-product-options-sku-config-row flex flex-wrap items-center justify-center -mx-2 mb-4"},[this.renderInventorySkuList()])]),!this.isBottomSku&&o(ot,{value:this.productRate,class:c("kmb-product-rating small-stars kmb-w-max-content",{"mx-auto":!this.isRowItem})},null),o(bt,{site:this.site,isEnabled:!this.isCatalogMode,product:this.product,onChange:t=>{this.cartItem.skuId=t}},null),this.isEnabledInventorySkuList&&this.isBottomSku&&o("div",{class:c("kmb-product-item-sku-config",{"mt-1":this.isCatalogMode})},[o("div",{class:"kmb-product-options-sku-config-row flex flex-wrap tems-center justify-center -mx-2 kmb-default-group -mt-5"},[this.renderInventorySkuList()])]),(this.isRowItem||this.isShowBottomButton)&&this.renderProductActionBox()])])])}});export{Bt as P};