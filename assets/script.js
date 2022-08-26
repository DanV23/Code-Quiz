
var startButton = document.getElementById("start-button");
var firstPage = document.getElementById("first-page");
var questionSection = document.getElementById("question-section");
var questionEl = document.getElementById("question");
var answerSection = document.getElementById("answer-section");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        q: "Commonly used data types DO NOT include: ",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: 3
    },

    {
        q: "The condition in an if / else statement is enclosed with _____________________.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correct: 3
    },

    {
        q: "Arrays in JavaScript can be used to store __________________.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct: 4
    },

    {
        q: "String values must be enclosed within ___________ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correct: 3
    },

    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console log",
        correct: 4
    }
]

function hideFirstPage() {
    firstPage.setAttribute("style", "display:none;");
    questionSection.setAttribute("style", "display:block;");
    answerSection.setAttribute("style", "display:block;");
}

// function setAvailableQuestions() {
//     var totalQuestion = questions.length();
//     for(i=0; i<totalQuestion; i++) {
//         availableQuestions.push(questions[i]);
//     }
// }

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions];
//     // console.log(availableQuestions);
//     displayQuestions(availableQuestions);
// }



// displayQuestions = (availableQuestions) => {
//     // questionCounter++;
//     // const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     // currentQuestion = availableQuestions[questionIndex];
//     // questionEl.innerText = currentQuestion.questions;
//     console.log(questions)
// }

function startQuiz() {
    hideFirstPage();
    questionEl.innerText = questions[0].q;
    answerSection.children[0].children[0].innerText = questions[0].answer1;
    answerSection.children[0].children[1].innerText = questions[0].answer2;
    answerSection.children[0].children[2].innerText = questions[0].answer3;
    answerSection.children[0].children[3].innerText = questions[0].answer4;
}







startButton.addEventListener("click", startQuiz)