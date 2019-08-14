import * as THREE from 'three';

export default (height, width) => {
    // Create a plane
    // TODO Try plane buffer
    const plane = new THREE.PlaneGeometry(height, width, height, width);

    // Add mountains to the flat plane
    const mountains = generateMountains(plane);

    // Create material
    const material = new THREE.MeshBasicMaterial({
        color: "rgb(235, 0, 41)",
        wireframe: true
    });

    // Combine to create plane
    return new THREE.Mesh(mountains, material);
};

const generateMountains = (plane) => {
    // Generate left peak
    // for (let i = 0; i < plane.vertices.length; i += 6) {
    //     plane.vertices[i].z = 1;
    // }



    // // Generate left slope
    // for (let i = 1; i < plane.vertices.length; i += 6) {
    //     plane.vertices[i].z = 1;
    // }

    // // Generate right slope
    // for (let i = 4; i < plane.vertices.length; i += 6) {
    //     plane.vertices[i].z = 1;
    // }

    // // Generate right peak
    // for (let i = 5; i < plane.vertices.length; i += 6) {
    //     plane.vertices[i].z = 1;
    // }

    return plane;
};

const generateMountain = (min, max) => Math.random() * (max - min) + min;