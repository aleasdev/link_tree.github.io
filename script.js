/* 
// Crear un elemento de script para cada archivo que se va a importar
const threeScript = document.createElement('script');
const vantaScript = document.createElement('script');

// Establecer el atributo src de cada elemento de script con la URL del archivo correspondiente
threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';

// Agregar cada elemento de script al documento
document.head.appendChild(threeScript);
document.head.appendChild(vantaScript);

// Inicializar el efecto VANTA.BIRDS
window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xfdeddc,
      color1: 0xcf515a,
      color2: 0xede7e2,
      colorMode: "lerpGradient",
      birdSize: 1.5,
      wingSpan: 40.0,
      separation: 90.0,
      alignment: 46.0,
      cohesion: 36.0,
      quantity: 3.0,
  });
}); */

window.onload = function(){
  cambiarOpacidadDeMain()
  cambiarOpacidadDeBirds()
}

function cambiarOpacidadDeMain() {
  var botones = document.querySelectorAll("#contenedorMain"); /* Obtiene todos los elementos li dentro del contenedor */
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.opacity = "1"; /* Cambia la opacidad a 1 */
  }
  return;
}

function cambiarOpacidadDeBirds(){
  var pajaro = document.getElementById("vanta");
  pajaro.style.opacity = "1";
  return;
} 
