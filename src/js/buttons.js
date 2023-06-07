// Viber check
const chek = document.querySelector('.questionnaire-messege__check');

// Переключатель языка
// const questionnaireChecks = document.querySelectorAll('.questionnaire-check');
// questionnaireChecks.forEach(check => {
// check.addEventListener('click', () => {
//     const siblingChecks = Array.from(check.parentNode.children).filter(child => child !== check && child.classList.contains('questionnaire-check'));
//     siblingChecks.forEach(siblingCheck => siblingCheck.classList.remove('questionnaire-check_active'));
//     check.classList.add('questionnaire-check_active');

// });
// });

// Переключатель класса - check_active
// const questionnaireCheckboxes = document.querySelectorAll('.questionnaire-checkbox');
// questionnaireCheckboxes.forEach(checkbox => {
// checkbox.addEventListener('click', () => {
//     checkbox.classList.toggle('questionnaire-check_active');
// });
// });

// const questionnairePolitics = document.querySelectorAll('.questionnaire-politics');
// questionnairePolitics.forEach(politic => {
// politic.addEventListener('click', () => {
//     politic.classList.toggle('questionnaire-check_active');
// });
// });

// let driver = document.querySelector('.js-drive-licence');
// let driveCategory = document.querySelector('.drive-category');
// driver.addEventListener('click', function (e) {
//     let element = e.target;

//     if (element.type === 'radio') {
//         if (element.id === 'drive') {
//             // listStudent.forEach(elem => console.log(elem))
//             driveCategory.style.display = 'block';
//         } else {
//             driveCategory.style.display = 'none';
//         }
//     }
// });

// let speakEng = document.querySelector('.js-english-language');
// let engLevel = document.querySelector('.english-level');
// speakEng.addEventListener('click', function (e) {
//     let element = e.target;

//     if (element.type === 'radio') {
//         if (element.id === 'english') {
//             // listStudent.forEach(elem => console.log(elem))
//             engLevel.style.display = 'block';
//         } else {
//             engLevel.style.display = 'none';
//         }
//     }
// });

const checkBoxes = document.querySelectorAll('.questionnaire-check');
console.log(checkBoxes);


checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('click', function() {
    checkBoxes.forEach(element => {
      if (element === checkBox) {
        element.classList.add('questionnaire-check_active');
      } else {
        element.classList.remove('questionnaire-check_active');
      }
    });
  });
});


//  Открытие формы - прихисток





// #2
const shelterCheck = document.getElementById('shelterCheck');
const noShelterCheck = document.getElementById('noShelterCheck');
const shelter = document.querySelector('.js-shelter');
const countryShelter = document.querySelector('.country-shelter');

shelterCheck.addEventListener('click', function() {
  const shelterInput = document.getElementById('shelter');
  if (shelterInput && shelterInput.type === 'radio') {
    shelterInput.checked = true;
    if (shelterInput.checked) {
      countryShelter.style.display = 'block';
    } else {
      countryShelter.style.display = 'none';
    }
  }
});

noShelterCheck.addEventListener('click', function() {
  const noShelterInput = document.getElementById('no-shelter');
  if (noShelterInput && noShelterInput.type === 'radio') {
    noShelterInput.checked = true;
    if (noShelterInput.checked) {
      countryShelter.style.display = 'none';
    } else {
      countryShelter.style.display = 'block';
    }
  }
});









// const shelter = document.querySelector('.js-shelter');
// const countryShelter = document.querySelector('.country-shelter');

// function toggleCountryShelterDisplay(event) {
//     const element = event.target;
//     console.log(element)

//     if (element.type === 'radio') {
//     if (element.id === 'shelter') {
//         // listStudent.forEach(elem => console.log(elem))
//         countryShelter.style.display = 'block';
//     } else {
//         countryShelter.style.display = 'none';
//     }
// };
// }
// shelter.addEventListener('click', toggleCountryShelterDisplay);










//  Открытие формы - студент
const studentCheck = document.getElementById('studentCheck');
const noStudentCheck = document.getElementById('noStudentCheck');
const student = document.querySelector('.js-student');
const listStudent = document.querySelector('.list-student');

// function toggleStudent(e) {
//   const checkBox = e.target;

//   if (checkBox.classList.toggle('questionnaire-check_active')) {
//     listStudent.style.display = 'block';
//   } else {
//     listStudent.style.display = 'none';
//   }
// }
// student.addEventListener('click', toggleStudent);





studentCheck.addEventListener('click', function() {
  const studentInput = document.getElementById('student');
  if (studentInput && studentInput.type === 'radio') {
    studentInput.checked = true;
    if (studentInput.checked) {
      listStudent.style.display = 'block';
    } else {
      listStudent.style.display = 'none';
    }
  }
});

noStudentCheck.addEventListener('click', function() {
  const noStudentInput = document.getElementById('no-student');
  if (noStudentInput && noStudentInput.type === 'radio') {
    noStudentInput.checked = true;
    if (noStudentInput.checked) {
      listStudent.style.display = 'none';
    } else {
      listStudent.style.display = 'block';
    }
  }
});










// speakEng.addEventListener('click', function (e) {
//     let element = e.target;

//     if (element.type === 'radio') {
//         if (element.id === 'english') {
//             // listStudent.forEach(elem => console.log(elem))
//             engLevel.style.display = 'block';
//         } else {
//             engLevel.style.display = 'none';
//         }
//     }
// });

// if (element.type === 'radio') {
//     if (element.id === 'shelter') {
//         // listStudent.forEach(elem => console.log(elem))
//         countryShelter.style.display = 'block';
//     } else {
//         countryShelter.style.display = 'none';
//     }
// }
// });

// let together = document.querySelector('.js-together');
// let infoTogether = document.querySelector('.info-together');
// together.addEventListener('click', function (e) {
//     let element = e.target;
//     if (element.type === 'radio') {
//         if (element.id === 'together') {
//             infoTogether.style.display = 'block';
//         } else {
//             infoTogether.style.display = 'none';
//         }
//     }
// });
