/** @format */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/form/InputField';
import Button from '../components/form/Button';
import Paper from '../components/container/Paper';
import { useLazyQuery } from '@apollo/react-hooks';
import { CONNECTION } from '../request/request.user';

interface LoginValuesInterface {
    email: string;
    password: string;
}

const SignInForm: React.FC = () => {

    const [connection, { loading, error, data }] = useLazyQuery(CONNECTION);

    const initialValues: LoginValuesInterface = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string().required(),
    });

    const loginCallApi = (values: LoginValuesInterface) => {
        connection({variables: {connectionDto: values}});
        console.log(data);
    }

    const displayApiError = (): JSX.Element|null => {
        if (data === undefined) return null
        if (data.connection.status !== 'error') return null

        return (<span className="error">{data.connection.message}</span>)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={loginCallApi}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit} noValidate>
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
                        {displayApiError()}
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
