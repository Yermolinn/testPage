document.querySelectorAll(".anchor").forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault();const t=e.getAttribute("href"),r=document.querySelector(t).offsetTop;window.scrollTo({top:r,behavior:"smooth"}),frameClose()}))}));
//# sourceMappingURL=questionnaire.6049e887.js.map
