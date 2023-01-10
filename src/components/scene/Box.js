import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from "three";
import background from './../../assets/images/tetrahedron-bg.svg';

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
            {/* <tetrahedronGeometry args={[5, 5, 64, 64]} />  */}
            {/* <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                />
            </meshBasicMaterial> */}
        </mesh>
    );
}

export default function BoxScene() {

    return (
        <div style={{ borderRadius: '100px', backgroundImage: `url(${background})`, width: '70px', height: '70px',backgroundSize: 'contain' }} >
            <Canvas dpr={window.devicePixelRatio} style={{ padding: '0px', margin: '0px', width: '70px', height: '70px' }} background={`url(${background})`}>
                <perspectiveCamera position={[0, 0, 0.1]} fov={50} aspect={30}/>
                    <ambientLight posi />
                    <pointLight position={[2, -2, 10]} intensity={6} color={'white'} />
                    <Box position={[0, 0, 0]} color='red' />
            </Canvas>
        </div>
    );
}