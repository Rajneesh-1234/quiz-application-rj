const questions = [
  {
    "question": "In a star topology, if the central hub fails, what happens to the network?",
    "answers": [
      { "text": "Only one node disconnects", "correct": false },
      { "text": "Entire network goes down", "correct": true },
      { "text": "Network still works partially", "correct": false },
      { "text": "Nothing happens", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer is responsible for reliable transmission using error detection and correction?",
    "answers": [
      { "text": "Data Link Layer", "correct": false },
      { "text": "Transport Layer", "correct": true },
      { "text": "Network Layer", "correct": false },
      { "text": "Session Layer", "correct": false }
    ]
  },
  {
    "question": "In bus topology, what happens if the main cable breaks?",
    "answers": [
      { "text": "Only one computer disconnects", "correct": false },
      { "text": "Entire network fails", "correct": true },
      { "text": "Other nodes continue normally", "correct": false },
      { "text": "Signal speed increases", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does IP addressing work?",
    "answers": [
      { "text": "Data Link Layer", "correct": false },
      { "text": "Network Layer", "correct": true },
      { "text": "Transport Layer", "correct": false },
      { "text": "Application Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology is most fault tolerant?",
    "answers": [
      { "text": "Bus", "correct": false },
      { "text": "Ring", "correct": false },
      { "text": "Mesh", "correct": true },
      { "text": "Star", "correct": false }
    ]
  },
  {
    "question": "If a packet is lost during transmission, which OSI layer ensures retransmission?",
    "answers": [
      { "text": "Physical Layer", "correct": false },
      { "text": "Transport Layer", "correct": true },
      { "text": "Session Layer", "correct": false },
      { "text": "Presentation Layer", "correct": false }
    ]
  },
  {
    "question": "In a ring topology, if one node goes down, what is the effect?",
    "answers": [
      { "text": "Network stops working", "correct": true },
      { "text": "Only that node disconnects", "correct": false },
      { "text": "Ring automatically repairs", "correct": false },
      { "text": "Data continues in opposite direction", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer handles data encryption and compression?",
    "answers": [
      { "text": "Session Layer", "correct": false },
      { "text": "Presentation Layer", "correct": true },
      { "text": "Transport Layer", "correct": false },
      { "text": "Application Layer", "correct": false }
    ]
  },
  {
    "question": "In star topology, which component acts as a central point?",
    "answers": [
      { "text": "Switch/Hub", "correct": true },
      { "text": "Router", "correct": false },
      { "text": "Server", "correct": false },
      { "text": "Modem", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer ensures that packets reach the correct destination device?",
    "answers": [
      { "text": "Data Link Layer", "correct": false },
      { "text": "Network Layer", "correct": true },
      { "text": "Transport Layer", "correct": false },
      { "text": "Physical Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology is easiest to install and least expensive?",
    "answers": [
      { "text": "Bus", "correct": true },
      { "text": "Ring", "correct": false },
      { "text": "Star", "correct": false },
      { "text": "Mesh", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer is responsible for end-to-end logical communication?",
    "answers": [
      { "text": "Application Layer", "correct": false },
      { "text": "Network Layer", "correct": false },
      { "text": "Transport Layer", "correct": true },
      { "text": "Physical Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology is used in Ethernet networks historically?",
    "answers": [
      { "text": "Ring", "correct": false },
      { "text": "Star", "correct": false },
      { "text": "Bus", "correct": true },
      { "text": "Mesh", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does routing happen?",
    "answers": [
      { "text": "Session Layer", "correct": false },
      { "text": "Transport Layer", "correct": false },
      { "text": "Network Layer", "correct": true },
      { "text": "Application Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology provides a dedicated connection between each pair of devices?",
    "answers": [
      { "text": "Ring", "correct": false },
      { "text": "Star", "correct": false },
      { "text": "Mesh", "correct": true },
      { "text": "Bus", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer is responsible for converting data into signals?",
    "answers": [
      { "text": "Physical Layer", "correct": true },
      { "text": "Data Link Layer", "correct": false },
      { "text": "Network Layer", "correct": false },
      { "text": "Presentation Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology is most scalable when adding new nodes?",
    "answers": [
      { "text": "Bus", "correct": false },
      { "text": "Star", "correct": true },
      { "text": "Ring", "correct": false },
      { "text": "Mesh", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer is responsible for dialog control (who speaks when)?",
    "answers": [
      { "text": "Presentation Layer", "correct": false },
      { "text": "Session Layer", "correct": true },
      { "text": "Application Layer", "correct": false },
      { "text": "Transport Layer", "correct": false }
    ]
  },
  {
    "question": "In a hybrid topology, what is combined?",
    "answers": [
      { "text": "Only star and bus", "correct": false },
      { "text": "Two or more topologies", "correct": true },
      { "text": "Only star and ring", "correct": false },
      { "text": "Only bus and mesh", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer segments large messages into smaller packets?",
    "answers": [
      { "text": "Transport Layer", "correct": true },
      { "text": "Network Layer", "correct": false },
      { "text": "Data Link Layer", "correct": false },
      { "text": "Application Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology requires the maximum cabling and cost?",
    "answers": [
      { "text": "Star", "correct": false },
      { "text": "Bus", "correct": false },
      { "text": "Ring", "correct": false },
      { "text": "Mesh", "correct": true }
    ]
  },
  {
    "question": "Which OSI layer is responsible for MAC addressing?",
    "answers": [
      { "text": "Network Layer", "correct": false },
      { "text": "Data Link Layer", "correct": true },
      { "text": "Transport Layer", "correct": false },
      { "text": "Session Layer", "correct": false }
    ]
  },
  {
    "question": "In star topology, if one node fails, what happens?",
    "answers": [
      { "text": "Entire network fails", "correct": false },
      { "text": "Only that node disconnects", "correct": true },
      { "text": "Central hub fails too", "correct": false },
      { "text": "Other nodes slow down", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer ensures data is presented in readable format like JPEG, ASCII?",
    "answers": [
      { "text": "Session Layer", "correct": false },
      { "text": "Presentation Layer", "correct": true },
      { "text": "Application Layer", "correct": false },
      { "text": "Network Layer", "correct": false }
    ]
  },
  {
    "question": "Which topology has a token passing mechanism to avoid collisions?",
    "answers": [
      { "text": "Ring", "correct": true },
      { "text": "Bus", "correct": false },
      { "text": "Star", "correct": false },
      { "text": "Mesh", "correct": false }
    ]
  }
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
