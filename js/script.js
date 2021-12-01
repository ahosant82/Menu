
$(document).ready(function(){
  $('#dropdown-btn-1').click(function(){
    $('#dropdown-nav-1').toggle(300);
  });
});

$(document).ready(function(){
  $('#dropdown-btn-2').click(function(){
    $('#dropdown-nav-2').toggle(300);
  });
});
$(document).ready(function(){
  $('#menu-open').click(function(){
    $('#menu').fadeIn(300);
  });
  $('#menu-close').click(function(){
    $('#menu').fadeOut(300);
  });
});