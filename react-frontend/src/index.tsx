import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store, presistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
require('./fontAwesome/fontAwesome')

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={presistor}>
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
)
