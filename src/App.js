import {useState} from 'react';
import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import {Routes, Route} from 'react-router-dom'

function App () {

  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.id) {
             setCharacters([...characters,data]);
          } else {
             window.alert('Personaje no Encontrado');
          }
       });
 }

 const onClose = (id) => {
  const filtered = characters.filter((char)=>char.id !== Number(id))
  setCharacters(filtered)
}

  return (
    <div className='App' style={{ padding: '10px'}}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App