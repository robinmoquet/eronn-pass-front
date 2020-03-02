/** @format */

import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Wrap: React.FC<Props> = ({ children }: Props) => (
    <div className="wrapper">{children}</div>
);

export default Wrap;
