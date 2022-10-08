new Swiper('.swiper', {
	navigation: {
		nextEl: '.arrowNext',
		prevEl: '.arrowPrev'
	},
	simulateTouch: true,
	autoHeight: true,
	loop: true
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

// Menu Burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_menuActive");
		menuBody.classList.toggle("_menuActive");
	})
}

// Smooth Scroll
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")

if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick)
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains("_menuActive")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_menuActive");
				menuBody.classList.remove("_menuActive");
			}
			
			e.preventDefault();
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
		}
	}
}