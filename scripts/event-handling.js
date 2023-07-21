window.addEventListener('DOMContentLoaded', () => {
    console.log('event-handling.js script was successfully loaded');
    const menuIcon = document.querySelector('.hamburger');
    menuIcon.addEventListener('click', event => {
        console.log('Menu clicked');
        event.stopPropagation();
        document.querySelector('.nav-menu').classList.remove('nav-menu--hidden');
    });

    window.addEventListener('click', () => {
        console.log('HTML document clicked');
        document.querySelector('.nav-menu').classList.add('nav-menu--hidden');
    });

    // const searchIcon = document.querySelector('.fa.fa-search');
    // searchIcon.addEventListener('click', () => {
    //     console.log('Search clicked');
    //     const modal = document.querySelector('.search-modal');
    //     modal.classList.toggle('search-modal--hidden');
    // });
});
