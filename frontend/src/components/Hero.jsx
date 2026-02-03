import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera, 
  Environment, 
  ScrollControls, 
  Scroll,
  useScroll
} from '@react-three/drei'
import * as THREE from 'three'

function SceneContent() {
  const meshRef = useRef()
  const scroll = useScroll()

  useFrame((state) => {
    const scrollOffset = scroll.offset 
    
    // Smoothly rotate the object as you scroll
    meshRef.current.rotation.x = scrollOffset * Math.PI
    meshRef.current.rotation.y = scrollOffset * Math.PI * 2
    
    // Move the object to the left as we scroll down to make room for text
    meshRef.current.position.x = THREE.MathUtils.lerp(0, -2, scrollOffset)
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* This Box acts as a placeholder for your .glb model */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#0c1a6700"
         
          emissiveIntensity={0.35}
          metalness={0.1}
          roughness={0.45}
        />
      </mesh>
    </Float>
  )
}

export default function Hero() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(135deg, #f8fafc 0%, #e6eefc 100%)', color: '#0f172a' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            
            <SceneContent />

            <Scroll html>
              <div className="w-screen text-[#0f172a]">
                
                <section className="h-screen flex flex-col justify-center px-[10%]">
                  <h1 className="text-[5vw] m-0">India's #1 Performance</h1>
                  <h2 className="text-[3vw] text-gray-600">Digital Marketing Agency</h2>
                </section>
                
                <section className="h-screen flex flex-col justify-center items-end px-[10%]">
                  <h1 className="text-[4vw] text-right">We Don't Just Market.<br/><span className="text-[#0070f3]">We Multiply.</span></h1>
                </section>

                <section className="h-screen flex items-center justify-center">
                  <p className="max-w-[600px] text-center text-[1.5rem]">
                    Founder-led boutique agency helping ambitious brands achieve measurable growth.
                  </p>
                </section>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}