import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function a(s){const r="https://pixabay.com",c="/api/",n=new URLSearchParams({key:"44411802-6a5316a8fc33c8235d915a6fe",image_type:"photo",orientation:"horizontal",safesearch:!0,q:`${s}`}),e=`${r}${c}?${n}`;return fetch(e).then(t=>t.json()).then(t=>{const o=[];t.hits===o&&iziToast.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb"})}).catch(t=>{console.log(t)})}const i=document.querySelector(".input-search");document.querySelector(".btn-search");const u=document.querySelector(".form-el");u.addEventListener("submit",s=>{s.preventDefault(),i.value.trim()!==""&&a(i.value.trim())});
//# sourceMappingURL=commonHelpers.js.map