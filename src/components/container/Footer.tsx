import React from 'react';
import Link from '../Link';

const Footer: React.FC = () => {
    return (
        <div className="footer wrapper">
            <p>Aucun droit réserver ©</p>
            <p>Retrouver le projet sur <Link text="GitHub" href="https://github.com/robinmoquet/eronn-pass-front" blank={true}/></p>
        </div>
    );
};

export default Footer;
