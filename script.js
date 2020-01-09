var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".title");
var optionsField = document.querySelector(".options-field");
var quizTime = 3 
var questionObjectChoices = 0


function setTimer(){
    timer.textContent = quizTime;
    var timerInterval = setInterval(function(){
        timer.textContent = quizTime--;

        if (quizTime === 0) {
            clearInterval(timerInterval);
            timer.textContent = "0";
        }
    }, 1000)
}


function displayQuestions (){
    question.textContent = questions[questionObjectChoices].title;
    displayChoices();
    }
    function displayChoices(){
        for (var i = 0; i < questions[questionObjectChoices].choices.length; i++){
            var option = document.createElement("p");
            option.classList.add('question-option');
            option.textContent = questions[questionObjectChoices].choices[i];
            optionsField.appendChild(option);
        }
    var questionOptions = document.querySelector(".question-option");

    questionOptions.addEventListener("click", function() {
        questionObjectChoices++
        question.textContent = questions[questionObjectChoices].title;
        optionsField.textContent = ""
        displayChoices();
    });
}

startButton.addEventListener ("click", function(){
    setTimer();
    displayQuestions();
})































// create array that has objects as questions





// title, choices, answer

// get rid of start quiz button when game starts 

// loop through choices and add them tobuttons or paragraphs

// create a function that goes through choices clicks

// function to input initials

// function to create end UI

// start at 100 pass the game in 50 sec, get remainder seconds as your score








