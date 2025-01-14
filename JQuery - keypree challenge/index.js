$("h1").css("color", "yellow");

$("button").addClass("big-text");

$("button").click(function () {
    $("h1").css("color", "red");
    console.log(this);    
});