var acc = document.getElementsByClassName("accordion");
var acc1 = document.getElementsByClassName("accordion1");
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

//hamburger menu

function myFunction(x) {
    x.classList.toggle("change");
}