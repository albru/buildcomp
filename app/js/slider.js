document.addEventListener("DOMContentLoaded", function (event) {
  
  (function slider() {
    const left = document.querySelector('.js-slider-left');
    const right = document.querySelector('.js-slider-right');
    const items = document.querySelector('.js-slider-items');
    const slides = Array.from(document.querySelectorAll('.ourcustomers-item'));
    const itemWidth = document.querySelector('.ourcustomers-slider__wrap').offsetWidth;
    const slidesDesc = Array.from(document.querySelectorAll('.slide-desc-JS'));
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    const minRight = 0;
    let slidesDescCounter = 0;
    let maxRight = itemWidth * 2;
    let step = itemWidth;
    slidesDesc[1].style.display = 'none';
    slidesDesc[2].style.display = 'none';

    slides.forEach(item => {
      item.style.width = itemWidth + 'px';
    });

    let currentRight = 0;

    items.style.right = currentRight;

    function moveRight(direction) {
      if (slidesDescCounter < 2) {
        slidesDesc[slidesDescCounter].style.display = 'none';
        slidesDescCounter = slidesDescCounter + 1;
        slidesDesc[slidesDescCounter].style.display = 'initial';
      } 
      if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight + 'px';
        left.style.opacity = 1;
        left.style.cursor = 'pointer';
      }
      if (currentRight === maxRight) {
        right.style.opacity = .2;
        right.style.cursor = 'initial';
      }
      else {
        return null;
      }
    };

    function moveLeft(direction) {
      if (slidesDescCounter > 0) {
        slidesDesc[slidesDescCounter].style.display = 'none';
        slidesDescCounter = slidesDescCounter - 1;
        slidesDesc[slidesDescCounter].style.display = 'initial';
      }
      if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight + 'px';
        right.style.opacity = 1;
        right.style.cursor = 'pointer';
      }
      if (currentRight === minRight) {
        left.style.opacity = .2;
        left.style.cursor = 'initial';
      }
      else {
        return null;
      }
    };

    right.onclick = () => {
      requestAnimationFrame(moveRight)
    };
    left.onclick = () => {
      requestAnimationFrame(moveLeft)
    };
  })();
});
