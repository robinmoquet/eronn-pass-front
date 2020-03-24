/** @format */

import { gql } from 'apollo-boost';

export const CONFIRM_EMAIL = gql`
    mutation ConfirmationEmail($key: String!) {
        confirmationEmail(key: $key) {
            status
            message
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreatUser($userDto: UserInput!) {
        createUser(userDto: $userDto) {
            id
            fullname
        }
    }
`;

export const CONNECTION = gql`
    query Connection($connectionDto: ConnectionInput!) {
        connection(connectionDto: $connectionDto) {
            status, message, jwt
        }
    }
`;
