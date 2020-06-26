import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'

// función para exponer a BrowserRouter y los elementos que vamos a tener para nuestra construcción de rutas
const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
)

export default App