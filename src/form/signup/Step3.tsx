/** @format */

import React, { createRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/form/InputField';
import Paper from '../../components/container/Paper';
import Button from '../../components/form/Button';

interface Props {
    onSave: (values: object) => void;
    onPrev: () => void;
    className: string;
}

const Step3: React.FC<Props> = ({ onSave, className, onPrev }: Props) => {
    const refInputPass = createRef<HTMLInputElement>();

    const initialValues = {
        password: '',
        passwordConfirm: '',
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .required()
            // @ts-ignore
            .password(),
        passwordConfirm: Yup.string()
            .required()
            // @ts-ignore
            .equalTo(refInputPass),
    });

    return (
        <div className={className}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSave(values);
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit} noValidate>
                        <Paper className="reveal-2">
                            <InputField
                                id="password"
                                label="Mot de passe :"
                                name="password"
                                type="password"
                                isPassword
                                placeholder="••••••••••••••••••"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                touched={props.touched.password}
                                error={props.errors.password}
                                ref={refInputPass}
                                paste={false}
                            />
                            <InputField
                                id="passwordConfirm"
                                label="Confirmer votre mot de passe :"
                                name="passwordConfirm"
                                type="password"
                                isPassword
                                placeholder="••••••••••••••••••"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.passwordConfirm}
                                touched={props.touched.passwordConfirm}
                                error={props.errors.passwordConfirm}
                                paste={false}
                            />
                        </Paper>

                        <div className="signup__bottom-action reveal-4">
                            <Button
                                text="Précèdent"
                                type="button"
                                onClick={onPrev}
                                variant="secondary"
                            />
                            <Button text="S'inscrire" type="submit" />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Step3;
