import React from 'react';
import styles from '../css/sections/sponsors.scss'
import Sids from '../img/sids.png'
import Ridge from '../img/ridgesupply.png'
import Verge from '../img/verge.png'
import Coalition from '../img/coalition.png'
import Skratch from '../img/skratch.png'


const Sponsors = () => {
    return (
        <div id="sponsors">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <div className={styles.grayTextSection}>
                            <h2>Sponsors</h2>
                            <div className={styles.logoContainer}>
                                <div className={styles.logo}>
                                    <a href="https://www.sidsbikes.com/" target="_blank">
                                        <img src={Sids} />
                                    </a>
                                </div>
                                <div className={styles.logo}>
                                    <a href="https://ridgesupplysocks.com">
                                        <img src={Ridge} />
                                    </a>
                                </div>
                                <div className={styles.logo}>
                                    <a href="https://www.vergesport.com/" target="_blank">
                                        <img src={Verge} />
                                    </a>
                                </div>
                                <div className={styles.logo}>
                                    <a href="https://www.instagram.com/coalitioncyclingclub/" target="_blank">
                                        <img src={Coalition} />
                                    </a>
                                </div>
                                <div className={styles.logo}>
                                    <a href="https://www.skratchlabs.com/" target="_blank">
                                        <img src={Skratch} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
