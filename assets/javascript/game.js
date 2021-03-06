var wins = 0, remaining;
var word = "", guesses = [], indexChosen = [];
var words = ["neo", "trinity", "morpheus", "spoon", "oracle", "smith", "zion", "cypher", "kungfu", "tank", "sentinel", "battery", "architect", "keymaker", "bullets"];
var winsP = document.getElementById("wins");
var wordP = document.getElementById("word");
var remainingP = document.getElementById("remaining");
var guessedP = document.getElementById("guessed");
var picRef = document.getElementById("word-pic");
var audioTheme = document.createElement("audio");
audioTheme.setAttribute("src", "assets/audio/matrix_theme.mp3");
var audioWin = document.createElement("audio");

function playAudio(file) {
    audioWin.setAttribute("src", file);
    audioWin.play();
}

var newWord = function () {
    if (indexChosen.length === words.length) {
        indexChosen = [];
    }

    if (indexChosen.length !== words.length) {
        do {
            var randIndex = Math.floor(Math.random() * words.length);
        } while (indexChosen.indexOf(randIndex) > -1); // Continue to choose a random number until one is found that hasn't been chosen
        indexChosen.push(randIndex);

        wordP.textContent = ""
        for (i = 1; i <= words[randIndex].length; i++) {
            wordP.textContent += "_";
        }

        remaining = words[randIndex].length + 5;
        remainingP.textContent = remaining;

        guesses = [];
        guessedP.textContent = "";

        return words[randIndex].toLowerCase();
    }
}

document.onkeyup = function (event) {
    if (event.keyCode > 64 && event.keyCode < 91 && guesses.indexOf(event.key.toLowerCase()) === -1) {

        remaining--;
        remainingP.textContent = remaining;

        guesses.push(event.key.toLowerCase());

        guessedP.textContent += event.key.toUpperCase();

        wordP.textContent = "";
        for (i = 0; i < word.length; i++) {
            if (guesses.indexOf(word.charAt(i)) === -1) {
                wordP.textContent += "_";
            } else {
                wordP.textContent += word.charAt(i).toUpperCase();
            }
        }

        if (wordP.textContent.toLowerCase() === word) {
            wins++;
            winsP.textContent = wins;
            picRef.setAttribute("src", "assets/images/matrix_" + word + ".jpg");
            playAudio("assets/audio/matrix_" + word + ".mp3");
            word = newWord();
        } else if (remaining === 0) {
            word = newWord();
        }
    }
}

word = newWord();

var logoClick = document.getElementById("logo-2");
logoClick.onclick = function () {

    if (audioTheme.currentTime !== 0.0) {
        audioTheme.pause();
        audioTheme.currentTime = 0.0;
    } else {
        audioTheme.play();
    }
}

