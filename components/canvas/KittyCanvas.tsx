import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Kitty = () => {
  const kitty = useGLTF('./hungryCat/scene.gltf')
  const mesh = useRef(null)
  useFrame(({ clock }) => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.position.y = Math.sin(clock.getElapsedTime()) / 3
    }
  })
  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={kitty.scene} scale={3.5} position-y={-1} rotation-y={0} />
    </mesh>
  )
}

const KittyCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-5, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Kitty />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default KittyCanvas
