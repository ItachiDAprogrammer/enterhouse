import React from 'react'
import Layouts from '../Layouts/Layouts'
import Styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={Styles.container}>
        <h1 className={Styles.hero_header}><span>E</span>nter House Pictures</h1>
        <img className={Styles.img} src="https://i.imgur.com/SduUVGc.png" alt=""/>
        </div>
    )
}

export default Hero
