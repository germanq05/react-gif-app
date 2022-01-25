import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../05-userLayoutEffect/layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0]; //Si hay data, entonces extrae la data del sector 0

    const pTag = useRef();

    useLayoutEffect(() => {
      
        

    }, [quote]);
    

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p className="mb-1" ref={pTag}> {quote} </p>
            </blockquote>

            <button className="btn btn-primary"
                onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
