import React from 'react'
import { useCallback } from 'react';
import { useCounter } from '../Hooks';
import { Increment } from './Increment';

export const CallBackHook = () => {

    const { count, increment } = useCounter(1);
    
    const newIncrement = useCallback(() => {increment(1)},[], )
    
    return (
        <>
            <h1>CallBackHook Counter: {count}</h1>
            <hr />
            <Increment newIncrement={newIncrement}></Increment>
        </>

    )
}
