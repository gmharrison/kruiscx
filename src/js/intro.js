import React from 'react';
import Logo from '../img/logo.svg'
import styles from '../css/sections/intro.scss'
import Nav from './nav'


const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className="container">
                <Nav/>
                <div className="row">
                    <div className={`col-md-5 col-sm-7 col-xs-12 ${styles.centeringHeader}`}>
                        <div className={styles.header}>
                            <Logo />
                            <p className={styles.subHeader}>
                                KruisCX is a cycling development team focused on introducing more people to the sport of road and
                                cyclocross racing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
