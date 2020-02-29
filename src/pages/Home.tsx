import React from 'react';
import NavBar from '../components/container/NavBar';

interface Props {
    HomeMessage: string;
}

const Home: React.FC<Props> = ({ HomeMessage }) => {
    return (
        <div className="home">
            <NavBar />
            <p>{HomeMessage}</p>
        </div>
    );
};

export default Home;
