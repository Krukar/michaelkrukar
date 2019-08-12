// Stylesheets
import 'SCSS/index';

import * as THREE from 'three';

// Init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


// Model
const geometry = new THREE.PlaneGeometry(20, 20, 25, 25); // Create a mesh

// This is where the magic happens
// Increase the Z value of each mesh
let z = 0;
for (let i = 0; i < geometry.vertices.length; i++) {
    z = z + 0.001;
    // geometry.vertices[i].z = data[i] / 65535 * 25;
    geometry.vertices[i].z = Math.random();
    // geometry.vertices[i].z = z;
}

const material = new THREE.MeshBasicMaterial({
    color: 'red',
    // wireframe: true
});

const plane = new THREE.Mesh(geometry, material);
// scene.add(plane);

// Position and rotate Camera
camera.rotation.x = 75 * Math.PI / 180
camera.position.y = -10;
camera.position.z = 1;

// DEBUG Cube
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshBasicMaterial({
    color: 'white'
});
var cube = new THREE.Mesh(geometry2, material2);
cube.translateY(1);
cube.rotation.z = 0.5;

cube.castShadow = true;
cube.receiveShadow = false;

scene.add(cube);

// Lights
var spotLight = new THREE.SpotLight(0xFF7F00, 2);
spotLight.castShadow = true;
spotLight.angle = 0.3;
spotLight.penumbra = 0.2;
spotLight.decay = 2;
spotLight.distance = 50;
spotLight.position.set(15, 40, 45);
var lightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(lightHelper);

lightHelper.update();


renderer.render(scene, camera);