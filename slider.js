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
    if (curentslide < length-1) {  //On each click, curentslide increments by 1 as long as it is less than length - 1 (which is 4 in this case).
        // When curentslide reaches 4, it no longer increments, and the slide stays on the last slide.it will reach 4 but not 5.
        curentslide++;
        btn1.removeAttribute("disabled",true)
    }
    updateSlidePosition();
    
  //to check if we're on the last slide
    if (curentslide === length-1) {  //curentslide === length then the condition will be false and eventlistener will not be removed.
        btn2.removeEventListener("click", nextSlide);
        btn2.setAttribute("disabled",true)
    }
        btn1.addEventListener("click", prevSlide);
}

function prevSlide() {
    if (curentslide > 0) { //checking from 1st index
        curentslide--;
        btn2.removeAttribute("disabled",true)
    } else {
        curentslide = length-1; //we are on first slide[0] to go on fouth slide we hav to multiply last slide index with the width (which is -4*300 = 1200 in negative)
    }
    updateSlidePosition();

    //to check if we're on the first slide
    if (curentslide === 0) {
       btn1.removeEventListener("click",prevSlide)
       btn1.setAttribute("disabled",true)
    }
        btn2.addEventListener("click", nextSlide);
}

btn2.addEventListener("click", nextSlide);
btn1.addEventListener("click", prevSlide);

