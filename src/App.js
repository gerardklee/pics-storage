import React from 'react';
import './App.css';
import * as THREE from 'three';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("cube created");
        this.distnace = 50;
        this.length = 1;
        this.width = 1;
        this.height = 1;
        this.cameraPosition = 5.5;
    }

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(this.distance, window.innerWidth / window.innerHeight);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(this.length, this.width, this.height);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = this.cameraPosition;
        var animate = function() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }

    render() {
        return (
            <div>
                cube created
            </div>
        )
    }
}

export default App;
