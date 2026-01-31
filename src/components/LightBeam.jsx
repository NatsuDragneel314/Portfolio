import React from 'react'
import * as THREE from 'three'

const LightBeam = () => {
  return (
    <mesh position={[0, 15, 0]} rotation={[0, 0, 0]}>
      {/* Cone shape */}
      <coneGeometry args={[4, 40, 22,1, true]} />

      {/* Beam material */}
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
        depthWrite={true}
      />
    </mesh>
  )
}

export default LightBeam
