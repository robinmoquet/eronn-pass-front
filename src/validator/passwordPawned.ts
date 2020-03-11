/** @format */

import { SHA1, WordArray } from 'crypto-js';
import _locale from '../config/yup';
import { REGEX_PASSWORD_STRENGTH } from '../config/regex';
import { PWNED_PASSWORD_API } from '../config/api';

/**
 * Validateur qui control que les mots des passe
 * apparaisent pas dans des base de donées piratée
 *
 * @param  {any} this
 * @param  {string} message?
 */
export default function passwordPawned(this: any, message?: string) {
    if (!message) {
        message = _locale.string.passwordPawned;
    }

    return this.test({
        message,
        name: 'passwordPawned',
        exclusive: true,
        test: async function test(value: string) {
            const passwordValid: Boolean = new RegExp(
                REGEX_PASSWORD_STRENGTH
            ).test(value);
            if (passwordValid) {
                try {
                    return await callPasswordPawnedApi(value);
                } catch (e) {
                    return true;
                }
            } else return true;
        },
    });
}
/**
 * Appel l'api pwned password pour vérifié que le mot de passe
 * rensigner par l'utilisateur ne soit pas apparu dans des
 * base de donnée piratée
 *
 * @param  {string} password
 * @returns Promise
 */
async function callPasswordPawnedApi(password: string): Promise<boolean> {
    const passwordHash: WordArray = SHA1(password);
    const passwordToApiAllChar: string = passwordHash.toString();
    const passwordToApiFiveFirstChar: string = passwordToApiAllChar.substring(
        0,
        5
    );

    let body: string = '';

    const res = await fetch(
        `${PWNED_PASSWORD_API}/range/${passwordToApiFiveFirstChar}`
    );
    body = await res.text();

    const bodyStringToArray: Array<string> = body.split('\n');

    if (bodyStringToArray.length === 0) return true;

    let result: number = 0;
    bodyStringToArray.forEach((element) => {
        const arrayElement = element.split(':');
        const hash: string = passwordToApiFiveFirstChar + arrayElement[0];
        if (hash.toLowerCase() === passwordToApiAllChar.toLowerCase())
            result = parseInt(arrayElement[1], 10);
    });

    return result === 0;
}

// 0262dce7f6c79faf77c24b38b6c892c4767871cc
// 0262dff3fb0a01291878c5accd8d876b3f8b1795
