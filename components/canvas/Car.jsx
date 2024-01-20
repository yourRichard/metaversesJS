"use client"

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Car = () => {
    
    const car = useGLTF("/car/scene.gltf");
    return(
        <mesh>
        <hemisphereLight intensity={0.15} groundColor='white' />
        <spotLight
          position={[-20, 50, 10]}
          intensity={1}
          castShadow
          angle={0.12}
          penumbra={1}
          shadow-mapSize={1024}
        />
        <pointLight intensity={0.5} />
        <primitive
          object={car.scene}
          scale={1}
          position={[0, -3.25, -1.5]}
          rotation={[-0.01,-0.2,-0.001]}
        />
      </mesh>
    )
}



const CarCanvas = () => {
  return (
    <div className="h-[30rem]">
        <Canvas
      frameloop='demand'
      camera={{ position: [25, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car/>
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  )
}

export default CarCanvas