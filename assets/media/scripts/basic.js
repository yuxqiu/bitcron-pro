$(document).ready(function(){
    $(".hamberger").click(function(){
        $(".hidden_nav").toggle();
        $(".fa-times").toggle();
        $(".fa-bars").toggle();
    });
});