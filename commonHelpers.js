import{S as x,i as l}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const h="/goit-js-hw-12/assets/octagon-fdf1437b.svg";async function f(){const e="https://pixabay.com/api",a=new URLSearchParams({key:"41861239-c6b09579488337e808a164f07",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15});return(await axios.get(`${e}/?${a}&q=${searchValue}&page=${page}`)).data}function d(e){return e.map(({webformatURL:a,largeImageURL:o,tags:i,likes:t,views:r,comments:c,downloads:w})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${a}" alt="${i}" />
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
          <span class="description-value">${w}</span>
        </div>
      </div>
    </li>`).join("")}const s={formSearch:document.querySelector(".form"),imageList:document.querySelector(".gallery"),preload:document.querySelector(".loader"),nextBtn:document.querySelector("#next-btn")},n="is-hidden";let p=0;const u=new x(".gallery a",{captionsData:"alt",captionDelay:250});s.formSearch.addEventListener("submit",S);async function S(e){e.preventDefault();const a=e.currentTarget.elements.input.value.trim(),o=e.currentTarget;if(p=1,s.nextBtn.classList.add(n),s.imageList.innerHTML="",!a){l.show({title:"❕",theme:"light",message:"Please, fill in the search field",messageSize:"20px",messageColor:"#808080",backgroundColor:"#e7fc44",position:"topRight",timeout:3e3});return}s.preload.classList.remove(n);try{const i=await f();if(i.hits.length===0){l.show({iconUrl:h,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),o.reset();return}s.imageList.innerHTML=d(i.hits),u.refresh(),i.hits.length>=15&&v(),m(),o.reset()}catch(i){y(i)}finally{s.preload.classList.add(n)}}function y(e){console.error(e),s.imageList.innerHTML="",l.show({iconUrl:h,theme:"dark",message:e.stack,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),g()}async function L(){s.preload.classList.remove(n),g(),p+=1;try{const e=await f();if(p*15>=e.totalHits){l.show({title:"❕",theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"white",backgroundColor:"#4e75ff",position:"topRight",timeout:5e3}),s.imageList.innerHTML+=d(e.hits),u.refresh(),g(),m();return}s.imageList.innerHTML+=d(e.hits),u.refresh(),m(),v()}catch(e){y(e)}finally{s.preload.classList.add(n)}}function m(){window.scrollBy({top:640,behavior:"smooth"})}function v(){s.nextBtn.classList.remove(n),s.nextBtn.addEventListener("click",L)}function g(){s.nextBtn.classList.add(n),s.nextBtn.removeEventListener("click",L)}
//# sourceMappingURL=commonHelpers.js.map
