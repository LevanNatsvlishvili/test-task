import { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import BoxAnimations from './hooks/BoxAnimations';
import { Box, ImagePlaneProps } from './utils/types';
import { boxes } from './utils/data';

const Model = ({ path }: { path: string }) => {
  const texture = useLoader(TextureLoader, path);
  return <meshStandardMaterial map={texture} transparent />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 15, 500]} intensity={1} castShadow />
    </>
  );
};

const ImagePlane = ({ texturePath, shadowTexture, position, index, hovered, animation }: ImagePlaneProps) => {
  const ref = BoxAnimations({ texturePath, position, index, hovered, animation });

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -5 * (index + 1), 0]}>
        <planeGeometry args={[80, 70]} />
        <Model path={shadowTexture} />
      </mesh>
      <mesh>
        <planeGeometry args={[60, 50]} />
        <Model path={texturePath} />
      </mesh>
    </group>
  );
};

const GroupMesh = ({ boxes }: { boxes: Box[] }) => {
  const [hovered, setHovered] = useState(false);
  const handleOnHover = () => {
    setHovered((prev) => !prev);
  };
  return (
    <>
      <Lights />
      <group onPointerOver={handleOnHover} onPointerOut={handleOnHover}>
        {boxes.map((box, index) => (
          <ImagePlane
            key={index}
            texturePath={box.texturePath}
            shadowTexture={box.shadowTexture}
            position={box.position}
            index={index}
            hovered={hovered}
            animation={box.animation}
          />
        ))}
      </group>
    </>
  );
};

const DragAndDropAnime = () => {
  return (
    <div className="h-100vh w-full">
      <Canvas shadows camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <GroupMesh boxes={boxes} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DragAndDropAnime;
