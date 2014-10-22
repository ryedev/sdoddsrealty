'use strict';

$(document).ready(function(){
  $('#tagline').fitText(1.3, { minFontSize: '32px', maxFontSize: '76px' });
  $('#sub-tag-text').fitText(4, { minFontSize: '16px', maxFontSize: '30px' });
  $('#main-content-hl').fitText(2, { minFontSize: '16px', maxFontSize: '56px' });
  $('#main-content-sub-hl').fitText(2, { minFontSize: '10px', maxFontSize: '18px'});
  
  // chris coyier's smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  // thanks to james padolsey for help with this cross-browswer doc height
  $.getDocHeight = function(){
       var D = document;
       return Math.max(Math.max(D.body.scrollHeight,    D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
  };
  var docHeight = $.getDocHeight();

  // if(docHeight > 1000) {
  //   $('.footer-bottom').find('.logo').css({display: 'inline-block'});
  // }
});

