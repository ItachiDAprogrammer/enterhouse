import React from 'react'
import Cover from '../Cover/Cover'
import data from '../assets/articles.json'
import styles from './Home.module.scss'
import Layouts from '../Layouts/Layouts'
import Hero from '../Hero/Hero'

const Home = () => {
    const cover = data.map((article,index) =>{
        return(
            
                <Cover key={index}
                    img = {article.imgUrl}
                    title ={article.title}
                    discrb ={article.article}
                />
        )
    })
    
    return (
        <div className={styles.container}>
            <Hero />

            <section>
            <Layouts>
                {cover}
            </Layouts>
            </section>
        </div>
    )
}

export default Home
