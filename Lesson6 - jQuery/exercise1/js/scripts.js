$("#show-button").click(function(){
    $(".card-body").show();
});

$("#hide-button").click(function(){
    $(".card-body").slideUp();
});

$("#toggle-button").click(function(){
    $(".card-body").fadeToggle();
});
