$(document).ready(function(){
  $("#colorChange").click(function(){
    if ($("body").hasClass('greenTheme')) {
      $("body").removeClass();
      $("body").addClass("purpleTheme");
    }
    else {
      $("body").removeClass();
      $("body").addClass("greenTheme");
    }
  });
});