/** @format */

import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Paper = ({ children, className }: Props) => (
    <div className={className ? `${className} paper` : 'paper'}>{children}</div>
);

export default Paper;
