// create quiz data array
// declare variables needed: title header, start quiz, quiz-body, question-title, answers
// 

const quizData = [
    {
        question: 'It is the righteousness of Christ legally imputed on sinners by faith.',
        a:'Sanctification',
        b: 'Justification',
        c: 'Faith',
        correct: 'b'
    
    }, 
    {
        question: 'It is referred to as the greatest mystery of the Christian faith.',
        a:'Incarnation',
        b: 'Resurrection',
        c: 'Cross',
        correct: 'a'
    },
    {
        question: 'Who is the author of the Epistle to Hebrews',
        a:'Apollos',
        b: 'Silvanus',
        c: 'Paul',
        correct: 'c'
    },
    {
        question: 'It is the power of God unto salvation for those who believe.',
        a:'Christ',
        b: 'Gospel',
        c: 'Grace',
        correct: 'b'
    }
];

const quizBody = document.getElementById("quiz-body");
const startQuiz = document.getElementById("start-quiz");
const restartQuiz = document.getElementById("restart-quiz");
const questionTitle = document.getElementById("question-title");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");

// loadQuizData

let currentQuestion = 0;

const loadQuizData = () => {
    const quiz = quizData[currentQuestion];

    questionTitle.innerText = quiz.question;
    a_text.innerText = quiz.a;

}


loadQuizData();
