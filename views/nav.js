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
                    <li>About</li>
                    <li>Team</li>
                    <li>Sponsors</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}