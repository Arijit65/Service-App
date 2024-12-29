// import {createContext, useState} from 'react'

// export const AppContext = createContext();
// const AppContextProvider = (props) => {

//    const [authState,setAuthState]=useState(false)

//    const login =()=>setAuthState(true)
//    const logout =()=>setAuthState(false)

//     const value =  {
        
//         authState,
//         login,
//         logout,
        
        

//     };
//   return (
//    <AppContextProvider value={value}>
//     {props.children}
//    </AppContextProvider>
//   )
// }

// export default AppContextProvider;

import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({  children }) => {
  const [authState, setAuthState] = useState(false);

  const login = () => setAuthState(true);
  const logout = () => setAuthState(false);

  const value = {
    authState,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
