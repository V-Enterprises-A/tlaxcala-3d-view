import { Suspense } from 'react'
import './Styles/styles.css'
import './Styles/Viewport.css'

import { Canvas, useThree } from "@react-three/fiber";
import { Center, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CapillaJesusDelRio } from "./Churchs/CapillaJesusDelRio";
import { clamp } from 'three/src/math/MathUtils.js';
import { ExSanFrancisco } from './Churchs/ExConventoSF';

function PortView() {


    return (
        <>
            <Canvas className='ViewPort' shadows flat gl={{ antialias: true }} camera={{ position: [0, 1.5, 5.5], fov: 60 }} >
                <SetupScene />
                <Suspense fallback={null}>
                    <Center top position={[-0.5, -0.5, 0]} rotation={[0, 0, 0]}>
                        <CapillaJesusDelRio />
                        {/* <ExSanFrancisco scale={ 0.5 } /> */}
                    </Center>
                </Suspense>
            </Canvas>
        </>
    )
}


function SetupScene() {

    const { aspect } = useThree(state => state.viewport);
    var newFOV = clamp(100 / aspect, 60, 90);
    // var newFOV = 120 / aspect;


    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1.5, 5.5]} fov={newFOV} />
            <ambientLight intensity={0.1}/>
            <directionalLight position={[0, 30,20 ]} castShadow intensity={Math.PI / 1.5}/>
            {/* <spotLight color={0xF6FF00} position={[-1, 8, 10]} angle={0.04} penumbra={1} decay={0} intensity={Math.PI / 1.5} /> */}
            <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} dampingFactor={0.03} />
            {/* <Environment preset='forest'  /> */}
            <ContactShadows position={[0, -0.5, 0]} opacity={.8} blur={1} far={10} resolution={256} color={"#1C2E3A"} />
        </>
    );
}



export default PortView;