// $(document).ready(function() {
// 	 $("body").removeClass("load");

// 	 // AJAX отправка формы 
// 	 $(".submit-form").submit(function(e) {
// 	      e.preventDefault()
// 	      var form_data = $(this).serialize(); //собераем все данные из формы
// 	      $.ajax({
// 	      type: 'POST', //Метод отправки
// 	      url: 'mail.php', //путь до php фаила отправителя
// 	      data: form_data,
//               success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
//                 frameClose();
//                 swal({
// 				  title: 'Заявка отправлена!',
// 				  icon: 'success',
// 				  confirmButtonText: 'Ок'
// 				});
//               }
// 	      });
// 	  });

//  });


// Шаблон скрипта для slick slider

// $('.slider').slick({
// 	infinite: true,
// 	slidesToShow: 3, 
// 	prevArrow: '.prev',
// 	nextArrow: '.next',
// 	dots: true,
// 	appendDots: '.dots',
// 	adaptiveHeight: true,

// 	// код для центрированного slick slider

// 	centerMode: true,
// 	centerPadding: '60px',

// 	// код для адаптива slick slider
// 	responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//       }
//     },
//   ]

// });


// Функция закрытия попапов
// let frameClose = () => {
// 	$('.popup-frame').fadeOut(); 
// 	$('.popup').fadeOut(); 
// 	$('body').removeClass('open-frame');
// }


// Код для работы попапа по умолчанию (Не относится к попапам из дизайна)
// $('.js-popup').click(function(e) {
// 	e.preventDefault();
// 	let popupItem = $(this).data('popup');
// 	$('body').addClass('open-frame');
// 	$('.popup-frame').css("display", "flex").hide().fadeIn();
// 	$('.popup[data-popup = ' + popupItem +']').fadeIn();
// });
// $('.popup-default-item p').click(function() {
// 	$(this).siblings('input').focus();
// });

// $('.popup-default-item input').focus(function() {
// 	$(this).parent().addClass('active-default-input');
// });

// $('.popup-default-item input').blur(function() {
// 	if($(this).val().length == 0) {
// 		$(this).parent().removeClass('active-default-input');
// 	}
// });

// Событие закрытия попапа
// $(".popup-close").click(function(){
//    frameClose();
// });

// Маска для input с номером телефона
// $(".input-mask").mask("+380 (99) 999-99-99");

// $(".input-date").mask("99.99.99");

// Событие смены атрибута "checked" у стилизованных checkbox или radio
// $('.js-checkbox').click(function() {
// 	let checkBoxes = $(this).find('input');
//     checkBoxes.prop("checked", !checkBoxes.prop("checked"));
// });

// const jsCheckbox = document.querySelector('.js-checkbox');
// jsCheckbox.addEventListener('click', function() {
//   const checkBoxes = this.querySelectorAll('input');
//   checkBoxes.forEach(function(checkbox) {
//     checkbox.checked = !checkbox.checked;
//   });
// });


// const checkboxElems = document.querySelectorAll('.js-checkbox');
// checkboxElems.forEach(elem => {
//   elem.addEventListener('click', () => {
//     const checkBoxes = elem.querySelectorAll('input');
//     checkBoxes.forEach(checkBox => {
//       checkBox.checked = !checkBox.checked;
//     });
//   });
// });

// console.log(checkboxElems)


// Код для плавного перехода по якорным ссылкам
// $(".anchor").click(function (e) {
// 	e.preventDefault();
// 	let href = $(this).attr('href'),
// 	top = $(href).offset().top;
// 	$('body,html').animate({scrollTop: top}, 1500);
// 	frameClose();
//  });

// const anchorElems = document.querySelectorAll('.anchor');
// anchorElems.forEach(anchor => {
//   anchor.addEventListener('click', (event) => {
//     event.preventDefault();
//     const href = anchor.getAttribute('href');
//     const top = document.querySelector(href).offsetTop;
//     window.scrollTo({
//       top: top,
//       behavior: 'smooth'
//     });
//     frameClose();
//   });
// });






// Событие закрытия попапов по клику в свободное место
// $(".target-frame").click(function (e){ // событие клика по веб-документу
// 	var popup = $(".target-box"); // тут указываем ID элемента
// 	if (!popup.is(e.target) // если клик был не по нашему блоку
// 		&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
// 		frameClose();
// 	}
// });

// document.addEventListener('click', function (event) {
//   const popup = document.querySelector('.target-box');
//   const targetFrame = document.querySelector('.target-frame');

//   if (!popup.contains(event.target) && targetFrame !== event.target) {
//     frameClose();
//   }
// });



// Выполнение скрипта если пользователь покинул сайт
// var stop = false
// window.onmouseout=function(event){ 
//   if(event.clientY < 0 && stop == false) {

//   	// Код скрипта	
	
//   	stop = true;
//   }
// }

