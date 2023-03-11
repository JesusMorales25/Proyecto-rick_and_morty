import React from "react";
import styles from './Home.module.css'

export default function Home(){
    return <div className={styles.container}>
        <h1 className={styles.title}>Estoy en el Home</h1>
        <p className={styles.parrafo}>Aquí Escribiremos una presentación de la página</p>
    </div>
}