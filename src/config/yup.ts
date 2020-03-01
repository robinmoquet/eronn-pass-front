import { setLocale } from 'yup';
import { formErrorMessage } from './wording/form-error-messages';

setLocale({
    mixed: {
        required: formErrorMessage.required,
    },
    string: {
        email: formErrorMessage.email,
    },
});
