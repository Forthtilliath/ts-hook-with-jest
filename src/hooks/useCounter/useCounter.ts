import { Dispatch, SetStateAction, useState } from 'react';

interface ReturnType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export function useCounter(
  initialValue: number = 0,
  initialStep: number = 1
): ReturnType {
  const [count, setCount] = useState(initialValue);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount((x) => x + step);
  const decrement = () => setCount((x) => x - step);
  const reset = () => {
    setCount(initialValue);
    setStep(initialStep);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
    step,
    setStep,
  };
}
