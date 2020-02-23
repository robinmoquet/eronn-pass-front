import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { path } from './routes';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={path('home')} exact render={() => <Home HomeMessage="page home test" />} />
                <Route path={path('login')} exact component={Login} />
                <Route path="/" render={() => <div>erreur 404 route not found</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;