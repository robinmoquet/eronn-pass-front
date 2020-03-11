/** @format */

import * as yup from 'yup';
import { formErrorMessage } from './wording/form-error-messages';

// Import des custom validator
import equalTo from '../validator/equalTo';
import password from '../validator/password';
import passwordPawned from '../validator/passwordPawned';

// Ajout des custom validator
// NOTE: il y a un problème au niveau de la compilation
// du au fait que les nouvelles methodes ne sont pas dans
// les interfaces des schemas
// il faut donc rajouter le tag @ts-ignore au dessus des
// methodes customs
yup.addMethod(yup.string, 'equalTo', equalTo);
yup.addMethod(yup.string, 'password', password);
yup.addMethod(yup.string, 'passwordPawned', passwordPawned);

// Définitions du dictionaire local
const _locale = {
    mixed: {
        required: formErrorMessage.required,
    },
    string: {
        email: formErrorMessage.email,
        equalTo: formErrorMessage.equalTo,
        password: formErrorMessage.password,
        passwordPawned: formErrorMessage.passwordPawned,
    },
};

export default _locale;
yup.setLocale(_locale);
