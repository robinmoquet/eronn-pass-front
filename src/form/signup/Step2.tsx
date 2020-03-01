import React from 'react';
import { Formik } from 'formik';
import InputField from '../../components/form/InputField';
import Paper from '../../components/container/Paper';
import * as Yup from 'yup';
import Button from '../../components/form/Button';

interface Props {
    onSave: (values: object) => void,
    onPrev: () => void,
    className: string
}

const Step2: React.FC<Props> = ({ onSave, className, onPrev }: Props) => {

    const initialValues = {
        email: '',
        emailConfirm: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email()
            .required(),
        emailConfirm: Yup.string()
            .email()
            .required(),
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
                                id="email"
                                label="Adresse email :"
                                name="email"
                                type="email"
                                placeholder="john-doe@email.com"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                touched={props.touched.email}
                                error={props.errors.email}
                            />
                            <InputField
                                id="emailConfirm"
                                label="Confirmer votre adresse email :"
                                name="emailConfirm"
                                type="email"
                                placeholder="john-doe@email.com"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.emailConfirm}
                                touched={props.touched.emailConfirm}
                                error={props.errors.emailConfirm}
                            />
                        </Paper>

                        <div className="signup__bottom-action reveal-4">
                            <Button text="Précèdent" type="button" onClick={onPrev} style="secondary" />
                            <Button text="Suivant" type="submit" />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Step2;
