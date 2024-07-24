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



	// ADD TO FAVORITES //
	const addToFavorites = document.querySelectorAll('.js-addto-fav')
	const headerFavCount = document.querySelector('.js-fav-count')
	localStorage.setItem('fav-count', 0);

	addToFavorites.forEach( btn => {
		btn.addEventListener('click', function(){
			let favCount = +localStorage.getItem('fav-count')

			if(!btn.classList.contains('active')){
				btn.classList.add('active')
				localStorage.setItem('fav-count', favCount + 1);
			} else {
				btn.classList.remove('active')
				localStorage.setItem('fav-count', favCount - 1);
			}

			headerFavCount.innerText = `${localStorage.getItem('fav-count')}`
		})
	})
	// END ADD TO FAVORITES //

	

})