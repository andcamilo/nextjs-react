import React, { useContext, createContext, useState } from 'react';

//Context
export const AppContext = createContext();

export const useApp =  () => {
    const context = useContext(AppContext)

    return context

}
 
const AppProvider = ({ children }) => {
    const [ errorMessage, setErrorMessage ] = useState(undefined);
    const [ userSession, setUserSession ] = useState(undefined);
    return <AppContext.Provider value={{
        errorMessage,
        userSession,
        setErrorMessage,
        setUserSession

    }} >
        { children }
    </AppContext.Provider>
}

export { AppProvider }