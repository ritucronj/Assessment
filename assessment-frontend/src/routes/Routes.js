import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

const Routes = () => {  
    const domain = window.location.hostname;
    let name= domain.split('.');

    return <div
      
    >
        <Switch>
            <Route exact path="/" component={Dashboard} />
         
           
        </Switch>
    </div>
}

export default Routes;
