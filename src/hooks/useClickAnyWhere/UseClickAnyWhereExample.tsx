import { useState } from 'react';

import { useClickAnyWhere } from './';

export default function UseClickAnyWhereExample() {
  const [count, setCount] = useState(0);

  useClickAnyWhere(() => {
    setCount((prev) => prev + 1);
  });

  return <p style={{ userSelect: 'none' }}>Click count: {count}</p>;
}
