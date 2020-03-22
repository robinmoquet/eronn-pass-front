/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../../../components/container/NavBar';
import Router from '../../../router/Router';

describe('Navbar test', () => {
    it('sould be content project name', () => {
        const { container } = render(
            <Router>
                <NavBar />
            </Router>
        );
        expect(container.querySelector('.nav-bar__logo')?.innerHTML).toBe(
            'Eronn Pass'
        );
    });

    it('sould be content invert color btn', () => {
        const { container } = render(
            <Router>
                <NavBar />
            </Router>
        );
        expect(
            container.querySelector('.theme-picker .material-icons')?.innerHTML
        ).toBe('invert_colors');
    });
});
