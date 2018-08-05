$(document).ready(function() {
    $('.menu-icon').click(function(e){
        $('nav ul').slideToggle();
        $('#menu-icon-img').attr('src','resourses/img/cancel.svg');
        e.preventDefault();
    })
})