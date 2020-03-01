import React from 'react';

interface Props {
    text: string
    type?: "button" | "submit" | "reset"
    style?: "primary" | "secondary" | "stroke"
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC<Props> = (props: Props) => {
    const { text, type , style, onClick} = props;

    return (
        <button onClick={onClick} className={style ? `button button--${style}` : "button button--primary"} type={type ? type : 'button'}>{text}</button>
    );
};

export default Button;
