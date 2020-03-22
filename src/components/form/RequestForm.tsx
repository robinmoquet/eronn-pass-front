/** @format */

import React from 'react';
import Paper from '../container/Paper';
import Loader from '../others/Loader';

interface ErrorInterface {
    title: string;
    message?: string;
}

interface SuccessInterface {
    title: string;
    message?: string;
}

interface Props {
    loading: boolean;
    error?: ErrorInterface;
    success?: SuccessInterface;
    content?: JSX.Element;
}

const RequestForm: React.FC<Props> = (props: Props) => {
    const { loading, error, success, content } = props;

    const iconHeader = () => {
        if (loading) return <Loader />;
        if (error !== undefined)
            return <span className="material-icons error">close</span>;
        return <span className="material-icons success">check</span>;
    };

    const titleHeader = (): string => {
        if (loading) return 'Chargement ...';
        if (error !== undefined) return error.title;
        return success ? success.title : '';
    };

    const getMessage = (): JSX.Element | null => {
        if (loading) return null;
        if (error !== undefined && error.message !== undefined)
            return (
                <p data-testid="error-icon" className="request-form__message">
                    {error.message}
                </p>
            );
        if (success !== undefined && success.message !== undefined)
            return (
                <p data-testid="success-icon" className="request-form__message">
                    {success.message}
                </p>
            );
        return null;
    };

    const getContent = (): JSX.Element | null => {
        if (content !== undefined) return content;
        return null;
    };

    return (
        <Paper>
            <div className="request-form">
                <div className="request-form__header">
                    <div className="request-form__icon">{iconHeader()}</div>
                    <p className="request-form__title">{titleHeader()}</p>
                </div>
                <div className="request-form__content">
                    {getMessage()}
                    {getContent()}
                </div>
            </div>
        </Paper>
    );
};

export default RequestForm;
