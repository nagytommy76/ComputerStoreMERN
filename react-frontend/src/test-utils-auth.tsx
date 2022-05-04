import React, { ReactNode, useEffect } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch } from './app/hooks'
import { BrowserRouter } from 'react-router-dom'

const mockInitialState = {
   userId: '',
   isAdmin: false,
   userLoggedIn: false,
   userName: '',
   accessToken: null,
   refreshToken: null,
}
const AuthSlice = createSlice({
   name: 'auth',
   initialState: mockInitialState,
   reducers: {
      setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
         state.userLoggedIn = action.payload
      },
      setUserName: (state, action: PayloadAction<string>) => {
         state.userName = action.payload
      },
      setUserId: (state, action: PayloadAction<string>) => {
         state.userId = action.payload
      },
   },
})

const { setUserLoggedIn, setUserName, setUserId } = AuthSlice.actions

const RenderComponent: React.FC<{
   children: ReactNode
   isUserLoggedIn: boolean
   userName: string
   userId: string
}> = ({ children, isUserLoggedIn, userName, userId }) => {
   const dispatch = useAppDispatch()
   useEffect(() => {
      if (isUserLoggedIn) {
         dispatch(setUserId(userId))
         dispatch(setUserName(userName))
         dispatch(setUserLoggedIn(isUserLoggedIn))
      }
   }, [isUserLoggedIn, dispatch])
   return <>{children}</>
}

const customRender = (
   children: ReactNode,
   isUserLoggedIn: boolean = false,
   userName: string = '',
   userId: string = ''
) => {
   rtlRender(
      <Provider store={configureStore({ reducer: { auth: AuthSlice.reducer } })}>
         <BrowserRouter>
            <React.Suspense fallback={<h1>Töltés...</h1>}>
               <RenderComponent isUserLoggedIn={isUserLoggedIn} userName={userName} userId={userId}>
                  {children}
               </RenderComponent>
            </React.Suspense>
         </BrowserRouter>
      </Provider>
   )
}
export * from '@testing-library/react'
export { customRender as render }
