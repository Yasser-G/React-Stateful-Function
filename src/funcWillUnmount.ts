import { useEffect } from 'react';

/**
 * ComponentWillUnmount replacement
 */
const funcWillUnmount = (doBeforeUnmount: Function) => useEffect(() => { return () => doBeforeUnmount(); }, []);

export { funcWillUnmount };
