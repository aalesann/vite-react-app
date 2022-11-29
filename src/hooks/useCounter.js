import { useState } from "react"

export const useCounter = (initialState) => {
  
    const [state, setState] = useState(initialState)
  
    const increment = () => {
        setState( state + 1);
    }

    const reset = () => {
        setState( initialState );
    }

    const decrement = () => {
        if(state <= 1) return;
        setState( state - 1);
    }


    return { state, increment, decrement, reset }
}
