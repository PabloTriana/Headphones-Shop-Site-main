window.onload = function () {
    //Open Menu on Resposive
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('#navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    //Remove Menu on Click any Menu Link
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    //Header on scroll color change
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle("shadow", window.scrollY > 0);
    });
}









