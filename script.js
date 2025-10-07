// Perguntas do quiz
const questions = [
  {
    question: "Você se sente mais amado quando seu parceiro...",
    answers: [
      { text: "Diz palavras gentis", value: "Palavras" },
      { text: "Faz algo por você", value: "Atos" },
      { text: "Te dá um presente", value: "Presentes" },
      { text: "Passa tempo junto", value: "Tempo" },
      { text: "Te toca carinhosamente", value: "Toque" },
    ],
  },
  {
    question: "Você demonstra amor mais através de...",
    answers: [
      { text: "Palavras", value: "Palavras" },
      { text: "Ações", value: "Atos" },
      { text: "Presentes", value: "Presentes" },
      { text: "Tempo juntos", value: "Tempo" },
      { text: "Toque", value: "Toque" },
    ],
  },
  // você pode adicionar mais perguntas...
];

let currentQuestion = 0;
let scores = { Palavras:0, Atos:0, Presentes:0, Tempo:0, Toque:0 };

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<h3>${q.question}</h3>`;
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.classList.add("btn");
    btn.onclick = () => selectAnswer(ans.value);
    questionContainer.appendChild(btn);
  });
}

function selectAnswer(value) {
  scores[value]++;
  currentQuestion++;
  if(currentQuestion < questions.length) {
    showQuestion();
  } else {
    // todas perguntas respondidas, redirecionar pro "pagamento"
    window.location.href = "result.html";
  }
}

showQuestion();
