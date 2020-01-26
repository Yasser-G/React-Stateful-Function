import { useEffect } from 'react';

/**
 * ComponentWillUnmount replacement
 */
const useWillUnmount = (doBeforeUnmount: Function = () => null) => useEffect(() => { return () => doBeforeUnmount(); }, []);

export { useWillUnmount };
