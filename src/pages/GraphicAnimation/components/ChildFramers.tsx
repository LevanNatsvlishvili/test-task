import Framer from './Framer';
import { motion } from 'framer-motion';

type Position = {
  left: string;
  top: string;
};

interface ChildFramerProps {
  handleStageOne: () => void;
  handleStageTwo: () => void;
  positionOne: Position;
  positionTwo: Position;
  frameOne: string[];
  frameTwo: string[];
  duration: number;
}

const ChildFramer = (props: ChildFramerProps) => {
  const { handleStageOne, handleStageTwo, positionOne, positionTwo, frameOne, frameTwo, duration } = props;

  return (
    <>
      <motion.div
        transition={{ duration: duration }}
        animate={positionOne}
        className="absolute -translate-y-50-percent"
      >
        <Framer onClick={handleStageOne} frames={frameOne} size="220px" />
      </motion.div>
      <motion.div
        transition={{ duration: duration }}
        animate={positionTwo}
        className="absolute -translate-y-50-percent"
      >
        <Framer onClick={handleStageTwo} frames={frameTwo} size="220px" />
      </motion.div>
    </>
  );
};

export default ChildFramer;
