window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Timer
  function countTimer(deadline) {
		let timerHours = document.querySelector('#timer-hours'),
				timerMinutes = document.querySelector('#timer-minutes'),
				timerSeconds = document.querySelector('#timer-seconds');
	
		function getTimeRemaining(){
			let dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = '00',
				minutes = '00',
				hours = '00';

				if(timeRemaining > 0){
					seconds = Math.floor(timeRemaining % 60);
					if(seconds < 10){
						seconds = '0' + seconds;
					}
					minutes = Math.floor((timeRemaining / 60) % 60);
					if(minutes < 10){
						minutes = '0' + minutes;
					}
					hours = Math.floor(timeRemaining / 60 / 60) % 24;
					if(hours < 10){
						hours = '0' + hours;
					}
				}
				
			return {hours, minutes, seconds, timeRemaining};
		}

		function updateClock(){
			let timer = getTimeRemaining();

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if(timer.timeRemaining > 0){
				setTimeout(updateClock, 1000);
			}
		}
		updateClock();
	}
	countTimer('01 september 2021');

	// Menu
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
					menu = document.querySelector('menu'),
					closeBtn = document.querySelector('.close-btn'),
					menuItems = menu.querySelectorAll('ul>li');
		
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);

		menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
	};

	toggleMenu();

	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
					popupBtn = document.querySelectorAll('.popup-btn'),
					popupClose = document.querySelector('.popup-close');

		popupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';

				if(window.screen.width >= 768){
					popup.style.opacity = 0;
					let opacity = 0;
					let anim = setInterval(function(){
						if(opacity === 1){
							clearInterval(anim);
						} else {
							opacity += 0.2;
							popup.style.opacity = opacity;
						}
					}, 70);
				}
			});
		});

		popupClose.addEventListener('click', () => {
			popup.style.display = 'none';
		});
	};

	togglePopUp();

	//scroll
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function(e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

});
