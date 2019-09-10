  
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from '../components/test'


const Routes: React.SFC = () => (

    <Switch>
    <Route exact path="/test" component={Test} />
  </Switch>
)

export default Routes