import { useEffect } from 'react';

/**
 * ComponentDidUpdate replacement
 *
 * Comparing array values' changes within renders
 */
const useDidUpdate = (values: Array<any> = [], doOnChange: Function = () => null) => useEffect(() => { doOnChange(); }, values);

export { useDidUpdate };
