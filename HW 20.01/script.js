const questionElement = document.querySelector(".question");
const choiceButtons = document.querySelectorAll(".choice-btn");
const skipButton = document.querySelector(".skip-btn");
const scoreElement = document.querySelector(".score");
const timerElement = document.querySelector(".timer");
const startButton = document.querySelector(".start-btn");

const questions = [
  {
    question: "Қай планета Қызыл планета деп аталады?",
    answers: ["Жер", "Юпитер", "Марс", "Шолпан"],
    correct: "Марс",
  },
  {
    question: "Күн жүйесіндегі ең үлкен планета қайсы?",
    answers: ["Жер", "Юпитер", "Марс", "Шолпан"],
    correct: "Юпитер",
  },
  {
    question: "Күнге ең жақын планета қайсы?",
    answers: ["Меркурий", "Шолпан", "Жер", "Марс"],
    correct: "Меркурий",
  },
  {
    question: "Қай планета Көк планета деп аталады?",
    answers: ["Марс", "Жер", "Нептун", "Уран"],
    correct: "Жер",
  },
  {
    question: "Күн жүйесіндегі ең кіші планета қайсы?",
    answers: ["Меркурий", "Шолпан", "Жер", "Марс"],
    correct: "Меркурий",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0;
let timerInterval;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choiceButtons.forEach((button, index) => {
    button.textContent = `${String.fromCharCode(65 + index)}. ${
      currentQuestion.answers[index]
    }`;
    button.onclick = () => checkAnswer(currentQuestion.answers[index]);
  });

  updateScore();
  startTimer();
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    alert("Дұрыс!");
    score++;
  } else {
    alert("Қате!");
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(timerInterval);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert(`Сұрақтар аяқталды! Сіздің ұпайыңыз: ${score}`);
    endGame();
  }
}

function updateScore() {
  scoreElement.textContent = `Ұпай: ${score}`;
}

function startTimer() {
  timeLeft = 15;
  timerElement.textContent = `Уақыт: ${timeLeft}`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Уақыт: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Уақыт бітті!");
      nextQuestion();
    }
  }, 1000);
}

function endGame() {
  questionElement.textContent = "Ойын аяқталды!";
  document.querySelector(".choices").style.display = "none";
  skipButton.style.display = "none";
}

skipButton.onclick = nextQuestion;

startButton.onclick = () => {
  startButton.style.display = "none";
  questionElement.style.display = "block";
  document.querySelector(".choices").style.display = "block";
  choiceButtons.forEach((button) => (button.style.display = "block"));
  skipButton.style.display = "block";
  loadQuestion();
};
