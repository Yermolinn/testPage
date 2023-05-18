const selector = document.getElementById('selector');
const formA = document.getElementById('formA');
const formB = document.getElementById('formB');
const formC = document.getElementById('formC');

selector.addEventListener('change', function() {
  if (selector.value === 'A') {
    formA.style.display = 'block';
    formB.style.display = 'none';
    formC.style.display = 'none';
  } else if (selector.value === 'B') {
    formA.style.display = 'none';
    formB.style.display = 'block';
    formC.style.display = 'none';
  } else if (selector.value === 'C') {
    formA.style.display = 'none';
    formB.style.display = 'none';
    formC.style.display = 'block';
  }
});
