import React from "react";
import styles from './Home.module.css'

export default function Home(){
    return <div >
        <h1 className={styles.title}>Estoy en el Home</h1>
        <div className={styles.container}>
                <div>
                    <p className={styles.parrafo}>Aquí Escribiremos una presentación de la página</p>
                </div>
                <div>
                    <p>Aqui la imagen</p>
                </div>
                <div>
                    <p>Aqui algo más</p>
                </div>
        </div>
       
    </div>
}