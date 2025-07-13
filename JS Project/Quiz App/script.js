const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the tallest animal in the world?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Horse", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Leopard", correct: false },
      { text: "Tiger", correct: false },
      { text: "Lion", correct: false },
    ],
  },
];

const questionele = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const next = document.getElementById("next-btn");
let score = 0;
let currentquestionindex = 0;

function startQuiz() {
  score = 0;
  currentquestionindex = 0; 
  next.innerHTML = "Next";
  showQuestion();
}


function showQuestion() {
  resetstate();
  let currentquestion = questions[currentquestionindex];
  let questionno = currentquestionindex + 1;
  questionele.innerHTML = questionno + "." + currentquestion.question;

  currentquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetstate() {
  next.style.display = "none";
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if (iscorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  next.style.display = "block";
}

function showscore() {
  resetstate();
  questionele.innerHTML = `You scored ${score} out of ${questions.length} !`;
  next.innerHTML = "Play Again";
  next.style.display = "block";
}
function handlenextbtn() {
  currentquestionindex++;
  if (currentquestionindex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}
next.addEventListener("click", () => {
  if (currentquestionindex < questions.length) {
    handlenextbtn();
  } else {
    startQuiz();
  }
});

startQuiz();
