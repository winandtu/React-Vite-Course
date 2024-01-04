import React from 'react'
import ReactDOM from 'react-dom/client'
//importo mis componentes
import './styles.css'

import { FirstApp } from './componentes/FirstApp'
import { CounterApp } from './componentes/CounterApp'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Hola soy Goku'/>
  </React.StrictMode>,
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value= {1704}/>
  </React.StrictMode>
)
