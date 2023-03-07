import styled from 'styled-components'
import {useState} from 'react'

const SearchBtn = styled.button`
   background: #F6B352;
   font-size: 16px;
   color: white;
   padding: 15px 25px;
   margin: 20px 0;
   border-radius: 5px;
   transition: all 200ms ease-in-out;
   line-height: 4px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.5);
   text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
   cursor: pointer;

   
   &:hover {
   background: #F68657;
   
   }
`

const DivSearch = styled.div`
   display: flex;
   width: 300px;
   height: 60px;
   margin-right: 30px;
   margin-bottom: 10px;

`

const SearchInput = styled.input`
   display: block;
   padding: 15px 20px;
   margin: 20px 0;
   border-radius: 5px;
   box-shadow: rgba(0,0,0,0.9);
`

export default function SearchBar(props) {

   const [character,setCharacter] = useState("");
   const handleInputChange = (event) => {
      const {value} = props.target
      setCharacter(value)
   }

   const {onSearch} = props;
   return (
      <DivSearch>
         <SearchInput type='search' />
         <SearchBtn onChange={handleInputChange} onClick={() => onSearch()}>Agregar</SearchBtn>
      </DivSearch>
   );
}
