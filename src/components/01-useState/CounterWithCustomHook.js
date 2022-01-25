import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With CustomHook: {state} </h1>
            <hr />
            <button onClick={() => increment(2)} className="btn">+2</button>
            <button onClick={() => decrement(2)} className="btn">-2</button>
            <button onClick={() => reset()} className="btn">Reset</button>
        </>
    )

}

export default CounterWithCustomHook
