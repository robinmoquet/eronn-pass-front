import React from 'react';

interface Props {
    text: string
    type?: "button" | "submit" | "reset"
    stroke?: boolean
}

const Button: React.FC<Props> = ({ text, type , stroke}: Props) => {
    return (
        <button className={stroke ? "button button--stroke" : "button"} type={type ? type : 'button'}>{text}</button>
    );
};

export default Button;
