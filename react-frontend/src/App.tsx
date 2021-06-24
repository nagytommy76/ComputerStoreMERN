import React from 'react'
// import { Counter } from './features/counter/Counter'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './page/Navbar/Navbar'

const Login = React.lazy(() => import('./page/Auth/Login/Login'))
const Register = React.lazy(() => import('./page/Auth/Register/Register'))
const Welcome = React.lazy(() => import('./page/Welcome/Welcome'))

axios.defaults.baseURL = 'http://localhost:5050/api'

const App = () => {
   // const [itemNumber, setItemNumber] = useState<string>('')
   // const [errorMsg, setErrorMsg] = useState<string>('')
   // const [hasError, setHasError] = useState(false)
   // const getData = async (event: React.FormEvent) => {
   //    event.preventDefault()
   //    console.log(itemNumber)
   //    // GIGGEFGTX1660SUPEROC
   //    if (itemNumber) {
   //       await axios.get(`/vga/${itemNumber}`).then((result) => {
   //          console.log(result)
   //          if (result.data.hasError) {
   //             setHasError(true)
   //             setErrorMsg(result.data.errorMsg)
   //          }
   //       })
   //    }
   // }
   return (
      <BrowserRouter>
         <Navbar />
         <React.Suspense fallback={<h1>Töltés...</h1>}>
            <Switch>
               <Route path='/' exact component={Welcome} />
               <Route path='/login' component={Login} />
               <Route path='/register' component={Register} />
            </Switch>
         </React.Suspense>
         {/* <Counter /> */}
         {/* <header>
            <section>
               <h1>Get Data from my API</h1>
               <form onSubmit={getData}>
                  <input
                     type='text'
                     placeholder='itemNumber'
                     value={itemNumber}
                     onChange={(e) => setItemNumber(e.target.value)}
                  />
                  <button>Send</button>
               </form>
               {hasError && <p>Volt error: {errorMsg}</p>}
            </section>
         </header> */}
      </BrowserRouter>
   )
}

export default App
