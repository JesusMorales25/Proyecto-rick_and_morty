import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: grid;
   grid-template-columns: 300px 300px 300px;
   grid-gap: 50px;
   justify-content: center;
   align-items: center;
`

export default function Cards(props) {
   const { characters } = props;
   return (
      <DivCards>
         {
           characters.map((personaje) => {
            return <Card key={personaje.id}
               name={personaje.name}
               species={personaje.species}
               gender={personaje.gender}
               image={personaje.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
           })
         }
      </DivCards>
   );
}
