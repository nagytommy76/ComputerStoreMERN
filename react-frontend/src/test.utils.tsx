import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './Theme/Themes'
import { Provider } from 'react-redux'
import { store } from './app/store'

const AllTheProviders: FC = ({ children }) => {
   return (
      <Provider store={store}>
         <ThemeProvider theme={darkTheme}>
            <React.Suspense fallback={<h1>Töltés...</h1>}>{children}</React.Suspense>
         </ThemeProvider>
      </Provider>
   )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
   render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
