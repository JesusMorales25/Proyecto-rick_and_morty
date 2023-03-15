import {useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home';
import Form from './components/Form/Form';

export default function App () {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const userName = "morsar25@gmail.com";
  const password = "Jesus123";

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

const login = (userData) => {
  // {userName : "fmontoya@soyhenry.com", password: "feli123"}
  if(userData.userName === userName &&
    userData.password === password) {
      setAccess(true);
      navigate("/home")
    }
};

const logOut = () => {
  access && setAccess(false) 
  navigate("/")
}


useEffect(()=>{
  !access && navigate("/")
},[access, navigate])

  return <div className='App' style={{ padding: '10px'}}>
        {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
        <Routes>
          <Route
            path="/"
            element={<Form login={login}/>}
          />
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:detailId" element={<Detail/>}/> 
          <Route
            path="/Cards"
            element={<Cards characters={characters} onClose={onClose} />}
        />
      </Routes>
  </div>
  
}