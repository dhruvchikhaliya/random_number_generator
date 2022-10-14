import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(Math.floor(Math.random() * 10));

  const startCounter = async () => {
    setNum(Math.floor(Math.random() * 10));
  }
  return (
    <div className="App">
      <div className="show" onClick={startCounter}>
      </div>
      <div className="random_number" onClick={startCounter}>
        {num}
      </div>
    </div>
  );
}

export default App;
