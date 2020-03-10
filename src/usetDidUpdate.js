import { useEffect } from 'react';

/**
 * ComponentDidUpdate replacement
 *
 * Comparing array values' changes within renders
 */
const useDidUpdate = (values = [], doOnChange= () => null) => useEffect(() => { doOnChange(); }, values);

export { useDidUpdate };
