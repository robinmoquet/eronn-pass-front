import React from 'react';
import SigninForm  from '../form/SigninForm';
import { Link } from 'react-router-dom';
import { path } from '../router/routes';

const Login: React.FC = () => {
    return (
      <div className="login">
        <div className="__login-form">
          <div className="__content">
            <Link to={path('signup')} className="__signup-link">
              <span className="__link-text">
                Nouveau sur Eronn pass ?
              </span>
              <span className="__link-btn">
                Démarrer
              </span>
            </Link>
            <h1 className="__text">Se connecter sur Eronn pass</h1>
            <div className="__form">
              <SigninForm />
            </div>
          </div>
        </div>
        <div className="__information">
          <div className="__content">
            <p className="__logo">Eronn pass Logo</p>
            <div className="__description">
              <h1 className="__first-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error voluptate, molestias perferendis rem illo, a quo minus repellat sint tempore corporis sed similique incidunt odit laudantium maxime sequi fuga!</h1>
              <p className="__second-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores, recusandae voluptates at nulla corrupti facere ipsam eligendi, odio, officia nam. Neque veritatis, ullam quas doloribus in voluptatem veniam aspernatur.</p>
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default Login;
  