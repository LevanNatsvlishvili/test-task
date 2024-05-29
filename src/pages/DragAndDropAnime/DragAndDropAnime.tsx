import { Suspense, useEffect, useRef, useState, useTransition } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';
import { gsap } from 'gsap';
import { texture } from 'three/examples/jsm/nodes/Nodes.js';

const ImagePlane = ({ texture, position }) => {
  const ref = useRef();
  useEffect(() => {
    // Animate the scale for a smooth appearance
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
    <mesh position={[position.x, position.y, 0]} ref={ref}>
      <planeGeometry args={[70, 60]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const boxes = [
  { texturePath: '/images/products/product-1.png', title: 'Blue', bgColor: '#f15945', positionY: 6, positionX: -20 },
  { texturePath: '/images/products/product-2.png', title: 'Grey', bgColor: '#571ec1', positionY: 0, positionX: 0 },
  { texturePath: '/images/products/product-3.png', title: 'Pink', bgColor: '#F2C649', positionY: -6, positionX: 20 },
];

const DragAndDropAnime = () => {
  const textures = boxes.map((box) => ({
    model: useLoader(TextureLoader, box.texturePath),
    position: {
      x: box.positionX,
      y: box.positionY,
    },
  }));
  const [currentTexture, setCurrentTexture] = useState(textures[0]);
  const [isPending, startTransition] = useTransition();

  const handleTextureChange = (index) => {
    startTransition(() => {
      setCurrentTexture(textures[index]);
    });
  };

  useEffect(() => {
    // Update the texture if the textures array changes
    setCurrentTexture(textures[0]);
  }, [textures]);

  return (
    <div className="h-100vh w-full">
      <Canvas camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          {textures.map((texture, index) => (
            <ImagePlane key={index} texture={texture.model} position={texture.position} />
          ))}

          {/* Lights Component */}
          {/* <Lights /> */}
        </Suspense>
      </Canvas>
      {/* <div>
        {boxes.map((box, index) => (
          <button key={box.texturePath} onClick={() => handleTextureChange(index)}>
            {box.title}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default DragAndDropAnime;
