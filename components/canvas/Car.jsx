"use client"

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Car = () => {
    
    const car = useGLTF("/car/scene.gltf");

    return(
        <mesh>
        <hemisphereLight intensity={13} groundColor='white' />
        <spotLight
        position={[30, 90, -10]}
        intensity={80}
        castShadow
        angle={0.12}
        penumbra={1}
        shadow-mapSize={1024}
      />
        <spotLight
        position={[50, 100, -30]}
        intensity={80}
        castShadow
        angle={0.12}
        penumbra={1}
        shadow-mapSize={1024}
      />
        <spotLight
        position={[50, 100, -40]}
        intensity={80}
        castShadow
        angle={0.12}
        penumbra={1}
        shadow-mapSize={1024}
      />
        <spotLight
        position={[50, 100, -60]}
        intensity={180}
        castShadow
        angle={0.12}
        penumbra={1}
        shadow-mapSize={1024}
      />
        <pointLight intensity={10}  />
        <primitive
          object={car.scene}
          scale={3}
          position={[0, -1.25, -1.5]}
          rotation={[0.07,-0.2,-0.001]}
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