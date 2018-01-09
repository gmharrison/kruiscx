import React from 'react';
import styles from '../static/css/components/sponsors.scss'


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
                                        <div className="col-md-4">
                                            <div className={styles.placeholder} />
                                        </div>
                                        <div className="col-md-4">
                                            <div className={styles.placeholder} />
                                        </div>
                                        <div className="col-md-4">
                                            <div className={styles.placeholder} />
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