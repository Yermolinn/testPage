var chek=document.querySelector(".questionnaire-messege__check"),checkBoxes=document.querySelectorAll(".questionnaire-check");checkBoxes.forEach((function(e){e.addEventListener("click",(function(){checkBoxes.forEach((function(t){t===e?t.classList.add("questionnaire-check_active"):t.classList.remove("questionnaire-check_active")}))}))}));var shelterCheck=document.getElementById("shelterCheck"),noShelterCheck=document.getElementById("noShelterCheck"),countryShelter=document.querySelector(".js-country-shelter");shelterCheck.addEventListener("click",(function(){var e=document.getElementById("shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?countryShelter.style.display="block":countryShelter.style.display="none")})),noShelterCheck.addEventListener("click",(function(){var e=document.getElementById("no-shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?countryShelter.style.display="none":countryShelter.style.display="block")}));var studentCheck=document.getElementById("studentCheck"),noStudentCheck=document.getElementById("noStudentCheck"),listStudent=document.querySelector(".js-list-student");studentCheck.addEventListener("click",(function(){var e=document.getElementById("student");e&&"radio"===e.type&&(e.checked=!0,e.checked?listStudent.style.display="block":listStudent.style.display="none")})),noStudentCheck.addEventListener("click",(function(){var e=document.getElementById("no-student");e&&"radio"===e.type&&(e.checked=!0,e.checked?listStudent.style.display="none":listStudent.style.display="block")}));var togetherCheck=document.getElementById("togetherCheck"),noTogetherCheck=document.getElementById("noTogetherCheck"),infoTogether=document.querySelector(".js-info-together");togetherCheck.addEventListener("click",(function(){var e=document.getElementById("together");e&&"radio"===e.type&&(e.checked=!0,e.checked?infoTogether.style.display="block":infoTogether.style.display="none")})),noTogetherCheck.addEventListener("click",(function(){var e=document.getElementById("no-together");e&&"radio"===e.type&&(e.checked=!0,e.checked?infoTogether.style.display="none":infoTogether.style.display="block")}));
//# sourceMappingURL=questionnaire.132bad10.js.map