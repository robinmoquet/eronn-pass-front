import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { path } from './routes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path={path('home', null, false)}
                    exact
                    component={Home}
                />
                <Route
                    path={path('login', null, false)}
                    exact
                    component={Login}
                />
                <Route
                    path={path('signup', null, false)}
                    exact
                    component={Signup}
                />
                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
