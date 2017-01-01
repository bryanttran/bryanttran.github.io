$('a').smoothScroll();

// Get the modal
//modal[0] = project 2, modal[1] = project 3
var modal = document.getElementsByClassName('modal');

// Get the image that opens the modal
//overlay[0] = project 1, overlay[1] = project 2, overlay[2] = project 3
var overlay = document.getElementsByClassName('overlay');

// Get the <span> element that closes the modal
//span[0] = project 2, span[1] = project 3
var span = document.getElementsByClassName('close');

// When the user clicks the image, open the modal 
overlay[1].onclick = function() {
    modal[0].style.display = "flex";
    document.body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    $("#myModal").fadeOut(700);
    //modal[0].style.display = "none";
    document.body.style.overflow = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0] ) {
        $("#myModal").fadeOut(700);
        //modal[0].style.display = "none";
        document.body.style.overflow = "visible";
    } else if (event.target == modal[1]) {
        $("#myModal2").fadeOut(700);
        //modal[1].style.display = "none";
        document.body.style.overflow = "visible";
    }
}

// When the user clicks the button, open the modal 
overlay[2].onclick = function() {
    modal[1].style.display = "block";
    document.body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
span[1].onclick = function() {
    $("#myModal2").fadeOut(700);
    //modal[1].style.display = "none";
    document.body.style.overflow = "visible";
}

$(document).keyup(function(event) { 
    if (event.keyCode == 27) { 
        $("#myModal").fadeOut(700);
        $("#myModal2").fadeOut(700);
        document.body.style.overflow = "visible";
    } 
});

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

$("#myModal").on("show", function () {
    $("body").css('overflow', 'hidden');
}).on("hidden", function (){
    $("body").css('overflow', 'auto')
});

var bannerbox = $('.banner-box');
var range = 410;

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var offset = bannerbox.offset().top;
    var height = bannerbox.outerHeight();
    offset = offset + height / 2;
    var calc = .9 - (scrollTop - offset + range) / range;
  
    bannerbox.css({ 'opacity': calc });
  
    if ( calc > '.9' ) {
      bannerbox.css({ 'opacity': .9 });
    } else if ( calc < '0' ) {
      bannerbox.css({ 'opacity': 0 });
    }
  
});
