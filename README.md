# React Stateful Function 
<!-- ![npm][npmDownloads] -->
 ![PRsBadge] ![npm][npmLicense] ![npm][npmVersion]

### Implement react state into your function component in just One Step!

- Use funcDidMount instead of componentDidMount
- Use funcWillUnmount instead of componentWillUnmount
- Use funcDidUpdate which is easier than of componentDidUpdate
- Construct your state and update it inside any function component
- Very simple way to change state, just like Component setState !
- No hooks background needed at all, just import and use!










## Instalation 



`npm i react-stateful-function` 
**- OR -** 
`yarn add react-stateful-function`




## Usage Example

```ts
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
        {/* Your Component's JSX elements */}
        </>
    );

};
```




[npmDownloads]: <https://img.shields.io/npm/dt/react-stateful-function?label=Installs&logo=npm&style=plastic>
[npmLicense]: <https://img.shields.io/npm/l/react-stateful-function?label=License&style=plastic>
[npmVersion]: <https://img.shields.io/npm/v/react-stateful-function?label=Latest%20Version&style=plastic>
[PRsBadge]: <https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=plastic>
