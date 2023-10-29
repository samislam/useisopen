import useState2 from 'usestate2'
import { Config, ReturnType } from './useIsOpen.types'

function useIsOpen<O = unknown, C = unknown, MO = unknown, MC = unknown>(
  config?: Config<O, C, MO, MC>
) {
  const {
    initialState = config?.closeIndicator ?? false,
    closeIndicator = false,
    openIndicator = true,
    ...restConfig
  } = config || {}

  const stateToolkit = useState2(initialState)
  const [state, setState, reset] = stateToolkit

  const open = (arg: O) => {
    setState(openIndicator)
    return restConfig.open?.(arg)
  }
  const close = (arg: C) => {
    setState(closeIndicator)
    return restConfig.close?.(arg)
  }
  const manualOpen = (arg: MO) => {
    return restConfig.manualOpen?.(stateToolkit, arg)
  }
  const manualClose = (arg: MC) => {
    return restConfig.manualClose?.(stateToolkit, arg)
  }

  return [state, { open, close, manualOpen, manualClose }] as ReturnType<
    typeof state,
    O,
    C,
    MO,
    MC
  >
}

export default useIsOpen
