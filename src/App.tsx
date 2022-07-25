import React, { useState } from 'react';

import { Dropdown } from './components/Dropdown';

import { examples } from './data.example';

type ExampleProps = {
  key: number;
  value: string;
  selectedOption: string | number;
  title: string;
  element: React.ElementType;
};

const Example = ({
  selectedOption,
  value,
  title,
  element: Element,
}: ExampleProps) => {
  return selectedOption === value ? (
    <div>
      <h2>{title}</h2>
      <Element />
    </div>
  ) : null;
};

const examplesValues = examples.map((e) => e.value);
const options = Array.from(new Set(examplesValues)).map((value) => ({
  value: value,
  label: value,
}));

function App() {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedOption(e.target.value);
  return (
    <div className="App">
      <span>Sélection du custom Hook : </span>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
      {examples.map(({ id, ...exampleProps }) => (
        <Example key={id} selectedOption={selectedOption} {...exampleProps} />
      ))}
    </div>
  );
}

export default App;
