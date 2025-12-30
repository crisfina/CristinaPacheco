const myCarousel = document.querySelector('#carouselArte');
if (myCarousel) {
  new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel'
  });
}

import { loadFragment } from "./botones.js";

loadFragment("header", "header.html");
loadFragment("footer", "footer.html");


