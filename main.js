
const myCarousel = document.querySelector('#carouselArte');
if (myCarousel) {
  new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel'
  });
}


async function loadFragment(id, file) {
  const res = await fetch(file);
  if (!res.ok) {
    console.error("Error cargando", file, res.status);
    return;
  }
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

loadFragment("header", "header.html");
loadFragment("footer", "footer.html");

