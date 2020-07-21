const question = document.getElementById("question");
const choices = Array.from(document.getElementById('answer'));
const startButtonEl = document.getElementById('start-btn');
var choiceContainerEl = document.getElementById('choices');

// first I need to define the variables that I will need for this code

let shuffleQuestions, questionIndex

startButtonEl.addEventListener('click', startGame)


// i need to create a variable with an array which is to be sorted out in a random generator therefor my questions will be randomly generated. To get started I will need to create a variable with let since it doesn't need to be defined and then create my Questions and answers array.

// Question Array
 
var questions = [
    {
        question: 'NEw Question',
        choice1: '<script>',
        choice2: '<div>',
        choice3: "getElementByID('')",
        choice4: "<scripting>",
        answer: 1
        
    },
    {
        question: 'NEw Question',
        choice1: '<script>',
        choice2: '<div>',
        choice3: "getElementByID('')",
        choice4: "<scripting>",
        answer: 1
        
    },
    {
        question: 'NEw Question',
        choice1: '<script>',
        choice2: '<div>',
        choice3: "getElementByID('')",
        choice4: "<scripting>",
        answer: 1
        
    },
]


// I need a start function that will only show the start at the beginning of the quiz. Then ounce it is clicked it will go to the first question without the start button and with the next button.
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; 

//Constants 
const  CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {

    question.classList.remove('hide');
    choiceContainerEl.classList.remove('hide');
    startButtonEl.classList.add('hide');

    console.log('started');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
    // so I'm using the shuffleQuestions attribute to the let variable down below in here to shuffle the questions when the startButton is clicked.
    //sorts the elements of the array alphebetically or 1,2,3,4 kind of thing. and I created a random number generator that will assign them a number 0-1 and subtract .5 from it so it will be negative or positive. 

    // I'll set the questionIndex to the Questions variable/Array and this will assume that the array is set to the first element of the array. 

    

};



// Since I created a question array I need to make a function that will randomize all the questions I have in an unpredifined order and append them to the question container and answer buttons.

function getNewQuestion() {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to the end page
        return windowlocation.assign("/HighScores.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        getNewQuestion();
    })
})

// This is where I build my nextQuestion function further. So this is where I need to do what I set out to do in the first function; set the inner text HTML to the question container and the only way I see to put the text of the choices into the buttons is to create new buttons and put the text into those. (with the function above 'resetState()' will remove the other buttons.
function showQuestion(question) {

    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    })

}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > questionIndex + 1){
    nextButtonEl.classList.remove('hide')
    }
    else {
        startButtonEl.innerText = 'Restart'
        startButtonEl.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    clearStatusClass(document.body)
    nextButtonEl.classList.add('hide')
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}
// Next I will need to set the next button to a function that will go to the next question if the previous answer was answered and only show the next button when the question is answered true or false.



// Now I need a function that will select an answer and determine if the person was right or wrong

// I need a function that will collect the data on how many questions the respondent got right out of _ questions and display the score on screen. On screen it will ask for the respondents initials and store their score in the High Scores and in the local storage.

function scoreTest (correct, Questions) {
    var score = (correct/Questions) * 100;
    return score;
    localStorage.setItem('scoreEl')
    document.getElementById('highScore').innerText = localStorage.score
}