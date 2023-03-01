import styled from 'styled-components'

const DivCard = styled.div`
   background-color: white;
   max-width: 250px;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   border-radius: 2rem;
   box-shadow: 0px 1rem 1.5rem rgba(black, 0.5);
   margin: 15px;
   border: 5px solid #ffd01a;
`

const ButtonX = styled.button`
      color: inherit;
      font: inherit;
      font-weight: bold;
      background-color: #ffd01a;
      width: 100%;
      border: none;
      padding: 1rem;
      outline: none;
      box-sizing: border-box;
      border-radius: 1.5rem / 50%;
      transition: background-color 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
      &:hover {
         background-color: #efb10a;
         transform: scale(1.1);
      }
      
      &:active {
         background-color: #e8a200;
         transform: scale(1);
      }
`

const TextH2 = styled.h2`
   text-align: center;
   padding: 0;
   padding-size: 0.5rem;
   margin: 0;
`



const ImgP = styled.img`
   background-color: white;
   width: dp-size;
   height: dp-size;
   box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
`

export default function Card(props) {
   return (
      <DivCard>
         <ButtonX onClick={props.onClose}>X</ButtonX>
         <TextH2>{props.name}</TextH2>
         <TextH2>{props.species}</TextH2>
         <TextH2>{props.gender}</TextH2>
         <ImgP src={props.image} alt=""></ImgP>
      </DivCard>
   );
}
