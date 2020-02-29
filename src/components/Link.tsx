import React from 'react';

interface Props {
    text: string;
    href?: string;
    blank?: boolean;
}

const Link: React.FC<Props> = ({ text, href, blank }: Props) => {
    return (
        <a href={href} className="link" target={blank ? '_blank' : ''}>
            {text}
        </a>
    );
};

export default Link;
