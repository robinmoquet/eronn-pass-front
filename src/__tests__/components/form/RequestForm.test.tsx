/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import RequestForm from '../../../components/form/RequestForm';

describe('test RequestForm component', () => {
    it('sould contain loading', async () => {
        const { queryByTestId, getByTestId, getByText } = render(
            <RequestForm loading />
        );
        expect(getByTestId('loader')).toBeInTheDocument();
        expect(queryByTestId('success-icon')).toBe(null);
        expect(queryByTestId('error-icon')).toBe(null);
        expect(getByText('Chargement ...')).toBeInTheDocument();
    });

    it('sould display error', () => {
        const error = {
            title: 'Test error',
            message: 'Error message',
        };
        const { queryByTestId, getByTestId, getByText } = render(
            <RequestForm loading={false} error={error} />
        );
        expect(getByTestId('error-icon')).toBeInTheDocument();
        expect(queryByTestId('success-icon')).toBe(null);
        expect(queryByTestId('loader')).toBe(null);
        expect(getByText(error.title)).toBeInTheDocument();
        expect(getByText(error.message)).toBeInTheDocument();
    });

    it('sould display success', () => {
        const success = {
            title: 'Test success',
            message: 'success message',
        };
        const { queryByTestId, getByTestId, getByText } = render(
            <RequestForm loading={false} success={success} />
        );
        expect(getByTestId('success-icon')).toBeInTheDocument();
        expect(queryByTestId('error-icon')).toBe(null);
        expect(queryByTestId('loader')).toBe(null);
        expect(getByText(success.title)).toBeInTheDocument();
        expect(getByText(success.message)).toBeInTheDocument();
    });

    it('sould display content', () => {
        const success = {
            title: 'Test success',
            message: 'success message',
        };
        const { getByText } = render(
            <RequestForm
                loading={false}
                success={success}
                content={<p>test content</p>}
            />
        );
        expect(getByText('test content')).toBeInTheDocument();
    });

    it('sould display content with loading', () => {
        const { getByText } = render(
            <RequestForm loading content={<p>test content</p>} />
        );
        expect(getByText('test content')).toBeInTheDocument();
    });
});
