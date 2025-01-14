$("h1").css("color", "yellow");

$("button").addClass("big-text");

$("button").click(function (event) {
    $("h1").text(event);
    console.log(event);    
});

$("input").keypress(function (event) {
    $("h1").text(event.key);
    console.log(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "red");
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");


//$("h1").toggle();

/*
$("button").on("click", function (){ 
    $("h1").hide(); 
});
*/