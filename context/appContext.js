import React, { createContext, useState } from 'react';

export const Context = createContext()

export const AppContext = ({children}) => {
   const [user, setUser] = useState({})

   const handleAppUser = (data) => {
      setUser(data)
   }
   

   return(
      <Context.Provider value={{
         handleAppUser,
         user
      }}>
         {children}
      </Context.Provider>
   )
}

