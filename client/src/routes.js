import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout'
import Home from './components/Home'
import RegisterLogin from './components/Register_Login'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/register_login" exac component={RegisterLogin} />
                <Route path="/" exac component={Home} />
            </Switch>
        </Layout>
        
    )
}

export default Routes;