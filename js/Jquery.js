$(function() {
    $('.burger').on('click', function() {
        $('.menu_left').toggleClass('active');
    })

///////////////////////////////////////////////////////////////////////////////////
    $('.show').on('click', function(){
        $(this).toggleClass('transform');
        $('#div' + $(this).attr('target')).toggle(300)
    }); 
});
