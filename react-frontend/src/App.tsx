import React, { useState } from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/api'

const App = () => {
   const [itemNumber, setItemNumber] = useState<string>('')
   const getData = async (event: React.FormEvent) => {
      event.preventDefault()
      console.log(itemNumber)
      // GIGGEFGTX1660SUPEROC
      await axios.get(`/vga/${itemNumber}`).then((result) => console.log(result))
   }
   return (
      <div className='App'>
         <header className='App-header'>
            <Counter />
            <p>
               Edit <code>src/App.tsx</code> and save to reload.
            </p>
         </header>
         <section>
            <h1>Get Data from my API</h1>
            <form onSubmit={getData}>
               <input type='text' placeholder='itemNumber' value={itemNumber} onChange={(e) => setItemNumber(e.target.value)} />
               <button>Send</button>
            </form>
         </section>
      </div>
   )
}

export default App
