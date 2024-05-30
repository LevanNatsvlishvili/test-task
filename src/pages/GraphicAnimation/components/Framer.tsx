import { useEffect, useState } from 'react';
import InlineSVG from 'react-inlinesvg';

interface FramerProps {
  frames: string[];
  onClick: () => void;
  size?: string;
}

const Framer = ({ frames, onClick, size }: FramerProps) => {
  const [frameIndex, setFrameIndex] = useState(0);

  const frameCount = frames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frameCount);
    }, 1500); // Adjust timing as needed
    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <div
      style={{
        width: size || '374px',
        height: size || '374px',
      }}
      onClick={onClick}
      className="cursor-pointer relative"
    >
      {frames.map((frame, i) => (
        <InlineSVG
          key={i}
          style={{
            opacity: frameIndex === i ? 1 : 0,
          }}
          src={frame}
          className="absolute left-0 top-0  duration-[3000ms]"
        />
      ))}
    </div>
  );
};

export default Framer;
