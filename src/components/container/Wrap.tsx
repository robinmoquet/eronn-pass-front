import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const Wrap: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
};

export default Wrap;
