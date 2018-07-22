$(document).ready(function() {
    $('.menu-icon').click(function(e){
        $('nav ul').slideToggle();
        e.preventDefault();
    })
})