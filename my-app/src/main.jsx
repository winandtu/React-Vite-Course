import React from 'react'
import ReactDOM from 'react-dom/client'
//importo mis componentes
import './styles.css'

import { FirstApp } from './componentes/FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Hola soy Goku' subtitle={135} />
  </React.StrictMode>,
)
