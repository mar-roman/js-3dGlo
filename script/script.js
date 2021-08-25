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
});
