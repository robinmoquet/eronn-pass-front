/** @format */
import * as yup from 'yup';
import passwordPawned from '../../validator/passwordPawned';

describe('Validation password strength', () => {
    yup.addMethod(yup.string, 'passwordPawned', passwordPawned);

    const schema = yup.object().shape({
        // @ts-ignore
        pass: yup.string().passwordPawned(),
    });

    it('should not be pawned', async () => {
        const pass = 'JHKkjhb_èè-(564651';
        const res = await schema.isValid({pass});
        expect(res).toBe(true);
    })

    it('should be pawned but true because not call api', async () => {
        const pass = 'password';
        const res = await schema.isValid({pass});
        expect(res).toBe(true);
    })

    it('should be pawned', async () => {
        const pass = 'Password.1';
        const res = await schema.isValid({pass});
        expect(res).toBe(false);
    })

    it('should be pawned again', async () => {
        const pass = 'Pa55word.';
        const res = await schema.isValid({pass});
        expect(res).toBe(false);
    })
    
});
