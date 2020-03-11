/** @format */
import * as yup from 'yup';
import { RefObject } from 'react';
import equalTo from '../../validator/equalTo';

describe('Validation password strength', () => {
    yup.addMethod(yup.string, 'equalTo', equalTo);

    const input = (document.createElement('input'));
    input.value = 'john-doe';

    const ref: RefObject<HTMLInputElement> = {
        current: input
    };

    const schema = yup.object().shape({
        // @ts-ignore
        val: yup.string().equalTo(ref),
    });

    it('sould be equal', async () => {
        const val = 'john-doe';
        const res = await schema.isValid({ val });
        expect(res).toBe(true);
    });

    it('sould not be equal, with value', async () => {
        const val = 'toto';
        const res = await schema.isValid({ val });
        expect(res).toBe(false);
    });

    it('sould not be equal, less value', async () => {
        const val = '';
        const res = await schema.isValid({ val });
        expect(res).toBe(false);
    });

    it('sould not be equal, with undefined', async () => {
        const val = undefined;
        const res = await schema.isValid({ val });
        expect(res).toBe(false);
    });

    
});
