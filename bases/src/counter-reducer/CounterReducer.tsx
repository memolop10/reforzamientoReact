import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer"
import * as CounterActions from "./actions/actions" 

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const onReset = () => {
    dispatch(CounterActions.doReset())
  }

  const increseBy = (value:number) => {
    dispatch(CounterActions.doIncreseBy(value))
  }

  return (
    <>
       <h1>Counter Reducer Segmentado</h1>
       <pre>
        { JSON.stringify( counterState, null, 2) }
       </pre>
       <button onClick={ onReset }>
            reset
       </button>
       <button onClick={ () => increseBy(1) }>+1</button>
       <button onClick={ () => increseBy(5) }>+5</button>
       <button onClick={ () => increseBy(10) }>+10</button>
    </>
  )
}
