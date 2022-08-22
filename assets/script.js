
var startButton = document.getElementById("start-button");
var firstPage = document.getElementById("first-page");
var questionSection = document.getElementById("question-section")
var questionEl = document.getElementById("question");
var answerSection = document.getElementById("answer-section")



var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: [ 
            {text: "strings", true: false}, 
            {text: "booleans", true: false}, 
            {text: "alerts", true: true}, 
            {text: "numbers", true: false}
        ]
    },

    {
        question: "The condition in an if / else statement is enclosed with _____________________.",
        answers: [
            {text: "quotes", true: false}, 
            {text: "curly brackets", true: false},
            {text: "parethesis", true: true}, 
            {text: "square brackets", true: false}
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store __________________.",
        answers: [
            {text: "numbers and strings", true: false},
            {text: "other arrays", true: false}, 
            {text: "booleans", true: false}, 
            {text: "all of the above", true: true}
        ]
    },

    {
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        answers: [
            {text: "commas", true: false},
            {text: "curly brackets", true: false},
            {text: "quotes", true: true},
            {text: "parenthesis", true: false}
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", true: false},
            {text: "terminal/bash", true: false},
            {text: "for loops", true: false},
            {text: "console log", true: true}
        ]
    }
]

function startGame() {

    startButton.addEventListener("click", function() {
        firstPage.setAttribute("style", "display:none;");
        questionSection.setAttribute("style", "display:block;");
        answerSection.setAttribute("style", "display:block;");
        displayQuestions()
    })
}
startGame();



// function displayQuestions() {
//     questionEl.innerText = questions.question;    
// }
// displayQuestions()