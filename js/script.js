function replaceName() {
    let name = prompt("Please input ur name!", "");
    document.getElementById("name").innerHTML = name
}

replaceName();

let slideIndex = 1

setInterval(function() {
    plusIndex(1)
}, 2000)

function plusIndex(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    let autoSlide = document.getElementsByClassName("imgList")
    let i;
    if (index > autoSlide.length) {slideIndex = 1}
    if (index < autoSlide.length) {slideIndex = autoSlide.length}

    for (i=0; i < autoSlide.length; i++ ) {
        autoSlide[i].style.display = "none"
    }

    autoSlide[slideIndex-1].style.display = "block"
}