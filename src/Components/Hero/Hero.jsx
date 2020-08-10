import React from 'react'
import Layouts from '../Layouts/Layouts'
import Styles from './Hero.module.scss'

const Hero = () => {
    return (
        <Layouts>
            <div className={Styles.container}>
            <h1 className={Styles.overlay}>Enter House Pictures Presents</h1>
            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2016/10/24/23/11/doors-1767563_960_720.jpg" alt=""/>
            </div>
        </Layouts>
       
    )
}

export default Hero
