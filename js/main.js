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
		prevArrow: '<button class="slider-btn slider-btn__left"><img src=""></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><img src=""></button>',

	});

	$('ul.before__tabs').on('click', 'li:not(.before__tab-active)', function () {
		$(this)
			.addClass('before__tab-active').siblings().removeClass('before__tab-active')
			.closest('div.container').find('div.before__slider-section').removeClass('before__slider-section--active').eq($(this).index()).addClass('before__slider-section--active');
	});

});