import React from 'react'
import App from '../../../container/App/App.container';
import Dog from '../../../container/Dog/Dog.container';
import Home from '../../../container/Home/Home.container';
import DetailsDos from '../../../components/Dog/DetailsDog.component'

import Header from '../../../shared/components/Header/Header.component'

import {Switch , Route} from 'react-router-dom'

export default function AppRouter() {
  return (
    <App>
      <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/all' component={Dog} exact/>
        <Route path='/details' component={DetailsDos} exact/>
        <Route component={Home}/>
      </Switch>

    </App>
  )
}
