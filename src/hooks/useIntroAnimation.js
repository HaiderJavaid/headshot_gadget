import { useState, useEffect } from 'react';

export function useIntroAnimation() {
  const [introState, setIntroState] = useState('playing'); // 'playing', 'fading', 'done'

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIntroState('fading'), 1800);
    const doneTimer = setTimeout(() => setIntroState('done'), 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return introState;
}
