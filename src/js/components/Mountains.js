import * as THREE from 'three';
var STLLoader = require('three-stl-loader')(THREE);
const loader = new STLLoader();

class Mountains {
    constructor() {
        this.settings = {
            black: 'rgb(0,0,0)',
            element: document.getElementById('js-mountains'),
            red: 'rgb(235, 0, 41)',
            speed: 1
        };

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
    }

    animate = () => {
        // If Camera reaches end of the mountains then return it to the beginning
        if (this.camera.position.x < -26 && this.camera.position.y > 2.7) {
            this.camera.position.set(32, -14.5, 3);
        }

        requestAnimationFrame(this.animate);

        this.camera.position.x -= 0.01 * this.settings.speed;
        this.camera.position.y += 0.00295 * this.settings.speed;

        this.renderer.render(this.scene, this.camera);
    }

    resizeCanvas = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    init = () => {
        // On window resize resize the canvas
        window.addEventListener('resize', this.resizeCanvas, false);

        // Add renderer to DOM
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.settings.element.appendChild(this.renderer.domElement);

        // Position Camera
        this.camera.position.set(32, -14.5, 3);
        this.camera.rotation.x = THREE.Math.degToRad(53);
        this.camera.rotation.y = THREE.Math.degToRad(65);
        this.camera.rotation.z = THREE.Math.degToRad(35);

        // TODO: Can this be written using async/await
        loader.load('./data/valles_marineris.stl', (geometry) => {
            // Create the mountains
            const mountains = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
                color: this.settings.black,
                polygonOffset: true,
                polygonOffsetFactor: 1,
                polygonOffsetUnits: 1
            }));

            // Create the wireframe
            const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), new THREE.LineBasicMaterial({
                color: this.settings.red
            }));

            mountains.add(wireframe);
            this.scene.add(mountains);

            // Render the initial scene
            this.renderer.render(this.scene, this.camera);

            // Fade in the mountains
            this.settings.element.classList.add('mountains--loaded');

            this.animate();
        });
    }
}

export default Mountains;
