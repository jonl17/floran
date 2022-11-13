import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import GltfModel from './components/GltfModel'
import Loader from './components/Loader'

const Three = () => {
  return (
    <Canvas className='three-canvas-container'>
      <Suspense fallback={<Loader />}>
        <OrbitControls autoRotate />
        <GltfModel modelPath='/models/fifill_gltf/scene.gltf' />
      </Suspense>
    </Canvas>
  )
}

export default Three
