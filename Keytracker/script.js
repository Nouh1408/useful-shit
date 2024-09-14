$("input").keypress(function(event){
    // console.log(event.key)
    $("h1").text(event.key)
})

$("h1").on("mouseover", function(){
    $(this).css("color","purple")
})
$("h1").on("mouseout", function(){
    $(this).css("color","black")
})