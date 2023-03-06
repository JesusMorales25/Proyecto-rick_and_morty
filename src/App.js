import {useState} from 'react';
import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

function App () {

  const [characters, setCharacters] = useState({
    characters:[],
  })

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.id) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  return (
    <div className='App' style={{ padding: '10px'}}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards characters={characters.characters}/>
      </div>
    </div>
  )
}

export default App
