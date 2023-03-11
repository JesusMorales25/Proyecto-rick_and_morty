import Card from './Card/Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: grid;
   grid-template-columns: 310px 310px 310px 310px;
   justify-content: center;
`

export default function Cards(props) {
   const { characters } = props;
   // characters --> [{}], onClose
   return (
     <DivCards>
       {characters.map(({ id, name, species, gender, image }) => (
         <Card
          id={id}
           key={id}
           name={name}
           species={species}
           gender={gender}
           image={image}
           onClose={() => props.onClose(id)}
         />
       ))}
     </DivCards>
   );
 }
