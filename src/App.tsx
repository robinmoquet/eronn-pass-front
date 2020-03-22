/** @format */

import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './router/Router';
import client from './apollo.client';

const App: React.FC = () => (
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
);

export default App;
