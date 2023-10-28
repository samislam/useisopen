export interface Config<O, C, MO, MC> {
  initialState?: any
  openIndicator?: any
  closeIndicator?: any
  open?: (arg: O) => void
  close?: (arg: C) => void
  manualOpen?: (stateToolkit: StateToolkit, arg: MO) => void
  manualClose?: (stateToolkit: StateToolkit, arg: MC) => void
}

export type StateToolkit = [
  state: any,
  setState: (newState: any) => void,
  reset: () => void
]

export interface ReturnObject<O, C, MO, MC> {
  open: (arg?: O) => void
  close: (arg?: C) => void
  manualOpen: (arg?: MO) => void
  manualClose: (arg?: MC) => void
}

export type ReturnType<S, O, C, MO, MC> = [S, ReturnObject<O, C, MO, MC>]
