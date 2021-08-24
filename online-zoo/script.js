var acc = document.getElementsByClassName('accordion');
var acc1 = document.getElementsByClassName('accordion1');
var i;
var j;



for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

for (j = 0; j < acc1.length; j++) {
    acc1[j].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel1 = this.nextElementSibling;
        if (panel1.style.maxHeight) {
            panel1.style.maxHeight = null;
        } else {
            panel1.style.maxHeight = panel1.scrollHeight + "px";
        }
    });
}

//hamburger menu + icon change
const burger = document.querySelector('.nav__burger')
const burgerMenu = document.querySelector('.nav__burger__menu');

function toggleMenu() {
    burgerMenu.classList.toggle("open");
}

burger.onclick = toggleMenu;

burger.addEventListener('click', (myFunction) => {
    burger.classList.toggle("change");
})

//carousel
const gap = 16;
const carousel = document.querySelector(".carousel");
const content = document.querySelectorAll(".content");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "inline-block";
    }

});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);

    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "inline-block";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

