import React from 'react';
import { PROJECT_NAME } from '../../config/global';
import { Link } from 'react-router-dom';
import { path } from '../../router/routes';

const NavBar: React.FC = () => {

    const handleClickThemePicker = (event: any) => {
        event.preventDefault();
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className="nav-bar wrapper">
            <div className="nav-bar__content">
                <Link to={path("home")}>
                    <h3 className="nav-bar__logo">{PROJECT_NAME}</h3>
                    <h3 className="nav-bar__logo nav-bar__logo-mobile">E</h3>
                </Link>
            </div>
            <div className="nav-bar__actions">
                <Link to={path('login')} className="link link--secondary">Connexion</Link>
                <Link to={path('signup')} className="link link--secondary">Inscription</Link>
                <a className="theme-picker" onClick={handleClickThemePicker}>
                    <i className="material-icons">
                        invert_colors
                    </i>
                </a>
            </div>
        </div>
    );
};

export default NavBar;
