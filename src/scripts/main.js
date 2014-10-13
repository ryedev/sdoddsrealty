'use strict';

$(document).ready(function(){
  $('#tagline').fitText(1, { minFontSize: '50px', maxFontSize: '82px' });
  $('#sub-tag-text').fitText(2, { minFontSize: '11px', maxFontSize: '18px' });
  $('#main-content-hl').fitText(2, { minFontSize: '16px', maxFontSize: '56px' });
  $('#main-content-sub-hl').fitText(2, { minFontSize: '10px', maxFontSize: '18px'});
  
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

