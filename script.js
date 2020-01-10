var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".title");
var optionsField = document.querySelector(".options-field");
var quizTime = 15; 
var questionObject = 0;


function setTimer(){
    timer.textContent = quizTime;
    var timerInterval = setInterval(function(){
        timer.textContent = quizTime--;

        if (quizTime === 0) {
            console.log("game over")
            clearInterval(timerInterval);
            timer.textContent = "0";
            question.textContent = "";
            optionsField.textContent = "";
            var gameover = document.createElement("h3");
            gameover.textContent = "Game Over!"
            optionsField.appendChild(gameover);
        }
    }, 1000)
}


function displayQuestion(){
    question.textContent = questions[questionObject].title;
    displayChoices();
    }

function displayChoices(){
    for (var i = 0; i < questions[questionObject].choices.length; i++){
        var option = document.createElement("p");
        // option.classList.add('question-option');
        option.textContent = questions[questionObject].choices[i];
        optionsField.appendChild(option);
        console.log(questions)
    }
    
}

function updateQuestion(){
    questionObject++
    question.textContent = questions[questionObject].title;
    optionsField.textContent = ""
    displayChoices();
}

function displayNextButton(){
    
}

function displayAnswer(){
    if(event.toElement.innerText === questions[questionObject].answer){
        question.textContent = "";
        optionsField.textContent = "";
        var correct = document.createElement("h3");
        correct.textContent = "Correct!"
        optionsField.appendChild(correct);
        var next = document.createElement("p");
        next.textContent = "next"
        optionsField.appendChild(next);
        next.addEventListener("click", function(){
            updateQuestion();
    });       
    }
    // if (event.toElement.innerText !== questions[questionObject].answer){
    //     question.textContent = "";
    //     optionsField.textContent = "";
    //     var incorrect = document.createElement("h3");
    //     incorrect.textContent = "Incorrect:("
    //     optionsField.appendChild(incorrect);
    //     // displayNextButton();
    // }
    
}

startButton.addEventListener ("click", function(){
    setTimer();
    displayQuestion();
});
optionsField.addEventListener("click", function(){
    displayAnswer();
    // updateQuestion(); 
});



// get rid of start quiz button when game starts 

// function to input initials

// function to create end UI

// start at 100 pass the game in 50 sec, get remainder seconds as your score








