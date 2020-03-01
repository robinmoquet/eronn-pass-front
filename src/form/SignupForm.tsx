import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/form/InputField';
import Button from '../components/form/Button';
import Paper from '../components/container/Paper';

const SignupForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            emailConfirm: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            emailConfirm: Yup.string()
                .email()
                .required(),
            password: Yup.string().required(),
            passwordConfirm: Yup.string().required(),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <Paper className="reveal-3">
                <InputField
                    id="firstname"
                    label="Prénom :"
                    name="firstname"
                    type="text"
                    placeholder="Jane"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    touched={formik.touched.firstname}
                    error={formik.errors.firstname}
                />
                <InputField
                    id="lastname"
                    label="Nom :"
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    touched={formik.touched.lastname}
                    error={formik.errors.lastname}
                />
                <InputField
                    id="email"
                    label="Adresse email :"
                    name="email"
                    type="email"
                    placeholder="john-doe@email.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    error={formik.errors.email}
                />
                <InputField
                    id="emailConfirm"
                    label="Confirmer votre adresse email :"
                    name="emailConfirm"
                    type="email"
                    placeholder="john-doe@email.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.emailConfirm}
                    touched={formik.touched.emailConfirm}
                    error={formik.errors.emailConfirm}
                />
                <InputField
                    id="password"
                    label="Mot de passe :"
                    name="password"
                    type="password"
                    isPassword={true}
                    placeholder="••••••••••••••••••"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                />
                <InputField
                    id="passwordConfirm"
                    label="Confirmer votre mot de passe :"
                    name="passwordConfirm"
                    type="password"
                    isPassword={true}
                    placeholder="••••••••••••••••••"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    touched={formik.touched.passwordConfirm}
                    error={formik.errors.passwordConfirm}
                />
            </Paper>

            <div className="signup__bottom-action reveal-4">
                <Button text="S'inscrire" type="submit" />
            </div>
        </form>
    );
};

export default SignupForm;
