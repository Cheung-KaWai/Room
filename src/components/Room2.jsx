import { Box, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { MeshBasicMaterial, Raycaster, Vector2 } from "three";
import { useZustand } from "../hooks/useZustand";
import { useThree } from "@react-three/fiber";

export default function Room2({ ...props }) {
  const group = useRef();
  const floorRef = useRef();

  const { nodes, materials } = useGLTF("/models/room2-transformed.glb");
  const { camera } = useThree();

  const [click, setClick] = useState(true);
  const position = useZustand("camPos");
  const update = useZustand("update");

  const raycaster = useRef(new Raycaster());
  const mouse = useRef(new Vector2());

  const handleCamPosition = (e) => {
    e.stopPropagation();

    if (click) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.current.setFromCamera(mouse.current, camera);
      const [{ point }] = raycaster.current.intersectObjects([floorRef.current]);
      update("camPos", point);
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Ceiling.geometry} material={materials["Material.001"]} position={[0, 2.996559, 0]} />
      <mesh geometry={nodes.OuterWalls.geometry} material={materials["Material.004"]} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.InnerWalls.geometry} material={nodes.InnerWalls.material} position={[3, 1.116622, 0.965227]} />
      <mesh
        ref={floorRef}
        geometry={nodes.Floor.geometry}
        material={materials["Material.003"]}
        position={[0, -0.003441, 0]}
        onPointerDown={() => setClick(true)}
        onPointerMove={() => setClick(false)}
        onPointerUp={handleCamPosition}
      />
      <Box position={position} material-color="#f00" scale={0.1} />
    </group>
  );
}

useGLTF.preload("/models/room2-transformed.glb");
