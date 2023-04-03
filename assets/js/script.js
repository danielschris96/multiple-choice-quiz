
var question1 = ["What method would be used to output a random number between 0 and 1?", "Math.random()", "Math.floor()", "Math.log()", "Array.splice()"];
var question2 = ["What method would be used to add an element to the beginning of an array?", "push()", "splice()", "unshift()", "includes()"];
var question3 = ["What method would be used to extract a part of a string and return a new string?", "split()", "slice()", "replace()", "toString()"];
var question4 = ["In JavaScript, an entity that holds keys and values is called a(n)", "Array", "Object", "String", "Function"];
var question5 = ["Which of the following is not a type of loop in JavaScript?", "for loop", "while loop", "do...while loop", "when...do loop"];
var question6 = ["Which of the following is not an event that can be paired with an eventListener()?", "mouseover", "keydown", "click", "hover"];
var question7 = ["Which logical operator denotes 'or'?", "||", "&&", "!", "==="];
var question8 = ["A function within an object is called a", "Task", "Duty", "Role", "Method"];
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
var leaderboard = document.querySelector('#leaderboard');
var finalScoreEl = document.querySelector('#final-score');
var startButton = document.querySelector('#start');
var answerCounter = 0;
var correctAnswers = ["#answer1", "#answer3", "#answer2", "#answer2", "#answer4", "#answer4", "#answer1", "#answer4"];
var score = 0;

container.style.visibility = "hidden";
timerVisible.style.visibility = "hidden";
leaderboard.style.display = "none";

console.log(answerCounter);

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

function startTimer() {
    secondsLeft = parseInt(timer.getAttribute("data-seconds"));
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            youLost();
        }
}, 1000)
}

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

function inputQuestion() {
    questionInput.textContent = question1[0];
    answer1.textContent = question1[1];
    answer2.textContent = question1[2];
    answer3.textContent = question1[3];
    answer4.textContent = question1[4];
    document.addEventListener("click", function(event) {
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

function youLost() {
    questionInput.textContent = "You lost. Refresh page to try again.";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    timerVisible.style.display = "none";
}

function youWin() {
    var finalScore = secondsLeft 
    container.style.display = "none";
    timerVisible.style.display = "none";
    leaderboard.style.display = "block";
    finalScoreEl.textContent = finalScore
}


// function checkAnswer() {
//     if ()
// }




/* Fundamentals questions:

What method would be used to output a random number between 0 and 1?
Math.random()
Math.floor()
Math.log()
Array.splice()

What method would be used to add an element to the beginning of an array?
push()
splice()
unshift()
includes()

What method would be used to extract a part of a string and return a new string?
split()
slice()
replace()
toString()

In JavaScript, an entity that holds keys and values is called a(n)
Array
Object
String
Function

Which of the following is not a type of loop in JavaScript?
for loop
while loop
do...while loop
when...do loop

Which of the following is the proper notation for changing text color through JavaScript?
divTag.setAttribute("color":"blue")
divTag.setAttribute("style", "color: blue")
divTag.setAttribute("color: blue")
divTag.setAttribute("style"; "color: blue")

Which of the following is not an event that can be paired with an eventListener()?
mouseover
keydown
click
hover

Which logical operator denotes 'or'?
||
&&
!
===

In the following array, which index postion equates to 'Apple'?
array = ["Apple", "Banana", "Pear", "Orange"]
[-1]
[0]
[1]
None of the above

A function within an object is called a
Task
Duty
Role
Method
*/
