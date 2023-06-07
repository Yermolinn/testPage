// Viber check
const chek = document.querySelector('.questionnaire-messege__check');



// Переключатель галочки
const checkBoxes = document.querySelectorAll('.questionnaire-check');


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

const shelterCheck = document.getElementById('shelterCheck');
const noShelterCheck = document.getElementById('noShelterCheck');
const countryShelter = document.querySelector('.js-country-shelter');

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






//  Открытие формы - студент
const studentCheck = document.getElementById('studentCheck');
const noStudentCheck = document.getElementById('noStudentCheck');
const listStudent = document.querySelector('.js-list-student');


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





//  Открытие формы - поездка вместе
const togetherCheck = document.getElementById('togetherCheck');
const noTogetherCheck = document.getElementById('noTogetherCheck');
const infoTogether = document.querySelector('.js-info-together');


togetherCheck.addEventListener('click', function() {
  const togetherInput = document.getElementById('together');
  if (togetherInput && togetherInput.type === 'radio') {
    togetherInput.checked = true;
    if (togetherInput.checked) {
      infoTogether.style.display = 'block';
    } else {
      infoTogether.style.display = 'none';
    }
  }
});

noTogetherCheck.addEventListener('click', function() {
  const noTogetherInput = document.getElementById('no-together');
  if (noTogetherInput && noTogetherInput.type === 'radio') {
    noTogetherInput.checked = true;
    if (noTogetherInput.checked) {
      infoTogether.style.display = 'none';
    } else {
      infoTogether.style.display = 'block';
    }
  }
});
