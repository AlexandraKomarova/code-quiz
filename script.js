var page = document.querySelector (".page")
var time = document.querySelector(".time");
var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".title");
var optionsField = document.querySelector(".options-field");
var questionsField = document.querySelector(".questions-field");
var endScreen = document.querySelector(".end-screen");
var score = document.querySelector("#score");
var initialsEl = document.querySelector("#initials");
var saveButton = document.querySelector("#save-button");
var viewHighScores = document.querySelector(".view-highscore-button");
var quizTime = 15; 
var questionObject = 0;

// ============ RENDERING END SCREEN =============

function gameOver(){
    time.textContent = "";
    optionsField.textContent = ""
    endScreen.classList.remove("hide")
    score.textContent = quizTime;
}

// ========= POPULATE USERS ARRAY WITH DATA FROM LOCAL STORAGE ======

var users = []
users = JSON.parse(localStorage.getItem("users"))
console.log(users)
var user = {
    initials: initials,
    score: quizTime
  };
var currentId = 0;
// capture user's input
var initials = initialsEl.value.trim();



// ============= SAVE BUTTON ===============

saveButton.addEventListener("click", function(){
    initials = initialsEl.value
    user = {
        initials: initials,
        score: quizTime
      };
    users.push(user);
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users));
});

// ========= VIEW HIGH SCORES BUTTON ===========

viewHighScores.addEventListener("click", function(){
    startButton.textContent = ""
    startButton.classList.remove("start-button")
    questionsField.textContent = "";
    // create users <ul> to add user <li> to
    var usersUl = document.createElement("ul");
    questionsField.append(usersUl)
    // create user <li>
    for (var i = 0; i < users.length; i++){
        var li = document.createElement("li");
        li.innerHTML = users[i].initials + " " + users[i].score;
        usersUl.append(li);
        console.log(users[i].initials)
    }
});

// ============= START QUIZ BUTTON ===============

startButton.addEventListener ("click", function(){
    setTimer();
    displayQuestion();
    startButton.textContent = ""
    startButton.classList.remove("start-button")
    // startButton.style.display = "none"
});

// =============== SET TIMER ===================

function setTimer(){
    timer.textContent = quizTime;
    var timerInterval = setInterval(function(){
        timer.textContent = quizTime--;
        if (quizTime < 0){
            quizTime = 0
        }
        if (quizTime <= 0 || !questions[questionObject]) {
            score = quizTime
            console.log(score)
            clearInterval(timerInterval);
            gameOver()
        }
    }, 1000)
}

// =============== DISPLAY QUESTION ===================

function displayQuestion(){
    question.textContent = questions[questionObject].title;
    displayChoices();
}

// =============== DISPLAY CHOICES ==================

function displayChoices(){
    // var options to store arrays of choices to refer to in the loop so that the code is clearer and easier to write
    var options = questions[questionObject].choices;
     // loop through choices array and place the elements as options in optionsField
    for (var i = 0; i < options.length; i++){
        // options are created as <p> and saved in var option
        var option = document.createElement("p");
        // to each <p> "data" attribute id added and its value is each element in choices array
        option.setAttribute("data", options[i])
        // update display by adding each element of choices array as text of option
        option.textContent = options[i];
        // add option <p> to optionsField <div>
        optionsField.appendChild(option);
    }
}

// ================== HANDLING CLICKED CHOICES =====================

optionsField.addEventListener("click", function(event){
    function clearQuestionAndOptions(){
        question.textContent = "";
        optionsField.textContent = "";
    }
    if (event.target.matches("p")){
        var userChoice = event.target.attributes.data.value
        var answer = questions[questionObject].answer
        if(userChoice === answer){
            clearQuestionAndOptions()
           // display correct
            var correct = document.createElement("h3");
            correct.textContent = "Correct!"
            optionsField.appendChild(correct);
            // display next question in 1 second
            setTimeout(function(){
                if (quizTime > 0) {
                    updateQuestion()
                    quizTime++
                }
            }, 1000);
        }
        else {
            // if (quizTime > 3) {
                quizTime -= 3
            // }


            clearQuestionAndOptions()
            // display incorrect
            var incorrect = document.createElement("h3");
            incorrect.textContent = "Incorrect:("
            optionsField.appendChild(incorrect);
            // display next question in 1 second
            setTimeout(function(){
                if (quizTime > 0) {
                    updateQuestion()
                    quizTime++
                }
            }, 1000);
        }    
    }
     
})

// ========== UPDATES QUESTION WHEN A CHOICE GETS CLICKED ==========

function updateQuestion(){
    questionObject++
    if (questions[questionObject]){
        question.textContent = questions[questionObject].title;
        optionsField.textContent = ""
        displayChoices();
    }
    else {
        gameOver()
    } 
}

// CONSOLE.DIR TO BE SAVED FOR REFERENCE

// console.dir(event.target.attributes.data.value)