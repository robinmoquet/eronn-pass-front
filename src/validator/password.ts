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
        test: function test(value: any) {
            if (value === undefined) return false;
            // la function .test() sur les regex ne marche pas
            // probablement parce qu'elle rentre en conflit avec
            // la methode test si dessus
            return value.search(REGEX_PASSWORD_STRENGTH) !== -1;
        },
    });
}
