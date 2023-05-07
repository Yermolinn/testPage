$('.language').click(function() {
    $(this).find('.language-list').slideToggle();
});

// $('.language').hover(
    
//     function() {

//     },
//     function() {
//          $(this).find('.language-list').slideUp();
//     }
// );
$('.vacancies-filter__active').click(function() {
  $('.vacancies-filter__select').find('.vacancies-filter__list').slideUp();
  if($(this).parent().hasClass('vacancies-filter__select_active') == true) {
   
    $('.vacancies-filter__select').removeClass('vacancies-filter__select_active');
  } else {
    
    $(this).siblings('.vacancies-filter__list').slideToggle();
    $(this).parent().addClass('vacancies-filter__select_active');
  }
});

// $('.vacancies-filter__select').hover(
    
//   function() {

//   },
//   function() {
//        $(this).find('.vacancies-filter__list').slideUp();
//   }
// );

$("body").click(function (e){ // событие клика по веб-документу
	var popup = $(".language, .vacancies-filter__select"); // тут указываем ID элемента
	if (!popup.is(e.target) // если клик был не по нашему блоку
		&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.language').find('.language-list').slideUp();
      $('.vacancies-filter__select').find('.vacancies-filter__list').slideUp();
	}
});
$('.vacancies-filter__list li').click(function() {
  let filterContent = $(this).html();
  $(this).parent().siblings('.vacancies-filter__active').children('p').html(filterContent);
  $(this).parent().slideUp();
});

$('.vacancies-more').click(function(e) {
  e.preventDefault();
  let filterContent = $(this).html();
  $('.vacancies-item_hide').css("display", "flex").hide().fadeIn();
  $(this).hide();
});


$('.reviews-slider').slick({
	infinite: true,
	slidesToShow: 4, 
	prevArrow: '.reviews-prev',
	nextArrow: '.reviews-next',
	dots: true,
	appendDots: '.reviews-dots',
	responsive: [
    {
      breakpoint: 1251,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
  ]
});


$('.gallery-slider').slick({
	infinite: true,
	slidesToShow: 3, 
	prevArrow: '.gallery-prev',
	nextArrow: '.gallery-next',
	dots: true,
	appendDots: '.gallery-dots',
	centerMode: true,
	centerPadding: '315px',
	responsive: [
    {
      breakpoint: 1351,
      settings: {
        slidesToShow: 3,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px',
      }
    },
  ]

});

// file Photo
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('.questionnaire-photo__frame img').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
  }
}

$(".questionnaire-photo__save input").change(function () {
  readURL(this);
});

$('.burger').click(function() {
  $(this).toggleClass('burger_active');
  $('.header-mob').slideToggle();
});

$('.questionnaire-messege').click(function() {
  $(this).toggleClass('questionnaire-messege__check_active');
});

// $('.check-child_true').click(function() {
//   if($(this).hasClass('questionnaire-check_active') == false) {
//     $(childBlock).appendTo('.questionnaire-copy_child');
//   }
// });

$('.questionnaire-check').click(function() {
  $(this).siblings('.questionnaire-check').removeClass('questionnaire-check_active');
  $(this).addClass('questionnaire-check_active');
});
$('.questionnaire-checkbox').click(function() {
  $(this).toggleClass('questionnaire-check_active');
});

$('.questionnaire-politics').click(function() {
  $(this).toggleClass('questionnaire-check_active');
});


var tabCounter = 1,
    active = false;
function tabClick(counter) {
  $("[data-step]").hide();
  $("[data-step = " + counter +"]").fadeIn(700);
   active = false;

  let  top = $('#questionnaire').offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
   
  $('.questionnaire-steps__item').each(function(index) {
    let itemIndex = index + 1;

    if(itemIndex <= counter) {
      $(this).addClass('questionnaire-step_active');
    } else {
      $(this).removeClass('questionnaire-step_active');
    }
  });

  if(counter >= 2) {
    $('.questionnaire-btn__prev').css("display", "flex").hide().fadeIn();
  } else {
    $('.questionnaire-btn__prev').fadeOut();
  }
  if(counter == 4) {
    $('.questionnaire-btn__next').hide();
    $('.questionnaire-sub').css("display", "flex");
  }
 
}; 


$(".questionnaire-btn__next").click(function(e) {
  e.preventDefault();
  tabCounter++;
  tabClick(tabCounter);
});

$(".questionnaire-btn__prev").click(function(e) {
  e.preventDefault();
  tabCounter--;
  tabClick(tabCounter);
});

$(".questionnaire-steps__item").click(function(e) {
  e.preventDefault();
  let step = $(this).data('index');
  tabClick(step);
});


$(".marriage-true").click(function(e) {
  $('.marriage-hide').css("display", "grid").hide().fadeIn();
});

$(".marriage-false").click(function(e) {
  $('.marriage-hide').hide();
});

function validateCounter(counter) {
  var re = /^\d+$/;
  return re.test(counter);
}

$('.input-counter').on('input', function() {
  var val = $(this).prop("value");
  if(validateCounter(val) == false) {
     $(this).val(
      function(index, value){
          return value.substr(0, value.length - 1);
      });
   }
});

var unsaved = false;

$(".questionnaire input").change(function(){ //triggers change in all input fields including text type
    unsaved = true;
});

function unloadPage(){ 
    if(unsaved){
        return "Возможно, внесенные изменения не сохранятся.";
    }
}

window.onbeforeunload = unloadPage;


// $(".input-date").datepicker();
