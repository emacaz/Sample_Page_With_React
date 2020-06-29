import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

// función para exponer a BrowserRouter y los elementos que vamos a tener para nuestra construcción de rutas
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App