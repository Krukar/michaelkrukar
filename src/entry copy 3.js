// Stylesheets
import 'SCSS/index';

import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 25;
camera.position.y = -5;

const geometry = new THREE.PlaneGeometry(50, 50, 200, 200); // Create a mesh

for (let i = 0; i < geometry.vertices.length; i++) {
    // geometry.vertices[i].z = Math.random();
    const elevation = Math.random() / 3;
    // console.log(elevation);
    geometry.vertices[i].z = elevation;
}

const material = new THREE.MeshBasicMaterial({
    color: 'red',
    wireframe: true
});

const plane = new THREE.Mesh(geometry, material);

plane.rotation.x += -1.25;
// plane.rotation.y += -1;

scene.add(plane);

renderer.render(scene, camera);