import React from "react";
import styles from './Home.module.css'

export default function Home(){
    return (
        <>
        <div className={styles.imgTitle}></div>          
        <div className={styles.container}>
                <div>
                    <p className={styles.parrafo}>
                    Rick and Morty es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. <br/>La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. 
                    <br/><br/>
                    Rick Sánchez es un ejemplo del típico "científico loco". Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo y con poca cordura. <br/>Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese 
                    momento se encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo.
                    </p>
                </div>
                <div className={styles.imag}></div>
        </div>
        </>
        
    )
}