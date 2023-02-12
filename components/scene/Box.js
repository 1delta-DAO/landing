import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei"
import background from './../../assets/images/tetrahedron-bg.svg';
import styled from 'styled-components';


const BoxContainer = styled.div`
border-radius: 100px; background-image: url(${background}); 
background-size: contain;
width: 70px;
height: 70px;
`

function Box(props) {

    const mesh = useRef();

    var material = new THREE.MeshPhysicalMaterial({
        color: 'rgb(255, 0, 74)',
        polygonOffset: true,
        thickness: 0.5,
        opacity: 0.5,
        roughness: 0.7,
        transmission: 0.1,
        // transparent: true, // wireframeLinewidth: 1, wireframe: true
    });
    const geometry = new THREE.TetrahedronGeometry(1, 0); // = new THREE.ConeGeometry(1, 1.3, 3);
    geometry.scale(1, 1, 1)

    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.001
        mesh.current.rotation.y -= 0.001
        mesh.current.rotation.z += 0.001
    });
    const vec = new THREE.Vector3(3, 3, 3)
    return (
        <mesh {...props} ref={mesh} geometry={geometry} material={material} rotation={[Math.PI / 4, Math.PI / 6, Math.PI / 3]} scale={vec}>
        </mesh>
    );
}

function Box2(props) {

    const mesh = useRef();

    var material = new THREE.MeshPhysicalMaterial({
        color: 'rgb(255, 0, 74)',
        polygonOffset: true,
        roughness: 0.7,
        transmission: 0.95,
        thickness: 0
        // transparent: true, // wireframeLinewidth: 1, wireframe: true
    });
    const geometry = new THREE.TetrahedronGeometry(1, 0); // = new THREE.ConeGeometry(1, 1.3, 3);
    geometry.scale(1, 1, 1)

    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.001
        mesh.current.rotation.y -= 0.001
        mesh.current.rotation.z += 0.001
    });
    const vec = new THREE.Vector3(3, 3, 3)
    return (
        <mesh {...props} ref={mesh} geometry={geometry} material={material} rotation={[Math.PI / 4, Math.PI / 6, Math.PI / 3]} scale={vec}>
        </mesh>
    );
}

export default function BoxScene() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => setLoaded(true), [])
    return <div>
        {loaded ?
            (
                <BoxContainer >
                    <Canvas style={{ padding: '0px', margin: '0px' }} background={`url(${background})`}>
                        <perspectiveCamera position={[0, 0, 0.1]} fov={50} aspect={1} />
                        <ambientLight posi />
                        <pointLight position={[2, -2, 10]} intensity={6} color={'white'} />
                        <Box position={[0, 0, -1]} />
                        <Box2 position={[0, 0, 0]} />
                        <Environment preset="city" />
                    </Canvas>
                </BoxContainer>
            ) : null
        }
    </div>
}