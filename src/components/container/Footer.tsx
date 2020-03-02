/** @format */

import React from 'react';
import Link from '../Link';

const Footer: React.FC = () => (
    <div className="footer wrapper">
        <p>Aucun droit réserver ©</p>
        <p>
            Retrouver le projet sur
            <Link
                text="GitHub"
                href="https://github.com/robinmoquet/eronn-pass-front"
                blank
            />
        </p>
    </div>
);

export default Footer;
