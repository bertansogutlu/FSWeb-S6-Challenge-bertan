import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Karakter from './karakter';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [karakterler, setKarakterler] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
  .then(function (response) {
    setKarakterler(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakter karakterler={karakterler}/>
    </div>
  );
}

export default App;
