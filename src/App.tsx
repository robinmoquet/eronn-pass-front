import React from 'react';

interface Props {
  helloMessage: string
}

const App: React.FC<Props> = ({ helloMessage }) => {
  return (
    <div className="App">
      <p>{ helloMessage }</p>
    </div>
  );
}

export default App;
