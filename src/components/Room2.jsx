import { useGLTF, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { Color, MeshStandardMaterial, Raycaster, RepeatWrapping, Vector2, sRGBEncoding } from "three";
import { useZustand } from "../hooks/useZustand";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Room2({ ...props }) {
  const group = useRef();
  const floor = useRef();
  const innerWalls = useRef();
  const ceiling = useRef();
  const shelves = useRef();
  const wall = useRef();

  const { nodes, materials } = useGLTF("/models/room.glb");
  const { camera } = useThree();

  const [click, setClick] = useState(true);
  const update = useZustand("update");

  const raycaster = useRef(new Raycaster());
  const mouse = useRef(new Vector2());

  const handleCamPosition = (e) => {
    e.stopPropagation();
    if (click) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.current.setFromCamera(mouse.current, camera);
      const intersection = raycaster.current.intersectObjects([floor.current]);
      const floorMesh = intersection.find((x) => x.object.name === "floor");
      if (floorMesh) {
        const { point } = floorMesh;
        update("camPos", [point.x, 1.7, point.z]);
      }
    }
  };

  useEffect(() => {
    innerWalls.current.geometry.attributes.uv2 = innerWalls.current.geometry.attributes.uv;
    ceiling.current.geometry.attributes.uv2 = ceiling.current.geometry.attributes.uv;
    floor.current.geometry.attributes.uv2 = floor.current.geometry.attributes.uv;
    shelves.current.geometry.attributes.uv2 = shelves.current.geometry.attributes.uv;
  }, []);

  const { lightMapIntensity, envMapIntensity, colorChoice } = useControls({
    lightMapIntensity: { value: 10, min: 0, max: 100, step: 1 },
    envMapIntensity: { value: 0, min: 0, max: 10, step: 0.1 },
    colorChoice: { value: "#202a31" },
  });

  //CEILING
  const lightmapCeiling = useTexture("/textures/ceiling/bakes/LM.jpg");
  lightmapCeiling.encoding = sRGBEncoding;
  lightmapCeiling.flipY = false;

  const ceilingMaterial = new MeshStandardMaterial();
  ceilingMaterial.lightMap = lightmapCeiling;
  ceilingMaterial.lightMapIntensity = lightMapIntensity * 4;
  ceilingMaterial.envMapIntensity = envMapIntensity;

  //WALLS
  const lightMapWalls = useTexture("/textures/walls/bakes/LM.jpg");
  // lightMapWalls.encoding = sRGBEncoding;
  lightMapWalls.flipY = false;

  const colorWalls = useTexture("/textures/walls/bakes/color.jpg");
  colorWalls.flipY = false;
  colorWalls.encoding = sRGBEncoding;

  const aoWalls = useTexture("/textures/walls/bakes/ao.jpg");
  aoWalls.flipY = false;
  aoWalls.encoding = sRGBEncoding;

  const innerWallsMaterial = new MeshStandardMaterial();
  innerWallsMaterial.lightMap = lightMapWalls;
  innerWallsMaterial.lightMapIntensity = lightMapIntensity;
  innerWallsMaterial.envMapIntensity = 0;

  const innerWallsMaterial2 = new MeshStandardMaterial();
  innerWallsMaterial2.lightMap = lightMapWalls;
  innerWallsMaterial2.lightMapIntensity = 5;
  innerWallsMaterial2.envMapIntensity = 0;
  innerWallsMaterial2.aoMap = aoWalls;
  innerWallsMaterial2.aoMapIntensity = 0.3;
  innerWallsMaterial2.color = new Color(colorChoice);

  //FLOOR
  const lightMapFloor = useTexture("/textures/floor/bakes/LM.jpg");
  lightMapFloor.encoding = sRGBEncoding;
  lightMapFloor.flipY = false;

  const color = useTexture("/textures/floor/material/color.jpg");
  color.repeat.set(6, 6);
  color.encoding = sRGBEncoding;
  color.flipY = false;
  color.wrapS = RepeatWrapping;
  color.wrapT = RepeatWrapping;

  const normal = useTexture("/textures/floor/material/normal.jpg");
  normal.repeat.set(6, 6);
  normal.encoding = sRGBEncoding;
  normal.flipY = false;
  normal.wrapS = RepeatWrapping;
  normal.wrapT = RepeatWrapping;

  const roughness = useTexture("/textures/floor/material/roughness.jpg");
  roughness.repeat.set(6, 6);
  roughness.encoding = sRGBEncoding;
  roughness.flipY = false;
  roughness.wrapS = RepeatWrapping;
  roughness.wrapT = RepeatWrapping;

  const floorMaterial = new MeshStandardMaterial();
  floorMaterial.envMapIntensity = 0.5;
  floorMaterial.map = color;
  floorMaterial.normalMap = normal;
  floorMaterial.normalScale = new Vector2(100, 100);
  floorMaterial.lightMap = lightMapFloor;
  floorMaterial.lightMapIntensity = lightMapIntensity;
  floorMaterial.roughnessMap = roughness;
  floorMaterial.roughness = 1.75;

  //SHELVES
  const colorShelves = useTexture("/textures/walls/bakes/color.jpg");
  colorShelves.encoding = sRGBEncoding;
  colorShelves.flipY = false;

  const shelvesMaterial = new MeshStandardMaterial({
    map: colorShelves,
    envMapIntensity: 3,
  });

  //WINDOWS
  const windowMaterial = new MeshStandardMaterial({
    envMapIntensity: 100,
    transparent: true,
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerDown={() => {
        setClick(true);
      }}
      onPointerMove={() => {
        setClick(false);
      }}
      onPointerUp={handleCamPosition}
    >
      <mesh ref={ceiling} geometry={nodes.Ceiling.geometry} material={ceilingMaterial} position={[0, 2.906559, 0]} />
      <mesh geometry={nodes.OuterWalls.geometry} material={materials["Material.004"]} position={[-2.9, 1.6, 0]} />
      <mesh ref={innerWalls} geometry={nodes.InnerWalls.geometry} material={innerWallsMaterial} position={[3, 1.116622, 0.965227]} />
      <mesh name="floor" ref={floor} geometry={nodes.Floor.geometry} material={floorMaterial} position={[0, 0.008951, 0]} />
      <mesh ref={shelves} geometry={nodes.Cube.geometry} material={shelvesMaterial} position={[8.69903, 1.072963, -2.575509]} scale={[1, 1.5, 1.5]} />
      <mesh geometry={nodes.InnerWalls001.geometry} material={innerWallsMaterial2} position={[3, 1.116622, 0.965227]} />
      <mesh geometry={nodes.windows.geometry} material={windowMaterial} position={[3, 1.116622, 0.965227]} />
    </group>
  );
}

useGLTF.preload("/models/room.glb");
