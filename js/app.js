$(function(){
  var isOldie = $.browser.msie && ( ( ~~$.browser.version) < 10 ),

  $coverflow = $('#coverflow').coverflow({
    active: 3,
    stacking: 1,
    duration: 600
  });

  $('.ui-coverflow-item').each(function(){
    var $coverflowItem = $(this);
    $coverflowItem.find('a').on('click', function(e){
      if(!$coverflowItem.hasClass('ui-state-active')){
        e.preventDefault();
      }
    });
  });
  $(window).smartresize(function() {
    $coverflow.coverflow();
  });
});