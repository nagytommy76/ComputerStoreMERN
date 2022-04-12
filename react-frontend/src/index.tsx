import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { store, presistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
require('./fontAwesome/fontAwesome')

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div')) // A teszteléshez kell

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={presistor}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>
)
