import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import Noodles from './Noodles'

export default function NoodleSceneBg() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }} resize={{ scroll: false }} >
            <Bg />
            <Suspense fallback={null}>
                <Noodles />
                <Rig />
            </Suspense>
        </Canvas>
    )
}

function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
        <Text
            color={'red'}
            position={[0, 0, -5]}
            lineHeight={0.8}
            font="/Ki-Medium.ttf"
            fontSize={width / 8}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            {children}
        </Text>
    )
}

function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
        state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
    })
}

function Bg() {
    return (
        <>
            <mesh scale={100} receiveShadow>
                <LayerMaterial side={THREE.BackSide} receiveShadow>
                    <Depth colorB="white" colorA="grey" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
                    {/* <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} /> */}
                </LayerMaterial>
            </mesh>
        </>
    )
}
