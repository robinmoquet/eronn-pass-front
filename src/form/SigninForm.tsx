/** @format */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/form/InputField';
import Button from '../components/form/Button';
import Paper from '../components/container/Paper';

const SignInForm: React.FC = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string().required(),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
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
                            isPassword
                            placeholder="••••••••••••••••••"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            touched={formik.touched.password}
                            error={formik.errors.password}
                        />
                    </Paper>

                    <div className="login__bottom-action reveal-3">
                        <Button text="Connexion" type="submit" />
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default SignInForm;
