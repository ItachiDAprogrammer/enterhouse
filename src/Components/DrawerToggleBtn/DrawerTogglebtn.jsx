import React from 'react'
import Styles from './DrawerTogglebtn.module.css'

const DrawerTogglebtn = props => {
    return (
        <div className= {Styles.toggle_btn} onClick={props.click}>
            <span className = {Styles.toggle_line}></span>
            <span className = {Styles.toggle_line}></span>
            <span className = {Styles.toggle_line}></span>
            
        </div>
    )
}

export default DrawerTogglebtn
