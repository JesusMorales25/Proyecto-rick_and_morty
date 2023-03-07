import SearchBar from './SearchBar';
import styled from 'styled-components'


const StyleNav = styled.nav`
    display: flex;
    background-color: aqua;
    justify-content: right;
    
`
export default function Nav(props) {
    //console.log(props) // {onSearch : fn()}
    return (
      <StyleNav>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </StyleNav>
    );
  }
  