var headerwrap = document.querySelector('.header-wrap');
window.addEventListener('load', function () {
    if (window.pageYOffset > 0) {
        headerwrap.classList.add("sticky");
    } else {
        headerwrap.classList.remove("sticky");
    }
});
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        headerwrap.classList.add("sticky");
    } else {
        headerwrap.classList.remove("sticky");
    }
});

// menu toggle
var togglebtn = document.querySelector('.toggle-menu > a');
var toggleMenu = document.querySelector('.head-menu');
togglebtn.addEventListener('click', function() {
  this.classList.toggle('active');
  toggleMenu.classList.toggle('active');
  if (!toggleMenu.classList.contains('active')) {
    toggleMenu.classList.add('reverse');
    setTimeout(function() {
      toggleMenu.classList.remove('reverse');
    }, 1600);
  }
});


var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});