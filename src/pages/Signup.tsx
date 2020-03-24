/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';
import Wrap from '../components/container/Wrap';
import Title from '../components/typo/Title';
import { PROJECT_NAME } from '../config/global';
import { path } from '../router/route.utils';
import Button from '../components/form/Button';
import Step1 from '../form/signup/Step1';
import Step2 from '../form/signup/Step2';
import Step3 from '../form/signup/Step3';
import RequestForm from '../components/form/RequestForm';
import { CREATE_USER } from '../request/request.user';

const Signup = () => {
    interface SignupValueInterface {
        firstname?: string;
        lastname?: string;
        email?: string;
        emailConfirm?: string;
        password?: string;
        passwordConfirm?: string;
    }

    const [currentStep, setCurrentStep] = useState(1);
    const [signupValue, setSignupValue] = useState({});
    const [showForm, setShowForm] = useState(true);
    const [createUser, { data, error, loading }] = useMutation(CREATE_USER);
    const numberSteps = 3;

    const animationDuration = getComputedStyle(document.documentElement)
        .getPropertyValue('--switch-step-animation-duration')
        .replace('ms', '');

    /**
     * Lance le switch de step ou la registration si step = 3
     *
     * @param {object} values
     */
    const handleSaveStep = (values: object): void => {
        if (currentStep <= numberSteps - 1) {
            switchAnimation('next');
        }
        if (currentStep < 3) setCurrentStep(currentStep + 1);
        const newState: SignupValueInterface = { ...signupValue, ...values };
        setSignupValue(newState);

        if (currentStep === 3) {
            startRegistrationApi(newState);
        }
    };

    const handlePrev = (): void => {
        // correctif bug chrome
        // Si on passe du step1 au step2 , puis qu'on fait précendent puis qu'on appuie sur la touche entrée
        // le step1 disparait et on peu decrementer l'affichage des steps ('ex : -1 / 3')
        if (currentStep !== 1) {
            switchAnimation('prev');
            setCurrentStep(currentStep - 1);
        }
    };

    const switchAnimation = (direction: 'prev' | 'next'): void => {
        const refCurrentStep = document.querySelector('.current-step');

        const directionMirror: string = direction === 'prev' ? 'next' : 'prev';
        let nextCurrentStep: any;

        if (direction === 'prev')
            nextCurrentStep = refCurrentStep?.previousElementSibling;
        else nextCurrentStep = refCurrentStep?.nextElementSibling;

        refCurrentStep?.classList.remove('current-step');
        refCurrentStep?.classList.add(`animation-to-${directionMirror}`);
        nextCurrentStep?.classList.remove(`${direction}-step`);
        nextCurrentStep?.classList.add(
            `animation-to-current-from-${direction}`
        );
        setTimeout(() => {
            refCurrentStep?.classList.add(`${directionMirror}-step`);
            refCurrentStep?.classList.remove(`animation-to-${directionMirror}`);
            nextCurrentStep?.classList.add('current-step');
            nextCurrentStep?.classList.remove(
                `animation-to-current-from-${direction}`
            );
        }, parseInt(animationDuration, 10));
    };

    /**
     * Permet d'enregistrer l'utilisateur, et initialise
     * l'affichage pour la reponse
     *
     * @param {SignupValueInterface} signupVal
     */
    const startRegistrationApi = async (signupVal: SignupValueInterface) => {
        createUser({
            variables: {
                userDto: {
                    firstname: signupVal.firstname,
                    lastname: signupVal.lastname,
                    email: signupVal.email,
                    password: signupVal.password,
                },
            },
        });
        setShowForm(false);
    };

    const displayResultCreateUser = (): JSX.Element => {
        if (loading) return <RequestForm loading />;

        if (error)
            return (
                <RequestForm
                    loading={false}
                    error={{ title: "Oups! Une erreur c'est produite" }}
                />
            );

        const res = data?.createUser;
        return (
            <RequestForm
                loading={false}
                success={{
                    title: `Hey ! Bienvenu ${res.fullname}`,
                    message:
                        'Votre compte à bien été créer. Nous vous avons envoyé un email de confirmation, veuillez suivre les instructions dans cette email avant de vous connecter.',
                }}
            />
        );
    };

    return (
        <AnimationIntersectionObserver>
            <div className="signup-page page-wrapper-middle">
                <NavBar />
                <Wrap>
                    <section className="signup reveal page-wrapper-middle__content">
                        {showForm ? (
                            <>
                                <div className="signup__title-container  reveal-1">
                                    <Title
                                        text="Créer un compte"
                                        className="signup__title"
                                        tonic
                                    />
                                    <p className="signup__current-step">
                                        {currentStep} /{numberSteps}
                                    </p>
                                </div>
                                <div className="step-container">
                                    <Step1
                                        onSave={handleSaveStep}
                                        className="step current-step"
                                    />
                                    <Step2
                                        onSave={handleSaveStep}
                                        onPrev={handlePrev}
                                        className="step next-step"
                                    />
                                    <Step3
                                        onSave={handleSaveStep}
                                        onPrev={handlePrev}
                                        className="step next-step"
                                    />
                                </div>

                                <div className="reveal-4">
                                    <p className="signup__already-user">
                                        Vous avez déjà un compte {PROJECT_NAME}{' '}
                                        ?
                                        <Link to={path('login')}>
                                            <Button
                                                text="Se connecter"
                                                variant="stroke"
                                            />
                                        </Link>
                                    </p>
                                </div>
                            </>
                        ) : (
                            displayResultCreateUser()
                        )}
                    </section>
                </Wrap>
                <Footer />
            </div>
        </AnimationIntersectionObserver>
    );
};

export default Signup;
