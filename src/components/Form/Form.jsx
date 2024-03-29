import React, { useState } from "react";
import styles from './Form.module.css';
import {validate} from "./validation"


export default function Form(props){

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

        setErrors(
            validate({
              ...userData,
              [name]: value,
            })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
      };

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.img + " " + styles.giro}></div>
            <div className={styles.box}>
                <input 
                type="text"
                placeholder="Username" 
                //className={styles.input} 
                value={userData.userName} 
                name="userName"
                onChange={handleChange}
                className={(errors.userName && styles.warning) + " " + styles.input}/>
                {errors.userName ? (<p style={{ color: "orange", fontSize: "10px" }}>{errors.userName}</p>) : null}

                <br/><br/>
                <input 
                placeholder="Password" 
                value={userData.password} 
                name="password" 
                type="password" 
                onChange={handleChange}
                className={(errors.password && styles.warning) + " " + styles.input}/>
                {errors.password ? (<p style={{ color: "orange", fontSize: "10px" }}>{errors.password}</p>) : null}
            </div>

            <br/>
            <button type="sumbmit" className={styles.btn}>
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