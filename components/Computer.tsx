import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useLoader } from '@react-three/fiber'

const Computers = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      {/*  scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}  */}
      <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.15]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      {/* fallback={<CanvasLoader />} */}
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
