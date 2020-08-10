import React from 'react'
import styles from './NavBar.module.css'
import DrawerTogglebtn from '../DrawerToggleBtn/DrawerTogglebtn'

const NavBar = props => {
    return (
      <header>
          <nav className = {styles.nav_bar}>
              <DrawerTogglebtn click={props.drawerHndleClick}/>
              <div className={styles.logo}><a href="/">Enter House</a></div>
              <div className={styles.spacer}></div>
            <div className={styles.nav_elements}>
                <ul>
                    <li>Home</li>
                    <li>Magazine</li>
                    <li>Stuss</li>
                </ul>

            </div>
          </nav>
      </header>
    )
}

export default NavBar
