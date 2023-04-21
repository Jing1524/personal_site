import React, { useRef, useState } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props: any) => {
  const ballRef = useRef()
  const [decal] = useTexture([props.imgUrl])
  const [position, setPosition] = useState([0, 0, 0])

  useFrame(({ clock }) => {
    setPosition([0, Math.sin(clock.getElapsedTime() + props.idx * 0.5) * 1, 0])
  })

  return (
    <group ref={ballRef}>
      <hemisphereLight intensity={0.4} groundColor="white" />
      <directionalLight position={[10, -15, -10]} intensity={0.5} />
      <spotLight
        position={[5, 10, -15]}
        intensity={1}
        angle={1}
        penumbra={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.000001}
      />
      {/* @ts-ignore */}
      <mesh castShadow receiveShadow scale={2.75} position={position}>
        <sphereGeometry args={[0.75, 20, 16]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={0.8} map={decal} flatShading />
      </mesh>
    </group>
  )
}

const BallCanvas = ({ icon, idx }: any) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Ball imgUrl={icon} idx={idx} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas
