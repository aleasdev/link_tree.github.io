import * as THREE from 'three.r134.min.js';
import VANTA from 'vanta.birds.min.js';

// Inicializar el efecto VANTA.BIRDS
VANTA.BIRDS({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xrgb(253,237,220),
  color1: 0xrgb(207,81,90),
  color2: 0xrgb(237,231,226),
  colorMode: "lerpGradient",
  birdSize: 1.10,
  wingSpan: 40.00,
  separation: 50.00,
  alignment: 46.00,
  cohesion: 36.00,
  quantity: 4.00
});