!function(){document.querySelector(".js-checkbox").addEventListener("click",(function(){this.querySelectorAll("input").forEach((function(e){e.checked=!e.checked}))}));var e=document.querySelectorAll(".js-checkbox");e.forEach((function(e){e.addEventListener("click",(function(){e.querySelectorAll("input").forEach((function(e){e.checked=!e.checked}))}))})),console.log(e),document.querySelectorAll(".anchor").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var c=e.getAttribute("href"),o=document.querySelector(c).offsetTop;window.scrollTo({top:o,behavior:"smooth"}),frameClose()}))})),document.addEventListener("click",(function(e){var t=document.querySelector(".target-box"),c=document.querySelector(".target-frame");t.contains(e.target)||c===e.target||frameClose()}))}();
//# sourceMappingURL=questionnaire.929920f2.js.map