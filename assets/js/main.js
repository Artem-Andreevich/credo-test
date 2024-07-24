window.addEventListener('load', function(){

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

	const body = document.querySelector('body')
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
	

})