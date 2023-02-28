import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
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
      </div>
   );
}
