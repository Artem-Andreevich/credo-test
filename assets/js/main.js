window.addEventListener('load', function(){

	// GLOBAL ENV //
	const body = document.querySelector('body')


	// POPULAR SLIDER INIT //
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 8,
		grabCursor: true,
		breakpoints: {
			756: {
			  spaceBetween: 20
			},
			991: {
				spaceBetween: 32
			  },
		  },
	});
	// END POPULAR SLIDER INIT //



	// BURGER MENU OPEN //
	const burgerButton = document.querySelector('.js-burger')
	const burgerMenu = document.querySelector('.js-burger-menu')
	const burgerMenuClose = document.querySelectorAll('.js-burger-menu-close')

	burgerButton.addEventListener('click', function(){
		burgerMenu.classList.add('open')
		body.classList.add('open-menu')

	})
	burgerMenuClose.forEach( btn => {
		btn.addEventListener('click', function(){
			burgerMenu.classList.remove('open')
			body.classList.remove('open-menu')
		})
	})
	// END BURGER MENU OPEN //

	

})