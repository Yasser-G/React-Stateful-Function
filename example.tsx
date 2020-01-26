import React from 'react';
import {
    useInitialState,
    useDidMount,
    useWillUnmount,
    useDidUpdate
} from './src';


const ReactStatefulFuncComponentExample = (props) => {

    const {
        state, // <= Access and Use state, just like this.state !
        setState, // <= Change and Update state, just like this.setState !
        resetState, // <= Reset state to its initial values
    } = useInitialState({ count: 0, toggle: false }); // <= Initialize state, just like this.state={} !


    const { count, toggle } = state; // Decounstrct for easier usage.


    useDidMount(() => {

        // ComponentDidMount replacement

    });

    useWillUnmount(() => {

        // ComponentWillUnmount replacement

    });

    useDidUpdate([count], () => {

        // ComponentDidUpdate replacement
        // Comparing values' changes within renders
        // Will be called if array values are changed
        // You can make more than one `useDidUpdate` hooks
        // Or Add new variables inside `values` array to call same action


    });


    // Component Render return
    return (
        <>
            {/* Your Component's JSX elements */}
        </>
    );

};

export { ReactStatefulFuncComponentExample };
