const questions = [
  {
    question: "JavaScript is an _________ language?",
    answers: [
      { text: "Object-Oriented", correct:true },
      { text: "Object-based", correct: false },
      { text: "Procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "which of the following keywords is used to define a variable in javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both A and B", correct: true },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which of the following methods can be used to display data in some from using javascript",
    answers: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What keyword is used to check wheather a given property is valid or not?",
    answers: [
      { text: "in", correct: true },
      { text: "is in", correct: false },
      { text: "exists", correct: false },
      { text: "lies", correct: false },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "When an operator' s value is NULL, the typeof returned by the unary operator is:?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "Undefined", correct: false },
      { text: "Object", correct: true },
      { text: "Integer", correct: false },
    ],
  },
  {
    question: `What is the output of the following code snippet? <br/> <p style='color:red';> print(NaN===NaN)</p>`,
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "undefined", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: `What will be the output of the following code snippet? <br/> <p style='color:red';> print(typeof(NaN))</p>`,
    answers: [
      { text: "Object", correct: false },
      { text: "String", correct: false },
      { text: "Number", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following are closures in javascript?",
    answers: [
      { text: "Variable", correct: false },
      { text: "Functions", correct: false },
      { text: "Objects", correct: false },
      { text: "None of the above", correct: true },
    ],
  },
  {
    question: "What keyword is used to declare an asynchronous function in javascript?",
    answers: [
      { text: "async", correct: false },
      { text: "await", correct: false },
      { text: "setTimeout", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `<p style='font-size:25px;'>${questionNo}  ${". "}  ${currentQuestion.question}</p>`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`<p style='color:blue;font-size:35px;text-align:center';>You scored ${score} out of ${questions.length}!</p>`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
        {
            showQuestion();
        }
        else{
            showScore();
        }
}
nextButton.addEventListener("click",()=>{
               if(currentQuestionIndex<questions.length)
                {
                    handleNextButton();
                }
                else{
                    startQuiz();
                }
});
startQuiz();
