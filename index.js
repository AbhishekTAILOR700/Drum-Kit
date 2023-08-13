var noOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<noOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        // console.log(this.innerHTML);
        // if(this === "w"){
        //     document.querySelector("w").style.color = "green";
        // }
        // this.style.color = "green";
        var buttonInnerHtml = this.innerHTML;

        buttonAnimation(buttonInnerHtml);
        switch (buttonInnerHtml) {
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
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        
            default:
                break;
        }
    });
}



document.addEventListener("keydown", function (event){
    // alert("hello, I am under the water, Help me");
    
    console.log(event.key);
    
    buttonAnimation(event.key);

    switch (event.key) {
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
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
});
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();



// Button ANimation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
        
    }, 100);
}
