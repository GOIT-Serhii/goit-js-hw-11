import{S as f,i as h}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function m(o){return fetch(`https://pixabay.com/api/?key=44781960-4338c4c6360104e4623fadff2&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const p=document.querySelector(".form-search"),y=document.querySelector(".card-container"),a=document.querySelector(".loader");p.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.currentTarget,c=r.elements.search.value.toLowerCase();S(),m(c).then(L).catch(n).finally(()=>{r.reset(),$()})}function L({hits:o}){if(o.length===0){n();return}const r=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:l,comments:u,downloads:d})=>`
    <li class="item">
        <a href="${e}"><img class="image" src="${i}" alt="${t}" width="360" ></a>
            <ul class="descr-list">
                    <li class="descr-item">
                            <h3 class="descr-title">Likes</h3>
                            <p class="descr-value">${s}</p>
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
    `).join("");y.innerHTML=r,new f(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function n(){h.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function S(){a.style.display="flex"}function $(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
