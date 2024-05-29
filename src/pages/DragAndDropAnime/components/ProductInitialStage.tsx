import { useEffect, useRef, useState } from 'react';
import BoxAnimations from '../hooks/BoxAnimations';
import { ImagePlaneProps } from '../utils/types';
import ModelLoader from './ModelLoader';
import { Group } from 'three';
import gsap from 'gsap';
import { boxesInitial } from '../utils/data';

const ImagePlane = ({ texturePath, shadowTexture, position, index, hovered, animation }: ImagePlaneProps) => {
  const ref = BoxAnimations({ texturePath, position, index, hovered, animation });

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -5 * (index + 1), 0]}>
        <planeGeometry args={[80, 70]} />
        <ModelLoader path={shadowTexture} />
      </mesh>
      <mesh>
        <planeGeometry args={[60, 50]} />
        <ModelLoader path={texturePath} />
      </mesh>
    </group>
  );
};

interface GroupMeshProps {
  stage: string;
}

const GroupMesh = ({ stage }: GroupMeshProps) => {
  const [hovered, setHovered] = useState(false);
  const handleOnHover = () => {
    setHovered((prev) => !prev);
  };
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (ref.current) {
      const positionAnim = gsap.to(ref.current.position, {
        y: stage === 'drag' ? 250 : 0, // Move slightly up
        duration: 3,
        ease: 'power3.out',
      });
      return () => {
        positionAnim.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);
  return (
    <group ref={ref} onPointerOver={handleOnHover} onPointerOut={handleOnHover}>
      {boxesInitial.map((box, index) => (
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
  );
};

export default GroupMesh;
