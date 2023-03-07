import {useState} from 'react';
import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

function App () {

  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.id) {
             setCharacters([...characters,data]);
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
        <Cards characters={characters}/>
      </div>
    </div>
  )
}

export default App
