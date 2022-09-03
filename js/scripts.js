
//Mobile Menu Navigation Control
var main = function () {
  $('.menu-open').click(function () {
    $('.navbar-menu').animate({ 'right': '0px' }, 200);
  });
  $('.close-icon').click(function () {
    $('.navbar-menu').animate({ 'right': '-285px' }, 200);
  });
};
$(document).ready(main);

// Submenu Dropdown Icon

$('#sub-menu-parent .collapse').on('shown.bs.collapse', function () {
  $(this).prev().find(".las").removeClass("la-angle-down").addClass("la-angle-up");
});

//The reverse of the above on hidden event:

$('#sub-menu-parent .collapse').on('hidden.bs.collapse', function () {
  $(this).prev().find(".las").removeClass("la-angle-up").addClass("la-angle-down");
});

// FAQ Icon

$('#faq .collapse').on('shown.bs.collapse', function () {
  $(this).prev().find(".las").removeClass("la-plus").addClass("la-minus");
});

$('#faq .collapse').on('hidden.bs.collapse', function () {
  $(this).prev().find(".las").removeClass("la-minus").addClass("la-plus");
})


// Change Navbar background color after scrolling down
$(function () {
  var mynav = $(".navbar-wrap");
  var navTop = $("#nav-top");
  var regBtn = $(".reg-btn-blue");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
      mynav.removeClass('nav-transparent').addClass("nav-blue");
      navTop.slideUp();
      regBtn.removeClass('reg-btn-blue').addClass("reg-btn-white");

    } else {
      mynav.removeClass("nav-blue").addClass('nav-transparent');
      navTop.slideDown();
      regBtn.removeClass('reg-btn-white').addClass("reg-btn-blue");
    }
  });
});

// Search on Navigation Interaction
var navSearchSP = $(".nav-search-sp");
var navSearchPC = $(".nav-search-pc");
var themenu = $("#navbar .navbar-menu");
$(window).scroll(function() {
  this.addSearchElement()
})
$(window).resize(function() {
  this.addSearchElement()
})
function addSearchElement() {
  const scrollY = $(window).scrollTop()
  if($('body').outerWidth(true) < 992) {
      if (scrollY > $('#jobs').outerHeight(true)) {
        navSearchSP.removeClass('hideSp');
        navSearchSP.addClass('showSp');
        navSearchPC.addClass('hidePc');

        themenu.removeClass('hideMenu');
        themenu.addClass('showMenu');

      } else {
        navSearchSP.removeClass('showSp');
        navSearchSP.addClass('hideSp');
        navSearchPC.addClass('showPc');

        themenu.removeClass('hideMenu');
        themenu.addClass('showMenu');
      }
  } else {
    if (scrollY > $('#jobs').outerHeight(true)) {
      navSearchPC.removeClass('hidePc');
      navSearchPC.addClass('showPc');

      themenu.removeClass('showMenu');
      themenu.addClass('hideMenu');
    } else {
      navSearchPC.removeClass('showPc');
      navSearchPC.addClass('hidePc');

      themenu.removeClass('hideMenu');
      themenu.addClass('showMenu');
    }
  }
}

// var $window = $(window);
// $(document).ready(function () {
//   // Optimalisation: Store the references outside the event handler:

//   function checkWidth() {
//     var windowsize = $window.width();
//     if (windowsize > 991) {
//       //if the window is greater than 440px wide then turn on jScrollPane..
//       navSearchSP.addClass('forceHide');

//     } else {
//       navSearchPC.addClass('forceHide');
//       themenu.addClass('forceShow');
//     }
//   }
//   // Execute on load
//   checkWidth();
//   // Bind event listener
//   $(window).resize(checkWidth);
// });






// var navSearchSP = $(".nav-search-sp");
// var navSearchPC = $(".nav-search-pc");
// var mymenu = $("#navbar .navbar-menu");
// $(function() {
//   $("body").append("<div class='windowWidth'>Window Width: " + $(window).width() + "px</div>");

//   function response() {
//     if ($(window).width() > 480 && $(window).width() < 2000) {
//       navSearchSP.hide().addClass('forceHide');
//     } else {
//       navSearchPC.hide().addClass('forceHide');
//       mymenu.show().addClass('forceShow');
//     }
//   }
//   response();

//   $(window).resize(function() {
//     response();
//     $(".windowWidth").html("Window Width: " + $(this).width() + "px");
//   });
// });

//Hot Jobs Slider //

$('#jobs .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  margin: 10,
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1.35,
    },
    600: {
      items: 3,
    },
    992: {
      items: 4.35,
      margin: 15,
      dots: true
    }
  }
})


// Advertisement Slider 

$('#advertisement .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  margin: 0,
  dots: true,
  nav: false,
  responsiveClass: true,
  items: 1
})

// Blog Slider
$('#blog-slider .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  margin: 10,
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    992: {
      items: 4,
      margin: 15
    }
  }
})

// Client Logo Slider
$('#client .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 4,
      margin: 10
    },
    600: {
      items: 6,
      margin: 10
    },
    992: {
      items: 6,
      margin: 10
    }
  }
})

// Change Navbar background color after scrolling down (if past header section)

// $(function() {
//   var mynav = $(".navbar-wrap");
//   $(window).scroll(function() {    
//       var scroll = $(window).scrollTop() + 1,
//       SectionOneOffset = $('.wrap').offset().top;

//       if (scroll >= SectionOneOffset) {
//         mynav.removeClass('nav-transparent').addClass("nav-blue");
//         mynav.css("top", "-50px");
//       } else {
//         mynav.removeClass("nav-blue").addClass('nav-transparent');
//         mynav.css("top", "0px");
//       }
//   });
// });

// Back to Top Button 
// var btn = $('#top-button');
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 500) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });


// Hide Navbar on Scroll //
// $(window).bind("scroll", function () {
//   var st = $(window).scrollTop();
//   var threshold = $("header").outerHeight();
//   if (st > (threshold)) {
//     $("#navbar").addClass("disappear");
//     if (st > $.lastScrollTop) {
//       var dir = "down";
//       $("#navbar").addClass("disappear");
//     } else {
//       var dir = "up";
//       $("#navbar").removeClass("disappear");
//     }
//   }
//   $.lastScrollTop = st;
// });

//Active Nav on Current Page
// var i = document.location.href.lastIndexOf("/");
// var current = document.location.href.substr(i+1);

//     $("#navbar nav a").removeClass('menu-active');

//     $("#navbar nav a[href^='"+current+"']").each(function(){
//         $(this).addClass('menu-active');
//     });















