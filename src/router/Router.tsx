/** @format */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { path } from './route.utils';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import ConfirmEmail from '../pages/ConfirmEmail';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path={path('home', null, false)} exact component={Home} />
            <Route path={path('login', null, false)} exact component={Login} />
            <Route
                path={path('signup', null, false)}
                exact
                component={Signup}
            />
            <Route
                path={path('confirmEmail', null, false)}
                exact
                component={ConfirmEmail}
            />
            <Route path="/" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
