import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout'
import Auth from './hoc/auth'

import Home from './components/Home'
import RegisterLogin from './components/Register_Login'
import Register from './components/Register_Login/register'
import UserDashboard from './components/User'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/user/dashboard" exac component={Auth(UserDashboard, true)} />

                <Route path="/register" exac component={Auth(Register, false)} />
                <Route path="/register_login" exac component={Auth(RegisterLogin, false)} />
                <Route path="/" exac component={Auth(Home, null)} />
            </Switch>
        </Layout>
        
    )
}

export default Routes;