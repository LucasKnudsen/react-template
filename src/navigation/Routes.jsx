import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Template } from '../screens'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Template} />
    </Switch>
  )
}

export default Routes
