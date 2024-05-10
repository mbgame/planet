import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

export const myScene = () => {
// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add an orbit control
const controls = new OrbitControls(camera, renderer.domElement);

// Load textures
const textureLoader = new THREE.TextureLoader();
const earthDayMap = textureLoader.load('/textures/2k_earth_daymap.jpg');
const earthNightMap = textureLoader.load('/textures/2k_earth_nightmap.jpg');
const earthNormalMap = textureLoader.load('/textures/download/2k_earth_normal_map.tif');
const earthSpecularMap = textureLoader.load('/textures/2k_earth_specular_map.tif');
const earthCloudsMap = textureLoader.load('/textures/2k_earth_clouds.jpg');
const moonTexture = textureLoader.load('/textures/2k_moon.jpg');

// Create Earth material
const earthMaterial = new THREE.MeshPhongMaterial({
  map: earthDayMap,
  normalMap: earthNormalMap,
  specularMap: earthSpecularMap,
  specular: new THREE.Color('grey')
});

// Create Earth mesh
const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Create cloud layer
const cloudGeometry = new THREE.SphereGeometry(5.05, 64, 64);
const cloudMaterial = new THREE.MeshPhongMaterial({
  map: earthCloudsMap,
  transparent: true,
  opacity: 0.4
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);

// Create Moon
const moonMaterial = new THREE.MeshPhongMaterial({
  map: moonTexture
});
const moonGeometry = new THREE.SphereGeometry(1.5, 64, 64);
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(15, 0, 0);
scene.add(moon);

// Add light to the scene
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(100, 0, 100);
scene.add(pointLight);

// Set camera position
camera.position.set(10, 10, 20);
controls.update();

// Animate Earth and Moon
function animate() {
  requestAnimationFrame(animate);

  // Rotate Earth and clouds
  earth.rotation.y += 0.001;
  clouds.rotation.y += 0.0012;

  // Rotate Moon around Earth
  moon.position.x = 15 * Math.cos(Date.now() * 0.001);
  moon.position.z = 15 * Math.sin(Date.now() * 0.001);

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

}