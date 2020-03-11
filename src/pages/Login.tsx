/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import SigninForm from '../form/SigninForm';
import Title from '../components/typo/Title';
import Wrap from '../components/container/Wrap';
import Button from '../components/form/Button';
import { path } from '../router/route.utils';
import Footer from '../components/container/Footer';
import { PROJECT_NAME } from '../config/global';
import NavBar from '../components/container/NavBar';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';

const Login: React.FC = () => (
    <AnimationIntersectionObserver>
        <div className="login-page">
            <NavBar />
            <Wrap>
                <section className="login reveal">
                    <Title
                        text="Se connecter"
                        className="login__title reveal-1"
                        tonic
                    />
                    <SigninForm />

                    <div className="reveal-4">
                        <p className="login__new-user">
                            Nouveau sur {PROJECT_NAME} ?
                            <Link to={path('signup')}>
                                <Button
                                    text="Créer un compte"
                                    variant="stroke"
                                />
                            </Link>
                        </p>
                    </div>
                </section>
            </Wrap>
            <Footer />
        </div>
    </AnimationIntersectionObserver>
);

export default Login;
