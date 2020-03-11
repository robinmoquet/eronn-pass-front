import React from 'react';
import { render } from '@testing-library/react';
import Link from '../../components/Link';

describe('Link component test', () => {
    
    it('sould be content text', () => {
        const { getByText } = render(<Link text="good link" />)
        expect(getByText('good link')).toBeInTheDocument();
    });

    it('sould have attr href', () => {
        const { getByText } = render(<Link text="good link" href="/test/href" />);
        expect(getByText('good link')).toHaveAttribute('href');
    });

    it('sould content href props', () => {
        const { getByText } = render(<Link text="good link" href="/test/href" />);
        expect(getByText('good link').getAttribute('href')).toBe('/test/href');
    });

    it('sould content traget blank', () => {
        const { getByText } = render(<Link text="good link" href="/test/href" blank />);
        expect(getByText('good link').getAttribute('target')).toBe('_blank');
    });

})