// Stylesheets
import 'SCSS/index';

import * as THREE from 'three';

import Mountains from 'Components/mountains';

// Create the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('mountains').appendChild(renderer.domElement);

const mountains = new Mountains(5, 100);

scene.add(mountains);

// // Debug mode
// // camera.rotation.x = 1.25;
// // camera.position.z = 5;
// // camera.position.y = -100;
// // renderer.render(scene, camera);

// Place the camera
camera.rotation.x = 1.5;
camera.position.y = -30;
camera.position.z = 0.5;

var animate = function () {
    requestAnimationFrame(animate);

    camera.position.y += 0.04;

    renderer.render(scene, camera);
};

animate();