!function(){document.querySelector(".questionnaire-messege__check");var e=document.querySelectorAll(".questionnaire-check");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e===t?e.classList.add("questionnaire-check_active"):e.classList.remove("questionnaire-check_active")}))}))}));var t=document.getElementById("shelterCheck"),c=document.getElementById("noShelterCheck"),n=document.querySelector(".js-country-shelter");t.addEventListener("click",(function(){var e=document.getElementById("shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?n.style.display="block":n.style.display="none")})),c.addEventListener("click",(function(){var e=document.getElementById("no-shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?n.style.display="none":n.style.display="block")}));var d=document.getElementById("studentCheck"),o=document.getElementById("noStudentCheck"),l=document.querySelector(".js-list-student");d.addEventListener("click",(function(){var e=document.getElementById("student");e&&"radio"===e.type&&(e.checked=!0,e.checked?l.style.display="block":l.style.display="none")})),o.addEventListener("click",(function(){var e=document.getElementById("no-student");e&&"radio"===e.type&&(e.checked=!0,e.checked?l.style.display="none":l.style.display="block")}));var i=document.getElementById("togetherCheck"),s=document.getElementById("noTogetherCheck"),r=document.querySelector(".js-info-together");i.addEventListener("click",(function(){var e=document.getElementById("together");e&&"radio"===e.type&&(e.checked=!0,e.checked?r.style.display="block":r.style.display="none")})),s.addEventListener("click",(function(){var e=document.getElementById("no-together");e&&"radio"===e.type&&(e.checked=!0,e.checked?r.style.display="none":r.style.display="block")}))}();
//# sourceMappingURL=questionnaire.2a174f9a.js.map
