import { Suspense } from 'react'
import './App.css'

import { Canvas} from "@react-three/fiber";
import { Center, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CapillaJesusDelRio } from "./Churchs/CapillaJesusDelRio";

function ThreeTest() {
  

  return (
    <>
      <Canvas shadows flat gl={{ antialias: true }} camera={{ position: [0, 1.5, 5.5], fov: 60 }}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 5.5]} fov={60} />
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, -10]} angle={0.25} penumbra={1} decay={0} intensity={Math.PI/1.5} />
        <OrbitControls enablePan={ false }  minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} dampingFactor={0.03}/>
        <Suspense fallback={null}>
          <Center top position={[-0.5, -0.5, 0]} rotation={[0,2.8,0]}>
            <CapillaJesusDelRio />
          </Center>
        </Suspense>

        <Environment preset='sunset' />
        <ContactShadows position={[0, -0.5, 0]} opacity={.8} blur={1} far={10} resolution={256} color={"#1C2E3A"} />
      </Canvas>
    </>
  )
}




export default ThreeTest;