// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the image that opens the modal
var overlay = document.getElementsByClassName('overlay');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close');

// When the user clicks the button, open the modal 
overlay[0].onclick = function() {
    modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0] ) {
        //modal[0].style.animation = 'animatebottom 1s 1'; 
        //modal[0].style.display = "none";
        //modal[0].className = modal[0].className ? '' : 'fade';
        modal[0].style.display = "none";
    } else if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
}

// Get the image that opens the modal
//var img2 = document.getElementById('img-2-modal');


// When the user clicks the button, open the modal 
overlay[1].onclick = function() {
    modal[1].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[1].onclick = function() {
    modal[1].style.display = "none";
}


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

$(document).ready(function(){
    $('#    overlay').each(function() {
        animationClick(this, 'bounce');
    });
});

$(document).ready(function(){
    $('').each(function() {
        animationClick(this, 'bounce');
    });
});

$(document).ready(function(){
    $('#banner-box').each(function() {
        animationHover(this, 'bounce');
    });
});