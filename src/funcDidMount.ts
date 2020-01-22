import { useEffect } from 'react';

/**
 * ComponentDidMount replacement
 */
const funcDidMount = (doAfterMount: Function) => useEffect(() => { doAfterMount(); }, []);

export { funcDidMount };
