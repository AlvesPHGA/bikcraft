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
