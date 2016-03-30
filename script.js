(function($) {
  $('[bg]').each(function() {
    $(this).css('background-image', 'url(images/' + $(this).attr('bg') + '.jpg)');
  });


  $('[hamburger]').click(function() {
    console.log('hamburger');
    $('nav, [icon], [scrim]').toggleClass('extended');
  });

  $('[scrim]').click(function() {
    $('nav, [icon], [scrim]').removeClass('extended');
    console.log('scrim');
  });

  $('nav ul').click(function(event) {
    event.stopPropagation();
  });

  $('nav a').click(function(event) {
    $('nav, [icon], [scrim]').removeClass('extended');
    $('html, body').stop().animate({
      scrollTop: Math.round($($(this).attr('href')).offset().top) - ($(window).innerWidth() > 1263 ? 67 : 0)
    }, 750);
  });

  $('[totop]').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

  var $totop = $('[totop]');
  var $nav = $('nav');

  $(window).scroll(function() {
    var pxFromTop = $(window).scrollTop();
    var opacity = Math.min(pxFromTop / 200, 1);

    if (pxFromTop > 0 && $totop.hasClass('ontop')) $totop.removeClass('ontop');
    else if (pxFromTop <= 0 && !$totop.hasClass('ontop')) $totop.addClass('ontop');

    $nav.css({
      'background-color': 'rgba(0, 150, 136, ' + opacity + ')',
      'box-shadow': '0px 0px 6px rgba(0, 0, 0, ' + opacity * 0.6 + ')'
    });
  });

  setTimeout(function() {
    if (window.location.hash && $(window).innerWidth() > 1263) $('html, body').stop().animate({
      scrollTop: Math.round($(window.location.hash).offset().top) - 67
    }, 100);
  }, 500);
}($));
