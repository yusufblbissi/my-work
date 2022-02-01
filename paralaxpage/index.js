/*variabls for the project */
let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountain3 = document.querySelector("#mountain3");
let mountain4 = document.querySelector("#mountain4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let nouvil = document.querySelector(".nouvil");
/*functions for event  images*/
window.onscroll = function() {
    let value = scrollY;
    console.log(value);
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        nouvil.style.fontSize = 67 + 'px';
        nouvil.style.position = 'fixed';
        if (scrollY >= 480) {
            nouvil.style.display = 'none';
        } else {
            nouvil.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(rgb(0 116 184), rgb(186 202 98))';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(rgb(20, 0, 22), rgb(24, 0, 53))';
        }
    }

}