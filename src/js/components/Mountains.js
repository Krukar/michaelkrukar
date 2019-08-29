import * as THREE from 'three';
var STLLoader = require('three-stl-loader')(THREE);
const loader = new STLLoader();

class Mountains {
    constructor() {
        this.colors = [
            'rgb(235, 0, 41)', // red
            'rgb(190,8,208)', // purple
            'rgb(111, 195, 223)' // tron
        ];

        this.settings = {
            aesthetic: false,
            background: 'rgb(0,0,0)',
            element: document.getElementById('js-mountains'),
            section: document.getElementById('js-section'),
            speed: 1,
            wireframe: 0
        };

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.settings.background);
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

    toggleAesthetic = () => {
        // Cycle through aesthetics
        this.settings.wireframe = this.settings.wireframe >= 2 ? 0 : this.settings.wireframe += 1;

        // Set the wireframe color
        this.scene.children[0].children[0].material.color = new THREE.Color(this.colors[this.settings.wireframe]);

        // Toggle the sun
        this.scene.children[1].visible = this.settings.wireframe === 1;
    }

    toggleSection = () => {
        this.settings.section.classList.toggle('section--hidden');
    }

    resizeCanvas = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    init = () => {
        // On window resize resize the canvas
        window.addEventListener('resize', this.resizeCanvas, false);

        // On clicking the mountains toggle the information
        this.settings.element.addEventListener('click', this.toggleSection, false);

        // Turn on A E S T H E T I C
        window.addEventListener('keydown', this.toggleAesthetic, false);

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
                color: this.settings.background,
                polygonOffset: true,
                polygonOffsetFactor: 1,
                polygonOffsetUnits: 1
            }));

            // Create the wireframe
            const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), new THREE.LineBasicMaterial({
                color: this.colors[this.settings.wireframe]
            }));

            mountains.add(wireframe);
            this.scene.add(mountains);

            // Add a sun
            const sun = new THREE.Mesh(new THREE.CircleGeometry(10, 32), new THREE.MeshBasicMaterial({
                color: 'rgb(237,245,63)'
            }));
            sun.rotation.x = THREE.Math.degToRad(90);
            sun.rotation.y = THREE.Math.degToRad(90);
            sun.position.set(-35, 5, 0);

            sun.visible = false;

            this.scene.add(sun);

            // Render the initial scene
            this.renderer.render(this.scene, this.camera);

            // Fade in the mountains
            this.settings.element.classList.add('mountains--loaded');

            this.animate();
        });
    }
}

export default Mountains;
