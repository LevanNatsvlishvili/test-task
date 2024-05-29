import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { gsap } from 'gsap';
import { boxAnimations } from '../utils/types';

const BoxAnimations = ({ texturePath, position, index, hovered, animation }: boxAnimations) => {
  const ref = useRef<Group>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [texturePath]);

  return ref;
};

export default BoxAnimations;
