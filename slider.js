let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let curentslide = 0; 
let width = 300; 
let length = slide.length; //length = 5 (index = 0,1,2,3,4)
let btn1 = document.querySelector(".prev");
let btn2 = document.querySelector(".next");


function updateSlidePosition() {
    slides.style.transform = `translateX(-${curentslide * width}px)`;
}

function nextSlide() {
    if (curentslide < length) {
        curentslide++;
    }
    updateSlidePosition();

    if (curentslide === length-1) {  1.//if we remove this it will add a extra empty slide leading to a unexpected behaviour(meaning currentslide will go on to 5 slides(but it should go to 0 1 2 3 4))
        btn2.removeEventListener("click", nextSlide);
    }
        btn1.addEventListener("click", prevSlide);
}

function prevSlide() {
    if (curentslide > 0) {
        curentslide--;
    } else {
        curentslide = length-1; // here also the same as 1st comment
    }
    updateSlidePosition();

    //to check if we're on the first slide
    if (curentslide === 0) {
        btn1.removeEventListener("click", prevSlide);
    }
        btn2.addEventListener("click", nextSlide);
}

btn2.addEventListener("click", nextSlide);
btn1.addEventListener("click", prevSlide);
