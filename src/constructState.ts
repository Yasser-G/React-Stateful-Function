import { useReducer } from 'react';

const mini_reducer = (state = {}, action) => ({ ...state, [action.type]: action.payload });
const constructState = (initialState: object = {}) => {
    const [state, dispatch] = useReducer(mini_reducer, initialState);
    const setState = (fState = {}) => { for (const type in fState) { dispatch({ type, payload: fState[type] }); } };
    const resetState = () => setState(initialState);
    return { state, setState, resetState };
};
export { constructState };
