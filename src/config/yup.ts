import * as yup from 'yup';
import { formErrorMessage } from './wording/form-error-messages';

// Import des custom validator
import equalTo from '../validator/equalTo';

// Ajout des custom validator
// NOTE: il y a un problème au niveau de la compilation
// du au fait que les nouvelles methodes ne sont pas dans
// le interface des schemas
// il faut donc rajouter le tag @ts-ignore au dessus des
// methodes customs
yup.addMethod(yup.string, 'equalTo', equalTo);

// Définitions du dictionaire local
const _locale = {
    mixed: {
        required: formErrorMessage.required,
    },
    string: {
        email: formErrorMessage.email,
        equalTo: formErrorMessage.equalTo,
    },
};

export default _locale;
yup.setLocale(_locale);
