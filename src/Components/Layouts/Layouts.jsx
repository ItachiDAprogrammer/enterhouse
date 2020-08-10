import React from 'react'
import Styles from './Layout.module.scss'

const Layouts = ({children}) => {
    return (
        <div className={Styles.layout}>
            {children}
        </div>
    )
}

export default Layouts
