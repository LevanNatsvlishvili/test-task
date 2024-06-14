import { useMemo } from 'react';

const usePositions = (stage: string) => {
  const positions = useMemo(() => {
    const initialPositions = {
      personal: { left: '160%', top: '50%' },
      corporate: { left: '150%', top: '50%' },
      familyRelocation: { left: '160%', top: '50%' },
      homeFinding: { left: '150%', top: '50%' },
      companyRegistrationFirst: { left: '150%', top: '50%' },
      companyRegistrationSecond: { left: '150%', top: '50%' },
    };
    if (stage === '') return initialPositions;
    if (stage === 'relocation') {
      initialPositions.personal = { left: '40%', top: '50%' };
      initialPositions.corporate = { left: '60%', top: '50%' };
      return initialPositions;
    }
    if (stage === 'personal' || stage === 'corporate') {
      initialPositions.personal = { left: '20%', top: '35%' };
      initialPositions.corporate = { left: '20%', top: '65%' };
      if (stage === 'personal') {
        initialPositions.familyRelocation = { left: '40%', top: '50%' };
        initialPositions.homeFinding = { left: '60%', top: '50%' };
      }
      if (stage === 'corporate') {
        initialPositions.companyRegistrationFirst = { left: '40%', top: '50%' };
        initialPositions.companyRegistrationSecond = { left: '60%', top: '50%' };
      }
      return initialPositions;
    }
  }, [stage]);

  return positions;
};

export default usePositions;
