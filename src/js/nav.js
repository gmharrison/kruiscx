import React from 'react';
import styles from '../css/sections/nav.scss'
import NavLogo from '../img/nav-logo.svg'


const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navLogo}>
                <NavLogo/>
            </div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav
