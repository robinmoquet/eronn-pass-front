import React from 'react';

interface Props {
  helloMessage: string
}

const App: React.FC<Props> = ({ helloMessage }) => {
  return (
    <div className="App">
      <h1>test</h1>
      <p>{ helloMessage }</p>
      <ul>
        <li>test</li>
      </ul>
      <a href="">ble</a>
    </div>
  );
}

export default App;
