/* abrir e fechar menu */

var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click' ,()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
    }
    else{
        ul.classList.add('ativo');
    }

})

/* fecha menu ao clicar em um link */


const links = document.querySelectorAll('.ul a');


links.forEach(link => {
  link.addEventListener('click', () => {
    ul.classList.remove('ativo');
  });
});

// Questionário

const questions = [
  {
    question: "Como a arte pode ajudar na sustentabilidade?",
    options: [
      "Diminuindo o uso da internet",
      "Sensibilizando pessoas com mensagens visuais",
      "Substituindo a ciência",
      "Proibindo plásticos em museus"
    ],
    answer: 1
  },
  {
    question: "Qual dessas ações é considerada sustentável?",
    options: [
      "Uso excessivo de carros",
      "Reciclagem e reaproveitamento de materiais",
      "Desmatamento para criação de pasto",
      "Construção de grandes usinas de carvão"
    ],
    answer: 1
  },
  {
    question: "O que é inovação verde?",
    options: [
      "Criar algo novo sem pensar no meio ambiente",
      "Substituir pessoas por máquinas",
      "Soluções tecnológicas com impacto ambiental positivo",
      "Usar tinta verde em tudo"
    ],
    answer: 2
  },
  {
    question: "Qual é o papel da educação ambiental?",
    options: [
      "Ensinar apenas ciências naturais",
      "Promover a consciência ecológica e cidadania",
      "Eliminar o uso da tecnologia",
      "Incentivar o consumismo consciente"
    ],
    answer: 1
  },
  {
    question: "Como a criatividade pode transformar o futuro?",
    options: [
      "Criando ideias inovadoras para resolver desafios ambientais",
      "Substituindo políticas públicas",
      "Diminuindo o uso de arte nas escolas",
      "Ignorando os problemas sociais"
    ],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("quiz-question").textContent = q.question;

  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });

  updateProgressBar();
}

function checkAnswer(selected, button) {
  const correctIndex = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll("#quiz-options button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) btn.classList.add("correct");
    if (idx === selected && idx !== correctIndex) btn.classList.add("wrong");
  });

  if (selected === correctIndex) {
    score++;
    document.getElementById("sound-correct").play();
  } else {
    document.getElementById("sound-wrong").play();
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = `${progress}%`;
}

function endQuiz() {
  document.getElementById("quiz-question").textContent = "Quiz finalizado!";
  document.getElementById("quiz-options").innerHTML = "";
  document.querySelector(".quiz-button").style.display = "none";
  document.getElementById("quiz-score").textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
  document.getElementById("progress-fill").style.width = `100%`;
}

window.onload = showQuestion;


// Rodapé Scroll suave para o topo

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

