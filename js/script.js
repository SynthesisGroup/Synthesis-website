var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 40,
    setWrapperSize: true,
    slidesOffsetBefore: 5,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    // init: false,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    }
  });


  // MOBILE MENU

/*

  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  
  navBarToggle.addEventListener('click', function () {
      
      mainNav.classList.toggle('navactive');
  });


  let mainNav2 = document.getElementById('js-navbar-toggle');
  let navBarToggle2 = document.getElementById('js-navbar-toggle');
  
  navBarToggle2.addEventListener('click', function () {
      
      mainNav2.classList.toggle('navtoggle-active');
  });

*/




// Select the elements we want to show or hide
var mobileBtn = document.querySelector('.navbar-toggle');
var menu = document.querySelector('.main-nav2');
var closeBtn = document.querySelector('.closeMenu');
var overlay = document.querySelector('.overlay');
var navLinks = document.querySelector('.nav-ul__list');


// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
mobileBtn.addEventListener('click', function(){
  menu.className += ' open';
  overlay.className += ' open';
})


// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
  menu.className = 'main-nav2';
  overlay.className = 'overlay';
})

// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
navLinks.addEventListener('click', function(){
  menu.className = 'main-nav2';
  overlay.className = 'overlay';
})

// If a user clicks outside the menu on the overlay it will also trigger the event
// to hide the menu and overlay elements
window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'main-nav2';
    overlay.className = 'overlay';
  }
})


// $(document).ready(function() {
//     $('.project-slider-2').hide();

//     $(document).onclick('.nav-arrows__prev', function() {
//         $('.project-slider-1').show();
//         $('.project-slider-2').hide();
//     });

//     $(document).onclick('.nav-arrows__next', function() {
//         $('.project-slider-1').hide();
//         $('.project-slider-2').show();
//     });
// });


 $(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
 
      slideSpeed : 300,
      paginationSpeed : 400,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
 
});