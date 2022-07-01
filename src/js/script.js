$(function () {
	// плавная прокрутка к блокам по ссылкам #
	$('a[href^="#"]').on('click', function () {
		const _href = $(this).attr('href');
		$('.menu').removeClass('active');
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' }, 1000);
		return false;
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 400) {
			$('#gotop').attr('hidden', false);
		} else {
			$('#gotop').attr('hidden', true);
		}
	});

	$('#gotop').on('click', function () {
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
