const questions = [
    {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 0, b = 1, c, i\nfor i = 1 to 5 do\n   c = a + b\n   a = b\n   b = c\n   print c\nend for",
    "answers": [
      { "text": "1 2 3 5 8", "correct": true },
      { "text": "0 1 1 2 3", "correct": false },
      { "text": "1 1 2 3 5", "correct": false },
      { "text": "1 2 4 6 10", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger n = 5, fact = 1\nfor i = n down to 1 do\n   fact = fact * i\nend for\nprint fact",
    "answers": [
      { "text": "120", "correct": true },
      { "text": "24", "correct": false },
      { "text": "5", "correct": false },
      { "text": "600", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger n = 6\nif(n % 2 == 0 AND n % 3 == 0) then print 'Divisible by 2 and 3'\nelse print 'Not divisible'",
    "answers": [
      { "text": "Divisible by 2 and 3", "correct": true },
      { "text": "Divisible by 2", "correct": false },
      { "text": "Divisible by 3", "correct": false },
      { "text": "Not divisible", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 29, b = 15\nprint(a & b)\nprint(a | b)\nprint(a ^ b)",
    "answers": [
      { "text": "13, 31, 18", "correct": true },
      { "text": "15, 29, 2", "correct": false },
      { "text": "14, 30, 17", "correct": false },
      { "text": "None of these", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger x = 8, y = 2\nprint(x << y)\nprint(x >> y)",
    "answers": [
      { "text": "32, 2", "correct": true },
      { "text": "16, 4", "correct": false },
      { "text": "64, 2", "correct": false },
      { "text": "8, 2", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 5, b = 10, c = 15\nif (a < b AND b < c) then\n   print a + b + c\nelse\n   print a * b * c\nend if",
    "answers": [
      { "text": "30", "correct": true },
      { "text": "750", "correct": false },
      { "text": "25", "correct": false },
      { "text": "15", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 10\nif (a % 2 == 0) then\n   if (a % 5 == 0) then\n      print 'Divisible'\n   else\n      print 'Not Divisible'\n   end if\nelse\n   print 'Odd'\nend if",
    "answers": [
      { "text": "Divisible", "correct": true },
      { "text": "Not Divisible", "correct": false },
      { "text": "Odd", "correct": false },
      { "text": "Error", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger i = 1, sum = 0\nwhile (i <= 5) do\n   sum = sum + i * i\n   i = i + 1\nend while\nprint sum",
    "answers": [
      { "text": "55", "correct": true },
      { "text": "30", "correct": false },
      { "text": "15", "correct": false },
      { "text": "25", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger i = 1\nrepeat\n   print i\n   i = i + 2\nuntil(i > 5)",
    "answers": [
      { "text": "1 3 5", "correct": true },
      { "text": "1 2 3 4 5", "correct": false },
      { "text": "2 4", "correct": false },
      { "text": "None", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfor i = 1 to 3 do\n   for j = 1 to 2 do\n      print i * j\n   end for\nend for",
    "answers": [
      { "text": "1 2 2 4 3 6", "correct": true },
      { "text": "1 2 3 4", "correct": false },
      { "text": "2 4 6", "correct": false },
      { "text": "1 1 2 2 3 3", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 7\nprint(~a)",
    "answers": [
      { "text": "-8", "correct": true },
      { "text": "7", "correct": false },
      { "text": "-7", "correct": false },
      { "text": "8", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 12, b = 7\nprint(a ^ b)",
    "answers": [
      { "text": "11", "correct": false },
      { "text": "5", "correct": true },
      { "text": "19", "correct": false },
      { "text": "3", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfunction fact(n):\n   if n == 1 then return 1\n   else return n * fact(n-1)\nend function\nprint fact(4)",
    "answers": [
      { "text": "24", "correct": true },
      { "text": "4", "correct": false },
      { "text": "12", "correct": false },
      { "text": "16", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfunction sum(n):\n   if n == 0 then return 0\n   else return n + sum(n-1)\nend function\nprint sum(3)",
    "answers": [
      { "text": "6", "correct": true },
      { "text": "3", "correct": false },
      { "text": "0", "correct": false },
      { "text": "9", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfunction fib(n):\n   if n <= 1 then return n\n   else return fib(n-1) + fib(n-2)\nend function\nprint fib(5)",
    "answers": [
      { "text": "5", "correct": true },
      { "text": "8", "correct": false },
      { "text": "3", "correct": false },
      { "text": "13", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 5, b = 10\nif(a AND b) then print(1) else print(0)",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "0", "correct": false },
      { "text": "5", "correct": false },
      { "text": "10", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nif(0) then print('A') else print('B')",
    "answers": [
      { "text": "A", "correct": false },
      { "text": "B", "correct": true },
      { "text": "Error", "correct": false },
      { "text": "Nothing", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 10\ninteger *p = &a\n*p = 20\nprint(a)",
    "answers": [
      { "text": "20", "correct": true },
      { "text": "10", "correct": false },
      { "text": "Address of a", "correct": false },
      { "text": "Error", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nclass A {\n   constructor A() { print('A') }\n}\nA obj",
    "answers": [
      { "text": "A", "correct": true },
      { "text": "Nothing", "correct": false },
      { "text": "Error", "correct": false },
      { "text": "Garbage", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfor i = 0 to 2 do\n   print(i)\nend for",
    "answers": [
      { "text": "0 1 2", "correct": true },
      { "text": "1 2 3", "correct": false },
      { "text": "0 1 2 3", "correct": false },
      { "text": "Error", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger i = 1\nwhile(i < 5) do\n   i = i * 2\nend while\nprint i",
    "answers": [
      { "text": "8", "correct": true },
      { "text": "4", "correct": false },
      { "text": "2", "correct": false },
      { "text": "Error", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger sum = 0\nfor i = 1 to 4 do\n   if(i % 2 == 0) then sum = sum + i\nend for\nprint sum",
    "answers": [
      { "text": "6", "correct": true },
      { "text": "4", "correct": false },
      { "text": "10", "correct": false },
      { "text": "8", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\nfunction f(n):\n   if(n <= 1) return 1\n   else return f(n-1) + f(n-2)\nend function\nprint f(4)",
    "answers": [
      { "text": "3", "correct": true },
      { "text": "5", "correct": false },
      { "text": "2", "correct": false },
      { "text": "4", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger x = 3, y = 6\nif(x > 2 OR y < 5) then print 'true' else print 'false'",
    "answers": [
      { "text": "true", "correct": true },
      { "text": "false", "correct": false },
      { "text": "error", "correct": false },
      { "text": "nothing", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger a = 5, b = 2\nprint(a / b)\nprint(a % b)",
    "answers": [
      { "text": "2, 1", "correct": true },
      { "text": "2.5, 0", "correct": false },
      { "text": "2, 0", "correct": false },
      { "text": "5, 2", "correct": false }
    ]
  },
  {
    "question": "Predict the output of the given pseudocode\n\ninteger arr[3] = {1,2,3}\nfor i = 0 to 2 do\n   print(arr[i])\nend for",
    "answers": [
      { "text": "1 2 3", "correct": true },
      { "text": "0 1 2", "correct": false },
      { "text": "3 2 1", "correct": false },
      { "text": "Error", "correct": false }
    ]
  },
  {
    "question": "DBMS: Which key uniquely identifies each record in a table?",
    "answers": [
      { "text": "Primary Key", "correct": true },
      { "text": "Foreign Key", "correct": false },
      { "text": "Candidate Key", "correct": false },
      { "text": "Composite Key", "correct": false }
    ]
  },
  {
    "question": "DBMS: Which SQL command removes all rows but keeps the table structure?",
    "answers": [
      { "text": "TRUNCATE", "correct": true },
      { "text": "DELETE", "correct": false },
      { "text": "DROP", "correct": false },
      { "text": "REMOVE", "correct": false }
    ]
  },
  {
    "question": "DBMS: Which SQL clause is used to filter records?",
    "answers": [
      { "text": "WHERE", "correct": true },
      { "text": "HAVING", "correct": false },
      { "text": "GROUP BY", "correct": false },
      { "text": "ORDER BY", "correct": false }
    ]
  },
  {
    "question": "DBMS: Which command is used to permanently delete a table?",
    "answers": [
      { "text": "DROP", "correct": true },
      { "text": "DELETE", "correct": false },
      { "text": "REMOVE", "correct": false },
      { "text": "TRUNCATE", "correct": false }
    ]
  },
  {
    "question": "Cloud Computing: Which service provides virtual machines over the internet?",
    "answers": [
      { "text": "IaaS", "correct": true },
      { "text": "PaaS", "correct": false },
      { "text": "SaaS", "correct": false },
      { "text": "DBaaS", "correct": false }
    ]
  },
  {
    "question": "Cloud Computing: Which model allows developers to deploy apps without managing servers?",
    "answers": [
      { "text": "PaaS", "correct": true },
      { "text": "IaaS", "correct": false },
      { "text": "SaaS", "correct": false },
      { "text": "FaaS", "correct": false }
    ]
  },
  {
    "question": "Cloud Computing: Which cloud model combines public and private clouds?",
    "answers": [
      { "text": "Hybrid Cloud", "correct": true },
      { "text": "Private Cloud", "correct": false },
      { "text": "Community Cloud", "correct": false },
      { "text": "Public Cloud", "correct": false }
    ]
  },
  {
    "question": "Cloud Computing: Which company introduced AWS?",
    "answers": [
      { "text": "Amazon", "correct": true },
      { "text": "Microsoft", "correct": false },
      { "text": "Google", "correct": false },
      { "text": "IBM", "correct": false }
    ]
  },
  {
    "question": "Cloud Computing: Which cloud type is shared by multiple organizations?",
    "answers": [
      { "text": "Community Cloud", "correct": true },
      { "text": "Private Cloud", "correct": false },
      { "text": "Public Cloud", "correct": false },
      { "text": "Hybrid Cloud", "correct": false }
    ]
  },
  {
    "question": "Computer Network: Which OSI layer provides reliable transmission with acknowledgements?",
    "answers": [
      { "text": "Transport", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Physical", "correct": false }
    ]
  },
  {
    "question": "Computer Network: Which topology has a central hub failure causing total network failure?",
    "answers": [
      { "text": "Star", "correct": true },
      { "text": "Bus", "correct": false },
      { "text": "Ring", "correct": false },
      { "text": "Mesh", "correct": false }
    ]
  },
  {
    "question": "Computer Network: Which protocol translates domain names to IP addresses?",
    "answers": [
      { "text": "DNS", "correct": true },
      { "text": "DHCP", "correct": false },
      { "text": "SMTP", "correct": false },
      { "text": "SNMP", "correct": false }
    ]
  },
  {
    "question": "Computer Network: Which OSI layer deals with encryption and compression?",
    "answers": [
      { "text": "Presentation", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Application", "correct": false },
      { "text": "Transport", "correct": false }
    ]
  },
  {
    "question": "Computer Network: Which device works at the data link layer?",
    "answers": [
      { "text": "Switch", "correct": true },
      { "text": "Router", "correct": false },
      { "text": "Hub", "correct": false },
      { "text": "Repeater", "correct": false }
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
