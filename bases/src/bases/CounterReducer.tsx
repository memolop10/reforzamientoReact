import { useReducer, useState } from "react"

interface CounterState {
  counter : number
  previous: number
  changes : number
}


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

type CounterAction = { type: 'increseBy', payload: { value: number } } | 
                     { type: 'reset' }; 

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

  const { counter, changes } = state

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0
      }

    case 'increseBy':
      return {
        counter: counter + action.payload.value,
        changes: changes + 1,
        previous: counter
      }
  
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const onReset = () => {
    dispatch({type: "reset"})
  }

  const increseBy = (value:number) => {
    dispatch({ type: 'increseBy', payload: { value } })
  }

  return (
    <>
       <h1>CounterReducerComponent</h1>
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
