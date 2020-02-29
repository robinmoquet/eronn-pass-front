import React, { Fragment } from 'react';
import SigninForm from '../form/SigninForm';
import { Link } from 'react-router-dom';
import Title from '../components/typo/Title';
import Wrap from '../components/container/Wrap';
import Button from '../components/form/Button';
import { path } from '../router/routes';
import Footer from '../components/container/Footer';
import { PROJECT_NAME } from '../config/global';
import NavBar from '../components/container/NavBar';

const Login: React.FC = () => {
    return (
        <Fragment>
            <div className="login-page">
                <NavBar />
                <Wrap>
                    <section className="login">
                        <Title
                            text="Se connecter"
                            className="login__title"
                            tonic={true}
                        />
                        <SigninForm />

                        <p className="login__new-user">
                            Nouveau sur {PROJECT_NAME} ?{' '}
                            <Link to={path('signup')}>
                                <Button text="Créer un compte" stroke={true} />
                            </Link>
                        </p>
                    </section>
                </Wrap>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Login;
