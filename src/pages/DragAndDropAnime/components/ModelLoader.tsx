import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const ModelLoader = ({ path }: { path: string }) => {
  const texture = useLoader(TextureLoader, path);
  return <meshStandardMaterial map={texture} transparent />;
};

export default ModelLoader;
