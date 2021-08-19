let myCarousel = document.querySelector('#carouselReviews');
let carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
});

let sideNav = document.querySelector('.sidenav');

function burgerChange(x) {
    x.classList.toggle("change");
    sideNav.classList.toggle("spoilered");
  }