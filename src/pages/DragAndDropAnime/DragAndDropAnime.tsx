import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ProductInitialStage from './components/ProductInitialStage';
import ProductDraggableStage from './components/ProductDraggableStage';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 15, 500]} intensity={1} castShadow />
    </>
  );
};

const DragAndDropAnime = () => {
  const [stage, setStage] = useState('initial');
  return (
    <div className="h-100vh w-full dnd-container transition-colors duration-500">
      <Canvas shadows camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <Lights />

          <group renderOrder={0}>
            <ProductInitialStage stage={stage} />
          </group>
          {stage === 'drag' && (
            <group renderOrder={1}>
              <ProductDraggableStage />
            </group>
          )}
        </Suspense>
      </Canvas>

      {stage === 'initial' && (
        <button
          onClick={() => setStage('drag')}
          className="py-14 px-40 absolute left-50-percent -translate-x-50-percent bottom-10-percent bg-black text-white text-14 font-500 leading-18"
        >
          See All Product
        </button>
      )}
    </div>
  );
};

export default DragAndDropAnime;
