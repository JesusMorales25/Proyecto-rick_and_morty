import React from "react";
import styles from './Form.module.css';

export default function Form(){
    return(
        <form className={styles.container}>
            <div className={styles.box}>
            <input placeholder="Username" className={styles.input} name="text" type="text"/>
            <br/><br/>
            <input placeholder="Password" className={styles.input} name="text" type="text"/>
            </div>
            
            <br/>
            <button type="button" className={styles.btn}>
                <strong>INGRESAR</strong>
                    <div className={styles.containerStars}>
                        <div className={styles.stars}>
                            
                        </div>
                    </div>

                <div className={styles.glow}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                </div>
            </button>
        </form>
    )
}