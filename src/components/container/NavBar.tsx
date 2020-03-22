/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECT_NAME } from '../../config/global';
import { path } from '../../router/route.utils';

const NavBar: React.FC = () => {
    const handleClickThemePicker = (event: any) => {
        event.preventDefault();
        const { body } = document;
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('prac-mode');
        } else {
            body.classList.remove('prac-mode');
            body.classList.add('light-mode');
        }
    };

    return (
        <div className="nav-bar wrapper">
            <div className="nav-bar__content">
                <Link to={path('home')}>
                    <h3 className="nav-bar__logo">{PROJECT_NAME}</h3>
                    <h3 className="nav-bar__logo nav-bar__logo-mobile">E</h3>
                </Link>
            </div>
            <div className="nav-bar__actions">
                <Link to={path('login')} className="link link--secondary">
                    Connexion
                </Link>
                <Link to={path('signup')} className="link link--secondary">
                    Inscription
                </Link>
                <a
                    href="/theme"
                    className="theme-picker"
                    onClick={handleClickThemePicker}
                >
                    <i className="material-icons">invert_colors</i>
                </a>
            </div>
        </div>
    );
};

export default NavBar;
