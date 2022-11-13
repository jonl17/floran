import { useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useMemo } from 'react'
import { Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const ObjectModel = () => {
  // I've implemented this with Typescript,
  // but it is not necessary to use 'as' for type conversion.
  const obj = useLoader(OBJLoader, '/models/tunfifill/source/model/model.obj')
  const texture = useTexture('/models/tunfifill/source/model/tex_u1_v1.jpg')
  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh
        g = _c.geometry
      }
    })
    return g
  }, [obj])

  // I've used meshPhysicalMaterial because the texture needs lights to be seen properly.
  return (
    <mesh geometry={geometry} scale={0.04}>
      <meshPhysicalMaterial map={texture} />
      <ambientLight intensity={0.8} />
    </mesh>
  )
}

export default ObjectModel
