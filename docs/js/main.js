//Judantis background

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 12;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate1 = 'translate(' + x * 0.3 + 'px, ' + y * 0.3 + 'px)';
  translate2 = 'translate(' + x * 0.15 + 'px, ' + y * 0.15 + 'px)';
  shadow = x * 0.02 + 'rem ' + y * 0.02 + 'rem 0px var(--clr-zydra-permatoma)';

  $('.background').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
  });

  $('.main-title').css({
  '-webit-transform': translate1,
  '-moz-transform': translate1,
  'transform': translate1,
  'text-shadow': shadow
  });

  $('.brains').css({
  '-webit-transform': translate2,
  '-moz-transform': translate2,
  'transform': translate2
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
  if(!isMobile) {
    var lMouseX = Math.max(-800, Math.min(800, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-400, Math.min(400, $(window).height() / 2 - e.clientY));
    lFollowX = (10 * lMouseX) / 100; // 100 : 20 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
  }
});

if(!isMobile) {
  moveBackground();
};

//Responsive meniu
function Atidaryti() {
  $('.nav-mobile-panel').css({'width': '100%'});
};

function Uzdaryti() {
  $('.nav-mobile-panel').css({'width': '0%'});
};

//Uzdarome meniu kai keiciame viewport dydi
$(window).resize(function(){
  Uzdaryti();
});

//Procentukai
$(function() {
  var $meters = $('.progresas > span');
  var $section = $('#manoigudziai');
  var $queue = $({});

  function procentukai() {
      $meters.each(function() {
          var $el = $(this);
          var origWidth = $el.width();
          $el.width(0);
          $queue.queue(function(next) {
              $el.animate({width: origWidth}, 800, next);
              $el.promise().done(function(){
                  $(this).find('span').show(200);
              });
          });
      });
  };

  $(document).on('scroll.procScroll', function(ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
          procentukai();
          $(document).off('scroll.procScroll');
      }
  });
});

//Galerija
$(function(){
  $('a.gallery').featherlightGallery({
    gallery: {
        previous: '«',
        next: '»',
        fadeIn: 300
    },
    openSpeed: 300
  });
});

//Paskirtis kita
$(function(){
  var check = $('#kita');
  var laukas = $('.pazymeti-kita');
  $('#paskirtis .pazymeti').click(function() {
    if (check.prop("checked")) {
      laukas.show(200);
    } else {
      laukas.hide(200);
    };
//  $laukas.toggle(200,$check.prop("checked"));
  });
});

//Kalbos svg tekstas
//$(function(){
//  $('.lt-link').mouseover(
//    function(){
//      $(".lt").text("LANGUAGE");
//    }
//  )
//  .mouseout(
//    function(){
//    $(".lt").text("ENGLISH");
//    }
//  );
//});

//$(function() {
//  $(document).on('scroll', function() {
//      var scroll = $(window).scrollTop();
//      var scrollEnd = $(document).height() - $(window).height();
//      var containerOffset = scrollEnd - window.innerHeight;
//      console.log(scroll + ' ' + scrollEnd);
//      }
//  );
//});
