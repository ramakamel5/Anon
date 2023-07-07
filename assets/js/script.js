'use strict';
// modal var
const modal = document.querySelector('[data-modal]');
const modalclose = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

modalclose.addEventListener('click' , ()=>{
    modal.classList.add('close');
});
modalCloseOverlay.addEventListener('click', ()=>{
    modal.classList.add('close');
})

//notification-toast
const notificationToast = document.querySelector('[data-toast]');
const toastClose = document.querySelector('[data-toast-close]');

toastClose.addEventListener('click' , ()=>{
    notificationToast.classList.add('close');
});



// mobile-bottom-navigation
const mobileNavMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileBottomNavBtn= document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileNavCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');


for (let i = 0; i < mobileBottomNavBtn.length; i++) {
    const mobileNavMenuCloseFun = function () {
        mobileNavMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileBottomNavBtn[i].addEventListener('click' , ()=>{
        mobileNavMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileNavCloseBtn[i].addEventListener('click', mobileNavMenuCloseFun);
    overlay.addEventListener('click', mobileNavMenuCloseFun);
    
}


// submenu

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener('click', function () {

        const clickedBTn = this.nextElementSibling.classList.contains('active');
        console.log(clickedBTn);
        for (let i = 0; i < accordion.length; i++) {
            if (clickedBTn) break;
            if (accordion[i].classList.contains('active')) {

                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');

            }
        }
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
        });
}

