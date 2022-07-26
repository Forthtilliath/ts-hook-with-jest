import { useEventListener } from '../useEventListener';

type Handler = (event: MouseEvent) => void;

/**
 * This simple React hook offers you a click event listener at the page level, don't repeat yourself.
 *
 * It is made on the useEventListener.
 * @param handler
 */
function useClickAnyWhere(handler: Handler) {
  useEventListener('click', (event) => {
    handler(event);
  });
}

export default useClickAnyWhere;
