import React from 'react'
import styles from './Cover.module.scss'

const Cover = props => {
    return (
        <div className={styles.container}>
            <img className = {styles.img} src={props.img} alt="" />
            <h1 className={styles.header}>{props.title}</h1>
            <p>{props.discrb}</p>
            
        </div>
    )
}

export default Cover
