import"../sb-preview/runtime.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",f=function(n,o){return new URL(n,o).href},u={},_=function(o,s,c){if(!s||s.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,c),e in u)return;u[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":E,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:m}=__STORYBOOK_MODULE_CHANNELS__,{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,O=m({page:"preview"});w.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const R={"./src/stories/DocBlock.mdx":async()=>_(()=>import("./DocBlock-b5ac6893.js"),["./DocBlock-b5ac6893.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./index-8df8aaa1.js","./index-1cea193e.js","./index-2ef8b458.js"],import.meta.url),"./src/stories/Button.stories.tsx":async()=>_(()=>import("./Button.stories-f51ed684.js"),["./Button.stories-f51ed684.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js"],import.meta.url)};async function p(n){return R[n]()}const{composeConfigs:P,PreviewWeb:S,ClientApi:T}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const n=await Promise.all([_(()=>import("./config-24acb8ea.js"),["./config-24acb8ea.js","./index-1b03fe98.js","./react-18-6d10b71b.js","./index-1cea193e.js"],import.meta.url),_(()=>import("./preview-451a7ddf.js"),[],import.meta.url),_(()=>import("./preview-7098cc22.js"),[],import.meta.url),_(()=>import("./preview-ba2273f4.js"),[],import.meta.url)]);return P(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new T({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:p,getProjectAnnotations:h});export{_};
//# sourceMappingURL=iframe-c4a70daf.js.map
