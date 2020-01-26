import { useEffect } from 'react';

/**
 * ComponentDidMount replacement
 */
const useDidMount = (doAfterMount: Function) => useEffect(() => { doAfterMount(); }, []);

export { useDidMount };
