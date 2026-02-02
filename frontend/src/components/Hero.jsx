import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera, 
  Environment, 
  ScrollControls, 
  Scroll,
  useScroll,
  MeshTransmissionMaterial
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
        <MeshTransmissionMaterial 
          thickness={0.5} 
          anisotropy={0.1} 
          chromaticAberration={0.04} 
          color="#ffffff" 
        />
      </mesh>
    </Float>
  )
}

export default function Hero() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#050505' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            
            <SceneContent />

            <Scroll html>
              <div style={{ width: '100vw', color: 'white', fontFamily: 'Arial, sans-serif' }}>
                
                <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
                  <h1 style={{ fontSize: '5vw', margin: 0 }}>India's #1 Performance</h1>
                  <h2 style={{ fontSize: '3vw', color: '#666' }}>Digital Marketing Agency</h2>
                </section>
                
                <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0 10%' }}>
                  <h1 style={{ fontSize: '4vw', textAlign: 'right' }}>We Don't Just Market.<br/><span style={{color: '#0070f3'}}>We Multiply.</span></h1>
                </section>

                <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ maxWidth: '600px', textAlign: 'center', fontSize: '1.5rem' }}>
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