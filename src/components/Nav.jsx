import SearchBar from './SearchBar';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';



const StyleNav = styled.nav`
    display: flex;
    background-color: aqua;
    justify-content: right;
    
`
export default function Nav(props) {
    //console.log(props) // {onSearch : fn()}
    return (
        <StyleNav>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/cards"}>Cards</NavLink></li>
            </ul>         
          <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
        </StyleNav>
    );
  }
  