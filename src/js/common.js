

// $('.language').click(function () {
//     $(this).find('.language-list').slideToggle();
// });

// $('.language').hover(
    
//     function() {

//     },
//     function() {
//          $(this).find('.language-list').slideUp();
//     }
// );
// $('.vacancies-filter__active').click(function() {
//   $('.vacancies-filter__select').find('.vacancies-filter__list').slideUp();
//   if($(this).parent().hasClass('vacancies-filter__select_active') == true) {
   
//     $('.vacancies-filter__select').removeClass('vacancies-filter__select_active');
//   } else {
    
//     $(this).siblings('.vacancies-filter__list').slideToggle();
//     $(this).parent().addClass('vacancies-filter__select_active');
//   }
// });

// $('.vacancies-filter__select').hover(
    
//   function() {

//   },
//   function() {
//        $(this).find('.vacancies-filter__list').slideUp();
//   }
// );

// $("body").click(function (e){ // событие клика по веб-документу
// 	var popup = $(".language, .vacancies-filter__select"); // тут указываем ID элемента
// 	if (!popup.is(e.target) // если клик был не по нашему блоку
// 		&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
//       $('.language').find('.language-list').slideUp();
//       $('.vacancies-filter__select').find('.vacancies-filter__list').slideUp();
// 	}
// });
// $('.vacancies-filter__list li').click(function() {
//   let filterContent = $(this).html();
//   $(this).parent().siblings('.vacancies-filter__active').children('p').html(filterContent);
//   $(this).parent().slideUp();
// });

// $('.vacancies-more').click(function(e) {
//   e.preventDefault();
//   let filterContent = $(this).html();
//   $('.vacancies-item_hide').css("display", "flex").hide().fadeIn();
//   $(this).hide();
// });


// $('.reviews-slider').slick({
// 	infinite: true,
// 	slidesToShow: 4,
// 	prevArrow: '.reviews-prev',
// 	nextArrow: '.reviews-next',
// 	dots: true,
// 	appendDots: '.reviews-dots',
// 	responsive: [
//     {
//       breakpoint: 1251,
//       settings: {
//         slidesToShow: 2,
//       }
//     },
//     {
//       breakpoint: 701,
//       settings: {
//         slidesToShow: 1,
//         centerMode: true,
//       }
//     },
//   ]
// });


// $('.gallery-slider').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	prevArrow: '.gallery-prev',
// 	nextArrow: '.gallery-next',
// 	dots: true,
// 	appendDots: '.gallery-dots',
// 	centerMode: true,
// 	centerPadding: '315px',
// 	responsive: [
//     {
//       breakpoint: 1351,
//       settings: {
//         slidesToShow: 3,
//         centerPadding: '50px',
//       }
//     },
//     {
//       breakpoint: 701,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: '50px',
//       }
//     },
//   ]

// });

// file Photo
// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//           $('.questionnaire-photo__frame img').attr('src', e.target.result);
//       }

