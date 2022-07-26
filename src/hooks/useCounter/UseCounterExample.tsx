import { useCounter } from './';

type Props = {
  defaultValue?: number;
  defaultStep?: number;
};

export default function UseCounterExample({
  defaultValue,
  defaultStep,
}: Props) {
  const { count, increment, decrement, reset, setCount, step, setStep } =
    useCounter(defaultValue, defaultStep);

  return (
    <>
      <p>
        Count is <code>{count.toString()}</code>, Step is{' '}
        <code>{step.toString()}</code>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(5)}>setCount(5)</button>
      <button onClick={() => setCount(20)}>setCount(20)</button>
      <button onClick={() => setStep(5)}>setStep(5)</button>
      <button onClick={() => setStep(10)}>setStep(10)</button>
    </>
  );
}
