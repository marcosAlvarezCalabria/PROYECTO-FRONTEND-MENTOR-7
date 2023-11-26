

// referencia de la imagen
var imagen = document.getElementById('imagen11').getElementsByTagName('img')[0];

// Función para cambiar la imagen según el tamaño de la pantalla
function cambiarImagenSegunTamaño() {
  // Verifica el ancho de la ventana
  if (window.innerWidth > 1440) {
    imagen.src = "assets/images/illustration-sign-up-desktop.svg";
  } else if (window.innerWidth > 800) {
    imagen.src = "assets/images/illustration-sign-up-mobile - copia.svg";
  } else {
    imagen.src = "assets/images/illustration-sign-up-mobile.svg";
  }
}
// Llamamos a la función cuando la página carga y cuando cambia el tamaño de la ventana
window.onload = cambiarImagenSegunTamaño;
window.onresize = cambiarImagenSegunTamaño;
let container=document.querySelector('#container')
let secondSeccion=document.querySelector('#second-seccion')
let boton=document.querySelector('#button-subscribe');

let span=document.querySelector('span');

boton.addEventListener("click",()=>{
    container.style.display="none"
    secondSeccion.style.display="block";
})
let email = document.querySelector('#email');


email.addEventListener('keyup',()=>{
    span.innerHTML = email.value;

console.log(email)

  

})