//       reader.readAsDataURL(input.files[0]);
//   }
// }

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgElem = document.querySelector('.questionnaire-photo__frame img');
      imgElem.setAttribute('src', event.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


// document.querySelector('.questionnaire-photo__save input').addEventListener('change', function() {
//   readURL(this);
// });

// const burger = document.querySelector('.burger');
// const headerMob = document.querySelector('.header-mob');

// burger.addEventListener('click', function() {
//   burger.classList.toggle('burger_active');
//   headerMob.classList.toggle('header-mob_active');
// });

// burger.addEventListener('click', function(e) {
//   this.classList.toggle('burger_active');
//   headerMob.style.display = (headerMob.style.display === 'none') ? 'block' : 'none';
  // let elem = e.target
  // console.log(elem);
  // if (this.classList.contains('burger_active')) {
  //   console.log("is active");
  // } else {
  //   console.log("not active");
  // }
// });




// const questionnaireMessege = document.querySelector('.questionnaire-messege');
// console.log(questionnaireMessege);

// questionnaireMessege.addEventListener('click', function() {
//   questionnaireMessege.classList.toggle('questionnaire-messege__check_active');
// });



// $(".questionnaire-photo__save input").change(function () {
//   readURL(this);
// });

// $('.burger').click(function() {
//   $(this).toggleClass('burger_active');
//   $('.header-mob').slideToggle();
// });



const chek = document.querySelector('.questionnaire-messege__check');
console.log(chek);

// $('.questionnaire-messege').click(function() {
//   $(this).toggleClass('questionnaire-messege__check_active');
// });

// $('.check-child_true').click(function() {
//   if($(this).hasClass('questionnaire-check_active') == false) {
//     $(childBlock).appendTo('.questionnaire-copy_child');
//   }
// });

// $('.questionnaire-check').click(function() {
//   $(this).siblings('.questionnaire-check').removeClass('questionnaire-check_active');
//   $(this).addClass('questionnaire-check_active');
// });
// $('.questionnaire-checkbox').click(function() {
//   $(this).toggleClass('questionnaire-check_active');
// });

// $('.questionnaire-politics').click(function() {
//   $(this).toggleClass('questionnaire-check_active');
// });


const questionnaireChecks = document.querySelectorAll('.questionnaire-check');
questionnaireChecks.forEach(check => {
  check.addEventListener('click', () => {
    const siblingChecks = Array.from(check.parentNode.children).filter(child => child !== check && child.classList.contains('questionnaire-check'));
    siblingChecks.forEach(siblingCheck => siblingCheck.classList.remove('questionnaire-check_active'));
    check.classList.add('questionnaire-check_active');
  });
});


// Переключатель класса - check_active 
const questionnaireCheckboxes = document.querySelectorAll('.questionnaire-checkbox');
questionnaireCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('questionnaire-check_active');
  });
});

const questionnairePolitics = document.querySelectorAll('.questionnaire-politics');
questionnairePolitics.forEach(politic => {
  politic.addEventListener('click', () => {
    politic.classList.toggle('questionnaire-check_active');
  });
});


// var tabCounter = 1,
//     active = false;
// function tabClick(counter) {
//   $("[data-step]").hide();
//   $("[data-step = " + counter +"]").fadeIn(700);
//    active = false;

//   let  top = $('#questionnaire').offset().top;
//   $('body,html').animate({scrollTop: top}, 1500);
   
//   $('.questionnaire-steps__item').each(function(index) {
//     let itemIndex = index + 1;

//     if(itemIndex <= counter) {
//       $(this).addClass('questionnaire-step_active');
//     } else {
//       $(this).removeClass('questionnaire-step_active');
//     }
//   });

//   if(counter >= 2) {
//     $('.questionnaire-btn__prev').css("display", "flex").hide().fadeIn();
//   } else {
//     $('.questionnaire-btn__prev').fadeOut();
//   }
//   if(counter == 4) {
//     $('.questionnaire-btn__next').hide();
//     $('.questionnaire-sub').css("display", "flex");
//   }
 
// };


let tabCounter = 1;
let active = false;

function tabClick(counter) {
  const dataStepElems = document.querySelectorAll('[data-step]');
  dataStepElems.forEach(elem => elem.style.display = 'none');

  const dataStepElem = document.querySelector(`[data-step="${counter}"]`);
  dataStepElem.style.display = 'block';
  active = false;

  const questionnaireElem = document.getElementById('questionnaire');
  const top = questionnaireElem.offsetTop;
  window.scrollTo({top: top, behavior: 'smooth'});

  const questionnaireStepElems = document.querySelectorAll('.questionnaire-steps__item');
  questionnaireStepElems.forEach((elem, index) => {
    const itemIndex = index + 1;
    if (itemIndex <= counter) {
      elem.classList.add('questionnaire-step_active');
    } else {
      elem.classList.remove('questionnaire-step_active');
    }
  });

  const questionnairePrevBtn = document.querySelector('.questionnaire-btn__prev');
  if (counter >= 2) {
    questionnairePrevBtn.style.display = 'flex';
    questionnairePrevBtn.style.display = 'none';
    questionnairePrevBtn.style.display = 'flex';
  } else {
    questionnairePrevBtn.style.display = 'none';
  }

  const questionnaireNextBtn = document.querySelector('.questionnaire-btn__next');
  const questionnaireSubElem = document.querySelector('.questionnaire-sub');
  if (counter == 4) {
    questionnaireNextBtn.style.display = 'none';
    questionnaireSubElem.style.display = 'flex';
  }
};



