window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('mostrar')
  }, 4000);
}

document.querySelector(".menu-hamburgesa").addEventListener("click", () => {
  document.querySelector(".contenedor").classList.toggle("cambio")
})

document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth'
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset'
  }, 1000);
})