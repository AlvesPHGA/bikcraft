// Ativar menu
const links_menu = document.querySelectorAll("nav a");

function active_link(el) {
  const url = location.href;
  const src = el.href;

  if (url.includes(src)) el.classList.add("__active");
}

links_menu.forEach(active_link);
