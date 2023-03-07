import SearchBar from './SearchBar';
import styled from 'styled-components'


const StyleNav = styled.nav`
    display: flex;
    background-color: aqua;
    justify-content: right;
    
`
export default function Nav(props) {
    return (
        <StyleNav>
            <SearchBar onSearch={() => props.onSearch()}/>
        </StyleNav>
       
    );
 }