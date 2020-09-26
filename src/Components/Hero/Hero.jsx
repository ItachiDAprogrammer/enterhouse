import React from 'react'
import Layouts from '../Layouts/Layouts'
import Styles from './Hero.module.scss'

const Hero = () => {
    return (
        <Layouts>
            <div className={Styles.container}>
                <h1 className={Styles.hero_header}><span>E</span>nter House Pictures</h1>
                <img className={Styles.img} src="" alt=""/>
            </div>
        </Layouts>
        
    )
}

export default Hero
