import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserHistory } from 'history'

import './index.css'
import { store, presistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
require('./fontAwesome/fontAwesome')

export const globalHistory = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div')) // A teszteléshez kell

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={presistor}>
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>
)
