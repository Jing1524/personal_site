import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useLoader } from '@react-three/fiber'
import CanvasLoader from './Loader'
import useMediaQuery from '@/hooks/useMediaQuery'

const Computers = ({ isMobile }: any) => {
  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const isMobileView = useMediaQuery('(max-width: 768px)')
  useEffect(() => {
    if (typeof window !== undefined) {
      const mediaQuery = window.matchMedia('(max-width: 768px)')
      setIsMobile(mediaQuery.matches)

      const handleMediaQueryChange = (event: any) => {
        setIsMobile(event.matches)
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }
  }, [])
  console.log({ isMobile })
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
