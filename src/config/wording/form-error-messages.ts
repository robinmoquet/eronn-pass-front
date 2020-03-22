/** @format */

export const formErrorMessage = {
    required: 'Ce champs est obligatoire',
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Ce champs doit comporter au moins ${min} caractères',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'Ce champs doit comporter moins de ${max} caractères',
    email: 'Adresse email invalide',
    equalTo: 'Les valeurs ne sont pas identiques',
    password:
        "Le mot de passe n'est pas assez fort. (Il doit contenir au moins 8 caractères, 1 majuscule, 1 caratère spécial et 1 chiffre)",
    passwordPawned:
        'Oh no 😥 Il semblerait que votre mot de passe soit apparu dans une base de données piratée, vous devriez changer !',
};
