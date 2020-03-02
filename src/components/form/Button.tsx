/** @format */

import React from 'react';

interface Props {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'stroke';
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

const Button: React.FC<Props> = (props: Props) => {
    const { text, type, variant, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={
                variant ? `button button--${variant}` : 'button button--primary'
            }
            type={type || 'button'}
        >
            {text}
        </button>
    );
};

export default Button;
