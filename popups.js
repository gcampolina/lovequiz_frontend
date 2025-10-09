const nomes = ["Ana", "Lucas", "Mariana", "Gabriel", "Beatriz", "Rafael", "Camila", "Felipe", "Juliana", "Pedro"];

function nomeAleatorio() {
  return nomes[Math.floor(Math.random() * nomes.length)];
}

function criarPopup() {
  const container = document.querySelector(".container");
  if (!container) return;

  const popup = document.createElement("div");
  popup.className = "quiz-popup";
  popup.textContent = `${nomeAleatorio()} acabou de completar o quiz! 🎉`;

  container.appendChild(popup);

  // Remove após 3s
  setTimeout(() => {
    popup.remove();
  }, 4000);
}

// Chama a cada 7 segundos
setInterval(criarPopup, 7000);
