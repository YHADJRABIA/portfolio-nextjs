import { useEventListener } from "./useEventListener"

type Handler = (event: MouseEvent) => void

/**
 * Calls handler function whenever user clicks anywhere on the page
 */
export const useClickAnyWhere = (handler: Handler) => {
  useEventListener<MouseEvent>("click", event => {
    handler(event)
  })
}
