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
        

