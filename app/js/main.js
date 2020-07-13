$(document).ready(function () {

	$('.intro__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/intro/arrow-prev.png"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/intro/arrow-next.png"></button>',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
	});
	$('.key__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left--key"><img src="images/key/arrow-prev.png"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right--key"><img src="images/key/arrow-next.png"></button>',
		infinite: true,
		autoplay: false,
		dots: false,
	});
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
		$(this)
			.addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	});

	$('.before__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left--before"><img src="images/before/circled-left.png"></button>',
		nextArrow: '<button class="slider-btn slider-btn__right--before"><img src="images/before/circled-right.png"></button>',

	});

	let previousElement = document.querySelector('#before__tab-0');
	$('.before__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (previousElement) {
			previousElement.setAttribute('class', 'before__tab')
		}
		let element = document.querySelector('#before__tab-' + currentSlide);
		element.setAttribute('class', 'before__tab-active');
		previousElement = element;
		console.log(element);
	});

	/* 
		let tabs = document.querySelector('.before__tabs');
		tabs.addEventListener('click', function (event) {
			if (event.target.tagName == 'LI') {
				let section = document.querySelector('#before-section-' + event.target.id[event.target.id.length - 1]);
				console.log(section);
				section.setAttribute('class', 'slick-slide slick-current slick-active');
				section.setAttribute('aria-hidden', 'false')
				previousElement.classList.remove('before__tab-active');
				event.target.classList.add('before__tab-active');
				previousElement = event.target;
			}
		}); */

});