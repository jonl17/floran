import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React from 'react'

type Props = {
  modelPath: string
}

const GltfModel = ({ modelPath }: Props) => {
  const { scene } = useLoader(GLTFLoader, modelPath)
  return (
    <primitive
      rotation={[0.6, 1.5, 0]}
      scale={0.08}
      position={[0, 0, 0]}
      object={scene}
    />
  )
}

export default GltfModel
