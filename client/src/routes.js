import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout'
import Home from './components/Home'
import RegisterLogin from './components/Register_Login'
import Register from './components/Register_Login/register'
import UserDashboard from './components/User'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/user/dashboard" exac component={UserDashboard} />

                <Route path="/register" exac component={Register} />
                <Route path="/register_login" exac component={RegisterLogin} />
                <Route path="/" exac component={Home} />
            </Switch>
        </Layout>
        
    )
}

export default Routes;