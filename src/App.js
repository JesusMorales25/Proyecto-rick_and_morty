import {useState} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards.jsx';
import {Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home';
import Form from './components/Form/Form';

export default function App () {

  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // data --> {}
      (
        data.name
          ? characters.filter((char) => char.id === data.id).length === 0
          : ""
      )
        ? setCharacters([...characters, data])
        : alert("Personaje ya existe");
    })
    .catch((error) => console.log(error));
 }

 const onClose = (id) => {
  const filtered = characters.filter((char)=>char.id !== Number(id))
  setCharacters(filtered)
}

  return <div className='App' style={{ padding: '10px'}}>
        <Nav onSearch={onSearch}/>
        <Routes>
          <Route exact
            path="/"
            element={<Form />}
          />
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:detailId" element={<Detail/>}/> 
          <Route
            path="/Cards"
            element={<Cards characters={characters} onClose={onClose} />}
        />
      </Routes>
  </div>
  
}