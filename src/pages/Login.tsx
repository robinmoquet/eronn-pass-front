import React from 'react';

const Login: React.FC = () => {
    return (
      <div className="login">
        <div className="__information">
          <p className="__logo">Eronn pass Logo</p>
          <div className="__content">
            <div className="__description">
              <h1 className="__first-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error voluptate, molestias perferendis rem illo, a quo minus repellat sint tempore corporis sed similique incidunt odit laudantium maxime sequi fuga!</h1>
              <p className="__second-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores, recusandae voluptates at nulla corrupti facere ipsam eligendi, odio, officia nam. Neque veritatis, ullam quas doloribus in voluptatem veniam aspernatur.</p>
            </div>
          </div>
        </div>
        <div className="__login-form">
          <a href="/signup" className="__signup-link">
            <span className="__link-text">
              Nouveau sur Eronn pass ?
            </span>
            <span className="__link-btn">
              Démarrer
            </span>
          </a>
          <div className="__content">
            <h1 className="__text">Se connecter sur Eronn pass</h1>
            <div className="__form">
              <div>
                <label htmlFor="email">Email : </label>
                <input id="email" placeholder="email" type="text"/>
              </div>
              <div>
                <label htmlFor="password">Mot de passe :</label>
                <input id="password" placeholder="mot de passe" type="password"/>
              </div>
              <button type="submit">Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default Login;
  