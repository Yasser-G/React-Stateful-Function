import { useReducer } from 'react';

const mini_reducer = (state = {}, action) => ({ ...state, [action.type]: action.payload });
const useInitialState = (initialState = {}) => {
    const [state, dispatch] = useReducer(mini_reducer, initialState);
    const setState = (fState = {}, callback = () => null) => { for (const type in fState) { dispatch({ type, payload: fState[type] }); } callback(); };
    const resetState = () => setState(initialState);
    return { state, setState, resetState };
};
export { useInitialState };
