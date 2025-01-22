const questionElement = document.querySelector(".question");
const choiceButtons = document.querySelectorAll(".choice-btn");
const skipButton = document.querySelector(".skip-btn");
const scoreElement = document.querySelector(".score");
const timerElement = document.querySelector(".timer");
const startButton = document.querySelector(".start-btn");
const correctCard = document.querySelector(".card.correct");
const incorrectCard = document.querySelector(".card.incorrect");
const endGameCard = document.querySelector(".end-game-card");
const restartButton = document.querySelector(".restart-btn");

const apiUrl = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions';

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

async function fetchQuestions() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.map(item => ({
      question: item.question,
      answers: item.options,
      correct: item.answer
    }));
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

async function loadQuestion() {
  if (questions.length === 0) {
    await fetchQuestions();
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choiceButtons.forEach((button, index) => {
    button.textContent = `${String.fromCharCode(65 + index)}. ${currentQuestion.answers[index]}`;
    button.onclick = () => checkAnswer(currentQuestion.answers[index]);
  });

  updateScore();
  startTimer();
}

function showNotification(isCorrect) {
  const card = isCorrect ? correctCard : incorrectCard;
  card.style.display = "block";
  setTimeout(() => {
    card.style.display = "none";
    nextQuestion();
  }, 1000);
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    score++;
    showNotification(true);
  } else {
    showNotification(false);
  }
}

function nextQuestion() {
  clearInterval(timerInterval);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
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
      showNotification(false);
    }
  }, 1000);
}

function endGame() {
  questionElement.style.display = "none";
  document.querySelector(".choices").style.display = "none";
  skipButton.style.display = "none";
  endGameCard.style.display = "block";
  endGameCard.querySelector(".final-score").textContent = score;
}

restartButton.onclick = () => {
  endGameCard.style.display = "none";
  startButton.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  clearInterval(timerInterval);
};

skipButton.onclick = nextQuestion;

startButton.onclick = () => {
  startButton.style.display = "none";
  questionElement.style.display = "block";
  document.querySelector(".choices").style.display = "block";
  choiceButtons.forEach((button) => (button.style.display = "block"));
  skipButton.style.display = "block";
  loadQuestion();
};