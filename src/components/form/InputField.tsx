/** @format */

import React, { ChangeEvent, useState, RefObject } from 'react';

interface Props {
    id: string;
    name: string;
    placeholder: string;
    type?: string;
    label?: string;
    value: string;
    onChange: (eventOrPath: string | ChangeEvent<any>) => void;
    onBlur: (eventOrPath: string | ChangeEvent<any>) => void;
    touched?: boolean;
    error?: string;
    isPassword?: boolean;
    ref?: RefObject<HTMLInputElement>;
    paste?: boolean;
}

const InputField: React.ComponentType<Props> = React.forwardRef(
    (props: Props, ref) => {
        const {
            id,
            name,
            label,
            placeholder,
            type,
            value,
            onChange,
            onBlur,
            touched,
            error,
            isPassword,
            paste,
        } = props;

        const [isVisiblePassword, setIsVisiblePassword] = useState(false);

        const handlePreventPaste = (event: ClipboardEvent) => {
            event.preventDefault();
        };

        const inputProps: any = {
            id,
            name,
            type: type
                ? type === 'password' && isVisiblePassword
                    ? 'text'
                    : type
                : 'text',
            placeholder,
            onChange,
            onBlur,
            value,
            ref: ref || null,
            className: 'input-field__input',
        };
        if (paste === false) {
            inputProps.onPaste = handlePreventPaste;
        }

        return (
            <div
                className={
                    touched && error
                        ? 'input-field input-field--error'
                        : touched
                        ? 'input-field input-field--valid'
                        : 'input-field'
                }
            >
                {label ? (
                    <label className="input-field__label" htmlFor={id}>
                        {label}
                    </label>
                ) : null}
                <div className="input-field__input-container">
                    <input {...inputProps} />

                    <div className="input-field__actions">
                        {touched && error ? (
                            <span className="material-icons">close</span>
                        ) : touched ? (
                            <span className="material-icons">check</span>
                        ) : null}
                        {isPassword && isVisiblePassword ? (
                            <span
                                onClick={() =>
                                    setIsVisiblePassword(!isVisiblePassword)
                                }
                                className="material-icons password-visibility-icon"
                            >
                                visibility_off
                            </span>
                        ) : isPassword ? (
                            <span
                                onClick={() =>
                                    setIsVisiblePassword(!isVisiblePassword)
                                }
                                className="material-icons password-visibility-icon"
                            >
                                visibility
                            </span>
                        ) : null}
                    </div>
                </div>

                {touched && error ? (
                    <div className="input-field__error">{error}</div>
                ) : null}
            </div>
        );
    }
);

export default InputField;
