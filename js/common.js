new Swiper('.swiper', {
	navigation: {
		nextEl: '.subHeaderSlider__arrowNext',
		prevEl: '.subHeaderSlider__arrowPrev'
	},
});

$(document).ready(function () {
	//=== tabs
	$('.tabs__triggers-item').click(function (e) {
		e.preventDefault();
		
		$('.tabs__triggers-item').removeClass('tabs__triggers-item_active');
		$('.tabs__content-item').removeClass('tabs__content-item_active');
		
		$(this).addClass('tabs__triggers-item_active');
		$($(this).attr('href')).addClass('tabs__content-item_active');
	});
	
	$('.tabs__triggers-item:first').click();
	//===
});