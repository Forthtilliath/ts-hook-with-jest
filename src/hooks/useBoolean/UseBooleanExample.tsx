import { useBoolean } from './';

type Props = {
  defaultValue?: boolean;
};

export default function UseBooleanExample({ defaultValue }: Props) {
  const { value, setValue, setTrue, setFalse, toggle } =
    useBoolean(defaultValue);

  // Just an example to use "setValue"
  const customToggle = () => setValue((x) => !x);

  return (
    <>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={customToggle}>custom toggle</button>
    </>
  );
}
