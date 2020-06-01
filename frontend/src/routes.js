import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CreateTenant from './pages/Tenant'
import CreateVRF from './pages/VRF'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/tenant" exact component={CreateTenant} />
            <Route path="/vrf" exact component={CreateVRF} />

            
            </Switch>
         </BrowserRouter>
    )
}