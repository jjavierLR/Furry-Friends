/* *Acción para que aparezca y desaparezca la lista en movil */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
