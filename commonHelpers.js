import{S,i as l,a as b}from"./assets/vendor-527658dd.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const g="/goit-js-hw-12/assets/octagon-fdf1437b.svg",s={formSearch:document.querySelector(".form"),imageList:document.querySelector(".gallery"),preload:document.querySelector(".loader"),nextBtn:document.querySelector("#next-btn")},n="is-hidden";let d=0,f="";const p=new S(".gallery a",{captionsData:"alt",captionDelay:250});s.formSearch.addEventListener("submit",B);async function B(e){e.preventDefault();const i=e.currentTarget.elements.input.value.trim(),o=e.currentTarget;if(f=i,d=1,s.nextBtn.classList.add(n),s.imageList.innerHTML="",!i){l.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}s.preload.classList.remove(n);try{const a=await y();if(a.hits.length===0){l.show({iconUrl:g,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),o.reset();return}s.imageList.innerHTML=u(a.hits),p.refresh(),a.hits.length>=15&&w(),m(),o.reset()}catch(a){L(a)}finally{s.preload.classList.add(n)}}async function y(){const e="https://pixabay.com/api",i=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15});return(await b.get(`${e}/?${i}&q=${f}&page=${d}`)).data}function u(e){return e.map(({webformatURL:i,largeImageURL:o,tags:a,likes:t,views:r,comments:c,downloads:x})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${i}" alt="${a}" />
      </a>
      <div class="container-additional-info">
        <div class="container-descr-inner">
          <p class="description">Likes</p>
          <span class="description-value">${t}</span>
        </div>
        <div class="container-descr-inner">
          <p class="description">Views</p>
          <span class="description-value">${r}</span>
        </div>
        <div class="container-descr-inner">
          <p class="description">Comments</p>
          <span class="description-value">${c}</span>
        </div>
        <div class="container-descr-inner">
          <p class="description">Downloads</p>
          <span class="description-value">${x}</span>
        </div>
      </div>
    </li>`).join("")}function L(e){console.error(e),s.imageList.innerHTML="",l.show({iconUrl:g,theme:"dark",message:e.stack,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),h()}async function v(){s.preload.classList.remove(n),h(),d+=1;try{const e=await y();if(d*15>=e.totalHits){l.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}),s.imageList.innerHTML+=u(e.hits),p.refresh(),h(),m();return}s.imageList.innerHTML+=u(e.hits),p.refresh(),m(),w()}catch(e){L(e)}finally{s.preload.classList.add(n)}}function m(){window.scrollBy({top:640,behavior:"smooth"})}function w(){s.nextBtn.classList.remove(n),s.nextBtn.addEventListener("click",v)}function h(){s.nextBtn.classList.add(n),s.nextBtn.removeEventListener("click",v)}
//# sourceMappingURL=commonHelpers.js.map
