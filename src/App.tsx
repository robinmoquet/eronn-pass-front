import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

interface Props {
  helloMessage: string
}

const App: React.FC<Props> = ({ helloMessage }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact render={() => <Home HomeMessage="page home test" />} />
        <Route path="/login" exact component={Login} />
        <Route path="/" render={() => <div>erreur 404 route not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
