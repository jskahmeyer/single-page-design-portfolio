import './src/styles/style.scss'

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');

let direction;
let sliderTransform;
let screenWidth;

window.addEventListener("resize", function(){
  screenWidth = window.innerWidth;

  if(screenWidth > 600) {
    sliderTransform = 570;
  } else {
    sliderTransform = 285;
  }
})

arrowLeft.addEventListener('click', function() {
  direction = 1;
    slider.style.transform = `translateX(${sliderTransform}px)`;
})

arrowRight.addEventListener('click', function() {
  direction = -1;
    slider.style.transform = `translateX(-${sliderTransform}px)`;
})

slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }
    
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';

    setTimeout(function() {
        slider.style.transition = 'all 0.3s';
    })   
})
