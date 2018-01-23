import React from 'react';
import styles from '../static/css/components/nav.scss'
import NavLogo from '../static/img/nav-logo.svg'

export default class Nav extends React.Component {
    render() {
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
}