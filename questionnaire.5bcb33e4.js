var chek=document.querySelector(".questionnaire-messege__check"),checkBoxes=document.querySelectorAll(".questionnaire-check");console.log(checkBoxes),checkBoxes.forEach((function(e){e.addEventListener("click",(function(){checkBoxes.forEach((function(t){t===e?t.classList.add("questionnaire-check_active"):t.classList.remove("questionnaire-check_active")}))}))}));var shelterCheck=document.getElementById("shelterCheck"),noShelterCheck=document.getElementById("noShelterCheck"),shelter=document.querySelector(".js-shelter"),countryShelter=document.querySelector(".country-shelter");shelterCheck.addEventListener("click",(function(){var e=document.getElementById("shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?countryShelter.style.display="block":countryShelter.style.display="none")})),noShelterCheck.addEventListener("click",(function(){var e=document.getElementById("no-shelter");e&&"radio"===e.type&&(e.checked=!0,e.checked?countryShelter.style.display="none":countryShelter.style.display="block")}));var studentCheck=document.getElementById("studentCheck"),noStudentCheck=document.getElementById("noStudentCheck"),student=document.querySelector(".js-student"),listStudent=document.querySelector(".list-student");studentCheck.addEventListener("click",(function(){var e=document.getElementById("student");e&&"radio"===e.type&&(e.checked=!0,e.checked?listStudent.style.display="block":listStudent.style.display="none")})),noStudentCheck.addEventListener("click",(function(){var e=document.getElementById("no-student");e&&"radio"===e.type&&(e.checked=!0,e.checked?listStudent.style.display="none":listStudent.style.display="block")}));
//# sourceMappingURL=questionnaire.5bcb33e4.js.map
