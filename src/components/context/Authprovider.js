import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const authContext = createContext()
const Authprovider = ({children}) => {
    const allContexts =useFirebase();
    return (
        <authContext.Provider value={allContexts}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;