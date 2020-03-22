/** @format */

import ApolloClient from 'apollo-boost';
import { ROOT_API_URL } from './config/global';

const client = new ApolloClient({
    uri: ROOT_API_URL,
});

export default client;
