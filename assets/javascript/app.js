// Qs for TAs
    // How to center things?
    // Why isn't timer function running?




// The Page View 1 will be:
    // [X] a blurb of what the game is about 
    // [X] and a start button

var timeLeft = 120;
var intervalId;

function clearButton() { // clears all html within "game-box" id. 
    $("#start-button").empty();
}

function runTimer() { // starts the countdown of "timeLeft" variable.
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() { 
    if(timeLeft >= 0) {
        $("#timer").html("<H3>Time Remaining: " + timeLeft + " seconds</H3>");
        timeLeft--; // Decreases timeLeft by 1
    } else {
        clearInterval(intervalId);
        alert("TIME'S UP!");
    }
    
}

function setGame() { // clears the "game-box" div and starts the timer.
    clearButton();
    runTimer();
}

// Clicking the "Ready to begin?" button clears the div called "game-box" on the page
$("#ready-btn").on("click", setGame);
    
    // The question
    // multiple choice answers 
        // that are buttons
        // that give visual feedback when clicked\

function askQuestion() {
    $("#questions").html("<div class='container'><img src=" + images[count] + " width='400px'>");
}

// When a user clicks on one of the answers:
    // The back end records whether it was right or wrong
    // One of two messages pops up either confirming or correcting the quiz-taker.
    // Under this, an image that clarifies what the object is, along with a description.
    // The game then jumps to the next question

// When all questions have been asked:
    // The timer is still displayed, but it has reset and is stopped
    // A statement is showing saying something like, "All done, here's how you did!"
    // A tally of "correct answers", "incorrect answers", and "unanswered" quesions (aka questions that weren't answered before the timer forced you to move on.)
    // A button at the bottom that asks "Start Over?" This triggers the reset of the game.

