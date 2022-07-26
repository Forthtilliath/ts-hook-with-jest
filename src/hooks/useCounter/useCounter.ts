import { Dispatch, SetStateAction, useState } from 'react';

interface ReturnType {
  count: number;
  step: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
  setStep: Dispatch<SetStateAction<number>>;
}

/**
 * A simple abstraction to play with a counter, don't repeat yourself.
 *
 * Source : [https://usehooks-ts.com](https://usehooks-ts.com/react-hook/use-counter).
 *
 * @param {boolean} initialValue - Initial value. By default, start at `0`.
 * @param {boolean} initialStep - Initial step. By default, start at `1`.
 * @returns {Object} **object** - The ``useBoolean`` object.
 * @returns {boolean} object.**count** - Current ``count``.
 * @returns {boolean} object.**step** - Current ``step``.
 * @returns {Function} object.**increment** - Increment the ``count`` by the ``step`` amount.
 * @returns {Function} object.**decrement** - Decrement the ``count`` by the ``step`` amount.
 * @returns {Function} object.**reset** - Reset the `count` and `step` to initial values.
 * @returns {Function} object.**setCount** - Edit the `count` value.
 * @returns {Function} object.**setStep** - Edit the `step` value.
 */
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
