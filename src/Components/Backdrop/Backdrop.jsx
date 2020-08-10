import React from 'react'
import Styles from './Backdrop.module.scss'

const Backdrop = props => {
    return (
        <div className ={Styles.backdrop} onClick={props.click}>
            
        </div>
    )
}

export default Backdrop
