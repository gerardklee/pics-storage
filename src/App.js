import React from 'react';
import './App.css';
import * as THREE from 'three';
import { IconContext } from 'react-icons';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

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
        renderer.setClearColor(0xffffff);
        document.getElementById("cube").appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(this.length, this.width, this.height);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
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
        return [
            <div id="cube">
                <h3>Cube goes here</h3>
                <IconContext.Provider value={{ size: 50 }}>
                    <span id="arrow-down">
                        <FaArrowDown />
                    </span>
                    <span id="arrow-up">
                        <FaArrowUp />
                    </span>
                    <span id="arrow-left">
                        <FaArrowLeft />
                    </span>
                    <span id="arrow-right">
                        <FaArrowRight />
                    </span>
                </IconContext.Provider>
            </div>
        ]
    }
}

export default App;
