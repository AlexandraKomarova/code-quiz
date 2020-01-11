var timer = document.querySelector("#timer");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".title");
var optionsField = document.querySelector(".options-field");
var quizTime = 5; 
var questionObject = 0;
var quizEnd = false;
var score = quizTime

if (!questions[questionObject]){
    console.log("game over")
}

// when start quiz is clicked set timer and display question
startButton.addEventListener ("click", function(){
    setTimer();
    displayQuestion();
});

function gameOver(){
    timer.textContent = "0";
    question.textContent = "";
    optionsField.textContent = "";
    var gameover = document.createElement("h3");
    gameover.textContent = "Game Over!"
    optionsField.appendChild(gameover);
    // var scoreEl = document.createElement("h3");
    // scoreEl.textContent = quizTime
    // optionsField.appendChild(scoreEl);
}

// FIX DELAY


function setTimer(){
    timer.textContent = quizTime;
    
    var timerInterval = setInterval(function(){
        
        timer.textContent = quizTime--;
        
        if (quizTime === 0 || !questions[questionObject]) {
            score = quizTime
            console.log(score)
            clearInterval(timerInterval);
            gameOver()
            var scoreEl = document.createElement("h3");
            scoreEl.textContent = "Your score is " + score
            optionsField.appendChild(scoreEl);
        }
    }, 1000)
}

function displayQuestion(){
    question.textContent = questions[questionObject].title;
    displayChoices();
}

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

// SUBTRACT FROM TIMER WHEN ASNWER IS WRONG

optionsField.addEventListener("click", function(event){
    score = quizTime
    console.log(score)
    // clear question and options
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
                }
            }, 1000);
        }
        else {
            quizTime -= 15
            clearQuestionAndOptions()
            // display incorrect
            var incorrect = document.createElement("h3");
            incorrect.textContent = "Incorrect:("
            optionsField.appendChild(incorrect);
            // display next question in 1 second
            setTimeout(function(){
                if (quizTime > 0) {
                    updateQuestion()
                }
            }, 1000);
        }    
    }
     
})
    

// show correct answer and then display new question

// end game when there's no more questions

// get rid of start quiz button when game starts 

// when start quiz is cliked creates the choices again

// function to input initials

// function to create end UI

// start at 100 pass the game in 50 sec, get remainder seconds as your score

// subtract from timer when answer is wrong





// need to go through questions array while 
// var result = "";
// do {
//     questionObject++
//     result = result + questionObject;
//   } while (questionObject < 3);
  
//   console.log(result);
//   // expected result: "12345"

// OLD DISPLAY ANSWER
// function displayAnswer(event){

//     // console.log(event.target.value)    

//     if(event.toElement.innerText === questions[questionObject].answer){
//         question.textContent = "";
//         optionsField.textContent = "";
//         var correct = document.createElement("h3");
//         correct.textContent = "Correct!"
//         optionsField.appendChild(correct);
//         var next = document.createElement("p");
//         next.textContent = "next"
//         optionsField.appendChild(next);
//         next.addEventListener("click", function(){
//             updateQuestion();
//         });  
//     }
//     if (event.toElement.innerText !== questions[questionObject].answer){
//         question.textContent = "";
//         optionsField.textContent = "";
//         var incorrect = document.createElement("h3");
//         incorrect.textContent = "Incorrect:("
//         optionsField.appendChild(incorrect);
//         // displayNextButton();
//         // subtract from timer when answer is wrong
//     }
    
// }

// THIS FOR LOOP HAS CONSOLE.DIR TO BE SAVED FOR REFERENCE

// //  for(var i = 0; i < allChoices.length; i++){
//     //     allChoices[i].addEventListener("click", function(event){
//     //         console.dir(event.target.attributes.data.value)
//     //     //    displayAnswer(event)
//     //     })
//     // }