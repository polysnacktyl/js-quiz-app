//an object to hold questions, answer choices, and correct answer key
var quiztions = [
  {
    question: "commonly used data types do not include:",
    answers: {
      a: " strings",
      b: " booleans",
      c: " alerts",
      d: " numbers",
    },
    correctAnswer: "c"
  },

  {
    question: "If/else statement condtions are enclosed in______.",
    answers: {
      a: " quotes",
      b: " curly brackets",
      c: " parentheses",
      d: " square brackets",
    },
    correctAnswer: "c"
  },

  {
    question: "Arrays in JavaScript can be used to store ____",
    answers: {
      a: " numbers and strings",
      b: " other arrays",
      c: " booleans",
      d: " all of the above",
    },
    correctAnswer: "d"
  },

  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      a: " commas",
      b: " curly brackets",
      c: " quotes",
      d: " parentheses",
    },
    correctAnswer: "c"
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: " JavaScript",
      b: " terminal/bash",
      c: " for loops",
      d: " console.log",
    },
    correctAnswer: "d"
  }
];

setTime() 

//setting variables for making javascript references to html elements 
var quizSpace = document.getElementById("quiz-space");
var startQuiz = document.getElementById("startquizbutton");
var nextButton = document.getElementById("nextquest");

//eventlisteners for buttons
nextButton.addEventListener("click", nextQuestion);
startQuiz.addEventListener("click", showQuestion);

//variables for keeping track of question, game score
var currentQuestion = 0;
var currentScore = 0;


//function compares selected answer to value of correct answer in quiztions variable array object 
function checkAnswer() {
  var getSelectedValue = document.querySelector('input[name="justOne"]:checked');

  if (getSelectedValue != null) {
    console.log("Selected radio button values is: " + getSelectedValue.value);
    if (getSelectedValue.value == quiztions[currentQuestion].correctAnswer) {
      currentScore = currentScore + 1;
      console.log(currentScore);
      //else (if it is null) subtract time from timer once timer is a thing
    }
  }
}

//starts the game when user clicks start button the button hides, the next-question button appears, 
//first question elements are generated and populate the quizSpace
function showQuestion() {
  document.getElementById('startquizbutton').style.visibility = 'hidden';
  document.getElementById('nextquest').style.visibility = 'visible';

  var tag = document.createElement("div");

  var input1 = document.createElement("input");
  var label1 = document.createElement("label");
  var li1 = document.createElement("li");

  var input2 = document.createElement("input");
  var label2 = document.createElement("label");
  var li2 = document.createElement("li");

  var input3 = document.createElement("input");
  var label3 = document.createElement("label");
  var li3 = document.createElement("li");

  var input4 = document.createElement("input");
  var label4 = document.createElement("label");
  var li4 = document.createElement("li");

  var ul = document.createElement("ul");

  tag.setAttribute("style", "text-align: left; font-size: 36px; font-weight: bold; font-variant: small-caps;", "role", "group");

  input1.setAttribute("type", "radio");
  input1.setAttribute("name", "justOne");
  input1.setAttribute("id", "a");
  input1.setAttribute("value", "a");

  input2.setAttribute("type", "radio");
  input2.setAttribute("name", "justOne");
  input2.setAttribute("id", "b");
  input2.setAttribute("value", "b");

  input3.setAttribute("type", "radio");
  input3.setAttribute("name", "justOne");
  input3.setAttribute("id", "c");
  input3.setAttribute("value", "c");

  input4.setAttribute("type", "radio");
  input4.setAttribute("name", "justOne");
  input4.setAttribute("id", "d");
  input4.setAttribute("value", "d");

  tag.textContent = quiztions[currentQuestion].question;
  label1.textContent = quiztions[currentQuestion].answers.a;
  label2.textContent = quiztions[currentQuestion].answers.b;
  label3.textContent = quiztions[currentQuestion].answers.c;
  label4.textContent = quiztions[currentQuestion].answers.d;
  li1.append(input1, label1);
  li2.append(input2, label2);
  li3.append(input3, label3);
  li4.append(input4, label4);

  ul.append(li1, li2, li3, li4);
  quizSpace.appendChild(tag);
  quizSpace.appendChild(ul);

  input1.addEventListener("click", checkAnswer);
  input2.addEventListener("click", checkAnswer);
  input3.addEventListener("click", checkAnswer);
  input4.addEventListener("click", checkAnswer);

}


//clears textContent, displays next question, calls checks answer function and updates score 
function nextQuestion() {
  quizSpace.textContent = "";
  currentQuestion = currentQuestion + 1;
  showQuestion();
  checkAnswer();
}


var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timeHead");

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "time's up!";
}