import React from 'react';

interface Props {
  HomeMessage: string
}

const Home: React.FC<Props> = ({ HomeMessage }) => {
    return (
      <div className="home">
        <p>{HomeMessage}</p>
      </div>
    );
};
  
  export default Home;