var audio = new Audio("assets/audio/mtrx-realworld.mp3");

var logoClick = document.getElementById("logo-2");

logoClick.onclick = function () {
    
    if (audio.currentTime !== 0.0) {
        audio.pause();
        audio.currentTime = 0.0;
    } else {
        audio.play();
    }
}

