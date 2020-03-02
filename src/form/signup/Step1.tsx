/** @format */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/form/InputField';
import Paper from '../../components/container/Paper';
import Button from '../../components/form/Button';

interface Props {
    onSave: (values: object) => void;
    className: string;
}

const Step1: React.FC<Props> = ({ onSave, className }: Props) => {
    const initialValues = {
        firstname: '',
        lastname: '',
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
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
                                id="firstname"
                                label="Prénom :"
                                name="firstname"
                                type="text"
                                placeholder="Jane"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.firstname}
                                touched={props.touched.firstname}
                                error={props.errors.firstname}
                            />
                            <InputField
                                id="lastname"
                                label="Nom :"
                                name="lastname"
                                type="text"
                                placeholder="Doe"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.lastname}
                                touched={props.touched.lastname}
                                error={props.errors.lastname}
                            />
                        </Paper>

                        <div className="signup__bottom-action reveal-4">
                            <Button text="Suivant" type="submit" />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Step1;
