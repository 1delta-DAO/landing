import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from "three";


function Box(props) {

    const mesh = useRef();

    var material = new THREE.MeshPhysicalMaterial({
        color: 'rgba(255, 0, 74, 0.35)',
        polygonOffset: true,
        thickness: 0.1,
        opacity: 0.5, 
        roughness: 0.7,
        transmission: 0.5,
        transparent: true, // wireframeLinewidth: 1, wireframe: true
    });
    const geometry = new THREE.TetrahedronGeometry(1, 0);


    useFrame((state, delta) => {
        // mesh.current.rotation.x += 0.001
        mesh.current.rotation.y -= 0.001
        mesh.current.rotation.z += 0.001
    });
    const vec = new THREE.Vector3(3,3,3)
    return (
        <mesh {...props} ref={mesh} geometry={geometry} material={material}  rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 2]} scale={vec}>
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
        <div style={{borderRadius:'100px', background:'rgba(78, 0, 40, 0.8)', width:'70px', height: '70px'}} >
        <Canvas dpr={window.devicePixelRatio} style={{ padding: '0px', margin: '0px', width:'70px', height: '70px' }}>
            <ambientLight posi />
            <pointLight position={[0, 5, 10]} intensity={6} color={'rgba(255, 0, 74, 0.95)'} />
            <Box position={[0, 0, 0]}/>
        </Canvas>
        </div>
    );
}