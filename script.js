


function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    var homeContent = document.querySelector('.home-content');
    var heroContentWrapper = document.querySelector('.hero-content-wrapper');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Provjeri ima li meni klasu 'active'
    if (menu.classList.contains('active')) {
        // Dodaj klasu 'fade-out' na home-content kako bi nestao
        homeContent.classList.add('fade-out');
        // Onemogući skrolanje
        document.body.classList.add('no-scroll');
        // Sakrij cijeli kontejner hero contenta
        heroContentWrapper.classList.add('fade-out');
    } else {
        // Ukloni klasu 'fade-out' da se pojavi
        homeContent.classList.remove('fade-out');
        // Omogući skrolanje
        document.body.classList.remove('no-scroll');
        // Prikaži cijeli kontejner hero contenta
        heroContentWrapper.classList.remove('fade-out');
    }
}


function preusmeri(putanja) {
  window.location.href = putanja; // Promenite putanju prema željenoj destinaciji
}

function prikaziSlike(parametar) {

  // Sakri sve slike
  document.querySelectorAll('.slike').forEach(function (slike) {
    slike.style.display = 'none';
  });

  // Prikazi slike za odabrani parametar
  document.querySelector(`.slike.${parametar}`).style.display = 'block';

    
}


/* VIBER */
function otvoriViber() {
  var broj = "38765708766";
  var viberUrl = "viber://add?number=" + broj;
  window.open(viberUrl, '_blank');
}



/* GALERIJA */

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
   carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns.forEach(btn => {
   btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
   })
});

const dragStart = (e) => {
   isDragging = true;
   carousel.classList.add("dragging");
   startX = e.pageX;
   startScrollLeft = carousel.scrollLeft;
} 

const dragging = (e) => {
   if(!isDragging) return;
   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
   isDragging = false;
   carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
   // If the carousel is at the beginning, scroll to the end
   if(carousel.scrollLeft === 0) {
       carousel.classList.add("no-transition");
       carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
       carousel.classList.remove("no-transition");
   }
   // If the carousel is at the end, scroll to the beginning
   else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
       carousel.classList.add("no-transition");
       carousel.scrollLeft = carousel.offsetWidth;
       carousel.classList.remove("no-transition");
   }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);


