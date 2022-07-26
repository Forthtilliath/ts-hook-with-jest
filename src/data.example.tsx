import {
  UseBooleanExample,
  UseClickAnyWhereExample,
  UseCounterExample,
  UseEventListenerExample,
  UseIsomorphicLayoutEffectExample,
} from './hooks';
import * as Hooks from './hooks';

export const examples = [
  {
    id: 0,
    value: 'UseBooleanExample',
    title: 'UseBooleanExample without args',
    element: () => <UseBooleanExample />,
  },
  {
    id: 1,
    value: 'UseBooleanExample',
    title: 'UseBooleanExample with arg at true',
    element: () => <UseBooleanExample defaultValue={true} />,
  },
  {
    id: 2,
    value: 'UseBooleanExample',
    title: 'UseBooleanExample with arg at false',
    element: () => <UseBooleanExample defaultValue={false} />,
  },
  {
    id: 3,
    value: 'UseCounterExample',
    title: 'UseCounterExample without args',
    element: () => <UseCounterExample />,
  },
  {
    id: 4,
    value: 'UseCounterExample',
    title: 'UseCounterExample with defaultValue=5 and step=1',
    element: () => <UseCounterExample defaultValue={5} defaultStep={1} />,
  },
  {
    id: 5,
    value: 'UseCounterExample',
    title: 'UseCounterExample with defaultValue=0 and step=2',
    element: () => <UseCounterExample defaultValue={0} defaultStep={2} />,
  },
  {
    id: 6,
    value: 'UseEventListenerExample',
    title: 'UseEventListenerExample',
    element: () => <UseEventListenerExample />,
  },
  {
    id: 7,
    value: 'UseClickAnyWhereExample',
    title: 'UseClickAnyWhereExample',
    element: () => <UseClickAnyWhereExample />,
  },
  {
    id: 8,
    value: 'UseIsomorphicLayoutEffectExample',
    title: 'UseIsomorphicLayoutEffectExample',
    element: () => <UseIsomorphicLayoutEffectExample />,
  },
];
