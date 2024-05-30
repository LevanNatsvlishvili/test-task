import { useEffect, useState } from 'react';
import frame1 from '@/assets/graphic/relocation/relocation-1.svg';
import frame2 from '@/assets/graphic/relocation/relocation-2.svg';
import frame3 from '@/assets/graphic/relocation/relocation-3.svg';
import frame4 from '@/assets/graphic/relocation/relocation-4.svg';
import InlineSVG from 'react-inlinesvg';

const GraphicAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  const frames = [frame1, frame2, frame3, frame4];
  const frameCount = frames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frameCount);
    }, 1500); // Adjust timing as needed
    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <div className="w-374 h-374 absolute left-50-percent top-50-percent -translate-y-50-percent -translate-x-50-percent">
      {frames.map((frame, i) => (
        <InlineSVG
          key={i}
          style={{
            opacity: frameIndex === i ? 1 : 0,
          }}
          src={frame}
          className="w-374 h-374 absolute left-0 top-0  duration-[3000ms]"
        />
        // <Frame />
        // <img
        //
        //   src={frame}
        //   alt="frame"
        //
        // />
      ))}
    </div>
  );
};

export default GraphicAnimation;
