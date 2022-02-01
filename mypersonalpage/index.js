window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("header").style.backgroundColor = "white"
        document.getElementById("header").style.transform = "scale(1.1)"

    } else {
        document.getElementById("header").style.backgroundColor = ""
    }
}