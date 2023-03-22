import { Link } from 'react-router-dom'
import styles from "./Card.module.css";
import { addFavorite,deleteFavorite } from '../redux/actions';
import { connect, Connect } from 'react-redux';
import { useState,useEffect } from 'react';

function Card({ id, name, species, image, gender, onClose,deleteFavorite,addFavorite,myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, image, gender, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true)
         }
      })
   },[myFavorites])

   return (
      <div className={styles.container}>
            {isFav ? (
            <button onClick={handleFavorite} className={styles.buttonX}>❤️</button>
         ) : (
            <button onClick={handleFavorite} className={styles.buttonX}>♡</button>
         )}
         {isFav ? null : (
            <button onClick={onClose} className={styles.buttonX}>
               X
            </button>
         )}
         <Link to={`/detail/${id}`} className={styles.link}>
         <div className={styles.divCard}>
            <div className={styles.divXNombre}>
               <h2 className={styles.textH2}>{name}</h2>
            </div>
            <img className={styles.imgP} src={image} alt="Not found"/>
            
            <div className={styles.divTextDet}>
               <h2 >{species}</h2>
               <h2 >{gender}</h2>
            </div>
            
         </div>
         </Link>
      </div>
      
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);