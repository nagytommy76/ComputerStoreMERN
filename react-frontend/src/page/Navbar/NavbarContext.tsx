import React, { createContext, useReducer } from 'react'
import navbarReducer, { initialNavbarState, InitialState, Action } from './Reducer/NavbarReducer'

export const NavbarContext = createContext<NavbarContextTypes>({
   state: initialNavbarState,
   dispatch: () => null,
})

export type NavbarContextTypes = {
   state: InitialState
   dispatch: React.Dispatch<Action>
}

const NavbarContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [state, dispatch] = useReducer(navbarReducer, initialNavbarState)

   return <NavbarContext.Provider value={{ state, dispatch }}>{children}</NavbarContext.Provider>
}

export default NavbarContextProvider
