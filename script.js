var timerLeft = 100;
var timeLeftEl = document.getElementById('timer-left');
var timerElement = document.getElementById("timerRun");
var quizContainer = document.getElementById("quiz");
var headerEl = document.querySelector('.quiz-intro')
var startButtonEl = document.getElementById("start-button");
var quizTitle = document.getElementById("question-title")
var firstButt = document.getElementById("button1")
var secondButt = document.getElementById("button2")
var thirdButt = document.getElementById("button3")
var fourthButt = document.getElementById("button4")
var questionScreen = document.querySelector('.question-screen');
var questionIndex = 0; 
var questions = [
    {
    title:"What does CSS stand for?",
    options: [
        'Cascading style sheets', 
        'Creating Stylish Sytax', 
        'Cascading stylish syntax', 
        'Condoning stylish server', 
    ],
    answer: 'Cascading style sheets'

},
   {
    title:" What does html stand for?",
    options: [
        'Hyper tool margarita lang',
        'Hyper text markup language',
        'Hotmail text makeup linguistic',
        'Holy text moly lex',

    ],  
    answer: 'Hyper text markup language'
},
    {
        title:"What are strings are placed within?",
        options: [
            'Curly braces',
            'Square brackets',
            'parenthesis',
            'quotation marks',

        ],
        answer: 'quotation marks'
    }

]

startButtonEl.addEventListener("click", initial);


function initial(){
    headerEl.style.display="none"
    questionScreen.style.display="block"
    timerRun();
    renderQuiz();
}

function timerRun(){
    var interval = setInterval(function(){
        timeLeftEl.textContent = timerLeft;
        timerLeft--;
        if(timerLeft < 0){
            clearInterval(interval)
        }
    }, 1000)

}

function renderQuiz(){
    quizTitle.textContent= questions[questionIndex].title
    firstButt.textContent= questions[questionIndex].options[0]
    secondButt.textContent= questions[questionIndex].options[1]
    thirdButt.textContent= questions[questionIndex].options[2]
    fourthButt.textContent= questions[questionIndex].options[3]
    firstButt.addEventListener('click', rightWrong)
    secondButt.addEventListener('click', rightWrong)
    thirdButt.addEventListener('click', rightWrong)
    fourthButt.addEventListener('click', rightWrong)
}

function rightWrong (event){
    console.log(event.target)
    console.log(event.target.textContent)
    console.log(questions[questionIndex].answer)
}




