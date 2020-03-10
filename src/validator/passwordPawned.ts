/** @format */

import _locale from '../config/yup';
import { REGEX_PASSWORD_STRENGTH } from '../config/regex';
var CryptoJS = require("crypto-js");


export default function passwordPawned(this: any, message?: string) {
    if (!message) {
        message = _locale.string.passwordPawned;
    }

    return this.test({
        message,
        name: 'passwordPawned',
        exclusive: true,
        test: async function test(value: string) {
            let passwordValid: Boolean = new RegExp(REGEX_PASSWORD_STRENGTH).test(value);
            if(passwordValid) {
                if (value === undefined) return false;
                return await callPasswordPawnedApi(value);
            } else return true;
        },
    });
}

async function callPasswordPawnedApi(password: string) {

    let passwordHash: string = CryptoJS.SHA1(password);
    let passwordToApiAllChar: string = CryptoJS.enc.Hex.stringify(passwordHash);
    let passwordToApiFiveFirstChar: string = passwordToApiAllChar.substring(0 , 5);

    let body: string = '';

    try {
        const res = await fetch('https://api.pwnedpasswords.com/range/' + passwordToApiFiveFirstChar);
        body = await res.text();

        let bodyStringToArray: Array <any> = body.split("\n");
        
        if(bodyStringToArray.length === 0 ) return true;
        else {
            let result: number = 0;
            let passwordToApiFiveFirstCharToUpper: string = passwordToApiFiveFirstChar.toUpperCase();
            let passwordToApiAllCharToUpper: string = passwordToApiAllChar.toUpperCase();

            bodyStringToArray.forEach(element => {
                let getHash: string = element.split(':')[0];
                let hashComplete: string = passwordToApiFiveFirstCharToUpper + getHash;
                if(hashComplete === passwordToApiAllCharToUpper) result = parseInt(element.split(':')[1])
            });

            return result === 0 ? true : false;
        }
    } catch(e) {
        return true;
    }
};