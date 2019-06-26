// possible answers
var answerArray;
anserArray = [
    "jedi",
    "ligtsaber",
    "wookie",
    "tatooine",
];

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
    var answerArray = String.fromCharCode(event.keycode);
    //check if right

    if (userAnswers.indexOf(keyword) > -1) {
        //add right words to the array
        rightWord.push(keyword);
        //replace underscore with right letter
        underscore[userAnswers.indexOf(keyword)] = keyword;
        // checks to see if user word matches guesses
        if (underscore.join(" ") == userAnswers) {
            alert("win");
        }
    }
    else {
        wrongWord.push(keyword);

    }
});


//display guessed letters in the wrongGuess field
function displayOutput() {
    document.write.wrongGuess =
}
//

function reset() {

}