import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface ReturnType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

/**
 * A simple abstraction to play with a boolean, don't repeat yourself.
 *
 * Source : [https://usehooks-ts.com](https://usehooks-ts.com/react-hook/use-boolean).
 *
 * @param {boolean} defaultValue - Default value. By default, start at `false`.
 * @returns {Object} object - The ``useBoolean`` object.
 * @returns {boolean} object.**value** - Current ``value``.
 * @returns {Function} object.**setValue** - Set the ``value`` as desired.
 * @returns {Function} object.**setTrue** - Set the ``value`` to `true`.
 * @returns {Function} object.**setFalse** - Set the ``value`` to `false`.
 * @returns {Function} object.**toggle** - Toggle the ``value``. `true` goes `false`, `false` goes `true`.
 */
export function useBoolean(defaultValue?: boolean): ReturnType {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
}
