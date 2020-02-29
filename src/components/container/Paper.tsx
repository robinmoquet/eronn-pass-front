import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Paper = ({ children }: Props) => {
    return <div className="paper">{children}</div>;
};

export default Paper;
