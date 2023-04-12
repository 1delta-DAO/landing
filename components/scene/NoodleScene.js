import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Plane, Text } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'
import Noodles from './Noodles'
import { AmbientLight } from 'three'
import { generalColors } from '../Colors'

export default function NoodleScene(inForeground) {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }} resize={{ scroll: false }} >
            <Bg />
            <Suspense fallback={null}>
                <Noodles />
                <Caption inForeground={inForeground} />
                <CaptionSmall inForeground={inForeground} />
                <Rig />
            </Suspense>
        </Canvas>
    )
}

function Caption(inForeground) {
    const { width } = useThree((state) => state.viewport)
    return (
        <Text
            color={inForeground ? generalColors.primaryLight : 'white'}
            position={[0, 0, -5]}
            lineHeight={0.8}
            font="/Ki-Medium.ttf"
            fontSize={width / 8}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            {`1delta`}
        </Text>
    )
}

function CaptionSmall(inForeground) {
    const { width } = useThree((state) => state.viewport)
    return (
        <Text
            color={inForeground ? generalColors.baseInverse : 'white'}
            position={[0, 0, -5]}
            lineHeight={0.8}
            font="/Ki-Medium.ttf"
            fontSize={width / 16}
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle">
            {`\n\n\n\n\nThe decentralized\n margin aggregator`}
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
            {/* <directionalLight
    castShadow
    position={[0,10,1]}
intensity={0.5}
shadow-mapSize-height={512}
shadow-mapSize-width={512}
/> */}
            <mesh scale={100} receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                {/* <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          args={[1000, 1000]}
        > */}

                {/* <pointLight position={[0, 0, 100]} intensity={1.5} /> */}

                <LayerMaterial side={THREE.BackSide} receiveShadow>
                    <Depth colorB="white" colorA="grey" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
                    {/* <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} /> */}
                </LayerMaterial>
                {/* </Plane> */}
            </mesh>
        </>
    )
}
