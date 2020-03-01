import React from 'react';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';
import Wrap from '../components/container/Wrap';
import Title from '../components/typo/Title';
import { PROJECT_NAME } from '../config/global';
import { Link } from 'react-router-dom';
import { path } from '../router/routes';
import Button from '../components/form/Button';
import SignupForm from '../form/SignupForm';

const Signup = () => {
    return (
        <AnimationIntersectionObserver>
            <div className="signup-page">
                <NavBar />
                <Wrap>
                    <section className="signup reveal">
                        <div className="reveal-1">
                            <p className="signup__already-user">
                                Vous avez déjà un compte {PROJECT_NAME} ?{' '}
                                <Link to={path('login')}>
                                    <Button text="Se connecter" stroke={true} />
                                </Link>
                            </p>
                        </div>

                        <Title
                            text="Créer un compte"
                            className="signup__title reveal-2"
                            tonic={true}
                        />
                        <SignupForm />
                    </section>
                </Wrap>
                <Footer />
            </div>
        </AnimationIntersectionObserver>
    );
};

export default Signup;
