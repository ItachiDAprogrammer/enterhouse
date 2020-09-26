import React from 'react'
import Styles from './Layout.module.scss'
import LayoutGrid from './LayoutGrid'

const Layouts = ({children}) => {
    return (
        <LayoutGrid>
            <div className={Styles.layout}>
            {children}
        </div>
        </LayoutGrid>
        
    )
}

export default Layouts
