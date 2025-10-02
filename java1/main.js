import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight, 
    0.1,  
    1000 
);

camera.position.z = 10;

const geometry = new THREE.BoxGeometry(2, 2, 2); 
const material  = new THREE.MeshStandardMaterial({ color: 0xff5555, metalness: 0.5, roughness: 0.3 });
const cubeMesh = new THREE.Mesh(geometry, material); 
scene.add(cubeMesh); 

const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x55ff55, metalness: 0.5, roughness: 0.2 });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.x = -4;
scene.add(sphereMesh);

const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x5555ff, metalness: 0.6, roughness: 0.3 });
const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
torusMesh.position.x = 4;
scene.add(torusMesh);

const light = new THREE.DirectionalLight(0xffffff, 1); 
light.position.set(5, 5, 5); 
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5); 
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;

    sphereMesh.rotation.y += 0.02;
    sphereMesh.position.y = Math.sin(Date.now() * 0.002) * 2;

    torusMesh.rotation.x += 0.015;
    torusMesh.rotation.y += 0.015;

    renderer.render(scene, camera);
}
animate();

document.body.appendChild(renderer.domElement);