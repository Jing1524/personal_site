import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import useMediaQuery from '@/hooks/useMediaQuery'
// import {Physics, RigidBody } from '@react-three/rapier'

const PacmanCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [-50, -25, 150], fov: 15 }}>
      <Suspense fallback={null}>
        <hemisphereLight intensity={0.45} />
        <spotLight angle={0.4} penumbra={1} position={[20, 30, 2.5]} castShadow shadow-bias={-0.00001} />
        <directionalLight color="red" position={[-10, -10, 0]} intensity={1.5} />

        <Environment preset="city" />

        <group position={[2, 3, 0]}>
          <Pacman />
        </group>

        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  )
}

function Pacman() {
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * 5)
    }
  })
  return (
    // @ts-ignore
    <group ref={mesh}>
      {/* rotation={[-Math.PI / 2.3, -Math.PI / 1.4, 0]} */}
      <mesh
        castShadow
        receiveShadow
        rotation={tabletScreen ? [-Math.PI / 2.3, -Math.PI / 1.4, 0] : [-Math.PI / 2.9, -Math.PI / 4.5, -0.1]}
      >
        <sphereGeometry args={[10, 18, 16, 0, Math.PI * 1.4]} />
        <meshStandardMaterial color="#ffc060" side={THREE.DoubleSide} />
      </mesh>
      <mesh castShadow position={[-4, 2, 8.5]}>
        <sphereGeometry args={[1.4, 16, 16]} />
        <meshStandardMaterial color="black" roughness={0.75} />
      </mesh>
    </group>
  )
}

export default PacmanCanvas
