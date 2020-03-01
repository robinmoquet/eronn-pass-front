import React from 'react';
import NavBar from '../components/container/NavBar';
import { PROJECT_NAME } from '../config/global';

const Home: React.FC = () => {
    // WARNING Ne pas supprimé
    // Utilisé pour générer le background du titre
    /*
    let res = '';
    let color = 'var(--tonic)';
    let nb = 60;
    for(let i = 1; i < nb; i++) {
        if(i === nb - 1) res += `${i}px ${i}px 0px ${color};`;
        else res += `${i}px ${i}px 1px ${color}, `;
    }
    console.log(res);
    */

    return (
        <div className="home-page">
            <NavBar />

            <h1 className="home__title">{PROJECT_NAME}</h1>
        </div>
    );
};

export default Home;
