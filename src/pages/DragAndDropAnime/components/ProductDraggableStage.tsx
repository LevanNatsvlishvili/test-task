import { useEffect, useRef, useState } from 'react';
import { Box } from '../utils/types';
import ModelLoader from './ModelLoader';
import { Group } from 'three';
import { boxesDrag } from '../utils/data';
import { useDrag } from '@use-gesture/react';
import { useSpring, a } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

type DragBoxProps = Omit<Box, 'animation'> & { isInView: boolean; bg: string };

const ImagePlane = ({ texturePath, shadowTexture, position, isInView, bg }: DragBoxProps) => {
  const ref = useRef<Group>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (!isMounted) {
        ref.current.scale.set(0, 0, 0);
        setIsMounted(true);
      }
      const scaleAnim = gsap.to(ref.current.scale, {
        x: isInView ? 1.3 : 1,
        y: isInView ? 1.3 : 1,
        z: isInView ? 1.3 : 1,
        duration: isMounted ? 1 : 2,
        ease: 'power3.out',
      });

      return () => {
        scaleAnim.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    const container = document.querySelector('.dnd-container');
    // change containers background color

    if (isInView) {
      container?.classList.remove(container?.classList[4]);
      container?.classList.add(bg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -10, 0]}>
        <planeGeometry args={[70, 55]} />
        <ModelLoader path={shadowTexture} />
      </mesh>
      <mesh>
        <planeGeometry args={[60, 50]} />
        <ModelLoader path={texturePath} />
      </mesh>
    </group>
  );
};

const ProductDraggableStage = () => {
  const ref = useRef<Group>(null);
  const frameCount = useRef(0);
  const [isInView, setIsInView] = useState(0);

  const [{ position }, set] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 100 },
  }));

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 10 === 0) {
      if (ref.current) {
        const curr = position.get()[0];
        if (isInView !== 0 && curr < 0 && curr > -100) setIsInView(0);
        if (isInView !== 1 && curr < -100 && curr > -200) setIsInView(1);
        if (isInView !== 2 && curr < -200 && curr > -300) setIsInView(2);
      }
      frameCount.current = 0; // Reset the counter to avoid overflow
    }
  });

  const bind = useDrag(
    ({ movement: [mx], memo = position.get() }) => {
      set({ position: [memo[0] + mx, memo[1], memo[2]] });
      if (memo[0] > -50) {
        return [0, 0, 0];
      }
      if (memo[0] < -250) {
        return [-300, 0, 0];
      }
      return memo;
    },
    {
      bounds: { left: -300, right: 0 }, // Adjust the bounds as necessary
      rubberband: true,
    }
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <a.group ref={ref} position={position.to((x, y, z) => [x, y, z])} {...bind()}>
      {boxesDrag.map((box, index) => (
        <ImagePlane
          key={index}
          texturePath={box.texturePath}
          shadowTexture={box.shadowTexture}
          position={box.position}
          isInView={isInView === index}
          bg={box.bg}
        />
      ))}
    </a.group>
  );
};

export default ProductDraggableStage;
