export interface Config<O, C, MO, MC> {
  initialState?: any
  openIndicator?: any
  closeIndicator?: any
  open?: (arg: O) => any
  close?: (arg: C) => any
  manualOpen?: (stateToolkit: StateToolkit, arg: MO) => any
  manualClose?: (stateToolkit: StateToolkit, arg: MC) => any
}

export type StateToolkit = [
  state: any,
  setState: (newState: any) => void,
  reset: () => void
]

export interface ReturnObject<O, C, MO, MC> {
  open: (arg?: O) => any
  close: (arg?: C) => any
  manualOpen: (arg?: MO) => any
  manualClose: (arg?: MC) => any
}

export type ReturnType<S, O, C, MO, MC> = [S, ReturnObject<O, C, MO, MC>]
