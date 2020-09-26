import React from 'react'
import Style from './MainContent.module.scss'

const MainContent = (props) => {
    return (
        <div className={Style.main_content} >
            <div className={Style.img}>
                <img src={props.img} />
            </div>
            <h3 className={Style.title}>{props.tile}</h3>
            <button href="#" className={Style.btn}>See Story</button>
        </div>
    )
}

export default MainContent
