// possible answers
var answerArray [
"jedi "
"ligtsaber"
"wookie"
"tatooine"
]

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {

}

// converts answers
var userAnswers = "guess".toLocaleLowerCase();
// basic frame 

// get users guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keycode);
    //check if right

    if (userAnswers.indexOf(keyword) > -1) {
        //add right words to the array
        rightWord.push(keyword);
        //replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        // checks to see if user word matches guesses
        if (underScore.join(" ") == choosenWord) {
            alert("win");
        }
    }
    else {
        wrongWord.push(keyword);

    }
});

}
//display guessed letters in the wrongGuess field
function displayOutput() {
    document.write.wrongGuess =
}
//

function reset() {

}