const navBtn = document.querySelector('.nav-btn')
const navBtnIcon = document.querySelector('.nav-btn-icon')
const mobileNav = document.querySelector('.mobile-nav')
const bodyScroll = document.body

// Клик по кнопке
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
    bodyScroll.classList.toggle('no-scroll');
})


// Клик по окну за пределами навигации
window.addEventListener('click', function () {
    if (bodyScroll.classList.contains('no-scroll')) {
        bodyScroll.classList.toggle('no-scroll');
        toggleMobileNav();
    }
})

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
})

function toggleMobileNav() {
    navBtn.classList.toggle('nav-btn-close');
    mobileNav.classList.toggle('mobile-nav-active');
    navBtnIcon.classList.toggle('nav-btn-active');
}