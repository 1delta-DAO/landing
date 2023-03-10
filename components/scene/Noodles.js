/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Noise } from 'lamina/vanilla'

const colorA = new THREE.Color('white').convertSRGBToLinear()
const colorB = new THREE.Color('black').convertSRGBToLinear()
const fresnel = new THREE.Color('white').convertSRGBToLinear()
const material = new LayerMaterial({
  layers: [
    // new Base({ color: colorA }),
    new Depth({ colorA: colorA, colorB: colorB, alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: 'black', colorB: colorB, alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: 'white', colorB: colorB, alpha: 0.5, mode: 'add', near: 0, far: 1, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: fresnel, intensity: 10.3, power: 2.5, bias: 0.1 }),
    // new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: 'red', colorB: 'skyblue', mode: 'overlay' })

    // new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#ffaf40', colorB: 'black', mode: 'overlay' })
  ]
})

function Noodle() {
  const { viewport, camera } = useThree()
  const { nodes } = useGLTF('/worms-transformed.glb')
  const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry)
  const [speed] = useState(() => 0.1 + Math.random() / 10)
  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  return useMemo(()=>(
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null} castShadow>
      <mesh scale={(Math.max(viewport.width + viewport.height)) /1.5} geometry={geometry} material={material} castShadow /> 
      {/* // scale=5 originally */}
    </Float>
  ),[])
}

export default function Noodles() {
  return Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
}

useGLTF.preload('/worm-transformed.glb')
