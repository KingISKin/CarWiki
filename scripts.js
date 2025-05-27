let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1

function setSlider() {
  let itemOld = container.querySelector('.list .item.active')
  itemOld.classList.remove('active')

  let dotsOld = indicator.querySelector('ul li.active')
  dotsOld.classList.remove('active')

  dots[active].classList.add('active')
  indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
  list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosition ? 0 : active + 1
  setSlider()
  itens[active].classList.add('active')
}


prevButton.onclick = () => {
  list.style.setProperty('--calculation', -1)
  active = active - 1 < firstPosition ? lastPosition : active - 1
  setSlider()
  itens[active].classList.add('active')
}

let autoPlay = setInterval(() => {
  nextButton.onclick()
}, 6000)


document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".alta-caixa");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const cardWidth = carouselContainer.querySelector(".alta-card").offsetWidth;

  function next() {
    carouselContainer.style.transition = "transform 0.5s ease-in-out";
    carouselContainer.style.transform = `translateX(-${cardWidth}px)`;

    carouselContainer.addEventListener("transitionend", () => {
      carouselContainer.appendChild(carouselContainer.firstElementChild);
      carouselContainer.style.transition = "none";
      carouselContainer.style.transform = "translateX(0)";
    }, { once: true });
  }

  function prev() {
    carouselContainer.insertBefore(carouselContainer.lastElementChild, carouselContainer.firstElementChild);
    carouselContainer.style.transition = "none";
    carouselContainer.style.transform = `translateX(-${cardWidth}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out";
        carouselContainer.style.transform = "translateX(0)";
      });
    });
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Chama 'next' a cada 4 segundos automaticamente
  setInterval(() => {
    next();
  }, 4000);
});


  const cartBtn = document.getElementById('cart-btn');
  const cartWindow = document.getElementById('cart-window');

  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartWindow.style.display = (cartWindow.style.display === 'block') ? 'none' : 'block';
  });

  window.addEventListener('click', (e) => {
    if (!cartWindow.contains(e.target) && !cartBtn.contains(e.target)) {
      cartWindow.style.display = 'none';
    }
  });




