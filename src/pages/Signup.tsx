import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';
import Wrap from '../components/container/Wrap';
import Title from '../components/typo/Title';
import { PROJECT_NAME } from '../config/global';
import { path } from '../router/routes';
import Button from '../components/form/Button';
import Step1 from '../form/signup/Step1';
import Step2 from '../form/signup/Step2';
import Step3 from '../form/signup/Step3';

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [signupValue, setSignupValue] = useState({});
    const numberSteps = 3;

    const animationDuration = getComputedStyle(document.documentElement)
        .getPropertyValue('--switch-step-animation-duration')
        .replace('ms', '');

    const handleSaveStep = (values: object) => {
        if (currentStep <= numberSteps - 1) {
            switchAnimation('next');
        }
        if (currentStep < 3) setCurrentStep(currentStep + 1);
        setSignupValue({ ...signupValue, ...values });
        // console.log(signupValue);
    };

    const handlePrev = () => {
        switchAnimation('prev');
        setCurrentStep(currentStep - 1);
    };

    const switchAnimation = (direction: 'prev' | 'next') => {
        const refCurrentStep = document.querySelector('.current-step');
        if (direction === 'prev') {
            refCurrentStep?.classList.remove('current-step');
            refCurrentStep?.classList.add('animation-to-next');
            const nextCurrentStep = refCurrentStep?.previousElementSibling;
            nextCurrentStep?.classList.remove('prev-step');
            nextCurrentStep?.classList.add('animation-to-current-from-prev');
            setTimeout(() => {
                refCurrentStep?.classList.add('next-step');
                refCurrentStep?.classList.remove('animation-to-next');
                nextCurrentStep?.classList.add('current-step');
                nextCurrentStep?.classList.remove(
                    'animation-to-current-from-prev'
                );
            }, parseInt(animationDuration, 10));
        } else {
            refCurrentStep?.classList.remove('current-step');
            refCurrentStep?.classList.add('animation-to-prev');
            const nextCurrentStep = refCurrentStep?.nextElementSibling;
            nextCurrentStep?.classList.remove('next-step');
            nextCurrentStep?.classList.add('animation-to-current-from-next');
            setTimeout(() => {
                refCurrentStep?.classList.add('prev-step');
                refCurrentStep?.classList.remove('animation-to-prev');
                nextCurrentStep?.classList.add('current-step');
                nextCurrentStep?.classList.remove(
                    'animation-to-current-from-next'
                );
            }, parseInt(animationDuration, 10));
        }
    };

    return (
        <AnimationIntersectionObserver>
            <div className="signup-page">
                <NavBar />
                <Wrap>
                    <section className="signup reveal">
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
                                Vous avez déjà un compte {PROJECT_NAME} ?
                                <Link to={path('login')}>
                                    <Button
                                        text="Se connecter"
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
};

export default Signup;
