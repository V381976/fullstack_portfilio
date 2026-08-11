'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SpinOrb({ color = '#569cd6' }: { color?: string }) {
  const mesh = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.5
      mesh.current.rotation.y = t * 0.7
      mesh.current.position.y = Math.sin(t * 1.2) * 0.08
    }
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2.4
      ring.current.rotation.z = t * 0.6
    }
  })

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[0.7, 0.04, 8, 48]} />
        <meshStandardMaterial color="#4ec9b0" emissive="#4ec9b0" emissiveIntensity={0.25} />
      </mesh>
    </group>
  )
}

export default function CardAccentScene({ color = '#569cd6' }: { color?: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.4], fov: 45 }}
      dpr={[1, 1]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0)
        scene.background = null
      }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[2, 2, 3]} intensity={0.9} color={color} />
      <SpinOrb color={color} />
    </Canvas>
  )
}
