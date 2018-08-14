$(document).ready(function() {
    $('.menu-icon').click(function(e){
        $('nav ul').slideToggle();
        $('.boss-container').click(function(){
            $('nav ul').slideUp();
            $('.menu-icon-img').toggleClass('menu-active');
        });
        $('.menu-icon-img').toggleClass('menu-active');
        e.preventDefault();
    });
})