
var startButton = document.getElementById("start-button");
var firstPage = document.getElementById("first-page");
var questionSection = document.getElementById("question-section");
var questionEl = document.getElementById("question");
var answerSection = document.getElementById("answer-section");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");


let score = 0;
let questionCounter = 0;

let questions = [
    {
        q: "Commonly used data types DO NOT include: ",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: "alerts"
    },

    {
        q: "The condition in an if / else statement is enclosed with _____________________.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correct: "parenthesis"
    },

    {
        q: "Arrays in JavaScript can be used to store __________________.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct: "all of the above"
    },

    {
        q: "String values must be enclosed within ___________ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correct: "quotes"
    },

    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console log",
        correct: "console log"
    }
]

function hideFirstPage() {
    firstPage.setAttribute("style", "display:none;");
    questionSection.setAttribute("style", "display:block;");
    answerSection.setAttribute("style", "display:block;");
}

function startQuiz() {
    hideFirstPage();
    displayQuestions();
}

function endQuiz() {
    console.log("Congrats");
}

function displayQuestions() {
    if(questionCounter < questions.length) {
            questionEl.innerText = questions[questionCounter].q;
    answer1El.innerText = questions[questionCounter].answer1;
    answer2El.innerText = questions[questionCounter].answer2;
    answer3El.innerText = questions[questionCounter].answer3;
    answer4El.innerText = questions[questionCounter].answer4;
    } else {
        endQuiz();
    }

}

function checkAnswer1(event) {
    console.log(event.target.innerText);
    if(questions[questionCounter].correct === event.target.innerText) {
        console.log("correct");
        
    } else {
        console.log("wrong");
    }
    questionCounter++;
    displayQuestions();
}
function checkAnswer2(event) {
    console.log(event.target.innerText);
    if(questions[questionCounter].correct === event.target.innerText) {
        console.log("correct");
        
    } else {
        console.log("wrong");
    }
    questionCounter++;
    displayQuestions();
}
function checkAnswer3(event) {
    console.log(event.target.innerText);
    if(questions[questionCounter].correct === event.target.innerText) {
        console.log("correct");
        
    } else {
        console.log("wrong");
    }
    questionCounter++;
    displayQuestions();
}
function checkAnswer4(event) {
    console.log(event.target.innerText);
    if(questions[questionCounter].correct === event.target.innerText) {
        console.log("correct");
        
    } else {
        console.log("wrong");
    }
    questionCounter++;
    displayQuestions();
}


startButton.addEventListener("click", startQuiz);
answer1El.addEventListener("click", checkAnswer1);
answer2El.addEventListener("click", checkAnswer2);
answer3El.addEventListener("click", checkAnswer3);
answer4El.addEventListener("click", checkAnswer4);