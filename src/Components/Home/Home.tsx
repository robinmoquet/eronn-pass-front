import React from 'react';

interface Props {
  HomeMessage: string
}

const Home: React.FC<Props> = ({ HomeMessage }) => {
    return (
      <div className="Home">
        <p>{HomeMessage}</p>
      </div>
    );
};
  
  export default Home;