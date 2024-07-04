const lightDarkMode = document.querySelectorAll('.light-dark-mode');

lightDarkMode.forEach((lightDarkModeClick) => 
    lightDarkModeClick.addEventListener('click', () => {
        const html = document.querySelector('html');
        html.classList.toggle('light-mode');
    }
));

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const navButton = document.querySelectorAll('.nav-button');

navButton.forEach((navBtn) => 
    navBtn.addEventListener('click', () => {
        const mobileHeader = document.querySelector('.mobile-header');
        const location = document.querySelector('.location');
        const footerMain = document.querySelector('.footer-main')
        location.classList.toggle('disable');
        footerMain.classList.toggle('disable');
        mobileHeader.classList.toggle('active');
    }
));

const closeNav = document.querySelectorAll('.close-nav');

closeNav.forEach((closeNavBtn) => 
    closeNavBtn.addEventListener('click', () => {
        const mobileHeader = document.querySelector('.mobile-header');
        const location = document.querySelector('.location');
        const footerMain = document.querySelector('.footer-main')
        location.classList.toggle('disable');
        footerMain.classList.toggle('disable');
        mobileHeader.classList.remove('active');
    }
));


function scrollToMiddle(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollTo = elementTop - (viewportHeight / 2) + (elementRect.height / 2);
    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
};