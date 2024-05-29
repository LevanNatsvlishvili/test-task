export interface ImagePlaneProps {
  texturePath: string;
  shadowTexture: string;
  position: [number, number, number];
  index: number;
  hovered: boolean;
  animation: { rotate: number; x: number; y: number };
}

export type Box = Omit<ImagePlaneProps, 'index' | 'hovered'>;
export type boxAnimations = Omit<ImagePlaneProps, 'shadowTexture'>;
