import { useEffect, useReducer } from 'react';

const mini_reducer = (state = {}, action) => ({ ...state, [action.type]: action.payload });
const constructState = (initialState: object = {}) => {
    const [state, dispatch] = useReducer(mini_reducer, initialState);
    const setState = (fState = {}) => { for (const type in fState) {dispatch({ type, payload: fState[type] });} };
    const resetState = () => setState(initialState);
    return { state, setState, resetState };
};
const funcDidMount = (doAfterMount: Function) => useEffect(() => { doAfterMount(); }, [doAfterMount]);
const funcWillUnmount = (doBeforeUnmount: Function) => useEffect( () => { return  () => doBeforeUnmount(); }, [doBeforeUnmount]);
const funcDidUpdate = (values: Array<string>, doOnChange: Function) => useEffect(() => { doOnChange(); }, [values]);

export { constructState, funcDidMount, funcWillUnmount, funcDidUpdate };
