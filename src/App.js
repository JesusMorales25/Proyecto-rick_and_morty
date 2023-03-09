import {useState} from 'react';
import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail'

export default function App () {

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

  return <div>
     <Nav onSearch={onSearch}/>
    <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/detail:detailId' element={<Detail />}/>


    </Routes>
    <div className='App' style={{ padding: '10px'}}>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  </div>
  
}