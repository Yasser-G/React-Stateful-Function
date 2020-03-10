import { useEffect } from 'react';

/**
 * ComponentWillUnmount replacement
 */
const useWillUnmount = (doBeforeUnmount = () => null) => useEffect(() => { return () => doBeforeUnmount(); }, []);

export { useWillUnmount };
