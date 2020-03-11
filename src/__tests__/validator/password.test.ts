import password from "../../validator/password";
import * as yup from "yup";

describe('Validation password strength', () => {

    yup.addMethod(yup.string, 'password', password);
    const schema = yup.object().shape({
        // @ts-ignore
        password: yup.string().password()
    });

    it('sould be strength', async () => {
        const passwordValue = 'Password.1';
        const res = await schema.isValid({password: passwordValue});
        expect(res).toBe(true);
    })

    it('sould not be strength, with alpha', async () => {
        const passwordValue = 'password';
        const res = await schema.isValid({password: passwordValue});
        expect(res).toBe(false);
    })

    it('sould not be strength, with alpha num', async () => {
        const passwordValue = 'Password1';
        const res = await schema.isValid({password: passwordValue});
        expect(res).toBe(false);
    })

    it('sould not be strength, with alpha long', async () => {
        const passwordValue = 'Password1bdfbdfb';
        const res = await schema.isValid({password: passwordValue});
        expect(res).toBe(false);
    })

    it('sould not be strength, with alpha special char', async () => {
        const passwordValue = 'Password"éàbdfbdfb';
        const res = await schema.isValid({password: passwordValue});
        expect(res).toBe(false);
    })

})