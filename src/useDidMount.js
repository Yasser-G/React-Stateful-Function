import { useEffect } from 'react';

/**
 * ComponentDidMount replacement
 */
const useDidMount = (doAfterMount) => useEffect(() => { doAfterMount(); }, []);

export { useDidMount };
