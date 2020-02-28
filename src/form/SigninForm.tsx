import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SigninForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Adresse mail invalide !')
        .required('* Champs obligatoire !'),
      password: Yup.string()
        .required('* Champs obligatoire'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="email">Adresse mail :</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="__error-message">{formik.errors.email}</div>
            ) : null}
        </div>
        <div>
            <label htmlFor="password">Mot de passe :</label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="mot de passe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="__error-message">{formik.errors.password}</div>
            ) : null}
        </div>
        <button type="submit">Submit</button>
    </form>
  );
};

export default SigninForm;