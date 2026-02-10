import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/jokes')
  //     .then((response) => {
  //       setJokes(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

useEffect(() => {
  const fetchJokes = async () => {
    try {
      const res = await axios.get('/api/jokes');
      setJokes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchJokes();
}, []);
  return (
    <div>
      <h1>Hello Chai aur Code!</h1>
      <h2>Jokes Length: {jokes.length}</h2>

      {jokes.map((joke, idx) => (
        <div key={idx}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
