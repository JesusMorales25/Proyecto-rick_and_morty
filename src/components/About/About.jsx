import styles from './About.module.css'
import React from 'react'

export default function About(){
    return  <div >
    <h1 className={styles.title}>About</h1>
    <div className={styles.container}>
            <div>
                <p>Aqui la imagen</p>
            </div>
            <div>
                <p className={styles.parrafo}>Aquí Escribiremos una descripción mia</p>
            </div>
    </div>
   
</div>
} 