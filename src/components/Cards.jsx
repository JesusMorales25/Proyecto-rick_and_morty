import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: grid;
<<<<<<< HEAD
   grid-template-columns: 300px 300px 300px;
=======
   grid-template-columns: 310px 310px 310px;
>>>>>>> 77713a40f99afdb292bb89aae51983ada1e9c568
   justify-content: center;
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
