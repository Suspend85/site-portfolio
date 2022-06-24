$(document).ready(function () {
	// прокрутка к блокам
	$(document).on('click', '.promo__btns a', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);
	});
	// прокрутка из меню к блокам
	$(document).on('click', '.menu__link a', function (e) {
		e.preventDefault();
		$('.menu').removeClass('active');
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1000);
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	const button = $('#gotop');

	button.on('click', function () {
		$('body, html').animate({ scrollTop: 0 }, 800);
		return false;
	});
});

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	closeOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
	menu.classList.remove('active');
});
window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape') {
		menu.classList.remove('active');
	}
});

// передаем значение счетчика в значение ширины линии метрики.
const counters = document.querySelectorAll('.tools__metrics-percent'),
	lines = document.querySelectorAll('.tools__metrics-graph span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
