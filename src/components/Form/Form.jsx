import React, { useState } from "react";
import styles from './Form.module.css';


export default function Form(){

    const validate = (inputs) => {
        const errors = {}

        
    }
    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        userName: '',
        password: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return(
        <form className={styles.container}>
            <div className={styles.box}>
            <input placeholder="Username" className={styles.input} value={userData.userName} name="userName" type="text" onChange={handleChange}/>

            <br/><br/>
            <input placeholder="Password" className={styles.input} value={userData.password} name="password" type="password" onChange={handleChange}/>
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