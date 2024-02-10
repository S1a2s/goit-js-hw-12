import{a as S,S as b,i as d}from"./assets/vendor-527658dd.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(t,a){const o="https://pixabay.com/api",i=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15});return(await S.get(`${o}/?${i}&q=${t}&page=${a}`)).data}function p(t){return t.map(({webformatURL:a,largeImageURL:o,tags:i,likes:e,views:r,comments:c,downloads:x})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${a}" alt="${i}" />
      </a>
      <div class="container-additional-info">
        <div class="container-descr-inner">
          <p class="description">Likes</p>
          <span class="description-value">${e}</span>
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
    </li>`).join("")}const y="/goit-js-hw-12/assets/octagon-fdf1437b.svg",s={formSearch:document.querySelector(".form"),imageList:document.querySelector(".gallery"),preload:document.querySelector(".loader"),nextBtn:document.querySelector("#next-btn")},n="is-hidden";let l=0,u="";const m=new b(".gallery a",{captionsData:"alt",captionDelay:250});s.formSearch.addEventListener("submit",B);async function B(t){t.preventDefault();const a=t.currentTarget.elements.input.value.trim(),o=t.currentTarget;if(u=a,l=1,s.nextBtn.classList.add(n),s.imageList.innerHTML="",!a){d.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}s.preload.classList.remove(n);try{const i=await f(u,l);if(i.hits.length===0){d.show({iconUrl:y,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),o.reset();return}s.imageList.innerHTML=p(i.hits),m.refresh(),i.hits.length>=15&&w(),h(),o.reset()}catch(i){L(i)}finally{s.preload.classList.add(n)}}function L(t){console.error(t),s.imageList.innerHTML="",d.show({iconUrl:y,theme:"dark",message:t.stack,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),g()}async function v(){s.preload.classList.remove(n),g(),l+=1;try{const t=await f(u,l);if(l*15>=t.totalHits){d.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}),s.imageList.innerHTML+=p(t.hits),m.refresh(),g(),h();return}s.imageList.innerHTML+=p(t.hits),m.refresh(),h(),w()}catch(t){L(t)}finally{s.preload.classList.add(n)}}function h(){window.scrollBy({top:640,behavior:"smooth"})}function w(){s.nextBtn.classList.remove(n),s.nextBtn.addEventListener("click",v)}function g(){s.nextBtn.classList.add(n),s.nextBtn.removeEventListener("click",v)}
//# sourceMappingURL=commonHelpers.js.map
