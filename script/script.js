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

        popup.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
            }
        });

    };

    togglePopup();

    // Табы 

    const tabs = () => {

        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toogleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++) {
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

            tabHeader.addEventListener('click', (event) => {
                let target = event.target;

                while(target !== tabHeader){

                if(target.classList.contains('service-header-tab')){
                    tab.forEach((item, i) => {
                        if(item === target){
                            toogleTabContent(i);   
                        }
                    });
                    return;
                }
                target = target.parentNode;
            }
        });


    };
    
        tabs();
});

