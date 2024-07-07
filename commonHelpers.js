import{S as f,i as h}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function m(s){return fetch(`https://pixabay.com/api/?key=44781960-4338c4c6360104e4623fadff2&q=${s}&image_type=photo&orientation=horizontal&safesearch=${!0}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const p=document.querySelector(".form-search"),y=document.querySelector(".card-container"),n=document.querySelector(".loader");p.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.currentTarget,c=r.elements.search.value.toLowerCase();S(),m(c).then(L).catch(a).finally(()=>{r.reset(),$()})}function L({hits:s}){if(s.length===0){a();return}const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:l,comments:u,downloads:d})=>`
    <li class="item">
        <a href="${e}"><img class="image" src="${i}" alt="${t}" width="360" ></a>
            <ul class="descr-list">
                    <li class="descr-item">
                            <h3 class="descr-title">Likes</h3>
                            <p class="descr-value">${o}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Views</h3>
                            <p class="descr-value">${l}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Comments</h3>
                            <p class="descr-value">${u}</p>
                    </li>
            <li class="descr-item">
                            <h3 class="descr-title">Downloads</h3>
                            <p class="descr-value">${d}</p>
                    </li>
            </ul>
    </li>
    `).join("");y.innerHTML=r,new f(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function a(){h.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function S(){console.log("Showing loader"),n.style.display="block"}function $(){console.log("Hiding loader"),n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
