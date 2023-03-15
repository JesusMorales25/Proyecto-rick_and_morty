import { Link } from 'react-router-dom'
import styles from "./Card.module.css";

export default function Card({ id, name, species, image, gender, onClose }) {
   return (
      
      <Link to={`/detail/${id}`} className={styles.link}>
         <div className={styles.divCard}>
            <div className={styles.divXNombre}>
               <h2 className={styles.textH2}>{name}</h2>
            <button className={styles.buttonX} onClick={onClose} >X</button>
            </div>
            <img className={styles.imgP} src={image} alt="Not found"/>
            
            <div className={styles.divTextDet}>
               <h2 >{species}</h2>
               <h2 >{gender}</h2>
            </div>
            
         </div>
         </Link>
   );
}
