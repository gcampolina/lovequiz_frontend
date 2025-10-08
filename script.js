const questions = [
  {
    question: "Você se sente mais amado quando seu parceiro...",
    answers: [
      { text: "Diz palavras gentis", value: "Palavras" },
      { text: "Faz algo por você", value: "Atos" },
      { text: "Te dá um presente", value: "Presentes" },
      { text: "Passa tempo junto", value: "Tempo" },
      { text: "Te toca carinhosamente", value: "Toque" },
    ]
  },
  {
    question: "Você demonstra amor mais através de...",
    answers: [
      { text: "Palavras", value: "Palavras" },
      { text: "Ações", value: "Atos" },
      { text: "Presentes", value: "Presentes" },
      { text: "Tempo juntos", value: "Tempo" },
      { text: "Toque", value: "Toque" },
    ]
  },
  {
    question: "Quando estou triste, prefiro que meu parceiro(a)...",
    answers: [
      { text: "Me escute atentamente", value: "Palavras" },
      { text: "Me distraia com algo divertido", value: "Atos" },
      { text: "Me dê espaço", value: "Tempo" },
      { text: "Me ajude a resolver o problema", value: "Atos" },
      { text: "Me abrace", value: "Toque" },
    ]
  },
  {
    question: "Qual gesto mais te faz sorrir?",
    answers: [
      { text: "Elogios sinceros", value: "Palavras" },
      { text: "Ajudar em tarefas", value: "Atos" },
      { text: "Receber presentes inesperados", value: "Presentes" },
      { text: "Sair para passear juntos", value: "Tempo" },
      { text: "Abraços e beijos", value: "Toque" },
    ]
  },
  {
    question: "Para você, um presente perfeito é...",
    answers: [
      { text: "Uma carta ou bilhete", value: "Palavras" },
      { text: "Um favor especial", value: "Atos" },
      { text: "Um presente material", value: "Presentes" },
      { text: "Um dia juntos", value: "Tempo" },
      { text: "Um abraço apertado", value: "Toque" },
    ]
  },
  {
    question: "Qual demonstração de amor te toca mais?",
    answers: [
      { text: "Palavras de incentivo", value: "Palavras" },
      { text: "Ações de cuidado", value: "Atos" },
      { text: "Pequenos presentes", value: "Presentes" },
      { text: "Momentos de qualidade", value: "Tempo" },
      { text: "Contato físico", value: "Toque" },
    ]
  },
  {
    question: "Se sente mais amado quando...",
    answers: [
      { text: "Ouve palavras carinhosas", value: "Palavras" },
      { text: "Recebe ajuda prática", value: "Atos" },
      { text: "Ganha algo especial", value: "Presentes" },
      { text: "Passa tempo juntos", value: "Tempo" },
      { text: "Recebe carinho físico", value: "Toque" },
    ]
  },
  {
    question: "Você prefere passar tempo com seu parceiro...",
    answers: [
      { text: "Conversando sobre sentimentos", value: "Palavras" },
      { text: "Fazendo atividades juntos", value: "Atos" },
      { text: "Trocar pequenos presentes", value: "Presentes" },
      { text: "Apenas curtindo a companhia", value: "Tempo" },
      { text: "Abraçando ou segurando a mão", value: "Toque" },
    ]
  },
  {
    question: "Qual destas atitudes te deixa mais feliz?",
    answers: [
      { text: "Receber elogios", value: "Palavras" },
      { text: "Receber ajuda prática", value: "Atos" },
      { text: "Ganhar presentes inesperados", value: "Presentes" },
      { text: "Ter momentos de qualidade juntos", value: "Tempo" },
      { text: "Receber carinho físico", value: "Toque" },
    ]
  },
  {
    question: "O que mais te aproxima do parceiro?",
    answers: [
      { text: "Conversas profundas", value: "Palavras" },
      { text: "Gestos de cuidado", value: "Atos" },
      { text: "Presentes que mostram atenção", value: "Presentes" },
      { text: "Momentos juntos", value: "Tempo" },
      { text: "Contato físico carinhoso", value: "Toque" },
    ]
  },
];

let currentQuestion = 0;
let scores = { Palavras:0, Atos:0, Presentes:0, Tempo:0, Toque:0 };


const backBtn = document.getElementById("back-btn");
const questionContainer = document.getElementById("question-container");
const progress = document.getElementById("progress");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<h3>${q.question}</h3>`;
  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.classList.add("btn");
    btn.onclick = () => selectAnswer(ans.value);
    questionContainer.appendChild(btn);
  });
  // Atualiza barra de progresso
  progress.style.width = `${((currentQuestion)/questions.length)*100}%`;


   if(currentQuestion === 0) {
    backBtn.style.display = "none";
  } else {
    backBtn.style.display = "inline-block";
  }
  
}

function selectAnswer(value) {
  scores[value]++;
  currentQuestion++;
  if(currentQuestion < questions.length) {
    showQuestion();
  } else {
    // Salva pontuação e vai para resultado
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "result.html";
  }

 
}

showQuestion();




backBtn.addEventListener("click", () => {
  if(currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});