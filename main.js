import * as THREE from 'three';
import './style.css'
import { createBoxGeometry } from "./createShape";

document.querySelector('#app').innerHTML = `
  <h1>Spin that shape!</h1>
  <canvas id="geometry"></canvas>
`

const boxes = []

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(3, 3, 1.5);
camera.lookAt(0, 0, 0);


const scene = new THREE.Scene();
scene.add(new THREE.GridHelper(9, 9));
scene.add(new THREE.AxesHelper(9));

const geometryBox = createBoxGeometry(1, 1, 1);
const lineSegments = new THREE.LineSegments( geometryBox, new THREE.LineBasicMaterial( { color: 0x0080ff, linewidth: 3 } ) );
lineSegments.computeLineDistances();

boxes.push(lineSegments);
scene.add(lineSegments);

const renderer = new THREE.WebGLRenderer( {
  canvas: document.getElementById('geometry'),
  antialias: true,
});

renderer.setSize( window.innerWidth * 0.75, window.innerHeight * 0.75 );
renderer.setAnimationLoop(() => {
  boxes.forEach((box) => {
    const timer = Date.now() * 0.001;
    box.position.z = Math.cos(timer) * 2;
  })
  // lineSegments.rotation.x = time / 2000;
  renderer.render(scene, camera);
});
