import { connect } from "react-redux";
import Card from "../Card/Card";
import { Div } from "../assets/styled.Components";
function Favorites({ myFavorites }) {
  return (
    <Div>
      {myFavorites?.map(({ id, name, species, image, gender }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          image={image}
          gender={gender}
        />
      ))}
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
