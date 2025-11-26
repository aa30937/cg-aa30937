import * as THREE from 'three';

// Scene and Camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 15);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ground plane (green field)
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

// Objects on the ground

// Yellow blocks (like buildings)
const blockGeometry = new THREE.BoxGeometry(3, 1, 2);
const blockMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });

const block1 = new THREE.Mesh(blockGeometry, blockMaterial);
block1.position.set(-5, 0.5, -5);
scene.add(block1);

const block2 = new THREE.Mesh(blockGeometry, blockMaterial);
block2.position.set(5, 0.5, -3);
scene.add(block2);

// Cylinder (like a tree trunk or pillar)
const cylinderGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3, 32);
const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0x008000 });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0, 1.5, 0);
scene.add(cylinder);

// Red cone (marker)
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(0, 1, 5);
scene.add(cone);

// White circle (marking area)
const circleGeometry = new THREE.CircleGeometry(1, 32);
const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.rotation.x = -Math.PI / 2;
circle.position.set(0, 0.01, 5);
scene.add(circle);

// Animation
function animate() {
  requestAnimationFrame(animate);

  // Rotate some objects
  cylinder.rotation.y += 0.01;
  cone.rotation.y += 0.02;

  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
