import React from 'react';
import Logo from '../static/img/logo.svg'
import styles from '../static/css/components/intro.scss'
import Nav from './nav'


export default class Intro extends React.Component {
    render() {
        return (
            <div className={styles.intro}>
                <div className="container">
                    <Nav/>
                    <div className="row">
                        <div className={`col-md-5 col-sm-7 col-xs-12 ${styles.centeringHeader}`}>
                            <div className={styles.header}>
                                <Logo />
                                <div className={styles.subHeader}>
                                    KruisCX is a cycling development team focused on introducing more people to the sport of road and
                                    cyclocross racing.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}