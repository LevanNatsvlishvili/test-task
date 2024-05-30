import { personelFrames } from '@/assets/graphic/personal';
import Framer from './components/Framer';
import { relocationFrames } from '@/assets/graphic/relocation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { corpoFrames } from '@/assets/graphic/corporate';

const tree = {
  relocation: {
    frames: relocationFrames,
    children: {
      personal: {
        frames: relocationFrames,
        children: {
          familiyRelocation: {},
          homeFinding: {},
        },
      },
      corporate: {
        frames: relocationFrames,
        children: {
          registerYourCompany: {},
          employeeRelocation: {},
        },
      },
    },
  },
};

const GraphicAnimation = () => {
  const [stage, setStage] = useState('');

  const handleStage = (stg: string) => {
    if (stg === stage) {
      setStage('');
      return;
    }
    setStage(stg);
  };
  return (
    <div className="relative w-100vw h-100vh">
      <motion.div
        className="absolute top-50-percent -translate-y-50-percent -translate-x-50-percent"
        animate={{ left: stage === 'relocation' ? '5%' : '50%' }}
        transition={{ duration: 0.5 }}
      >
        <Framer frames={relocationFrames} onClick={() => handleStage('relocation')} />
      </motion.div>
      <motion.div
        className="absolute top-50-percent -translate-y-50-percent -translate-x-50-percent"
        animate={{ left: stage === 'relocation' ? '50%' : '150%' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-120">
          <Framer frames={personelFrames} onClick={() => handleStage('relocation')} size="220px" />
          <Framer frames={corpoFrames} onClick={() => handleStage('relocation')} size="220px" />
        </div>
      </motion.div>
    </div>
  );
};

export default GraphicAnimation;
