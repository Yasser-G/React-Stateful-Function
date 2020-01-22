import React from 'react';
import { constructState, funcDidMount, funcWillUnmount, funcDidUpdate } from './src';


const ReactStatefulFuncComponentExample = () => {

    const {
        state, // <= Access and Use state, just like this.state !
        setState, // <= Change and Update state, just like this.setState !
        resetState, // <= Reset state to its initial values
    } = constructState({ count: 0, toggle: false }); // <= Initialize state, just like this.state={} !


    const { count, toggle } = state; // Decounstrct for easier usage.


    funcDidMount(() => {

        // ComponentDidMount replacement

    });

    funcWillUnmount(() => {

        // ComponentWillUnmount replacement

    });

    funcDidUpdate([count], () => {

        // ComponentDidUpdate replacement
        // Comparing values' changes within renders
        // Will be called if `count` value is changed
        // You can make more `funcDidUpdate` with other values

    });


    // Component Render return
    return (
        <>
        </>
    );





};

export { ReactStatefulFuncComponentExample };
