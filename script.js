var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".title");
var optionsField = document.querySelector(".options-field");
var quizTime = 5000; 
var questionObject = 0;


function gameOver(){
    timer.textContent = "0";
    question.textContent = "";
    optionsField.textContent = "";
    var gameover = document.createElement("h3");
    gameover.textContent = "Game Over!"
    optionsField.appendChild(gameover);
}

function setTimer(){
    timer.textContent = quizTime;
    var timerInterval = setInterval(function(){
        timer.textContent = quizTime--;

        if (quizTime === 0) {
            clearInterval(timerInterval);
           gameOver()
        }
    }, 1000)
}

// need to go through questions array while 
// var result = "";
// do {
//     questionObject++
//     result = result + questionObject;
//   } while (questionObject < 3);
  
//   console.log(result);
//   // expected result: "12345"

function displayQuestion(){
    question.textContent = questions[questionObject].title;
    displayChoices();
    var allChoices = document.querySelectorAll("p")

    //  for(var i = 0; i < allChoices.length; i++){
    //     allChoices[i].addEventListener("click", function(event){
    //         console.dir(event.target.attributes.data.value)
    //     //    displayAnswer(event)
    //     })
    // }

}

function displayChoices(){
    // loop through choices array and place the elements as options in optionsField
    for (var i = 0; i < questions[questionObject].choices.length; i++){
        var option = document.createElement("p");
        option.setAttribute("data", questions[questionObject].choices[i])
        option.textContent = questions[questionObject].choices[i];
        optionsField.appendChild(option);
    
    }
    
}

function updateQuestion(){
    questionObject++
    console.log(questionObject)
    if (questions[questionObject]){
        question.textContent = questions[questionObject].title;
        optionsField.textContent = ""
        displayChoices();
    }
    else {
        gameOver()
    }
    
}

function displayNextButton(){
    
}

function displayAnswer(event){

    // console.log(event.target.value)    

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
    if (event.toElement.innerText !== questions[questionObject].answer){
        question.textContent = "";
        optionsField.textContent = "";
        var incorrect = document.createElement("h3");
        incorrect.textContent = "Incorrect:("
        optionsField.appendChild(incorrect);
        // displayNextButton();
        // subtract from timer when answer is wrong
    }
    
}

startButton.addEventListener ("click", function(){
    setTimer();
    displayQuestion();
});

    

optionsField.addEventListener("click", function(event){
    if (event.target.matches("p")){
        var userChoice = event.target.attributes.data.value
        var answer = questions[questionObject].answer
        if(userChoice === answer){
           // clear optiojs freld
           question.textContent = "";
            optionsField.textContent = "";
           // display correct
           var correct = document.createElement("h3");
        correct.textContent = "Correct!"
        optionsField.appendChild(correct);
        // display next question
        setTimeout(function(){
            if (quizTime > 0) {
                updateQuestion()
            }
        }, 1000);
        
        }
        
    }
    
    
})
    


//     displayAnswer();
//     // updateQuestion(); 
// });

// show correct answer and then display new question

// end game when there's no more questions

// get rid of start quiz button when game starts 

// when start quiz is cliked creates the choices again

// function to input initials

// function to create end UI

// start at 100 pass the game in 50 sec, get remainder seconds as your score

// subtract from timer when answer is wrong






