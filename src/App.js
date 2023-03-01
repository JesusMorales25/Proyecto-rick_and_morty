import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

const TargetRick = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '42%',
}

function App () {
  return (
    <div className='App' style={{ padding: '10px'}}>
      <div style={TargetRick}>
        <Card key={Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>

      <div>
        <Cards characters={characters}/>
      </div>

      <hr />

      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
