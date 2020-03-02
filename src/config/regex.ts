/** @format */

// Définit la force du password minimun
// 1 lettre | 1 lettre majuscule | 1 nombre | 1 caractère spécial
// minimun 8 | maximun 32
// eslint-disable-next-line no-useless-escape
export const REGEX_PASSWORD_STRENGTH = /^(?=.*[A-Z])(?=.*["è('àéç&=)"²@!:;,*ù$&€\ .])(?=.*[0-9])(?=.*[a-z]).{8,42}$/g;

// Définit le format des params d'url
export const REGEX_PARAM_ROUTER = /{([a-zA-Z-]+)}/g;
