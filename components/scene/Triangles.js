import * as THREE from 'three'
import { useState, useRef, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { Reflector, CameraShake, OrbitControls, useTexture } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

function Triangle({ color, ...props }) {
    const ref = useRef()
    const [r] = useState(() => Math.random() * 10000)
    useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
    const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
    const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
    return (
        <group ref={ref}>
            <mesh geometry={geom} {...props}>
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
        </group>
    )
}



function Polygon({ color, ...props }) {
    const ref = useRef()
    const [r] = useState(() => Math.random() * 10000)
    useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
    const { paths: [path] } = useLoader(SVGLoader, '/polygon.svg') // prettier-ignore
    const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
    return (
        <group ref={ref}>
            <mesh geometry={geom} {...props}>
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
        </group>
    )
}




function Bitcoin({ color, ...props }) {
    const ref = useRef()
    const [r] = useState(() => Math.random() * 10000)
    useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
    const { paths: [path] } = useLoader(SVGLoader, '/eth.svg') // prettier-ignore
    const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
    return (
        <group ref={ref}>
            <mesh geometry={geom} {...props}>
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
        </group>
    )
}

function Rig({ children }) {
    const ref = useRef()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
        ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    })
    return <group ref={ref}>{children}</group>
}

function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
        <Reflector resolution={512} args={[8, 8]} {...props}>
            {(Material, props) => <Material color="#6392ff" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
        </Reflector>
    )
}


function Box(props) {

    const mesh = useRef();

    var material = new THREE.MeshPhysicalMaterial({
        color: 'pink',
        polygonOffset: true,
        thickness: 0.5,
        opacity: 0.5,
        roughness: 0.0,
        transmission: 1,
        // transparent: true, // wireframeLinewidth: 1, wireframe: true
    });
    const geometry = new THREE.TetrahedronGeometry(1, 0); // = new THREE.ConeGeometry(1, 1.3, 3);
    geometry.scale(0.5, 0.5, 0.5)

    useFrame((state, delta) => {
        // mesh.current.rotation.x += 0.001
        // mesh.current.rotation.y -= 0.001
        mesh.current.rotation.z += 0.01
    });
    const vec = new THREE.Vector3(1, 1, 1)
    return (
        <mesh {...props} ref={mesh} geometry={geometry} material={material} 
        rotation={[0, 0, Math.PI / 3]} scale={vec}>
        </mesh>
    );
}


export default function Triangles() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => setLoaded(true), [])
    return (loaded ?
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
            <color attach="background" args={['#6392ff']} />
            <ambientLight />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <Suspense fallback={null}>
                <Rig>
                    <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
                    <Triangle color="#8247e5" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
                    <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
                    <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
                    {/* <Polygon color="#8247e5" scale={0.009} position={[0, 1, -1]} rotation={[0, 0, 0]} />
                    <Bitcoin color="black" scale={0.003} position={[0, 1, 1]} rotation={[0, 0, 0]} /> */}
                    {/* <WBTC color="red" scale={0.009} position={[0, 2, 1]} rotation={[0, 0, Math.PI / 3]} /> */}
                    {/* <Box position={[0, 0.2, 2]} /> */}
                    <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />
                </Rig>
                <EffectComposer multisampling={3}>
                    <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
                    <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
                </EffectComposer>
            </Suspense>
            <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
        </Canvas> : null
    )
}
