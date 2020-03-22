/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../components/container/Footer';
import { PROJECT_LINK_GITHUB } from '../../../config/global';

describe('Footer test', () => {
    it('sould content github link', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('GitHub').getAttribute('href')).toBe(
            PROJECT_LINK_GITHUB
        );
    });
});
