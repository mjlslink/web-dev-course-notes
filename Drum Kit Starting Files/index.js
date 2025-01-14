for (var i=0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function (event) {
        
        var buttonInnerHTML = this.innerHTML;

        associateKey(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    associateKey(event.key);
    keyPressed(event);
});

function associateKey(event) {
    switch (event){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;        
        default:
            console.log(event);
    }
}

function keyPressed(event){
    var keyThatWasPressed = document.querySelector("." + event.key);
    keyThatWasPressed.classList.add("pressed");
    setTimeout(function () {
        keyThatWasPressed.classList.remove("pressed");
    }, 100);
    
}

//document.querySelector("button").addEventListener("click", handleClick);

//function handleClick() {
//    var audio = new Audio("sounds/tom-1.mp3");
//    audio.play()
//}

