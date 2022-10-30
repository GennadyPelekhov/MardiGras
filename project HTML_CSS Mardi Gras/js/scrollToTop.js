window.onscroll = function () { scrollFunction() };
let arrowTop = document.getElementById("up__arrow");
let rootElement = document.documentElement;

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
}
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
arrowTop.addEventListener("click", scrollToTop);