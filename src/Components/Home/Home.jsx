import React from 'react'
import styles from './Home.module.scss'
import Layouts from '../Layouts/Layouts'
import Hero from '../Hero/Hero'
import MainContent from '../Main content/MainContent'

const Home = () => {
    
    return (
        <div className={styles.container}>
            <Hero />

            <section>
            <Layouts>
                <MainContent img='https://i.imgur.com/w5YXJXn.jpg'/>
            </Layouts>
            </section>
        </div>
    )
}

export default Home
