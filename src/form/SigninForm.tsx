import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/form/InputField';
import Button from '../components/form/Button';
import Paper from '../components/container/Paper';

const SigninForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Adresse mail invalide')
                .required('Champs obligatoire'),
            password: Yup.string().required('Champs obligatoire'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="reveal-2">
                <Paper className="reveal-2">
                    <InputField
                        id="email"
                        label="Adresse mail :"
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
                </Paper>
            </div>

            <div className="login__bottom-action reveal-3">
                <Button text="Connexion" type="submit" />
            </div>
        </form>
    );
};

export default SigninForm;
