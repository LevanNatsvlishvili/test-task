import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';

const Model = ({ path }) => {
  const texture = useLoader(TextureLoader, path);
  return <meshStandardMaterial map={texture} transparent castShadow receiveShadow />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 15, 500]} intensity={1} castShadow />
    </>
  );
};

const ImagePlane = ({ texture, shadowTexture, position, index, hovered, animation }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const rotationAnim = gsap.to(ref.current.rotation, {
        z: hovered && animation.rotate !== 0 ? Math.PI / animation.rotate : 0,
        duration: 1,
        ease: 'power3.out',
      });
      const positionAnim = gsap.to(ref.current.position, {
        x: hovered && animation.x !== 0 ? position[0] + animation.x : position[0], // Move slightly to the left
        y: hovered && animation.y !== 0 ? position[1] + animation.y : position[1], // Move slightly up
        duration: 1,
        ease: 'power3.out',
      });
      const scaleAnim = gsap.to(ref.current.scale, {
        x: hovered && index === 1 ? 1.2 : 1,
        y: hovered && index === 1 ? 1.2 : 1,
        z: hovered && index === 1 ? 1.2 : 1,
        duration: 1,
        ease: 'power3.out',
      });

      return () => {
        rotationAnim.kill();
        positionAnim.kill();
        scaleAnim.kill();
      };
    }
  }, [hovered]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(0, 0, 0);
      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [texture]);

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -5 * (index + 1), 0]}>
        <planeGeometry args={[80, 70]} />
        <Model path={shadowTexture} />
      </mesh>
      <mesh>
        <planeGeometry args={[60, 50]} />
        <Model path={texture} />
      </mesh>
    </group>
  );
};

const GroupMesh = ({ boxes }) => {
  const [hovered, setHovered] = useState(false);
  const handleOnHover = () => {
    setHovered((prev) => !prev);
  };
  return (
    <>
      <group onPointerOver={handleOnHover} onPointerOut={handleOnHover}>
        <Lights />

        {boxes.map((box, index) => (
          <ImagePlane
            key={index}
            texture={box.texturePath}
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

const boxes = [
  {
    texturePath: '/images/products/product-1.png',
    shadowTexture: '/images/products/product-1-shadow.png',
    position: [-23, 5, -10],
    animation: {
      rotate: -5,
      x: -15,
      y: 5,
    },
  },
  {
    texturePath: '/images/products/product-2.png',
    shadowTexture: '/images/products/product-2-shadow.png',
    position: [0, 0, 0],
    animation: {
      rotate: 0,
      x: -2.5,
      y: -2.5,
    },
  },
  {
    texturePath: '/images/products/product-3.png',
    shadowTexture: '/images/products/product-3-shadow.png',
    position: [18, -5, 10],
    animation: {
      rotate: -5,
      x: 15,
      y: -5,
    },
  },
];

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
