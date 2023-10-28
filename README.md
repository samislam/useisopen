# useIsOpen

`useIsOpen` is a react hook for managing open and close states, designed to simplify the management of open/close states

## Installation

Install the package using npm:

```bash
npm install useisopen
```

Or with yarn:

```bash
yarn add useisopen
```

# Usage:

```tsx
import useIsOpen from 'use-is-open'

function App() {
  const [isOpen, { open, manualClose }] = useIsOpen({
    open(e) {
      log(e)
    },
    manualClose([state, setState, reset], anchor) {
      log(anchor)
      setState(null)
    },
  })

  return (
    <React.Fragment>
      <Button onClick={open}>Open Modal</Button>
      <Modal open={isOpen} onClose={manualClose} />
    </React.Fragment>
  )
}
```

# Configuration Options

- initialState (optional): The initial state of your component (default: false).
- openIndicator (optional): Indicator for the open state (default: true).
- closeIndicator (optional): Indicator for the close state (default: false).
- open (optional): Custom logic to execute when opening.
- close (optional): Custom logic to execute when closing.
- manualOpen (optional): Custom logic for manual opening, you have to set the open state yourself.
- manualClose (optional): Custom logic for manual closing, you have to set the close state yourself.

When `useIsOpen` is called, it will return an array of two members, the first member is the current opening state, initially, it's defined in your configuration object (which you can provide to useIsOpen(_config_)), it's the `initialState` property. by default the initialState is _config.closeIndicator_, which is `false`. you can tweak that of course, using the _config_ object as well.

the second member in the returned array is an object holding four methods, `open`, `close`, `manualOpen`, `manualClose`.

`open` and `close`, you can invoke them when you want to open/close something. Both methods can be called with one argument. these arguments can be used within your _config_ object as parameters. You can have any argument you want.

In case you wanted to pass multiple arguments, you pass them as one argument in an array or object. for example:

```ts
open([a, b, c])
```

you can then use `a`, `b` and `c` as follows in the _config_ object as follows:

```ts
const [isOpen, { open, manualClose }] = useIsOpen({
  open(args) {
    args[0] // the variable a
    args[1] // the variable b
    args[2] // the variable c
  },
})
```

When the function `open` is invoked, the state is changed to indicate that the modal, menu, or whatever you're working on is now opened.

`close` is to set the state to close that thing.

in case you want to have more control, use the `manualOpen` and `manualClose` methods instead.

They give you the freedom to set the state yourself, so you can for example set the state as follows:

```ts
const [isOpen, { open, manualClose }] = useIsOpen({
  manualOpen(stateToolkit, args) {
    const [state, setState, reset] = stateToolkit
    setState((previousState) => !previousState) // a react thing, nothing fancy. useful for setting the state synchronously
  },
})
```

`manualOpen` and `manualClose` gets called with two arguments, the stateToolkit argument, which is an array holding three members, `[state, setState, reset]`.

- `state` and `setState` are obvious, they're the react useState() returned values.
- `reset` is a method to set the state (`setState`) back to the `initialState`.

The second argument `manualOpen` and `manualClose` gets called with is the argument you provide when you call these methods.

# Contributing

Contributions are welcome! Please see our Contributing Guidelines for more details.

# Issues

If you encounter any issues or have questions, please open an issue on the GitHub repository.
