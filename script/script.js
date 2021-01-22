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

    //Menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        
        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };

    toggleMenu();

    //Popup

    const togglePopup = () => {
        const popup =  document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });


    };

    togglePopup();
    
});

