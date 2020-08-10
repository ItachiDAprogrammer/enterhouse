import React from 'react'
import './Drawer.css'

const Drawer = props => {
    let classes = 'drawer'
    if (props.show) {
        classes = 'drawer open'
    }
    return (
       <nav className ={classes}>
           <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">somthing</a></li>
              <li><a href="/">another</a></li>
           </ul>
       </nav>
    )
}

export default Drawer
 