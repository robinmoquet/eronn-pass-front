/** @format */

import _locale from '../config/yup';
import { REGEX_PASSWORD_STRENGTH } from '../config/regex';

export default function password(this: any, message?: string) {
    if (!message) {
        message = _locale.string.password;
    }

    return this.test({
        message,
        name: 'password',
        exclusive: true,
        test: function test(value: string) {
            if (value === undefined) return false;
            return new RegExp(REGEX_PASSWORD_STRENGTH).test(value);
        },
    });
}
