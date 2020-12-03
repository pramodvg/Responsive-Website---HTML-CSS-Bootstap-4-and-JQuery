// on document ready execute method
$(function () {
  // pre loader

  $(window).on('load', function () {
    $('#preloader').delay(500).fadeOut();
    $('#loadingimg').delay(500).fadeOut('slow');

    //=======================  porfolli tabs
    $('.no-gutters').isotope({
      // options
    });

    $('#filter-buttons-gp').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $('.no-gutters').isotope({
        filter: filterValue,
      });

      $('#filter-buttons-gp').find('.active').removeClass('active');
      $(this).addClass('active');
    });

    // ================ magnifire-popup init
    $('#portfolio-wrapper').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true,
      },
      // other options
    });
  });

  // team members sliders
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 400,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
  $('#feedback-slider').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 400,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
  $('#client-list').owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 400,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // progress animation on scroll
  $('#team-section').waypoint(function () {
    $('.progress-bar').each(function () {
      $(this).animate(
        {
          width: $(this).attr('aria-valuenow') + '%',
        },
        1000
      );
    });
    this.destroy();
  });

  // ================ for statement quote bg movement ===================
  var velocity = 0.5;

  function update() {
    var pos = $(window).scrollTop();
    $('.statement-section').each(function () {
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = $element.height() - 18;
      $(this).css(
        'backgroundPosition',
        '0% ' + Math.round((height - pos) * velocity) + 'px'
      );
    });
  }
  $(window).bind('scroll', update);
  // ================================  Auto Counter =======
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
    offset: 1,
  });
});
//******************************************** */ on document ready execute method

// =========== for service tabs ===========
$('#service-tabs').responsiveTabs({
  animation: 'slide',
});

// ============ for smooth scrolling ============
function init() {
  new SmoothScroll(document, 120, 12);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener('mousewheel', scrolled, { passive: false });
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}
