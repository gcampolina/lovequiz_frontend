const questions = [
  {
    question: "Quando você recebe um elogio inesperado, como se sente?",
    answers: [
      { text: "Super valorizado pelas palavras", value: "Palavras" },
      { text: "Feliz por alguém agir por mim", value: "Atos" },
      { text: "Animado por ganhar algo especial", value: "Presentes" },
      { text: "Aproveitando o tempo juntos", value: "Tempo" },
      { text: "Aquece meu coração com um abraço", value: "Toque" },
    ]
  },
  {
    question: "Seu parceiro(a) quer te surpreender. O que você mais gostaria?",
    answers: [
      { text: "Uma carta ou mensagem carinhosa", value: "Palavras" },
      { text: "Alguém fazendo algo por mim sem eu pedir", value: "Atos" },
      { text: "Um presente inesperado e significativo", value: "Presentes" },
      { text: "Um passeio ou atividade juntos", value: "Tempo" },
      { text: "Um abraço apertado ou carinho físico", value: "Toque" },
    ]
  },
  {
    question: "Em um dia difícil, o que mais te ajuda a se sentir amado?",
    answers: [
      { text: "Palavras de incentivo e apoio", value: "Palavras" },
      { text: "Alguém fazendo algo concreto pra me ajudar", value: "Atos" },
      { text: "Um presente para animar meu dia", value: "Presentes" },
      { text: "Passar tempo de qualidade juntos", value: "Tempo" },
      { text: "Um abraço ou toque reconfortante", value: "Toque" },
    ]
  },
  {
    question: "Qual dessas ações faria você sorrir mais?",
    answers: [
      { text: "Receber elogios sinceros", value: "Palavras" },
      { text: "Alguém ajudando sem eu pedir", value: "Atos" },
      { text: "Um presente inesperado", value: "Presentes" },
      { text: "Uma atividade divertida juntos", value: "Tempo" },
      { text: "Um carinho físico espontâneo", value: "Toque" },
    ]
  },
  {
    question: "Se pudesse escolher, qual gesto te deixaria mais próximo(a) do seu parceiro?",
    answers: [
      { text: "Conversas sinceras e profundas", value: "Palavras" },
      { text: "Alguém cuidando de você de forma prática", value: "Atos" },
      { text: "Presentes que mostram atenção", value: "Presentes" },
      { text: "Passar tempo sem distrações, só nós dois", value: "Tempo" },
      { text: "Contato físico carinhoso", value: "Toque" },
    ]
  },
  {
    question: "Você prefere demonstrar amor através de...",
    answers: [
      { text: "Palavras gentis e motivadoras", value: "Palavras" },
      { text: "Fazendo algo útil para a outra pessoa", value: "Atos" },
      { text: "Presentes que surpreendem", value: "Presentes" },
      { text: "Momentos de qualidade juntos", value: "Tempo" },
      { text: "Toques e abraços", value: "Toque" },
    ]
  },
  {
    question: "O que faz você se sentir mais especial em um relacionamento?",
    answers: [
      { text: "Palavras que expressam carinho e apreço", value: "Palavras" },
      { text: "Atos de cuidado inesperados", value: "Atos" },
      { text: "Receber um presente pensado com carinho", value: "Presentes" },
      { text: "Passar um dia inteiro juntos", value: "Tempo" },
      { text: "Receber carinho físico espontâneo", value: "Toque" },
    ]
  },
  {
    question: "Você gosta quando alguém demonstra amor de forma...",
    answers: [
      { text: "Falando o que sente por você", value: "Palavras" },
      { text: "Fazendo algo que ajuda sua rotina", value: "Atos" },
      { text: "Com pequenos presentes e surpresas", value: "Presentes" },
      { text: "Apenas compartilhando momentos juntos", value: "Tempo" },
      { text: "Com abraços e toques carinhosos", value: "Toque" },
    ]
  },
  {
    question: "Durante uma comemoração especial, o que você prefere?",
    answers: [
      { text: "Discursos ou palavras emocionantes", value: "Palavras" },
      { text: "Que façam algo especial pra você", value: "Atos" },
      { text: "Ganhar algo significativo", value: "Presentes" },
      { text: "Viver o momento com qualidade", value: "Tempo" },
      { text: "Receber abraços e carinho físico", value: "Toque" },
    ]
  },
  {
    question: "Qual desses gestos faz você sentir mais conexão?",
    answers: [
      { text: "Conversas abertas e sinceras", value: "Palavras" },
      { text: "Alguém cuidando de você de forma prática", value: "Atos" },
      { text: "Presentes que demonstram atenção", value: "Presentes" },
      { text: "Momentos juntos sem distrações", value: "Tempo" },
      { text: "Contato físico constante", value: "Toque" },
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