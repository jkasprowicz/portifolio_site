// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(sec => {
        let top = sec.offsetTop - 100;
        let bottom = top + sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < bottom) {
            // Activate corresponding navbar link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href='#${id}']`).classList.add('active');

            // Activate section for animation
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollPosition > 100);

    // Remove toggle icon and navbar active class when clicking navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Animation for footer on scroll
    let footer = document.querySelector('footer');
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.scrollHeight;

    footer.classList.toggle('show-animate', scrollPosition + windowHeight >= documentHeight);
};
