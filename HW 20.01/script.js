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







const questions = [
  {
    question: "Күн жүйесіндегі ең үлкен планетаның массасы Жердің массасынан қанша есе үлкен?",
    answers: ["317 есе", "95 есе", "318 есе", "100 есе"],
    correct: "317 есе",
  },
  {
    question: "Күн жүйесіндегі ең кіші планетаның диаметрі қанша километр?",
    answers: ["4,879 км", "12,742 км", "6,779 км", "3,474 км"],
    correct: "4,879 км",
  },
  {
    question: "Күн жүйесіндегі ең ыстық планета қайсы және оның орташа температурасы қанша градус Цельсий?",
    answers: ["Шолпан, 462°C", "Меркурий, 427°C", "Жер, 15°C", "Марс, -63°C"],
    correct: "Шолпан, 462°C",
  },
  {
    question: "Күн жүйесіндегі ең ұзақ күн қай планетада және оның ұзақтығы қанша сағат?",
    answers: ["Шолпан, 5,832 сағат", "Марс, 24.6 сағат", "Юпитер, 9.9 сағат", "Сатурн, 10.7 сағат"],
    correct: "Шолпан, 5,832 сағат",
  },
  {
    question: "Күн жүйесіндегі ең үлкен тау қай планетада және оның биіктігі қанша километр?",
    answers: ["Марс, 21.9 км", "Жер, 8.8 км", "Шолпан, 11 км", "Юпитер, 25 км"],
    correct: "Марс, 21.9 км",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;







function loadQuestion() {
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