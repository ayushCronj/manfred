  
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './components/test.tsx'


const Routes= () => (
    <Root>
    <Switch>
    <Route exact path="/" component={IndexPage} />
  </Switch>
</Root>
)

export default Routes