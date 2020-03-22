/** @format */

import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import AnimationIntersectionObserver from '../animations/AnimationIntersectionObserver';
import NavBar from '../components/container/NavBar';
import Footer from '../components/container/Footer';
import Wrap from '../components/container/Wrap';
import RequestForm from '../components/form/RequestForm';
import { CONFIRM_EMAIL } from '../request/request.user';
import Button from '../components/form/Button';
import { path } from '../router/route.utils';

interface Props {
    match: { params: { keysecure: string } };
}

const ConfirmEmail: React.FC<Props> = (props: Props) => {
    const [confirmEmail, { data, error, loading }] = useMutation(CONFIRM_EMAIL);
    let first = true;

    useEffect(() => {
        if (first) {
            first = false;
            const key = props.match.params.keysecure;
            confirmEmail({ variables: { key } });
        }
    }, [first]);

    const displayResultConfirmEmail = (): JSX.Element => {
        if (loading) return <RequestForm loading />;
        if (error)
            return (
                <RequestForm
                    loading={false}
                    error={{ title: "Oups! Une erreur c'est produite" }}
                />
            );

        const res = data?.confirmationEmail;
        if (res) {
            if (res.status === 'error') {
                return (
                    <RequestForm
                        loading={false}
                        error={{
                            title: "Oups! Une erreur c'est produite",
                            message:
                                'Vous avez peu être déjà validé votre email, dans ce cas essayez de vous connecté.',
                        }}
                        content={
                            <Link to={path('login')}>
                                <Button text="Se connecter" />
                            </Link>
                        }
                    />
                );
            }
            return (
                <RequestForm
                    loading={false}
                    success={{
                        title: `Votre email à bien été confirmé`,
                        message: 'Vous pouvez des à présent vous connecter.',
                    }}
                    content={
                        <Link to={path('login')}>
                            <Button text="Se connecter" />
                        </Link>
                    }
                />
            );
        }

        return <RequestForm loading />;
    };

    return (
        <AnimationIntersectionObserver>
            <div className="confirm-email-page page-wrapper-middle">
                <NavBar />
                <Wrap>
                    <div className="page-wrapper-middle__content">
                        {displayResultConfirmEmail()}
                    </div>
                </Wrap>
                <Footer />
            </div>
        </AnimationIntersectionObserver>
    );
};

export default ConfirmEmail;
