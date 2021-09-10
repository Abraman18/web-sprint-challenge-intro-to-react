import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [character, setCharacter] = useState([])
const [error, setError] = useState(null);
useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacter(res.data)
    })
    .catch(err => {
      setError(`Please try again later`) 
    })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(item => {
        return <Character data={item} />
      })}
    </div>
  );
}
export default App;