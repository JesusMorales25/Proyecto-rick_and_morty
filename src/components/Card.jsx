import styled from 'styled-components'

const DivCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #14213D;
   max-width: 250px;
   overflow: hidden;
   border-radius: 2rem;
   box-shadow: 0px 1rem 1rem rgba(black, 0.5);
   margin: 20px;
   border: 5px solid #14213D;
   
   
   &:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 20px rgba(252, 163, 17,.9);
      transition: transform 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
      color: white;
      
      
    
   }
`
const ButtonX = styled.button`
      font-weight: bold;
      font-size: 15px;
      background-color: #F6B352;
      width: 32px;
      height: 32px;
      border: none;
      padding: 8px 10px 10px 10px;
      margin: 20px;
      
      border-radius: 50%;
      transition: background-color 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

      &:hover {
         background-color: #e63946;
         color:white;
         transform: scale(0.8);
         cursor: pointer;
      }
      
      &:active {
         background-color: #e8a200;
         transform: scale(1);
      }
`

const TextH2 = styled.h2`
   color: #FCA311;
   display: flex;
   justify-content: center;
   text-aling:center;
   font-size: 27px;
   align-items: center;
   padding: 10px 20px;
   margin: 0px;
`
const TextDet = styled.h2`
      display:flex;
      font-size: 18px;
      padding-top: 0 10px;
      margin: 20px; 
      color: #14213D;
`

const DivTextDet = styled.div`
      display: flex;
      justify-content: space-between;
      background-color: #F6B352;
      
`

const ImgP = styled.img`
   display: flex;
   justify-content: center;
   background-color: white;
   box-shadow: 0 0.5rem 1rem rgba(black, 0.3);

   height: 160px;
   width: 160px;
   border-radius: 50%;
   border: 5px solid #FCA311;
   margin: 10%;
   margin-left: 42px;
   box-shadow: 0 10px 50px rgba(0, 0, 0, 0.8);
`

const DivXNombre = styled.div`
      display: flex;
      justify-content: space-around;
`

export default function Card(props) {
   return (
      <DivCard>
         <DivXNombre>
            <TextH2>{props.name}</TextH2>
            <ButtonX onClick={props.onClose}>X</ButtonX>
         </DivXNombre>
         <ImgP src={props.image} alt=""></ImgP>
         
         <DivTextDet>
            <TextDet>{props.species}</TextDet>
            <TextDet>{props.gender}</TextDet>
         </DivTextDet>
         
      </DivCard>
   );
}
