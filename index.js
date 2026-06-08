var width = $(window).width();

function updateHeaderState() {
    width = $(window).width();
    if (width >= 1000) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background", "rgba(255,255,255,0.98)");
            $("#header").css("color", "#06213f");
            $("#header").css("box-shadow", "0px 8px 24px rgba(6,33,63,0.12)");
            $("#header").css("padding", "18px 4vw");
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "28px 4vw");
        }
    } else {
        $("#header").css("color", "#fff");
        $("#header").css("box-shadow", "0px 8px 24px rgba(6,33,63,0.12)");
        $("#header").css("padding", "20px 5vw");
    }
}

window.onscroll = updateHeaderState;
window.onresize = updateHeaderState;

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    updateHeaderState();
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var headerOffset = $("#header").outerHeight() || 0;
        $('body,html').animate({
        scrollTop: $(hash).offset().top - headerOffset + 8
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
    $("form").on("submit", function(event) {
        event.preventDefault();
    });
  });
  
