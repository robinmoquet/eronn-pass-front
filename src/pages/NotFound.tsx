import React from 'react';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import Wrap from '../components/container/Wrap';
import Paper from '../components/container/Paper';
import Title from '../components/typo/Title';
import { Link } from 'react-router-dom';
import { path } from '../router/routes';
import Button from '../components/form/Button';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-page">
            <NavBar />
            <Wrap>
                <div className="not-found">
                    <Title text="Oups 404 !!" tonic={true} />
                    <Paper>
                        <div className="not-found__icon">
                            <i className="material-icons">local_dining</i>
                        </div>
                        <p className="not-found__content">
                            <strong>Désolé</strong>, cette page s'est fait
                            manger par un développeur affamé !
                        </p>
                        <div className="not-found__action">
                            <Link to={path('home')}>
                                <Button text="Retour à l'accueil" />
                            </Link>
                        </div>
                    </Paper>
                    <p className="not-found__helper">
                        Si le problème périste, contacter le{' '}
                        <Link className="link" to={path('technicalSupport')}>
                            support technique
                        </Link>
                    </p>
                </div>
            </Wrap>
            <Footer />
        </div>
    );
};

export default NotFound;