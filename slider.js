let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let btn1 = document.querySelector(".prev");
let btn2 = document.querySelector(".next");
let update = 1;
const totalSlides = slide.length;

// function nextSlide() {
//     slide.forEach((element) => {
//         if (update< totalSlides) {
//             element.style.transform = `translateX(-${update * 300}px)`;
//         }
//         else {
//             element.style.transform = `translateX(0px)`;
//           update = 0; 
//         }
//     }) ;
//    update++;
// }

function nextSlide() {
    if (update < totalSlides) {
        slides.style.transform = `translateX(-${update * 300}px)`;
        update = update+1;
    }
    else {
        slides.style.transform = `translateX(0px)`;
        slides.style.transition = "all 2.3s ease"
        update = 0;
    }
}

// setInterval(() => nextSlide(), 1200);
btn2.addEventListener("click",nextSlide)



function prevSlide() {
    if (update>0) {
        update--;
    }else{
        update = totalSlides-1
    }
    slides.style.transform = `translateX(-${update * 300}px)`;
     slides.style.transition = "all 1.2s ease"
}

// setInterval(() => prevSlide(), 1200);
btn1.addEventListener("click", prevSlide);