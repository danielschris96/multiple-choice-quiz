// defining all global variables. set questions and answers into arrays to select upon later
var question1 = ["What method would be used to output a random number between 0 and 1?", "Math.random()", "Math.floor()", "Math.log()", "Array.splice()"];
var question2 = ["What method would be used to add an element to the beginning of an array?", "push()", "splice()", "unshift()", "includes()"];
var question3 = ["What method would be used to extract a part of a string and return a new string?", "split()", "slice()", "replace()", "toString()"];
var question4 = ["In JavaScript, an entity that holds keys and values is called a(n)", "Array", "Object", "String", "Function"];
var question5 = ["Which of the following is not a type of loop in JavaScript?", "for loop", "while loop", "do...while loop", "when...do loop"];
var question6 = ["Which of the following is not an event that can be paired with an eventListener()?", "mouseover", "keydown", "click", "hover"];
var question7 = ["Which logical operator denotes 'or'?", "||", "&&", "!==", "==="];
var question8 = ["A function within an object is called a", "Task", "Duty", "Role", "Method"];
// put all question+answer arrays into single array to iterate through arrays
var totalList = [question1, question2, question3, question4, question5, question6, question7, question8];
var timer = document.querySelector("#timer");
var secondsRemaining = timer.getAttribute("data-seconds");
var questionInput = document.querySelector("#question-box");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var container = document.querySelector('#container');
var timerVisible = document.querySelector('#time-remaining');
var saveScore = document.querySelector('#save-score');
var finalScoreEl = document.querySelector('#final-score');
var startButton = document.querySelector('#start');
var leaderboard = document.querySelector('#leaderboard');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');
var resestBtn = document.querySelector('#reset-scores');
var initialsColumn = document.querySelector('#initials-column');
var scoresColumn = document.querySelector('#scores-column');
var answerCounter = 0;
// set array equal to answer positions based on question order
var correctAnswers = ["#answer1", "#answer3", "#answer2", "#answer2", "#answer4", "#answer4", "#answer1", "#answer4"];
var score = 0;

// hidden elements when they are not needed
container.style.visibility = "hidden";
timerVisible.style.visibility = "hidden";
saveScore.style.display = "none";
leaderboard.style.display = "none";

// function begins quiz, shows related elements
document.addEventListener("click", function(event) {
    var element = event.target
    if (element.matches("#start")) {
        startTimer();
        inputQuestion();
        container.style.visibility = "visible";
        timerVisible.style.visibility = "visible";
        startButton.style.display = "none";
    }
})

// starts timer, takes 10 seconds off for wrong answer. clears timer when last question is answered
function startTimer() {
    secondsLeft = parseInt(timer.getAttribute("data-seconds"));
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            youLost();
        }
        else if (answerCounter === 8) {
            clearInterval(timeInterval);
        }
}, 1000)
}

// inputs next question/answers. once final question is answered, youWin fuction is called
function nextQuestion() {
        
    if (answerCounter < 8) {
        questionInput.textContent = totalList[answerCounter][0];
        answer1.textContent = totalList[answerCounter][1];
        answer2.textContent = totalList[answerCounter][2];
        answer3.textContent = totalList[answerCounter][3];
        answer4.textContent = totalList[answerCounter][4];
    }
    else {
        youWin();
    }
}

// inputs initial question, listens for correct answer to increase answer counter
function inputQuestion() {
    questionInput.textContent = question1[0];
    answer1.textContent = question1[1];
    answer2.textContent = question1[2];
    answer3.textContent = question1[3];
    answer4.textContent = question1[4];
    container.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches(correctAnswers[answerCounter])) {
            answerCounter = answerCounter + 1;
            nextQuestion();
        }
        else {
            secondsLeft = secondsLeft - 10;
        }
    })
}

// hides elements and prompts user to refresh to try again
function youLost() {
    questionInput.textContent = "You lost. Refresh page to try again.";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    timerVisible.style.display = "none";
}

// pulls a final score and hides elements
function youWin() {
    var finalScore = secondsLeft 
    container.style.display = "none";
    timerVisible.style.display = "none";
    saveScore.style.display = "block";
    finalScoreEl.textContent = finalScore;
    
}

// stores initals and scores into local storage. pulls all local storage and puts keys/values into respective list items. appends list items to leaderboard lists.
function scoreSubmit() {
    saveScore.style.display = "none";
    // secondsLeft + 1 equals actual score because of slight delay for clearing the timer
    localStorage.setItem(initials.value, secondsLeft +1);
    leaderboard.style.display = "block";
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var listItemInitials = document.createElement('li');
    var listItemScores = document.createElement('li');
    listItemInitials.textContent = key;
    listItemScores.textContent = value;
    initialsColumn.appendChild(listItemInitials);
    scoresColumn.appendChild(listItemScores);
  }

}

// listens for the submit button, triggers scoreSubmit function
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreSubmit();
})

// listens for Reset Scores button, clears local storage and leaderboard
resestBtn.addEventListener("click", function(event) {
    localStorage.clear();
    scoresColumn.style.display = "none";
    initialsColumn.style.display = "none";
})
