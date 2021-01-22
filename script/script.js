window.addEventListener('DOMContentLoaded', function() {
    'use strict';    
    //Timer 

    function countTimer(deadline) {
        let TimerHours = document.querySelector('#timer-hours');
        let TimerMinutes = document.querySelector('#timer-minutes');
        let TimerSeconds = document.querySelector('#timer-seconds');

        
    function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor(timeRemaining / 60 / 60);
        return {timeRemaining, hours, minutes, seconds};      
    }

    function updateClock(){
        let timer = getTimeRemaining();       
        TimerHours.textContent = timer.hours;
        TimerMinutes.textContent = timer.minutes;
        TimerSeconds.textContent = timer.seconds;

        if(timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    }

    updateClock();

    } 

    countTimer('10 febrary 2021');
    
});