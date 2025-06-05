import React,{ useRef, useState } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { RoomEnvironment } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";  
import { DRACOLoader } from "three/examples/jsm/Addons.js"; 



export function Portview() {


    const canvasRef = useRef(null);
    const [scene, setScene] = useState(null);

    React.useEffect(() => {
        
        const stats = new Stats();

        const render = new THREE.WebGLRenderer({ antialias: true })
        render.setPixelRatio(window.devicePixelRatio);
        render.setSize(window.innerWidth, window.innerHeight);
        
        
        const pmremGenerator = new THREE.PMREMGenerator(render);
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x3B5A6D);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
        
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
        camera.position.set(5, 2, 8);
    
        const controls = new OrbitControls(camera, render.domElement);
        controls.target.set(0, 0.5, 0);
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;

        
        // const dracoLoader = new DRACOLoader();
        // dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');
        
        // const loader = new GLTFLoader();
        // loader.setDRACOLoader(dracoLoader);
        // loader.load('./models/CapillaJesusDelRio.glb', function (gltf) {
        //     const model = gltf.scene;
        //     model.position.set(1, 1, 0);
        //     model.scale.set(1, 1, 1);
        //     scene.add(model);
        // }, undefined, function (e) {
        //     console.error(e);
        // });
        
        window.onresize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            render.setSize(window.innerWidth, window.innerHeight);
        };
        
        function animate() {
            // const delta = clock.getDelta();
        
            controls.update();
            stats.update();
            render.render(scene, camera);
        }
        
        animate();
        
        return () => {
            // Cleanup
        };
    }, [canvasRef]);

    return (
        <>
            <canvas id="viewport" ref={canvasRef}></canvas>
        </>
    );
}
