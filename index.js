document.addEventListener("DOMContentLoaded", function() {
    var zootopiaInfo = {
        title: "Zootopia",
        description: "An animated film about a modern city inhabited by anthropomorphic animals."
    };

    console.log(zootopiaInfo.title);
    console.log(zootopiaInfo.description);

    var clickElement = document.querySelector(".about_section");
    clickElement.addEventListener("click", function() {
        alert("hello");
    });


    $(document).ready(function() {
        $("h5").mouseover(function() {
            $("h5").css("background-color", "#bda9e2");
        });
        $("h5").mouseout(function() {
            $("h5").css("background-color", "lightgray");
        });
    });

    document.addEventListener("keypress", function(event) {
        console.log("Key pressed: " + event.key);
    });

    var animationElement = document.querySelector(".about-details");

    function animateElement() {
        var originalText = animationElement.textContent;
        animationElement.textContent = "Zootopia!";
        setTimeout(function() {
            animationElement.textContent = originalText;
        }, 2000);
    }


    animationElement.addEventListener("click", animateElement);

    var audio = new Audio('shakira.mp3');

    var soundButton = document.getElementById("playSoundButton");
    soundButton.addEventListener("click", function() {
        audio.play();
    });
});

$(document).ready(function() {

    $("#playSoundButton").click(function() {

        var audio = new Audio('shakira.mp3');

        audio.play();
    });
});