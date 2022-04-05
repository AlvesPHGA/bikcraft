// Ativar menu
const links_menu = document.querySelectorAll("nav a");

function active_link(el) {
  const url = location.href;
  const src = el.href;

  if (url.includes(src)) el.classList.add("__active");
}

links_menu.forEach(active_link);

// Itens orçamento
const parametro = new URLSearchParams(location.search);

function getProd(parametro) {
  const item = document.getElementById(parametro);
  if (item) item.checked = true;
}

parametro.forEach(getProd);

// Expande perguntas
const questions = document.querySelectorAll(".header-q");

function show_question(el) {
  const item = el.currentTarget;
  const question = item.getAttribute("aria-controls");
  const answer = document.getElementById(question);

  answer.classList.toggle("__active");

  const active = answer.classList.contains("__active");

  item.setAttribute("aria-expanded", active);
}

function eventQuestions(e) {
  e.addEventListener("click", show_question);
}

questions.forEach(eventQuestions);
console.log(questions);
