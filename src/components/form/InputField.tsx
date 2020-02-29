import React, { ChangeEvent } from 'react';

interface Props {
    id: string
    name: string
    placeholder: string
    type?: string
    label?: string
    value: string
    onChange: (eventOrPath: string | ChangeEvent<any>) => void
    onBlur: (eventOrPath: string | ChangeEvent<any>) => void
    touched?: boolean
    error?: string
}

const InputField: React.FC<Props> = (props: Props) => {

    const { id, name, label, placeholder, type, value, onChange, onBlur, touched, error } = props;

    return (
        <div className={touched && error ? "input-field input-field--error" : ( touched ? "input-field input-field--valid" : "input-field")}>
            {label ? (
                <label className="input-field__label" htmlFor={id}>{label}</label>
            ) : null}
            <input
                id={id}
                name={name}
                type={type ? type : 'text'}
                placeholder={placeholder ? placeholder : ''}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="input-field__input"/>

            {touched && error ? (
                <div className="input-field__error">{error}</div>
            ) : null}
        </div>
    );
};

export default InputField;
