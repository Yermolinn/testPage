!function(){var e=document.querySelector(".questionnaire-messege__check");console.log(e),document.querySelectorAll(".questionnaire-checkbox").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("questionnaire-check_active")}))})),document.querySelectorAll(".questionnaire-politics").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("questionnaire-check_active")}))}));var t=1;function n(e){document.querySelectorAll("[data-step]").forEach((function(e){return e.style.display="none"})),document.querySelector('[data-step="'.concat(e,'"]')).style.display="block",!1;var t=document.getElementById("questionnaire").offsetTop;window.scrollTo({top:t,behavior:"smooth"}),document.querySelectorAll(".questionnaire-steps__item").forEach((function(t,n){n+1<=e?t.classList.add("questionnaire-step_active"):t.classList.remove("questionnaire-step_active")}));var n=document.querySelector(".questionnaire-btn__prev");e>=2?(n.style.display="flex",n.style.display="none",n.style.display="flex"):n.style.display="none";var o=document.querySelector(".questionnaire-btn__next"),i=document.querySelector(".questionnaire-sub");4==e&&(o.style.display="none",i.style.display="flex")}var o=document.querySelector(".questionnaire-btn__next"),i=document.querySelector(".questionnaire-btn__prev"),c=document.querySelectorAll(".questionnaire-steps__item");o.addEventListener("click",(function(e){e.preventDefault(),n(++t)})),i.addEventListener("click",(function(e){e.preventDefault(),n(--t)})),c.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n(this.dataset.index)}))})),document.querySelectorAll(".input-counter").forEach((function(e){e.addEventListener("input",(function(){var e=this.value;0==/^\d+$/.test(e)&&(this.value=this.value.substr(0,this.value.length-1))}))}));var r=!1;document.querySelectorAll(".questionnaire input").forEach((function(e){e.addEventListener("change",(function(){r=!0}))})),window.addEventListener("beforeunload",(function(e){r&&(e.returnValue="Возможно, внесенные изменения не сохранятся.")}))}();
//# sourceMappingURL=questionnaire.6cf89e97.js.map
