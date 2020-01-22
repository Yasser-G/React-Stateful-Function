import { useEffect } from 'react';

/**
 * ComponentDidUpdate replacement
 *
 * Comparing array values' changes within renders
 */
const funcDidUpdate = (values: Array<any>, doOnChange: Function) => useEffect(() => { doOnChange(); }, [doOnChange, values]);

export { funcDidUpdate };
