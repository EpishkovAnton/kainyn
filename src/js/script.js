$(document).ready(function () {
  $('.slider').slick({
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,

  });
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

});


$('.goto').click(function () {
  var el = $(this).attr('href').replace('#', '');
  var offset = 0;
  $('body,html').animate({
    scrollTop: $('.' + el).offset().top + offset
  }, 500, function () {});

  if ($('.header__burger').hasClass('active')) {
    $('.header__burger,.header__menu').removeClass('active');
    $('body').removeClass('lock');
  }
  return false;
});

$(document).ready(function () {
  $('.slider-two').slick({
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: false,
    fade: true,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]

  });

});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });


};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

$('[data-modal="consultation"]').on('click', function () {
  $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function () {
  $('.overlay').fadeOut();
});

$('.deep').on('click', function () {
  event.preventDefault()
  $('.overlayinfo').fadeIn();
});

$('.overlayinfo__close').on('click', function () {
  $('.overlayinfo').fadeOut();
});

$('.deepone').on('click', function () {
  event.preventDefault()
  $('.overlayinfoone').fadeIn();
});

$('.overlayinfoone__close').on('click', function () {
  $('.overlayinfoone').fadeOut();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});



$("a[href^='#']").click(function () {
  var _href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(_href).offset().top + "px"
  });
  return false;
});




$('.button_mini').each(function (i) {
  $(this).on('click', function () {
    $('#order .modal__descr').text($('.catalog-item__subtittle').eq(i).text())
    $('.overlay, #order').fadeIn();
  })


  /* большие фото */

  $('.catalog-item__img_1').on('click', function () {
    event.preventDefault()
    $('.bigfotoone').fadeIn();
  });

  $('.bigfotoone').on('click', function () {
    $('.bigfotoone').fadeOut();
  });

  $('.catalog-item__img_2').on('click', function () {
    event.preventDefault()
    $('.bigfototwo').fadeIn();
  });

  $('.bigfototwo').on('click', function () {
    $('.bigfototwo').fadeOut();
  });

  $('.catalog-item__img_3').on('click', function () {
    event.preventDefault()
    $('.bigfotothree').fadeIn();
  });

  $('.bigfotothree').on('click', function () {
    $('.bigfotothree').fadeOut();
  });


  $('.catalog-item__img_4').on('click', function () {
    event.preventDefault()
    $('.bigfotofour').fadeIn();
  });

  $('.bigfotofour').on('click', function () {
    $('.bigfotofour').fadeOut();
  });

  $('.catalog-item__img_5').on('click', function () {
    event.preventDefault()
    $('.bigfotofive').fadeIn();
  });

  $('.bigfotofive').on('click', function () {
    $('.bigfotofive').fadeOut();
  });

  $('.catalog-item__img_6').on('click', function () {
    event.preventDefault()
    $('.bigfotosix').fadeIn();
  });

  $('.bigfotosix').on('click', function () {
    $('.bigfotosix').fadeOut();
  });



});