import React from 'react'
import Styles from './LayoutGrid.module.scss'


const LayoutGrid = ({children}) => {
    return (
        <div className={Styles.grid}>
            {children}
        </div>
    )
}

export default LayoutGrid
