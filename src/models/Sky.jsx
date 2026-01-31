// Sky.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyModel from '/assets/3d/sky.glb'

const Sky = () => {
  const { scene } = useGLTF(skyModel)

  // Make sky very large so it's always in background
  scene.scale.set(8, 8, 8)

  // Optional: remove shadow casting/receiving
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false
      child.receiveShadow = false
      child.material.depthWrite = false // ensures it always stays behind
    }
  })

  return <primitive object={scene} />
}

export default Sky
