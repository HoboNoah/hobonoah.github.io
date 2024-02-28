$(function(){
    $('header a').click(function(){
        $('a.lastclicked').removeClass('lastclicked'); 
        $(this).addClass('lastclicked'); 
    });
});