// $(".questionnaire-btn__next").click(function(e) {
//   e.preventDefault();
//   tabCounter++;
//   tabClick(tabCounter);
// });

// $(".questionnaire-btn__prev").click(function(e) {
//   e.preventDefault();
//   tabCounter--;
//   tabClick(tabCounter);
// });

// $(".questionnaire-steps__item").click(function(e) {
//   e.preventDefault();
//   let step = $(this).data('index');
//   tabClick(step);
// });


// $(".marriage-true").click(function(e) {
//   $('.marriage-hide').css("display", "grid").hide().fadeIn();
// });

// $(".marriage-false").click(function(e) {
//   $('.marriage-hide').hide();
// });



const nextBtn = document.querySelector('.questionnaire-btn__next');
const prevBtn = document.querySelector('.questionnaire-btn__prev');
const steps = document.querySelectorAll('.questionnaire-steps__item');
// const marriageTrue = document.querySelector('.marriage-true');
// const marriageFalse = document.querySelector('.marriage-false');

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();
  tabCounter++;
  tabClick(tabCounter);
});

prevBtn.addEventListener('click', function(e) {
  e.preventDefault();
  tabCounter--;
  tabClick(tabCounter);
});

steps.forEach(step => {
  step.addEventListener('click', function(e) {
    e.preventDefault();
    let stepIndex = this.dataset.index;
    tabClick(stepIndex);
  });
});

// marriageTrue.addEventListener('click', function(e) {
//   const marriageHide = document.querySelector('.marriage-hide');
//   marriageHide.style.display = 'grid';
//   marriageHide.style.display = 'none';
//   marriageHide.style.display = 'fadeIn()';
// });

// marriageFalse.addEventListener('click', function(e) {
//   const marriageHide = document.querySelector('.marriage-hide');
//   marriageHide.style.display = 'none';
// });





// function validateCounter(counter) {
//   var re = /^\d+$/;
//   return re.test(counter);
// }

// $('.input-counter').on('input', function() {
//   var val = $(this).prop("value");
//   if(validateCounter(val) == false) {
//      $(this).val(
//       function(index, value){
//           return value.substr(0, value.length - 1);
//       });
//    }
// });

// var unsaved = false;

// $(".questionnaire input").change(function(){ //triggers change in all input fields including text type
//     unsaved = true;
// });

// function unloadPage(){
//     if(unsaved){
//         return "Возможно, внесенные изменения не сохранятся.";
//     }
// }

// window.onbeforeunload = unloadPage;

function validateCounter(counter) {
  var re = /^\d+$/;
  return re.test(counter);
}

document.querySelectorAll('.input-counter').forEach(function(input) {
  input.addEventListener('input', function() {
    var val = this.value;
    if(validateCounter(val) == false) {
      this.value = this.value.substr(0, this.value.length - 1);
    }
  });
});

var unsaved = false;

document.querySelectorAll(".questionnaire input").forEach(function(input) {
  input.addEventListener('change', function() {
    unsaved = true;
  });
});

function unloadPage(event) { 
  if(unsaved){
    event.returnValue = "Возможно, внесенные изменения не сохранятся.";
  }
}

window.addEventListener('beforeunload', unloadPage);



// $(".input-date").datepicker();
