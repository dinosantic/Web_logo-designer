$(document).ready(function(){

    var headerHeight = $("header").outerHeight();

    $(".slide-section").click(function(e){
       
        var link = $(this).attr("href");
       $("html, body").animate({
           scrollTop: $(link).offset().top - headerHeight
       }, 1000 );
        e.preventDefault();
    });
});
        
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
  }