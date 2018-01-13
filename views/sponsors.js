import React from 'react';
import styles from '../static/css/components/sponsors.scss'
import Sids from '../static/img/sids.png'
import Ridge from '../static/img/ridgesupply.png'
import Verge from '../static/img/verge.png'
import Coalition from '../static/img/coalition.png'


export default class Sponsors extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            <div className={styles.contentSection}>
                                <h2>Sponsors</h2>
                                <div className={styles.logoContainer}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <img src={Sids} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <img src={Ridge} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <img src={Verge} />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <img src={Coalition} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}