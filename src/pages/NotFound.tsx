import React from 'react';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import Wrap from '../components/container/Wrap';
import Paper from '../components/container/Paper';
import Title from '../components/typo/Title';
import { Link } from 'react-router-dom';
import { path } from '../router/routes';
import Button from '../components/form/Button';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';

const NotFound: React.FC = () => {
    return (
        <AnimationIntersectionObserver>
            <div className="not-found-page">
                <NavBar />
                <Wrap>
                    <div className="not-found reveal">
                        <Title
                            text="Oups 404 !!"
                            tonic={true}
                            className="reveal-1"
                        />
                        <Paper className="reveal-2">
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
                        <p className="not-found__helper reveal-3">
                            Si le problème périste, contacter le{' '}
                            <Link
                                className="link"
                                to={path('technicalSupport')}
                            >
                                support technique
                            </Link>
                        </p>
                    </div>
                </Wrap>
                <Footer />
            </div>
        </AnimationIntersectionObserver>
    );
};

export default NotFound;
