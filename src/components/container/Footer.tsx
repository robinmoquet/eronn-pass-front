/** @format */

import React from 'react';
import Link from '../others/Link';
import { PROJECT_LINK_GITHUB } from '../../config/global';

const Footer: React.FC = () => (
    <div className="footer wrapper">
        <p>Aucun droit réserver ©</p>
        <p>
            <span>Retrouver le projet sur </span>
            <Link text="GitHub" href={PROJECT_LINK_GITHUB} blank />
        </p>
    </div>
);

export default Footer;
