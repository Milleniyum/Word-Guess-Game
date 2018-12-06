var wins = 0, losses = 0, counter, remaining;

var words = ["neo", "trinity", "morpheus", "spoon", "oracle", "smith", "zion", "cypher", "tank", "electromagnetic", "sentinel", "battery", "architect", "keymaker", "bullets"]

var newGame = function () {
    counter = 0;
}

var picRef = document.getElementById("word-pic");

document.onkeyup = function (event) {
    picRef.setAttribute("src", "assets/images/matrix_"+ words[counter] + ".jpg");
    counter++;
    if (counter === words.length) {
        counter = 0;
    }
}

newGame();

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

