// create quiz data array
// declare variables needed: title header, start quiz, quiz-body, question-title, answers
// Create a function to load the QuizData to the Quiz body
// Submit button to increment questions and answers
// Create a function to keep track of the current selection  
// check the selection and get total score


const quizData = [
    {
        question: 'It is where the righteousness of Christ is legally imputed on sinner\'s account by faith.',
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
        question: 'It is the power of God unto salvation for those who believe.',
        a:'Christ',
        b: 'Gospel',
        c: 'Grace',
        correct: 'b'
    },
    {
        question: 'It teaches that believers are legally declared as God\'s children.',
        a:'Adoption',
        b: 'Justification',
        c: 'Sanctification',
        correct: 'a'
    },
    {
        question: 'Which of the following is NOT an attribute of Canonicity?',
        a:'Corporate Reception',
        b: 'Divine Quality',
        c: 'Ecumenical Councils',
        correct: 'c'
    },
    {
        question: 'The three persons of the Godhead are ______',
        a:'Gods',
        b: 'One God',
        c: 'Three Gods',
        correct: 'b'
    },
    {
        question: 'How many Old Testament books do we have?',
        a:'27',
        b: '39',
        c: '66',
        correct: 'b'
    },
    {
        question: 'We are justified by ______.',
        a:'Faith',
        b: 'Works',
        c: 'Obedience',
        correct: 'a'
    },
    {
        question: 'Which of the following is NOT an attribute of the Scriptures?.',
        a:'Clarity',
        b: 'Authority',
        c: 'Perpetuity',
        correct: 'c'
    },
    {
        question: 'Jesus Christ is _______.',
        a:'God only',
        b: 'Man only',
        c: 'God and Man',
        correct: 'c'
    },
    {
        question: 'The New Testament was written in ______.',
        a:'Greek',
        b: 'Hebrew',
        c: 'Aramaic',
        correct: 'a'
    },
    {
        question: 'It is the ancient heresy that teaches Christ has two persons.',
        a:'Arianism',
        b: 'Nestorianism',
        c: 'Appolinarianism',
        correct: 'b'
    },
    {
        question: 'It is the hinge on which true religion turns.',
        a:'Eutyc',
        b: 'Hebrew',
        c: 'Aramaic',
        correct: 'a'
    }
];

const quizBody = document.getElementById("quiz-body");
const startQuiz = document.querySelector(".start-quiz");
const headerTitle = document.querySelector(".header-title");
const restartQuiz = document.querySelector(".restart-quiz");
const questionTitle = document.getElementById("question-title");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const answerEls = document.querySelectorAll(".answer");
const submitButton = document.querySelector(".submit-btn");

// create function to shuflle the quiz 

const shuffleQuiz = (arr) => {
    arr.sort(() => Math.random() -0.5);
}

shuffleQuiz(quizData)
startQuiz.addEventListener('click', () => {
    quizBody.classList.add("show");
    headerTitle.classList.add('hide');
})


// loadQuizData
let currentQuestion = 0;
let score = 0;

const loadQuizData = () => {
    deSelectAnswers();
    const quiz = quizData[currentQuestion];
    questionTitle.innerText = quiz.question;
    a_text.innerText = quiz.a;
    b_text.innerText = quiz.b;
    c_text.innerText = quiz.c;
}

loadQuizData();


const getSelected = () => {

    let answer; // no assignment yet

    // loop over the answers 

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer; // it will return the ID of the selection
}

// everytime you load the quiz data there should be select
function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })

}


// Submit button to increment current question  
submitButton.addEventListener('click', () => {
    // once the button is clicked check also if the selection matched 
    // the correct answer as indicated in quizdata
   
    const answer = getSelected();


    if(answer) { //check first to see if there is an answer
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
    
        // prevent loadQuizData from incrementing if no question remains
        if(currentQuestion < quizData.length){
            loadQuizData();
        } else {
            quizBody.innerHTML = `<h1 class="final-score">You scored ${score}/${quizData.length}`;
            restartQuiz.classList.add("retake");
        }
    }
})

// check the selection and get total scores



restartQuiz.addEventListener('click', () => {
    location.reload();
})


 

