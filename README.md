# React Stateful Function 
##### Requires React version =< 16.8 to work 
![npm][npmDownloads] ![PRsBadge] ![npm][npmLicense] ![npm][npmVersion]

### Implement react state into your function component in just One Step!

- Use useDidMount instead of componentDidMount
- Use useWillUnmount instead of componentWillUnmount
- Use useDidUpdate which is easier than of componentDidUpdate
- Initialize your state and update it inside any function component
- Very simple way to change state, just like Component setState !
- No hooks background needed at all, just import and use!


## Instalation 



`npm i react-stateful-function` 
**- OR -** 
`yarn add react-stateful-function`




## Usage Example

```ts
import React from 'react';

import {
    useInitialState,
    useDidMount,
    useWillUnmount,
    useDidUpdate
}  from 'react-stateful-function';


const MyStatefulComponent = (props) => {

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

export default MyStatefulComponent;
```




[npmDownloads]: <https://img.shields.io/npm/dt/react-stateful-function?label=Installs&logo=npm&style=plastic>
[npmLicense]: <https://img.shields.io/npm/l/react-stateful-function?label=License&style=plastic>
[npmVersion]: <https://img.shields.io/npm/v/react-stateful-function?label=Latest%20Version&style=plastic>
[PRsBadge]: <https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic>
