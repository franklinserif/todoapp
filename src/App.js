import React, {useState} from 'react';

/**
 * React Component
 * @return {*}
 */
function App() {
  const [name, setName] = useState(0);

  return (
    <div className="App">
      <h1>Hola React</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default App;
