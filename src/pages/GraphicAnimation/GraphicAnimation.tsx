import Framer from './components/Framer';
import { relocationFrames } from '@/assets/graphic/relocation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { familyRelocationFrames } from '@/assets/graphic/familyRelocation';
import { homeFindingFrames } from '@/assets/graphic/homeFinding';
import { companyRegistrationFrames } from '@/assets/graphic/companyRegistration';
import ChildFramer from './components/ChildFramers';
import { corpoFrames } from '@/assets/graphic/corporate';
import { personelFrames } from '@/assets/graphic/personal';
import usePositions from './hooks/positions';

const GraphicAnimation = () => {
  const [stage, setStage] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const handleStage = (stg: string) => {
    if (stg === '') return;
    if (stg === stage) {
      setStage('');
      return;
    }
    setStage(stg);
  };

  const positions = usePositions(stage);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-100vw h-100vh">
      <motion.div
        className="absolute top-50-percent -translate-y-50-percent -translate-x-50-percent"
        animate={{ left: ['relocation', 'personal', 'corporate'].includes(stage) ? '5%' : '50%' }}
        transition={{ duration: isMounted ? 0.5 : 0.5 }}
      >
        <Framer frames={relocationFrames} onClick={() => handleStage('relocation')} />
      </motion.div>

      {/* Relocation children */}
      <ChildFramer
        handleStageOne={() => handleStage('personal')}
        handleStageTwo={() => handleStage('corporate')}
        positionOne={positions!.personal}
        positionTwo={positions!.corporate}
        frameOne={personelFrames}
        frameTwo={corpoFrames}
        duration={isMounted ? 0.5 : 0}
      />

      {/* Personal children */}
      <ChildFramer
        handleStageOne={() => handleStage('')}
        handleStageTwo={() => handleStage('')}
        positionOne={positions!.familyRelocation}
        positionTwo={positions!.homeFinding}
        frameOne={familyRelocationFrames}
        frameTwo={homeFindingFrames}
        duration={isMounted ? 0.5 : 0}
      />

      {/* Corpo children */}
      <ChildFramer
        handleStageOne={() => handleStage('')}
        handleStageTwo={() => handleStage('')}
        positionOne={positions!.companyRegistrationFirst}
        positionTwo={positions!.companyRegistrationSecond}
        frameOne={companyRegistrationFrames}
        frameTwo={companyRegistrationFrames}
        duration={isMounted ? 0.5 : 0}
      />
    </div>
  );
};

export default GraphicAnimation;
