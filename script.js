const questions = [
  {
  "questions": [
    {
      "id": 1,
      "category": "Pseudocode - Bitwise",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 29\ninteger b = 15\ninteger c = a & b\ninteger d = a | b\ninteger e = a ^ b\nprint c\nprint d\nprint e",
      "options": ["13, 31, 18", "15, 29, 2", "14, 30, 17", "None of these"],
      "answer": "13, 31, 18"
    },
    {
      "id": 2,
      "category": "Pseudocode - Bitwise",
      "question": "Predict the output of the given pseudocode\n\ninteger x = 8\ninteger y = 2\nprint (x << y)\nprint (x >> y)",
      "options": ["32, 2", "16, 4", "64, 2", "8, 2"],
      "answer": "32, 2"
    },
    {
      "id": 3,
      "category": "Pseudocode - Condition",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 5, b = 10, c = 15\nif (a < b AND b < c) then\n   print a + b + c\nelse\n   print a * b * c\nend if",
      "options": ["30", "750", "25", "15"],
      "answer": "30"
    },
    {
      "id": 4,
      "category": "Pseudocode - Condition",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 10\nif (a % 2 == 0) then\n   if (a % 5 == 0) then\n      print 'Divisible'\n   else\n      print 'Not Divisible'\n   end if\nelse\n   print 'Odd'\nend if",
      "options": ["Divisible", "Not Divisible", "Odd", "Error"],
      "answer": "Divisible"
    },
    {
      "id": 5,
      "category": "Pseudocode - Loop",
      "question": "Predict the output of the given pseudocode\n\ninteger i = 1, sum = 0\nwhile (i <= 5) do\n   sum = sum + i * i\n   i = i + 1\nend while\nprint sum",
      "options": ["55", "30", "15", "25"],
      "answer": "55"
    },
    {
      "id": 6,
      "category": "Pseudocode - Loop",
      "question": "Predict the output of the given pseudocode\n\ninteger i = 1\nfor i = 1 to 5 do\n   print i * 2\nend for",
      "options": ["2 4 6 8 10", "1 2 3 4 5", "10 20 30 40 50", "None"],
      "answer": "2 4 6 8 10"
    },
    {
      "id": 7,
      "category": "Pseudocode - Pointer",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 5\npointer p = &a\n*p = *p + 10\nprint a",
      "options": ["5", "10", "15", "20"],
      "answer": "15"
    },
    {
      "id": 8,
      "category": "Pseudocode - Pointer",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 3, b = 4\npointer p = &a\npointer q = &b\nprint (*p) * (*q)",
      "options": ["7", "12", "1", "0"],
      "answer": "12"
    },
    {
      "id": 9,
      "category": "Pseudocode - Recursion",
      "question": "Predict the output of the given pseudocode\n\nfunction fact(n):\n   if n == 0 then return 1\n   else return n * fact(n-1)\nend function\n\nprint fact(4)",
      "options": ["24", "16", "12", "10"],
      "answer": "24"
    },
    {
      "id": 10,
      "category": "Pseudocode - Recursion",
      "question": "Predict the output of the given pseudocode\n\nfunction fib(n):\n   if n <= 1 then return n\n   else return fib(n-1) + fib(n-2)\nend function\n\nprint fib(5)",
      "options": ["3", "5", "8", "7"],
      "answer": "5"
    },
    {
      "id": 11,
      "category": "Pseudocode - Logic",
      "question": "Predict the output of the given pseudocode\n\ninteger x = 7\ndo\n   print x\n   x = x - 2\nwhile(x > 0)",
      "options": ["7 5 3 1", "7 6 5 4", "7 4 1", "7 2"],
      "answer": "7 5 3 1"
    },
    {
      "id": 12,
      "category": "Pseudocode - Logic",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 2, b = 3, c = 4\nprint (a + b * c - a / b)",
      "options": ["13", "14", "12", "15"],
      "answer": "14"
    },
    {
      "id": 13,
      "category": "Pseudocode - OOP",
      "question": "Predict the output of the given pseudocode\n\nclass Parent:\n   function show():\n      print 'Parent'\nclass Child extends Parent:\n   function show():\n      print 'Child'\n\nobject obj = new Child()\nobj.show()",
      "options": ["Parent", "Child", "Error", "None"],
      "answer": "Child"
    },
    {
      "id": 14,
      "category": "Pseudocode - OOP",
      "question": "Predict the output of the given pseudocode\n\nclass A:\n   integer x = 10\nclass B extends A:\n   integer x = 20\nobject obj = new B()\nprint obj.x",
      "options": ["10", "20", "30", "Error"],
      "answer": "20"
    },
    {
      "id": 15,
      "category": "Pseudocode - Loop",
      "question": "Predict the output of the given pseudocode\n\ninteger i, j\nfor i = 1 to 3 do\n   for j = 1 to 2 do\n      print i * j\n   end for\nend for",
      "options": ["1 2 2 4 3 6", "1 2 3 4 5 6", "2 4 6", "Error"],
      "answer": "1 2 2 4 3 6"
    },
    {
      "id": 16,
      "category": "Pseudocode - Bitwise",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 12\ninteger b = ~a\nprint b",
      "options": ["-13", "-12", "13", "12"],
      "answer": "-13"
    },
    {
      "id": 17,
      "category": "Pseudocode - Pointer",
      "question": "Predict the output of the given pseudocode\n\ninteger arr[3] = {1,2,3}\npointer p = arr\nprint *(p+2)",
      "options": ["1", "2", "3", "Error"],
      "answer": "3"
    },
    {
      "id": 18,
      "category": "Pseudocode - Recursion",
      "question": "Predict the output of the given pseudocode\n\nfunction fun(n):\n   if n <= 1 then return 1\n   return fun(n-1) + fun(n-2)\nend function\n\nprint fun(4)",
      "options": ["3", "5", "2", "4"],
      "answer": "3"
    },
    {
      "id": 19,
      "category": "Pseudocode - Condition",
      "question": "Predict the output of the given pseudocode\n\ninteger a = -5\nif (a > 0) then\n   print 'Positive'\nelseif (a < 0) then\n   print 'Negative'\nelse\n   print 'Zero'\nend if",
      "options": ["Positive", "Negative", "Zero", "Error"],
      "answer": "Negative"
    },
    {
      "id": 20,
      "category": "Pseudocode - OOP",
      "question": "Predict the output of the given pseudocode\n\nclass Demo:\n   static integer count = 0\n   constructor():\n      count = count + 1\n\nobject d1 = new Demo()\nobject d2 = new Demo()\nprint Demo.count",
      "options": ["1", "2", "3", "0"],
      "answer": "2"
    },
    {
      "id": 21,
      "category": "Pseudocode - Loop",
      "question": "Predict the output of the given pseudocode\n\ninteger i = 0\nrepeat\n   print i\n   i = i + 2\nuntil(i >= 6)",
      "options": ["0 2 4 6", "0 2 4", "2 4 6", "0 1 2 3 4 5"],
      "answer": "0 2 4 6"
    },
    {
      "id": 22,
      "category": "Pseudocode - Bitwise",
      "question": "Predict the output of the given pseudocode\n\ninteger x = 5\ny = x ^ x\nprint y",
      "options": ["0", "5", "10", "Error"],
      "answer": "0"
    },
    {
      "id": 23,
      "category": "Pseudocode - Logic",
      "question": "Predict the output of the given pseudocode\n\ninteger i = 1, s = 0\nwhile(i < 4) do\n   s = s + i\n   i = i + 1\nend while\nprint s",
      "options": ["6", "10", "3", "4"],
      "answer": "6"
    },
    {
      "id": 24,
      "category": "Pseudocode - Condition",
      "question": "Predict the output of the given pseudocode\n\ninteger a = 4\nif (a % 2 == 0 OR a % 3 == 0) then\n   print 'Valid'\nelse\n   print 'Invalid'\nend if",
      "options": ["Valid", "Invalid", "Error", "None"],
      "answer": "Valid"
    },
    {
      "id": 25,
      "category": "Pseudocode - Recursion",
      "question": "Predict the output of the given pseudocode\n\nfunction mystery(n):\n   if n == 1 then return 1\n   return n * mystery(n-2)\nend function\n\nprint mystery(5)",
      "options": ["15", "10", "5", "0"],
      "answer": "15"
    },
    {
      "id": 26,
      "category": "DBMS",
      "question": "Which normal form removes partial dependency?",
      "options": ["1NF", "2NF", "3NF", "BCNF"],
      "answer": "2NF"
    },
    {
      "id": 27,
      "category": "DBMS",
      "question": "Which SQL command is used to remove duplicates from a query result?",
      "options": ["UNIQUE", "DISTINCT", "DELETE", "DROP"],
      "answer": "DISTINCT"
    },
    {
      "id": 28,
      "category": "DBMS",
      "question": "In a relation, a super key is:",
      "options": ["A set of attributes uniquely identifying a row", "Minimal set of keys", "Primary key only", "Foreign key only"],
      "answer": "A set of attributes uniquely identifying a row"
    },
    {
      "id": 29,
      "category": "DBMS",
      "question": "Which of the following is not a type of join?",
      "options": ["Inner Join", "Outer Join", "Self Join", "Primary Join"],
      "answer": "Primary Join"
    },
    {
      "id": 30,
      "category": "DBMS",
      "question": "Which isolation level avoids dirty read?",
      "options": ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      "answer": "Read Committed"
    },
    {
      "id": 31,
      "category": "Cloud Computing",
      "question": "Which of these is not a cloud service model?",
      "options": ["IaaS", "PaaS", "SaaS", "Naas"],
      "answer": "Naas"
    },
    {
      "id": 32,
      "category": "Cloud Computing",
      "question": "Which company introduced AWS?",
      "options": ["Microsoft", "Amazon", "Google", "IBM"],
      "answer": "Amazon"
    },
    {
      "id": 33,
      "category": "Cloud Computing",
      "question": "Which cloud type provides both public and private access?",
      "options": ["Private", "Hybrid", "Community", "Public"],
      "answer": "Hybrid"
    },
    {
      "id": 34,
      "category": "Cloud Computing",
      "question": "Which protocol is mostly used for secure file transfer in cloud?",
      "options": ["HTTP", "HTTPS", "SFTP", "FTP"],
      "answer": "SFTP"
    },
    {
      "id": 35,
      "category": "Cloud Computing",
      "question": "Which cloud deployment provides services to a specific group/organization?",
      "options": ["Public", "Private", "Community", "Hybrid"],
      "answer": "Community"
    },
    {
      "id": 36,
      "category": "Computer Network",
      "question": "Which layer of OSI model handles error detection?",
      "options": ["Physical", "Data Link", "Network", "Transport"],
      "answer": "Data Link"
    },
    {
      "id": 37,
      "category": "Computer Network",
      "question": "Which protocol is connection-oriented?",
      "options": ["UDP", "TCP", "IP", "ARP"],
      "answer": "TCP"
    },
    {
      "id": 38,
      "category": "Computer Network",
      "question": "What is the default port number for HTTPS?",
      "options": ["21", "25", "80", "443"],
      "answer": "443"
    },
    {
      "id": 39,
      "category": "Computer Network",
      "question": "Which addressing is used by the Internet?",
      "options": ["MAC", "IP", "Port", "ARP"],
      "answer": "IP"
    },
    {
      "id": 40,
      "category": "Computer Network",
      "question": "Which protocol translates domain names to IP addresses?",
      "options": ["DHCP", "DNS", "SMTP", "SNMP"],
      "answer": "DNS"
    }
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
